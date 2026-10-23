import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { RootDocument } from "../../components/RootDocument";
import { NON_DEFAULT_LOCALES } from "../../i18n/config";
import { sharedViewport, siteMetadata } from "../../i18n/metadata";
import { resolveLocale } from "../../i18n/routing";
import "../globals.css";

type Props = { children: ReactNode; params: Promise<{ lang: string }> };

// Every non-default language is pre-rendered at /<code>/ ; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return NON_DEFAULT_LOCALES.map((lang) => ({ lang }));
}

export const viewport: Viewport = sharedViewport;

export async function generateMetadata({ params }: Pick<Props, "params">): Promise<Metadata> {
  return siteMetadata(await resolveLocale(params));
}

export default async function LocalizedRootLayout({ children, params }: Readonly<Props>) {
  return <RootDocument locale={await resolveLocale(params)}>{children}</RootDocument>;
}
