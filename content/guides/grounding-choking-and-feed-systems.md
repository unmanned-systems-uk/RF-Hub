# Grounding, Choking, and Feed Systems — Putting It All Together

**Type:** Cross-curriculum practical guide  
**Prerequisites:** Lesson 1 (EM Radiation basics), familiarity with impedance concept  
**Curriculum Links:** Unit 2 Lessons 6 (Impedance), 7 (SWR), 15 (Matching) · Unit 3 Lessons 11–12  
**Equipment Context:** Any coax-fed antenna system; EFHW examples use 49:1 UNUN  
**Also serves as:** Unsquelched blog post — *"EFHW for Reception and Remote SDR"*  
**Estimated Time:** 40 minutes theory + practical reference

---

## Overview

Every station faces two problems at the point where the antenna feedline enters the shack:

1. **Safety** — lightning, static build-up, and fault currents need a low-impedance path to earth.
2. **Noise** — common-mode currents riding the outside of the coax need to be stopped before they reach your receiver.

Grounding solves the first. Choking solves the second. Neither can do the other's job. This guide explains why, then applies both techniques to real EFHW antenna scenarios — including a remote SDR deployment where getting this right makes or breaks your receive performance.

---

## Part 1 — The Fundamentals

### 1.1 What Grounding Actually Does

A ground bond connects the coax shield (and any other metalwork) to earth via a low-impedance conductor — typically heavy copper braid or strap bolted to a ground rod or plate.

At DC and very low frequencies this works exactly as intended. The ground strap has negligible resistance — a few milliohms — so any fault current, static discharge, or lightning transient takes the easy path straight to earth rather than flowing through your equipment.

This is primarily a **safety** measure. It does three things:

- **Lightning protection** — provides a preferred discharge path before energy reaches equipment.
- **Static bleed-off** — prevents charge accumulation on the antenna and feedline.
- **Equipotential bonding** — ensures all metalwork in the shack sits at the same potential, preventing ground loops and shock hazards.

What grounding does *not* do is filter, attenuate, or block RF signals. It simply provides a path. At DC, that path has very low impedance. The question is: what happens to that path as frequency increases?

### 1.2 Why Your Ground Strap Disappears at RF

This is where impedance, reactance, and inductance come together in a practical way that matters.

A copper ground strap is not a perfect conductor. It is a physical object with length, width, and cross-section — and any conductor with length has **inductance**. Even a flat, wide braid has inductance; it's reduced compared to a round wire, but it's never zero.

The impedance of an inductor is:

> **Z = 2π × f × L**

Where *f* is frequency in hertz and *L* is inductance in henries.

At DC (*f* = 0), the impedance is zero — just the DC resistance of the copper, which is negligible. This is why grounding works perfectly for safety.

But watch what happens as frequency rises:

| Ground strap | Inductance | Impedance at DC | Impedance at 7 MHz | Impedance at 145 MHz |
|---|---|---|---|---|
| 30 cm braid, 25 mm wide | ~200 nH | ~0 Ω | ~9 Ω | ~182 Ω |
| 30 cm round wire, 2 mm | ~350 nH | ~0 Ω | ~15 Ω | ~319 Ω |
| 1 m round wire, 2 mm | ~1 µH | ~0 Ω | ~44 Ω | ~912 Ω |

At 145 MHz, even a short, wide ground braid presents ~180 Ω to RF currents. A metre of wire looks like nearly a kilohm. The ground path that was invisible at DC has become a brick wall at VHF.

This is the key insight: **the ground strap is frequency-dependent**. It's a near-perfect path at DC and a near-useless path at VHF/UHF. Common-mode RF current sees the rising impedance, shrugs, and flows wherever it finds a lower-impedance alternative — which is usually straight into your shack wiring.

> **📚 Curriculum link:** This is inductive reactance (X_L = 2πfL) in action. See Unit 2, Lesson 6 (Impedance) for the full treatment. The ground strap example is one of the most practical demonstrations of why reactance matters.

#### Skin Effect Adds to the Problem

At RF frequencies, current doesn't flow through the full cross-section of a conductor. It crowds to the surface — **skin effect**. The higher the frequency, the thinner the conducting layer.

