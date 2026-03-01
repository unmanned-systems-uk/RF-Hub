# RF-Hub V2 — Visual Design Guide (Agent-Safe)
## 🔒 LOCKED — No interpretation required. Copy exactly.

> **Purpose:** This guide exists because coding agents are terrible at design.
> Every decision has been made. Every pixel specified. Follow it literally.

---

## 1. Page Skeleton — COPY THIS EXACTLY

Every single page on RF-Hub must use this exact skeleton. No exceptions.

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>[PAGE TITLE] — RF-Hub</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="[RELATIVE_PATH]/assets/css/rf-hub-v2.css">
<!-- PAGE-SPECIFIC STYLES ONLY (animations, canvas, etc.) -->
<style>
/* === PAGE-SPECIFIC — DO NOT DUPLICATE SHARED CSS === */
</style>
</head>
<body>

<!-- ═══ NAVIGATION (identical on every page) ═══ -->
<nav class="site-nav">
  <div class="container container--wide">
    <a href="[RELATIVE]/index.html" class="site-nav-brand">RF-Hub</a>
    <ul class="site-nav-links">
      <li><a href="[RELATIVE]/index.html">Dashboard</a></li>
      <li><a href="[RELATIVE]/pages/frequency-bands.html">Spectrum</a></li>
      <li><a href="[RELATIVE]/pages/antennas.html">Antennas</a></li>
      <li><a href="[RELATIVE]/pages/blog/understanding-s11.html">Blog</a></li>
    </ul>
  </div>
</nav>

<!-- ═══ HERO SECTION ═══ -->
<section class="hero">
  <div class="container">
    <div class="hero-badge">[CATEGORY LABEL]</div>
    <h1>[Page Title Here]</h1>
    <p class="hero-subtitle">[One-sentence description]</p>
  </div>
</section>

<!-- ═══ PAGE CONTENT ═══ -->
<div class="container">
  <!-- Content goes here -->
</div>

<!-- ═══ FOOTER (identical on every page) ═══ -->
<footer class="site-footer">
  <div class="container">
    <p>RF-Hub — The world's best interactive RF engineering learning platform</p>
    <p style="margin-top: 8px;">73 and good DX! 📡</p>
  </div>
</footer>

</body>
</html>
```

### Relative Path Lookup Table

| Page Location | `[RELATIVE]` value | CSS path |
|---------------|-------------------|----------|
| `frontend/index.html` | `.` | `assets/css/rf-hub-v2.css` |
| `frontend/pages/frequency-bands.html` | `..` | `../assets/css/rf-hub-v2.css` |
| `frontend/pages/antennas.html` | `..` | `../assets/css/rf-hub-v2.css` |
| `frontend/pages/blog/understanding-s11.html` | `../..` | `../../assets/css/rf-hub-v2.css` |
| `frontend/pages/blog/lte-antenna-test.html` | `../..` | `../../assets/css/rf-hub-v2.css` |
| `resources/em-radiation.html` | `frontend` | `frontend/assets/css/rf-hub-v2.css` |

### Active Link Rule

Set `class="active"` on the current page's nav link. Example for the Antennas page:
```html
<li><a href="../index.html">Dashboard</a></li>
<li><a href="frequency-bands.html">Spectrum</a></li>
<li><a href="antennas.html" class="active">Antennas</a></li>
<li><a href="blog/understanding-s11.html">Blog</a></li>
```

---

## 2. Component Patterns — COPY THESE EXACTLY

### 2.1 Chapter Section (for blog posts and reference pages)

Use this for EVERY content section. Number chapters sequentially.

```html
<div class="chapter" id="unique-section-id">
  <div class="chapter-header">
    <span class="chapter-num">CHAPTER 01</span>
    <div class="chapter-line"></div>
  </div>
  <h2>Section Title Goes Here</h2>

  <p>Paragraph text. Use <strong>bold</strong> for key terms (renders as white text on dark bg). Use <em>italics</em> for emphasis. Use <code>monospace</code> for technical values, units, settings.</p>

  <p>Second paragraph. Keep paragraphs to 2-4 sentences. No giant walls of text.</p>
