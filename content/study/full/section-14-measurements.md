<!-- RF-Hub Full Licence Study — Chapter 14: Measurements
     Exam weight: ~8–10% (~14 subsections, 8 pages)
     Sub-sections: §14A voltmeter loading/ammeter error, §14B AC waveforms RMS/peak/PEP,
                   §14C SWR/reflection coefficient/return loss, §14D Bruene directional coupler,
                   §14E CRT oscilloscope, §14F digital storage oscilloscope (DSO),
                   §14G RF viewing (SSB/AM/FM envelopes), §14H frequency counter/reciprocal counting,
                   §14I TCXO/OCXO reference oscillators, §14J dip meter,
                   §14K spectrum analyser (RBW/VBW/span/markers), §14L dummy load,
                   §14M SWR meter practical, §14N field strength meter
     Syllabus refs: 14A1–14N1 [VERIFY v1.6]
     RSGB source: Full Licence Manual 3rd ed. (G0HIQ), Ch 14, pp 96–103
     Cross-ref: Intermediate §9 (measurements overview), Full §13 (spectrum analyser in EMC),
                Full §4 (SWR/VSWR theory), Full §8 (spurious emissions/dummy load tests)
     New at Full: voltmeter loading error formula, PEP for SSB, Bruene coupler construction,
                  CRT electron gun, DSO acquisition modes, RF waveform identification,
                  reciprocal counting, TCXO/OCXO stability, spectrum analyser RBW/VBW,
                  field strength meter
     Iframes: full-vswr-calculator.html (§14C), full-oscilloscope-sim.html (§14G)
-->

# §14 — Measurements

Measurement is the foundation of engineering. Every calculation in this manual assumes the transmitter outputs what the specification claims, the antenna is matched as expected, and the receiver is as sensitive as the data sheet suggests. Test equipment converts assumption into evidence.

The Intermediate licence introduces the instruments. Full level extends into the theory behind the readings: why a voltmeter changes the circuit it measures, how a directional coupler separates forward and reflected power, how a digital oscilloscope stores and displays a waveform that is gone before the screen updates, and what the resolution bandwidth setting on a spectrum analyser actually controls. Each of those topics has appeared in the Full exam; each rewards understanding over memorisation.

> **Cross-reference — Intermediate §9:** The Intermediate measurements chapter covers voltmeter/ammeter connection rules, oscilloscope basics (V/div, time/div), SWR meter placement, signal generator use, spectrum analyser overview, dip meter, and the standard transmitter test setup. Read this chapter as an extension of that material.

---

## §14A — Voltmeter Loading and Ammeter Error (14A1)

Every measuring instrument interacts with the circuit it measures. At Intermediate level the rule is simple: voltmeters in parallel, ammeters in series. At Full level we quantify the error and know when it matters.

### Voltmeter Loading Error

A voltmeter measures the voltage at a node by connecting its own input resistance **R_m** in parallel with the circuit impedance **R_c** at that node. The parallel combination is always less than R_c, so the voltmeter lowers the node voltage below its unloaded value.

The measured voltage is:

> **V_measured = V_true × R_m / (R_m + R_c)**

The **loading error** as a fraction of true voltage:

> **Error fraction = R_c / (R_m + R_c)**

**Example:** a circuit node sits at 10 V behind a 10 kΩ Thevenin resistance. A DMM with 1 MΩ input impedance is connected:

V_measured = 10 × 1,000,000 / (1,000,000 + 10,000) = 10 × 0.9901 = **9.90 V** (0.99% error — negligible)

**Example with high-impedance circuit:** the same node, but R_c = 1 MΩ and R_m = 1 MΩ:

V_measured = 10 × 1,000,000 / (1,000,000 + 1,000,000) = **5.0 V** (50% error — unusable)

**Rule:** The voltmeter input impedance must be at least **10× the circuit impedance** for the loading error to be below 10%. For measurements on high-impedance circuits (FET gates, valve grids, oscillator tuned circuits), use a high-impedance probe (10:1 scope probe, input impedance typically 10 MΩ) or an electronic voltmeter with FET input.

### Ammeter Insertion Error

An ammeter has a small but non-zero internal resistance **R_a**. Inserting it in series adds this resistance to the circuit, reducing the current slightly below its unloaded value.

> **I_measured = V_source / (R_circuit + R_a)**

The **insertion error** is significant when R_a is comparable to R_circuit. A 0.1 Ω ammeter in a 1 Ω circuit introduces a 10% error; in a 100 Ω circuit the same ammeter introduces 0.1%.

**Rule:** The ammeter internal resistance should be at least 100× smaller than the circuit resistance.

### AC Measurement on Non-Sinusoidal Waveforms

Most DMMs calibrated in AC mode are designed for pure **sine waves** — they measure the mean-rectified value and scale it by 1.111 (the form factor for a sine wave) to give a reading calibrated in RMS. For non-sinusoidal waveforms (square waves, audio programme, SSB RF), this gives the wrong RMS value.

To measure true RMS of a non-sinusoidal waveform, use a **true-RMS DMM** — these contain an analogue squaring circuit or a thermal converter that directly computes RMS regardless of waveform shape.

> [INFO] **14A1:** V_measured = V_true × R_m/(R_m + R_c). Loading error is significant when R_m is comparable to R_c. Use a true-RMS DMM for non-sinusoidal waveforms. Ammeter insertion error is significant when R_a is comparable to R_circuit.

