import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Animated counter hook ── */
function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

/* ── Stats strip with intersection-triggered counters ── */
const StatsBar = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const products = useCounter(50, 1600, visible);
  const states   = useCounter(20,  1200, visible);
  const partners = useCounter(100, 1400, visible);

  return (
    <div className="stats-bar" ref={ref}>
      <div className="stats-bar-inner">
        <div className="stat-cell">
          <div className="stat-num">{products}+</div>
          <div className="stat-txt">Products Available</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">{states}+</div>
          <div className="stat-txt">States Covered</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num">{partners}+</div>
          <div className="stat-txt">Distributorship Partners</div>
        </div>
        <div className="stat-cell">
          <div className="stat-num who">WHO<span>-GMP</span></div>
          <div className="stat-txt">International Certified</div>
        </div>
      </div>
    </div>
  );
};

const FEATURED_PRODUCTS = [
  {
    img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=600&q=80&auto=format&fit=crop',
    count: '5+', name: 'Cardiac Care',
    desc: 'Antihypertensives, statins, anticoagulants, and cardioprotective formulations.',
  },
  {
    img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80&auto=format&fit=crop',
    count: '5+', name: 'Respiratory',
    desc: 'Bronchodilators, corticosteroids, and mucolytic agents for respiratory care.',
  },
  {
    img: 'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=600&q=80&auto=format&fit=crop',
    count: '5+', name: 'Anti-infectives',
    desc: 'Broad-spectrum antibiotics, antivirals, antifungals, and antimalarials.',
  },
];

