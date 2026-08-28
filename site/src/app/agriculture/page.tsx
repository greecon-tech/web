import type { Metadata } from "next";
import { Contact, SiteFooter } from "../../components/Contact";
import { BackHome, DetailIntro, DetailSection, Philosophy, ReturnMark } from "../../components/DetailPage";
import { AgricultureIcon } from "../../components/icons";

export const metadata: Metadata = {
  title: "Agriculture — Greecon",
  description:
    "Greecon's smart agriculture systems use IoT sensors to monitor soil, water, and weather conditions for a new generation of connected, efficient farms."
};

export default function AgriculturePage() {
  return (
    <main className="detail-page">
      <BackHome />

      <DetailIntro
        icon={<AgricultureIcon />}
        title="Agriculture"
        subtitle="Intelligence Rooted in the Earth"
        intro="Our smart agriculture systems use IoT sensors to monitor soil, water, and weather conditions. Farmers get clear insights that help reduce waste, improve yields, and save resources — building a new generation of connected, efficient farms."
      />

      <div className="detail-body wrap">
        <DetailSection title="Smart Monitoring Systems">
          <p>Greecon deploys advanced IoT sensors that measure:</p>
          <ul>
            <li>Soil moisture</li>
            <li>Soil temperature</li>
            <li>EC and pH levels</li>
            <li>Light intensity</li>
            <li>Water levels</li>
            <li>Climate conditions</li>
          </ul>
          <p>Every variable is tracked continuously, creating a live digital profile of the land.</p>
          <p className="emphasis">The result is precision — not guesswork.</p>
        </DetailSection>

        <DetailSection title="Smart Irrigation">
          <p>
            Water is delivered based on actual plant needs and real-time environmental data. Our intelligent
            irrigation systems combine soil data with weather forecasting to optimize watering cycles. This reduces
            water usage, lowers operational costs, and increases crop yield.
          </p>
          <p className="emphasis">Every drop becomes measurable. Every cycle becomes intentional.</p>
        </DetailSection>

        <DetailSection title="Smart Greenhouses">
          <p>Greecon integrates automated greenhouse control systems including:</p>
          <ul>
            <li>Ventilation management</li>
            <li>Temperature and humidity control</li>
            <li>CO₂ optimization</li>
            <li>Intelligent lighting systems</li>
          </ul>
          <p>
            Greenhouses evolve from static structures into responsive environments that adapt continuously to plant
            requirements.
          </p>
          <p className="emphasis">Production becomes predictable. Conditions become stable. Efficiency increases.</p>
        </DetailSection>

        <DetailSection title="Automated Fertigation">
          <p>Nutrient delivery is automated through fertigation systems that respond directly to soil data. This ensures:</p>
          <ul>
            <li>Reduced fertilizer waste</li>
            <li>Improved plant health</li>
            <li>Balanced soil conditions</li>
            <li>Higher agricultural productivity</li>
          </ul>
          <p className="emphasis">Nutrition becomes precise, not excessive.</p>
        </DetailSection>

        <DetailSection title="Digital Farm Mapping">
          <p>The Greecon Platform enables digital mapping of fields, crops, and operational zones. Farmers and operators can:</p>
          <ul>
            <li>Track agricultural activity</li>
            <li>Monitor performance across zones</li>
            <li>Analyze production data</li>
            <li>Optimize resource allocation</li>
          </ul>
          <p className="emphasis">The entire farm becomes visible — in real time.</p>
        </DetailSection>

        <DetailSection title="Integrated Intelligence">
          <p>
            At the center of the system stands the <strong>Greecon Platform</strong>. All sensors, irrigation
            systems, greenhouse controls, and environmental data connect into one unified dashboard. The platform
            analyzes trends, predicts needs, and automates decisions.
          </p>
          <p className="emphasis">Agriculture becomes proactive — not reactive.</p>
        </DetailSection>

        <DetailSection title="Designed for Sustainable Growth">
          <p>Greecon agriculture solutions are built to:</p>
          <ul>
            <li>Reduce water consumption</li>
            <li>Lower energy usage</li>
            <li>Increase yield per hectare</li>
            <li>Minimize environmental impact</li>
            <li>Improve long-term soil health</li>
          </ul>
          <p className="emphasis">Sustainability becomes operational — not theoretical.</p>
        </DetailSection>
      </div>

      <div className="wrap">
        <Philosophy
          title="The Greecon Agriculture Philosophy"
          lines={[
            "The land does not need more pressure.",
            "It needs more intelligence.",
            "Greecon integrates data, automation, and ecological logic into one connected agricultural ecosystem.",
            "We do not modernize farming for complexity. We modernize it for balance."
          ]}
        />
      </div>

      <ReturnMark />

      <Contact email="agriculture@greecon.earth" />
      <SiteFooter />
    </main>
  );
}