---

## §14B — AC Waveforms: RMS, Peak, and Peak Envelope Power (14B1)

### Sine Wave Relationships

For a **pure sine wave** of peak voltage V_pk:

| Quantity | Formula | Example (V_pk = 100 V) |
|----------|---------|------------------------|
| Peak-to-peak | V_pp = 2 × V_pk | 200 V |
| RMS | V_rms = V_pk / √2 ≈ V_pk × 0.707 | 70.7 V |
| Mean (half-wave rectified) | V_mean = V_pk × (2/π) ≈ V_pk × 0.637 | 63.7 V |
| Form factor | V_rms / V_mean = π/(2√2) ≈ 1.111 | — |
| Crest factor | V_pk / V_rms = √2 ≈ 1.414 | — |

The **crest factor** tells you how much the peak exceeds the RMS. For a square wave, crest factor = 1. For audio and SSB signals, the crest factor can be 4:1 (12 dB) or higher — the peaks are much higher than the average.

### RF Power: Average vs Peak Envelope Power

For a **continuous wave (CW) or FM** signal, the amplitude is constant. The average power equals the RMS power:

> **P_avg = V_rms² / R = V_pk² / (2R)**

For a **single-sideband (SSB)** signal, the amplitude varies with the audio programme — it is zero during speech pauses and reaches a peak when a loud, sustained tone is present. There are two relevant power quantities:

**Average power (P_avg):** the mean power over a period much longer than one modulation cycle. For a typical SSB voice signal, P_avg is approximately 25–30% of PEP (4–6 dB below PEP).

**Peak Envelope Power (PEP):** the maximum average power in any single RF cycle at the crest of the modulation envelope. It is calculated over the **single RF cycle** with the highest amplitude:

> **PEP = V_pk(envelope)² / (2 × R)**

where V_pk(envelope) is the peak RF voltage at the crest of the modulation envelope, and R is the load impedance (typically 50 Ω).

**Worked example:** An SSB transmitter's output, viewed on an oscilloscope with a 50 Ω termination, shows a peak RF voltage of 141 V at the loudest speech peak.

PEP = 141² / (2 × 50) = 19,881 / 100 = **198.8 W ≈ 200 W**

This is the figure that matters for licence power limits — the UK amateur licence specifies maximum power in PEP for SSB.

**For AM:** The carrier has power P_c = V_carrier² / (2R). With 100% AM modulation depth m:

> **PEP_AM = P_c × (1 + m)² / 1 = P_c × 4** at m = 1 (PEP is 4× carrier power at 100% modulation)

> **P_avg_AM = P_c × (1 + m²/2)** — the total average power including sidebands

**For FM:** constant amplitude, so PEP = P_avg = V_pk²/(2R). FM does not have a variable envelope; the power is constant regardless of modulation depth.

> [INFO] **14B1:** For a sine wave, V_rms = V_pk/√2 and P = V_rms²/R = V_pk²/(2R). PEP for SSB = V_pk(envelope)²/(2R) — the peak power in any single RF cycle. Average SSB power ≈ PEP − 4 to 6 dB. UK licence power limits are specified in PEP for SSB.

---

## §14C — SWR, Reflection Coefficient, and Return Loss (14C1)

### Reflection Coefficient

When a transmission line of characteristic impedance Z₀ is terminated by a load Z_L, the mismatch creates a reflected wave. The voltage reflection coefficient Γ (gamma) is:

> **Γ = (Z_L − Z₀) / (Z_L + Z₀)**

Γ is in general a complex number (magnitude and phase). For resistive loads, Γ is real. Its magnitude |Γ| ranges from 0 (perfect match) to 1 (total reflection — open or short circuit).

**Examples:**
- Z_L = 50 Ω, Z₀ = 50 Ω: Γ = 0/100 = **0** (perfect match)
- Z_L = 100 Ω, Z₀ = 50 Ω: Γ = 50/150 = **0.333**
- Z_L = 25 Ω, Z₀ = 50 Ω: Γ = −25/75 = **−0.333** (magnitude 0.333)
- Z_L = open circuit (∞): Γ = **+1**
- Z_L = short circuit (0): Γ = **−1**

### SWR from Γ

> **SWR = (1 + |Γ|) / (1 − |Γ|)**

> **|Γ| = (SWR − 1) / (SWR + 1)** (inverse)

| |Γ| | SWR | Description |
|-----|-----|-------------|
| 0 | 1.0 : 1 | Perfect match |
| 0.1 | 1.22 : 1 | Excellent |
| 0.2 | 1.5 : 1 | Good |
| 0.333 | 2.0 : 1 | Acceptable |
| 0.5 | 3.0 : 1 | Marginal |
| 1.0 | ∞ | Total reflection |

### Return Loss

Return loss (RL) is the magnitude of reflection expressed in dB — how much lower the reflected power is than the incident power:

> **RL (dB) = −20 × log₁₀|Γ| = 20 × log₁₀(1/|Γ|)**

A **higher return loss means a better match** (less power reflected).

