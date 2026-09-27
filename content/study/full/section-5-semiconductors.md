# Section 5: Semiconductors

<!-- Exam weight: ~12–16% (~6–7/46 questions) -->
<!-- Sub-sections: 5A–5J -->
<!-- Syllabus refs: 5A1, 5B1, 5C1, 5D1, 5E1, 5F1, 5G1, 5H1, 5I1, 5J1 (all [VERIFY]) -->
<!-- RSGB source: Full Licence Manual 3rd Ed, Chapter 5 (pp 31–38) -->
<!-- New at Full vs Intermediate: quantified CE/CB/CC impedances; load-line analysis; Class A/AB/B/C Q-points; dual-gate MOSFET; IGFET gate impedance; series-pass regulated PSU with feedback; IC 78xx regulator; switch-mode PSU (SMPS) block diagram and RF noise implications -->

Chapter 5 builds directly on the semiconductor foundations from Intermediate level. At Full level the emphasis shifts from "what does it do" to "how is it configured, biased and analysed". You will need to know the three BJT configurations by their impedances and phase characteristics, draw and interpret a load line, classify amplifiers by bias point, and understand the block-level operation of switch-mode power supplies and their interference implications.

Cross-reference: <a href="../intermediate/section-2-electronics.html" target="_blank">Intermediate §2 — Electronics</a> covers P-N junction basics, diode rectification, and BJT introduction — this section builds directly on that foundation.

---

## 5A — The P-N Junction Diode

### 5A.1 — Semiconductor Material

Pure silicon is not a conductor — it has no free electrons. By adding trace impurities (**doping**) we create two types of semiconductor:

- **N-type:** doped with an element such as Arsenic; the extra electrons are free to move and become the charge carriers
- **P-type:** doped with an element such as Gallium; the reduced electron count creates "holes" — the absence of electrons — which behave as positive charge carriers

Neither n-type nor p-type is a conductor by itself; together, at the junction, they form a useful device.

### 5A.2 — The P-N Junction and Depletion Layer

When p-type and n-type material are brought together, excess electrons from the n-side fall into holes on the p-side. This creates a region near the junction — the **depletion layer** — that is swept clear of mobile charge carriers. The depletion layer acts as an insulating barrier.

![Fig 5.1 — Semiconductor diode structure showing depletion layer](/assets/images/study/full/section-5/fig-5-1.svg)

**Forward bias:** connect the positive supply to the p-end (anode) and negative to the n-end (cathode). The depletion layer collapses and current flows. There is a small forward voltage drop:
- **~0.6 V** at the onset of conduction (silicon)
- **~0.7 V** at higher currents (as ohmic resistance increases)

**Reverse bias:** polarity reversed; the depletion layer widens; no current flows (apart from a minute leakage due to residual impurities). Diodes can withstand reverse voltages from 60 V to over 1200 V depending on construction.

### 5A.3 — Diode I–V Characteristics

![Fig 5.2 — Diode I-V curve: forward bias rises sharply above 0.6V; reverse bias leakage until breakdown](/assets/images/study/full/section-5/fig-5-2.svg)

The I–V curve shows:
- Forward region: current negligible until ~0.6 V, then rises rapidly
- Reverse region: tiny leakage current; catastrophic breakdown if the **Peak Inverse Voltage (PIV)** rating is exceeded

> [INFO] **5A1 [VERIFY]:** The ~0.6 V forward drop of a silicon diode is a frequently tested value. In calculations involving rectifier circuits, subtract 0.6 V (or 0.7 V) from the supply voltage to find the actual output voltage across the load.

---

## 5B — Rectifier Circuits

### 5B.1 — Half-Wave Rectifier

The simplest rectifier: a single diode in series with the load. Only the positive half-cycles pass; the negative half-cycles are blocked.

![Fig 5.3 — Half-wave rectifier: diode + load resistor; output waveform shows only positive half-cycles](/assets/images/study/full/section-5/fig-5-3.svg)

The voltage across the load resistor = V<sub>supply</sub> − 0.6 V (on positive half-cycles); zero on negative half-cycles.

### 5B.2 — Smoothing Capacitor

Adding a reservoir capacitor across the load converts the pulsing half-wave output to a roughly DC voltage with superimposed ripple.

![Fig 5.4 — Half-wave rectifier with reservoir capacitor and switch](/assets/images/study/full/section-5/fig-5-4.svg)

**How it works:** On the first positive half-cycle the capacitor charges to the peak supply voltage (minus the diode drop). When the supply voltage starts to fall, the diode becomes reverse-biased and the capacitor discharges slowly through the load — maintaining the output voltage until the next positive peak tops it up.

**Ripple vs capacitor size (Fig 5.5):**
- **Small capacitor:** short time constant CR; voltage falls almost to zero before the next recharge pulse — large ripple
- **Large capacitor:** long time constant; voltage barely falls between recharge pulses — small ripple

