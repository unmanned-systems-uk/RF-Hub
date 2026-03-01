# RF-Hub V2 Styling & Restructure Specification
## Status: 🔒 LOCKED — Effective 2026-02-28

> **This document is the single source of truth for all RF-Hub frontend styling.**
> No deviations without Anthony's explicit approval.

---

## 1. Summary of Changes Completed

| Task | Status | Files |
|------|--------|-------|
| Rename `Rescorce/` → `resources/` | ✅ Done | Folder moved |
| Extract shared design system CSS | ✅ Done | `frontend/assets/css/rf-hub-v2.css` (800 lines) |
| Create blog template (reference page) | ✅ Done | `frontend/pages/blog/understanding-s11.html` (365 lines) |
| Create blog directory structure | ✅ Done | `frontend/pages/blog/` |

---

## 2. Design System — LOCKED Tokens

### 2.1 Colour Palette

```
BACKGROUNDS
  --bg-deep:        #0a0e1a      Deep navy — body background
  --bg-card:        #111827      Card/panel surfaces
  --bg-card-hover:  #1a2234      Card hover state
  --bg-input:       #1a2234      Form input backgrounds

RF DOMAIN ACCENTS (semantic colours)
  --accent-e:       #f59e0b      E-field / Electric — Amber
  --accent-h:       #06b6d4      H-field / Magnetic — Cyan
  --accent-em:      #a78bfa      EM / Primary brand — Purple
  --accent-power:   #ef4444      Power / Warning / Voltage — Red
  --accent-current: #22c55e      Current / Success — Green
  --accent-electron:#60a5fa      Electron / Info — Blue

GLOW VARIANTS (box-shadow, background tints)
  --glow-e:   rgba(245, 158, 11, 0.15)
  --glow-h:   rgba(6, 182, 212, 0.15)
  --glow-em:  rgba(167, 139, 250, 0.15)

TEXT
  --text-primary:   #e2e8f0      Main body text
  --text-secondary: #94a3b8      Supporting text
  --text-dim:       #64748b      Captions, labels, metadata

BORDERS
  --border:         #1e293b      All borders and dividers
```

### 2.2 Typography

```
FONT STACKS
  --font-display:  'DM Serif Display', serif      → h1, h2, nav brand
  --font-body:     'IBM Plex Sans', sans-serif     → body, paragraphs (weight: 300)
  --font-mono:     'IBM Plex Mono', monospace      → code, labels, badges, metadata

GOOGLE FONTS IMPORT (required in every HTML <head>)
  https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap

HEADING SCALE
  h1:  clamp(2.2rem, 5vw, 3.4rem)  font-display  weight 400  gradient fill
  h2:  clamp(1.6rem, 3vw, 2rem)    font-display  weight 400  solid primary
  h3:  1.15rem                       font-body     weight 500  solid primary
  h4:  12px                          font-mono     weight 500  uppercase, letter-spacing 1.5px

BODY
  font-size: 1rem
  font-weight: 300
  line-height: 1.7
  colour: --text-secondary (paragraphs), --text-primary (strong/bold)
```

### 2.3 Spacing Scale

```
  --space-xs:   4px
  --space-sm:   8px
  --space-md:  16px
  --space-lg:  24px
  --space-xl:  32px
  --space-2xl: 48px
  --space-3xl: 64px
  --space-4xl: 80px
```

### 2.4 Border Radius

```
  --radius-sm:   6px     Buttons, code inline, small tags
  --radius-md:  12px     Callouts, summary cards, tables
  --radius-lg:  16px     Main cards, figures, panels
  --radius-pill: 20px    Badges, pills
```

---

## 3. Component Library

All components are defined in `frontend/assets/css/rf-hub-v2.css`. The class names below are mandatory.

### 3.1 Layout

| Class | Purpose |
|-------|---------|
| `.container` | 900px max-width, centred, 24px padding |
| `.container--wide` | 1100px max-width variant |
| `.container--narrow` | 720px max-width variant |

### 3.2 Signature Elements

| Component | Class(es) | Notes |
|-----------|-----------|-------|
| **Grid background** | `body::before` | Automatic — 60px subtle grid overlay, pointer-events: none |
| **Hero section** | `.hero` | 80px top, 60px bottom padding, centred text |
| **Hero badge** | `.hero-badge` / `.badge` | Mono font, 11px, uppercase, 3px letter-spacing, pill border |
| **Badge variants** | `.badge--e`, `.badge--h`, `.badge--success`, `.badge--warning` | Colour-coded pill badges |
| **Gradient h1** | `h1` | Automatic gradient fill (text-primary → accent-em) |

### 3.3 Cards

