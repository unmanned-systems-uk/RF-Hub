# Section 9: Measurements & Test Equipment

<!-- Exam weight: ~7% (~3/46 questions) -->
<!-- Sub-sections: 9A, 9B, 9C, 9D, 9E, 9F, 9G, 9H -->
<!-- Syllabus refs: 9A1, 9A2, 9A3, 9A5, 9B1, 9C1, 9D1, 9E1, 9E2, 9E3, 9E4 -->
<!-- RSGB source: Chapter 14 Measurements (pp.65–66) -->

If you cannot measure it, you cannot know whether it is working. Test equipment is what turns "I think the antenna is roughly matched" into "the SWR is 1.4:1 at 14.150 MHz". This section covers the instruments a radio amateur uses — multimeters, oscilloscopes, signal generators, SWR meters, spectrum analysers, and antenna analysers — and how to connect and read them correctly.

Many cross-references apply: §4B for SWR interpretation, §6 for spectrum analyser use in EMC hunting, §2 for the underlying voltage/current/resistance concepts, and the sideband deep-dives for advanced RF measurement with the RSA5065N.

---

## 9A — Introduction to Test Equipment (9A2)

### Why Measure?

Test equipment serves four purposes:
1. **Verify a design** — does the circuit do what was intended before it is connected to a transceiver?
2. **Diagnose faults** — where in the signal chain does the signal degrade or disappear?
3. **Prove compliance** — is the transmitter within its harmonic and power limits?
4. **Calibrate** — is the instrument itself, or the rig's built-in meter, reading correctly?

### Categories of Instrument

| Category | Instruments | Measures |
|---|---|---|
| DC/AC electrical | Multimeter, LCR meter | Voltage, current, resistance, inductance, capacitance |
| RF | SWR meter, power meter, spectrum analyser, antenna analyser | Power, SWR, impedance, frequency, spectral content |
| Waveform | Oscilloscope | Voltage vs time |
| Source | Signal generator, function generator | Injects known signals for testing |

### Analogue vs Digital Instruments (9A2)

Both types appear in the exam, and both remain in common use.

**Analogue meters** (moving-coil):
- A needle deflects across a printed scale, driven by current through a coil in a magnetic field
- **Advantage:** easy to follow an unstable or varying reading — the eye can track the needle's movement smoothly
- **Advantage:** excellent for peaking and nulling adjustments (ATU tuning, filter peaking) where you want maximum or minimum deflection, not an exact reading
- **Disadvantage:** harder to read to a precise value; parallax error if viewed from an angle; requires the probes to match the polarity marked on the scale
- Analogue ohmmeters require **zeroing** before use — connect the probes together and adjust a knob until the needle reads exactly zero resistance

**Digital meters (DMM — Digital Multimeter):**
- Reading displayed as digits on an LCD or LED display
- **Advantage:** easy to read a precise value; many decimal places; auto-ranging types select the best scale automatically
- **Advantage:** much higher input impedance than analogue meters, so they draw negligible current from the circuit under test — less loading
- **Disadvantage:** update rate can be slow (especially on cheap meters), making it difficult to track a rapidly changing value
- **Disadvantage:** some DMMs are confused by non-sinusoidal AC waveforms — check that the AC range is specified for the waveform type you are measuring

> [INFO] **9A2:** Analogue meters are better for peaking/tuning adjustments where you want to see direction of change. Digital meters are better for precise static readings and have less effect on the circuit being measured.

---

## 9B — The Multimeter (9A1, 9A3, 9A5)

The multimeter (also called a VOM — Volt-Ohm-Milliammeter — or DMM) is the most-used instrument in any shack or workshop. For the Intermediate licence, three measurements matter (9A5):

1. **Voltage** (potential difference)
2. **Current**
3. **Resistance**

### Probes

A multimeter has two probes:
- **Black probe** — negative / common / ground (marked **COM**)
- **Red probe** — positive / live (marked **V/Ω/mA** or similar)

Probe leads must be well insulated and have flexible leads. Good probes expose only a small metal tip — enough to make contact, not enough to accidentally touch adjacent conductors. Never touch probe tips with your fingers while taking measurements — at best you disturb the reading; at worst the circuit may be live.

> [WARNING] **Never let the two probe tips touch each other** while connected to a circuit. This creates a short circuit. On a powered circuit it can cause circuit damage or a blown multimeter fuse; on a mains circuit it is dangerous.

