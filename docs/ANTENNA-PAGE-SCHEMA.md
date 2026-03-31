# Antenna Reference Page — Stage Schema

**Purpose:** Defines the 3-stage structure for expanding each antenna section on `frontend/pages/antennas.html`.  
**Applies to:** Every antenna type on the reference page.  
**Workflow:** One MD per antenna → converted to HTML and integrated into `antennas.html`.

---

## File Locations

| What | Where |
|------|-------|
| Schema (this file) | `docs/ANTENNA-PAGE-SCHEMA.md` |
| Antenna MDs | `content/antenna-reference/` |
| Main catalogue page | `frontend/pages/antennas.html` |
| Dedicated antenna pages | `frontend/pages/antennas/<type>.html` |
| Build guide blog posts | `frontend/pages/blog/build-<type>.html` |

---

## Page Architecture

The reference content lives across two tiers of pages, not one.

### Main catalogue page (`antennas.html`)
- Shows **Stage 1 only** for every antenna type
- Each antenna section ends with a **"Read more →"** link to its dedicated page
- Purpose: fast-scan overview — a user can compare antenna types at a glance

### Dedicated antenna pages (`antennas/<type>.html`)
- Shows **all three stages** for one antenna
- Repeats Stage 1 at the top so the page stands alone (search traffic, direct links)
- Stage 3 ends with a **"Build one →"** callout linking to the blog build guide (where one exists)
- Purpose: deep reference for someone who has chosen or is evaluating this specific antenna

### Blog build guides (`blog/build-<type>.html`)
- Step-by-step construction walkthrough with photos, BOM, tool list
- Linked from Stage 3 of the dedicated page, not embedded
- Separate content with its own update cycle (materials change, techniques evolve)
- **Not every antenna gets one** — prioritise DIY-buildable types: EFHW, dipole, J-pole, ground plane, mag loop, vertical, quad

### Curriculum cross-references
Both the reference pages and the curriculum link to each other:
- **Reference → Curriculum:** Where a concept is mentioned but not taught, link to the lesson (e.g., "See L06: Impedance for a full explanation")
- **Curriculum → Reference:** Lessons can link to the reference page for quick-lookup tables and parameter comparisons
- Cross-refs use a consistent callout style: `<!-- XREF: curriculum L06 -->` in the MDs, converted to styled links in HTML

---

## The Three Stages

All three stages are visible on the page simultaneously, separated by clear visual headers.  
Stage 1 is roughly what exists today. Stages 2–3 are new depth.


### Stage 1: Fundamentals

**What it covers:** What the antenna is, how it works at a basic level, key parameters.  
**Audience assumption:** Someone who has heard the name but doesn't know the details.  
**Tone:** Clear, direct, no assumed prior knowledge of this specific antenna type.

| Required Section | Description |
|-----------------|-------------|
| **Type & classification** | Balanced/unbalanced, driven/parasitic, narrowband/wideband |
| **How it works** | 2–3 paragraph plain-English explanation of the operating principle |
| **Key parameters table** | Gain, impedance, pattern, polarisation, bandwidth — same columns for every antenna |
| **Length/sizing formula** | With worked example at a real-world frequency |
| **Advantages / Disadvantages** | Practical pros and cons, not theoretical |
| **Diagram + photo** | Schematic diagram and real-world photo (already exists for most) |

**What does NOT go here:** Harmonic behaviour, deployment variations, construction specifics, advanced theory.

---

### Stage 2: Performance & Behaviour

**What it covers:** How the antenna actually performs across frequency, orientation, and environment.  
**Audience assumption:** Someone who understands Stage 1 and wants to know what to expect in practice.  
**Tone:** Technical but practical — what you'll see on a VNA or in the field, not textbook derivations.