At 7 MHz, the skin depth in copper is about 25 µm. At 145 MHz, it's about 5.5 µm. Your thick ground braid might look reassuringly chunky, but RF current is only using a microscopically thin surface layer. The effective resistance rises, and the effective cross-section shrinks.

For grounding, skin effect is a secondary factor — the dominant problem is inductive reactance, which rises linearly with frequency. But skin effect compounds it, further degrading the ground path's effectiveness at RF.

> **📚 Curriculum link:** Skin effect becomes important again in Unit 2 Lesson 6 when we discuss why conductor surface area matters for antennas and transmission lines.

### 1.3 Common-Mode Current — The Unwanted Passenger

To understand why choking matters, you need to understand what it's choking.

A coaxial cable is designed to carry a **differential-mode** signal: current flows up the centre conductor and returns on the inside surface of the shield. The fields are contained within the cable. The outside world sees nothing — this is why coax is a shielded transmission line.

But a second, unwanted current can also flow — on the **outside surface** of the shield. This is **common-mode** current. It's not part of the wanted signal. It's current that has found the outer shield to be a convenient conductor and is using it as a wire.

Where does common-mode current come from?

- **Antenna imbalance** — any antenna that doesn't present a perfectly balanced load to the feedpoint will drive some current onto the outer shield. End-fed antennas are the worst offenders because they are fundamentally unbalanced by design.
- **Near-field coupling** — the feedline passes through the antenna's near field and picks up energy directly.
- **Ground-loop paths** — differences in potential between the antenna ground and shack ground create circulating currents.
- **External noise sources** — nearby electronics, power lines, and switching supplies radiate fields that induce current on the outer shield.

Common-mode current is a problem because it **turns your coax into an antenna**. The outside of the shield radiates (on transmit) and receives (on receive). On receive, this means your feedline is picking up every noise source it passes near — mains wiring, ethernet cables, switch-mode power supplies, LED drivers — and delivering that noise directly to your receiver input.

> **📚 Curriculum link:** The distinction between inside and outside shield currents is a direct consequence of skin effect at RF. At HF and above, the inner surface and outer surface of the coax shield are effectively separate conductors. Current on the inside cannot "see" current on the outside. This is covered in Unit 2, Lesson 6.

### 1.4 What a Choke Actually Does

A common-mode choke presents high impedance to common-mode current while leaving differential-mode current unaffected.

The most common form is a **choke balun** — several turns of coax wound on a ferrite toroid or threaded through ferrite rings. The key to how it works:

- **Differential-mode current** (wanted signal): The current in the centre conductor and the return current on the inner shield are equal and opposite. Their magnetic fields cancel inside the ferrite. The ferrite doesn't see them. The choke is invisible to the wanted signal.
- **Common-mode current** (unwanted): Current on the outer shield flows in one direction only — there is no cancelling return current. The ferrite *does* see this current. The inductance and resistive losses of the ferrite core present a high impedance (typically 500–5000 Ω depending on design) that blocks the common-mode current.

The choke is essentially a frequency-selective filter that operates only on common-mode energy. It attenuates rather than diverts — the unwanted current is dissipated as heat in the ferrite or simply prevented from flowing.

A good choke provides high impedance (>500 Ω) across its design bandwidth. The impedance is a combination of reactance (X_L) and resistance (R), both contributed by the ferrite material. Different ferrite mixes are optimised for different frequency ranges:

| Ferrite Mix | Effective Range | Typical Use |
|---|---|---|
| Mix 31 (MnZn) | 1–30 MHz | HF chokes, EFHW UNUNs |
| Mix 43 (NiZn) | 10–300 MHz | VHF chokes, general purpose |
| Mix 61 (NiZn) | 200 MHz–1 GHz | UHF/microwave suppression |

> **📚 Curriculum link:** This is impedance matching (Unit 2, Lesson 15) in reverse — instead of matching impedances to maximise power transfer, we're deliberately creating a mismatch to block unwanted current.

### 1.5 Grounding + Choking: Complementary in the Frequency Domain

Now we can answer the original question: **which one do you need?**

Both. They are not alternatives — they are complementary, and they divide their responsibilities across the frequency spectrum:

| Threat | Frequency range | Ground bond | Choke |
|---|---|---|---|
| Lightning strike | DC impulse / broadband | ✅ Primary defence | ❌ Will arc across or burn out |
| Static build-up | DC | ✅ Bleeds to earth | ❌ No effect on DC |
| Equipotential bonding | DC / mains (50/60 Hz) | ✅ Full protection | ❌ No effect at power frequencies |
| Common-mode RF noise | HF (3–30 MHz) | ⚠️ Strap impedance rising | ✅ High impedance blocks CM current |
| Common-mode RF noise | VHF (30–300 MHz) | ❌ Strap impedance too high | ✅ Primary defence |
| Common-mode RF noise | UHF (300+ MHz) | ❌ Useless | ✅ With correct ferrite mix |

Think of it as **frequency-domain handover**. The ground bond handles everything at the bottom end — DC, transients, safety. As frequency rises and the ground strap's impedance climbs, the choke takes over and handles the RF common-mode suppression.

**The standard installation at a shack entry panel is:**

1. All coax shields bonded to a single-point earth (ground bus bar on the entry panel).
2. Common-mode choke on the shack side of the ground bond, as close to the entry point as practical.

The ground catches what the choke can't handle (transients, static, safety). The choke catches what the ground can't handle (RF common-mode). Together, full-spectrum protection.

<!-- VISUAL: frequency-domain-handover
Dual-axis chart showing impedance vs frequency (1 kHz to 500 MHz, log scale):
  Line 1 (green): Ground strap impedance — starts near 0 Ω, rises linearly with frequency (Z = 2πfL). Effectively flat near zero until ~1 MHz, then climbing steeply.
  Line 2 (amber): Choke impedance — near zero at low frequencies, rising through the ferrite's effective range, peaking in the HF/VHF region (500–3000 Ω), then rolling off at UHF.
  
  Shaded region below each curve:
    Green shading under the ground line at low frequencies — "Ground handles this"
    Amber shading under the choke line at RF frequencies — "Choke handles this"
    Overlap zone in the middle where both contribute
    
  Key annotation: "The crossover — where the ground strap's impedance rises and the choke takes over"
-->

---

## Part 2 — EFHW Feed Systems: Two Scenarios

The End-Fed Half-Wave (EFHW) antenna is one of the most popular portable and stealth antennas for HF. It's also one of the most educational antenna types because it forces you to confront every concept we've covered — impedance transformation, common-mode current, counterpoise behaviour, and choke placement.

An EFHW is a half-wavelength wire fed at one end through a transformer (typically a 49:1 UNUN). The feedpoint impedance is very high (~2500–5000 Ω at the end of a half-wave element), and the UNUN steps this down to something close to 50 Ω for the coax.

The problem: where does the return current go?

A dipole has a natural answer — current flows up one leg, across the feedpoint, and down the other leg. Both halves carry current. The return path is built in.

An end-fed has only one radiating element. The return current must find another path. What that path is — and where you choke it — determines whether your antenna system works cleanly or turns into a noise-collecting mess.

### 2.1 Scenario 1 — Coax Shield as Counterpoise, Choke at Shack

**Setup:** EFHW wire → 49:1 UNUN → coax run to shack → choke at shack entry → ground bond at entry panel → receiver.

No counterpoise wire is connected at the UNUN. No choke at the feedpoint.

**What happens:**

The UNUN secondary has two terminals. One connects to the radiating wire. The other connects to... the coax shield. With no dedicated counterpoise and no choke, the return current has only one path: the outside of the coax shield.

The entire coax run — from the UNUN all the way back to the shack — becomes the counterpoise. It carries common-mode current along its full length. It is radiating and receiving. It is, electrically, part of the antenna.

The choke at the shack entry does stop the common-mode from crossing into your equipment. That's good — it protects the receiver from the worst of the conducted noise. But everything between the UNUN and the choke is still acting as an antenna element:

- The coax routing affects your radiation pattern. Move the cable and your pattern changes.
- The coax is receiving noise from every source it passes near — mains wiring in the wall, ethernet cables, the neighbour's solar inverter.
- The effective antenna is no longer a clean half-wave wire; it's a half-wave wire plus a random-length counterpoise whose shape depends on how you routed the coax.
- The ground bond at the entry panel diverts some common-mode current to earth, but as we showed in Section 1.2, at HF frequencies even a short ground strap presents significant impedance — so most of the RF common-mode current flows right past it.

