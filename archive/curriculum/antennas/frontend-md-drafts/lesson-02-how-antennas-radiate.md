# Lesson 2 — From Waves to Wires: How Antennas Radiate

**Unit:** 1 — How Antennas Work
**Prerequisite:** Lesson 1 — What is EM Radiation?
**Equipment Needed:** None
**Estimated Time:** 25 minutes theory + interactive exploration

---

## Learning Objectives

By the end of this lesson you will be able to:

1. Explain why a wire carrying DC does not radiate, and why AC does
2. Describe the four-step process by which a field detaches from a wire and becomes a free-travelling wave
3. Identify the current and voltage distribution on a half-wave dipole
4. Calculate the physical length of a half-wave dipole for a given frequency
5. State the reciprocity theorem and explain what it means in practice

---

## 1. The Question Lesson 1 Left Open

Lesson 1 answered: *what is electromagnetic radiation?*

A self-sustaining wave of coupled E and H fields, propagating at the speed of light. Changing electric fields create magnetic fields, changing magnetic fields create electric fields, and the chain reaction propagates outward, needing no medium, needing nothing more from its source.

But we left one question unanswered: **how do you actually make one?**

You have a transmitter. You have a wire. How does electrical energy in that wire become a wave in space? That is the question this lesson answers — step by step, slowly enough to see what's happening at each stage.

The mechanism is the same one Lesson 1 introduced: **accelerating charges**. What we're going to do now is slow it right down and watch it work.


---

## 2. DC Doesn't Radiate — AC Does

Connect a battery to a long wire. Electrons flow, steadily, in one direction. Around the wire, a magnetic field appears — textbook Ampère's law, perfectly predictable. The electric field from the battery's voltage is there too. Both fields exist.

But nothing is *changing*. The fields sit there, tethered to the current that made them. Move the electrons and the field moves with them, like a shadow. It doesn't break free. It doesn't travel anywhere.

Now connect a radio transmitter to that wire instead. The current surges one way, slows, stops, reverses, surges the other way. The electrons are constantly accelerating and decelerating, changing direction with every cycle. And as we established in Lesson 1: **accelerating charges produce electromagnetic radiation.**

At 145 MHz, this reversal happens 145 million times per second. Each acceleration event launches a tiny EM disturbance. At that frequency, 145 million disturbances launch per second — all at the same frequency, all adding together into the wave that leaves your antenna.

<!-- VISUAL: dc-vs-ac-radiation
Two-panel animation, side by side, equal width:

LEFT PANEL — "DC: No Radiation"
  Horizontal wire with a battery symbol. Arrows along the wire showing steady electron flow in one direction, uniform, unchanging. Around the wire: magnetic field circles in cyan (right-hand rule), perfectly static — no movement, no pulsing. After 2s a label fades in: "Steady current → static field → goes nowhere." A soft crossed-out wave symbol.

RIGHT PANEL — "AC: Radiation"
  Same wire, but with a sine-wave source symbol. Current arrows change direction smoothly, following a sinusoidal pattern — right, slowing, reversing, left. At the moments of peak acceleration (not peak velocity — this is important), bursts of amber/cyan field energy detach from the wire and ripple outward. Like stones dropped in water, one per cycle.

Caption beneath both panels: "The difference isn't how much current flows. It's whether the current is changing. Change is the engine."
-->

The boundary between "not radiating" and "radiating" is not about current magnitude — it's about **acceleration**. This is why a power line at 50 Hz radiates a little, and a 145 MHz antenna radiates efficiently at that frequency. Same physics, very different frequencies. The antenna's job is to make the acceleration process as efficient as possible for a specific frequency. We'll get to that shortly.


---

## 3. The Field Detachment Story

We've established that accelerating charges create EM waves. Now let's watch exactly how the wave breaks free of the wire and becomes independent. This is one of the most important ideas in antenna theory, and it's worth taking your time with it.

Think back to the soap bubble analogy from Lesson 1. You create the bubble — but once it seals and detaches from the wand, it floats free, carrying its own structure, needing nothing more from your breath. A launched EM wave is exactly the same. But how does the "detachment" happen? What physically causes the field to let go of the wire?

