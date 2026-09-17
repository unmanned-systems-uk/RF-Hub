<!-- RF-Hub Full Licence Study — Chapter 9: The Receiver
     Exam weight: ~10–12% (~11 subsections, dense chapter)
     Sub-sections: §9A sensitivity/NF, §9B dynamic range/IP3, §9C superhet,
                   §9D image freq, §9E double superhet, §9F product detector/BFO,
                   §9G AGC, §9H FM discriminator, §9I filters, §9J blocking/
                   cross-mod/reciprocal mixing, §9K masthead preamps
     Syllabus refs: 9A1, 9B1, 9C1, 9D1, 9E1, 9F1, 9G1, 9H1 [VERIFY v1.6]
     RSGB source: Full Licence Manual 3rd ed. (G0HIQ), Ch 9, pp. 57–66
     New at Full: dynamic range, IP3, reciprocal mixing, double superhet detail
-->

# §9 — The Receiver

This is one of the exam's densest chapters. It covers how a modern amateur receiver is designed to hear weak signals in the presence of strong ones — an inherent tension that drives all receiver architecture decisions. Give extra attention to dynamic range, image rejection, and the three impairments of §9J.

---

## §9A — Receiver Sensitivity and Noise Figure

### Thermal Noise

Every resistor and amplifier stage adds thermal noise. At room temperature (290 K), the available noise power at the input to any circuit is:

```
P_noise = k × T × B
```

Where k = Boltzmann's constant (1.38 × 10⁻²³ J/K), T = temperature in kelvin, B = bandwidth in Hz.

This works out to a **noise floor of −174 dBm per Hz** at room temperature, rising by 10 × log₁₀(bandwidth) for wider bandwidths:

| Bandwidth | Noise floor (approx.) |
|---|---|
| 1 Hz | −174 dBm |
| 500 Hz (CW) | −147 dBm |
| 2.4 kHz (SSB) | −140 dBm |
| 10 kHz (AM) | −134 dBm |

### Noise Figure

A receiver adds noise on top of the thermal floor. The **Noise Figure (NF)** is the degradation in signal-to-noise ratio caused by the receiver, expressed in dB:

```
NF = SNR_in (dB) − SNR_out (dB)
```

A perfect receiver would have NF = 0 dB. Real HF receivers typically achieve NF of 10–15 dB; good LNA-equipped VHF/UHF receivers can achieve NF of 1–2 dB.

The **Minimum Discernible Signal (MDS)** is the weakest signal that raises the receiver output by 3 dB above the noise floor. A lower NF gives a lower MDS and better sensitivity.

### Sensitivity and Bandwidth

Sensitivity depends on bandwidth. A narrower filter improves sensitivity by reducing the noise admitted:

- Widening the filter from 2.4 kHz (SSB) to 10 kHz (AM) increases the noise by 10 × log(10/2.4) = 6.2 dB — the same as making the signal weaker by 6 dB.

> **Key principle:** Reducing receiver bandwidth improves sensitivity. This is why a narrow CW filter makes weak CW signals copyable that are buried in a wider SSB filter.

---

## §9B — Dynamic Range and Third-Order Intercept (IP3)

### Dynamic Range

A receiver must simultaneously:
- Hear signals as weak as −130 dBm (or weaker)
- Not be overloaded by signals as strong as +10 dBm from a nearby transmitter

The ratio between the strongest signal the receiver can handle and the weakest it can detect is the **dynamic range**. A good HF receiver achieves 90–100 dB of dynamic range.

Two mechanisms limit dynamic range:
1. **Noise floor** (bottom limit): set by thermal noise + NF
2. **Compression and IMD** (upper limit): set by the non-linearity of the RF and IF stages

### Third-Order Intercept Point (IP3)

When two strong signals are present, third-order intermodulation products appear within the receiver passband. The **IP3** is a figure of merit that predicts the level at which IMD products would reach the same level as the wanted signals — it is extrapolated beyond the receiver's actual operating range.

```
Spurious-Free Dynamic Range (SFDR) ≈ 2/3 × (OIP3 − Noise Floor)
```

A higher IP3 = better handling of strong signals = wider dynamic range.