> [INFO] **9A3:** Multimeter probes must be insulated with only a small exposed metal tip. The black probe connects to COM (ground); the red probe to the V/Ω/mA terminal. Always select the correct function and range **before** connecting probes.

### Before Connecting — Range and Mode

**Always set the correct function and range before connecting the probes.** An incorrect setting can damage the meter or the circuit:

- Connecting a meter set to **current (ammeter) mode** across a voltage source effectively short-circuits it through the meter's near-zero internal resistance. This blows the meter's internal fuse at minimum, and may damage the circuit.
- Connecting a meter set to **voltage (voltmeter) mode** in series in a circuit (where a current measurement was intended) produces only a tiny, misleading reading and may confuse diagnosis.

**Range selection:**
- **Manual ranging:** start at the **highest range** available, connect, read, then switch to a lower range if needed for better precision. Never start on a low range with an unknown input — an analogue meter's needle will crash into the end-stop.
- **Auto-ranging:** the meter selects the best range automatically. Simply connect and read.

### Measuring Voltage (9A1)

Voltage is always measured **across** (in parallel with) the component or circuit element of interest:

<img src="/assets/images/study/section-9/voltmeter-parallel.svg" alt="Voltmeter connected in parallel with R2: battery Vb drives current through R1 and R2 in series; voltmeter V is connected across R2 at the junction nodes" style="max-width:100%; display:block; margin:1rem 0;">

Voltmeters are designed to have **very high input resistance** (typically 10 MΩ on a DMM). This means only a tiny current flows through the meter — the circuit under test is barely disturbed by the measurement.

> [INFO] **9A1:** Voltage is measured with the meter in **parallel** with the component. The voltmeter's high impedance means it takes negligible current from the circuit.

### Measuring Current (9A1)

Current is measured by placing the meter **in series** in the circuit — the current to be measured must flow *through* the meter:

<img src="/assets/images/study/section-9/ammeter-series.svg" alt="Ammeter inserted in series: battery Vb drives current through R1, then ammeter A (circuit broken and meter inserted), then R2 back to battery" style="max-width:100%; display:block; margin:1rem 0;">

In current mode, the ammeter has **very low internal resistance** — it acts like a piece of wire. The current is the same at every point in a series circuit (Fig 14.2 in RSGB Ch.14 — both ammeters A₁ and A₂ read identically).

> [WARNING] **9A1:** Never connect an ammeter in parallel across a component or voltage source. The ammeter's near-zero resistance creates a near-short circuit. At best, the meter's internal fuse blows; at worst the circuit and/or the meter are damaged.

Note that many multimeters have a **separate input terminal** for current measurements (often labelled `A` or `mA`), distinct from the voltage/resistance terminal. Check the meter's markings before connecting — using the wrong terminal prevents the internal current shunt from operating correctly.

### Measuring Power with a Voltmeter and Ammeter

If you need to measure DC power consumed by a load:

```
P (watts) = V (volts) × I (amps)
```

Connect a voltmeter **across the load** and an ammeter **in series with the load** simultaneously. Read both, multiply.

Example: voltmeter reads 12.6 V, ammeter reads 3.5 A → power = 12.6 × 3.5 = **44.1 W**.

> [INFO] Note that this method has a small inherent error because the voltmeter draws a tiny current (and the ammeter has a small voltage drop across it). At Intermediate level this is not examined — it is deferred to Full Licence.

### Measuring Resistance (9A5)

Set the meter to resistance (Ω) mode. Connect the probes across the component to be measured — with the component **removed from the circuit** or at least with the circuit de-energised.

- **Auto-ranging DMM:** displays the resistance to the best resolution automatically
- **Manual ranging DMM/analogue:** start at highest resistance range, work down
- **Analogue meter — zero first:** connect the probes together and adjust the zero-control until the needle reads exactly 0 Ω (full-scale deflection on the analogue resistance scale, which runs right to left)

> [WARNING] Never measure resistance in a live (powered) circuit. The meter applies its own small internal voltage to measure resistance; an external voltage will give a wrong reading and may damage the meter.

### Continuity Testing

Most multimeters have a **continuity** function — the meter emits an audible beep when the probes are connected to a near-zero resistance (a continuous conducting path). Uses:
- Checking fuses (beep = good; silence = blown)
- Checking lamp filaments
- Tracing wires and identifying which wire is which at the far end of a cable loom
- Verifying solder joints and connector pins

---

## 9C — The Oscilloscope (9C1)

