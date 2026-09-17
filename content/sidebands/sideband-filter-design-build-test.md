# Sideband: Filter Design, Build & Test — Passive LC and Active Op-Amp Filters

**Tags:** `[I]` `[FL]`
**RSGB Refs:** 13H1, 13I1, 13J1, 13M1 (Full EMC); Intermediate §6C (filter types)
**Cross-refs:** <a href="../study/full/section-13-emc.html#13h--filter-types-and-placement-13h1" target="_blank">Full §13H — Filter Types & Placement</a> · <a href="../study/full/section-13-emc.html#13i--pi-and-t-filter-design-13i1" target="_blank">Full §13I — Pi & T Filter Design</a> · <a href="../study/full/section-14-measurements.html#14k--the-spectrum-analyser" target="_blank">Full §14K — Spectrum Analyser</a> · <a href="sideband-scientific-calculator-guide.html" target="_blank">Calculator Guide (group 4 — Resonance)</a> · <a href="sideband-crystal-filter.html" target="_blank">Crystal Filter Sideband</a>
**Series:** Sideband — Topic Snippets for RF-Hub

---

A filter is a frequency-selective network. It passes some frequencies with little loss and attenuates others. Every amateur station uses filters — the low-pass filter on the PA output, the bandpass filter in the receiver front end, the audio filter that pulls CW out of noise. Understanding how to design, build, and verify one closes the loop between the formula on the page and the working circuit on the bench.

This sideband covers the two main filter families used in amateur work: **passive LC filters** (inductors and capacitors, no power needed, used at RF) and **active op-amp filters** (resistors, capacitors, and an op-amp, used at audio and sub-100 MHz IF frequencies). For crystal filters — the technology used in SSB IF strips — see the companion sideband.

---

## Part 1: Passive LC Filters

### The Design Formulas

Two formulas cover every single-section passive LC filter regardless of topology (Pi, T, LP, or HP):

> **Series inductor:** L = Z₀ / (2π × f_c) &nbsp;&nbsp;&nbsp; [henries]

> **Shunt capacitor:** C = 1 / (2π × f_c × Z₀) &nbsp;&nbsp;&nbsp; [farads]

where f_c is the −3 dB cut-off frequency in Hz and Z₀ is the source and load impedance in Ω (must be equal — the formulas assume a matched system).

**These two formulas are it.** They apply whether you are designing a Pi filter, a T filter, a low-pass, or a high-pass. The topology and the L/C assignment change; the formulas do not.

---

### Low-Pass Pi Filter (shunt–series–shunt)

```
Input ──┬───[L]───┬── Output
       [C]       [C]
        │         │
       GND       GND
```

**Component values:** one inductor (series, value L) and two capacitors (shunt, each value C).

**Use for:** harmonic suppression at transmitter output; HF/VHF low-pass at 50 Ω.

**Worked example — HF LP filter, f_c = 32 MHz, Z₀ = 50 Ω:**

```
L = 50 / (2π × 32 × 10⁶) = 50 / 201,062,000 = 249 nH → use 250 nH (standard)
C = 1 / (2π × 32 × 10⁶ × 50) = 1 / 10,053,100,000 = 99.5 pF → use 100 pF (standard)
```

Pi topology: 100 pF to GND → 250 nH series → 100 pF to GND.

The Pi filter suits **high-impedance source and load** — the capacitors immediately shunt harmonic energy before it can enter the inductor.

---

### Low-Pass T Filter (series–shunt–series)

```
Input ──[L]──┬──[L]── Output
            [C]
             │
            GND
```

**Component values:** two identical inductors (series, each L) and one capacitor (shunt, value C).

**Use for:** lower-impedance sources where the inductors block harmonics at the input and output.

Same formulas as Pi — values L and C are identical to the Pi at the same f_c and Z₀. Only the topology (which element is where) differs.

---

### High-Pass Pi Filter

**Element-type swap:** series inductor → series **capacitor**; shunt capacitors → shunt **inductors**.

```
Input ──┬───[C]───┬── Output
       [L]       [L]
        │         │
       GND       GND
```

**Same formula values** — just swap which formula goes to which element type:
- Series **capacitor**: use the **C formula** → C = 1/(2πf_c Z₀)
- Shunt **inductor**: use the **L formula** → L = Z₀/(2πf_c)

**Worked example — TV aerial HPF, f_c = 50 MHz, Z₀ = 75 Ω (blocks HF, passes UHF):**

