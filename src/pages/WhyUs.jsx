import React from 'react';

const REASONS = [
  {
    num: '01', title: 'WHO-GMP Certified Manufacturing',
    desc: 'Every batch tested, every product verified before dispatch, no exceptions.',
  },
  {
    num: '02', title: 'Pan-India Distribution',
    desc: '20+ states covered with uninterrupted cold-chain logistics and on-time delivery.',
  },
  {
    num: '03', title: '500+ Product Portfolio',
    desc: 'Tablets, capsules, syrups, injectables, topicals, across 12 therapeutic segments.',
  },
  {
    num: '04', title: 'Fully Regulatory Compliant',
    desc: 'FSSAI, CDSCO, Schedule M & M+ compliant, documentation always audit-ready.',
  },
  {
    num: '05', title: 'AI-Powered Business Tools',
    desc: 'ZuAI, ZuDoc, ZuSupply, ZuAnalytics, giving our partners a real competitive edge.',
  },
  {
    num: '06', title: 'Transparent Partner Model',
    desc: 'Clear margins, honest pricing, and a partner-first culture behind 100+ relationships.',
  },
  {
    num: '07', title: 'Young & Visionary Leadership',
    desc: 'Driven by a fresh, forward-thinking management team bringing innovative perspectives.',
  },
  {
    num: '08', title: 'Fast Growing Company',
    desc: 'Characterized by rapid expansion and momentum, signaling reliability and market trust.',
  },
  {
    num: '09', title: 'Ethical Business Policy',
    desc: 'Committed to integrity and high moral standards at the heart of all operations.',
  },
  {
    num: '10', title: 'Transparent Dealing',
    desc: 'Prioritizing open, honest communication to build long-term trust with partners.',
  },
];

const AI_TOOLS = [
  {
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70&auto=format&fit=crop',
    badge: 'AI Tool', title: 'ZuAI',
    desc: 'Demand forecasting, product recommendations, and territory market intelligence.',
  },
  {
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=70&auto=format&fit=crop',
    badge: 'Doctor Connect', title: 'ZuDoc',
    desc: 'Digital detailing, e-prescription tracking, and doctor relationship management.',
  },
  {
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&q=70&auto=format&fit=crop',
    badge: 'Supply Chain', title: 'ZuSupply',
    desc: 'Real-time inventory, automated reorder alerts, and seamless mobile ordering.',
  },
  {
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=70&auto=format&fit=crop',
    badge: 'Analytics', title: 'ZuAnalytics',
    desc: 'Sales dashboards, territory performance reports, and growth insights.',
  },
];

const ValueProposition = () => (
  <div className="why-value-prop">
    <div className="why-value-prop-inner">
      <i className="fa-solid fa-handshake why-value-prop-icon" aria-hidden="true"></i>
      <div className="why-value-prop-content">
        <p className="why-value-prop-tagline">Most Pharmaceutical Companies only sell stocks but Zupharm provides</p>
        <p className="why-value-prop-title">KNOWLEDGE + SYSTEM + STRATEGY</p>
        <p className="why-value-prop-tagline">Because when you grow, Zupharm grows.</p>
      </div>
      <i className="fa-solid fa-chart-line why-value-prop-icon" aria-hidden="true"></i>
    </div>
  </div>
);

const WhyUs = () => (
  <>
    {/* Why grid */}
    <section className="why" id="why">
      <div className="container">
        <div className="why-header">
          <span className="label">Why Choose Us</span>
          <h2>The Zupharm Advantage</h2>
          <div className="why-badges-container">
            <h4>Our Certifications :-</h4>
            <div className="why-badges-images">
              <img src="/assets/Images/ISOcertified_1.png" alt="ISO certified" />
              <img src="/assets/Images/CMPcertified_1.png" alt="CMP certified" />
              <img src="/assets/Images/CompetitivePricing_1.png" alt="Competitive pricing" />
            </div>
          </div>
        </div>
        <ValueProposition />
        <div className="why-grid">
          {REASONS.map(({ num, title, desc }) => (
            <div className="why-item" key={num}>
              <div className="why-item-num">{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* AI tools */}
    <section className="ai-section">
      <div className="container">
        <div className="ai-header">
          <span className="label label-light">Technology Suite</span>
          <h2>Powered by<em>Intelligence</em></h2>
        </div>
        <div className="ai-tools">
          {AI_TOOLS.map(({ img, badge, title, desc }) => (
            <div className="ai-tool" key={title}>
              <div className="ai-tool-img">
                <img src={img} alt={title} />
              </div>
              <div className="ai-badge">{badge}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default WhyUs;
