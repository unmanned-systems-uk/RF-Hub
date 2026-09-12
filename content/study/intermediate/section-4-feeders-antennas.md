# Section 4: Feeders & Antennas

<!-- Exam weight: ~14% (~6/46 questions) -->
<!-- Sub-sections: 4A, 4B, 4C, 4D, 4E, 4F -->
<!-- Syllabus refs: 4A1-3, 4B1, 4C2-5, 4D1-2, 4E1, 4F1, 4H1 -->
<!-- RSGB source: Chapters 10 (pp.50–53), 11 (pp.54–57), 12 (pp.58–60) -->

**This section delivers on promises made in Section 2 and Section 3.** In 2F1 you saw standing waves on a feeder. In 3G3 you saw why reflected power damages a transmitter. Here is where the full picture comes together — SWR, reflection coefficient, return loss, feeders, baluns, and the antennas themselves.

Section 4 covers the complete signal path from transmitter output to electromagnetic wave in free space.

---

## 4A — Antenna Fundamentals

### What an Antenna Does (4C5)

An antenna performs two jobs simultaneously:

1. **Radiator** — converts RF current into electromagnetic waves that propagate through space
2. **Transformer** — matches the impedance of the transmission line to the impedance of free space

Free space has an impedance of approximately 377 Ω. Your transmitter and feeder system is typically 50 Ω. The antenna is the interface between them — it converts oscillating current in a conductor into a travelling electromagnetic wave, and does so efficiently only when everything is correctly matched.

On receive, the same antenna works in reverse: it intercepts an electromagnetic wave and converts it back into a tiny RF current that the receiver can amplify.

> [INFO] **4C5:** An antenna converts between guided waves on a feeder and unguided electromagnetic waves in free space. Improvements on transmit are identical on receive — a 3 dB improvement in antenna gain means 3 dB more signal received too.

### The Half-Wave Dipole as Reference (4C5, 4D1)

The **half-wave dipole** is the reference antenna for everything that follows. It is the most widely used amateur antenna on HF, and it is the basis for almost all more complex designs.

A half-wave dipole consists of two quarter-wave sections of wire, fed at the centre:

```
     λ/4              λ/4
  ←———————→         ←———————→
 
  ===wire===  [feed] ===wire===
             ↑
         feedpoint
         ≈ 73 Ω
```

**Physical length formula:**

For a half-wave dipole in free space:
```
L(metres) = 150 / f(MHz)      [theoretical half-wave in free space]
```

In practice, current in a real wire travels slightly slower than the speed of light. A **velocity factor** (typically 0.95 for wire in air) corrects for this:
```
L(metres) = (150 / f(MHz)) × 0.95    [practical wire dipole]
```

Or equivalently:
```
L(metres) ≈ 142.5 / f(MHz)
```

**Example:** A half-wave dipole for 14.2 MHz (20 m band)
```
L = 142.5 / 14.2 ≈ 10.03 m total (about 5.0 m each side)
```

> [INFO] **4C5:** The practical dipole length formula is L = (150/f) × 0.95, where f is in MHz and L is total length in metres. A dipole is cut slightly shorter than the theoretical half-wave due to end effects and velocity factor.

#### Feedpoint Impedance

The **feedpoint impedance** of a half-wave dipole in free space is approximately **73 Ω**, which is close enough to 50 Ω that a dipole fed directly with 50 Ω coax is considered an acceptable match (SWR ≈ 1.5:1).

In practice, the presence of the ground and nearby objects lowers the feedpoint impedance — a dipole at around 0.2λ above ground presents approximately 50 Ω at the feedpoint.

> [INFO] **4C5:** The feedpoint impedance of a half-wave dipole in free space is approximately 73 Ω. At low heights above ground it is closer to 50 Ω.

### Polarisation (4E1)

The **polarisation** of a radio wave is defined by the orientation of its electric field (E-field).

- A **horizontally mounted** dipole (wire running east–west) produces **horizontally polarised** waves
- A **vertically mounted** wire produces **vertically polarised** waves
- A **circularly polarised** wave rotates as it travels — useful for satellite and EME work

<!-- SVG: polarisation-diagram-E-H-field-orientation -->

**On HF:** the ionosphere scrambles polarisation continuously, so cross-polarisation loss is not usually a problem. You can receive horizontally from a vertical and vice versa with little penalty.

**On VHF/UHF:** the ionosphere is not involved. Polarisation is preserved from transmitter to receiver. If your antenna is horizontal and the other station is vertical, you will lose approximately **20 dB** of signal — significant enough to make the contact difficult or impossible. Always match polarisation on VHF/UHF.

> [INFO] **4E1:** Polarisation is the orientation of the electric field. On VHF/UHF, cross-polarisation causes significant signal loss (~20 dB). On HF, the ionosphere rotates polarisation continuously so it is less of a concern.

**See also:** [Antenna Curriculum Lesson 5: Polarisation](/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-05-polarisation.html) — includes the polarisation mismatch interactive.

---

## 4B — Standing Waves, SWR, and the Reflection Coefficient

*This is where Section 2 (2F1) and Section 3 (3G3) promises are delivered. Read all of this.*

### Why Standing Waves Form

When RF power travels from your transmitter along a feeder, it is a **travelling wave** — energy moving from source to load. If the load (antenna) has the same impedance as the feeder, all the power is absorbed and nothing comes back. This is the ideal case.

If the antenna impedance **does not match** the feeder impedance, the antenna cannot absorb all the arriving power. The excess is **reflected** back towards the transmitter as a second travelling wave, now moving in the opposite direction.

Two waves travelling in opposite directions on the same conductor **superimpose**. Where their peaks add, you get a voltage maximum (antinode). Where a peak of one meets a trough of the other, they cancel to form a voltage minimum (node). Because both waves travel at the same speed but in opposite directions, the pattern of peaks and troughs is **fixed in space** — a standing wave.

<!-- SVG: standing-wave-envelope-visual — show incident wave (right-moving), reflected wave (left-moving), and their sum (standing pattern with nodes every λ/2) -->

