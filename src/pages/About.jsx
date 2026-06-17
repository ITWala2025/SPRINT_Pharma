import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CERTS = [
  { key: 'who-gmp',    icon: 'fa-award',        title: 'WHO-GMP',       desc: 'Good Manufacturing Practice', details: 'Our facility meets WHO-GMP standards ensuring the highest levels of quality and safety in pharmaceutical manufacturing. This certification validates our commitment to excellence in production processes.' },
  { key: 'iso-9001',   icon: 'fa-certificate',   title: 'ISO 9001:2015', desc: 'Quality Management System', details: 'ISO 9001:2015 certification demonstrates our comprehensive quality management system covering all aspects of our operations from product development to customer service.' },
  { key: 'cdsco',      icon: 'fa-file-contract', title: 'CDSCO',         desc: 'Drug Controller Approved', details: 'We are approved by the Central Drugs Standard Control Organization (CDSCO), ensuring all our drugs meet stringent regulatory requirements for safety and efficacy.' },
  { key: 'schedule-m', icon: 'fa-heartbeat',     title: 'Schedule M+',   desc: 'D&C Act Compliance', details: 'Schedule M+ compliance demonstrates our adherence to the most stringent manufacturing regulations under the Drugs and Cosmetics Act for production of pharmaceutical products.' },
  { key: 'fssai',      icon: 'fa-apple-alt',     title: 'FSSAI',         desc: 'Food Safety Standards Authority', details: 'FSSAI certification ensures our products meet the highest standards for food and pharmaceutical safety established by the Food Safety and Standards Authority of India.' },
];

const VALUES = [
  { icon: 'fa-handshake',       title: 'Integrity',      desc: 'We operate with honesty, transparency, and uncompromising ethical standards to build lasting trust.' },
  { icon: 'fa-people-group',  title: 'Respect',     desc: 'We value people, diverse perspective, and foster a culture of dignity and collaboration.' },
  { icon: 'fa-shield-alt', title: 'Safety & Quality',  desc: 'We prioritize patient safety and maintain the highest quality and regulatory standards.' },
   { icon: 'fa-lightbulb',     title: 'Innovation',     desc: "Continous improvement and breakthrough research drive us forward every single day." },
  { icon: 'fa-users',      title: 'Collaboration',        desc: 'We work together with partners, patients, and communities to achieve better outcomes.' },
  { icon: 'fa-globe',      title: 'Sustainability', desc: 'We pursue responsible growth while caring for our environment and communities.' },
];

