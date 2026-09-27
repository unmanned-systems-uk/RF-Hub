<!-- RF-Hub Full Licence Study — Chapter 13: Electromagnetic Compatibility (EMC)
     Exam weight: ~8–10% (~10–12 subsections, 13 pages — longest chapter)
     Sub-sections: §13A introduction/dual-role, §13B legal framework,
                   §13C common/differential mode, §13D field strength,
                   §13E near/far field, §13F coupling mechanisms,
                   §13G CM ferrite chokes, §13H filter types/placement,
                   §13I Pi & T filter design, §13J cascading,
                   §13K coax cable choice, §13L mains filters,
                   §13M notch filters, §13N equipment-specific,
                   §13O telephone RFI, §13P computer/SMPS RFI,
                   §13Q complaint procedure, §13R shack EMC
     Syllabus refs: 13A1–13S1 [VERIFY v1.6]
     RSGB source: Full Licence Manual 3rd ed. (G0HIQ), Ch 13, pp 83–95
     Cross-ref: Intermediate §6 (EMC overview), §13 (filtering), §11 (coax/shielding)
     New at Full: CM/DM analysis, field-strength formula, near/far-field boundary,
                  coupling mechanism taxonomy, Pi/T filter derivation, mains safety
                  (X/Y caps), PLT noise, complaint-handling procedure, shack earthing
     Iframes: full-field-strength-calculator.html (§13D), full-lc-filter-designer.html (§13I)
-->

# §13 — Electromagnetic Compatibility (EMC)

EMC is the discipline that asks a fundamental question: can two pieces of electronic equipment coexist in the same environment without disrupting each other? For amateur radio operators the stakes are personal and legal. We transmit at significant power levels, often in residential areas, and we do so under a licence that requires both that our transmissions are clean and that we take reasonable steps to prevent interference.

This chapter is the longest in the Full manual because the topic reaches in every direction — physics (how fields couple), engineering (how filters work), law (what the regulations require), and practice (how to handle a complaint). Full-level treatment introduces formal common/differential mode analysis, field-strength calculation from first principles, filter component derivation, and the legal framework that replaced the EMC Directive post-Brexit.

> **Cross-reference — Intermediate §6:** The Intermediate EMC chapter introduces the definition of EMC, the amateur's dual role, basic filter types, and the complaint procedure. Full level builds on that foundation with quantitative analysis. Read §6 first if you have not already covered it.

---

## §13A — Introduction: What EMC Means and the Amateur's Dual Role

**Electromagnetic Compatibility (EMC)** is the ability of equipment to function correctly in its electromagnetic environment **without itself causing unacceptable interference** to other equipment in that environment.

The definition contains two distinct obligations:

1. **Emission control** — the equipment must not radiate or conduct energy at levels that interfere with neighbouring equipment
2. **Immunity** — the equipment must continue to function correctly when exposed to electromagnetic energy produced by its environment

Both obligations apply to manufacturers (their equipment must be designed to meet both) and, by extension, to amateur operators operating that equipment.

### The Amateur's Dual Position (13A1)

Amateur radio operators occupy an unusual position in the electromagnetic environment:

**As sources of interference:** We transmit at power levels from 10 W (Foundation) to 1000 W (Full post-2024), using antennas in or near residential buildings. Our signals at HF propagate through walls, along power cables, and into neighbour equipment that was designed for an environment containing only domestic electronics. We are a potential source of interference.

**As victims of interference:** The modern home is saturated with unintentional emitters — switch-mode power supplies, LED lamp drivers, solar panel inverters, PLT (Powerline Telecommunications) adapters, VDSL broadband modems, and motor-controller circuits. Every one of these generates conducted and radiated noise that can raise our noise floor to the point where DX is impossible.

> [INFO] **13A1:** The amateur licence acknowledges the dual role: we accept some interference from lawfully operated equipment, in return for the right to transmit at power levels that may affect neighbours. Neither party has an absolute right — a reasonable balance must be achieved.

---

## §13B — Legal Framework: UK EMC and Radio Equipment Regulations (13B1)

Before Brexit, UK law transposed the EU **EMC Directive 2014/30/EU** and the **Radio Equipment Directive (RED) 2014/53/EU** into domestic law. After the UK's departure from the EU, these became:

- **The Electromagnetic Compatibility Regulations 2016 (SI 2016/1091)** — governing equipment that generates or is susceptible to electromagnetic disturbance
- **The Radio Equipment Regulations 2017 (SI 2017/1206)** — governing transmitting and receiving apparatus (replaces the R&TTE Directive)

### What the Regulations Require

**For manufacturers and importers:**
- Equipment must not cause interference that cannot be overcome
- Equipment must have adequate immunity to interference to enable normal use
- Equipment must bear the **UKCA mark** (UK market post-Brexit) or **CE mark** (goods placed on market before the transition, still valid in Great Britain for a transitional period)
- Technical documentation must be retained demonstrating conformity

**For users (including amateurs):**
- You must use equipment as it was designed to be used (modifications that defeat EMC measures may void conformity and legal use)
- You have no legal right to cause interference, even with a licence — the amateur licence authorises transmission, it does not override EMC law
- If your equipment causes unacceptable interference, you may be required to cease operating until the problem is resolved

### The Amateur's Legal Position (13B1)

Amateur radio equipment is often home-built or modified. Such equipment is **not CE/UKCA marked** and is not subject to the regulations in the same way, but the operator remains legally responsible under the **Wireless Telegraphy Act 2006** for operating a station that causes undue interference. The amateur licence contains specific conditions on spurious emissions (see §8) that are enforceable by Ofcom.

> [INFO] **13B1:** Post-Brexit UK law: the EMC Regulations 2016 (SI 2016/1091) govern equipment; the Radio Equipment Regulations 2017 (SI 2017/1206) govern radio apparatus. Both replace EU directives. CE marking remains valid on equipment placed on market before the UK transition period ended; new UK-market equipment requires UKCA marking.

> [WARNING] Modifying commercial equipment (adding an amplifier, removing filters, bypassing AGC) may invalidate its conformity assessment and create personal legal liability if interference results.

---

## §13C — Common Mode and Differential Mode Currents (13C1)

Any cable carrying signal or power current carries **two types of current simultaneously**. Understanding this distinction is the foundation of practical EMC work.

### Differential Mode (DM) — the Wanted Current

**Differential mode current** flows in **opposite directions** in the two conductors of a cable pair. The signal current flows down conductor A and returns via conductor B. In a coaxial cable: signal flows on the inner conductor, return flows on the inner surface of the braid.