The story has four acts.

**Act 1 — Current builds, field expands.**
The transmitter pushes current into the wire. As the current grows, the electromagnetic field around the wire grows with it. This field expands outward — slowly at first, then more strongly as the current approaches its peak. The field is attached to the wire. Think of it as a bubble inflating, still connected at the neck.

**Act 2 — Current peaks, then starts to fall.**
The AC cycle continues past its peak. The current starts to decrease. The field that had been expanding now begins to contract — pulling back toward the wire. It's still connected. Still tethered.

**Act 3 — Current reverses. The field can't follow.**
Here is the critical moment. The current doesn't just drop to zero — it reverses direction. The transmitter is now pushing field energy of the *opposite polarity* outward. The old field (from the first half-cycle) is still out there in space, trying to collapse back inward. But it collides with the new, opposite-polarity field moving outward from the wire.

The two fields of opposite polarity cannot simply pass through each other. The old field is **cut off** — sealed, pinched away from the wire. The connection is broken.

**Act 4 — The field propagates freely.**
The detached field is now independent. It carries both E and H components — as we learned in Lesson 1, you cannot have one without the other in a propagating wave. It has energy. It has no choice but to travel outward at the speed of light. The wire is already busy with the next cycle. The wave is gone.

This process repeats every cycle. At 145 MHz: 145 million field bubbles inflated, pinched off, and launched every second. That continuous stream of detached field energy is the radio signal leaving your antenna.

<!-- VISUAL: field-detachment-4-acts
A four-frame sequential diagram (or a single continuous animation the student can step through with a "Next →" button):

FRAME 1 — "Act 1: Current builds, field expands"
  A vertical wire at left. Current arrows pointing upward (growing in size). Amber/cyan field lines expanding outward from the wire, like a balloon inflating. Fine "tether lines" show the field still connected to the wire.
  Label: "Field is attached — connected to the current creating it."

FRAME 2 — "Act 2: Current peaks, then falls"
  Current arrows at maximum height, then beginning to shrink. Field bubble at its largest extent. The outer edge of the field starting to pull slightly inward.
  Label: "Current reversing — field trying to contract."

FRAME 3 — "Act 3: Current reverses — pinch-off"
  Current arrows now pointing downward (reversed). New field of opposite polarity (shown as inverted/different shade) emerging from the wire and moving outward. The old outer field bubble being sealed off — a clear visual "snap" at the wire, like a soap bubble pinching closed.
  Label: "The critical moment. Old field cut off from the wire."
  Highlight: The pinch point should have a brief bright flash/snap animation.

FRAME 4 — "Act 4: Free wave propagates"
  The detached field bubble drifting rightward (away from wire) at c. The wire already building the next bubble.
  Label: "Self-sustaining. Needs no medium. Travels at c."
  Show: Two bubbles in space to convey the continuous, repeating nature.

Style: Amber for E-field, cyan for H-field. Dark background. Controls: "Step →" button and optional "Play as animation" toggle. Caption below all frames: "This happens 145 million times per second at 145 MHz."
-->


### Now Watch It Happen

Reading about field detachment is one thing. Watching it happen in a well-built animation is another. The **How Antennas Radiate** interactive was built exactly for this lesson — it walks through the four acts with animated SVG diagrams, showing the current, the expanding fields, the reversal, and the pinch-off.

Work through it act by act, with these prompts in mind:

<!-- INTERACTIVE: em-radiation.html
Embed or link to: unit-1/em-radiation.html
Display: Full interactive panel, inline in the lesson after the four-act text.

