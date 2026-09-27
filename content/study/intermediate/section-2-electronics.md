# Section 2: Electronics & Electrical

<!-- Exam weight: 14/46 questions (~30%) -->
<!-- Sub-sections: 2C, 2D, 2E, 2F, 2G, 2H, 2I, 2J -->
<!-- Syllabus refs: 2A1, 2C1-3, 2D1-6, 2E1-8, 2F1, 2G1, 2H1-5, 2I1-6, 2J1-4 -->

**This is the biggest section in the exam.** Roughly 30% of your marks come from here.
Most questions involve calculations or recognising component behaviour.
Work through each chapter. Do the examples yourself before checking.

---

## A quick note on AC mains safety (2A1)

Before the electronics — one safety rule that is always in the back of your mind.

**Mains AC voltage in the UK is 230 V RMS.** The peak voltage is actually 325 V.

- Never work on live mains equipment.
- Fit a fuse in the live (brown) wire — not the neutral.
- An RCD (residual current device) protects you if current leaks to earth.
- Double-insulated equipment has no earth connection by design — do not add one.

> [INFO] **2A1:** You need to know that 230 V AC mains has a peak voltage significantly
> higher than 230 V. (Peak = 230 × √2 ≈ 325 V.)

---

## 2C: Resistors, Capacitors, and Inductors

### 2C Theory — Resistors

A resistor opposes the flow of electric current. Resistance is measured in **ohms (Ω)**.

#### Resistor colour code (4-band)

Most resistors have four colour bands. Read from the end with the bands closer together.

| Colour | Digit | Multiplier |
|--------|-------|-----------|
| Black | 0 | ×1 |
| Brown | 1 | ×10 |
| Red | 2 | ×100 |
| Orange | 3 | ×1 k |
| Yellow | 4 | ×10 k |
| Green | 5 | ×100 k |
| Blue | 6 | ×1 M |
| Violet | 7 | ×10 M |
| Grey | 8 | — |
| White | 9 | — |
| Gold | — | ×0.1 (5% tolerance) |
| Silver | — | ×0.01 (10% tolerance) |

**Mnemonic:** BB ROY of Great Britain has a Very Good Wife
(Black Brown Red Orange Yellow Green Blue Violet Grey White)

**Example:** Red Red Orange Gold
→ Digits: 2, 2. Multiplier: Orange = ×1 k. Tolerance: Gold = ±5%
→ Value = **22 kΩ ±5%**

> [INFO] **2C1:** The 4-band colour code. You must be able to read a resistor value from
> its bands, and identify the tolerance band.

#### Preferred values — the E12 series

Resistors are not made in every value. The **E12 series** has 12 values per decade:
10, 12, 15, 18, 22, 27, 33, 39, 47, 56, 68, 82 — then 100, 120, 150...

These are the values you will find in catalogues and exam questions.

#### Resistors in series

When resistors are connected end-to-end (series), the **resistances add**.

```
R_total = R1 + R2 + R3 + ...
```

**Example:** 100 Ω + 150 Ω + 220 Ω = **470 Ω**

#### Resistors in parallel

When resistors share the same two nodes (parallel), the combined resistance is **less than
the smallest individual resistor**.

**For two resistors:**
```
R_total = (R1 × R2) / (R1 + R2)
```

**For any number of resistors:**
```
1/R_total = 1/R1 + 1/R2 + 1/R3 + ...
```

> [WARNING] **Common mistake:** Students often add resistances in parallel instead of using
> the reciprocal formula. The parallel combination is ALWAYS less than the smallest resistor.

**Example 1:** 100 Ω in parallel with 150 Ω
```
R = (100 × 150) / (100 + 150) = 15 000 / 250 = 60 Ω
```

**Example 2:** 100 Ω in parallel with 200 Ω
```
R = (100 × 200) / (100 + 200) = 20 000 / 300 = 66.7 Ω
```

**Example 3:** Three resistors — 1.8 kΩ, 2.7 kΩ, 3.3 kΩ in parallel
```
1/R = 1/1800 + 1/2700 + 1/3300
    = 0.000556 + 0.000370 + 0.000303
    = 0.001229

R = 1 / 0.001229 = 813 Ω
```

> [INFO] **2C1:** Parallel resistance always less than smallest. Know both the 2-resistor
> shortcut and the general reciprocal formula.

### 2C Theory — Potential Dividers

A **potential divider** (voltage divider) uses two or more resistors in series to tap off a
fraction of the supply voltage.

<img src="/assets/images/study/section-2/fig-2-1-potential-divider.svg" alt="Potential divider circuit: +Vs connects to R1 (top), junction at middle taps V_out, R2 (bottom) connects to GND. V_out = Vs × R2 / (R1 + R2)" width="600" height="280" loading="lazy">

The output voltage is:
```
V_out = Vs × R2 / (R1 + R2)
```

This only works accurately if the load (connected to V_out) draws very little current —
if it draws significant current, it changes the effective R2 value.

> [INFO] **2C2:** The potential divider formula. Questions often give you R1, R2, and Vs,
> and ask for V_out — or vice versa.

**Example:** Three equal resistors in series across a supply. What is the voltage at the
junction between the bottom two resistors?

If all three are equal, each drops 1/3 of the supply. The bottom junction is 1/3 of the way
up, so V_out = Vs × 1/3.

If V_out = 8 V, then Vs = 24 V.

#### Voltage in a series circuit

In a series circuit, the **sum of voltage drops equals the supply voltage**. The voltage
drop across each component is proportional to its resistance.

**Example:** R1 = 200 Ω, R2 = 600 Ω in series. Voltage across R1 = 4 V.
```
Current I = V_R1 / R1 = 4 / 200 = 20 mA
Voltage across R2 = I × R2 = 20 mA × 600 = 12 V
Total supply = 4 + 12 = 16 V
```

> [INFO] **2C3:** In a series circuit, current is the same everywhere. Use this to find
> voltages across individual components.

#### Internal resistance and terminal voltage

Real batteries and power supplies have an **internal resistance**. Under load, the terminal
voltage drops because current flows through this internal resistance.

```
V_terminal = V_open_circuit - (I × R_internal)
```

**Example:** Terminal voltage is 13.2 V at 1 A, and 12.4 V at 5 A.
```
Voltage drop at 1A: 13.2 V terminal, unknown V_oc and R_int
Voltage drop at 5A: 12.4 V terminal

Change in voltage: 13.2 - 12.4 = 0.8 V
Change in current: 5 - 1 = 4 A
R_internal = 0.8 / 4 = 0.2 Ω

V_oc = 13.2 + (1 × 0.2) = 13.4 V
```

At receive (I ≈ 0): terminal voltage ≈ **13.4 V** (the open-circuit voltage).

### 2C Theory — Capacitors

A **capacitor** stores charge. It consists of **two metal plates separated by an insulating
material** (the dielectric).

Capacitance is measured in **farads (F)**, but practical values are:
- **μF** (microfarads) = 10⁻⁶ F — large electrolytic capacitors
- **nF** (nanofarads) = 10⁻⁹ F — film capacitors
- **pF** (picofarads) = 10⁻¹² F — small ceramic or trimmer capacitors

#### Types of capacitor

| Type | Typical values | Key property |
|------|---------------|-------------|
| Electrolytic | 1 μF – 10 000 μF | Polarised — must fit correct way |
| Ceramic | 1 pF – 100 nF | Small, cheap, non-polarised |
| Film (polyester, polypropylene) | 1 nF – 10 μF | Good stability |
| Variable/trimmer | 5 pF – 500 pF | Adjustable |

> [WARNING] **2D3:** Polarised capacitors (electrolytics) must be fitted the correct way round.
> Fitting them backwards can cause them to fail — sometimes explosively. The positive lead is
> longer. The negative side has a stripe marking on the case.

#### Capacitors in series and parallel

Capacitors combine the **opposite way** to resistors:

- **Parallel:** C_total = C1 + C2 + C3 (capacitances add — like resistors in series)
- **Series:** 1/C_total = 1/C1 + 1/C2 (use reciprocal formula)

> [WARNING] **Common mistake:** Many students mix up series/parallel rules for C vs R.
> Remember: for capacitors, parallel = add. For resistors, series = add.

### 2C Theory — Inductors

An **inductor** is a coil of wire with multiple turns. It stores energy in a magnetic field.

Inductance is measured in **henries (H)**, though practical values are often mH or μH.

**Inductance increases if you:**
- Add more turns
- Use a ferrite or iron core (concentrates the magnetic field)
- Increase the cross-sectional area of the coil
- **Reduce the spacing between the turns** (turns closer together = higher inductance)

