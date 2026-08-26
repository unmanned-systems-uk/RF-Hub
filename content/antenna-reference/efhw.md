# End-Fed Half-Wave (EFHW) Antenna — Full Reference

**Schema version:** ANTENNA-PAGE-SCHEMA.md v1  
**Target pages:** `antennas.html` (Stage 1 excerpt) → `antennas/efhw.html` (full 3-stage)  
**Priority:** 1 (richest content, most popular antenna type for portable/stealth HF)  
**Build guide:** Yes — `blog/build-efhw.html` (to be written separately)

### Required Images
| Filename | Type | Description | Status |
|----------|------|-------------|--------|
| `D-efhw.png` | Diagram | EFHW schematic: half-wave wire, high-Z end, unun at feed, counterpoise | ✅ In assets |
| `P-efhw.png` | Photo | Portable EFHW field setup with 49:1 unun box and radio | ✅ In assets |
| `D-efhw-unun.png` | Diagram | 49:1 unun schematic (toroid winding detail) | ✅ In assets |
| `D-efhw-harmonics.png` | Diagram | Side-by-side lobe patterns: fundamental, 2nd, 3rd, 4th harmonic | ✅ In assets |
| `D-efhw-configs.png` | Diagram | Three deployment configs: horizontal, inverted-V, sloper | ✅ In assets |
| `EFHW-BH7JYR.jpg` | Photo | BH7JYR EFHW antenna (commercial example) | ✅ In assets |
| `Moonraker-LWEF.png` | Photo | Moonraker LWEF antenna (commercial example) | ✅ In assets |

### Curriculum Cross-References
<!-- XREF: curriculum L01 "The Electromagnetic Wave" — wavelength/frequency fundamentals -->
<!-- XREF: curriculum L02 "How Antennas Radiate" — radiation mechanism -->
<!-- XREF: curriculum L03 "Radiation Patterns" — pattern reading, lobes, nulls -->
<!-- XREF: curriculum L05 "Polarisation" — polarisation basics -->
<!-- XREF: curriculum L06 "Impedance" — Z = R + jX, matching, transformation -->

---

## STAGE 1: Fundamentals

### Type & Classification

| Property | Value |
|----------|-------|
| Feed type | Unbalanced, end-fed |
| Element type | Single wire, half-wave resonant |
| Matching | High-Z to 50 Ω via transformer (typically 49:1) |
| Band coverage | Multi-band via harmonic operation |
| Category | HF wire antenna |

### How It Works

A half-wave dipole has low impedance (around 73 Ω) at its centre, but very high impedance (2,500–5,000 Ω) at its ends. An EFHW exploits this by feeding the antenna at one end through a 49:1 unun wound on a ferrite toroid, converting the high end-impedance down to approximately 50 Ω for a direct coax connection.

> **What's a unun?** A unun (unbalanced-to-unbalanced transformer) transforms impedance between two unbalanced connections — in this case, from the high-impedance wire end down to the 50 Ω coax. It differs from a balun (balanced-to-unbalanced), which also converts between balanced and unbalanced systems. The EFHW uses a unun because both the wire end and the coax are unbalanced.

The wire itself is electrically a half-wavelength long at the lowest operating frequency. Because a half-wave is also resonant at its integer harmonics (2nd, 3rd, 4th…), the same wire works on multiple HF bands without a tuner. A 40-metre EFHW (approximately 20 metres of wire) is resonant on 40 m, 20 m, 15 m, and 10 m — four bands from one wire and one unun.

A short counterpoise wire (typically 0.05λ, around 2–3 metres) connects to the ground side of the unun. This is not a radial system — it provides a return path for the small amount of common-mode current at the feed point.

**Without a counterpoise,** the outer shield of the coax becomes the counterpoise by default. RF current flows back along the shield into the shack, causing RFI to nearby equipment, erratic SWR readings that change when you touch the coax, and potentially painful RF burns. A common-mode choke (ferrite choke balun) on the coax at the feed point helps suppress this, but the choke is a second line of defence — the counterpoise is the first. Use both.

**Counterpoise angle matters.** Running the counterpoise straight down (90° vertical from a horizontal wire) is not ideal — it can couple to the coax and partially cancel the benefit. Angle the counterpoise away from both the antenna wire and the coax run, ideally 90–135° from the antenna element in the horizontal plane. If the wire runs east-west and the coax drops south, route the counterpoise north or north-west. The goal is to decouple the counterpoise from the coax shield path.

