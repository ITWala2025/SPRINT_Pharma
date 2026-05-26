# Refactoring Plan for SPRINT_Pharma Application

## 1. Current Codebase Assessment

| Area | Findings | Impact |
|------|----------|--------|
| **Folder Structure** | Mixed concerns; pages, components, styles, and assets are interleaved. Some pages live outside `src/pages`. | Hard to navigate, scaling becomes error‑prone. |
| **Component Granularity** | Large components contain both layout and business logic. | Violates **Single Responsibility** and **Separation of Concerns**. |
| **SOLID Violations** | - **S**ingle Responsibility: many UI components also fetch data or contain hard‑coded strings.\n- **O**pen/Closed: components are edited to add new UI variants instead of extending via props.\n- **D**ependency Inversion: direct imports of utility functions inside UI components. | Reduces reusability, makes testing difficult. |
| **DRY Issues** | Repeated markup for headers, footers, and hero sections across pages. | Increases maintenance overhead. |
| **State Management** | No centralized store; each component manages its own local state. | Leads to prop‑drilling and inconsistent UI state. |
| **Routing** | Routes are defined in `App.jsx` but there is no lazy‑loading or route‑level code‑splitting. | Bundle size grows unnecessarily. |
| **Styling** | Global CSS files coexist with Tailwind and component‑scoped CSS, causing specificity conflicts. | Styling inconsistencies and harder theming. |
| **Testing** | No test files or configuration present. | No safety net for future changes. |
| **Linting/Formatting** | No ESLint or Prettier config in repo. | Code style varies across files. |
| **CI** | No CI workflow defined. | No automated quality gates. |

## 2. Recommended Modular Folder Hierarchy

```
src/
│
├─ assets/                 # static assets (images, fonts, icons)
│   └─ images/
│
├─ components/             # reusable UI primitives
│   ├─ layout/             # Header, Footer, MainLayout, etc.
│   ├─ ui/                 # Buttons, Cards, Grids, etc.
│   └─ shared/             # common utilities (e.g., LoadingSpinner)
│
├─ pages/                  # route‑level pages (one folder per page)
│   ├─ Home/
│   │   ├─ index.jsx       # page component
│   │   └─ Home.module.css # scoped styles
│   ├─ About/
│   │   └─ index.jsx
│   ├─ Products/
│   │   └─ index.jsx
│   ├─ Manufacturing/
│   │   └─ index.jsx
│   ├─ Contact/
│   │   └─ index.jsx
│   └─ Vision/             # optional if still needed
│       └─ index.jsx
│
├─ hooks/                  # custom React hooks (e.g., useFetch, useDebounce)
│
├─ lib/                    # pure utility functions (no React)
│   ├─ aos.js
│   ├─ debounce.js
│   └─ motion.js
│
├─ store/                  # state‑management (Redux Toolkit, Zustand, or Context)
│   └─ index.js
│
├─ routes/                 # route definitions & lazy loading
│   └─ index.jsx
│
├─ App.jsx
├─ main.jsx
└─ index.css               # global Tailwind imports only
```

**Naming Conventions**

* Files: `PascalCase.jsx` for components/pages, `camelCase.js` for utilities.
* Folders: `PascalCase` for feature groups, `lowercase` for generic containers (`hooks`, `store`).
* Styles: CSS Modules (`ComponentName.module.css`) or Tailwind utility classes only.

## 3. Component Structure

### 3.1 Layout Components (`src/components/layout`)

| Component | Responsibility | Export |
|----------|----------------|--------|
| `Header.jsx` | Navigation, logo, responsive menu | `export default Header;` |
| `Footer.jsx` | Site footer links, copyright | `export default Footer;` |
| `MainLayout.jsx` | Wraps page content with Header & Footer | `export default MainLayout;` |

**Example – `Header.jsx`**

```jsx
// src/components/layout/Header.jsx
import { NavLink } from 'react-router-dom';
import logo from '@/assets/images/logo.svg';
import './Header.module.css';

const Header = () => (
  <header className="bg-white shadow">
    <div className="container mx-auto flex items-center justify-between p-4">
      <img src={logo} alt="Zupharm" className="h-8" />
      <nav className="space-x-4">
        {['/', '/about', '/products', '/manufacturing', '/contact'].map((path) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              isActive ? 'text-primary font-semibold' : 'text-gray-600'
            }
          >
            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
```

### 3.2 Page Components (`src/pages/*`)

Each page lives in its own folder with an `index.jsx` entry point.

**Example – `Home/index.jsx`**

```jsx
// src/pages/Home/index.jsx
import MainLayout from '@/components/layout/MainLayout';
import HeroBanner from '@/components/ui/HeroBanner';
import ProductGrid from '@/components/ui/ProductGrid';
import './Home.module.css';

const Home = () => (
  <MainLayout title="Home">
    <HeroBanner />
    <ProductGrid />
    {/* Add other home‑section components */}
  </MainLayout>
);

export default Home;
```

Apply the same pattern for **About**, **Products**, **Manufacturing**, **Contact**.

