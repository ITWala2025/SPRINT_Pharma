import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-top">

        {/* Brand column */}
        <div className="f-brand">
          <div className="f-logo-row">
            <div className="f-logo-mark">Zu</div>
            <span className="f-logo-name">Zupharm Laboratories</span>
          </div>
          <p>
            Healing Smarter. Reaching Further. WHO-GMP certified pharmaceutical
            manufacturer and PCD franchise company with pan-India presence.
          </p>
          <div className="f-socials">
            <a href="#" className="f-social" aria-label="Facebook">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#" className="f-social" aria-label="LinkedIn">
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
            <li><Link to="/franchise">PCD Franchise</Link></li>
            <li><Link to="/manufacturing">Manufacturing &amp; Certifications</Link></li>
            <li><Link to="/why-us">Why Zupharm</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Products column */}
        <div className="f-col">
          <h5>Products</h5>
          <ul>
            <li><a href="#">Cardiac Care</a></li>
            <li><a href="#">Neurology</a></li>
            <li><a href="#">Respiratory</a></li>
            <li><a href="#">Paediatrics</a></li>
            <li><a href="#">Anti-infectives</a></li>
            <li><a href="#">Diabetology</a></li>
            <li><a href="#">Ophthalmology</a></li>
          </ul>
        </div>

        {/* Contact column */}
        <div className="f-col">
          <h5>Contact</h5>
          <div className="f-contact-item">
            <div className="dot" />
            <span>
              Pharmaceutical Industrial Zone,<br />
              Patna, Bihar — 800001
            </span>
          </div>
          <div className="f-contact-item">
            <div className="dot" />
            <span>+91 12345 67890</span>
          </div>
          <div className="f-contact-item">
            <div className="dot" />
            <span>info@zupharm.com</span>
          </div>
          <div className="f-contact-item">
            <div className="dot" />
            <span>www.zupharm.com</span>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Zupharm Laboratories Pvt. Ltd. All Rights Reserved.</p>
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
