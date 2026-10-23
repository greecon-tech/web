import type { ReactNode } from "react";
import { LOCALE_INFO, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { getBlogBase } from "../lib/blog";
import { plexSerif } from "../lib/fonts";
import { siteGraph } from "../lib/schema";
import { JsonLd } from "./JsonLd";
import { SiteHeader } from "./SiteHeader";

/** The <html> document shared by every language's root layout. */
export async function RootDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = getDictionary(locale);
  const blogHref = await getBlogBase(locale);
  return (
    <html lang={LOCALE_INFO[locale].htmlLang} className={plexSerif.variable}>
      <body>
        <JsonLd data={siteGraph(locale)} />
        <SiteHeader locale={locale} labels={t.header} blogHref={blogHref} />
        {children}
      </body>
    </html>
  );
}