<!-- VISUAL: Annotated diagram showing the three key parts: half-wave wire (with current distribution overlay showing maximum at centre, zero at ends), 49:1 toroid unun at feed point, short counterpoise angled away from coax run, and common-mode choke on coax. Colour-code: wire in amber (E-field accent), unun housing in neutral grey, counterpoise in dashed cyan angled 90–135° from wire in horizontal plane, choke in purple. Label the high-Z end and the 50 Ω coax connection. Show counterpoise angle clearly — NOT straight down. -->

### Key Parameters

| Parameter | Value | Notes |
|-----------|-------|-------|
| **Gain** | 2.15 dBi (fundamental) | Identical to a centre-fed dipole at the same height |
| **Impedance (end)** | ~2,500–5,000 Ω | Transformed to 50 Ω via matching network |
| **Pattern** | Figure-8 broadside (fundamental) | Becomes multi-lobed on harmonics — see Stage 2 |
| **Polarisation** | Depends on orientation | Horizontal when wire is horizontal |
| **Bandwidth (per band)** | Moderate (~2–3% of centre frequency) | Slightly narrower than centre-fed dipole |
| **Bands** | Multi-band (harmonic operation) | 40/20/15/10 m from a single wire cut for the 40 m band (~20 m long) |
| **Height sensitivity** | Moderate | Pattern and impedance shift with height above ground |

### Sizing Formula

```
L (metres) = (300 / f_MHz) × 0.5 × VF

Where:
  L    = total wire length
  f    = lowest operating frequency in MHz
  VF   = velocity factor (0.95 for bare wire, 0.93–0.97 depending on wire diameter and insulation)
```

**Worked Example — 40 m band EFHW (7.1 MHz centre):**

```
L = (300 / 7.1) × 0.5 × 0.95
L = 42.25 × 0.5 × 0.95
L = 20.07 metres
```

This wire is also resonant at:
- **2nd harmonic (14.2 MHz):** 20 m band ✓
- **3rd harmonic (21.3 MHz):** 15 m band ✓
- **4th harmonic (28.4 MHz):** 10 m band ✓

> **Note:** The 3rd harmonic lands on 15 m because 40 m's 3rd harmonic (21 MHz) falls within the 15 m band (21.0–21.45 MHz). This is not a coincidence — the amateur band plan was designed with harmonic relationships in mind.

### Advantages

- **Single support point** — only one end needs to be elevated; the feed point can be at ground level
- **Multi-band without a tuner** — harmonic operation covers 4+ bands from one wire
- **No radial system** — short counterpoise only, unlike a vertical which needs 16–120 radials
- **Portable-friendly** — lightweight wire, small unun, minimal hardware
- **Stealth installations** — thin wire is nearly invisible against sky or trees
- **Simple construction** — wire, toroid, a few turns of wire, and a connector

### Disadvantages

- **Unun losses** — the 49:1 unun introduces 0.5–1.5 dB loss depending on quality and frequency
- **Narrower bandwidth per band** — SWR rises faster than a centre-fed dipole; may need trimming for CW vs SSB end of a band
- **Common-mode sensitivity** — poor counterpoise or missing choke causes RF on the coax shield (RFI, erratic SWR, RF burns)
- **Harmonic patterns are complex** — on higher bands the pattern splits into multiple lobes (see Stage 2), which can be an advantage or disadvantage depending on what you need
- **Not ideal for all band combinations** — 80/40/20/10 works; 80/30/17/12 does not (non-harmonic bands need a tuner)
- **End voltage is very high on transmit** — the high-impedance end can develop several kilovolts at 100 W; keep it away from metal objects and people

<!-- VISUAL: Simple pros/cons comparison graphic. Left column green (advantages), right column amber (disadvantages). Icons: single tree for "one support point", four frequency labels for "multi-band", lightning bolt for "high end voltage". -->

---

## STAGE 2: Performance & Behaviour

### Bandwidth Characteristics

The EFHW has moderate bandwidth on each band — typically narrower than a centre-fed dipole because the high-impedance feed point amplifies small reactance changes. Expect an SWR < 2:1 window of roughly 100–200 kHz on 40 m, widening to 400–600 kHz on 10 m (bandwidth scales with frequency).

The SWR curve is asymmetric: it rises more steeply above resonance than below. This means if you need to choose, cut the wire slightly long — it's easier to trim wire shorter than to add it back. Many modern transceivers include a built-in ATU (antenna tuning unit) that can compensate for moderate SWR — typically up to 3:1. If your radio lacks one, a small external ATU between the transceiver and coax will extend the usable bandwidth on each band and cover the non-harmonic WARC bands.

