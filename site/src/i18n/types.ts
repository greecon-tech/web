import type { ReactNode } from "react";
import type { PageKey } from "../lib/seo";

/** Renders a link to another page of the site in the current language. */
export type LinkFn = (page: PageKey, label: ReactNode) => ReactNode;

export type PageMeta = {
  /** <title>, roughly 60 characters. */
  title: string;
  /** Meta description, roughly 155 characters. */
  description: string;
  /** Social-card title; defaults to `title`. */
  ogTitle?: string;
  /** Breadcrumb label. */
  crumb: string;
};

export type PhilosophyContent = { title: string; lines: ReactNode[] };

export type DetailPageContent = {
  title: string;
  subtitle: string;
  intro: string;
  sections: { title: string; body: ReactNode }[];
  philosophy: PhilosophyContent;
};

export type LegalContent = {
  title: string;
  updated: string;
  intro: ReactNode[];
  sections: { title: string; body: ReactNode }[];
};

export interface Dictionary {
  meta: Record<PageKey, PageMeta>;

  site: {
    tagline: string;
    keywords: string[];
    platformDescription: string;
    processName: string;
    services: Record<"energy" | "agriculture" | "water", { name: string; serviceType: string }>;
  };

  header: {
    menu: string;
    close: string;
    goHome: string;
    mainNav: string;
    platformCta: string;
    call: string;
    email: string;
    blog: string;
    links: Record<"home" | "energy" | "agriculture" | "water" | "technology" | "gaia", string>;
    /** Accessible name for the language switcher, e.g. "Language". */
    language: string;
  };

  footer: {
    explore: string;
    legal: string;
    follow: string;
    language: string;
    terms: string;
    privacy: string;
    blog: string;
    socialLabel: string;
    rights: string;
    links: Record<"energy" | "agriculture" | "water" | "technology" | "gaia", string>;
  };

  contact: {
    heading: string;
    tagline: string;
    copy: string;
    email: string;
    phone: string;
    location: string;
    locationValue: string;
  };

  blog: {
    /** What the blog calls itself, and its description, for structured data. */
    siteName: string;
    description: string;
    heading: string;
    allArticles: string;
    readArticle: string;
    /** Shown when the articles are in a different language from the page. */
    englishOnly: string;
    categories: Record<string, string>;
    moreOn: Record<"energy" | "agriculture" | "water" | "platform" | "technology", string>;
  };

  alt: { gaiaMark: string; platformScreenshot: string; platformDiagram: string };
  aria: { openPlatform: string; backHome: string; greeconHome: string; mainSections: string };

  home: {
    hero: ReactNode[];
    cards: Record<"energy" | "agriculture" | "water", { title: string; text: string }>;
    platform: { heading: string; body: ReactNode; open: string; seeTechnology: string };
    impact: { heading: string; text: string };
    partnerships: { heading: string; text: string };
    future: { heading: string; text: string };
  };

  technology: {
    title: string;
    intro: string;
    open: string;
    steps: { title: string; body: string; emphasis?: string }[];
    philosophy: PhilosophyContent;
    poweredBy: string;
  };

  energy: DetailPageContent;
  agriculture: DetailPageContent;
  water: DetailPageContent;

  gaia: { lede: string; paragraphs: ReactNode[] };

  terms: (ln: LinkFn) => LegalContent;
  privacy: (ln: LinkFn) => LegalContent;
}
