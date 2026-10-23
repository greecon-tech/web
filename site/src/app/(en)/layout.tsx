import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { RootDocument } from "../../components/RootDocument";
import { sharedViewport, siteMetadata } from "../../i18n/metadata";
import "../globals.css";

// English is the default language and lives at the site root (no /en prefix).
export const metadata: Metadata = siteMetadata("en");
export const viewport: Viewport = sharedViewport;

export default function EnglishRootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <RootDocument locale="en">{children}</RootDocument>;
}
