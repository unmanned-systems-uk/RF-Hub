<!-- RF-Hub Full Licence Study — Chapter 11: Feeders and Antennas
     Exam weight: ~12–15% (~15 subsections, 9 pages — one of the heaviest chapters)
     Sub-sections: §11A free space/antenna interface, §11B coax, §11C open-wire,
                   §11D velocity factor, §11E baluns/ununs, §11F VSWR/standing waves,
                   §11G ground plane, §11H Yagi, §11I log-periodic, §11J 5/8 wave,
                   §11K folded dipole, §11L EFHW, §11M slot antenna,
                   §11N loading coils/traps, §11O ATU L/T/Pi
     Syllabus refs: 11A1–11O1 [VERIFY v1.6]
     RSGB source: Full Licence Manual 3rd ed. (G0HIQ), Ch 11, pp. 69–77
     New at Full: EFHW/slot/log-periodic, baluns in detail, ATU networks, loading coils
     Iframes: full-standing-wave-animator.html (§11F), full-atu-matcher.html (§11O)
-->

# §11 — Feeders and Antennas

This is one of the most practically important and heavily examined chapters. It covers the full chain from transmitter output to radiated wave: the cable that carries RF to the antenna, the antenna itself and why different designs behave differently, and the matching networks that reconcile impedance mismatches. Work through each section carefully — several of these topics appear in multiple exam questions.

---

## §11A — The Antenna as an Impedance Interface

### Free Space Impedance

Electromagnetic waves travelling through free space have a characteristic impedance set by the fundamental constants of physics:

```
η = √(μ₀ / ε₀) ≈ 377 Ω
```

This 377 Ω is the ratio of electric field strength to magnetic field strength in a plane wave in free space — it is as fixed as the speed of light. There is nothing an engineer can do to change it.

A transmitting antenna must bridge two worlds:
- The **feeder** side: a coaxial cable with 50 Ω characteristic impedance
- The **free-space** side: a radiation environment with 377 Ω intrinsic impedance

The antenna does this through its geometry. A half-wave dipole in free space presents a **radiation resistance** of approximately **73 Ω** at its feed point — not exactly 377 Ω, but a value set by the current distribution along the element. The dipole's physical structure controls how it couples to the propagating wave.

### Radiation Resistance

Radiation resistance (R_rad) is a fictitious but useful resistance: it represents the equivalent resistive load that would dissipate the same power as the antenna radiates. For a half-wave dipole in free space, R_rad ≈ 73 Ω. For shorter antennas, R_rad falls rapidly:

| Antenna type | Approx. R_rad |
|---|---|
| Half-wave dipole | ~73 Ω |
| Quarter-wave vertical (over perfect ground) | ~35 Ω |
| Short dipole (≤ 0.1λ) | < 5 Ω |
| 5/8-wave vertical | ~60 Ω |

A short antenna with R_rad of 1 Ω and a 10 Ω loss resistance in the loading coil is only ~10% efficient — most of the power heats the coil, not the air.

---

## §11B — Coaxial Feeder

### Construction and Characteristic Impedance

Coaxial cable has a central conductor surrounded by a dielectric (insulator), a braided outer conductor (screen), and a protective outer jacket. The screen carries the return current and shields the inner conductor from external interference.

The **characteristic impedance** Z₀ is set by the geometry of the conductors and the dielectric:

```
Z₀ = (138 / √ε_r) × log₁₀(D/d)   [Ω]
```

Where D = inner diameter of the screen, d = outer diameter of the inner conductor, ε_r = relative permittivity of the dielectric.

Common impedances:
- **50 Ω** — used throughout amateur radio and professional RF (the compromise between maximum power handling at ~30 Ω and minimum loss at ~77 Ω gives ~50 Ω as a standard)
- **75 Ω** — used in cable TV, satellite, and domestic TV installations; slightly lower loss than 50 Ω but with less power handling

### Feeder Loss

Coaxial cable loss increases with frequency (higher skin effect resistance) and with VSWR (reflected power makes multiple passes, each adding loss). Typical attenuation figures:

| Cable type | Loss at 10 MHz | Loss at 144 MHz | Loss at 432 MHz |
|---|---|---|---|
| RG58 (5 mm) | ~0.5 dB/10m | ~2.0 dB/10m | ~4.0 dB/10m |
| RG213 (10 mm) | ~0.2 dB/10m | ~0.8 dB/10m | ~1.6 dB/10m |
| LMR-400 (10 mm, foam) | ~0.1 dB/10m | ~0.4 dB/10m | ~0.7 dB/10m |
| Aircell-7 (7 mm, foam) | ~0.15 dB/10m | ~0.55 dB/10m | ~1.0 dB/10m |