![Fig 5.5 — Large vs small smoothing capacitor: ripple amplitude comparison](/assets/images/study/full/section-5/fig-5-5.svg)

**Peak Inverse Voltage:** In a half-wave circuit with a reservoir capacitor, the capacitor holds the output positive while the supply swings negative. The diode must therefore withstand the peak supply voltage plus the capacitor voltage — approximately **twice the peak supply voltage (2 × V<sub>peak</sub>)**. The diode PIV rating must exceed this.

**Diode current rating:** The diode conducts only briefly each cycle (a narrow pulse) but must supply all the charge lost by the capacitor during discharge. The peak diode current is much greater than the average load current; choose a diode rated for the peak pulse current, not just the average.

### 5B.3 — Full-Wave Rectifier (Centre-Tap)

Using a centre-tapped transformer and two diodes gives two charges per cycle — one from each half of the winding.

![Fig 5.6 — Full-wave rectifier with centre-tapped transformer (D1 and D2)](/assets/images/study/full/section-5/fig-5-6.svg)

- On positive half-cycles: D1 conducts (top winding)
- On negative half-cycles: D2 conducts (bottom winding)
- Each diode carries only half the total current
- Ripple frequency = **twice** the supply frequency (100 Hz from 50 Hz mains)
- PIV on each diode = 2 × peak voltage (same issue as half-wave)

### 5B.4 — Bridge Rectifier

The bridge circuit (four diodes, no centre-tap required) is the most commonly used full-wave rectifier.

![Fig 5.7 — Full-wave bridge rectifier (D1–D4)](/assets/images/study/full/section-5/fig-5-7.svg)

- **Positive half-cycles:** current flows through D1, the load, D3 and back to the transformer
- **Negative half-cycles:** current flows through D2, the load, D4 and back
- Current through the load is always in the same direction — full-wave rectification without a centre-tap
- Each diode carries half the average load current; PIV = peak supply voltage (lower than centre-tap arrangement)

> [INFO] **5B1 [VERIFY]:** The bridge rectifier is the standard, most practical full-wave rectifier. Know the four-diode diamond arrangement and be able to trace current flow for both half-cycles.

---

## 5C — Special Diodes

### 5C.1 — Zener Diode

A zener diode is designed to operate in **reverse breakdown** at a specific, well-defined voltage (the zener voltage V<sub>z</sub>). Unlike a normal diode, this breakdown is **non-destructive** provided the current is limited by a series resistor to keep dissipation within the device rating.

**Types:** Zener effect (below ~5 V) and avalanche effect (above ~6 V). The distinction matters for temperature coefficient but both are commonly called "zener diodes."

![Fig 5.8 — Zener diode I-V curve showing sharp reverse breakdown at V_z](/assets/images/study/full/section-5/fig-5-8.svg)

**Power dissipation:** P = V<sub>z</sub> × I (where I is the current flowing through the device)

**As a voltage reference:** Connect a series resistor R<sub>S</sub> between the supply and the zener; the output voltage across the zener is held at V<sub>z</sub> regardless of moderate changes in supply or load current.

![Fig 5.10 — Simple zener voltage reference: R_S + zener from 12V gives stabilised 9.6V output](/assets/images/study/full/section-5/fig-5-10.svg)

Available in voltage ranges from **3 V to 150 V**; power ratings from **200 mW upward**.

### 5C.2 — Varactor (Varicap) Diode

The varactor diode exploits the capacitance of a reverse-biased P-N junction. In reverse bias:
- The depletion layer acts as the **dielectric** of a capacitor
- The P and N regions either side act as the **plates**
- **Increasing reverse bias widens the depletion layer → reduces capacitance**

![Fig 5.11 — Varactor capacitance vs reverse voltage (falls as voltage increases, typically 5–40 pF range)](/assets/images/study/full/section-5/fig-5-11.svg)

**Application:** Voltage-controlled tuning. Apply a DC tuning voltage to the varactor in a tuned circuit and the resonant frequency changes without any mechanical moving parts. Used in VFOs, PLL synthesisers and AFC circuits.

> [INFO] The varactor is always reverse biased in use — it is a capacitor, not a current-carrying device.

### 5C.3 — Other Diodes (Brief Reference)

| Type | Key property | Typical use |
|------|-------------|-------------|
| **Schottky** | Very low forward drop (~0.2 V); fast switching | RF detectors, high-speed rectifiers, mixers |
| **LED** | Emits light when forward biased; GaAs/GaP etc | Indicators, optoelectronics |
| **PIN** | Wide intrinsic layer; acts as variable resistor at RF | RF switches, attenuators |
| **Tunnel** | Quantum tunnelling; negative resistance region | Oscillators, microwave amplifiers |
| **Varistor (TVS)** | Clamps transient overvoltages | Transient protection |