| SWR | |Γ| | Return Loss |
|-----|-----|------------|
| 1.5 : 1 | 0.200 | 14 dB |
| 2.0 : 1 | 0.333 | 9.5 dB |
| 3.0 : 1 | 0.500 | 6 dB |
| 10.0 : 1 | 0.818 | 1.7 dB |

### Reflected Power

The fraction of incident power that is reflected:

> **P_reflected / P_incident = |Γ|²**

For SWR = 2.0:1, |Γ| = 0.333, P_reflected = 0.333² × P_incident = **11.1% of incident power reflected**.

### VSWR Calculator

<iframe src='/interactives/full-vswr-calculator.html' style='width:100%; height:650px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='VSWR and Return Loss Calculator'></iframe>

> [INFO] **14C1:** Γ = (Z_L − Z₀)/(Z_L + Z₀). SWR = (1+|Γ|)/(1−|Γ|). Return loss = −20 log|Γ| (dB, higher = better). Reflected power = |Γ|² × incident power. These three quantities express the same physical mismatch; an instrument may display any of them.

---

## §14D — RF Power Measurement: The Bruene Directional Coupler (14D1)

An SWR meter or RF power meter needs to separate the **forward** (incident) wave from the **reflected** (returning) wave simultaneously — sampling both without absorbing significant power from the main transmission line. The standard circuit for this is the **Bruene directional coupler** (also called a reflectometer or tandem match).

### Circuit Construction

The Bruene coupler contains two sensing elements placed in the main transmission line:

**1 — Current transformer:** A small toroidal transformer wound around (or with a one-turn primary formed by) the centre conductor of the coaxial line. The secondary winding produces a voltage proportional to the **current** flowing in the line.

**2 — Voltage tap:** A resistive or capacitive voltage divider connected between the centre conductor and outer braid. This produces a voltage proportional to the **voltage** on the line.

In the main line, the forward travelling wave has V = I × Z₀ (voltage and current in phase). The reflected wave has V = −I × Z₀ (current reversed). By adding and subtracting the two sampled quantities:

- **Forward sample:** V_coupler + I × Z₀ → gives only the forward wave voltage
- **Reflected sample:** V_coupler − I × Z₀ → gives only the reflected wave voltage

These two composite signals are passed through diode peak detectors to produce DC voltages proportional to the forward and reflected amplitudes. A meter connected to these DC voltages can be calibrated to read:
- Forward power (V_fwd²/R_coupler)
- Reflected power (V_ref²/R_coupler)
- SWR (from the ratio of the two)

### Directivity

**Directivity** is a measure of how well the coupler separates forward from reflected signals — how much of the "wrong" direction signal appears in each output. Expressed in dB: a 30 dB directivity means the rejected direction is 30 dB below the accepted direction. Poor directivity causes a reflected-power reading even when the line is perfectly matched (the forward power leaks into the reflected port).

### Practical Notes

- The Bruene coupler must be impedance-matched to the system Z₀ (typically 50 Ω) — a mismatch causes directivity errors
- The resistor in the voltage divider must be non-inductive and rated for the full RF voltage (not just RF power)
- Calibration: with a known 50 Ω dummy load (SWR = 1:1), the reflected meter should read zero — if it does not, the coupler's directivity is insufficient

> [INFO] **14D1:** A Bruene directional coupler uses a current transformer plus a voltage tap on the main transmission line. Adding and subtracting the two samples produces forward-only and reflected-only output ports. Diode peak detectors convert RF amplitude to DC for meter deflection. Directivity (dB) determines how cleanly forward and reflected waves are separated.

---

## §14E — The CRT Oscilloscope (14E1)

The cathode-ray tube (CRT) oscilloscope was the standard laboratory instrument for over 60 years. Understanding its construction explains the terminology that DSO oscilloscopes inherit.

### Electron Gun and Deflection

The CRT is an evacuated glass envelope containing:

**Electron gun:** a heated cathode emits electrons; an accelerating anode (at a high positive voltage) accelerates them into a narrow beam. A Wehnelt cylinder (control grid) modulates the beam intensity — this is the **brightness** control.

**Y deflection plates (vertical):** two horizontal plates above and below the beam path. A voltage applied between them deflects the beam vertically. The Y input of the oscilloscope amplifies the signal and drives these plates.

**X deflection plates (horizontal):** two vertical plates left and right of the beam path. Driven by the **timebase generator** — a linear ramp voltage that sweeps the beam from left to right at a controlled rate (set by the time/div control), then snaps back and repeats.

**Phosphor screen:** the beam strikes the phosphor, exciting it to glow. The persistence time of the phosphor is typically 10–100 ms — long enough for the eye to see a continuous waveform if the timebase repeats faster than flicker fusion (~25 Hz).

### Triggering

The timebase ramp must start at the same phase of the input waveform on each sweep, or the display is unstable (the waveform appears to scroll horizontally). The **trigger circuit** samples the input signal and starts the timebase sweep when the signal crosses a set threshold in the set direction (rising or falling edge). Without stable triggering, waveform measurements are impossible.

### Bandwidth and Probe Loading

CRT oscilloscopes specify a **bandwidth** — the frequency at which the Y amplifier's gain drops by 3 dB (0.707). Beyond this frequency, the displayed amplitude is attenuated. A 100 MHz bandwidth oscilloscope gives a correct reading at 100 MHz but shows only 70% of the true amplitude at that frequency.

