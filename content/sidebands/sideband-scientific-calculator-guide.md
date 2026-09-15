# Sideband: Scientific Calculator Guide — Every RSGB Syllabus Formula, Step by Step

**Tags:** `[F]` `[I]` `[FL]`
**RSGB Refs:** 2A1, 2C1, 2C2, 2D1, 2E3, 2E5, 4B1, 4D1, 5D1, 9A1, 10D1, 11E1, 11G1, 11O1, 12D1, 14A1
**Cross-refs:** <a href="../study/intermediate/section-2-electronics.html" target="_blank">Intermediate §2 Electronics</a> · <a href="../study/full/section-4-basic-circuits.html" target="_blank">Full §4 Basic Circuits</a> · <a href="../study/full/section-9-measurements.html" target="_blank">Full §9 Measurements</a> · <a href="../study/full/section-10-sdr.html" target="_blank">Full §10 SDR</a> · <a href="../study/full/section-11-feeders-antennas.html" target="_blank">Full §11 Feeders &amp; Antennas</a> · <a href="../study/full/section-12-propagation.html" target="_blank">Full §12 Propagation</a> · <a href="resistance-reactance-impedance.html" target="_blank">Resistance, Reactance &amp; Impedance</a>
**Series:** Sideband — Topic Snippets for RF-Hub

---

Every RSGB exam formula boils down to a short sequence of button-presses on a scientific calculator. This guide covers every syllabus formula — grouped by topic — with exact Windows Calculator key sequences using the real button labels, multiple worked examples drawn from the study curriculum, and the gotchas that cost people marks.

No new maths. Just the buttons, in order.

---

## Setting Up Windows Calculator — Scientific Mode

1. Press `Win` — type **Calculator** — press `Enter`
2. Click the **≡ menu** (three horizontal lines, top-left)
3. Select **Scientific**

The display now shows **DEG** and **F-E** indicators, and the button grid expands to include the keys described below.

### Button Reference — What Each Key Does

| Button | Label on calculator | What it does |
|--------|---------------------|--------------|
| `log` | log | log base 10 — use for **all dB formulas** |
| `ln` | ln | natural log (base *e*) — use for time-constant decay |
| `10ˣ` | 10ˣ | 10 raised to the displayed power — undoes `log` |
| `2ⁿᵈ` then `ln` | 2ⁿᵈ → ln | *e* raised to the displayed power — undoes `ln` |
| `e` | e | inserts Euler's number ≈ 2.71828 as a value |
| `xʸ` | xʸ | raises displayed number to a power you then type |
| `x²` | x² | squares the displayed number immediately |
| `²√x` | ²√x | square root of the displayed number immediately |
| `¹⁄ₓ` | ¹⁄ₓ | reciprocal (1 divided by the displayed number) |
| `exp` | exp | enter scientific notation: `2` `exp` `6` = 2,000,000 |
| `π` | π | inserts π ≈ 3.14159 as a value |
| `+/−` | +/− | negates the displayed number (changes sign) |
| `( )` | ( and ) | group parts of a calculation |
| `DEG` | DEG (display) | mode indicator — must be set to DEG for trig functions |
| **Trigonometry ▾** | dropdown | access sin, cos, tan, sec and their inverses |

> **Three things to check before any calculation:**
> - **`log` ≠ `ln`** — `log` is base-10 (dB calculations). `ln` is the natural log (time-constant decay). Wrong key = wrong answer with no error message.
> - **`exp` ≠ `xʸ`** — `exp` is for entering scientific notation (2 `exp` 6 = 2,000,000). `xʸ` raises a number to a power (2 `xʸ` 6 = 64). These are completely different.
> - **DEG mode** — if you ever open the **Trigonometry ▾** dropdown, confirm **DEG** is showing at the top of the display. In RAD mode, sin(30) gives −0.988 instead of 0.5.

### Unit Conversions — Do These Before Typing

Many formulas require SI base units. Convert before you enter any value:

| Unit you have | SI base unit | Conversion |
|---------------|-------------|------------|
| MHz | Hz | × 1,000,000 |
| kHz | Hz | × 1,000 |
| μH | H | ÷ 1,000,000 (= × 0.000001) |
| mH | H | ÷ 1,000 (= × 0.001) |
| pF | F | ÷ 10¹² (= × 0.000000000001) |
| nF | F | ÷ 10⁹ (= × 0.000000001) |
| μF | F | ÷ 10⁶ (= × 0.000001) |
| kΩ | Ω | × 1,000 |

**Shortcut:** kΩ × μF = seconds directly (the 10³ and 10⁻⁶ cancel). Similarly, MHz × μH = Ω-ish (useful mental check for reactance values).

---

## Other Calculators — Brief Notes

| Calculator | What to know |
|------------|-------------|
| **iOS Calculator** | Rotate to landscape for scientific mode. Button labels are identical. `EE` key = Windows `exp`. `2nd` key shifts functions. |
| **Google Calculator** | Type the formula as text: `10 * log(80/5)`, `1/(2*pi*7.1e6*220e-12)`, `sqrt(16900)`. Accepts `log()`, `ln()`, `sqrt()`, `^`, `e^`. Fastest for one-off checks. |
| **Casio fx-83 / fx-85 / fx-991** | `SHIFT` `log` = 10ˣ. `SHIFT` `ln` = eˣ. `ENG` key cycles ×10³ prefixes. Sequences mirror Windows Calculator. |
| **Any scientific calculator** | Use `log` for base-10, `ln` for natural. Look for `√`, `x²`, `INV`/`2nd` for inverse functions. Principles are identical. |

---

## Group 1: Ohm's Law and DC Power

These formulas apply at Foundation level and underpin everything else.

### 1.1 — Ohm's Law

> **V = I × R**    (and rearrangements: I = V/R, R = V/I)

**Key sequences:**

To find V: `I` `×` `R` `=`

To find I: `V` `÷` `R` `=`

To find R: `V` `÷` `I` `=`

**Worked examples:**

- 2 A through 47 Ω: `2` `×` `47` `=` → **94 V**
- Voltage 13.8 V, resistance 4.6 Ω: `13.8` `÷` `4.6` `=` → **3 A**
- 12 V supply, 0.5 A load: `12` `÷` `0.5` `=` → **24 Ω**

> **Gotcha:** Units must be consistent — volts, amps, ohms. Mixing mA and A gives a 1000× error. If you have 50 mA, enter 0.05 (amps).

---

### 1.2 — DC Power

> **P = V × I = I² × R = V² / R**

Three equivalent forms — use whichever two quantities you know.

**Key sequences:**

- Know V and I: `V` `×` `I` `=`
- Know I and R: `I` `x²` `×` `R` `=`
- Know V and R: `V` `x²` `÷` `R` `=`