The unun itself has a frequency-dependent loss profile. A well-wound 49:1 on a Fair-Rite #43 or #61 mix toroid will show lowest loss on 20 m and 15 m, with higher losses at the band edges (40 m low end, 10 m high end). Cheap ununs on unsuitable cores are the single biggest source of EFHW performance complaints. Under-rated ununs are the second — a core sized for 100 W SSB will overheat rapidly on digital modes (FT8, JS8Call) where the duty cycle is near 100%. Digital operation at 50 W can stress a unun harder than SSB at 100 W. If you run digital modes, size the core for at least double your expected power.

<!-- XREF: curriculum L06 "Impedance" — for a full explanation of impedance, reactance, and SWR -->

### Harmonic Behaviour & Pattern Evolution

This is where the EFHW gets interesting — and where many operators are surprised by what their antenna is actually doing on higher bands.

At the fundamental frequency, the EFHW behaves identically to a half-wave dipole: a classic figure-8 pattern, broadside to the wire, with nulls off the ends. But on harmonics, the pattern fragments into multiple lobes. The number of lobes equals the harmonic number multiplied by two.

#### Harmonic Pattern Table

| Harmonic | Electrical Length | Total Lobes | Lobe Angle from Wire | Pattern Description |
|----------|------------------|-------------|----------------------|---------------------|
| **1st (fundamental)** | λ/2 | 2 | 90° (broadside) | Classic figure-8 perpendicular to wire |
| **2nd** | 1λ | 4 | ~45–50° | "X" pattern — radiation splits into four lobes at roughly 45° to the wire axis |
| **3rd** | 1.5λ | 6 | ~30–35° | Six tighter lobes; energy pulls toward the wire axis |
| **4th** | 2λ | 8 | ~25–30° | Highly multi-lobed with deep nulls; radiation increasingly end-fire |

#### Key Trends as Harmonic Number Increases

1. **Lobes multiply** — each harmonic adds two more lobes to the pattern
2. **Lobes narrow** — higher harmonics produce tighter, more directional lobes
3. **Lobes rotate toward the wire axis** — radiation shifts from broadside (perpendicular to wire) toward end-fire (along the wire)
4. **Nulls deepen** — the gaps between lobes become more pronounced, meaning more directions where the antenna is effectively deaf
5. **Gain per lobe increases** — the energy is concentrated into narrower beams, so peak gain in the main lobes is higher than the fundamental

**What this means in practice:** On 40 m (fundamental), your EFHW hears and transmits broadside — great for general coverage. On 10 m (4th harmonic), it has eight narrow lobes with significant gain in specific directions but deep nulls between them. You might work strong DX off one lobe while completely missing a station 20° away. Rotating the wire orientation (or accepting the pattern) is part of using an EFHW on harmonics.

<!-- VISUAL: Four-panel radiation pattern comparison. Each panel shows an azimuth plot (top-down view) of the EFHW at 1st, 2nd, 3rd, and 4th harmonics. Wire drawn as a horizontal line across each panel. Lobes in amber, nulls clearly marked. Labels: "2 lobes", "4 lobes", "6 lobes", "8 lobes". Progressive lobe narrowing and axis rotation should be visually obvious. Use consistent scale across all four panels. -->

<!-- XREF: curriculum L03 "Radiation Patterns" — for how to read radiation pattern plots -->

### Gain vs. Frequency

On the fundamental, the EFHW delivers the same 2.15 dBi as any half-wave dipole. On harmonics, the peak lobe gain increases because energy is concentrated into narrower beams — but only in the lobe directions. Between lobes, gain drops sharply.

| Band (40 m band EFHW) | Harmonic | Peak Lobe Gain (dBi) | Coverage Pattern |
|-------------------|----------|---------------------|------------------|
| 40 m (7 MHz) | 1st | ~2.15 | Broad, predictable |
| 20 m (14 MHz) | 2nd | ~3.5–4.0 | Four directions, moderate nulls |
| 15 m (21 MHz) | 3rd | ~4.5–5.0 | Six directions, noticeable nulls |
| 10 m (28 MHz) | 4th | ~5.5–6.5 | Eight directions, deep nulls |

> **Important:** These are free-space theoretical values. Real-world gain depends heavily on height above ground, ground quality, and surrounding objects. A low EFHW over poor ground will not achieve these figures.

