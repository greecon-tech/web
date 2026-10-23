import Link from "next/link";
import type { ReactNode } from "react";
import { localePath, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { BLOG_URL } from "../lib/seo";
import { BackArrowIcon, GreeconMark } from "./icons";

export function DetailIntro({
  icon,
  eyebrow,
  title,
  subtitle,
  intro
}: {
  icon: ReactNode;
  eyebrow?: string;
  title: string;
  subtitle: string;
  intro: string;
}) {
  return (
    <header className="detail-intro">
      <div className="detail-icon">{icon}</div>
      {eyebrow ? <p className="detail-eyebrow">{eyebrow}</p> : null}
      <h1>{title}</h1>
      <p className="detail-subtitle">{subtitle}</p>
      <div className="detail-lede">
        <p>{intro}</p>
      </div>
    </header>
  );
}

export function DetailSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="detail-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export function Philosophy({ title, lines }: { title: string; lines: ReactNode[] }) {
  return (
    <section className="philosophy">
      <h2>{title}</h2>
      {lines.map((line, i) => (
        <p key={i}>{line}</p>
      ))}
    </section>
  );
}

/** Link from a page to the matching sector filter on the Greecon Blog (the blog itself is in English). */
export function BlogCta({
  locale,
  sector,
  text
}: {
  locale: Locale;
  sector: "energy" | "agriculture" | "water" | "platform";
  text: "energy" | "agriculture" | "water" | "platform" | "technology";
}) {
  const t = getDictionary(locale);
  return (
    <p className="tech-cta wrap">
      <a href={`${BLOG_URL}/blog?sector=${sector}`}>{t.blog.moreOn[text]}</a>
    </p>
  );
}

export function ReturnMark({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const home = localePath(locale, "/");
  return (
    <div className="return-mark">
      <Link href={home} aria-label={t.aria.backHome}>
        <BackArrowIcon />
      </Link>
      <Link href={home} aria-label={t.aria.greeconHome} className="return-mark__logo">
        <GreeconMark size={44} />
      </Link>
    </div>
  );
}
