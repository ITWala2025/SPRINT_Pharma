import React, { useState } from 'react';

const INQUIRY_TYPES = [
  'General Enquiry',
  'PCD Franchise Application',
  'Product Information',
  'Contract Manufacturing',
  'Careers',
  'Other',
];

// Whatsapp Button

const WhatsAppHoverButton = () => {
  return (
    <a
      href="https://wa.me/911234567890"
      target="_blank"
      rel="noreferrer"
      className="whatsapp-float-btn"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '50px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        transition: 'all 0.3s ease-in-out',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        width: '50px',
        height: '50px',
        zIndex: 9999,
        cursor: 'pointer',
        // This force-loads the icon as a background
        backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg")',
        backgroundSize: '25px 25px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <span className="wa-text" style={{ 
        marginLeft: '45px', // Adjusted to account for the background icon
        opacity: 0, 
        transition: 'opacity 0.2s ease-in-out',
        fontSize: '15px',
        fontWeight: '500',
        color: '#fff'
      }}>
        Chat with us
      </span>

      <style>{`
        .whatsapp-float-btn:hover {
          width: 155px !important;
          padding-left: 10px !important;
          background-position: 15px center !important;
        }
        .whatsapp-float-btn:hover .wa-text {
          opacity: 1 !important;
        }
      `}</style>
    </a>
  );
};

// Contact Function

const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', inquiry: '', message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Page Hero */}
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop')" }}>
        {/* Dotted background removed */}
        <div className="page-hero-inner">
          <div className="page-hero-eyebrow">Get In Touch</div>
          <h1>Let's Talk.</h1>
          <p>
             Whether you're exploring a franchise opportunity, need product information,
             or simply have a question, we respond within 24 hours.
          </p>
        </div>
      </div>

      {/* Contact grid */}
      <section className="contact-page">
        <div className="contact-grid">

          {/* Form */}
          <div className="contact-form-card">
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, color: 'var(--teal)', marginBottom: 20 }}>
                  <i className="fas fa-check-circle" />
                </div>
                <h2 style={{ marginBottom: 12 }}>Message Received</h2>
                <p style={{ color: 'var(--muted)', lineHeight: 1.8 }}>
                  Thank you for reaching out. Our team will get back to you
                  within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2>Send Us a Message</h2>
                <p>Fill in the form and we'll be in touch shortly.</p>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="f-group">
                      <label htmlFor="ct-name">Full Name</label>
                      <input
                        id="ct-name" name="name" type="text"
                        placeholder="Your full name"
                        value={form.name} onChange={handleChange} required
                      />
                    </div>
                    <div className="f-group">
                      <label htmlFor="ct-phone">Phone</label>
                      <input
                        id="ct-phone" name="phone" type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone} onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="f-group">
                    <label htmlFor="ct-email">Email Address</label>
                    <input
                      id="ct-email" name="email" type="email"
                      placeholder="you@company.com"
                      value={form.email} onChange={handleChange} required
                    />
                  </div>

                  <div className="f-group">
                    <label htmlFor="ct-inquiry">Type of Enquiry</label>
                    <select
                      id="ct-inquiry" name="inquiry"
                      value={form.inquiry} onChange={handleChange}
                    >
                      <option value="" disabled>Select an enquiry type</option>
                      {INQUIRY_TYPES.map(t => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="f-group">
                    <label htmlFor="ct-message">Message</label>
                    <textarea
                      id="ct-message" name="message"
                      placeholder="Tell us more about your enquiry…"
                      value={form.message} onChange={handleChange} required
                    />
                  </div>

                  <button type="submit" className="contact-submit">
                    <i className="fas fa-paper-plane" /> Send Message
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info sidebar */}
          <div className="contact-info-stack">

            <div className="contact-info-block">
              <h3>Contact Details</h3>
              <div className="contact-detail">
                <div className="contact-detail-icon"><i className="fas fa-map-marker-alt" /></div>
                <div className="contact-detail-text">
                  <strong>Address</strong>
                  <span>Pharmaceutical Industrial Zone,<br />Patna, Bihar, 800001</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><i className="fas fa-phone-alt" /></div>
                <div className="contact-detail-text">
                  <strong>Phone</strong>
                  <span>+91 12345 67890</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><i className="fas fa-envelope" /></div>
                <div className="contact-detail-text">
                  <strong>Email</strong>
                  <span>info@zupharm.com</span>
                </div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><i className="fas fa-clock" /></div>
                <div className="contact-detail-text">
                  <strong>Office Hours</strong>
                  <span>Mon – Sat, 9:00 AM – 6:00 PM IST</span>
                </div>
              </div>
            </div>

            {/* <div className="contact-info-block"> 
              <h3>Quick Connect</h3>
              <div className="contact-quick-btns">
                <a
                  href="https://wa.me/911234567890"
                  className="btn-wa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-whatsapp" /> Chat on WhatsApp
                </a>
                <a href="mailto:info@zupharm.com" className="btn-email">
                  <i className="fas fa-envelope" /> Send an Email
                </a>
              </div>
            </div> */}

            <div className="contact-info-block">
              <h3>Franchise Enquiries</h3>
              <p style={{ fontSize: 14, color: 'var(--muted)', lineHeight: 1.75, marginBottom: 16 }}>
                Interested in a PCD Franchise? Visit our dedicated franchise page for
                territory availability and application.
              </p>
              <a
                href="/franchise"
                className="btn-teal-solid"
                style={{ display: 'inline-flex', textDecoration: 'none', borderRadius: 4 }}
              >
                <i className="fas fa-handshake" /> Apply for Franchise
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Add Whatsapp Button */}

      <WhatsAppHoverButton />

    </>
  );
};

export default Contact;
