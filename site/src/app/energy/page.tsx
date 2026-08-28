import type { Metadata } from "next";
import { Contact, SiteFooter } from "../../components/Contact";
import { BackHome, DetailIntro, DetailSection, Philosophy, ReturnMark } from "../../components/DetailPage";
import { EnergyIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Energy — Greecon",
  description:
    "Greecon designs renewable energy systems that combine solar, hybrid, and agrivoltaic solutions — every system connected, monitored, and optimized in real time."
};

export default function EnergyPage() {
  return (
    <main className="detail-page">
      <BackHome />

      <DetailIntro
        icon={<EnergyIcon />}
        title="Energy"
        subtitle="Powering the Future with Natural Logic"
        intro="We create renewable energy systems that combine solar, hybrid, and agrivoltaic solutions. Every system is connected, monitored, and optimized through real-time data — turning clean energy into smart energy."
      />

      <div className="detail-body wrap">
        <DetailSection title="Renewable Energy Systems">
          <p>
            Greecon designs and delivers solar photovoltaic systems ranging from 5 kWp to +5 MW, built with
            high-efficiency panels and EU-standard inverters. Our solutions are engineered for durability, safety,
            and long-term performance. Each installation is optimized for maximum yield based on location,
            consumption patterns, and operational goals. We also develop agrivoltaic systems, placing solar panels
            above crops to produce clean electricity while protecting agricultural productivity.
          </p>
          <p className="emphasis">Energy generation and farming coexist — intelligently.</p>
        </DetailSection>

        <DetailSection title="Intelligent Energy Storage">
          <p>
            Energy must not only be generated — it must be managed. Greecon integrates LiFePO4 battery storage
            systems, known for long lifespan, safety, and environmental responsibility.
          </p>
          <p>These storage systems ensure:</p>
          <ul>
            <li>Stable power supply</li>
            <li>Peak shaving and load balancing</li>
            <li>Reduced dependency on unstable grids</li>
            <li>Greater energy autonomy</li>
          </ul>
          <p className="emphasis">Energy becomes reliable, controlled, and optimized.</p>
        </DetailSection>

        <DetailSection title="Smart Energy Management">
          <p>
            At the core of every installation is the Greecon Platform — a control system that connects solar panels,
            batteries, pumps, and infrastructure into one unified digital environment.
          </p>
          <p>The platform provides:</p>
          <ul>
            <li>Real-time monitoring of production and consumption</li>
            <li>Battery status and forecasting</li>
            <li>Automated energy flow optimization</li>
            <li>Performance analytics and reporting</li>
            <li>ROI and sustainability tracking</li>
          </ul>
          <p className="emphasis">
            Energy is no longer static. It becomes dynamic — continuously adjusting to demand, weather, and
            operational conditions.
          </p>
        </DetailSection>

        <DetailSection title="Automation & Optimization">
          <p>
            Greecon systems operate autonomously. Through intelligent control logic, the platform balances generation
            and usage, adjusts energy flow between systems, and supports industrial automation processes. This
            reduces operational costs, improves system lifespan, and ensures efficient resource use.
          </p>
          <p className="emphasis">The system does not just monitor — it acts.</p>
        </DetailSection>

        <DetailSection title="Designed for Sustainability">
          <p>
            Our renewable energy division supports eco-certified components, high-efficiency technologies, and
            resource-optimized infrastructure.
          </p>
          <p>We guide clients toward cleaner operations through:</p>
          <ul>
            <li>Reduced emissions</li>
            <li>Improved energy independence</li>
            <li>Lower operating costs</li>
            <li>Long-term environmental impact tracking</li>
          </ul>
          <p className="emphasis">Energy becomes part of a regenerative ecosystem — not just a utility.</p>
        </DetailSection>
      </div>

      <div className="wrap">
        <Philosophy
          title="The Greecon Energy Philosophy"
          lines={[
            "Energy should not be wasteful. It should not be disconnected. It should not be unpredictable. Energy should be intelligent.",
            "Greecon integrates renewable generation, storage, automation, and analytics into one seamless system — reconnecting modern infrastructure with the logic of nature.",
            "We do not simply install solar panels. We design energy ecosystems."
          ]}
        />
      </div>

      <ReturnMark />

      <Contact email="energy@greecon.earth" />
      <SiteFooter />
    </main>
  );
}
