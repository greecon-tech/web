import type { Metadata } from "next";
import { SiteFooter } from "../../components/Contact";
import { BackHome } from "../../components/DetailPage";

export const metadata: Metadata = {
  title: "Privacy Notice — Greecon"
};

export default function PrivacyPage() {
  return (
    <main className="detail-page">
      <BackHome />
      <div className="legal-page wrap">
        <h1>Privacy Notice</h1>
        <p>
          Greecon collects only the information you choose to share with us, such as your email address when
          joining our waitlist or the details you send us through the contact channels on this site.
        </p>
        <h2>How we use it</h2>
        <p>
          We use this information to respond to inquiries, share updates about the Greecon Platform, and improve
          our products. We do not sell your information to third parties.
        </p>
        <h2>Contact</h2>
        <p>To ask about the data we hold, contact info@greecon.earth.</p>
      </div>
      <SiteFooter />
    </main>
  );
}
