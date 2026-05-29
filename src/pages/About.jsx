import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CERTS = [
  { key: 'who-gmp',    icon: 'fa-award',        title: 'WHO-GMP',       desc: 'Good Manufacturing Practice' },
  { key: 'iso-9001',   icon: 'fa-certificate',   title: 'ISO 9001:2015', desc: 'Quality Management System' },
  { key: 'cdsco',      icon: 'fa-file-contract', title: 'CDSCO',         desc: 'Drug Controller Approved' },
  { key: 'schedule-m', icon: 'fa-heartbeat',     title: 'Schedule M+',   desc: 'D&C Act Compliance' },
  { key: 'fssai',      icon: 'fa-apple-alt',     title: 'FSSAI',         desc: 'Food Safety Standards Authority' },
];

const VALUES = [
  { icon: 'fa-leaf',       title: 'Integrity',      desc: 'We uphold the highest standards of honesty and transparency in every decision we make.' },
  { icon: 'fa-lightbulb',  title: 'Innovation',     desc: 'Continuous improvement and breakthrough research drive us forward every single day.' },
  { icon: 'fa-users',      title: 'Collaboration',  desc: 'We work together with partners, patients, and communities to achieve better outcomes.' },
   { icon: 'fa-heart',      title: 'Compassion',     desc: "People's health and well-being are at the heart of everything we do, without exception." },
  { icon: 'fa-shield-alt', title: 'Quality',        desc: 'Rigorous standards ensure the safety, efficacy, and consistency of every product we deliver.' },
  { icon: 'fa-globe',      title: 'Sustainability', desc: 'We commit to environmentally responsible practices for the planet and future generations.' },
];

  const About = () => {
    // Track which certificate card is expanded. Only one can be active at a time.
    const [activeCertKey, setActiveCertKey] = useState(null);
    // Track which value card is expanded. Only one active at a time.
    const [activeValueKey, setActiveValueKey] = useState(null);
    return (
  <>
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
              Zupharm Laboratories Pvt. Ltd. is a WHO-GMP certified pharmaceutical company
              committed to delivering high-quality, affordable medicines. Our state-of-the-art
              manufacturing facility operates under the strictest global quality standards.
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
             {/* Render each certificate as an interactive card */}
          {CERTS.map((c) => {
                const isActive = activeCertKey === c.key;
                return (
                  <div
                    key={c.key}
                    className={`cert-logo-card${isActive ? ' active' : ''}`}
                    role="button"
                    tabIndex={0}
                    onClick={() => setActiveCertKey(isActive ? null : c.key)}
                    onKeyDown={(e) => e.key === 'Enter' && setActiveCertKey(isActive ? null : c.key)}
                  >
                    <div className="logo-icon"><i className={`fas ${c.icon}`} /></div>
                    <div className="logo-title">{c.title}</div>
                    <div className="logo-desc">{c.desc}</div>
                  </div>
                );
              })}
          {/* Modal overlay for expanded certificate details */}
          <div className={`cert-modal-overlay${activeCertKey ? ' open' : ''}`} onClick={() => setActiveCertKey(null)}>
            {activeCertKey && (
              <div className="cert-modal" onClick={e => e.stopPropagation()}>
                <button className="cert-modal-close" onClick={() => setActiveCertKey(null)} aria-label="Close">
                  <i className="fas fa-times" />
                </button>
                <div className="cert-modal-content">
                  {(() => {
                    const c = CERTS.find(item => item.key === activeCertKey);
                    if (!c) return null;
                    return (
                      <>
                        <div className="cert-modal-header">
                          <div className="cert-modal-icon"><i className={`fas ${c.icon}`} /></div>
                          <div className="cert-modal-title-group">
                            <h2 className="cert-modal-title">{c.title}</h2>
                            <p className="cert-modal-desc">{c.desc}</p>
                          </div>
                        </div>
                        <div className="cert-modal-body">
                          {c.key === 'who-gmp' && (
                            <p>WHO‑GMP certification ensures our facility meets <strong>World Health Organization's Good Manufacturing Practice</strong> standards — mandatory for pharmaceutical exports.</p>
                          )}
                          {c.key === 'iso-9001' && (
                            <p><strong>ISO 9001:2015</strong> is an international quality management standard ensuring consistent, high‑quality processes across all operations.</p>
                          )}
                          {c.key === 'cdsco' && (
                            <p><strong>CDSCO (Central Drugs Standard Control Organisation)</strong> approval confirms our products comply with India's drug regulatory authority requirements.</p>
                          )}
                          {c.key === 'schedule-m' && (
                            <p><strong>Schedule M+</strong> under the Drugs & Cosmetics Act defines updated GMP requirements for Indian pharmaceutical manufacturers.</p>
                          )}
                          {c.key === 'fssai' && (
                            <p><strong>FSSAI (Food Safety and Standards Authority of India)</strong> certification covers food‑grade and nutraceutical product manufacturing compliance.</p>
                          )}
                        </div>
                      </>
                    );
                  })()}
                </div>
              </div>
            )}
          </div>

            {/* {[...CERTS, ...CERTS].map((c, i) => (
              <div
                key={i}
                className="cert-logo-card"
                aria-hidden={i >= CERTS.length ? 'true' : undefined}
                tabIndex={i >= CERTS.length ? -1 : 0}
              >
                <div className="logo-icon"><i className={`fas ${c.icon}`} /></div>
                <div className="logo-title">{c.title}</div>
                <div className="logo-desc">{c.desc}</div>
              </div>
            ))} */}
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
              To be the leading catalyst for innovative pharmaceutical solutions that
               improve health outcomes worldwide, making quality medicines accessible
              to every corner of India and beyond.
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
                Deliver high-quality, affordable medicines through cutting‑edge research,
                sustainable manufacturing, and a commitment to ethical practices, ensuring
                every patient receives the standard of care they deserve.
              </p>
            </div>
            {/* Replace placeholder icon with a realistic pharma image matching Vision style */}
            <div className="vm-visual">
              <img
                src="https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=700&q=80&auto=format&fit=crop"
                alt="Zupharm mission, pharmaceutical manufacturing"
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
          {VALUES.map(({ icon, title, desc }) => {
            const isActive = activeValueKey === title;
            return (
              <div
                className={`value-card-zu${isActive ? ' active' : ''}`}
                key={title}
                role="button"
                tabIndex={0}
                onClick={() => setActiveValueKey(isActive ? null : title)}
                onKeyDown={e => e.key === 'Enter' && setActiveValueKey(isActive ? null : title)}
              >
                <div className="value-icon"><i className={`fas ${icon}`} /></div>
                <h3>{title}</h3>
                <p>{desc}</p>
                {/* Expanded extra content */}
                {isActive && (
                  <div className="value-extra">
                    <p>More details about {title} can be placed here, highlighting examples and commitments.</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
      {/* Expanded certificate details are now rendered inline within each card */}
  </>
);
}


export default About;