---

## 5D — Bipolar Junction Transistors

### 5D.1 — NPN Structure and Operation

The **bipolar junction transistor (BJT)** is a single crystal doped into an NPN (or PNP) sandwich. The NPN type is most common.

![Fig 5.13 — NPN transistor: emitter (e), base (b), collector (c) with current directions](/assets/images/study/full/section-5/fig-5-13.svg)

- **Emitter:** connected to the 0 V reference (or negative supply for NPN)
- **Base:** the control terminal; a small positive voltage (≥0.6 V) causes a small base current
- **Collector:** connected to the positive supply via a load; a much larger collector current flows

The key relationship — **current gain β (also written h<sub>FE</sub>):**

> **I<sub>C</sub> = β × I<sub>B</sub>**

A typical small-signal transistor has β of several hundred; a power transistor may have β of only 25. β is quoted in data sheets as h<sub>fe</sub> (AC) or h<sub>FE</sub> (DC) and they are approximately equal.

**PNP transistor:** identical in principle but all polarities reversed — the emitter is connected to the positive supply and the collector pulls current down through the load.

### 5D.2 — Transistor Characteristics

**Transfer characteristic (Fig 5.14, left):** I<sub>C</sub> vs V<sub>BE</sub> — an exponential curve showing how collector current grows with base-emitter voltage.

**Output characteristics (Fig 5.14, right):** I<sub>C</sub> vs V<sub>CE</sub> for a family of base currents (I<sub>B</sub> = 0, 20 μA, 40 μA, 60 μA). Key observation: above a few tenths of a volt, I<sub>C</sub> is almost independent of V<sub>CE</sub> and is set almost entirely by I<sub>B</sub>. The transistor behaves as a **current-controlled current source**.

![Fig 5.14 — Transistor characteristics: I_C vs V_BE (left) and I_C vs V_CE family curves (right)](/assets/images/study/full/section-5/fig-5-14.svg)

### 5D.3 — Simple Biasing and Its Instability

To amplify a signal the transistor must be **biased** — given the correct quiescent (no-signal) DC voltages and currents.

**Simple bias (single base resistor R<sub>B</sub>):**

![Fig 5.15 — Simple bias: R_B sets I_B, R_C is the collector load](/assets/images/study/full/section-5/fig-5-15.svg)

**Example** (V<sub>CC</sub> = +10 V, target I<sub>C</sub> = 10 mA, V<sub>C</sub> = 5 V, β = 100):
- R<sub>C</sub> = V/I = 5/0.01 = 500 Ω
- V<sub>BE</sub> ≈ 0.6 V, so V<sub>B</sub> ≈ 0.6 V
- I<sub>B</sub> = I<sub>C</sub>/β = 10 mA/100 = 100 μA
- R<sub>B</sub> = (10 − 0.6)/100 μA = 94 kΩ

**The instability problem:** if β is actually 200 (BC108 spreads from 110 to 800), then I<sub>C</sub> = 200 × 100 μA = 20 mA, V<sub>C</sub> = 10 − 20 mA × 500 Ω = 0 V — the transistor is saturated and the circuit fails to amplify.

### 5D.4 — Stable Bias: Potential Divider and Emitter Resistor

The stable bias circuit (Fig 5.18) adds:
1. **R1/R2 potential divider** — holds the base voltage constant regardless of β variation (provided the divider current >> I<sub>B</sub>)
2. **Emitter resistor R4** — applies negative feedback: if I<sub>C</sub> rises, I<sub>E</sub> rises, V<sub>E</sub> rises, V<sub>BE</sub> falls, I<sub>B</sub> falls, I<sub>C</sub> falls

![Fig 5.17 — Improved bias with emitter resistor](/assets/images/study/full/section-5/fig-5-17.svg)
![Fig 5.18 — Stable bias: R1/R2 divider + emitter resistor R4 + bypass capacitor C3](/assets/images/study/full/section-5/fig-5-18.svg)

**Design example** (V<sub>CC</sub> = +10 V, I<sub>C</sub> = 1 mA, V<sub>C</sub> = 5 V, V<sub>E</sub> = 1.5 V, β = 100):
- R<sub>C</sub> = (10 − 5)/1 mA = 4 kΩ (≈ R3 in Fig 5.18)
- R<sub>E</sub> = 1.5 V/1 mA = 1.5 kΩ (≈ R4)
- Base voltage V<sub>B</sub> = 1.5 + 0.6 = 2.1 V
- Divider current chosen >> I<sub>B</sub> (e.g. 100 μA):
  - R2 = 2.1 V / 100 μA = 21 kΩ
  - R1 = (10 − 2.1) / 100 μA = 79 kΩ