### 3.3 UI Primitive Example – `ProductCard.jsx`

```jsx
// src/components/ui/ProductCard.jsx
import PropTypes from 'prop-types';
import './ProductCard.module.css';

const ProductCard = ({ image, title, description }) => (
  <div className="card">
    <img src={image} alt={title} className="card-img" />
    <h3 className="card-title">{title}</h3>
    <p className="card-text">{description}</p>
  </div>
);

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ProductCard;
```

## 4. State Management, Routing & Dependency Injection

| Concern | Recommendation |
|---------|----------------|
| **State** | Use **Redux Toolkit** (or **Zustand** for lighter weight). Centralize UI state (e.g., product list, filter criteria). Create slice files under `store/`. |
| **Routing** | Keep route definitions in `src/routes/index.jsx` with **React.lazy** for code‑splitting. |
| **DI** | For services (API clients, analytics), expose them via a **Context Provider** (`src/lib/ServiceProvider.jsx`) and inject where needed. |

**Routing Example – `src/routes/index.jsx`**

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Loader from '@/components/ui/Loader';

const Home = lazy(() => import('@/pages/Home'));
const About = lazy(() => import('@/pages/About'));
const Products = lazy(() => import('@/pages/Products'));
const Manufacturing = lazy(() => import('@/pages/Manufacturing'));
const Contact = lazy(() => import('@/pages/Contact'));

const AppRoutes = () => (
  <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Suspense>
  </Router>
);

export default AppRoutes;
```

Update `src/App.jsx` to simply export `AppRoutes`.

## 5. Testing, Linting, Formatting & CI

| Tool | Purpose | Config Location |
|------|---------|-----------------|
| **Jest + React Testing Library** | Unit & integration tests for components/pages. | `jest.config.js` |
| **ESLint (airbnb/react)** | Enforce code style, detect unused vars, enforce import order. | `.eslintrc.js` |
| **Prettier** | Consistent formatting. | `.prettierrc` |
| **Stylelint** | Validate Tailwind utility usage. | `.stylelintrc.json` |
| **Husky + lint‑staged** | Run lint/format on pre‑commit. | `package.json` scripts |
| **GitHub Actions** | CI pipeline: install, lint, test, build, deploy (Netlify). | `.github/workflows/ci.yml` |

**Sample CI Workflow (`.github/workflows/ci.yml`)**

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run lint
      - run: npm run test -- --coverage
      - run: npm run build
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2
        with:
          publish-dir: ./dist
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          netlify-auth-token: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          netlify-site-id: ${{ secrets.NETLIFY_SITE_ID }}
```

## 6. Migration Roadmap

```mermaid
flowchart TD
    A[Start] --> B[Run static analysis (ESLint, depcheck)]
    B --> C[Document SOLID/DRY violations]
    C --> D[Create new folder hierarchy (git branch “refactor‑structure”)]
    D --> E[Move components into layout/ui/shared]
    E --> F[Create page folders & migrate page files]
    F --> G[Introduce Redux Toolkit store (initial slice)]
    G --> H[Replace local state with store where appropriate]
    H --> I[Add lazy‑loaded routes]
    I --> J[Add CSS Modules / migrate Tailwind usage]
    J --> K[Write unit tests for moved components]
    K --> L[Setup ESLint, Prettier, Stylelint]
    L --> M[Add Husky pre‑commit hooks]
    M --> N[Create CI workflow]
    N --> O[Run full test suite]
    O --> P[Deploy to staging]
    P --> Q[Validate functionality]
    Q --> R[Merge to main]
    R --> S[Rollback plan (git revert branch) if regressions]
    S --> T[Done]
```

### Prioritized Tasks

| Priority | Task | Success Criteria |
|----------|------|-------------------|
| **1** | Add ESLint/Prettier, run lint to surface immediate issues. | No lint errors in CI. |
| **2** | Re‑organize folder hierarchy on a separate branch. | All imports compile after path alias updates (`@/`). |
| **3** | Extract Header/Footer into `layout/` and wrap pages with `MainLayout`. | Header/Footer appear on every page without duplication. |
| **4** | Implement Redux Toolkit store with a sample slice (e.g., `products`). | Components consume store via `useSelector` and dispatch actions. |
| **5** | Convert routes to lazy‑loaded components. | Bundle size reduced, network waterfall shows code‑splitting. |
| **6** | Add unit tests for each moved component. | Coverage ≥ 80% for core UI. |
| **7** | Set up CI pipeline and Netlify deployment. | Every push triggers CI and successful deploy to staging. |
| **8** | Document migration steps in `README.md` and create rollback instructions. | Team can revert with `git revert` if needed. |

**Rollback Considerations**

* Keep the original `main` branch untouched; perform all changes on `refactor-structure`. 
* Tag the pre‑refactor commit (`pre-refactor`) for quick revert.
* CI pipeline includes a “dry‑run” job that runs tests against the previous commit to ensure no hidden breakage.

---

**Next Step**: Switch to **Code** mode to start implementing the folder restructuring and configuration files.