Guided exercise (displayed above or alongside the interactive):

  Step 1 — "Watch Act 1. The field lines expand from the wire as the current grows. Notice that the field is *connected* — it hasn't let go yet. There's still a visible attachment to the wire."

  Step 2 — "As Acts 2 and 3 transition, watch carefully for the moment of reversal. Can you see the instant the old field loses its connection? Look for the pinch-off point at the wire."

  Step 3 — "In Act 4, the field is independent. It contains both E and H components — the two colours. Ask yourself: why can it exist without the wire now, when earlier it needed the wire to exist?"

  Step 4 — "The final act shows a receiving antenna. Watch what happens to the charges in the second wire as the wave arrives. This is how a receiving antenna works — and it connects directly to Section 5 of this lesson."

  Reflection prompt: "After working through all four acts, close your eyes and describe the detachment story from memory. Can you hit all four beats? If not, run through it once more — this is one of the mental models worth locking in solidly."

Note: This is the PRIMARY interactive for Lesson 2. Not optional.
-->

---

## 4. The Half-Wave Dipole

We now have a wire that can launch EM waves. The next question is: what shape should the wire be for doing this as efficiently as possible?

The answer is the **half-wave dipole**: a wire that is half a wavelength long, split at the midpoint, with the transmitter connected to the gap at the centre. It is the most fundamental antenna in existence. Almost every other antenna design is either a variation on it or is described in terms of how it compares to one.

### The standing wave: why current isn't uniform

When RF energy enters the dipole at the centre, the current doesn't flow at equal strength along the whole length. Instead, it forms a **standing wave pattern** — a frozen shape that repeats at the antenna's resonant frequency.

Picture a guitar string. Pluck it and it vibrates in a specific shape: zero movement at both fixed ends, maximum movement at the centre. It doesn't vibrate randomly — it vibrates in a clean resonant pattern dictated by its length and the speed of sound in the string.

The dipole works identically. The two ends of the wire are open — there's nowhere for current to continue, so the current must be zero there. The current therefore peaks at the centre (where energy enters) and tapers smoothly to zero at both tips, following a half-sinusoid.

**Current distribution on a half-wave dipole:**
- Maximum at the centre feedpoint
- Smoothly decreasing toward the tips
- Zero at both tips

**Voltage distribution** is the mirror image:
- Zero at the centre (this is *why* we feed it there — low impedance, easy to connect)
- Maximum at both tips (high impedance, open circuit)


<!-- VISUAL: dipole-current-distribution
A horizontal dipole wire centred on the page. Feed gap visible at the centre.

OVERLAY 1 — Current distribution (default view):
  A sinusoidal amplitude curve overlaid on the wire. Peak at the centre (feedpoint). Curve tapers symmetrically to zero at both tips. The curve fills the space between the wire ends, so the standing wave shape is visually clear.
  Colour: amber curve, labelled "Current (I)".
  Labels: "Maximum current" at the centre peak. "Zero current (open end)" at both tips.

OVERLAY 2 — Voltage distribution (activated by toggle):
  Inverse shape: minimum at the centre, maximum at both tips.
  Colour: purple curve, labelled "Voltage (V)".
  Labels: "Zero voltage — low impedance — feedpoint" at centre. "Maximum voltage — high impedance" at both tips.

Toggle button: "Show Current / Show Voltage" — lets student see both distributions and understand they are complementary.

Secondary panel: A guitar string diagram alongside for the analogy. Fixed ends (bridge/nut) = zero movement = zero current. Maximum vibration in the centre = maximum current = feedpoint. Label: "The same resonant pattern appears in both systems."

Animation option: Gently pulse the current distribution curve to show the standing wave "breathing" — the amplitude oscillates but the pattern shape stays the same.
-->

### Calculating the physical length

Here is where Lesson 1's λ = c/f formula earns its keep. A half-wave dipole's total length is λ/2. Each arm (called an *element*) is λ/4.

Total dipole length:

**L = λ/2 = c / (2f)**

In the MHz shortcut:

**L (metres) = 150 / f (MHz)**

Let's work three real frequencies from scratch — full numbers first, then the shortcut to confirm:

**145 MHz (2-metre band)**
L = 300,000,000 ÷ (2 × 145,000,000) = 300,000,000 ÷ 290,000,000 = **1.034 metres total**
Each arm: 0.517 metres — just over half a metre.
Shortcut check: 150 ÷ 145 = 1.034 m ✓

