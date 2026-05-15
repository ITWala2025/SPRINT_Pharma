# Comprehensive Implementation Guide for Zupharm Laboratories Website (Phase 1)

*This document consolidates the information from **Implementation_Plans.md** into a single, developer‑ready reference. It outlines every page, component, resource, and the step‑by‑step process required to build and deploy the site.*

---

## Table of Contents
1. [Project Overview](#project-overview)
2. [Document Structure & Navigation](#document-structure--navigation)
3. [HTML Pages
   - Home & About (Plan A)](#home--about-plan‑a)
   - Vision, Mission & Values (Plan B)
   - Products & PCD Franchise (Plan C)
   - Manufacturing, Research & Quality (Plan D)
4. [Component Library](#component-library)
5. [Styling Guidelines](#styling-guidelines)
6. [Resources & Assets](#resources--assets)
7. [Implementation Steps](#implementation-steps)
8. [Testing & Acceptance Criteria](#testing--acceptance-criteria)
9. [Deployment & Build Process](#deployment--build-process)
10. [Notes, Assumptions & Considerations](#notes-assumptions--considerations)

---

## Project Overview
The Zupharm website is a **static, SEO‑optimized, accessible** web application built with **Vite**, **Tailwind CSS**, and **React** (or a comparable component framework). Each page follows a consistent layout consisting of a sticky `Header`, main content sections, and a `Footer`. All visual assets are optimized for performance, and the site adheres to WCAG AA standards.

---

## Document Structure & Navigation
The guide is organized by the four implementation plans defined in the original specification. Each plan contains:

* **Purpose** – what the page conveys to users.
* **Wireframe** – ASCII representation (for quick reference).
* **HTML Structure** – required sections, elements, and IDs.
* **Components** – reusable UI pieces with props and state.
* **Styling** – Tailwind classes and custom CSS files.
* **Resources** – CSS, JS, images, JSON data, and external libraries.
* **Implementation Instructions** – step‑by‑step build tasks.
* **Acceptance Criteria** – measurable outcomes for QA.

---

## Home & About (Plan A)
### Purpose
Provide a high‑impact landing experience, introduce the brand, showcase key metrics, and guide users to product and franchise sections.

### Wireframe
```
+---------------------------------------------------+
| Header (sticky)                                    |
|  Logo | Nav Links | CTA (Apply for Franchise)      |
+---------------------------------------------------+
| Hero Banner                                        |
|  [Background Image]  Tagline                     |
|  CTA: Explore Products | CTA: Apply for Franchise   |
+---------------------------------------------------+
| Company Introduction (2‑column)                   |
|  Text | Founder Photo                             |
+---------------------------------------------------+
| Product Category Highlights (grid of cards)       |
+---------------------------------------------------+
| PCD Franchise Highlight (full‑width banner)       |
+---------------------------------------------------+
| Why Choose Zupharm (icon grid)                    |
+---------------------------------------------------+
| AI Products Strip (horizontal cards)              |
+---------------------------------------------------+
| Certifications & Compliance (logo strip)          |
+---------------------------------------------------+
| Testimonials / Partners (carousel)                |
+---------------------------------------------------+
| Footer CTA Strip + Footer                          |
+---------------------------------------------------+
```

### HTML Structure
```html
<header id="site-header" class="sticky top-0 z-50">
  <!-- Header component -->
</header>

<main>
  <section id="hero" class="relative bg-cover" style="background-image:url('/assets/hero.jpg');">
    <!-- HeroBanner component -->
  </section>

  <section id="company-intro" class="grid md:grid-cols-2 gap-8">
    <!-- CompanyIntro component -->
  </section>

  <section id="product-highlights" class="grid gap-6">
    <!-- CardGrid component (product categories) -->
  </section>

  <section id="pcd-franchise" class="bg-primary-100 py-12">
    <!-- Banner component (PCD) -->
  </section>

  <section id="why-choose" class="grid md:grid-cols-4 gap-4">
    <!-- IconGrid component -->
  </section>

  <section id="ai-products" class="flex overflow-x-auto space-x-4 py-8">
    <!-- AiStrip component -->
  </section>

  <section id="certifications" class="flex overflow-x-auto py-4">
    <!-- Certifications component -->
  </section>

  <section id="testimonials" class="relative">
    <!-- TestimonialsCarousel component -->
  </section>

  <section id="footer-cta" class="bg-gray-800 text-white py-6">
    <!-- Footer CTA Strip -->
  </section>
</main>

<footer id="site-footer" class="bg-gray-900 text-gray-300 py-8">
  <!-- Footer component -->
</footer>
```

### Components (Plan A) – Props & State
| Component | Props | State |
|-----------|-------|-------|
| `Header` | `logoSrc`, `navItems`, `ctaLabel`, `ctaHref` | `mobileMenuOpen` (bool) |
| `HeroBanner` | `title`, `subtitle`, `primaryCta`, `secondaryCta`, `bgImage` | – |
| `CompanyIntro` | `text`, `founderImg`, `layout` | – |
| `CardGrid` | `items`, `columns` | – |
| `CounterStrip` | `counters` | – |
| `Banner` (PCD) | `title`, `points`, `cta` | – |
| `IconGrid` | `icons` | – |
| `AiStrip` | `products` | – |
| `Certifications` | `logos` | – |
| `TestimonialsCarousel` | `testimonials` | `currentIndex` |
| `Footer` | `columns`, `legalText` | – |

### Styling Guidelines (Plan A)
* **Tailwind CSS** – custom theme defined in `tailwind.config.js` (colors from Master Spec 4.2).
* **Responsive breakpoints** – `sm` (≥640 px), `md` (≥768 px), `lg` (≥1024 px).
* **Animations** – AOS for scroll‑fade; hero CTA buttons use `transform scale` on hover; counters animate with `framer‑motion` respecting `prefers-reduced-motion`.
* **Critical CSS** – extract above‑the‑fold utilities into `src/styles/home.css`.

### Resources
| Type | Path | Description |
|------|------|-------------|
| CSS | `src/styles/home.css` | Critical Tailwind utilities for the home page.
| Images | `public/assets/hero.jpg`, `public/assets/founder.jpg`, icons in `public/assets/icons/` | Optimized WebP, lazy‑loaded.
| JSON | `src/data/counters.json` | Counter values for the `CounterStrip`.
| JS | `src/lib/aos.js` (AOS init) | Scroll animations.
| JS | `src/lib/motion.js` (framer‑motion helpers) | Counter animations.

---

## Vision, Mission & Values (Plan B)
### Purpose
Communicate strategic direction and core values with an accessible, story‑driven layout.

### Wireframe
```
+---------------------------+
| Header                    |
+---------------------------+
| Vision Section            |
|  Large heading + image    |
|  Text block (2‑col)       |
++---------------------------+
| Mission Section           |
|  Icon + short statement   |
++---------------------------+
| Values Grid (3×2)         |
|  Icon + title + desc      |
++---------------------------+
| Footer                    |
++---------------------------+
```

### HTML Structure
```html
<section id="vision" class="py-12">
  <!-- SectionHeader + TwoColumnText -->
</section>

<section id="mission" class="py-12 bg-gray-50">
  <!-- SectionHeader + IconCard -->
</section>

<section id="values" class="py-12">
  <!-- ValuesGrid component -->
</section>
```

### Components (Plan B)
| Component | Props | State |
|-----------|-------|-------|
| `SectionHeader` | `title`, `subtitle`, `bgImage?` | – |
| `TwoColumnText` | `leftContent`, `rightContent` | – |
| `IconCard` | `icon`, `title`, `description` | – |
| `ValuesGrid` | `values[]` (array of objects) | – |
| `Footer` | same as Plan A | – |

### Styling Guidelines (Plan B)
* **Typography** – H2 (Inter Bold, 40 px) for Vision/Mission; H3 (Inter Bold, 24 px) for value titles.
* **Color accents** – Primary Teal for icons, Light Teal for hover states.
* **Spacing** – 24 px vertical gutters, 16 px horizontal padding.
* **Accessibility** – contrast ≥ 4.5:1; icons receive `aria-label`.

### Resources
| Type | Path | Description |
|------|------|-------------|
| JSON | `public/data/values.json` | Array of value objects consumed by `ValuesGrid`.
| Images | `public/assets/vision.jpg` | Hero image for Vision section.
| CSS | `src/styles/values.css` | Page‑specific Tailwind extensions.

---

## Products & PCD Franchise (Plan C)
### Purpose
Provide a searchable, filterable product catalogue and a high‑conversion franchise lead‑capture page.

### Wireframe
```
+---------------------------+
| Header                    |
+---------------------------+
| Products Intro (hero)     |
+---------------------------+
| Filter Bar                |
|  Category ▼ | Search ☐    |
+---------------------------+
| Product Grid (cards)      |
|  Image | Name | CTA (View) |
+---------------------------+
| Pagination / Load More    |
+---------------------------+
| ---- PCD Franchise ----   |
|  Banner with USP list      |
|  CTA Form (static)         |
+---------------------------+
| Footer                    |
+---------------------------+
```

### HTML Structure
```html
<section id="products-intro" class="py-12 bg-cover" style="background-image:url('/assets/products-hero.jpg');">
  <!-- ProductsIntro component -->
</section>

<section id="filter-bar" class="flex items-center gap-4 py-4">
  <!-- FilterBar component -->
</section>

<section id="product-grid" class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
  <!-- ProductGrid component -->
</section>

<section id="pagination" class="flex justify-center py-4">
  <!-- Pagination component -->
</section>

<section id="franchise" class="bg-primary-200 py-12">
  <!-- FranchiseBanner + LeadForm components -->
</section>
```

### Components (Plan C)
| Component | Props | State |
|-----------|-------|-------|
| `ProductsIntro` | `title`, `subtitle`, `bgImage` | – |
| `FilterBar` | `categories`, `onFilterChange` | `selectedCategory`, `searchTerm` |
| `ProductCard` | `product` (object) | – |
| `ProductGrid` | `products[]` | – |
| `Pagination` | `currentPage`, `totalPages`, `onPageChange` | – |
| `FranchiseBanner` | `title`, `points[]`, `cta` | – |
| `LeadForm` | `fields`, `onSubmit` | `formData`, `errors` |
| `Footer` | same as Plan A | – |

### Styling Guidelines (Plan C)
* **Tailwind grid** – `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`.
* **Cards** – subtle shadow, hover lift (`transform translate-y-[-2px]`).
* **Form** – accessible labels, error messages with `aria-live="polite"`.
* **Responsive** – filter bar collapses into an accordion on < 640 px.

### Resources
| Type | Path | Description |
|------|------|-------------|
| JSON | `public/data/products.json` | Full product catalogue exported from CMS.
| Images | `public/assets/products/` | Optimized WebP images, served via `srcset`.
| CSS | `src/styles/products.css` | Page‑specific Tailwind utilities.
| JS | `src/lib/debounce.js` | 300 ms debounce for search input.

---

## Manufacturing, Research & Quality (Plan D)
### Purpose
Showcase capabilities, certifications, and research outputs using tabbed and accordion UI patterns.

### Wireframe
```
+---------------------------+
| Header                    |
+---------------------------+
| Manufacturing Overview    |
|  Hero image + intro text  |
+---------------------------+
| Capabilities Tabs         |
|  [Process] [Facilities]   |
|  Content per tab (text + images) |
+---------------------------+
| Certifications Carousel   |
|  Rotating badge animation |
+---------------------------+
| Research & Quality Section|
|  Accordion list of studies |
|  Download buttons (PDF)   |
+---------------------------+
| Footer                    |
+---------------------------+
```

### HTML Structure
```html
<section id="manufacturing-hero" class="bg-cover py-20" style="background-image:url('/assets/manufacturing.jpg');">
  <!-- ManufacturingHero component -->
</section>

<section id="capabilities" class="py-12">
  <!-- Tabs component (Process, Facilities) -->
</section>

<section id="certifications" class="py-8">
  <!-- CertificationCarousel component -->
</section>

<section id="research-quality" class="py-12">
  <!-- Accordion component (studies) -->
  <!-- DownloadButton components for PDFs -->
</section>
```

### Components (Plan D)
| Component | Props | State |
|-----------|-------|-------|
| `ManufacturingHero` | `bgImage`, `title`, `subtitle` | – |
| `Tabs` | `tabs[]` (label + content), `defaultActive` | `activeTab` |
| `CertificationCarousel` | `logos[]` | `currentIndex` |
| `Accordion` | `items[]` (title, content) | `openItemId` |
| `DownloadButton` | `filePath`, `label` | – |
| `Footer` | same as Plan A | – |

### Styling Guidelines (Plan D)
* **Tabs** – underline indicator, focusable via arrow keys.
* **Accordion** – smooth height transition, `aria-expanded` attributes.
* **Badge animation** – CSS keyframes for rotation; pause on hover.
* **Colors** – Primary Navy for tab headers, Light Teal for hover.
* **Responsive** – tabs collapse into vertical accordion on < 768 px.

### Resources
| Type | Path | Description |
|------|------|-------------|
| JSON | `public/data/capabilities.json` | Tab content for Manufacturing page.
| PDFs | `public/assets/pdfs/` | Research papers, certifications.
| CSS | `src/styles/manufacturing.css` | Page‑specific Tailwind extensions.

---

## Component Library (Shared Across Plans)
All components are implemented as React functional components (or equivalent) in `src/components/`. Each component follows the **Props‑First** pattern and includes PropTypes (or TypeScript interfaces) for type safety.

### Folder Structure
```
src/
 ├─ components/
 │   ├─ Header.jsx
 │   ├─ HeroBanner.jsx
 │   ├─ CompanyIntro.jsx
 │   ├─ CardGrid.jsx
 │   ├─ CounterStrip.jsx
 │   ├─ Banner.jsx
 │   ├─ IconGrid.jsx
 │   ├─ AiStrip.jsx
 │   ├─ Certifications.jsx
 │   ├─ TestimonialsCarousel.jsx
 │   ├─ Footer.jsx
 │   ├─ SectionHeader.jsx
 │   ├─ TwoColumnText.jsx
 │   ├─ IconCard.jsx
 │   ├─ ValuesGrid.jsx
 │   ├─ ProductsIntro.jsx
 │   ├─ FilterBar.jsx
 │   ├─ ProductCard.jsx
 │   ├─ ProductGrid.jsx
 │   ├─ Pagination.jsx
 │   ├─ FranchiseBanner.jsx
 │   ├─ LeadForm.jsx
 │   ├─ ManufacturingHero.jsx
 │   ├─ Tabs.jsx
 │   ├─ CertificationCarousel.jsx
 │   ├─ Accordion.jsx
 │   └─ DownloadButton.jsx
 └─ styles/
     ├─ home.css
     ├─ values.css
     ├─ products.css
     └─ manufacturing.css
```

---

## Styling Guidelines (Global)
* **Tailwind configuration** – `tailwind.config.js` defines custom colors, fonts (Inter), and spacing scale as per Master Spec 4.2.
* **Responsive design** – mobile‑first; use `sm`, `md`, `lg` breakpoints.
* **Animations** – AOS library initialized in `src/main.jsx`; framer‑motion used for counters.
* **Accessibility** – focus outlines, `skip‑link` navigation, `aria-*` attributes on interactive elements.

---

## Resources & Assets Summary
| Asset Type | Location | Role |
|------------|----------|------|
| Tailwind config | `tailwind.config.js` | Central design tokens.
| Global CSS | `src/index.css` | Base utilities and resets.
| Page‑specific CSS | `src/styles/*.css` | Critical above‑the‑fold styles.
| Images | `public/assets/` | Optimized WebP, lazy‑loaded.
| Data JSON | `public/data/` | Dynamic content for values, products, capabilities.
| PDFs | `public/assets/pdfs/` | Downloadable research & certification docs.
| JS Libraries | `node_modules/` | AOS, framer‑motion, Vite, React.

---

## Implementation Steps
1. **Setup Development Environment**
   * Install Node 20 LTS.
   * Run `npm ci` in the project root to install exact dependencies.
   * Verify Tailwind builds with `npm run dev`.
2. **Create Page Routes** (`src/pages/`)
   * `Home.jsx` – compose components listed in Plan A.
   * `Vision.jsx` – compose Plan B components.
   * `Products.jsx` – compose Plan C components.
   * `Manufacturing.jsx` – compose Plan D components.
3. **Add Component Files** – follow the folder structure above; copy boilerplate from existing components if available.
4. **Add Static Assets** – place images, icons, PDFs in `public/assets/` and reference them via absolute paths (`/assets/...`).
5. **Create Data Files** – add JSON files (`values.json`, `products.json`, `capabilities.json`) with the required schema; import them in the corresponding page components.
6. **Configure Tailwind** – extend `theme.extend` with custom colors; enable `@apply` in page‑specific CSS files.
7. **Initialize AOS & Framer Motion** – add initialization code in `src/main.jsx`.
8. **Implement SEO** – use `react-helmet-async` to inject meta tags per page; add Open Graph tags.
9. **Add Accessibility Enhancements** – ensure all interactive elements have keyboard support, proper `aria-label`s, and focus management.
10. **Write Unit Tests** – use Jest + React Testing Library; target components listed in each plan’s Acceptance Criteria.
11. **Write E2E Tests** – use Cypress; cover navigation flows, filtering, form submission, and PDF download.
12. **Run Performance Audits** – `npm run build && lighthouse http://localhost:5000` – aim for ≥ 90 scores.
13. **Deploy** – static site can be hosted on Netlify, Vercel, or Azure Static Web Apps.
    * Build command: `npm run build`.
    * Publish `dist/` folder.
    * Set proper cache‑control headers for JSON and PDF assets.

---

## Testing & Acceptance Criteria
The criteria from each plan are consolidated here for quick reference during QA.

* **Header** – sticky, collapses to hamburger < 768 px.
* **Hero** – loads < 1 s on 4G, lazy‑loaded background.
* **Counters** – animate on viewport entry, respect `prefers-reduced-motion`.
* **Images** – have descriptive `alt` text; lazy‑loaded where appropriate.
* **SEO** – Lighthouse ≥ 90 for Performance, Accessibility, Best Practices, SEO.
* **Unit Test Coverage** – ≥ 80 % for listed components.
* **E2E Scenarios** – navigation from Hero CTA to Products, filter‑search flow, franchise form submission, PDF download.
* **Accessibility** – WCAG AA passes; focus order logical; skip‑link navigation works.

---

## Deployment & Build Process
1. **Local Build** – `npm run build` creates an optimized static bundle in `dist/`.
2. **CI/CD** – configure GitHub Actions to run tests, lint, and deploy on push to `main`.
3. **Hosting** – set up Netlify site linked to the repo; configure redirects for SPA routing.
4. **Cache‑Control** – add Netlify `_headers` file:
   ```
   /data/*
     Cache-Control: public, max-age=86400
   /assets/pdfs/*
     Cache-Control: public, max-age=31536000
   ```
5. **Monitoring** – enable Google Analytics and Search Console for performance insights.

---

## Notes, Assumptions & Considerations
* The site is **static**; any future dynamic product pages will require a separate build step or server‑less functions.
* All JSON data files are generated from the CMS export **before** the build; a simple script (`npm run generate-data`) can be added if needed.
* Images are assumed to be provided in WebP; fallback to JPEG/PNG is handled via `srcset`.
* The `LeadForm` is static – it posts to a third‑party endpoint (e.g., HubSpot) configured via environment variable `REACT_APP_FORM_ENDPOINT`.
* Accessibility testing uses **axe** CLI; any violations must be resolved before release.
* The design system (colors, spacing) is locked in the Master Context Specification; any deviation must be approved by the design lead.

---

*Prepared by the Architecture team. This guide is intended to be the single source of truth for developers implementing the Zupharm website.*