</div>
```

**Rules:**
- `id` must be lowercase, hyphenated: `id="log-magnitude"` not `id="Log Magnitude"`
- Chapter numbers: two digits with leading zero: `CHAPTER 01`, `CHAPTER 02`, etc.
- NEVER skip the `chapter-header` div — the purple line is a key brand element

---

### 2.2 Data Tables

```html
<div class="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Column Header</th>
        <th>Column Header</th>
        <th>Column Header</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data cell</td>
        <td class="excellent">Excellent result</td>
        <td>Normal data</td>
      </tr>
      <tr>
        <td>Data cell</td>
        <td class="poor">Poor result</td>
        <td>Normal data</td>
      </tr>
    </tbody>
  </table>
</div>
```

**Assessment colour classes (use on `<td>` elements):**

| Class | Colour | When to Use |
|-------|--------|-------------|
| `td.excellent` | Green (#22c55e) | Values that exceed expectations: SWR < 1.5, Return Loss < -14 dB |
| `td.good` | Cyan (#06b6d4) | Acceptable values: SWR 1.5–2.0, Return Loss -10 to -14 dB |
| `td.poor` | Amber (#f59e0b) | Marginal values: SWR 2.0–3.0, Return Loss -6 to -10 dB |
| `td.bad` | Red (#ef4444) | Failing values: SWR > 3.0, Return Loss > -6 dB |

**Rules:**
- ALWAYS wrap tables in `<div class="table-wrapper">` — this enables horizontal scroll on mobile
- NEVER add borders to tables — the CSS handles all styling
- Use `<th>` ONLY in `<thead>` — never in `<tbody>`
- Use `<strong>` inside `<td>` for the primary column (usually the first column)

---

### 2.3 Callout Boxes

Use callouts to highlight tips, warnings, and key facts WITHIN a chapter section.

```html
<!-- 💡 TIP / INFORMATION (default purple border) -->
<div class="callout">
  <span class="callout-icon">💡</span>
  <div class="callout-text">
    <strong>Tip Title:</strong> Explanation text goes here. Keep to 2-3 sentences.
  </div>
</div>

<!-- ⚡ E-FIELD NOTE (amber border) -->
<div class="callout callout--e">
  <span class="callout-icon">⚡</span>
  <div class="callout-text">
    <strong>E-Field:</strong> Information about electric field behaviour.
  </div>
</div>

<!-- 🧲 H-FIELD NOTE (cyan border) -->
<div class="callout callout--h">
  <span class="callout-icon">🧲</span>
  <div class="callout-text">
    <strong>H-Field:</strong> Information about magnetic field behaviour.
  </div>
</div>

<!-- ⚠️ WARNING (red border) -->
<div class="callout callout--warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-text">
    <strong>Warning:</strong> Critical safety or accuracy information.
  </div>
</div>

<!-- ✅ SUCCESS (green border) -->
<div class="callout callout--success">
  <span class="callout-icon">✅</span>
  <div class="callout-text">
    <strong>Verified:</strong> Confirmed correct via testing.
  </div>
</div>

<!-- ℹ️ INFORMATIONAL (blue border) -->
<div class="callout callout--info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-text">
    <strong>Note:</strong> Supplementary detail.
  </div>
</div>
```

**Callout selection decision tree:**
1. Is it a danger or "you WILL break something"? → `callout--warning` with ⚠️
2. Is it about E-field or electric phenomena? → `callout--e` with ⚡
3. Is it about H-field or magnetic phenomena? → `callout--h` with 🧲
4. Is it a confirmed/validated fact? → `callout--success` with ✅
5. Is it a helpful tip or trick? → default (no variant) with 💡
6. Is it background/supplementary info? → `callout--info` with ℹ️

---

### 2.4 Alert Boxes (Full-Width, More Prominent Than Callouts)

Use for CRITICAL information that must not be missed. Maximum 1-2 per page.

```html
<!-- STANDARD ALERT (purple/cyan gradient) -->
<div class="alert-box">
  <h4>Important Title</h4>
  <p>Critical information the reader must understand before proceeding.</p>
</div>