| Receiver quality | Typical IP3 |
|---|---|
| Budget | 0 to +10 dBm |
| Good HF transceiver | +20 to +30 dBm |
| High-end contest receiver | +35 to +45 dBm |

<!-- VISUAL: section-9-fig9.1 — fundamental and 3rd-order intercept diagram: two lines (1 dB/dB fundamental, 3 dB/dB IMD product) intersecting at IP3; annotation of noise floor, MDS, SFDR. Replace with /assets/images/study/full/section-9/fig9-1-ip3.svg once created. -->

> **Exam note:** IP3 does not need to be memorised as a formula. Understand that higher IP3 means the receiver handles strong nearby signals better without generating IMD products in the passband.

---

## §9C — The Superheterodyne Receiver

The **superheterodyne** (superhet) is the standard architecture for virtually all modern HF/VHF receivers. It was devised by Edwin Armstrong in 1918.

### Basic Architecture

<img src="/assets/images/study/full/section-9/fig-9-1-superhet-rx-chain.svg" alt="Superhet receiver block diagram: antenna feeds RF filter, mixer (with local oscillator below), IF filter, IF amplifier, demodulator and AF amplifier to audio output; IF = RF minus LO" width="700" height="220" loading="lazy">

The **mixer** combines the incoming RF signal (f_signal) with the Local Oscillator (f_LO) to produce the **Intermediate Frequency (IF)**:

```
f_IF = f_LO − f_signal   (or f_signal − f_LO)
```

The IF is fixed regardless of the tuned frequency. This allows a **sharp, fixed filter** to be fitted at the IF to select only the wanted signal and reject adjacent channels.

### Why Fixed IF is an Advantage

A filter tuned to 1.8 MHz would need to track as the receiver is tuned from 1.8 to 30 MHz. At the IF, the filter is always at the same fixed frequency, so it can be:
- A high-Q crystal filter (e.g., at 8.83 MHz)
- A ceramic filter (at 455 kHz)
- A mechanical filter

These provide far sharper selectivity than any tunable filter could achieve.

### Typical IF Frequencies

| Application | Common IF |
|---|---|
| HF SSB receivers | 8–10 MHz (or 455 kHz second IF) |
| Broadcast AM | 455 kHz |
| VHF/UHF FM | 10.7 MHz (first IF) or 455 kHz (second IF) |

<!-- VISUAL: section-9-fig9.2 — superhet block diagram showing: antenna → preselector BPF → mixer → IF filter → IF amp → detector → audio amp. LO shown feeding mixer. Replace with /assets/images/study/full/section-9/fig9-2-superhet-block.svg once created. -->

---

## §9D — Image Frequency and Rejection

### The Image Problem

The mixer produces IF signals from **two** RF frequencies: the wanted signal and the **image frequency**. For a given LO frequency and IF:

```
f_image = f_LO + f_IF   (when LO is above the signal: f_LO = f_signal + f_IF)
```

Or more generally: the image is the frequency on the other side of the LO from the wanted signal, at a distance of f_IF from the LO.

> **Example:** Receiver tuned to 7.100 MHz, IF = 455 kHz, LO = 7.555 MHz.
> Image = 7.555 + 0.455 = **8.010 MHz**.
> A station at 8.010 MHz also mixes to produce a 455 kHz signal at the IF, indistinguishable from a 7.100 MHz signal. The two frequencies are **2 × 455 kHz = 910 kHz apart**.

### Rejecting the Image

The image must be rejected **before** the mixer — once a signal has been mixed to the IF, it cannot be distinguished from the wanted signal.

The **preselector** (or front-end bandpass filter/tracking filter) before the mixer must attenuate the image frequency. The **image rejection ratio** is how many dB the image is attenuated compared to the wanted signal.

Key principle: **a higher IF separates the image frequency further from the wanted signal**, making it easier to filter out. This is why double-superhet receivers use a high first IF (see §9E).

> **Exam example:** If the IF is 455 kHz, the image is only 910 kHz away — hard to filter if the receiver is tuned within a 1 MHz band. If the first IF is 45 MHz, the image is 90 MHz away — very easy to reject with a simple front-end filter.

---

## §9E — The Double Superhet

A **double superhet** uses two successive frequency conversions to get the best of both worlds:

<img src="/assets/images/study/full/section-9/fig-9-2-double-conversion-superhet.svg" alt="Double-conversion superhet block diagram: two mixers with separate local oscillators convert RF to a high first IF (for image rejection) then to a low second IF (for selectivity) before demodulation" width="800" height="220" loading="lazy">

### Why Two Conversions?

| Stage | IF Frequency | Purpose |
|---|---|---|
| First conversion | High (e.g., 45–70 MHz) | Image is now 90–140 MHz from signal — easy to reject with simple RF filter |
| Second conversion | Low (e.g., 455 kHz or 9 MHz) | Allows sharp, high-Q crystal or ceramic filter for selectivity |

The **roofing filter** at the first IF is the first selectivity stage. It limits the bandwidth of signals reaching the second mixer, preventing very strong out-of-band signals from overloading the second IF stages (see §9J, Blocking).

### Advantages over Single Superhet

- Better image rejection (high first IF pushes image far away)
- Better selectivity (low second IF allows sharp filtering)
- Roofing filter limits the level of strong signals reaching later stages

Almost all modern HF transceivers use a double (or triple) superhet architecture.

---

## §9F — Product Detector and BFO

AM signals can be demodulated with a simple envelope detector. SSB and CW signals cannot — the carrier (or its equivalent) has been suppressed. A **product detector** is used instead.

### How it Works

The product detector multiplies the IF signal by a locally generated carrier from the **Beat Frequency Oscillator (BFO)**:

```
IF signal × BFO signal = demodulated audio
```

The BFO is set close to the IF centre frequency. The difference frequency between the BFO and any signal in the IF passband falls in the audio range:

- **USB:** BFO set just below the IF centre → upper sideband is demodulated to audio
- **LSB:** BFO set just above the IF centre → lower sideband is demodulated to audio
- **CW:** BFO offset from IF centre by the desired sidetone pitch (e.g., 600–700 Hz)

### RTTY and Data Modes

The product detector also demodulates RTTY (FSK) and most other data modes — the two shift frequencies appear as two distinct audio tones (e.g., 2125 Hz and 2295 Hz for RTTY) that the modem software then decodes.

> **Key fact:** A product detector with a BFO is required for SSB and CW reception. Without a BFO, an SSB signal sounds like unintelligible "duck speech" because the carrier reference is missing.

---

## §9G — Automatic Gain Control (AGC)

### Purpose

Amateur band signal levels vary enormously — from a weak DX station at −120 dBm to a local station at −40 dBm, a variation of 80 dB. Without AGC, the receiver would saturate (clip) on strong signals and require constant volume adjustment on weak ones.

**AGC** automatically reduces the IF (and sometimes RF) amplifier gain in proportion to the signal strength, maintaining a roughly constant audio output level.

### How AGC Works

1. A detector (rectifier) measures the average amplitude of the IF signal.
2. The resulting DC voltage is fed back to control the gain of one or more IF amplifier stages (and optionally the RF amp).
3. Stronger signal → more negative AGC voltage → less gain → audio level stays constant.

<!-- VISUAL: section-9-fig9.3 — AGC feedback loop diagram: IF amp → envelope detector → smoothing → gain control voltage back to IF amp and optionally RF amp. Replace with /assets/images/study/full/section-9/fig9-3-agc-loop.svg once created. -->

### AGC Time Constants

The AGC loop has two important time constants:

| Parameter | Typical Value | Effect |
|---|---|---|
| Attack time | 1–10 ms | How fast AGC responds to a suddenly stronger signal |
| Decay time | 0.5–5 s | How fast AGC releases after signal falls |

For **SSB**, the ideal AGC is "fast attack, slow decay" — it follows the amplitude envelope of speech without pumping audibly between syllables.

**Hang AGC** holds the gain-reduced state for a brief period (the "hang time") after a signal peak, preventing the noise between syllables from sounding loud.

### AGC Threshold

Below the AGC threshold, the AGC does not act — weak signals below a certain level receive full gain. This prevents the AGC from amplifying noise between transmissions.

---

## §9H — FM Demodulation

### The FM Discriminator

An FM discriminator converts instantaneous frequency variations in the IF signal to a proportional audio voltage. Common types:

| Type | Notes |
|---|---|
| Foster-Seeley (phase discriminator) | Classic circuit; sensitive to amplitude as well as frequency |
| Ratio detector | Variant of Foster-Seeley; inherently amplitude-insensitive |
| Quadrature detector | Common in ICs; the IF is split, shifted 90°, and multiplied |

### The Limiter Stage

Because FM carries information only in frequency, any amplitude variation on the FM signal is noise. A **limiter** — a hard-driven amplifier stage that clips the IF signal to a constant amplitude — is placed before the discriminator to remove AM noise, including impulse noise. This is the **capture effect**: FM naturally rejects weaker co-channel signals in favour of the strongest one present.

### SINAD

FM receiver sensitivity is specified by **SINAD** (Signal + Noise + Distortion / Noise + Distortion). A receiver is rated at its SINAD sensitivity — the signal level that produces a SINAD of 12 dB. A lower signal level for 12 dB SINAD = better sensitivity.

### NBFM vs WBFM

| Mode | Deviation | Bandwidth | Application |
|---|---|---|---|
| NBFM | ±2.5 kHz | ~11 kHz (Carson) | Amateur VHF/UHF voice |
| WBFM | ±75 kHz | ~200 kHz | Broadcast FM |

The IF filter bandwidth must match the mode: a WBFM receiver with a narrow NBFM filter would clip the outer sidebands and cause audio distortion.

---

## §9I — Receiver Filters

### Crystal Filters

Crystal filters use the mechanical resonance of quartz crystals to produce very high-Q (sharp) bandpass filters at fixed IF frequencies (typically 6–12 MHz). They are the primary selectivity element in HF SSB receivers.

A typical SSB crystal filter has:
- **Bandwidth:** 2.0–2.8 kHz at –6 dB
- **Shape factor:** ratio of –60 dB bandwidth to –6 dB bandwidth (ideally close to 1; typically 1.5–3 for a ladder crystal filter)
- **Passband ripple:** should be low (< 1 dB) for good audio quality

### Ceramic Filters

Ceramic resonators achieve lower Q than crystals, but are inexpensive and suited to:
- 455 kHz (AM, NBFM second IF)
- 10.7 MHz (VHF FM first IF)

### Mechanical Filters

Mechanical filters use the resonance of metal discs coupled by wires. They achieve very high Q at 455 kHz and were widely used in older HF SSB equipment. Now largely replaced by crystal filters or DSP.

### DSP Filters

Software-defined receivers perform filtering in the digital domain using FIR or IIR algorithms. DSP filters offer:
- Continuously adjustable bandwidth
- Near-ideal rectangular passband shape
- Notch filters for carriers within the passband
- No fixed component aging

However, a front-end **roofing filter** is still needed to prevent strong out-of-band signals from overloading the ADC before the DSP can filter them.

> **Roofing filter:** The first IF filter in a superhet receiver. It is normally wider than the final bandwidth filter (to allow for frequency accuracy) but narrower than the full IF bandwidth. Its primary purpose is to protect later stages from strong signals, not to provide final selectivity.

---

## §9J — Receiver Impairments: Blocking, Cross-Modulation, and Reciprocal Mixing

These three impairments all arise from the presence of **strong signals near the wanted channel**. They are distinct in mechanism but all limit the ability to hear weak stations in the presence of strong ones.

### 1 — Blocking (Desensitisation)

A very strong off-channel signal drives the RF amplifier or mixer into **compression**. The receiver's gain is reduced for all signals, including the wanted one — the wanted signal appears to become weaker or disappear entirely while the strong signal is present. 

- Blocking is temporary; the receiver recovers when the strong signal is removed.
- Measured as the **blocking dynamic range** (dB between MDS and the level at which a 1 dB compression occurs).
- Improved by: better RF stage linearity (higher IP3), roofing filter, attenuator.

### 2 — Cross-Modulation

A strong AM-modulated signal (or any signal with significant amplitude variation) causes its modulation to transfer onto the wanted received signal via the non-linearity of the RF or mixer stage:

- You hear the wanted station's signal but also hear the audio from the strong station's AM broadcast underneath it.
- The strong station does not need to be on a close frequency — it just needs to be strong enough to drive the stage non-linearly.
- Reduced by: better linearity (higher IP3), front-end attenuation, or a band-pass filter to block the strong signal.

