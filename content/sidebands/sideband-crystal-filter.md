# Sideband: Crystal Filters — Ladder, Half-Lattice & the 9 MHz IF Strip

**Tags:** `[I]` `[FL]`
**Cross-refs:** <a href="../study/full/section-13-emc.html#13i--pi-and-t-filter-design-13i1" target="_blank">Full §13I — Filter Design</a> · <a href="../study/full/section-7-transmitter.html" target="_blank">Full §7 — Transmitter (SSB IF strip)</a> · <a href="sideband-filter-design-build-test.html" target="_blank">Filter Design, Build & Test sideband</a> · <a href="sideband-s21-transmission-measurement.html" target="_blank">S21 Measurement sideband</a>
**Series:** Sideband — Topic Snippets for RF-Hub

---

A quartz crystal resonator is a mechanical resonator — a tiny slice of piezoelectric quartz that vibrates at a precise frequency determined by its cut angle and physical dimensions. As an electrical component it behaves as an LC resonant circuit with an extraordinary Q factor — typically 10,000 to 100,000 compared to 50–500 for a wound inductor. This extreme Q makes crystals the natural choice for narrow-bandwidth IF filters in SSB and CW receivers and transmitters.

This sideband covers how crystals behave electrically, how they are combined into ladder and half-lattice filter topologies, and how a practical 9 MHz IF SSB filter is designed and tested. Crystal filter design at the level of a production SSB radio requires specialised software (Dishal, AADE Filter Design, or Elsie); this page gives the conceptual foundation and the design rules for a homebrew IF filter.

---

## Part 1: The Crystal Equivalent Circuit

A quartz crystal behaves electrically as a two-terminal network containing a **series branch** (the motional arm) in parallel with a **static capacitance**:

```
     ┌────────────────────────────────────────┐
     │                                        │
    [C₀]         static (plate) capacitance  │
     │                                        │
     └──[L_m]──[C_m]──[R_s]──────────────────┘
          motional arm (series resonance)
```

| Symbol | Name | Typical value (10 MHz crystal) |
|--------|------|-------------------------------|
| L_m | Motional inductance | 10–100 mH |
| C_m | Motional capacitance | 10–30 fF (femtofarads) |
| R_s | Series resistance (ESR) | 5–50 Ω |
| C₀ | Static (parallel) capacitance | 3–7 pF |

The ratio C_m/C₀ is tiny (typically 0.001–0.003) — this gives the crystal its narrow operating frequency range and high Q.

### Two Resonant Frequencies

**Series resonance (f_s):** the motional arm L_m and C_m resonate. At f_s the series branch looks like a pure resistance R_s (very low impedance).

> **f_s = 1 / (2π × √(L_m × C_m))**

**Parallel resonance (f_p):** C_m and C₀ together with L_m resonate. At f_p the device looks like a very high impedance (open circuit).

> **f_p ≈ f_s × √(1 + C_m / C₀) ≈ f_s × (1 + C_m / (2 × C₀))**

The gap between f_s and f_p is typically **0.1–0.5% of f_s** — for a 9 MHz crystal, this is only 9–45 kHz. All useful filter operation occurs within this narrow range.

### Q Factor

The unloaded Q of the crystal is:

> **Q = (2π × f_s × L_m) / R_s = 1 / (2π × f_s × C_m × R_s)**

With L_m = 20 mH, R_s = 10 Ω at 9 MHz:
Q = (2π × 9 × 10⁶ × 20 × 10⁻³) / 10 = (1,130,973) / 10 ≈ **113,000**

This Q is 200–2000× higher than a wound inductor at the same frequency. A filter built from crystals will have a much sharper frequency response than any LC equivalent.

---

## Part 2: Filter Topologies

### Ladder Filter

The most common crystal filter topology for homebrew use. A series of crystals is connected in series along the signal path, with capacitors connecting the junctions to ground:

```
Input ──[X1]──┬──[X2]──┬──[X3]──┬──[X4]── Output
             [C]      [C]      [C]
              │        │        │
             GND      GND      GND
```