<!-- DANGER ALERT (red/amber gradient) -->
<div class="alert-box alert-box--warning">
  <h4>⚠ Critical Warning Title</h4>
  <p>This will damage equipment, invalidate measurements, or cause data loss.</p>
</div>
```

**When to use alert-box vs callout:**
- **Callout:** Inline tip, annotation, or note (small, side-bar feel)
- **Alert-box:** Show-stopper information (full width, gradient background, high visibility)

---

### 2.5 Figures (Images with Captions)

EVERY image on the site must use this exact pattern. No naked `<img>` tags.

```html
<div class="figure">
  <img src="../../assets/images/blog/descriptive-filename.png"
       alt="Detailed description of what the image shows">
  <div class="figure-caption">Figure 1: Caption describing the image and its significance.</div>
</div>
```

**Figure placeholder (when image not yet available):**
```html
<div class="figure">
  <div class="card" style="min-height: 200px; display: flex; align-items: center; justify-content: center; border: none;">
    <p class="text-dim text-mono" style="font-size: 12px;">[ Figure N: Description of missing image ]</p>
  </div>
  <div class="figure-caption">Figure N: Caption text.</div>
</div>
```

**Rules:**
- ALL images need `alt` text — describe what's in the image, not just "figure 3"
- Number figures sequentially per page: Figure 1, Figure 2, etc.
- Image filenames: lowercase, hyphenated: `lte-band20-log-mag.png` not `LTE Band 20 Log Mag.png`
- Blog images go in `frontend/assets/images/blog/`
- Antenna images stay in `frontend/assets/images/Antenna/` (existing, do NOT rename)

---

### 2.6 Cards (for Dashboard, Feature Grids)

```html
<!-- STANDARD CARD -->
<div class="card">
  <h3>Card Title</h3>
  <p>Card description text.</p>
</div>

<!-- CARD WITH GRADIENT TOP BORDER -->
<div class="card card--accent">
  <h3>Featured Card Title</h3>
  <p>For important or featured content.</p>
</div>

<!-- CARD WITH COLOURED GLOW -->
<div class="card card--glow-e">
  <h3>E-Field Related Content</h3>
  <p>Amber glow for electric field topics.</p>
</div>

<div class="card card--glow-h">
  <h3>H-Field Related Content</h3>
  <p>Cyan glow for magnetic field topics.</p>
</div>

<div class="card card--glow-em">
  <h3>EM / General RF Content</h3>
  <p>Purple glow for general RF/EM topics.</p>
</div>
```

**Card glow selection:**
- Content about electric fields, voltage, antennas radiating → `card--glow-e` (amber)
- Content about magnetic fields, current flow, inductors → `card--glow-h` (cyan)
- General RF, EM waves, formulas, mixed topics → `card--glow-em` (purple)
- Featured/highlighted content → `card--accent` (gradient top border)
- Standard content → plain `card` (no modifier)

---

### 2.7 Summary Grids (2-Column Cards)

For presenting related items side-by-side. Auto-collapses to single column on mobile.

```html
<div class="summary-grid">
  <div class="summary-card">
    <h4 class="text-success">Title One</h4>
    <p>Description for the first item.</p>
  </div>
  <div class="summary-card">
    <h4 class="text-power">Title Two</h4>
    <p>Description for the second item.</p>
  </div>
  <div class="summary-card">
    <h4 class="text-info">Title Three</h4>
    <p>Description for the third item.</p>
  </div>
  <div class="summary-card">
    <h4 class="text-em">Title Four</h4>
    <p>Description for the fourth item.</p>
  </div>
</div>
```

**h4 colour class selection for summary-card titles:**

| Class | Colour | When to Use |
|-------|--------|-------------|
| `.text-e` | Amber | E-field, voltage, antenna topics |
| `.text-h` | Cyan | H-field, magnetic, current topics |
| `.text-em` | Purple | General EM, RF, brand items |
| `.text-power` | Red | Power, danger, failure states |
| `.text-success` | Green | Success, match, verified items |
| `.text-info` | Blue | Information, reference, neutral |

---

### 2.8 Buttons

```html
<!-- PRIMARY (solid purple, use for main actions) -->
<button class="btn btn--primary">Export Data</button>

