import React, { useState, useEffect } from 'react';

// 1. Curated Static Blog Data with Restructured Stable Image URLs
const BLOG_DATA = [
  {
    id: 1,
    title: "Understanding WHO-GMP Certification in Pharma Manufacturing",
    date: "May 15, 2026",
    author: "Dr. RK Sharma",
    // Swapped to a highly available pharmaceutical infrastructure asset URL
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200",
    excerpt: "What does it mean to be a WHO-GMP certified pharmaceutical manufacturer? Explore the stringent validation protocols Zupharm systematically maintains.",
    contentParagraphs: [
      "WHO-GMP (World Health Organization - Good Manufacturing Practices) certification represents the definitive international standard for modern pharmaceutical processing, verification, and safety. This framework mandates that medicinal products are dynamically controlled, systematically logged, and consistently manufactured according to the absolute highest baseline parameters for global healthcare safety. It eliminates common systemic errors inherent in any large-scale chemistry lifecycle, effectively neutralizing risks like cross-contamination, unexpected chemical sub-potency, and structural labeling flaws.",
      "At Zupharm Laboratories, our production matrices undergo continuous validation checks. This includes verifying raw chemical material purity via high-performance liquid chromatography, optimizing cleanroom microscopic air filtration (HEPA infrastructure), mapping thermal profiles of sterilization equipment, and validating staff execution protocols via digitized tracking layers. Every tablet, capsule, and injectable patch we process traces back to an unyielding chain of custody metrics.",
      "For our dedicated PCD franchise nodes and supply partners, distributed across dynamic markets, this certification serves as an ironclad baseline of product reliability. When dealing with life-saving therapies in cardiac, neurological, or pediatric spaces, absolute clinical predictability is paramount. Our strict adherence to WHO-GMP standards translates into lowered corporate liabilities for regional distributors, enhanced professional trust among hospital clinical networks, and premium clinical outcomes for patients nationwide."
    ],
    category: "Quality Assurance"
  },
  {
    id: 2,
    title: "The Rising Demand for PCD Pharma Franchise in India",
    date: "June 02, 2026",
    author: "Zupharm Growth Team",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Discover why investing in a PCD Pharma Franchise with Zupharm stands as a highly profitable and secure business opportunity in today's economy.",
    contentParagraphs: [
      "The pharmaceutical landscape in India is expanding exponentially, driven by evolving demographic patterns, expanding insurance access, and heightened medical awareness. Within this structural boom, the Propaganda Cum Distribution (PCD) framework has emerged as a premier driver for regional market expansion. For healthcare entrepreneurs, seasoned sales executives, and corporate investors, it offers a remarkably agile, low-overhead pathway into the domestic pharmaceutical market by minimizing manufacturing-side risk variables.",
      "By partnering with an established manufacturer like Zupharm Laboratories, franchise owners bypass the multi-crore structural requirements of laboratory construction, active ingredient sourcing networks, and regulatory approval wait times. Franchisees inherit an instantly deployable catalogue spanning 500+ premium formulations. This allows partners to channel all operational focus directly into local marketing operations, professional medical detailing, and customer supply chain fulfillment.",
      "To ensure long-term regional stability, Zupharm guarantees absolute monopoly distribution rights secured by tight geographical parameters. This prevents adjacent distribution channels from infringing on your designated market. Combined with our high-impact promotional kits—including medical catch-covers, visual aids, dynamic product samples, and immediate digital assistance through our AI platforms—our partners are fully equipped to capture dominant market share from day one."
    ],
    category: "Business & Franchise"
  },
  {
    id: 3,
    title: "Advances in Neurological and Cardiac Care Formulations",
    date: "April 28, 2026",
    author: "Zupharm R&D Department",
    image: "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=1200",
    excerpt: "A deep dive into how advanced molecular delivery mechanisms at Zupharm are maximizing the bioavailability of chronic critical therapies.",
    contentParagraphs: [
      "Managing chronic health conditions like cardiovascular diseases and neurological disorders demands precise, consistent blood plasma drug concentrations. Standard pharmaceutical models often produce sharp spikes and rapid drop-offs in systemic drug availability, frequently leading to breakthrough symptoms or unexpected toxicities. Zupharm’s Research and Development panel is actively countering this challenge by utilizing cutting-edge modified-release matrices and advanced molecular particle size reduction.",
      "In our cardiac portfolios, our sustained-release antihypertensive formulations ensure uniform, 24-hour therapeutic coverage. By controlling the exact rate of fluid absorption through hydrophilic polymer barriers, the tablet releases active ingredients at a predictable hourly rate. This eliminates hazardous morning blood pressure surges and improves patient compliance by reducing dosing schedules to a simple single daily administration.",
      "Simultaneously, our neurology pipelines utilize lipid-optimized molecules designed to safely navigate complex physiological barriers. By modifying physical solubility indexes, we drastically increase the rate of therapeutic absorption within central nervous networks. This enables lowered target dosages to achieve identical therapeutic effects, heavily reducing hepatic and renal clearance workloads while minimizing common systemic side effects."
    ],
    category: "Research & Development"
  },
  {
    id: 4,
    title: "The Future of Oncology Biosimilars and Targeted Biologics",
    date: "May 29, 2026",
    author: "Dr. Ananya Reddy",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351167?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Democratizing cancer therapeutics through highly complex, molecularly identical bio-engineered formulas designed for targeted cell delivery.",
    contentParagraphs: [
      "Unlike traditional chemically synthesized small-molecule medications, biosimilars are cultivated within highly sensitive living cellular systems. As foundational oncology patents expire globally, the development of reliable biologics presents a monumental shift in how clinical networks approach therapeutic oncology interventions.",
      "At Zupharm, our state-of-the-art bioreactor arrays carefully monitor parameters like cellular oxygenation levels, temperature variants, and specific metabolic outputs. This precise control ensures that each monoclonal antibody matches the master reference drug's structural integrity perfectly.",
      "For healthcare systems struggling with the crushing costs of traditional cancer treatment regimens, these approved biosimilars offer a cost-effective alternative. They drop treatment costs significantly without making a single compromise on patient survival rates or therapeutic outcomes."
    ],
    category: "Oncology & Biologics"
  },
  {
    id: 5,
    title: "AI Integration in Accelerated Drug Discovery and Chemistry",
    date: "June 06, 2026",
    author: "Prof. Amit Verma",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1200",
    excerpt: "How Zupharm leverages machine learning architectures to compress traditional multi-year compound testing windows down to mere days.",
    contentParagraphs: [
      "The conventional timeline required to move a newly discovered therapeutic molecule from laboratory benches to actual pharmacy shelves historically spans over a decade. By integrating high-performance machine learning algorithms into our computational chemistry arrays, we can now run virtual screenings on billions of chemical combinations concurrently.",
      "Our proprietary software models run predictive simulations testing how target candidate molecules interact with target disease proteins, while calculating potential hepatic toxicity scores long before any physical sample is synthesized.",
      "This integration of computer science and physical biochemistry creates a faster, highly responsive development pipeline. When regional health networks report sudden changes in bacterial resistance profiles, our teams can quickly pivot."
    ],
    category: "Information Technology"
  },
  {
    id: 6,
    title: "Phyto-Pharmaceuticals: Standardizing Herbal Medicine Pathways",
    date: "May 08, 2026",
    author: "Dr. Evelyn Vance",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=1200",
    excerpt: "Applying rigorous scientific verification and quantitative chemical isolation to bridge traditional holistic therapy with modern Western pharmacology.",
    contentParagraphs: [
      "The historical separation between traditional botanical treatments and strict, data-driven Western pharmacology is fading. Phyto-pharmaceuticals represent a rigorous scientific evolution where active botanical molecules are isolated, quantified, and packaged using the exact same strict standards applied to synthetic pharmaceutical compounds.",
      "Traditional herbal preparations often suffer from natural variations caused by soil quality changes, weather patterns, and differing harvest seasons. Zupharm's botanical science teams eliminate this unpredictability using advanced chemical fingerprinting methods.",
      "These validated natural formulations offer valuable treatment alternatives, especially for managing chronic conditions like mild metabolic imbalances, functional digestive issues, and long-term joint inflammation."
    ],
    category: "Phyto-Pharmaceuticals"
  }
];

