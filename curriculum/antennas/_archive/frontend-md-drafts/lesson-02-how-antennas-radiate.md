# Lesson 2: From Waves to Wires — How Antennas Radiate

**Unit:** 1 — How Antennas Work  
**Prerequisites:** Lesson 1 (EM Radiation)  
**Equipment needed:** None  
**Estimated time:** 25 minutes

---

## Learning Objectives

By the end of this lesson you will be able to:

- Explain how alternating current in a wire creates electromagnetic radiation
- Describe why a wire carrying DC does not radiate
- Sketch the current distribution on a half-wave dipole
- State the reciprocity principle (TX and RX are the same process in reverse)

---

## The Big Idea

In Lesson 1 we learned what EM waves are. Now the question is: **how do we
create them?** The answer turns out to be beautifully simple — you just need
charges that accelerate. And the easiest way to accelerate charges is to push
alternating current through a wire.

---

## Why DC Doesn't Radiate (and AC Does)

A battery connected to a long wire pushes current in one direction. The
electrons flow steadily. They produce a magnetic field around the wire
(Ampère's law), and there's a static electric field from the battery voltage.
But nothing is *changing* — and it's the **change** that creates radiation.

Now connect an AC source — a radio transmitter — to that wire. The current
flows one way, stops, reverses, flows the other way, stops, reverses again.
The electrons are constantly accelerating and decelerating. Each time they
change speed or direction, they "shake off" a little bit of their
electromagnetic field, and that disturbance propagates outward as an EM wave.

> **The rule:** Static charges produce electric fields. Moving charges produce
> magnetic fields. **Accelerating charges produce electromagnetic radiation.**

This is why frequency matters: at 1 MHz, the current reverses direction one
million times per second. At 1 GHz, it reverses a billion times per second.
More rapid acceleration = more radiation at that frequency.

---

## The Half-Wave Dipole: Nature's Simplest Antenna

Take a wire that's half a wavelength long (λ/2). Split it in the middle and
connect your transmitter to the gap. This is a **half-wave dipole** — the
most fundamental antenna, and the reference against which almost everything
else is measured.

When RF energy is fed into the centre, something remarkable happens: the
current doesn't flow uniformly along the wire. Instead, it forms a **standing
wave pattern**.

### Current Distribution

On a half-wave dipole at its resonant frequency:

- **Maximum current** at the centre (the feedpoint)
- Current decreases smoothly toward the tips
- **Zero current** at the tips (the ends are open — current has nowhere to go)

The shape follows a half-sinusoid: peak in the middle, zero at both ends.

### Voltage Distribution

Voltage does the opposite:

- **Zero voltage** at the centre (low impedance point)
- **Maximum voltage** at the tips (high impedance — open circuit)

This is exactly like a vibrating guitar string: fixed at both ends (that's
where the string is pinned), maximum movement in the middle. The antenna wire
is "fixed" electrically at the tips (zero current) and "moves" most at the
centre (maximum current).

> **🔧 Interactive (future):** Standing wave current visualiser — slider
> controls frequency, wire lights up showing current nodes and antinodes.

---

## How the Current Creates Radiation

Each small segment of the wire carrying AC current radiates a tiny EM wave.
But here's the clever part: because the current varies along the wire
(sinusoidal distribution), the radiation from all these tiny segments
**adds up constructively** in some directions and **cancels out** in others.

The result is a specific **radiation pattern** — a shape describing where the
energy goes. For a dipole, it's a doughnut (toroid) shape around the wire.
We'll explore patterns in detail in Lesson 3.

---

## The Receive Side: Reciprocity

So far we've talked about transmitting — current in the wire creating EM waves.
But antennas work the other way around too.

When an EM wave passes a wire, the electric field component pushes on the
electrons in the wire, causing them to move — creating a current. This current
can be amplified and processed by a receiver. The antenna has converted the
EM wave back into an electrical signal.

The **reciprocity theorem** states:

> An antenna has the same radiation pattern, gain, and impedance whether it is
> transmitting or receiving.

This is incredibly useful. It means:

- We can design an antenna for transmitting and know it will work equally well
  for receiving (and vice versa)
- The radiation pattern we measure on transmit is the same as the reception
  sensitivity pattern
- All the theory we develop works in both directions

> **🔧 Interactive:** [TX/RX Chain Demo](../../../resources/tx-rx-complete.html)  
> Explore how the transmit and receive chains mirror each other. The antenna
> sits at the boundary between the electrical world and the electromagnetic
> world.

---

## Beyond the Dipole: A Preview

The half-wave dipole is the starting point, but antenna engineering is about
finding clever arrangements of conductors that shape the radiation in useful
ways. Everything from a tiny mobile phone antenna to a massive radio telescope
dish is doing the same fundamental thing: creating or capturing EM waves using
currents in conductors.

In the coming lessons we'll see how different conductor arrangements create
different radiation patterns (Lesson 3), why certain types suit certain jobs
(Lesson 4), and how the orientation of the fields matters (Lesson 5).

---

## Knowledge Check

1. **Why does a wire carrying DC not radiate EM waves?**
   <!-- DC = steady current = no acceleration. Radiation requires accelerating charges. -->

2. **Where is the current maximum on a half-wave dipole?**
   <!-- At the centre (feedpoint). It follows a sinusoidal distribution, peaking at the middle. -->

3. **Where is the voltage maximum on a half-wave dipole?**
   <!-- At the tips (ends). Voltage and current are 180° out of phase along the wire. -->

4. **If you design an antenna for transmitting at 145 MHz, can you use it
   for receiving at 145 MHz?**
   <!-- Yes — reciprocity. The pattern, gain, and impedance are the same in both directions. -->

5. **What type of current is needed for an antenna to radiate: AC or DC?**
   <!-- AC — the alternating current creates the accelerating charges necessary for radiation. -->

---

## Summary

- **Accelerating charges create EM radiation** — this is the fundamental
  mechanism behind every antenna
- DC in a wire creates static fields but no radiation; AC creates radiation
- A half-wave dipole has **maximum current at the centre** and **zero current
  at the tips** — a sinusoidal standing wave
- Voltage distribution is the inverse: zero at centre, maximum at tips
- **Reciprocity:** an antenna works identically for transmitting and receiving
- The half-wave dipole is the foundation — all other antenna designs are
  variations on arranging conductors to shape the radiation

---

**Previous:** [Lesson 1 — EM Radiation](lesson-01-em-radiation.md)  
**Next:** [Lesson 3 — Radiation Patterns](lesson-03-radiation-patterns.md)
