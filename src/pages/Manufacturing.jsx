import React, { useState } from 'react';

const TABS = [
  {
    id: 'sterile',
    icon: 'fa-syringe',
    label: 'Sterile Injectables',
    title: 'Sterile Injectables Production',
    body: 'Our advanced aseptic processing line features zero-human-touch operations, utilizing barrier technologies and isolation systems to maintain absolute sterility.',
    features: [
      'ISO Class 5 / Grade A cleanrooms',
      'Lyophilization & liquid filling lines',
      'Capacity of 50M+ vials/ampoules annually',
    ],
    img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=500&q=80&auto=format&fit=crop',
    imgAlt: 'Aseptic syringe manufacturing',
  },
  {
    id: 'solids',
    icon: 'fa-pills',
    label: 'Oral Solid Dosage',
    title: 'Oral Solid Dosage Forms',
    body: 'High-speed compression and encapsulation technologies designed for high capacity, uniformity, and controlled-release formulations.',
    features: [
      'Coated, uncoated, and bilayer tablets',
      'Dry powder & capsule filling lines',
      'Integrated automated blister packaging',
    ],
    img: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80&auto=format&fit=crop',
    imgAlt: 'Pill manufacturing line',
  },
  {
    id: 'rd',
    icon: 'fa-microscope',
    label: 'Advanced R&D',
    title: 'Advanced R&D & Formulation',
    body: 'Dedicated formulation development and analytical testing laboratories helping bring safe, effective molecules from bench to commercial scale.',
    features: [
      'ICH stability testing chambers',
      'HPLC & analytical instrumentation suite',
      'Technology transfer & scale-up support',
    ],
    img: 'public/images/sterile_injectables.png',
    imgAlt: 'Advanced research laboratory',
  },
];

const FAQ = [
  {
    q: 'What regulatory certifications does your manufacturing facility hold?',
    a: 'Our primary facility is WHO-GMP certified, ISO 9001:2015 accredited, FSSAI approved, and operates under strict CDSCO regulations. We follow Schedule M & M+ guidelines for all pharmaceutical manufacturing operations.',
  },
  {
    q: 'Do you offer contract / third-party manufacturing services?',
    a: 'Yes, we provide end-to-end contract manufacturing services. This includes formulation customization, regulatory dossier support, raw material sourcing, packaging design, and batch release certification.',
  },
  {
    q: 'What is the typical lead time for a production batch?',
    a: 'Typical lead times range between 30 to 45 days after formulation approval and artwork finalization. Urgent production slots can sometimes be accommodated depending on the capacity schedule.',
  },
];

const RESEARCH_QUALITY = [
  {
    id: 'clinical',
    title: 'Clinical Research & Bioequivalence',
    description: 'Our dedicated bioequivalence testing laboratories conduct rigorous clinical studies following ICH Q2(R2) guidelines. We perform BE studies for generic formulations with AESI monitoring, pharmacokinetic profiling, and full statistical analysis to support regulatory submissions across global markets.',
    icon: 'fa-flask-vial',
  },
  {
    id: 'qa',
    title: 'Quality Assurance & Validation',
    description: 'Comprehensive QA protocols ensure every batch meets international standards. Our validation includes process validation, analytical method validation, stability testing, and environmental monitoring. We maintain ISO 9001:2015 certification with zero-defect manufacturing principles.',
    icon: 'fa-certificate',
  },
  {
    id: 'innovation',
    title: 'Innovation & Product Development',
    description: 'Our R&D team specializes in novel drug delivery systems, formulation optimization, and process innovation. We collaborate with pharmaceutical companies for technology transfer, conduct feasibility studies, and develop next-generation products with advanced release mechanisms and bioavailability enhancement.',
    icon: 'fa-lightbulb',
  },
];

const QUALITY_PDFS = [
  {
    id: 'manufacturing-brochure',
    title: 'Manufacturing Capability Brochure',
    description: 'Get detailed plant specifications, machinery details, sterile line capacities, and full compliance information (PDF, 4.2 MB).',
    filename: 'brochure.pdf',
  },
];