**Worked examples:**

- PA stage: V = 13.8 V, I = 5 A → `13.8` `×` `5` `=` → **69 W**
- Dummy load: I = 2 A, R = 50 Ω → `2` `x²` → 4 → `×` `50` `=` → **200 W**
- 5 W into 50 Ω: `5` `×` `50` `=` → 250 → `²√x` → **15.8 V** (rearrangement: V = √(P × R))
- 100 W into 75 Ω feeder: `100` `×` `75` `=` → 7500 → `²√x` → **86.6 V** RMS across the feeder

> **Gotcha:** These are DC or RMS power formulas. Peak voltage is V_RMS × √2. For an RF carrier at 100 W into 50 Ω: V_RMS = √(100×50) = 70.7 V RMS; V_peak = 70.7 × 1.414 = 100 V peak.

---

### 1.3 — Resistors in Parallel

> **R_total = (R₁ × R₂) / (R₁ + R₂)**    (two resistors)

For three or more: **1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...**

**Key sequence (two resistors):**

1. `(` type `R₁` `×` type `R₂` `)` `÷` `(` type `R₁` `+` type `R₂` `)` `=`

Or use the reciprocal method (works for any number):

1. Type `R₁` → `¹⁄ₓ` → `M+` (store 1/R₁)
2. Type `R₂` → `¹⁄ₓ` → `M+` (add 1/R₂ to memory)
3. `MR` → `¹⁄ₓ` → result is R_total

**Worked examples:**

- 100 Ω and 100 Ω in parallel: `(` `100` `×` `100` `)` `÷` `(` `100` `+` `100` `)` `=` → **50 Ω** (always half of equal resistors)
- 50 Ω and 75 Ω in parallel: `(` `50` `×` `75` `)` `÷` `(` `50` `+` `75` `)` `=` → 3750/125 → **30 Ω**
- Three equal 150 Ω resistors: `150` `¹⁄ₓ` → 0.006667 `M+`; `150` `¹⁄ₓ` `M+`; `150` `¹⁄ₓ` `M+`; `MR` `¹⁄ₓ` → **50 Ω**

> **Gotcha:** Parallel resistance is always smaller than the smallest individual resistor. If your answer is bigger than any of the inputs, you've calculated series instead of parallel.

---

## Group 2: Decibels

### 2.1 — Power Ratio to dB

> **dB = 10 × log(P_out / P_in)**

**Windows Calculator key sequence:**

1. Type `P_out`
2. `÷`
3. Type `P_in`
4. `=`   → ratio on screen
5. `log` → log₁₀ of ratio
6. `×` `10` `=` → **result in dB**

**Worked examples:**

- 5 W in, 80 W out: `80` `÷` `5` `=` → 16 → `log` → 1.204 → `×` `10` `=` → **12.04 dB**
- 400 W in, 100 W out (loss): `100` `÷` `400` `=` → 0.25 → `log` → −0.602 → `×` `10` `=` → **−6.02 dB** (a 6 dB loss, as expected for ÷ 4 power)
- 2 W in, 100 W out: `100` `÷` `2` `=` → 50 → `log` → 1.699 → `×` `10` `=` → **16.99 dB**
- Feeder loss: 50 W transmitter, 32 W at antenna: `32` `÷` `50` `=` → 0.64 → `log` → −0.194 → `×` `10` `=` → **−1.94 dB** loss

Key reference values to memorise:

| dB | Power ratio | Interpretation |
|----|-------------|----------------|
| +3 | × 2 | double power |
| −3 | ÷ 2 | half power |
| +6 | × 4 | four times power |
| +10 | × 10 | ten times power |
| −10 | ÷ 10 | one-tenth power |
| +13 | × 20 | 10 + 3 = ×10 × ×2 |
| +20 | × 100 | one hundred times power |

> **Gotcha:** Use `log` (base 10), not `ln`. Using `ln` gives an answer about 2.3× larger with no warning. For power, always ×10 at the end; for voltage, ×20 (see 2.3).

---

### 2.2 — dB Back to Power

> **P_out = P_in × 10^(dB / 10)**

**Windows Calculator key sequence:**

1. Type the dB value (negative for loss)
2. `÷` `10` `=` → dB/10
3. `10ˣ`         → power ratio
4. `×` type `P_in` `=` → **output power in watts**

**Worked examples:**

- 13 dB gain, 2 W in: `13` `÷` `10` `=` → 1.3 → `10ˣ` → 19.95 → `×` `2` `=` → **39.9 W ≈ 40 W**
- −3 dB loss, 100 W in: `3` `+/−` `÷` `10` `=` → −0.3 → `10ˣ` → 0.5 → `×` `100` `=` → **50 W** (confirms −3 dB = half power)
- Amp claims +17 dB, input 0.5 W: `17` `÷` `10` `=` → 1.7 → `10ˣ` → 50.12 → `×` `0.5` `=` → **25.06 W**
- 3 dB coax loss each way, 25 W output: path loss = 6 dB total → `6` `+/−` `÷` `10` `=` → −0.6 → `10ˣ` → 0.25 → `×` `25` `=` → **6.25 W** reaching the antenna

> **Gotcha:** Use `10ˣ` here, not `eˣ` (`2ⁿᵈ` `ln`). The `10ˣ` button is the inverse of `log` (base 10). Using `eˣ` is the inverse of `ln` and gives a completely different result.

---

### 2.3 — Voltage Gain in dB

> **dB = 20 × log(V_out / V_in)**

**Windows Calculator key sequence:**

1. Type `V_out`
2. `÷` type `V_in` `=`
3. `log`
4. `×` `20` `=` → **result in dB**

**Worked examples:**

- 10 mV in, 500 mV out: `500` `÷` `10` `=` → 50 → `log` → 1.699 → `×` `20` `=` → **33.98 dB**
- 1 V in, 1 V out (unity gain): `1` `÷` `1` `=` → 1 → `log` → 0 → `×` `20` `=` → **0 dB** ✓
- Attenuator: 2 V in, 0.5 V out: `0.5` `÷` `2` `=` → 0.25 → `log` → −0.602 → `×` `20` `=` → **−12.04 dB**

> **Gotcha:** Voltage uses ×20; power uses ×10. Mixing them gives an answer exactly 2× wrong in dB. Rule: 6 dB = ×2 in voltage, but 6 dB = ×4 in power (because P ∝ V², so doubling V quadruples P).

---

## Group 3: Reactance and Impedance

> **Unit reminder before every calculation:** f in **Hz** (not MHz), C in **farads** (not pF), L in **henries** (not μH).

### 3.1 — Capacitive Reactance

