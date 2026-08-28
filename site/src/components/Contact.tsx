import Link from "next/link";
import { InstagramIcon, LinkedInIcon } from "./icons";

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
            <dd>Tirana, Albania</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <p>
          &copy; 2026 Greecon &mdash; All rights reserved. <Link href="/terms">Terms of service</Link>{" "}
          <Link href="/privacy">Privacy notice</Link>
        </p>
        <div className="social-links" aria-label="Social media">
          <a href="https://instagram.com/greecon.earth" aria-label="Instagram" target="_blank" rel="noreferrer">
            <InstagramIcon />
          </a>
          <a href="https://linkedin.com/company/greecon" aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