```
C_series = 1 / (2π × 50 × 10⁶ × 75) = 42.4 pF → use 39 pF or 43 pF
L_shunt  = 75 / (2π × 50 × 10⁶)     = 238 nH → use 220 nH or 270 nH
```

---

### Bandpass Filter

A simple bandpass filter is constructed by **cascading a LP filter and an HP filter**, with the LP cut-off above the HP cut-off. Signals below f_HP and above f_LP are rejected; signals between them pass.

For a single-band receive filter on 20 m (14.0–14.35 MHz):
- HP section: f_c = 13.5 MHz (blocks below 20 m band)
- LP section: f_c = 15.0 MHz (blocks above 20 m band)

Place them in order: HP Pi → LP Pi. Both sections designed for 50 Ω.

> **Note:** Adjacent sections sharing a node can combine their shunt elements (two shunt capacitors at a junction → one capacitor of double the value). This reduces component count.

---

### Notch Filter (Band-Stop)

A **parallel LC trap** (placed in shunt across the signal path) presents very high impedance at its resonant frequency — the signal at that frequency sees a near-open circuit and is diverted to ground. This creates a sharp notch.

```
Signal line ──┬──────────────────── continues
              │
             [L] ═══ parallel resonance
             [C]
              │
             GND
```

**Resonant frequency:** f₀ = 1 / (2π × √(L × C))

**Depth of notch:** determined by the Q of the inductor. High-Q air-wound inductors give notches >40 dB; ferrite-wound inductors give broader, shallower notches.

**Use for:** rejecting a single interferer (FM broadcast station desensitising an HF receiver, a specific harmonic).

**Worked example — notch at 97.5 MHz (FM station), 50 Ω system:**

Using C = 47 pF (available):

L = 1 / (4π² × f₀² × C) = 1 / (4 × 9.87 × (97.5 × 10⁶)² × 47 × 10⁻¹²) = **56.7 nH → 56 nH air-wound**

---

### Cascading for More Attenuation

Each additional identical filter section adds the same dB attenuation in the stop band (attenuations add in dB). Two 3-element Pi LP sections give approximately 2× the dB of one.

**Practical limit:** component parasitics (inductor self-resonant frequency, capacitor series inductance) degrade performance beyond ~80–100 dB total. At VHF and above, physical component size becomes the limiting factor.

---

## Part 2: Active Op-Amp Filters

Active filters use resistors, capacitors, and an op-amp to achieve frequency-selective behaviour without inductors. This matters because:
- Inductors are bulky, lossy, and expensive at audio/IF frequencies
- Op-amp filters are easily tuned by changing resistor values
- Active filters can provide gain (or unity gain) in the passband

**Limitation:** op-amp filters are only practical below ~10 MHz (limited by op-amp gain-bandwidth product). At RF, passive LC is the right choice.

---

### The Sallen-Key Low-Pass Filter (2nd Order)

The Sallen-Key is the most common active LP topology — two poles (−40 dB/decade rolloff) from one op-amp, unity gain (voltage follower output stage).

```
Input ──[R1]──┬──[R2]──┬── (+) op-amp out── Output
              |        |        |
             [C1]     [C2]     |
              |        |       (−) ──────────┘ (unity gain)
             GND      GND
```

For a **Butterworth** (maximally flat passband) 2nd-order LP with cut-off frequency f_c and equal R, equal C (R1 = R2 = R, C1 = C2 = C):

> **f_c = 1 / (2π × R × C)**

> **Choose C, solve for R: R = 1 / (2π × f_c × C)**

The Butterworth condition also requires a specific Q of 0.707, which with the unity-gain Sallen-Key is automatically satisfied when R1 = R2 and C1 = C2.

**Worked example — audio LPF at 3 kHz (voice high-cut), using C = 47 nF:**

R = 1 / (2π × 3000 × 47 × 10⁻⁹) = 1 / 885,840 = **1,129 Ω → use 1.1 kΩ** (standard value, 2.6% error)

---

### The Sallen-Key High-Pass Filter (2nd Order)

Swap R and C positions in the Sallen-Key network:

```
Input ──[C1]──┬──[C2]──┬── (+) op-amp out── Output
              |        |        |
             [R1]     [R2]     |
              |        |       (−) ──────────┘ (unity gain)
             GND      GND
```