An oscilloscope displays **voltage versus time** — it draws the waveform on screen as it changes. This is the only test instrument that shows you the shape of a signal.

### Key Controls

| Control | What it does |
|---|---|
| **Vertical scale (V/div)** | Sets how many volts each vertical division of the graticule represents |
| **Horizontal scale (time/div)** | Sets how many seconds (or ms/µs/ns) each horizontal division represents |
| **Trigger** | Tells the scope when to start drawing — usually at a defined voltage level on a rising or falling edge |
| **Coupling** | **DC** = displays signal including any DC offset; **AC** = blocks the DC component, shows only the AC waveform; **GND** = disconnects input and shows where the 0 V reference line sits |

### Reading Waveforms

**Peak-to-peak voltage:**
```
Vpp = (number of vertical divisions peak-to-peak) × (V/div setting)
Example: 4 divisions × 2 V/div = 8 Vpp
```

**Period and frequency:**
```
T (seconds) = (number of horizontal divisions per complete cycle) × (time/div setting)
f (Hz) = 1 ÷ T

Example: one complete cycle spans 5 divisions; time/div = 1 ms
T = 5 × 1 ms = 5 ms = 0.005 s
f = 1 ÷ 0.005 = 200 Hz
```

> [INFO] **9C1:** The oscilloscope shows waveform shape, period, and amplitude. It is the essential tool for checking modulation depth, waveform distortion, oscillator purity, and audio signal paths.

### Amateur Radio Uses

- **Modulation depth** — check AM or FM carrier waveform for overmodulation
- **CW key shaping** — verify the transmitter has a correctly shaped key envelope (no hard clicks)
- **Oscillator output** — check the waveform of a VFO or crystal oscillator
- **Audio chain** — trace audio from microphone preamp through to the modulator

<iframe src='/interactives/virtual-oscilloscope.html' style='width:100%; height:820px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='Virtual Oscilloscope'></iframe>

---

## 9D — Signal Generators (9D1)

A signal generator produces a **known frequency at a known amplitude** — it is the "known input" against which you test a receiver, amplifier, or filter.

### Types

| Type | Frequency range | Primary use |
|---|---|---|
| **Audio signal generator (AF)** | ~10 Hz to 100 kHz | Testing audio stages, microphone pre-amps, tone generation |
| **RF signal generator** | ~100 kHz to several GHz | Receiver sensitivity, alignment, filter response |
| **Function generator** | AF to several MHz | Multiple waveform shapes (sine, square, triangle, pulse) for general circuit testing |

### Receiver Sensitivity Testing

Inject a signal from an RF signal generator at a known frequency and level:
1. Connect generator output through an attenuator to the receiver antenna input
2. Set generator to the frequency and level to be tested
3. Measure receiver output (S-meter reading, audio level, or SNR)
4. Reduce generator level until the receiver produces a specified SNR (commonly 10 dB for the "minimum discernible signal")

This gives the receiver's sensitivity in dBm or µV at a specified point.

### Filter and Amplifier Testing

Sweep the generator frequency across the band of interest while reading the output — this plots the **frequency response** of the device under test. A bandpass filter will show a peak at the centre frequency; a low-pass filter will show a roll-off above its corner frequency.

> [INFO] **9D1:** A signal generator produces a known frequency and amplitude for testing. An RF signal generator is used for receiver sensitivity testing and filter alignment. Always include an attenuator between the generator output and the receiver input to reach the low signal levels a receiver expects.

---

## 9E — SWR Meters and Power Meters (9B1, cross-ref §4B)

### How an SWR Meter Works

An SWR meter contains a **directional coupler** — a component that samples a small fraction of both the forward power (travelling toward the antenna) and the reflected power (returning from the antenna). From these two values, the meter calculates SWR.

```
SWR meter internal structure:

  TX ─── [forward coupler] ─── [reverse coupler] ─── Antenna
                  │                       │
           Forward power            Reflected power
           (sampled here)           (sampled here)
                  └───────────────────────┘
                       Processed to display SWR
```

The maths behind SWR is covered fully in §4B (Γ, return loss, standing wave ratio). Here the practical focus is correct use.

### Placement (9B1)

An SWR meter must be placed **between the transmitter output and the first matching network (ATU/AMU)**, or between the ATU and the antenna feedpoint:

| Placement | What it reads |
|---|---|
| Between TX and ATU | SWR as seen by the transmitter output — useful for protecting the PA |
| Between ATU and feeder | True antenna system SWR — what the ATU is actually matching |
| At the far end of a long feeder | True antenna SWR — only practical with a remote analyser |