**How it works:** Each crystal presents very low impedance near f_s and very high impedance away from f_s. The shunt capacitors provide a reference path to ground. Together they create a bandpass response centred near the crystals' series resonant frequency, with the bandwidth controlled primarily by the **capacitor values**.

**Larger C (more capacitance to ground):** wider bandwidth, lower shape factor.
**Smaller C:** narrower bandwidth, higher insertion loss.

**Number of crystals:** each crystal adds one pole to the response. A 4-crystal ladder gives a reasonable shape factor for SSB; 6–8 crystals give CW bandwidths. Commercial SSB filters typically use 8–12 crystals.

### Half-Lattice Filter

The half-lattice uses **pairs of crystals** with slightly different frequencies in a bridge (lattice) configuration:

```
        [Xa] (series resonance f_sa)
Input ──┤                              ├── Output
        [Xb] (series resonance f_sb)
```

where Xa and Xb are connected in a transformer-coupled bridge — one crystal in the signal path, one in the feedback path. The two crystals are deliberately chosen to have slightly different f_s values.

**Passband:** centred between f_sa and f_sb.

**Bandwidth:** approximately (f_pb − f_sa) × 1.4, where f_pb is the parallel resonance of the crystal with lower f_s.

The half-lattice gives a very steep skirt (excellent shape factor) and is used in high-performance commercial SSB filters (e.g. the classic Collins mechanical filter approximation in crystal form). It requires two transformers (for coupling in and out of the bridge) and is more complex to build than a ladder filter.

**Shape factor:** the ratio of filter bandwidth at −60 dB to bandwidth at −6 dB. A good SSB ladder filter achieves 2.0:1; a half-lattice can achieve 1.5:1. A simple LC bandpass might be 5:1 or worse.

---

## Part 3: The 9 MHz SSB IF Filter

9 MHz is the standard IF frequency for many HF transceivers. At 9 MHz, HC-49 crystals are readily available, inexpensive, and well-characterised. A 4- or 6-crystal ladder filter at 9 MHz provides the SSB passband needed for voice communication.

### Design Specification

| Parameter | Target | Notes |
|-----------|--------|-------|
| Centre frequency | 9.000 MHz | Standard HC-49 crystals |
| Passband (−6 dB) | 2.4 kHz | Covers 300–2700 Hz audio |
| Passband (−60 dB) | < 5.0 kHz | Shape factor < 2.1:1 |
| Insertion loss | < 6 dB | In matched 200 Ω system |
| Stopband | > 60 dB at ±10 kHz | Suppresses adjacent-channel interference |
| Crystal count | 4–6 | Homebrew achievable |
| Termination impedance | 200 Ω | Typical for 9 MHz ladder filters |

### Crystal Selection and Matching

**This is the most critical step.** All crystals in a ladder filter must have series resonant frequencies within approximately **±100 Hz** of each other, or the passband will be uneven and the insertion loss will increase.

**How to match crystals:**

1. Measure each crystal's series resonant frequency using a crystal oscillator test circuit or a VNA in series-through mode
2. Trim a batch of 10–20 crystals from the same reel — they are likely to be within ±200 Hz of each other
3. Sort by frequency; select the most closely matched set
4. For a 6-crystal filter, you need 6 crystals within ±50 Hz of each other

**Do not mix crystals from different batches or manufacturers.** Even nominally identical part numbers from different production lots may differ by several hundred Hz.

### 4-Crystal Ladder — Design Values

For a 9.000 MHz SSB ladder filter with 200 Ω termination and 2.4 kHz bandwidth, typical component values (derived using the Dishal method — see references):

```
200Ω ──[X1]──┬──[X2]──┬──[X3]──┬──[X4]── 200Ω
            [C1]     [C2]     [C3]
```

| Component | Value | Note |
|-----------|-------|------|
| X1–X4 | HC-49, 9.000 MHz | Matched within ±50 Hz |
| C1, C3 (end caps) | 56 pF | NP0/C0G only |
| C2 (middle) | 39 pF | NP0/C0G only |
| Termination R | 200 Ω | Both source and load |