**Verdict:** This works, but it's compromised. You've moved the problem rather than solved it. The shack is protected, but the antenna system is unpredictable, noisy on receive, and sensitive to cable routing.

### 2.2 Scenario 2 — Dedicated Counterpoise, Choke at the UNUN

**Setup:** EFHW wire → 49:1 UNUN with counterpoise wire attached → choke immediately after UNUN → coax run to shack → ground bond at entry panel → receiver.

A counterpoise wire (typically a short length, often ~2–3 metres for a multi-band EFHW, or a resonant quarter-wave for single-band use) is connected to the ground terminal of the UNUN. A common-mode choke is wound on the coax immediately after the UNUN output.

**What happens:**

Now the return current has somewhere to go *at the feedpoint*. The counterpoise wire provides a low-impedance return path right where the current needs it. The UNUN secondary sees the radiating wire on one terminal and the counterpoise on the other — it has a complete circuit without needing the coax shield.

The choke, placed immediately after the UNUN, presents high impedance (500–3000 Ω) to any residual common-mode current trying to flow onto the outer coax shield. Most of the return current takes the easier path — the counterpoise wire — because the choke has made the coax outer surface unattractive.

From the choke onwards, the coax carries only differential-mode signal. The centre conductor carries the signal; the return current flows on the *inner* surface of the shield. The outer surface is quiet. The coax is behaving as a transmission line, not an antenna element.

**The result:**

- The radiation pattern is defined by the wire and the counterpoise — not by the coax routing.
- The coax does not pick up noise from household wiring, because its outer surface is not carrying current.
- Moving or re-routing the coax does not change the antenna's behaviour.
- The ground bond at the shack entry panel handles safety (lightning, static) as intended.

**The key insight: the choke defines where the antenna system ends and the transmission line begins.**

In Scenario 1, that boundary is at the shack — so the entire coax run is part of the antenna. In Scenario 2, that boundary is at the feedpoint — so only the wire and counterpoise are the antenna, and the coax is just a cable.

> **📚 Curriculum link:** If the counterpoise is approximately a quarter-wavelength, the system is electrically equivalent to an off-centre-fed dipole through a UNUN. The choke at the feedpoint is doing what a balun does at a conventional dipole feedpoint — isolating the feedline from the antenna currents. See Unit 3, Lesson 11 (Dipole Deep Dive) and Lesson 15 (Impedance Matching).

**Verdict:** This is the correct approach. The antenna system is defined, predictable, and isolated from the feedline. The coax does its job (carry signal) and nothing more.

### 2.3 Side-by-Side Comparison

| | Scenario 1: Choke at shack | Scenario 2: Choke at UNUN |
|---|---|---|
| **Counterpoise** | Coax outer shield (unintentional) | Dedicated wire (intentional) |
| **Choke location** | Shack entry | Immediately after UNUN |
| **Antenna boundary** | At the shack | At the feedpoint |
| **Coax role** | Part of the antenna | Transmission line only |
| **Pattern affected by cable routing?** | Yes | No |
| **Coax picks up household noise?** | Yes — entire run | No — outer shield is quiet |
| **Predictable behaviour?** | No — depends on coax length/routing | Yes — defined by wire + counterpoise |
| **Shack protected from CM?** | Yes (choke blocks it at entry) | Yes (choke blocks it at feedpoint) |
| **Lightning/static protection** | Via ground bond at entry | Via ground bond at entry (same) |

<!-- VISUAL: efhw-scenario-comparison
Interactive toggle diagram showing both EFHW scenarios:

COMMON ELEMENTS (both views):
  - EFHW wire (horizontal, top of diagram)
  - 49:1 UNUN box at the feedpoint
  - Coax run from UNUN to shack (drawn at an angle, passing near a house/building)
  - Shack entry panel with ground bus bar
  - Ground rod symbol
  - Receiver/SDR at the end

