# Lesson 5: Polarisation — Orientation Matters

**Unit:** 1 — How Antennas Work  
**Prerequisites:** Lesson 3 (Radiation Patterns)  
**Equipment needed:** None  
**Estimated time:** 25 minutes

---

## Learning Objectives

By the end of this lesson you will be able to:

- Explain linear polarisation (vertical and horizontal)
- Explain circular polarisation (RHCP and LHCP) and why satellites use it
- Calculate the signal loss from a polarisation mismatch
- Choose the correct polarisation for a given application

---

## The Big Idea

In Lesson 1 we learned that the electric field in an EM wave oscillates
perpendicular to the direction of travel. But *which* perpendicular direction?
It could be up-and-down, side-to-side, or rotating. This orientation of the
electric field is called **polarisation**, and getting it wrong can cost you
half your signal — or more.

---

## Linear Polarisation

The simplest case. The electric field oscillates in a single plane.

### Vertical Polarisation

A vertical antenna (like a whip on a car roof) produces vertically polarised
waves — the E-field oscillates up and down. Most land mobile radio, FM
broadcast, and amateur VHF/UHF is vertically polarised. Why? Because vertical
antennas are practical for vehicles and handheld radios.

### Horizontal Polarisation

A horizontal dipole produces horizontally polarised waves — the E-field
oscillates side to side. Analogue TV broadcast was traditionally horizontally
polarised in the UK. Amateur radio on HF often uses horizontal polarisation
because horizontal wire antennas are easy to string between supports.

### The Cross-Polarisation Problem

Here's the critical practical issue: **a vertically polarised receiving antenna
is essentially invisible to horizontally polarised signals**, and vice versa.