> [INFO] **2D6:** Reducing the spacing between turns increases inductance. Spreading turns
> out decreases it.

**Inductance decreases if you:**
- Remove the core (air core has less inductance than ferrite)
- Pull turns apart
- Remove turns

Inductors in series: L_total = L1 + L2 + ... (like resistors)
Inductors in parallel: 1/L_total = 1/L1 + 1/L2 + ... (like resistors)

> [INFO] **2D4:** An inductor is normally described as a coil of wire with several turns.
> The inductance depends on the number of turns, core material, and turn spacing.

### 2C Self-Check Questions

**Q1.** Two resistors of 470 Ω and 680 Ω are connected in parallel. Which of the following
is closest to their combined resistance?
<details><summary>Answer</summary>

R = (470 × 680) / (470 + 680) = 319 600 / 1 150 ≈ **278 Ω**

(Always less than the smallest resistor, 470 Ω — so eliminate any answer above 470 Ω.)
</details>

**Q2.** A 4-band resistor has bands Yellow, Violet, Red, Gold. What is its value?
<details><summary>Answer</summary>

Yellow = 4, Violet = 7, Red = ×100, Gold = ±5%
Value = **4 700 Ω (4.7 kΩ) ±5%**
</details>

**Q3.** In a potential divider, R1 = 1 kΩ and R2 = 4 kΩ, connected across 10 V.
What is the output voltage measured across R2?
<details><summary>Answer</summary>

V_out = 10 × 4 000 / (1 000 + 4 000) = 10 × 4/5 = **8 V**
</details>

**Q4.** A polarised capacitor is installed backwards in a circuit. What is likely to happen?
<details><summary>Answer</summary>

It can fail — potentially bulging, leaking, or rupturing. **Always fit polarised capacitors
with correct polarity** — positive terminal to the more positive supply rail.
</details>

**Q5.** How can the inductance of an air-core coil be increased without adding turns?
<details><summary>Answer</summary>

Insert a ferrite or iron core. This concentrates the magnetic field and increases inductance
significantly — by a factor related to the core's permeability.
</details>

---

## 2D: Ohm's Law and Power

### 2D Theory — Ohm's Law

**Ohm's law:** Voltage equals current multiplied by resistance.

```
V = I × R
```

Three versions — rearrange as needed:

```
V = I × R      (voltage)
I = V / R      (current)
R = V / I      (resistance)
```

**Units:**
- V = volts (V)
- I = amperes (A) — often milliamps (mA) or microamps (μA) in practice
- R = ohms (Ω)

> [INFO] **2D1:** Ohm's law is the single most used equation in electronics. Learn all three
> rearrangements. Unit conversions: 1 mA = 0.001 A, 1 kΩ = 1 000 Ω.

**Example:** A 1.5 kΩ resistor has 6 V across it. What current flows?
```
I = V / R = 6 / 1 500 = 0.004 A = 4 mA
```

**Example:** A current of 50 mA flows through a 100 Ω resistor. What voltage is across it?
```
V = I × R = 0.05 × 100 = 5 V
```

#### Unit conversion reminder

| Write | Means | Multiply by |
|-------|-------|------------|
| 1 mA | 0.001 A | 10⁻³ |
| 1 μA | 0.000 001 A | 10⁻⁶ |
| 1 kΩ | 1 000 Ω | 10³ |
| 1 MΩ | 1 000 000 Ω | 10⁶ |

> [WARNING] **Unit errors are the most common calculation mistake.** Always convert to
> base units (A and Ω, not mA and kΩ) before calculating. Or be careful that mA × kΩ = V
> (the thousands cancel).

### 2D Theory — Power

**Power** is the rate of energy use. Measured in **watts (W)**.

Three power formulas — all derived from P = V × I and Ohm's law:

```
P = V × I     (power from voltage and current)
P = I² × R   (power from current and resistance)
P = V² / R   (power from voltage and resistance)
```

**Example:** What power is dissipated in a 50 Ω resistor with 10 V across it?
```
P = V² / R = 100 / 50 = 2 W
```

**Example:** A 100 mA current flows through a 470 Ω resistor. What power is dissipated?
```
P = I² × R = (0.1)² × 470 = 0.01 × 470 = 4.7 W
```

> [INFO] **2D2:** Know all three power formulas. In exam questions, identify which two
> quantities you are given (V and R, V and I, or I and R) and pick the matching formula.

#### Practical note: power ratings

Resistors are rated for how much power they can handle before overheating:
common values are ¼ W, ½ W, 1 W, 2 W. Exceeding the rating causes the resistor to burn out.

If a resistor will dissipate 1.5 W, choose at least a 2 W rated component.

### 2D Theory — Capacitor and Inductor Basics (Component Properties)

These component properties appear as exam questions under 2D in the RSGB syllabus.

#### Capacitor construction (2D1)

A capacitor is made of **two metal plates separated by an insulating material** (the
dielectric). The dielectric can be ceramic, polyester, polypropylene, electrolytic paste,
or air. The insulating material keeps the plates apart and determines the capacitance value.

#### Polarised capacitors (2D3)

**Electrolytic capacitors are polarised.** They must be fitted with the positive terminal
connected to the more positive part of the circuit.

Fitting one backwards applies reverse voltage across it — which breaks down the oxide layer
that forms the dielectric. The capacitor will fail, often destructively.

Look for: the longer lead (positive), a stripe with minus signs on the case (negative),
or a + marking near the positive lead.

#### Inductors (2D4 and 2D6)

An inductor is normally a coil of wire with several turns. It stores energy in a magnetic field.

To **increase inductance**, you can:
- Add more turns
- Add a ferrite or iron core
- Reduce the spacing between turns (packing turns closer together increases inductance)

To **decrease inductance**, you can:
- Remove turns
- Pull turns apart (spreading)
- Remove the core

#### Crystals — series vs parallel resonance (2D5)

Quartz crystals are used to control oscillator frequency with high accuracy. A crystal can
exhibit two slightly different resonant frequencies:

- **Series resonance:** lower frequency, acts as a low impedance at resonance
- **Parallel resonance:** slightly higher frequency, acts as a high impedance

When choosing a crystal for a circuit, you must check whether the circuit needs a series-
resonant or parallel-resonant type. Using the wrong type shifts the operating frequency.

> [INFO] **2D5:** Crystal oscillators: always check whether the circuit specifies series or
> parallel resonance before ordering a replacement crystal.

#### Resistivity and Conductor Resistance (2D6)

The resistance of a conductor depends not just on Ohm's law but on the **physical properties** of the material it is made from and its dimensions.

**Resistivity** (symbol **ρ**, Greek letter rho) is a property of the material itself — it measures how strongly a material opposes the flow of electric current per unit dimensions.

```
R = ρ × l / A

Where:
  R = resistance (Ω)
  ρ = resistivity of the material (Ω·m)
  l = length of the conductor (m)
  A = cross-sectional area of the conductor (m²)
```

**Rearranging:** ρ = R × A / l

This means:
- A **longer** conductor has **higher** resistance (proportional)
- A **wider** conductor (larger cross-section) has **lower** resistance (inversely proportional)
- A material with **lower ρ** is a better conductor

| Material | Resistivity ρ (Ω·m) | Notes |
|---|---|---|
| Silver | 1.6 × 10⁻⁸ | Best common conductor; expensive |
| Copper | 1.7 × 10⁻⁸ | Used for virtually all RF wire and cable |
| Aluminium | 2.8 × 10⁻⁸ | Lighter than copper; used in HV power lines |
| Iron / Steel | ~1 × 10⁻⁷ | Much worse conductor; avoid for RF work |

**Practical consequence:** Copper wire has very low resistivity, but long thin feeders still have significant resistance at DC and at RF (where skin effect concentrates current in the outer skin of the conductor, further increasing effective resistance). This is why coaxial cable loss increases with frequency.

> [INFO] **2D6:** Resistivity (ρ) is a property of the material. Conductor resistance R = ρl/A — longer and thinner conductors have higher resistance; better conductor materials have lower ρ. Copper (ρ ≈ 1.7 × 10⁻⁸ Ω·m) is the standard choice for RF wiring.

### 2D Self-Check Questions

**Q1.** A 4.7 kΩ resistor has 9.4 V across it. What current flows?
<details><summary>Answer</summary>

I = V / R = 9.4 / 4 700 = 0.002 A = **2 mA**
</details>