> [WARNING] An SWR meter placed after the ATU will read close to 1:1 even if the antenna itself is badly mismatched — the ATU is hiding the mismatch. This tells you the PA is protected but tells you nothing about the antenna's actual impedance. See §4E.

> [INFO] **9B1:** The SWR meter uses a directional coupler to sample forward and reflected power separately. Placement between TX and ATU protects the PA; placement between ATU and feeder reveals the true antenna SWR. Both positions are valid — the purpose determines which is correct.

### Power Meters

A power meter measures the actual RF power being delivered to a load. For transmitter testing, the load is a **dummy load** (§9H). The meter must be:
- Rated for at least the maximum power you will apply (use a meter rated for 150 W minimum when testing a 100 W transmitter — allow headroom)
- Matched to 50 Ω (standard amateur feeder impedance)
- Calibrated for the frequency range in use

Power can vary between modes:
- **CW:** constant carrier, easy to read
- **FM:** constant carrier at full deviation — use a fixed audio tone to maintain constant deviation
- **SSB:** varies with speech; use a fixed audio tone (1 kHz sine wave) for a steady reading

---

## 9F — Spectrum Analysers (9E1, 9E2)

### What a Spectrum Analyser Shows

A spectrum analyser displays **signal amplitude versus frequency**. Where an oscilloscope shows voltage against time, a spectrum analyser shows what frequencies are present in a signal and how strong each is.

```
dBm |
 0  |     ██
-10 |     ██
-20 |     ██    █
-30 |     ██    ██           █
-40 |     ██    ██           ██
    └─────────────────────────────── MHz
          f   2f  3f              (fundamental + harmonics visible)
```

The vertical axis is **dBm** (power relative to 1 mW). The horizontal axis is **frequency**. A wider view ("span") shows more of the spectrum at once; a narrower span shows more detail around a particular frequency.

### Amateur Radio Uses

| Use | How |
|---|---|
| **Harmonic check (licence condition)** | Transmit into dummy load; look for signals at 2f, 3f, etc. on the spectrum display |
| **Spurious emission hunt** | Identify any signal appearing where it should not be |
| **EMC debugging (cross-ref §6)** | Identify the frequency of a noise source to determine its likely origin |
| **Filter response** | Inject a sweep from a signal generator, monitor the output on the spectrum analyser |

### Modern Amateur Equipment

Spectrum analysers range from inexpensive to extremely expensive:

| Type | Examples | Capability |
|---|---|---|
| SDR-based | RTL-SDR dongle + SDR# software | ~24 MHz to 1.7 GHz; limited dynamic range; adequate for general HF/VHF hunting |
| Dedicated hobbyist | tinySA, tinySA Ultra | 100 kHz to 350 MHz / 960 MHz; better calibration; small and portable |
| Mid-range lab | Rigol DSA815 | 9 kHz to 1.5 GHz; lab-grade dynamic range; suitable for licence-condition harmonic checks |
| High-end | Rigol RSA5065N, Keysight | 9 kHz to 6.5 GHz; real-time spectrum analysis, vector signal analysis |

*See the sideband deep-dives at `/pages/sidebands/vswr-bridge-measurement.html` and `/pages/blog/understanding-s11.html` for RSA5065N-specific procedures.*

---

## 9G — Dip Meters and Antenna Analysers (9A2)

### The Dip Meter

A dip meter (or grid-dip oscillator) is a tuneable LC oscillator with an exposed coil. When held near an external tuned circuit (an antenna, an inductor, a coax stub), energy couples from the oscillator into the external circuit. When the oscillator frequency matches the resonant frequency of the external circuit, maximum energy transfers — and the oscillator's own amplitude **dips**, indicated by a meter built into the instrument.

Use: find the resonant frequency of an antenna or tuned circuit **without connecting test leads** — purely by proximity coupling.

The original **grid-dip meter** used a valve (vacuum tube) and is now largely found only in vintage collections. Modern equivalents are transistor-based or replaced entirely by antenna analysers.

### The Antenna Analyser

A modern antenna analyser (RigExpert AA-series, Nano VNA, MFJ-259) is the practical replacement for the dip meter in the shack. It sweeps a range of frequencies and simultaneously measures:
- **SWR** at each frequency
- **Impedance** (magnitude and phase, or R and X components)
- **Resonant frequency** (where X = 0)

