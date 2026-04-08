# Using the FFT to Identify Modulation

> **Status:** Draft — awaiting screenshots from Anthony's SDR captures
> **Curriculum area:** Signals & Spectrum Analysis
> **Prerequisites:** Basic understanding of frequency, amplitude, and what an SDR waterfall display shows
> **RSGB Syllabus refs:** TBC

## Introduction

The FFT (Fast Fourier Transform) is the engine behind every SDR waterfall and spectrum display. It converts a slice of time-domain signal into a frequency-domain picture — and that picture has a **visual fingerprint** for each type of modulation. Learn to read these fingerprints and you can identify what a signal *is* before you even try to demodulate it.

This lesson teaches you to look at an FFT display and say: "That's AM", "That's SSB", "That's a radar" — from shape alone.

## What the FFT Shows You

Two views, same data:

- **Spectrum (top):** Power vs. frequency at one instant — the "skyline"
- **Waterfall (bottom):** Frequency vs. time, with colour representing power — the "history"

Together they give you width, symmetry, stability, and behaviour over time. Those four properties are your identification toolkit.

## The Four Questions

When you see a signal on the waterfall, ask:

1. **How wide is it?** Narrow (Hz) → CW/carrier. Medium (kHz) → voice/data. Wide (tens of kHz) → FM broadcast, radar, noise.
2. **Is it symmetrical?** Symmetrical sidebands around a carrier → AM/DSB. One sideband only → SSB. No clear carrier → suppressed-carrier or spread-spectrum.
3. **Is it stable?** Rock-steady line → crystal-controlled transmitter. Drifting → older/cheaper oscillator or OTHR sweep.
4. **What does it do over time?** Constant → broadcast/carrier. Pulsing → radar. Bursty → digital modes, packet. Keyed on/off → CW.

## Visual Signatures

### CW (Morse Code)
- **Width:** Extremely narrow — a single line on the waterfall
- **Waterfall pattern:** Dashes and dots visible as on/off segments of a thin bright line
- **Spectrum:** Single spike, no sidebands
- **Sounds like:** Pure tone, keyed on and off

> 📸 *[Screenshot placeholder: CW signal on 40m]*

### AM (Amplitude Modulation)
- **Width:** ~6–10 kHz (carrier + two sidebands)
- **Waterfall pattern:** Bright centre carrier with symmetrical "wings" that flicker with audio content
- **Spectrum:** Central spike (carrier) with mirrored sidebands
- **Sounds like:** Normal speech/music when demodulated in AM mode

> 📸 *[Screenshot placeholder: AM broadcast station]*

### SSB (Single Sideband)
- **Width:** ~2.4 kHz (voice), one side of carrier only
- **Waterfall pattern:** Asymmetric blob that appears and disappears with speech — no signal when nobody is talking
- **Spectrum:** Energy on one side only (USB = upper, LSB = lower). No carrier spike.
- **Sounds like:** Unintelligible in AM mode. Clear speech in the correct sideband mode.

> 📸 *[Screenshot placeholder: SSB QSO on 20m or 40m]*

### FM (Frequency Modulation)
- **Width:** Narrowband FM (NFM) ~12.5–25 kHz. Broadcast FM ~200 kHz.
- **Waterfall pattern:** Wide, flat-topped plateau. The signal energy spreads across the full bandwidth even during silence (due to deviation).
- **Spectrum:** Broad, relatively flat top — no single dominant carrier
- **Sounds like:** Quiet until you tune exactly to centre frequency, then clear audio snaps in

> 📸 *[Screenshot placeholder: NFM signal — perhaps a PMR446 or marine channel]*

### Digital Modes (FT8, PSK31, RTTY)
- **Width:** Varies — FT8 ~50 Hz per signal, PSK31 ~31 Hz, RTTY ~300 Hz
- **Waterfall pattern:** Distinctive periodic bursts (FT8 = 15-second cycle). PSK31 shows as a thin line with slight widening during text. RTTY = two parallel lines (mark and space).
- **Spectrum:** FT8 band segment looks like a comb of narrow spikes. PSK31 is a single thin trace.
- **Sounds like:** FT8 = warbling tones. PSK31 = melodic warble. RTTY = characteristic "diddle" sound.

