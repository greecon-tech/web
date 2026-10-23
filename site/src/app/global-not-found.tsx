import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/Contact";
import { GreeconMark } from "../components/icons";
import { plexSerif } from "../lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found — Greecon",
  robots: { index: false, follow: true }
};

/**
 * The 404 for the whole site. It is served for any unknown URL, whatever the language, so it is written in both
 * English and Albanian.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en" className={plexSerif.variable}>
      <body>
        <main className="detail-page">
          <div className="not-found wrap">
            <Link href="/" aria-label="Greecon home">
              <GreeconMark size={56} />
            </Link>
            <h1>Page not found</h1>
            <p>The page you are looking for does not exist or has moved.</p>
            <nav aria-label="Main sections" className="not-found__links">
              <Link href="/">Home</Link>
              <Link href="/energy/">Energy</Link>
              <Link href="/agriculture/">Agriculture</Link>
              <Link href="/water/">Water</Link>
              <Link href="/technology/">Technology &amp; Process</Link>
              <Link href="/gaia/">GAIA Tech</Link>
            </nav>
            <p lang="sq" className="not-found__sq">
              Faqja që kërkoni nuk ekziston ose është zhvendosur.
            </p>
            <nav aria-label="Seksionet kryesore" lang="sq" className="not-found__links">
              <Link href="/sq/">Kryefaqja</Link>
              <Link href="/sq/energy/">Energjia</Link>
              <Link href="/sq/agriculture/">Bujqësia</Link>
              <Link href="/sq/water/">Uji</Link>
              <Link href="/sq/technology/">Teknologjia dhe procesi</Link>
              <Link href="/sq/gaia/">GAIA Tech</Link>
            </nav>
          </div>
          <SiteFooter locale="en" page="home" />
        </main>
      </body>
    </html>
  );
}
