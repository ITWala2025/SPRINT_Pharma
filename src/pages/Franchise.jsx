import React, { useState } from 'react';
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
];

const Franchise = () => {
  const [form, setForm] = useState({ name: '', mobile: '', email: '', city: '',product:'',businessType:'',message:'', state: '' });

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    // form submission logic goes here
  };

  return (
    <>
    {/* Page Hero */}
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&auto=format&fit=crop')" }}>
        {/* Dotted background removed */}
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
            <span className="label">PCD Franchise</span>
            <h2>Build Your Pharma Business With Zupharm</h2>
            <p>
              Join 100+ successful partners across India. We provide the product,
               the support, and the systems, you bring the ambition.
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
            <h3>Apply for Franchise</h3>
            <p>We'll respond within 24 hours with a personalised proposal.</p>
            <form onSubmit={handleSubmit}>
              <div className="f-group">
                <label htmlFor="fr-name">Full Name</label>
                <input
                  id="fr-name" name="name" type="text"
                  placeholder="Your full name"
                  value={form.name} onChange={handleChange}
                />
              </div>
              <div className="f-grid">
                <div className="f-group">
                  <label htmlFor="fr-mobile">Mobile</label>
                  <input
                    id="fr-mobile" name="mobile" type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.mobile} onChange={handleChange}
                  />
                </div>
                <div className="f-group">
                  <label htmlFor="fr-city">Email</label>
                  <input
                    id="fr-city" name="email" type="email"
                    placeholder="Your email address"
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>
              <div className="f-grid">
                <div className="f-group">
                  <label htmlFor="fr-mobile">Product Interest</label>
                  <input
                    id="fr-mobile" name="product" type="text"
                    placeholder="Product of interest"
                    value={form.product} onChange={handleChange}
                  />
                </div>
                <div className="f-group">
                  <label htmlFor="fr-city">City</label>
                  <input
                    id="fr-city" name="city" type="text"
                    placeholder="Your city"
                    value={form.city} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="f-group">
                <label htmlFor="fr-state">State</label>
                <select
                  id="fr-state" name="state"
                  value={form.state} onChange={handleChange}
                >
                  <option value="" disabled>Select your state</option>
                  {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="f-group">
                <label htmlFor="fr-name">Message</label>
                <input
                  id="fr-name" name="message" type="text"
                  placeholder="Your message"
                  value={form.message} onChange={handleChange}
                />
              </div>
              <button type="submit" className="f-submit">
                Submit Application &rarr;
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
    </>
  );
};

export default Franchise;
