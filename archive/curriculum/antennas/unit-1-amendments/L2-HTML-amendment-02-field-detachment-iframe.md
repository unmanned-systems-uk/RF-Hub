# L2 HTML Amendment 02 — Insert field-detachment.html iframe

**File to edit:**
`D:\live_code\RF-Hub\frontend\pages\antenna-curriculum\unit-1-how-antennas-work\lesson-02-how-antennas-radiate.html`

**Interactive to insert:**
`frontend/interactives/field-detachment.html`
Relative path from lesson file: `../../../interactives/field-detachment.html`

---

## What to change and exactly where

### Locate this block (approximately lines 1077–1096)

The existing code begins with this comment and runs through to the closing `</div>` of the exercise block:

```html
    <!-- RESOURCE: em-radiation.html -->
    <div class="resource-block">
      <div class="resource-block-icon">▶</div>
      <div class="resource-block-content">
        <h3>Interactive — em-radiation.html</h3>
        <p>The interactive animates the four-act detachment story step by step. <strong>Do the guided exercise below before reading further.</strong> The animation will make the text above click into place.</p>
        <a class="btn-resource" href="../../../resources/em-radiation.html" target="_blank" rel="noopener">Open em-radiation interactive →</a>
      </div>
    </div>

    <div class="exercise-block">
      <h4>Guided Exercise — em-radiation.html</h4>
      <p style="color:var(--text-secondary);font-size:0.9rem;margin-bottom:14px;">Work through the four acts in order. For each act, read the annotation on screen, then answer the question before advancing.</p>
      <ol>
        <li><em>Act 1 — Current and fields build.</em> Watch the field lines expand outward from the wire. Question to yourself: where are these field lines travelling — and how fast?</li>
        <li><em>Act 2 — Current reverses.</em> The current direction indicator flips. Watch the field lines at the furthest extent. Question: why can't those distant field lines instantly snap back to the wire?</li>
        <li><em>Act 3 — Detachment.</em> Watch the pinch point form. The outer field separates. Question: what does the soap bubble analogy have to do with this moment?</li>
        <li><em>Act 4 — Free propagation.</em> The detached packet moves outward. The wire is already generating its next cycle. Question: what keeps this packet moving? What "feeds" it now that it's separated from the wire?</li>
      </ol>
      <p class="exercise-closing">After completing all four acts: close the interactive and write two sentences in your own words explaining why the wave cannot simply return to the wire once it detaches.</p>
    </div>
```

### Replace the entire block above with this

```html
    <!-- INTERACTIVE: field-detachment.html — Layer 2 visual, Section 03 -->
    <div class="diagram-card glow-em" id="v-field-detachment" style="padding:0;overflow:hidden;">
      <div class="diagram-label" style="padding:12px 20px 0;">Interactive — Field Detachment: Watch It Happen</div>
      <iframe
        src="../../../interactives/field-detachment.html"
        title="Field detachment canvas animation — four acts showing field expansion, reversal, pinch-off and free propagation"
        width="100%"
        height="600"
        style="border:none;display:block;"
        loading="lazy"
        allowfullscreen>
      </iframe>
    </div>

    <!-- RESOURCE: em-radiation.html — optional deep-dive, low visual weight -->
    <div class="resource-block" style="opacity:0.75;">
      <div class="resource-block-icon" style="font-size:20px;">📖</div>
      <div class="resource-block-content">
        <p style="margin-bottom:8px;"><strong>Want more detail?</strong> em-radiation.html walks through the same four acts with static diagrams and more explanatory text — useful if you want to sit with each step before moving on.</p>
        <a class="btn-resource" href="../../../interactives/em-radiation.html" target="_blank" rel="noopener">Optional deeper reading: em-radiation →</a>
      </div>
    </div>
```

---

## Also fix this while you're here

The `tx-rx-complete.html` link near line 1382 still uses the old `resources/` path. Update it:

```html
<!-- OLD — wrong path -->
<a class="btn-resource" href="../../../resources/tx-rx-complete.html" ...>

<!-- NEW — correct path -->
<a class="btn-resource" href="../../../interactives/tx-rx-complete.html" ...>
```

---

## Context and rationale (do not add this to the HTML)

- `field-detachment.html` is the canvas animation built specifically to illustrate the detachment story. It shows all four acts with play/pause, speed slider, and a three-stage colour highlight (amber = expanding, red = pinching off, purple = free wave).
- The old em-radiation.html guided exercise block had wrong framing ("Do the guided exercise below before reading further") — it was embedding a worksheet mid-lesson. That framing has been removed. em-radiation.html is optional extended reading only, not a captive exercise.
- Both resource files moved from `resources/` to `interactives/` on 7 Mar 2026. All `href` paths in this lesson must use `../../../interactives/` not `../../../resources/`.

---

## After making the changes

1. Open the lesson in a browser and verify the iframe renders at the correct position — directly after the 4-panel SVG (Visual 2), before Section 04 (The Half-Wave Dipole).
2. Check the iframe height looks right at full desktop width — 600px should be sufficient for the canvas + controls. Adjust if the animation feels cramped.
3. Verify the optional em-radiation link renders at lower visual weight than the iframe card.
4. Verify the tx-rx-complete.html link in Section 05 (Reciprocity) points to `../../../interactives/tx-rx-complete.html`.
5. Commit with message: `L2 HTML: add field-detachment iframe, fix resource paths`