const About = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
  <>
    {/* ── CERTIFICATION MODAL ── */}
    {selectedCert && (
      <div className="cert-modal-overlay" onClick={() => setSelectedCert(null)}>
        <div className="cert-modal" onClick={(e) => e.stopPropagation()}>
          <button className="cert-modal-close" onClick={() => setSelectedCert(null)}>
            <i className="fas fa-times" />
          </button>
          <div className="cert-modal-icon">
            <i className={`fas ${selectedCert.icon}`} />
          </div>
          <h3 className="cert-modal-title">{selectedCert.title}</h3>
          <p className="cert-modal-subtitle">{selectedCert.desc}</p>
          <p className="cert-modal-details">{selectedCert.details}</p>
        </div>
      </div>
    )}

    {/* ── PAGE HERO ── */}
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=1600&q=80&auto=format&fit=crop')" }}>
        {/* Dotted background removed */}
      <div className="page-hero-inner">
        <div className="page-hero-eyebrow">About Zupharm</div>
        <h1>India's Trusted<br />Pharmaceutical Partner.</h1>
        <p>
          15+ years of manufacturing excellence, 500+ formulations, and a relentless
          commitment to science, quality, and the health of millions.
        </p>
        <div className="page-hero-cta-row">
          <a href="#vision" className="page-hero-cta">
            <i className="fas fa-eye" /> Our Vision
          </a>
          <a href="#mission" className="page-hero-cta">
            <i className="fas fa-bullseye" /> Our Mission
          </a>
          <Link to="/why-us" className="page-hero-cta">
            <i className="fas fa-star" /> Why Zupharm?
          </Link>
        </div>
      </div>
    </div>

    {/* ── COMPANY INTRO ── */}
    <section className="about" id="about">
      <div className="container">
        <div className="about-inner">
          <div className="about-left">
            <span className="label">Who We Are</span>
            <h2>India's Trusted Name in Pharmaceutical Excellence</h2>
            <p>
              Zupharm Laboratories Pvt. Ltd. is a fast-growing Indian pharmaceutical company commited to delivering high-quality, affordable, & effective medicines across India.
              Founded with a Vision to build trust through quality, Zupharm focuses on ethical marketing, Strong Doctor relationships & long term business partnership.
            </p>
            <p>
              From research to distribution, every step is guided by scientific rigour,
              regulatory compliance, and a genuine passion for improving lives.
            </p>
            <ul className="about-checks">
              <li><div className="check-dot" />WHO-GMP, ISO 9001:2015, FSSAI &amp; CDSCO certified</li>
              <li><div className="check-dot" />500+ formulations across 12 therapeutic segments</li>
              <li><div className="check-dot" />Exclusive territory model with pan-India coverage</li>
              <li><div className="check-dot" />Dedicated R&amp;D with 15+ years of domain expertise</li>
               <li><div className="check-dot" />AI-powered tools, ZuAI, ZuDoc, ZuSupply, ZuAnalytics</li>
            </ul>
            <Link to="/franchise" className="btn-main">
              <i className="fas fa-handshake" /> Become a Partner
            </Link>
          </div>
          <div className="about-right">
            <div className="about-main-img">
              <img
                src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=700&q=80&auto=format&fit=crop"
                alt="Zupharm manufacturing facility"
              />
            </div>
            <div className="about-accent">
              <div className="big">15+</div>
              <div className="small">Years of<br />Excellence</div>
            </div>
          </div>
        </div>

        {/* Certifications carousel */}
        <div className="section-subheader" style={{ marginTop: 0 }}>
          <span className="label">Accreditation</span>
          <h3>Verified Partner Certifications</h3>
        </div>
        <div className="cert-carousel">
          <div className="carousel-track">
            {[...CERTS, ...CERTS].map((c, i) => (
              <div
                key={i}
                className="cert-logo-card"
                onClick={() => setSelectedCert(c)}
                aria-hidden={i >= CERTS.length ? 'true' : undefined}
                tabIndex={i >= CERTS.length ? -1 : 0}
                role="button"
              >
                <div className="logo-icon"><i className={`fas ${c.icon}`} /></div>
                <div className="logo-title">{c.title}</div>
                <div className="logo-desc">{c.desc}</div>
                <div className="cert-click-hint">Click for details</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ── VISION & MISSION ── */}
    <section className="about-vm-section">
      <div className="vm-inner">

        {/* Vision */}
        <div className="vm-block" id="vision">
          <div className="vm-block-text">
            <div className="vm-eyebrow">Our Vision</div>
            <h2>To Lead the Way in Pharmaceutical Innovation</h2>
            <p>
              To establish Zupharm Labpratories Pvt. Ltd. as a globally respected pharmaceutical
              organization known for innovation, uncompromising quality standards, and ethical
              healthcare solutions.
            </p>
          </div>
          <div className="vm-visual">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=700&q=80&auto=format&fit=crop"
               alt="Zupharm vision, pharmaceutical innovation"
            />
            <div className="vm-visual-overlay" />
          </div>
        </div>

        {/* Mission */}
        <div className="vm-block vm-block--reverse" id="mission">
          <div className="vm-block-text">
            <div className="vm-eyebrow">Our Mission</div>
            <h2>Delivering Quality Medicines. Building Healthy Lives.</h2>
            <p>
              To manufacture and deliver safe, effective, and affordable pharmaceutical 
              products while maintaining regulatory excellence, fostering long-term partnerships,
              and contributing to a healthier society worldwide.
            </p>
          </div>
          <div className="vm-visual">
            <img
              src="public/images/sterile_injectables.png"
               alt="Zupharm vision, pharmaceutical innovation"
            />
            <div className="vm-visual-overlay" />
          </div>
        </div>

      </div>
    </section>

    {/* ── CORE VALUES ── */}
    <section className="values-section">
      <div className="values-section-inner">
        <div className="values-section-header">
          <span className="label">What We Stand For</span>
          <h2>Our Core Values</h2>
        </div>
        <div className="values-grid-zu">
          {VALUES.map(({ icon, title, desc }) => (
            <div className="value-card-zu" key={title}>
              <div className="value-icon"><i className={`fas ${icon}`} /></div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
  );
};

export default About;
