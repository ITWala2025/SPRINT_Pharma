# Zupharm Laboratories Website

## 📋 Project Overview

**Zupharm Laboratories Pvt. Ltd.** is a WHO-GMP certified pharmaceutical manufacturer and PCD franchise company. This is the official corporate website built to serve three primary purposes:

1. **Brand Credibility** — Establish trust with investors and regulatory bodies
2. **B2B Product Catalogue** — Enable doctors, pharmacists, and hospital managers to explore 500+ pharmaceutical formulations
3. **Lead Generation** — Convert visitors into PCD franchise enquiries and manufacturing partnership leads

**Project Status:** Phase 1 (MVP) — Version 0.1.0  
**Live Website:** [Deployed on Netlify]  
**Repository:** [GitHub - SPRINT_Pharma]  
**Company Headquarters:** Gurugram, Haryana & Okhla, New Delhi

---

## 🛠 Tech Stack

| Component | Technology | Version |
|-----------|-----------|---------|
| **Frontend Framework** | React | 18.2.0 |
| **Build Tool** | Vite | 5.0.0 |
| **CSS Framework** | Tailwind CSS | 3.4.0 |
| **Routing** | React Router DOM | 6.22.0 |
| **Animations** | AOS (Animate On Scroll) | 3.0.0-beta.6 |
| **Motion Library** | Framer Motion | 10.12.16 |
| **Styling** | PostCSS + Autoprefixer | Latest |
| **Package Manager** | npm | Latest |
| **Testing** | Jest + Cypress | Latest |
| **Linting** | ESLint | 8.0.0 |
| **Accessibility** | Axe-core | 4.7.0 |
| **SEO/Metadata** | React Helmet Async | 1.3.0 |
| **Deployment** | Netlify | CDN + Edge Functions |
| **CDN** | Cloudflare | Global CDN |

---

## 👥 Team Members & Roles

| Name | Role | Contributions |
|------|------|----------------|
| **Shahzad Rahi** | Founder & Project Owner | Business requirements, brand vision |
| **Piyush** | Senior Developer | Architecture, core implementation |
| **Farhat Afreen** | Frontend Developer | React components, pages, styling, cleanup |
| **Ayush** | Frontend Developer | UI components, responsive design |
| **Tanisha** | Frontend Developer | Features, bug fixes, testing |
| **Ujjwal** | Frontend Developer | Features, bug fixes, testing |
| **Prashant** | Technical Mentor | Guidance, code reviews, best practices |