Results are displayed as a plot vs frequency. This gives far more information than a dip meter — not just where the antenna is resonant, but how well-matched it is and whether it needs inductive or capacitive correction.

*See §4B and §4E for how to interpret SWR and impedance plots.*

**See also:** [Understanding S11 — return loss, Smith chart, and VNA interpretation](/pages/blog/understanding-s11.html){:target="_blank"} — a deep dive with measured data from a Rigol RSA5065N, walking through Log Magnitude, SWR, and Smith Chart formats for real LTE antenna measurements. Directly applicable to interpreting output from a Nano VNA or any antenna analyser.

---

## 9H — Test Setups and Procedures (9E1–9E4)

### Transmitter Test Setup

The basic transmitter test uses a **dummy load** — a 50 Ω non-inductive resistive load that absorbs all RF power as heat. The dummy load prevents radiation during testing and provides a stable, known load impedance:

<img src="/assets/images/study/section-9/fig-9-1-tx-test-setup.svg" alt="TX test setup block diagram: transmitter feeds SWR meter and dummy load; directional coupler taps a sample to the spectrum analyser or power meter" width="600" height="280" loading="lazy">

Key points:
- The dummy load must be **rated for the full transmit power** (plus headroom) — a 100 W TX needs at least a 100 W rated load
- The dummy load must be rated for the **frequency range** in use — a resistive dummy load works at any amateur frequency; a TV antenna terminator or DC resistor does not
- Never transmit into an open (unconnected) antenna port — the resulting very high SWR stresses the PA

### Receiver Test Setup

<img src="/assets/images/study/section-9/fig-9-2-rx-sensitivity-test.svg" alt="Receiver sensitivity test setup: RF signal generator feeds through calibrated attenuators to the receiver antenna input, providing a known signal level" width="600" height="180" loading="lazy">

- The **attenuator** pads down the generator output to the very low levels a receiver input expects (typically µV or dBm range)
- The attenuator also presents a stable 50 Ω source impedance to the receiver
- Measure the receiver's output: S-meter reading, audio level into a voltmeter, or an SNR measurement

### Common Measurement Errors

| Error | Consequence | Prevention |
|---|---|---|
| Wrong function or range selected before connecting | Meter or circuit damaged | Always set function/range first |
| Ammeter connected in parallel across voltage | Near-short circuit; blown fuse | Connect ammeters IN SERIES only |
| SWR meter placed after the ATU | Reads 1:1 even with badly mismatched antenna | Place between TX and ATU for PA protection; between ATU and feeder for true antenna SWR |
| Power meter range too low | Meter damaged; incorrect reading | Use a meter rated above maximum expected power |
| Measuring resistance in a live circuit | Wrong reading; possible meter damage | De-energise and discharge capacitors before measuring resistance |
| Analogue ohmmeter not zeroed | Wrong reading | Always zero the ohmmeter before use |

---

## 9I — Safety During Testing (cross-ref §8)

- **Live circuits (§8B):** Follow the one-hand rule and never work alone when fault-finding with live equipment powered on. Keep a multimeter set on voltage range ready to verify de-energised before touching.
- **RF exposure (§8C / §1G):** When transmitting for tests, even into a dummy load, keep away from the feeder and dummy load — they carry RF current and can cause burns. Use minimum power necessary for the test.
- **Capacitor discharge (§8B):** Power supplies discharged fully before internal measurements. Verify with a voltmeter before touching.
- **Battery charging (§8E):** If using portable equipment on battery, ensure correct charging — see §8E for lead-acid and lithium safety.
- **Spectrum analyser input limits:** Never connect a transmitter directly to a spectrum analyser input. Use a directional coupler or high-power attenuator rated for the transmit power — input stages on analysers are fragile and destroyed instantly by transmit-level power.

> [INFO] **9E1, 9E2, 9E3, 9E4:** Standard test setups — transmitter: TX → SWR meter → dummy load (+ spectrum analyser via directional coupler); receiver: RF signal generator → attenuator → receiver input. **9E1:** always use a dummy load for transmitter tests. **9E2:** use an attenuator between signal generator and receiver. **9E3:** never connect a spectrum analyser directly to TX output. **9E4:** common errors include wrong meter function, ammeter in parallel, SWR meter placed after the ATU, and resistance measured in a live circuit.