### Environmental Sensitivity

**Height above ground** is the single biggest variable. The EFHW's pattern, gain, and impedance all change with height. Below λ/4, the antenna develops a high-angle radiation pattern (good for NVIS, poor for DX). At λ/2 height, the pattern compresses toward the horizon (ideal for DX). Most portable installations at 3–5 metres height are a compromise — acceptable on 20 m but suboptimal on 40 m where λ/4 is 10 metres.

**Trees and vegetation** affect the EFHW more than many operators expect. Wet foliage absorbs RF, particularly above 14 MHz. A wire draped through tree branches will show higher SWR after rain. If using a tree as a support, route the wire away from dense canopy where possible and accept that performance will vary with seasons and weather.

**Nearby metal** — the high-impedance end of the wire is particularly sensitive to nearby conductors. Metal roofing, gutters, fences, or other antennas within λ/4 of the high-Z end will detune the antenna and distort the pattern. Keep the high-Z end in the clear.

**Ground quality** matters less than for a vertical (which depends on ground for its return current) but still affects the radiation pattern, especially the elevation angle of the main lobe.

### Common Misconceptions

**"An EFHW is just a random wire with a tuner"** — No. An EFHW is a resonant antenna, deliberately cut to a half-wavelength. A random wire is non-resonant and requires a tuner on every band. The EFHW's transformer provides a fixed impedance match at resonant frequencies; a random wire needs an adjustable matching network. The distinction matters because resonant operation is more efficient and more predictable.

**"EFHWs don't need a ground or counterpoise"** — Misleading. They don't need a radial field like a vertical, but they absolutely need a counterpoise. Without one, the coax shield becomes the counterpoise by default, which causes common-mode current, RFI, and unpredictable SWR. The short counterpoise wire is not optional — it's a required part of the antenna system.

---

## STAGE 3: Practical Deployment

### Common Configurations

The same EFHW wire can be deployed in several configurations, each producing a different radiation pattern and trade-off between coverage and gain.

#### 1. Horizontal (Flat-Top)
Wire runs horizontally between two supports at equal height. Produces the cleanest theoretical patterns — the textbook multi-lobe shapes described in Stage 2. Best for consistent broadside coverage on the fundamental and predictable lobe directions on harmonics. Requires two elevated supports (trees, masts, building corners).

#### 2. Inverted-V
Centre of wire elevated (tree, mast), both ends slope down toward the ground. The drooping ends broaden the azimuth pattern toward omnidirectional at the cost of some gain — typically 1–2 dB less peak gain than flat-top. The elevation pattern tends toward higher angles, which helps NVIS/regional contacts but reduces DX performance. Most popular portable configuration because only one tall support is needed.

#### 3. Sloper
Wire runs at an angle from a high point to a lower point. Produces a pattern that favours one direction (roughly toward the low end of the wire). On harmonics, the sloped geometry creates a complex elevation profile with multiple high-angle lobes — a "cloverleaf" pattern. Useful when you want to favour a specific azimuth. The steeper the slope, the more directional the pattern becomes.

#### 4. L-Shape (Bent)
Wire makes a right-angle bend partway along its length (e.g., 15 m horizontal then 5 m vertical down a wall, or vice versa). The bend distorts the pattern and shifts the impedance slightly, but the antenna still functions. Common in space-constrained installations where a straight run isn't possible. Expect the SWR minimum to shift by 50–100 kHz from the straight-wire resonance.

### Configuration Comparison

| Configuration | Pattern (fundamental) | Peak Gain | DX Performance | Supports Needed | Best For |
|--------------|----------------------|-----------|----------------|-----------------|----------|
| **Horizontal** | Figure-8 broadside | Highest | Good (if height ≥ λ/4) | 2 at equal height | Fixed station, consistent patterns |
| **Inverted-V** | Near-omnidirectional | Moderate (−1–2 dB) | Fair | 1 tall centre support | Portable, general coverage |
| **Sloper** | Directional (toward low end) | Moderate | Good (one direction) | 1 high + 1 low anchor | Favouring a specific bearing |
| **L-Shape** | Distorted, unpredictable | Reduced | Variable | Flexible | Space-constrained sites |

<!-- VISUAL: Four-panel deployment diagram. Each panel shows a side-view silhouette of the configuration with a tree/mast as support. Wire in amber, ground line in grey, counterpoise in dashed cyan at feed point. Labels: "Horizontal", "Inverted-V", "Sloper", "L-Shape". Below each, a simplified azimuth pattern thumbnail showing the coverage shape. -->