**Emitter bypass capacitor C3** (50–200 μF): at AC signal frequencies, C3 short-circuits R4, restoring the full AC gain. Without C3, R4 reduces voltage gain at signal frequencies (a useful deliberate trade-off in some designs, but not usually wanted).

**Coupling capacitors C1/C2** block DC between stages while passing the AC signal.

> [INFO] **5D1 [VERIFY]:** The potential divider bias is the standard, stable bias circuit for Full exam purposes. Know: (a) why single base resistor bias is unstable, (b) how R1/R2 + R4 provides stability via negative feedback, (c) the role of C3 in restoring AC gain.

---

## 5E — BJT Circuit Configurations

The same transistor can be wired in three fundamentally different configurations depending on which terminal is **common** (connected to both input and output reference).

### 5E.1 — Common Emitter (CE)

The emitter is common to both input and output circuits.

![Fig 5.20 — Common emitter configuration: Z_in ~1kΩ, Z_out ~5kΩ, medium gain, phase inversion](/assets/images/study/full/section-5/fig-5-20.svg)

| Parameter | Typical value |
|-----------|--------------|
| Input impedance Z<sub>in</sub> | ~1 kΩ (medium-low) |
| Output impedance Z<sub>out</sub> | ~5 kΩ (medium) |
| Voltage gain | Medium to high |
| Current gain | Yes (β) |
| Phase | **180° inversion** — output is inverted relative to input |

**Why phase inversion?** A positive input increases V<sub>BE</sub> → I<sub>B</sub> increases → I<sub>C</sub> increases → more voltage across R<sub>C</sub> → collector voltage falls. Output goes down when input goes up.

**Most commonly used configuration** for audio and RF amplifiers.

### 5E.2 — Common Base (CB)

The base is common to both input (emitter) and output (collector).

![Fig 5.21 — Common base configuration: Z_in ~50Ω, Z_out ~50kΩ, voltage gain only, no phase inversion](/assets/images/study/full/section-5/fig-5-21.svg)

| Parameter | Typical value |
|-----------|--------------|
| Input impedance Z<sub>in</sub> | ~50 Ω (very low) |
| Output impedance Z<sub>out</sub> | ~50 kΩ (very high) |
| Voltage gain | High |
| Current gain | Less than 1 (no current gain) |
| Phase | No inversion — output in phase with input |

**Use case:** VHF and UHF stages where very low input impedance is needed to match coaxial feeders; the common base configuration has the highest maximum operating frequency of the three.

### 5E.3 — Common Collector (Emitter Follower)

The collector is common to input and output; the output is taken from the emitter.

![Fig 5.22 — Emitter follower: Z_in 50kΩ–2MΩ, Z_out 10–500Ω, current gain, no voltage gain, no inversion](/assets/images/study/full/section-5/fig-5-22.svg)

| Parameter | Typical value |
|-----------|--------------|
| Input impedance Z<sub>in</sub> | 50 kΩ–2 MΩ (very high) |
| Output impedance Z<sub>out</sub> | 10–500 Ω (very low) |
| Voltage gain | ~1 (slight loss — output follows input) |
| Current gain | Yes |
| Phase | No inversion — output follows input |

**Use case:** impedance transformation and buffering — isolates a high-impedance source (e.g. oscillator) from a low-impedance load without degrading the signal. Commonly used as a buffer stage between a VFO and the next stage.

> [INFO] **5E1 [VERIFY]:** The three configurations summary:
> | | CE | CB | CC (EF) |
> |--|--|--|--|
> | Z<sub>in</sub> | Medium (~1kΩ) | Low (~50Ω) | High (50k–2MΩ) |
> | Z<sub>out</sub> | Medium (~5kΩ) | High (~50kΩ) | Low (10–500Ω) |
> | Phase | 180° inversion | In phase | In phase |
> | Current gain | Yes | No (<1) | Yes |

---

## 5F — Amplifier Bias Classes

The **bias class** describes where on the transistor's I<sub>C</sub> vs V<sub>BE</sub> curve the quiescent operating point (Q-point) is set, and therefore what portion of the input cycle the transistor conducts.

![Fig 5.24 — Load line with Q-points for Class A, AB, B and C bias positions](/assets/images/study/full/section-5/fig-5-24.svg)

### 5F.1 — Class A

- Q-point is set in the **centre** of the linear region
- Transistor conducts for the **full 360°** of the input cycle
- Output is a faithful replica of the input (assuming signal is not too large)
- **Advantages:** lowest distortion; no crossover artefacts
- **Disadvantages:** quiescent current is high (at least half the peak signal current) — wastes power as heat; inefficient (theoretical maximum ~50%)
- **Uses:** low-distortion audio stages; receiver IF amplifiers; low-level RF amplifiers

### 5F.2 — Class B