<!-- GHOST (transparent with purple border, use for secondary actions) -->
<button class="btn btn--ghost">View Source</button>
```

**Rule:** Maximum 2 buttons next to each other. Primary on the left, ghost on the right.

---

### 2.9 Badges / Pills

```html
<!-- DEFAULT (purple — used in hero sections) -->
<div class="hero-badge">Category Label</div>

<!-- INLINE BADGES (use within content) -->
<span class="badge">Default</span>
<span class="badge badge--e">E-Field</span>
<span class="badge badge--h">H-Field</span>
<span class="badge badge--success">Verified</span>
<span class="badge badge--warning">Caution</span>
```

---

### 2.10 Code Blocks

```html
<!-- INLINE CODE (within paragraphs) -->
<p>Set the span to <code>700 MHz – 960 MHz</code> for Band 20.</p>

<!-- CODE BLOCK (multi-line formulas, commands) -->
<pre><code>Return Loss (dB) = 20 × log₁₀(|Γ|)

SWR = (1 + |Γ|) / (1 – |Γ|)

Power Reflected (%) = |Γ|² × 100</code></pre>
```

---

### 2.11 Blog Article Metadata

Required on ALL blog posts, immediately after the hero section.

```html
<div class="container">
<div class="article">
<div class="article-meta">
  <span class="article-meta-item">📡 <span>Instrument: [Equipment Used]</span></span>
  <span class="article-meta-item">📅 <span>[Month Year]</span></span>
  <span class="article-meta-item">⏱ <span>[N] min read</span></span>
</div>

<!-- Article content (chapters) goes here -->

</div><!-- /.article -->
</div><!-- /.container -->
```

**Read time calculation:** Count words ÷ 200 = minutes. Round to nearest 5.

---

## 3. FORBIDDEN Patterns — NEVER DO THESE

These are mistakes agents commonly make. Read this list before writing any HTML.

### 3.1 Styling Violations

```html
<!-- ❌ WRONG: Inline styles for colours, fonts, spacing -->
<div style="background: #1a1a2e; color: white; padding: 20px;">

<!-- ✅ RIGHT: Use component classes -->
<div class="card">
```

```html
<!-- ❌ WRONG: Custom font stacks -->
<p style="font-family: Arial, sans-serif;">

<!-- ✅ RIGHT: No font declaration needed — inherited from body via CSS -->
<p>
```

```html
<!-- ❌ WRONG: Adding colours not in the palette -->
<span style="color: #ff6600;">  <!-- This orange doesn't exist in our system -->

<!-- ✅ RIGHT: Use only palette colours via utility classes -->
<span class="text-e">  <!-- Uses --accent-e: #f59e0b -->
```

### 3.2 Layout Violations

```html
<!-- ❌ WRONG: Content without container -->
<h2>Some heading floating in the void</h2>

<!-- ✅ RIGHT: Always wrap content in .container -->
<div class="container">
  <h2>Some heading properly contained</h2>
</div>
```

```html
<!-- ❌ WRONG: Naked images -->
<img src="photo.jpg">

<!-- ✅ RIGHT: Always use figure wrapper -->
<div class="figure">
  <img src="photo.jpg" alt="Description of the image content">
  <div class="figure-caption">Figure 1: Caption.</div>
</div>
```

```html
<!-- ❌ WRONG: Tables without wrapper -->
<table>
  <tr><th>Header</th></tr>
</table>

<!-- ✅ RIGHT: Always wrap in table-wrapper -->
<div class="table-wrapper">
  <table>
    <thead><tr><th>Header</th></tr></thead>
    <tbody><tr><td>Data</td></tr></tbody>
  </table>
</div>
```

### 3.3 Typography Violations

```html
<!-- ❌ WRONG: Bold for section titles -->
<p><b>Understanding SWR</b></p>
<p>SWR stands for...</p>

<!-- ✅ RIGHT: Proper heading hierarchy -->
<h3>Understanding SWR</h3>
<p>SWR stands for...</p>
```

```html
<!-- ❌ WRONG: Manual heading styling -->
<p style="font-size: 24px; font-weight: bold;">Title</p>