The input impedance is typically 1 MΩ shunted by 20–30 pF. At RF, the 30 pF capacitance shunts the input significantly — at 14 MHz, X_C of 30 pF is 379 Ω, comparable to many RF circuit impedances. A 10:1 passive probe (10× voltage divider at the tip) raises the effective input impedance to 10 MΩ / 3 pF, drastically reducing loading.

> [INFO] **14E1:** CRT oscilloscope: electron gun → Y-plates (vertical deflection, proportional to signal voltage) → X-plates (horizontal deflection, driven by timebase sawtooth) → phosphor screen. Trigger circuit synchronises timebase start to input waveform phase. Bandwidth = −3 dB frequency of Y amplifier.

---

## §14F — The Digital Storage Oscilloscope (14F1)

The digital storage oscilloscope (DSO) replaces the CRT's analogue deflection system with an analogue-to-digital converter (ADC), digital memory, and a raster LCD display. This allows waveform capture, storage, mathematics, and far higher functionality than any analogue instrument.

### Acquisition Chain

**Attenuator/amplifier:** scales the input signal to the ADC's full-scale range (set by the volts/div control).

**ADC:** samples the analogue input at the **sample rate** (measured in samples per second, MS/s or GS/s). To accurately represent a sinewave, the Nyquist theorem requires at least 2 samples per cycle — in practice, 5–10 samples per cycle is recommended for a faithful waveform shape.

**Acquisition memory:** stores the ADC samples. Memory depth determines how many samples can be held — deeper memory allows slower time/div settings without reducing sample rate.

**Reconstruction and display:** the stored samples are re-drawn on the LCD as a waveform. At slow time/div settings, the DSO may show all samples; at fast time/div settings, it may need to use interpolation.

### Acquisition Modes

| Mode | Operation | Best used for |
|------|-----------|---------------|
| Normal | One triggered acquisition per screen refresh | Standard waveform viewing |
| Peak Detect | Captures the highest and lowest sample in each display pixel time | Catching narrow glitches that would be missed by normal sampling |
| Average | Averages N consecutive acquisitions | Reducing random noise on a repetitive signal |
| High-Res | Averages adjacent samples within one acquisition | Effectively increases ADC resolution on slow signals |
| Roll | Continuously scrolls waveform (no trigger required) | Monitoring slow signals |

### Digital Persistence

DSOs can simulate CRT phosphor persistence digitally by accumulating multiple acquisitions on screen using a colour map — frequently occurring amplitudes appear bright (warm colours); rare amplitudes appear dim (cool colours). This reveals amplitude variation over time that single-acquisition mode hides.

> [INFO] **14F1:** DSO acquisition chain: attenuator → ADC → memory → display. Sample rate ≥ 5× signal frequency for faithful waveform. Peak-detect mode catches narrow glitches. Average mode reduces noise on repetitive signals. Memory depth limits how long a capture at full sample rate can be.

---

## §14G — Viewing RF Signals: SSB, AM, and FM Envelopes (14G1)

The oscilloscope is the only instrument that shows the time-domain waveform of an RF signal. By connecting the oscilloscope after a detector or at the transmitter output (via an attenuator), the modulation envelope becomes visible.

### SSB Envelope

An SSB signal carries one sideband — the amplitude envelope of the RF carrier traces the instantaneous amplitude of the audio signal on that sideband. On an oscilloscope set to a slow enough time/div to see the modulation:

- **Silence:** no output, flat line (carrier suppressed)
- **Single audio tone:** constant-amplitude sine wave at the audio frequency, riding on the RF
- **Speech:** burst of RF activity that follows the speech waveform — high amplitude on vowels, low or zero between words

The **crest factor** of speech on SSB is typically 4:1 (12 dB). This means the peak RF voltage is 4× the RMS, and PEP = 16× the average power. Overdriving the SSB transmitter flattens the peaks (hard clipping), which produces a squared waveform with strong harmonics and a broad, splattered signal.

### AM Envelope

An AM signal consists of a carrier at constant frequency with both sidebands. The envelope amplitude varies with the audio:

**At 0% modulation:** constant-amplitude carrier (no modulation)

**At 100% modulation:** the envelope swings from 0 to 2× the unmodulated carrier amplitude.

**Modulation depth m** can be read directly from the oscilloscope envelope:

> **m = (V_max − V_min) / (V_max + V_min)**

where V_max is the peak of the envelope and V_min is the trough.

**Over-modulation (m > 1):** the negative peaks of the modulation drive the envelope to zero and below — the carrier cuts off, creating a distorted waveform with intermodulation products and splatter on adjacent channels.

### FM Envelope

An FM signal conveys information entirely in frequency variation — the carrier amplitude is constant. On an oscilloscope, an FM signal appears as a **constant-amplitude carrier with varying apparent frequency**. The envelope does not change with modulation. This makes oscilloscope examination useless for checking FM deviation — a spectrum analyser (viewing the sideband structure) or a deviation meter (FM demodulator + audio voltmeter) is needed instead.

### RF Oscilloscope Simulator

<iframe src='/interactives/full-oscilloscope-sim.html' style='width:100%; height:750px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='RF Oscilloscope Simulator — SSB, AM, FM Envelopes'></iframe>

