import Link from "next/link";
import { Contact, SiteFooter } from "../components/Contact";
import { AgricultureIcon, EnergyIcon, GreeconMark, WaterIcon } from "../components/icons";
import { ProductCard } from "../components/ProductCard";
import { WaitlistForm } from "../components/WaitlistForm";

export default function HomePage() {
  return (
    <main>
      <div className="site-mark">
        <Link href="/" aria-label="Greecon">
          <GreeconMark size={56} />
        </Link>
      </div>

      <section className="hero wrap">
        <p>
          Once, the world ran on instinct — farmers read the sky to predict rain, communities built around rivers,
          and energy came only from what nature freely offered. As time passed, humanity advanced, but in our race
          for progress, we began to forget the balance that once connected us to the Earth. Fields grew more
          mechanical, cities more polluted, and the gap between people and nature widened.
        </p>
        <p>
          Greecon was born to restore that balance — to reconnect technology with the wisdom of nature. We envisioned
          a world where innovation serves sustainability, not the other way around. Today, Greecon brings together
          renewable energy, smart agriculture, and water management into one intelligent ecosystem powered by IoT and
          SCADA technologies. Through automation, real-time monitoring, and data-driven insight, we help communities,
          farmers, and businesses thrive while preserving the planet&rsquo;s resources.
        </p>
        <p>
          Our mission is simple yet powerful: to turn sustainability into a system — one that&rsquo;s smart,
          accessible, and beneficial for all. Greecon is more than a company; it&rsquo;s a movement to rebuild harmony
          between progress and the planet.
        </p>
      </section>

      <section className="product-grid wrap">
        <ProductCard href="/energy" icon={<EnergyIcon />} title="Energy">
          We create renewable energy systems that combine solar, hybrid, and agrivoltaic solutions. Every system is
          connected, monitored, and optimized through real-time data — turning clean energy into smart energy.
        </ProductCard>
        <ProductCard href="/agriculture" icon={<AgricultureIcon />} title="Agriculture">
          Our smart agriculture systems use IoT sensors to monitor soil, water, and weather conditions. Farmers get
          clear insights that help reduce waste, improve yields, and save resources — building a new generation of
          connected, efficient farms.
        </ProductCard>
        <ProductCard href="/water" icon={<WaterIcon />} title="Water">
          Greecon designs automated systems for wastewater treatment and water reuse. Our technology helps cities and
          industries recycle water and reduce their environmental footprint.
        </ProductCard>
      </section>

      <section className="platform wrap">
        <div className="platform-shot" aria-hidden="true">
          <div className="platform-shot__bar">
            <span />
            <span />
            <span />
          </div>
          <div className="platform-shot__row">
            <div />
            <div />
            <div />
          </div>
          <div className="platform-shot__line" />
          <div className="platform-shot__line" />
          <div className="platform-shot__line" style={{ width: "60%" }} />
        </div>
        <div className="platform-copy">
          <h2 className="eyebrow-heading underline">Platform</h2>
          <p>
            At <strong>the core</strong> of everything we build is the Greecon Platform — a unified SCADA-based
            system that connects all devices, sensors, and data into one intelligent dashboard. It helps our
            partners monitor, automate, and optimize their operations in real time.
          </p>
          <Link href="/technology" className="platform-link">
            See the technology &amp; process →
          </Link>
        </div>
      </section>

      <section className="statement wrap">
        <h2>Impact</h2>
        <p>
          At Greecon, we measure success through real, tangible impact — not just numbers. Our systems help reduce
          carbon emissions, recycle water, and increase agricultural productivity while strengthening local
          economies. Every project contributes to the creation of cleaner cities, smarter farms, and more
          sustainable industries. By combining automation, IoT, and data intelligence, we empower our partners to
          achieve measurable environmental and financial results. The impact of Greecon technology goes beyond
          efficiency — it&rsquo;s about building resilience, responsibility, and regeneration for generations to
          come.
        </p>
      </section>

      <section className="statement wrap">
        <h2>Partnerships</h2>
        <p>
          We believe collaboration drives innovation. Greecon works alongside leaders in renewable energy,
          telecommunications, IoT, and sustainability to co-create solutions that bring global expertise to local
          challenges. Through these partnerships, we develop scalable projects that accelerate Albania&rsquo;s and
          the region&rsquo;s transition toward a circular and green economy. Whether it&rsquo;s integrating
          renewable systems, optimizing agriculture, or improving water infrastructure, our network of partners
          helps us deliver smarter, faster, and more sustainable results for the future.
        </p>
      </section>

      <section className="statement wrap">
        <h2>The Future Is Integrated</h2>
        <p>
          Our vision is clear — a world where every system, natural or digital, works in harmony. Greecon stands at
          the intersection of technology and ecology, creating platforms that unite data, automation, and
          sustainability into one intelligent framework. We see integration as the foundation of progress: energy
          that powers food production, water that sustains life, and technology that connects it all. By merging
          these systems, we transform sustainability from an idea into a living reality — one that supports both
          people and the planet.
        </p>
      </section>

      <section className="cta">
        <div className="cta__panel">
          <h2>Be the First to Experience Nature and Technology in Harmony</h2>
          <WaitlistForm />
        </div>
      </section>

      <Contact email="info@greecon.earth" />
      <SiteFooter />
    </main>
  );
}