- Q-point at the **edge of conduction** (V<sub>BE</sub> ≈ 0.6 V); quiescent collector current is essentially zero
- Transistor conducts only during the **positive half-cycle** (for NPN)
- **Problem:** if a single transistor is used, the output is only the positive half — serious distortion
- **Solution:** push-pull pair — one transistor handles each half-cycle
- **Advantages:** very low quiescent dissipation; high efficiency
- **Disadvantages:** crossover distortion (small dead zone around the zero-crossing)

### 5F.3 — Class AB

- Q-point just above the onset of conduction — a **small quiescent current** flows
- Transistor conducts for slightly **more than 180°** of the cycle
- Practical compromise: eliminates crossover distortion of Class B while maintaining reasonable efficiency
- Most audio power amplifiers and push-pull RF PA stages use Class AB

### 5F.4 — Class C

- Base is **reverse-biased** beyond the cut-off — no quiescent collector current at all
- Transistor conducts only during the **peaks of large drive signals** (much less than 180° of the cycle)
- Output is a series of narrow current pulses rich in harmonics
- **Requires a tuned resonant circuit** at the output to reconstruct the fundamental
- **Advantages:** very high efficiency (theoretical ~75%); used in high-power RF transmitters
- **Disadvantages:** severe distortion — only usable with CW or FM, not SSB or AM

### 5F.5 — Class B Push-Pull Amplifier

![Fig 5.25 — Class B push-pull amplifier: Tr1 (NPN) and Tr2 (PNP) emitter followers, ±15V rails](/assets/images/study/full/section-5/fig-5-25.svg)

Both transistors are configured as emitter followers. On positive half-cycles Tr1 (NPN) conducts; on negative half-cycles Tr2 (PNP) conducts. The loudspeaker (or load) is the common emitter element. Small diodes in the bias network set both transistors just into conduction (Class AB in practice) to eliminate crossover distortion.

**Quiescent current is very low** → far less heat than Class A → critical advantage in battery-powered equipment.

---

## 5G — Field Effect Transistors

### 5G.1 — JFET Operation

The **junction FET (JFET)** has an n-type channel (source to drain) surrounded by a ring of p-type material. The p-n junction forms a depletion layer that intrudes into the channel.

![Fig 5.26 — Field effect transistor: n-channel, gate (g), source (s), drain (d), depletion layer](/assets/images/study/full/section-5/fig-5-26.svg)

- **Gate** is reverse-biased — the gate is a junction, so it presents high input impedance (no gate current flows)
- Increasing reverse bias on the gate **widens the depletion layer → narrows the channel → reduces drain current**
- Sufficient reverse bias pinches the channel completely shut (**pinch-off**); no drain current flows
- The **gate-source voltage V<sub>GS</sub> controls the drain current** — a voltage-controlled device (unlike the BJT which is current-controlled)

**Key difference from BJT:**
- BJT: current in (I<sub>B</sub>) → current out (I<sub>C</sub> = β × I<sub>B</sub>)
- FET: voltage in (V<sub>GS</sub>) → current out (I<sub>D</sub> = f(V<sub>GS</sub>)); no gate current needed

The ratio of change in drain current to change in gate voltage is the **transconductance g<sub>m</sub>** (units: siemens, S) — the FET's analogue of β. *Not examined at Full level but useful context.*

### 5G.2 — MOSFET and IGFET

The **MOSFET (Metal Oxide Semiconductor FET)** uses an insulating oxide layer between the gate metal and the semiconductor channel. This gives:
- **DC input impedance in the GΩ range** (the gate is completely isolated)
- Extremely high sensitivity to static discharge — the thin oxide layer breaks down at **as little as 5–10 V**

The IGFET (Insulated Gate FET) is the same device; MOSFET is the industry-standard name.

### 5G.3 — Dual-Gate MOSFET

A dual-gate MOSFET has two gates (Gate 1 and Gate 2) in series along the channel.

- **Gate 1** (nearest the source): used as the signal input — same role as the gate on a single-gate FET
- **Gate 2** (nearest the drain): held at a suitable positive DC voltage; varying this voltage changes the gain of the device — used for **AGC (Automatic Gain Control)**
- Gate 2 can also be used as a **second signal input** — the device then acts as a four-quadrant multiplier, making it ideal for mixers

![Fig 5.27 — Dual-gate MOSFET amplifier](/assets/images/study/full/section-5/fig-5-27.svg)

> [INFO] **5G1 [VERIFY]:** The dual-gate MOSFET's two uses: (1) Gate 2 for AGC (remote gain control by varying DC voltage); (2) Gate 2 as second signal input for frequency mixing. Both appear in exam questions.

### 5G.4 — ESD Precautions

MOSFETs and CMOS ICs are immediately destroyed by electrostatic discharge as low as **5–10 V**. A person walking on a carpet can accumulate several kilovolts; nylon clothing can charge to 50 kV.

