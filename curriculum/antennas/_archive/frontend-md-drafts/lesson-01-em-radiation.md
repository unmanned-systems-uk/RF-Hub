# Lesson 1: What is Electromagnetic Radiation?

**Unit:** 1 — How Antennas Work  
**Prerequisites:** None  
**Equipment needed:** None  
**Estimated time:** 25 minutes

---

## Learning Objectives

By the end of this lesson you will be able to:

- Explain that electromagnetic waves are coupled electric and magnetic fields
  propagating through space
- Use the relationship λ = c / f to convert between frequency and wavelength
- Identify where radio waves sit on the electromagnetic spectrum
- Calculate the wavelength of common radio frequencies

---

## The Big Idea

Everything in radio — every antenna, every signal, every transmission — comes
down to one phenomenon: **electromagnetic radiation**. Before we can understand
how antennas work, we need to understand what they're actually creating and
capturing.

## What Are Electromagnetic Waves?

Imagine dropping a stone into a still pond. Ripples spread outward from the
impact point — energy travelling through the water. Electromagnetic (EM) waves
work similarly, except they don't need water or any medium at all. They travel
perfectly well through the vacuum of space.

An EM wave is made of two things oscillating together:

- **An electric field (E)** — the same kind of field that makes a balloon stick
  to your jumper after rubbing it
- **A magnetic field (H)** — the same kind of field that makes a compass needle
  point north

These two fields are locked at right angles to each other, and both are at right
angles to the direction the wave travels. They feed each other: a changing
electric field creates a magnetic field, and a changing magnetic field creates an
electric field. Once started, this self-sustaining cycle carries energy forward
at the speed of light.

> **Key point:** EM waves don't need a medium. Radio signals from distant
> spacecraft travel through the vacuum of space to reach us. This is
> fundamentally different from sound, which needs air (or another material) to
> travel through.

### The Three Directions

For a wave travelling toward you:

- The **electric field** oscillates up and down (or side to side)
- The **magnetic field** oscillates side to side (or up and down) — always
  perpendicular to the electric field
- The **wave itself** moves forward — perpendicular to both fields

This is easiest to understand visually. Open the interactive visualisation below
and watch how the E and H fields relate to each other.

> **🔧 Interactive:** [EM Radiation Visualiser](../../../resources/em-radiation.html)  
> **🔧 Interactive:** [EM Wave Animation](../../../resources/em-animato-2.html)  
> Observe: the E-field (typically shown in red/blue) and H-field (typically
> green) oscillate in sync but in perpendicular planes.

---

## The Electromagnetic Spectrum

EM waves come in an enormous range of frequencies. The only difference between
radio waves, visible light, and X-rays is their frequency (and therefore
wavelength). They're all the same fundamental phenomenon.

| Region | Frequency Range | Wavelength Range | What Uses It |
|--------|----------------|------------------|--------------|
| ELF/VLF | 3 Hz – 30 kHz | 100,000 km – 10 km | Submarine comms |
| LF | 30 – 300 kHz | 10 km – 1 km | AM longwave radio, NDB |
| MF | 300 kHz – 3 MHz | 1 km – 100 m | AM broadcast |
| HF | 3 – 30 MHz | 100 m – 10 m | Shortwave, amateur radio |
| VHF | 30 – 300 MHz | 10 m – 1 m | FM radio, airband, 2m ham |
| UHF | 300 MHz – 3 GHz | 1 m – 10 cm | TV, mobile, 70cm ham, Wi-Fi |
| SHF | 3 – 30 GHz | 10 cm – 1 cm | Satellite, radar, 5G |
| EHF | 30 – 300 GHz | 1 cm – 1 mm | Millimetre wave, future 6G |
| Infrared | 300 GHz – 400 THz | 1 mm – 750 nm | Heat, remote controls |
| Visible light | 400 – 790 THz | 750 – 380 nm | Your eyes! |
| UV / X-ray / Gamma | > 790 THz | < 380 nm | Medical, nuclear |