SCENARIO 1 VIEW (toggle/tab: "Choke at Shack"):
  - No counterpoise wire at UNUN
  - No choke at UNUN
  - Coax outer shield highlighted RED along its full length — labelled "Common-mode current path"
  - Animated current arrows flowing on the outer shield from UNUN to shack
  - Choke symbol at shack entry — current stops here
  - Noise sources along the coax path (mains wire, ethernet cable) with coupling arrows
  - Label: "The coax IS the counterpoise"

SCENARIO 2 VIEW (toggle/tab: "Choke at Feedpoint"):
  - Counterpoise wire hanging from UNUN (short wire, angled down)
  - Choke symbol immediately after UNUN
  - Coax outer shield shown in GREEN (quiet) — labelled "No common-mode current"
  - Current arrows only on the wire and counterpoise
  - Same noise sources along the path but NO coupling arrows — they can't couple to a quiet shield
  - Label: "The coax is just a cable"

INTERACTION: Toggle button switches between views with a smooth transition. The "before/after" effect makes the point viscerally.

Colour: CM current in red (--accent-danger), quiet shield in green (--accent-ok), wanted signal in amber (--accent-e).
-->

---

## Part 3 — Practical How-To: Station Entry Panel

This section is a build guide. Everything above explains *why*. This tells you *how*.

### 3.1 The Single-Point Earth

All metalwork entering or leaving the shack should bond to a **single ground point**. This is the most important principle in station grounding.

Why single-point? If you ground the antenna coax to one rod and your mains earth to another, the two rods sit at slightly different potentials. Current flows between them — through your equipment. This is a ground loop, and it's a noise source and a safety hazard.

**The entry panel** is your single-point earth. It's a copper bus bar (or a commercial entry panel like the ones from Polyphaser, ICE, or Alpha Delta) mounted on the outside wall where cables enter the shack. Every coax, every control cable, and every ground wire bonds here.

**Components:**

- **Copper bus bar:** Minimum 6 mm thick, 25 mm wide. Length depends on how many cables you have. Pre-drilled with holes for bolts or use a DIN-rail mounted bus bar.
- **Bulkhead connectors:** SO-239 or N-type panel-mount connectors. Each coax terminates on the outside, passes through the bulkhead, and continues inside. The connector shell bonds the shield to the bus bar.
- **Ground rod:** Minimum 1.2 m copper-clad rod driven into the earth, connected to the bus bar with heavy copper braid (minimum 16 mm² cross-section). Keep this strap as short as possible — every centimetre adds inductance.
- **Bond to mains earth:** A heavy copper conductor from the bus bar to your building's main earth terminal. This ensures equipotential bonding with the mains system. This is a legal requirement in most jurisdictions.

### 3.2 Ground Strap Sizing

The ground strap between the bus bar and the ground rod is a critical component. Get this wrong and your ground bond is compromised before you even start.

**Rules of thumb:**

- **As short as possible.** Every 10 cm of strap adds ~60–70 nH of inductance. A 30 cm strap is ~200 nH; a 1 m strap is ~700 nH or more. At 145 MHz, 200 nH presents ~180 Ω. Length is the enemy.
- **As wide and flat as possible.** Flat braid has lower inductance than round wire of the same cross-section because inductance depends on the ratio of length to width. A 25 mm wide braid at 30 cm has roughly half the inductance of a 2 mm round wire at the same length.
- **Copper braid, not wire.** Braid provides greater surface area (which helps with skin effect at RF) and lower inductance per unit length. Tinned copper braid resists corrosion at outdoor connections.
- **Bolt, don't solder to the rod.** Solder joints corrode faster underground. Use a bronze or brass clamp rated for direct burial.

> **📚 Curriculum link:** You can calculate the ground strap impedance at any frequency using Z = 2πfL. Try it: if your strap is 50 cm of 25 mm braid (~330 nH), what impedance does it present at 7 MHz? At 50 MHz? At 145 MHz? (Answers: ~14.5 Ω, ~103 Ω, ~300 Ω.) This is a practical exercise for Unit 2, Lesson 6.

### 3.3 Choke Recipes

A common-mode choke is coax wound on a ferrite core. The number of turns, the core material, and the core size determine the impedance and the effective frequency range.

**General principles:**

