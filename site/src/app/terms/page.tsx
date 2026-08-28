import type { Metadata } from "next";
import { SiteFooter } from "../../components/Contact";
import { BackHome } from "../../components/DetailPage";

export const metadata: Metadata = {
  title: "Terms of Service — Greecon"
};

export default function TermsPage() {
  return (
    <main className="detail-page">
      <BackHome />
      <div className="legal-page wrap">
        <h1>Terms of Service</h1>
        <p>
          These terms govern your use of the Greecon website and the information, systems, and services described
          on it. By using this site you agree to use it only for lawful purposes and in a way that does not
          infringe the rights of, or restrict or inhibit the use and enjoyment of, this site by any third party.
        </p>
        <h2>Content</h2>
        <p>
          Content on this site is provided for general information about Greecon&rsquo;s renewable energy, water,
          and agriculture systems. It does not constitute a binding offer, and specifications for any project are
          confirmed directly with our team.
        </p>
        <h2>Contact</h2>
        <p>Questions about these terms can be sent to info@greecon.earth.</p>
      </div>
      <SiteFooter />
    </main>
  );
}
