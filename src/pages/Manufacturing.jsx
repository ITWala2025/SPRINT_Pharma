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
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80&auto=format&fit=crop',
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

const Manufacturing = () => {
  const [activeTab, setActiveTab] = useState('sterile');
  const [openFaq, setOpenFaq] = useState(null);

  const currentTab = TABS.find(t => t.id === activeTab);

  return (
    <>
    {/* Hero — full width, outside container */}
      <div className="manufacturing-hero">
      <div className="hero-overlay" />
      <div className="hero-content">
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
                <div className="accordion-item" key={i}>
                  <button
                    className="accordion-header"
                    aria-expanded={isOpen}
                    aria-controls={`acc-body-${i}`}
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span>{item.q}</span>
                    <span className="acc-icon"><i className="fas fa-chevron-down" /></span>
                  </button>
                  {isOpen && (
                    <div className="accordion-body" id={`acc-body-${i}`} role="region">
                      <div className="accordion-content"><p>{item.a}</p></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Download */}
          <div className="download-section">
            <div className="download-card">
              <div className="download-info">
                <div className="download-icon-big"><i className="far fa-file-pdf" /></div>
                <div className="download-text">
                  <h4>Manufacturing Capability Brochure</h4>
                  <p>
                    Get detailed plant specifications, machinery details, sterile line
                    capacities, and full compliance information (PDF, 4.2 MB).
                  </p>
                </div>
              </div>
              <a href="/assets/pdfs/brochure.pdf" download className="download-btn">
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