> [INFO] **14G1:** SSB: variable-amplitude envelope tracking audio (zero amplitude in silence). AM: constant-carrier with amplitude-modulated envelope; m = (V_max−V_min)/(V_max+V_min). FM: constant-amplitude carrier; oscilloscope shows no modulation depth change — only frequency varies. Use spectrum analyser or deviation meter for FM deviation.

---

## §14H — The Frequency Counter: Reciprocal Counting (14H1)

A frequency counter measures signal frequency with high precision. Modern counters use the **reciprocal counting** technique, which gives constant percentage resolution across all frequencies.

### Simple Gate Counting

The simplest counter counts the number of input cycles N during a precisely timed gate interval T_gate:

> **f_measured = N / T_gate**

**Resolution:** 1 count in N counts → 1/T_gate Hz. With a 1-second gate: 1 Hz resolution at all frequencies. With a 10 ms gate: 100 Hz resolution.

**Problem:** at low frequencies, a 1-second gate gives poor temporal resolution — you cannot measure the frequency of a slow event quickly. And the resolution is constant in Hz, not in percentage — which means 1 Hz resolution is excellent at 100 MHz (0.000001%) but useless at 100 Hz (1%).

### Reciprocal Counting

The reciprocal counter measures the **period** of the input signal (time between edges), then computes frequency as 1/period:

1. Start an internal high-frequency clock (the **timebase oscillator**, typically at 10 MHz or 100 MHz)
2. Count clock pulses between successive zero-crossings of the input signal
3. Period T = (clock pulse count) / (timebase frequency)
4. Frequency f = 1/T

Since the timebase is typically 10–100 MHz, each input cycle is measured to ±1 timebase clock period — this gives the same **percentage resolution** at all input frequencies. A 100 MHz timebase measuring a 1 Hz signal: T ≈ 1 s, measured to ±10 ns → frequency resolution ≈ 10 parts per billion. The same timebase measuring a 100 MHz signal: T = 10 ns, measured to ±10 ns → 10% resolution in a single period, but averaging over multiple periods recovers precision.

In practice, reciprocal counters average many input cycles to achieve a specified resolution — typically 8–10 digits of resolution in a 0.1–1 s measurement time, independent of input frequency.

> [INFO] **14H1:** Simple gate counting resolution = 1/T_gate Hz (constant Hz, not %). Reciprocal counting measures period (clock pulses per input cycle) then takes 1/T — gives constant percentage resolution at all frequencies. Modern counters use reciprocal technique.

---

## §14I — Frequency Reference Oscillators: TCXO and OCXO (14I1)

The accuracy of any frequency counter, frequency synthesiser, or software-defined radio depends entirely on its frequency reference. Quartz crystal oscillators are stable, but crystal frequency drifts with temperature. Two techniques address this:

### TCXO — Temperature Compensated Crystal Oscillator

A TCXO contains a quartz crystal oscillator with a **thermistor-controlled voltage-variable capacitor (varicap)**. As temperature changes, the thermistor network drives the varicap to shift the oscillator frequency in the opposite direction — partially compensating the crystal's temperature coefficient.

**Stability:** ±0.5 to ±2.5 ppm over the operating temperature range (typically −40 to +85 °C). No warm-up time required — compensation is active immediately.

**Use cases:** handheld radios, portable test equipment, SDR receivers, GPS modules. Anywhere that a small, low-power, immediately accurate reference is needed.

### OCXO — Oven Controlled Crystal Oscillator

An OCXO encloses the crystal and oscillator circuit in a **temperature-controlled oven** — a miniature heated enclosure that holds the crystal at a constant temperature above ambient (typically +70 to +85 °C). The crystal then operates at a single fixed temperature, eliminating temperature variation entirely.

**Stability:** ±0.001 to ±0.01 ppm over the same temperature range — typically 100–1000× better than a TCXO.

**Drawbacks:**
- **Warm-up time:** the oven must reach its set temperature before the oscillator is at its specified stability — typically 3–5 minutes; some high-precision OCXOs require 30 minutes for full stability
- **Power consumption:** the heater requires constant power (typically 0.5–5 W)
- **Size and cost:** significantly larger and more expensive than TCXO

**Use cases:** bench frequency counters, laboratory signal generators, frequency standards, professional test equipment where ±0.01 ppm accuracy is required.

### Ageing and GPS Locking

All crystal oscillators exhibit long-term **ageing** — a slow monotonic drift in frequency as the crystal surface slowly changes. Ageing is typically 1–5 ppm per year for a TCXO, 0.01–0.1 ppm per year for an OCXO.

**GPS-disciplined oscillators (GPSDO):** use the precisely known frequency of GPS satellite signals to continuously discipline the local OCXO or TCXO output. This eliminates both temperature drift and ageing — the output tracks GPS time to ±100 ns. GPSDOs are used as frequency standards in amateur and professional settings.

> [INFO] **14I1:** TCXO: thermistor-compensated varicap corrects temperature drift — ±0.5–2.5 ppm, no warm-up. OCXO: heated oven holds crystal at constant temperature — ±0.001–0.01 ppm, requires 3–5 min warm-up and constant heater power. GPSDO: GPS-disciplined OCXO, eliminates ageing. Accuracy needed for measurements: counter calibration requires OCXO or GPSDO.

---

## §14J — The Dip Meter (14J1)