Key facts about standing waves:
- The pattern **repeats every half wavelength** (λ/2)
- **Voltage nodes** (nulls) are separated by λ/2
- **Voltage antinodes** (peaks) are also separated by λ/2, halfway between the nodes
- At a voltage node the current is at its maximum (and vice versa)

> [INFO] **2F1 (revisited):** This is the physical explanation behind the 2F1 fact you learned earlier. Voltage zeros repeat every half wavelength because the incident and reflected waves cancel in exactly the same place for every cycle.

### The Reflection Coefficient Γ (4E1, 4F1)

The **reflection coefficient Γ (gamma)** quantifies how much of the incident wave is reflected.

```
        Z_L − Z_0
Γ = ——————————————
        Z_L + Z_0
```

Where:
- Z_L = load impedance (the antenna feedpoint impedance)
- Z_0 = characteristic impedance of the feeder (usually 50 Ω)
- Γ is a complex number, but for exam purposes its magnitude |Γ| is what matters

**The magnitude |Γ| ranges from 0 (perfect match) to 1 (total reflection):**

| Condition | Z_L | |Γ| |
|-----------|-----|-------|
| Perfect match | Z_L = Z_0 | 0 |
| Open circuit | Z_L = ∞ | 1 |
| Short circuit | Z_L = 0 | 1 |
| Practical good match | Z_L ≈ Z_0 | small (< 0.2) |

**What does |Γ| = 0.33 mean physically?** One third of the voltage amplitude is reflected. Since power is proportional to V², the reflected power fraction is |Γ|² = 0.11, i.e., about 11% of power is reflected back. The remaining 89% is absorbed by the antenna (or lost in feeder resistance).

### SWR (Standing Wave Ratio) (4A2, 4C4)

**SWR** (or VSWR — Voltage Standing Wave Ratio) converts the reflection coefficient into a more intuitive number: the ratio of the maximum voltage to the minimum voltage on the feeder.

```
        1 + |Γ|
SWR = ——————————
        1 − |Γ|
```

Or rearranged to find Γ from SWR:
```
        SWR − 1
|Γ| = ——————————
        SWR + 1
```

SWR = 1:1 is a perfect match (|Γ| = 0, no reflections, no standing waves).
SWR = ∞ means total reflection (open or short circuit load).

**What SWR numbers mean physically:**

An SWR of **2:1** means the voltage on the feeder swings between a maximum of 2 V and a minimum of 1 V at the standing wave antinodes and nodes respectively. The ratio 2:1 — not the absolute values.

An SWR of **3:1** means a 3-to-1 voltage swing from antinode to node. Three times more voltage swing at the peaks compared to the troughs. This is a moderately poor match.

> [INFO] **4A2:** SWR is the ratio of maximum to minimum voltage along the feeder. SWR of 1:1 = no reflections. SWR of 2:1 = the feeder voltage peaks are twice the feeder voltage troughs.

#### Practical SWR conversion table

| SWR | |Γ| | Return Loss (dB) | Power reflected (%) |
|-----|-------|-----------------|---------------------|
| 1.0:1 | 0 | ∞ | 0% |
| 1.5:1 | 0.20 | 14.0 dB | 4% |
| 2.0:1 | 0.33 | 9.5 dB | 11% |
| 3.0:1 | 0.50 | 6.0 dB | 25% |
| 5.0:1 | 0.67 | 3.5 dB | 44% |
| ∞ | 1.00 | 0 dB | 100% |

### Return Loss (4F1)

**Return loss** expresses the reflected power in decibels. High return loss = less reflection = better match.

```
RL(dB) = −20 × log₁₀(|Γ|)
```

Or equivalently, the ratio of incident to reflected power in dB:
```
RL(dB) = −10 × log₁₀(|Γ|²)
```

**Examples from the table above:**
- SWR 2:1 → |Γ| = 0.33 → RL = −20 × log₁₀(0.33) = −20 × (−0.48) = **9.5 dB**
- SWR 3:1 → |Γ| = 0.50 → RL = −20 × log₁₀(0.50) = −20 × (−0.301) = **6.0 dB**

A return loss of 10 dB means the reflected power is one tenth of the incident power — a good practical match. A return loss of 6 dB means one quarter of the power is reflected — not ideal.

**See also:** [Understanding S11 — reflection coefficient, return loss, and what your analyser is actually measuring](/pages/blog/understanding-s11.html) — the blog deep-dive on S11 covers all of this with measured examples.

> [INFO] **4F1:** Return loss = −20 log₁₀(|Γ|). High return loss = good match. An SWR of 2:1 gives a return loss of 9.5 dB; SWR 3:1 gives 6 dB.

### What Happens to Reflected Power

Reflected power is not simply "lost". It travels back towards the transmitter and can:

1. **Heat the feeder** — the feeder has resistive losses; power bouncing back and forth along a mismatched feeder increases those losses proportionally
2. **Re-reflect at the transmitter** — some PA designs will re-reflect the arriving reflected wave back towards the antenna again; eventually all remaining power is either absorbed or lost as heat
3. **Damage the PA** — modern transistor amplifiers rely on correctly terminated output impedance. High reflected power causes the transistor to see an unexpected impedance at its output, which can stress or destroy it
4. **Trip the ALC or fold-back** — most modern radios have Automatic Level Control or transmit fold-back that reduces output power when SWR climbs above about 3:1, protecting the PA but reducing your effective radiated power

> [WARNING] **3G3 (revisited):** A transmitter operating into a completely disconnected antenna (or short/open load) sees effectively infinite SWR. All power is reflected back into the PA. This is why operating without an antenna — or with a broken connector — can destroy the final amplifier stage.

### Measuring SWR

An **SWR meter** (or VSWR meter) is placed in-line between the transmitter and the antenna, usually at the transmitter end of the feeder.

It contains a **directional coupler** that samples both the forward (incident) power and the reverse (reflected) power separately. The SWR is calculated from the ratio of the two readings.

**Important:** place the SWR meter at the transmitter end of the feeder, not in the middle or at the antenna. The meter will read the same SWR regardless of position along the feeder (ignoring feeder losses), but at the transmitter end it gives you the information you need to protect the PA.