The magnetic fields produced by DM currents in the two conductors are **opposite and approximately equal** — they cancel at distance. DM current produces little external radiation. This is the current the circuit is designed to carry.

<img src="/assets/images/study/full/section-13/fig-13-1-dm-vs-cm-currents.svg" alt="Differential mode versus common mode current comparison: left panel shows DM with opposite-direction currents whose fields cancel; right panel shows CM with same-direction currents whose fields add and radiate" width="600" height="280" loading="lazy">

### Common Mode (CM) — the Interference Current

**Common mode current** flows in the **same direction** in both conductors simultaneously. It is not the wanted signal — it is a parasitic current driven by an interference source that treats the cable as a single conductor against a ground reference.

The magnetic fields produced by CM currents **add** rather than cancel. The cable behaves like a single-conductor antenna radiating at the CM current level.

*(See Fig 13-1 above for a side-by-side comparison of DM and CM current flow.)*

### The Relationship Between CM and DM (13C1)

If the actual currents in conductors A and B are I<sub>A</sub> and I<sub>B</sub>:

> **I<sub>DM</sub> = (I<sub>A</sub> − I<sub>B</sub>) / 2**     (differential component — equal and opposite)

> **I<sub>CM</sub> = (I<sub>A</sub> + I<sub>B</sub>) / 2**     (common mode component — same direction in both)

In an ideal cable with a balanced source and load, I<sub>A</sub> = −I<sub>B</sub> so I<sub>CM</sub> = 0. In practice, asymmetry in impedances, parasitic paths, and ground connections all allow I<sub>CM</sub> to develop.

### Why CM is the Problem

A common-mode current of just a few milliamps on a metre of cable can produce field strengths at 10 m distance that exceed regulatory limits. The same cable carries a DM signal at hundreds of milliamps with negligible radiation. This is why the standard EMC solution is to **suppress CM current** while leaving DM current unaffected — and this is exactly what a properly wound ferrite choke does (see §13G).

On a coaxial feeder, CM current flows on the **outside** of the braid. The inner surface of the braid carries the legitimate return current (DM). A ferrite choke around the outside of the coax adds impedance to the outer braid surface without affecting the inner DM path.

> [INFO] **13C1:** Common mode current flows the same direction in both conductors and radiates. Differential mode current flows in opposite directions and largely cancels. EMC filters and chokes target CM current specifically; they must not significantly impede the DM signal.

---

## §13D — Transmitted Field Strength (13D1)

When you transmit, your antenna creates an electromagnetic field that decays with distance. The **field strength** (measured in volts per metre, V/m) at a given distance determines whether your signal is likely to cause interference to nearby equipment.

### From Power to Field Strength

Starting from **Power Flux Density (PFD)** in the far field:

> **PFD = (P × G) / (4πr²)**    W/m²

where P is transmitter power in watts, G is antenna gain as a numeric ratio (not dBi), and r is distance in metres.

The relationship between PFD and electric field strength E in free space:

> **PFD = E² / (120π)**

Combining these:

> **E² = 120π × PFD = 120π × (P × G) / (4πr²) = 30 × P × G / r²**

> **E (V/m) = √(30 × P × G) / r**

This is the fundamental field-strength formula. It gives the RMS electric field strength at distance r in the far field of an antenna with gain G fed with power P.

### Worked Examples

**100 W transmitter, unity gain antenna (G = 1), at r = 10 m:**
E = √(30 × 100 × 1) / 10 = √3000 / 10 = 54.77 / 10 = **5.5 V/m**

**100 W, 3-element Yagi with 8 dBi gain (G = 6.3), at r = 30 m in the beam direction:**
E = √(30 × 100 × 6.3) / 30 = √18,900 / 30 = 137.5 / 30 = **4.6 V/m**

