import Link from "next/link";
import { BlogTeaser } from "../components/BlogTeaser";
import { Contact, SiteFooter } from "../components/Contact";
import { BlogCta, Philosophy } from "../components/DetailPage";
import { JsonLd } from "../components/JsonLd";
import { ProcessDiagram } from "../components/ProcessDiagram";
import { localePath, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { getPostsByCategory } from "../lib/blog";
import { pageGraph, platformNode, processList } from "../lib/schema";
import { PAGES, PLATFORM_URL } from "../lib/seo";

export async function TechnologyView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const c = t.technology;
  const relatedPosts = await getPostsByCategory("Platform", 3);

  return (
    <main className="detail-page">
      <JsonLd data={pageGraph("technology", locale, [platformNode(locale), processList(locale)])} />

      <div className="process-diagram">
        <ProcessDiagram alt={t.alt.platformDiagram} />
      </div>

      <section className="tech-intro wrap">
        <h1>{c.title}</h1>
        <p>{c.intro}</p>
        <a
          href={PLATFORM_URL}
          target="_blank"
          rel="noreferrer"
          className="platform-link platform-link--primary tech-intro__cta"
        >
          {c.open}
        </a>
      </section>

      <section className="tech-steps wrap">
        {c.steps.map((step) => (
          <div key={step.title}>
            <h2>{step.title}</h2>
            <p>
              {step.body} {step.emphasis ? <em>{step.emphasis}</em> : null}
            </p>
          </div>
        ))}
      </section>

      <div className="wrap">
        <Philosophy title={c.philosophy.title} lines={c.philosophy.lines} />
      </div>

      <p className="tech-cta wrap">
        <Link href={localePath(locale, PAGES.gaia.path)}>{c.poweredBy}</Link>
      </p>
      <BlogTeaser id="technology-blog-heading" locale={locale} posts={relatedPosts} />

      <BlogCta locale={locale} sector="platform" text="technology" />

      <Contact email="info@greecon.earth" locale={locale} />
      <SiteFooter locale={locale} page="technology" />
    </main>
  );
}
