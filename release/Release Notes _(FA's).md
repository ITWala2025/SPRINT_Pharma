**Pharma Corporate Website v1.0.0 Release Notes**

Release Version: 1.0.0

Release Date: 30-May-2026

Platform: Web (Desktop, Mobile, Tablet)

Release Type: Initial Production Release

Page Assigned: About Page — Vision, Mission & Values

Developer: Farhat Afreen

---

**Overview**

This release covers the About Page of the Zupharm Laboratories Pvt. Ltd. corporate website, specifically the Vision, Mission & Core Values section. The page presents the company's organizational identity in a clean, modern, and responsive layout built using React, Vite, and Tailwind CSS. The page is accessible via the /about route.

---

**Sections Implemented**

1. Vision Section
   - Heading: "To Lead the Way in Pharmaceutical Innovation"
   - Subtext describing the company's vision statement
   - Stock image placed on the right side of the layout
   - Decorative background pattern for visual depth

2. Mission Section
   - Heading: "Delivering Quality Medicines. Building Healthy Lives."
   - Subtext describing the mission statement
   - Teal target icon (from react-icons) on the left side
   - Decorative dot-grid background pattern

3. Core Values Section
   - Section label: "What We Stand For"
   - Heading: "Our Core Values"
   - 6 value cards displayed in a 3x2 responsive grid:
     - Integrity — honesty and transparency
     - Innovation — continuous improvement and research
     - Collaboration — working with partners and communities
     - Compassion — people's health and well-being
     - Quality — rigorous safety and efficacy standards
     - Sustainability — environmentally responsible practices
   - Each card contains a teal icon (react-icons), bold title, and description
   - Hover interaction: cards scale up slightly on hover for visual feedback

---

**Technical Details**

- Framework: React (with Vite)
- Styling: Tailwind CSS + custom style.css
- Icons: react-icons library
- Images: Stock photo (stored in public folder)
- Routing: React Router, route path /about
- Responsive: Yes — tested on Desktop, Mobile, and Tablet viewports

---

**Files Modified / Created**

- src/About.jsx — Main page component
- src/style.css — Custom styles for the About page

---

**Known Issues**

- Need to add suitable image in mission section.

---

**Notes**

- Vision section image is a stock photo placeholder; can be replaced with an original Zupharm image in future releases
- Hover animation on Core Values cards is CSS-based (Tailwind hover utilities), no third-party animation library used