> **Why end and middle capacitors differ:** the end capacitors interact with the source/load impedance and the first/last crystal; the middle capacitors only interact between crystals. The values are derived from the Dishal method or determined by simulation (RF circuit simulators such as Elsie or Qucs). The above values are a starting point — see the references for a proper synthesis procedure.

### 6-Crystal Ladder — Additional Bandwidth Control

Adding two more crystals (X5, X6 with C4, C5 additional caps) sharpens the skirts significantly:
- 4-crystal: shape factor approximately 2.5:1 (practical homebrew result)
- 6-crystal: shape factor approximately 1.8:1

### Source and Load Impedance

The ladder crystal filter is **critically sensitive to termination impedance**. If the source or load deviates from the design impedance (200 Ω in this example):

- **Too high:** passband ripple increases; out-of-band attenuation degrades
- **Too low:** passband becomes peaky with gain variations across the band

In an SSB transceiver IF strip, a resistive pad (attenuator) is often inserted between the filter and the mixer output or the first IF amplifier input, specifically to ensure the filter sees the correct termination. A 6 dB pad set to 200 Ω will raise the insertion loss by 6 dB but guarantee flat passband performance.

### Schematic (4-Crystal Ladder)

```
RF input                                    RF output
  │                                            │
[200Ω]                                      [200Ω]
  │                                            │
──┤ X1 ├──┬──┤ X2 ├──┬──┤ X3 ├──┬──┤ X4 ├───
         [56p]      [39p]      [56p]
          │          │          │
         GND        GND        GND
```

Components: 4× HC-49/S 9 MHz (matched), 2× 56 pF NP0, 1× 39 pF NP0, source termination 200 Ω, load termination 200 Ω.

---

## Part 4: Temperature Effects and Ageing

### Cut Angle and Temperature Coefficient

Quartz crystals are cut at a specific angle relative to the crystal lattice. The cut angle determines the temperature coefficient:

| Cut | Temp coefficient | Notes |
|-----|-----------------|-------|
| AT cut | Near-zero over 0–70 °C | Standard choice for filter and reference crystals |
| BT cut | Slightly higher tempco | Slightly easier to manufacture |
| SC cut | Very low over wider range | Premium oscillator use, expensive |

**AT-cut crystals** are the standard for IF filter applications. Over a 0–50 °C operating range, frequency variation is typically < 5 ppm — for a 9 MHz crystal this is < 45 Hz, negligible for SSB bandwidth.

### Ageing

Crystal frequency drifts slowly over time as the quartz surface chemistry changes and mechanical stresses relax. Typical ageing rate for HC-49 crystals: 1–5 ppm per year in the first few years, slowing thereafter. For a filter application, ageing of matched crystals is nearly identical across the set — the filter centre frequency drifts, but the shape is preserved.

---

## Part 5: Construction

### PCB Layout

- Use a **solid ground plane** under all crystals and capacitors
- Keep the signal path as short as possible — long tracks between crystals add stray capacitance that widens the passband and degrades shape factor
- **Do not put the crystal bodies on the PCB solder side** if using a ground plane — the crystal body capacitance to ground adds C₀ directly to the circuit, shifting the effective filter parameters

### Shielded Enclosure

For > 60 dB stopband isolation, the filter **must be in a fully shielded metal enclosure**. Without shielding, the RF signal at the input will couple directly to the output through the air, bypassing the filter entirely and limiting practical attenuation to approximately 40–50 dB.

Use a tinplate or die-cast aluminium box with feedthrough capacitors or SMA connectors. Ground the box lid to the PCB ground plane.

### Crystal Mounting

HC-49 crystals are through-hole components. Keep their leads short (5 mm maximum). If the crystals are close together, add a small ground plane strip between adjacent crystal bodies to prevent direct capacitive coupling between them.

---

## Part 6: Test Procedure

### Equipment