Same formula: **f_c = 1 / (2π × R × C)** with R1=R2=R, C1=C2=C.

**Use for:** audio HPF to cut rumble below 300 Hz; removing DC and LF noise from audio interfaces.

---

### Multiple-Feedback (MFB) Bandpass Filter

The MFB topology gives a bandpass response (passes a band around a centre frequency f₀, attenuates above and below) with gain at the centre frequency.

Design parameters: centre frequency f₀, bandwidth BW (or Q = f₀/BW), and passband gain A₀.

```
        [C1]
          │
Input ──[R1]──┬──[R3]── (−) op-amp ──┬── Output
              |                       │
             [R2]                    [C2]
              |                       │
             GND                      │
              └───────────────────────┘ (feedback)
```

For the MFB bandpass (simplified equal-C design, C1 = C2 = C):

> **f₀ = 1 / (2π × C × √(R1 × R3))**

> **Q = (π × f₀ × C × (R1 + R3)) / 1** *(varies by design)*

> **A₀ = −R3 / (2 × R1)** *(inverting gain at f₀)*

**Use for:** audio CW filter (e.g. centre 700 Hz, BW 100 Hz, Q = 7); IF noise filtering; SSB audio shaping.

**Practical note:** the MFB is sensitive to component tolerances at high Q. For Q > 10, 1% resistors and NPO capacitors are needed to hit the design frequency.

---

### Op-Amp Selection

The op-amp's **gain-bandwidth product (GBW)** must be much higher than f₀ × A₀. The op-amp's open-loop gain must be at least 10× the closed-loop gain at f₀, otherwise the filter frequency response shifts.

| Application | f₀ | Minimum GBW | Suitable op-amps |
|-------------|-----|-------------|-----------------|
| Audio LPF 3 kHz | 3 kHz | ≥ 300 kHz | LM741, TL071, NE5532 |
| Audio CW filter 700 Hz | 700 Hz | ≥ 70 kHz | Any general-purpose |
| SSB audio shaping 2.4 kHz | 2.4 kHz | ≥ 240 kHz | NE5532, OPA2134 |
| IF bandpass 455 kHz | 455 kHz | ≥ 45 MHz | OPA355, OPA657 |
| IF bandpass 9 MHz | 9 MHz | ≥ 900 MHz | (Crystal filter preferred here) |

For audio work, **NE5532** (10 MHz GBW, low noise) is the standard amateur choice. **OPA2134** (8 MHz GBW, FET input, very low noise) for high-performance audio.

---

## Part 3: Component Selection

### Inductors

**Self-resonant frequency (SRF):** every inductor has distributed capacitance between its windings. At the SRF, the inductor resonates with its own capacitance and behaves as a capacitor above that frequency. The SRF must be well above the filter's stop-band frequency.

| Inductor type | SRF range | Suitable for |
|--------------|-----------|--------------|
| Axial moulded (colour-coded) | 50–300 MHz | HF LP filters only |
| Toroidal (T50-6) | > 200 MHz | HF/VHF, wound to value |
| Air-wound (self-supporting coil) | > 500 MHz | VHF/UHF, high-Q notches |
| Shielded SMD | 100 MHz–1 GHz | VHF/UHF PCB filters |

**Core material:** for HF filters, **iron powder cores** (T50-6, T50-2, Amidon) give high Q and linear permeability. Ferrite cores (suitable for EMC chokes) are lossy at HF and reduce filter Q, broadening the response.

### Capacitors

| Dielectric | Tolerance | Tempco | Suitable for |
|------------|-----------|--------|--------------|
| NP0/C0G | ±5% or better | ±30 ppm/°C | All RF filters — first choice |
| Silver mica | ±1% | ±50 ppm/°C | High-performance RF, notch filters |
| X7R | ±10–20% | ±15% over temp | Not suitable for tuned circuits |
| Polystyrene | ±1–2.5% | −125 ppm/°C | Audio filters, good stability |
| Polyester/MKT | ±5–10% | ±200 ppm/°C | Audio only (too large for RF) |

**For RF LC filters: always use NP0/C0G or silver mica.** X7R capacitance drifts with temperature and voltage — a filter built with X7R capacitors will shift cut-off frequency as the circuit warms up.

---

## Part 4: Building and Layout

### PCB and Stripboard Guidelines

**Ground plane:** a continuous copper ground plane under the filter components is essential at VHF. It provides a low-inductance return path and prevents ground-loop problems between filter sections.