> [WARNING] A spectrum analyser input is typically rated at **+20 to +30 dBm maximum** (100 mW to 1 W). A 100 W transmitter delivers +50 dBm. Connecting directly will destroy the analyser's input immediately and permanently.

---

## 9K — Construction Basics (9C1, 9D1, 9E1–9E4)

### Resistor Marking — BS 1852 Letter Code (9C1)

Component values on schematics and PCB silkscreens often use the **BS 1852** letter-code notation rather than decimal numbers. The letter replaces the decimal point and simultaneously indicates the multiplier:

| Letter | Multiplier | Example | Meaning |
|---|---|---|---|
| R | × 1 (ohms) | R47 | 0.47 Ω |
| R | × 1 (ohms) | 4R7 | 4.7 Ω |
| K | × 1000 (kilohms) | 5K6 | 5.6 kΩ |
| M | × 1 000 000 (megohms) | 2M2 | 2.2 MΩ |

**Why use it?** A printed decimal point can be misread if the ink is smudged or the component is small. The letter is unambiguous even on a heavily worn PCB.

Resistors are manufactured in **preferred value series** (E12, E24, E96). The E12 series has 12 values per decade:

```
1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2
```

Each multiplied by 10, 100, 1000 etc. to cover the full range. You cannot buy exactly 4.0 kΩ in the E12 series — the nearest values are 3.9 kΩ and 4.7 kΩ. Circuit design accounts for this.

> [INFO] **9C1 — BS 1852:** The letter replaces the decimal point and indicates multiplier. R47 = 0.47 Ω, 4R7 = 4.7 Ω, 5K6 = 5.6 kΩ, 2M2 = 2.2 MΩ. Used to avoid ambiguity from smudged decimal points on component markings.

### Screening and Shielding (9D1)

In RF circuits, unwanted coupling between stages is a constant problem. A high-gain IF amplifier can pick up its own output, causing oscillation. An audio stage running alongside an RF stage can pick up RF and demodulate it as hum or interference.

**Screening** places a thin metal sheet between stages, providing an electrostatic and electromagnetic barrier. Common materials are aluminium sheet, tinplate, and solid copper pours on PCBs.

**Key rules:**
- The screen must be **continuous** — gaps and holes degrade its effectiveness
- At RF, a mesh or perforated screen only works if the holes are smaller than **λ/10** of the highest frequency being screened. Above a few hundred MHz, even small holes transmit signals effectively
- The screen must be **bonded to the circuit ground** to be effective — a floating (unconnected) screen has little benefit and can make things worse by introducing capacitive coupling

**IF transformer screening cans** are an example of screening applied inside a receiver. The aluminium can around each IF transformer prevents the high-gain IF amplifier from coupling back to earlier stages through stray magnetic and electric fields.

> [INFO] **9D1 — screening:** A thin metal sheet between stages prevents unwanted RF coupling. Screen must be continuous, grounded, and free of holes larger than λ/10 at the frequency being screened.

### Soldering — Materials and Technique (9E1–9E4)

#### Metals and Solderability (9E3)

Not all metals solder equally well. The key factor is whether the metal forms a stable oxide layer that prevents solder wetting. Ranked from easiest to hardest:

| Metal | Solderability | Notes |
|---|---|---|
| Copper | Excellent | Wets easily with standard rosin flux |
| Brass | Good | Slightly more oxide; clean before soldering |
| Tinned steel | Good | The tin coating provides a copper-like surface |
| Bare steel | Difficult | Requires active (acid) flux; not suitable for PCBs |
| Aluminium | Very hard | Native oxide reforms instantly; special flux needed |
| Stainless steel | Almost impossible | Impractical with normal workshop equipment |

For amateur radio construction, **copper** (PCB pads, copper wire, coax braid) and **tinned steel** (chassis, connector bodies) are the standard materials. Avoid attempting to solder to aluminium chassis — use bolt connections or crimps instead.

#### Flux — What It Does (9E2)

Solder does not flow onto bare metal. A **flux** is required to dissolve the oxide layer from the surface and prevent it reforming while the joint is at temperature.

**Rosin flux** (colophony) is the standard for electronics. It is mildly acidic when hot but becomes chemically inert when cooled. This means it can be left on the joint after soldering without causing corrosion — unlike the **acid fluxes** used for plumbing, which must be cleaned off immediately.

**Never use plumber's acid flux on electronic joints.** The residue is corrosive and will attack copper pads and component leads over time.

#### Tinning the Iron (9E4)