**Q2.** A transmitter draws 6 A from a 13.8 V supply. What power is it consuming?
<details><summary>Answer</summary>

P = V × I = 13.8 × 6 = **82.8 W**
</details>

**Q3.** Which of the following is the correct description of a capacitor's structure?
a) A coil of wire on a ferrite core  b) Two metal plates separated by insulating material  c) A semiconductor junction  d) A wound resistance element
<details><summary>Answer</summary>

**b) Two metal plates separated by insulating material.**
</details>

**Q4.** A resistor is rated at ¼ W. The circuit will cause it to dissipate 0.3 W.
Is this safe, and what should you do?
<details><summary>Answer</summary>

**No.** 0.3 W exceeds the ¼ W (0.25 W) rating. Replace it with a ½ W or higher rated resistor
of the same resistance value.
</details>

**Q5.** You need to replace a crystal in an oscillator. What must you check beyond the
frequency?
<details><summary>Answer</summary>

Check whether the oscillator requires a **series resonant** or **parallel resonant** crystal.
The wrong type may cause the oscillator to run at a slightly wrong frequency or not start.
</details>

---

## 2E: Alternating Current

### 2E Theory — AC versus DC

**Direct current (DC):** flows in one direction only. A battery produces DC.

**Alternating current (AC):** reverses direction periodically. Mains electricity is AC.
A sine wave is the purest form of AC.

### 2E Theory — AC Waveforms (2E2)

A sine wave is described by:

- **Frequency (f):** how many complete cycles per second. Unit: **hertz (Hz)**.
  Also kHz, MHz, GHz.
- **Period (T):** the time for one complete cycle. Unit: **seconds (s)**.

```
f = 1 / T      T = 1 / f
```

**Example:** Mains frequency = 50 Hz → Period = 1 / 50 = **0.02 s (20 ms)**

- **Peak voltage (V_pk):** the maximum voltage reached in one direction.
- **Peak-to-peak voltage (V_pp):** the total swing from positive peak to negative peak.
  V_pp = 2 × V_pk
- **RMS voltage (V_rms):** the DC equivalent in terms of heating effect.

```
V_rms = V_pk / √2  ≈  V_pk × 0.707
V_pk  = V_rms × √2  ≈  V_rms × 1.414
```

> [INFO] **2E3:** RMS stands for Root Mean Square. The RMS value of an AC signal is the
> DC voltage that would produce the same heating effect in a resistor.

**UK mains example:**
- V_rms = 230 V (what your meter reads)
- V_pk = 230 × 1.414 ≈ **325 V** (the actual peak)

> [WARNING] **2E3:** Which signal causes more heating in a 50 Ω load — 10 V DC or
> 10 V AC (peak)? Answer: **10 V DC.** The DC is a constant 10 V. The AC peak is 10 V,
> but its RMS is only 10 / 1.414 ≈ 7.07 V RMS. DC wins.

### 2E Theory — Capacitors and AC (2E1)

A capacitor **blocks DC but allows AC to pass.**

Why? A capacitor charges up to the DC voltage and then no more current flows.
With AC, the voltage is always changing, so the capacitor is always charging or discharging —
current appears to flow through it.

This makes capacitors useful for:
- **Coupling:** pass AC signal between stages, block DC bias
- **Decoupling:** bypass AC signals to ground while blocking DC paths
- **Filtering:** pass high frequencies, block low frequencies

> [INFO] **2E1:** A capacitor will allow AC to flow but block DC. This is a fundamental
> property with many practical uses.

### 2E Theory — Reactance (2E4 and 2E5)

**Reactance** is the opposition to AC offered by a capacitor or inductor.
It is measured in **ohms (Ω)** — because it relates voltage to current, just like resistance.

#### Capacitive reactance (Xc)

```
Xc = 1 / (2π × f × C)
```

- Xc decreases as frequency increases → capacitors pass high frequencies easily
- Xc increases as frequency decreases → capacitors block low frequencies and DC

#### Inductive reactance (XL)

```
XL = 2π × f × L
```

- XL increases as frequency increases → inductors oppose high frequencies
- XL decreases as frequency decreases → inductors pass low frequencies easily

> [INFO] **2E4:** Reactance is measured in ohms because it is the ratio of voltage to
> current in a reactive component — the same relationship as resistance, but frequency-
> dependent.

> [INFO] **2E5/2E6:** Reactance (X) and resistance (R) combine to give impedance (Z).
> The term 'impedance' is used when relating voltage to current in an AC circuit.
> Z = √(R² + X²) for simple series circuits.

### 2E Theory — Wavelength, Frequency, and Bands (2E7 and 2E8)

**Wavelength** is the physical length of one complete cycle of a radio wave in free space.

```
λ (metres) = 300 / f (MHz)
```

Or equivalently: λ × f = 300 × 10⁶ (speed of light in metres per second)

> [INFO] **2E7:** Memorise λ = 300 / f(MHz). This gives the wavelength in metres when
> frequency is in megahertz.

**Examples:**
- 7.1 MHz: λ = 300 / 7.1 = **42.3 m** (40 m band)
- 14 MHz: λ = 300 / 14 = 21.4 m → half-wave dipole = 10.7 m ≈ **10 m** (20 m band)
- 145.5 MHz: λ = 300 / 145.5 = 2.06 m → **2 m band**
- 432.675 MHz: λ = 300 / 432.675 = 0.693 m ≈ 69 cm → **70 cm band**

#### Key amateur bands and frequencies

| Band name | Frequency range | λ |
|-----------|----------------|---|
| 160 m | 1.810 – 2.000 MHz | ~160 m |
| 80 m | 3.500 – 3.800 MHz | ~85 m |
| 40 m | 7.000 – 7.200 MHz | ~42 m |
| 30 m | 10.100 – 10.150 MHz | ~30 m |
| 20 m | 14.000 – 14.350 MHz | ~21 m |
| 17 m | 18.068 – 18.168 MHz | ~17 m |
| 15 m | 21.000 – 21.450 MHz | ~14 m |
| 10 m | 28.000 – 29.700 MHz | ~10 m |
| 2 m | 144 – 146 MHz | ~2 m |
| 70 cm | 430 – 440 MHz | ~70 cm |
| 23 cm | 1 240 – 1 325 MHz | ~23 cm |

> [INFO] **2E8:** Know which band a given frequency falls in. Use λ = 300/f(MHz) if unsure.

### 2E Self-Check Questions

**Q1.** An AC signal has a peak voltage of 14.1 V. What is its RMS voltage?
<details><summary>Answer</summary>

V_rms = 14.1 / √2 = 14.1 / 1.414 ≈ **10 V RMS**
</details>

**Q2.** A signal at 50.150 MHz is in which amateur band?
<details><summary>Answer</summary>

λ = 300 / 50.150 ≈ 6 m → **6 m band** (50 – 52 MHz)
</details>

**Q3.** Why does a capacitor block DC but pass AC?
<details><summary>Answer</summary>

With DC, the capacitor charges to the supply voltage and then no further current flows.
With AC, the voltage continuously reverses so the capacitor continuously charges/discharges
— current effectively passes through it.
</details>

**Q4.** A 10 V DC signal and a 10 V peak AC signal are applied separately to identical
50 Ω resistors. Which produces more heat?
<details><summary>Answer</summary>

The **10 V DC** produces more heat. The 10 V peak AC has an RMS of only 7.07 V.
Power from DC = 10² / 50 = 2 W. Power from AC = 7.07² / 50 ≈ 1 W.
</details>

**Q5.** What is the approximate length of a half-wave dipole for 14.2 MHz?
<details><summary>Answer</summary>

λ = 300 / 14.2 = 21.1 m. Half-wave = 10.6 m.
(In practice, a physical dipole is about 95% of calculated, so about 10 m.)
</details>

---

## 2F: Impedance, Resonance, Q Factor, and Tuned Circuits

### 2F Theory — Impedance (2E6)

**Impedance (Z)** is the total opposition to AC in a circuit.
It combines resistance (R) and reactance (X).

```
Z = √(R² + X²)     (ohms)
```

- If only resistance: Z = R
- If only reactance: Z = X
- If both: Z is always greater than either R or X alone

Impedance is used when describing the input or output of RF circuits, antennas, and feeders.
A typical coaxial feeder has an impedance of 50 Ω; amateur dipoles are matched to this.

> [INFO] **2E6:** The term 'impedance' is used when relating voltage to current in an AC
> circuit. It has units of ohms, like resistance.

### 2F Theory — Tuned Circuits (2H1 and 2H3)