| Class | Use |
|-------|-----|
| `.card` | Standard dark card with border, 16px radius, hover lift |
| `.card--accent` | Adds gradient top-border (amber → purple → cyan) |
| `.card--glow-e` | Inset amber glow |
| `.card--glow-h` | Inset cyan glow |
| `.card--glow-em` | Inset purple glow |

### 3.4 Chapter Sections

```html
<div class="chapter" id="section-id">
  <div class="chapter-header">
    <span class="chapter-num">CHAPTER 01</span>
    <div class="chapter-line"></div>
  </div>
  <h2>Section Title</h2>
  <!-- content -->
</div>
```

### 3.5 Tables

```html
<div class="table-wrapper">
  <table>
    <thead><tr><th>Header</th></tr></thead>
    <tbody><tr><td>Data</td></tr></tbody>
  </table>
</div>
```

Cell assessment classes: `td.excellent` (green), `td.good` (cyan), `td.poor` (amber), `td.bad` (red)

### 3.6 Callouts

```html
<div class="callout callout--info">
  <span class="callout-icon">💡</span>
  <div class="callout-text"><strong>Title:</strong> Body text here.</div>
</div>
```

Variants: `.callout--e` (amber), `.callout--h` (cyan), `.callout--warning` (red), `.callout--success` (green), `.callout--info` (blue), default (purple)

### 3.7 Alert Boxes

```html
<div class="alert-box">
  <h4>Title</h4>
  <p>Content here.</p>
</div>
```

Variant: `.alert-box--warning` (red/amber gradient)

### 3.8 Figures

```html
<div class="figure">
  <img src="path/to/image.png" alt="Description">
  <div class="figure-caption">Figure N: Caption text.</div>
</div>
```

### 3.9 Summary Grids

```html
<div class="summary-grid">
  <div class="summary-card">
    <h4 class="text-success">Title</h4>
    <p>Description.</p>
  </div>
  <!-- repeat -->
</div>
```

### 3.10 Buttons

| Class | Use |
|-------|-----|
| `.btn .btn--primary` | Solid purple, dark text |
| `.btn .btn--ghost` | Transparent with purple border |

### 3.11 Navigation

```html
<nav class="site-nav">
  <div class="container container--wide">
    <a href="index.html" class="site-nav-brand">RF-Hub</a>
    <ul class="site-nav-links">
      <li><a href="..." class="active">Current</a></li>
    </ul>
  </div>
</nav>
```

### 3.12 Footer

```html
<footer class="site-footer">
  <div class="container">
    <p>RF-Hub — The world's best interactive RF engineering learning platform</p>
    <p style="margin-top: 8px;">73 and good DX! 📡</p>
  </div>
</footer>
```

### 3.13 Utility Classes

Text colour: `.text-e`, `.text-h`, `.text-em`, `.text-power`, `.text-success`, `.text-info`, `.text-dim`
Alignment: `.text-center`, `.text-mono`
Spacing: `.mt-0`, `.mt-md`, `.mt-lg`, `.mt-xl`, `.mb-0`, `.mb-md`, `.mb-lg`, `.mb-xl`

---

## 4. File Structure (Target State)

```
RF-Hub/
├── frontend/
│   ├── index.html                          ← RESTYLE to V2
│   ├── assets/
│   │   ├── css/
│   │   │   ├── rf-hub-v2.css              ← 🔒 LOCKED shared stylesheet
│   │   │   └── styles.css                 ← OLD — delete after migration
│   │   ├── js/
│   │   │   ├── main.js
│   │   │   ├── api.js
│   │   │   ├── auth-ui.js
│   │   │   └── storage.js
│   │   └── images/
│   │       ├── Antenna/                   ← 26 existing images
│   │       └── blog/                      ← NEW — extracted DOCX images
│   ├── pages/
│   │   ├── frequency-bands.html           ← RESTYLE to V2
│   │   ├── antennas.html                  ← RESTYLE to V2
│   │   ├── learning-path.html             ← Future build
│   │   ├── equipment.html                 ← Future build
│   │   └── blog/
│   │       ├── understanding-s11.html     ← ✅ REFERENCE TEMPLATE (done)
│   │       ├── lte-antenna-test.html      ← CONVERT from DOCX
│   │       └── vna-calibration.html       ← CONVERT from DOCX
├── resources/                              ← ✅ RENAMED from Rescorce/
│   ├── em-radiation.html                  ← REFACTOR to use shared CSS
│   ├── em-animato-2.html                 ← REFACTOR to use shared CSS
│   ├── radiation-3d-v5.html              ← REFACTOR to use shared CSS
│   ├── radiation-3d.html                 ← REFACTOR to use shared CSS
│   ├── tx-rx-complete.html               ← REFACTOR to use shared CSS
│   ├── LTE_Antenna_Test_Results.docx     ← Source for blog conversion
│   ├── RSA5065N_VNA_Calibration_Cheat_Sheet.docx  ← Source for blog conversion
│   ├── Understanding_S11_Measurements.docx ← Source (already converted)
│   ├── HARDWARE-SURVEY.md                ← Move to docs/
│   ├── LESSONS-LEARNED.md                ← Move to docs/
│   ├── SDR-EXPERIMENTS.md                ← Move to docs/
│   ├── SDR-TASK-IDEAS.md                 ← Move to docs/
│   └── UNSQUELCHED-VISION.md             ← Move to docs/
├── backend/                               ← No changes
├── docs/                                  ← Project documentation
│   └── 11-V2-STYLING-SPEC.md            ← THIS FILE
└── README.md
```

