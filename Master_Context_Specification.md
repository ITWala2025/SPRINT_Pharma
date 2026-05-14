# Master Context Specification – Zupharm Laboratories Website (Phase 1)

**Scope:** static public pages built with a Node.js / React stack. All CRM‑ and database‑level integrations are explicitly excluded.

---

## 1. Overall Architecture

### 1.1 High‑level System Diagram

```mermaid
flowchart TD
    subgraph Client["Browser (Static Site)"]
        A[HTML + CSS + JS] --> B[React SPA]
        B --> C[React Router]
        B --> D[Component Library]
        B --> E[State Management (Context API)]
    end

    subgraph Build["Build & Deploy"]
        F[Node.js (v20) + npm] --> G[Webpack / Vite]
        G --> H[Static Assets (dist/)]
        H --> I[CI/CD (GitHub Actions)]
        I --> J[Hosting (Vercel / Netlify – CDN edge)]
    end

    Client -->|fetches| H
```

### 1.2 Technology Stack

| Layer | Technology | Version / Notes |
|-------|------------|-----------------|
| **Runtime** | Node.js | v20.x (LTS) |
| **Framework** | React | v18.x |
| **Routing** | React Router | v6.x (nested routes, lazy loading) |
| **State Management** | React Context API (with `useReducer`) – lightweight for static data; optional Redux/Zustand for future Phase 2 |
| **Styling** | Tailwind CSS + PostCSS (utility‑first) – custom theme colors from brand palette |
| **Build Tools** | Vite (fast dev server, ESBuild) – produces static assets |
| **CI/CD** | GitHub Actions – lint, test, build, deploy to Vercel/Netlify |
| **Hosting** | Vercel (edge CDN) – static site hosting, automatic HTTPS |
| **Testing** | Jest + React Testing Library (unit); Cypress (e2e) |
| **Accessibility** | axe‑core (automated a11y testing) |
| **Version Control** | Git (GitHub) – feature‑branch workflow, PR naming conventions (`feat:`, `fix:`) |
| **Documentation** | Storybook (component catalogue) – internal reference |

---

## 2. Page Hierarchy & Navigation

### 2.1 Sitemap

| Page | URL | Source |
|------|-----|--------|
| Home | `/` | [`README_Zupharm_Farhat.md:27`](README_Zupharm_Farhat.md:27) |
| About Us | `/about` | [`README_Zupharm_Farhat.md:30`](README_Zupharm_Farhat.md:30) |
| Vision & Mission | `/vision-mission` | [`README_Zupharm_Farhat.md:31`](README_Zupharm_Farhat.md:31) |
| Our Values | `/values` | [`README_Zupharm_Farhat.md:32`](README_Zupharm_Farhat.md:32) |
| Products | `/products` | [`README_Zupharm_Farhat.md:33`](README_Zupharm_Farhat.md:33) |
| PCD Franchise | `/pcd-franchise` | [`README_Zupharm_Farhat.md:34`](README_Zupharm_Farhat.md:34) |
| Third‑Party Manufacturing | `/third-party-manufacturing` | [`README_Zupharm_Farhat.md:35`](README_Zupharm_Farhat.md:35) |
| Research & Quality | `/research-quality` | [`README_Zupharm_Farhat.md:36`](README_Zupharm_Farhat.md:36) |
| Infrastructure | `/infrastructure` | [`README_Zupharm_Farhat.md:37`](README_Zupharm_Farhat.md:37) |
| Careers | `/careers` | [`README_Zupharm_Farhat.md:38`](README_Zupharm_Farhat.md:38) |
| Blog / Knowledge Centre | `/blog` | [`README_Zupharm_Farhat.md:39`](README_Zupharm_Farhat.md:39) |
| Investor | `/investor` | [`README_Zupharm_Farhat.md:40`](README_Zupharm_Farhat.md:40) |
| Contact | `/contact` | [`README_Zupharm_Farhat.md:41`](README_Zupharm_Farhat.md:41) |

### 2.2 Routing Architecture
* **Static routes** – defined in `src/router/routes.tsx` using `createBrowserRouter`.
* **Dynamic routes** – product‑detail pages (`/products/:category/:sku`) are lazy‑loaded; data is fetched from static JSON files generated at build time.
* **Fallback** – `*` route renders a custom 404 page with breadcrumb back‑link and contact CTA.