**Lead length:** at 50 MHz and above, 10 mm of component lead = approximately 8 nH of series inductance (about 2.5 Ω at 50 MHz). Excess lead length on capacitors adds parasitic inductance that degrades filter performance. Keep leads as short as possible; use SMD components at VHF.

**Input/output separation:** the input and output of a filter must be physically separated and shielded from each other. A signal bypassing the filter by coupling capacitively across it destroys the stop-band attenuation. Use a grounded metal partition or shield can between input and output stages on high-isolation filters.

**Box:** a fully enclosed tinplate or aluminium box with SMA or BNC connectors is the correct housing for any filter requiring > 40 dB stop-band isolation.

---

## Part 5: Test Procedure

A completed filter should be verified before installation. Two measurements matter:

### 1. Passband Insertion Loss (S21)

Connect the filter between a signal generator (or VNA port 1) and a spectrum analyser / power meter (VNA port 2). Sweep across the passband and record the insertion loss at the design frequency.

**Expected:** LP Butterworth filter at f_c/10 should have < 0.1 dB insertion loss. Actual loss is due to coil winding resistance (low Q) and capacitor ESR. A well-built LC filter at HF should achieve < 0.5 dB passband loss.

### 2. Stop-Band Attenuation

Sweep the frequency into the stop band and measure attenuation at 2× f_c, 3× f_c.

A 3-element Pi LP (one inductor, two capacitors) rolls off at −60 dB/decade beyond f_c. At 2× f_c (one octave): approximately −18 dB below the passband. At 3× f_c: approximately −30 dB. A 5-element Pi (two inductors, three capacitors) gives −100 dB/decade.

### 3. Return Loss / Match (S11)

Connect the filter input to VNA port 1 (with the output terminated in Z₀). A well-designed filter presents near Z₀ in the passband — the return loss should be > 15 dB in the passband, indicating SWR < 1.4:1.

Poor return loss in the passband means the component values are off or the filter's source/load impedance assumption is not matched.

### Quick Bench Test Without a VNA

A basic two-generator test works without dedicated RF test equipment:
1. Set signal generator to f_passband → measure output level with multimeter (AC mV setting) → note as reference
2. Set signal generator to f_stopband (e.g. 2× f_c) → measure output level
3. Attenuation (dB) = 20 × log₁₀(V_passband / V_stopband)

---

<!-- VISUAL: Interactive LC filter designer widget
     When /interactives/full-lc-filter-designer.html is available, replace this block with:
     <iframe src='/interactives/full-lc-filter-designer.html' style='width:100%; height:750px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='LC Filter Designer'></iframe>
-->

---

## Quick Reference

| Filter type | Topology | Series element | Shunt element | L formula | C formula |
|-------------|---------|----------------|---------------|-----------|-----------|
| LP Pi | shunt–series–shunt | L | C | Z₀/(2πf_c) | 1/(2πf_c Z₀) |
| LP T | series–shunt–series | L | C | Z₀/(2πf_c) | 1/(2πf_c Z₀) |
| HP Pi | shunt–series–shunt | C (series) | L (shunt) | Z₀/(2πf_c) | 1/(2πf_c Z₀) |
| HP T | series–shunt–series | C (series) | L (shunt) | Z₀/(2πf_c) | 1/(2πf_c Z₀) |
| Notch trap | shunt resonator | L ∥ C | — | L = 1/(4π²f₀²C) | chosen first |
| BP | HP then LP cascade | — | — | apply LP + HP independently | |
| S-K LP (active) | Sallen-Key | R (series) | C (shunt) | — | f_c = 1/(2πRC) |
| S-K HP (active) | Sallen-Key | C (series) | R (shunt) | — | f_c = 1/(2πRC) |

| Rolloff rate | Elements | Type |
|-------------|---------|------|
| −20 dB/decade | 1 reactive | 1st order (single RC or LC) |
| −40 dB/decade | 2 reactive | 2nd order (Sallen-Key, or Pi L+2C) |
| −60 dB/decade | 3 reactive | 3-element Pi or T |
| −100 dB/decade | 5 reactive | 5-element Pi or T |

---

*Sideband snippets are short-form RF-Hub reference topics. For crystal filters (IF strips, SSB ladders, half-lattice), see the companion <a href="sideband-crystal-filter.html">Crystal Filter sideband</a>.*
