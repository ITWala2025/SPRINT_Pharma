# Implementation Plans for Zupharm Laboratories Website (Phase 1)

---

## Plan A – Home & About
### Objective
Create a high‑impact landing experience that instantly communicates brand authority, showcases key metrics, and provides clear navigation to deeper content. The About page must reinforce credibility with founder story and company overview.

### Wireframe (ASCII)
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

### Component Map
| Component | Props | State |
|----------|-------|-------|
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

### Styling Guidelines
* **Tailwind CSS** – use the custom theme defined in `tailwind.config.js` (colors from Section 4.2 of the Master Spec).
* **Responsive breakpoints** – `sm` (≥640 px) for mobile, `md` (≥768 px) for tablet, `lg` (≥1024 px) for desktop. Grid columns adjust: 1 → 2 → 4.
* **Animations** – AOS library for scroll‑fade; hero CTA buttons use `transform scale` on hover; counter numbers animate with `framer‑motion` respecting `prefers-reduced‑motion`.

### Performance & SEO
* **Meta tags** – unique `title`, `description`, Open Graph for each page.
* **Lazy‑load** hero background (`loading="lazy"`) and below‑the‑fold images.
* **Critical CSS** – extract above‑the‑fold Tailwind utilities via `@apply` in a `home.css` file.
* **HTML semantics** – `<section>`, `<article>`, `<header>`, `<nav>`, `<footer>`.
* **Structured data** – `Organization` schema with logo, contact, and `WebPage` schema for hero.

### Acceptance Criteria
* Header remains sticky and collapses into a hamburger menu on < 768 px.
* Hero loads within 1 s on 4G, counters animate after they enter viewport.
* All images have descriptive `alt` text; focus order is logical.
* SEO audit (Lighthouse) scores ≥ 90 for Performance, Accessibility, Best Practices, SEO.
* Unit tests for `Header`, `HeroBanner`, `CardGrid` (≥ 80 % coverage).
* E2E test verifies navigation from Hero CTA to Products page.

---

## Plan B – Vision & Mission & Values
### Objective
Present the company’s strategic direction and core values in a visually engaging, story‑driven format that supports accessibility and data‑driven updates.

### Wireframe (ASCII)
```
+---------------------------+
| Header                    |
+---------------------------+
| Vision Section            |
|  Large heading + image    |
|  Text block (2‑col)       |
+---------------------------+
| Mission Section           |
|  Icon + short statement   |
+---------------------------+
| Values Grid (3×2)         |
|  Icon + title + desc      |
+---------------------------+
| Footer                    |
+---------------------------+
```

### Component Map
| Component | Props | State |
|----------|-------|-------|
| `SectionHeader` | `title`, `subtitle`, `bgImage?` | – |
| `TwoColumnText` | `leftContent`, `rightContent` | – |
| `IconCard` | `icon`, `title`, `description` | – |
| `ValuesGrid` | `values[]` (array of objects) | – |
| `Footer` | same as Plan A | – |

### Styling Guidelines
* **Typography** – use H2 for Vision/Mission headings (Inter Bold, 40 px) and H3 for value titles (Inter Bold, 24 px).
* **Color accents** – Primary Teal for icons, Light Teal for hover states.
* **Spacing** – 24 px vertical gutters, 16 px horizontal padding.
* **Accessibility** – Ensure contrast ≥ 4.5:1; icons receive `aria-label`.

### Performance & SEO
* **Lazy‑load** decorative images with `loading="lazy"`.
* **Schema** – `AboutPage` structured data.
* **Cache‑control** – static JSON for values (`/data/values.json`) fetched at build time.

### Acceptance Criteria
* All headings are keyboard‑focusable via skip‑link navigation.
* Values grid reflows to 1 column on < 640 px.
* No WCAG AA violations (axe report passes).
* Content placeholders can be replaced via a single JSON file without code changes.
* Unit tests for `IconCard` and `ValuesGrid`.

