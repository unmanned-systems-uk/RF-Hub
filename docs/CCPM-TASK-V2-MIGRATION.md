# CCPM Task: RF-Hub V2 Frontend Migration

## Project Context
- **Repo:** `unmanned-systems-uk/RF-Hub`
- **Local Path:** `D:\live_code\RF-Hub\`
- **Branch:** Create `feature/v2-styling-migration` from main

## Prerequisite Reading — MANDATORY
Before writing ANY code, read these files completely IN THIS ORDER:
1. `docs/12-VISUAL-DESIGN-GUIDE.md` — Agent-safe visual guide with exact HTML patterns to copy (429 lines)
2. `docs/11-V2-STYLING-SPEC.md` — The locked design specification with all tokens and component classes (368 lines)
3. `frontend/assets/css/rf-hub-v2.css` — The shared stylesheet (800 lines, all components defined)
4. `frontend/pages/blog/understanding-s11.html` — Reference blog template (open this in browser as visual reference)

**Do NOT modify `rf-hub-v2.css` or `understanding-s11.html`. These are locked references.**

---

## Task 1: Restyle Existing Pages (Priority: HIGH)

### WHO: CC-Frontend

Convert 3 existing pages from old `styles.css` to `rf-hub-v2.css`.

**Pages:**
1. `frontend/index.html` (260 lines) — Dashboard
2. `frontend/pages/frequency-bands.html` (954 lines) — Spectrum reference
3. `frontend/pages/antennas.html` (1,255 lines) — Antenna theory & gallery

**For each page:**
1. Replace `<link rel="stylesheet" href="...styles.css">` with:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=IBM+Plex+Sans:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
   <link rel="stylesheet" href="assets/css/rf-hub-v2.css">
   ```
   (Adjust relative path per page depth)