> [WARNING] **Always handle FETs and CMOS devices with ESD precautions:**
> - Keep devices in their antistatic conductive packaging until required
> - Use an **antistatic wristband** connected to earth via a **series resistor of a few MΩ** (the resistor limits fault current to a safe level while still draining static)
> - Work on an antistatic mat connected to earth
> - **Do not wear the wristband when working on live mains-powered equipment** — the high resistance of the band would not prevent a dangerous shock

---

## 5H — Regulated Power Supplies

### 5H.1 — Simple Zener Stabiliser

A single zener diode with a series resistor gives a fixed output voltage V<sub>z</sub>. This is adequate for low-current applications but the output voltage varies slightly with load current (the zener has a small dynamic resistance).

### 5H.2 — Series-Pass Transistor Regulator

Adding a transistor (the **series-pass transistor** Tr1) in series with the supply dramatically increases the available load current while maintaining regulation.

![Fig 5.29 — Simple transistor voltage stabiliser: zener holds base constant, transistor passes load current](/assets/images/study/full/section-5/fig-5-29.svg)

**How it works:**
- Zener D1 holds Tr1's base at a fixed voltage V<sub>z</sub>
- The emitter voltage (= output) follows: V<sub>out</sub> = V<sub>z</sub> − V<sub>BE</sub> ≈ V<sub>z</sub> − 0.6 V
- Tr1 can supply large currents to the load because I<sub>C</sub> = β × I<sub>B</sub> and only a small base current flows through the zener

**Improved version with feedback** (Fig 5.30):

![Fig 5.30 — Regulated PSU: Tr1 series pass, Tr2 error amplifier, Zener reference, R3/R4 voltage sense](/assets/images/study/full/section-5/fig-5-30.svg)

- Tr2 (control transistor) compares a sample of the output voltage (from R3/R4 divider) against the zener reference voltage at its emitter
- If output rises: Tr2 base rises → Tr2 draws more current → pulls Tr1 base down → Tr1 emitter (output) falls → negative feedback corrects the error
- Same mechanism rejects ripple from the reservoir capacitor
- C1 prevents instability/oscillation — critical component; a small additional decoupling cap at the output handles RF frequencies

**Power dissipation in Tr1:** The difference between the unregulated input voltage and the regulated output is dissipated as heat in Tr1. With 4 V across it at 500 mA, that is 2 W — a power transistor and heatsink are required.

### 5H.3 — IC Voltage Regulator (78xx / 79xx Series)

The entire regulated supply circuit — sensing, reference, error amplifier and pass transistor — is integrated on a single chip with **three terminals: input, output, ground**.

![Fig 5.31 — Practical PSU with IC stabiliser (78xx), bridge rectifier, smoothing, suppression capacitors](/assets/images/study/full/section-5/fig-5-31.svg)

**Common 78xx (positive) voltages:** 5, 6, 9, 12, 15 V. The **79xx** series provides equivalent negative rails.

**Circuit details from Fig 5.31:**
- Centre-tapped transformer → bridge rectifier → 5000 μF / 25 V smoothing
- 78xx IC regulator (12 V / 3 A in the figure)
- Two **2 μF suppression capacitors** (low-inductance tantalum electrolytic types) at input and output pins — the IC regulator has high gain and **will oscillate if these are omitted**
- Optional 0.1 μF polyester capacitor in parallel with each 2 μF for very high frequency suppression

> [WARNING] The two 2 μF capacitors at the IC regulator pins are essential. Without them the regulator oscillates at RF frequencies, potentially damaging the IC and anything it is powering.

**Power dissipation:** The IC regulator is a linear device — transistors operate in Class A. The power wasted = (V<sub>in</sub> − V<sub>out</sub>) × I<sub>load</sub>. A 5 V regulator supplied with 17 V at 4 A dissipates 48 W — a substantial heatsink is required. This is the main disadvantage of linear regulators compared with switch-mode designs.

---

## 5I — Switch-Mode Power Supplies (SMPS)

### 5I.1 — Principle of Operation

Instead of dissipating the difference between input and output voltage as heat (as linear regulators do), a switch-mode PSU **chops the DC at high frequency** and uses a transformer and filter to achieve the desired output voltage.

![Fig 5.32 — SMPS block diagram: filter → rectify → chop (30–60kHz) → ferrite transformer → rectify → output filter → DC out; optical isolator for feedback](/assets/images/study/full/section-5/fig-5-32.svg)

**Block-by-block:**