- More turns = more inductance = more impedance at lower frequencies.
- Larger core = more turns fit = more inductance, and better power handling (less heating).
- The ferrite material (mix) determines the frequency range where it's effective.
- You want the **resistive component** of the choke impedance to be high, not just the reactive component. Resistance dissipates common-mode energy as heat; reactance reflects it back, which can cause standing waves on the shield. Good ferrite mixes provide both.

**HF choke (1–30 MHz) — for EFHW, dipole, or general HF use:**

| Parameter | Recommendation |
|---|---|
| Core | Fair-Rite 2631803802 (Mix 31, toroid, ~35 mm OD) or equivalent |
| Coax | RG-58 or RG-142 (whatever fits through the core) |
| Turns | 10–14 turns through the toroid |
| Expected impedance | >1000 Ω from 3–30 MHz; peak ~3000 Ω around 10–15 MHz |
| Placement | At UNUN output (Scenario 2) or shack entry (Scenario 1) |

**VHF choke (30–300 MHz) — for 2m/70cm, airband, ADS-B:**

| Parameter | Recommendation |
|---|---|
| Core | Fair-Rite snap-on clamp (Mix 43 or Mix 31), ~13 mm ID |
| Coax | RG-58, RG-213, or LMR-195 |
| Turns | 5–8 turns (or multiple snap-ons stacked) |
| Expected impedance | >500 Ω from 50–200 MHz |
| Placement | At antenna feedpoint or shack entry |

**Broadband suppression (for noisy environments):**

Stack multiple ferrite materials — a Mix 31 toroid for HF followed by Mix 43 snap-ons for VHF. This gives wideband common-mode suppression from 1 MHz through 300 MHz. Useful when you have multiple noise sources across different bands.

> **⚠️ Note:** These are starting-point recipes. The actual impedance depends on winding neatness, coax type, and the specific ferrite batch. If you have a VNA (like the NanoVNA or RSA5065N), measure the common-mode impedance of your choke before deployment — this is an excellent lab exercise and future RF-Hub content for Unit 2, Lesson 10.

---

## Part 4 — Putting It All Together

Here is the complete signal path for a well-implemented EFHW station, annotated with what each component does and which frequency range it handles.

```
EFHW Wire (half-wave radiating element)
    │
    │  RF current flows in the wire — this is the antenna
    │
 ┌──┴──┐
 │ UNUN │  49:1 impedance transformation
 │      │  Matches ~2500–5000 Ω (wire end) to ~50 Ω (coax)
 └──┬───┘
    │
    ├── Counterpoise wire (return current path at the feedpoint)
    │   Provides low-impedance return WITHOUT using the coax shield
    │
 ┌──┴──────────┐
 │ CM Choke     │  High impedance (>1000 Ω) to common-mode current
 │ (at UNUN)    │  DEFINES WHERE THE ANTENNA ENDS
 └──┬──────────┘
    │
    │  Coax run (differential mode only from here)
    │  Centre conductor: signal
    │  Inner shield surface: return current
    │  Outer shield surface: QUIET — no common-mode current
    │
```

```
    │
 ┌──┴──────────────┐
 │ Entry Panel      │  Single-point earth
 │ (bus bar)        │  Bulkhead connectors bond all shields
 │                  ├── Ground rod (heavy copper braid, SHORT)
 │                  │   Handles: lightning, static, equipotential bonding
 │                  │   Frequency domain: DC through low-frequency transients
 └──┬──────────────┘
    │
    │  Coax continues inside shack
    │
 ┌──┴──────────┐
 │ Receiver /   │  Sees only differential-mode signal
 │ SDR          │  No common-mode noise on the input
 └─────────────┘
```

**Frequency-domain summary of the full path:**

| Component | What it handles | Effective range |
|---|---|---|
| Counterpoise wire | Provides RF return current at feedpoint | RF (design frequency) |
| CM choke at UNUN | Blocks common-mode RF on coax outer | HF–VHF (depends on ferrite) |
| Ground bond at entry | Lightning, static, equipotential | DC through low-freq transients |
| Ground rod + strap | Earth reference, energy dissipation | DC (strap impedance rises with f) |