| Required Section | Description |
|-----------------|-------------|
| **Bandwidth characteristics** | SWR curve shape, usable bandwidth, what limits it |
| **Pattern evolution** | How the radiation pattern changes with frequency (harmonic behaviour where applicable) |
| **Gain vs. frequency** | How gain changes across the operating range |
| **Environmental sensitivity** | Height above ground, nearby structures, ground quality, weather effects |
| **Common misconceptions** | 1–2 widely-held wrong beliefs about this antenna, corrected |

| Conditional Section | When to include |
|-------------------|-----------------|
| **Harmonic behaviour table** | Multi-band antennas (EFHW, dipole, loop) — lobe count, angle shift, pattern description per harmonic |
| **Polarisation behaviour** | Antennas where polarisation changes with config (helical modes, tilted elements) |
| **Mutual coupling notes** | Array-type antennas (Yagi, collinear, phased) |
| **Feed sensitivity** | Antennas where small feed changes cause large performance shifts (mag loop, quad) |

**What does NOT go here:** Build instructions, specific configurations, deployment advice.

---

### Stage 3: Practical Deployment

**What it covers:** Real-world installation, configuration variants, build considerations, and troubleshooting.  
**Audience assumption:** Someone ready to buy, build, or install this antenna.  
**Tone:** Workshop manual — specific, actionable, opinionated where experience justifies it.

| Required Section | Description |
|-----------------|-------------|
| **Common configurations** | Named variants with brief description (e.g., EFHW: horizontal, inverted-V, sloper) |
| **Configuration comparison table** | Pattern shape, gain trade-off, best use case — one row per configuration |
| **Mounting & installation** | Height recommendations, support requirements, ground system (where applicable) |
| **Matching & feeding** | Balun/unun requirements, coax selection, connector choices |
| **Tuning procedure** | Step-by-step: what to measure, what to adjust, what "good" looks like |
| **Common problems & fixes** | Table of symptom → likely cause → fix |

| Conditional Section | When to include |
|-------------------|-----------------|
| **Multi-band operation notes** | Antennas used across multiple bands (EFHW, LPDA, trap dipole) |
| **Construction materials & sources** | DIY-buildable antennas (dipole, J-pole, ground plane, mag loop) |
| **Commercial options** | Antennas commonly bought rather than built (dish, discone, collinear) |
| **Comparison with similar types** | Where two antennas compete (Yagi vs quad, J-pole vs ground plane) |