**435 MHz (70-centimetre band)**
L = 300,000,000 ÷ (2 × 435,000,000) = 300,000,000 ÷ 870,000,000 = **0.345 metres total**
Each arm: 0.172 metres — about 17 cm. Fits in your hand.
Shortcut check: 150 ÷ 435 = 0.345 m ✓

**1296 MHz (23-centimetre band)**
L = 300,000,000 ÷ (2 × 1,296,000,000) = 300,000,000 ÷ 2,592,000,000 = **0.116 metres total**
Each arm: 0.058 metres — under 6 cm.
Shortcut check: 150 ÷ 1296 = 0.116 m ✓

The pattern is worth noticing: as frequency goes up, the antenna shrinks. The 2-metre-band dipole is just over a metre across. The 23-centimetre-band dipole fits across your palm. The λ = c/f relationship from Lesson 1 directly controls the physical size of every antenna you will ever build or use.

<!-- VISUAL: formula-animation-dipole-length
Animated formula card:

Main formula displayed: L = c / (2f)

Three interactive modes — user taps/clicks a variable to solve for it:
  Tap L → shows L = c / (2f)  [default]
  Tap f → letters rearrange to show f = c / (2L)
  Tap c → letters rearrange to show c = 2Lf

Animation: When a variable is tapped, the other letters visibly slide/rotate into their new positions. The selected variable glows briefly.

Below the formula: A frequency input slider (50 MHz to 1500 MHz).
As the slider moves, a live display shows:
  - Full calculation step (e.g. "300,000,000 ÷ (2 × 435,000,000) =")
  - Total length in metres
  - Each arm length in metres and centimetres

Style: Consistent with the λ=c/f animation from Lesson 1. Same variable colour scheme. Makes clear this formula is a direct application of L1's work.
-->

**A word on why λ/2 specifically.** A half-wavelength is where the dipole *resonates* — the standing wave current pattern fits perfectly, and the antenna's impedance at the feedpoint is a pure resistance with no reactive component. That makes it straightforward to connect to standard coaxial cable.

Why does resonance happen at λ/2 rather than λ/4 or λ? That's a question of reactance and impedance, which are the core of Unit 2. We'll give it the full treatment in Lesson 6. For now: accept it as a well-established fact, and hold the *why* as a question worth answering — because the answer is satisfying.


---

## 5. The Receive Side: Reciprocity

So far everything has been about transmitting — current in the wire creating EM waves. Antennas work the other way too. So what happens in reverse?

When an EM wave travels through the space where a wire is sitting, the **electric field component of that wave creates a force along the length of the conductor**. That force drives electron movement — a tiny current. The wire has converted the wave back into an electrical signal. That signal can be amplified, filtered, and decoded by a receiver.

Pay attention to the language there. The field *passes through* the space the conductor occupies and *induces* a current. The wave doesn't arrive and stop. It doesn't hit the antenna the way a ball hits a wall.

> **You might picture a radio wave arriving like an ocean wave crashing onto a beach — a wall of energy hitting the antenna and being absorbed.** This picture is intuitive, but it will mislead you as you go further. The EM wave doesn't stop at the antenna. The wavefront travels through the antenna's location, and as it does, the E field along the length of the conductor drives a current. The antenna is a *resonant sampler* of a field that threads through it — not a collector that intercepts and stops the wave.
>
> We'll replace this mental model properly in Lesson 5 when we cover polarisation. That's the lesson where the distinction becomes critical and we can address it fully. For now: use the word *induces* and you'll be thinking correctly.

### The Reciprocity Theorem

The transmit and receive processes are governed by identical physics. This leads to one of the most useful principles in all of antenna engineering:

**An antenna has the same radiation pattern, gain, and impedance whether it is transmitting or receiving.**

This is the **reciprocity theorem**. In practice it means:

- Design an antenna for transmitting and you automatically have a design for receiving — same pattern, same performance, no separate optimisation needed
- Measure the radiation pattern on transmit (which is easier to do in a lab) and you know the receive sensitivity pattern too
- All the mathematics developed for TX applies equally to RX

The antenna sits at the boundary between the electrical world — cables, transmitters, receivers — and the electromagnetic world — free-space waves. Reciprocity tells you that this boundary crossing works equally well in both directions.

