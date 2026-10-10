import Link from "next/link";
import { BLOG_URL, SOCIAL } from "../lib/seo";
import { InstagramIcon, LinkedInIcon, XIcon } from "./icons";

export function Contact({ email }: { email: string }) {
  return (
    <section className="contact">
      <div className="wrap">
        <h2 className="eyebrow-heading">Contact</h2>
        <p className="contact-tagline">Let&rsquo;s build the future, sustainably.</p>
        <p className="contact-copy">
          Whether you&rsquo;re a business, municipality, or investor, we&rsquo;re here to help you design and implement
          smarter, greener systems. Reach out to explore collaboration, partnership, or project opportunities with
          Greecon.
        </p>
        <dl className="contact-details">
          <div>
            <dt>Email:</dt>
            <dd>
              <a href={`mailto:${email}`}>{email}</a>
            </dd>
          </div>
          <div>
            <dt>Phone:</dt>
            <dd>
              <a href="tel:+355694443362">+355 69 444 3362</a>
            </dd>
          </div>
          <div>
            <dt>Location:</dt>
            <dd>Shijak, Durrës, Albania</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap wrap--wide site-footer__grid">
        <div>
          <p className="site-footer__title">Explore</p>
          <ul>
            <li>
              <Link href="/energy">Energy</Link>
            </li>
            <li>
              <Link href="/agriculture">Agriculture</Link>
            </li>
            <li>
              <Link href="/water">Water</Link>
            </li>
            <li>
              <Link href="/technology">Technology &amp; Process</Link>
            </li>
            <li>
              <Link href="/gaia">GAIA Tech</Link>
            </li>
            <li>
              <a href={BLOG_URL}>Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="site-footer__title">Legal</p>
          <ul>
            <li>
              <Link href="/terms">Terms of service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy notice</Link>
            </li>
            <li>
              <a href="mailto:privacy@greecon.earth">privacy@greecon.earth</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="site-footer__title">Follow</p>
          <div className="social-links" aria-label="Social media">
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
        </div>
      </div>
      <div className="site-footer__legal">
        <div className="wrap wrap--wide">
          <p>
            &copy; 2026 Greecon Sh.p.k. (NUIS/NIPT M61525505A) &mdash; All rights reserved.
          </p>
          <a href={BLOG_URL}>blog.greecon.earth</a>
        </div>
      </div>
    </footer>
  );
}