A **tuned circuit** consists of an **inductor (L) and a capacitor (C)** connected together.
Energy bounces between the magnetic field of the inductor and the electric field of the capacitor.

#### Resonant frequency

At the **resonant frequency**, the inductive reactance equals the capacitive reactance (XL = XC).

```
f₀ = 1 / (2π × √(L × C))
```

Where:
- f₀ = resonant frequency in Hz
- L = inductance in henries
- C = capacitance in farads

> [INFO] **2H3:** Energy can transfer between a capacitor and an inductor at a frequency
> known as the **resonant frequency**.

**Effect of changing L or C on resonant frequency:**
- **Double C → f₀ halves** (quadruple C → f₀ halves again, so ×4 C → ×½ f₀)
- **Quadruple C → f₀ halves** (because f₀ ∝ 1/√C)
- **Reduce L → f₀ increases**

**Example:** If C is quadrupled, what happens to f₀?
```
f₀ = 1 / (2π√(L × C))
New f₀ = 1 / (2π√(L × 4C)) = 1 / (2π × 2 × √(LC)) = f₀ / 2
```
**Resonant frequency halves.**

> [INFO] If the capacitance in a tuned circuit is quadrupled, the resonant frequency halves.
> If inductance is decreased, frequency increases.

#### Series tuned circuit

In a series tuned circuit, at resonance:
- **Impedance is minimum** (theoretically zero for a perfect circuit; in practice, just the
  resistance of the inductor winding)
- Current is maximum
- Used as a bandpass filter — passes the resonant frequency, blocks others

> [INFO] **2H1:** At resonance, a series tuned circuit has **minimum impedance**.

#### Parallel tuned circuit

In a parallel tuned circuit, at resonance:
- **Impedance is maximum** (high impedance — theoretically infinite)
- Current in the external circuit is minimum
- Used as a band-stop filter, or to select a frequency in an oscillator

#### High voltage and current at resonance

At resonance, voltage and circulating current inside a tuned circuit can be much higher than
the supply voltage. This is why **tuned circuit components may need high voltage and current
ratings** — even if the supply voltage seems low.

> [WARNING] **2G1 exam note:** Components in a tuned circuit may need high voltage and
> current ratings because high voltages and circulating currents can exist at resonance.

#### Identify the filter from its response curve

The exam often shows an **amplitude-vs-frequency plot** and asks what type of filter produced
it. Four shapes to recognise on sight:

<!-- SVG: filter-response-lowpass — amplitude (dB) vs frequency, flat pass-band on the left, response falls away above fc, -3 dB point marked -->
**Low-pass:** flat on the left, falls away on the right. *"Flat, then falls."*

<!-- SVG: filter-response-highpass — amplitude (dB) vs frequency, response rising from the left, flat pass-band on the right above fc -->
**High-pass:** flat on the right, falls away on the left. *"Rises, then flat."*

<!-- SVG: filter-response-bandpass — hump shape between two cut-off frequencies, flat top, steep sides, passband/stopband/bandwidth labelled -->
**Band-pass:** a hump between two cut-offs — flat (or peaked) top, attenuated both sides.
*"One hump in the middle."*

<!-- SVG: filter-response-bandstop — narrow deep dip cut out of an otherwise flat, high response -->
**Band-stop / notch:** the opposite of band-pass — a narrow dip cut out of an otherwise flat
response. *"One dip in the middle."*

> [INFO] **Quick recognition rule:** count the transitions. **One** transition (rising or
> falling) = low-pass or high-pass. **Two** transitions bounding a passed region = band-pass.
> **Two** transitions bounding a *rejected* region (a dip, not a hump) = band-stop/notch.

#### LC circuits in the signal path — series vs parallel

A tuned circuit behaves very differently depending on (a) whether the L and C are wired in
**series or parallel**, and (b) whether that LC pair sits **in-line** (in the signal path) or
**as a shunt** (branching off to ground). The same two components can be wired four ways,
giving four different filter behaviours:

<!-- SVG: lc-placement-4way — four small schematics: series LC in-line (labelled band-pass), series LC shunt-to-ground (labelled notch), parallel LC in-line (labelled notch), parallel LC shunt-to-ground (labelled band-pass), with correct circuit symbols -->

| LC type | At resonance (f₀) | RSGB name | In-line (series path) | As a shunt (to ground) |
|---|---|---|---|---|
| **Series LC** (L and C in series with each other) | **Minimum** impedance, maximum current | "Acceptor" | Passes f₀ through → **band-pass** | Shorts f₀ to ground → **notch** (series-resonant trap) |
| **Parallel LC** (L and C across each other) | **Maximum** impedance, minimum line current (but a large *circulating* current inside the tank) | "Rejector" | Blocks f₀ → **notch** (e.g. an antenna trap) | Passes f₀ to the output → **band-pass** (IF tank, tuned amplifier load) |

<!-- SVG: lc-impedance-series — impedance (Ω) vs frequency, V-shaped dip down to a minimum at f0 -->
<!-- SVG: lc-impedance-parallel — impedance (Ω) vs frequency, sharp peak up to a maximum at f0 -->

The exam may also show an **impedance-vs-frequency** plot rather than an amplitude one —
these look different: a **series** LC gives a V-shaped **dip** at f₀ (impedance falls to a
minimum), a **parallel** LC gives a sharp **peak** at f₀ (impedance rises to a maximum).

> [INFO] **Memory aid:** *"Series = Small impedance"* — series-resonant LC has minimum
> (small) impedance at f₀. Parallel is the opposite: maximum impedance, so it *rejects*
> current flow through itself at f₀ (hence "rejector") while a series circuit *accepts*
> current at f₀ (hence "acceptor").

#### Key filter terms

- **Cut-off frequency (fc):** the point where response has fallen 3 dB below the passband
  level (the "-3 dB point").
- **Passband:** the range of frequencies a filter lets through with little attenuation.
- **Stopband:** the range of frequencies a filter attenuates heavily.
- **Centre frequency (f₀):** the middle of a band-pass or band-stop filter's response.
- **Bandwidth (BW):** the width of the passband (or stopband), usually measured at the
  -3 dB points.
- **Q:** selectivity, Q = f₀ / BW — covered in detail just below.
- **Insertion loss:** how much a filter attenuates its own passband (ideally 0 dB; real
  filters always lose a little).
- **Roll-off / order:** how steeply the response falls outside the passband. A higher-order
  filter rolls off faster (steeper skirts) but costs more components.

<!-- EMBED: /interactives/lc-filter.html?mode=bs — LC filter interactive in notch mode, placed alongside the notch/band-stop discussion above -->
<!-- INTERACTIVE REQUEST: filter-signal interactive (waveform + spectrum before/after a filter) — embed here once built -->

<details><summary><strong>Go deeper — where each filter type lives in a real station</strong></summary>

- **Harmonic low-pass filter** — fitted at a transmitter's antenna output, removes harmonics
  above the fundamental (see §3K).
- **Roofing filter** — a wide band-pass filter early in a modern receiver's IF chain, protects
  later narrow filters from being overloaded by strong nearby signals.
- **Crystal/mechanical IF filter** — a narrow band-pass filter that sets a superhet receiver's
  selectivity (see §3K and the [Crystal Filters sideband](../../sidebands/crystal-filter.html)).
- **Audio/DSP notch** — a band-stop filter tuned to remove a single interfering tone (a
  heterodyne whistle) from received audio, often adaptive ("auto-notch") in modern DSP rigs.
- **TVI high-pass filter** — fitted at a TV or other victim receiver's aerial input, blocks
  amateur HF energy while passing the TV channel's (higher) frequencies.

</details>

**See also:**
- <a href="../../sidebands/understanding-filters.html" target="_blank">Sideband — Understanding Filters</a> — response curves, before/after spectra and waveforms, and identify-the-filter practice
- <a href="../../sidebands/filter-design-build-test.html" target="_blank">Sideband — Filter Design, Build & Test</a> — for builders: component-value design and construction
- <a href="../../sidebands/crystal-filter.html" target="_blank">Sideband — Crystal Filters</a> — ladder/half-lattice crystal filter design

### 2F Theory — Q Factor

**Q (Quality factor)** describes how selective a tuned circuit is.

```
Q = f₀ / BW
```

Where BW is the bandwidth (the range of frequencies where the response is within 3 dB of peak).

- **High Q:** narrow bandwidth, sharp tuning, more selective
- **Low Q:** wide bandwidth, less selective

Q depends on the losses in the circuit. Mostly the resistance of the inductor winding.
A good-quality air-core or silver-plated coil gives high Q.