<!-- VISUAL: tx-rx-boundary
A clean horizontal diagram:

LEFT SIDE — "Electrical World"
  A transmitter/receiver block with coax cable leading rightward to the feedpoint. Current arrows on the cable. Labels for key components (PA, ATU, feedline).

CENTRE — The antenna (half-wave dipole shown vertically)
  Feedpoint at the centre, labelled "The boundary". Sinusoidal current distribution shown in amber.

RIGHT SIDE — "EM World"
  EM waves propagating outward to the right as concentric arcs (TX direction).

TWO-STATE: A TX/RX toggle button.
  TX state: Arrows show energy flowing left→right: transmitter → cable → antenna → space.
  RX state: Arrows reverse: space → antenna → cable → receiver. The wave arcs arrive from the right.

Label connecting both states: "Same antenna. Same pattern. Same impedance. Reciprocity."
Caption: "The antenna doesn't know if it's transmitting or receiving. The physics is the same in both directions."
-->

### Explore the TX/RX Chain

<!-- INTERACTIVE: tx-rx-complete.html
Link to: resources/tx-rx-complete.html
Display: A "Launch Interactive →" button after the reciprocity section. Not mandatory but strongly encouraged.

Guided exercise:
  Step 1: "Find the antenna in the visualisation. It appears in both the TX chain and the RX chain. Note where it sits."
  Step 2: "Trace the energy path in TX mode: PA (power amplifier) → feedline → antenna → space. Watch where the electrical energy becomes an EM wave."
  Step 3: "Now trace the RX path: space → antenna → feedline → LNA (low-noise amplifier) → receiver. Watch where the EM wave becomes an electrical signal again."
  Step 4: "The two chains are mirror images. The antenna sits at the exact centre of that mirror. That is reciprocity."
-->


---

## Summary

Here is what this lesson covered.

**DC doesn't radiate. AC does.** A steady current creates static fields that stay tethered to the wire. Alternating current causes continuous acceleration and deceleration of charges — and accelerating charges are the source of all electromagnetic radiation. Frequency is irrelevant to whether radiation happens; it determines the frequency of the wave produced.

**Field detachment is a four-act process.** The current builds and the field expands (Act 1) → the current peaks and the field begins to contract (Act 2) → the current reverses and the opposite-polarity field collides with the retreating field, sealing it off (Act 3) → the detached field propagates freely at c, carrying both E and H, needing nothing further from the wire (Act 4).

**The half-wave dipole is the fundamental antenna.** Fed at the centre, it supports a standing wave: maximum current at the feedpoint, zero at the tips. Voltage is the inverse. Total physical length: L = c/(2f), or in the MHz shortcut, L = 150/f(MHz). As frequency rises, physical length shrinks.

**Reciprocity.** An antenna's radiation pattern, gain, and impedance are identical on transmit and receive. The physics in both directions is the same.

**On receiving:** The wave doesn't hit the antenna and stop. It passes through the space the antenna occupies. The E field along the conductor induces a current. We'll build this picture more carefully in Lesson 5.

---

## Self-Check Exercises

### Dipole Length Calculations

Use **L = 150 / f (MHz)** for all of these. Work out both the total dipole length and each arm length.

1. **40.68 MHz** (40-metre HF band) — Total length? Each arm?
2. **145 MHz** (2-metre band) — Total length? Each arm?
3. **435 MHz** (70-centimetre band) — Total length? Each arm?
4. **1296 MHz** (23-centimetre band) — Total length? Each arm?
5. **2400 MHz** (2.4 GHz WiFi band) — Total length? Each arm?

<!-- SELF-CHECK-ANSWERS: dipole-length-calculations
1. 40.68 MHz: L = 150 / 40.68 = 3.69 m total. Each arm: 1.845 m.
   Note: This is why 40-metre band antennas need a large garden — the dipole is nearly 4 metres across.