> 📸 *[Screenshot placeholder: FT8 waterfall showing the 15-second burst pattern]*

### Over-the-Horizon Radar (OTHR)
- **Width:** Very wide — often 50–200+ kHz
- **Waterfall pattern:** Massive bright blob, often drifting slowly in frequency as the radar sweeps. May show internal structure (banding from pulse repetition).
- **Spectrum:** Broad hump with no defined carrier — looks like elevated noise across a wide swath
- **Sounds like:** Buzzing or humming. Cannot be demodulated as voice — there is no voice content. The buzz is the pulse repetition frequency.
- **Key identifier:** Width + inability to demodulate + buzz = OTHR. Often Chinese OTHR systems on the 49m band.

> 📸 *[Screenshot: Anthony's 6.336 MHz capture — the signal that started this lesson]*

### Jamming / Deliberate Interference
- **Width:** Wide, similar to OTHR
- **Waterfall pattern:** Broad noise centred on a known broadcast frequency
- **Spectrum:** Elevated noise floor across the target frequency
- **Key difference from OTHR:** Jamming is stationary (parked on a frequency). OTHR drifts/sweeps.

> 📸 *[Screenshot placeholder: if captured]*

## Quick Reference Table

| Modulation | Width | Symmetry | Carrier Visible? | Time Behaviour |
|-----------|-------|----------|-------------------|----------------|
| CW | < 100 Hz | N/A | Yes (is the carrier) | Keyed on/off |
| AM | 6–10 kHz | Symmetrical | Yes (strong centre) | Continuous |
| SSB | ~2.4 kHz | Asymmetric | No (suppressed) | Bursty (voice) |
| NFM | 12–25 kHz | Symmetrical | Spread | Continuous |
| FT8 | ~50 Hz | Narrow | No | 15-sec bursts |
| PSK31 | ~31 Hz | Narrow | No | Continuous key |
| RTTY | ~300 Hz | Two lines | Mark/Space pair | Continuous |
| OTHR | 50–200+ kHz | Broad blob | No | Drifting/sweeping |

## Practical Exercise: Signal Safari

Tune your SDR across these bands and try to identify signals using only the FFT display before demodulating:

1. **40m band (7.0–7.2 MHz):** Find a CW signal, an SSB QSO, and FT8 activity around 7.074 MHz
2. **49m broadcast band (5.9–6.2 MHz):** Find an AM broadcast station — note the symmetrical sidebands
3. **PMR446 (446.0–446.2 MHz):** Wait for a walkie-talkie transmission and observe the NFM signature
4. **20m FT8 (14.074 MHz):** Watch the 15-second burst cycle fill the waterfall

For each signal, note: width, symmetry, carrier presence, and time behaviour. Then demodulate to confirm your identification.

## Key Takeaway

The FFT display is not just a pretty visualisation — it's a diagnostic instrument. The shape of a signal on the waterfall tells you what it is, how it's modulated, and often who is transmitting it. Before reaching for the demodulator, read the waterfall. The signal is already telling you what it is.

---

*This lesson was inspired by a live capture of suspected Chinese OTHR at 6.336 MHz from the Scottish Borders, received on an end-fed wire antenna. The wide, non-demodulable signal with its characteristic buzz is a textbook example of why FFT pattern recognition matters — without it, you'd waste time trying to demodulate something that was never voice in the first place.*


### Military HF Data Modems (STANAG 4285 / MIL-STD-188-110)
- **Width:** ~3 kHz (fits within a standard SSB channel)
- **Waterfall pattern:** Dense comb of evenly-spaced parallel tones — like a barcode. May be preceded by a different-looking link establishment phase (ALE) that uses bursty tonal patterns.
- **Spectrum:** Multiple discrete, regularly-spaced carriers
- **Sounds like:** Harsh buzzing or warbling — not demodulable as voice
- **Key identifier:** The transition from bursty link setup to stable multi-tone data transfer. These sometimes appear inside amateur allocations — they are not legitimate amateur signals.

> 📸 *[Screenshot: 3.855 MHz — link establishment phase]*
> 📸 *[Screenshot: 3.855 MHz — multi-tone data modem phase]*

**Lesson from the field:** A signal at 3.855 MHz (80m amateur band) was first observed with a bursty striped waterfall pattern, then changed to a dense multi-tone comb. This was not two different stations — it was the same military system transitioning from link setup to data transfer. The two phases look completely different on the waterfall. Never identify a signal from a single snapshot.

## Deep Dive: IQ Sampling, Negative Frequencies, and the 0 Hz Experiment

### What happened

While experimenting with SDR++, the VFO was accidentally set to 0 Hz. The display showed signals at *negative* frequencies (e.g., -9.96 MHz). These were real broadcast stations — mirrored into the negative frequency axis.

> 📸 *[Screenshot: SDR++ tuned to 0 Hz showing negative frequency axis]*

### Why negative frequencies exist in SDR

An SDR using IQ (in-phase/quadrature) sampling produces a **complex baseband signal**. Unlike a simple AM radio that samples real-valued voltage, an IQ receiver captures two streams — I and Q — that together represent a complex number at each sample instant.

Complex signals have both positive and negative frequencies. Normally, your SDR's local oscillator (LO) is set to a real frequency — say, 10 MHz — and the display shows frequencies centred around that LO. The negative side of the baseband maps to frequencies *below* the LO, and the positive side maps to frequencies *above* it. You never notice the sign because the software adds the LO offset and shows you the real frequency.

But at 0 Hz LO, there's no offset to add. The raw complex baseband is exposed, and you see the negative frequency axis directly. The signals there are real — they're the mirror image of whatever exists at the corresponding positive frequency.

### Four lessons from one accident

1. **IQ sampling produces negative frequencies:** Complex baseband has two sides. Normally the software hides this from you by adding the LO frequency.

2. **Signals mirror around the LO:** At 0 Hz, a 9.41 MHz broadcast station appears at both +9.41 MHz and -9.41 MHz.

3. **Oscillator accuracy matters:** The signal appeared at -9.96 MHz rather than -9.41 MHz — a ~550 kHz error caused by the HackRF's uncalibrated TCXO crystal oscillator. Every SDR has some clock error; expensive test equipment uses oven-controlled oscillators (OCXOs) to minimise it.

4. **IQ imbalance makes the two sides different:** The mirrored signal at the negative frequency sounded *cleaner and stronger* than the same signal tuned directly. This is because no SDR has perfectly matched I and Q analogue paths — there are always slight differences in gain and phase. These imperfections affect each side of the complex baseband differently, so one side can genuinely sound better than the other.

### What about "Invert IQ"?

SDR software often has an "Invert IQ" option. Despite the similar name, this is **not** a fix for IQ imbalance. The two concepts are different:

- **IQ imbalance** = the I and Q analogue paths have slightly different gain or phase (hardware imperfection). This causes imperfect image rejection — a faint ghost of every signal appears mirrored on the opposite side of the LO. Software calibration (IQ correction) can reduce this, but Invert IQ does not.

- **Invert IQ** = deliberately swap the I and Q data streams. This **mirrors the entire spectrum** — upper sideband becomes lower, and vice versa. It's used for:
  - Correcting spectrum inversion caused by certain hardware (some upconverters/downconverters flip the spectrum as a side-effect of their mixing stage)
  - Digital protocols that use IQ inversion as part of their modulation scheme (e.g., LoRa uses IQ inversion to distinguish uplink from downlink transmissions)

**In short:** IQ imbalance is a problem you correct with calibration. Invert IQ is a tool you use when the hardware or protocol has intentionally or unavoidably flipped the spectrum.

---

*The IQ / negative frequency discovery was made by accidentally tuning SDR++ to 0 Hz with a HackRF One, revealing the raw complex baseband. The observation that the mirrored signal sounded cleaner than the direct signal demonstrated IQ imbalance in real time — something textbooks describe abstractly but rarely show.*