### 2F Theory — Standing Waves on Feeders

A transmission line (feeder) carries RF from the transmitter to the antenna. When there is
a mismatch at the antenna, some energy is reflected back. The forward and reflected waves
combine to create **standing waves** — a pattern that is fixed in space.

Key fact: **on a transmission line, the pattern repeats every half wavelength.**

If the voltage is zero at a point, it is also zero:
- Half a wavelength away in either direction
- One wavelength away
- Any multiple of half wavelengths away

**Example:** An open wire twin feeder carries a 20 m signal. The wavelength is 20 m, so
half wavelength = 10 m. If voltage is zero at one point, it is also zero at a point **10 m
further along the feeder**.

> [INFO] **2F1:** Standing wave patterns on feeders repeat every half wavelength. Voltage
> nodes are separated by λ/2.

#### Worked Phase Example (2F1)

**Question:** At a given instant, there is a positive voltage peak at point A on a transmission line. What is the voltage at a point **¼λ toward the antenna**? What about **½λ toward the antenna**?

```
← toward TX     A         B          C      → antenna
                +V       zero        +V
              (peak)    (node)      (peak)
                    ←¼λ→      ←¼λ→
                    ←————————½λ————————→
```

**Answers:**

- **Point B (¼λ from A):** voltage is **zero** — a voltage node. The pattern passes through zero exactly ¼ of a wavelength from any peak.
- **Point C (½λ from A):** voltage is the **same positive peak** — the standing wave repeats exactly every half wavelength.

> [INFO] **2F1 exam crib:** Points ½λ apart on a standing wave are always at the same phase and amplitude. Points ¼λ apart are always at opposite extremes — if one point is at a positive peak, the point ¼λ away is at zero. **Cross-reference §4B:** impedance also repeats every ½λ along the feeder, which is why λ/4 stubs and ½λ matching sections work.

### 2F Theory — Digital Signals and Sampling (2F1)

Analogue signals (such as audio from a microphone) can be converted to digital data.
This allows the signal to be processed, stored, or transmitted using software.

**Analogue to digital conversion (ADC):**
1. **Sample** the analogue signal at regular intervals
2. **Quantise** each sample — convert to the nearest digital value
3. **Encode** as binary numbers

#### Nyquist theorem

To accurately represent an analogue signal, the **sampling rate must be at least twice the
highest frequency in the signal.**

```
f_sample ≥ 2 × f_max        (the Nyquist rate)
```

**Example:** An audio signal up to 4 kHz. Minimum sample rate = 2 × 4 kHz = **8 kHz.**

Sampling below the Nyquist rate causes **aliasing** — false frequencies appear in the output.

#### Binary resolution

Each sample is encoded as a binary number. The more bits used, the finer the resolution
(smaller steps between quantisation levels).

- 8 bits → 256 levels
- 16 bits → 65 536 levels (CD audio)

A sine wave represented with more binary bits looks smoother and more accurately represents
the original signal.

> [INFO] **2F1:** A higher-resolution digital sine wave (right side of diagram) requires
> more binary bits to represent it accurately.

**Why digitise?**
- Digital signals can be processed by software (DSP — digital signal processing)
- Software can filter, decode, modulate, or demodulate signals in ways that are difficult
  in analogue hardware
- SDR (Software Defined Radio) uses this principle — the signal is digitised early in the
  receive chain, and all processing is done in software

### 2F Self-Check Questions

**Q1.** A tuned circuit has L = 10 μH and C = 100 pF. If C is changed to 400 pF,
what happens to the resonant frequency?
<details><summary>Answer</summary>

C is quadrupled. Therefore f₀ halves. The new resonant frequency is **half** the original.
</details>

**Q2.** An audio signal has components up to 3.5 kHz. What is the minimum sample rate
needed to record it accurately?
<details><summary>Answer</summary>

f_sample ≥ 2 × 3 500 = **7 000 Hz (7 kHz)**
</details>

**Q3.** At resonance, a series tuned circuit has _____ impedance.
<details><summary>Answer</summary>

**Minimum** impedance (ideally zero; in practice, just the winding resistance).
</details>

**Q4.** Why might components in a tuned circuit need high voltage ratings?
<details><summary>Answer</summary>

At resonance, voltages across L and C can be much higher than the supply voltage
(Q times higher). Components must be rated for these elevated voltages.
</details>

**Q5.** A twin feeder carries a 40 m signal. If the RF voltage is zero at one point,
how far away is the next voltage zero?
<details><summary>Answer</summary>

Half wavelength = 40 / 2 = **20 m**. The next voltage zero is 20 m further along the feeder.
</details>

**Q6.** An amplitude-vs-frequency plot shows a single narrow dip cut out of an otherwise
flat, high response. What type of filter produced this?
<details><summary>Answer</summary>

A **band-stop (notch) filter.** A hump would be band-pass; a single falling or rising edge
would be low-pass or high-pass. A narrow *dip* in an otherwise flat response is the signature
of a notch.
</details>

**Q7.** A series LC circuit is connected as a **shunt to ground** across a signal line. What
does it do to the signal at its resonant frequency?
<details><summary>Answer</summary>

It **shorts f₀ to ground** — a series LC has minimum impedance at resonance, so as a shunt it
creates a low-impedance path to ground exactly at f₀, removing it from the signal. This makes
a **notch (series-resonant trap)**.
</details>

**Q8.** A parallel LC circuit is placed **in-line** in a signal path (not as a shunt). What
is its effect at resonance, and why?
<details><summary>Answer</summary>

It **blocks f₀** — a parallel LC has maximum impedance at resonance, so placed in-line it
presents a very high series impedance exactly at f₀, attenuating that frequency while lower
and higher frequencies pass more freely. This is a **notch**, e.g. an antenna trap.
</details>

---

## 2G: Semiconductors — Diodes, Transistors, and Transformers

### 2G Theory — Transformers (2G1)

A **transformer** uses electromagnetic induction to transfer energy between two circuits.
It consists of two coils (primary and secondary) wound on a shared magnetic core.

Key facts:

- **Transformers only work with AC.** DC does not create a changing magnetic field, so no
  energy is transferred to the secondary.
- The **iron or ferrite core concentrates the magnetic field**, increasing coupling between
  the two coils and improving efficiency.
- The voltage ratio equals the turns ratio:

```
V_primary / V_secondary = N_primary / N_secondary
```

**Example:** Primary = 3 turns, secondary = 1 turn. Primary voltage = 240 V AC.
```
240 / V_sec = 3 / 1
V_sec = 240 / 3 = 80 V AC
```

> [INFO] **2G1:** A transformer can only be used with AC. The iron core concentrates the
> magnetic field. The turns ratio determines the voltage ratio.

> [WARNING] Do not confuse the turns ratio direction: more turns on primary → step down.
> More turns on secondary → step up.

**Impedance transformation:** Transformers also transform impedance. This is used in
matching circuits (baluns) to connect antennas with 450 Ω impedance to 50 Ω feeders.

```
Z_primary / Z_secondary = (N_primary / N_secondary)²
```

**Example:** A 9:1 balun (unun) transforms 450 Ω to 50 Ω.
(9/1)² = 81/1 impedance ratio — so 450 Ω / 81 ≈ not quite. Actually: unun turns ratio for
4.5:1 gives (4.5)² = 20.25, and 450/20.25 ≈ 22. For a 9:1 turns ratio: 450/(81) ≈ 5.5 Ω.
Check: Z ratio = 450/50 = 9:1 → turns ratio = √9 = 3:1.)

### 2G Theory — Diodes (2I1)

A **diode** allows current to flow in one direction only. It is a semiconductor junction (P–N).

**Symbol:** Arrow pointing in the direction of conventional current flow.

```
  Anode (+) → Cathode (-)    (conventional current direction)
     |—→|
```

Key applications:
- **Rectification:** converting AC to DC (diode conducts on positive half-cycles only)
- **Protection:** flyback diode across a relay coil prevents voltage spikes when the coil
  switches off (connects in reverse across the coil)
- **Signal detection:** small signal diodes in detectors and mixers

> [INFO] **2I1:** A diode is used to change alternating current to direct current. The
> diode only conducts when its anode is more positive than its cathode.

**Forward voltage drop:** A silicon diode drops about **0.6–0.7 V** when conducting.
A germanium diode drops about 0.2–0.3 V.