> **X_C = 1 / (2π × f × C)**

Higher frequency or larger capacitance → lower X_C → capacitor passes signal more easily.

**Windows Calculator key sequence:**

1. `2` `×` `π` `×` type `f` (Hz) `×` type `C` (farads) `=` → denominator
2. `¹⁄ₓ` → **X_C in ohms**

**Worked examples:**

- f = 7.1 MHz (7,100,000 Hz), C = 220 pF (0.00000000022 F):  
  `2` `×` `π` `×` `7100000` `×` `0.00000000022` `=` → 0.009815 → `¹⁄ₓ` → **101.9 Ω**

- f = 3.5 MHz, C = 100 pF (0.0000000001 F):  
  `2` `×` `π` `×` `3500000` `×` `0.0000000001` `=` → 0.002199 → `¹⁄ₓ` → **454.7 Ω**

- f = 144 MHz, C = 10 pF (0.00000000001 F):  
  `2` `×` `π` `×` `144000000` `×` `0.00000000001` `=` → 0.009047 → `¹⁄ₓ` → **110.5 Ω**

- Bypass capacitor: X_C should be < 1/10 of circuit impedance. At 14 MHz, need X_C < 5 Ω (circuit 50 Ω). What C?  
  C = 1/(2π × 14,000,000 × 5) → denominator: `2` `×` `π` `×` `14000000` `×` `5` `=` → 439,822,971 → `¹⁄ₓ` → **2.27 nF minimum**

> **Gotcha:** 220 pF = 220 × 10⁻¹² = 0.00000000022 F. Forgetting the conversion produces a reactance 10¹² times wrong. Always write out the decimal first: count the zeros for picofarads (12 decimal places).

---

### 3.2 — Inductive Reactance

> **X_L = 2π × f × L**

Higher frequency or larger inductance → higher X_L → inductor opposes signal more strongly.

**Windows Calculator key sequence:**

1. `2` `×` `π` `×` type `f` (Hz) `×` type `L` (henries) `=` → **X_L in ohms**

**Worked examples:**

- f = 14.2 MHz (14,200,000 Hz), L = 2.5 μH (0.0000025 H):  
  `2` `×` `π` `×` `14200000` `×` `0.0000025` `=` → **223.1 Ω**

- RFC (RF choke): L = 100 μH (0.0001 H), f = 7.1 MHz:  
  `2` `×` `π` `×` `7100000` `×` `0.0001` `=` → **4461 Ω** (very high — good choke behaviour)

- f = 144 MHz, L = 10 nH (0.00000001 H):  
  `2` `×` `π` `×` `144000000` `×` `0.00000001` `=` → **9.047 Ω**

- At resonance in a tank circuit, X_L must equal X_C. Verify: L = 1 μH, C = 100 pF, claimed f₀ = 15.92 MHz.  
  X_L: `2` `×` `π` `×` `15920000` `×` `0.000001` `=` → **100.0 Ω**  
  X_C: `2` `×` `π` `×` `15920000` `×` `0.0000000001` `=` → 0.01 → `¹⁄ₓ` → **100.0 Ω** ✓ They match.

> **Gotcha:** X_L and X_C both change with frequency, but in opposite directions. At resonance they are equal and opposite — they cancel, leaving only R in the circuit. If X_L = X_C, you're at f₀.

---

### 3.3 — Series Impedance Magnitude

> **Z = √(R² + X²)**

X is the net reactance: if capacitive and inductive reactances are both present, use X = |X_L − X_C|.

**Windows Calculator key sequence:**

1. Type `R` → `x²` → `+`
2. Type `X` (net reactance) → `x²` → `=`
3. `²√x` → **Z in ohms**

**Worked examples:**

- R = 50 Ω, X_L = 120 Ω: `50` `x²` → 2500 → `+` → `120` `x²` → 1600 → `=` → 16900 → `²√x` → **130 Ω** (exact)
- R = 75 Ω, X_C = 100 Ω: `75` `x²` → 5625 → `+` → `100` `x²` → 10000 → `=` → 15625 → `²√x` → **125 Ω**
- Antenna feedpoint: R_rad = 35 Ω, jX = +25 Ω (inductive component): `35` `x²` → 1225 → `+` → `25` `x²` → 625 → `=` → 1850 → `²√x` → **43.0 Ω**
- Verify 50 Ω match: R = 48 Ω, X = 14 Ω: `48` `x²` → 2304 → `+` → `14` `x²` → 196 → `=` → 2500 → `²√x` → **50.0 Ω** — a perfect 50 Ω match despite having reactance

> **Gotcha:** This formula gives only the **magnitude** of impedance. Phase angle (how much current leads or lags voltage) requires arctan(X/R) — not examined numerically at RSGB level. Also: always use the **net** reactance (X_L − X_C if both present), not the sum.

---

## Group 4: Resonance

### 4.1 — Resonant Frequency

> **f₀ = 1 / (2π × √(L × C))**

L in henries, C in farads, result in Hz. Divide by 10⁶ to get MHz.

**Windows Calculator key sequence:**

1. Type `L` (H) `×` type `C` (F) `=` → LC (a very small number — displays in scientific notation)
2. `²√x` → √(LC)
3. `×` `2` `×` `π` `=` → 2π√(LC)
4. `¹⁄ₓ` → **f₀ in Hz**
5. `÷` `1000000` `=` → **f₀ in MHz**

**Worked examples:**

- L = 1 μH (0.000001 H), C = 100 pF (0.0000000001 F):  
  `0.000001` `×` `0.0000000001` `=` → 1e-16 → `²√x` → 1e-8 → `×` `2` `×` `π` `=` → 6.283e-8 → `¹⁄ₓ` → 15,915,494 Hz = **15.92 MHz**

- Tank circuit: L = 10 μH (0.00001), C = 68 pF (0.000000000068):  
  `0.00001` `×` `0.000000000068` `=` → 6.8e-16 → `²√x` → 2.608e-8 → `×` `2` `×` `π` `=` → 1.639e-7 → `¹⁄ₓ` → 6,103,000 Hz = **6.1 MHz**

- Crystal filter at 10.7 MHz — what C is needed with L = 1 μH?  
  Rearrange: C = 1/(4π²f²L). f = 10,700,000, L = 0.000001  
  `4` `×` `π` `x²` `×` `10700000` `x²` `×` `0.000001` `=` → 4,523,893,944 → `¹⁄ₓ` → 2.21e-10 F = **221 pF**

> **Gotcha:** The intermediate result (L × C) will display in scientific notation like `1e-16`. This is normal and correct. Continue pressing keys; the final answer resolves to a sensible Hz value. If you see `0` after pressing `²√x`, you may have mis-entered a value.

