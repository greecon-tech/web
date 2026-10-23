import type { Metadata, Viewport } from "next";
import { OG_IMAGE, SITE_NAME, SITE_URL, pageUrl, type PageKey } from "../lib/seo";
import { DEFAULT_LOCALE, LOCALES, LOCALE_INFO, type Locale } from "./config";
import { getDictionary } from "./dictionaries";

export const sharedViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f1e9"
};

/** hreflang alternates for a page: every language plus x-default (English). */
export function languageAlternates(key: PageKey): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) languages[LOCALE_INFO[locale].htmlLang] = pageUrl(key, locale);
  languages["x-default"] = pageUrl(key, DEFAULT_LOCALE);
  return languages;
}

const otherOgLocales = (locale: Locale) => LOCALES.filter((code) => code !== locale).map((code) => LOCALE_INFO[code].ogLocale);

/** Per-page metadata: canonical URL, hreflang alternates, and matching Open Graph and Twitter cards. */
export function pageMetadata(key: PageKey, locale: Locale): Metadata {
  const meta = getDictionary(locale).meta[key];
  const socialTitle = meta.ogTitle ?? meta.title;
  const url = pageUrl(key, locale);
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url, languages: languageAlternates(key) },
    openGraph: {
      type: "website",
      url,
      siteName: SITE_NAME,
      locale: LOCALE_INFO[locale].ogLocale,
      alternateLocale: otherOgLocales(locale),
      title: socialTitle,
      description: meta.description,
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: meta.description,
      images: [OG_IMAGE.url]
    }
  };
}

/** Site-wide defaults for a language; each page overrides title, description, canonical and social cards. */
export function siteMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale);
  const home = t.meta.home;
  const socialTitle = home.ogTitle ?? home.title;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: home.title, template: "%s" },
    description: home.description,
    applicationName: SITE_NAME,
    keywords: t.site.keywords,
    authors: [{ name: "Greecon Sh.p.k.", url: SITE_URL }],
    creator: "Greecon Sh.p.k.",
    publisher: "Greecon Sh.p.k.",
    category: "technology",
    manifest: "/manifest.webmanifest",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/greecon-mark.svg", type: "image/svg+xml" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" }
      ],
      shortcut: "/greecon-mark.svg",
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
    },
    openGraph: {
      type: "website",
      title: socialTitle,
      description: home.description,
      siteName: SITE_NAME,
      url: pageUrl("home", locale),
      locale: LOCALE_INFO[locale].ogLocale,
      alternateLocale: otherOgLocales(locale),
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: home.description,
      images: [OG_IMAGE.url]
    }
  };
}