- VNA or tracking generator + spectrum analyser (preferred)
- Alternative: signal generator + calibrated attenuator + power meter / voltmeter

### S21 Sweep Procedure

1. Calibrate the VNA for a 200 Ω–200 Ω S21 measurement (or use 50 Ω with 200 Ω/50 Ω resistive pads at each port)
2. Set span to ±50 kHz around 9.000 MHz (e.g. 8.950–9.050 MHz)
3. Set RBW to 300 Hz or lower — the passband is only 2.4 kHz wide, coarse RBW will miss detail
4. Record:
   - **Centre frequency** (peak of passband)
   - **−6 dB bandwidth** (frequency span at 6 dB below passband peak)
   - **−60 dB bandwidth** (frequency span at 60 dB below passband peak)
   - **Insertion loss** (passband peak relative to through calibration)
   - **Shape factor** = BW_−60dB / BW_−6dB

### Interpreting Results

| Result | Likely cause | Fix |
|--------|-------------|-----|
| Insertion loss > 10 dB | Crystals not matched, or wrong termination impedance | Re-match crystals; check termination R |
| Passband ripple > 3 dB | Crystals spread > ±100 Hz, or capacitor values off | Re-sort crystals; adjust C values |
| Shape factor > 3:1 | Capacitor values too large (wide BW) or wrong topology | Reduce shunt capacitor values |
| No deep stopband (< 40 dB at ±10 kHz) | Insufficient shielding; RF bypassing filter | Add metal enclosure; check PCB layout |
| Centre frequency offset from 9.000 MHz | Crystal batch offset from nominal | Acceptable if within ±1 kHz; adjust BFO/carrier frequency to compensate |

---

## Quick Reference

| Parameter | Formula | Notes |
|-----------|---------|-------|
| Crystal series resonance | f_s = 1/(2π√(L_m C_m)) | L_m in mH, C_m in fF |
| Crystal parallel resonance | f_p ≈ f_s × √(1 + C_m/C₀) | Typically 0.1–0.5% above f_s |
| Crystal Q | Q = 2πf_s L_m / R_s | Typical: 10,000–100,000 |
| Filter shape factor | SF = BW_−60dB / BW_−6dB | <2:1 good; <1.5:1 excellent |
| Ladder BW control | Wider BW → larger shunt C; Narrower → smaller C | NP0 capacitors only |
| Termination impedance | Must match design value exactly | Use resistive pads if needed |

### 9 MHz Ladder Filter — Ready Reference

| Crystals | BW (−6 dB) | Shape factor (typical) | Insertion loss |
|---------|------------|------------------------|----------------|
| 4 | ~3 kHz | ~2.5:1 | ~3 dB |
| 6 | ~2.4 kHz | ~1.8:1 | ~4 dB |
| 8 | ~2.0 kHz | ~1.5:1 | ~5–6 dB |

---

### References

The following works are recommended for full filter synthesis procedures. They are cited here as references — their design methods are described in outline only; consult them for complete derivations and tables.

- **Dishal, M.** — "Modern network design of bandpass crystal filters" (1965). The classical closed-form synthesis procedure for ladder crystal filters. Still the standard reference.
- **Williams, A. & Taylor, F.** — *Electronic Filter Design Handbook* (McGraw-Hill, 4th ed.). Chapter on crystal filter design includes normalised ladder tables.
- **Hayward, W., Campbell, R., Larkin, B.** — *Experimental Methods in RF Design* (ARRL, 2003). Chapter 3 covers ladder and half-lattice crystal filter design with worked examples for amateur IF frequencies.
- **AADE Filter Design** (freeware) — Windows software implementing the Dishal method for ladder crystal filter synthesis. Accepts measured crystal parameters.
- **Elsie** (Tonne Software) — LC and crystal filter synthesis for Windows; exports component values and plots ideal response.

---

*Sideband snippets are short-form RF-Hub reference topics. For passive LC and active op-amp filters, see the companion <a href="sideband-filter-design-build-test.html">Filter Design, Build & Test sideband</a>.*