### 3 — Reciprocal Mixing

This is the most subtle and important impairment for a weak-signal operator:

Every local oscillator has **phase noise** — a broadband skirt of low-level noise sidebands close to the LO frequency. When a **strong off-channel signal** mixes with these LO noise sidebands, the result is a broadband noise signal at the IF, at the frequency corresponding to the wanted channel.

This noise can mask a weak wanted signal even though the strong signal is many kHz away from the wanted channel.

<!-- VISUAL: section-9-fig9.4 — reciprocal mixing diagram: LO spectrum showing phase noise skirt; off-channel signal at frequency offset Δf; noise product falls at IF channel; weak wanted signal buried. Replace with /assets/images/study/full/section-9/fig9-4-reciprocal-mixing.svg once created. -->

**Interactive — Reciprocal Mixing Visualiser:**

<iframe src='/interactives/full-reciprocal-mixing-visualiser.html' style='width:100%; height:700px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='Reciprocal Mixing Visualiser'></iframe>

**Why it matters:** A receiver with poor LO phase noise can be 10–20 dB more susceptible to reciprocal mixing than a high-quality receiver, even if the noise figures and IP3 values are similar. Phase noise is a key differentiator between budget and high-end receivers.

**Improvement:** Use a low phase-noise synthesiser (OCXO reference, high-loop-bandwidth PLL) or a high-Q crystal VFO.

### Summary Table

| Impairment | Mechanism | Symptom | Improved by |
|---|---|---|---|
| Blocking | Strong signal compresses RF/mixer stage | Wanted signal disappears | Higher IP3, roofing filter, attenuator |
| Cross-mod | Strong AM signal transfers modulation via non-linearity | Hear other station's audio | Higher IP3, bandpass filter |
| Reciprocal mixing | Strong signal × LO phase noise = IF noise | Noise rises when strong signal present | Lower LO phase noise |

---

## §9K — Masthead Preamplifiers

### The Friis Noise Equation

The total noise figure of a cascaded receiver chain is dominated by the first stage:

```
F_total = F₁ + (F₂ − 1)/G₁ + (F₃ − 1)/(G₁ × G₂) + …
```

Where F = noise factor (linear, not dB) and G = gain (linear). This is the **Friis formula**.

If the first stage has high gain (G₁ >> 1), the noise of subsequent stages (F₂, F₃…) is divided by G₁ and becomes negligible. The first stage noise figure dominates.

### Feeder Loss is Noise

**Coaxial cable has loss.** At VHF and above, even a few metres of cable can introduce 1–3 dB of attenuation. Attenuation before the receiver is equivalent to adding noise:

- 3 dB of cable loss before a receiver with NF = 3 dB → effective NF = **6 dB**.
- The signal is 3 dB weaker but the noise floor is unchanged (the cable itself generates thermal noise).

### The Masthead Preamp Solution

Fitting a **low-noise amplifier (LNA) at the masthead** (at the antenna, before the coaxial feed):

1. The LNA amplifies the antenna signal before the cable loss degrades it.
2. Because the cable now follows a high-gain, low-NF stage, its noise contribution is divided by the LNA gain and becomes negligible.
3. The overall system NF is now approximately the LNA's NF (e.g., 0.5–1 dB) rather than LNA NF + cable loss.

> **Example:** LNA NF = 0.8 dB, gain = 15 dB; cable loss = 3 dB (NF = 3 dB); receiver NF = 5 dB.
> Without LNA: system NF ≈ 3 + 5 = **8 dB** (cable + receiver in series).
> With LNA at masthead: system NF ≈ **0.8 + (3−1)/15^1 + … ≈ 0.9 dB** — a huge improvement.

### Disadvantages and Risks

- **Overloading:** a masthead LNA amplifies all signals, including very strong local ones. Strong broadcast or commercial transmitters can overdrive the LNA, generating IMD products that appear across the band.
- **DC feed:** the LNA requires power, typically fed up the coaxial cable (bias-T supply).
- **TX protection:** the LNA must be switched out of circuit (or bypassed) during transmission to prevent the transmitter output from destroying it. A PIN diode switch or relay is used.
- **Marginal benefit on HF:** at HF, the dominant noise source is external (atmospheric, galactic, man-made) — far above the thermal noise floor. A masthead LNA on HF does not improve sensitivity if the antenna already receives more external noise than the receiver's noise floor. Masthead preamps are primarily beneficial at **VHF and above** where external noise is low.