**What does NOT go here:** Basic theory (that's Stage 1), pattern analysis (that's Stage 2), step-by-step construction (that's a blog build guide).

### Build Guide Link (end of Stage 3)
Where a blog build guide exists, Stage 3 ends with a callout:

```
<!-- BUILD-GUIDE: blog/build-efhw.html -->
Ready to build one? → [Build an EFHW from scratch]
```

This is the handoff from reference to workshop.

---

## Antenna Inventory

Each antenna below gets its own MD file. Priority order reflects which antennas benefit most from the expanded treatment.

### Priority 1 — Most content to add
| Antenna | File | Notes |
|---------|------|-------|
| End-Fed Half-Wave (EFHW) | `efhw.md` | Rich harmonic content, multiple configs, very popular |
| Half-Wave Dipole | `dipole.md` | Foundation antenna, everything else references it |
| Yagi-Uda | `yagi.md` | Complex design parameters, many variations |
| Vertical (Quarter-Wave) | `vertical.md` | Ground system depth, radial analysis |

### Priority 2 — Moderate expansion
| Antenna | File | Notes |
|---------|------|-------|
| Magnetic Loop (Small) | `mag-loop.md` | Tuning behaviour, Q analysis |
| Full-Wave Loop | `full-wave-loop.md` | Shape variants, multi-band |
| J-Pole | `j-pole.md` | Construction popular, variants (Slim Jim) |
| Ground Plane | `ground-plane.md` | Radial angle analysis |
| Collinear | `collinear.md` | Phasing methods |

### Priority 3 — Specialist types (lighter expansion)
| Antenna | File | Notes |
|---------|------|-------|
| Log-Periodic (LPDA) | `lpda.md` | Design ratios, wideband theory |
| Cubical Quad | `quad.md` | Loop vs Yagi comparison |
| Helical | `helical.md` | Two modes, satellite focus |
| Horn | `horn.md` | Waveguide feed, microwave |
| Parabolic Dish | `dish.md` | Feed types, f/D ratio |
| Discone | `discone.md` | Wideband receive focus |
| Beverage | `beverage.md` | Receive-only, niche |
| NVIS | `nvis.md` | Deployment-focused |
| Phased Arrays | `phased-array.md` | Overview only — depth belongs in Unit 4 curriculum |

---

## HTML Integration Notes

### Two-tier page structure
- **Main page (`antennas.html`):** Stage 1 blocks for all antennas, each with "Read more →" link
- **Dedicated pages (`antennas/<type>.html`):** Full 3-stage treatment, one antenna per page
- Dedicated pages reuse the same `rf-hub-v2.css` and nav structure as the main page

### Stage Headers (dedicated pages only)
Each stage gets a visual separator. Suggested pattern:

```html
<div class="stage-header">
  <span class="stage-num">STAGE 01</span>
  <span class="stage-title">Fundamentals</span>
  <div class="stage-line"></div>
</div>
```

Follows the existing `chapter-header` pattern but nested within each antenna section.

### No accordion, no tabs
All three stages visible simultaneously. The page is a reference — users scroll, they don't click to reveal.

### Visual briefs in MDs
Each MD includes `<!-- VISUAL: -->` briefs for diagrams, pattern plots, and comparison graphics — same convention as the curriculum MDs. The HTML conversion agent builds these.

### "Read more" links (main page)
Each antenna's Stage 1 block on the main page ends with:

```html
<a href="antennas/efhw.html" class="read-more">Full EFHW reference →</a>
```

### Curriculum cross-reference callouts
In the MDs, mark cross-refs with:

```
<!-- XREF: curriculum L06 "Impedance" -->
```

In HTML, these render as a styled inline link or sidebar callout — not a full card, just enough to say "this concept is taught in depth in the curriculum."

### Build guide callouts (end of Stage 3)
Where a build guide exists:

```html
<div class="callout callout--build">
  <span class="callout-icon">🔧</span>
  <div class="callout-text">
    <strong>Build one yourself:</strong>
    <a href="../blog/build-efhw.html">EFHW Build Guide →</a>
  </div>
</div>
```

---

## Depth Ceiling

**Intermediate-to-advanced, staying practical.**

- ✅ Harmonic lobe tables with angles
- ✅ Configuration comparison with real gain numbers
- ✅ VNA measurement interpretation
- ✅ Troubleshooting symptom → cause → fix
- ✅ "Which coax and why" level of specificity
- ❌ Full NEC modelling theory (link out instead)
- ❌ Academic derivations of pattern equations
- ❌ Manufacturing tolerances / industrial specs
- ❌ Content that duplicates curriculum lessons

If a topic is covered in depth by a curriculum lesson, the reference page links to it rather than duplicating it. The reference page complements the curriculum, it doesn't replace it.

### Known Curriculum Cross-References
| Reference Page Topic | Curriculum Lesson | Direction |
|---------------------|-------------------|-----------|
| EM wave basics | L01: The Electromagnetic Wave | Ref → Curriculum |
| Radiation mechanism | L02: How Antennas Radiate | Ref → Curriculum |
| Radiation patterns | L03: Radiation Patterns | Ref → Curriculum |
| Polarisation | L05: Polarisation | Ref → Curriculum |
| Impedance (Z = R + jX) | L06: Impedance | Ref → Curriculum |
| SWR / matching | L07 (planned) | Ref → Curriculum |
| Antenna comparison table | Reference quick-ref | Curriculum → Ref |
| Parameter lookup values | Reference Stage 1 tables | Curriculum → Ref |

This table grows as curriculum lessons are written. Each antenna MD should note which cross-refs apply.