const Home = () => (
  <>
    {/* ── HERO ── */}
    <section className="hero" id="home">
      <div className="hero-inner">

        <div className="hero-text">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">WHO-GMP Certified Manufacturer</span>
          </div>

          <h1 className="hero-title-xl">
            Healing Smarter.<br />
            <em>Reaching Further.</em>
          </h1>

          <p className="hero-sub">
            India's next-generation pharmaceutical partner, built on science,
            scaled with trust, and powered by innovation across 20+ states.
          </p>

          <div className="hero-actions">
            <Link to="/products" className="btn-main">
              <i className="fas fa-th-large" /> Explore Products
            </Link>
            <Link to="/distributorship" className="btn-ghost">
              Apply for Distributorship
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <Link to="/why-us" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 20, fontSize: 13, fontWeight: 600, color: 'var(--teal)', letterSpacing: 0.2 }}>
            <i className="fas fa-star" style={{ fontSize: 11 }} /> Discover the Zupharm Advantage
          </Link>

          <div className="hero-social-proof">
            <div className="proof-avatars">
              {['ZA', 'RK', 'MS', 'PD'].map(initials => (
                <div className="proof-avatar" key={initials}>{initials}</div>
              ))}
            </div>
            <p className="proof-text">
              <strong>100+ Distributors</strong> trust Zupharm across India
            </p>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-stat-float">
            <div className="num">50<span>+</span></div>
            <div className="txt">Certified Products</div>
          </div>
          <div className="hero-img-wrap">
            <img
              src="https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=800&q=85&auto=format&fit=crop"
              alt="Pharmaceutical research laboratory"
            />
            <div className="hero-img-caption">
              <strong>State of the Art Facility</strong>
               <p>WHO-GMP certified manufacturing plant, built for precision, designed for scale.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAR (inside hero) ── */}
      <StatsBar />
    </section>

    {/* ── BENTO CAPABILITIES ── */}
    <section className="home-bento">
      <div className="bento-header">
        <span className="label">Our Strengths</span>
        <h2>Built Different.<br /><em>Built Better.</em></h2>
      </div>
      <div className="bento-grid">

        {/* Large dark card */}
        <div className="bento-card bento-card--hero">
          <div className="bento-bg" />
          <div className="bento-content">
            <div>
              <div className="bento-hero-badge">
                <span className="announce-dot" style={{ background: 'var(--teal-lt)' }} />
                WHO-GMP Certified
              </div>
              <div className="bento-num">01</div>
              <h3>Your Trusted Partner in Pharmaceutical Manufacturing</h3>
              <p>
                 Every formulation is developed under ISO 9001:2015 and WHO-GMP protocols,
                no shortcuts, no compromises. Our 1M+ unit annual capacity runs 24/7 with
                zero-defect tolerance.
              </p>
            </div>
            <div>
              <div className="bento-hero-stat">1M+</div>
              <div className="bento-hero-stat-label">Units produced annually</div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bento-card bento-card--tall">
          <div className="bento-icon"><i className="fas fa-map-marked-alt" /></div>
          <h3>Pan-India Reach</h3>
          <p>Uninterrupted cold-chain logistics across 20+ states with exclusive territory protection for every partner.</p>
          <div className="bento-link">Learn more <i className="fas fa-arrow-right" /></div>
        </div>

        {/* Card 3 */}
        <div className="bento-card bento-card--wide">
          <div className="bento-icon"><i className="fas fa-microscope" /></div>
          <h3>Research & Product Development Support</h3>
          <p>15+ years of domain expertise. ICH stability testing, HPLC analytical suites, and dedicated technology transfer support.</p>
          <div className="bento-link">Our lab <i className="fas fa-arrow-right" /></div>
        </div>

        {/* Card 4 */}
        <div className="bento-card bento-card--wide">
          <div className="bento-icon"><i className="fas fa-robot" /></div>
          <h3>AI-Powered Tools</h3>
            <p>ZuAI forecasting, ZuDoc doctor connect, ZuSupply chain management, and ZuAnalytics, your competitive edge.</p>
          <div className="bento-link">Explore suite <i className="fas fa-arrow-right" /></div>
        </div>

      </div>
    </section>

    {/* ── PRODUCTS TEASER ── */}
    <section className="home-products-teaser">
      <div className="teaser-header">
        <div>
          <span className="label">Our Portfolio</span>
          <h2>50+ Products Across<br />12 Therapeutic Segments</h2>
        </div>
        <Link to="/products">
          Browse full portfolio <i className="fas fa-arrow-right" />
        </Link>
      </div>
      <div className="teaser-grid">
        {FEATURED_PRODUCTS.map(({ img, count, name, desc }) => (
          <div className="teaser-card" key={name}>
            <div className="teaser-card-img">
              <img src={img} alt={name} />
            </div>
            <div className="teaser-card-body">
              <div className="teaser-card-count">{count} Products</div>
              <div className="teaser-card-name">{name}</div>
              <div className="teaser-card-desc">{desc}</div>
              <Link to="/products" className="teaser-card-arrow">
                View Range <i className="fas fa-arrow-right" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* ── FRANCHISE DARK CTA ── */}
    <section className="home-franchise-cta">
      <div className="franchise-cta-inner">
        <div className="franchise-cta-left">
          <span className="label label-light">Propaganda Cum Distributorship</span>
          <h2>Ready to Build Your Pharma Business?</h2>
          <p>
            Join India's fastest-growing pharmaceutical Distributors network.
            Exclusive territory rights, complete promotional kits, and a dedicated
            support manager from day one.
          </p>
          <div className="franchise-cta-actions">
            <Link to="/distributorship" className="btn-teal-solid">
              <i className="fas fa-handshake" /> Apply for Distributorship
            </Link>
            <Link to="/why-us" className="btn-ghost-white">
              Why Zupharm <i className="fas fa-arrow-right" />
            </Link>
          </div>
        </div>

        <div className="franchise-cta-numbers">
          {[
            { num: '100+', label: 'Active Partners' },
            { num: '20+',  label: 'States Covered' },
            { num: '15+',  label: 'Years in Market' },
            { num: '24h',  label: 'Response Time' },
          ].map(({ num, label }) => (
            <div className="cta-num-cell" key={label}>
              <div className="cta-num">{num}</div>
              <div className="cta-num-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Home;
