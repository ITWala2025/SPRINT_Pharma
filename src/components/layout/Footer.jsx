import React from 'react';
import { Link } from 'react-router-dom';
import zupharmLogo from '/public/assets/Images/logo.jpg';

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const Footer = () => (
  <footer style={{
    background: 'linear-gradient(135deg, #0D7377 0%, #0A4F55 45%, #062A34 100%)',
    // subtle depth via a very light overlay to emulate soft shadow
    // using a semi‑transparent layer ensures no impact on inner content
    backgroundBlendMode: 'overlay',
  }}>
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
            <a href="https://www.facebook.com/people/Zupharm-Laboratories-Private-Limited/61590075518802/?mibextid=wwXIfr&rdid=btHgMNFYRQcO63XD&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1NFzM43UV2%2F%3Fmibextid%3DwwXIfr" className="f-social" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.linkedin.com/in/zupharm-laboratories-private-limited-b65386415/" className="f-social" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href="https://www.instagram.com/zupharmlaboratories?igsh=cjVrczZnbTJ1eDk5&utm_source=qr" className="f-social" aria-label="Instagram">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://youtube.com/@zupharmlaboratoriespvtltd?si=aMGPVnCf-mMUhcid" className="f-social" aria-label="YouTube">
              <i className="fab fa-youtube" />
            </a>
          </div>
        </div>

        {/* Navigation column */}
        <div className="f-col">
          <h5>Navigation</h5>
          <ul>
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about" onClick={scrollToTop}>About Us</Link></li>
            <li><Link to="/products" onClick={scrollToTop}>Products</Link></li>
            <li><Link to="/distributorship" onClick={scrollToTop}>Distributorship</Link></li>
            <li><Link to="/manufacturing" onClick={scrollToTop}>Manufacturing & Certifications</Link></li>
            <li><Link to="/why-us" onClick={scrollToTop}>Why Zupharm</Link></li>
            <li><Link to="/contact" onClick={scrollToTop}>Contact</Link></li>
          </ul>
        </div>

        {/* Products column */}
        <div className="f-col">
          <h5>Products</h5>
          <ul>
            <li><Link to="/products" onClick={scrollToTop}>Cardiac Care</Link></li>
            <li><Link to="/products" onClick={scrollToTop}>Neurology</Link></li>
            <li><Link to="/products" onClick={scrollToTop}>Respiratory</Link></li>
            <li><Link to="/products" onClick={scrollToTop}>Paediatrics</Link></li>
            <li><Link to="/products" onClick={scrollToTop}>Anti-infectives</Link></li>
            <li><Link to="/products" onClick={scrollToTop}>Diabetology</Link></li>
            <li><Link to="/products" onClick={scrollToTop}>Ophthalmology</Link></li>
          </ul>
        </div>

        {/* Knowledge Centre */}
        <div className="f-col">
          <h5>Knowledge Centre</h5>
          <ul>
            {/* Swapped standard anchor link with React Router Link to hook into /blogs */}
            <li><Link to="/blogs" onClick={scrollToTop}>Blogs</Link></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="f-col">
          <h5>Contact</h5>
          <div className="f-contact-item">
          <div className="dot" />
          <span>
            <strong>Head Office:</strong><br />
            79, DSIDC, Okhla Industrial Area,<br />
            Phase 1, New Delhi - 110020
          </span>
          </div>

          <div className="f-contact-item">
          <div className="dot" />
          <span>
            <strong>Corporate Office:</strong><br />
            Unitech Cyber Park, Tower D, 9th Floor,<br />
            Innov8, Sec - 39, Gurugram,<br />
            Haryana - 122001
          </span>
          </div>
          <div className="f-contact-item">
            <div className="dot" />
            <span>+91 9931855705</span>
          </div>
          <div className="f-contact-item">
            <div className="dot" />
            <a href="mailto:contact@zupharm.com" style={{ color: 'inherit', textDecoration: 'none' }}><span>contact@zupharm.com</span></a>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zupharm Laboratories Pvt. Ltd. All Rights Reserved.</p>
        <p>
          Built with Precision and Care by{" "}
          <a
          href="https://sprint.naturalelements.co.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-credit-link"
          >
          <strong>SPRINT</strong>
          </a>
        </p>
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