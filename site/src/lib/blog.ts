import { BLOG_URL } from "./seo";

/**
 * Articles from blog.greecon.earth, read at build time from the blog's own public sitemap and the BlogPosting
 * JSON-LD on each article page. Nothing is fetched in the visitor's browser.
 *
 * The site is a static export, so the article lists update when the site is rebuilt. If the blog cannot be
 * reached during a build, the lists come back empty and the pages simply leave the section out.
 */
export type BlogPost = {
  url: string;
  title: string;
  description: string;
  /** Publication date, YYYY-MM-DD. */
  date: string;
  /** The blog's own category: Platform, Energy, Agriculture or Water. */
  category: string;
};

const TIMEOUT_MS = 10_000;
const MAX_ARTICLES = 60;

async function fetchText(url: string): Promise<string> {
  let lastError: unknown;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(TIMEOUT_MS) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return await response.text();
    } catch (error) {
      lastError = error;
    }
  }
  throw new Error(`${url}: ${lastError instanceof Error ? lastError.message : String(lastError)}`);
}

/** Article URLs in the blog sitemap: /blog/<slug> only, not the index, projects, or anything off-site. */
function articleUrls(sitemapXml: string): string[] {
  const prefix = `${BLOG_URL}/blog/`;
  const urls = [...sitemapXml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) => match[1]);
  return urls
    .filter((url) => {
      if (!url.startsWith(prefix)) return false;
      const slug = url.slice(prefix.length).replace(/\/$/, "");
      return slug.length > 0 && !slug.includes("/");
    })
    .slice(0, MAX_ARTICLES);
}

const text = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

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
      return { url, title, description: text(post.description), date, category: text(post.articleSection) };
    } catch {
      // Not valid JSON-LD; try the next block.
    }
  }
  return null;
}

async function loadPosts(): Promise<BlogPost[]> {
  try {
    const urls = articleUrls(await fetchText(`${BLOG_URL}/sitemap.xml`));
    const results = await Promise.allSettled(urls.map(async (url) => parseArticle(url, await fetchText(url))));
    const posts = results.flatMap((result) => (result.status === "fulfilled" && result.value ? [result.value] : []));
    if (posts.length < urls.length) {
      console.warn(`[blog] ${urls.length - posts.length} of ${urls.length} articles could not be read and were skipped`);
    }
    return posts.sort((a, b) => b.date.localeCompare(a.date) || a.url.localeCompare(b.url));
  } catch (error) {
    console.warn("[blog] could not load articles; blog sections will be left out of this build:", error);
    return [];
  }
}

let cache: Promise<BlogPost[]> | undefined;

/** All articles, newest first. Loaded once per build process. */
export function getBlogPosts(): Promise<BlogPost[]> {
  return (cache ??= loadPosts());
}

export async function getLatestPosts(limit: number): Promise<BlogPost[]> {
  return (await getBlogPosts()).slice(0, limit);
}

export async function getPostsByCategory(category: string, limit: number): Promise<BlogPost[]> {
  return (await getBlogPosts()).filter((post) => post.category === category).slice(0, limit);
}

const dateFormat = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export function formatPostDate(date: string): string {
  return dateFormat.format(new Date(`${date}T00:00:00Z`));
}
