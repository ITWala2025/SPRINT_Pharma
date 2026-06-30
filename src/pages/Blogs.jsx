import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// 1. Curated Static Blog Data realigned to strict functional/SEO requirements
const BLOG_DATA = [
  {
    id: 1,
    title: "Step-by-Step Guide to Launching an Authorized PCD Pharma Distributorship",
    date: "June 18, 2026",
    dateISO: "2026-06-18",
    author: "Zupharm Laboratories Team",
    image: "/assets/Images/Distributorship.png",
    excerpt: "Demystifying how to launch an elite authorized distribution node with zero heavy infrastructure requirements through Zupharm's smart asset-light model.",
    contentParagraphs: [
      "Zupharm Laboratories operates as a strategic B2B pharmaceutical enterprise that drives market innovation through an efficient, asset-light operational model. Instead of maintaining expensive factory machinery, Zupharm focuses its core expertise on formula research and molecular development, outsourcing the physical fabrication of its products to elite, certified third-party manufacturing plants. By eliminating heavy machinery management from both our corporate structure and our franchise network, we issue high-yield Authorized Distributorships that allow independent business partners to scale up rapidly without ever worrying about heavy industrial overheads.",
      "Navigating the administrative steps to establish a regional medical supply node can sometimes feel overwhelming, but Zupharm provides full end-to-end assistance to help you secure your distributorship seamlessly. Our specialized B2B corporate division walks partners through every critical step of the documentation and launch process—including matching wholesale Drug License compliance parameters and processing active Goods and Services Tax (GST) registrations. This full corporate backing ensures that your newly minted distribution channel launches with zero administrative delay.",
      "Partnering with Zupharm Laboratories for your authorized distributorship provides an unmatched structural advantage. Because Zupharm handles the core formula research and manages all third-party contract manufacturing compliance validation, our authorized partners get immediate access to a ready-to-market portfolio of over 50+ premium formulations. Backed by strict territorial monopoly rights, customized detailing charts, and real-time digital inventory assistance, your enterprise is fully optimized to capture dominant regional market share from day one."
    ],
    category: "Distributorship",
    slug: "step-by-step-guide-to-launching-authorized-pcd-pharma-distributorship"
  },
  {
    id: 2,
    title: "Calculating Return on Investment (ROI) for B2B Pharmaceutical Distribution",
    date: "June 22, 2026",
    dateISO: "2026-06-22",
    author: "Zupharm Laboratories Team",
    image: "/assets/Images/MarketStrategy.png",
    excerpt: "An engineering blueprint for tracking net margins, balancing inventory carrying costs, and identifying product category break-even markers.",
    contentParagraphs: [
      "Evaluating the commercial viability of a B2B pharmaceutical channel requires moving past simple top-line gross numbers to analyze net yield models. Through the Zupharm Laboratories contract manufacturing model, franchise owners operating under our authorized distributorship framework bypass the heavy infrastructure costs that traditionally kill early-stage profitability. Since Zupharm researches the formulas and uses specialized third-party factories for production, distributors inherit incredibly clean product cost margins.",
      "To map an authentic Return on Investment (ROI), a distributor must account for all operational variables: temperature-controlled storage utilities, transit breakages, expiration-date buffer reserves, and field promotional costs. High-precision chronic therapy formulations researched by Zupharm consistently yield stronger net margins compared to standard generic options. Balancing your product mix between fast-moving daily health formulas and specialized therapies creates a stable cash flow.",
      "Optimizing your product line turnover rate is the most efficient way to scale up overall return percentages. By utilizing Zupharm's integrated digital supply pipelines and immediate dispatch frameworks for its third-party manufactured stocks, holding durations can be compressed from months down to mere days. This agile logistical rhythm dramatically minimizes warehouse holding fees and ensures capital can be rapidly reinvested into expanding your territorial reach."
    ],
    category: "Market Strategy",
    slug: "calculating-roi-b2b-pharmaceutical-distribution"
  },
  {
    id: 3,
    title: "Understanding WHO-GMP and Latest CDSCO Compliance Directives",
    date: "June 12, 2026",
    dateISO: "2026-06-12",
    author: "Zupharm Laboratories Team",
    image: "/assets/Images/Regulatory.png",
    excerpt: "Navigating the upgraded national manufacturing quality control protocols, statutory tracking amendments, and audit validation matrices.",
    contentParagraphs: [
      "Adhering to international quality standards is an absolute foundational requirement for modern pharmaceutical operations. The World Health Organization's Good Manufacturing Practices (WHO-GMP) alongside the Central Drugs Standard Control Organization (CDSCO) continuously upgrade their enforcement frameworks. Even within a third-party manufacturing setup, Zupharm guarantees total transparency across the chemical formulation lifecycle, raw active pharmaceutical ingredient (API) tracking, and finished product packaging lines.",
      "Recent compliance tracking mandates require moving away from manual logging to adopting centralized, tamper-evident digital tracking systems. This ensures that every individual patch, tablet batch, or sterile injection track can be traced directly back to its precise raw material synthesis date. Zupharm carefully audits its chosen third-party manufacturing partners to ensure they maintain strict cleanroom air balances, continuous validation checks, and regular water purity sweeps.",
      "For Zupharm's B2B franchise network, operating as an authorized distributor within a third-party certified WHO-GMP ecosystem provides major marketplace advantages. Because Zupharm researches the compounds and handles 100% of the factory-side quality audit liabilities, distributors enjoy institutional trust with major hospital networks without needing any heavy machinery of their own. Staying ahead of CDSCO regulatory changes ensures long-term operational safety."
    ],
    category: "Regulatory",
    slug: "understanding-who-gmp-cdsco-compliance-directives"
  },
  {
    id: 4,
    title: "The Impact of Phyto-Pharmaceutical Standards on Modern Global Healthcare",
    date: "May 29, 2026",
    dateISO: "2026-05-29",
    author: "Zupharm Laboratories Team",
    image: "/assets/Images/Health.png",
    excerpt: "How applying precise scientific validation protocols is successfully bridging the historical gap between herbal medicine and western pharmacology.",
    contentParagraphs: [
      "The historical dividing line between traditional botanical formulas and data-driven Western medical science is shifting, thanks to the rise of standardized phyto-pharmaceutical pathways. Phyto-pharmaceuticals represent a major step forward, where active natural plant compounds are isolated, scientifically quantified, and processed under the exact same strict guidelines used for synthetic small-molecule developments.",
      "A primary challenge with traditional herbal therapies has always been the natural variation in potency caused by environmental shifts. Zupharm Laboratories' formula research panel solves this problem by establishing exact chemical fingerprints and high-performance liquid chromatography blueprints. These exact molecular recipes are then handed off to state-of-the-art third-party facilities to guarantee that every single production batch delivers a perfectly consistent therapeutic compound balance.",
      "These highly validated, clean-label options offer valuable secondary treatment pathways, particularly for managing chronic lifestyle conditions. For our authorized distributors, adding Zupharm's researched phyto-pharmaceutical franchise catalog provides a high-margin product vertical. By presenting clear, data-backed evidence of safety, these third-party manufactured lines are successfully earning widespread acceptance across clinical networks."
    ],
    category: "Health",
    slug: "impact-phyto-pharmaceutical-standards-modern-global-healthcare"
  },
  {
    id: 5,
    title: "Maximizing Molecular Bioavailability in Modified-Release Solid Dosages",
    date: "May 15, 2026",
    dateISO: "2026-05-15",
    author: "Zupharm Laboratories Team",
    image: "/assets/Images/Products.png",
    excerpt: "An entry-level look at the physical chemistry behind sustained-release hydrophilic matrix barriers and targeted therapeutic absorption.",
    contentParagraphs: [
      "Effectively managing long-term chronic medical conditions requires maintaining consistent, uniform blood plasma drug levels over extended periods. Traditional immediate-release tablets often cause sharp peaks and rapid drop-offs in systemic drug levels, which can lead to breakthrough symptoms. Zupharm's research and development division counters this by developing cutting-edge modified-release templates that are expertly executed by our third-party production partners.",
      "By embedding active pharmaceutical ingredients within custom-designed hydrophilic polymer matrices engineered during our research phase, the rate of fluid absorption can be precisely controlled. As the tablet passes through the digestive tract, it hydrates steadily to create a microscopic protective gel layer. This layer slowly and predictably releases the active medication hour by hour, eliminating the need for multiple daily doses and ensuring steady, 24-hour therapeutic coverage.",
      "For independent B2B entrepreneurs who hold a Zupharm authorized distributorship, these high-bioavailability products represent an incredibly secure, recurrent revenue stream. Because Zupharm operates as a purely research-driven, asset-light vehicle, franchise owners get access to complex molecular releases without constructing factory lines or investing in heavy manufacturing machinery, passing all product efficacy advantages directly to the localized medical network."
    ],
    category: "Products",
    slug: "maximizing-molecular-bioavailability-modified-release-solid-dosages"
  },
  {
    id: 6,
    title: "Leveraging Machine Learning and AI in Predictive Compound Screening",
    date: "June 02, 2026",
    dateISO: "2026-06-02",
    author: "Zupharm Laboratories Team",
    image: "/assets/Images/AIPharma.png",
    excerpt: "How advanced algorithmic modeling compresses traditional molecular discovery timelines down from years to mere hours.",
    contentParagraphs: [
      "The traditional process for discovering a brand-new therapeutic compound has historically been an incredibly lengthy journey, often taking upwards of a decade of lab work. By incorporating advanced machine learning models directly into modern computational chemistry pipelines, Zupharm Laboratories can now perform virtual screenings on billions of molecular combinations concurrently to engineer powerful new formulas.",
      "These specialized AI systems simulate exact physical interactions between candidate drug molecules and target disease proteins, mapping binding strengths and calculating toxicity scores long before any formulas are passed to our third-party contract manufacturing partners for physical blending. This predictive screening step saves immense amounts of capital and streamlines the front-end science.",
      "This powerful combination of data science and molecular biochemistry highlights how Zupharm operates a highly advanced B2B ecosystem. By keeping our corporate structure asset-light and focusing strictly on formula design rather than machinery maintenance, we are able to issue franchise rights to our authorized distributors for breakthrough molecules much faster than standard industry formats. Distributors gain a massive market edge with absolutely no manufacturing footprint of their own."
    ],
    category: "AI Pharma",
    slug: "leveraging-machine-learning-ai-predictive-compound-screening"
  }
];

