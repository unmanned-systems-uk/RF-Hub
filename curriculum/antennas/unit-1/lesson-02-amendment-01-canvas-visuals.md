# Amendment 01 — lesson-02-how-antennas-radiate.html
## Replace static SVG visuals with canvas animations from .old draft

**Applies to:** `frontend/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-02-how-antennas-radiate.html`  
**Reference source:** `lesson-02-how-antennas-radiate-.old` (same folder)  
**Reason:** The converted HTML uses static SVG diagrams for several visuals. The original draft used canvas-based animations that are significantly cleaner and more effective. This amendment transplants those animations into the converted file, which has the correct content structure from the .md.

---

## Overview of changes

| Visual | Current state in new HTML | Action |
|--------|--------------------------|--------|
| Visual 1 — DC vs AC | Two-canvas setup (`canvas-dc`, `canvas-ac`) with complex layout | Replace with .old single-canvas approach (cleaner) |
| Visual 2 — Field detachment (4-panel SVG) | Large static SVG with ellipses | Simplify SVG — see note below |
| Visual 3 — Current distribution | Static SVG diagram | Replace with .old standing wave canvas (Visual 2 from .old) |
| Visual 4 — Guitar string analogy | SVG side-by-side (KEEP — confirmed good) | No change |
| Visual 5 — Current & Voltage dual panel | SVG | Replace with .old dual-canvas animation (Visual 3 from .old) |
| Visual 6 — Human scale comparison | SVG | **Delete entirely** — this content belongs in Lesson 1 |
| Visual (Reciprocity) — TX/RX | Static SVG mirror diagram | Replace with .old TX/RX interactive canvas (Visual 5 from .old) |

> **Visual 2 note:** The .old file does not contain a canvas version of the field detachment story (different content structure). For now, simplify the existing 4-panel SVG by reducing opacity of inner ellipses and removing redundant strokes. A dedicated canvas animation for this visual is deferred to a future amendment.

---

## Step 1 — Add required CSS to the `<style>` block

The .old file uses CSS classes that the new file is missing. Add the following blocks inside the `<style>` tag, after the existing `.diagram-card` rules:

```css
/* ============================================================
   DUAL CANVAS PANEL
   ============================================================ */
.dual-canvas-row {
  display: flex;
  gap: 16px;
}
.canvas-panel { flex: 1; min-width: 0; }
.canvas-panel-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  margin-bottom: 8px;
}
.canvas-panel-label.e-label { color: var(--accent-e); }
.canvas-panel-label.h-label { color: var(--accent-h); }
@media (max-width: 500px) { .dual-canvas-row { flex-direction: column; } }

/* ============================================================
   STEP DISPLAY
   ============================================================ */
.step-label {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 11px;
  text-align: center;
  margin-top: 12px;
  padding: 8px 16px;
  background: rgba(167,139,250,0.08);
  border-radius: 8px;
  color: var(--accent-em);
  letter-spacing: 0.5px;
}

/* ============================================================
   MODE TOGGLE (TX / RX)
   ============================================================ */
.mode-row {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 16px;
}
.mode-btn {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 12px;
  padding: 8px 24px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-secondary);
  transition: all 0.2s;
  letter-spacing: 1px;
}
.mode-btn.active-tx { background: rgba(245,158,11,0.15); color: var(--accent-e); border-color: rgba(245,158,11,0.3); }
.mode-btn.active-rx { background: rgba(6,182,212,0.15);  color: var(--accent-h); border-color: rgba(6,182,212,0.3); }
.mode-btn:focus-visible { outline: 2px solid var(--accent-em); outline-offset: 2px; }
```


---

## Step 2 — Replace Visual 1 (DC vs AC)

### Remove from new HTML

Find and delete the entire `id="v1-card"` diagram-card block. It contains a `two-panel-canvas` div with two separate canvases (`canvas-dc`, `canvas-ac`). Delete from the opening `<div class="diagram-card glow-e" id="v1-card">` to its closing `</div>`.

### Replace with

```html
<!-- VISUAL 1 — DC vs AC Radiation -->
<div class="diagram-card glow-em" id="card-dc-ac">
  <div class="diagram-label">Animation — DC vs AC Radiation</div>
  <canvas id="cv-dc-ac" data-aspect="0.38"
    aria-label="Two-panel animation: left shows DC wire with static field lines that do not propagate; right shows AC wire with EM wavefronts expanding outward"
    role="img"></canvas>
  <div class="anim-controls">
    <button class="anim-btn" id="btn-dc-ac-play" aria-label="Play or pause DC vs AC animation">&#9646;&#9646; Pause</button>
    <span class="anim-readout" id="dc-ac-readout">AC — radiating</span>
  </div>
</div>
```

