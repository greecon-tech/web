import type { Metadata } from "next";
import { IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-plex-serif",
  display: "swap"
});

const title = "Greecon — Building Enduring Intelligence for Energy, Water, and Agriculture";
const description = "Building enduring intelligence for energy, water, and agriculture.";

export const metadata: Metadata = {
  metadataBase: new URL("https://greecon.earth"),
  title: {
    default: title,
    template: "%s"
  },
  description,
  applicationName: "Greecon",
  keywords: [
    "Greecon",
    "renewable energy Albania",
    "smart agriculture",
    "water management",
    "GAIA Tech",
    "SCADA platform",
    "agrivoltaics",
    "IoT sustainability"
  ],
  authors: [{ name: "Greecon Sh.p.k." }],
  icons: {
    icon: "/greecon-mark.svg",
    shortcut: "/greecon-mark.svg"
  },
  openGraph: {
    type: "website",
    title,
    description,
    siteName: "Greecon",
    url: "https://greecon.earth",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Greecon" }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.png"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plexSerif.variable}>
      <body>{children}</body>
    </html>
  );
}