At 144 MHz, a 30 m run of RG58 costs 6 dB — half the transmitter power. For VHF/UHF, feeder choice matters enormously.

---

## §11C — Open-Wire Feeder

### Why Open Wire?

Open-wire (ladder line) feeder uses two parallel conductors with a high impedance (300–600 Ω). The fields are concentrated *between* the conductors, with very little field at the conductor surfaces. Skin-effect loss is therefore much lower than coax at the same frequency, and the higher impedance line carries less current (for the same power), further reducing I²R loss.

At HF with high VSWR (as in a multiband dipole fed with ladder line), the feeder loss remains manageable where coax would waste significant power.

Common types:
| Type | Impedance | Velocity factor | Notes |
|---|---|---|---|
| 300 Ω ribbon (TV twin) | 300 Ω | 0.82 | Flat twin; moderate loss if wet |
| 450 Ω ladder line | 450 Ω | 0.91 | Open ladder spacers; low loss |
| 600 Ω open wire | 600 Ω | ~0.97 | Ceramic spacers; very low loss |

Open-wire feeder cannot be routed through buildings (fields are external), cannot be buried, and must be kept away from metal surfaces. It is fed into an ATU that converts the balanced high-impedance feeder to the transmitter's unbalanced 50 Ω output.

---

## §11D — Velocity Factor and Electrical Length

### Velocity Factor

A signal in a cable travels slower than in free space because the dielectric slows the wave. The **velocity factor (VF)** is the ratio of the signal's speed in the cable to the speed of light:

```
VF = v / c   (dimensionless, typically 0.66–0.97)
```

Typical values: solid polyethylene (RG58, RG213) VF ≈ 0.66; foam polyethylene (LMR-400, Aircell-7) VF ≈ 0.80–0.85; PTFE VF ≈ 0.70; open ladder line VF ≈ 0.91–0.97.

### Electrical Length

The electrical length of a cable is its physical length expressed as a fraction of the signal's wavelength *in that cable*:

```
λ_cable = (300 / f_MHz) × VF   [metres]
```

A quarter-wave matching section at 144 MHz in RG58 (VF 0.66):
```
λ_cable/4 = (300 / 144) × 0.66 / 4 = 0.344 m ≈ 34.4 cm
```

The free-space quarter-wave at 144 MHz is 52 cm — the cable is physically shorter but electrically the same length.

Velocity factor matters for:
- **Stubs** — shorted or open-circuited lengths of cable used as reactive elements; length must account for VF
- **Phasing harnesses** — cables used to feed antenna arrays with a specific phase delay
- **λ/4 transformers** — a quarter-wave section transforms impedance: Z_in = Z₀² / Z_load

---

## §11E — Baluns and Ununs

### The Balance Problem

A dipole is a **balanced** antenna — the two arms carry equal and opposite currents, and neither is connected to ground. Coaxial cable is **unbalanced** — the inner conductor carries signal, the outer braid carries return current but is also a conductor that can support common-mode (in-phase) current.

If coax is connected directly to a dipole with no balun:
- The braid current splits: some flows as intended along the outer surface of the braid, but some also flows **back down the outside** of the coax toward the transmitter
- This common-mode current makes the feeder radiate, distorting the antenna pattern and potentially bringing RF back into the shack
- The antenna's feed-point impedance is also shifted unpredictably

### 1:1 Current Balun (Choke Balun)

A **choke balun** presents high impedance to common-mode current without transforming impedance. The simplest version is several turns of the coaxial cable wound into a coil (a common-mode choke). Alternatively, a toroidal ferrite core threaded with the coax suppresses common-mode current on the outer surface.

It does **not** transform impedance (1:1) — it only suppresses the common mode. Used at:
- Dipole centre feeds (50 Ω dipole to 50 Ω coax)
- Yagi driven elements when 50 Ω split-dipole is used
- Any coax-to-balanced antenna feed where no impedance step is needed

### 4:1 Voltage Balun

