import { Contact, SiteFooter } from "../components/Contact";
import { BlogCta, ReturnMark } from "../components/DetailPage";
import { GaiaMark } from "../components/icons";
import { JsonLd } from "../components/JsonLd";
import type { Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { gaiaNode, pageGraph } from "../lib/schema";

export function GaiaView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);

  return (
    <main className="detail-page">
      <JsonLd data={pageGraph("gaia", locale, [gaiaNode(locale)])} />

      <header className="gaia-hero">
        <div className="gaia-hero__mark">
          <GaiaMark size={100} className="gaia-hero__icon" alt={t.alt.gaiaMark} />
          <h1 className="gaia-hero__wordmark">
            <span>GAIA</span>
            <small>TECH</small>
          </h1>
        </div>
        <div className="detail-lede">
          <p>{t.gaia.lede}</p>
        </div>
      </header>

      <div className="gaia-body wrap">
        {t.gaia.paragraphs.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      <BlogCta locale={locale} sector="platform" text="platform" />

      <ReturnMark locale={locale} />

      <Contact email="info@greecon.earth" locale={locale} />
      <SiteFooter locale={locale} page="gaia" />
    </main>
  );
}