1. **Input filter** — prevents switching noise feeding back into the mains (EMC requirement)
2. **Rectify** — converts mains AC to high-voltage DC (≈325 V peak from 230 V mains)
3. **Small reservoir capacitor** — holds the HV DC between switching pulses
4. **Chop** — high-voltage transistors switched on/off at **30–60 kHz**; transistors biased as **switches** (not Class A), so dissipation when fully on or fully off is very low
5. **Ferrite-core transformer** — transforms to required voltage; ferrite core because the high operating frequency makes iron laminations useless (eddy currents); at 50 kHz the time between charges is 1000× less than at 50 Hz, so the smoothing capacitor can be **1000× smaller in value** than an equivalent linear supply
6. **Rectify and output filter** — converts HV AC back to low-voltage DC; small smoothing capacitor adequate
7. **Feedback via optical isolator** — a photo-diode/LED pair provides feedback across the mains–output isolation barrier; the control circuit adjusts the **pulse width (PWM)** on the primary side to maintain constant output voltage

### 5I.2 — Advantages and Disadvantages

| Aspect | SMPS | Linear regulator |
|--------|------|-----------------|
| Efficiency | High (70–95%) | Low (30–60% at full load) |
| Size/weight | Small and light (small transformer) | Bulky (large iron transformer) |
| Heat | Minimal | Significant (heatsink required) |
| RF noise generated | **High** — switching harmonics radiate | Low |
| Output quality | Good with filtering | Excellent |

> [WARNING] **SMPS and RF:** Switching at 30–60 kHz generates harmonics that extend well into the HF amateur bands. A poor-quality SMPS can raise the local RF noise floor by several dB, rendering low-signal-level reception impossible. Always use SMPS units with good input and output filtering; screen the unit if necessary. USB chargers, LED drivers and laptop supplies are common offenders.

### 5I.3 — Step-Down Within Equipment

When a different DC voltage is needed within existing equipment, the existing supply rail can be chopped internally at high frequency, passed through a small inductor, and smoothed. The back-EMF of the inductor during the off-time provides the energy transfer. No mains-side transformer or optical isolator is needed for this internal DC–DC conversion.

---

## 5J — Integrated Circuits and Op-Amps

### 5J.1 — IC Fundamentals

An **integrated circuit (IC)** fabricates many transistors, resistors and capacitors on a single chip of silicon. ICs range from simple logic gates to complete radio systems.

![Fig 5.28 — IC packages: DIP (dual in-line) and SMD (surface-mount)](/assets/images/study/full/section-5/fig-5-28.svg)

For the amateur radio context, the key IC types are:
- **Linear ICs:** op-amps, voltage regulators, audio amplifiers (e.g. LM386), RF/IF amplifier blocks (e.g. NE612 mixer/oscillator)
- **Digital/logic ICs:** counters, frequency dividers, CMOS switches used in transceiver control
- **Specialised RF ICs:** PLLs, DDS chips, ADC/DAC for SDR

### 5J.2 — The Operational Amplifier (Op-Amp)

An **operational amplifier** is a high-gain differential amplifier. Its two inputs are the **inverting input** (−) and the **non-inverting input** (+). The output is proportional to the difference between them, multiplied by the open-loop gain (typically 100,000 or more).

**Ideal op-amp properties:**
- Infinite input impedance (no current drawn at either input)
- Zero output impedance
- Infinite gain (in practice, 10⁴–10⁶)
- Infinite bandwidth (in practice, limited by gain-bandwidth product)

**Virtual earth (inverting amplifier):** In a closed-loop inverting amplifier, the inverting input is held at (virtually) 0 V by negative feedback — this is the **virtual earth** principle. The gain is set by the ratio of feedback resistor R<sub>f</sub> to input resistor R<sub>in</sub>:

> **Gain = −R<sub>f</sub> / R<sub>in</sub>**

The negative sign indicates phase inversion.

**Non-inverting amplifier:**

> **Gain = 1 + (R<sub>f</sub> / R<sub>in</sub>)**

No phase inversion; input fed directly to the + terminal.

**Negative feedback** is the key to op-amp circuit design: feeding a fraction of the output back to the inverting input stabilises gain, reduces distortion, and broadens bandwidth. The trade-off is that closed-loop gain is much lower than open-loop gain — but far more predictable and stable.

**Common op-amp uses in amateur radio:**
- Audio processing stages in SSB transceivers
- Active filters (audio CW filters, SSB cut-off filters)
- Comparators (frequency discriminators, level detectors)
- Logarithmic amplifiers (S-meter circuits)
- Voltage followers / buffers (unity gain, very high Z<sub>in</sub>)

> [INFO] **5J1 [VERIFY]:** Know the virtual earth concept, the inverting gain formula (−R<sub>f</sub>/R<sub>in</sub>), and the non-inverting gain formula (1 + R<sub>f</sub>/R<sub>in</sub>). Op-amp questions in the exam typically test these ratios or the concept of negative feedback stabilising gain.

---

## Self-Check Questions

