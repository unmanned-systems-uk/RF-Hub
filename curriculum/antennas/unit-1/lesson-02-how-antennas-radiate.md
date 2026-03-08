# Lesson 2: From Waves to Wires — How Antennas Radiate

**Unit:** 1 — How Antennas Work  
**Prerequisites:** Lesson 1 (What is EM Radiation?)  
**Equipment:** None  
**Estimated reading time:** 25 min  
**Status:** DRAFT

---

## Learning Objectives

By the end of this lesson you will be able to:

- Explain why a wire carrying DC does not radiate, and why AC does
- Describe how a changing field detaches from a wire and becomes a free EM wave
- Sketch the current and voltage distribution on a half-wave dipole
- Calculate the physical length of a half-wave dipole for a given frequency
- State the reciprocity principle and explain what it means in practice

---

## Section 1 — Bridge from Lesson 1

In Lesson 1 we answered the question: *what is an EM wave?*

You learned that a changing electric field creates a magnetic field, and a changing magnetic field creates an electric field. Each one regenerates the other, and together they propagate outward from their source at the speed of light. The E field and H field travel as a pair, perpendicular to each other and perpendicular to the direction of travel.

That answered *what* the wave is. Now a new question: *how do we make one?*

We have a wire. We have a radio transmitter. Something about connecting the two produces EM waves that travel out into space. What is actually happening inside that wire — and why does the wave leave at all, rather than just sitting there?

This lesson answers that. By the end, you will understand not just that antennas radiate, but *why* they must, and *how* the energy escapes.


---

## Section 2 — DC Doesn't Radiate. AC Does. Here's Why.

Connect a battery to a wire. Electrons flow steadily in one direction. Around the wire, a magnetic field appears — Ampère's law. Alongside the battery voltage, there's an electric field too. Both fields are real and present.

But nothing is *changing*. The fields exist, but they're static — frozen in place. And as you learned in Lesson 1, it's *change* that matters. A static electric field doesn't create a magnetic field. A static magnetic field doesn't create an electric field. Nothing propagates. Nothing leaves.

Now replace the battery with a transmitter outputting AC — alternating current. The current flows one way, slows, stops, reverses, flows the other way, slows, stops, reverses again. The electrons are constantly accelerating and decelerating. The fields around the wire are constantly changing.

And here is the rule — simple enough to memorise, deep enough to build an entire career on:

> **Static charges → electric field.**  
> **Moving charges → magnetic field.**  
> **Accelerating charges → electromagnetic radiation.**

Each time the current reverses, the charges accelerate. Each acceleration shakes the surrounding field. That disturbance propagates outward as an EM wave.

This is also why frequency matters. At 145 MHz, the current reverses 145 million times per second. At 1296 MHz, it reverses nearly 1.3 billion times per second. The fields are changing more rapidly — which is why higher frequencies carry more energy per photon. But the *mechanism* is identical across the entire spectrum.

<!-- VISUAL: Two side-by-side wire diagrams. LEFT: "DC wire" — electrons shown as dots flowing uniformly left to right, field lines around the wire as static concentric rings, labelled "fields present, not changing, no radiation". RIGHT: "AC wire" — electrons shown reversing direction, field lines distorting and peeling away from the wire, small wave packets moving outward, labelled "fields changing, radiation escaping". A clock or cycle counter beneath the AC wire ticking through one complete cycle. -->


---

## Section 3 — The Detachment Story: How the Wave Escapes

Understanding that AC radiates is one thing. Understanding *why the wave doesn't just collapse back into the wire* is another — and it is the deeper insight.

This is the story of field detachment. It happens in four acts.

### Act 1 — The field expands

When current begins to flow in the wire, a magnetic field builds around it. As the voltage rises, an electric field builds too. These fields don't sit on the wire surface — they extend outward into the space around it. The further they extend, the further they have to travel to get back if they need to.

### Act 2 — The current reverses

The AC source completes its half-cycle. Current slows to zero, then begins to reverse. The electric and magnetic fields that built up during the first half-cycle now need to collapse back — but there's a problem. Fields don't travel instantaneously. They travel at the speed of light.

The field that expanded outward is now some distance away from the wire. To collapse back, it would have to travel back at the speed of light. But the current is *already reversing* before that can happen.

### Act 3 — The field cannot follow