// Fallback image asset that is guaranteed to always resolve safely
const GLOBAL_FALLBACK_IMAGE = "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=1200";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedBlog]);

  const heroImage = selectedBlog 
    ? selectedBlog.image 
    : "https://images.unsplash.com/photo-1582560475093-ba66accbc424?w=1600&q=80&auto=format&fit=crop";

  return (
    <div style={styles.pageWrapper}>
      {/* ── DYNAMIC HERO SECTION ── */}
      <div style={{ ...styles.pageHeroOverride, backgroundImage: `url(${heroImage})` }}>
        <div style={styles.pageHeroOverlayOverride} />
        <div style={styles.pageHeroInnerOverride}>
          {selectedBlog ? (
            <>
              <div style={styles.heroBadge}>
                <div style={styles.badgeDot} />
                <span style={styles.badgeTextOverride}>{selectedBlog.category}</span>
              </div>
              <h1 style={styles.heroTitleDetail}>{selectedBlog.title}</h1>
              <p style={styles.heroSubTextOverride}>
                Article written by {selectedBlog.author} • {selectedBlog.date}
              </p>
            </>
          ) : (
            <>
              <div style={styles.heroBadge}>
                <div style={styles.badgeDot} />
                <span style={styles.badgeTextOverride}>Knowledge Centre</span>
              </div>
              <h1 style={styles.heroTitleMain}>
                Insights &amp; <em style={{ color: 'var(--teal-lt)', fontStyle: 'italic' }}>Innovation</em> Across Pharma Systems.
              </h1>
              <p style={styles.heroSubTextOverride}>
                From advanced WHO-GMP clinical manufacturing validation pathways to strategic regional territorial franchise guidelines, explore professional updates from our core R&amp;D panel.
              </p>
            </>
          )}
        </div>
      </div>

      {/* ── MAIN CONTENT LAYER ── */}
      {selectedBlog ? (
        /* ── VIEW A: EXPANDED ARTICLE VIEW ── */
        <div style={styles.contentContainer}>
          <button onClick={() => setSelectedBlog(null)} style={styles.backButton}>
            <i className="fas fa-arrow-left" style={{ marginRight: '8px' }} /> Back to Knowledge Centre
          </button>
          
          <article style={styles.blogPostFullCard}>
            {/* FIX: Secure onError handler applied here to instantly neutralize broken links */}
            <div style={styles.expandedBodyImgWrap}>
              <img 
                src={selectedBlog.image} 
                alt={selectedBlog.title} 
                style={styles.expandedBodyImage} 
                onError={(e) => { 
                  e.target.src = GLOBAL_FALLBACK_IMAGE; 
                }}
              />
            </div>

            <div style={styles.blogFullBody}>
              <div style={styles.metaRowDetail}>
                Published by <strong style={{ color: 'var(--teal)' }}>{selectedBlog.author}</strong> on {selectedBlog.date} | <span>Zupharm Laboratories Pvt. Ltd.</span>
              </div>
              <hr style={styles.dividerLine} />
              <div style={styles.blogTextContent}>
                {selectedBlog.contentParagraphs.map((paragraph, index) => (
                  <p key={index} style={styles.paragraphElement}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        </div>
      ) : (
        /* ── VIEW B: STYLISH 3-COLUMN DISPLAY GRID ── */
        <div style={styles.gridContainer}>
          <div style={{
            ...styles.blogCustomGrid,
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))'
          }}>
            {BLOG_DATA.map((blog) => (
              <div 
                key={blog.id} 
                style={styles.blogCustomCard}
                onClick={() => setSelectedBlog(blog)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(13,115,119,0.35)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.01)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}
              >
                <div style={styles.blogCardImgContainer}>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    style={styles.cardImageElement}
                    onError={(e) => { e.target.src = GLOBAL_FALLBACK_IMAGE; }}
                  />
                  <span style={styles.blogCardTag}>{blog.category}</span>
                </div>
                
                <div style={styles.blogCardContentWrap}>
                  <div style={styles.blogCardMetaRow}>
                    <span><i className="far fa-user" style={{ color: 'var(--teal)', marginRight: '4px' }} /> {blog.author}</span>
                    <span>{blog.date}</span>
                  </div>
                  <h3 style={styles.blogCardHeadingTitle}>{blog.title}</h3>
                  <p style={styles.blogCardDescExcerpt}>{blog.excerpt}</p>
                  <button style={styles.blogCardActionLink}>
                    Read Full Text <i className="fas fa-chevron-right" style={{ fontSize: '11px', marginLeft: '4px' }} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Styles configuration
const styles = {
  pageWrapper: {
    width: '100%',
    backgroundColor: 'var(--bg)',
    minHeight: '100vh',
  },
  pageHeroOverride: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    padding: '110px 0 115px',
    overflow: 'hidden',
    color: 'var(--white)',
    display: 'flex',
    flexDirection: 'column',
    transition: 'background-image 0.4s ease-in-out',
  },
  pageHeroOverlayOverride: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(135deg, rgba(11, 37, 69, 0.94) 0%, rgba(13, 115, 119, 0.88) 100%)',
    zIndex: 1,
  },
  pageHeroInnerOverride: {
    width: '100%',
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 40px',
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'var(--teal-dim)',
    border: '1px solid rgba(13, 115, 119, 0.25)',
    color: 'var(--teal)',
    fontSize: '11px',
    fontWeight: '700',
    padding: '6px 14px',
    borderRadius: '100px',
    letterSpacing: '0.8px',
    textTransform: 'uppercase',
    marginBottom: '20px',
    width: 'fit-content',
  },
  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    backgroundColor: 'var(--teal-lt)',
  },
  badgeTextOverride: {
    color: 'var(--white)',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1px',
  },
  heroTitleMain: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(34px, 4vw, 52px)',
    color: 'var(--white)',
    margin: '0 0 16px 0',
    lineHeight: '1.15',
    letterSpacing: '-0.5px',
    fontWeight: '400',
  },
  heroTitleDetail: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: 'clamp(28px, 3.2vw, 42px)',
    color: 'var(--white)',
    margin: '0 0 12px 0',
    lineHeight: '1.2',
    letterSpacing: '-0.3px',
    fontWeight: '400',
  },
  heroSubTextOverride: {
    fontSize: '16px',
    color: 'rgba(255, 255, 255, 0.76)',
    fontWeight: '300',
    maxWidth: '700px',
    lineHeight: '1.75',
    margin: '0',
  },
  gridContainer: {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '60px 40px var(--section-pad)',
    boxSizing: 'border-box',
  },
  contentContainer: {
    maxWidth: '920px',
    margin: '0 auto',
    padding: '50px 40px var(--section-pad)',
    boxSizing: 'border-box',
  },
  blogCustomGrid: {
    display: 'grid',
    gap: '30px',
    width: '100%',
  },
  blogCustomCard: {
    background: 'var(--white)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.01)',
    cursor: 'pointer',
    transition: 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.3s ease, border-color 0.3s ease',
  },
  blogCardImgContainer: {
    position: 'relative',
    width: '100%',
    height: '200px',
    backgroundColor: 'var(--bg)',
    overflow: 'hidden',
  },
  cardImageElement: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  blogCardTag: {
    position: 'absolute',
    top: '12px',
    left: '12px',
    background: 'rgba(250, 250, 248, 0.96)',
    backdropFilter: 'blur(10px)',
    borderLeft: '3px solid var(--teal)',
    color: 'var(--black)',
    padding: '4px 10px',
    fontSize: '10px',
    fontWeight: '700',
    textTransform: 'uppercase',
    borderRadius: '0 4px 4px 0',
  },
  blogCardContentWrap: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  blogCardMetaRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '12px',
    color: 'var(--muted)',
    marginBottom: '10px',
    fontWeight: '500',
  },
  blogCardHeadingTitle: {
    fontFamily: "'DM Serif Display', serif",
    fontSize: '20px',
    lineHeight: '1.35',
    color: 'var(--ink)',
    margin: '0 0 10px 0',
    fontWeight: '400',
  },
  blogCardDescExcerpt: {
    fontSize: '13.5px',
    color: 'var(--muted)',
    lineHeight: '1.65',
    margin: '0 0 20px 0',
    fontWeight: '300',
  },
  blogCardActionLink: {
    background: 'none',
    border: 'none',
    color: 'var(--teal)',
    fontWeight: '600',
    fontSize: '13px',
    padding: '0',
    textAlign: 'left',
    display: 'inline-flex',
    alignItems: 'center',
    marginTop: 'auto',
    width: 'fit-content',
  },
  backButton: {
    background: 'transparent',
    color: 'var(--charcoal)',
    border: '1px solid var(--border)',
    padding: '10px 20px',
    borderRadius: '4px',
    fontSize: '13.5px',
    fontWeight: '600',
    cursor: 'pointer',
    marginBottom: '30px',
    display: 'inline-flex',
    alignItems: 'center',
  },
  blogPostFullCard: {
    background: 'var(--white)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: '0 4px 25px rgba(0,0,0,0.01)',
  },
  expandedBodyImgWrap: {
    width: '100%',
    height: '420px',
    overflow: 'hidden',
    backgroundColor: 'var(--bg)',
    borderBottom: '1px solid var(--border)',
  },
  expandedBodyImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  blogFullBody: {
    padding: '44px',
  },
  metaRowDetail: {
    fontSize: '13.5px',
    color: 'var(--muted)',
    fontWeight: '500',
  },
  dividerLine: {
    border: '0',
    borderTop: '1px solid var(--border)',
    margin: '18px 0 28px 0',
  },
  blogTextContent: {
    lineHeight: '1.85',
    fontSize: '15px',
    color: 'var(--charcoal)',
  },
  paragraphElement: {
    marginBottom: '22px',
    fontWeight: '300',
  }
};

export default Blogs;