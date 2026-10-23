"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LOCALES, LOCALE_INFO, localePath, splitLocale, type Locale } from "../i18n/config";
import type { Dictionary } from "../i18n/types";
import { BLOG_URL, ORG, PLATFORM_URL } from "../lib/seo";
import { GreeconMark } from "./icons";

// Language-neutral paths; each is prefixed with the current language when rendered.
const links = [
  { path: "/", key: "home" },
  { path: "/energy/", key: "energy" },
  { path: "/agriculture/", key: "agriculture" },
  { path: "/water/", key: "water" },
  { path: "/technology/", key: "technology" },
  { path: "/gaia/", key: "gaia" }
] as const;

const trim = (path: string) => path.replace(/\/+$/, "") || "/";

/**
 * Site navigation, sticky at the top. Desktop: logo plus inline links. Phones and tablets (up to 1100px): a Menu button
 * that opens a full-screen menu. The same links render in both; CSS decides how they are shown.
 */
export function SiteHeader({ locale, labels }: { locale: Locale; labels: Dictionary["header"] }) {
  const { path: currentPath } = splitLocale(usePathname() ?? "/");
  const current = trim(currentPath);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const home = localePath(locale, "/");

  // Close after navigating.
  useEffect(() => {
    setOpen(false);
  }, [currentPath]);

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
    const wide = window.matchMedia("(min-width: 1101px)");
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
        {current === "/" ? (
          <span />
        ) : (
          <Link href={home} className="site-header__logo" aria-label={labels.goHome}>
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
          <span>{open ? labels.close : labels.menu}</span>
          <span className="site-header__icon" data-open={open} aria-hidden="true">
            <i />
            <i />
          </span>
        </button>
      </div>

      <nav id="site-menu" className="site-menu" aria-label={labels.mainNav} data-open={open}>
        <ul className="site-menu__list">
          {links.map((link) => (
            <li key={link.path}>
              <Link
                href={localePath(locale, link.path)}
                aria-current={trim(link.path) === current ? "page" : undefined}
              >
                {labels.links[link.key]}
              </Link>
            </li>
          ))}
          <li>
            {/* The blog is a separate site on a subdomain, so it is a plain link rather than a client-side route. */}
            <a href={BLOG_URL}>{labels.blog}</a>
          </li>
        </ul>
        <div className="site-menu__languages" role="group" aria-label={labels.language}>
          {LOCALES.filter((code) => code !== locale).map((code) => (
            // Plain links: each language is its own root layout, so switching is a full page load.
            <a
              key={code}
              className="site-menu__lang"
              href={localePath(code, currentPath)}
              hrefLang={LOCALE_INFO[code].htmlLang}
              lang={LOCALE_INFO[code].htmlLang}
            >
              {LOCALE_INFO[code].label}
            </a>
          ))}
        </div>
        <a className="site-menu__cta" href={PLATFORM_URL} target="_blank" rel="noreferrer">
          {labels.platformCta}
        </a>
        <div className="site-menu__contact">
          <a href={`tel:${ORG.telephone}`}>{labels.call}</a>
          <a href={`mailto:${ORG.email}`}>{labels.email}</a>
        </div>
      </nav>
    </header>
  );
}