### Matching & Feeding

**The unun** is the heart of the EFHW system. A 49:1 impedance ratio (7:1 turns ratio) is standard. The unun is wound on a ferrite toroid — core material and size matter significantly.

| Component | Recommended | Notes |
|-----------|-------------|-------|
| **Core material** | Fair-Rite #43 (low bands) or #61 (high bands) | #43 handles 40/20 m well; #61 better for 15/10 m; some designs use stacked or binocular cores |
| **Core size** | FT-140 (100 W) or FT-240 (200+ W) | Bigger core = lower loss, better power handling, but heavier |
| **Turns ratio** | 7:1 (49:1 impedance) | Primary: 2–3 turns, Secondary: 14–21 turns |
| **Compensation capacitor** | 100–150 pF across primary | Improves SWR on higher bands by compensating for unun leakage inductance |
| **Connector** | SO-239 (fixed), BNC (portable) | SO-239 is standard; BNC saves weight for SOTA/POTA |
| **Counterpoise** | 2–3 m insulated wire | Connected to coax shield side of unun; not a radial, just a common-mode return path |

**Coax selection:** RG-58 is adequate for portable use at 100 W on short runs (< 15 m). For fixed installations or longer runs, use RG-213 or LMR-400. Always include a common-mode choke (5–10 turns of coax on a FT-240-43 toroid, or a string of clip-on ferrites) at the unun end to keep RF off the coax shield.

<!-- VISUAL: Detailed unun schematic. Show toroid with primary (2–3 turns, thick wire) and secondary (14–21 turns, thinner wire) windings. Label: SO-239 connector at bottom, wire attachment point at top, compensation capacitor across primary, counterpoise connection at ground terminal. Colour: primary in amber, secondary in cyan, capacitor in purple. -->

<!-- XREF: curriculum L06 "Impedance" — for understanding why impedance transformation is needed -->

### Tuning Procedure

1. **Cut long.** Start with wire 5–10% longer than the calculated length. You can always trim shorter; you cannot un-cut wire.
2. **Deploy at operating height.** Tuning on the ground gives false readings — the ground couples to the wire and shifts resonance downward. Get the wire up first.
3. **Connect VNA or antenna analyser** at the unun. Sweep the lowest band (e.g., 7.0–7.3 MHz for 40 m).
4. **Find the SWR minimum.** If it's below your target frequency, the wire is too long — trim 2–3 cm at a time from the far (high-Z) end and re-sweep.
5. **Check all harmonic bands.** After achieving SWR < 2:1 on the fundamental, sweep 20 m, 15 m, and 10 m. Small adjustments to the compensation capacitor (if fitted) can improve higher-band SWR without affecting the fundamental.
6. **Check for common-mode current.** Place your hand near the coax at the unun. If SWR changes when you touch or move the coax, you have common-mode issues — add or improve the choke.
7. **Record your results.** Save SWR plots for each band. Note wire length, height, configuration, and weather conditions. This is your baseline for future troubleshooting.

> **Tip:** On a 40 m EFHW, trimming 1 cm of wire shifts resonance by approximately 5–10 kHz. On 10 m (4th harmonic), the same trim shifts resonance by roughly 20–40 kHz — four times the effect. Trim conservatively on the fundamental; check harmonics after every cut.

### Common Problems & Fixes