2. 145 MHz: L = 150 / 145 = 1.034 m total. Each arm: 0.517 m.
3. 435 MHz: L = 150 / 435 = 0.345 m total. Each arm: 0.172 m (17.2 cm).
4. 1296 MHz: L = 150 / 1296 = 0.116 m total. Each arm: 0.058 m (5.8 cm).
5. 2400 MHz: L = 150 / 2400 = 0.0625 m total. Each arm: 0.0313 m (3.1 cm). A WiFi dipole is just over 3 cm per arm.

Pattern worth noticing: the band names (40m, 2m, 70cm) are approximate half-wavelengths.
Band names are antenna length names in disguise.
-->


### Concept Questions

Think through each one before looking at the answer.

**Q1.** A wire is carrying a steady DC current. A second wire is carrying an AC current at 145 MHz. Both carry the same *peak* current. Which one radiates EM waves? Why?

<!-- SELF-CHECK-ANSWERS: concept-q1-l2
The AC wire radiates. The DC wire does not.
Both have the same peak current, but radiation is not caused by current magnitude — it is caused by acceleration. The AC current is constantly reversing direction (145 million times per second), which means the electrons are constantly accelerating and decelerating. That acceleration launches EM waves.
The DC current is steady. The electrons move at constant velocity. No acceleration → no radiation.
-->

**Q2.** On a half-wave dipole, where is the current maximum? Where is it zero? Where is the voltage maximum?

<!-- SELF-CHECK-ANSWERS: concept-q2-l2
Current: Maximum at the centre (feedpoint). Zero at both tips (open ends).
Voltage: Zero at the centre. Maximum at both tips.
Current and voltage distributions are inverse — they are 90° out of phase along the wire.
This is why the feedpoint (centre) is a good place to connect a transmission line: it is a low-impedance point (low voltage, high current), similar to the impedance of standard coaxial cable.
-->

**Q3.** You build a dipole for 145 MHz. Later you want to use the same antenna to receive signals. Your friend says you need to "re-tune it for receiving." Are they right?

<!-- SELF-CHECK-ANSWERS: concept-q3-l2
No. Reciprocity: an antenna has the same radiation pattern, gain, and impedance whether it is transmitting or receiving. No re-tuning needed. The physics in both directions is identical. The antenna cannot tell the difference between TX and RX.
-->

**Q4.** In your own words, describe the four acts of field detachment. Try it without looking back at the lesson.

<!-- SELF-CHECK-ANSWERS: concept-q4-l2
Model answer — look for these key ideas (exact wording will vary):
Act 1: Current increases → field expands outward from the wire, still connected.
Act 2: Current peaks, then starts to fall → field begins to contract back toward wire.
Act 3: Current reverses direction → new opposite-polarity field emerges from the wire → old field cannot pass through new field → old field is pinched off and sealed away from the wire.
Act 4: Detached field propagates at c, carrying both E and H, self-sustaining.
If you got all four acts with the key mechanism in Act 3 (the collision/pinch-off), you've got it.
-->

**Q5.** A classmate says: "When a radio signal reaches my antenna, the wave is absorbed by the wire — like a sponge soaking up water." What's inaccurate about this description, and how would you improve it?

<!-- SELF-CHECK-ANSWERS: concept-q5-l2
What's wrong:
  - The wave is not "absorbed" and doesn't stop at the antenna
  - "Sponge soaking up water" implies the wave arrives and ceases to exist, which isn't accurate
  - It implies the antenna intercepts the wave like a physical barrier

Better description:
  The EM wave travels through the space where the antenna is located. As the wavefront passes through, the electric field component creates a voltage gradient along the length of the conductor. This drives a current in the wire — the antenna has converted the wave into an electrical signal. The wave continues on — only a small portion of its energy couples into the conductor.
  The antenna is a resonant sampler of a passing field, not a catcher that stops the wave.

(Note: We'll develop this picture more precisely in Lesson 5 when we study polarisation.)
-->

---

*Next: Lesson 3 — Radiation Patterns. The half-wave dipole radiates — but not equally in all directions. In Lesson 3 we'll map where the energy goes, introduce the concept of gain, and explore how different conductor arrangements shape the radiation pattern.*