---

## Step 3 — Replace Visual 3 (Current Distribution)

The new HTML has a static SVG showing current distribution. Find the diagram-card block labelled `Visual 3 — Current Distribution` (it contains a `<svg>` with a sinusoidal curve over a wire).

### Remove

Delete the entire SVG-based diagram-card for current distribution.

### Replace with

```html
<!-- VISUAL 3 — Standing Wave Current Distribution -->
<div class="diagram-card glow-e" id="card-standing-wave">
  <div class="diagram-label">Interactive — Standing Wave Current Distribution</div>
  <canvas id="cv-standing-wave" data-aspect="0.32"
    aria-label="Half-wave dipole showing animated current distribution: maximum amber glow at the feedpoint centre, zero at the tips. Frequency slider controls the display."
    role="img"></canvas>
  <div class="anim-controls">
    <label for="sl-freq" style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:var(--text-dim);white-space:nowrap;">Frequency</label>
    <input type="range" id="sl-freq" min="1" max="30" value="7" step="1" aria-label="Frequency in MHz">
    <output id="out-freq" class="anim-readout">7 MHz — λ/2 = 21.4 m</output>
  </div>
</div>
```

---

## Step 4 — Replace Visual 5 (Current & Voltage dual panel)

Find the diagram-card labelled `Visual 5 — Current & Voltage Distribution` (contains two SVG panels side by side, amber and cyan).

### Remove

Delete the entire SVG dual-panel diagram-card.

### Replace with

```html
<!-- VISUAL 5 — Current & Voltage Distribution (simultaneous) -->
<div class="diagram-card glow-h" id="card-vi-dist">
  <div class="diagram-label">Animation — Current &amp; Voltage Distribution (simultaneous)</div>
  <div class="dual-canvas-row">
    <div class="canvas-panel">
      <div class="canvas-panel-label e-label">Current I(x)</div>
      <canvas id="cv-current" data-aspect="0.7"
        aria-label="Current profile along dipole: half-sine curve in amber, maximum at feedpoint centre, zero at tips"
        role="img"></canvas>
    </div>
    <div class="canvas-panel">
      <div class="canvas-panel-label h-label">Voltage V(x)</div>
      <canvas id="cv-voltage" data-aspect="0.7"
        aria-label="Voltage profile along dipole: inverse distribution in cyan, zero at feedpoint, maximum at tips"
        role="img"></canvas>
    </div>
  </div>
  <p style="text-align:center;font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--text-dim);margin-top:12px;">current and voltage are inverses — exactly like a guitar string</p>
</div>
```


---

## Step 5 — Replace Reciprocity visual (TX/RX)

Find the diagram-card in the Reciprocity section. The new HTML has a static SVG mirror diagram showing TX and RX chains. 

### Remove

Delete the SVG-based reciprocity diagram-card entirely.

### Replace with

```html
<!-- VISUAL — Reciprocity: TX and RX -->
<div class="diagram-card glow-h" id="card-reciprocity">
  <div class="diagram-label">Interactive — Reciprocity: TX and RX</div>
  <div class="mode-row">
    <button class="mode-btn active-tx" id="btn-tx" aria-pressed="true">TX &mdash; Transmit</button>
    <button class="mode-btn" id="btn-rx" aria-pressed="false">RX &mdash; Receive</button>
  </div>
  <canvas id="cv-reciprocity" data-aspect="0.42"
    aria-label="Interactive demonstrating reciprocity: TX mode shows signal generator feeding dipole with EM waves propagating outward; RX mode shows incoming wave inducing current in same dipole feeding a receiver"
    role="img"></canvas>
  <p style="text-align:center;font-family:'IBM Plex Mono',monospace;font-size:10px;color:var(--text-dim);margin-top:10px;">Reciprocity Theorem — same antenna, same pattern, both directions</p>
</div>
```

---

## Step 6 — Delete Visual 6 (Human Scale Comparison)

Find the diagram-card labelled `Visual 6 — Human Scale Comparison`. It contains an SVG with a stick figure and three dipoles drawn to scale.

**Delete the entire block.** This visual duplicates content from Lesson 1 and does not belong in Lesson 2. The live calculator in Visual 5 (formula rearrangement) already provides the length output the student needs.

---

## Step 7 — Simplify Visual 2 (4-panel field detachment SVG)

The 4-panel SVG for the field detachment story has too many overlapping ellipses at low opacity. Until a canvas animation is built for this, simplify it:

- Remove the two outermost ellipses in each act panel (the ones with `opacity="0.25"` and `opacity="0.3"`)  
- Increase the opacity of the remaining inner ellipses by +0.1 each  
- Remove the expansion arrows in Act 1 (the short `<line>` elements pointing outward) — the ellipses already convey expansion  
- Keep the pinch point marker in Act 3 (the red circle and label) — it's the most important element