**Calculating diode current:**
If a 10 V supply is connected through a 900 Ω resistor to a silicon diode:
```
V_resistor = 10 - 0.6 = 9.4 V (forward drop across diode)
I = 9.4 / 900 ≈ 10.4 mA ≈ 10.6 mA
```

**Relay flyback protection:**
When a relay coil is de-energised, it produces a large voltage spike (back-EMF).
A **diode across the coil (circuit 2 with reverse-biased diode in normal operation)**
clamps this spike and protects the transistor driving the relay.

> [INFO] When a switching transistor drives a relay coil, fit a diode across the coil
> with its cathode to the positive supply. This clamps the flyback spike.

### 2G Theory — Transistors — Bipolar Junction Transistor (BJT)

A **bipolar junction transistor (BJT)** has three terminals:
- **Base (B):** the control terminal
- **Collector (C):** current flows in through collector
- **Emitter (E):** current flows out through emitter

There are two types: **NPN** and **PNP**. NPN is more common.

**Current relationships in NPN:**

```
IC = β × IB        (collector current = gain × base current)
IE = IC + IB       (emitter current = collector + base)
```

**Current gain β (beta):**

```
β = IC / IB
```

A typical transistor has β of 50–300.

> [INFO] **2I3:** The current gain β of a transistor is defined as IC / IB.

**Example:** A transistor has β = 100. The base current is 50 μA. What is the collector current?
```
IC = β × IB = 100 × 0.00005 = 5 mA
```

#### Common emitter configuration

The most common amplifier configuration. The input is applied to the base, the output is
taken from the collector, and the emitter is common to both.

**Characteristics:**
- Voltage gain: moderate to high
- Current gain: high
- 180° phase shift between input and output
- Used for most audio and RF amplifier stages

> [INFO] **2I4:** A common emitter amplifier has the base as input, collector as output,
> and emitter as the common terminal (usually connected to ground through a resistor).

#### Transistor biasing (2I4 and 2I5)

**Biasing** is providing the correct DC voltages and currents to set the transistor's
operating point. Without correct bias, the transistor either cuts off (no output) or
saturates (output clipped).

**Class A bias:**
- Transistor conducts for the **full cycle** of the input signal
- Quiescent current flows even with no signal
- Good linearity (low distortion), but inefficient (wastes power)
- Used in small-signal and linear amplifiers

**Class B bias:**
- Transistor conducts for **half the cycle** only
- Two transistors used in push-pull (one for each half cycle)
- More efficient than class A
- Used in audio power amplifiers

**Class C bias:**
- Transistor conducts for **less than half a cycle**
- Very efficient
- Used in RF power amplifiers (the tuned circuit reconstructs the waveform)
- Not suitable for linear amplification

> [INFO] **2I4 / 2I5:** Biasing provides correct DC operating point. Class A = full cycle,
> most linear. Class C = less than half cycle, most efficient, used for RF power.

#### Input resistance of transistor stage

When bias resistors (R1 and R2 as a voltage divider) are combined with the transistor's
own input resistance at the base, the overall input resistance is the parallel combination:

```
R_in = R1 || R2 || (β × r_e)
```

For a transistor with base input resistance of 50 kΩ, with bias resistors of 47 kΩ and 22 kΩ:
```
R_in = 47k || 22k || 50k ≈ 12.1 kΩ
```

### 2G Theory — Field Effect Transistors (FET) (2H4 and 2H5)

A **Field Effect Transistor (FET)** has three terminals:
- **Gate (G):** the control terminal (like the base of a BJT)
- **Drain (D):** current flows in at drain
- **Source (S):** current flows out at source

> [INFO] **2I6/2H5:** A FET has three terminals: **Gate, Drain, Source**.

**Advantages of FET over BJT at receiver input:**
- **Lower noise figure** — produces less internal noise
- **Higher input impedance** — draws very little current from the signal source
- These make FETs better suited to the first (RF) stage of a receiver

> [INFO] **2H5:** A FET is preferred over a bipolar transistor at the input of a receiver
> because it has a **lower noise figure and higher input impedance**.

**Varicap diode (variable capacitance diode):**
A special diode where capacitance is controlled by the reverse bias voltage.

- More reverse voltage → smaller capacitance
- Less reverse voltage → larger capacitance
- Used in electronically tuned circuits (VCOs, AFC)

> [INFO] **2H4:** The capacitance of a variable capacitance diode (varicap) is normally
> adjusted by varying the **reverse bias voltage**.

### 2G Self-Check Questions

**Q1.** A transformer has 200 turns on the primary and 50 turns on the secondary.
The primary is fed 240 V AC. What is the secondary voltage?
<details><summary>Answer</summary>

V_sec = V_pri × (N_sec / N_pri) = 240 × (50/200) = 240 × 0.25 = **60 V AC**
</details>

**Q2.** A transistor has a current gain (β) of 150. If the base current is 20 μA,
what is the collector current?
<details><summary>Answer</summary>

IC = β × IB = 150 × 0.000020 = 0.003 A = **3 mA**
</details>

**Q3.** Which class of amplifier biasing is best for a high-power RF transmitter stage?
<details><summary>Answer</summary>

**Class C** — conducts for less than half a cycle, is most efficient. The tuned output
circuit reconstructs the full RF waveform.
</details>

**Q4.** Why is a diode fitted across a relay coil when driven by a transistor?
<details><summary>Answer</summary>

When the relay is switched off, the coil produces a large back-EMF voltage spike.
The diode clamps this spike, protecting the transistor from damage.
</details>

**Q5.** Why is a FET preferred over a bipolar transistor at the input stage of a receiver?
<details><summary>Answer</summary>

A FET has a **lower noise figure** (less internal noise) and a **higher input impedance**
(draws less current from the signal source). Both properties improve receiver sensitivity.
</details>

---

## 2H: Digital Electronics Basics

### 2H Theory — Binary Numbers (2H2)

Digital circuits work with only two states: **1** (high voltage, typically 3.3 V or 5 V)
and **0** (low voltage, 0 V). These are called **binary digits (bits)**.

#### Binary to decimal conversion

Each bit position represents a power of 2:

| Bit position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|-------------|---|---|---|---|---|---|---|---|
| Value | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

**Example:** Binary 1010 1100 = 128 + 0 + 32 + 0 + 8 + 4 + 0 + 0 = **172**

**Example:** How many levels can 4 bits represent?
2⁴ = **16 levels** (0 to 15)

More bits = finer resolution = smoother digitised signals.

> [INFO] **2H2:** With n bits, you can represent 2ⁿ different values. More bits = higher
> resolution in analogue-to-digital conversion.

#### Hexadecimal (hex)

Hex uses base 16: 0–9 then A (10), B (11), C (12), D (13), E (14), F (15).
4 bits = 1 hex digit. This is just a compact way to write binary.

### 2H Theory — Logic Gates (2H1 and 2H2)

Logic gates are the basic building blocks of digital circuits.
Each gate performs a simple Boolean operation on one or more inputs.

| Gate | Symbol | Operation | Truth: 1 out when... |
|------|--------|-----------|----------------------|
| AND | · (dot) | A AND B | All inputs are 1 |
| OR | + | A OR B | At least one input is 1 |
| NOT | ' or ¬ | NOT A (inverter) | Input is 0 |
| NAND | AND + NOT | NOT(A AND B) | Any input is 0 |
| NOR | OR + NOT | NOT(A OR B) | All inputs are 0 |
| XOR | ⊕ | Exclusive OR | Exactly one input is 1 |

**AND gate truth table (2 inputs):**

| A | B | Output |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | 0 |
| 1 | 0 | 0 |
| 1 | 1 | **1** |

**OR gate truth table:**

| A | B | Output |
|---|---|--------|
| 0 | 0 | 0 |
| 0 | 1 | **1** |
| 1 | 0 | **1** |
| 1 | 1 | **1** |

**NOT gate:**

| A | Output |
|---|--------|
| 0 | 1 |
| 1 | 0 |

> [INFO] **2H1 / 2H2:** Know the output of AND, OR, and NOT gates for any combination of
> inputs. NAND and NOR are the same but with the output inverted.

#### Logic families

- **CMOS:** very low power, sensitive to static, used in most modern digital ICs
- **TTL:** older standard, 5 V logic, more current-hungry than CMOS

### 2H Theory — Digital Signal Processing and ADC (2H5)

Modern radio equipment converts analogue signals to digital early in the receive chain,
then uses **digital signal processing (DSP)** for filtering, demodulation, and decoding.

**Software Defined Radio (SDR):** The radio functions are implemented in software rather
than dedicated hardware. A wideband ADC digitises a chunk of spectrum, and software selects
the desired signal and mode.

