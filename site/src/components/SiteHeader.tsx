"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BLOG_URL, PLATFORM_URL, ORG } from "../lib/seo";
import { GreeconMark } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/energy/", label: "Energy" },
  { href: "/agriculture/", label: "Agriculture" },
  { href: "/water/", label: "Water" },
  { href: "/technology/", label: "Technology & Process" },
  { href: "/gaia/", label: "GAIA Tech" }
];

// The blog is a separate site on a subdomain, so it is a plain link rather than a client-side route.
const blogLink = { href: BLOG_URL, label: "Blog" };

const trim = (path: string) => path.replace(/\/+$/, "") || "/";

/**
 * Site navigation, sticky at the top. Desktop: logo plus inline links. Phones and tablets (up to 1000px): a Menu button
 * that opens a full-screen menu. The same links render in both; CSS decides how they are shown.
 */
export function SiteHeader() {
  const pathname = trim(usePathname() ?? "/");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While the menu is open: lock page scroll, make the page behind inert, close on Escape or when the screen widens.
  useEffect(() => {
    if (!open) return;
    const main = document.querySelector("main");
    const previousOverflow = document.body.style.overflow;
    main?.setAttribute("inert", "");
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const wide = window.matchMedia("(min-width: 1001px)");
    const onWide = () => wide.matches && setOpen(false);

    document.addEventListener("keydown", onKeyDown);
    wide.addEventListener("change", onWide);
    return () => {
      main?.removeAttribute("inert");
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      wide.removeEventListener("change", onWide);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header__bar">
        {pathname === "/" ? (
          <span />
        ) : (
          <Link href="/" className="site-header__logo" aria-label="Greecon home">
            <GreeconMark size={30} />
          </Link>
        )}
        <button
          ref={toggleRef}
          type="button"
          className="site-header__toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className="site-header__icon" data-open={open} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <nav id="site-menu" className="site-menu" aria-label="Main" data-open={open}>
        <ul className="site-menu__list">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} aria-current={trim(link.href) === pathname ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={blogLink.href}>{blogLink.label}</a>
          </li>
        </ul>
        <a className="site-menu__cta" href={PLATFORM_URL} target="_blank" rel="noreferrer">
          Open the Platform →
        </a>
        <div className="site-menu__contact">
          <a href={`tel:${ORG.telephone}`}>Call</a>
          <a href={`mailto:${ORG.email}`}>Email</a>
        </div>
      </nav>
    </header>
  );
}