---

## Step 8 — Replace the entire `<script>` block

This is the most important step. The new HTML's `<script>` block must be **replaced in full** with the script block from the `.old` file.

### What to remove

Delete everything from `<script>` through to the closing `</script>` tag that contains the canvas animation code. In the new HTML this starts with the `SHARED CONSTANTS & CANVAS UTILITY` comment block and runs to the end of the script (before `dev-pages.js`).

Keep these two script tags at the bottom — they are site infrastructure, not visuals:
```html
<script src="/assets/js/dev-pages.js"></script>
<script src="/assets/js/dev-nav.js"></script>
```

### What to insert

Copy the entire `<script>` block from `lesson-02-how-antennas-radiate-.old`, from the opening `<script>` comment line:

```
/* ============================================================
   SHARED CONSTANTS & CANVAS UTILITY
```

...through to the closing `</script>` before `dev-pages.js`.

This block contains five self-contained animation modules:
- **Visual 1** — DC vs AC (`cv-dc-ac`) — single canvas, left/right panel, expanding wavefronts
- **Visual 2** — Standing wave (`cv-standing-wave`) — animated colour-mapped wire, frequency slider  
- **Visual 3** — Dual canvas current/voltage (`cv-current`, `cv-voltage`) — animated amber/cyan panels
- **Visual 4** — Radiation building steps (`cv-radiation`) — 3-step prev/next walkthrough
- **Visual 5** — TX/RX reciprocity (`cv-reciprocity`) — TX/RX mode toggle button

Plus the progress bar updater and self-check reveal toggles (both must be kept).

> **Important:** The `.old` script block also references canvas IDs `cv-radiation` and its step controls (`btn-rad-prev`, `btn-rad-next`, `step-label`, `rad-step-count`). These canvases are NOT currently in the new HTML — see Step 9.


---

## Step 9 — Add the Radiation Building canvas (from .old Visual 4)

The `.old` file's Visual 4 shows how radiation builds from individual wire segments. The new HTML does not have this. Add it inside Section 4 (How the Current Creates Radiation), immediately after the paragraph that ends "...We'll explore patterns in detail in Lesson 3."

### Insert this HTML block

```html
<!-- VISUAL — Radiation Building Step-by-Step -->
<div class="diagram-card glow-em" id="card-radiation-build">
  <div class="diagram-label">Animation — How Radiation Builds</div>
  <canvas id="cv-radiation" data-aspect="0.75"
    aria-label="Step-by-step animation: individual dipole segment radiation arrows, then combined contributions, then the final donut-shaped radiation pattern"
    role="img"></canvas>
  <div id="step-label" class="step-label">Step 1 — each wire segment radiates individually</div>
  <div class="anim-controls">
    <button class="anim-btn" id="btn-rad-prev" aria-label="Previous step">&larr; Prev</button>
    <span class="anim-readout" id="rad-step-count">Step 1 / 3</span>
    <button class="anim-btn" id="btn-rad-next" aria-label="Next step">Next &rarr;</button>
  </div>
</div>
```

---

## Checklist — verify after all changes

- [ ] `cv-dc-ac` canvas present and script references `btn-dc-ac-play`, `dc-ac-readout`
- [ ] `cv-standing-wave` canvas present with `sl-freq` slider and `out-freq` output
- [ ] `cv-current` and `cv-voltage` canvases present inside `.dual-canvas-row`
- [ ] `cv-radiation` canvas present with `btn-rad-prev`, `btn-rad-next`, `step-label`, `rad-step-count`
- [ ] `cv-reciprocity` canvas present with `btn-tx`, `btn-rx` mode buttons
- [ ] Visual 6 (human scale SVG) completely removed
- [ ] No orphaned SVG blocks remaining for replaced visuals
- [ ] CSS additions in place (`.dual-canvas-row`, `.step-label`, `.mode-row`, `.mode-btn`)
- [ ] `.old` script block inserted in full, replacing previous script
- [ ] `dev-pages.js` and `dev-nav.js` script tags still present at bottom of body
- [ ] Self-check reveal toggles still functional (`.btn-reveal` handler in script)
- [ ] Progress bar still functional (`#progress-bar` handler in script)

---

## Files referenced

| File | Role |
|------|------|
| `lesson-02-how-antennas-radiate.html` | Target file — apply all changes here |
| `lesson-02-how-antennas-radiate-.old` | Source of canvas scripts and HTML templates |

Both files are in: `frontend/pages/antenna-curriculum/unit-1-how-antennas-work/`
