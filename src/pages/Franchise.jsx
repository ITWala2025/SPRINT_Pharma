import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const STATES = [
  'Bihar', 'Uttar Pradesh', 'Jharkhand', 'West Bengal',
  'Delhi', 'Maharashtra', 'Rajasthan', 'Other',
];

const USPS = [
  {
    num: '01',
    title: 'Exclusive Territory Rights',
    desc: 'Protected zones across all major cities and districts. No intra-company competition.',
  },
  {
    num: '02',
    title: 'Complete Promotional Kit',
    desc: 'Visual aids, MR bags, product samples, and full marketing material, delivered to you.',
  },
  {
    num: '03',
    title: 'Dedicated Support Manager',
    desc: 'A personal account manager available 6 days a week, from onboarding to growth.',
  },
  {
    num: '04',
    title: 'No Internal Competition',
    desc: 'Protected from intra-company rivalry, maximizing your business potential.',
  },
  {
    num: '05',
    title: 'Long-term Business Partnership',
    desc: 'Stable and sustainable partnership model designed for mutual growth and success.',
  },
  {
    num: '06',
    title: 'High Profit Margins',
    desc: 'Competitive pricing structure that ensures strong profitability for our partners.',
  },
  {
    num: '07',
    title: 'Visual Aids',
    desc: 'Professional marketing materials and visual content for your promotional campaigns.',
  },
  {
    num: '08',
    title: 'MR Bags and Product Kits',
    desc: 'Complete Medical Representative kits and product samples for field operations.',
  },
  {
    num: '09',
    title: 'Visiting Cards and Reminder Cards',
    desc: 'Professionally designed stationery and marketing collateral for client engagement.',
  },
  {
    num: '10',
    title: 'Sample Products',
    desc: 'Quality product samples to support your sales and distribution efforts.',
  },
  {
    num: '11',
    title: 'Digital Posters and Social Media Materials',
    desc: 'Ready-to-use digital content and creative materials for online marketing.',
  },
];

const CAROUSEL_IMAGES = [
  '/assets/Images/Franchise1.png',
  '/assets/Images/Franchise2.png',
  '/assets/Images/Franchise3.png',
  '/assets/Images/Franchise4.png',
];