const Manufacturing = () => {
  const [activeTab, setActiveTab] = useState('sterile');
  const [openFaq, setOpenFaq] = useState(null);
  const [openResearch, setOpenResearch] = useState(null);

  const currentTab = TABS.find(t => t.id === activeTab);

  return (
    <>
      {/* Hero full width, outside container */}
        <div className="manufacturing-hero">
        <div className="hero-overlay" />
        <div className="hero-content flex flex-col items-center text-center">
          <span className="hero-tagline">
            <i className="fas fa-industry" /> Next-Gen Production
          </span>
          <h2>State of the Art Manufacturing</h2>
          <p>
            Operating at the intersection of technological innovation and regulatory
            excellence. Our WHO-GMP certified facilities are engineered for maximum
            safety, precision, and scalability.
          </p>
        </div>
      </div>

    <section className="manufacturing" id="manufacturing">
      <div className="container">
        <div className="manufacturing-inner">

          {/* Tabs */}
          <div className="tabs">
            <div className="tab-buttons" role="tablist" aria-label="Manufacturing Capabilities">
              {TABS.map(tab => (
                <button
                  key={tab.id}
                  className={`tab-btn${activeTab === tab.id ? ' active' : ''}`}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  aria-controls={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <i className={`fas ${tab.icon}`} /> {tab.label}
                </button>
              ))}
            </div>
            <div className="tab-contents">
              <div className="tab-content active" id={`tab-${activeTab}`} role="tabpanel">
                <div className="capability-grid">
                  <div className="capability-info">
                    <h3>{currentTab.title}</h3>
                    <p>{currentTab.body}</p>
                    <ul className="capability-features">
                      {currentTab.features.map(f => (
                        <li key={f}><i className="fas fa-check-circle" /> {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="capability-visual">
                    <img src={currentTab.img} alt={currentTab.imgAlt} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="section-subheader">
            <span className="label">Audits &amp; Standards</span>
            <h3>Frequently Asked Questions</h3>
          </div>
          <div className="accordion">
            {FAQ.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div className="accordion-item mb-4" key={i}>
                  <button
                    className="accordion-header"
                    aria-expanded={isOpen}
                    aria-controls={`acc-body-${i}`}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span className="question-text">{item.q}</span>
                    <span className="acc-icon"><i className="fas fa-chevron-down" /></span>
                  </button>
                  {isOpen && (
                    <div className="accordion-body open" id={`acc-body-${i}`} role="region">
                      <div className="accordion-content">
                        <p>{item.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Research & Quality Section */}
          <div className="research-quality">
            <div className="section-subheader">
              <span className="label">Research & Quality</span>
              <h3>Innovation Backed by Quality Assurance</h3>
            </div>

            <div className="research-grid">
              {/* Left: Accordion */}
              <div className="research-accordion-column">
                <div className="accordion research-accordion">
                  {RESEARCH_QUALITY.map((item, i) => {
                    const isOpen = openResearch === i;
                    return (
                      <div className="accordion-item research-accordion-item" key={i}>
                        <button
                          className="accordion-header research-accordion-header"
                          aria-expanded={isOpen}
                          aria-controls={`research-acc-body-${i}`}
                          onClick={() => setOpenResearch(isOpen ? null : i)}
                        >
                          <div className="accordion-header-left">
                            <div className="accordion-icon">
                              <i className={`fas ${item.icon}`} />
                            </div>
                            <span className="accordion-title">{item.title}</span>
                          </div>
                          <span className="acc-icon chevron-icon"><i className="fas fa-chevron-down" /></span>
                        </button>
                        {isOpen && (
                          <div
                            className="accordion-body research-accordion-body open"
                            id={`research-acc-body-${i}`}
                            role="region"
                          >
                            <div className="accordion-content">
                              <p>{item.description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="download-section">
            <div className="download-card">
              <div className="download-info">
                <div className="download-icon-big"><i className="far fa-file-pdf" /></div>
                <div className="download-text">
                  <h4>{QUALITY_PDFS[0].title}</h4>
                  <p>{QUALITY_PDFS[0].description}</p>
                </div>
              </div>
              <a href={`/assets/pdfs/${QUALITY_PDFS[0].filename}`} download className="download-btn">
                <span className="btn-text">Download Brochure</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Manufacturing;
