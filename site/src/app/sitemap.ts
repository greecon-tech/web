import type { MetadataRoute } from "next";
import { PAGES, SITE_URL, pageUrl, type PageKey } from "../lib/seo";

export const dynamic = "force-static";

// Fixed, per-page dates (see PAGES in lib/seo.ts) — a build-time `new Date()` would claim every page changed
// on every deploy, which search engines learn to ignore.
export default function sitemap(): MetadataRoute.Sitemap {
  return (Object.keys(PAGES) as PageKey[]).map((key) => ({
    url: pageUrl(key),
    lastModified: PAGES[key].lastModified,
    ...(key === "home"
      ? { images: [`${SITE_URL}/og-image.png`, `${SITE_URL}/platform-screenshot.jpg`] }
      : {})
  }));
}