const Franchise = () => {
  const [form, setForm] = useState({
    name: '',
    mobile: '',
    email: '',
    city: '',
    product: '',
    businessType: '',
    message: '',
    state: '',
  });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % CAROUSEL_IMAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/franchise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Submission failed');
      }

      alert('Application sent successfully!');
      setForm({
        name: '',
        mobile: '',
        email: '',
        city: '',
        product: '',
        businessType: '',
        message: '',
        state: '',
      });
    } catch (err) {
      alert('Error sending application: ' + err.message);
    }
  };

  return (
    <>
      <div
        className="page-hero"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&auto=format&fit=crop')",
        }}
      >
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">PCD Franchise</div>
          <h1>Build Your Pharma<br />Business With Zupharm</h1>
          <p>
            Join 100+ successful partners across India with exclusive territory rights,
            complete promotional kits, and a dedicated support manager from day one.
          </p>
          <Link to="/contact" className="page-hero-cta">
            <i className="fas fa-phone-alt" /> Talk to Our Team
          </Link>
        </div>
      </div>

      <section className="franchise" id="franchise">
        <div className="container">
          <div className="franchise-inner">
            <div className="franchise-left">
              <span className="label">Our PCD Franchise Model</span>
              <h2>Build Your Pharma Business With Zupharm</h2>
              <p>
                Join 100+ successful partners across India. We provide the product,
                the support, and the systems; you bring the ambition.
              </p>
              <div className="franchise-usps">
                {USPS.map(({ num, title, desc }) => (
                  <div className="usp-row" key={num}>
                    <div className="usp-num">{num}</div>
                    <div className="usp-content">
                      <strong>{title}</strong>
                      <p>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="franchise-form-wrap">
              <h3>Apply for Authorized Distributorship</h3>
              <p>We'll respond within 24 hours with a personalised proposal.</p>
              <form onSubmit={handleSubmit}>
                <div className="f-group">
                  <label htmlFor="fr-name">Full Name</label>
                  <input
                    id="fr-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>

                  <div className="f-grid">
                    <div className="f-group">
                      <label htmlFor="fr-mobile">Mobile</label>
                      <input
                        id="fr-mobile"
                        name="mobile"
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.mobile}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="f-group">
                      <label htmlFor="fr-email">Email</label>
                      <input
                        id="fr-email"
                        name="email"
                        type="email"
                        placeholder="Your email address"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="f-grid">
                    <div className="f-group">
                      <label htmlFor="fr-product">Product Interest</label>
                      <input
                        id="fr-product"
                        name="product"
                        type="text"
                        placeholder="Product of interest"
                        value={form.product}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="f-group">
                      <label htmlFor="fr-city">City</label>
                      <input
                        id="fr-city"
                        name="city"
                        type="text"
                        placeholder="City / District"
                        value={form.city}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="f-grid">
                    <div className="f-group">
                      <label htmlFor="fr-state">State</label>
                      <select
                        id="fr-state"
                        name="state"
                        value={form.state}
                        onChange={handleChange}
                      >
                        <option value="" disabled>
                          Select your state
                        </option>
                        {STATES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="f-group">
                      <label htmlFor="fr-businessType">Business Type</label>
                      <input
                        id="fr-businessType"
                        name="businessType"
                        type="text"
                        placeholder="Distributor, reseller, etc."
                        value={form.businessType}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="f-group">
                    <label htmlFor="fr-message">Message</label>
                    <textarea
                      id="fr-message"
                      name="message"
                      placeholder="Tell us about your experience and expectations"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="f-submit">
                    Submit Application →
                  </button>
                </form>
              </div>

              <div className="franchise-carousel-card">
                <div className="franchise-carousel-header">
                  <span className="label">Our Thoughts</span>
                  <h4>Explore our partnership values</h4>
                </div>
                <div className="franchise-carousel-viewport">
                  <div
                    className="franchise-carousel-track"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                  >
                    {CAROUSEL_IMAGES.map((src, idx) => (
                      <div className="franchise-carousel-slide" key={src}>
                        <img src={src} alt={`Franchise slide ${idx + 1}`} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="franchise-carousel-dots">
                  {CAROUSEL_IMAGES.map((_, idx) => (
                    <button
                      type="button"
                      key={idx}
                      className={`franchise-carousel-dot ${idx === activeSlide ? 'active' : ''}`}
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Show slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mentorship">
        <div className="container">
          <div className="mentorship-header">
            <span className="label">Zupharm Business Mentorship Program</span>
            <h2>With Zupharm, you don't just take a franchise, You take a complete business guidance System with 1 : 1 mentorship support.</h2>
          </div>

          <div className="mentorship-grid">
            <article className="mentorship-card">
              <h3>Sales Mentorship</h3>
              <ul>
                <li>Setting monthly targets</li>
                <li>Territory expansion strategies</li>
                <li>Appointing sub-distributors</li>
                <li>Scaling from a single district to multiple districts</li>
                <li>Confidence in approaching doctors</li>
                <li>Effective medical detailing techniques</li>
                <li>Converting product samples into orders</li>
                <li>Building long-term doctor relationships</li>
                <li>Daily visit strategies</li>
              </ul>
            </article>

            <article className="mentorship-card">
              <h3>Inventory Management Guidance</h3>
              <ul>
                <li>Identifying high-demand products to stock</li>
                <li>Managing the balance between fast-moving and slow-moving stock</li>
                <li>Mitigating losses from expired products</li>
                <li>Implementing smart re-order planning</li>
              </ul>
            </article>

            <article className="mentorship-card">
              <h3>Cash Flow Management</h3>
              <ul>
                <li>Managing credit cycles effectively</li>
                <li>Guidelines on when to extend credit and when to decline</li>
                <li>Strategies to increase the velocity of money rotation</li>
                <li>Planning for profit re-investment</li>
              </ul>
            </article>
          </div>

          <div className="mentorship-cta">
            <a href="#franchise" className="btn-teal-solid">
              <i className="fas fa-handshake"></i>
              Apply for Franchise
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Franchise;