A freshly bought soldering iron tip needs to be **tinned** before first use, and the tip should be kept tinned during use. Tinning means coating the tip with a thin layer of solder.

**Why it matters:** Heat transfers from the iron to the joint via the solder bridge that forms between the iron tip and the joint. A clean tinned tip forms this bridge immediately. An oxidised, dry tip transfers heat poorly and makes good joints much harder to achieve.

To tin: heat the iron to working temperature, apply solder until the tip is coated, and wipe off excess with the damp sponge or brass wool provided with the stand.

#### Lead-Free vs Leaded Solder (9E1)

Traditional **tin-lead solder** (Sn60/Pb40 or the eutectic Sn63/Pb37) melts at around 183 °C and wets reliably with rosin flux. It produces shiny, easy-to-inspect joints.

**Lead-free solder** (typically Sn99/Cu0.7/Ag0.3 or similar) is now required for commercial electronics manufacture under EU RoHS regulations. It has a higher melting point (~217–220 °C), requires more heat, and produces duller joints that can be harder to inspect. For amateur construction using pre-2006 components and PCBs, leaded solder remains in use and is legally permitted for hobby work in the UK.

> [INFO] **9E1–9E4 — soldering summary:** (1) Copper solders best; aluminium is impractical. (2) Rosin flux dissolves oxide and prevents re-oxidation during the joint — do not use acid flux on electronics. (3) Keep the iron tip tinned to maximise heat transfer. (4) Lead-free solder is required in commercial manufacture; higher melt temperature and duller appearance than leaded. Wash hands after handling lead solder.

---

## 9L — dB Power Shortcuts (9B1, 9E2)

The decibel (dB) is used throughout radio to express power ratios. Exam questions often require quick dB arithmetic. The key rule: **dB values add and subtract, while power ratios multiply and divide.** Build up any conversion from a small set of memorised facts.

### Core dB–to–Power Ratio Table

| dB | Power ratio | Built from |
|----|-------------|-----------|
| +3 dB | × 2 | Fundamental |
| −3 dB | ÷ 2 | Fundamental |
| +6 dB | × 4 | 3 + 3 dB |
| +10 dB | × 10 | Fundamental |
| −10 dB | ÷ 10 | Fundamental |
| +13 dB | × 20 | 10 + 3 dB = ×10 × ×2 |
| +17 dB | × 50 | 10 + 7 dB = ×10 × ×5 (7 dB ≈ ×5) |
| +20 dB | × 100 | 10 + 10 dB |
| +23 dB | × 200 | 20 + 3 dB = ×100 × ×2 |
| +26 dB | × 400 | 20 + 6 dB = ×100 × ×4 |
| +30 dB | × 1000 | 10 + 10 + 10 dB |

### Worked Example — ERP Calculation (9B1)

> **A transmitter outputs 15 W. The feeder has 3 dB loss. The antenna has 17 dB gain. What is the ERP (Effective Radiated Power)?**

Step-by-step using the shortcut table:

```
Start:                     15 W
Feeder loss  (−3 dB):  15 ÷ 2  =  7.5 W
Antenna gain (+17 dB): 7.5 × 50 = 375 W   ERP
```

Check via net gain: −3 + 17 = **+14 dB** above TX power.
+14 dB = 10 + 3 + 1 ≈ 10 + 4 dB ≈ ×25 → 15 × 25 = **375 W** ✓

### Quick-Reference Cheat Sheet

```
Memorise these five:          Derive the rest by adding:
  +3 dB  = ×2                   +13 dB = 10+3 = ×20
  +10 dB = ×10                  +17 dB = 10+7 = ×50
  +20 dB = ×100                 +23 dB = 20+3 = ×200
  −3 dB  = ÷2                   +26 dB = 20+6 = ×400
  −10 dB = ÷10
```

> [INFO] **9B1:** dB values add/subtract; power ratios multiply/divide. The five core shortcuts (±3 dB = ×÷2; ±10 dB = ×÷10; +20 dB = ×100) let you derive any common exam value. Typical exam ERP calculation: 15 W TX − 3 dB feeder + 17 dB antenna gain = **375 W ERP**.

---

## 9J — Self-Check

<details>
<summary><strong>Q1: A lamp is drawing current from a battery. How do you connect a multimeter to measure the current?</strong></summary>

**In series** — break the circuit between the battery and the lamp, and insert the ammeter so that the full current flows through it. In current mode, the ammeter has near-zero resistance and acts like a wire; placing it in series causes minimal disturbance to the circuit.

