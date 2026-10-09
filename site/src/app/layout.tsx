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

const title = "Greecon — Nature and Technology in Harmony";
const description =
  "Greecon brings together renewable energy, smart agriculture, and water management into one intelligent ecosystem powered by IoT and SCADA technology.";

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
    images: [{ url: "/greecon-mark.svg" }]
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/greecon-mark.svg"]
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={plexSerif.variable}>
      <body>{children}</body>
    </html>
  );
}