<!-- ✅ RIGHT: Use semantic headings (styled by CSS) -->
<h2>Title</h2>
```

### 3.4 Structural Violations

```html
<!-- ❌ WRONG: Missing nav or footer -->
<body>
  <h1>Page Title</h1>
  <p>Content...</p>
</body>

<!-- ✅ RIGHT: Every page has nav + footer -->
<body>
  <nav class="site-nav">...</nav>
  <section class="hero">...</section>
  <div class="container">...</div>
  <footer class="site-footer">...</footer>
</body>
```

```html
<!-- ❌ WRONG: Old <style> blocks with light theme colours -->
<style>
  body { background: #ffffff; color: #333; }
  .card { background: #f0f0f0; }
</style>

<!-- ✅ RIGHT: Delete ALL old <style> blocks. Link to shared CSS. -->
<link rel="stylesheet" href="assets/css/rf-hub-v2.css">
```

---

## 4. Conversion Checklist — TICK EVERY BOX

Run this checklist for EVERY page you touch. No exceptions.

### Before Starting
- [ ] Read `docs/11-V2-STYLING-SPEC.md` completely
- [ ] Read `docs/12-VISUAL-DESIGN-GUIDE.md` completely (this file)
- [ ] Open `frontend/pages/blog/understanding-s11.html` as visual reference

### HTML Structure
- [ ] `<!DOCTYPE html>` present
- [ ] `<meta charset="UTF-8">` present
- [ ] `<meta name="viewport">` present
- [ ] Title format: `[Page Name] — RF-Hub`
- [ ] Google Fonts `<link>` present (DM Serif Display + IBM Plex Sans + IBM Plex Mono)
- [ ] `rf-hub-v2.css` linked with correct relative path
- [ ] NO old `styles.css` link
- [ ] NO old `<style>` blocks (except page-specific animations)

### Navigation
- [ ] `.site-nav` present at top of `<body>`
- [ ] Brand text says "RF-Hub" (not "RF Hub" or "RFHub")
- [ ] All 4 nav links present (Dashboard, Spectrum, Antennas, Blog)
- [ ] Current page has `class="active"` on its link
- [ ] All relative paths correct for this page's depth

### Hero Section
- [ ] `.hero` section present
- [ ] `.hero-badge` with category label
- [ ] `<h1>` with page title
- [ ] `.hero-subtitle` with one-sentence description

### Content
- [ ] All content wrapped in `.container`
- [ ] Sections use `.chapter` pattern with numbered headers
- [ ] Tables wrapped in `.table-wrapper`
- [ ] All images wrapped in `.figure` with `alt` text and `.figure-caption`
- [ ] Tips/notes use `.callout` with appropriate variant
- [ ] Critical warnings use `.alert-box--warning`
- [ ] No inline styles for colours, fonts, or spacing
- [ ] No raw hex colours in HTML (use CSS classes)

### Footer
- [ ] `.site-footer` present at bottom
- [ ] Contains both lines of text
- [ ] "73 and good DX! 📡" present

### Visual Check (open in browser)
- [ ] Background is dark navy (#0a0e1a) — NOT white, NOT black
- [ ] Subtle grid pattern visible on background
- [ ] Headings use serif font (DM Serif Display)
- [ ] Body text uses sans-serif font (IBM Plex Sans)
- [ ] Code/labels use monospace font (IBM Plex Mono)
- [ ] Primary accent is purple (#a78bfa)
- [ ] No white backgrounds anywhere
- [ ] No light grey backgrounds anywhere
- [ ] No remnants of old colour scheme
- [ ] Nav bar sticks to top when scrolling
- [ ] Page looks correct at 1200px width
- [ ] Page looks correct at 768px width
- [ ] Page looks correct at 480px width
- [ ] No horizontal scrollbar on any viewport

---

## 5. Reference File

The ONLY source of truth for what "correct" looks like:

**`frontend/pages/blog/understanding-s11.html`**

When in doubt about ANY design decision, open this file and copy the pattern.
It contains examples of: hero, article meta, chapters, tables with assessment colours,
callouts (info, e-field, h-field, warning), alert boxes, summary grids, figures,
code blocks, cards, and footer.

**DO NOT modify this file. It is the reference template.**
