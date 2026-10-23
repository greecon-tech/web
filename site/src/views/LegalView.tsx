import { Fragment } from "react";
import { SiteFooter } from "../components/Contact";
import { JsonLd } from "../components/JsonLd";
import type { Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { makeLink } from "../i18n/links";
import { pageGraph } from "../lib/schema";

export type LegalPageKey = "terms" | "privacy";

/** The Terms of Service and the Privacy Notice. */
export function LegalView({ locale, page }: { locale: Locale; page: LegalPageKey }) {
  const content = getDictionary(locale)[page](makeLink(locale));

  return (
    <main className="detail-page">
      <JsonLd data={pageGraph(page, locale)} />
      <div className="legal-page wrap">
        <h1>{content.title}</h1>
        <p className="legal-updated">{content.updated}</p>

        {content.intro.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}

        {content.sections.map((section) => (
          <Fragment key={section.title}>
            <h2>{section.title}</h2>
            {section.body}
          </Fragment>
        ))}
      </div>
      <SiteFooter locale={locale} page={page} />
    </main>
  );
}