**Also important:** a lossy feeder can hide a poor antenna SWR. If your feeder has high attenuation, the reflected power arriving back at the transmitter is much lower than what was actually reflected at the antenna. An SWR of 3:1 at the antenna may read as 1.5:1 at the transmitter end of 20 metres of lossy coax. This is not a good situation — you are simply losing more of your power in the feeder.

> [INFO] **4A3:** The SWR meter is placed between the TX and feeder. It samples forward and reflected power using a directional coupler. Lossy feeder can mask a poor antenna SWR.

**See also:**
- [VSWR Bridge — Wheatstone bridge principle, RSA calibration, and measurement procedure](/pages/sidebands/vswr-bridge-measurement.html)
- [Antenna Curriculum Lesson 7: SWR and Return Loss](/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-07-swr-and-return-loss.html)

<!-- INTERACTIVE REQUEST: SWR sweep visualiser — slider for Z_L from 0 to 500 Ω, live calculation of SWR, |Γ|, return loss (dB), and % reflected power. Visual standing wave envelope animation updating in real time. -->

---

## 4C — Feeders

### What a Feeder Does

A **feeder** (more correctly: a **transmission line**) carries RF power from the transmitter to the antenna, and from the antenna back to the receiver. It must do this efficiently — minimum power loss — while maintaining a well-defined characteristic impedance so that the system can be matched.

At RF frequencies, the electrical length of the feeder matters. Currents and voltages along a feeder vary sinusoidally, just as the electromagnetic wave they are carrying. A λ/4-long section of feeder transforms impedance (a quarter-wave transformer). A λ/2 section presents the same impedance at both ends. These properties are useful for matching but also mean that the feeder is not a simple conductor — it is a wave-carrying structure.

### Coaxial Cable (Unbalanced) (4A1, 4A3)

**Coaxial cable (coax)** is the most common feeder in amateur radio. It consists of:

![Coaxial cable construction — labelled cutaway showing inner conductor, dielectric, braided shield, and outer jacket](/frontend/assets/images/study/section-4/coaxial-cable-construction.png)

- **Inner conductor:** carries the signal current
- **Dielectric:** insulator between inner and outer (determines the velocity factor and characteristic impedance)
- **Braid:** the outer conductor — carries the return current and shields the signal from external fields
- **Outer jacket:** weather and mechanical protection

Coax is **unbalanced**: the outer braid is normally connected to ground at the transmitter end. RF currents are confined between the inner and the *inside* of the braid — the outside of the braid is theoretically current-free (when the system is well balanced).

**Characteristic impedance (Z₀):**

The characteristic impedance of coax depends on the diameter of the inner conductor and the inner diameter of the braid, and the dielectric material between them. It is a fixed property of the cable construction, not something that changes with frequency or length.

- **50 Ω** — standard for amateur radio and most RF systems (transmitters designed for 50 Ω loads)
- **75 Ω** — used for television and satellite receiver downleads

> [WARNING] Do not confuse characteristic impedance with DC resistance. A 50 Ω coax carries DC with essentially zero resistance (for short lengths) — its 50 Ω is an AC/RF property that determines how waves behave on it.

#### Common Cable Types (4A1, 4A2)

| Cable | Z₀ | Outer diameter | Velocity factor | Typical loss at 145 MHz (per 10 m) | Notes |
|-------|-----|----------------|----------------|--------------------------------------|-------|
| RG-58 | 50 Ω | 5 mm | 0.66 | ~1.5 dB | Thin, flexible, lossy — short runs only |
| RG-213 | 50 Ω | 10.3 mm | 0.66 | ~0.6 dB | Standard HF cable, good all-round choice |
| LMR-400 | 50 Ω | 10.3 mm | 0.85 | ~0.3 dB | Low loss, semi-rigid, better at VHF/UHF |
| CT100/WF100 | 75 Ω | 6.8 mm | 0.82 | ~0.8 dB | TV cable — 75 Ω, not suitable for amateur TX |

**Attenuation increases with frequency.** The same cable that loses 0.5 dB per 10 m at 3.5 MHz may lose 3 dB per 10 m at 432 MHz. For VHF/UHF, cable choice matters a great deal. For HF (below 30 MHz), even RG-58 is adequate for short runs.

> [INFO] **4A1:** Coaxial cable is an unbalanced feeder. The 50 Ω characteristic impedance is a property of the cable construction. Common types: RG-58 (thin, lossy), RG-213 (standard HF), LMR-400 (low loss). 75 Ω cable (TV downlead) is not suitable for amateur transmit use.

**See also:** [Antenna Curriculum Lesson 6: Impedance — feedline matching and characteristic impedance](/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-06-impedance.html)

### Velocity Factor (4A3)

The speed of an electromagnetic wave inside a coaxial cable is **less than the speed of light in a vacuum**. The ratio of the wave speed in the cable to the speed of light is called the **velocity factor (VF)**.

```
VF = v_cable / c
```

Where c = speed of light = 300 × 10⁶ m/s.

**VF for common cables:**
- Solid PTFE dielectric: VF ≈ 0.70
- Foam PTFE dielectric: VF ≈ 0.82–0.85
- Air-spaced (ladder line): VF ≈ 0.92–0.97

**Why VF matters:**

The **electrical length** of a feeder section depends on VF. A quarter-wave transformer at 14 MHz has a physical length of:

```
Physical length = (c × VF) / (4 × f)
               = (300 × 10⁶ × 0.66) / (4 × 14 × 10⁶)
               = 198 × 10⁶ / 56 × 10⁶
               ≈ 3.54 m
```

The same section in free space (VF = 1.0) would be 5.36 m. You must use the VF when cutting cable to a precise electrical length.

VF also affects the accuracy of **coax stubs** (short sections of coax used as filters or transformers) — always check the VF marked on the cable before cutting.

> [INFO] **4A3:** Velocity factor is the ratio of wave speed in the cable to the speed of light. Typical coax VF: 0.66–0.85. Multiply the free-space length by VF to get the physical cable length you need to cut.

### Balanced Feeder (Ladder Line) (4A1)