2. Add sticky navigation at top of `<body>`:
   ```html
   <nav class="site-nav">
     <div class="container container--wide">
       <a href="../../index.html" class="site-nav-brand">RF-Hub</a>
       <ul class="site-nav-links">
         <li><a href="index.html">Dashboard</a></li>
         <li><a href="pages/frequency-bands.html">Spectrum</a></li>
         <li><a href="pages/antennas.html">Antennas</a></li>
         <li><a href="pages/blog/understanding-s11.html">Blog</a></li>
       </ul>
     </div>
   </nav>
   ```
   (Set `class="active"` on the current page's link. Fix relative paths per page.)

3. Add footer before `</body>`:
   ```html
   <footer class="site-footer">
     <div class="container">
       <p>RF-Hub — The world's best interactive RF engineering learning platform</p>
       <p style="margin-top: 8px;">73 and good DX! 📡</p>
     </div>
   </footer>
   ```

4. Remove ALL `<style>` blocks — replace with V2 component classes from the shared CSS
5. Convert all content elements to use V2 classes:
   - Old card/panel divs → `.card` / `.card--accent`
   - Old tables → `.table-wrapper > table` with `th`/`td` styling
   - Old alerts → `.callout` / `.alert-box` variants
   - Old buttons → `.btn .btn--primary` or `.btn .btn--ghost`
   - Section headers → `.chapter` with `.chapter-header > .chapter-num + .chapter-line`
6. Ensure all images wrapped in `.figure > img + .figure-caption`
7. Delete `frontend/assets/css/styles.css` after all three pages are converted

**Verification for each page:**
- [ ] Opens without console errors
- [ ] Grid background visible
- [ ] DM Serif Display on headings, IBM Plex Sans on body, IBM Plex Mono on code
- [ ] Dark theme throughout — no white/light backgrounds
- [ ] Nav bar sticky at top
- [ ] Footer at bottom
- [ ] Responsive at 1200px, 768px, 480px
- [ ] All existing functionality preserved (export buttons, gallery, calculators)

---

## Task 2: Convert DOCX → Blog Posts (Priority: MEDIUM)

### WHO: CC-Frontend

Convert 2 remaining Word documents to styled HTML blog posts.

**Source → Target:**
1. `resources/LTE_Antenna_Test_Results.docx` → `frontend/pages/blog/lte-antenna-test.html`
2. `resources/RSA5065N_VNA_Calibration_Cheat_Sheet.docx` → `frontend/pages/blog/vna-calibration.html`

**Template to follow:** `frontend/pages/blog/understanding-s11.html`

**For each conversion:**
1. Read the DOCX content thoroughly
2. Create HTML following the exact template structure:
   - Google Fonts `<link>` + `rf-hub-v2.css` `<link>`
   - `.site-nav` with Blog marked as active
   - `.hero` with `.hero-badge`, gradient `h1`, `.hero-subtitle`
   - `.article-meta` block (instrument, date, read time)
   - Content in `.chapter` sections with numbered headers
   - Tables in `.table-wrapper > table` with assessment colour classes where appropriate
   - Warnings/tips in `.callout--warning` or `.alert-box--warning`
   - `.site-footer`
3. Extract images from DOCX files and save to `frontend/assets/images/blog/`
   - Use descriptive filenames: `lte-band20-log-mag.png`, `vna-cal-step3-short.png` etc.
   - Wrap in `.figure > img + .figure-caption`
4. No inline CSS — shared stylesheet only

**Specific notes per document:**

**LTE Antenna Test Results:**
- Contains 4 VNA screenshot images (quad display captures)
- Contains 7 data tables with per-band measurements
- Tables should use `td.excellent`, `td.good`, `td.poor`, `td.bad` assessment classes
- Hero badge: "Antenna Testing"
- Include RTSA captures as figures

**VNA Calibration Cheat Sheet:**
- Step-by-step guide — use `.chapter` sections for each major step
- Contains 7 procedure tables
- Critical offset warnings should use `.alert-box--warning`
- Hero badge: "VNA Guide"
- Emphasis on the critical DC offset load calibration issue

---

## Task 3: Refactor Interactive Pages (Priority: LOW)

### WHO: CC-Frontend

Extract inline CSS from the 5 interactive HTML files in `resources/`.

**Files:**
1. `resources/em-radiation.html`
2. `resources/em-animato-2.html`
3. `resources/radiation-3d-v5.html`
4. `resources/radiation-3d.html`
5. `resources/tx-rx-complete.html`

**For each file:**
1. Replace the inline `<style>` block with `<link rel="stylesheet" href="../frontend/assets/css/rf-hub-v2.css">`
2. Add Google Fonts `<link>`
3. Keep ONLY page-specific CSS in an inline `<style>` block clearly marked:
   ```html
   <style>
   /* === PAGE-SPECIFIC STYLES — DO NOT MOVE TO SHARED CSS === */
   /* Canvas, WebGL, animation keyframes, 3D controls only */
   </style>
   ```
4. Add `.site-nav` and `.site-footer`
5. Test that all animations, canvases, and interactive elements still work
6. DO NOT change any JavaScript logic

---

## Task 4: Move Markdown Docs (Priority: LOW)

### WHO: CC-Frontend

Move 5 markdown files from `resources/` to `docs/`:
```
resources/HARDWARE-SURVEY.md       → docs/HARDWARE-SURVEY.md
resources/LESSONS-LEARNED.md       → docs/LESSONS-LEARNED.md
resources/SDR-EXPERIMENTS.md       → docs/SDR-EXPERIMENTS.md
resources/SDR-TASK-IDEAS.md        → docs/SDR-TASK-IDEAS.md
resources/UNSQUELCHED-VISION.md    → docs/UNSQUELCHED-VISION.md
```

---

## Commit Strategy

One commit per logical unit:
1. `style: add V2 shared CSS and blog template` (already done — on main)
2. `style: restyle index.html to V2 dark theme`
3. `style: restyle frequency-bands.html to V2 dark theme`
4. `style: restyle antennas.html to V2 dark theme`
5. `style: remove old styles.css`
6. `content: convert LTE test results DOCX to blog post`
7. `content: convert VNA calibration DOCX to blog post`
8. `refactor: extract shared CSS from interactive pages`
9. `chore: move markdown docs to docs/`
10. PR → main with screenshots showing before/after

---

## Absolute Rules

1. **DO NOT modify `rf-hub-v2.css`** — it is locked. If you need a new component, add a page-specific `<style>` block and flag it for review.
2. **DO NOT modify `understanding-s11.html`** — it is the reference template.
3. **DO NOT change any backend code, JavaScript logic, or database schema.**
4. **DO NOT use any framework** (Tailwind, Bootstrap, etc.) — vanilla CSS only.
5. **Every page must include** the Google Fonts link, `rf-hub-v2.css`, `.site-nav`, and `.site-footer`.
6. **All images** must have alt text and be wrapped in `.figure`.
7. **Test at 3 breakpoints:** 1200px, 768px, 480px.
