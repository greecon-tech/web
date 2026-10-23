import { LOCALES, LOCALE_INFO, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import type { BlogPost } from "./blog";
import { BLOG_URL, ORG, OG_IMAGE, PAGES, PLATFORM_URL, SITE_URL, pageUrl, type PageKey } from "./seo";

const abs = (path: string) => `${SITE_URL}${path}`;

export const ids = {
  org: `${SITE_URL}/#organization`,
  site: `${SITE_URL}/#website`,
  platform: `${SITE_URL}/#platform`
} as const;

const area = { "@type": "Country", name: "Albania" };

type ServiceKey = "energy" | "agriculture" | "water";
const serviceKeys: ServiceKey[] = ["energy", "agriculture", "water"];
const serviceId = (key: ServiceKey, locale: Locale) => `${pageUrl(key, locale)}#service`;

function organization(locale: Locale) {
  const t = getDictionary(locale);
  return {
    "@type": "Organization",
    "@id": ids.org,
    name: ORG.name,
    legalName: ORG.legalName,
    taxID: ORG.taxId,
    url: SITE_URL + "/",
    slogan: t.site.tagline,
    description: t.meta.home.description,
    logo: { "@type": "ImageObject", url: abs("/greecon-mark.svg"), caption: "Greecon logo" },
    image: abs(OG_IMAGE.url),
    email: ORG.email,
    telephone: ORG.telephone,
    address: { "@type": "PostalAddress", ...ORG.address },
    areaServed: area,
    sameAs: ORG.sameAs,
    knowsAbout: [
      "Renewable energy",
      "Solar photovoltaic systems",
      "Agrivoltaics",
      "Battery energy storage",
      "Smart agriculture",
      "IoT sensors",
      "SCADA",
      "Water management",
      "Wastewater treatment and reuse",
      "Industrial automation"
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: ORG.email,
        telephone: ORG.telephone,
        availableLanguage: ["English", "Albanian"]
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Greecon systems",
      itemListElement: serviceKeys.map((key) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": serviceId(key, locale),
          name: t.site.services[key].name,
          url: pageUrl(key, locale)
        }
      }))
    }
  };
}

function website(locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": ids.site,
    url: SITE_URL + "/",
    name: ORG.name,
    description: getDictionary(locale).site.tagline,
    inLanguage: LOCALES.map((code) => LOCALE_INFO[code].htmlLang),
    publisher: { "@id": ids.org }
  };
}

/** Site-wide graph, rendered once in each root layout. */
export function siteGraph(locale: Locale) {
  return { "@context": "https://schema.org", "@graph": [organization(locale), website(locale)] };
}

/** The Greecon Platform (app.greecon.earth) as a software entity. */
export function platformNode(locale: Locale) {
  return {
    "@type": "SoftwareApplication",
    "@id": ids.platform,
    name: "Greecon Platform",
    description: getDictionary(locale).site.platformDescription,
    url: PLATFORM_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    screenshot: abs("/platform-screenshot.jpg"),
    publisher: { "@id": ids.org }
  };
}

export function gaiaNode(locale: Locale) {
  return {
    "@type": "SoftwareApplication",
    "@id": `${pageUrl("gaia", locale)}#software`,
    name: "GAIA Tech",
    description: getDictionary(locale).meta.gaia.description,
    url: pageUrl("gaia", locale),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    isPartOf: { "@id": ids.platform },
    publisher: { "@id": ids.org }
  };
}

/** The Greecon Blog, with the articles currently featured on the page. The blog is published in English. */
export function blogNode(posts: ReadonlyArray<BlogPost>) {
  return {
    "@type": "Blog",
    "@id": `${BLOG_URL}/#blog`,
    name: "Greecon Blog",
    url: `${BLOG_URL}/`,
    description:
      "Stories, insights, and projects from Greecon — renewable energy, smart agriculture, and water management powered by IoT and SCADA.",
    inLanguage: "en",
    publisher: { "@id": ids.org },
    ...(posts.length
      ? {
          blogPost: posts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            url: post.url,
            datePublished: post.date,
            inLanguage: "en",
            ...(post.description ? { description: post.description } : {}),
            ...(post.category ? { articleSection: post.category } : {})
          }))
        }
      : {})
  };
}

function serviceNode(key: ServiceKey, locale: Locale) {
  const t = getDictionary(locale);
  return {
    "@type": "Service",
    "@id": serviceId(key, locale),
    name: t.site.services[key].name,
    serviceType: t.site.services[key].serviceType,
    description: t.meta[key].description,
    url: pageUrl(key, locale),
    provider: { "@id": ids.org },
    areaServed: area,
    image: abs(OG_IMAGE.url)
  };
}

/** The ordered steps shown on the Technology & Process page, as a list. */
export function processList(locale: Locale) {
  const t = getDictionary(locale);
  const steps = t.technology.steps;
  return {
    "@type": "ItemList",
    "@id": `${pageUrl("technology", locale)}#process`,
    name: t.site.processName,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: steps.length,
    itemListElement: steps.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.title,
      description: step.body
    }))
  };
}

/** WebPage + breadcrumb (+ page-specific entities) for one page in one language. */
export function pageGraph(key: PageKey, locale: Locale, extra: object[] = []) {
  const t = getDictionary(locale);
  const page = PAGES[key];
  const meta = t.meta[key];
  const url = pageUrl(key, locale);
  const isService = key === "energy" || key === "agriculture" || key === "water";
  const nodes: object[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: meta.title,
      description: meta.description,
      inLanguage: LOCALE_INFO[locale].htmlLang,
      isPartOf: { "@id": ids.site },
      about: { "@id": isService ? serviceId(key, locale) : ids.org },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: abs(OG_IMAGE.url),
        width: OG_IMAGE.width,
        height: OG_IMAGE.height
      },
      dateModified: page.lastModified,
      ...(key === "home" ? {} : { breadcrumb: { "@id": `${url}#breadcrumb` } }),
      ...(page.speakable ? { speakable: { "@type": "SpeakableSpecification", cssSelector: page.speakable } } : {})
    }
  ];

  if (key !== "home") {
    nodes.push({
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: t.meta.home.crumb, item: pageUrl("home", locale) },
        { "@type": "ListItem", position: 2, name: meta.crumb, item: url }
      ]
    });
  }

  if (isService) nodes.push(serviceNode(key, locale));
  return { "@context": "https://schema.org", "@graph": [...nodes, ...extra] };
}