</details>

<details>
<summary><strong>Q2: You accidentally connect a digital multimeter set to current (ammeter) mode across a 12 V battery. What happens?</strong></summary>

**The meter's internal fuse blows** (at minimum). The ammeter's near-zero internal resistance effectively short-circuits the battery terminal to terminal through the meter. A large current flows, limited only by the battery's internal resistance. The blown fuse protects the meter's internal circuitry from further damage, but the fuse must be replaced before the meter will work again.

</details>

<details>
<summary><strong>Q3: You want to measure the resonant frequency of a home-brew dipole without cutting the feedline. Which instrument is appropriate?</strong></summary>

A **dip meter** (or modern **antenna analyser**). The dip meter couples inductively to the antenna feedpoint without a direct connection; the frequency at which the oscillator's amplitude dips indicates the antenna's resonant frequency. A modern antenna analyser connects directly to the feedpoint but provides much more information (SWR and impedance versus frequency across a sweep).

</details>

<details>
<summary><strong>Q4: An oscilloscope is displaying a sine wave. The waveform spans 4 vertical divisions peak-to-peak and the vertical scale is set to 500 mV/div. The time/div is set to 2 ms and one complete cycle occupies 5 horizontal divisions. What is the peak-to-peak voltage and the frequency?</strong></summary>

**Vpp = 4 × 500 mV = 2 V**

**T = 5 × 2 ms = 10 ms**

**f = 1 ÷ 0.010 = 100 Hz**

</details>

<details>
<summary><strong>Q5: Where should an SWR meter be placed to protect the transmitter's PA from an antenna mismatch?</strong></summary>

**Between the transmitter output and the ATU (antenna matching unit).** Placed here, the meter shows the SWR that the PA "sees". If the SWR rises above a safe level (typically 2:1 triggers fold-back protection on modern transceivers), the PA is at risk. Placing the meter between the ATU and the feeder shows true antenna SWR but does not protect the PA — the ATU transforms the impedance and the PA sees whatever the ATU presents to it.

</details>

<details>
<summary><strong>Q6: You want to check your transmitter's harmonic output to satisfy the licence's requirement for clean transmissions. What is the correct test setup?</strong></summary>

**TX → SWR meter → dummy load**, with the spectrum analyser connected via a directional coupler or high-power attenuator between the SWR meter and dummy load. The dummy load prevents radiation. The spectrum analyser displays the fundamental and any harmonics. The dummy load must be rated for the transmit power. Never connect the spectrum analyser directly to the TX output — its input cannot tolerate transmit power levels.

</details>

<details>
<summary><strong>Q7: Why does a digital multimeter (DMM) disturb the circuit under test less than an analogue multimeter when measuring voltage?</strong></summary>

**The DMM has much higher input impedance** (typically 10 MΩ) compared to an analogue meter (which may be only 20 kΩ/V). A higher-impedance voltmeter draws less current from the circuit under test, causing less voltage drop across the source resistance and giving a more accurate reading of the true voltage. In circuits with high source impedances, a low-impedance voltmeter would significantly load the circuit and give a falsely low reading.

</details>

---

## Interactive Suggestions (for INTERACTIVES batch)

These are strong pedagogical wins — the concepts of meter connection, oscilloscope reading, and spectrum interpretation are significantly easier to learn interactively than from text alone:

1. **Virtual multimeter** — draggable probe leads, selectable function (V / A / Ω / continuity), manual and auto-range modes. Present a simple powered circuit (battery, resistors, LED). User measures V across each component, current in series, resistance out-of-circuit. Visualise the blown fuse consequence when ammeter is placed in parallel across the voltage source.

2. **Virtual oscilloscope** — interactive waveform display with V/div and time/div controls. Present a sine wave (and optionally a modulated carrier using the tx-rx-complete interactive as source). User adjusts controls to display it correctly, then reads off Vpp and frequency using the division-count method.

3. **Virtual spectrum analyser** — display a fundamental signal with its 2nd and 3rd harmonics. User adjusts span and reference level. Identifies harmonic positions, reads their levels in dBm, calculates separation from the fundamental in dB. Great callback to §6B (harmonic identification) and §9H (licence condition harmonic check procedure).

---

*Section 9 complete. This is the final Intermediate study section. Full 9-section sweep now ready for LessonsBuilder (HTML build), Lessons agent (quiz generation), and Interactives batch. Handoff to LessonsBuilder.*
