import Link from "next/link";
import { LOCALES, LOCALE_INFO, localePath, type Locale } from "../i18n/config";
import { getDictionary } from "../i18n/dictionaries";
import { BLOG_URL, ORG, PAGES, SOCIAL, type PageKey } from "../lib/seo";
import { InstagramIcon, LinkedInIcon, XIcon } from "./icons";

export function Contact({ email, locale }: { email: string; locale: Locale }) {
  const t = getDictionary(locale).contact;
  return (
    <section className="contact">
      <div className="wrap">
        <h2 className="eyebrow-heading">{t.heading}</h2>
        <p className="contact-tagline">{t.tagline}</p>
        <p className="contact-copy">{t.copy}</p>
        <dl className="contact-details">
          <div>
            <dt>{t.email}</dt>
            <dd>
              <a href={`mailto:${email}`}>{email}</a>
            </dd>
          </div>
          <div>
            <dt>{t.phone}</dt>
            <dd>
              <a href={`tel:${ORG.telephone}`}>{ORG.telephoneDisplay}</a>
            </dd>
          </div>
          <div>
            <dt>{t.location}</dt>
            <dd>{t.locationValue}</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

/** `page` is the page being rendered, so the language links can point to the same page in each language. */
export function SiteFooter({ locale, page }: { locale: Locale; page: PageKey }) {
  const t = getDictionary(locale).footer;
  const href = (key: PageKey) => localePath(locale, PAGES[key].path);
  return (
    <footer className="site-footer">
      <div className="wrap wrap--wide site-footer__grid">
        <div>
          <p className="site-footer__title">{t.explore}</p>
          <ul>
            <li>
              <Link href={href("energy")}>{t.links.energy}</Link>
            </li>
            <li>
              <Link href={href("agriculture")}>{t.links.agriculture}</Link>
            </li>
            <li>
              <Link href={href("water")}>{t.links.water}</Link>
            </li>
            <li>
              <Link href={href("technology")}>{t.links.technology}</Link>
            </li>
            <li>
              <Link href={href("gaia")}>{t.links.gaia}</Link>
            </li>
            <li>
              <a href={BLOG_URL}>{t.blog}</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="site-footer__title">{t.legal}</p>
          <ul>
            <li>
              <Link href={href("terms")}>{t.terms}</Link>
            </li>
            <li>
              <Link href={href("privacy")}>{t.privacy}</Link>
            </li>
            <li>
              <a href="mailto:privacy@greecon.earth">privacy@greecon.earth</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="site-footer__title">{t.follow}</p>
          <div className="social-links" aria-label={t.socialLabel}>
            <a href={SOCIAL.instagram} aria-label="Instagram @greecon" target="_blank" rel="noreferrer">
              <InstagramIcon />
            </a>
            <a href={SOCIAL.x} aria-label="X @greeconHQ" target="_blank" rel="noreferrer">
              <XIcon />
            </a>
            <a href={SOCIAL.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </div>
          <p className="site-footer__title site-footer__title--spaced">{t.language}</p>
          <ul className="site-footer__languages">
            {LOCALES.map((code) => (
              <li key={code}>
                {code === locale ? (
                  <span aria-current="true">{LOCALE_INFO[code].label}</span>
                ) : (
                  // A plain link: the languages are separate root layouts, so this is a full page load.
                  <a href={localePath(code, PAGES[page].path)} hrefLang={LOCALE_INFO[code].htmlLang} lang={LOCALE_INFO[code].htmlLang}>
                    {LOCALE_INFO[code].label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-footer__legal">
        <div className="wrap wrap--wide">
          <p>{t.rights}</p>
          <a href={BLOG_URL}>blog.greecon.earth</a>
        </div>
      </div>
    </footer>
  );
}