A **4:1 balun** transforms impedance by a factor of 4 (e.g. 200 Ω balanced to 50 Ω unbalanced). It is wound on a ferrite toroid and uses transmission-line windings. Used at:
- Folded dipole feeds (~280 Ω → 50 Ω via 4:1 + slight mismatch, or → 75 Ω via 4:1 exactly)
- EFHW matching transformers (see §11L)
- Long-wire antennas requiring impedance step-down

There are two sub-types: **Guanella** (current balun, better for high VSWR) and **Ruthroff** (voltage balun, simpler construction but performance degrades at high VSWR).

### Unun

An **unun** (unbalanced-to-unbalanced transformer) transforms impedance without balancing. Common ratios:
- **9:1 unun**: ~2450 Ω → 50 Ω (used in EFHW transformers — see §11L)
- **4:1 unun**: used with random-wire end-fed antennas
- **1.5:1 or 2:1**: used for modest impedance shifts in vertical antennas

---

## §11F — VSWR and Standing Waves

### Matched and Mismatched Lines

When a transmission line is terminated in its characteristic impedance Z₀, all incident power is absorbed by the load and no energy is reflected. The voltage and current are uniform along the line.

When the load impedance Z_L ≠ Z₀, some energy is reflected. The incident and reflected waves superimpose to form a **standing wave** — a pattern of voltage and current maxima (antinodes) and minima (nodes) that repeats every half-wavelength along the line.

### Reflection Coefficient and VSWR

The **reflection coefficient** Γ measures how much of the incident wave is reflected:

```
Γ = (Z_L − Z₀) / (Z_L + Z₀)
```

|Γ| ranges from 0 (perfect match) to 1 (total reflection: open or short circuit).

**Voltage Standing Wave Ratio (VSWR)** is the ratio of voltage maximum to voltage minimum along the line:

```
VSWR = (1 + |Γ|) / (1 − |Γ|)
```

VSWR ranges from 1:1 (perfect match) to ∞:1 (open or short).

**Reflected power** as a percentage of incident power:

```
P_reflected = |Γ|² × 100%
```

| VSWR | |Γ| | % Power reflected |
|---|---|---|
| 1:1 | 0 | 0% |
| 1.5:1 | 0.200 | 4% |
| 2:1 | 0.333 | 11% |
| 3:1 | 0.500 | 25% |
| 5:1 | 0.667 | 44% |
| ∞:1 | 1.000 | 100% |

A 2:1 VSWR reflects only 11% of power — the direct loss is modest. However, high VSWR multiplies feeder loss significantly, because the reflected power travels back through the lossy cable a second time.

### Practical VSWR Effects

- **Feeder heating**: power lost on each pass; at VSWR 5:1, a 1 dB/100m cable becomes ~3 dB effective loss
- **Voltage peaks**: a shorted λ/4 stub has a voltage antinode at the feed end; at QRO power levels, cable voltage rating may be exceeded
- **Transmitter protection**: most modern transceivers fold back power above VSWR ~2–3:1 to protect the PA

> [INFO] **11F1:** VSWR measures the mismatch between feeder and load. VSWR = (1+|Γ|)/(1−|Γ|). A 2:1 VSWR reflects only ~11% of power directly, but increases feeder loss on all passes. High VSWR is most damaging in lossy feeders (thin coax at VHF) or at high power.

### Standing Wave Visualiser

Use the interactive below to see how voltage and current standing wave patterns change with VSWR, and how a matched line compares to a mismatched one:

<iframe src='/interactives/full-standing-wave-animator.html' style='width:100%; height:700px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='Standing Wave Animator'></iframe>

---

## §11G — Ground Plane and Counterpoise

### Quarter-Wave Vertical

