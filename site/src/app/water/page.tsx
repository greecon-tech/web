import type { Metadata } from "next";
import { Contact, SiteFooter } from "../../components/Contact";
import { BackHome, DetailIntro, DetailSection, Philosophy, ReturnMark } from "../../components/DetailPage";
import { WaterIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Water — Greecon",
  description:
    "Greecon designs automated systems for wastewater treatment and water reuse, helping cities and industries recycle water and reduce their environmental footprint."
};

export default function WaterPage() {
  return (
    <main className="detail-page">
      <BackHome />

      <DetailIntro
        icon={<WaterIcon />}
        title="Water"
        subtitle="The Source of Life, Managed Intelligently"
        intro="Greecon designs automated systems for wastewater treatment and water reuse. Our technology helps cities and industries recycle water and reduce their environmental footprint."
      />

      <div className="detail-body wrap">
        <DetailSection title="Clean Water Systems">
          <p>Greecon develops integrated systems for:</p>
          <ul>
            <li>Tank level monitoring</li>
            <li>Pump control</li>
            <li>Pressure management</li>
            <li>Water-use tracking</li>
          </ul>
          <p>
            Every component operates within a connected digital framework, ensuring stability, efficiency, and
            continuous performance.
          </p>
          <p className="emphasis">Water becomes visible. Flow becomes controlled. Waste becomes minimized.</p>
        </DetailSection>

        <DetailSection title="Wastewater Treatment">
          <p>
            Wastewater is no longer a liability — it becomes a resource. Greecon installs compact biological
            treatment units combined with advanced filtration and UV sterilization.
          </p>
          <p>Treated water can be safely reused for:</p>
          <ul>
            <li>Irrigation</li>
            <li>Technical applications</li>
            <li>Non-potable operational needs</li>
          </ul>
          <p className="emphasis">This reduces environmental impact and significantly lowers freshwater consumption.</p>
        </DetailSection>

        <DetailSection title="Water Recycling Systems">
          <p>
            Our recycling systems reduce total water usage by 20–50% through automated natural and mechanical
            filtration processes. Water cycles are managed digitally, ensuring efficient reuse without compromising
            safety or quality.
          </p>
          <p className="emphasis">Sustainability becomes systemic — not occasional.</p>
        </DetailSection>

        <DetailSection title="Real-Time Monitoring & Automation">
          <p>All water infrastructure connects to the Greecon Platform, which enables:</p>
          <ul>
            <li>Real-time water level visibility</li>
            <li>Water quality measurement</li>
            <li>Leak detection</li>
            <li>Automated pumping cycles</li>
            <li>Remote system management</li>
          </ul>
          <p>The platform continuously analyzes behavior and adjusts operations automatically.</p>
          <p className="emphasis">Water systems no longer react late. They respond instantly.</p>
        </DetailSection>

        <DetailSection title="Intelligent Resource Optimization">
          <p>Greecon integrates eco-friendly technologies such as:</p>
          <ul>
            <li>Chemical-free UV sterilization</li>
            <li>Biological filtration</li>
            <li>High-efficiency pumps</li>
            <li>Resource-optimized infrastructure</li>
          </ul>
          <p>Every installation is designed to reduce operational costs while protecting natural ecosystems.</p>
          <p className="emphasis">Efficiency and responsibility operate together.</p>
        </DetailSection>

        <DetailSection title="Built for Circular Water Use">
          <p>
            The goal is not only management — it is circularity. By combining monitoring, automation, and reuse
            systems, Greecon helps businesses, farms, and municipalities transition toward closed-loop water cycles.
          </p>
          <p className="emphasis">Water becomes renewable within the system itself.</p>
        </DetailSection>
      </div>

      <div className="wrap">
        <Philosophy
          title="The Greecon Water Philosophy"
          lines={[
            "Water is not a commodity. It is continuity.",
            "Greecon integrates engineering, automation, and ecological logic into intelligent water ecosystems.",
            "We do not just move water. We design systems that respect it."
          ]}
        />
      </div>

      <ReturnMark />

      <Contact email="water@greecon.earth" />
      <SiteFooter />
    </main>
  );
}
