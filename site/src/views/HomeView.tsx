import Image from "next/image";
import Link from "next/link";
import { BlogTeaser } from "../components/BlogTeaser";
import { Contact, SiteFooter } from "../components/Contact";
import { AgricultureIcon, EnergyIcon, GreeconMark, WaterIcon } from "../components/icons";
import { JsonLd } from "../components/JsonLd";
import { ProductCard } from "../components/ProductCard";
import { localePath, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { getLatestPosts } from "../lib/blog";
import { blogNode, pageGraph, platformNode } from "../lib/schema";
import { PAGES, PLATFORM_URL, type PageKey } from "../lib/seo";

export async function HomeView({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const latestPosts = await getLatestPosts(3);
  const href = (key: PageKey) => localePath(locale, PAGES[key].path);

  return (
    <main>
      <JsonLd data={pageGraph("home", locale, [platformNode(locale), blogNode(latestPosts)])} />
      <h1 className="site-mark">
        <Link href={href("home")} aria-label="Greecon">
          <GreeconMark size={56} />
        </Link>
      </h1>

      <section className="hero wrap">
        {t.home.hero.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </section>

      <section className="product-grid wrap">
        <ProductCard href={href("energy")} icon={<EnergyIcon />} title={t.home.cards.energy.title}>
          {t.home.cards.energy.text}
        </ProductCard>
        <ProductCard href={href("agriculture")} icon={<AgricultureIcon />} title={t.home.cards.agriculture.title}>
          {t.home.cards.agriculture.text}
        </ProductCard>
        <ProductCard href={href("water")} icon={<WaterIcon />} title={t.home.cards.water.title}>
          {t.home.cards.water.text}
        </ProductCard>
      </section>

      <section className="platform wrap">
        <a
          className="platform-shot"
          href={PLATFORM_URL}
          target="_blank"
          rel="noreferrer"
          aria-label={t.aria.openPlatform}
        >
          <Image src="/platform-screenshot.jpg" alt={t.alt.platformScreenshot} width={2000} height={1075} />
        </a>
        <div className="platform-copy">
          <h2 className="eyebrow-heading underline">{t.home.platform.heading}</h2>
          <p>{t.home.platform.body}</p>
          <div className="platform-links">
            <a href={PLATFORM_URL} target="_blank" rel="noreferrer" className="platform-link platform-link--primary">
              {t.home.platform.open}
            </a>
            <Link href={href("technology")} className="platform-link">
              {t.home.platform.seeTechnology}
            </Link>
          </div>
        </div>
      </section>

      <section className="statement wrap">
        <h2>{t.home.impact.heading}</h2>
        <p>{t.home.impact.text}</p>
      </section>

      <section className="statement wrap">
        <h2>{t.home.partnerships.heading}</h2>
        <p>{t.home.partnerships.text}</p>
      </section>

      <section className="statement wrap">
        <h2>{t.home.future.heading}</h2>
        <p>{t.home.future.text}</p>
      </section>

      <BlogTeaser id="home-blog-heading" locale={locale} posts={latestPosts} showAll />

      <Contact email="info@greecon.earth" locale={locale} />
      <SiteFooter locale={locale} page="home" />
    </main>
  );
}
