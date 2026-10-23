import { DEFAULT_LOCALE, localePath, type Locale } from "../i18n/config";

export const SITE_URL = "https://greecon.earth";
export const SITE_NAME = "Greecon";
export const PLATFORM_URL = "https://app.greecon.earth";
export const BLOG_URL = "https://blog.greecon.earth";

/** Official social profiles. Instagram @greecon, X @greeconHQ, LinkedIn company page /greecon. */
export const SOCIAL = {
  instagram: "https://instagram.com/greecon",
  x: "https://x.com/greeconHQ",
  linkedin: "https://linkedin.com/company/greecon"
} as const;

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
    SOCIAL.linkedin,
    SOCIAL.instagram,
    SOCIAL.x,
    BLOG_URL,
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
  /** Path with the trailing slash the static export serves (language-neutral; see localePath). */
  path: string;
  /** Last meaningful content change (YYYY-MM-DD). Bump it when the page's content changes. */
  lastModified: string;
  /** CSS selectors for the passages best suited to being read aloud by assistants. */
  speakable?: string[];
};

/** Language-neutral page facts. Titles, descriptions and all other text live in src/i18n/dictionaries. */
export const PAGES: Record<PageKey, PageConfig> = {
  home: { path: "/", lastModified: "2026-10-10", speakable: [".hero p"] },
  technology: { path: "/technology/", lastModified: "2026-10-09", speakable: [".tech-intro p"] },
  energy: { path: "/energy/", lastModified: "2026-10-09", speakable: ["h1", ".detail-lede p"] },
  agriculture: { path: "/agriculture/", lastModified: "2026-10-09", speakable: ["h1", ".detail-lede p"] },
  water: { path: "/water/", lastModified: "2026-10-09", speakable: ["h1", ".detail-lede p"] },
  gaia: { path: "/gaia/", lastModified: "2026-08-28", speakable: [".detail-lede p"] },
  terms: { path: "/terms/", lastModified: "2026-10-10" },
  privacy: { path: "/privacy/", lastModified: "2026-10-10" }
};

export const PAGE_KEYS = Object.keys(PAGES) as PageKey[];

/** Absolute URL of a page in a language (English by default). */
export const pageUrl = (key: PageKey, locale: Locale = DEFAULT_LOCALE) =>
  `${SITE_URL}${localePath(locale, PAGES[key].path)}`;
