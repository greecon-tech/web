import type { Metadata, Viewport } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";
import { JsonLd } from "../components/JsonLd";
import { SiteHeader } from "../components/SiteHeader";
import { siteGraph } from "../lib/schema";
import { OG_IMAGE, PAGES, SITE_NAME, SITE_URL } from "../lib/seo";

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-plex-serif",
  display: "swap"
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f7f1e9"
};

const socialTitle = PAGES.home.ogTitle ?? PAGES.home.title;

/** Site-wide defaults; each page overrides title, description, canonical and social cards via pageMetadata(). */
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGES.home.title,
    template: "%s"
  },
  description: PAGES.home.description,
  applicationName: SITE_NAME,
  keywords: [
    "Greecon",
    "renewable energy Albania",
    "smart agriculture",
    "water management",
    "wastewater treatment and reuse",
    "GAIA Tech",
    "SCADA platform",
    "agrivoltaics",
    "IoT sustainability"
  ],
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
    description: PAGES.home.description,
    siteName: SITE_NAME,
    url: "/",
    locale: "en_US",
    images: [OG_IMAGE]
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: PAGES.home.description,
    images: [OG_IMAGE.url]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plexSerif.variable}>
      <body>
        <JsonLd data={siteGraph()} />
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
