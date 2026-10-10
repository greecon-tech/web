import type { BlogPost } from "./blog";
import { BLOG_URL, ORG, OG_IMAGE, PAGES, PLATFORM_URL, SITE_NAME, SITE_TAGLINE, SITE_URL, pageUrl, type PageKey } from "./seo";

const abs = (path: string) => `${SITE_URL}${path}`;

export const ids = {
  org: `${SITE_URL}/#organization`,
  site: `${SITE_URL}/#website`,
  platform: `${SITE_URL}/#platform`
} as const;

const area = { "@type": "Country", name: "Albania" };

/** The three business lines. Descriptions reuse the pages' own meta descriptions. */
export const SERVICES = {
  energy: {
    name: "Renewable Energy Systems",
    serviceType: "Solar, hybrid, and agrivoltaic energy systems"
  },
  agriculture: {
    name: "Smart Agriculture Systems",
    serviceType: "IoT-based agriculture monitoring and automation"
  },
  water: {
    name: "Wastewater Treatment and Water Reuse Systems",
    serviceType: "Automated wastewater treatment and water reuse"
  }
} as const;

type ServiceKey = keyof typeof SERVICES;
const serviceKeys = Object.keys(SERVICES) as ServiceKey[];
const serviceId = (key: ServiceKey) => `${pageUrl(key)}#service`;

function organization() {
  return {
    "@type": "Organization",
    "@id": ids.org,
    name: ORG.name,
    legalName: ORG.legalName,
    taxID: ORG.taxId,
    url: SITE_URL + "/",
    slogan: SITE_TAGLINE,
    description: PAGES.home.description,
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
        availableLanguage: "English"
      }
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Greecon systems",
      itemListElement: serviceKeys.map((key) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          "@id": serviceId(key),
          name: SERVICES[key].name,
          url: pageUrl(key)
        }
      }))
    }
  };
}

function website() {
  return {
    "@type": "WebSite",
    "@id": ids.site,
    url: SITE_URL + "/",
    name: SITE_NAME,
    description: SITE_TAGLINE,
    inLanguage: "en",
    publisher: { "@id": ids.org }
  };
}

/** Site-wide graph, rendered once in the root layout. */
export function siteGraph() {
  return { "@context": "https://schema.org", "@graph": [organization(), website()] };
}

/** The Greecon Platform (app.greecon.earth) as a software entity. */
export function platformNode() {
  return {
    "@type": "SoftwareApplication",
    "@id": ids.platform,
    name: "Greecon Platform",
    description:
      "A unified SCADA-based system that connects all devices, sensors, and data into one intelligent dashboard to monitor, automate, and optimize operations in real time.",
    url: PLATFORM_URL,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    screenshot: abs("/platform-screenshot.jpg"),
    publisher: { "@id": ids.org }
  };
}

export function gaiaNode() {
  return {
    "@type": "SoftwareApplication",
    "@id": `${pageUrl("gaia")}#software`,
    name: "GAIA Tech",
    description: PAGES.gaia.description,
    url: pageUrl("gaia"),
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    isPartOf: { "@id": ids.platform },
    publisher: { "@id": ids.org }
  };
}

/** The Greecon Blog, with the articles currently featured on the page. */
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
            ...(post.description ? { description: post.description } : {}),
            ...(post.category ? { articleSection: post.category } : {})
          }))
        }
      : {})
  };
}

function serviceNode(key: ServiceKey) {
  return {
    "@type": "Service",
    "@id": serviceId(key),
    name: SERVICES[key].name,
    serviceType: SERVICES[key].serviceType,
    description: PAGES[key].description,
    url: pageUrl(key),
    provider: { "@id": ids.org },
    areaServed: area,
    image: abs(OG_IMAGE.url)
  };
}

/** The ordered steps shown on the Technology & Process page, as a list. */
export function processList(steps: ReadonlyArray<{ title: string; body: string }>) {
  return {
    "@type": "ItemList",
    "@id": `${pageUrl("technology")}#process`,
    name: "The Greecon process",
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

/** WebPage + breadcrumb (+ page-specific entities) for one page. */
export function pageGraph(key: PageKey, extra: object[] = []) {
  const page = PAGES[key];
  const url = pageUrl(key);
  const isService = key in SERVICES;
  const nodes: object[] = [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en",
      isPartOf: { "@id": ids.site },
      about: { "@id": isService ? serviceId(key as ServiceKey) : ids.org },
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
        { "@type": "ListItem", position: 1, name: PAGES.home.crumb, item: pageUrl("home") },
        { "@type": "ListItem", position: 2, name: page.crumb, item: url }
      ]
    });
  }

  if (isService) nodes.push(serviceNode(key as ServiceKey));
  return { "@context": "https://schema.org", "@graph": [...nodes, ...extra] };
}
