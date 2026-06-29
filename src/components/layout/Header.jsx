import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import zupharmLogo from '/public/assets/Images/logo.jpg';

const NAV_ITEMS = [
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Distributorship', to: '/distributorship' },
  { label: 'Manufacturing', to: '/manufacturing' },
  { label: 'Contact', to: '/contact' },
];

const Header = () => {
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header id="site-header">

      {/* Layer 1 Announcement Bar */}
      <div className={`header-layer header-announce${showAnnouncement ? '' : ' hidden'}`}>
        <div className="announce-inner">
          <span className="announce-dot" />
          <p>
            Now accepting Propaganda Cum Distributorship applications for{' '}
            <strong>Bihar, UP &amp; Jharkhand</strong>,{' '}
            <Link to="/distributorship">Apply Today &rarr;</Link>
          </p>
          <button
            className="announce-close"
            aria-label="Close announcement"
            onClick={() => setShowAnnouncement(false)}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>

      {/* Layer 2 Brand + Navigation */}
      <div className="header-layer header-brand-strip">
        <div className="brand-strip-inner">
          <Link to="/" className="nav-logo" title="Zupharm Laboratories">
            <img src={zupharmLogo} alt="Zupharm Laboratories" className="logo-img" />
          </Link>

          <nav className="nav-pill" id="navPill">
            <ul className="nav-links">
              {NAV_ITEMS.map(({ label, to }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            <NavLink to="/distributorship" className="nav-cta">
              <i className="fas fa-handshake" /> Apply for Distributorship
            </NavLink>

            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(prev => !prev)}
            >
              <span /><span /><span />
            </button>
          </nav>
        </div>
      </div>

      {/* ── FULL-SCREEN MOBILE MENU ── */}
      <div
        className={`mob-overlay${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Backdrop click to close */}
        <div className="mob-backdrop" onClick={() => setMenuOpen(false)} />

        {/* Sliding panel */}
        <div className="mob-panel">

          {/* Panel top bar */}
          <div className="mob-panel-header">
            <Link to="/" className="mob-logo nav-logo" onClick={() => setMenuOpen(false)} title="Zupharm Laboratories">
              <img src={zupharmLogo} alt="Zupharm Laboratories" className="logo-img mob-logo-img" />
            </Link>
            <button
              className="mob-close"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Divider */}
          <div className="mob-panel-divider" />

          {/* Navigation items */}
          <nav className="mob-nav" aria-label="Main navigation">
            {NAV_ITEMS.map(({ label, to }, i) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) => `mob-nav-item${isActive ? ' is-active' : ''}`}
                style={{ '--i': i }}
                onClick={() => setMenuOpen(false)}
              >
                <span className="mob-nav-num">0{i + 1}</span>
                <span className="mob-nav-label">{label}</span>
                <span className="mob-nav-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </NavLink>
            ))}
          </nav>

          {/* Bottom dock */}
          <div className="mob-panel-foot">
            <Link
              to="/distributorship"
              className="mob-cta-btn"
              onClick={() => setMenuOpen(false)}
            >
              <span className="mob-cta-icon"><i className="fas fa-handshake" /></span>
              <span>Apply for Distributorship</span>
              <span className="mob-cta-arrow"><i className="fas fa-arrow-right" /></span>
            </Link>
            <div className="mob-trust-strip">
              <span className="mob-trust-item">
                <i className="fas fa-shield-alt" /> WHO-GMP Certified
              </span>
              <span className="mob-trust-dot">·</span>
              <span className="mob-trust-item">500+ Products</span>
              <span className="mob-trust-dot">·</span>
              <span className="mob-trust-item">20+ States</span>
            </div>
          </div>

        </div>
      </div>

    </header>
  );
};

export default Header;
