# Amendment — Section 4 Restructure: Wavelength Before Notation

## Problem

Section 4 ("Wavelength, Frequency, and the Speed of Light") has a structural problem. Currently it flows:

1. "You just watched a wave form. Now let's measure it."
2. → Immediately into "Reading Big Numbers in RF" (notation/prefixes)
3. → Then Visual 4 — Big Numbers Interactive
4. → Then "The Formula" which finally defines frequency, wavelength, and c

This is backwards. The student is learning *how to read numbers* before they know *what they're measuring* or *why it matters*. Wavelength — the single most important physical quantity in antenna work — gets a one-sentence definition buried after a notation exercise.

In ham radio, wavelength IS the language. Bands are named after wavelengths ("2 metres", "70 centimetres", "40 metres"). Antenna dimensions are fractions of wavelength. Every physical thing you build traces back to wavelength. This needs proper weight before we teach the student how to manipulate big numbers.

## Required Changes

### INSERT: New content block between the Section 4 opening paragraph and "Reading Big Numbers in RF"

After the current line:

```
<p>You just watched a wave form. Now let's measure it.</p>
<p>Every electromagnetic wave has three properties tied together by one relationship. But before we write the formula, we need to be comfortable with the numbers involved — because they're big.</p>
```

**Remove** that second paragraph (it jumps ahead to the formula). Replace the opening and insert the following new content BEFORE "Reading Big Numbers in RF":

---

#### A. New opening paragraphs (replace existing two paragraphs)

"You just watched a wave form. Now let's measure it."

"The most important measurement is **wavelength** — the physical distance of one complete cycle. You saw it labelled on the wave animation in Section 3: the distance from one peak to the next. But wavelength isn't just a number on a diagram. It's a real, physical distance you can measure with a tape measure."

#### B. NEW VISUAL: `wavelength-diagram` — A clean, labelled sine wave

This is the lesson's first standalone wave diagram. It must be clear, simple, and reference-quality — something the student can come back to.

Build as an SVG inside a `.diagram-card.glow-em`:

**Content:**
- A single clean sine wave spanning exactly 2.5 complete cycles, propagating left to right
- The wave drawn in amber (--accent-e) with moderate line weight (2-3px)
- A horizontal centre line (dashed, --text-dim, thin) representing zero/equilibrium

**Labels (all in IBM Plex Mono):**
- **"Peak"** — small label with a thin leader line pointing to the top of the first cycle. Colour: --text-primary
- **"Trough"** — small label pointing to the bottom of the first cycle. Colour: --text-primary
- **"One complete cycle"** — a bracket (or brace) spanning from one peak to the next peak, positioned above the wave. Colour: --accent-em
- **"Wavelength (λ)"** — a horizontal double-headed arrow spanning exactly one cycle (peak to peak), positioned below the wave. The arrow and label in --accent-em. This is THE key label — make it prominent.
- **"Amplitude"** — a vertical double-headed arrow from the centre line to the peak, positioned on the second cycle. Colour: --text-dim (secondary importance)

**Style notes:**
- Dark background (--bg-card)
- No animation needed — this is a static reference diagram
- Responsive: scales down cleanly on mobile (min readable at 320px)
- The wavelength arrow should be visually dominant — it's the hero of this diagram
- `role="img"` with `aria-label="Sine wave diagram showing peak, trough, one complete cycle, wavelength as the distance of one cycle, and amplitude as the height from centre to peak"`

#### C. New prose: "Why wavelength matters in radio" 

After the wave diagram, add this subsection:

```html
<h3 class="section-title">Why wavelength matters in radio</h3>
```

**Paragraph 1 — Wavelength is physical:**
"Wavelength is not an abstract number. It's a distance you can hold in your hands, stretch out with your arms, or pace out across a garden. A 2-metre wave is literally two metres long — about the height of a doorway. A 70-centimetre wave is the length of your forearm. A 12-centimetre WiFi wave fits across your palm."

