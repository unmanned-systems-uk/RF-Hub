# Lesson 1 — What is Electromagnetic Radiation?

**Unit:** 1 — How Antennas Work  
**Prerequisite:** None  
**Equipment Needed:** None  
**Estimated Time:** 25 minutes theory + interactive exploration

---

## Learning Objectives

By the end of this lesson you will be able to:

1. Explain what an electromagnetic field is, in plain language
2. Describe how a changing electric field creates a magnetic field, and vice versa
3. Explain why accelerating charge produces a self-sustaining wave
4. Calculate wavelength from frequency (and back again) using λ = c / f
5. Identify where common radio signals sit on the electromagnetic spectrum
6. Describe the relationship between the E field, the H field, and the direction of travel

---

## 1. What is a Field?

Before we talk about electromagnetic radiation, we need one building block: the idea of a **field**.

A field is not mystical. It is simply a value that exists at every point in space. That's it. If you can point to any spot in a room and say "there's a number here," you've got a field.

You already know one. Gravity. Stand anywhere on Earth and there's a gravitational pull pointing downward. Move to a different spot — still there, maybe slightly stronger or weaker, but always present. You can't see it, but you can feel its effect the moment you drop something.

An **electric field** works the same way. Place a charged object in a room, and every point in that room now has an electric force associated with it. Bring another charge nearby and it gets pushed or pulled — the field is doing that pushing. The field exists whether or not anything is there to feel it.

A **magnetic field** is the same idea again. Put a magnet on the table. Every point in the space around it has a magnetic influence. Bring a compass close and the needle swings — it's responding to the field that was already there, waiting.

The key idea: fields fill space. They are invisible but real, and they exert forces on things that respond to them. Electric fields push charges. Magnetic fields push magnets (and moving charges). Gravitational fields pull masses.

<!-- VISUAL: field-trio-comparison
Three side-by-side panels, each with a dark background:
  Panel 1 — GRAVITY: Earth at centre, curved field lines radiating outward (pointing inward toward surface). A small ball hovering in the field with an arrow showing the pull direction. Label: "Every point has a direction and a strength."
  Panel 2 — ELECTRIC: A positive charge at centre (amber/gold glow, colour var(--accent-e)). Field lines radiating outward. A small test charge nearby with a force arrow. Label: "Push or pull — depends on the charges."
  Panel 3 — MAGNETIC: A bar magnet at centre (N/S poles). Classic iron-filing-style curved field lines from N to S. A compass needle nearby aligning with the field. Label: "The needle follows the field."
