import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "/technology", "/agriculture", "/energy", "/water", "/gaia", "/terms", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://greecon.earth";
  return routes.map((route) => ({
    url: `${base}${route}/`.replace(/\/{2,}$/, "/"),
    lastModified: new Date()
  }));
}
