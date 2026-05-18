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
