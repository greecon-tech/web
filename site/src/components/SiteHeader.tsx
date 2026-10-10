"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PLATFORM_URL, ORG } from "../lib/seo";
import { GreeconMark } from "./icons";

const links = [
  { href: "/", label: "Home" },
  { href: "/energy/", label: "Energy" },
  { href: "/agriculture/", label: "Agriculture" },
  { href: "/water/", label: "Water" },
  { href: "/technology/", label: "Technology & Process" },
  { href: "/gaia/", label: "GAIA Tech" }
];

const trim = (path: string) => path.replace(/\/+$/, "") || "/";

/** Phone-and-tablet navigation: a slim sticky bar plus a full-screen menu. Hidden by CSS on desktop. */
export function SiteHeader() {
  const pathname = trim(usePathname() ?? "/");
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close after navigating.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // While open: lock page scroll, make the page behind inert, close on Escape or when the screen widens.
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
    const wide = window.matchMedia("(min-width: 861px)");
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

      <nav id="site-menu" className="site-menu" aria-label="Main" hidden={!open}>
        <ul className="site-menu__list">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} aria-current={trim(link.href) === pathname ? "page" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
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