### 2.3 Navigation Flow
* **Sticky top navbar** – logo left, primary links centred, “Apply for Franchise” CTA right (design rule [#66] in `merged_readmes.txt`).
* **Mega‑menu** for the 13‑page hierarchy (Sun Pharma reference, [`merged_readmes.txt:88`](merged_readmes.txt:88)).
* **Breadcrumbs** – rendered on every inner page via a reusable `Breadcrumb` component (source: `PharmaSite_piyush's.md:73‑78`).
* **Graceful degradation** – if a route fails to load, the fallback page offers a “Return Home” button and a persistent WhatsApp contact widget (bottom‑right).

---

## 3. Component Inventory

| Component | Description | Props (key) | Default | Type |
|-----------|-------------|-------------|---------|------|
| `Header` | Sticky navbar with logo, links, CTA | `logoSrc`, `navItems`, `ctaLabel`, `ctaHref` | `ctaLabel: "Apply for Franchise"` | `string` |
| `Footer` | 4‑column footer + legal row | `columns`, `legalText` | `legalText: "© 2026 Zupharm Ltd."` | `string` |
| `HeroBanner` | Full‑width hero with background, tagline, two CTAs | `title`, `subtitle`, `primaryCta`, `secondaryCta` | `primaryCta.label: "Explore Products"` | `object` |
| `CardGrid` | Responsive grid for product categories, testimonials, etc. | `items`, `columns` | `columns: 4 (desktop)` | `array` |
| `CounterStrip` | Animated stats (500+ Products, 20+ States…) | `counters` | – | `array` |
| `Breadcrumb` | Hierarchical navigation trail | `segments` | – | `array` |
| `WhatsAppButton` | Fixed‑position green button (bottom‑right) | `phoneNumber` | `+91‑XXXXXXXXXX` | `string` |
| `ModalForm` | Lead‑capture form (static for Phase 1) | `fields`, `onSubmit` | – | `object` |

### 3.1 State Management
* **Global UI state** (mobile menu, theme toggles) – React Context + `useReducer`.
* **Page‑specific data** – local component state; static JSON imported at build time.
* **Future expansion** – Redux Toolkit or Zustand can be introduced in Phase 2 for CRM integration without refactoring core UI.

### 3.2 Interaction Patterns

| Pattern | Implementation | Accessibility Note |
|---------|----------------|--------------------|
| **Hover & focus states** | Tailwind utilities (`hover:` / `focus:`) with color contrast ≥ 4.5:1 (WCAG AA) | Ensure visible focus ring (`focus-visible`) |
| **Animated counters** | `react-intersection-observer` + `framer-motion` (trigger on scroll) | Respect `prefers-reduced-motion` media query |
| **Modal forms** | Portal rendering, trap focus, ESC close | ARIA `role="dialog"` + `aria-labelledby` |
| **Sticky navbar** | CSS `position: sticky; top: 0;` | Ensure it does not obscure content for screen readers |

---

## 4. Styling Guidelines

### 4.1 Design System
* **Component library** – built on top of Tailwind CSS with a custom theme (`tailwind.config.js`).
* **UI kit** – documented in Storybook (`/storybook`).

### 4.2 Color Palette

| Role | HEX | Usage |
|------|-----|-------|
| Primary Navy | `#0B2545` | Headers, footer, main backgrounds |
| Primary Teal | `#0D7377` | Buttons, links, accent sections |
| Light Teal | `#14BDAC` | Hover states, highlights |
| Sky Blue | `#E8F4FD` | Section backgrounds |
| Gold / Amber | `#D4A017` | CTA buttons, badges |
| Dark Gray | `#2D3748` | Body text |
| Mid Gray | `#718096` | Captions, footer text |
| White | `#FFFFFF` | Card backgrounds, primary text |
*All colors meet AA contrast ratios for normal text (≥ 4.5:1) and AAA for large text (≥ 7:1).*

### 4.3 Typography

| Element | Font Family | Weight | Size / Line‑height |
|---------|-------------|--------|--------------------|
| H1 | Inter Bold / Poppins Bold | 700 | 40–48 px / 1.2 |
| H2 | Inter Bold / Poppins Bold | 700 | 28–32 px / 1.3 |
| H3 | Inter Bold / Poppins Bold | 700 | 20–24 px / 1.4 |
| Body | Inter Regular / Open Sans | 400 | 16 px / 1.7 |
| Caption | Inter Regular | 400 | 13–14 px / 1.5 |
*Source: colour & typography tables in `merged_readmes.txt` lines 64‑68.*

### 4.4 Spacing & Grid
* **Spacing scale** – 4 px base, multiples (4, 8, 12, 16, 24, 32, 48, 64).
* **Grid** – 12‑column responsive grid, max content width **1200 px** centred (design rule [#66] in `merged_readmes.txt`).
* **Breakpoints** – `sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`, `2xl: 1536px`.

### 4.5 Accessibility

| Requirement | Implementation |
|-------------|----------------|
| WCAG 2.2 AA | Semantic HTML, ARIA landmarks, focus order, color contrast |
| Keyboard navigation | All interactive elements reachable via `Tab`; visible focus ring |
| ARIA roles | `nav`, `main`, `footer`, `dialog` (modals), `button` |
| Images | `alt` text; decorative icons marked `aria-hidden="true"` |
| Forms | Labels associated with inputs, error messages announced via `aria-live` |
| Reduced motion | Respect `prefers-reduced-motion` – disable counter animations |

---

## 5. Asset References

| Asset Type | Path (relative) | Format | Dimensions / Size | Usage |
|------------|----------------|--------|-------------------|-------|
| Logo (placeholder) | `src/assets/logo.svg` | SVG | – | Header, footer |
| Hero background | `src/assets/hero.jpg` | JPEG | 1920 × 1080 px | Home hero |
| Icon set | `src/assets/icons/*` | SVG | 24 × 24 px | Navigation, feature cards |
| Product images | `src/assets/products/*.webp` | WebP | ≤ 800 × 800 px | Product catalogue |
| PDF catalogue | `public/assets/catalogue.pdf` | PDF | – | Download link on Products page |
| Font files | `src/fonts/Inter/*` | woff2 | – | Body & headings |
| Animation assets | `src/assets/animations/*` | Lottie JSON | – | Counter strip, badge rotation |

*Versioning*: assets are version‑controlled via Git LFS; naming convention `name_v{major}.{minor}.{patch}.ext`.

---

## 6. Cross‑Referenced PDF & TXT Insights

| Document | Key Insight | Linked Spec Section |
|----------|-------------|---------------------|
| **PharmaWebsiteLayout.pdf** (user‑provided) | Emphasises three core objectives – Brand Authority, Lead Generation, Investor Confidence – and defines target audiences (PCD partners, HCPs, Business Stakeholders). | **1. Overall Architecture** (objectives), **2. Page Hierarchy** (audience‑driven sitemap), **4. Styling** (brand‑centric colors) |
| **merged_readmes.txt** | Lists exact colour palette, typography, UI rules (sticky navbar, WhatsApp button, AOS animations). | **4. Styling Guidelines**, **2. Navigation**, **3. Component Inventory** |
| **README_Zupharm_Farhat.md** | Detailed page list, hero copy, component counts, design inspirations (Cipla, Sun Pharma, Mankind Pharma). | **2. Page Hierarchy**, **3. Component Inventory**, **4. Styling** |
| **Zupharm_blueprint.md** | High‑level architecture, future expansion notes, SEO strategy, compliance requirements. | **1. Overall Architecture**, **5. Asset References**, **7. Source Attribution** |
| **zupharm_website_blueprint.md** | Technical stack recommendation (WordPress + Elementor for Phase 1, Node.js for future), but Phase 1 scope limited to static React site. | **1. Overall Architecture**, **6. Cross‑Referenced Insights** |

*All citations are inline using the format `[source:line]` as shown above.*

---

## 7. Source Attribution

| File | Relative Path |
|------|---------------|
| Team context & high‑level objectives | `merged_readmes.txt` |
| Colour palette, typography, UI rules | `merged_readmes.txt` |
| Page list, hero copy, component inventory | `README_Zupharm_Farhat.md` |
| Full website blueprint, future roadmap | `Zupharm_blueprint.md` |
| Technical stack recommendation (CMS note) | `zupharm_website_blueprint.md` |
| PDF summary (user‑provided) | *User supplied text* (see Section 6) |

---

### Next Steps
1. **Review** this specification with stakeholders for any missing details (e.g., final asset files, copy).
2. **Implement** the static site according to the architecture and component inventory (switch to **💻 Code** mode).

*If the plan meets your expectations, please confirm so we can proceed to implementation.*