The new current builds a *new* field in the opposite direction — close to the wire, where the new field is forming. Meanwhile the old field is still out there, some distance away, and it can no longer connect smoothly to what's happening at the wire.

Think of it like blowing a soap bubble. You blow outward — the bubble expands. Then you reverse and try to suck it back in. But if it has expanded far enough, the neck pinches. The outer bubble separates from the air stream. It's free.

The field does exactly this. The outer field — the part that expanded furthest — pinches off from the wire.

### Act 4 — The wave is free

The detached field packet is now self-sustaining. Its changing electric component regenerates its magnetic component, and vice versa — exactly as you learned in Lesson 1. It no longer needs the wire. It propagates outward at the speed of light, carrying energy with it.

This is electromagnetic radiation. Not a by-product of the process — *the process itself*.

<!-- VISUAL: Four-panel sequential diagram. Panel 1: Wire with current flowing upward, field lines (E and H) expanding outward like expanding rings. Panel 2: Current slowing — field lines shown at maximum extent, arrow on current reversing. Panel 3: New field forming close to wire (opposite direction), old field shown detaching — a "pinch point" visible where the field separates. Panel 4: Detached field packet propagating outward freely, wire now generating next cycle's field, previous packet already distant. Each panel labelled Act 1–4 with a one-line caption. -->

If the text story above clicked, continue reading. If you'd rather see it animated first, `em-radiation.html` walks through the same four acts with live SVG diagrams — current building, fields expanding, the pinch-off, the free wave. It covers the same ground in a different medium. Either path leads to the same understanding.

<!-- RESOURCE LINK: em-radiation.html — Layer 2 visual path for the detachment story. Standalone page, no guided questions, no "come back after." Simple off-ramp for visual learners. HTML conversion: render as a resource block with a direct link, consistent with the resource block style used elsewhere in the lesson. -->

---


## Section 4 — The Half-Wave Dipole

Now we can build something.

Take a straight piece of wire. Feed AC into the centre. The wire radiates — we now know why. But the *amount* of radiation, and the *pattern* of where it goes, depends on the wire's length relative to the wavelength of the signal.

When the wire is exactly half a wavelength long (λ/2), something special happens: the current distributes itself along the wire in a way that makes it a very efficient radiator. This is the **half-wave dipole** — the simplest practical antenna, and the reference standard against which almost every other antenna design is compared.

### Current Distribution: Why It Isn't Uniform

You might expect the current to be the same everywhere along the wire. It isn't. The ends of the wire are open — there's nowhere for current to go. Current at an open end must be zero. That's a hard boundary condition.

At the centre — the feedpoint — current flows freely from the transmitter into the wire. That's where current is at its maximum.

Between centre and tip, the current tapers from maximum to zero, following a smooth half-sinusoid curve.

<!-- VISUAL: Horizontal half-wave dipole diagram. Wire spans full width, split at centre with feedpoint connector shown. Overlay: current amplitude as a standing wave curve — maximum at centre, zero at both tips. Arrow annotations: "Maximum current — feedpoint" pointing to centre, "Zero current — open end" pointing to each tip. Curve is shaded/filled to read as a lobe shape. A secondary version shows the same wire from above with colour mapping (red = high current, blue = zero) for visual learners who find the curve abstract. -->

### Voltage Distribution: The Inverse

Voltage behaves in the opposite way. At the centre, where current is maximum, voltage is at its minimum (the feedpoint is a low-impedance point). At the tips, where current is zero, voltage is at its maximum — the open ends look like a high-impedance point.

The analogy that works best here is a **vibrating guitar string** pinned at both ends. The pins are fixed — no movement at the ends. Maximum movement occurs in the middle. The antenna wire is "pinned" electrically at the tips (zero current), with maximum "movement" at the centre (maximum current). The shape is a standing wave — not a travelling one.

<!-- VISUAL: Guitar string analogy. Top half: vibrating guitar string between two bridge pins — shown mid-vibration with maximum displacement at centre, zero at both ends. Label "fixed (zero movement)" at pins, "maximum movement" at centre. Bottom half: dipole wire — same shape, same labels, but relabelled "zero current" at tips and "maximum current" at feedpoint. Title: "The same physics — different medium." -->

### Physical Length: Putting the Maths Together