A **dip meter** (formerly called a grid-dip oscillator or GDO) is one of the simplest and most useful instruments in the amateur toolkit for characterising resonant circuits without a network analyser.

### Construction and Operation

The dip meter contains:
- A tuneable LC oscillator (the coil is exposed, accessible from the outside of the case)
- A meter indicating the oscillator's output amplitude
- A frequency-calibrated tuning scale

When the oscillator coil is held near a resonant circuit (antenna, inductor with a capacitor, cavity), energy couples between the dip meter coil and the external circuit by mutual inductance. When the oscillator frequency equals the resonant frequency of the external circuit, maximum energy transfers into the external circuit — and the oscillator's own amplitude **dips**. This dip is visible on the meter.

### Uses

**Finding antenna resonant frequency:** hold the dip meter coil near the feedpoint of a disconnected antenna. Tune for a dip — the frequency at the dip is the antenna's natural resonant frequency. Compare with the target frequency; adjust antenna length if needed.

**Measuring coil inductance:** connect a known capacitor in parallel with the coil under test. Hold the dip meter near, find the resonant frequency. Calculate L from: f₀ = 1/(2π√LC), rearranged as:

> **L = 1 / (4π² × f₀² × C)**

**Finding filter resonance:** check a finished low-pass or bandpass filter's self-resonance by coupling the dip meter near each section. Sharp resonances above the design cut-off indicate component self-resonances that can degrade stop-band performance.

**Stub tuning:** identify the resonant frequency of a coaxial stub (quarter-wave or half-wave).

### Precautions

- **Do not connect the dip meter to the circuit under test** — it couples by induction only; direct connection loads the circuit and changes its resonant frequency
- **Keep coupling loose:** excessive coupling broadens the dip and makes the frequency reading imprecise. Use the minimum coupling that gives a clear dip indication
- **Active circuits:** a powered amplifier near the dip meter can drive the oscillator off-frequency. Dip meter measurements should be made with circuits unpowered

> [INFO] **14J1:** The dip meter detects resonance by energy transfer — the oscillator amplitude dips when its frequency matches the external circuit's resonance. Uses: antenna resonant frequency, coil inductance (with known C), filter resonance. Couple loosely; do not connect directly; measure circuits with power off.

---

## §14K — The Spectrum Analyser: Span, RBW, VBW, and Markers (14K1)

The spectrum analyser displays signal amplitude versus frequency. Full-level treatment covers the key controls — resolution bandwidth, video bandwidth, and span — that determine what you can and cannot see, and how to make distortion measurements.

### Architecture: Swept Superheterodyne vs FFT

**Swept superheterodyne:** a local oscillator sweeps across the span, mixing each frequency in turn to a fixed intermediate frequency (IF). The IF filter (the **resolution bandwidth filter**) passes a narrow slice of the spectrum; its output is envelope-detected and plotted as one pixel column. Then the LO advances and the next frequency slice is measured. This is the architecture of most professional RF spectrum analysers up to many GHz.

**FFT analyser:** the input is digitised at high speed, and the FFT is computed to produce the spectrum. FFT analysers capture the entire span simultaneously and are common in SDR-based tools (e.g. GQRX waterfall). Their instantaneous bandwidth is limited by the ADC sample rate; their noise floor is limited by the ADC dynamic range.

### Resolution Bandwidth (RBW)

The **RBW** is the width of the IF filter — the narrowest frequency difference that can be resolved as two separate peaks on the display.

**Effects of RBW:**
- Narrow RBW: better frequency resolution; can separate closely spaced signals; longer sweep time (proportional to 1/RBW²); lower displayed noise floor
- Wide RBW: faster sweep; higher noise floor; adjacent signals merge into one

**RBW and noise floor:** the analyser's thermal noise floor rises as √(RBW) — doubling the RBW raises the noise floor by ~1.5 dB; the noise bandwidth is exactly equal to the RBW. For a given analyser noise figure and input termination temperature, the noise floor in dBm is:

> **Noise floor (dBm) ≈ −174 + NF + 10 × log₁₀(RBW_Hz)**

**Example:** 10 dB noise figure, 1 kHz RBW: −174 + 10 + 10×3 = −134 dBm noise floor.

### Video Bandwidth (VBW)

The **VBW** is a low-pass filter applied to the detected amplitude signal (the video) before it is drawn on screen. It acts as a noise-smoothing filter:
- Wide VBW (VBW ≥ RBW): fast response; noise appears as a noisy trace
- Narrow VBW (VBW < RBW): smooths the noise trace; individual noise peaks are averaged; makes small signals visible against the noise floor

**Rule of thumb:** set VBW = RBW/3 to visually smooth noise without losing signal peaks. Use VBW ≪ RBW to find weak signals buried in noise.

### Span

The **span** is the total frequency range displayed. Setting span = 10 × RBW allows only 10 resolvable points on screen — insufficient for most measurements. Setting span/RBW = 1000–10,000 is typical for clear spectrum displays.

### Reference Level

The **reference level** is the amplitude corresponding to the top graticule line, in dBm. Set it just above the highest expected signal to keep the signal in the top quarter of the display — this maximises the dynamic range below the signal.

### Marker Functions