Every component has a job. No single component covers the full frequency range. Together, they do.

<!-- VISUAL: full-signal-path
Annotated diagram matching the ASCII art above but rendered as a proper visual:

Horizontal layout, left to right:
  EFHW wire → UNUN → counterpoise (short wire hanging down) → choke (ferrite toroid symbol) → coax run → entry panel (bus bar with ground rod) → receiver

Colour coding:
  - Antenna elements (wire + counterpoise): amber (--accent-e)
  - Choke: cyan highlight with "HIGH Z" label
  - Coax differential mode: green (clean signal)
  - Ground path: earth brown/green
  - Each component has a frequency-range label underneath

Interactive: hover over any component to see a tooltip explaining what it does and what frequency range it covers.
-->

---

## Self-Check Exercises

### Impedance Calculations

Use **Z = 2π × f × L** for all of these.

**Q1.** Your ground strap is 40 cm of 25 mm copper braid. Estimated inductance: ~270 nH. What impedance does it present at:
- (a) 3.5 MHz (80m band)
- (b) 14 MHz (20m band)
- (c) 145 MHz (2m band)

<!-- SELF-CHECK-ANSWERS: impedance-q1
(a) Z = 2π × 3,500,000 × 0.000000270 = 5.9 Ω — still usable as a ground path
(b) Z = 2π × 14,000,000 × 0.000000270 = 23.7 Ω — getting significant
(c) Z = 2π × 145,000,000 × 0.000000270 = 246 Ω — effectively useless as an RF ground

Pattern: the same strap goes from ~6 Ω to ~246 Ω just by changing frequency. The ground "disappears."
-->

**Q2.** You want to reduce the impedance of your ground strap at 14 MHz. You currently have a 40 cm round wire (2 mm diameter, ~400 nH). What's the impedance? If you replace it with a 20 cm flat braid (25 mm wide, ~130 nH), what's the new impedance? What percentage reduction did you achieve, and how?

<!-- SELF-CHECK-ANSWERS: impedance-q2
Original: Z = 2π × 14,000,000 × 0.000000400 = 35.2 Ω
New: Z = 2π × 14,000,000 × 0.000000130 = 11.4 Ω
Reduction: from 35.2 to 11.4 Ω — a 67% reduction.
You achieved this by doing TWO things: (1) making the strap shorter (reducing L), and (2) making it wider/flatter (reducing L further). Both reduce inductance, and since Z is proportional to L, both directly reduce the impedance at any given frequency.
-->

### Concept Questions

**Q3.** You install a common-mode choke at the shack entry and notice your noise floor drops by 10 dB. You then add a ground bond at the same entry point. Does the noise floor drop further? Why or why not?

<!-- SELF-CHECK-ANSWERS: concept-q3
Probably not significantly. The choke is blocking common-mode RF current, which is the primary noise mechanism on the coax. The ground bond handles DC/low-frequency/safety — it does not attenuate RF noise because the ground strap's impedance at RF is too high to divert the common-mode current effectively. The noise floor improvement came from the choke, not the ground. The ground bond is still essential for safety, but it's solving a different problem.
-->

**Q4.** An EFHW is set up with no counterpoise and no choke. The operator notices that touching the coax changes the SWR reading. Explain why.

<!-- SELF-CHECK-ANSWERS: concept-q4
Without a counterpoise or choke, the coax outer shield is the return current path — it's part of the antenna. The operator's body, when touching the coax, changes the impedance and coupling of this unintentional counterpoise. Their body adds capacitance to ground and alters the effective length of the return path. This changes the antenna's feedpoint impedance, which changes the SWR. In a properly choked system with a dedicated counterpoise, touching the coax should have no effect on SWR because the coax is isolated from the antenna currents.
-->

### Scenario Questions

**Q5.** You're setting up a receive-only EFHW for ADS-B monitoring at 1090 MHz using a remote Raspberry Pi + SDR dongle in a sealed enclosure at the antenna base. You have a short coax pigtail (~30 cm) from the antenna to the SDR input. Do you need: (a) a ground bond, (b) a common-mode choke, (c) both, or (d) neither? Justify your answer considering the frequency involved.

<!-- SELF-CHECK-ANSWERS: scenario-q5
(c) Both, but for different reasons.

