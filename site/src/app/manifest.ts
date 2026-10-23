import type { MetadataRoute } from "next";
import { getDictionary } from "../i18n/dictionaries";
import { SITE_NAME } from "../lib/seo";

export const dynamic = "force-static";

// One manifest for the whole site, in English (the default language).
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: getDictionary("en").meta.home.description,
    start_url: "/",
    scope: "/",
    display: "browser",
    lang: "en",
    background_color: "#f7f1e9",
    theme_color: "#f7f1e9",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/greecon-mark.svg", sizes: "any", type: "image/svg+xml" }
    ]
  };
}