---

### 4.2 — Q Factor

> **Q = X_L / R**    (at resonance; dimensionless)

Q describes selectivity: high Q = narrow bandwidth. Calculate X_L at f₀ first.

**Windows Calculator key sequence:**

1. Calculate X_L at f₀ (use Formula 3.2)
2. Type X_L → `÷` → type R → `=` → **Q**

**Worked examples:**

- f₀ = 15.92 MHz, L = 1 μH → X_L = 100 Ω (from 3.2 example). R = 2 Ω:  
  `100` `÷` `2` `=` → **Q = 50**

- AM broadcast IF filter at 455 kHz: L = 200 μH (0.0002 H), R = 5.75 Ω:  
  X_L: `2` `×` `π` `×` `455000` `×` `0.0002` `=` → 572.1 Ω → `÷` `5.75` `=` → **Q ≈ 99.5**

- Inductor with high R_loss: L = 10 μH, f = 7 MHz, measured Q = 80. What is R_loss?  
  X_L: `2` `×` `π` `×` `7000000` `×` `0.00001` `=` → 439.8 Ω. R = X_L/Q: `439.8` `÷` `80` `=` → **R_loss = 5.5 Ω**

> **Gotcha:** Q is frequency-dependent because X_L varies with frequency. Always calculate X_L at the resonant frequency f₀, not at some other test frequency. A Q measured at 1 MHz does not apply at 14 MHz.

---

### 4.3 — 3 dB Bandwidth

> **BW = f₀ / Q**

The frequency span between the points where response has fallen 3 dB from the peak.

**Windows Calculator key sequence:**

1. Type `f₀` in Hz `÷` type `Q` `=` → **BW in Hz**
2. `÷` `1000` `=` → **BW in kHz**

**Worked examples:**

- f₀ = 15.92 MHz, Q = 50: `15920000` `÷` `50` `=` → 318,400 Hz = **318.4 kHz**
- AM IF filter: f₀ = 455 kHz, Q = 99.5: `455000` `÷` `99.5` `=` → **4573 Hz ≈ 4.6 kHz** (narrow — good for AM selectivity)
- SSB filter design target: f₀ = 9 MHz, BW = 2.4 kHz → what Q needed?  
  Q = f₀/BW: `9000000` `÷` `2400` `=` → **Q = 3750** (requires crystal or mechanical filter technology)
- 2 m band receiver front end: f₀ = 144 MHz, Q = 20:  
  `144000000` `÷` `20` `=` → 7,200,000 Hz = **7.2 MHz bandwidth** (very broad — expected for an RF front end, not a filter)

> **Gotcha:** The result is in Hz if you enter f₀ in Hz. For MHz input, the result is in MHz. Consistency prevents unit confusion: always enter f₀ in Hz, always get BW in Hz, then convert to kHz by ÷ 1000.

---

## Group 5: SWR and Reflection

### 5.1 — VSWR from Reflection Coefficient

> **VSWR = (1 + |Γ|) / (1 − |Γ|)**

|Γ| (magnitude of reflection coefficient) ranges from 0 (perfect match) to 1 (total reflection).

**Windows Calculator key sequence:**

1. `(` `1` `+` type `|Γ|` `)` `÷` `(` `1` `−` type `|Γ|` `)` `=` → **VSWR**

**Worked examples:**

- |Γ| = 0.333: `(` `1` `+` `0.333` `)` `÷` `(` `1` `−` `0.333` `)` `=` → 1.333/0.667 → **VSWR = 2.0:1**
- |Γ| = 0.5: `(` `1` `+` `0.5` `)` `÷` `(` `1` `−` `0.5` `)` `=` → 1.5/0.5 → **VSWR = 3.0:1**
- |Γ| = 0.1 (well-matched): `(` `1` `+` `0.1` `)` `÷` `(` `1` `−` `0.1` `)` `=` → **VSWR = 1.22:1** (excellent)
- Open circuit (|Γ| = 1): denominator = 0 → **VSWR = ∞** (total reflection — as expected for open feeder end)

> **Gotcha:** |Γ| must be between 0 and 1. Entering |Γ| ≥ 1 gives division by zero or a negative — physically impossible. A perfect match is |Γ| = 0, VSWR = 1.0 (written 1:1).

---

### 5.2 — Reflection Coefficient from VSWR

> **|Γ| = (VSWR − 1) / (VSWR + 1)**

Enter VSWR as a number (type `3` for 3:1 VSWR).

**Windows Calculator key sequence:**

1. `(` type VSWR `−` `1` `)` `÷` `(` type VSWR `+` `1` `)` `=` → **|Γ|**

**Worked examples:**

- VSWR = 2.5:1: `(` `2.5` `−` `1` `)` `÷` `(` `2.5` `+` `1` `)` `=` → 1.5/3.5 → **|Γ| = 0.4286**
- VSWR = 3:1: `(` `3` `−` `1` `)` `÷` `(` `3` `+` `1` `)` `=` → **|Γ| = 0.5**
- VSWR = 1.5:1 (well-tuned antenna): `(` `1.5` `−` `1` `)` `÷` `(` `1.5` `+` `1` `)` `=` → **|Γ| = 0.2**
- VSWR = 10:1 (badly mismatched): `(` `10` `−` `1` `)` `÷` `(` `10` `+` `1` `)` `=` → **|Γ| = 0.818**

> **Gotcha:** Enter VSWR as a plain number. If your meter shows "2.5:1", enter just `2.5`. The ":1" part is implied.

---

### 5.3 — Return Loss

> **RL = −20 × log(|Γ|)**    (result is positive dB — higher is better)

Equivalent form: **RL = 20 × log(1/|Γ|)**

**Windows Calculator key sequence (recommended):**

1. `1` `÷` type `|Γ|` `=`
2. `log`
3. `×` `20` `=` → **return loss in dB (positive)**

**Worked examples:**

- |Γ| = 0.4286 (VSWR 2.5:1): `1` `÷` `0.4286` `=` → 2.333 → `log` → 0.368 → `×` `20` `=` → **7.36 dB**
- |Γ| = 0.333 (VSWR 2:1): `1` `÷` `0.333` `=` → 3.003 → `log` → 0.4775 → `×` `20` `=` → **9.55 dB**
- |Γ| = 0.1 (VSWR 1.22:1): `1` `÷` `0.1` `=` → 10 → `log` → 1 → `×` `20` `=` → **20 dB** (excellent)
- Target for VNA calibration: RL > 30 dB → |Γ| < ? → `30` `÷` `20` `=` → 1.5 → `10ˣ` → 31.62 → `¹⁄ₓ` → **|Γ| < 0.0316**