**Paragraph 2 — Ham bands are named after wavelengths:**
"In amateur radio, wavelength is the common language. Every band is named after its approximate wavelength: the '2-metre band', the '70-centimetre band', the '40-metre band', the '6-metre band'. When a ham says 'I'm on 2 metres', they're telling you the wavelength of the signal — and from that, you immediately know the frequency, the type of propagation, and roughly how big the antenna is."

**Paragraph 3 — Antennas are built to match wavelength:**
"This is the crucial connection: your antenna has to be built to match the wavelength. A simple dipole antenna for the 2-metre band is about 1 metre long — half the wavelength. A dipole for the 40-metre band is about 20 metres long. A WiFi antenna is just a few centimetres. Every antenna dimension in this entire course traces back to wavelength. It's the bridge between 'what frequency am I on?' and 'how big does my antenna need to be?'"

**Callout box** (`.callout.key-insight`):
Icon: 🔑
Text: **"Wavelength is the physical ruler of antenna engineering."** Every band name, every antenna dimension, every design decision starts with: what is the wavelength?

#### D. New prose: Introduce frequency and speed of light BEFORE big numbers

After the wavelength callout, add:

```html
<h3 class="section-title">Three properties, one relationship</h3>
```

**Paragraph — Frequency:**
"So wavelength is a distance. But how do we find it? We need two more properties. **Frequency** (*f*) is how many complete cycles the wave completes per second, measured in hertz (Hz). A wave completing 145 million cycles per second has a frequency of 145 MHz. Higher frequency means more cycles packed into each second — which means each cycle is physically shorter."

**Paragraph — Speed of light:**
"The **speed of light** (*c*) ties them together. In free space, all electromagnetic waves travel at exactly the same speed: 300,000,000 metres per second. Radio waves, visible light, X-rays — all identical speed. Since speed = distance × cycles per second, we get:"

**Formula callout** (`.callout` with λ icon, same style as the current one):
**λ = c / f**
"Wavelength equals the speed of light divided by frequency. Higher frequency → shorter wavelength. Lower frequency → longer wavelength. They're locked in an inverse relationship, always multiplying to give *c*."

#### E. THEN "Reading Big Numbers in RF"

Now the transition to big numbers makes sense:

**New transition paragraph** (replace old one):
"That formula is simple — but the numbers involved are enormous. 300,000,000 metres per second. 145,000,000 cycles per second. Before we start calculating, let's get comfortable with how RF engineers write these numbers."

Then continue with "Reading Big Numbers in RF" and the big-numbers-interactive widget exactly as they are now.

#### F. Remove the duplicate "The Formula" subsection

After the Big Numbers Interactive, there's currently a subsection called "The Formula" (around line 893) that re-introduces f, λ, and c. This is now redundant — we've already introduced them above. 

**Remove:**
- The `<h3 class="section-title">The Formula</h3>` heading
- The three paragraphs defining Frequency, Wavelength, and Speed of light (lines 894-897)
- The paragraph "These three are locked together:" (line 898)
- The callout box containing λ = c / f (lines 900-905 approximately)

**Keep:** Everything from the formula rearrangement interactive widget onwards (the "Solve for λ / f / c" buttons, the live calculator, the worked examples, the MHz shortcut, and the wavelength-at-human-scale visual). These all still work — they now follow naturally after the big numbers section.

The formula rearrangement widget can stay as-is — it serves as the interactive exploration of the formula already introduced in prose above.

---

## Summary of new Section 4 flow

1. **"You just watched a wave form. Now let's measure it."**
2. **NEW: Wavelength introduction** — what it is physically
3. **NEW VISUAL: `wavelength-diagram`** — clean labelled sine wave (static SVG)
4. **NEW: "Why wavelength matters in radio"** — ham bands, antenna dimensions, physical ruler
5. **NEW: "Three properties, one relationship"** — introduces f, c, and λ = c / f in prose
6. **"Reading Big Numbers in RF"** — notation and prefixes (existing, unchanged)
7. **Visual 4 — Big Numbers Interactive** (existing, unchanged)
8. **Formula rearrangement widget + live calculator** (existing, unchanged — but no longer preceded by duplicate formula intro)
9. **"Putting Numbers to It"** — worked examples (existing, unchanged)
10. **"The MHz Shortcut"** (existing, unchanged)
11. **Visual 6 — Wavelength at Human Scale** (existing, unchanged)