| Marker mode | Function |
|-------------|---------|
| Normal | Place marker at a frequency; read amplitude and frequency |
| Peak | Automatically finds and marks the highest peak |
| Delta | Second marker; reads amplitude and frequency difference between two markers |
| Noise marker | Reads noise density (dBm/Hz) — useful for noise floor and noise figure measurements |
| Band power | Integrates total power within a frequency band |

### Harmonic Distortion Measurement

To measure harmonic distortion from a transmitter:
1. Set span to cover the fundamental and at least 3 harmonics (e.g. 0–100 MHz for a 20 m transmitter)
2. Set RBW narrow enough to resolve adjacent harmonics (1–10 kHz is typical)
3. Set reference level 10 dB above the fundamental
4. Transmit into a dummy load; use a calibrated attenuator or directional coupler at the analyser input
5. Use delta markers: set marker 1 on the fundamental, marker 2 on the harmonic; the delta dB reading is the harmonic level relative to the fundamental

> **Licence requirement:** All Full licence harmonics and other spurious emissions must be at least 40 dB below the fundamental (for transmitters ≤25 W) or as specified in the licence for higher powers.

> [INFO] **14K1:** RBW: resolution — narrower gives better frequency separation and lower noise floor, slower sweep. VBW: smoothing — narrower reduces visible noise. Noise floor (dBm) = −174 + NF + 10log₁₀(RBW_Hz). Harmonic measurement: TX into dummy load via attenuator; delta marker gives harmonic level relative to fundamental.

---

## §14L — The Dummy Load (14L1)

A dummy load is a **50 Ω non-inductive resistive termination** that absorbs all RF power as heat. It is the essential companion of all transmitter testing — it prevents radiation and provides a stable, known load.

### RF Power Dissipation

Power dissipated in the dummy load resistor:

> **P = V_rms² / R = I_rms² × R = V_pk² / (2R)**

The **peak RF current** in the load at a given power:

> **I_pk = √(2P / R)**

**Example:** 400 W into 50 Ω:

I_pk = √(2 × 400 / 50) = √16 = **4 A peak** (2.83 A RMS)

Peak RF voltage: V_pk = I_pk × R = 4 × 50 = **200 V peak** (141 V RMS)

These are significant figures — the dummy load must be rated for both the RMS power and the peak voltage. A carbon-composition resistor rated for 100 W continuous can handle the 400 W PEP of an SSB signal (with its low average power) but will overheat under sustained CW at 400 W.

### Construction

**Wirewound resistors:** common for QRP dummy loads. The winding creates inductance — at VHF and above, the inductance becomes significant and the impedance is no longer purely resistive. Suitable for HF only.

**Metal film or carbon film non-inductive resistors:** the resistive element has negligible inductance. Multiple 200 Ω or 250 Ω resistors in parallel give 50 Ω and 5–10 W per resistor — scale the number of resistors for the required power.

**RF dummy load with oil cooling:** high-power loads (1 kW+) use non-inductive resistors in a sealed metal container filled with transformer oil. The oil conducts heat from the resistor to the container walls; the container radiates to the air. A 1 kW oil-cooled load can be operated for typically 30–60 seconds of CW before the oil temperature becomes excessive.

**SWR of a dummy load:** a good dummy load should present SWR < 1.1:1 across the full HF band and ideally to 144 MHz. Check with an antenna analyser — a poorly constructed dummy load with long resistor leads can have SWR > 1.5:1 at 144 MHz.

> [INFO] **14L1:** Dummy load: 50 Ω non-reactive, absorbs RF as heat. I_pk = √(2P/R). V_pk = I_pk × R. Wirewound resistors inductive at VHF — use non-inductive film resistors for broadband loads. Oil-cooled loads handle high continuous power. Always verify SWR across the operating frequency range.

---

## §14M — The SWR Meter in Practice (14M1)

Building on the Bruene coupler theory (§14D), the practical SWR meter has several important placement and interpretation considerations.

### Placement and What Each Position Tells You

| Position | Reading | What it reveals |
|----------|---------|-----------------|
| TX output → ATU input | SWR as seen by the PA | Whether the PA is protected from mismatch |
| ATU output → feeder | True feeder + antenna SWR | What the ATU is actually matching |
| Remote (antenna feedpoint) | True antenna SWR only | Feeder not included |

> [WARNING] An SWR meter placed at the transmitter output when an ATU is in circuit will always read close to 1:1 — the ATU transforms the antenna mismatch to match the PA's required load. This confirms the PA is protected but reveals nothing about the antenna. Place the SWR meter between the ATU and the feeder to measure the antenna system's true SWR.

### Power Calibration

SWR meters are calibrated for a specific system impedance (50 Ω in most amateur systems). Using a 50 Ω meter in a 75 Ω system introduces errors: the bridge balance condition is incorrect, and both forward and reflected readings are wrong. Ensure the SWR meter's rated Z₀ matches the system.

### The Cross-Pointer Power Meter

A **cross-pointer meter** (also called a watt meter) uses two meters — one for forward power, one for reflected power — both calibrated in watts. This gives more intuitive reading than SWR: you see directly that the transmitter is delivering 100 W forward and 5 W is being reflected. SWR = √(100/5) × something... in practice, read the SWR from the reflected/forward ratio scale.

> [INFO] **14M1:** SWR meter between PA and ATU: protects PA, does not show antenna SWR. Between ATU and feeder: shows true antenna system SWR — the diagnostic position. An ATU hides antenna mismatch from the PA; the SWR meter must be on the antenna side to reveal the actual mismatch.

