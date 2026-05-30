**Build Manifest — About Page (Vision, Mission & Values)**

Project: Pharma Corporate Website — SPRINT_Pharma
Developer: Farhat Afreen
Version: 1.0.0
Build Date: 30-May-2026
Page: About Page (/about)

---

**Tech Stack**

- React (with Vite)
- Tailwind CSS
- react-icons
- React Router DOM

---

**Source Files**

| File | Location | Purpose |
|------|----------|---------|
| About.jsx | src/ | Main About page component |
| style.css | src/ | Custom CSS styles for About page |

---

**Assets Used**

| Asset | Location | Used In |
|-------|----------|---------|
| Vision stock photo | public/ | Vision section (right side image) |

---

**React Icons Used**

| Icon | Section |
|------|---------|
| Target / Bullseye icon | Mission section |
| Leaf / Integrity icon | Core Values card |
| Lightbulb / Innovation icon | Core Values card |
| People / Collaboration icon | Core Values card |
| Heart / Compassion icon | Core Values card |
| Shield / Quality icon | Core Values card |
| Globe / Sustainability icon | Core Values card |

---

**Sections / Components**

| Section | Description |
|---------|-------------|
| Vision | Two-column layout with heading, subtext, and stock image |
| Mission | Two-column layout with icon visual and mission text |
| Core Values | 3x2 responsive card grid with icons and descriptions |

---

**Routing**

| Route | Component |
|-------|-----------|
| /about | About.jsx |

---

**Responsiveness**

| Viewport | Status |
|----------|--------|
| Desktop | ✅ Tested |
| Tablet | ✅ Tested |
| Mobile | ✅ Tested |

---

**Interactions / Animations**

| Element | Interaction |
|---------|-------------|
| Core Values cards | Scale up on hover (Tailwind CSS hover utilities) |

---

**Dependencies**

| Package | Purpose |
|---------|---------|
| react | Core framework |
| vite | Build tool |
| tailwindcss | Utility-first CSS framework |
| react-icons | Icon library for section and card icons |
| react-router-dom | Client-side routing (/about route) |

---

**Build Notes**

- No third-party animation library used; all animations via Tailwind CSS
- Stock photo to be replaced with original Zupharm imagery in future version
- Page fully integrated into main site navigation under "About" tab