---

## Design notes for the new wavelength-diagram visual

- This should feel like a textbook-quality reference diagram, not a flashy animation
- Use the same `.diagram-card` container as other visuals
- Label it: `<div class="diagram-label">Wavelength — the distance of one complete cycle</div>` (NOT "Visual N" — this one should feel like a natural part of the prose, not a numbered exhibit)
- The wavelength arrow (λ) should be the visually strongest element after the wave itself — use `--accent-em` colour and slightly heavier stroke weight than the other labels
- Consider a subtle CSS entrance animation (fade-in on scroll via IntersectionObserver) but no ongoing animation — it's a static reference
- On mobile (<600px), ensure the labels don't overlap. Consider stacking "Peak"/"Trough" labels to the side rather than above/below if space is tight

## Quality checks for this amendment

- [ ] New wavelength-diagram SVG is present and correctly labelled (peak, trough, cycle, λ, amplitude)
- [ ] "Why wavelength matters in radio" prose mentions band names, antenna sizing, and physical measurement
- [ ] Key insight callout ("Wavelength is the physical ruler...") is present
- [ ] f, c, and λ = c / f are introduced in prose BEFORE "Reading Big Numbers in RF"
- [ ] The old duplicate "The Formula" subsection (that was after Big Numbers) is removed
- [ ] The formula rearrangement widget and calculator still work correctly
- [ ] No content is lost — worked examples, MHz shortcut, wavelength-at-human-scale all intact
- [ ] Section flows logically: what is wavelength → why it matters → the formula → how to read big numbers → interactive tools → worked examples


---

## Issue 2 — Visual 8 (E⊥H⊥k) wave overflows canvas

### Problem

The 3D wave in Visual 8 is drawn much larger than its canvas container. The wave extends past both edges, so the student only sees the middle section — mostly straight lines — instead of the full sinusoidal wave with visible oscillation.

### Root Cause

In the `project3D` function (around line 2543):

```javascript
return { x: w * 0.15 + x2 * (w * 0.006), y: h / 2 + y2 * (h * 0.4) };
```

With `waveLen = 200` (x3 ranges ±100) and rotation `ry = -0.55`, the projected x-coordinates span roughly 920px on a 900px-wide container but are offset starting at 15% from the left edge. The wave is drawn wider than the canvas.

### Location

File: `lesson-01-em-radiation.html`
Section: `VISUAL 8 — e-h-k-perpendicular (canvas 3D)` (starts around line 2503)
Canvas container: `#visual-ehk` (HTML around line 1146)
Canvas element: `#canvas-ehk`
Fixed height: `FIXED_H8 = 240`

### Key code block (the projection + draw functions):

```javascript
const FIXED_H8 = 240;
const waveLen = 200; // in 3D units
const amp = 60;

function project3D(x3, y3, z3, view, w, h) {
    const ry = view.ry, rx = view.rx;
    const x2 =  x3 * Math.cos(ry) + z3 * Math.sin(ry);
    const z2 = -x3 * Math.sin(ry) + z3 * Math.cos(ry);
    const y2 =  y3 * Math.cos(rx) - z2 * Math.sin(rx);
    return { x: w * 0.15 + x2 * (w * 0.006), y: h / 2 + y2 * (h * 0.4) };
}
```

### Fix Required

Scale the wave to fit comfortably within the canvas. The entire wave (all cycles, both E and H sinusoids) must be visible with padding on both sides. The fix should:

1. Reduce the x-scale multiplier (`w * 0.006`) so the full projected wave fits within the canvas width with ~10% padding on each side
2. OR reduce `waveLen` / `amp` to achieve the same result
3. Centre the wave horizontally — the `w * 0.15` left offset should be replaced with proper centering based on the projected bounds
4. Ensure this works across all three view modes (3D, Side, Top) since each rotation changes the projected width
5. The wave should show at least 2 complete visible cycles of both E and H fields — the student needs to see the sinusoidal shape clearly, not just straight lines in the middle of an oversized wave

### Quality check

- [ ] Full wave visible in 3D view mode with no clipping
- [ ] Full wave visible in Side view mode
- [ ] Full wave visible in Top view mode
- [ ] At least 2 complete cycles of E-field oscillation visible
- [ ] H-field oscillation visible (perpendicular to E)
- [ ] Propagation arrow (k) visible with arrowhead
- [ ] E, H, k labels visible and not clipped
- [ ] Right-hand rule inset still positioned correctly
- [ ] Wave animates smoothly at 60fps
- [ ] Responsive — wave rescales correctly when container resizes


---

## Issue 3 — Self-check answer panels partially visible when collapsed

### Problem

All 15 self-check answer panels show a visible purple strip (background + left border) below the "Show Answer" button even when collapsed. The answer text is hidden but the panel's padding and border are still rendered.

### Root Cause

In the CSS at line 399-411:

```css
.self-check__reveal {
  margin-top: 14px;
  padding: 16px;                        /* ← renders even at max-height:0 */
  background: rgba(167,139,250,0.06);
  border-left: 2px solid var(--accent-em);
  border-radius: 0 8px 8px 0;
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease;
}
.self-check__reveal.open { max-height: 600px; }
```

`max-height: 0` with `overflow: hidden` constrains the content box to zero height, but `padding: 16px` is outside the content box (default box-sizing is content-box). The element's total visible height is 0 (content) + 16px (top padding) + 16px (bottom padding) = 32px. The purple background and left border render in that 32px strip. The `margin-top: 14px` also adds visible space above it.

### Location

File: `lesson-01-em-radiation.html`
CSS: `.self-check__reveal` (line ~399)
Open state: `.self-check__reveal.open` (line ~412)
HTML: 15 instances of `<div class="self-check__reveal" id="sc-N">` (lines 1243-1349)

### Fix Required

The padding, margin, and border must also transition from 0 to their full values when the panel opens. Replace the existing CSS with:

```css
.self-check__reveal {
  max-height: 0;
  overflow: hidden;
  padding: 0 16px;
  margin-top: 0;
  border-left: 2px solid transparent;
  background: rgba(167,139,250,0);
  border-radius: 0 8px 8px 0;
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
  transition: max-height 0.35s ease, padding 0.35s ease, margin 0.35s ease, 
              border-color 0.35s ease, background 0.35s ease;
}
.self-check__reveal.open {
  max-height: 600px;
  padding: 16px;
  margin-top: 14px;
  border-left: 2px solid var(--accent-em);
  background: rgba(167,139,250,0.06);
}
```

Key changes:
- Closed state: `padding: 0 16px` (no vertical padding — horizontal stays so text doesn't jump sideways on open)
- Closed state: `margin-top: 0` (no gap above collapsed panel)
- Closed state: `border-left` transparent (hides the purple line)
- Closed state: `background` fully transparent
- Open state: all values transition to their visible values
- All properties included in the `transition` declaration

### Quality check

- [ ] No visible strip below any "Show Answer" button when collapsed
- [ ] Answer panel smoothly animates open (padding, background, border all transition together)
- [ ] Answer panel smoothly animates closed
- [ ] Answer text doesn't jump horizontally when opening (horizontal padding constant)
- [ ] All 15 self-check panels behave identically
- [ ] Button text toggles correctly: "Show Answer ▸" ↔ "Hide Answer ▾"
- [ ] Keyboard accessible (Enter/Space triggers reveal)