In Lesson 1 you learned λ = c / f. Now that formula becomes *useful* — because the physical length of a half-wave dipole is simply:

**L = λ/2 = c / (2f)**

Where:
- **L** = total length of the dipole (metres)
- **c** = speed of light = 300,000,000 m/s
- **f** = frequency (Hz)

In practice, the dipole has two equal arms, each λ/4 long:

**Each arm = c / (4f)**


Let's work through a real example — the 2-metre amateur band, centred at 145 MHz.

**Step 1 — convert to Hz:**  
145 MHz = 145,000,000 Hz

**Step 2 — find the wavelength:**  
λ = 300,000,000 / 145,000,000 = 2.069 m

**Step 3 — find the total dipole length:**  
L = 2.069 / 2 = **1.034 m**

**Step 4 — find each arm:**  
Each arm = 1.034 / 2 = **0.517 m** (about 52 cm)

So a 2m dipole is roughly a metre tip-to-tip — something you can easily hold in both hands outstretched.

For comparison:
- **70cm band (435 MHz):** each arm ≈ 17 cm — fits across your palm
- **23cm band (1296 MHz):** each arm ≈ 5.8 cm — shorter than your thumb

This is why higher frequencies allow physically smaller antennas. The maths from Lesson 1 has a direct, touchable consequence.

> **Note for students with a physics background:** In free space, the formula above gives exact results. In practice, a real wire dipole needs to be cut slightly *shorter* than the theoretical λ/2 due to the "velocity factor" of current in a conductor vs. free space. At these frequencies the correction is small — about 2–5%. We'll cover this properly in Lesson 11 (Dipole Deep Dive). For now, use the free-space formula and know that real dipoles are trimmed slightly shorter.

<!-- VISUAL: Formula animation — L = c / (2f). Letters animate on hover/scroll to rearrange. Show three forms: solving for L (standard), solving for f (what frequency does this dipole resonate at?), solving for c (implied — shows the constant). Each rearrangement: non-target letters grey out, target letter slides to the left side of the equation, other terms rearrange to the right. Worked example panel beside the formula: f = 145 MHz input field (pre-filled), output shows L = 1.034 m and each arm = 0.517 m. User can edit frequency to see result update live. -->

<!-- VISUAL: Human-scale length comparison. Three horizontal dipoles drawn to scale against a person silhouette: 2m band dipole (≈1m tip-to-tip, roughly arm-span), 70cm band (≈35cm, roughly forearm), 23cm band (≈12cm, hand-width). Labels on each with frequency, wavelength, and physical length. Same visual language as the spectrum comparison in Lesson 1. -->


---

## Section 5 — The Receive Side: Reciprocity

Everything above describes *transmitting* — current in a wire creating EM waves that propagate outward. But you've heard that "an antenna works the same for transmitting and receiving." What does that actually mean?

When an EM wave passes through space, its electric field component creates a voltage gradient along any conductor it passes through. That gradient drives electron movement — it induces a current. A receiver amplifies and processes that current.

Notice the language: the field *passes through* the wire. The wave doesn't "hit" the antenna and stop. The antenna samples the field that's already threading through it. This distinction matters — we'll return to it in Lesson 5 when we discuss polarisation, because it's the reason that rotating an antenna changes signal strength.

For now, the key result is this:

> **The Reciprocity Theorem:** An antenna has the same radiation pattern, gain, and impedance whether it is transmitting or receiving.

This is not obvious — it requires proof, which lives in the mathematics of Maxwell's equations. But the practical consequences are very useful:

- Design an antenna for transmitting and it works identically for receiving
- The radiation pattern on transmit is the same as the reception sensitivity pattern on receive
- Every antenna measurement we make applies in both directions

<!-- VISUAL: TX/RX mirror diagram. Left side: transmitter → feedline → antenna → EM wave radiating outward. Right side: EM wave arriving → same antenna → feedline → receiver. A vertical mirror line in the centre. The antenna shape is identical on both sides. Highlight: "Same antenna, same pattern, same impedance." Caption: "Reciprocity: the antenna doesn't know which direction the energy is flowing." -->

### ▶ Interactive Exercise — tx-rx-complete.html

**Open:** `tx-rx-complete.html` (link in the lesson resources bar)

This interactive shows the full transmit and receive chains side by side.