---

## Plan C – Our Products & PCD Franchise
### Objective
Deliver a searchable, filterable product catalogue and a high‑conversion franchise page that captures leads while remaining fully static.

### Wireframe (ASCII)
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

### Component Map
| Component | Props | State |
|----------|-------|-------|
| `ProductsIntro` | `title`, `subtitle`, `bgImage` | – |
| `FilterBar` | `categories`, `onFilterChange` | `selectedCategory`, `searchTerm` |
| `ProductCard` | `product` (object) | – |
| `ProductGrid` | `products[]` | – |
| `Pagination` | `currentPage`, `totalPages`, `onPageChange` | – |
| `FranchiseBanner` | `title`, `points[]`, `cta` | – |
| `LeadForm` | `fields`, `onSubmit` | `formData`, `errors` |
| `Footer` | same as Plan A | – |

### Styling Guidelines
* **Tailwind** – use `grid` utilities for product cards (`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`).
* **Cards** – shadow, hover lift (`transform translate-y-[-2px]`).
* **Form** – accessible labels, error messages with `aria-live="polite"`.
* **Responsive** – filter bar collapses into an accordion on < 640 px.

### Performance & SEO
* **Static JSON** – `products.json` (generated from CMS export) bundled at build time.
* **Server‑side rendering** via Vite prerender for initial product list (improves LCP).
* **Meta tags** – each product card includes `data-title` for SEO; individual product pages (if added later) will have canonical URLs.
* **Image optimization** – WebP format, `srcset` for responsive sizes.

### Acceptance Criteria
* Filtering updates the grid without full page reload (client‑side). 
* Search is case‑insensitive and debounced (300 ms).
* Franchise form validates required fields and shows success toast.
* Accessibility audit passes (focus trap in modal, ARIA labels on form fields).
* E2E scenario: user filters by category, clicks a product, then returns to franchise CTA and submits the form.

---

## Plan D – Third‑Party Manufacturing & Research & Quality
### Objective
Showcase manufacturing capabilities, certifications, and research highlights with downloadable resources, using tabbed/accordion UI patterns for dense information.

### Wireframe (ASCII)
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

### Component Map
| Component | Props | State |
|----------|-------|-------|
| `ManufacturingHero` | `bgImage`, `title`, `subtitle` | – |
| `Tabs` | `tabs[]` (label + content), `defaultActive` | `activeTab` |
| `CertificationCarousel` | `logos[]` | `currentIndex` |
| `Accordion` | `items[]` (title, content) | `openItemId` |
| `DownloadButton` | `filePath`, `label` | – |
| `Footer` | same as Plan A | – |

### Styling Guidelines
* **Tabs** – underline indicator, focusable via arrow keys.
* **Accordion** – smooth height transition, `aria-expanded` attributes.
* **Badge animation** – CSS keyframes for rotation; pause on hover.
* **Colors** – use Primary Navy for tab headers, Light Teal for hover.
* **Responsive** – tabs collapse into vertical accordion on < 768 px.

### Performance & SEO
* **Pre‑load** certification logos (`rel="preload"`) to avoid layout shift.
* **PDFs** – served with `Cache‑Control: public, max‑age=31536000`.
* **Structured data** – `Product` schema for manufacturing services, `Article` schema for research items.
* **Code‑splitting** – lazy‑load the Research & Quality accordion component.

### Acceptance Criteria
* Tabs switch content instantly without full re‑render.
* Certification carousel loops infinitely and is keyboard‑navigable.
* All PDF download links have correct `Content‑Disposition` and open in a new tab.
* WCAG AA compliance: focus indicators, sufficient contrast, and screen‑reader friendly labels.
* Unit tests for `Tabs` and `Accordion`; Cypress test for PDF download flow.

---

*All plans adhere to the overall architecture, styling, and accessibility guidelines defined in the Master Context Specification.*
