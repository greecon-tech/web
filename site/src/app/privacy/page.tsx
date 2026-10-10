import type { Metadata } from "next";
import { JsonLd } from "../../components/JsonLd";
import { pageGraph } from "../../lib/schema";
import { pageMetadata } from "../../lib/seo";
import { SiteFooter } from "../../components/Contact";
import { BackHome } from "../../components/DetailPage";

export const metadata: Metadata = pageMetadata("privacy");

export default function PrivacyPage() {
  return (
    <main className="detail-page">
      <JsonLd data={pageGraph("privacy")} />
      <BackHome />
      <div className="legal-page wrap">
        <h1>Privacy Notice</h1>
        <p className="legal-updated">Last updated: October 2026</p>

        <p>
          This Privacy Notice explains how <strong>Greecon Sh.p.k.</strong> (NUIS/NIPT{" "}
          <strong>M61525505A</strong>) (&ldquo;Greecon,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), a company registered with the National Business Center of Albania with its
          registered office in Shijak, Durrës County, Albania, collects and uses personal data when you visit
          greecon.earth (the &ldquo;Site&rdquo;) or contact us through it. Greecon is the data controller for the
          personal data described below.
        </p>
        <p>
          We handle personal data in line with Albania&rsquo;s Law No. 124/2024 &ldquo;On the Protection of Personal
          Data,&rdquo; which is aligned with the EU General Data Protection Regulation (GDPR), and we apply the same
          standard to all visitors regardless of location.
        </p>

        <h2>1. What Data We Collect</h2>
        <p>We collect only what is necessary to run the Site and respond to you:</p>
        <ul>
          <li>
            <strong>Contact data</strong> you provide directly &mdash; such as your name, email
            address, and the content of any message &mdash; when you use a contact channel or email address on the
            Site.
          </li>
          <li>
            <strong>Technical data</strong> collected automatically by our hosting providers to operate and secure
            the Site, such as IP address, browser type, device information, and access timestamps, typically
            retained only in standard server and security logs.
          </li>
        </ul>
        <p>
          We do not collect sensitive categories of data (such as health, financial, or biometric information)
          through the Site, and we ask that you not include such information in any message you send us.
        </p>

        <h2>2. Cookies and Similar Technologies</h2>
        <p>
          The Site does not use advertising or cross-site tracking cookies. It may rely on strictly necessary,
          session-level technical mechanisms needed to load pages and keep the Site secure; these do not identify
          you personally. If this changes &mdash; for example, if we add analytics in the future &mdash; we will
          update this notice and request consent where required.
        </p>

        <h2>3. How We Use Your Data and Our Legal Basis</h2>
        <ul>
          <li><strong>To respond to inquiries</strong> you send us, based on our legitimate interest in communicating with prospective partners, clients, and investors, or to take steps at your request before entering into a contract.</li>
          <li><strong>To send product updates</strong> you have opted in to receive, based on your consent, which you may withdraw at any time.</li>
          <li><strong>To maintain and secure the Site</strong>, based on our legitimate interest in keeping our systems reliable and protected from misuse.</li>
          <li><strong>To comply with legal obligations</strong>, such as responding to a lawful request from a competent authority.</li>
        </ul>

        <h2>4. Who We Share Data With</h2>
        <p>
          We do not sell personal data. We share it only with service providers who process it on our behalf and
          under instruction &mdash; for example, the hosting and infrastructure providers that serve the Site
          (currently GitHub Pages and, where applicable, Railway) and the email provider we use to receive and
          respond to messages &mdash; and, where legally required, with public authorities.
        </p>

        <h2>5. International Transfers</h2>
        <p>
          Because our service providers may process data outside Albania, including within the European Economic
          Area, your data may be transferred internationally. Where this happens, we rely on providers that apply
          appropriate safeguards, such as standard contractual clauses or an equivalent legal basis for the
          transfer.
        </p>

        <h2>6. Data Retention</h2>
        <p>
          We retain contact data for as long as needed to respond to your inquiry, maintain our
          business relationship, or until you withdraw consent or ask us to delete it, whichever comes first,
          subject to any longer retention period required by law. Standard technical and security logs are
          typically retained for a limited period by our hosting providers and then rotated out automatically.
        </p>

        <h2>7. Your Rights</h2>
        <p>Subject to applicable law, you have the right to:</p>
        <ul>
          <li>Access the personal data we hold about you;</li>
          <li>Request correction of inaccurate or incomplete data;</li>
          <li>Request erasure of your data;</li>
          <li>Restrict or object to certain processing;</li>
          <li>Request a portable copy of data you provided to us;</li>
          <li>Withdraw consent at any time, without affecting processing carried out before the withdrawal; and</li>
          <li>Lodge a complaint with a supervisory authority.</li>
        </ul>
        <p>
          To exercise any of these rights, email <a href="mailto:privacy@greecon.earth">privacy@greecon.earth</a>.
          In Albania, you may also lodge a complaint with the Office of the Information and Data Protection
          Commissioner (IDP) at{" "}
          <a href="https://idp.al" target="_blank" rel="noreferrer">idp.al</a>.
        </p>

        <h2>8. Children&rsquo;s Privacy</h2>
        <p>
          The Site is directed at businesses, municipalities, and investors, and is not intended for children. We do
          not knowingly collect personal data from children.
        </p>

        <h2>9. Security</h2>
        <p>
          We apply reasonable technical and organizational measures to protect personal data against unauthorized
          access, alteration, disclosure, or destruction. No method of transmission or storage is completely secure,
          and we cannot guarantee absolute security.
        </p>

        <h2>10. Changes to This Notice</h2>
        <p>
          We may update this Privacy Notice from time to time to reflect changes in our practices or applicable
          law. The &ldquo;Last updated&rdquo; date above indicates when it was last revised.
        </p>

        <h2>11. Contact</h2>
        <p>
          For any question about this notice or how we handle your data, contact{" "}
          <a href="mailto:privacy@greecon.earth">privacy@greecon.earth</a> or Greecon Sh.p.k., Durana Tech Park,
          Rruga Ahmet Zogu, Xhafzotaj, Shijak, Durrës 2013, Albania.
        </p>
      </div>
      <SiteFooter />
    </main>
  );
}
