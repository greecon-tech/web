import type { Metadata } from "next";

export const SITE_URL = "https://greecon.earth";
export const SITE_NAME = "Greecon";
export const SITE_TAGLINE = "Building Enduring Intelligence for Energy, Water, and Agriculture";
export const PLATFORM_URL = "https://app.greecon.earth";

export const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "Greecon" };

/** Company facts, taken from the Contact section and the Terms / Privacy pages. */
export const ORG = {
  name: "Greecon",
  legalName: "Greecon Sh.p.k.",
  taxId: "M61525505A",
  email: "info@greecon.earth",
  telephone: "+355694443362",
  telephoneDisplay: "+355 69 444 3362",
  address: {
    streetAddress: "Durana Tech Park, Rruga Ahmet Zogu, Xhafzotaj",
    addressLocality: "Shijak",
    addressRegion: "Durrës",
    postalCode: "2013",
    addressCountry: "AL"
  },
  sameAs: [
    "https://linkedin.com/company/greecon",
    "https://instagram.com/greecon.earth",
    "https://blog.greecon.earth",
    PLATFORM_URL
  ]
} as const;

export type PageKey =
  | "home"
  | "technology"
  | "energy"
  | "agriculture"
  | "water"
  | "gaia"
  | "terms"
  | "privacy";

type PageConfig = {
  /** Path with the trailing slash the static export serves. */
  path: string;
  /** <title> — keep to roughly 60 characters. */
  title: string;
  /** Meta description — keep to roughly 155 characters. */
  description: string;
  /** Social-card title; defaults to `title`. */
  ogTitle?: string;
  /** Breadcrumb label. */
  crumb: string;
  /** Last meaningful content change (YYYY-MM-DD). Bump it when the page's content changes. */
  lastModified: string;
  /** CSS selectors for the passages best suited to being read aloud by assistants. */
  speakable?: string[];
};

export const PAGES: Record<PageKey, PageConfig> = {
  home: {
    path: "/",
    title: "Greecon — Renewable Energy, Smart Agriculture & Water Systems",
    ogTitle: `Greecon — ${SITE_TAGLINE}`,
    description:
      "Greecon unites renewable energy, smart agriculture, and water management in one IoT and SCADA-powered platform. Based in Shijak, Albania.",
    crumb: "Home",
    lastModified: "2026-10-10",
    speakable: [".hero p"]
  },
  technology: {
    path: "/technology/",
    title: "Technology & Process — IoT and SCADA Platform | Greecon",
    description:
      "How Greecon deploys smart systems, connects them through IoT, analyzes live data in one SCADA platform, and automates energy, agriculture, and water operations.",
    crumb: "Technology & Process",
    lastModified: "2026-10-09",
    speakable: [".tech-intro p"]
  },
  energy: {
    path: "/energy/",
    title: "Renewable Energy Systems: Solar & Agrivoltaics | Greecon",
    description:
      "Greecon designs and delivers solar, hybrid, and agrivoltaic energy systems with battery storage — connected, monitored, and optimized in real time.",
    crumb: "Energy",
    lastModified: "2026-10-09",
    speakable: ["h1", ".detail-lede p"]
  },
  agriculture: {
    path: "/agriculture/",
    title: "Smart Agriculture Systems with IoT Sensors | Greecon",
    description:
      "Greecon's smart agriculture systems use IoT sensors to monitor soil, water, and weather conditions for a new generation of connected, efficient farms.",
    crumb: "Agriculture",
    lastModified: "2026-10-09",
    speakable: ["h1", ".detail-lede p"]
  },
  water: {
    path: "/water/",
    title: "Wastewater Treatment & Water Reuse Automation | Greecon",
    description:
      "Greecon designs automated systems for wastewater treatment and water reuse, helping cities and industries recycle water and cut their environmental footprint.",
    crumb: "Water",
    lastModified: "2026-10-09",
    speakable: ["h1", ".detail-lede p"]
  },
  gaia: {
    path: "/gaia/",
    title: "GAIA Tech — The Intelligence Inside the Greecon Platform",
    description:
      "GAIA Tech is the proprietary intelligence inside the Greecon Platform — the core system that turns connected infrastructure into one coordinated ecosystem.",
    crumb: "GAIA Tech",
    lastModified: "2026-08-28",
    speakable: [".detail-lede p"]
  },
  terms: {
    path: "/terms/",
    title: "Terms of Service — Greecon",
    description: "The terms that govern use of the Greecon website and the information published on it.",
    crumb: "Terms of Service",
    lastModified: "2026-10-10"
  },
  privacy: {
    path: "/privacy/",
    title: "Privacy Notice — Greecon",
    description: "How Greecon collects, uses, and protects personal data on greecon.earth.",
    crumb: "Privacy Notice",
    lastModified: "2026-10-10"
  }
};

export const pageUrl = (key: PageKey) => `${SITE_URL}${PAGES[key].path}`;

/** Per-page metadata: canonical URL plus matching Open Graph and Twitter cards. */
export function pageMetadata(key: PageKey): Metadata {
  const page = PAGES[key];
  const socialTitle = page.ogTitle ?? page.title;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path },
    openGraph: {
      type: "website",
      url: page.path,
      siteName: SITE_NAME,
      locale: "en_US",
      title: socialTitle,
      description: page.description,
      images: [OG_IMAGE]
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: page.description,
      images: [OG_IMAGE.url]
    }
  };
}