**Advantages of DSP:**
- Filters and demodulators can be changed by software update
- Multiple signals can be processed simultaneously
- Precise, repeatable performance
- No drift due to component ageing or temperature

### 2H Self-Check Questions

**Q1.** What is the decimal value of binary 0001 1010?
<details><summary>Answer</summary>

0 + 0 + 0 + 16 + 8 + 0 + 2 + 0 = **26**
</details>

**Q2.** A 3-input AND gate has inputs A=1, B=1, C=0. What is the output?
<details><summary>Answer</summary>

AND: output is 1 only when ALL inputs are 1. C=0, so output = **0**.
</details>

**Q3.** How many distinct values can an 8-bit ADC represent?
<details><summary>Answer</summary>

2⁸ = **256** values (0 to 255)
</details>

**Q4.** What logic gate produces an output of 1 only when its inputs are different?
<details><summary>Answer</summary>

**XOR (Exclusive OR)** gate.
</details>

**Q5.** What is the main advantage of an SDR receiver compared to a traditional hardware
receiver?
<details><summary>Answer</summary>

The SDR's processing (filtering, demodulation) is done in software, so it can be changed
or updated. A hardware receiver requires physical component changes for each modification.
</details>

---

## 2I: Power Supplies

### 2I Theory — Rectification (2I1)

**Rectification** converts alternating current (AC) to direct current (DC).
A **diode** is the component used — it only conducts in one direction.

#### Half-wave rectifier

A single diode only passes the positive half-cycles.
- Output is a series of positive pulses with gaps
- Simple but wasteful (half the AC cycle is unused)

#### Full-wave bridge rectifier

Four diodes arranged in a bridge pass both half-cycles.
- Both positive and negative half-cycles are converted to positive pulses
- Output has twice the ripple frequency of half-wave
- More efficient

<img src="/assets/images/study/section-2/fig-2-2-bridge-rectifier.gif" alt="Animated bridge rectifier: four diodes in a diamond arrangement; green diodes are non-conducting, red shows current flow — direction reverses each half-cycle but DC output polarity stays constant." width="600" height="420" loading="lazy">

<p style="font-size:0.75em; color:#64748b; margin-top:0.25em;">Fig 2-2 — Bridge rectifier: green diodes are non-conducting; red shows current flow on each half-cycle. Animation by Zureks, CC BY-SA 3.0, via Wikimedia Commons.</p>

> [INFO] **2I1:** A diode changes AC to DC. A full-wave bridge uses four diodes and is
> more efficient than a half-wave rectifier.

### 2I Theory — Smoothing (2I2 / 2J3)

After rectification, the output is pulsating DC — it rises and falls at the mains frequency
(or double it for full-wave). A **smoothing capacitor** reduces this ripple.

**How it works:**
- The capacitor charges to the peak voltage on each cycle
- Between peaks, it discharges slowly through the load
- Larger capacitor = less ripple = smoother DC

> [INFO] **2J3:** The component that provides smoothing in a mains power supply is a
> **capacitor**. It stores charge between peaks to maintain the DC output level.

The residual variation is called **ripple voltage.** A large electrolytic capacitor (1 000 μF
or more) is typically used for smoothing in mains PSUs.

### 2I Theory — Voltage Regulation (2I5)

Even with smoothing, the output voltage varies with load current. A **voltage regulator**
keeps the output at a fixed voltage regardless of load.

#### Zener diode regulator

A **zener diode** is designed to break down at a specific reverse voltage (the zener voltage).
It maintains a constant voltage across itself as long as some minimum current flows.

<img src="/assets/images/study/section-2/fig-2-3-zener-regulator.svg" alt="Zener voltage regulator: +Vin feeds through R_series resistor to the output junction. A Zener diode from junction to GND clamps Vout to the Zener voltage V_z. R_series drops any excess input voltage." width="600" height="280" loading="lazy">

**How it works:** excess input voltage is dropped across R_series. The zener clamps Vout.

#### IC voltage regulators

Integrated circuit regulators (e.g. 7805 for +5 V, 7812 for +12 V) contain a complete
regulation circuit in a single package. More precise and efficient than a simple zener.

> [INFO] **2I5:** IC voltage regulators (integrated circuits) perform most regulation
> functions and are common in commercial power supplies.

#### Linear vs switched-mode power supplies

**Linear PSU:**
- Uses a transformer to step down voltage, then rectifies and regulates
- Simple, low noise
- Regulator device dissipates excess power as heat — less efficient
- Heavy due to mains-frequency transformer

**Switched-mode power supply (SMPS):**
- Converts mains AC to DC, then switches it at a high frequency (tens to hundreds of kHz)
- Uses a much smaller, lighter transformer (transformer size reduces at higher frequency)
- Very efficient (typically 80–90%)
- Can produce some RF interference if poorly filtered

> [INFO] **2J4:** An SMPS operates internally at a frequency well above 50 Hz. This allows
> a **much smaller and lighter transformer** to be used compared to a linear supply.

### 2I Theory — Battery Chemistry Types (2I4)

Different battery chemistries have different voltage, capacity, and handling requirements. Three types appear in the RSGB Intermediate syllabus:

| Chemistry | Nominal cell voltage | Energy density | Key characteristics |
|---|---|---|---|
| **Lead-acid** | 2.0 V/cell | ~30–50 Wh/kg | Robust, high surge current, heavy, requires ventilation (H₂ gas when charging), must not be left discharged |
| **NiMH** (Nickel Metal Hydride) | 1.2 V/cell | ~60–120 Wh/kg | Rechargeable AA/AAA replacement, no memory effect, lower self-discharge than older NiCd |
| **Li-ion / LiPo** (Lithium) | 3.6–3.7 V/cell | ~150–250 Wh/kg | Very high energy density, lightweight, requires dedicated charging circuit, overcharge or deep discharge can cause thermal runaway (fire/explosion risk) |

**Practical points:**
- A 12 V lead-acid battery has **6 cells** in series (6 × 2 V = 12 V); fully charged it reads ~12.7 V, exhausted ~11.5 V
- A single Li-ion cell at 3.7 V nominal; never charge above ~4.2 V or discharge below ~3.0 V
- NiMH cells can replace NiCd in most applications without modification; the 1.2 V/cell nominal is lower than a primary (non-rechargeable) alkaline at 1.5 V — this can cause problems in equipment designed only for alkaline batteries

> [INFO] **2I4:** Three battery types at Intermediate level: **Lead-acid** (2 V/cell, heavy, high current, ventilate when charging), **NiMH** (1.2 V/cell, rechargeable replacement for alkaline), and **Li-ion** (3.7 V/cell, high energy density, requires dedicated charger, fire risk if mishandled). See §8E for lithium battery safety.

### 2I Theory — Batteries and Capacity (2J1 and 2J2)

Battery capacity is measured in **ampere-hours (Ah)** or **milliampere-hours (mAh)**.

**Meaning:** A 10 Ah battery can supply 10 A for 1 hour, or 1 A for 10 hours, or 0.5 A
for 20 hours — approximately.

> [INFO] **2J1:** The Ah rating is an indication of the stored energy when fully charged.
> It tells you how long the battery will power a given load.

**Calculating required battery capacity:**

```
Capacity (Ah) = Current (A) × Time (hours)
```

**Example:** An SDR receiver needs 6 V at 350 mA for 25 hours.
```
Capacity = 0.35 A × 25 h = 8.75 Ah
```
Choose the next available size up: **10 Ah** (6 V 10 Ah battery).

### 2I Theory — Transistors and Amplifiers (further detail)

#### Integrated circuits (ICs) (2I6)

An **integrated circuit** contains many transistors, resistors, and sometimes capacitors
all built into a single silicon chip. The chip is encapsulated in a plastic or ceramic
package with metal leads.

ICs allow complex circuits (amplifiers, regulators, processors) to be implemented in a
tiny, reliable, inexpensive package.

Common IC packages: DIP (dual in-line package), TO-92, SOT-23 (surface mount).

> [INFO] **2I6:** An integrated circuit (IC) contains an entire circuit — transistors,
> resistors, etc. — on a single chip of silicon.

### 2I Self-Check Questions

**Q1.** How many diodes does a full-wave bridge rectifier use?
<details><summary>Answer</summary>

**Four** diodes.
</details>

**Q2.** An LED driver circuit requires 12 V at 500 mA for 8 hours from a battery.
What is the minimum battery capacity needed?
<details><summary>Answer</summary>