// Fallback image asset that is guaranteed to always resolve safely
const GLOBAL_FALLBACK_IMAGE = "/assets/Images/Distributorship.png";

// Site base URL for canonical and OG tags
const SITE_URL = "https://zupharm.com";

// Generate JSON-LD structured data for the blog listing page
const generateBlogListingStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Zupharm Laboratories Knowledge Centre",
  "description": "Explore insights on WHO-GMP compliance, PCD pharma distributorship, AI in pharma, phyto-pharmaceutical standards, and B2B pharmaceutical distribution strategies from Zupharm Laboratories.",
  "url": `${SITE_URL}/blogs`,
  "publisher": {
    "@type": "Organization",
    "name": "Zupharm Laboratories Pvt. Ltd.",
    "url": SITE_URL
  },
  "blogPost": BLOG_DATA.map(blog => ({
    "@type": "BlogPosting",
    "headline": blog.title,
    "description": blog.excerpt,
    "datePublished": blog.dateISO,
    "author": {
      "@type": "Organization",
      "name": blog.author
    },
    "image": blog.image,
    "url": `${SITE_URL}/blogs/${blog.slug}`
  }))
});

// Generate JSON-LD structured data for a single blog post
const generateBlogPostStructuredData = (blog) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": blog.title,
  "description": blog.excerpt,
  "datePublished": blog.dateISO,
  "author": {
    "@type": "Organization",
    "name": blog.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zupharm Laboratories Pvt. Ltd.",
    "url": SITE_URL
  },
  "image": blog.image,
  "url": `${SITE_URL}/blogs/${blog.slug}`,
  "articleBody": blog.contentParagraphs.join(" "),
  "articleSection": blog.category
});

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
    : "/assets/Images/Distributorship.png";

  // Build meta description based on current view
  const metaDescription = selectedBlog
    ? `${selectedBlog.excerpt} — Read the full article by ${selectedBlog.author} at Zupharm Laboratories Knowledge Centre.`
    : "Explore Zupharm Laboratories' Knowledge Centre for expert insights on WHO-GMP compliance, PCD pharma distributorship, AI in pharmaceutical research, phyto-pharmaceutical standards, and B2B pharma distribution strategies.";

  const pageTitle = selectedBlog
    ? `${selectedBlog.title} | Zupharm Laboratories Knowledge Centre`
    : "Knowledge Centre — Insights & Innovation | Zupharm Laboratories";

  const canonicalUrl = selectedBlog
    ? `${SITE_URL}/blogs/${selectedBlog.slug}`
    : `${SITE_URL}/blogs`;

  const ogImage = selectedBlog ? selectedBlog.image : heroImage;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={selectedBlog ? "article" : "website"} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Zupharm Laboratories" />
        {selectedBlog && (
          <>
            <meta property="article:published_time" content={selectedBlog.dateISO} />
            <meta property="article:section" content={selectedBlog.category} />
            <meta property="article:author" content={selectedBlog.author} />
          </>
        )}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImage} />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(
            selectedBlog
              ? generateBlogPostStructuredData(selectedBlog)
              : generateBlogListingStructuredData()
          )}
        </script>
      </Helmet>

      <div style={styles.pageWrapper}>
        {/* ── DYNAMIC HERO SECTION ── */}
        <section style={{ ...styles.pageHeroOverride, backgroundImage: `url(${heroImage})` }}>
          <div style={styles.pageHeroOverlayOverride} />
          <div style={styles.pageHeroInnerOverride}>
            {selectedBlog ? (
              <>
                <div style={styles.heroBadge} role="presentation">
                  <div style={styles.badgeDot} aria-hidden="true" />
                  <span style={styles.badgeTextOverride}>{selectedBlog.category}</span>
                </div>
                <h1 style={styles.heroTitleDetail}>{selectedBlog.title}</h1>
                <p style={styles.heroSubTextOverride}>
                  Article written by <strong>{selectedBlog.author}</strong> •{' '}
                  <time dateTime={selectedBlog.dateISO}>{selectedBlog.date}</time>
                </p>
              </>
            ) : (
              <>
                <div style={styles.heroBadge} role="presentation">
                  <div style={styles.badgeDot} aria-hidden="true" />
                  <span style={styles.badgeTextOverride}>Knowledge Centre</span>
                </div>
                <h1 style={styles.heroTitleMain}>
                  Insights & <em style={{ color: 'var(--teal-lt)', fontStyle: 'italic' }}>Innovation</em> Across Pharma Systems.
                </h1>
                <p style={styles.heroSubTextOverride}>
                  From advanced WHO-GMP testing frameworks to asset-light third-party authorization modules, explore strategic medical portfolio blueprints directly engineered by our core panel.
                </p>
              </>
            )}
          </div>
        </section>

        {/* ── MAIN CONTENT LAYER ── */}
        {selectedBlog ? (
          /* ── VIEW A: EXPANDED ARTICLE VIEW ── */
          <div style={styles.contentContainer}>
            <button 
              onClick={() => setSelectedBlog(null)} 
              style={styles.backButton}
              aria-label="Back to all knowledge centre articles"
            >
              <i className="fas fa-arrow-left" style={{ marginRight: '8px' }} aria-hidden="true" /> Back to Knowledge Centre
            </button>
            
            <article style={styles.blogPostFullCard} itemScope itemType="https://schema.org/BlogPosting">
              <div style={styles.expandedBodyImgWrap}>
                <img 
                  src={selectedBlog.image} 
                  alt={`${selectedBlog.title} — Featured image for Zupharm Laboratories blog article`} 
                  style={styles.expandedBodyImage} 
                  loading="lazy"
                  onError={(e) => { 
                    e.target.src = GLOBAL_FALLBACK_IMAGE; 
                  }}
                />
              </div>

              <div style={styles.blogFullBody}>
                <div style={styles.metaRowDetail}>
                  Published by <strong style={{ color: 'var(--teal)' }} itemProp="author">{selectedBlog.author}</strong>{' '}
                  on <time dateTime={selectedBlog.dateISO} itemProp="datePublished">{selectedBlog.date}</time>{' '}
                  | <span itemProp="publisher">Zupharm Laboratories Pvt. Ltd.</span>
                </div>
                <hr style={styles.dividerLine} />
                <div style={styles.blogTextContent} itemProp="articleBody">
                  {selectedBlog.contentParagraphs.map((paragraph, index) => (
                    <p key={index} style={styles.paragraphElement}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </article>
          </div>
        ) : (
          /* ── VIEW B: STYLISH 3-COLUMN DISPLAY GRID ── */
          <section style={styles.gridContainer} aria-label="Knowledge centre articles">
            <div style={{
              ...styles.blogCustomGrid,
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, minmax(0, 1fr))'
            }}>
              {BLOG_DATA.map((blog) => (
                <article 
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
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  <div style={styles.blogCardImgContainer}>
                    <img 
                      src={blog.image} 
                      alt={`${blog.title} — Zupharm Laboratories blog article thumbnail`} 
                      style={styles.cardImageElement}
                      loading="lazy"
                      onError={(e) => { e.target.src = GLOBAL_FALLBACK_IMAGE; }}
                    />
                    <span style={styles.blogCardTag} aria-label={`Category: ${blog.category}`}>{blog.category}</span>
                  </div>
                  
                  <div style={styles.blogCardContentWrap}>
                    <div style={styles.blogCardMetaRow}>
                      <span>
                        <i className="far fa-user" style={{ color: 'var(--teal)', marginRight: '4px' }} aria-hidden="true" />{' '}
                        <span itemProp="author">{blog.author}</span>
                      </span>
                      <time dateTime={blog.dateISO} itemProp="datePublished">{blog.date}</time>
                    </div>
                    <h3 style={styles.blogCardHeadingTitle} itemProp="headline">{blog.title}</h3>
                    <p style={styles.blogCardDescExcerpt} itemProp="description">{blog.excerpt}</p>
                    <button 
                      style={styles.blogCardActionLink}
                      aria-label={`Read full article: ${blog.title}`}
                    >
                      Read Full Text <i className="fas fa-chevron-right" style={{ fontSize: '11px', marginLeft: '4px' }} aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
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