---

## §9 — Self-Check Questions

**Q1.** A receiver has a noise figure of 10 dB and is used with a 2.4 kHz SSB filter. What is the approximate minimum discernible signal level?
<details><summary>Answer</summary>
Noise floor at 2.4 kHz = −174 + 10 × log₁₀(2400) = −174 + 33.8 = −140 dBm. Add 10 dB NF: effective noise floor ≈ −130 dBm. MDS is approximately 3 dB above this: ≈ −127 dBm.
</details>

**Q2.** State two causes of limited dynamic range in a receiver.
<details><summary>Answer</summary>
1. The thermal noise floor (plus receiver noise figure) sets the bottom limit — signals weaker than the noise floor cannot be detected. 2. Third-order intermodulation products from the non-linearity of the RF/mixer stage set the upper limit — strong signals generate IMD products within the passband that mask weak wanted signals.
</details>

**Q3.** A receiver is tuned to 14.200 MHz with a 9 MHz first IF. What is the image frequency, and how far is it from the wanted signal?
<details><summary>Answer</summary>
LO = 14.200 + 9 = 23.200 MHz. Image = 23.200 + 9 = 32.200 MHz. The image is 32.200 − 14.200 = **18 MHz** from the wanted signal — easy to reject with a simple HF bandpass filter. (Compare with a 455 kHz IF where the image would be only 910 kHz away.)
</details>

**Q4.** Why does a double superhet receiver use a high first IF followed by a low second IF?
<details><summary>Answer</summary>
The high first IF places the image frequency far enough from the wanted signal to be rejected by a simple RF bandpass filter. The low second IF allows the fitting of a high-Q crystal or ceramic filter for sharp channel selectivity, which is only practical at a fixed, low frequency.
</details>

**Q5.** Why does SSB reception require a product detector and BFO?
<details><summary>Answer</summary>
In SSB, the carrier is suppressed. A simple envelope detector would produce an unrecognisable output because there is no carrier reference. The BFO re-inserts a local carrier reference at the IF; the product detector multiplies the IF signal by this carrier, producing the original audio frequencies as the difference products.
</details>

**Q6.** Explain the difference between blocking and reciprocal mixing.
<details><summary>Answer</summary>
Blocking: a very strong off-channel signal compresses the gain of the RF or mixer stage, reducing the receiver's sensitivity to all signals — the wanted signal appears to fade. Reciprocal mixing: a strong off-channel signal mixes with the phase noise sidebands of the local oscillator, producing broadband noise at the IF that masks weak wanted signals. Blocking is a non-linearity problem; reciprocal mixing is a phase noise problem. Both are made worse by a strong nearby signal, but they have different root causes and different solutions.
</details>

**Q7.** Why is a masthead preamplifier more beneficial at VHF than at HF?
<details><summary>Answer</summary>
At HF, the external noise received by the antenna (atmospheric, galactic, man-made) is typically 20–40 dB above the receiver's thermal noise floor. Adding a low-noise preamp does not improve the signal-to-noise ratio because the noise is dominated by external sources already entering via the antenna. At VHF and UHF, the external noise environment is much quieter, so the receiver's own noise figure and the cable losses become the dominant noise source — a masthead LNA directly improves the SNR.
</details>

---

## Suggested Interactives for RFH-Interactives

- **Reciprocal mixing visualiser** — already linked above; adjust LO phase noise level and interferer level to see noise floor change. *(Live iframe in §9J.)*
- **Superhet block diagram explorer** — click stages to see gain/NF contribution; Friis formula computed live.
- **Image frequency calculator** — enter received frequency and IF; shows image and how far it is.
- **Dynamic range / IP3 plotter** — adjust signal level and IP3; see fundamental and IMD product lines.

---

*Source: RSGB Full Licence Manual, 3rd Edition (Alan Betts G0HIQ), Chapter 9, pp. 57–66. Syllabus v1.6 Feb 2024.*
