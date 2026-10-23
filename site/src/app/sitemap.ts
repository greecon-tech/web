import type { MetadataRoute } from "next";
import { LOCALES, LOCALE_INFO } from "../i18n/config";
import { SITE_URL, PAGE_KEYS, PAGES, pageUrl } from "../lib/seo";

export const dynamic = "force-static";

// Fixed, per-page dates (see PAGES in lib/seo.ts) — a build-time `new Date()` would claim every page changed
// on every deploy, which search engines learn to ignore. Each language has its own URL entry, and every entry
// lists all language versions (hreflang), including x-default.
export default function sitemap(): MetadataRoute.Sitemap {
  return PAGE_KEYS.flatMap((key) => {
    const languages: Record<string, string> = Object.fromEntries(
      LOCALES.map((locale) => [LOCALE_INFO[locale].htmlLang, pageUrl(key, locale)])
    );
    languages["x-default"] = pageUrl(key);
    return LOCALES.map((locale) => ({
      url: pageUrl(key, locale),
      lastModified: PAGES[key].lastModified,
      alternates: { languages },
      ...(key === "home"
        ? { images: [`${SITE_URL}/og-image.png`, `${SITE_URL}/platform-screenshot.jpg`] }
        : {})
    }));
  });
}