---

## 5. Page-by-Page Task List

### 5.1 Pages to RESTYLE (old CSS → rf-hub-v2.css)

These three pages currently use `styles.css` (old lighter theme). They must be converted to use `rf-hub-v2.css` and match the new dark design system.

| Page | Lines | Key Elements to Convert |
|------|-------|------------------------|
| `index.html` | 260 | Dashboard layout, stat cards, nav grid, progress indicators |
| `frequency-bands.html` | 954 | EM spectrum table, ITU bands table, amateur bands, JSON/CSV export buttons |
| `antennas.html` | 1,255 | Theory sections, antenna type cards, 24-image gallery, construction guidelines |

**Rules:**
- Replace `<link>` to `styles.css` with `rf-hub-v2.css`
- Add Google Fonts `<link>` if missing
- Replace all inline styles and old class names with V2 component classes
- Add `.site-nav` navigation bar to every page
- Add `.site-footer` to every page
- Remove all old `<style>` blocks — everything must come from the shared CSS
- Add `blog/` to the navigation links
- Any page-specific CSS (animations, canvas, etc.) goes in a `<style>` block clearly marked `/* PAGE-SPECIFIC */`

### 5.2 Blog Posts to CONVERT (DOCX → HTML)

| Source DOCX | Target HTML | Content Type |
|-------------|-------------|--------------|
| `Understanding_S11_Measurements.docx` | `blog/understanding-s11.html` | ✅ Done — reference template |
| `LTE_Antenna_Test_Results.docx` | `blog/lte-antenna-test.html` | Test report with tables, VNA screenshots, per-band analysis |
| `RSA5065N_VNA_Calibration_Cheat_Sheet.docx` | `blog/vna-calibration.html` | Step-by-step guide, 7 tables, critical warnings |

**Blog conversion rules:**
- Follow the exact structure of `understanding-s11.html` as the template
- Use chapter sections with numbered headers
- All tables use `.table-wrapper > table` pattern
- All warnings use `.callout--warning` or `.alert-box--warning`
- All figures use `.figure > img + .figure-caption`
- Images extracted from DOCX go to `frontend/assets/images/blog/`
- Article metadata block required (instrument, date, read time)
- No inline CSS — shared stylesheet only + page-specific `<style>` block if absolutely necessary

### 5.3 Interactive Pages to REFACTOR (extract inline CSS)

The 5 HTML files in `resources/` have the design system CSS duplicated inline. After migration:
- Replace inline `<style>` blocks with `<link>` to `rf-hub-v2.css`
- Keep only page-specific CSS (canvas sizing, animation keyframes, 3D controls) in a clearly marked inline `<style>` block
- Add `.site-nav` and `.site-footer`
- Verify all visual components still render correctly

---

## 6. Migration Verification Checklist

After each page conversion, verify:

- [ ] Page loads with no console errors
- [ ] Grid background texture visible
- [ ] All text uses correct font families (DM Serif Display for headings, IBM Plex Sans for body, IBM Plex Mono for code/labels)
- [ ] Colour palette matches spec (no old blue/white theme remnants)
- [ ] Navigation bar present and sticky
- [ ] Footer present
- [ ] All links work (especially blog nav)
- [ ] Responsive: check at 1200px, 768px, and 480px
- [ ] Tables are scrollable on mobile
- [ ] Images have proper `.figure` wrapper with caption
- [ ] No inline styles except page-specific animations

---

## 7. What NOT to Change

- **Backend code** — No changes to server.js, models, routes, schema
- **JavaScript logic** — main.js, api.js, auth-ui.js, storage.js remain as-is
- **Database** — No schema changes
- **Documentation** — Only this file (11-V2-STYLING-SPEC.md) is new
- **Antenna images** — Keep in `assets/images/Antenna/`, do not rename
- **DOCX source files** — Keep in `resources/` as originals alongside the converted HTML