In theory, a perfect cross-polarisation mismatch causes infinite loss (the
receiving antenna can't "see" the signal at all). In practice, reflections
from buildings, terrain, and the ionosphere mix the polarisation somewhat,
but you can still lose **20 dB or more** — that's 99% of your signal gone.

| TX Polarisation | RX Polarisation | Approximate Loss |
|-----------------|-----------------|------------------|
| Vertical | Vertical | 0 dB (matched) |
| Horizontal | Horizontal | 0 dB (matched) |
| Vertical | Horizontal | 20+ dB (severe) |
| Vertical | 45° slant | 3 dB (half power) |
| Any linear | Circular | 3 dB |
| RHCP | RHCP | 0 dB (matched) |
| RHCP | LHCP | 20+ dB (severe) |

The general formula for polarisation mismatch loss between two linearly
polarised antennas is:

```
Loss (dB) = -20 × log₁₀(cos θ)

where θ is the angle between the two polarisation planes
```

At θ = 45°, loss = 3 dB (half power). At θ = 90°, loss is theoretically
infinite.

---

## Circular Polarisation

Now imagine the E-field vector doesn't just oscillate — it **rotates** as the
wave travels forward. If you watched it coming toward you, the tip of the
E-field vector traces a circle. This is **circular polarisation**.

### Right-Hand Circular (RHCP)

Looking at the oncoming wave, the E-field rotates clockwise. Called "right-hand"
because if you point your right thumb in the direction of travel, your fingers
curl in the direction of rotation.

### Left-Hand Circular (LHCP)

The E-field rotates counter-clockwise (looking at the oncoming wave).

### Why Satellites Use Circular Polarisation

Satellites use circular polarisation for a practical reason: the satellite is
constantly moving and potentially tumbling slightly. If it transmitted a
linearly polarised signal, a receiving antenna on the ground would see the
polarisation angle constantly changing as the satellite crosses the sky,
causing severe signal fading.

With circular polarisation, the rotation handles this automatically. As long as
the receiving antenna is also circularly polarised (same hand), the orientation
of either antenna doesn't matter. You always get a consistent signal.

The trade-off: receiving a circularly polarised signal with a linearly polarised
antenna (or vice versa) always costs exactly **3 dB** — you lose half the
power. This is why dedicated satellite ground stations use circularly polarised
antennas (helical, crossed-Yagi, or patch arrays), but casual reception with a
linear antenna still works — you just accept the 3 dB penalty.

> **🔧 Interactive (future):** Polarisation visualiser — 3D animation showing
> the E-field vector tip tracing linear, circular, and elliptical paths as the
> wave propagates.

---

## Elliptical Polarisation: The General Case

Perfect linear and perfect circular polarisation are special cases. In reality,
most signals end up somewhere between — the E-field traces an ellipse. This
is **elliptical polarisation** and it's the most general description.

An antenna with imperfect axial ratio (not perfectly matched feed phases)
produces elliptical rather than true circular polarisation. Likewise, a
linearly polarised signal that bounces off buildings picks up a cross-polarised
component and becomes slightly elliptical.

For practical purposes, if the axial ratio (the ratio of major to minor axis
of the ellipse) is less than 3 dB, we call it "circular." If greater than
20 dB, we call it "linear." Everything between is elliptical.

---

## Practical Polarisation Guide

| Application | Typical Polarisation | Why |
|-------------|---------------------|-----|
| FM broadcast (UK) | Vertical (or mixed) | Vertical whip antennas on cars |
| Amateur VHF/UHF | Vertical (FM), Horizontal (SSB/CW) | Convention and practicality |
| Amateur HF | Varies with propagation | Ionosphere rotates polarisation |
| Satellite downlinks | RHCP or LHCP | Orientation-independent |
| GPS | RHCP | All GPS satellites transmit RHCP |
| Wi-Fi | Often vertical or mixed | Consumer antennas typically vertical |
| TV broadcast (UK) | Horizontal (legacy), Vertical (some DAB) | Historical convention |
| ADS-B (1090 MHz) | Vertical | Aircraft monopole antennas |

---

## Knowledge Check

1. **What polarisation does a vertical whip antenna produce?**
   <!-- Vertical linear polarisation -->

2. **A satellite transmits RHCP. You receive with a vertical dipole. How much
   signal do you lose from the polarisation mismatch?**
   <!-- 3 dB — receiving circular with linear always costs exactly 3 dB -->

3. **Why is circular polarisation preferred for satellite communications?**
   <!-- Because the relative orientation between satellite and ground station constantly changes; circular pol handles this without signal fading -->

4. **Your neighbour's FM radio antenna is horizontal. Most local FM broadcasts
   are vertically polarised. What problem will they experience?**
   <!-- Severe signal loss (potentially 20+ dB) from cross-polarisation mismatch -->

5. **GPS signals are RHCP. If you tried to receive them with an LHCP antenna,
   what would happen?**
   <!-- Severe loss (20+ dB) — opposite-hand circular polarisations are cross-polarised -->

---

## Summary

- **Polarisation** is the orientation of the E-field in an EM wave
- **Linear:** vertical or horizontal — determined by antenna orientation
- **Circular:** RHCP or LHCP — E-field rotates as wave propagates
- **Cross-polarisation mismatch** can lose 20+ dB of signal
- **Linear vs. circular** mismatch costs exactly 3 dB
- Satellites use circular polarisation for orientation independence
- Always check the polarisation of both transmitter and receiver!

---

## 🏆 UNIT 1 CAPSTONE: Antenna Scavenger Hunt

You've now completed Unit 1 — you understand the fundamentals of how antennas
work. Time to put it into practice.

**Your mission:** Find and document 10 different antennas in the real world.
You can walk around your neighbourhood, drive around, or use Google Street
View.

For each antenna, identify and record:
1. **Type** (dipole, Yagi, dish, vertical, panel, etc.)
2. **Likely frequency range** (use size as a clue — λ = 300/f)
3. **Polarisation** (vertical, horizontal, circular)
4. **Purpose** (mobile phone, TV, satellite, amateur, etc.)
5. **A photo** (or screenshot from Street View)

**Bonus challenges:**
- Find at least one example of each antenna family (wire, aperture, broadband,
  array)
- Estimate the gain of one of the antennas based on its type and size
- Spot a polarisation mismatch in the wild (a wrongly oriented TV antenna?)

Document your hunt as a portfolio entry for the RF-Hub.

---

**Previous:** [Lesson 4 — Antenna Types](lesson-04-antenna-types.md)  
**Next:** [Unit 2, Lesson 6 — Impedance](../unit-2-characteristics-and-measurement/lesson-06-impedance.md)
