import React from "react";
import { ManufacturingHero } from "../components/ManufacturingHero";
import { Tabs } from "../components/Tabs";
import { Accordion } from "../components/Accordion";
import { CertificationCarousel } from "../components/CertificationCarousel";
import { DownloadButton } from "../components/DownloadButton";

// Sample data – in a real project this would be fetched from JSON files
const heroData = {
  bgImage: "/assets/hero-manufacturing.jpg",
  title: "Manufacturing Excellence",
  subtitle: "Innovative solutions for modern pharma production",
};

const tabsData = [
  { label: "Capabilities", content: <p>Our manufacturing capabilities...</p> },
  { label: "Quality", content: <p>Quality assurance processes...</p> },
];

const accordionItems = [
  { title: "Regulatory Compliance", content: <p>Details about compliance.</p> },
  { title: "Sustainability", content: <p>Our sustainability initiatives.</p> },
];

const logos = [
  "/assets/logos/logo1.png",
  "/assets/logos/logo2.png",
  "/assets/logos/logo3.png",
  "/assets/logos/logo4.png",
];

export const Manufacturing = () => (
  <main className="manufacturing-page">
    <ManufacturingHero {...heroData} />
    <section className="my-8 px-4">
      <Tabs tabs={tabsData} defaultActive={0} />
    </section>
    <section className="my-8 px-4">
      <Accordion items={accordionItems} />
    </section>
    <section className="my-8 px-4">
      <CertificationCarousel logos={logos} />
    </section>
    <section className="my-8 px-4 flex justify-center">
      <DownloadButton filePath="/assets/pdfs/research.pdf" label="Download Research" />
    </section>
  </main>
);

export default Manufacturing;
