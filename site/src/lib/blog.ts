import { DEFAULT_LOCALE, type Locale } from "../i18n/config";
import { BLOG_URL } from "./seo";

/**
 * Articles from blog.greecon.earth, read at build time from the blog's own public sitemap and the BlogPosting
 * JSON-LD on each article page. Nothing is fetched in the visitor's browser.
 *
 * The blog is multilingual: English lives at the root (blog.greecon.earth/blog/<slug>) and every other language
 * under its code (blog.greecon.earth/sq/blog/<slug>). A page in a language shows the blog's articles in that
 * language and links into that language's blog, but only if the blog really serves it. If it does not (yet), or
 * the blog cannot be reached, the page falls back to the English blog, so a link can never lead to a 404.
 *
 * The site is a static export, so all of this is decided when the site is built: after the blog adds or publishes
 * a language, redeploy the site.
 */
export type BlogPost = {
  url: string;
  title: string;
  description: string;
  /** Publication date, YYYY-MM-DD. */
  date: string;
  /** The blog's own category identifier (always English): Platform, Energy, Agriculture or Water. */
  category: string;
  /** Language of the article text (BlogPosting `inLanguage`), e.g. "en" or "sq". */
  lang: string;
};

const TIMEOUT_MS = 10_000;
const MAX_ARTICLES = 60;

/**
 * Every request carries a parameter unique to this build. The blog's pages can be cached for a long time at its edge,
 * and a build cache can keep earlier responses keyed by URL; a stale answer here would make the site miss a language
 * the blog has just published. (Do not use `cache: "no-store"` instead: it makes the static export refuse the page.)
 */
const BUILD_ID = Date.now();

async function fetchText(url: string): Promise<string> {
  const fresh = `${url}${url.includes("?") ? "&" : "?"}build=${BUILD_ID}`;
  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetch(fresh, { signal: AbortSignal.timeout(TIMEOUT_MS) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
    }
  }
  throw new Error(`${url}: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
}

const text = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

/** Root of the blog in a language: "https://blog.greecon.earth" for English, ".../sq" for Albanian. */
const rootFor = (locale: Locale) => (locale === DEFAULT_LOCALE ? BLOG_URL : `${BLOG_URL}/${locale}`);

/** Every URL in the blog's sitemap, or null if it could not be read. Loaded once per build process. */
let sitemapCache: Promise<string[] | null> | undefined;
function getSitemapUrls(): Promise<string[] | null> {
  return (sitemapCache ??= (async () => {
    try {
      const xml = await fetchText(`${BLOG_URL}/sitemap.xml`);
      return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) => match[1]);
    } catch (error) {
      console.warn("[blog] could not read the blog sitemap; using the English blog:", error);
      return null;
    }
  })());
}

/** Does the blog serve this language? True once it lists at least one URL under /<code>/. */
async function blogServes(locale: Locale): Promise<boolean> {
  if (locale === DEFAULT_LOCALE) return true;
  const urls = await getSitemapUrls();
  if (!urls) return false;
  const root = rootFor(locale);
  return urls.some((url) => url === root || url.startsWith(`${root}/`));
}

/** The blog's root URL for pages in this language (no trailing slash). Falls back to the English blog. */
export async function getBlogBase(locale: Locale): Promise<string> {
  return (await blogServes(locale)) ? rootFor(locale) : BLOG_URL;
}

/** The language whose blog a page in `locale` actually reads from (itself, or English as a fallback). */
async function effectiveLocale(locale: Locale): Promise<Locale> {
  return (await blogServes(locale)) ? locale : DEFAULT_LOCALE;
}

/** Article URLs of one language: <root>/blog/<slug> only, not the index, projects, or anything off-site. */
function articleUrls(urls: string[], locale: Locale): string[] {
  const prefix = `${rootFor(locale)}/blog/`;
  return urls
    .filter((url) => {
      if (!url.startsWith(prefix)) return false;
      const slug = url.slice(prefix.length).replace(/\/$/, "");
      return slug.length > 0 && !slug.includes("/");
    })
    .slice(0, MAX_ARTICLES);
}

function parseArticle(url: string, html: string): BlogPost | null {
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      const data = JSON.parse(match[1]);
      const nodes: unknown[] = Array.isArray(data) ? data : (data?.["@graph"] ?? [data]);
      const post = nodes.find((node) => (node as { "@type"?: unknown } | null)?.["@type"] === "BlogPosting") as
        | Record<string, unknown>
        | undefined;
      if (!post) continue;
      const title = text(post.headline);
      const date = text(post.datePublished).slice(0, 10);
      if (!title || !/^\d{4}-\d{2}-\d{2}$/.test(date)) continue;
      return {
        url,
        title,
        description: text(post.description),
        date,
        category: text(post.articleSection),
        lang: text(post.inLanguage) || "en"
      };
    } catch {
      // Not valid JSON-LD; try the next block.
    }
  }
  return null;
}

const postsCache = new Map<Locale, Promise<BlogPost[]>>();

async function loadPosts(locale: Locale): Promise<BlogPost[]> {
  try {
    const sitemap = await getSitemapUrls();
    if (!sitemap) throw new Error("blog sitemap unavailable");
    const urls = articleUrls(sitemap, locale);
    const results = await Promise.allSettled(urls.map(async (url) => parseArticle(url, await fetchText(url))));
    const posts = results.flatMap((result) => (result.status === "fulfilled" && result.value ? [result.value] : []));
    if (posts.length < urls.length) {
      console.warn(`[blog] ${urls.length - posts.length} of ${urls.length} ${locale} articles could not be read and were skipped`);
    }
    return posts.sort((a, b) => b.date.localeCompare(a.date) || a.url.localeCompare(b.url));
  } catch (error) {
    console.warn(`[blog] could not load ${locale} articles; blog sections will be left out of this build:`, error);
    return [];
  }
}

/** All articles for a page in `locale`, newest first: in that language when the blog has it, else in English. */
export async function getBlogPosts(locale: Locale): Promise<BlogPost[]> {
  const source = await effectiveLocale(locale);
  let promise = postsCache.get(source);
  if (!promise) {
    promise = loadPosts(source);
    postsCache.set(source, promise);
  }
  return promise;
}

export async function getLatestPosts(locale: Locale, limit: number): Promise<BlogPost[]> {
  return (await getBlogPosts(locale)).slice(0, limit);
}

export async function getPostsByCategory(locale: Locale, category: string, limit: number): Promise<BlogPost[]> {
  return (await getBlogPosts(locale)).filter((post) => post.category === category).slice(0, limit);
}