**5 W Foundation operator, unity gain antenna, at r = 3 m (neighbour's wall):**
E = √(30 × 5 × 1) / 3 = √150 / 3 = 12.25 / 3 = **4.1 V/m**

Note: the Foundation operator at close range produces only slightly less field strength at the wall than 100 W at 10 m. Close proximity matters more than power level.

**Rearranged for distance: r = √(30 × P × G) / E**

If a piece of equipment becomes susceptible above E = 1 V/m, and your transmitter produces 100 W with G = 1:
r = √3000 / 1 = **54.8 m** — equipment must be over 55 m away to be below the susceptibility threshold.

### Field Strength Calculator

<iframe src='/interactives/full-field-strength-calculator.html' style='width:100%; height:700px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='Field Strength Calculator'></iframe>

> [INFO] **13D1:** E (V/m) = √(30 × P × G) / r. Field strength falls inversely with distance (not as the square — that is PFD). Doubling distance halves E. Both power AND antenna gain enter equally; a 3 dBi gain increase has the same effect on field strength as doubling transmitter power.

---

## §13E — Antenna Position and Near Field vs Far Field (13E1)

The field-strength formula of §13D applies only in the **far field** — the region where the wave has separated from the antenna and propagates as a plane wave. Close to the antenna, the field structure is more complex and the formula does not apply.

### The Near-Field / Far-Field Boundary

The transition occurs at approximately:

> **r<sub>boundary</sub> ≈ λ / (2π) ≈ 0.159 × λ**

At this distance, the stored reactive energy in the near field equals the radiated energy in the far field.

| Band | Frequency | λ | Near-field boundary (λ/2π) |
|------|-----------|---|---------------------------|
| 80 m | 3.5 MHz | 85.7 m | **13.6 m** |
| 40 m | 7.1 MHz | 42.3 m | **6.7 m** |
| 20 m | 14.2 MHz | 21.1 m | **3.4 m** |
| 10 m | 28 MHz | 10.7 m | **1.7 m** |
| 2 m | 145 MHz | 2.07 m | **33 cm** |
| 70 cm | 433 MHz | 0.69 m | **11 cm** |

For the HF bands, a neighbour's house 10–20 m away is at or inside the near-field boundary. This has important implications:

**In the near field:**
- The electric and magnetic fields do not have the free-space 120π relationship
- The field does not fall as 1/r — it may fall faster (as 1/r²) or the pattern is complex
- The far-field formula E = √(30PG)/r is **not valid** — it overestimates far-field strength but the near-field can still be strong
- For EMF compliance assessments at HF, Ofcom's spreadsheet uses distance and power without the gain-correction for the very near field — follow the spreadsheet, not this formula, for compliance work

**In the far field (r > λ/2π):**
- The formula applies
- E falls as 1/r (PFD falls as 1/r²)
- Field impedance equals 120π ≈ 377 Ω (free space)

### Antenna Siting and Interference Reduction

Antenna position is the most effective single control over interference:

- **Height and distance:** every doubling of distance halves field strength at a neighbour's equipment
- **Directivity:** pointing a beam away from susceptible equipment reduces field in that direction by the front-to-back ratio
- **Antenna type:** a ground-mounted vertical radiates strongly at low angles towards neighbouring houses; a dipole at height 10–20 m concentrates radiation at higher elevation angles, reducing field strength at ground level nearby
- **Use the lowest power consistent with the contact** — power has the same effect as distance (√P factor in the formula)

> [INFO] **13E1:** Near-field boundary ≈ λ/2π. At HF, neighbours within ~10 m are typically in the near field. The E = √(30PG)/r formula applies only in the far field; for compliance assessments at close range, use Ofcom's EMF spreadsheet.

---

## §13F — How Interference Travels: Coupling Mechanisms (13F1)

Interference reaching a victim equipment takes one of four routes. Identifying the correct coupling mechanism determines which remedy to apply.

### 1. Radiated Coupling

RF energy radiates from the source antenna (or any part of the transmitting system carrying CM current), travels through space, and is received by the victim equipment — by its connecting cables (acting as antennas), its case (resonant structure), or its input circuitry.

**Identification:** interference exists even when source and victim share no conductors; it may vary with antenna direction; it is reduced by distance and shielding.

**Remedies:** distance, antenna directivity, shielding the victim equipment, ferrite chokes on victim cables.

### 2. Conducted Coupling

RF energy travels along a shared conductor — most commonly the **mains wiring** that both source and victim connect to. The transmitter generates RF on the mains via its power supply, and the mains carries this to the victim.

**Identification:** interference follows the victim wherever it is plugged in; disconnecting the mains removes the interference; interference appears on a current probe on the mains.

**Remedies:** mains filter at the transmitter (CM choke + X/Y capacitors), separate mains circuits for the shack, ferrite on transmitter mains lead.

### 3. Inductive (Magnetic Field) Coupling

The changing magnetic field around current-carrying conductors (the antenna, the feeder) induces a voltage in a nearby conductor loop by mutual inductance. This is significant at close range and particularly at low frequencies where wavelength is long.

**Identification:** interference is present only when the source and victim are in close proximity; field strength falls rapidly with distance (as 1/r³ in the near-field magnetic case); a loop of wire near the victim that can be rotated shows strong directional dependence.

**Remedies:** physical separation; shielded twisted pair (twisting reduces the loop area that picks up magnetic flux); magnetic shielding with mu-metal or silicon-steel.

### 4. Capacitive (Electric Field) Coupling

High-voltage RF produces an electric field that capacitively couples onto nearby conductors through stray capacitance. This is the "hand capacitance" effect — your body is a capacitor to ground, and can conduct RF from a nearby antenna onto your skin and then into equipment you touch.

**Identification:** interference is correlated with proximity of source antenna to victim cable/equipment; often affects high-impedance circuits (audio preamplifiers, DECT aerial); may be traced with an E-field probe.

**Remedies:** shielded cables on victim; reduce source-to-victim distance; decoupling capacitors to ground at victim inputs; CM ferrite choke where cable enters victim equipment.

### Coupling Mechanism Summary (13F1)

| Mechanism | Travels via | Falls with distance | Remedy |
|-----------|-------------|---------------------|--------|
| Radiated | Space (EM wave) | E ∝ 1/r (far field) | Shield, distance, choke |
| Conducted | Shared mains / cables | N/A — shared path | Mains filter, isolation |
| Inductive | Magnetic field | H ∝ 1/r³ (near field) | Separation, twisted pair |
| Capacitive | Electric field | E ∝ 1/r² (near field) | Shielding, CM choke |

In practice, multiple mechanisms operate simultaneously — a complete interference solution often addresses all four.

> [INFO] **13F1:** The four coupling mechanisms are radiated, conducted, inductive, and capacitive. Each requires a different diagnostic approach and a different remedy. Mis-identifying the coupling mechanism leads to remedies that don't work.

---

## §13G — Common-Mode Ferrite Chokes (13G1)

The ferrite CM choke is the single most versatile EMC component in the amateur toolkit. Correctly specified and wound, it suppresses CM current without affecting DM signal.

### How a Ferrite CM Choke Works

Wind several turns of coax (or a cable pair) through a ferrite toroid. The DM current in the two conductors creates **opposing magnetic flux** in the core — they cancel, and the core presents no impedance to the DM signal. The CM current in the two conductors creates **additive magnetic flux** in the core — the core presents high impedance (Z = jωL<sub>CM</sub>) to the CM current, suppressing it.

For a coax choke: the coaxial cable is wound through the toroid without breaking the coax. The DM path (inner conductor + braid inner surface) is undisturbed. The CM path (braid outer surface) sees high series impedance.

### Ferrite Mix Selection (13G1)

The ferrite material (mix number) determines the frequency range of maximum impedance. Selecting the wrong mix produces little effect.

| Mix | Trade name | Best frequency range | Application |
|-----|-----------|---------------------|-------------|
| 31 | Fair-Rite 31 | 1–300 MHz | Broadband HF choke (most common choice) |
| 43 | Fair-Rite 43 | 25–300 MHz | HF/low VHF choke; slightly higher impedance peak |
| 61 | Fair-Rite 61 | 200 MHz–1 GHz | VHF/UHF choke; not effective at HF |
| 75 | Fair-Rite 75 | 0.5–30 MHz | Optimised for MF/low HF; very high μ |

> **Rule of thumb:** Mix 31 is the best general-purpose choice for HF amateur work. For suppressing 2 m or 70 cm interference reaching HF equipment, Mix 61 is more appropriate.

### Winding and Impedance

The CM impedance of a ferrite choke increases with:
- Number of turns (Z ∝ N²)
- Ferrite permeability (μ)
- Core cross-sectional area

A single FT240-31 toroid with 8 turns of RG-58 coax provides approximately **1500–3000 Ω** CM impedance across 3–30 MHz — sufficient to reduce CM current by 30–40 dB in a typical 50 Ω system.

For greater suppression: add a second toroid in series, or use a longer ferrite rod with 10–12 turns.

### Braid Breaker

A **braid breaker** (also called a line isolator or current balun) is a CM choke placed on the coaxial feeder where it leaves the antenna. It prevents RF from the antenna from travelling back down the outside of the feeder braid into the shack and onto the mains — the most common cause of RF in audio equipment and computers.

For a dipole without a balun, the coax braid is directly connected to one half of the dipole. CM current flows down the outside of the braid and into the shack. A single FT240-31 with 8 turns at the feedpoint eliminates this current.

> [INFO] **13G1:** A CM ferrite choke suppresses common-mode current without affecting differential-mode signal. Select Mix 31 for HF. More turns = more impedance (Z ∝ N²). Place a braid-breaker at the antenna feedpoint to prevent RF travelling down the coax outer into the shack.

---

## §13H — Filter Types and Placement (13H1)

When ferrite chokes are insufficient, or when harmonic suppression is needed rather than CM suppression, **LC filters** are the correct tool. There are four types; the choice depends on what you want to pass and what you want to stop.

### Filter Placement — TX or Victim?

**At the transmitter output:** suppresses harmonics before they reach the antenna. A low-pass filter here benefits all potential victims simultaneously. This is the preferred position for harmonic suppression.

**At the victim input:** a high-pass filter at the TV aerial input blocks HF signals while passing UHF television. This targets a specific victim without affecting the transmitter. Useful when the TX output already has a low-pass filter and interference still occurs via radiated coupling.

**Both positions together:** maximum effectiveness; the TX filter reduces harmonics by X dB and the victim filter adds a further Y dB of rejection.

### Low-Pass Filter (LPF)

Passes frequencies below the cut-off frequency; attenuates harmonics above it. Used at the **transmitter output** to suppress harmonics.

For an HF transmitter: fc set at 32–35 MHz (just above the top of 10 m, at 28–29.7 MHz) ensures the fundamental passes but 2nd/3rd harmonics (56–89 MHz) are attenuated.

The response falls at approximately 20 dB/decade per reactive element beyond fc, or equivalently 6 dB/octave per element. A 3-element Pi LPF gives 60 dB/decade rolloff — the 2nd harmonic (2× the frequency, 1 octave above the fundamental) is attenuated by approximately 18 dB; the 3rd harmonic by approximately 28 dB from the −3 dB point.

### High-Pass Filter (HPF)

Passes frequencies above fc; attenuates frequencies below. Used at the **victim equipment input** to block HF interference while passing VHF/UHF signals.

Example: a TV aerial-input HPF with fc = 40 MHz blocks 1.8–30 MHz HF transmissions while passing Freeview (470–790 MHz) with negligible loss.

### Band-Pass Filter (BPF)

Passes a band of frequencies; attenuates both above and below. Used when the victim operates on a specific band and only signals in that band should be admitted.

Example: a BPF at the amateur 20 m input (centred on 14 MHz with 1 MHz bandwidth) allows only 14 MHz signals to reach the receiver input, rejecting both lower and higher-frequency interferers.

### Band-Stop (Notch) Filter (BSF)

Attenuates a specific narrow band; passes all others. Used to suppress a single interferer. (See §13M for notch filter detail.)

### Filter Type Selection Summary (13H1)

| Interference type | Filter position | Filter type |
|------------------|-----------------|------------|
| TX harmonics reaching neighbours | TX output | Low-pass |
| HF reaching TV aerial input | TV input | High-pass |
| Broadcast AM RFI at audio input | Hi-fi input | High-pass or band-stop |
| Specific strong signal overloading RX | Before RX | Band-stop / notch |
| Wideband noise from victim | TX output | Low-pass |

> [INFO] **13H1:** A low-pass filter at the transmitter output is the first remedy for harmonic interference. A high-pass filter at the victim input is the first remedy for HF breakthrough into TV, hi-fi, or telephones. These two filters are complementary — use both for maximum effectiveness.

---

## §13I — Pi and T Filter Design (13I1)

Both Pi and T LC filters use the same two components — inductors and capacitors — arranged in different topologies. Both can be designed to the same cut-off frequency from the same formula; their difference lies in which impedance they present at source and load.

### Pi Filter (Shunt–Series–Shunt)

The Pi low-pass filter has two shunt capacitors flanking one series inductor:

```
Input ──┬──[L]──┬── Output
        │       │
       [C]     [C]
        │       │
       GND     GND
```

The Pi filter's shunt capacitors present low impedance to high-frequency components at both input and output, while the series inductor presents high impedance to high frequencies in the signal path. This makes the Pi filter well-suited to **high-impedance source and load** (the capacitors first absorb energy from the source).

For a transmitter PA: the Pi output filter has capacitors at both ends — the capacitor at the PA output forms part of the matching network and absorbs harmonic energy before it reaches the inductor.

### T Filter (Series–Shunt–Series)

The T low-pass filter has two series inductors flanking one shunt capacitor:

```
Input ──[L]──┬──[L]── Output
             │
            [C]
             │
            GND
```

The T filter's series inductors block high-frequency energy at both input and output; the shunt capacitor drains it to ground. Better suited to **low-impedance source and load** (the inductors block energy from the source first).

### Component Value Derivation (13I1)

For a simple single-section LP filter with cut-off frequency fc and source/load impedance Z₀:

> **Series inductor:** L = Z₀ / (2π × f<sub>c</sub>)

> **Shunt capacitor:** C = 1 / (2π × f<sub>c</sub> × Z₀)

These are derived from the condition that each element has an impedance equal to Z₀ at f<sub>c</sub>:
- Inductive reactance X<sub>L</sub> = Z₀ at f<sub>c</sub> → L = Z₀/ωc
- Capacitive reactance X<sub>C</sub> = Z₀ at f<sub>c</sub> → C = 1/(ωc × Z₀)

where ωc = 2πfc.

**For a High-Pass filter** — swap element types:
- Series **capacitor**: C = 1 / (2π × f<sub>c</sub> × Z₀)
- Shunt **inductor**: L = Z₀ / (2π × f<sub>c</sub>)
(Same formula, L and C roles exchanged.)

### Worked Examples

**LP Pi filter, f<sub>c</sub> = 30 MHz, Z₀ = 50 Ω (transmitter HF LPF):**

L = 50 / (2π × 30 × 10⁶) = 50 / 188,495,559 = **265 nH**

C = 1 / (2π × 30 × 10⁶ × 50) = 1 / 9,424,778 = **106 pF**

Component values: two 106 pF capacitors (shunt), one 265 nH inductor (series). Standard values: 100 pF (5% low, acceptable) and 270 nH.

**HP Pi filter, f<sub>c</sub> = 40 MHz, Z₀ = 75 Ω (TV input, blocks HF, passes UHF):**

C<sub>series</sub> = 1 / (2π × 40 × 10⁶ × 75) = 1 / 18,849,556 = **53 pF**

L<sub>shunt</sub> = 75 / (2π × 40 × 10⁶) = 75 / 251,327,412 = **298 nH ≈ 300 nH**

Components: two 56 pF capacitors (nearest standard, series), one 300 nH inductor (shunt).

**LP T filter, f<sub>c</sub> = 50 MHz, Z₀ = 50 Ω:**

L<sub>series</sub> = 50 / (2π × 50 × 10⁶) = **159 nH**

C<sub>shunt</sub> = 1 / (2π × 50 × 10⁶ × 50) = **63.7 pF**

### LC Filter Designer

<iframe src='/interactives/full-lc-filter-designer.html' style='width:100%; height:750px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='LC Filter Designer — Pi and T Networks'></iframe>

> [INFO] **13I1:** L = Z₀/(2πfc) and C = 1/(2πfc × Z₀). These two formulas cover both elements of any single-section LP or HP filter — swap L and C for HP. Pi filter: shunt–series–shunt; T filter: series–shunt–series. Same formulas, different topology.

---

## §13J — Cascading Filters (13J1)

A single filter section provides limited attenuation well beyond the cut-off frequency. Cascading two or more filter sections multiplies the attenuation.

### Adding dB

When filters are cascaded, their attenuations **add in dB**:

> **Total attenuation (dB) = Filter 1 attenuation (dB) + Filter 2 attenuation (dB) + ...**

A single 3-element Pi LP filter (which has 3 reactive elements: 2C + 1L) provides approximately 60 dB/decade rolloff beyond fc. A second identical section in cascade adds another 60 dB/decade → **120 dB/decade** total.

At two octaves above fc (4× the frequency), each section attenuates approximately:
- 1-section Pi: ~36 dB
- 2-section Pi cascade: ~72 dB
- 3-section Pi cascade: ~108 dB

### Impedance Matching Between Sections

When two filter sections are cascaded, the output impedance of the first section must match the input impedance of the second. Both sections should be designed for the same Z₀. If a capacitor sits at the junction between two Pi filters, the two shunt capacitors at the junction can be combined into one capacitor of double the value — reducing the total component count.

### Practical Limits

Physical parasitic effects (inductor self-resonance, capacitor series inductance) limit useful attenuation at high frequencies to approximately 80–100 dB regardless of how many sections are added. At VHF and above, the inductors' self-resonant frequency may be within the filter's stop band, significantly limiting performance. For VHF/UHF harmonic suppression, low-pass filter design must use high-quality, physically small components with self-resonant frequencies well above the highest harmonic of interest.

> [INFO] **13J1:** Cascade filters to increase attenuation: each identical section adds the same dB. Two 3-element Pi sections give approximately twice the dB attenuation of one. At VHF/UHF, component parasitics limit the achievable attenuation — two well-designed sections are usually more effective than one over-optimistic section.

---

## §13K — Coaxial Cable Choice (13K1)

The outer conductor (braid or foil) of coaxial cable acts as the shield that prevents RF on the inner conductor from radiating and prevents external fields from reaching the inner conductor. The effectiveness of this shielding depends on the cable construction.

### Braid Coverage

Standard thin coax (RG-58): braid coverage approximately 95%. The gaps in the braid allow a small amount of energy to pass through the shield — characterised as **transfer impedance** Z<sub>T</sub> (Ω/m).

Higher braid coverage → lower transfer impedance → better shielding.

### Cable Types and Shielding Effectiveness

| Cable | Construction | Shielding effectiveness | Typical use |
|-------|-------------|------------------------|-------------|
| RG-58 | Single braid ~95% | ~40 dB | General HF, Intermediate use |
| RG-213 | Single heavy braid ~98% | ~45 dB | Standard Full-licence HF/VHF |
| RG-214 | Double-screened (braid + foil) | ~80–90 dB | VHF/UHF, sensitive RX |
| Ecoflex/Aircell | Foam dielectric, copper foil + braid | 100+ dB | High-performance HF/VHF |
| Triax | Braid + foil + outer braid | >100 dB | Laboratory, test equipment |

A **double-screened** cable (foil inner shield + outer braid) provides dramatically better shielding. The foil provides continuity that the braid gaps cannot; the braid provides mechanical protection. Double-screened coax at 144 MHz may provide 40–50 dB more screening than single-braid.

### When to Use Double-Screened Cable

- Feeding a receiver masthead preamplifier near noise sources
- Routing feeder past SMPS units or PLT adapters in the home
- Any run where the feeder is close to computer equipment, inverters, or solar panels
- VHF/UHF where higher frequencies are more easily coupled through braid gaps

> [INFO] **13K1:** Braid coverage and transfer impedance characterise shielding effectiveness. Double-screened coax (foil + braid) provides 40–50 dB more shielding than single braid at VHF. Use double-screened cable when routing feeder past noise sources or in EMC-sensitive installations.

---

## §13L — Mains Interference Filters (13L1)

The mains supply is a shared conducted-interference bus. RF from the transmitter PA (conducted out via the SMPS in the transceiver), and noise from domestic electronics (conducted in via the same mains), both require filtering.

### Mains Filter Components

A complete mains filter contains three elements:

**X Capacitors** — connected **across the line conductors** (L to N). They present low impedance to differential-mode mains interference (the interference that appears as a voltage between L and N). Safe for continuous connection across the mains — designed to fail open-circuit if they break down.

**Y Capacitors** — connected **between each line conductor and earth** (L to earth, N to earth). They present low impedance to common-mode interference between line and ground. Ground-referenced; they divert CM noise currents to earth.

**CM Choke** — a pair of inductors wound on a shared ferrite core, connected in series with L and N. The DM mains current (opposite in the two windings) creates zero net flux in the core — minimal DM impedance. CM noise (same direction in both windings) creates additive flux — high CM impedance. This is exactly the same principle as the coax CM choke, applied to the mains.

### Mains Filter Circuit

```
L ──[CM choke L]──[Xc across L-N]──[Yc L-E]── To equipment
N ──[CM choke N]──                 ──[Yc N-E]── To equipment
E ───────────────────────────────────────────── To equipment
```

The X capacitor(s) and Y capacitors are typically inside the same component. IEC inlet mains filters (a common component used in equipment) integrate X caps, Y caps, and a CM choke into one module with a standard IEC 320 socket.

### Y Capacitor Safety Limit (13L1)

Y capacitors connected from live to earth carry leakage current to earth. The maximum Y capacitor value is limited by safety standards to ensure the earth leakage current does not present a shock hazard or trip the earth leakage circuit breaker:

> **Maximum Y capacitor per line: 4.7 nF (Class Y2) for single-phase mains equipment**

At 50 Hz mains frequency, 4.7 nF has a reactance of 677 kΩ — the resulting leakage current is:
I<sub>leakage</sub> = 230 V / 677 kΩ ≈ **0.34 mA per capacitor**

With Y caps on both L and N, total leakage is approximately 0.68 mA — within the safe limit of 3.5 mA required by IEC 60950.

> [DANGER] Never increase Y capacitor values beyond the rated maximum. Larger Y caps increase earth leakage current — in a PME (Protective Multiple Earthing) system where the neutral bonded to earth may rise in potential during a supply fault, increased leakage current can cause electric shock. 4.7 nF per conductor is the maximum.

> [INFO] **13L1:** Mains filter structure: X caps across L-N (DM), Y caps from each line to earth (CM), CM choke in series with both conductors. Maximum Y cap value: 4.7 nF (leakage current limit). IEC inlet filter modules integrate all three components. Prefer equipment with a built-in IEC mains filter.

---

## §13M — Notch Filters (13M1)

A notch filter (band-stop filter) is a highly selective filter that deeply attenuates a specific narrow frequency band while passing all others with minimal loss. It is the appropriate tool when a single strong interferer needs to be rejected without affecting the broader signal path.

### When to Use a Notch Filter

- A powerful local FM broadcast station is entering the HF receiver front end and desensitising it
- A nearby DAB transmitter on 200–230 MHz is reaching the 2 m low-noise amplifier
- A specific amateur band is being interfered with by a single source (e.g. AM broadcast on 1.215 MHz harmonically producing a signal at 3.645 MHz, coinciding with 80 m)

### Parallel LC Trap

The simplest notch filter is a parallel LC circuit placed in shunt across the signal path. At resonance (fr = 1/2π√LC), the parallel LC presents very high impedance to the main signal path, creating a low-impedance shunt that diverts the interfering frequency to ground — which appears as a notch in the response.

The depth of the notch is limited by the Q of the LC circuit. A high-Q inductor (low winding resistance) produces a deep, narrow notch. A low-Q inductor produces a shallower, broader notch.

Alternatively, a series LC in **series** with the signal path presents very low impedance (near-short circuit) at resonance, short-circuiting the interfering frequency.

> [INFO] **13M1:** A notch filter rejects a specific frequency while passing others. Use when a single strong interferer dominates — a parallel LC trap across the signal line, or a series LC trap in line. Notch depth is limited by inductor Q; high-Q air-wound inductors give the deepest notches.

---

## §13N — Equipment-Specific Interference (13N1)

Different types of victim equipment respond differently to amateur RF, and different remedies are appropriate for each.

### BC AM Radio (Medium Wave) — RF Rectification

Medium-wave broadcast receivers (MW radios) operating on 531–1602 kHz are designed to detect amplitude-modulated signals at those frequencies. When an amateur HF transmission couples onto the antenna or speaker leads, the AM-modulated SSB or CW signal can be **rectified by protection diodes or semiconductor junctions inside the equipment**, producing audio output at SSB audio frequencies — voices or Morse code audible from a neighbour's radio even though it is tuned to a completely different frequency.

This is **RF rectification** (also called demodulation by non-linearity). The remedy is to fit a **ferrite choke on the antenna lead** of the radio, plus a **bypass capacitor to ground** on the audio input, to prevent RF from entering the audio circuit.

### DVB-T Digital Television (Freeview) — LTE and 4G Co-channel Issues (13N1)

Freeview in the UK uses UHF channels 21–69 (470–854 MHz). Following the digital switchover and subsequent 4G LTE spectrum clearance (Ofcom's 800 MHz auction), LTE services now operate on channels 21–30 (470–550 MHz) in some areas.

More relevantly for amateurs: HF amateur signals reaching the aerial amplifier or TV input can cause **overload** of the low-noise amplifier (LNA) in an aerial distribution amplifier. The LNA clips, generating intermodulation products that interfere with Freeview channels. Symptoms include pixelation, loss of multiple channels simultaneously, and interference that correlates precisely with the transmitter being on.

Remedy: a **high-pass filter at the aerial input** (fc = 450 MHz) preventing HF and VHF reaching the distribution amplifier; isolation between shack feeder and TV aerial system.

### DECT Cordless Phones — 1880–1900 MHz Interference

DECT phones operate in the 1880–1900 MHz band. HF amateur signals do not normally interfere with DECT directly. However, RF entering the DECT base station's power supply or handset charging lead via conducted coupling can desensitise the base station or cause audio interference.

Remedy: ferrite CM choke on the base station mains lead; keep the base station physically separated from the amateur station.

### Hi-Fi Systems — RF into Amplifier Inputs (13N1)

Hi-fi audio amplifiers typically have input impedances of 10–100 kΩ. At these impedances, the connecting leads (audio interconnects from CD player, tuner, etc.) act as efficient RF antennas at HF. The RF signal couples onto the unbalanced interconnect and is rectified by the transistor junctions in the preamplifier stage — producing audio-frequency output even when the amplifier is "doing nothing."

Remedy: **ferrite choke on each audio interconnect lead** at the entry to the amplifier; small bypass capacitors (1 nF ceramic) from signal pin to screen at the amplifier input sockets; use shorter interconnects or balanced (XLR) connections where possible.

### Computers and PLT (Powerline Telecommunications) (13N1)

**PLT (Powerline Telecommunications)** adapters use the mains wiring to carry broadband internet data, using frequencies from approximately 1 MHz to 30 MHz — directly overlapping the HF amateur bands. PLT is **the single most significant source of interference to amateur HF reception** in many urban areas.

PLT produces conducted interference on the mains (which then radiates from mains wiring throughout the house) and directly radiated interference from the wiring acting as an antenna. Unlike most other interference sources, PLT is by design transmitting significant power at HF frequencies.

The RSGB has campaigned extensively on PLT; Ofcom has issued guidance but has not banned PLT. The RSGB EMC Advisory Service and Ofcom Spectrum Management team handle PLT complaints.

Computers themselves generate broadband conducted noise from SMPS (see §13P). The clock harmonics from digital circuitry appear as narrowband signals at regular intervals across HF.

### Alarms and PIR Detectors

Passive infrared (PIR) security sensors and alarm panels can be triggered by strong RF fields — a phenomenon known as **RF immunity failure**. Symptoms: false alarms triggered when the transmitter is switched on; the equipment re-triggers periodically at the transmitter keying rate.

Remedy: fit ferrite chokes on all cables entering the alarm panel; add bypass capacitors to the sensor inputs; contact the alarm company — the CE-marked equipment should be immune to the RF levels produced by a licensed amateur station and the manufacturer may need to address the immunity failure.

> [INFO] **13N1:** Each equipment type responds to RF differently. BC radios suffer rectification; TVs suffer overload of aerial amplifiers; hi-fi systems suffer rectification at audio inputs; PLT adapters create interference rather than suffering from it. Match the remedy to the mechanism: ferrite choke and bypass cap for rectification; HPF for TV; CM choke on mains for conducted emissions.

---

## §13O — Telephone Line RFI (13O1)

Telephone lines (both PSTN copper and the local loop for ADSL/VDSL broadband) are balanced pairs designed for audio frequencies. Amateur HF signals couple onto the line via:

1. **Radiated coupling** — the line acts as an aerial for the amateur signal
2. **Inductive coupling** — the loop formed by the telephone cable and ground couples magnetic flux from nearby antennas
3. **Conducted coupling** — RF enters via the mains connection of the DECT base or DSL modem

### Effects on Telephone Equipment

RF on the telephone line can be detected by:
- The handset microphone or earpiece leads (rectification at the internal semiconductor, producing audio from an SSB transmission — your voice heard in the neighbour's ear)
- The ADSL/VDSL modem (RF at amateur frequencies raises the noise floor, reducing broadband sync speed)

### Remedies for Telephone RFI (13O1)

- **Ferrite CM choke on the telephone line** at the point where it enters the equipment. Wind 4–6 turns of the telephone cable through an FT50-31 or FT82-31 toroid.
- **Bypass capacitor** (100 pF–1 nF) from each line conductor to the handset shield/screen — provides CM decoupling at RF without affecting audio
- For ADSL noise: keep amateur feeder cables at least 0.5 m from telephone lines; fit a low-pass filter on the telephone entry point (some DSL filters include CM choke stages)
- Check your own equipment: the amateur station itself should not be producing mains-conducted RF at telephone frequencies

> [INFO] **13O1:** Telephone interference is caused by RF coupling onto the balanced telephone pair. Ferrite CM chokes and bypass capacitors on the handset and line-entry point are the primary remedies. SSB audio heard in a phone indicates rectification at semiconductor junctions inside the phone — the choke prevents RF entering the circuit.

---

## §13P — Computer and SMPS RFI (13P1)

Switch-mode power supplies (SMPS) are present in virtually every modern electronic device — PC power supplies, laptop chargers, phone chargers, LED drivers, and modern amateur transceivers. All produce RF noise as a by-product of their switching operation.

### SMPS Noise Generation

An SMPS switches transistors at frequencies typically ranging from 20 kHz to 500 kHz. The switching waveforms are rich in harmonics — a 100 kHz SMPS produces harmonics at 200, 300, 400 kHz, 1 MHz, 2 MHz, ... up through the HF spectrum and beyond.

Each harmonic is conducted back along the mains supply (conducted emission) and radiated from the SMPS enclosure and its cabling (radiated emission). In total, an unfiltered SMPS would cover the entire HF spectrum with a forest of narrowband spurs.

Modern SMPS units are required to meet the **EN 55032** emissions standard (conducted and radiated limits) to obtain CE/UKCA marking. However:
- Cheap uncertified chargers (especially grey-market imports) often do not comply
- Even compliant SMPS can cause localised interference at close range to a sensitive HF receiver
- Multiple SMPS in a shack environment raise the local noise floor cumulatively

### Identification

On a spectrum analyser or SDR waterfall: regular combs of narrowband peaks separated by the fundamental SMPS switching frequency. Switch off suspect devices one at a time to identify the source.

### Remedies for SMPS RFI (13P1)

- **Mains filter on the offending SMPS:** if the SMPS does not have an adequate internal mains filter, add an external IEC inlet filter module in series with its mains lead
- **Ferrite CM choke on the output leads** of the SMPS (12V or 5V DC leads): addresses conducted noise on the DC side
- **Replace** uncertified cheap chargers with quality CE-marked alternatives — the price difference is small and the emissions difference can be 20–40 dB
- **Physical separation:** moving the SMPS further from the receiver or feeder can reduce radiated coupling sufficiently
- **Shielded enclosure:** placing an offending device in a grounded metal enclosure with filtered cable entries; practical for a single problem device

> [INFO] **13P1:** SMPS noise appears as a comb of regularly spaced spurs across the HF spectrum. Identify by switching suspect devices off one at a time. Remedy: mains filter + CM choke on DC leads. Replace uncertified grey-market chargers. CE-marked quality SMPS units include adequate internal filters.

---

## §13Q — The Complaint Procedure (13Q1)

When interference occurs that you cannot resolve unilaterally, a structured procedure maximises the chance of resolution while maintaining good relations with your neighbour.

### Step 1 — Verify Your Own Equipment First

Before approaching anyone: **eliminate yourself as the cause**.

- Test on a **dummy load** — if the interference disappears when the dummy load replaces the antenna, the problem is with your transmitted signal (harmonics, spurious emissions, or excessive power reaching nearby equipment)
- Check all spurious emissions with a spectrum analyser or a second receiver
- Ensure low-pass filter is fitted at the transmitter output and is functional
- Confirm operation is within licence conditions (power, band, mode)

### Step 2 — Keep a Log

Maintain a detailed interference log including:
- Dates and times of interference incidents
- Your operating frequency, mode, and power
- Your antenna type and direction (if directional)
- Nature of the interference reported (which equipment affected, what symptoms)
- Weather conditions (relevant for tropospheric ducting-based interference patterns)

The log is essential evidence if the matter is escalated to Ofcom.

### Step 3 — Approach the Neighbour

Approach non-confrontationally. Most neighbours do not know what amateur radio is. A brief, friendly explanation of what you do and an offer to investigate and, if possible, fit a ferrite choke or filter free of charge resolves the majority of cases.

Avoid: arguing about rights; suggesting it is their equipment's fault (even if it is); discussing the legal position until you have exhausted practical remedies.

### Step 4 — RSGB EMC Advisory Service

The RSGB operates an **EMC Advisory Service** (free to RSGB members) staffed by experienced amateurs who have handled hundreds of interference cases. They can:
- Provide advice on the likely cause and remedy
- Recommend appropriate commercial filters
- Supply template letters
- Advise whether the neighbour's equipment is legally required to be immune

Contact via the RSGB website; expected response time is typically a few working days.

### Step 5 — Ofcom Spectrum Management

If the neighbour's equipment is causing interference and is either:
- Non-compliant (CE/UKCA mark absent or falsely claimed, or demonstrated to exceed emission limits), **or**
- The operator refuses to take reasonable steps to resolve it

...then Ofcom's Spectrum Management team can investigate. Ofcom can issue enforcement notices requiring cessation of interference-causing use and can take further action for non-compliance.

For PLT-specific complaints: report to Ofcom using their online interference reporting tool; include your log, screenshots of the interference on an SDR waterfall or spectrum analyser, and the dates/times.

> [INFO] **13Q1:** Complaint procedure: (1) verify your own equipment (dummy load test); (2) keep a log; (3) approach the neighbour non-confrontationally; (4) contact RSGB EMC Advisory Service; (5) escalate to Ofcom Spectrum Management if legal non-compliance is demonstrated. Most cases are resolved at step 3 or 4.

---

## §13R — Shack EMC: Earth Loops and RF in Equipment (13R1)

The shack itself can be a source of self-interference: RF from the transmitter enters connected equipment (logging PC, audio interface, microphone preamplifier) via CM currents on interconnecting cables. This is both an EMC problem and a practical operating problem — your own voice heard in your own headphones, or RF hash appearing in the audio.

### Single-Point Earthing

The classical remedy is **single-point earthing** (star topology):

- One single earth bus bar (a copper bar or plate) in the shack
- All equipment chassis bonded **individually** to this bar with short, wide conductors (braid or copper strip, NOT wire)
- The bar is connected to the shack earth point (system earth) at one single connection

This prevents **earth loops** — closed loops formed by two or more pieces of equipment connected to earth at different points. A loop in an RF field acts as a one-turn pickup antenna; the induced current flows through the equipment and creates interference. Single-point earthing eliminates the loop by removing the alternative earth paths.

### RF in Microphone and Audio Cables

The microphone cable from the desk microphone to the transceiver carries a balanced audio signal but is often a single-screened cable at close range. RF from the transmitter (particularly at HF where the wavelength is comparable to the cable length) drives CM current on the outer screen, which enters the preamplifier stage.

Remedies:
- **Ferrite CM choke** on the microphone cable, close to the transceiver input
- Use a **balanced microphone and balanced input** — both conductors carry the signal in opposition; CM interference cancels in the differential input stage
- Keep microphone cables short and away from the feeder

### RF in PC USB and Serial Interfaces

Digital audio interfaces, logging programs, CAT control, and SDR dongles all connect via USB, which is unshielded or lightly shielded. RF enters the USB cable as a CM current and appears as:
- Transmitter audio appearing in the digital interface's monitoring output
- CAT commands corrupted, causing the logging program to lose contact with the transceiver
- SDR dongle showing intermittent lock loss when the transmitter keys

Remedies:
- **Ferrite choke** on every USB cable entering and leaving the shack
- **Galvanic isolator** (USB or audio isolator) between the computer and the radio-side equipment — breaks the ground loop completely
- Keep the computer and its cabling away from the feeder; avoid routing USB cables parallel to feeder runs

### Shack Earth Loop — the Common Case

**Scenario:** transceiver ground → PC audio card ground via audio cable → PC mains earth → mains distribution board → transceiver mains → transceiver ground. This forms a large earth loop enclosing significant area. RF in this loop appears as hum, buzz, or feedback on transmit.

**Diagnosis:** disconnect the audio cable between PC and transceiver — interference disappears.

**Remedy:** add a ferrite CM choke on the audio interconnect; or use a proper audio galvanic isolator (1:1 transformer) to break the loop.

> [INFO] **13R1:** Single-point earthing (star topology) prevents earth loops. Ferrite CM chokes on every cable entering the shack address radiated and conducted CM coupling. For persistent problems, galvanic isolators on audio and USB break ground loops completely. RF in audio is a CM problem — the differential signal itself is not affected; a CM choke cures it without affecting audio quality.

---

## §13 Self-Check

**Q1:** A transmitter radiates 100 W into a unity-gain antenna. What is the electric field strength at 10 m distance?

> **A:** E = √(30 × 100 × 1) / 10 = √3000 / 10 ≈ **5.5 V/m.** Use the formula E = √(30PG)/r.

---

**Q2:** At what distance from a 40 m band transmitter does the far field begin?

> **A:** λ at 7 MHz = 300/7 ≈ 42.9 m. Far-field boundary ≈ λ/2π = 42.9/6.28 ≈ **6.8 m.** Neighbours within 7 m are in the near field; the formula E = √(30PG)/r does not apply there.

---

**Q3:** What distinguishes common-mode current from differential-mode current, and why does CM current cause more interference?

> **A:** DM current flows in opposite directions in the two conductors — the fields cancel at distance. CM current flows in the same direction in both — the fields add, making the cable radiate like a single conductor. A small CM current can produce field strengths comparable to much larger DM signal currents.

---

**Q4:** Calculate the inductor and capacitor values for a Pi low-pass filter with f<sub>c</sub> = 30 MHz and Z₀ = 50 Ω.

> **A:** L = 50/(2π × 30×10⁶) = **265 nH.** C = 1/(2π × 30×10⁶ × 50) = **106 pF.** Pi topology: 106 pF shunt → 265 nH series → 106 pF shunt.

---

**Q5:** A mains filter contains Y capacitors of 4.7 nF from each line to earth. Why must this value not be increased?

> **A:** Y capacitors pass leakage current to earth at mains frequency. 4.7 nF at 50 Hz presents 677 kΩ; 230 V drives 0.34 mA per capacitor. Increasing C reduces X<sub>C</sub> and increases leakage current. Above ~3.5 mA total earth leakage the RCD trips and there is a shock hazard — particularly dangerous in PME installations where the earth conductor may be at elevated potential.

---

**Q6:** A neighbour's hi-fi is picking up voice audio when you transmit on 14 MHz. What is the most likely cause and remedy?

> **A:** RF rectification at semiconductor junctions inside the amplifier's input stage. RF couples onto the unbalanced audio interconnect leads and is demodulated. Remedy: fit a ferrite CM choke (Mix 31 or 43) on each audio lead at the amplifier input, plus a 100 pF capacitor from signal to screen at the input sockets. This prevents RF reaching the junction without affecting audio frequencies.

---

*Content derived from RSGB Full Licence Manual (G0HIQ) Ch. 13. Cross-reference: Intermediate §6 EMC, Full §11 coax/shielding, Full §8 spurious emissions.*