Capacity = 0.5 A × 8 h = **4 Ah** minimum. Choose a 4 Ah or larger battery.
</details>

**Q3.** What is the role of the large capacitor after the bridge rectifier in a mains PSU?
<details><summary>Answer</summary>

**Smoothing** — it charges to the peak voltage and discharges slowly between peaks,
reducing the ripple in the DC output.
</details>

**Q4.** Why does a switched-mode power supply (SMPS) use a smaller transformer than
a linear supply with the same output power?
<details><summary>Answer</summary>

The SMPS operates at a high internal switching frequency (many kHz). Transformer size is
inversely related to frequency — the higher the frequency, the smaller the core needed
for the same power. A 50 Hz linear supply needs a large, heavy transformer.
</details>

**Q5.** A 7812 voltage regulator IC is used in a power supply. What output voltage
would you expect?
<details><summary>Answer</summary>

The 78xx series IC regulators output a voltage equal to the 'xx' number.
**7812 → +12 V** regulated output.
</details>

---

## 2J: Decibels and Signal Levels

### 2J Theory — What is a Decibel? (2J2)

The **decibel (dB)** is a logarithmic unit for expressing a ratio of two power levels,
or two voltage/current levels.

**Why logarithmic?**
- Signal levels in radio systems span an enormous range (from picowatts to kilowatts)
- Logarithms turn multiplication into addition — cascade gains and losses by adding dB values

#### Power ratio in dB

```
dB = 10 × log₁₀ (P_out / P_in)
```

**Common power ratios to memorise:**

| dB | Power ratio |
|----|------------|
| 0 dB | 1 (no change) |
| +3 dB | ×2 (double power) |
| −3 dB | ×0.5 (half power) |
| +10 dB | ×10 |
| −10 dB | ×0.1 (one tenth) |
| +20 dB | ×100 |
| −20 dB | ×0.01 (one hundredth) |
| +30 dB | ×1 000 |

> [INFO] **2J2:** +3 dB = double power, −3 dB = half power. +10 dB = 10× power.
> These are the values you must know without calculation.

**Example:** An amplifier has a power gain of 100. What is this in dB?
```
dB = 10 × log₁₀ (100) = 10 × 2 = 20 dB
```

**Example:** A filter has 30 dB of attenuation. By what factor is the power reduced?
```
30 dB = 10 + 10 + 10 → power ratios: 10 × 10 × 10 = 1 000
Power is reduced by a factor of 1 000 (to 1/1000 of input)
```

#### Voltage ratio in dB

```
dB = 20 × log₁₀ (V_out / V_in)
```

Note the factor of 20 (not 10) for voltage ratios.

**Common voltage ratios:**

| dB | Voltage ratio |
|----|--------------|
| +6 dB | ×2 (double voltage) |
| −6 dB | ×0.5 (half voltage) |
| +20 dB | ×10 |
| −20 dB | ×0.1 |

> [WARNING] **Common mistake:** Use 10×log for power, 20×log for voltage. If you mix
> these up, your answer will be 3 dB off.

### 2J Theory — dBm and Absolute Signal Levels

**dBm** is decibels relative to **1 milliwatt.** It is an absolute power level, not a ratio.

```
dBm = 10 × log₁₀ (Power in mW / 1 mW)
```

| Power | dBm |
|-------|-----|
| 1 mW | 0 dBm |
| 2 mW | +3 dBm |
| 10 mW | +10 dBm |
| 100 mW | +20 dBm |
| 1 W | +30 dBm |
| 10 W | +40 dBm |
| 100 W | +50 dBm |

> [INFO] **2J3:** dBm is an absolute power level referenced to 1 mW. A signal of +30 dBm
> is 1 W. A signal of 0 dBm is 1 mW.

### 2J Theory — Cascaded Gains and Losses (2J3)

When signals pass through multiple stages (amplifiers, cables, filters), gains and losses
in dB are **added together.**

**Example:** An antenna receives a signal. The path to the receiver is:
- 3 dB cable loss
- 20 dB amplifier gain
- 3 dB splitter loss

Total: −3 + 20 − 3 = **+14 dB net gain**

This is the great advantage of decibels — cascaded gains/losses reduce to simple addition.

> [INFO] **2J3:** Add dB values for cascaded stages. A gain of +20 dB followed by −3 dB
> gives a net gain of +17 dB.

### 2J Theory — Signal-to-Noise Ratio (2J4)

**Signal-to-noise ratio (SNR)** describes how much stronger the signal is compared to
the background noise. Measured in dB.

```
SNR (dB) = 10 × log₁₀ (Signal power / Noise power)
```

Higher SNR = better quality signal.

A receiver with a low **noise figure (NF)** adds less noise to the signal, giving a higher
output SNR. This is why low-noise amplifiers (LNAs) are used as the first stage in receivers.

> [INFO] **2J4:** Noise figure describes how much noise a receiver adds to the signal.
> A lower noise figure means better receiver performance.

### 2J Self-Check Questions

**Q1.** An amplifier has a power gain of 1 000. Express this in dB.
<details><summary>Answer</summary>

dB = 10 × log₁₀ (1 000) = 10 × 3 = **30 dB**
</details>

**Q2.** A 100 W transmitter output is reduced by 3 dB by a cable loss. What power
reaches the antenna?
<details><summary>Answer</summary>

−3 dB = half power. 100 / 2 = **50 W**
</details>

**Q3.** A receive chain has the following stages:
- LNA: +20 dB gain
- Filter: −2 dB loss
- Coax cable: −5 dB loss

What is the total gain through the chain?
<details><summary>Answer</summary>

+20 − 2 − 5 = **+13 dB net gain**
</details>

**Q4.** A signal of +40 dBm passes through a 20 dB attenuator. What is the output
signal level?
<details><summary>Answer</summary>

+40 − 20 = **+20 dBm** (which is 100 mW)
</details>

**Q5.** Two receivers: one has a noise figure of 3 dB, the other 8 dB.
Which is the better receiver for weak signals?
<details><summary>Answer</summary>

The receiver with the **3 dB noise figure** — it adds less noise, giving a better
signal-to-noise ratio for weak signals.
</details>

---

## Section 2 — Formula Reference

| Formula | Use |
|---------|-----|
| R_total = R1 + R2 + ... | Resistors in series |
| 1/R_t = 1/R1 + 1/R2 | Resistors in parallel |
| R_t = R1×R2/(R1+R2) | Two resistors in parallel |
| V_out = Vs × R2/(R1+R2) | Potential divider |
| V = I × R | Ohm's law |
| P = V × I = I² × R = V²/R | Power |
| V_rms = V_pk / √2 ≈ V_pk × 0.707 | RMS voltage from peak |
| f = 1/T | Frequency from period |
| λ = 300 / f(MHz) | Wavelength in metres |
| Xc = 1/(2πfC) | Capacitive reactance |
| XL = 2πfL | Inductive reactance |
| f₀ = 1/(2π√LC) | Resonant frequency |
| β = IC / IB | Transistor current gain |
| V1/V2 = N1/N2 | Transformer voltage ratio |
| dB = 10 × log(P_out/P_in) | Power in decibels |
| dB = 20 × log(V_out/V_in) | Voltage in decibels |
| f_sample ≥ 2 × f_max | Nyquist sampling theorem |
| Capacity (Ah) = I(A) × t(h) | Battery capacity |

---

## Section 2 — Key Facts Summary

- **Resistors in parallel:** result is always LESS than the smallest
- **Capacitors in parallel:** capacitances ADD (like resistors in series)
- **Polarised capacitors:** must fit correct way round (electrolytic)
- **Inductance increases:** more turns, closer turns, ferrite core
- **Capacitor:** blocks DC, passes AC
- **Transformer:** AC only; turns ratio = voltage ratio
- **Resonance:** series circuit = minimum impedance; parallel = maximum
- **RMS:** the DC equivalent heating value; V_rms = 0.707 × V_peak
- **Decibels:** +3 dB doubles power; +10 dB multiplies by 10
- **Nyquist:** sample rate ≥ twice the highest signal frequency
- **FET advantages at RX input:** lower noise, higher input impedance
- **Varicap:** capacitance controlled by reverse bias voltage
- **Class C:** most efficient RF amplifier class; uses tuned output
- **SMPS:** high internal frequency → smaller, lighter transformer
- **Battery Ah:** current × time; choose size above calculated need

---

*Section 2 covers ~30% of the Intermediate exam. Prioritise the calculation topics:
Ohm's law, power, parallel resistance, dB, and the Nyquist theorem.*
