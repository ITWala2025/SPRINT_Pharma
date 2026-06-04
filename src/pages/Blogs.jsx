import React, { useState, useEffect } from 'react';

// 1. Curated Static Blog Data with verified, non-recycled pharmaceutical imagery
const BLOG_DATA = [
  {
    id: 1,
    title: "Understanding WHO-GMP Certification in Pharma Manufacturing",
    date: "May 15, 2026",
    author: "Dr. RK Sharma",
    // Clean automation line packing capsules/tablets in a real manufacturing plant
    image: "https://images.unsplash.com/photo-1607619056574-7b8d304f3c6f?auto=format&fit=crop&q=80&w=600",
    excerpt: "What does it mean to be a WHO-GMP certified pharmaceutical manufacturer? Explore the stringent quality standards Zupharma maintains.",
    content: `WHO-GMP (World Health Organization - Good Manufacturing Practices) certification is the gold standard for pharmaceutical manufacturing. It ensures that products are consistently produced and controlled according to strict international quality standards. 
    
    At Zupharma Laboratories, our facility undergoes rigorous testing checking everything from raw material purity, cleanroom environment control, equipment validation, to staff execution. Having this certification ensures that our products meet global requirements for healthcare safety, giving our PCD franchise partners absolute confidence in what they distribute.`,
    category: "Quality Assurance"
  },
  {
    id: 2,
    title: "The Rising Demand for PCD Pharma Franchise in India",
    date: "June 02, 2026",
    author: "Zupharma Growth Team",
    // Professional pharma business distribution layout, clear healthcare context
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=600",
    excerpt: "Discover why investing in a PCD Pharma Franchise with Zupharma is currently one of the most profitable and low-risk business opportunities.",
    content: `The pharmaceutical sector in India is expanding exponentially, and the Propaganda Cum Distribution (PCD) model is driving a major chunk of this growth. For entrepreneurs, it offers a low-investment, high-return entry point into the healthcare industry with exclusive monopoly distribution rights. 
    
    By partnering with an established manufacturer like Zupharma Laboratories, franchise owners get access to a massive portfolio of ready-to-sell products (including Cardiac, Neuro, or Paediatrics ranges) without worrying about manufacturing overheads. This article covers the legal requirements, market strategies, and simple steps to launch your territory successfully.`,
    category: "Business & Franchise"
  },
  {
    id: 3,
    title: "Advances in Neurological and Cardiac Care Formulations",
    date: "April 28, 2026",
    author: "Zupharma R&D Department",
    // Premium macro photography of clean pharmaceutical pills and formulation batches
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=600",
    excerpt: "A deep dive into how modern formulation techniques at Zupharma are enhancing the bio-availability and efficacy of chronic medications.",
    content: `Chronic conditions like cardiovascular diseases and neurological disorders require precise and long-term drug administration. Recent advancements in drug delivery systems, such as sustained-release matrices and nanotechnology-driven formulations, have vastly improved patient compliance. 
    
    These innovations minimize side effects by maintaining steady, predictable drug levels in the bloodstream. Our research team breaks down how these advanced formulations are developed in our labs and why they represent the future of modern therapeutic care.`,
    category: "Research & Development"
  },
  {
    id: 4,
    title: "Quality Control Standards for Paediatric Liquid Formulations",
    date: "April 10, 2026",
    author: "Quality Management Team",
    // Clean laboratory setup showing liquid medicine processing
    image: "https://images.unsplash.com/photo-1579154204601-01588f35116f?auto=format&fit=crop&q=80&w=600",
    excerpt: "Ensuring accurate dosing, palatability, and absolute safety profiles for critical infant and child liquid healthcare products.",
    content: `Developing medications for paediatrics involves unique challenges, primarily regarding dosage accuracy and taste masking. Children require body-weight-specific dosing parameters, meaning liquid stability must remain pristine over the entire shelf-life.
    
    At Zupharma Laboratories, we utilize advanced chemical evaluation techniques to guarantee uniform suspension of active ingredients in oral liquids. This prevents toxic sediment configurations and guarantees that every single drop contains the mathematically intended therapeutic amount.`,
    category: "Quality Assurance"
  },
  {
    id: 5,
    title: "Navigating Marketing Rights for Pan-India Franchisees",
    date: "March 18, 2026",
    author: "Legal & Corporate Relations",
    // Executive desk with analytics and data tools for market mapping
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600",
    excerpt: "Understanding monopoly agreements and distribution permissions to protect your regional market investments.",
    content: `When establishing a franchise footprint, understanding the structural boundaries of your monopoly agreement is vital. Monopoly distribution privileges guarantee that no other individual can distribute the same brand parent assets within your designated postal framework.
    
    Zupharma provides clear, transparent legal documents protecting our distribution nodes across Bihar, UP, and Jharkhand. We walk you through standard practices for tracking target metrics and preventing operational overlap from neighboring areas.`,
    category: "Business & Franchise"
  },
  {
    id: 6,
    title: "The Future of Anti-infective Therapies and Resistance",
    date: "February 24, 2026",
    author: "Clinical Research Board",
    // Scientific laboratory assistant viewing active cultures/compounds through a microscope
    image: "https://images.unsplash.com/photo-1532187863486-abf9d39d6618?auto=format&fit=crop&q=80&w=600",
    excerpt: "How innovative manufacturing combinations help produce anti-infectives capable of tackling resilient microbial mutations.",
    content: `Antimicrobial resistance requires constant therapeutic innovation. Pathogens naturally evolve defensive adaptations against common anti-infectives, requiring updated drug designs with modified chemical configurations.
    
    Zupharma is heavily invested in updating active pharmaceutical formulations to optimize standard target therapies. By manufacturing highly synergistic broad-spectrum antibiotics and antivirals under perfect physical isolation spaces, we ensure maximum pure potencies designed to prevent unexpected compound degradation.`,
    category: "Research & Development"
  }
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedBlog]);

  // --- VIEW 1: Detailed Single Blog View ---
  if (selectedBlog) {
    return (
      <div style={styles.pageWrapper}>
        <div style={styles.heroSection}>
          <div style={styles.heroOverlay} />
          <div style={styles.heroContainer}>
            <span style={styles.heroCategoryBadge}>{selectedBlog.category}</span>
            <h1 style={styles.heroTitleDetail}>{selectedBlog.title}</h1>
          </div>
        </div>

        <div style={styles.contentContainer}>
          <button onClick={() => setSelectedBlog(null)} style={styles.backButton}>
            &larr; Back to All Articles
          </button>
          
          <article style={styles.blogPost}>
            <div style={styles.detailImageWrapper}>
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title} 
                style={styles.detailImage} 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600"; }}
              />
            </div>
            <div style={{ padding: '40px' }}>
              <div style={styles.meta}>
                Published by <strong>{selectedBlog.author}</strong> on {selectedBlog.date} | <span>Zupharma Laboratories</span>
              </div>
              <hr style={styles.divider} />
              <div style={styles.content}>
                {selectedBlog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} style={styles.paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }

  // --- VIEW 2: Premium Hero & Grid List of All Blogs ---
  return (
    <div style={styles.pageWrapper}>
      <div style={styles.heroSection}>
        <div style={styles.heroOverlay} />
        <div style={styles.heroContainer}>
          <span style={styles.heroSubtitle}>OUR KNOWLEDGE CENTRE</span>
          <h1 style={styles.heroTitleMain}>Insights &amp; Innovation Across Pharmaceutical Ecosystems</h1>
          <p style={styles.heroDescription}>
            From advanced WHO-GMP clinical manufacturing practices to pan-India distribution strategies, explore professional updates from the Zupharma research labs.
          </p>
        </div>
      </div>

      <div style={styles.gridContainer}>
        <div style={styles.blogGrid}>
          {BLOG_DATA.map((blog) => (
            <div 
              key={blog.id} 
              style={styles.card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.02)';
              }}
            >
              <div style={styles.imageWrapper}>
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  style={styles.cardImage} 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=600"; }}
                />
              </div>
              <div style={styles.cardBody}>
                <div style={styles.cardHeader}>
                  <span style={styles.cardCategory}>{blog.category}</span>
                  <span style={styles.cardDate}>{blog.date}</span>
                </div>
                <h2 style={styles.cardTitle}>{blog.title}</h2>
                <p style={styles.cardExcerpt}>{blog.excerpt}</p>
                <button 
                  onClick={() => setSelectedBlog(blog)} 
                  style={styles.readMoreButton}
                >
                  Read Full Article &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// 3. Corporate Premium UI Theme System
const styles = {
  pageWrapper: {
    width: '100%',
    backgroundColor: '#f8fafc',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    minHeight: '100vh',
  },
  heroSection: {
    position: 'relative',
    width: '100%',
    background: 'linear-gradient(135deg, #0A4F55 0%, #062A34 100%)', 
    padding: '160px 20px 100px 20px', 
    boxSizing: 'border-box',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(13, 115, 119, 0.15) 0%, transparent 50%)',
    pointerEvents: 'none',
  },
  heroContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2,
  },
  heroSubtitle: {
    color: '#0D7377',
    fontSize: '0.9rem',
    fontWeight: '700',
    letterSpacing: '0.15em',
    display: 'block',
    marginBottom: '15px',
  },
  heroTitleMain: {
    fontSize: '2.8rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0 0 20px 0',
    maxWidth: '850px',
    lineHeight: '1.25',
    letterSpacing: '-0.01em',
  },
  heroTitleDetail: {
    fontSize: '2.4rem',
    fontWeight: '700',
    color: '#ffffff',
    margin: '0',
    maxWidth: '900px',
    lineHeight: '1.3',
  },
  heroDescription: {
    fontSize: '1.15rem',
    color: 'rgba(255, 255, 255, 0.75)',
    maxWidth: '700px',
    lineHeight: '1.65',
    margin: 0,
  },
  heroCategoryBadge: {
    background: 'rgba(224, 242, 241, 0.15)',
    color: '#e0f2f1',
    padding: '6px 14px',
    borderRadius: '6px',
    fontSize: '0.85rem',
    fontWeight: '600',
    display: 'inline-block',
    marginBottom: '20px',
    border: '1px solid rgba(255,255,255,0.1)',
  },
  gridContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '60px 20px 100px 20px',
  },
  contentContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 20px 100px 20px',
  },
  blogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
    gap: '35px',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #eef2f6',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.02)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease',
  },
  imageWrapper: {
    width: '100%',
    height: '220px',
    overflow: 'hidden',
    backgroundColor: '#f1f5f9',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  cardBody: {
    padding: '26px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '14px',
  },
  cardCategory: {
    background: '#e0f2f1', 
    color: '#0A4F55',
    padding: '5px 10px',
    borderRadius: '6px',
    fontSize: '0.78rem',
    fontWeight: '600',
  },
  cardDate: {
    color: '#94a3b8',
    fontSize: '0.82rem',
  },
  cardTitle: {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: '#0f172a',
    margin: '0 0 12px 0',
    lineHeight: '1.45',
    height: '2.9em',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
  },
  cardExcerpt: {
    color: '#475569',
    fontSize: '0.95rem',
    lineHeight: '1.6',
    marginBottom: '24px',
    height: '4.8em',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
  },
  readMoreButton: {
    background: 'none',
    border: 'none',
    color: '#0D7377', 
    fontWeight: '700',
    cursor: 'pointer',
    padding: 0,
    textAlign: 'left',
    fontSize: '0.95rem',
  },
  backButton: {
    background: 'transparent',
    color: '#475569',
    border: '1px solid #cbd5e1',
    padding: '10px 20px',
    borderRadius: '6px',
    cursor: 'pointer',
    marginBottom: '25px',
    fontWeight: '600',
    fontSize: '0.95rem',
  },
  blogPost: {
    background: '#fff',
    borderRadius: '16px',
    boxShadow: '0 4px 25px rgba(0,0,0,0.03)',
    border: '1px solid #e2e8f0',
    overflow: 'hidden',
  },
  detailImageWrapper: {
    width: '100%',
    height: '420px',
    backgroundColor: '#f1f5f9',
  },
  detailImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  meta: {
    color: '#64748b',
    fontSize: '0.95rem',
  },
  divider: {
    border: '0',
    borderTop: '1px solid #edf2f7',
    margin: '20px 0 25px 0',
  },
  content: {
    lineHeight: '1.85',
    fontSize: '1.05rem',
    color: '#334155',
  },
  paragraph: {
    marginBottom: '22px',
  }
};

export default Blogs;