**Balanced feeder** (also called ladder line, twin feeder, or open-wire feeder) consists of two parallel conductors, held at a fixed separation by periodic insulators (hence the ladder-like appearance). Both conductors carry equal and opposite RF currents.

![Balanced feeder (ladder line) construction — two parallel conductors held apart by spacers. Common types: 300 Ω twin, 450 Ω windowed, 600 Ω open-wire.](/assets/images/study/section-4/balanced-feeder-ladder-line.png)

Because the two conductors carry equal-and-opposite currents, their electromagnetic fields cancel in the far field — the feeder does not radiate, and it is largely immune to picking up interference.

**Characteristic impedances:**
- 300 Ω — flat twin (TV ribbon cable): widely available, moderate loss
- 450 Ω — windowed ladder line: low loss, widely used with tuners and wire antennas
- 600 Ω — open-wire feedline: very low loss, used with high-power stations

**Advantages of balanced feeder:**
- Much lower loss than coax, especially at HF — a balanced feeder can run hundreds of metres with minimal loss
- Can operate with high SWR without the same increase in losses as coax (the loss increase with SWR on ladder line is much smaller)
- Connects directly to balanced antennas (dipoles) without a balun
- Excellent for multi-band operation with an ATU — the high impedance of mismatched balanced line is manageable, unlike coax where high SWR causes significant additional loss

**Disadvantages:**
- Sensitive to nearby metal — gutters, metal roofs, and other conductors can unbalance the feeder and cause it to radiate
- Cannot be routed through walls or along the ground in the way that coax can
- Must be kept away from metal structures by at least a few centimetres

> [INFO] **4A1:** Balanced feeder (ladder line) has much lower loss than coax, particularly at HF. Typical impedances: 300 Ω, 450 Ω, 600 Ω. Sensitive to nearby metal objects which can unbalance it and cause unwanted radiation.

### Waveguide (brief mention)

**Waveguide** is a hollow metal pipe used to carry microwave signals at frequencies above a few GHz. The minimum cross-section dimension must be greater than λ/2 at the signal frequency. At lower HF and VHF frequencies, a waveguide would need to be impractically large — it is only practical at microwave frequencies.

You are unlikely to see waveguide in an Intermediate exam question, but you should know it exists and what it is used for.

> [INFO] **4A1:** Waveguide is a hollow conductive pipe used as a feeder at microwave frequencies. The cross-section must be > λ/2. Not practical at HF or VHF.

<!-- INTERACTIVE REQUEST: Feeder loss vs frequency plotter — select cable type (RG-58/RG-213/LMR-400/ladder line), enter feeder length, plot loss (dB) from 1 MHz to 450 MHz. Show how high SWR multiplies feeder losses for coax vs ladder line. -->

---

## 4D — Baluns

### Why a Balun is Needed (4B1)

A **dipole** is a **balanced** antenna — both arms carry equal and opposite currents, and neither is connected to ground. **Coaxial cable** is an **unbalanced** feeder — the outer braid is grounded.

When you connect an unbalanced feeder to a balanced antenna, a problem arises: the outer braid is connected to one arm of the dipole. RF current wants to flow on the *outside* of the braid as well as the inside. This **common-mode current** on the outside of the coax:
- Causes the feeder to radiate (it is effectively an extra antenna element)
- Creates EMC interference in the shack
- Upsets the balance of the antenna, distorting its radiation pattern
- Can cause RF in the shack — RF feedback into microphone, logging software, etc.

A **balun** (BALanced-to-UNbalanced converter) prevents this by blocking or choking the common-mode current on the outside of the coax, while leaving the differential (signal) current on the inside undisturbed.

> [INFO] **4B1:** A balun prevents common-mode RF current flowing on the outside of a coax braid when feeding a balanced antenna. Without a balun, the feeder radiates and RF feedback into the shack is likely.

### Choke Balun (Current Balun) (4B1)

The most common type is the **choke balun** (also called a current balun):

**Construction:** Coil several turns of coax around a ferrite toroid, or wind it through multiple ferrite beads/cores.

```
                ┌──────────────────────┐
                │  ferrite ring/core   │
                │  ┌────────────┐      │
                │  │ coax coil  │      │  → to balanced antenna
    from TX ────┼──┤            ├──────┼──
                │  │ (5–10 turns)│     │
                └──────────────────────┘
```

![Choke balun construction — coax wound around a ferrite toroid to block common-mode currents. Alternative constructions: ferrite beads / snap-on ferrite cores.](/assets/images/study/ferrite-choke-common-mode.png)

**How it works:** The inductance of the coil in series with the outer braid presents a high impedance to common-mode currents (which try to travel along the outside of the braid). Differential-mode currents (the signal, flowing on the inside of the coax) see no impedance added. The ferrite core dramatically increases the inductance and therefore the choking effectiveness on lower frequencies.

**Impedance ratio:** 1:1 — the balun does not change the impedance, it only converts between balanced and unbalanced.

**Placement:** At the antenna feedpoint — not in the shack. The balun prevents the problem at source. A balun in the shack does not stop the feeder from radiating between the antenna and the balun.

> [INFO] **4B1:** A choke balun placed at the antenna feedpoint prevents common-mode currents on the coax outer braid. It presents a high impedance to common-mode current while being transparent to differential (signal) current. Ferrite-loaded designs work better on lower frequencies.

### Impedance-Ratio Baluns (4B1)

Some baluns also perform impedance transformation. The most common ratios:

**1:1 balun** — balanced-to-unbalanced only, no impedance change
- Use case: dipole feedpoint (antenna ≈ 73 Ω, coax = 50 Ω — acceptable mismatch, no step-up needed)
- Also used on any antenna where the impedance is close to 50 Ω

**4:1 balun** — transforms 200 Ω balanced to 50 Ω unbalanced (or 50 Ω → 200 Ω)
- Use case: folded dipole feedpoint (a folded dipole has approximately 300 Ω feedpoint impedance, close enough to 4× the coax impedance)
- Also used with some Yagi designs
- Turns ratio = 2:1 (impedance ratio = turns ratio²)