1. A silicon diode is forward biased. What is the approximate voltage across it at normal operating current?
2. In a bridge rectifier connected to a 30 V peak AC supply, what is the approximate average DC output voltage (before smoothing) and what PIV rating do the diodes need?
3. A zener diode rated at 5.6 V is connected in series with a 470 Ω resistor from a 12 V supply. What current flows through the zener and what power does it dissipate?
4. A BJT has a current gain β of 150. If the collector current is 15 mA, what is the base current?
5. What are the approximate input and output impedances of a common-emitter BJT stage, and does it invert the signal?
6. You need an amplifier stage with very high input impedance and very low output impedance for use as a buffer. Which BJT configuration should you choose?
7. Why does a Class C amplifier require a tuned resonant circuit at its output?
8. A dual-gate MOSFET is used in a receiver front end. What is Gate 2 typically used for?
9. A 78xx IC voltage regulator is powered from a 20 V unregulated supply and delivers 12 V at 2 A. How much power is dissipated in the regulator, and what does this imply about the design?
10. Give two advantages and one disadvantage of a switch-mode PSU compared to a linear regulator.

<details>
<summary>Self-check answers</summary>

1. Approximately **0.6–0.7 V** (0.6 V at the onset of conduction, rising to 0.7 V at higher currents).
2. Approximate DC output ≈ **30 × 0.636 ≈ 19 V** (average of a full-wave rectified sinewave); practical output after one pair of diode drops ≈ 30 − 1.4 ≈ 28.6 V peak before smoothing. PIV needed ≈ **30 V** (for a bridge, each diode must withstand the peak supply voltage).
3. Current I = (12 − 5.6)/470 = 6.4/470 ≈ **13.6 mA**. Power P = V<sub>z</sub> × I = 5.6 × 0.0136 ≈ **76 mW**. (Within typical 400 mW rating.)
4. I<sub>B</sub> = I<sub>C</sub>/β = 15 mA/150 = **0.1 mA = 100 μA**.
5. Z<sub>in</sub> ≈ **1 kΩ**; Z<sub>out</sub> ≈ **5 kΩ**; yes, the CE stage **inverts the signal (180° phase shift)**.
6. **Common collector (emitter follower)** — very high Z<sub>in</sub> (50 kΩ–2 MΩ), very low Z<sub>out</sub> (10–500 Ω), gain ≈ 1, no phase inversion.
7. A Class C amplifier conducts only during narrow peaks of the drive signal, producing a pulse waveform rich in harmonics. The **tuned resonant circuit** selects the fundamental frequency and rejects harmonics, reconstructing a clean sinewave output.
8. **AGC (Automatic Gain Control):** the DC voltage on Gate 2 is varied by the AGC system to control the gain of the stage, reducing gain when a strong signal is present to prevent overloading.
9. Power dissipated = (V<sub>in</sub> − V<sub>out</sub>) × I = (20 − 12) × 2 = **16 W**. This requires a substantial heatsink and means the regulator is wasting significant energy as heat — a linear regulator is inefficient at large voltage differentials.
10. **Advantages:** much higher efficiency (less heat, smaller heatsink); smaller and lighter (small ferrite transformer). **Disadvantage:** generates RF switching noise that can raise the local noise floor and interfere with reception; requires good input/output filtering.

</details>

---

## Suggested Interactives for RFH-Interactives

1. **Diode I–V curve explorer** — Sliders for diode type (Si/Ge/Schottky/Zener); plots the I-V curve dynamically showing forward drop, reverse leakage, and breakdown. Toggle between linear and log current scale. Maps to §5A.

2. **Rectifier smoothing simulator** — Select half-wave, full-wave or bridge; capacitor value slider; load resistor slider. Live waveform shows diode current pulses, capacitor voltage and ripple magnitude. Maps to §5B.

3. **BJT load-line explorer** — Enter V<sub>CC</sub>, R<sub>C</sub>, I<sub>C</sub>(Q). Draws the load line on the I<sub>C</sub>–V<sub>CE</sub> characteristic; shows Q-point and its position for Class A/AB/B/C selection. Maps to §5D/§5F.

4. **BJT configuration comparator** — Three-tab display (CE/CB/CC) showing Z<sub>in</sub>, Z<sub>out</sub>, phase and gain side by side with animated signal waveforms. Maps to §5E.

5. **Op-amp gain calculator** — Enter R<sub>in</sub> and R<sub>f</sub>; displays inverting gain (−R<sub>f</sub>/R<sub>in</sub>) and non-inverting gain (1+R<sub>f</sub>/R<sub>in</sub>); animated virtual-earth diagram. Maps to §5J.

6. **SMPS vs linear efficiency compare** — Enter V<sub>in</sub>, V<sub>out</sub>, I<sub>load</sub>; shows power dissipated in linear regulator vs SMPS; heat visualisation. Maps to §5H/§5I.

---

*Sources: RSGB Full Licence Manual, 3rd Edition, Chapter 5 (pp 31–38). All regulatory values marked [VERIFY] against current Ofcom licence schedule and RSGB syllabus.*
