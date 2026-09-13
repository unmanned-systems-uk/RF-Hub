# Section 4: Basic Circuits

<!-- Exam weight: ~18–22% (~8–10/46 questions) — largest theory chapter -->
<!-- Sub-sections: 4A–4K -->
<!-- Syllabus refs: 4A1, 4B1, 4C1, 4D1, 4E1, 4F1, 4G1, 4H1, 4I1, 4J1, 4K1 (all [VERIFY]) -->
<!-- RSGB source: Full Licence Manual 3rd Ed, Chapter 4 (pp 19–30) -->
<!-- New at Full vs Intermediate: Maximum power transfer theorem; RC/LR time constants; capacitor/inductor types and construction; phasor diagrams; series and parallel resonance; Q factor and bandwidth; circulating currents; crystal equivalent circuit; transformer impedance transformation; temperature coefficients; Faraday screening -->

Chapter 4 is the largest theory chapter in the Full licence manual. It covers the fundamental circuit mathematics that underpins everything else — from the power equations you use every day to the resonance behaviour inside every filter, transmitter and receiver you will ever build or operate. A solid grasp of this chapter pays dividends across the rest of the syllabus.

The chapter builds from DC (current, voltage, Kirchhoff's laws, resistors) through reactive components (capacitors, inductors) into AC behaviour (RMS, reactance, impedance, phasors), resonance (series and parallel, Q factor), and then covers three practical topics: crystals, transformers and screening.

Cross-reference: <a href="../intermediate/section-2-electronics.html" target="_blank">Intermediate §2 — Electronics</a> covers Ohm's law, basic resistor circuits, and elementary capacitor/inductor behaviour — this section builds directly on top of that foundation.

---

## 4A — DC Fundamentals: Current, Voltage, Power and Charge

### 4A.1 — Current, Charge and Energy

**Electric current** is the rate of flow of charge. The unit of current is the **ampere (A)**: one ampere is one coulomb of charge flowing per second.

**Charge** is measured in **coulombs (C)**. The charge on a single electron is 1.6 × 10⁻¹⁹ C; one coulomb therefore represents approximately 6.24 × 10¹⁸ electron charges.

> [INFO] In practice, components often store charge in microcoulombs (μC). A 100 μF capacitor charged to 12 V stores Q = CV = 100 × 10⁻⁶ × 12 = 1.2 mC.

**Energy** is measured in **joules (J)**. One joule is the energy transferred when a force of one newton acts through one metre. In electrical circuits: energy (joules) = charge (coulombs) × potential difference (volts).

**Potential difference (PD)** — the voltage between two points — is measured in **volts (V)**. One volt is the PD that causes one joule of energy to be transferred per coulomb of charge.

### 4A.2 — Power

Power is the rate of energy transfer. The three forms of the power equation that you must know are:

| Form | Formula | Use when you know |
|------|---------|-----------------|
| Voltage and current | **P = V × I** | Both V and I |
| Current and resistance | **P = I² × R** | Current and resistance |
| Voltage and resistance | **P = V² / R** | Voltage and resistance |

**Units:** watts (W) = joules per second. For large dissipations: kilowatts (kW), megawatts (MW). For small: milliwatts (mW), microwatts (μW).

> [INFO] **4A1 [VERIFY]:** These three forms of the power equation are derivable from P = VI combined with Ohm's law (V = IR). Know all three — exam questions pick whichever form is not directly calculable from the given values.

**Example:** A 50 Ω dummy load is connected to a transmitter delivering 100 W. What current flows?  
P = I²R → 100 = I² × 50 → I² = 2 → I = √2 ≈ 1.41 A.

![Fig 4.1 — Voltage source with resistive load](/assets/images/study/full/section-4/fig-4-1.svg)

---

## 4B — Kirchhoff's Laws, Resistors and Circuit Combinations

### 4B.1 — Kirchhoff's Voltage Law (KVL)

**KVL:** The sum of all voltages around any closed loop equals zero, or equivalently: the sum of all voltage drops around a loop equals the supply voltage.

This is simply the conservation of energy — charge cannot gain or lose net energy travelling around a complete circuit.

**Practical use:** If you know the supply voltage and all resistor values in a series circuit, KVL lets you write the equation: V_supply = V_R1 + V_R2 + V_R3 and solve for any unknown.

### 4B.2 — Kirchhoff's Current Law (KCL)

**KCL:** The sum of currents flowing into any junction equals the sum of currents flowing out. Current is conserved at every node.

**Practical use:** In a parallel circuit, the total current drawn from the supply equals the sum of the branch currents.

![Fig 4.2 — Series and parallel resistor circuits](/assets/images/study/full/section-4/fig-4-2.svg)

### 4B.3 — Resistors in Series and Parallel

**Series:** resistances add directly.

> **R_total = R1 + R2 + R3 + …**

**Parallel:** the reciprocal of the total equals the sum of the reciprocals.

> **1/R_total = 1/R1 + 1/R2 + 1/R3 + …**

For **two resistors only**, the shortcut is:

> **R_total = (R1 × R2) / (R1 + R2)**

This product-over-sum formula is worth memorising for quick calculations.

**Strategy for complex combinations:** First collapse the circuit to find the total current drawn from the supply. Then expand back through the network, using KVL and KCL at each stage to find individual currents and voltages.

**Resistor types and tolerance:**
- **Carbon film** — general purpose, tolerance typically ±5%
- **Metal film** — lower noise, tighter tolerance (±1% or better)
- **Wire-wound** — power resistors; significant inductance at RF

### 4B.4 — The Potential Divider

Two resistors R1 and R2 in series across a supply V_in produce an output voltage V_out across R2:

> **V_out = V_in × R2 / (R1 + R2)**

![Fig 4.2 — Potential divider](/assets/images/study/full/section-4/fig-4-2.svg)

This is one of the most frequently used relationships in electronics — it appears in bias networks, attenuators, voltage references and sensor interfaces. Know it.

> [INFO] The formula assumes no current is drawn from the output (unloaded divider). If a load is connected, it appears in parallel with R2 and reduces V_out. At RF, stray capacitance and lead inductance also affect the division ratio.

---

## 4C — Real Batteries and Maximum Power Transfer

### 4C.1 — EMF, Internal Resistance and Terminal Voltage

An ideal voltage source maintains constant terminal voltage regardless of current. Real batteries have an **internal resistance r** (typically a fraction of an ohm for a healthy cell) that causes the terminal voltage to drop as current increases.

> **V_terminal = EMF − (I × r)**

**EMF** (electromotive force, symbol **ε** or V) is the open-circuit voltage. As current increases, the voltage drop across r grows and the terminal voltage falls.

![Fig 4.3 — Real battery with internal resistance r](/assets/images/study/full/section-4/fig-4-3.svg)

This matters in practice: a battery tested on open circuit may read 12.6 V while under load it drops to 11.5 V. For a transmitter drawing high current, the supply voltage sag can cause frequency shift, ALC misbehaviour and reduced output power.

### 4C.2 — Maximum Power Transfer

**Question:** For a fixed-EMF source with internal resistance r, what value of external load R_load extracts the maximum power?

**Answer:** Maximum power is transferred when R_load = r.

At this point, exactly half the total power is dissipated in the source (in r) and half in the load. The efficiency is therefore 50% at maximum power transfer. This is not necessarily the operating point you want for power efficiency — battery systems are designed for high efficiency, which means R_load >> r — but it is the correct condition for maximum extracted power.

![Fig 4.4 — Power/voltage/current vs load resistance (maximum at R_load = r)](/assets/images/study/full/section-4/fig-4-4.svg)

> [INFO] **4C1 [VERIFY]:** Maximum power transfer: R_load = r (source impedance = load impedance). This appears in RF system design as impedance matching — a 50 Ω source drives maximum power into a 50 Ω load. The underlying theorem is identical.

---

## 4D — Capacitors: Construction, RC Circuits and Types

### 4D.1 — Capacitance

Capacitance is the ability to store electric charge. The unit is the **farad (F)**, but practical capacitors range from picofarads (pF, 10⁻¹² F) to farads.

> **C = Q / V**

Where C is capacitance (F), Q is charge stored (C), V is voltage across the capacitor (V).

For a parallel-plate capacitor:

> **C = K × A / d**

Where K is the permittivity of the dielectric (permittivity of free space × dielectric constant of the material), A is the plate area and d is the plate separation. Increasing A or decreasing d increases capacitance.

![Fig 4.5 — Parallel-plate capacitor construction](/assets/images/study/full/section-4/fig-4-5.svg)

### 4D.2 — Dielectric Materials

The dielectric constant (relative permittivity) determines both the capacitance and the losses:

| Dielectric | Approx. constant | RF suitability |
|-----------|----------------|----------------|
| Vacuum / air | 1 | Excellent (low-loss) |
| Polystyrene, PTFE | 2.5–2.6 | Excellent at HF/VHF |
| Paper, polyester | 2–3 | Moderate; some loss |
| Mica | 5–6 | Excellent for RF (low loss, stable) |
| Ceramics (low-K) | ~10 | Good for RF bypass and tuning |
| Ceramics (high-K) | up to 10,000 | High capacitance/volume; lossy at RF |

> [INFO] Polystyrene and PTFE capacitors have extremely low loss (high Q) and good stability, making them ideal for RF tuned circuits. High-K ceramics (often used in surface-mount bypass capacitors) have variable capacitance with DC bias and temperature, and are not suitable for precision RF circuits.

### 4D.3 — Safe Working Voltage

Every capacitor has a maximum safe working voltage (often marked on the body). Exceeding it breaks down the dielectric — this is a permanent failure. High-voltage valve PSUs can charge filter capacitors to over 2 kV; these must be **permanently discharged** before working on the equipment, as a charged capacitor retains lethal energy even with the mains disconnected.

> [DANGER] Always treat large filter capacitors as potentially charged. Use a bleeder resistor or a known-good shorting tool before touching HV circuits. A 100 μF capacitor charged to 2 kV stores 200 J — enough to cause fatal cardiac arrest.

![Fig 4.6 — Capacitor types (film, ceramic, electrolytic)](/assets/images/study/full/section-4/fig-4-6.svg)

### 4D.4 — RC Charging and the Time Constant

When a resistor R and capacitor C are connected in series to a DC supply, the capacitor charges exponentially. The **time constant τ (tau)**:

> **τ = C × R** (seconds, when C in farads and R in ohms)

The voltage across the capacitor at time t after connection is: V_C = V_supply × (1 − e^(−t/τ))

| Time elapsed | Approximate V_C as % of V_supply |
|-------------|----------------------------------|
| 1τ | 63.2% |
| 2τ | 86.5% |
| 3τ | 95.0% |
| 5τ | 99.3% ≈ "fully charged" |

**In discharge:** starting voltage V, initial current I = V/R, falls exponentially with the same time constant τ.

![Fig 4.10 — RC charging and discharging curves](/assets/images/study/full/section-4/fig-4-10.svg)

> [INFO] **4D1 [VERIFY]:** Know τ = CR and the rule-of-thumb that a capacitor is considered fully charged after 5τ. The exam may give you RC values and ask for the time to reach 63% or 99% of supply voltage.

### 4D.5 — Capacitors in Series and Parallel

**Parallel** (same voltage, charges add):

> **C_total = C1 + C2 + C3 + …**

**Series** (same charge, voltages divide):

> **1/C_total = 1/C1 + 1/C2 + …**

> [INFO] Capacitors combine the opposite way to resistors. Two capacitors in series: the combination has a smaller capacitance than either alone; the voltage across each is inversely proportional to its capacitance (the larger cap gets the smaller share of the voltage).

**Worked example:** 2 μF and 4 μF in series on 30 V supply.  
C_total = (2 × 4)/(2 + 4) = 8/6 = 1.33 μF.  
Q = C_total × V = 1.33 × 10⁻⁶ × 30 = 40 μC (same charge on each).  
V_1 = Q/C1 = 40/2 = 20 V; V_2 = Q/C2 = 40/4 = 10 V. Total: 30 V ✓.

### 4D.6 — Variable Capacitors

Air-dielectric variable capacitors use plates that interleave to change the effective plate area. Range is typically 20–500 pF. They require adequate plate spacing when used in high-voltage transmitter ATUs to prevent arcing.

![Fig 4.7 — Capacitors in parallel](/assets/images/study/full/section-4/fig-4-7.svg)
![Fig 4.8 — Capacitors in series](/assets/images/study/full/section-4/fig-4-8.svg)

---

## 4E — Inductors: Back-EMF, LR Circuits and Types

### 4E.1 — Self-Inductance

An inductor (a coil of wire) stores energy in a magnetic field. **Self-inductance** is the property by which a changing current induces a voltage (back-EMF) in the coil itself that opposes the change.

> **Inductance L:** if a current changing at 1 A per second induces a back-EMF of 1 V, the inductance is **1 henry (H)**.

More generally, induced voltage = L × (rate of change of current). A 2 H inductor with current changing at 1 A/s induces 2 V.

![Fig 4.12 — Magnetic field around a current-carrying wire](/assets/images/study/full/section-4/fig-4-12.svg)
![Fig 4.13 — Flux in a solenoid inductor](/assets/images/study/full/section-4/fig-4-13.svg)

### 4E.2 — Types of Inductor

| Type | Typical inductance | Typical application |
|------|------------------|---------------------|
| Air-core (single/multi-turn) | nH–μH | VHF/UHF tuned circuits |
| Ferrite bobbin (slug-tuned) | μH–mH | HF RF chokes, IF transformers |
| Pot-core | μH–mH | Audio frequency chokes, switched-mode |
| Toroid | μH–mH | HF low-leakage inductors, baluns |
| Iron-dust toroid | μH–mH | High-current chokes |
| Iron-laminated (audio) | mH–H | Audio transformers, low-frequency chokes |

**Slug-tuning:** a ferrite slug partially inserted into the coil form adjusts inductance. Withdrawing the slug reduces inductance; inserting increases it. This allows post-manufacture trimming of tuned circuits.

**Permeability:** the ability of a core material to concentrate magnetic field. High permeability → higher inductance for the same coil geometry. All ferrite materials are slightly lossy at high frequencies; the correct grade of ferrite must be chosen for the operating frequency range.

**Toroids** have almost no external field because the magnetic circuit is closed within the core. This makes them ideal for RF circuits where crosstalk between inductors must be minimised.

![Fig 4.14 — RF inductor with slug-tuned core](/assets/images/study/full/section-4/fig-4-14.svg)

### 4E.3 — Inductors in Series and Parallel

**Series:** **L_total = L1 + L2 + L3 + …** (provided coils are not magnetically coupled to each other)

**Parallel:** **1/L_total = 1/L1 + 1/L2 + …** (same caveat)

### 4E.4 — LR Time Constant

When a resistor R and inductor L are connected in series to a DC supply, the current builds up exponentially with time constant:

> **τ = L / R** (seconds, when L in henries and R in ohms)

At 1τ, the current has reached ≈63% of its final value; at 5τ it is effectively at its final value.

This is the dual of the RC circuit: in the LR case it is the current that builds up exponentially rather than the voltage.

---

## 4F — Alternating Current: RMS, Phase and Harmonics

### 4F.1 — AC Sinewave and RMS Values

An AC sinewave is produced by a coil rotating in a uniform magnetic field. The voltage varies sinusoidally between peak positive and peak negative values.

**RMS (Root Mean Square):** the equivalent DC voltage that would deliver the same power to a resistive load. For a pure sinewave:

> **V_rms = V_peak / √2 = 0.707 × V_peak**

The UK mains supply of 230 V is an RMS value; the peak voltage is 230 × √2 ≈ 325 V.

**Peak-to-peak voltage** = 2 × V_peak.

> [INFO] **4F1 [VERIFY]:** V_rms = 0.707 × V_peak. All AC voltage and current values quoted in everyday use (and in exam questions unless stated otherwise) are RMS values.

![Fig 4.15 — AC sinewave: peak, peak-to-peak and RMS](/assets/images/study/full/section-4/fig-4-15.svg)

### 4F.2 — Frequency and Phase

**Frequency** f is the number of complete cycles per second, measured in hertz (Hz). **Period** T = 1/f.

**Phase** describes the time relationship between two sinewaves of the same frequency. If waveform B reaches its positive peak a quarter-cycle after waveform A, B **lags** A by **90°** (or equivalently A leads B by 90°).

Phase relationships are crucial when dealing with reactive components — a capacitor or inductor causes a 90° shift between voltage and current.

### 4F.3 — Harmonics and Fourier Analysis

Any periodic waveform can be decomposed into a **fundamental frequency** plus **harmonics** — sinewaves at integer multiples of the fundamental. A square wave, for example, contains the fundamental plus all odd harmonics (3rd, 5th, 7th...) with amplitudes that decrease as 1/n.

This is **Fourier analysis**, and it matters to the radio amateur because:
- A transmitter that clips or saturates produces harmonics that may fall in other services' allocations
- The shape of a Morse keying waveform determines its harmonic content and hence its bandwidth
- Filters are designed to pass the fundamental while attenuating harmonics

---

## 4G — Reactance, Impedance and Phasors

### 4G.1 — Why Ohm's Law Does Not Apply Directly to Reactive Components

For a resistor, V/I = R (resistance) at all frequencies and the voltage and current are in phase.

For a capacitor or inductor, the voltage and current are 90° out of phase. Simply dividing the RMS voltage by the RMS current gives a ratio (the **reactance**) but this hides the phase relationship — and ignoring phase leads to errors when combining voltages or currents in AC circuits.

### 4G.2 — Capacitive Reactance

**Capacitive reactance X_C** is the opposition a capacitor presents to AC. It falls with increasing frequency (a capacitor blocks DC but passes high frequencies):

> **X_C = 1 / (2πfC)** (ohms, f in Hz, C in farads)

The current through the capacitor **leads** the voltage by 90°.

**Example:** 2 μF capacitor on 240 V, 50 Hz mains.  
X_C = 1 / (2π × 50 × 2 × 10⁻⁶) = 1 / (200π × 10⁻⁶) = 10⁶/(200π) = 10⁴/2π ≈ **1590 Ω**  
I = V / X_C = 240 / 1590 ≈ **0.15 A (150 mA) RMS**

### 4G.3 — Inductive Reactance

**Inductive reactance X_L** rises with frequency (an inductor passes DC freely but opposes high-frequency AC):

> **X_L = 2πfL** (ohms, f in Hz, L in henries)

The voltage across the inductor **leads** the current by 90° — the opposite phase relationship to a capacitor.

![Fig 4.17 — Reactance of inductor (rises) and capacitor (falls) vs frequency](/assets/images/study/full/section-4/fig-4-17.svg)

### 4G.4 — Coupling, Decoupling and Blocking

**Coupling capacitors** pass AC signals from one stage to the next while blocking the DC bias voltages. The coupling capacitor must have low reactance at the lowest signal frequency of interest. At audio frequencies, typical values are 0.1–50 μF; at RF, a few pF to 0.01 μF suffice.

**Decoupling capacitors** remove AC or RF from a point in a circuit by connecting that point to the 0 V rail via a low-reactance capacitor. The capacitor must have lower reactance than the impedance of the circuit at the lowest frequency to be bypassed.

**RF chokes** are inductors used to pass DC while presenting high impedance to RF, preventing RF from feeding back along supply or audio lines. A choke needs sufficiently high inductance to have a reactance much greater than the impedance of the circuit at the frequency of interest.

### 4G.5 — Phasor Diagrams

Since voltages and currents in reactive circuits are not in phase, they cannot be simply added as scalars. They must be added **vectorially**.

**Analogy:** Walk 3 m east and a boat simultaneously carries you 4 m north. Your resultant displacement is not 7 m but √(3² + 4²) = 5 m at an angle.

For a phasor diagram, voltages (or currents) are drawn as arrows (vectors) with length proportional to magnitude and angle representing phase. The supply voltage is found by vector addition.

![Fig 4.18 — Vector addition analogy (3m E + 4m N = 5m resultant)](/assets/images/study/full/section-4/fig-4-18.svg)

### 4G.6 — Resistor and Capacitor in Series

In a series RC circuit:
- Voltage across R is in phase with the current (V_R = I × R)
- Voltage across C lags the current by 90° (V_C = I × X_C)
- These two voltages are at 90° to each other and must be added with Pythagoras:

> **V_supply = √(V_R² + V_C²)**

The total opposition to current (the **impedance Z**):

> **Z = √(R² + X_C²)** (ohms)

Current: **I = V / Z**

The phase angle between supply voltage and current lies between 0° (purely resistive) and 90° (purely capacitive), with voltage lagging current.

![Fig 4.19 — Resistor and capacitor in series — phasor diagram](/assets/images/study/full/section-4/fig-4-19.svg)

### 4G.7 — Resistor and Inductor in Series

Same geometry but the inductor's voltage leads the current by 90°:

> **Z = √(R² + X_L²)** (ohms)

The supply voltage leads the current by an angle between 0° and 90°.

![Fig 4.20 — Phasor diagram for R and L in series](/assets/images/study/full/section-4/fig-4-20.svg)

> [INFO] **4G1 [VERIFY]:**
> - **Resistance:** V and I in phase
> - **Reactance:** V and I exactly 90° apart
> - **Impedance:** V and I at an intermediate angle (circuit has both resistive and reactive components); Z = √(R² + X²)

---

## 4H — Resonance, Q Factor and Bandwidth

### 4H.1 — Series Resonance

When L and C are connected in series with an AC source, the voltage across L leads the current by 90° and the voltage across C lags by 90°. These two voltages are therefore in **anti-phase** (180° apart). At any frequency where X_L ≠ X_C they partially cancel.

At the **resonant frequency f_r**, X_L = X_C exactly, so the voltages across L and C cancel completely. The series LC combination presents **zero net reactance** — the circuit impedance is just the winding resistance of the inductor. Series resonance is a **minimum impedance** condition.

**Resonant frequency:**

> **f_r = 1 / (2π√(LC))** (Hz)

Rearranged:

> **L = 1 / (4π²f²C)** and **C = 1 / (4π²f²L)**

![Fig 4.21 — L and C in series with phasor diagram](/assets/images/study/full/section-4/fig-4-21.svg)
![Fig 4.23 — Series resonance: impedance dip at f_r](/assets/images/study/full/section-4/fig-4-23.svg)

> [INFO] At series resonance, the voltages across the individual L and C components can be many times the supply voltage (voltage magnification = Q × V_supply). For a transmitter's series resonant output circuit, these voltages can reach hundreds or thousands of volts — a safety and component-rating concern.

### 4H.2 — Parallel Resonance

When L and C are connected in **parallel**, the current in C leads the voltage by 90° and the current in L lags the voltage by 90°. At resonance (X_L = X_C), these two branch currents are equal and opposite and cancel at the input terminals — the input current is theoretically zero, so the **impedance is maximum**.

In practice, the inductor has winding resistance R and the input current is V/R_D, where R_D is the **dynamic resistance** of the tuned circuit:

> **R_D = L / (C × R)** (ohms)

At resonance the parallel tuned circuit looks like a high-value resistor R_D.

![Fig 4.24 — Parallel resonance: impedance peak at f_r](/assets/images/study/full/section-4/fig-4-24.svg)
![Fig 4.25 — Parallel resonant circuit schematic](/assets/images/study/full/section-4/fig-4-25.svg)

### 4H.3 — Q Factor

The **Q factor** (Quality factor) is a dimensionless number expressing the sharpness or selectivity of a tuned circuit. It is defined as the ratio of reactance to resistance:

> **Q = X_C / R = 1 / (2πf_r CR)** (using capacitive reactance)

or equivalently:

> **Q = X_L / R = 2πf_r L / R** (using inductive reactance)

For a parallel tuned circuit with dynamic resistance R_D:

> **Q = 2πf_r C R_D**

Higher Q → sharper tuning → more selective (better at rejecting off-resonance frequencies).

**Practical Q values:** up to ~70 readily achievable with discrete LC circuits; above 100 is difficult because the parallel resistance of the surrounding circuit reduces the effective R_D. Crystals can achieve Q > 50,000.

### 4H.4 — Bandwidth

The **half-power bandwidth** (also called the −3 dB bandwidth) is the frequency range over which the circuit response is within 3 dB (a factor of √2 = 0.707 in voltage) of its peak value:

> **BW = f_2 − f_1** (where f_1 and f_2 are the lower and upper −3 dB frequencies)

The relationship between Q, resonant frequency and bandwidth:

> **Q = f_r / (f_2 − f_1) = f_r / BW**

Rearranged: **BW = f_r / Q**

**Example:** A tuned circuit at 7.0 MHz with Q = 70 has bandwidth BW = 7,000,000 / 70 = 100 kHz. An amateur SSB signal is ~3 kHz wide, so this circuit passes the whole band segment — a bandpass filter needs much higher Q or a more complex design.

![Fig 4.26 — Bandwidth: −3 dB frequencies f_1 and f_2](/assets/images/study/full/section-4/fig-4-26.svg)

> [INFO] **4H1 [VERIFY]:** Q = f_r/BW is the key relationship. Know how to rearrange: if you know f_r and Q, calculate bandwidth; if you know f_r and bandwidth, calculate Q.

### 4H.5 — Circulating Currents

In a parallel tuned circuit at resonance, large circulating currents flow around the internal L–C loop even though the current entering from outside is very small. The circulating current can be much greater than the input current. This has two implications:

1. **Component ratings:** inductors and capacitors in the tank circuit of a transmitter must be rated for the full circulating current, which can greatly exceed the measured input current.
2. **High voltage:** in a series resonant circuit, the voltage magnification factor equals Q — voltages across L and C individually can reach the kV range in a transmitter output stage.

![Fig 4.27 — Circulating currents in a parallel tuned circuit](/assets/images/study/full/section-4/fig-4-27.svg)

---

## 4I — Crystals as Resonators

### 4I.1 — Piezo-Electric Effect and Crystal Resonance

A **quartz crystal** is a thin slice of quartz cut from a naturally occurring crystal. Quartz exhibits the **piezo-electric effect**: mechanical stress applied to the crystal faces generates a voltage between them, and conversely an applied voltage causes the crystal to flex. If an AC signal is applied at the crystal's mechanical resonant frequency, a large-amplitude mechanical oscillation builds up — an electrical resonance.

The resonant frequency depends on the physical dimensions of the quartz slice:
- Below 1 MHz: bar-shaped (about 70 mm long at 20 kHz)
- Up to ~20 MHz: thin-slice fundamental mode
- Above 20 MHz: harmonic or **overtone** mode (close to but not exactly an odd multiple of the fundamental)

**Key advantage:** the Q of a crystal is enormously higher than any discrete LC circuit — typically 10,000–100,000 — resulting in very precise, stable frequency control.

### 4I.2 — Crystal Equivalent Circuit

The electrical equivalent circuit of a crystal consists of:
- A series branch: L (motional inductance), C1 (motional capacitance) and R (motional resistance)
- A parallel capacitance C2 (the electrode capacitance)

![Fig 4.29 — Equivalent circuit of a crystal: C2 in parallel with L-C1-R series branch](/assets/images/study/full/section-4/fig-4-29.svg)

This gives two resonant frequencies within about 0.1% of each other:
- **Series resonance** (the L-C1-R branch resonates; C2 is in parallel but high-impedance at this frequency)
- **Parallel resonance** (C2 interacts with the motional branch)

The crystal can be used in either mode, but the circuit must be designed for the intended mode — using a crystal in the wrong mode gives the wrong (incorrect) frequency.

**Frequency pulling:** the crystal frequency can be shifted by a few kilohertz by varying an external capacitance (typically 20–30 pF) in series or parallel with the crystal. This is used in VXOs (Variable Crystal Oscillators) and in PLL systems to align the crystal to a precise frequency. Many crystals are specified for a particular external load capacitance.

### 4I.3 — Temperature Effects on Crystals

Crystal frequency varies with temperature. The temperature coefficient depends on the cut angle of the quartz slice. Different cuts (AT-cut, BT-cut etc.) optimise the temperature stability in different ranges. For critical applications:
- **TCXO** (Temperature-Compensated Crystal Oscillator): a temperature-sensing network applies a correcting voltage to a varactor to offset the drift
- **OCXO** (Oven-Controlled Crystal Oscillator): the crystal is held in a thermostatically controlled oven at a stable elevated temperature

---

## 4J — Transformers and Impedance Matching

### 4J.1 — Transformer Basics

A transformer consists of two (or more) coils — **primary** and **secondary** — sharing the same magnetic field, usually via a common core. An alternating current in the primary creates a changing magnetic field that induces a voltage in the secondary.

**Voltage ratio (turns ratio):**

> **V_S / V_P = N_S / N_P**

Where N_S and N_P are the number of turns on secondary and primary respectively. A step-down transformer with N_P = 2 × N_S halves the voltage.

**Current ratio (conservation of power, neglecting losses):**

> **I_P / I_S = N_S / N_P**

If voltage is halved, current is doubled. Power in = power out.

![Fig 4.28 — Transformer: primary, secondary and load](/assets/images/study/full/section-4/fig-4-28.svg)

### 4J.2 — Impedance Transformation

The impedance seen at the primary depends on the secondary load and the turns ratio:

> **Z_in = Z_load × (N_P / N_S)²**

The impedance transformation factor is the **square of the turns ratio**. This is fundamental to RF circuit design: an amplifier transistor might have a 5 Ω output impedance; a 1:√10 turns ratio transformer (impedance ratio 1:10) presents this as 50 Ω to the antenna feed line.

> [INFO] **4J1 [VERIFY]:** Z_in = Z_out × (N_P/N_S)². This formula appears in RF impedance matching, audio output stages, and ATU design. The impedance ratio equals the square of the turns ratio — a 3:1 turns ratio gives a 9:1 impedance ratio.

### 4J.3 — Core Materials and Eddy Currents

**Mains/audio transformers:** laminated iron cores. Iron laminations are insulated from each other to disrupt the paths of **eddy currents** — circulating currents induced by the changing flux that would otherwise cause large power losses and heating. Audio transformers use thinner laminations (for better high-frequency response) than mains power transformers.

**RF transformers:** wound on **ferrite** cores. Ferrite is a non-conductive ceramic material made from iron oxides and other metals, so eddy currents cannot flow. The composition is varied to optimise performance at different frequency ranges. All ferrites are slightly lossy at very high frequencies — the correct grade must be chosen.

### 4J.4 — Faraday Screening

To prevent electrostatic (capacitive) coupling between primary and secondary — while maintaining magnetic (inductive) coupling — a **Faraday screen** is placed between the windings. This is a conductive layer (not a complete turn, to avoid acting as a shorted turn) connected to earth.

A Faraday-screened transformer prevents RF noise on the mains from coupling through to sensitive receive circuits, and prevents RF currents from the transmitter feeding back into the mains.

---

## 4K — Temperature Effects, Screening and Decibels

### 4K.1 — Temperature Coefficients of Components

All electronic components change their values with temperature. The **temperature coefficient** is expressed in **ppm/°C** (parts per million per degree Celsius).

**Capacitors:** the dielectric material largely determines the temperature coefficient.
- Some capacitors have a **positive TC** (capacitance rises with temperature)
- Some have a **negative TC** (capacitance falls with temperature)
- Some are specified as NP0/C0G (nominally zero TC) — these are the stable types used in critical RF circuits

**Example:** A 200 pF capacitor with TC = +300 ppm/°C in a room that warms by 15°C:  
ΔC = 200 × 300 × 10⁻⁶ × 15 = 0.9 pF  
In a 3.5 MHz tuned circuit this shifts the resonant frequency by over 7 kHz — significant for a CW transceiver.

**Inductors:** typically positive TC because the wire expands slightly as temperature rises, increasing the coil diameter and hence inductance. Ferrite-cored inductors may have a more complex TC because the ferrite permeability also changes with temperature.

**Compensation:** tuned circuits for frequency-stable applications are built using combinations of positive-TC and negative-TC capacitors chosen so that the net drift is close to zero. Where this is not sufficient, a crystal oscillator or TCXO/OCXO must be used.

### 4K.2 — Screening

Inductors produce a magnetic field that can couple to nearby coils, causing unwanted signal transfer (mutual inductance). Two strategies:

1. **Orientation:** mount adjacent coils at right angles to each other to minimise mutual coupling
2. **Screening can:** enclose the inductor in a metal can. The magnetic field induces surface currents in the can that oppose the external field. The can must be large enough — the walls must be at least 1.5 times the coil diameter away from the coil, otherwise the circulating currents in the metal degrade the inductor's Q

**Material choice:**
- At **RF:** thin aluminium or copper sheet (low resistivity, good at RF frequencies)
- At **audio frequencies:** high-permeability metal such as Mu-metal, to screen low-frequency magnetic fields

**RF circuit screening:** an entire sensitive section of a receiver (e.g. the local oscillator) may be enclosed in a screened box with filtered leads, both to prevent the oscillator radiating and to prevent external signals reaching the sensitive circuitry.

### 4K.3 — Decibels

> [INFO] Chapter 4 introduces decibels in outline; the full treatment (10 log P, 20 log V, dBm, dBW, dBd, dBi) is covered in the Measurements chapter. Refer to that chapter for worked examples and the complete reference table.

---

## Self-Check Questions

1. A transmitter delivers 400 W into a 50 Ω load. What current flows in the feeder?
2. Three resistors of 10 Ω, 20 Ω and 30 Ω are connected in series across 120 V. What is the voltage across the 20 Ω resistor?
3. A source has EMF 12 V and internal resistance 2 Ω. At what load resistance is maximum power transferred, and what is the maximum power delivered to the load?
4. A 100 nF capacitor is charged through a 47 kΩ resistor. Calculate the time constant and the time to reach 63% of supply voltage.
5. What inductance has a reactance of 50 Ω at 7.0 MHz?
6. A mains supply is 230 V RMS. What is the peak voltage?
7. A series LC circuit has L = 10 μH and C = 100 pF. Calculate the resonant frequency.
8. A tuned circuit has a resonant frequency of 14 MHz and a Q of 50. What is the −3 dB bandwidth?
9. A transformer has 200 primary turns and 50 secondary turns. If the primary is connected to 240 V, what is the secondary voltage? If a 4 Ω load is connected to the secondary, what impedance does the source see at the primary?
10. Why must the walls of an inductor screening can be at least 1.5 times the coil diameter away from the coil?

<details>
<summary>Self-check answers</summary>

1. P = I²R → 400 = I² × 50 → I = √8 ≈ **2.83 A**
2. R_total = 60 Ω; total current = 120/60 = 2 A; V_20Ω = 2 × 20 = **40 V**
3. Maximum power transfer at R_load = r = **2 Ω**; at this point V_terminal = 12/2 = 6 V; P_load = 6 × (6/2) = **18 W** (or: P_max = EMF²/(4r) = 144/8 = 18 W)
4. τ = CR = 100 × 10⁻⁹ × 47 × 10³ = **4.7 ms**; 63% reached at **1τ = 4.7 ms**
5. X_L = 2πfL → 50 = 2π × 7 × 10⁶ × L → L = 50/(44 × 10⁶) ≈ **1.14 μH**
6. V_peak = V_rms × √2 = 230 × 1.414 ≈ **325 V**
7. f_r = 1/(2π√(LC)) = 1/(2π√(10 × 10⁻⁶ × 100 × 10⁻¹²)) = 1/(2π√(10⁻¹⁵)) = 1/(2π × 31.6 × 10⁻⁹) ≈ **5.03 MHz**
8. BW = f_r / Q = 14 × 10⁶ / 50 = **280 kHz**
9. V_S = 240 × (50/200) = **60 V**; Z_in = 4 × (200/50)² = 4 × 16 = **64 Ω**
10. If the can walls are too close, the magnetic field from the coil induces strong currents in the metal; these currents dissipate power and act as a lossy parallel resistance, **reducing the Q** of the inductor.

</details>

---

## Suggested Interactives for RFH-Interactives

1. **RC/LR time-constant explorer** — Sliders for R, C (or L). Live graph shows V_C or I_L vs time; vertical markers at τ, 2τ, 5τ. Separate tabs for charging/discharging and RC/LR modes. Directly maps to §4D4 and §4E4 time-constant content.

2. **Reactance calculator** — Enter frequency (slider or text) and component value; displays X_L and X_C side by side on a shared frequency axis. Intersection highlights f_r visually. Covers §4G2/4G3.

3. **Series/parallel LC resonance visualiser** — Enter L and C; shows f_r, Z vs f plot (dip for series, peak for parallel), phasor diagram at three frequencies (below, at, above resonance). Covers §4H1/4H2.

4. **Q factor and bandwidth explorer** — Drag Q slider; see the resonance curve narrow and sharpen, BW marker update, circulating current magnitude indicated. Covers §4H3/4H4/4H5.

5. **Transformer impedance matching calculator** — Enter Z_source, Z_load; output shows required turns ratio, primary and secondary current/voltage at rated power, and the 90% efficiency scenario. Covers §4J1/4J2.

6. **Phasor animator** — Select series RC or RL; sliders for R, X, f. Shows rotating phasor diagram in real time, V_R/V_X/V_supply magnitudes and the phase angle θ. Covers §4G5/4G6/4G7.

---

*Sources: RSGB Full Licence Manual, 3rd Edition, Chapter 4 (pp 19–30). All regulatory values marked [VERIFY] against current Ofcom licence schedule and RSGB syllabus.*