**GitHub:** [Farha-t](https://github.com/Farha-t)  
**Project Start Date:** May 13, 2026  
**Document Date:** June 10, 2026

---

## 📁 Folder Structure

```
SPRINT_Pharma/
├── src/                              # React source code
│   ├── pages/                        # Page components (8 routes)
│   │   ├── Home.jsx                 # Homepage with hero, stats, products
│   │   ├── About.jsx                # Vision, mission, values, certifications
│   │   ├── Products.jsx             # 12 therapeutic product categories
│   │   ├── Manufacturing.jsx        # Manufacturing facilities, tabs, FAQs
│   │   ├── Franchise.jsx            # PCD franchise form and benefits
│   │   ├── WhyUs.jsx                # 6 reasons + AI tools showcase
│   │   ├── Contact.jsx              # Contact form + WhatsApp integration
│   │   └── Blogs.jsx                # Knowledge centre (6 blog posts)
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── layout/
│   │   │   ├── Header.jsx          # Navigation bar (responsive)
│   │   │   ├── Footer.jsx          # Footer links & copyright
│   │   │   └── MainLayout.jsx      # Wrapper for Header + Content + Footer
│   │   │
│   │   └── [Reusable Library]       # 18 components for future features
│   │       ├── Accordion.jsx        # Collapsible sections
│   │       ├── Tabs.jsx             # Tabbed content
│   │       ├── ProductCard.jsx      # Product card component
│   │       ├── ProductGrid.jsx      # Product grid layout
│   │       ├── FilterBar.jsx        # Product filtering
│   │       ├── Pagination.jsx       # Page navigation
│   │       ├── LeadForm.jsx         # Reusable form component
│   │       ├── DownloadButton.jsx   # Download functionality
│   │       ├── CertificationCarousel.jsx  # Carousel for certifications
│   │       ├── SectionHeader.jsx    # Section heading component
│   │       ├── IconCard.jsx         # Icon + text card
│   │       ├── IconGrid.jsx         # Grid of icon cards
│   │       ├── CardGrid.jsx         # Generic card grid
│   │       ├── TwoColumnText.jsx    # Two-column layout
│   │       ├── AiStrip.jsx          # AI tools showcase strip
│   │       ├── Certifications.jsx   # Certifications display
│   │       └── ValuesGrid.jsx       # Values grid layout
│   │
│   ├── lib/                         # Utility functions & libraries
│   │   ├── aos.js                  # AOS animation initialization
│   │   ├── debounce.js             # Debounce utility
│   │   └── motion.js               # Motion/animation utilities
│   │
│   ├── App.jsx                      # Main router configuration
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles
│
├── public/                          # Static assets
│   ├── images/                      # Product & feature images
│   │   ├── sterile_injectables.png
│   │   └── advanced_rd.png
│   ├── data/                        # JSON data files (placeholder)
│   └── assets/                      # Other static assets
│
├── dist/                            # Build output (generated by Vite)
│
├── netlify/                         # Netlify deployment config
│   └── _headers                     # Cache control rules
│
├── plans/                           # Project planning documentation
│   ├── Comprehensive_Implementation_Guide.md
│   ├── Master_Context_Specification.md
│   ├── refactoring_plan.md
│   └── [Other planning documents]
│
├── release/                         # Release documentation
│   ├── BuildManifest_(FA's).md
│   ├── Release Notes v1.0.0.md
│   └── [Other release notes]
│
├── Configuration Files
│   ├── package.json                 # Dependencies & npm scripts
│   ├── vite.config.js              # Vite build configuration
│   ├── tailwind.config.js           # Tailwind CSS theme config
│   ├── postcss.config.js            # PostCSS plugins
│   ├── index.html                   # HTML entry point
│   ├── style.css                    # Global CSS variables & utilities
│   ├── .gitignore                   # Git exclusions
│   ├── package-lock.json            # Dependency lock file
│   └── merged_readmes.txt           # Combined README reference
│
└── Node Modules (auto-generated)
    └── node_modules/                # All dependencies
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16+ or later
- **npm** v8+ or later (or yarn/pnpm)
- Git for version control

### Installation & Setup

**1. Clone the Repository**
```bash
git clone https://github.com/Farha-t/SPRINT_Pharma.git
cd SPRINT_Pharma
```

**2. Install Dependencies**
```bash
npm install
```

**3. Start Development Server**
```bash
npm run dev
```
The app will open automatically at `http://localhost:5173`

**4. Build for Production**
```bash
npm run build
```
Output will be generated in the `dist/` folder.

**5. Preview Production Build Locally**
```bash
npm run preview
```

---

## 📝 Available Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| **Development** | `npm run dev` | Start dev server with hot reload |
| **Build** | `npm run build` | Create optimized production build |
| **Preview** | `npm run preview` | Preview production build locally |
| **Test** | `npm run test` | Run Jest unit tests |
| **E2E Test** | `npm run e2e` | Run Cypress end-to-end tests |
| **Lint** | `npm run lint` | Check code quality with ESLint |
| **Generate Data** | `npm run generate-data` | Generate mock data (if needed) |

---

## 🎨 Design & Branding

### Color Palette

| Color | Hex Code | Usage |
|-------|----------|-------|
| Primary Navy | `#0B2545` | Main backgrounds, navbar, footer |
| Primary Teal | `#0D7377` | Buttons, links, accents |
| Light Teal | `#14BDAC` | Hover states, highlights |
| Sky Blue | `#E8F4FD` | Section backgrounds |
| Gold/Amber | `#D4A017` | Premium CTAs, badges |
| Dark Gray | `#2D3748` | Body text |
| Mid Gray | `#718096` | Captions, secondary text |
| White | `#FFFFFF` | Card backgrounds |

### Typography

- **Font Family:** Inter (primary), Poppins Bold (headings), Open Sans (fallback)
- **H1:** 40–48px Bold
- **H2:** 28–32px Bold
- **H3:** 20–24px Bold
- **Body:** 16px Regular
- **Captions:** 13–14px Regular

### Key Design Rules

- Maximum content width: **1200px** (centered)
- Mobile-first responsive design (320px → 1920px)
- Sticky navbar with logo left, links center, CTA right
- Sticky WhatsApp button (bottom right, #25D366)
- AOS (Animate On Scroll) for entrance animations
- FontAwesome icons (v6.5.0) for UI elements

---

## 📄 Routes & Pages

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Home.jsx | Landing page with hero, stats, featured products |
| `/about` | About.jsx | Vision, mission, values, certifications modal |
| `/products` | Products.jsx | 12 therapeutic product categories |
| `/manufacturing` | Manufacturing.jsx | Manufacturing facilities, tabs, FAQs, certifications |
| `/franchise` | Franchise.jsx | PCD franchise form, USPs, benefits |
| `/why-us` | WhyUs.jsx | 6 reasons to choose Zupharm + AI tools |
| `/contact` | Contact.jsx | Contact form, WhatsApp integration, inquiry types |
| `/blogs` | Blogs.jsx | 6 blog posts (Knowledge Centre) |

---

## 🔑 Key Features

### ✅ Currently Implemented

1. **Responsive Design** — Mobile-first, tested on all breakpoints
2. **8 Fully Functional Pages** — Home, About, Products, Manufacturing, Franchise, WhyUs, Contact, Blogs
3. **Dynamic Stats Counter** — Animated counters on homepage
4. **Contact Forms** — Franchise enquiry, general contact, inquiry types
5. **Product Showcase** — 12 therapeutic categories with descriptions
6. **Blog/Knowledge Centre** — 6 curated articles with dynamic blog view
7. **Certifications Modal** — Interactive certification details
8. **WhatsApp Integration** — Floating button for direct messaging
9. **SEO Optimization** — React Helmet for metadata
10. **Accessibility** — ARIA labels, semantic HTML, axe-core compliance

### 🔄 Reusable Component Library

18 pre-built components ready for future features:
- Forms & inputs (LeadForm, FilterBar)
- Data display (Accordion, Tabs, Pagination, ProductCard)
- Layouts (CardGrid, IconGrid, TwoColumnText)
- Navigation & carousels (CertificationCarousel)
- Media & downloads (DownloadButton)

---

## 🌐 Deployment

### Netlify Deployment

**Current Status:** Deployed and live  
**Cache Control Rules:** Configured in `netlify/_headers`

**Deploy Steps:**
1. Push to GitHub
2. Connect repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Netlify auto-deploys on push

**Environment Variables** (if needed):
```
VITE_API_URL=https://api.zupharm.com
VITE_CONTACT_EMAIL=info@zupharm.com
```

---

## 🔧 Environment & Configuration

### Vite Configuration
- **Alias:** `@` points to `/src` for clean imports
- **Dev Server:** Auto-opens in browser
- **React Plugin:** Enabled with Fast Refresh

### Tailwind CSS Configuration
- **Content:** Scans `./index.html` and `./src/**/*.{js,jsx,ts,tsx}`
- **Custom Colors:** Teal, Navy, Primary variants
- **Font:** Inter family extended
- **No plugins:** Uses only Tailwind utilities

### PostCSS
- **Tailwind CSS:** Processes Tailwind directives
- **Autoprefixer:** Adds vendor prefixes automatically

---

## 📊 Build Statistics

- **Active Pages:** 8
- **Layout Components:** 3
- **Reusable Components:** 18
- **Total Components:** 29
- **Lines of Code (JSX):** ~2,500+
- **Global CSS:** 1,500+ lines
- **Build Output:** ~150KB (optimized)

---

## 🧹 Code Quality

### Linting
```bash
npm run lint
```
Checks for code quality using ESLint with React plugin.

### Testing
```bash
npm run test
npm run e2e
```
- **Unit Tests:** Jest with React Testing Library
- **E2E Tests:** Cypress browser testing
- **Accessibility:** Axe-core integration

---

## 📦 Dependencies Overview

**Core Libraries:**
- `react@18.2.0` — UI library
- `react-dom@18.2.0` — DOM rendering
- `react-router-dom@6.22.0` — Client-side routing
- `react-helmet-async@1.3.0` — SEO metadata management

**Animations & Effects:**
- `aos@3.0.0-beta.6` — Scroll animations
- `framer-motion@10.12.16` — Advanced motion effects

**Styling:**
- `tailwindcss@3.4.0` — Utility-first CSS framework
- `postcss@8.4.0` — CSS transformation
- `autoprefixer@10.4.0` — Browser prefixes

**Dev Tools:**
- `vite@5.0.0` — Build tool
- `@vitejs/plugin-react@4.0.0` — React support
- `eslint@8.0.0` — Code quality
- `jest@29.0.0` — Unit testing
- `cypress@13.0.0` — E2E testing

---

## 📋 Cleanup & Maintenance (June 10, 2026)

**Removed Dead Code:**
- ✅ Vision.jsx (empty placeholder)
- ✅ src/vision/ folder
- ✅ src/styles/manu.html
- ✅ 8 page-specific stub components
- ✅ main.js (old vanilla JS)
- ✅ QA folder (testing documents)

**Preserved:**
- ✅ Reusable component library (18 components)
- ✅ All documentation (plans/ & release/)
- ✅ Core functionality (all 8 pages)
- ✅ Configuration files

---

## 🐛 Known Issues & Limitations

| Issue | Status | Notes |
|-------|--------|-------|
| Testimonials section | ⏳ Planned | Component ready, awaiting content |
| Third-party manufacturing page | ⏳ Planned | Documented in phase 2 roadmap |
| Investor section | ⏳ Planned | Not yet implemented |
| Advanced filtering | ⏳ Future | Components ready (FilterBar, Pagination) |

---

## 📚 Documentation

- **Project Blueprint:** `plans/Master_Context_Specification.md`
- **Implementation Guide:** `plans/Comprehensive_Implementation_Guide.md`
- **Refactoring Plan:** `plans/refactoring_plan.md`
- **Release Notes:** `release/Release Notes v1.0.0.md`

---

## 🤝 Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Commit changes: `git commit -m 'Add new feature'`
3. Push branch: `git push origin feature/your-feature`
4. Open a pull request

---

## 📧 Contact & Support

**Company:** Zupharm Laboratories Pvt. Ltd.  
**Headquarters:** Gurugram, Haryana (Corporate) & Okhla, New Delhi (Head Office)  
**Email:** info@zupharm.com  
**Phone:** +91 12345 67890

---

## 📄 License

This project is **Confidential** and proprietary to Zupharm Laboratories Pvt. Ltd. All rights reserved.

---

## 🎉 Version History

| Version | Date | Highlights |
|---------|------|-----------|
| **v0.1.0** | June 10, 2026 | MVP release with 8 pages, cleanup complete |
| **v0.0.1** | May 13, 2026 | Project initialization & design phase |

---

**Last Updated:** June 10, 2026  
**Maintained By:** Farhat Afreen & Team  
**Status:** ✅ Active & Maintained

---

*Generated as part of SPRINT_Pharma cleanup and documentation phase.*
