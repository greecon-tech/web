import Link from "next/link";
import type { ReactNode } from "react";
import { BackArrowIcon, GreeconMark } from "./icons";

export function BackHome() {
  return (
    <Link href="/" className="back-home" aria-label="Back to home">
      <BackArrowIcon />
    </Link>
  );
}

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

export function ReturnMark() {
  return (
    <div className="return-mark">
      <Link href="/" aria-label="Back to home">
        <BackArrowIcon />
      </Link>
      <Link href="/" aria-label="Greecon home" className="return-mark__logo">
        <GreeconMark size={44} />
      </Link>
    </div>
  );
}
