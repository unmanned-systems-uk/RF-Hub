# Lesson 4: Antenna Types — A Guided Tour

**Unit:** 1 — How Antennas Work  
**Prerequisites:** Lesson 3 (Radiation Patterns)  
**Equipment needed:** None (but look at your own antennas!)  
**Estimated time:** 30 minutes

---

## Learning Objectives

By the end of this lesson you will be able to:

- Classify antennas into families (wire, aperture, array, travelling wave)
- Identify at least 8 common antenna types and their typical applications
- Match antenna types to real-world use cases
- Explain why no single antenna is best for everything

---

## The Big Idea

All antennas do the same fundamental thing — convert between electrical signals
and EM waves. But the *way* they do it varies enormously, producing different
patterns, bandwidths, sizes, and trade-offs. Choosing the right antenna for a
job is one of the most practical skills in RF engineering.

Think of it like choosing a vehicle. A sports car, a lorry, and a helicopter
all provide transport, but you'd choose each for very different situations.
Antenna selection works the same way.

---

## Family 1: Wire Antennas

The simplest and oldest antenna family. These are exactly what they sound like —
wires (or rods) arranged in specific shapes.

### Half-Wave Dipole

The reference antenna from Lesson 2. Two wires, each λ/4 long, fed at the
centre. Omnidirectional in the azimuth plane (when mounted vertically), with
a doughnut-shaped pattern. Gain: 2.15 dBi. Every RF engineer should
understand the dipole intimately — it's the yardstick against which others
are measured.

**Use cases:** General purpose, HF to UHF. The rubber duck on your handheld
radio is a variation of a dipole (or monopole).

### Monopole (Quarter-Wave Vertical)

Half a dipole mounted over a ground plane. The ground plane (or ground
radials) provides the "mirror image" of the missing half. Length: λ/4.
Impedance: ~36 Ω. Very common for mobile and base station use because it only
needs one vertical element.

**Use cases:** Car roof whips, base station verticals, VHF marine antennas.

### Yagi-Uda

A driven dipole with parasitic elements: one reflector behind it and one or
more directors in front. Creates a directional beam. More directors = more
gain and narrower beam, but also a longer boom and narrower bandwidth.

**Use cases:** TV reception (that old rooftop antenna), amateur radio
directional work, point-to-point links. We'll design one in Lesson 13.

### Log-Periodic Dipole Array (LPDA)

Looks similar to a Yagi but works differently — multiple driven dipoles of
graduated size. Trades some gain compared to a Yagi for much wider bandwidth.
The active region shifts along the array as frequency changes.

**Use cases:** Wideband monitoring, EMC testing, TV reception across many
channels, military communications.

### Loop Antennas

Wire bent into a circle (or square, triangle). Small loops (circumference
<< λ) are often used for direction finding and receiving — they're compact
but inefficient for transmitting. Full-wave loops (circumference = λ) are
effective transmit antennas popular in amateur radio.

**Use cases:** AM radio reception (the ferrite bar inside a portable radio is
a loop), HF amateur radio, direction finding.

### End-Fed Half-Wave (EFHW)

A half-wave dipole fed at one end instead of the centre. Requires an impedance
transformer (typically 49:1) because the feedpoint impedance is very high
(~2500 Ω). Popular for portable and stealth amateur installations because the
feedline only needs to connect at one end.

**Use cases:** Portable HF amateur radio, attic and stealth installations.

---

## Family 2: Aperture Antennas

These antennas radiate through an opening (aperture) rather than from a wire.
They become practical at higher frequencies where wavelengths are short enough
to make the structures manageable.

### Parabolic Dish

A reflective dish focuses EM waves onto a feed antenna at the focal point —
exactly like a satellite TV dish. Extremely high gain and very narrow beamwidth.
Gain scales with dish diameter: larger dish = more gain.

**Use cases:** Satellite communication, radio astronomy, point-to-point
microwave links, radar.

### Horn Antenna

A waveguide that flares out into a horn shape. Predictable, well-understood
performance. Often used as the feed for a parabolic dish, or as a reference
antenna for gain measurements.

**Use cases:** Calibration standard, microwave links, EMC testing, radar feeds.

---

## Family 3: Broadband Antennas

These sacrifice some peak performance for the ability to work across a wide
frequency range.

### Discone