Animation: Field lines should gently pulse or flow (not static). When the user hovers over any point in the space, a small arrow appears showing the field direction and relative strength at that point — making the abstract idea of "a value at every point" tangible.
Style: Dark background (#0a0e1a), thin glowing lines. Gravity lines in white/grey, E-field lines in amber (--accent-e), H-field lines in cyan (--accent-h).
-->

---

## 2. Static Fields Go Nowhere

Here is something important, and it might seem obvious: a field that just sits there does nothing interesting.

A charged battery terminal creates an electric field around it. That field reaches out into space, sure — but it stays put. It clings to the charge that made it. Move the charge and the field moves with it, like a shadow. It doesn't break free. It doesn't travel anywhere on its own.

Same with a magnet. Its magnetic field fills the space around it, beautifully curved from north to south. But it goes nowhere. Pick up the magnet and the field comes along. It's tethered.

So if fields just sit there attached to whatever made them, how does a radio signal travel from a transmitter to a receiver hundreds of kilometres away? Something has to change.

### The Maxwell Insight

In the 1860s, James Clerk Maxwell worked out the mathematics of electricity and magnetism and found something extraordinary — something that had been hiding in the equations all along.

**A changing electric field creates a magnetic field.**

And the reverse is also true:

**A changing magnetic field creates an electric field.**

Not "might create" or "tends to create." *Must* create. It's as unavoidable as a dropped ball falling. Change an electric field, and a magnetic field appears. Change a magnetic field, and an electric field appears.

This is the engine that makes electromagnetic radiation possible. Static fields are anchored. Changing fields give birth to new fields.

<!-- VISUAL: static-vs-changing
Two-panel animation, side by side:

LEFT PANEL — "Static (nothing happens)":
  A positive charge sits motionless. Amber E-field lines extend outward, perfectly steady. A clock ticks in the corner. Nothing changes. A label fades in after 2 seconds: "Static charge → static E field → no H field created. Goes nowhere."

RIGHT PANEL — "Changing (everything happens)":
  The same charge begins to oscillate up and down. The E-field lines distort and ripple. As they change, cyan H-field loops appear around the changing E-field region — visibly springing into existence. Label: "Changing E → creates H. This is the engine."

Transition: A "play" button or auto-advance that shows the left panel first (boring, static) for 3 seconds, then activates the right panel (exciting, dynamic) with the charge starting to move.

Colour: E-field in amber (--accent-e), H-field in cyan (--accent-h). New field creation should have a brief glow/flash effect so the student sees the moment of creation.
-->

---

## 3. The Wave is Born

Now follow the chain reaction.

Imagine you grab a charge and shake it — accelerate it back and forth. That acceleration changes the electric field around it. The changing electric field creates a magnetic field (Maxwell's rule). But now that magnetic field is also changing (because the thing creating it is changing), and a changing magnetic field creates an electric field. Which is changing. Which creates a magnetic field. Which is changing...

Each field generates the next. The disturbance feeds itself and moves outward, away from the charge, at the speed of light. The original charge might stop shaking — it doesn't matter. The wave is already gone, self-sustaining, needing nothing more from the source.

Think of it like blowing a soap bubble. You create it, shape it, give it a push — and then it detaches and floats away. It doesn't need your breath any more. An electromagnetic wave works the same way. The accelerating charge creates the disturbance, but once launched, the wave propagates on its own. We'll explore this "detachment" idea in much more detail in Lesson 2.

There's an important word hiding in this story: **accelerate**. A charge moving at constant speed doesn't radiate. A charge sitting still doesn't radiate. Only a charge that is *accelerating* — speeding up, slowing down, or changing direction — creates electromagnetic waves. This is why antennas work: we drive alternating current through them, which means the electrons are constantly accelerating and decelerating, launching waves with every cycle.

<!-- VISUAL: chain-reaction-wave
Animation sequence showing the cascade:

Step 1: A charge (amber dot) is stationary. Its E-field lines are steady.
Step 2: An external force shakes the charge up. The E-field distorts.
Step 3: Where the E-field is changing, cyan H-field loops appear (highlight the creation moment with a flash).
Step 4: The H-field is now changing too — so new amber E-field disturbance appears further out.
Step 5: That new E disturbance creates more H further out still.
Step 6: Camera pulls back to show the wave propagating outward as a series of alternating E and H disturbances — the charge is now small in the background, but the wave keeps going.

The animation should clearly show CAUSE → EFFECT at each step, with brief pauses and labels:
"Changing E → creates H" then "Changing H → creates E" then "→ creates H → creates E → ..."

Final frame: The wave continues outward. The charge stops. The wave keeps going. Label: "Self-sustaining. No medium needed."

Colour scheme: E in amber, H in cyan, propagation direction shown by a subtle purple (--accent-em) arrow.
-->

---

## 4. Wavelength, Frequency, and the Speed of Light

Every electromagnetic wave has three properties tied together by one simple relationship.

**Frequency** (*f*) is how many complete cycles the wave completes per second. We measure it in hertz (Hz). A wave that completes 145 million cycles per second has a frequency of 145 MHz.

**Wavelength** (λ, the Greek letter lambda) is the physical distance from one peak of the wave to the next. It's a real, measurable length — metres, centimetres, millimetres.

**Speed of light** (*c*) is how fast the wave travels. In free space, all electromagnetic waves travel at the same speed: approximately 300,000,000 metres per second (3 × 10⁸ m/s). Radio waves, visible light, X-rays — all the same speed.

These three are locked together:

> **λ = c / f**

This says: wavelength equals the speed of light divided by frequency.

If frequency goes up, wavelength gets shorter. If frequency goes down, wavelength gets longer. They move in opposite directions, always multiplying to give *c*.

<!-- VISUAL: formula-rearrangement
Interactive formula triangle or animated rearrangement:

Show the master equation λ = c / f in large, clear type (IBM Plex Mono).

Three modes (triggered by clicking/tapping the variable you want to solve for):
  1. "Solve for λ": λ = c / f → c slides to numerator, f slides to denominator, λ highlighted amber on the left. Animation: letters physically glide into position over ~0.5s.
  2. "Solve for f": f = c / λ → the equation rearranges with f on the left, c over λ on the right. 
  3. "Solve for c": c = f × λ → f and λ slide beside each other with a multiply sign, c on the left.

Below the formula, a live calculator:
  - Input: any one value (with unit selector: Hz/kHz/MHz/GHz for frequency, m/cm/mm for wavelength)
  - Output: the other two values update in real-time as the student types
  - c is pre-filled as 299,792,458 m/s but show it as ≈ 3 × 10⁸ m/s for mental arithmetic

Each variable should have a plain-English subtitle:
  λ → "wavelength — peak to peak distance"
  f → "frequency — cycles per second"
  c → "speed of light — always ≈ 300,000,000 m/s"
-->

### Putting Numbers to It

Let's make this real with frequencies you'll actually encounter.

**145 MHz** — the 2-metre amateur band. Wavelength: 300,000,000 ÷ 145,000,000 ≈ **2.07 metres**. That's about the height of a tall doorway. This is why it's called "2 metres."

**440 MHz** — the 70-centimetre band. Wavelength: 300 ÷ 440 ≈ **0.68 metres**, or 68 centimetres. A bit longer than your forearm.

**2,400 MHz (2.4 GHz)** — WiFi. Wavelength: 300 ÷ 2400 ≈ **0.125 metres**, or 12.5 centimetres. About the width of your hand.

**10,000 MHz (10 GHz)** — radar and satellite links. Wavelength: 300 ÷ 10,000 = **0.03 metres**, or 3 centimetres. The length of a paper clip.

Notice the shortcut: if frequency is in MHz, you can use **λ (in metres) = 300 / f (in MHz)**. The millions cancel. This is the version you'll use most often in amateur radio.

<!-- VISUAL: wavelength-at-human-scale
A horizontal scene showing a person standing (for scale), with overlaid wavelength bars:
  - 2m wave (145 MHz): a bar the height of the person, labelled "2m — 145 MHz"
  - 70cm wave (440 MHz): a bar from waist to hand, labelled "70cm — 440 MHz"  
  - 12.5cm wave (2.4 GHz): a bar across the palm, labelled "12.5cm — 2.4 GHz WiFi"
  - 3cm wave (10 GHz): a tiny bar next to a paper clip, labelled "3cm — 10 GHz"

The scene should make wavelength feel PHYSICAL, not abstract. Each bar is colour-coded and labelled with both wavelength and frequency. As the student scrolls or hovers, each bar highlights with its frequency appearing.

Optional interaction: a slider that sweeps frequency from 1 MHz to 10 GHz, and the wavelength bar smoothly shrinks from 300m down to 3cm, always shown against the person for scale.
-->

---

## 🔧 Hands-On: Explore with the EM Field Animator

Time to see this for yourself. Open the **EM Field & Radiation Pattern Animator** below.

<!-- INTERACTIVE: em-animato-2.html
Embed or link to: unit-1/em-animato-2.html
Display: Full-width embed if iframe, or prominent "Launch Interactive" button if link.
-->

This tool lets you set a frequency and watch the electric and magnetic fields oscillate in real time. It also shows the radiation pattern — we'll come back to patterns in Lesson 3, but for now, focus on the frequency slider and the wavelength readout.

### Guided Exploration

Work through these steps in order:

**Step 1.** Set the frequency to **145 MHz**. Look at the wavelength readout. Does it match what we calculated above? (It should show approximately 2.07 m.)

**Step 2.** Now slide the frequency up to **440 MHz**. Watch the wavelength shrink. Notice how the wave animation speeds up and the peaks get closer together. What does the wavelength readout say?

**Step 3.** Keep going — slide to **1296 MHz** (the 23 cm band). The wavelength should be about 23 cm. See how the waves are packed much more tightly now?

**Step 4.** Try to find a frequency where the wavelength is exactly **1 metre**. (Hint: use the formula. What's 300 ÷ 1?)

**Step 5.** While you're exploring, watch the E-field (amber) and H-field (cyan) waves. Notice they oscillate at the same frequency but are perpendicular to each other. We'll explain why in Section 6.

Take your time. Slide the frequency around. Get a feel for how frequency and wavelength are connected — not just as numbers in a formula, but as something you can see.

---

## 5. The Electromagnetic Spectrum

Here is something that surprises most people when they first hear it: visible light and radio waves are the same thing.

Not "similar to." Not "related to." The same physical phenomenon. A radio wave at 145 MHz and the yellow light from a sodium lamp are both electromagnetic waves — coupled E and H fields propagating through space at the speed of light. The only difference between them is frequency.

The electromagnetic spectrum is the full range of these frequencies, from the lowest to the highest:

**Radio waves** (below ~300 GHz) — This is where we work. AM broadcast, shortwave, VHF, UHF, microwaves. Wavelengths from thousands of metres down to about a millimetre.

**Infrared** (~300 GHz to ~400 THz) — Heat radiation. Your TV remote uses it. Wavelengths from about 1 mm down to 700 nanometres.

**Visible light** (~400 THz to ~750 THz) — The tiny sliver that human eyes can detect. Red at the low-frequency end, violet at the high end. Wavelengths from about 700 nm down to 400 nm.

**Ultraviolet** (~750 THz to ~30 PHz) — Just beyond violet. Causes sunburn. Wavelengths from 400 nm down to 10 nm.

**X-rays and Gamma rays** (above ~30 PHz) — Extremely high energy. Used in medicine and emitted by nuclear processes. Wavelengths shorter than 10 nm.

All of it — every frequency, every wavelength — is the same E⊥H wave travelling at *c*. The universe has one kind of electromagnetic radiation. We just gave different names to different frequency ranges because they interact with matter (and our eyes) in different ways.

### Where Radio Lives

Within the radio part of the spectrum, there's a further set of bands that matter to us:

**HF** (3–30 MHz) — Shortwave. Wavelengths 100 m to 10 m. Used for long-distance communication via ionospheric skip.

**VHF** (30–300 MHz) — Includes FM broadcast (88–108 MHz) and the 2-metre amateur band (144–148 MHz). Wavelengths 10 m to 1 m.

**UHF** (300 MHz–3 GHz) — Includes the 70 cm amateur band (430–440 MHz), GPS (~1.5 GHz), WiFi (2.4 GHz), and mobile phones. Wavelengths 1 m to 10 cm.

**SHF/Microwave** (3–30 GHz) — Satellite links, radar, 5G mmWave. Wavelengths 10 cm to 1 cm.

If you're using a software-defined radio (SDR), its typical receive range of about 25 MHz to 1.75 GHz covers a wide swathe of VHF and UHF — from FM radio through to beyond mobile phone frequencies.

<!-- VISUAL: em-spectrum-strip
A wide, horizontally scrollable spectrum strip:

The strip runs from low frequency (left) to high frequency (right), with wavelength shown decreasing left to right.

Colour-coded regions:
  Radio (wide, dark blue/purple) → Infrared (dark red) → Visible (narrow rainbow band) → UV (violet) → X-ray (grey) → Gamma (dark grey)

Within the Radio section, zoom in to show sub-bands:
  HF | VHF | UHF | SHF
  With specific markers for: 
    - FM broadcast (88-108 MHz)
    - 2m amateur (144-148 MHz)  
    - 70cm amateur (430-440 MHz)
    - WiFi (2.4 GHz)
    - GPS (1.575 GHz)

Each marker is clickable/hoverable: shows the frequency, wavelength, and a one-line description of what uses that band.

At the bottom, a key message bar: "All the same phenomenon: E⊥H waves at the speed of light. Only the frequency is different."

Scale: Use logarithmic frequency scale so all bands get reasonable visual space. Show frequency labels on top, wavelength labels on bottom.
-->

---

## 6. E and H: The Inseparable Pair

We've said that electromagnetic waves consist of electric and magnetic fields creating each other. Now let's look at how they're arranged in space.

In a propagating electromagnetic wave, the **electric field** (E) oscillates in one direction, and the **magnetic field** (H) oscillates perpendicular to it. The wave itself travels in a third direction, perpendicular to both E and H.

Picture it this way. Point your right thumb forward — that's the direction the wave travels (we call this the **propagation direction**, or *k*). Now point your index finger upward — that's the E field oscillating up and down. Your middle finger naturally points sideways — that's the H field oscillating left and right.

Three directions, all at right angles: E ⊥ H ⊥ k.

This is not a coincidence or a design choice. It's a consequence of Maxwell's equations. The mathematics demands it. The E and H fields *must* be perpendicular to each other and to the direction of travel. There is no other arrangement that allows the wave to sustain itself.

A few things to absorb here:

You cannot have a propagating E field without an H field. They are created as a pair and travel as a pair. If someone asks you "is it an electric wave or a magnetic wave?" — the answer is "both, always." Separating them would be like trying to have a coin with only one side.

The E and H fields reach their peaks at the same time and in the same place. They are in phase with each other. When E is at maximum strength, H is also at maximum strength. When E passes through zero, H passes through zero at the same instant.

The ratio of E to H in free space is a constant: approximately 377 ohms. This is called the **impedance of free space** (η₀). We won't do much with this number in Lesson 1, but file it away — it becomes important when we talk about antenna impedance in Unit 2.

<!-- VISUAL: e-h-k-perpendicular
Animated 3D-ish view of a propagating EM wave:

Show a wave travelling from left to right (propagation direction, k).
  - E field: amber sinusoidal oscillation in the vertical plane
  - H field: cyan sinusoidal oscillation in the horizontal plane  
  - Both oscillating at the same frequency, in phase (peaks align)
  - The wave moves rightward at c

Label each clearly:
  - Vertical oscillation → "E (Electric Field)" in amber
  - Horizontal oscillation → "H (Magnetic Field)" in cyan
  - Arrow along propagation → "Direction of travel (k)" in purple (--accent-em)

Interaction options:
  - Rotate view: let the student drag to see the 3D arrangement from different angles
  - Pause/play: freeze the wave to examine the peak alignment
  - A small inset showing the right-hand rule with thumb/index/middle finger

Key label at bottom: "E ⊥ H ⊥ k — always. No exceptions."
-->

If you explored the EM Field Animator earlier, go back and look at the broadside view. You can see the E wave (amber) and H wave (cyan) oscillating at right angles. That's not just a pretty picture — it's showing you the real geometry of an electromagnetic wave.

---

## 🔎 Go Deeper (Optional)

If you want to see the full story of how fields detach from an antenna and become a free-travelling wave, explore the **How Antennas Radiate** interactive. It walks through the process step by step with animated SVG diagrams — from current flow in the antenna, through field creation, to the moment the wave breaks free and propagates.

<!-- INTERACTIVE: em-radiation.html
Embed or link to: unit-1/em-radiation.html
Display: Styled "Optional: Go Deeper" card/button — not mandatory, clearly labelled as preview material.
Note: This becomes the PRIMARY interactive in Lesson 2. Here it's offered as an optional preview for curious students who want the full picture now.
-->

Don't worry if you skip this for now. Lesson 2 covers the detachment story in full, and this interactive will be front and centre there.

---

## Summary

Here's what we covered in this lesson:

**Fields** are values that exist at every point in space. Electric fields push charges, magnetic fields push magnets and moving charges.

**Static fields stay put.** They cling to the charge or magnet that created them and don't travel.

**Changing fields create new fields.** A changing E field creates an H field. A changing H field creates an E field. This is Maxwell's insight, and it's the engine behind all electromagnetic radiation.

**Accelerating charges launch waves.** The chain reaction of E creating H creating E propagates outward at the speed of light, self-sustaining, needing no medium.

**λ = c / f** ties wavelength, frequency, and the speed of light together. For quick calculations in MHz: λ (metres) = 300 / f (MHz).

**The EM spectrum** is one continuous phenomenon. Radio, light, X-rays — all the same E⊥H wave, just different frequencies.

**E and H are perpendicular** to each other and to the direction of travel. Always. They peak together, travel together, and cannot exist separately in a propagating wave.

---

## Self-Check Exercises

### Wavelength Calculations

Use **λ = 300 / f (MHz)** for all of these. Grab a calculator if you need one — the point is fluency with the formula, not mental arithmetic.

1. **7.1 MHz** (40-metre HF band) — What is the wavelength?
2. **52 MHz** (6-metre band) — What is the wavelength?
3. **145 MHz** (2-metre band) — What is the wavelength?
4. **1296 MHz** (23-centimetre band) — What is the wavelength?
5. **5800 MHz** (5.8 GHz, used in FPV drones) — What is the wavelength?

<!-- SELF-CHECK-ANSWERS: wavelength-calculations
1. 300 / 7.1 = 42.25 m — this is why it's called the "40-metre band" (rounded)
2. 300 / 52 = 5.77 m — the "6-metre band"
3. 300 / 145 = 2.07 m — the "2-metre band"
4. 300 / 1296 = 0.231 m = 23.1 cm — the "23-centimetre band"
5. 300 / 5800 = 0.0517 m = 5.17 cm

Pattern to notice: the band names are approximate wavelengths!
-->

### Spectrum Placement

Where on the electromagnetic spectrum do these signals live? For each one, name the band (HF, VHF, UHF, or SHF/Microwave) and estimate the wavelength.

1. **FM broadcast radio** (around 100 MHz)
2. **2-metre amateur repeater** (145 MHz)
3. **WiFi** (2.4 GHz)
4. **GPS** (1.575 GHz)  
5. **Shortwave broadcast** (15 MHz)

<!-- SELF-CHECK-ANSWERS: spectrum-placement
1. FM broadcast (100 MHz): VHF — wavelength ≈ 3 m
2. 2m amateur (145 MHz): VHF — wavelength ≈ 2.07 m
3. WiFi (2400 MHz): UHF — wavelength ≈ 12.5 cm
4. GPS (1575 MHz): UHF — wavelength ≈ 19 cm
5. Shortwave (15 MHz): HF — wavelength = 20 m
-->

### Concept Questions

Think about these before revealing the answers.

**Q1.** A charge is moving through space at a constant speed in a straight line. Does it radiate electromagnetic waves?

<!-- SELF-CHECK-ANSWERS: concept-q1
No. Radiation requires ACCELERATION — a change in speed or direction. A charge moving at constant velocity in a straight line does not radiate. (This is one of the key insights: it's not motion that matters, it's change in motion.)
-->

**Q2.** Can you have a propagating electromagnetic wave with an electric field but no magnetic field?

<!-- SELF-CHECK-ANSWERS: concept-q2
No. In a propagating wave, E and H are inseparable. The changing E field is what creates the H field, and vice versa. Remove one and the wave cannot sustain itself. They are always present as a pair.
-->

**Q3.** Radio waves travel at the speed of light. Visible light also travels at the speed of light. If they're both the same kind of wave, why can't we see radio waves?

<!-- SELF-CHECK-ANSWERS: concept-q3
Human eyes contain receptor cells (rods and cones) that only respond to electromagnetic waves in a very narrow frequency range — roughly 400 to 750 THz. Radio waves (MHz to GHz range) are far below this frequency, so they don't trigger the receptors. The waves are physically real and passing through us all the time — our eyes simply aren't built to detect them. We need an antenna and a receiver instead.
-->

**Q4.** You double the frequency of a signal. What happens to its wavelength?

<!-- SELF-CHECK-ANSWERS: concept-q4
It halves. Since λ = c / f, doubling f means λ becomes c / (2f) = half the original wavelength. Frequency and wavelength are inversely proportional.
-->

---

## What's Next

In **Lesson 2 — From Waves to Wires**, we'll zoom in on what happens at the antenna itself. How does current flowing in a piece of wire create a wave that detaches and flies across space? And how does a distant piece of wire catch that wave and turn it back into current? The "How Antennas Radiate" interactive becomes our primary tool, and the soap bubble analogy gets the full treatment.

---

<!-- LESSON-META
lesson_id: L01
unit: 1
title: What is EM Radiation?
status: DRAFT
interactives_used: em-animato-2.html, em-radiation.html (optional)
visual_briefs: field-trio-comparison, static-vs-changing, chain-reaction-wave, formula-rearrangement, wavelength-at-human-scale, em-spectrum-strip, e-h-k-perpendicular
estimated_reading_time: 25 minutes
-->
