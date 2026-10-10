import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "../../components/JsonLd";
import { pageGraph } from "../../lib/schema";
import { pageMetadata } from "../../lib/seo";
import { SiteFooter } from "../../components/Contact";
import { BackHome } from "../../components/DetailPage";

export const metadata: Metadata = pageMetadata("terms");

export default function TermsPage() {
  return (
    <main className="detail-page">
      <JsonLd data={pageGraph("terms")} />
      <BackHome />
      <div className="legal-page wrap">
        <h1>Terms of Service</h1>
        <p className="legal-updated">Last updated: October 2026</p>

        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern access to and use of the website published at
          greecon.earth and its subdomains (the &ldquo;Site&rdquo;), operated by <strong>Greecon Sh.p.k.</strong>{" "}
          (NUIS/NIPT <strong>M61525505A</strong>), a company registered with the National Business Center of
          Albania, with its registered office in Shijak, Durrës County, Albania (&ldquo;Greecon,&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing or using the Site, you agree to be
          bound by these Terms. If you do not agree, please do not use the Site.
        </p>

        <h2>1. About the Site</h2>
        <p>
          The Site describes Greecon&rsquo;s renewable energy, smart agriculture, water management, and GAIA Tech
          platform offerings, and provides a way to contact Greecon about potential collaboration, partnership, or
          project opportunities. The Site is informational: nothing on it constitutes a binding offer, quotation, or
          contract. Project scope, pricing, specifications, and timelines are confirmed only through a signed
          agreement between Greecon and the client.
        </p>

        <h2>2. Eligibility and Acceptable Use</h2>
        <p>
          You may use the Site only for lawful purposes and in a way that does not infringe the rights of, or
          restrict or inhibit the use and enjoyment of, the Site by any third party. You agree not to:
        </p>
        <ul>
          <li>Attempt to gain unauthorized access to the Site, its underlying systems, or related networks;</li>
          <li>Interfere with or disrupt the Site&rsquo;s operation, including through excessive automated requests;</li>
          <li>Submit false, misleading, or fraudulent information through the Site&rsquo;s contact channels;</li>
          <li>Reproduce, duplicate, copy, or resell any part of the Site without our prior written consent.</li>
        </ul>

        <h2>3. Intellectual Property</h2>
        <p>
          The Site, including its text, graphics, logos, icons, the GAIA Tech mark, and underlying design and
          software, is owned by Greecon or its licensors and is protected by Albanian and international
          intellectual property law. Except as necessary to view the Site in a standard web browser, no part of it
          may be reproduced, distributed, modified, or used to create derivative works without our prior written
          permission.
        </p>

        <h2>4. Communications</h2>
        <p>
          If you contact us through the Site, we will use the details you provide to respond to your inquiry. See our{" "}
          <Link href="/privacy">Privacy Notice</Link> for details on how we handle personal data.
        </p>

        <h2>5. Third-Party Links</h2>
        <p>
          The Site may link to third-party websites, including our social media profiles, that we do not control.
          We are not responsible for the content, accuracy, or practices of any linked third-party site, and
          including a link does not imply our endorsement of it.
        </p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          The Site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without
          warranties of any kind, whether express or implied, including warranties of merchantability, fitness for a
          particular purpose, or non-infringement. We do not warrant that the Site will be uninterrupted, timely,
          secure, or error-free, or that any defects will be corrected.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by applicable law, Greecon shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, or
          goodwill, arising out of or in connection with your access to or use of, or inability to access or use,
          the Site. Nothing in these Terms limits any liability that cannot be limited or excluded under applicable
          Albanian law.
        </p>

        <h2>8. Governing Law and Jurisdiction</h2>
        <p>
          These Terms are governed by the laws of the Republic of Albania, without regard to its conflict-of-law
          principles. Any dispute arising out of or relating to these Terms or the Site shall be subject to the
          exclusive jurisdiction of the competent courts of the Republic of Albania, unless mandatory
          consumer-protection law requires otherwise.
        </p>

        <h2>9. Changes to These Terms</h2>
        <p>
          We may update these Terms from time to time to reflect changes to the Site or applicable law. The
          &ldquo;Last updated&rdquo; date above indicates when these Terms were last revised. Continued use of the
          Site after changes take effect constitutes acceptance of the revised Terms.
        </p>

        <h2>10. Contact</h2>
        <p>
          Questions about these Terms can be sent to{" "}
          <a href="mailto:info@greecon.earth">info@greecon.earth</a> or by post to Greecon Sh.p.k., Durana Tech
          Park, Rruga Ahmet Zogu, Xhafzotaj, Shijak, Durrës 2013, Albania.
        </p>
      </div>
      <SiteFooter />
    </main>
  );
}
