import React from 'react';
import { Link } from 'react-router-dom';
import zupharmLogo from '/images/logo.jpg';

const Footer = () => (
  <footer style={{
    background: 'linear-gradient(135deg, #0D7377 0%, #0A4F55 45%, #062A34 100%)',
    // subtle depth via a very light overlay to emulate soft shadow
    // using a semi‑transparent layer ensures no impact on inner content
    backgroundBlendMode: 'overlay',
  } }>
    <div className="container">
      <div className="footer-top">

        {/* Brand column */}
        <div className="f-brand">
          <div className="f-logo-row">
            <img src={zupharmLogo} alt="Zupharm Laboratories" className="f-logo-img" />
            <span className="f-logo-name">Zupharm Laboratories</span>
          </div>
          <p>
            Healing Smarter. Reaching Further. WHO-GMP certified pharmaceutical
            manufacturer and Propaganda Cum Distributorship company with pan-India presence.
          </p>
          <div className="f-socials">
            <a href="#" className="f-social" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.linkedin.com/in/zupharm-laboratories-private-limited-b65386415/" className="f-social" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="#" className="f-social" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="f-social" aria-label="YouTube">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div className="f-col">
          <h5>Navigation</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/distributorship">Distributorship</Link></li>
            <li><Link to="/manufacturing">Manufacturing &amp; Certifications</Link></li>
            <li><Link to="/why-us">Why Zupharm</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Products column */}
        <div className="f-col">
          <h5>Products</h5>
          <ul>
            <li><Link to="/products">Cardiac Care</Link></li>
            <li><Link to="/products">Neurology</Link></li>
            <li><Link to="/products">Respiratory</Link></li>
            <li><Link to="/products">Paediatrics</Link></li>
            <li><Link to="/products">Anti-infectives</Link></li>
            <li><Link to="/products">Diabetology</Link></li>
            <li><Link to="/products">Ophthalmology</Link></li>
          </ul>
        </div>

        {/* Knowledge Centre */}
        <div className="f-col">
          <h5>Knowledge Centre</h5>
          <ul>
            {/* Swapped standard anchor link with React Router Link to hook into /blogs */}
            <li><Link to="/blogs">Blogs</Link></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="f-col">
          <h5>Contact</h5>
          <div className="f-contact-item">
            <div className="dot" />
            <span>
              Zupharm Laboratories, Pharmaceutical Industrial Zone,<br />
              Cyber Park, Sector 39, Gurugram<br />
              Haryana 122001, India
            </span>
          </div>
          <div className="f-contact-item">
            <div className="dot" />
            <span>+91 9931855705</span>
          </div>
          <div className="f-contact-item">
            <div className="dot" />
            <span>shahzad@zupharm.com</span>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zupharm Laboratories Pvt. Ltd. All Rights Reserved.</p>
        <p>Built with Precision and Care by <strong>SPRINT & ITWala</strong></p>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Disclaimer</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;