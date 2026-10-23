import { BlogTeaser } from "../components/BlogTeaser";
import { Contact, SiteFooter } from "../components/Contact";
import { BlogCta, DetailIntro, DetailSection, Philosophy, ReturnMark } from "../components/DetailPage";
import { AgricultureIcon, EnergyIcon, WaterIcon } from "../components/icons";
import { JsonLd } from "../components/JsonLd";
import type { Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { getPostsByCategory } from "../lib/blog";
import { pageGraph } from "../lib/schema";

export type DetailPageKey = "energy" | "agriculture" | "water";

const icons = { energy: EnergyIcon, agriculture: AgricultureIcon, water: WaterIcon };
// The blog's own category for each sector page.
const blogCategory = { energy: "Energy", agriculture: "Agriculture", water: "Water" };

/** The Energy, Agriculture and Water pages share one layout; only the text and icon differ. */
export async function DetailView({ locale, page }: { locale: Locale; page: DetailPageKey }) {
  const t = getDictionary(locale);
  const content = t[page];
  const Icon = icons[page];
  const relatedPosts = await getPostsByCategory(locale, blogCategory[page], 3);

  return (
    <main className="detail-page">
      <JsonLd data={pageGraph(page, locale)} />

      <DetailIntro
        icon={<Icon tile="light" size={72} />}
        title={content.title}
        subtitle={content.subtitle}
        intro={content.intro}
      />

      <div className="detail-body wrap">
        {content.sections.map((section) => (
          <DetailSection key={section.title} title={section.title}>
            {section.body}
          </DetailSection>
        ))}
      </div>

      <div className="wrap">
        <Philosophy title={content.philosophy.title} lines={content.philosophy.lines} />
      </div>

      <BlogTeaser id={`${page}-blog-heading`} locale={locale} posts={relatedPosts} />

      <BlogCta locale={locale} sector={page} text={page} />

      <ReturnMark locale={locale} />

      <Contact email={`${page}@greecon.earth`} locale={locale} />
      <SiteFooter locale={locale} page={page} />
    </main>
  );
}
