import type { Metadata } from "next";
import { Contact, SiteFooter } from "../../components/Contact";
import { BackHome, ReturnMark } from "../../components/DetailPage";
import { GaiaMark } from "../../components/icons";

export const metadata: Metadata = {
  title: "GAIA Tech — Greecon",
  description:
    "GAIA Tech is the proprietary intelligence inside the Greecon Platform — the core system that turns connected infrastructure into one coordinated ecosystem."
};

export default function GaiaPage() {
  return (
    <main className="detail-page">
      <BackHome />

      <header className="gaia-hero">
        <div className="gaia-hero__mark">
          <GaiaMark size={100} className="gaia-hero__icon" />
          <div className="gaia-hero__wordmark">
            <span>GAIA</span>
            <small>TECH</small>
          </div>
        </div>
        <div className="detail-lede">
          <p>
            GAIA Tech is the proprietary intelligence inside the Greecon Platform. It is the core system that turns
            connected infrastructure into one coordinated ecosystem, so energy, water, and agriculture can operate
            together instead of as separate systems.
          </p>
        </div>
      </header>

      <div className="gaia-body wrap">
        <p>
          <strong>Built on a safety-first control philosophy,</strong> GAIA Tech continuously senses real-world
          conditions, validates data quality, models the state of the system, and executes disciplined automation
          through a hierarchical rules engine. Every action follows clear priorities, where protection and stability
          come before optimization.
        </p>
        <p>
          GAIA Tech connects equipment and sensors through a <strong>unified integration layer</strong>, translating
          different devices and protocols into one internal language. This makes the platform resilient and
          adaptable, because the system logic remains consistent even when hardware vendors or site configurations
          change.
        </p>
        <p>
          GAIA Tech runs as a <strong>hybrid edge-and-cloud architecture.</strong> The edge layer enables local
          autonomy, real-time control, and offline operation when connectivity is limited, while the cloud layer
          supports long-term analytics, multi-site coordination, reporting, and continuous improvement of system
          performance.
        </p>
        <p>
          <strong>Across energy,</strong> GAIA Tech helps monitor production and consumption, manage storage
          behavior, and reduce operational waste through smarter scheduling and prioritization. <strong>Across
          water,</strong> it supports automated pumping logic, tank and pressure control, leak detection signals,
          and efficiency tracking. <strong>Across agriculture,</strong> it enables sensor-driven irrigation
          decisions, climate-aware scheduling, and resource-aware automation that protects productivity without
          harming the environment.
        </p>
        <p>
          GAIA Tech is designed to <strong>be simple on the surface and powerful underneath.</strong> Users see clear
          status, clean dashboards, and understandable actions, while the underlying system maintains auditability,
          control integrity, and reliable performance through continuous feedback loops.
        </p>
        <p>
          This is the engine that makes <strong>Greecon scalable</strong>. It brings order to complexity, translates
          environmental reality into operational decisions, and helps communities and businesses run cleaner, more
          efficient systems with measurable outcomes.
        </p>
      </div>

      <ReturnMark />

      <Contact email="info@greecon.earth" />
      <SiteFooter />
    </main>
  );
}