1. Trace the signal path from transmitter to antenna on the TX side.
2. Trace the signal path from antenna to receiver on the RX side.
3. Find the point where the electrical world and the electromagnetic world meet on each side. They are the same point — the antenna feedpoint.
4. *Question: what does "the antenna is at the boundary between two worlds" mean in terms of what it converts and in which direction?*

---


## Section 6 — Self-Check

Work through these without looking back at the lesson. If you get stuck, re-read the relevant section — don't just peek at the answer.

---

### Part A — Dipole Length Calculations

For each frequency, calculate: (1) wavelength, (2) total dipole length, (3) length of each arm.

Show all working. Use c = 300,000,000 m/s. Write out the full numbers before using any shortcuts.

1. **145 MHz** (2m amateur band)
2. **435 MHz** (70cm amateur band)
3. **1296 MHz** (23cm amateur band)
4. **27 MHz** (CB radio / 11m band) — *this one might surprise you*
5. **2400 MHz** (WiFi 2.4 GHz band) — *convert carefully: 2400 MHz = ? Hz*

> **Check:** For question 4, your answer should be well over 5 metres tip-to-tip. If it isn't, recheck your Hz conversion.

---

### Part B — Concept Questions

Answer in one or two sentences. Complete sentences, not single words.

1. A wire connected to a 12V DC battery has current flowing through it. Does it radiate EM waves? Why or why not?

2. The current at the tips of a half-wave dipole is always zero. What physical reason forces this to be true?

3. A half-wave dipole is resonant at 145 MHz. You use the same antenna to receive a signal at 145 MHz. Is the radiation pattern the same? What principle does this rely on?

4. In your own words: why does the EM field detach from the wire rather than collapsing back into it when the current reverses?

5. You have a dipole cut for 145 MHz. Someone asks you to use it at 435 MHz. The antenna will still radiate — but what has changed about the relationship between the antenna's physical length and the new wavelength?

---

### Part C — Sketch from Memory

Without looking at the lesson:

Draw a horizontal half-wave dipole. On your sketch, mark:
- Where current is at maximum
- Where current is zero
- Where voltage is at maximum
- Where voltage is zero
- Where the feedpoint is

Then add a rough sketch of the current distribution as a curve overlaid on the wire. Label the curve shape.

---

### Part D — Apply and Connect (optional, stretch)

These questions require you to connect ideas across Lesson 1 and Lesson 2.

1. In Lesson 1 you placed 145 MHz on the EM spectrum. In Lesson 2 you calculated the physical size of a 145 MHz dipole. A visible light wave has a frequency of roughly 600 THz. If you were to make a "dipole" for visible light, how long would each arm be? What does this tell you about why optical antennas are not practical in the traditional sense?

2. The detachment story in Section 3 says the field "cannot snap back in time." At what speed would the field need to travel to return to the wire in less than half a cycle at 145 MHz? (Hint: calculate the half-period in seconds, estimate how far the field travels in that time at c.)

---


## Lesson Summary

- **Accelerating charges create EM radiation.** DC (steady current) produces static fields but no radiation. AC (reversing current) produces continuously accelerating charges — and radiation.

- **The wave detaches because the field cannot keep up with the reversing current.** The outer field expands, the current reverses before it can return, the field pinches off, and a self-sustaining wave propagates freely.

- **A half-wave dipole has maximum current at the centre (feedpoint) and zero current at the tips.** Voltage is the inverse. The distribution follows a half-sinusoid — like a vibrating string pinned at both ends.

- **Physical length = c / (2f).** Each arm = c / (4f). The higher the frequency, the shorter the antenna.

- **Reciprocity:** an antenna has the same pattern, gain, and impedance on transmit and receive. The antenna sits at the boundary between the electrical world (current in conductors) and the electromagnetic world (waves in free space), and converts energy in both directions equally.

---

## What's Next

Lesson 3 explores **radiation patterns** — the 3D shape of where the energy goes. The half-wave dipole's toroid pattern is the starting point. We'll look at how different antenna geometries reshape that pattern, why some directions radiate more than others, and how we describe and measure the shape mathematically.

The interactive `radiation-3d-v5.html` will be the centrepiece of Lesson 3.

---

*Lesson 2 of 20 — Unit 1: How Antennas Work*
