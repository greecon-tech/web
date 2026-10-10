import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "../components/Contact";
import { BackHome } from "../components/DetailPage";
import { GreeconMark } from "../components/icons";

export const metadata: Metadata = {
  title: "Page not found — Greecon",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <main className="detail-page">
      <BackHome />
      <div className="not-found wrap">
        <Link href="/" aria-label="Greecon home">
          <GreeconMark size={56} />
        </Link>
        <h1>Page not found</h1>
        <p>The page you are looking for does not exist or has moved.</p>
        <nav aria-label="Main sections" className="not-found__links">
          <Link href="/">Home</Link>
          <Link href="/energy">Energy</Link>
          <Link href="/agriculture">Agriculture</Link>
          <Link href="/water">Water</Link>
          <Link href="/technology">Technology &amp; Process</Link>
          <Link href="/gaia">GAIA Tech</Link>
        </nav>
      </div>
      <SiteFooter />
    </main>
  );
}
