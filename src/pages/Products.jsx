import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    img: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=400&q=70&auto=format&fit=crop',
    alt: 'Cardiac Care', count: '65+', name: 'Cardiac Care',
    desc: 'Antihypertensives, statins, anticoagulants, and cardioprotective formulations.',
  },
  {
    img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&q=70&auto=format&fit=crop',
    alt: 'Neurology', count: '48+', name: 'Neurology',
    desc: 'Antiepileptics, neuropathic pain relief, and CNS support formulations.',
  },
  {
    img: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&q=70&auto=format&fit=crop',
    alt: 'Respiratory', count: '40+', name: 'Respiratory',
    desc: 'Bronchodilators, corticosteroids, and mucolytic agents for respiratory care.',
  },
  {
    img: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&q=70&auto=format&fit=crop',
    alt: 'Paediatrics', count: '52+', name: 'Paediatrics',
    desc: 'Safe, age-appropriate formulations for infants, children, and adolescents.',
  },
  {
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=70&auto=format&fit=crop',
    alt: 'Diabetology', count: '44+', name: 'Diabetology',
    desc: 'Oral hypoglycemics, insulin sensitisers, and diabetes management solutions.',
  },
  {
    img: 'https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=400&q=70&auto=format&fit=crop',
    alt: 'Anti-infectives', count: '58+', name: 'Anti-infectives',
    desc: 'Broad-spectrum antibiotics, antivirals, antifungals, and antimalarials.',
  },
  {
    img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&q=70&auto=format&fit=crop',
    alt: 'Orthopaedics', count: '38+', name: 'Orthopaedics',
    desc: 'NSAIDs, muscle relaxants, bone health supplements, and joint care formulations.',
  },
  {
    img: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=400&q=70&auto=format&fit=crop',
    alt: 'Ophthalmology', count: '32+', name: 'Ophthalmology',
    desc: 'Eye drops, lubricants, anti-glaucoma agents, and ocular anti-infectives.',
  },
];

const Products = () => (
  <>
    {/* Page Hero */}
      <div className="page-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=1600&q=80&auto=format&fit=crop')" }}>
        {/* Dotted background pattern removed */}
      <div className="page-hero-inner">
        <div className="page-hero-eyebrow">Our Portfolio</div>
        <h1>500+ Products Across<br />12 Therapeutic Segments</h1>
           <p>
           From cardiac care to ophthalmology, every formulation developed under
           WHO-GMP standards with full regulatory compliance.
           </p>
        <Link to="/franchise" className="page-hero-cta">
          <i className="fas fa-handshake" /> Become a Franchise Partner
        </Link>
      </div>
    </div>

    <section className="products" id="products">
    <div className="container">
      <div className="products-header">
        <div>
          <span className="label">Our Portfolio</span>
          <h2>Therapeutic Categories</h2>
        </div>
        <a href="#">View all products &rarr;</a>
      </div>

      <div className="products-grid">
        {PRODUCTS.map(({ img, alt, count, name, desc }) => (
          <div className="prod-card" key={name}>
            <div className="prod-img">
              <img src={img} alt={alt} />
            </div>
            <div className="prod-count">{count} Products</div>
            <div className="prod-name">{name}</div>
            <div className="prod-desc">{desc}</div>
            <div className="prod-link">View Range <i className="fas fa-arrow-right" /></div>
          </div>
        ))}
      </div>
    </div>
  </section>
  </>
);

export default Products;