**9:1 balun/unun** — transforms 450 Ω to 50 Ω
- Use case: random wire or end-fed antenna system connected to 450 Ω ladder line
- Turns ratio = 3:1
- Also sometimes called an **unun** when both sides are nominally unbalanced (end-fed antenna to 50 Ω coax)

```
Impedance ratio = (turns ratio)²
    1:1 balun → turns ratio 1:1 → no impedance change
    4:1 balun → turns ratio 2:1 → 200 Ω ↔ 50 Ω
    9:1 balun → turns ratio 3:1 → 450 Ω ↔ 50 Ω
```

This is the same transformer impedance transformation covered in Section 2 (transformer turns ratio squared = impedance ratio).

> [INFO] **4B1:** Impedance-ratio baluns transform impedance as well as converting between balanced/unbalanced. A 4:1 balun transforms 200 Ω to 50 Ω (turns ratio 2:1). A 9:1 balun (unun) transforms 450 Ω to 50 Ω (turns ratio 3:1).

**See also:** [Antenna Curriculum Lesson 15: Impedance Matching — including baluns and matching networks](/pages/antenna-curriculum/unit-3-design-and-construction/lesson-15-impedance-matching.html)

<!-- INTERACTIVE REQUEST: Balun designer — select type (choke / 1:1 / 4:1 / 9:1), show animated diagram of current paths (common mode blocked, differential passed), and impedance transformation calculator. -->

---

## 4E — Antenna Matching

### Why Matching Matters (4F1)

Maximum power is transferred from a source to a load when the **load impedance equals the source impedance** (in AC circuit terms, when the load impedance is the complex conjugate of the source impedance). This is the **maximum power transfer theorem**.

If the transmitter output impedance is 50 Ω and the antenna system presents 50 Ω, all available power goes into the antenna system. If there is a mismatch, some power is reflected and less is radiated.

Modern transmitters are designed to work into 50 Ω. Most coax is 50 Ω. Most antennas are designed (or cut) to present approximately 50 Ω. The entire chain is built around this impedance standard.

When circumstances deviate — a random wire antenna, an antenna on a non-resonant frequency, a multi-band antenna used off its design band — an **Antenna Matching Unit (AMU)** or **Antenna Tuning Unit (ATU)** is used to restore the 50 Ω load that the transmitter needs.

### Antenna Matching Units (ATUs/AMUs) (4F1)

An **AMU (Antenna Matching Unit)** — also commonly called an ATU (Antenna Tuning Unit) — contains a network of variable capacitors and inductors that can be adjusted to transform the antenna feedpoint impedance into 50 Ω as seen by the transmitter.

**Critical point: the AMU does not tune the antenna.** The antenna is still physically the same length, still operating off-resonance (if it was), still presenting a poor impedance at its feedpoint. The AMU merely presents the transmitter with the 50 Ω it needs to see. The standing waves on the feeder between the AMU and the antenna are unchanged. The AMU is "hiding" the mismatch from the transmitter.

This has important implications:
- High SWR on feeder between ATU and antenna → increased feeder losses (especially with coax)
- Efficiency of a mismatched antenna with ATU is always less than a correctly matched antenna without ATU
- With ladder line (low loss even at high SWR), the ATU + ladder line combination can be very efficient across many bands
- With coax (high SWR → high losses), an ATU at the transmitter end of a long mismatched coax run can be surprisingly lossy

**The system in order:** Transmitter → SWR meter → ATU → feeder → balun → antenna

```
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────┐    ┌──────────┐
│Transmitter├──→│ SWR meter ├──→│   ATU    ├──→│feeder├──→│ antenna  │
└──────────┘    └──────────┘    └──────────┘    └──────┘    └──────────┘
                    50 Ω             50 Ω         Z varies   Z_antenna
                    good                           by SWR
```

(Fig 10.6-equivalent diagram — based on RSGB Intermediate Manual Fig 10.6)

> [INFO] **4F1:** An ATU/AMU presents the transmitter with the 50 Ω load it needs to see. It does not change the antenna impedance or the SWR on the feeder between the ATU and the antenna. With coax, high SWR between ATU and antenna still causes significant feeder losses.

**See also:** [Antenna Curriculum Lesson 15: Impedance Matching — L-networks, Pi-networks, and transmatches](/pages/antenna-curriculum/unit-3-design-and-construction/lesson-15-impedance-matching.html)

### ATU Adjustment Procedure (4F1)

A typical manual ATU has two variable capacitors (or a capacitor and an inductor tap) and a band switch:

1. Set the radio to the desired frequency, reduce power to minimum (e.g., 5–10 W or just enough to get an SWR reading)
2. Select the appropriate band/inductor tap
3. Adjust the capacitors alternately, watching the SWR meter — you are looking for the lowest SWR reading
4. When SWR is minimised (ideally below 1.5:1), increase power to normal operating level
5. Re-check SWR at full power — some ATUs behave slightly differently under load

Many modern radios have an internal ATU (typically covers 3:1 SWR range). An external manual ATU can handle much higher mismatches and is necessary for multi-band random wire systems.

### Antenna Traps (4C2, 4C3)

**Antenna traps** allow a single wire antenna to operate on multiple bands. A trap is a **parallel LC circuit** inserted at specific points along the antenna wire.

How a trap works:
- Below the trap's resonant frequency: the trap's reactance is low and RF current flows straight through it — the whole wire length is active
- At the trap's resonant frequency: the trap presents **very high impedance** — RF current cannot pass through it. The antenna is effectively shortened to the section between the feedpoint and the trap

<!-- SVG: trapped-dipole-diagram — show 40m dipole with 20m traps inserted, label sections -->

```
     ← 5 m →    [TRAP]    ← 5 m →       [END INSULATOR]
  ════════════  parallel  ════════════════════════════════
  centre                              (outer section only
  insulator                           active on 40 m,
  feedpoint                           inner section active
  50 Ω coax                           on 20 m)
```

**Fig 12.7 equivalent:** A 'trapped dipole' uses RF traps to disconnect parts of the antenna above the trap frequency.