> **Gotcha:** Return loss must be **positive**. If you get a negative answer, you forgot to use 1/|Γ| (or forgot the negation if using the −20×log form). Return loss > 20 dB is considered a good match; > 30 dB is excellent.

---

### 5.4 — Power Reflected

> **P_reflected = |Γ|² × P_incident**

Converts reflection coefficient to actual power lost to reflections.

**Windows Calculator key sequence:**

1. Type `|Γ|` → `x²` → `×` → type `P_incident` → `=` → **P_reflected in watts**

To find power delivered to load: `P_incident` `−` `P_reflected` `=`

**Worked examples:**

- VSWR 2.5:1 (|Γ| = 0.4286), 100 W out of PA:  
  `0.4286` `x²` → 0.1837 → `×` `100` `=` → **18.37 W reflected**; 100 − 18.37 = **81.63 W to antenna**

- VSWR 3:1 (|Γ| = 0.5), 50 W transmitted:  
  `0.5` `x²` → 0.25 → `×` `50` `=` → **12.5 W reflected** (25% of power)

- VSWR 1.5:1 (|Γ| = 0.2), 100 W:  
  `0.2` `x²` → 0.04 → `×` `100` `=` → **4 W reflected** (only 4%)

> **Gotcha:** Many people overestimate the power loss from modest VSWR. VSWR 2:1 only reflects 11% of power — the feeder heating from mismatch is usually more significant than the power not reaching the antenna. Coax rated for 100 W at a given VSWR may overheat before the antenna gets the power.

---

## Group 6: Propagation and Wavelength

### 6.1 — Free-Space Wavelength

> **λ (m) = 300 / f_MHz**

f in MHz, result in metres. Antenna element lengths derive directly from this.

**Windows Calculator key sequence:**

1. `300` `÷` type `f` (MHz) `=` → **full wavelength (m)**
2. `÷` `2` `=` → half-wavelength
3. `÷` `2` `=` again → quarter-wavelength

**Worked examples:**

- 40 m band, f = 7.1 MHz: `300` `÷` `7.1` `=` → **42.25 m** (full wave); ÷ 2 = 21.1 m (half-wave dipole total); ÷ 2 = 10.6 m per dipole element
- 20 m band, f = 14.225 MHz: `300` `÷` `14.225` `=` → **21.09 m** full wave; half-wave dipole = 10.5 m total
- 2 m band, f = 145 MHz: `300` `÷` `145` `=` → **2.069 m**; quarter-wave vertical = `÷` `4` `=` → 0.517 m = 51.7 cm
- 70 cm band, f = 433 MHz: `300` `÷` `433` `=` → **0.693 m**; half-wave = 34.6 cm; quarter-wave = 17.3 cm

In practice, a half-wave **wire** dipole is cut slightly short (about 5% shorter than λ/2) due to end effects. For a quick field calculation: element length ≈ **143 / f_MHz** metres.

> **Gotcha:** f must be in MHz. If you enter f in Hz, you get wavelength in Mm (megametres), not metres. Quick sanity check: at 7 MHz the answer should be around 43 m, not 43,000 m.

---

### 6.2 — Maximum Usable Frequency (MUF)

> **MUF = f_c × √(1 + (d / 2h)²)**

f_c is the vertical-incidence critical frequency (from ionosonde); d is path distance; h is ionospheric layer height. Keep d and h in the same units.

**Windows Calculator key sequence:**

1. Type `d` → `÷` `2` → `÷` type `h` → `=` → (d/2h)
2. `x²` → (d/2h)²
3. `+` `1` `=` → 1 + (d/2h)²
4. `²√x` → sec(θ), the obliquity factor
5. `×` type `f_c` `=` → **MUF**

OWF (Optimum Working Frequency): `×` `0.85` `=`

**Worked examples:**

- §12 curriculum example: f_c = 9 MHz, d = 2000 km, h = 300 km (F2 layer):  
  `2000` `÷` `2` `÷` `300` `=` → 3.333 → `x²` → 11.11 → `+` `1` `=` → 12.11 → `²√x` → 3.479 → `×` `9` `=` → **31.3 MHz**  
  OWF: `×` `0.85` `=` → **26.6 MHz** (use 28 MHz band if available)

