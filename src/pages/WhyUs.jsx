import React from 'react';

const REASONS = [
  {
    num: '01', title: 'WHO-GMP Certified Manufacturing',
    desc: 'Every batch tested, every product verified before dispatch — no exceptions.',
  },
  {
    num: '02', title: 'Pan-India Distribution',
    desc: '20+ states covered with uninterrupted cold-chain logistics and on-time delivery.',
  },
  {
    num: '03', title: '500+ Product Portfolio',
    desc: 'Tablets, capsules, syrups, injectables, topicals — across 12 therapeutic segments.',
  },
  {
    num: '04', title: 'Fully Regulatory Compliant',
    desc: 'FSSAI, CDSCO, Schedule M & M+ compliant — documentation always audit-ready.',
  },
  {
    num: '05', title: 'AI-Powered Business Tools',
    desc: 'ZuAI, ZuDoc, ZuSupply, ZuAnalytics — giving our partners a real competitive edge.',
  },
  {
    num: '06', title: 'Transparent Partner Model',
    desc: 'Clear margins, honest pricing, and a partner-first culture behind 100+ relationships.',
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

const WhyUs = () => (
  <>
    {/* Why grid */}
    <section className="why" id="why">
      <div className="container">
        <div className="why-header">
          <span className="label">Why Choose Us</span>
          <h2>The Zupharm Advantage</h2>
        </div>
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
          <h2>Powered by <em>Intelligence</em></h2>
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