A disc above a cone (or set of drooping radials approximating a cone). Your
**Diamond D130N** is a discone. Omnidirectional with reasonable performance
across a very wide bandwidth — typically 10:1 or more (e.g., 25 MHz to
1.3 GHz). The trade-off is modest gain (roughly 0 dBi to 2 dBi) compared
to a resonant antenna tuned for a single band.

**Use cases:** Wideband monitoring and scanning, SDR receiving stations.
The go-to antenna when you want to hear everything. We'll measure yours
with the VNA in Lesson 10.

### Spiral Antennas

Wire wound in a spiral pattern. Inherently broadband *and* circularly
polarised — a rare combination. Common in military and measurement
applications.

**Use cases:** Direction finding, electronic warfare, reference antennas.

---

## Family 4: Array Antennas

Multiple individual elements combined to create a composite pattern with
higher gain, beam steering, or pattern shaping.

### Collinear Array

Multiple dipoles or monopoles stacked vertically, all fed in phase. Narrows
the elevation beamwidth (focusing energy toward the horizon) while maintaining
omnidirectional azimuth coverage. Very common for base stations.

**Use cases:** Mobile phone towers, amateur repeater stations, marine VHF.

### Phased Array

Multiple elements with individually controlled phase (and sometimes amplitude).
Can electronically steer the beam without physically moving. The most
sophisticated antenna technology, used in modern radar, 5G, and satellite
systems. We'll build a simple one in Unit 4.

**Use cases:** Military radar, 5G base stations, satellite tracking, weather
radar, radio astronomy (SKA telescope).

---

## The Trade-Off Triangle

Every antenna design involves balancing three competing factors:

```
        GAIN
       /    \
      /      \
   SIZE ---- BANDWIDTH
```

- **High gain + small size** → narrow bandwidth (e.g., a small Yagi)
- **Wide bandwidth + small size** → low gain (e.g., a rubber duck antenna)
- **High gain + wide bandwidth** → large size (e.g., LPDA or large dish)

You can optimise for any two, but the third will suffer. This is physics,
not an engineering limitation — no clever design can cheat all three
simultaneously. Understanding this trade-off is essential for choosing the
right antenna.

> **🔧 Reference:** The existing [Antenna Types page](../antennas.html)
> provides a visual catalogue with images of each type. Use it alongside this
> lesson as a reference.

---

## Quick Selection Guide

| I want to... | Consider... | Why |
|--------------|-------------|-----|
| Monitor everything 25 MHz–1.3 GHz | Discone (D130N) | Wideband omni |
| Work a single amateur band | Dipole or vertical | Simple, resonant, efficient |
| Get maximum signal from one direction | Yagi | High gain, directional |
| Receive HF with limited space | EFHW or loop | Compact, single-feedpoint |
| Track a satellite | Dish or helix | High gain + circular polarisation |
| Cover many bands with one antenna | LPDA | Broadband + directional |
| Steer a beam electronically | Phased array | No moving parts |

---

## Knowledge Check

1. **Name an antenna suitable for wideband monitoring from 25 MHz to 1.3 GHz.**
   <!-- Discone (e.g., Diamond D130N) -->

2. **Why would you choose a Yagi over a dipole?**
   <!-- For higher gain in a specific direction (directional beam) -->

3. **What type of antenna is the Diamond D130N?**
   <!-- A discone — broadband omnidirectional antenna -->

4. **What is the main advantage of a phased array over a dish?**
   <!-- Electronic beam steering with no moving parts -->

5. **In the gain-size-bandwidth trade-off, why can't a small antenna have both
   high gain and wide bandwidth?**
   <!-- Physics limits it: high gain requires structures comparable to wavelength, and wide bandwidth needs size variation. Small size constrains both. -->

---

## Summary

- Antennas fall into families: wire, aperture, broadband, and array
- Wire antennas (dipole, monopole, Yagi, LPDA) are the most common for HF–UHF
- Aperture antennas (dish, horn) become practical at microwave frequencies
- Broadband antennas (discone, spiral) trade gain for bandwidth
- Array antennas combine elements for higher gain or beam steering
- The **gain-size-bandwidth trade-off** is fundamental — you always compromise
- Choosing the right antenna means matching the type to your specific use case

---

**Previous:** [Lesson 3 — Radiation Patterns](lesson-03-radiation-patterns.md)  
**Next:** [Lesson 5 — Polarisation: Orientation Matters](lesson-05-polarisation.md)