| Symptom | Likely Cause | Fix |
|---------|-------------|-----|
| SWR > 3:1 on all bands | Unun failure or wrong turns ratio | Check winding count; verify 49:1 ratio; test unun with a 2.7 kΩ resistor — should show ~55 Ω |
| SWR good on 40 m, high on 10 m | Unun leakage inductance; missing compensation cap | Add 100–150 pF capacitor across primary winding |
| SWR changes when touching coax | Common-mode current on shield | Add choke balun at unun; check counterpoise length and connection |
| SWR shifts after rain | Wire running through wet foliage | Re-route wire away from tree canopy; accept seasonal variation |
| SWR minimum 200 kHz too low | Wire too long | Trim 5–10 cm from high-Z end; re-measure |
| SWR minimum 200 kHz too high | Wire too short | Add wire (solder or crimp joint); use a tuner as temporary fix |
| Good SWR but poor reports | Pattern nulls in desired direction (harmonic) | Rotate wire orientation; try different configuration; check height |
| RF burn at feed point | High common-mode current | Add choke; improve counterpoise; ensure coax routes away from antenna at 90° |
| Unun runs hot on transmit | Core saturation or wrong mix | Use larger core (FT-240); verify mix (#43 or #61); reduce power and re-test |

### Multi-Band Operation Notes

Not all HF bands are harmonically related. An EFHW cut for 40 m covers:

| Band | Frequency | Harmonic | EFHW Coverage | Tuner Needed? |
|------|-----------|----------|---------------|---------------|
| **40 m** | 7.0–7.3 MHz | 1st (fundamental) | ✅ Full band | No |
| **20 m** | 14.0–14.35 MHz | 2nd | ✅ Full band | No |
| **15 m** | 21.0–21.45 MHz | 3rd | ✅ Full band | No |
| **10 m** | 28.0–29.7 MHz | 4th | ✅ Partial (SWR rises at band edges) | Possibly at extremes |
| **30 m** | 10.1–10.15 MHz | — | ❌ Non-harmonic | Yes |
| **17 m** | 18.068–18.168 MHz | — | ❌ Non-harmonic | Yes |
| **12 m** | 24.89–24.99 MHz | — | ❌ Non-harmonic | Yes |

For the WARC bands (30/17/12 m), you need a tuner. Some operators carry a small manual tuner for these bands and use the EFHW direct on the harmonic bands. Alternatively, a separate EFHW cut for 30 m gives harmonic coverage of 15 m and (approximately) 10 m.

An 80 m EFHW (approximately 40 m of wire) covers 80/40/20/15/10 m — five bands — but requires significantly more space and a taller support.

### Construction Materials & Sources

| Component | Specification | Typical Source |
|-----------|--------------|----------------|
| **Wire** | 0.5–1.0 mm² stranded or solid copper, PVC insulated | Electrical supplier; speaker wire works for portable |
| **Toroid core** | FT-140-43 (portable/QRP) or FT-240-43 (100 W) | Mouser, Farnell, TorroidKing, kitsandparts.com |
| **Winding wire** | 0.5–1.0 mm enamelled copper | Electronics supplier; magnet wire |
| **Compensation cap** | 100–150 pF ceramic, 1 kV+ rating | Standard electronics component |
| **Connector** | SO-239 or BNC chassis mount | Any RF connector supplier |
| **Enclosure** | Small ABS project box (~80 × 50 × 30 mm) | RS Components, Amazon, or 3D print |
| **Counterpoise** | 2–3 m insulated wire with ring terminal | Same wire stock as antenna element |
| **Winder/spool** | Lightweight line winder for portable use | Kite shops, fishing tackle, or 3D print |

**Estimated cost:** £15–30 for a complete 100 W EFHW system (wire + unun + enclosure + connector). Commercial equivalents (e.g., MyAntennas EFHW, Chameleon EMCOMM III) cost £80–200+.

### Comparison with Similar Types

| Feature | EFHW | Centre-Fed Dipole | Random Wire + Tuner | Vertical (λ/4) |
|---------|------|-------------------|---------------------|-----------------|
| **Supports needed** | 1 | 2 | 1 | 1 (self-supporting) |
| **Multi-band** | Yes (harmonics) | No (single-band) | Yes (with tuner) | Limited |
| **Tuner required** | No (harmonic bands) | No | Yes (always) | Yes (usually) |
| **Ground system** | Short counterpoise | Balanced feed, no ground | Ground/counterpoise | 16–120 radials |
| **Efficiency** | Good (0.5–1.5 dB unun loss) | Excellent (lowest loss) | Variable (tuner loss + mismatch) | Good (if radials adequate) |
| **Pattern control** | Predictable (configuration-dependent) | Predictable | Unpredictable | Omnidirectional |
| **Portable suitability** | Excellent | Good | Fair | Poor (radials) |
| **Complexity** | Low (wire + unun) | Lowest (wire + balun) | Medium (wire + tuner) | Medium (element + radials) |

> **When to choose an EFHW over a dipole:** When you have only one support point, need multi-band without a tuner, or want a portable antenna you can deploy solo. When space and supports aren't constrained, a centre-fed dipole is simpler and more efficient on a single band.

---

<!-- BUILD-GUIDE: blog/build-efhw.html -->
### Build One Yourself

Ready to build your own EFHW? The build guide walks through unun winding, wire preparation, testing, and deployment step by step with photos.

**→ [EFHW Build Guide](../blog/build-efhw.html)** *(coming soon)*

