import type { Metadata } from "next";
import Link from "next/link";
import { Contact, SiteFooter } from "../../components/Contact";
import { BackHome, Philosophy } from "../../components/DetailPage";
import { ProcessDiagram } from "../../components/ProcessDiagram";

export const metadata: Metadata = {
  title: "Technology & Process — Greecon",
  description: "How Greecon designs, connects, and automates renewable energy, agriculture, and water systems."
};

const steps = [
  {
    title: "Deploy Smart Systems",
    body: "Everything begins on the ground. We design and install renewable energy, smart agriculture, and water management systems tailored to local conditions. Each system is modular, efficient, and ready to communicate — from solar panels to irrigation sensors and water treatment units. Our approach ensures flexibility and scalability, allowing projects to grow as needs evolve."
  },
  {
    title: "Connect Everything Through IoT",
    body: "Once deployed, each component is equipped with sensors and IoT devices that continuously gather real-world data. These devices form the nervous system of Greecon — transmitting information on energy output, soil quality, water levels, and system performance in real time. By connecting every part of the infrastructure, we create a living network of intelligent systems that speak the same digital language."
  },
  {
    title: "Collect and Analyze Live Data",
    body: "Data is the foundation of sustainable efficiency. Our SCADA-based platform aggregates and visualizes all sensor data in one central dashboard. Users can monitor operations, detect inefficiencies, and make faster, smarter decisions. Through predictive analytics, we identify trends before they become problems — optimizing performance while reducing costs and resource use."
  },
  {
    title: "Automate and Optimize",
    body: "The true power of Greecon lies in automation. Our platform uses advanced control logic to adjust systems dynamically — from balancing energy flow to fine-tuning irrigation or water treatment cycles. Each process is designed to self-correct and adapt, ensuring maximum efficiency and minimum environmental impact.",
    emphasis: "The result: systems that not only work — but think."
  },
  {
    title: "Scale and Sustain",
    body: "Once a system proves effective, scaling is simple. Greecon's architecture is built for interoperability — new modules, sites, or regions can be added seamlessly. We support continuous evolution through updates, remote monitoring, and on-site collaboration with local experts. Every new connection strengthens the ecosystem, moving us closer to a self-sustaining green network across Albania and beyond."
  },
  {
    title: "The Technology Behind It All",
    body: "At the core of Greecon is our unified SCADA platform, an intelligent layer that integrates data, automation, and analytics. It enables real-time monitoring, predictive maintenance, and cloud-based optimization — all tailored to each client's environment. The platform is built to grow with global sustainability standards, supporting everything from renewable energy tracking to precision farming and wastewater analytics."
  }
];

export default function TechnologyPage() {
  return (
    <main className="detail-page">
      <BackHome />

      <div className="process-diagram">
        <ProcessDiagram />
      </div>

      <section className="tech-intro wrap">
        <h1>Technology &amp; Process</h1>
        <p>
          At Greecon, we design technology that works with nature, not against it. Our systems are built on three
          pillars — integration, automation, and intelligence — combining hardware, data, and human insight to
          create sustainable impact across energy, agriculture, and water.
        </p>
      </section>

      <section className="tech-steps wrap">
        {steps.map((step) => (
          <div key={step.title}>
            <h2>{step.title}</h2>
            <p>
              {step.body} {step.emphasis ? <em>{step.emphasis}</em> : null}
            </p>
          </div>
        ))}
      </section>

      <div className="wrap">
        <Philosophy
          title="Our Philosophy"
          lines={[
            "We believe sustainability is not just about reducing harm — it's about creating intelligent systems that restore balance.",
            "Every decision at Greecon is guided by one principle: integration leads to harmony.",
            "By merging technology and ecology, we transform sustainability from a goal into a process — efficient, intelligent, and alive."
          ]}
        />
      </div>

      <p className="tech-cta wrap">
        <Link href="/gaia">Powered by GAIA Tech →</Link>
      </p>

      <Contact email="info@greecon.earth" />
      <SiteFooter />
    </main>
  );
}
