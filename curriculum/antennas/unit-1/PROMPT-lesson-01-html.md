# Claude Code Prompt — Convert lesson-01-em-radiation.md to HTML

## Task

Convert the markdown lesson file `D:\live_code\RF-Hub\curriculum\antennas\unit-1\lesson-01-em-radiation.md` into a single, self-contained HTML file at `D:\live_code\RF-Hub\curriculum\antennas\unit-1\lesson-01-em-radiation.html`.

The output must be a **single HTML file** — all CSS and JS inline, no external dependencies other than Google Fonts. It must match the established RF-Hub visual style used in the two existing reference files.

---

## Style Reference Files (READ THESE FIRST)

Before writing any code, read both of these files in full. They define the design system you must follow:

1. **`D:\live_code\RF-Hub\curriculum\antennas\unit-1\em-radiation.html`** — "How Antennas Radiate" (1173 lines)
   - This is the PRIMARY style reference for lesson pages (long-form prose + diagrams)
   - Copy its exact CSS variable system, typography, spacing, and component patterns
   
2. **`D:\live_code\RF-Hub\curriculum\antennas\unit-1\em-animato-2.html`** — EM Field Animator (1071 lines)
   - Reference for interactive controls (sliders, buttons, canvas patterns)
   - Reference for info-panel and controls-panel styling

---

## Design System (extracted from reference files — verify against source)

### CSS Variables (must use exactly)
```css
--bg-deep: #0a0e1a;        /* Page background */
--bg-card: #111827;         /* Card/panel backgrounds */
--bg-card-hover: #1a2234;   /* Hover states */
--accent-e: #f59e0b;        /* E-field / Electric — amber */
--accent-h: #06b6d4;        /* H-field / Magnetic — cyan */
--accent-em: #a78bfa;       /* EM wave / Combined — purple */
--accent-power: #ef4444;    /* Power / key insight — red */
--text-primary: #e2e8f0;    /* Main text */
--text-secondary: #94a3b8;  /* Body prose */
--text-dim: #64748b;        /* Labels, captions */
--border: #1e293b;          /* Card borders */
--glow-e: rgba(245,158,11,0.15);
--glow-h: rgba(6,182,212,0.15);
```

### Typography
```
Google Fonts: DM Serif Display, IBM Plex Sans (300,400,500,600), IBM Plex Mono (400,500)
```
- **h1**: DM Serif Display, gradient fill (--text-primary → --accent-em)
- **h2 (chapter titles)**: DM Serif Display, clamp(1.6rem, 3vw, 2rem)
- **Body prose**: IBM Plex Sans weight 300, line-height 1.7, colour --text-secondary
- **Bold in prose**: weight 500, colour --text-primary
- **Mono labels/badges**: IBM Plex Mono, 11-12px, letter-spacing 2-3px, uppercase
- **Code/formulas**: IBM Plex Mono

### Layout Patterns
- `max-width: 900px` container, centred, `padding: 0 24px`
- Subtle grid background on body (`::before` with 60px grid lines at 0.015 opacity)
- Dark background throughout — NO light mode

### Component Library (from reference files)
| Component | Use For | Key Styles |
|-----------|---------|------------|
| `.hero` | Page title section | Centred, badge + h1 + subtitle |
| `.hero-badge` | "RF-Hub · Lesson 1" pill | Mono, accent-em bg/border, 20px radius |
| `.chapter` | Major sections (1-6) | `margin-bottom: 80px`, scroll-margin-top |
| `.chapter-header` | Section number + line | Flex: `.chapter-num` (mono, accent-em) + `.chapter-line` (gradient hr) |
| `.diagram-card` | Visual/animation containers | bg-card, 16px radius, 32px pad, `.glow-e` / `.glow-h` / `.glow-em` variants |
| `.callout` | Key insight boxes | Left border (3px), icon + text, variants: `.e-field`, `.h-field`, `.key-insight` |
| `.question-box` | Think-about-it prompts | Gradient bg (accent-em + accent-h, low opacity), accent-em border |
| `.analogy` | Analogy cards | bg-card, icon + content, 12px radius |
| `.info-panel` | Explanatory panels below interactives | bg-card, 12px radius, 20-24px pad |
| `.summary-grid` | Summary card grids | 2-col grid, hoverable cards with colour-coded h4 |
| `.anim-controls` | Animation play/pause/step buttons | Centred flex, mono buttons, accent-em |
| `.term-box` | Inline technical term highlights | Inline-flex pill, mono, `.term-e` / `.term-h` variants |

---

## Content Structure — Section by Section

The .md has these sections. Each must appear in the HTML in order:

### 1. Hero
- Badge: "RF-Hub · Lesson 1"
- Title: "What is Electromagnetic Radiation?"
- Subtitle: "Unit 1 — How Antennas Work · No equipment needed · ~25 minutes"
- Learning objectives as a clean list (use the styled approach from em-radiation.html's story-overview card, NOT bullet points)

### 2. Section 1: "What is a Field?"
- Chapter header: `SECTION 01` + gradient line
- Prose from .md (3 paragraphs on gravity → electric → magnetic fields)
- **VISUAL `field-trio-comparison`**: Three side-by-side SVG panels:
  - Gravity: Earth + field lines (white/grey), ball with force arrow
  - Electric: Charge + field lines (amber/--accent-e), test charge with force arrow
  - Magnetic: Bar magnet + field lines (cyan/--accent-h), compass needle aligning
  - Gentle pulse animation on field lines (CSS `@keyframes` like em-radiation.html uses)
  - Hover interaction: show a small arrow at cursor position indicating field direction (JS `mousemove` on SVG, calculate field direction from source position)

### 3. Section 2: "Static Fields Go Nowhere"
- Chapter header: `SECTION 02`
- Prose from .md
- Maxwell insight as a `.callout.key-insight` block with the two bold rules
- **VISUAL `static-vs-changing`**: Two-panel SVG/Canvas animation:
  - LEFT: Static charge, steady amber E-field lines, ticking clock, label fades in after 2s
  - RIGHT: Oscillating charge, distorting E-field, cyan H-field loops springing into existence with glow flash
  - Auto-advance or play button to transition from left to right
  - Use `requestAnimationFrame` for smooth animation

### 4. Section 3: "The Wave is Born"
- Chapter header: `SECTION 03`
- Prose from .md (chain reaction, soap bubble analogy, "accelerate" keyword)
- Soap bubble analogy as `.analogy` card (icon: 🫧)
- **VISUAL `chain-reaction-wave`**: Canvas or SVG step-through animation:
  - 6 steps with clear cause→effect labels at each stage
  - "Changing E → creates H" and "Changing H → creates E" labels appear at the right moments
  - Step-through controls (back/next buttons) AND auto-play option
  - Final frame: wave continues, charge stops, "Self-sustaining" label
  - Colours: E amber, H cyan, propagation arrow purple

### 5. Section 4: "Wavelength, Frequency, and the Speed of Light"
- Chapter header: `SECTION 04`
- Prose introducing f, λ, c
- **VISUAL `formula-rearrangement`**: Interactive formula widget:
  - Large λ = c / f display in IBM Plex Mono
  - Three clickable buttons: "Solve for λ", "Solve for f", "Solve for c"
  - Clicking animates the letters sliding into the new arrangement (CSS transitions or JS animation on positioned elements, ~0.5s ease)
  - Below: a live calculator with input field + unit dropdown (MHz/GHz/kHz for freq, m/cm/mm for wavelength). Typing a value in either field auto-computes the other. c pre-filled at 299,792,458 m/s (display as ≈ 3 × 10⁸)
  - Variable subtitles: λ → "peak to peak distance", f → "cycles per second", c → "≈ 300,000,000 m/s"
- "Putting Numbers to It" subsection — the four worked examples (145, 440, 2400, 10000 MHz)
- The MHz shortcut highlighted in a `.callout` box
- **VISUAL `wavelength-at-human-scale`**: SVG scene:
  - Silhouette of a person (~170cm) standing on a baseline
  - Wavelength bars overlaid at correct scale: 2m, 70cm, 12.5cm, 3cm
  - Each bar colour-coded with frequency + wavelength label
  - Hover/click highlights with info tooltip
  - OPTIONAL (nice-to-have): frequency slider that smoothly scales the bar from 1 MHz (300m, shown as extending way off screen with a label) down to 10 GHz (3cm), always against the person

### 6. Hands-On: EM Field Animator
- Styled as a distinct interactive section (different background treatment — perhaps slightly lighter card or accent-em border-top like story-overview)
- Section icon: 🔧
- Embed `em-animato-2.html` via `<iframe>` (full-width, ~700px height, border-radius matching cards, dark border)
  - Include a fallback "Open in new tab" link: `<a href="em-animato-2.html" target="_blank">`
- The 5 guided exploration steps styled as numbered steps (similar to story-steps in em-radiation.html but vertical, each with a step number pill and instruction text)

### 7. Section 5: "The Electromagnetic Spectrum"  
- Chapter header: `SECTION 05`
- Prose from .md (radio = light, spectrum bands, "Where Radio Lives" subsection)
- **VISUAL `em-spectrum-strip`**: Horizontally scrollable/pannable spectrum:
  - Canvas or wide SVG with horizontal scroll (or drag-to-pan)
  - Logarithmic frequency scale (so HF through gamma all get visible space)
  - Colour-coded bands: Radio (dark blue-purple), IR (dark red), Visible (rainbow sliver), UV (violet), X-ray (grey), Gamma (dark grey)
  - Radio section expanded with sub-bands: HF | VHF | UHF | SHF
  - Clickable/hoverable markers at: FM broadcast (100 MHz), 2m amateur (145 MHz), 70cm amateur (435 MHz), GPS (1.575 GHz), WiFi (2.4 GHz)
  - Each marker: hover/click shows tooltip with frequency, wavelength, one-line use description
  - Frequency labels top, wavelength labels bottom
  - Bottom bar message: "All the same phenomenon: E⊥H waves at c. Only the frequency differs."
  - Drag/scroll hint on mobile

### 8. Section 6: "E and H: The Inseparable Pair"
- Chapter header: `SECTION 06`
- Prose from .md (right-hand rule, in-phase, 377Ω impedance of free space)
- The 377Ω mention as a `.term-box` inline element
- **VISUAL `e-h-k-perpendicular`**: Canvas-based 3D-perspective EM wave:
  - Wave propagating left to right
  - E field: amber sinusoid in vertical plane
  - H field: cyan sinusoid in horizontal plane
  - Both in phase (peaks aligned), wave moving rightward
  - Labels: "E (Electric Field)" amber, "H (Magnetic Field)" cyan, "Direction of travel (k)" purple arrow
  - Controls: Play/Pause button, and optionally a rotation drag (so student can view from different angles — if this is too complex, a few preset view buttons: "Side", "Top", "3D" is fine)
  - Small inset diagram showing right-hand rule (thumb/index/middle finger labelled k/E/H)
  - Bottom label: "E ⊥ H ⊥ k — always. No exceptions."
- Callback to the animator's broadside view (styled as a `.callout` tip)

### 9. Go Deeper (Optional)
- Styled as an optional card — visually distinct (dashed border or muted accent, "OPTIONAL" badge)
- Brief text from .md
- Link/embed to `em-radiation.html` (prefer link/button here rather than iframe, since it's optional)
- "Don't worry if you skip this" reassurance text

### 10. Summary
- Use `.summary-grid` (2×2 or 3-col grid of summary cards), one card per key concept:
  - Fields (em-card)
  - Static vs Changing (e-card)  
  - Wave is Born (h-card)
  - λ = c / f (em-card)
  - EM Spectrum (em-card)
  - E⊥H⊥k (pattern-card / accent-power)

### 11. Self-Check Exercises
- Three subsections: Wavelength Calculations, Spectrum Placement, Concept Questions
- Each question visible by default
- Answers hidden behind click-to-reveal (use `<details><summary>` or a JS toggle button styled to match the design)
- Answer reveals should be smooth (CSS transition on max-height or similar)
- Style the reveal button as a small accent-em pill: "Show Answer ▸" → "Hide Answer ▾"

### 12. What's Next
- Brief teaser for Lesson 2 in a styled card (similar to story-overview but single item)
- Link placeholder for Lesson 2

### 13. Footer
- "RF-Hub · Lesson 1 · What is EM Radiation?"
- GitHub link: `https://github.com/unmanned-systems-uk/RF-Hub`
- "73 and good DX! 📡"

---

## Technical Requirements

### Animations
- Use `requestAnimationFrame` for all canvas animations
- Provide Play/Pause controls on every animation (don't auto-play everything on load — let the student control it)
- Smooth, 60fps target. Use `will-change` and GPU-composited properties where possible
- All animations should be MEANINGFUL — they teach something, they're not decoration

### Interactivity
- Formula calculator: real-time updates as user types (use `input` event, not `change`)
- Spectrum strip: either CSS `overflow-x: auto` with snap points, or JS drag-to-pan
- Self-check reveals: accessible (keyboard operable, aria attributes)
- All hover interactions must have tap equivalents for mobile

### Responsive
- Must work from 360px to 1440px
- Canvas elements resize via `ResizeObserver` or window resize handler (use devicePixelRatio for crisp rendering, exactly as em-animato-2.html does with its `setupCanvas()` function)
- Stack side-by-side panels vertically on mobile (<600px)
- Reduce animation complexity on mobile if performance requires it (check `prefers-reduced-motion`)

### Accessibility
- Semantic HTML: `<article>`, `<section>`, proper heading hierarchy
- SVG diagrams: `role="img"`, `aria-label` with description of what the diagram shows
- Animations: respect `prefers-reduced-motion` (reduce or stop animations)
- Self-check `<details>` elements: keyboard accessible
- Sufficient contrast (the existing colour scheme is fine — dark bg with light text)
- Focus-visible styles on all interactive elements

### Performance
- Single file, no external dependencies beyond Google Fonts
- Lazy-initialise canvases below the fold (use `IntersectionObserver`)
- Keep total file size reasonable — aim for under 80KB (the reference files are ~50KB each with significant SVG content)

---

## Quality Checklist

Before considering the task complete, verify:

- [ ] All 7 visual briefs from the .md are implemented (field-trio-comparison, static-vs-changing, chain-reaction-wave, formula-rearrangement, wavelength-at-human-scale, em-spectrum-strip, e-h-k-perpendicular)
- [ ] em-animato-2.html is embedded with iframe + fallback link
- [ ] em-radiation.html is linked as optional deep-dive
- [ ] Formula calculator works (type frequency → get wavelength, and vice versa)
- [ ] All self-check answers are hidden behind reveal toggles
- [ ] All self-check answer content from the .md is included
- [ ] Design matches reference files (CSS vars, typography, spacing, component patterns)
- [ ] Responsive at 360px, 768px, 1440px
- [ ] No console errors
- [ ] Play/Pause on all animations
- [ ] Smooth scrolling between sections
- [ ] Footer with RF-Hub branding