- On **20 m (14 MHz):** the trap resonates at 14 MHz, presents high impedance — current flows only in the inner section (≈ 5 m each side), acting as a 20 m half-wave dipole
- On **40 m (7 MHz):** the trap is below resonance, presents low impedance — current flows through the trap into the outer section too, acting as a 40 m half-wave dipole

Traps are used in commercial multi-band antennas such as the Cushcraft MA5B and in popular HF verticals. They allow a single antenna to cover multiple bands, at the cost of some efficiency (traps have losses) and reduced bandwidth on each band.

> [INFO] **4C2, 4C3:** Antenna traps (parallel LC circuits) create a multi-band antenna. Above the trap resonant frequency, the trap presents high impedance and the antenna operates on the inner (shorter) section. Below resonant frequency, RF flows through the trap and the outer sections are also active.

**See also:** [Antenna Curriculum Lesson 14: Broadband and Multi-Band Antennas](/pages/antenna-curriculum/unit-3-design-and-construction/lesson-14-broadband-multi-band.html)

<!-- INTERACTIVE REQUEST: ATU/matching-network animator — show L-match, pi-match, and T-match topologies with adjustable component values, live calculation of input impedance from given load, SWR meter response. -->

---

## 4F — Antenna Concepts

### Radiation Patterns (4C4, 4D1)

An antenna does not radiate equally in all directions. Its **radiation pattern** shows how much power it radiates in each direction, plotted as a polar diagram.

<!-- SVG: dipole-radiation-pattern-polar — figure-of-eight pattern, broadside maximum, null off the ends -->

A **half-wave dipole** mounted horizontally produces a characteristic **figure-of-eight** radiation pattern in the azimuth plane:
- Maximum radiation is **broadside** — at right angles to the wire
- Nulls (zeros) are off the **ends** of the wire
- The pattern is omnidirectional in the elevation plane at right angles to the wire (i.e., it radiates equally well in all horizontal directions perpendicular to the wire)

**Compare with an isotropic antenna:** A theoretical **isotropic antenna** (which does not physically exist) would radiate equally in all directions — a perfect sphere. The half-wave dipole concentrates its energy in certain directions more than the isotropic sphere would, giving it **antenna gain** in those directions.

> [INFO] **4D1:** The half-wave dipole's radiation pattern is a figure-of-eight in the plane containing the wire, with maximum radiation broadside to the wire and nulls off the ends. The isotropic antenna (theoretical reference) radiates equally in all directions.

**See also:**
- [Antenna Curriculum Lesson 9: Gain, Directivity & Efficiency](/pages/antenna-curriculum/unit-2-characteristics-and-measurement/lesson-09-gain-directivity-efficiency.html)
- Interactive 3D radiation pattern: [dipole](/interactives/radiation-3d-v5.html?antenna=dipole&ui=standard)

### Antenna Gain (dBi and dBd) (4D1, 4D2)

**Gain** is a measure of how much more power an antenna radiates in its best direction compared to a reference antenna transmitting the same total power.

Two reference antennas are used:
- **dBi** — decibels relative to an **isotropic** radiator (theoretical perfect sphere)
- **dBd** — decibels relative to a **half-wave dipole** (the practical reference)

The half-wave dipole has a gain of **2.15 dBi** (it concentrates its power into a figure-of-eight shape rather than a sphere). This means:
```
dBi = dBd + 2.15
```

A 3-element Yagi might have a gain of 8 dBd (= 10.15 dBi). This means it radiates about 6× as much power in its best direction compared to a dipole.

> [INFO] **4D2:** Antenna gain is expressed in dBi (relative to isotropic) or dBd (relative to dipole). dBi = dBd + 2.15. A half-wave dipole has 2.15 dBi gain and 0 dBd gain (it is its own reference).

**EIRP (Effective Isotropic Radiated Power):**
```
EIRP(dBW) = Transmitter power (dBW) + Antenna gain (dBi) − Feeder loss (dB)
```

Your licence condition specifies maximum power as a radiated power figure (or as EIRP on some bands). An antenna with gain above unity (0 dBd) effectively multiplies your apparent radiated power in the best direction.

### Beamwidth and Front-to-Back Ratio (4C4, 4D2)

**Beamwidth** is the angle between the two −3 dB points of the main lobe in the antenna radiation pattern — the angle within which the antenna radiates more than half its peak power.

- A simple dipole has a very broad beamwidth (≈ 78° in the plane containing the wire)
- A basic 3-element Yagi has a beamwidth of ≈ 58° in the forward direction
- More director elements → narrower beamwidth → higher gain (these are linked: you cannot have both high gain and wide beamwidth)

**Front-to-back ratio (F/B)** is the ratio (in dB) of the power radiated in the main forward direction to the power radiated directly behind the antenna. A high F/B ratio means the antenna discriminates well against stations behind it — useful for reducing interference.

```
F/B (dB) = 10 × log₁₀ (Power_forward / Power_back)
```

A typical 3-element Yagi has F/B ≈ 20–25 dB. A well-designed 5-element Yagi may achieve 28–30 dB F/B.

> [INFO] **4C4:** Beamwidth = angle between −3 dB points of the main lobe. More antenna elements → narrower beamwidth → higher gain. Front-to-back ratio (in dB) describes discrimination against signals from the rear.

### The Yagi Antenna (4D2)

The **Yagi-Uda antenna** (usually called simply "the Yagi") is the most common directional antenna in amateur radio. It adds passive **parasitic elements** to a driven half-wave dipole:

- **Driven element** — the half-wave dipole connected to the feeder
- **Reflector** — slightly longer than the driven element, positioned behind it; reflects energy forward
- **Director(s)** — slightly shorter than the driven element, positioned in front; focus energy in the forward direction

```
  REFLECTOR    DRIVEN    DIRECTOR  DIRECTOR
  (slightly    ELEMENT   (slightly  (slightly
   longer)    (fed here)  shorter)   shorter)
    ═══         ═════      ════       ═══
     ↑             ↑
   Boom →→→→→→→→→→→→→→→→→→→→→→→→→→→→→→  [forward direction]
```

Adding more director elements increases the forward gain and narrows the beamwidth, but you reach a point of diminishing returns beyond about 10–15 elements.

