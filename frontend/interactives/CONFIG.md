# RF-Hub Interactives — Configuration Protocol

**Location:** `D:\live_code\RF-Hub\frontend\interactives\`  
**Last Updated:** 7 March 2026  
**Rule:** Every interactive in this folder is a single, standalone HTML file. No versioned copies ever. Lesson context is controlled via URL query parameters passed through the iframe `src`.

---

## Directory Contents

| File | Description | Lessons |
|------|-------------|---------|
| `radiation-3d-v5.html` | 3D radiation pattern viewer — Three.js, orbit/drag, wavefront animation, RX probe, oscilloscope, spectrum analyser | L03, L04, L09 |
| `em-animato-2.html` | EM field animator — frequency slider, E/H wave views, wavelength readout, antenna type selector | L01 |
| `em-radiation.html` | "How Antennas Radiate" — 4-act SVG narrative: current → fields → detachment → reception | L01 (deep-dive), L02 (primary) |
| `tx-rx-complete.html` | TX→RX complete link visualisation | L02 |
| `field-detachment.html` | Field detachment canvas animation — 4 acts: field expands, current reverses, pinch-off, full cycle. Stage highlight toggle (amber/red/purple). Speed slider. URL-configurable acts, start act, highlight, and UI mode. | L02, L03+ |

---

## Query Parameter Protocol

All parameters are optional. Absence of a parameter invokes the default (full) behaviour.  
Parameters are combined with `&`: `file.html?antenna=dipole&ui=minimal&view=orbit`

---

### `radiation-3d-v5.html` Parameters

#### `?antenna=`
Controls which radiation pattern loads on startup and whether the antenna selector UI is visible.

| Value | Pattern loaded | Selector visible |
|-------|---------------|-----------------|
| `dipole` | Half-wave dipole toroid | Hidden |
| `vertical` | Vertical monopole half-toroid | Hidden |
| `yagi` | Yagi forward lobe | Hidden |
| `collinear` | Collinear compressed toroid | Hidden |
| `loop` | Small loop figure-of-eight | Hidden |
| `patch` | Patch broadside lobe | Hidden |
| `dish` | Parabolic pencil beam | Hidden |
| *(absent)* | Dipole (default) | Visible — student can switch |

#### `?ui=`
Controls how much interface chrome is shown. Use `minimal` in early lessons to reduce cognitive load.

| Value | What is shown |
|-------|--------------|
| `minimal` | 3D canvas + orbit/zoom only. No sliders, no toggles, no instrument panels. |
| `standard` | Canvas + camera controls + wave mode buttons + show toggles. No instruments. |
| `full` | Everything: all controls + oscilloscope + spectrum analyser panels. |
| *(absent)* | Defaults to `full` |

#### `?view=`
Sets the opening camera position.

| Value | Camera position |
|-------|----------------|
| `orbit` | Auto-rotating orbit — good for first-look, no interaction needed |
| `top` | Top-down — H-plane (azimuth) perspective |
| `side` | Side-on — E-plane (elevation) perspective |
| `free` | Default free-drag starting position |
| *(absent)* | Defaults to `free` |

---

### Per-Lesson Usage Table — `radiation-3d-v5.html`

| Lesson | Context | iframe src | Rationale |
|--------|---------|-----------|-----------|
| L03 — intro | "Just look at this shape" | `radiation-3d-v5.html?antenna=dipole&ui=minimal&view=orbit` | No distractions — student observes the toroid before explanation |
| L03 — guided exercise | Null exploration | `radiation-3d-v5.html?antenna=dipole&ui=standard` | Student needs rotate/zoom; no instruments yet |
| L04 — vertical section | Monopole reasoning | `radiation-3d-v5.html?antenna=vertical&ui=standard` | Student reasons from dipole to monopole via ground-plane truncation |
| L04 — closing section | All families | `radiation-3d-v5.html&ui=standard` | Full selector — student has now met all six antenna types |
| L09 — gain & directivity | Yagi gain measurement | `radiation-3d-v5.html?antenna=yagi&ui=full` | Instruments (oscilloscope + spectrum analyser) needed for gain work |

---

### `em-animato-2.html` Parameters

#### `?freq=`
Pre-sets the frequency slider on load. Useful for lesson exercises that say "start at 145 MHz".

| Value | Effect |
|-------|--------|
| Integer (1–500) | Sets frequency slider to that value in MHz on load |
| Out of range | Ignored silently — default used |
| *(absent)* | Default frequency (145 MHz) |

Valid range matches the slider: **1 – 500 MHz**.

---

### `em-radiation.html` Parameters

#### `?act=`
Opens the page scrolled directly to a specific act in the 4-act narrative. Useful for embedding in lesson iframes that focus on one act.

| Value | Effect |
|-------|--------|
| `1` | Scrolls to Act I — Current flows in the antenna |
| `2` | Scrolls to Act II — Fields form around the wire |
| `3` | Scrolls to Act III — Fields detach and propagate |
| `4` | Scrolls to Act IV — Fields induce current in RX |
| *(absent)* | Full narrative from the top (current behaviour) |
| Invalid | Ignored silently — full narrative from top |

---

### `tx-rx-complete.html` Parameters

No query parameter support currently. Used as full interactive in L02.

---

### `field-detachment.html` Parameters

#### `?acts=`
Controls which acts are available and shown in the step counter.

| Value | Acts shown | Step counter |
|-------|-----------|--------------|
| `1-4` | All four acts | 1 / 4 (default) |
| `1-3` | Acts 1–3 only (no Act 4) | 1 / 3 |
| `4` | Act 4 only | 1 / 1 |
| *(absent)* | All four acts | 1 / 4 |

#### `?start=`
Sets which act opens on load. Must be within the `?acts=` range.

| Value | Opens on |
|-------|---------|
| `1`–`4` | That act number |
| *(absent)* | First act in the `?acts=` range |

#### `?highlight=`
Pre-enables the stage highlight colour toggle on load.

| Value | Effect |
|-------|--------|
| `on` | Highlight active on load (amber/red/purple stages visible immediately) |
| *(absent)* | Highlight off — all amber (physically correct default) |

#### `?ui=`
Controls interface chrome.

| Value | Effect |
|-------|--------|
| `minimal` | Hides description box and step counter — canvas + prev/next/play only |
| `full` | Full UI with description, step counter, speed slider, highlight toggle |
| *(absent)* | Defaults to `full` |

---

### Per-Lesson Usage Table — `field-detachment.html`

| Lesson | Context | iframe src | Rationale |
|--------|---------|-----------|-----------|
| L02 — Section 3 | Detachment story | `field-detachment.html` | Full 4 acts, student works through the story step by step |
| L02 — Section 3 embed | Alongside text | `field-detachment.html?acts=1-3` | Acts 1–3 only — Act 4 belongs in its own section below |
| L02 — "Putting it together" | Full cycle | `field-detachment.html?acts=4&highlight=on` | Act 4 only, highlight pre-enabled to show the three stages clearly |
| L03 — Radiation pattern intro | Pattern context | `field-detachment.html?acts=4&start=4&ui=minimal` | Act 4 minimal — propagating loops as visual context before 3D pattern viewer |

---

---

## iframe Embed Format

Lesson `.md` files reference interactives in `<!-- VISUAL: -->` briefs using the following format:

```
<!-- VISUAL: iframe src="../../../interactives/radiation-3d-v5.html?antenna=dipole&ui=minimal&view=orbit" height="520px" — [brief description of what student sees/does] -->
```

**Relative path from lesson HTML files:**  
`frontend/pages/antenna-curriculum/unit-N/lesson-NN.html` → `../../../interactives/filename.html`

---

## Enhancement Queue

Enhancements to interactives are handled by the **Claude Code agent** in a separate project.
This file is the specification source — the Claude Code agent reads it before touching any interactive.

### radiation-3d-v5.html — ✅ COMPLETE (7 March 2026)
Branch: `review/radiation-3d-query-params`

All query parameters implemented:
- `?antenna=` — loads pattern, hides selector
- `?ui=` — minimal/standard/full chrome control
- `?view=` — opening camera position
- All 6 antenna patterns added (vertical, yagi, collinear, loop, patch, dish)