As radio engineers, we work primarily in the HF through SHF range. But the
physics is the same across the entire spectrum.

---

## Frequency, Wavelength, and the Speed of Light

Every EM wave has two key properties that are locked together:

- **Frequency (f)** — how many complete oscillations per second, measured in
  Hertz (Hz). 1 MHz = 1,000,000 cycles per second.
- **Wavelength (λ, "lambda")** — the physical distance from one wave peak to
  the next, measured in metres.

They're related by the speed of light:

```
λ = c / f

where:
  λ = wavelength in metres
  c = speed of light ≈ 300,000,000 m/s (3 × 10⁸ m/s)
  f = frequency in Hz
```

> **Practical shortcut:** For MHz, use λ(metres) = 300 / f(MHz).  
> This is the single most-used equation in antenna work.

### Worked Examples

**Example 1:** What is the wavelength of a 145 MHz signal (2m amateur band)?

```
λ = 300 / 145 = 2.07 metres
```

That's why it's called "the 2 metre band" — the wavelength is approximately
2 metres. When we design a dipole for 145 MHz, it will be roughly 1 metre
long (half a wavelength — we'll learn why in Lesson 2).

**Example 2:** What is the wavelength of a 1090 MHz ADS-B signal?

```
λ = 300 / 1090 = 0.275 metres ≈ 27.5 cm
```

Notice how higher frequency = shorter wavelength. ADS-B antennas are physically
much smaller than 2m antennas because the waves they handle are shorter.

**Example 3:** FM broadcast at 98.5 MHz?

```
λ = 300 / 98.5 = 3.05 metres
```

A full-size FM broadcast antenna is physically large — that's why those tall
towers with multiple elements exist.

---

## Why This Matters for Antennas

Here's the crucial insight that will recur throughout this entire curriculum:

**Antenna dimensions are directly related to wavelength.**

An antenna needs to be a significant fraction of the wavelength it's designed
for. A half-wave dipole for 145 MHz is about 1 metre long. A half-wave dipole
for 7 MHz (the 40m amateur band) would be about 20 metres long. A half-wave
dipole for 2.4 GHz Wi-Fi is about 6 centimetres.

This is why:

- HF antennas are big (long wires, large loops)
- VHF/UHF antennas are medium-sized (the rubber duck on your handheld)
- Microwave antennas are tiny (the chip antenna inside your phone)
- Your Diamond D130N discone is physically designed to cover a huge bandwidth,
  so it contains elements spanning many different sizes

Every design decision in antenna engineering traces back to the relationship
between physical dimensions and wavelength.

---

## Knowledge Check

Test yourself before moving on:

1. **What two fields make up an electromagnetic wave?**
   <!-- Electric field and magnetic field, oscillating perpendicular to each other -->

2. **What is the wavelength of a 440 MHz signal (70cm band)?**
   <!-- λ = 300/440 = 0.682 m ≈ 68 cm — that's why it's called 70cm -->

3. **If you double the frequency, what happens to the wavelength?**
   <!-- It halves. λ and f are inversely proportional. -->

4. **A signal has a wavelength of 10 metres. What is its frequency?**
   <!-- f = 300/10 = 30 MHz — that's the boundary between HF and VHF -->

5. **Can radio waves travel through a vacuum? Why or why not?**
   <!-- Yes — EM waves are self-sustaining (E creates H, H creates E) and need no medium -->

---

## Summary

- EM waves are coupled electric and magnetic fields propagating at the speed
  of light
- Radio waves, light, and X-rays are all EM radiation — just at different
  frequencies
- **λ = 300 / f(MHz)** is the key relationship for antenna work
- Higher frequency = shorter wavelength = physically smaller antennas
- Antenna dimensions scale with wavelength — this is the foundation of
  everything that follows

---

**Next lesson:** [Lesson 2 — From Waves to Wires: How Antennas Radiate](lesson-02-how-antennas-radiate.md)