**See also:** [Antenna Curriculum Lesson 13: Yagi Antennas — high-gain directional antennas](/pages/antenna-curriculum/unit-3-design-and-construction/lesson-13-yagi-antennas.html) and the [3D Yagi radiation pattern interactive](/interactives/radiation-3d-v5.html?antenna=yagi&ui=standard).

### Angle of Radiation and DX (4C4)

The **angle of radiation** (also called the **elevation angle** or **take-off angle**) is the angle above the horizontal at which the antenna's main lobe leaves the earth.

For **HF DX (long-distance)** work, you want a **low angle of radiation**. A signal leaving at a low angle travels further before hitting the ionosphere, and therefore skips to a more distant point on Earth. High-angle radiation goes almost straight up and comes back to Earth nearby ("NVIS" — Near Vertical Incidence Skywave — which is deliberately used for regional communication in emergencies).

**Antenna height affects the angle of radiation:**
- A dipole close to the ground (< λ/4 high) tends to radiate at a high angle → good for NVIS / regional
- A dipole at λ/2 or higher tends to radiate at a lower angle → better for DX

For verticals, ground-plane radials define the reference ground — elevated radials help with low-angle radiation.

> [INFO] **4C4:** Low angle of radiation is desirable for DX (long-distance) HF work. Antenna height (relative to wavelength) is the primary factor affecting take-off angle. Higher antennas generally give lower take-off angles and better DX capability.

### Common Antenna Types (4C2, 4C3, 4C5)

#### Half-wave dipole
- Simplest practical antenna; reference for all other gains
- Horizontally or vertically polarised depending on orientation
- [Deep dive: Lesson 11 — Dipole Deep Dive](/pages/antenna-curriculum/unit-3-design-and-construction/lesson-11-dipole-deep-dive.html)

#### Vertical (ground plane)
- Quarter-wave vertical radiator above a ground plane (radials)
- Omnidirectional in azimuth (radiates equally in all horizontal directions)
- Vertically polarised — well suited to mobile, maritime, VHF/UHF
- Requires good RF ground or elevated radials for best efficiency
- [Deep dive: Lesson 12 — Vertical Antennas](/pages/antenna-curriculum/unit-3-design-and-construction/lesson-12-vertical-antennas.html)

#### Inverted-V
- Dipole with the centre point raised and the two ends sloping down to supports
- Practical alternative to horizontal dipole when only one support is available
- Lower radiation angle than horizontal dipole at same height
- Feedpoint impedance slightly lower than standard horizontal dipole (≈ 50 Ω at ~120° included angle)

#### Yagi (Yagi-Uda beam)
- High gain, directional, rotatable
- Standard for VHF/UHF contest and DX work
- Beam antennas at HF need a rotator — a major installation project
- [Deep dive: Lesson 13 — Yagi Antennas](/pages/antenna-curriculum/unit-3-design-and-construction/lesson-13-yagi-antennas.html)

#### Loop antenna
- Full-wave loop (square, delta, or circle) — gain slightly above dipole, lower radiation angle than dipole at same height
- Small transmitting loop (STL / magnetic loop) — small diameter (~1 m), high Q, used where space is restricted; requires careful tuning

#### End-fed half-wave (EFHW)
- A half-wave wire fed at the end rather than the centre
- The feedpoint impedance at the end of a half-wave is very high (2000–5000 Ω)
- Requires a 49:1 or 64:1 unun to transform to 50 Ω
- Popular for portable and SOTA operation — one support point, no need for a balun at the feedpoint

> [INFO] **4C2, 4C3:** Key antenna types: dipole, vertical, inverted-V, Yagi, loop, EFHW. Each has different gain, radiation pattern, feedpoint impedance, and matching requirements. Refer to the antenna curriculum lessons for each type in depth.

**See also:** [Antenna Curriculum Lesson 4: Antenna Types Tour](/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-04-antenna-types-tour.html) — overview of all types.

<!-- INTERACTIVE REQUEST: Radiation pattern viewer — select antenna type, height above ground (slider), display azimuth and elevation radiation plots. Include dipole, vertical, Yagi, inverted-V, loop. -->

---

## 4G — Self-Check Questions

Work through these without looking at the answers first. The style matches actual RSGB Intermediate exam questions.

---

**Q1.** A half-wave dipole is to be cut for operation on 7.1 MHz. What is its approximate total length?

<details><summary>Answer</summary>

Using L = 142.5 / f(MHz):

L = 142.5 / 7.1 ≈ **20.07 m** (just over 20 metres total, about 10 metres each side)

The theoretical half-wave in free space would be 150/7.1 = 21.1 m, but the 0.95 velocity factor correction gives 20.0 m. Cut slightly long and trim for resonance.
</details>

---

**Q2.** The reflection coefficient |Γ| of an antenna system is 0.5. What is the SWR?

<details><summary>Answer</summary>

```
SWR = (1 + 0.5) / (1 − 0.5) = 1.5 / 0.5 = 3
```

**SWR = 3:1**

Also: return loss = −20 × log₁₀(0.5) = −20 × (−0.301) = **6 dB**
</details>

---

**Q3.** A feeder shows an SWR of 2:1. Approximately what percentage of the forward power is being reflected?

<details><summary>Answer</summary>

SWR 2:1 → |Γ| = (2−1)/(2+1) = 1/3 ≈ 0.333

Power reflected = |Γ|² = (0.333)² ≈ 0.111 = **≈ 11%**

So about 11% of the transmitted power is reflected — 89% reaches the antenna.
</details>

---

**Q4.** Why is a balun recommended at the feedpoint of a dipole fed with coaxial cable?

<details><summary>Answer</summary>

A dipole is a balanced antenna (equal and opposite currents in both arms). Coax is unbalanced. Without a balun, common-mode RF current can flow on the **outside of the coax braid**, causing:
- The feeder to radiate (distorting the antenna pattern)
- EMC interference in the shack
- RF feedback into equipment

A balun at the feedpoint prevents common-mode currents from flowing on the outer braid.
</details>

---

**Q5.** What is the characteristic impedance of standard amateur radio coaxial cable? What determines this value?