---

## §14N — The Field Strength Meter (14N1)

A field strength meter measures the **relative or absolute electric field strength** (V/m) or magnetic field strength (A/m) in the vicinity of an antenna system. It is used for pattern measurement, proximity checks, and EMF compliance assessment.

### Construction

The simplest field strength meter consists of:

- A **dipole antenna element** (or a short monopole rod) proportioned for the frequency of interest
- A **diode peak detector** that converts the RF voltage on the antenna to a DC current
- A **microammeter** or milliammeter calibrated in relative field strength

The detector output is proportional to E² (since power density ∝ E²), and therefore the meter deflection ∝ E². For a linear meter scale calibrated in E (V/m), the scale would be square-root compressed — a half-scale deflection represents E/√2, not E/2.

More sophisticated instruments use a calibrated antenna element of known effective height h_eff, allowing conversion from antenna terminal voltage V_a to field strength E:

> **E (V/m) = V_a / h_eff**

### Uses

**Antenna pattern measurement:** slowly rotate the antenna under test (or walk around it) while monitoring the field strength meter. The meter reads relative field strength at each azimuth angle, mapping the antenna's horizontal radiation pattern.

**Proximity check (EMF compliance):** monitor field strength at increasing distance from the antenna. Compare against the ICNIRP reference levels for occupational or public exposure (for amateur radio: typically 28 V/m at HF for public exposure). The field strength formula (§13D) gives an estimate; the field strength meter provides a direct measurement.

**Transmitter output relative check:** with a fixed antenna in the near field, the meter indicates relative RF output power. Useful for comparing adjustments (ATU tuning, antenna length) without a calibrated power meter.

**Feeder radiation check:** move the field strength meter along the coaxial feeder. Any significant reading indicates CM current on the feeder outer braid — a braid-breaker choke is needed (§13G).

### Limitations

An uncalibrated field strength meter gives only **relative** readings. Converting to absolute V/m requires:
- A calibrated antenna element with known h_eff or gain
- A known reference distance and power level for in-situ calibration
- Account for near-field effects if measurements are within λ/2π of the antenna

For formal EMF compliance assessment, calibrated equipment and the Ofcom EMF calculation spreadsheet should be used in preference to a simple diode-and-meter instrument.

> [INFO] **14N1:** Field strength meter: dipole + diode + meter. Output ∝ E². Calibrated instruments convert antenna terminal voltage to E(V/m) via h_eff. Uses: antenna pattern, EMF proximity, feeder CM current detection. Uncalibrated instruments give relative readings only — use Ofcom EMF spreadsheet and calibrated instrumentation for compliance measurements.

---

## §14 Self-Check

**Q1:** A voltmeter with 1 MΩ input impedance measures a node with a Thevenin resistance of 100 kΩ. What is the loading error percentage?

> **A:** Error fraction = R_c/(R_m + R_c) = 100,000/(1,000,000 + 100,000) = 100,000/1,100,000 ≈ **9.1%**. The measured voltage will be approximately 9% below the true open-circuit voltage. A 10 MΩ instrument would reduce this to 0.99%.

---

**Q2:** An SSB transmitter produces a peak RF voltage of 200 V on a 50 Ω load at the loudest speech peak. What is the PEP?

> **A:** PEP = V_pk² / (2 × R) = 200² / (2 × 50) = 40,000 / 100 = **400 W PEP**.

---

**Q3:** An antenna analyser measures Z_L = 150 Ω on a 50 Ω system. What is |Γ|, the SWR, and the return loss?

> **A:** Γ = (150 − 50)/(150 + 50) = 100/200 = **0.5**. SWR = (1 + 0.5)/(1 − 0.5) = 1.5/0.5 = **3.0:1**. Return loss = −20 × log₁₀(0.5) = −20 × (−0.301) = **6.0 dB**.

---

**Q4:** A spectrum analyser has a noise figure of 15 dB and is set to a 3 kHz resolution bandwidth. What is the approximate noise floor in dBm?

> **A:** Noise floor = −174 + NF + 10 × log₁₀(RBW_Hz) = −174 + 15 + 10 × log₁₀(3000) = −174 + 15 + 34.8 = **−124.2 dBm ≈ −124 dBm**.

---

**Q5:** What is the peak RF current in a 50 Ω dummy load when 200 W is dissipated?

> **A:** I_pk = √(2P/R) = √(2 × 200/50) = √8 = **2.83 A peak** (2.0 A RMS).

---

**Q6:** A dip meter finds resonance at 14.2 MHz when coupled to an unknown inductor in parallel with a known 100 pF capacitor. What is the inductor's value?

> **A:** f₀ = 1/(2π√LC), so L = 1/(4π² × f₀² × C) = 1/(4π² × (14.2×10⁶)² × 100×10⁻¹²) = 1/(4 × 9.87 × 2.016×10¹⁴ × 10⁻¹⁰) = 1/(7.954×10⁵) ≈ **1.26 μH**.

---

*Content derived from RSGB Full Licence Manual (G0HIQ) Ch. 14. Cross-reference: Intermediate §9 measurements, Full §13 EMC (spectrum analyser), Full §4 (SWR/VSWR theory), Full §8 (spurious emission testing).*