A quarter-wave vertical is half a dipole — it needs a return current path to complete the circuit. Over a perfect conducting ground plane (infinite flat conductor), the ground acts as a mirror: the antenna 'sees' its own image, completing the equivalent dipole. Radiation resistance ≈ 35 Ω (half of the dipole's 73 Ω).

In practice, a ground plane is approximated by:
- **Buried radials** — typically 16–32 radials of λ/4 length, improving ground conductivity immediately beneath the antenna base; radiation resistance rises slightly toward 35–40 Ω
- **Elevated radials** — 3–4 radials mounted at the antenna base, angled at ~45° below horizontal; with 4 radials the impedance rises to ~50 Ω (good match to coax without a matching network)
- **Vehicle body** — mobile whip on a car roof; asymmetric ground plane, but adequate at VHF/UHF

### Counterpoise

An elevated ground plane antenna relies on a **counterpoise** — a deliberate conductor (or set of conductors) acting as the RF return path. The counterpoise floats at RF (not connected to earth) and must be long enough to carry the return current without excessive loss resistance. If no counterpoise exists, the feeder outer braid carries return current and the feeder radiates, dragging RF back into the shack.

---

## §11H — The Yagi–Uda Antenna

### Operating Principle

A Yagi uses **parasitic** elements — directors and a reflector — to shape the radiation pattern of a driven dipole. No power is fed directly to the parasitic elements; they intercept and re-radiate the driven element's field, adding constructively in one direction and destructively in others.

- **Reflector**: slightly longer than λ/2 (inductive), placed behind the driven element; reflects energy forward
- **Driven element**: fed directly; length ≈ λ/2 (adjusted for element diameter and mounting)
- **Directors**: slightly shorter than λ/2 (capacitive), placed in front; focus energy in the forward direction

Additional directors increase forward gain and narrow the beamwidth, but each successive director adds less gain than the one before.

### Gain and Front-to-Back Ratio

| Configuration | Approx. gain (dBd) | F/B ratio |
|---|---|---|
| Dipole alone | 0 dBd | — |
| 2-el (refl + driven) | ~4 dBd | ~10 dB |
| 3-el | ~6–7 dBd | ~15–20 dB |
| 5-el | ~8–9 dBd | ~20–25 dB |
| 10-el | ~12–13 dBd | ~25 dB |

(dBd = gain relative to a dipole; dBi = gain relative to an isotropic radiator; 0 dBd = 2.15 dBi)

**Front-to-back ratio** is the ratio of forward gain to rearward (180°) gain. A high F/B ratio is important for avoiding interference from the rear; typical well-designed Yagis achieve 20–25 dB.

### Impedance and Matching

The feed impedance of a split-dipole Yagi driven element is typically 25–30 Ω (lowered from 73 Ω by coupling to the parasitic elements). Options:
- **λ/4 matching section**: a 37 Ω coax section transforms 25 Ω to 50 Ω (Z₀ = √(25 × 50) ≈ 35 Ω — closest standard is 37.5 Ω, or use RG-59/75 Ω with two sections)
- **Folded dipole driven element**: raises impedance by 4× to ~100-280 Ω; use 4:1 balun to 50 Ω
- **Gamma match or delta match**: mechanical matching without a balun

---

## §11I — Log-Periodic Dipole Array (LPDA)

### Principle

A log-periodic dipole array consists of a series of dipoles of decreasing length along a boom, connected alternately (each element's phase is reversed relative to its neighbour). At any given frequency, the set of elements near resonance forms an **active region** that radiates; elements in front are too short to resonate and act as directors; elements behind are too long and act as reflectors.

As frequency changes, the active region moves along the boom — the same self-similar structure repeats at logarithmically spaced intervals.

### Properties

- **Wide bandwidth**: a single LPDA can cover 3–30 MHz or 50–470 MHz with consistent gain and impedance
- **Gain**: typically 6–8 dBd — less than a Yagi of equivalent boom length at a single frequency, but consistent across the whole band
- **Impedance**: typically 50–75 Ω across the operating range; can be fed directly with coax
- **Narrower beamwidth options**: for high gain at a specific frequency a Yagi is better; for frequency agility across a range the LPDA wins

**Typical uses**: HF multiband beam antennas covering multiple amateur bands; EMC test antennas (requiring known, constant gain vs frequency); TV aerials covering the full UHF band.

---

## §11J — The 5/8 Wave Antenna

A 5/8-wave vertical is 0.625λ in electrical length, longer than a quarter-wave. Compared to a quarter-wave vertical:
- Radiation resistance ≈ **50–60 Ω** (closer to coax than a quarter-wave's 35 Ω)
- The radiation pattern tilts toward the horizon (lower angle of radiation) — better for mobile and DX work
- Gain ≈ **+3 dBd** over a quarter-wave vertical
- The antenna has significant capacitive reactance at the feed point — a **series inductance** (base loading coil) cancels this reactance to achieve resonance

The inductor (typically a few µH) is placed at the base of the antenna. This is a loading coil used for matching, not for shortening (see §11N). The result is a 50–75 Ω near-resistive feed point — easily matched to coax.

5/8-wave whips are standard for VHF/UHF mobile (2 m, 70 cm), providing the low radiation angle needed for coverage along roads and in urban areas.

---

## §11K — Folded Dipole

### Construction

A folded dipole consists of a half-wave conductor bent into a loop: both ends of the dipole are connected by a second parallel conductor, and the feed is applied across a break in one conductor at the centre.

Both conductors carry current, but in the outer conductor the current doubles back. The combined effect raises the feed-point impedance by a factor of approximately 4:

```
Z_folded ≈ 4 × Z_dipole ≈ 4 × 73 Ω ≈ 280–300 Ω
```

### Properties

- **Impedance ≈ 280 Ω**: matches 300 Ω ribbon or via 4:1 balun to 75 Ω coax (6:1 for 50 Ω)
- **Slightly broader bandwidth** than a simple dipole — the two conductors lower the Q slightly
- **Standard as a Yagi driven element**: the higher impedance is useful because parasitic coupling in a Yagi lowers the driven element impedance; starting at 280 Ω leaves room to drop to ~100–150 Ω, still matchable with a 4:1 balun and 50 Ω coax

---

## §11L — End-Fed Half-Wave (EFHW)

### Why End-Fed?

A half-wave dipole fed at its centre has a convenient feed impedance of ~73 Ω. Fed at one end (a voltage antinode), the impedance is very high — typically **2,000–5,000 Ω** depending on the environment. An end-fed half-wave is popular for portable and SOTA operation because:
- No balun required at the centre of a long antenna
- One end of the antenna can be low or coiled near the ground; the radiating element hangs in the air
- The coax can run away from the antenna without a balun (though it will still carry common-mode current)

### 49:1 Unun Transformer

To match 2,450 Ω to 50 Ω, a **49:1 unun** is wound on a ferrite toroid (FT-240-43 or similar):

```
Impedance ratio = (N_primary / N_secondary)² = 49
→ turns ratio = 7:1 (e.g., 2 turns primary, 14 turns secondary)
```

Some designs use a **64:1 unun** (8:1 turns ratio) for higher-impedance EFHW antennas.

### Multiband Operation

An EFHW cut for 40 m (20.1 m physical) is also a full-wave on 20 m, a 1.5-wave on 15 m, and a 2-wave on 10 m — all resonant harmonically. A single antenna can be used on four bands without retuning (the 49:1 unun presents an acceptable match on all bands).

### Common-Mode Issues

The 49:1 unun is **not** a current balun — common-mode current still flows on the coax braid. Without a separate choke balun on the coax close to the unun, the feeder radiates and RF appears in the shack. A common cure is to wind 8–10 turns of coax on a ferrite toroid (FT-240-31 or similar) immediately at the unun output to suppress common-mode current.

> [INFO] **11L1:** An EFHW antenna has a very high impedance (~2,450 Ω) at the feed end. A 49:1 unun (7:1 turns ratio) matches this to 50 Ω coax. The same antenna is resonant on harmonically related bands (40/20/15/10 m). A separate common-mode choke is needed on the coax to prevent feeder radiation.

---

## §11M — Slot Antenna

A slot antenna is the electromagnetic **complement** of a dipole. Where a dipole is a thin conductor in free space, a slot is a thin aperture cut in a conducting surface.

By **Babinet's principle**, the electric and magnetic fields of a slot are swapped relative to those of the complementary dipole. The impedance of a resonant slot in an infinite ground plane is:

```
Z_slot = η² / (4 × Z_dipole) = 377² / (4 × 73) ≈ 486 Ω
```

In practice, a slot cut in a finite conducting panel has an impedance in the range 50–200 Ω depending on shape, and can be matched directly.

**Applications:**
- **Aircraft**: flush-mounted (low drag); the aircraft skin forms the ground plane
- **Marine VHF**: hidden slot in the fibreglass hull or mast; low profile
- **Mobile phones**: slot cut in metal frame of the device; allows a metal-bodied phone to have an effective antenna
- **Waveguide slot arrays**: slots cut in the broad face of a rectangular waveguide to radiate controlled patterns (used in radar)

---

## §11N — Loading Coils and Trap Antennas

### Why Load?

A full-size quarter-wave vertical on 80 m (3.5 MHz) would be 21 m tall. A mobile whip of practical length (1–2 m) is electrically very short — it looks capacitive and has very low radiation resistance. A **loading coil** adds inductance to cancel the capacitive reactance and resonate the antenna at the operating frequency.

### Types of Loading

**Base loading**: the coil is at the bottom of the antenna. Easiest to mount and adjust. Disadvantage: the coil sees maximum current (high I²R loss); also the current node is effectively moved up, reducing the effective height and radiation resistance.

**Centre loading**: the coil is placed part-way up the element (typically 40–50% of the way up). Current distribution is better preserved, so radiation resistance and efficiency are higher than base loading. Standard for high-performance mobile HF antennas.

**Top loading**: a capacitance hat (radial spokes) at the top of the antenna raises the effective height and capacitance, reducing the inductance needed in the coil. Top-loaded verticals approach full-size efficiency.

### Coil Q and Efficiency

A loading coil has loss resistance due to the finite Q of the wire. If R_rad = 3 Ω and the coil loss resistance R_loss = 10 Ω, then:

```
Efficiency = R_rad / (R_rad + R_loss) = 3 / 13 ≈ 23%
```

High-Q coils (silver-plated, air-spaced, large diameter) are essential for HF mobile antenna efficiency. Q values of 300–500 are achievable with good construction.

### Trap Antennas

A **trap** is a parallel L/C resonant circuit (tuned to a specific frequency) inserted into an antenna element. At the trap's resonant frequency, it presents high impedance — effectively an open circuit — which electrically shortens the antenna and prevents current flowing into the outer section. Below trap frequency, the inductance in the trap acts as a loading coil, allowing the outer section to extend the effective electrical length.

This is how a trap dipole (or trap vertical) operates on multiple bands:
- On the upper band: trap resonates, acting as an open circuit; inner section radiates
- On the lower band: trap is inductive below resonance; outer section adds electrical length

---

## §11O — ATU Networks: L, T, and Pi

An **Antenna Tuning Unit (ATU)** — more accurately called an Antenna Matching Unit — transforms the impedance presented by the feeder to the 50 Ω the transmitter expects. It does **not** fix the VSWR on the feeder between itself and the antenna; it only ensures the transmitter sees a 50 Ω match at its output.

> **Critical point:** Fitting an ATU and getting the transmitter SWR to 1:1 does not reduce losses on a high-VSWR feeder. The feeder still has elevated loss due to the standing waves. ATUs are most efficient when the feeder is low-loss (open wire) or when antenna resonance is close.

### L-Network

```
                    series element
    TX ────[L or C]──────────┬──── ANT
                              |
                         shunt element
                              |
                             GND
```

An L-network uses two reactive elements — one series, one shunt. It can match any source impedance to any load impedance, but only in one direction (high-to-low or low-to-high, depending on shunt element position).

- **High-pass L** (series cap, shunt inductor): most common; passes RF, blocks DC; some harmonic suppression
- **Low-pass L** (series inductor, shunt cap): passes RF, attenuates harmonics strongly
- Low loss, simple, but offers no Q adjustment

### T-Network

```
    TX ──[series 1]──┬──[series 2]── ANT
                      |
                  shunt element
                      |
                     GND
```

A T-network has two series elements and one shunt element. The Q factor of the network is independently adjustable (within limits), allowing the user to choose between maximum efficiency (low Q) and better harmonic suppression (higher Q). Most commercial ATUs (MFJ, LDG, etc.) use a high-pass T-network (two series capacitors, shunt inductor).

- Very wide matching range
- At high Q, harmonic suppression is significant
- At very high Q, circulating currents cause increased coil loss — don't use more Q than needed

### Pi-Network

```
    TX ──┬──[series L]──┬── ANT
          |              |
      shunt C        shunt C
          |              |
         GND            GND
```

A Pi-network has two shunt elements and one series element. It is inherently a **low-pass** filter, providing excellent harmonic attenuation. PA output circuits in valve and some transistor amplifiers use a Pi-network for both matching and harmonic filtering. It can match a high-impedance PA output (valve: 2–5 kΩ) down to 50 Ω across a wide impedance range.

| Network | Topology | Harmonic suppression | Typical use |
|---|---|---|---|
| L | series + shunt | Low | Simple antenna coupler, amplifier stages |
| T (high-pass) | shunt + series + shunt | Medium (adjustable Q) | Commercial ATU, covers wide impedance range |
| Pi (low-pass) | series + shunt + shunt | High (intrinsic LPF) | PA output stage, linear amplifiers |

### ATU Matching Visualiser

Experiment with L, T, and Pi matching as you tune the ATU in the interactive below:

<iframe src='/interactives/full-atu-matcher.html' style='width:100%; height:750px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='ATU Matcher'></iframe>

---

## §11P — Self-Check Questions

**Q1.** A half-wave dipole in free space has a radiation resistance of approximately 73 Ω, yet free space has an impedance of 377 Ω. Explain why these are different.

<details><summary>Answer</summary>

The 377 Ω is the intrinsic impedance of free space — the ratio of E-field to H-field in a plane wave propagating through vacuum. The 73 Ω radiation resistance of a dipole is the equivalent resistance representing radiated power for the current distribution along the dipole's conductors. The antenna's geometry, not the medium, sets the radiation resistance; the dipole is not a uniform field interface — it concentrates and shapes the electromagnetic field in a specific pattern that results in 73 Ω at the feed point.
</details>

---

**Q2.** A coaxial feeder has VSWR 3:1. What percentage of the incident power is reflected?

<details><summary>Answer</summary>

|Γ| = (VSWR − 1) / (VSWR + 1) = 2/4 = 0.5

P_reflected = |Γ|² = 0.5² = **0.25 = 25%**

Three-quarters of the power is still absorbed by the load, but 25% returns through the feeder, increasing effective feeder loss.
</details>

---

**Q3.** Why is a balun needed when feeding a dipole with coaxial cable?

<details><summary>Answer</summary>

A dipole is a balanced antenna; coax is unbalanced (the braid is referenced to ground at the transmitter end). Without a balun, common-mode current flows back down the outer surface of the coax braid, which is no longer simply a return path but an additional radiating element. This distorts the antenna pattern, introduces RF into the shack, and shifts the measured feed impedance. A 1:1 choke balun suppresses the common-mode current without transforming impedance.
</details>

---

**Q4.** A 5/8-wave whip needs a series inductor at its base. What is the purpose of this inductor?

<details><summary>Answer</summary>

A 5/8-wave antenna is longer than a quarter-wave, which makes it **capacitively reactive** at the feed point. The series inductor cancels this capacitive reactance, producing a near-resistive feed impedance of approximately 50–60 Ω — suitable for direct connection to 50 Ω coax. Without the matching inductor, the antenna would be a very poor match and VSWR would be high.
</details>

---

**Q5.** What is the difference between a 4:1 balun and a 49:1 unun, and where would each be used?

<details><summary>Answer</summary>

A **4:1 balun** transforms impedance by a factor of 4 *and* converts between balanced and unbalanced circuits. It is used where a balanced antenna (folded dipole, ~280 Ω) needs to connect to unbalanced 75 Ω coax.

A **49:1 unun** transforms impedance by a factor of 49 between two *unbalanced* circuits — there is no balancing action. It is used at the feed point of an end-fed half-wave antenna (~2,450 Ω) to match to 50 Ω coax. Because it provides no common-mode suppression, a separate coax choke is still needed to prevent the feeder radiating.
</details>

---

**Q6.** An ATU is connected between a transmitter and a long wire antenna via coax. The ATU is adjusted for 1:1 VSWR at the transmitter. Is there still a VSWR on the feeder?

<details><summary>Answer</summary>

**Yes.** The ATU presents a matched 50 Ω impedance to the transmitter, but it does not change the impedance mismatch between the feeder and the antenna. The VSWR on the coax between ATU and antenna is unchanged — potentially still very high. The feeder loss at that high VSWR remains elevated. The ATU protects the transmitter's PA and allows it to operate at full power, but it does not improve feeder efficiency. This is why open-wire (low-loss) feeders are preferred when feeding mismatched antennas through an ATU.
</details>

---

**Q7.** Compare the operating principle of a Yagi with a log-periodic dipole array. Under what conditions would you choose one over the other?

<details><summary>Answer</summary>

A **Yagi** uses fixed-length parasitic elements (one reflector, multiple directors) that are optimised for a single frequency or narrow band. It achieves high gain for its boom length but is only effective across a few percent of bandwidth.

A **log-periodic** uses multiple dipoles of different resonant lengths along a boom. The active region (set of resonant elements) shifts along the boom as frequency changes, maintaining near-constant gain and impedance across a wide bandwidth (decade range possible).

Choose a **Yagi** for maximum gain on a single band (DX contest stack on 20 m, 144 MHz EME). Choose an **LPDA** where consistent performance across a wide frequency range is needed (multiband HF beam, EMC test antenna, TV receiving aerial covering all UHF channels).
</details>