- Trans-Atlantic path: f_c = 8 MHz, d = 5500 km, h = 250 km (F2 night):  
  `5500` `÷` `2` `÷` `250` `=` → 11.0 → `x²` → 121 → `+` `1` `=` → 122 → `²√x` → 11.05 → `×` `8` `=` → **88.4 MHz** (but F2 won't reach this — MUF predicted by ionosonde may differ)

- Quiz example (§12 Q19): f_c = 8 MHz, d = 3000 km, h = 300 km:  
  `3000` `÷` `2` `÷` `300` `=` → 5.0 → `x²` → 25 → `+` `1` `=` → 26 → `²√x` → 5.099 → `×` `8` `=` → **40.8 MHz**

- Verify quiz example (§12 Q25): foF2 = 6 MHz, d = 1800 km, h = 300 km:  
  `1800` `÷` `2` `÷` `300` `=` → 3.0 → `x²` → 9 → `+` `1` `=` → 10 → `²√x` → 3.162 → `×` `6` `=` → **18.97 MHz** (≈ 19 MHz MUF — 18 MHz band is at 95% of MUF: usable but marginal)

> **Gotcha:** d and h must be in identical units. Mixing km and metres produces an answer off by 1000×. Also: this formula uses the geometric sec(θ) form — no DEG/RAD concern since no trig functions are called directly.

---

### 6.3 — Cable Wavelength and Velocity Factor

> **λ_cable = (300 / f_MHz) × VF**

VF (velocity factor) is always < 1. Quarter-wave stub = λ_cable / 4.

**Windows Calculator key sequence:**

1. `300` `÷` type `f` (MHz) `×` type `VF` `=` → **full wavelength in cable (m)**
2. `÷` `4` `=` → **quarter-wave length in cable (m)**
3. `×` `100` `=` → **in centimetres**

**Worked examples:**

- §11 curriculum example: λ/4 matching stub, f = 144 MHz, RG-58 (VF = 0.66):  
  `300` `÷` `144` `×` `0.66` `=` → 1.375 m → `÷` `4` `=` → **0.344 m = 34.4 cm**

- Coax trap at 7 MHz, foam coax (VF = 0.82):  
  `300` `÷` `7` `×` `0.82` `=` → 35.14 m → `÷` `2` `=` → **17.57 m** half-wave trap

- 28 MHz λ/4 stub, air-spaced (VF ≈ 0.95):  
  `300` `÷` `28` `×` `0.95` `=` → 10.18 m → `÷` `4` `=` → **2.54 m**

Common VF values:

| Cable type | VF |
|---|---|
| Open-wire feeder (air-spaced) | ≈ 0.97 |
| Foam-filled coax (e.g. LMR-400) | ≈ 0.85 |
| Foam coax (typical) | ≈ 0.82 |
| RG-58 / RG-213 (solid PE) | ≈ 0.66 |
| Twin-lead 300 Ω | ≈ 0.82 |

> **Gotcha:** VF is always less than 1.0. If your result is longer than the free-space wavelength, you accidentally used VF > 1. Also: VF is a property of the cable's dielectric fill — air-spaced line is closest to free space (VF ≈ 0.97). Solid PE fills slow the wave down to VF ≈ 0.66.

---

## Group 7: Impedance Matching and Transformers

### 7.1 — Quarter-Wave Impedance Transformer

> **Z₀ = √(Z_source × Z_load)**

The characteristic impedance of the λ/4 matching section needed to match two impedances.

**Windows Calculator key sequence:**

1. Type `Z_source` `×` type `Z_load` `=`
2. `²√x` → **Z₀ in ohms**

**Worked examples:**

- §11 curriculum example: match 25 Ω antenna to 50 Ω coax:  
  `25` `×` `50` `=` → 1250 → `²√x` → **35.4 Ω**  
  (Use RG-59 at 75 Ω? No — need 35.4 Ω. In practice use RG-59 with a 2:1 transformer, or parallel two 75 Ω cables for 37.5 Ω.)

- Match 75 Ω to 300 Ω:  
  `75` `×` `300` `=` → 22500 → `²√x` → **150 Ω** matching section required

- Match 50 Ω PA to 50 Ω load (no mismatch): `50` `×` `50` `=` → 2500 → `²√x` → **50 Ω** (λ/4 of the same impedance — confirms Z₀ = Z_source = Z_load at unity VSWR)

> **Gotcha:** The λ/4 transformer only works at one frequency (and its odd harmonics). At other frequencies it does not provide a match. Use Formula 6.3 to calculate the physical λ/4 cable length in your chosen cable type.

---

### 7.2 — Transformer Turns Ratio and Voltage

> **V₁ / V₂ = N₁ / N₂**    (voltages scale as turns ratio)

> **I₁ / I₂ = N₂ / N₁**    (currents scale inversely — more turns = less current)

**Windows Calculator key sequences:**

- Find V₂ (output voltage): `V₁` `×` `N₂` `÷` `N₁` `=`
- Find N₂ needed for a given V₂: `V₂` `×` `N₁` `÷` `V₁` `=` → N₂
- Find step-up or step-down ratio: `V₁` `÷` `V₂` `=` → ratio (N₁:N₂)

**Worked examples:**

- Mains transformer: 240 V primary, N₁ = 480 turns, N₂ = 60 turns:  
  `240` `×` `60` `÷` `480` `=` → **30 V output**

- 13.8 V power supply from 240 V mains: turns ratio = 240/13.8:  
  `240` `÷` `13.8` `=` → **17.4:1 step-down** (N₁/N₂ ≈ 17.4)

- Step-up: 12 V, N₁ = 10, N₂ = 50: `12` `×` `50` `÷` `10` `=` → **60 V**

- Current on secondary: V₁ = 240 V, V₂ = 30 V (8:1 ratio), I₁ = 1 A:  
  I₂ = I₁ × N₁/N₂ = 1 × 8 = **8 A** (transformer conserves power: 240×1 = 30×8 = 240 VA) ✓

> **Gotcha:** Transformers conserve power (V₁ × I₁ ≈ V₂ × I₂ in an ideal transformer). If V steps up, I steps down by the same ratio. A step-up voltage transformer is a step-down current transformer. Efficiency losses mean the actual secondary current is slightly less than ideal.

---

### 7.3 — Impedance Transformation

> **Z₁ / Z₂ = (N₁ / N₂)²**    (impedance transforms as the **square** of the turns ratio)

To find the required turns ratio for a given impedance step:

> **N₁ / N₂ = √(Z₁ / Z₂)**

**Windows Calculator key sequences:**

- Find Z₂ (secondary impedance): type `Z₁` `÷` type ratio² `=` or: `Z₁` `×` `N₂` `x²` `÷` `N₁` `x²` `=`
- Find turns ratio from impedance ratio: type `Z₁` `÷` `Z₂` `=` → `²√x` → **N₁/N₂ turns ratio**

**Worked examples:**

- 4:1 balun: what turns ratio? Impedance ratio = 4:1 → `4` `²√x` → **2:1 turns ratio**
- Match 50 Ω to 200 Ω: `200` `÷` `50` `=` → 4 → `²√x` → **2:1 turns ratio needed**
- §11 quiz example: 4:1 balun on 150 Ω balanced antenna → unbalanced impedance:  
  `150` `÷` `4` `=` → **37.5 Ω** — VSWR against 50 Ω: use 5.1/5.2: (50-37.5)/(50+37.5) = 12.5/87.5 → `¹⁄ₓ` → `×` `12.5` `=` ... or directly: `(` `50` `−` `37.5` `)` `÷` `(` `50` `+` `37.5` `)` `=` → 0.143 → then VSWR: `(` `1` `+` `0.143` `)` `÷` `(` `1` `−` `0.143` `)` `=` → **VSWR = 1.33:1** (acceptable)
- 9:1 unun for EFHW antenna (2450 Ω to 50 Ω): turns ratio: `9` `²√x` → **3:1 turns ratio**

> **Gotcha:** Impedance transforms as the **square** of turns ratio, not linearly. A 2:1 turns ratio gives 4:1 impedance change. A 3:1 turns ratio gives 9:1 impedance change. Getting this wrong is a common exam error.

---

## Group 8: Time Constants and Exponential Decay

### 8.1 — RC Time Constant

> **τ = R × C**

τ in seconds when R in ohms, C in farads.

**Windows Calculator key sequence:**

1. Type `R` (Ω) `×` type `C` (F) `=` → **τ in seconds**

**Worked examples:**

- R = 100 kΩ (100,000 Ω), C = 47 μF (0.000047 F):  
  `100000` `×` `0.000047` `=` → **τ = 4.7 s**  
  Shortcut: `100` `×` `47` `=` → 4700 (the kΩ × μF = ms, then ÷ 1000... wait — kΩ × μF = s actually:  
  100 × 10³ × 47 × 10⁻⁶ = 100 × 47 × 10⁻³ = 4700 × 10⁻³ = 4.7 s ✓ — but just use base units)

- Timing circuit: R = 47 kΩ (47,000 Ω), C = 10 μF (0.00001 F):  
  `47000` `×` `0.00001` `=` → **τ = 0.47 s**

- Fast discharge: R = 10 Ω, C = 1000 μF (0.001 F):  
  `10` `×` `0.001` `=` → **τ = 0.01 s = 10 ms**

- Wanted: τ = 1 s with C = 100 μF (0.0001 F) → what R?  
  R = τ/C: `1` `÷` `0.0001` `=` → **R = 10,000 Ω = 10 kΩ**

> **Gotcha:** C must be in farads. Entering 47 instead of 0.000047 (forgetting the μ) gives τ = 4,700,000 s — over 54 days — rather than 4.7 s.

---

### 8.2 — RL Time Constant

> **τ = L / R**

Note the division — opposite to RC where τ = R × C.

**Windows Calculator key sequence:**

1. Type `L` (H) `÷` type `R` (Ω) `=` → **τ in seconds**

**Worked examples:**

- L = 50 mH (0.05 H), R = 25 Ω: `0.05` `÷` `25` `=` → **τ = 0.002 s = 2 ms**
- Relay coil: L = 100 mH (0.1 H), R = 200 Ω: `0.1` `÷` `200` `=` → **τ = 0.5 ms**
- RF choke: L = 1 mH (0.001 H), R = 0.5 Ω (low-loss): `0.001` `÷` `0.5` `=` → **τ = 0.002 s**

Unit check: H/Ω = (V·s/A)/(V/A) = s ✓

> **Gotcha:** The formula is L/R for inductors, R×C for capacitors. They are opposite — easy to confuse. Memory aid: for an inductor, higher R **drains** stored energy faster (shorter τ); for a capacitor, higher R **slows** the charging path (longer τ). Both make physical sense once you picture the circuit.

---

### 8.3 — Exponential Charge and Discharge

**Discharging:** > **V(t) = V₀ × e^(−t/τ)**

**Charging:** > **V(t) = V_final × (1 − e^(−t/τ))**

t is elapsed time in seconds; t/τ is the number of time constants elapsed.

**Windows Calculator key sequence — discharging:**

The cleanest method: since e^(−n) = 1/e^n, use `e` `xʸ` [n] `=` then `¹⁄ₓ`:

1. Press `e` → inserts ≈ 2.71828
2. Press `xʸ`
3. Type `t/τ` (the positive number of time constants — e.g. `3`)
4. Press `=` → e^(t/τ)
5. Press `¹⁄ₓ` → e^(−t/τ)
6. Press `×` type `V₀` `=` → **voltage remaining**

Alternative (using 2ⁿᵈ shift): press `2ⁿᵈ` then `ln` to get eˣ directly; enter the negative value first using `+/−`.

**Worked examples — discharging:**

- V₀ = 12 V, after 3τ: `e` `xʸ` `3` `=` → 20.086 → `¹⁄ₓ` → 0.04979 → `×` `12` `=` → **0.597 V ≈ 0.6 V**
- 200 V capacitor, after 2τ: `e` `xʸ` `2` `=` → 7.389 → `¹⁄ₓ` → 0.1353 → `×` `200` `=` → **27.07 V remaining**
- How many time constants to reach below 1%? e^(−n) < 0.01 → n > ln(100) → `100` `ln` `=` → **n > 4.605τ** (so 5τ is the standard engineering rule)

**Windows Calculator key sequence — charging:**

1. Press `e` → `xʸ` → type `t/τ` → `=` → e^(t/τ)
2. `¹⁄ₓ` → e^(−t/τ)
3. `+/−` → −e^(−t/τ)
4. `+` `1` `=` → (1 − e^(−t/τ))
5. `×` type `V_final` `=` → **voltage charged to**

**Worked examples — charging:**

- V_final = 12 V, after 2τ: `e` `xʸ` `2` `=` → 7.389 → `¹⁄ₓ` → 0.1353 → `+/−` → −0.1353 → `+` `1` `=` → 0.8647 → `×` `12` `=` → **10.38 V**
- V_final = 100 V, after 1τ: `e` `xʸ` `1` `=` → 2.718 → `¹⁄ₓ` → 0.3679 → `+/−` → `+` `1` `=` → 0.6321 → `×` `100` `=` → **63.21 V** (this is the definition of one time constant)
- Supply 5 V, after 5τ: `e` `xʸ` `5` `=` → 148.41 → `¹⁄ₓ` → 0.00674 → `+/−` → `+` `1` `=` → 0.9933 → `×` `5` `=` → **4.966 V** (99.3% charged — effectively complete)

| Time constants | Fraction remaining (discharge) | % charged |
|:-:|:-:|:-:|
| 1τ | 0.3679 | 63.2% |
| 2τ | 0.1353 | 86.5% |
| 3τ | 0.0498 | 95.0% |
| 4τ | 0.0183 | 98.2% |
| 5τ | 0.0067 | 99.3% |

> **Gotcha:** Use `e` followed by `xʸ` for the exponential (not `10ˣ`). Euler's number e ≈ 2.718, not 10. Using `10ˣ` gives an answer about 2.3× too large after negation — no error message, just a wrong result. Also: `2ⁿᵈ` `ln` accesses eˣ directly — enter the exponent value (possibly negative via `+/−`) before pressing this combination.

---

## Group 9: ADC, SDR, and Digital Signal Processing

These formulas apply at **Full licence** level (RSGB Ch. 10).

### 9.1 — ADC Dynamic Range

> **DR ≈ 6 × n  dB**    (n = bit depth)

More precisely: DR = 6.02n + 1.76 dB, but the RSGB uses the 6n approximation.

**Windows Calculator key sequence:**

1. Type `n` (number of bits) `×` `6` `=` → **approximate dynamic range in dB**

For the precise formula: `n` `×` `6.02` `+` `1.76` `=`

**Worked examples:**

- 8-bit ADC (e.g. RTL-SDR dongle): `8` `×` `6` `=` → **48 dB** dynamic range
- 12-bit ADC: `12` `×` `6` `=` → **72 dB**
- 14-bit ADC (HF SDR receiver): `14` `×` `6` `=` → **84 dB** — can handle signals from 84 dB below to 84 dB above noise floor simultaneously
- 16-bit ADC: `16` `×` `6` `=` → **96 dB**
- How many bits for 100 dB DR? `100` `÷` `6` `=` → 16.67 → **17 bits minimum**

> **Gotcha:** Each additional bit adds ~6 dB of dynamic range. Going from 8-bit to 16-bit is an 8-bit increase → 8 × 6 = 48 dB improvement. This is why professional SDRs use 14- or 16-bit ADCs despite the higher cost and power draw.

---

### 9.2 — Nyquist Bandwidth

> **BW_max = f_sample / 2**

The maximum signal bandwidth an ADC can represent without aliasing is half the sample rate.

**Windows Calculator key sequence:**

1. Type `f_sample` (Hz or Msps) `÷` `2` `=` → **maximum usable bandwidth**

**Worked examples:**

- RTL-SDR: f_sample = 2.4 Msps → `2.4` `÷` `2` `=` → **1.2 MHz** usable bandwidth (one chunk of spectrum at a time)
- HackRF One: f_sample = 20 Msps → `20` `÷` `2` `=` → **10 MHz** bandwidth
- High-speed ADC for direct-sampling HF: f_sample = 122.88 Msps → `122.88` `÷` `2` `=` → **61.44 MHz** — covers the entire HF spectrum at once
- Bandwidth needed for SSB voice (2.4 kHz signal): minimum sample rate: `2.4` `×` `2` `=` → **4.8 kHz** sample rate minimum (in practice 8 kHz is standard for audio-quality speech)

> **Gotcha:** This is the theoretical Nyquist limit. In practice, real anti-alias filters aren't perfect — SDR software typically uses only 80–90% of the theoretical bandwidth to avoid edge artefacts. A 2.4 Msps dongle gives usable bandwidth of about 1–1.8 MHz depending on software and filter settings.

---

### 9.3 — FFT Frequency Resolution (Bin Width)

> **bin width = f_sample / N_FFT**

N_FFT is the number of FFT points (must be a power of 2). Result is the frequency spacing between displayed spectrum bins.

**Windows Calculator key sequence:**

1. Type `f_sample` (Hz) `÷` type `N_FFT` `=` → **bin width in Hz**

**Worked examples:**

- RTL-SDR: f_sample = 2,400,000 Hz, FFT size = 1024:  
  `2400000` `÷` `1024` `=` → **2343.75 Hz ≈ 2.3 kHz per bin** (coarse spectrum view)

- Same SDR, FFT size = 65536 (65k):  
  `2400000` `÷` `65536` `=` → **36.6 Hz per bin** (fine detail — narrowband signals visible)

- HackRF: f_sample = 10,000,000 Hz, FFT size = 4096:  
  `10000000` `÷` `4096` `=` → **2441 Hz per bin**

- Target: resolve two signals 500 Hz apart, sample rate 1 MHz → minimum FFT size:  
  N_FFT = f_sample / bin_width: `1000000` `÷` `500` `=` → **2000** → round up to 2048 (next power of 2)

> **Gotcha:** Larger FFT = finer frequency resolution but slower update rate and more CPU load. A 65k-point FFT on a 2.4 Msps stream takes over 27× longer to compute than a 2k FFT. Most SDR software lets you adjust FFT size to trade off between resolution and waterfall speed.

---

## Quick Reference — All Formulas

| # | Formula | What you need | Units |
|---|---------|---------------|-------|
| 1.1 | V = I × R | I (A), R (Ω) | V |
| 1.2 | P = V × I = I²R = V²/R | any two of V, I, R | W |
| 1.3 | R_par = R₁R₂/(R₁+R₂) | R₁, R₂ (Ω) | Ω |
| 2.1 | dB = 10 × log(P_out/P_in) | two power levels | dB |
| 2.2 | P_out = P_in × 10^(dB/10) | dB, P_in (W) | W |
| 2.3 | dB = 20 × log(V_out/V_in) | two voltage levels | dB |
| 3.1 | X_C = 1/(2πfC) | f (Hz), C (F) | Ω |
| 3.2 | X_L = 2πfL | f (Hz), L (H) | Ω |
| 3.3 | Z = √(R² + X²) | R (Ω), X (Ω) | Ω |
| 4.1 | f₀ = 1/(2π√(LC)) | L (H), C (F) | Hz |
| 4.2 | Q = X_L / R | X_L (Ω), R (Ω) | — |
| 4.3 | BW = f₀ / Q | f₀ (Hz), Q | Hz |
| 5.1 | VSWR = (1+\|Γ\|)/(1−\|Γ\|) | \|Γ\| (0–1) | ratio |
| 5.2 | \|Γ\| = (VSWR−1)/(VSWR+1) | VSWR (ratio) | 0–1 |
| 5.3 | RL = 20 × log(1/\|Γ\|) | \|Γ\| (0–1) | dB |
| 5.4 | P_ref = \|Γ\|² × P_inc | \|Γ\|, P_inc (W) | W |
| 6.1 | λ = 300 / f_MHz | f (MHz) | m |
| 6.2 | MUF = f_c × √(1+(d/2h)²) | f_c (MHz), d, h | MHz |
| 6.3 | λ_cable = (300/f_MHz) × VF | f (MHz), VF | m |
| 7.1 | Z₀ = √(Z_source × Z_load) | Z₁, Z₂ (Ω) | Ω |
| 7.2 | V₂ = V₁ × (N₂/N₁) | V₁, N₁, N₂ | V |
| 7.3 | Z ratio = (N₁/N₂)² | turns ratio | — |
| 8.1 | τ = R × C | R (Ω), C (F) | s |
| 8.2 | τ = L / R | L (H), R (Ω) | s |
| 8.3 | V = V₀ × e^(−t/τ) | V₀, t (s), τ (s) | V |
| 9.1 | DR ≈ 6n dB | n (bit depth) | dB |
| 9.2 | BW_max = f_sample / 2 | f_sample (Hz) | Hz |
| 9.3 | bin width = f_sample / N_FFT | f_sample, N_FFT | Hz |

---

## The Critical Traps — Summary

| Trap | What goes wrong | How to avoid it |
|------|-----------------|----------------|
| **`log` vs `ln`** | `ln(x) ≈ 2.303 × log(x)` — answer off by factor of 2.3 | dB = `log` (base 10); decay = `ln` / `2ⁿᵈ ln` |
| **DEG vs RAD** | In RAD mode, `sin(30)` = −0.988 not 0.5 | Check **DEG** shown in display top-left before any Trigonometry ▾ use |
| **`exp` vs `xʸ`** | `2` `exp` `6` = 2,000,000; `2` `xʸ` `6` = 64 | `exp` = scientific notation entry; `xʸ` = raise to a power |
| **`10ˣ` vs `2ⁿᵈ ln`** | Different bases: 10 vs *e* | Use `10ˣ` to undo `log`; use `2ⁿᵈ ln` to undo `ln` |
| **Wrong units** | MHz instead of Hz → off by 10⁶ | Always convert to SI base units first; do unit check before pressing `=` |
| **Power vs voltage dB** | Multiplying by 10 when you should use 20 (or vice versa) | P → ×10; V → ×20; 6 dB = ×4 power = ×2 voltage |

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