Ground bond: Even with a short coax run, the enclosure needs an earth bond for lightning/static protection. An aluminium enclosure on a mast or pole is a lightning target. Ground the enclosure metalwork to a ground rod or building earth.

Common-mode choke: At 1090 MHz, any ground strap is completely useless for RF purposes (the impedance would be thousands of ohms). But common-mode noise can still couple onto the short coax pigtail from the PoE ethernet cable, the Pi's switching regulator, or the enclosure wiring. A small choke (Mix 43 or Mix 61 ferrite) on the coax pigtail before the SDR input suppresses this.

The interesting twist: at 1090 MHz, you need a ferrite mix that's effective at UHF. Mix 31 (HF-optimised) won't do much here. Mix 43 is marginal. Mix 61 or ferrite-loaded snap-ons rated for UHF are the right choice. This is why knowing your operating frequency matters when selecting choke components.
-->

**Q6.** A friend tells you: "I don't need a choke — I've got a really good earth." Using what you've learned, explain why this reasoning is flawed.

<!-- SELF-CHECK-ANSWERS: scenario-q6
The earth bond and the choke solve different problems in different frequency ranges. A "really good earth" means low DC resistance to ground — which is excellent for lightning protection and static bleed-off. But at RF frequencies, even the best ground strap presents significant inductive reactance (Z = 2πfL). A 30 cm strap at 14 MHz is ~24 Ω; at 145 MHz it's ~180+ Ω. The common-mode RF current sees this impedance and doesn't divert to ground — it continues into the shack. Only a choke can present the high impedance needed to block common-mode RF. The earth handles safety; the choke handles RF noise. You need both.
-->

---

## Summary

**Grounding** provides a low-impedance path to earth for safety — lightning, static discharge, equipotential bonding. It works at DC and low frequencies. At RF, the ground strap's inductive reactance rises with frequency (Z = 2πfL), making it progressively less effective.

**Choking** presents high impedance to common-mode RF current on the outer coax shield, preventing it from entering the shack or contaminating the receive path. It works within its designed RF bandwidth. It does nothing for DC safety.

**They are complementary in the frequency domain.** Ground dominates at DC through low-frequency transients. The choke dominates at RF. Together, they cover the full threat spectrum.

**For EFHW antennas**, the choke location is critical. Placing the choke at the feedpoint (with a dedicated counterpoise) defines a clean boundary between antenna and transmission line. Placing it at the shack protects the receiver but leaves the entire coax run acting as an uncontrolled antenna element.

**The choke defines where the antenna system ends and the transmission line begins.**

---

<!-- LESSON-META
guide_id: G01
type: cross-curriculum-guide
title: Grounding, Choking, and Feed Systems — Putting It All Together
status: DRAFT
curriculum_links:
  - Unit 2, Lesson 6: Impedance (reactance, inductive impedance, skin effect)
  - Unit 2, Lesson 7: SWR & Return Loss (SWR changes from common-mode)
  - Unit 2, Lesson 10: VNA Measurement Lab (measuring choke impedance)
  - Unit 2, Lesson 15: Impedance Matching (UNUN function, balun vs choke)
  - Unit 3, Lesson 11: Dipole Deep Dive (EFHW-as-dipole equivalence)
  - Unit 3, Lesson 12: Vertical Antennas (counterpoise/radial systems)
visual_briefs:
  - frequency-domain-handover: Impedance vs frequency chart showing ground strap and choke crossover
  - efhw-scenario-comparison: Toggle diagram showing Scenario 1 vs Scenario 2 current paths
  - full-signal-path: Annotated complete signal path from EFHW wire to receiver
related_content:
  - Blog post: "EFHW for Reception, Remote SDR" (Unsquelched — separate file)
  - Deep dive: Counterpoise orientation and placement (separate lesson/guide)
  - Remote SDR enclosure project (resources/SDR-EXPERIMENTS.md)
equipment_referenced:
  - NanoVNA (choke impedance measurement)
  - RSA5065N (S21 measurement of choke performance)
  - HackRF / RTL-SDR Blog V4 (remote SDR deployment)
estimated_reading_time: 40 minutes
-->