<details><summary>Answer</summary>

Standard amateur radio coax is **50 Ω**. (TV downlead coax is 75 Ω.)

The characteristic impedance is determined by the **diameter of the inner conductor**, the **inner diameter of the outer braid**, and the **dielectric material** between them. It is a fixed property of the cable construction — it does not depend on the cable length.
</details>

---

**Q6.** An antenna has a feedpoint impedance of 200 Ω. You wish to feed it with 50 Ω coax. What impedance ratio balun would you use, and what turns ratio does it have?

<details><summary>Answer</summary>

You need to transform 200 Ω to 50 Ω.

Impedance ratio = 200/50 = **4:1 balun**

Turns ratio = √(impedance ratio) = √4 = **2:1**
</details>

---

**Q7.** A dipole antenna is installed at a height of λ/2 above ground. Compared to the same dipole at λ/4 height, what difference would you expect in its radiation characteristics for DX work?

<details><summary>Answer</summary>

At λ/2 height, the dipole has a **lower angle of radiation** compared to λ/4 height. This means more of the RF energy leaves at a shallower angle, which results in **longer skip distances** and better DX capability. The dipole at λ/4 height has a higher radiation angle, which is better for regional (shorter distance) or NVIS communication.
</details>

---

**Q8.** What is an AMU (Antenna Matching Unit) and what does it — and does NOT — do?

<details><summary>Answer</summary>

An AMU presents the transmitter with a 50 Ω load, regardless of the antenna's actual feedpoint impedance. It does this using variable capacitors and inductors.

**What it does:**
- Transforms the impedance seen at the transmitter end of the feeder to 50 Ω
- Allows the PA to deliver full power without SWR-induced fold-back
- May reduce harmonics somewhat as a secondary benefit

**What it does NOT do:**
- Change the physical antenna or its resonant frequency
- Reduce the SWR on the feeder between the AMU and the antenna
- Compensate for feeder losses on a highly mismatched coax run
- Make a poorly tuned antenna radiate as well as a correctly resonant one
</details>

---

**Q9.** A Yagi antenna has 5 elements and its beamwidth is 40°. A competing design has 8 elements. How would you expect the 8-element Yagi's beamwidth and gain to compare?

<details><summary>Answer</summary>

The 8-element Yagi will have:
- **Narrower beamwidth** (less than 40°) — more elements focus the energy into a tighter beam
- **Higher gain** — the energy concentrated into the narrower beam means more power per unit solid angle in the forward direction

Gain and beamwidth trade off against each other. Concentrating power into a narrower beam is how antenna gain is produced.
</details>

---

**Q10.** Why does attenuation in coaxial cable increase with frequency?

<details><summary>Answer</summary>

Two main reasons:

1. **Skin effect** — at higher frequencies, RF current flows in a progressively thinner layer on the surface of the conductor. This reduces the effective conductor cross-section, increasing resistance and therefore resistive losses.

2. **Dielectric losses** — the insulating material between the inner and outer conductors absorbs some energy at higher frequencies. Better dielectric materials (e.g., PTFE foam) have lower dielectric loss than cheaper materials (solid polythene).

Both effects worsen with frequency, so cable loss per metre increases as frequency rises. This is why feeder selection is more critical at VHF/UHF than at HF.
</details>

---

**Q11.** You are setting up a station and the feeder run from shack to antenna is 30 m of RG-58 coax. On 144 MHz, the cable has approximately 3 dB of attenuation. What fraction of your transmitted power reaches the antenna?

<details><summary>Answer</summary>

3 dB of loss = half the power.

If your transmitter outputs 25 W, only **≈ 12.5 W** reaches the antenna. The other 12.5 W is dissipated as heat in the cable.

This demonstrates why for VHF/UHF work, feeder choice matters enormously. LMR-400 would have roughly half this loss for the same run.
</details>

---

**Q12.** What happens to the beam pattern of a horizontally mounted dipole as you rotate it from pointing north-south to east-west, assuming it is fixed in place?

<details><summary>Answer</summary>

The dipole's radiation pattern is fixed relative to the wire. As you rotate the wire:
- The **nulls** (which are off the ends of the wire) rotate with it
- The **main lobes** (broadside) also rotate

If the wire is oriented north-south, the main lobes radiate east and west, with nulls to the north and south.

If the wire is oriented east-west, the main lobes radiate north and south, with nulls to the east and west.

The maximum gain direction is always at right angles to the wire, and the minimum (null) is always off the ends.
</details>

---

## Suggested Interactives for RFH-Interactives

The following interactives would significantly strengthen this section. Passing this list to RFH-Master for scoping:

1. **SWR sweep visualiser** — slider for antenna impedance (Z_L), live calculation of SWR, |Γ|, return loss (dB), % power reflected. Animated standing-wave envelope showing voltage/current distribution. Ideal placement: Section 4B (after the SWR formulas).

2. **Radiation pattern viewer** — select antenna type (dipole, vertical, Yagi 3-el / 5-el), height above ground (λ slider), frequency. Display azimuth and elevation polar plots. Add overlay mode to compare two antenna configurations. Ideal placement: Section 4F (antenna concepts).

3. **Balun current-flow animator** — show a coax feeding a dipole without balun (common-mode currents visible on outer braid), then with choke balun (outer braid currents choked). Interactive toggle. Show the effect on radiation pattern symmetry. Ideal placement: Section 4D.

4. **ATU/matching-network animator** — L-match, π-match, and T-match topologies. Sliders for component values. Live input impedance calculation from given load. Show SWR meter reading at TX end. Ideal placement: Section 4E.

5. **Feeder loss vs frequency plotter** — select cable type (RG-58, RG-213, LMR-400, ladder line 450 Ω), enter run length (metres), plot loss (dB) from 1 MHz to 450 MHz. Add SWR multiplier (how SWR × 2 = extra loss for coax). Ideal placement: Section 4C (after cable types table).

---

*Section 4 complete. Output: Feeders, SWR, baluns, antenna types, gain, patterns, ATU operation, traps. Frontend: build from this Markdown. Do not build HTML here — hand to LessonsBuilder.*
