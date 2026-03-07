# Lesson 3: Where Does the Energy Go? — Radiation Patterns

**Unit:** 1 — How Antennas Work
**Prerequisites:** Lesson 2 (From Waves to Wires)
**Equipment:** None
**Estimated reading time:** 25 min
**Status:** DRAFT

---

## Learning Objectives

By the end of this lesson you will be able to:

- Explain what a radiation pattern is, using the word "energy" correctly
- Describe the 3D shape of a half-wave dipole's radiation pattern and explain why it has that shape
- Read a polar plot: identify the main lobe, nulls, and dB reference rings
- State what the H-plane and E-plane are, and give the alternative names for each
- Explain why the nulls on a dipole pattern occur at exactly the tips — not somewhere else
- Define directivity as a concept, without using any formula

---

## Section 1 — Bridge from Lesson 2

In Lesson 2 you watched the EM wave detach from the wire and travel outward. The final image is a self-sustaining field packet moving through space, carrying energy away from the antenna.

That raised a question we didn't answer: *where* does that energy go?

Not "in what general direction" — we know it travels outward from the antenna. The real question is whether it travels equally in every direction, or whether some directions receive more energy than others. Does the antenna distribute its energy uniformly, like a bare light bulb? Or does it concentrate it, like a torch?

The answer is neither uniform nor random. Every antenna has a specific, predictable **3D shape** to its energy distribution. That shape is called the radiation pattern. Understanding it — visually, physically, and in terms of what it means for real-world performance — is what this lesson is about.


---

## Section 2 — What is a Radiation Pattern?

A radiation pattern is a three-dimensional map. At every point around an antenna — every direction, every angle — it shows how efficiently the antenna transfers energy in that direction.

That word "transfers" is doing important work. Let's be precise about it.

### The wrong model — and why it matters

When most people first encounter radiation patterns, they read the description as: *"this is a map of where the signal is strongest."* That framing isn't completely wrong, but it hides something important — and the hidden part causes real confusion later, especially when thinking about receiving antennas.

Here is the wrong model in full:

> *"The transmitting antenna sends out a signal. The E field from that signal arrives at the receiving antenna. The E field induces a voltage. That voltage drives a current. The receiver amplifies the current."*

This makes voltage sound like the quantity being received — as if the antenna is a kind of field-to-voltage converter. And it makes the radiation pattern sound like a map of "field strength out there in space."

Both of those pictures will mislead you.

### The right model

Here is what is actually happening:

The transmitting antenna converts electrical energy (current flowing in a conductor) into electromagnetic energy (a propagating wave). The wave carries that energy outward through space. When that wave reaches a receiving antenna, the receiving antenna converts some of that electromagnetic energy back into electrical energy — current flowing in a conductor.

**The quantity being transferred is energy. The result at the feedpoint is current.**

The radiation pattern is a map of *where that energy transfer is most efficient*. In directions where the pattern is strong, a receiving antenna placed there would couple a large fraction of the wave's energy into usable current. In directions where the pattern is weak or zero, very little energy couples — even though the wave may be passing through that region.

This framing does something useful immediately: it makes the TX and RX patterns identical in a way that feels natural. The pattern isn't a map of "where the transmitter throws its signal." It's a map of the antenna's *energy coupling geometry*. That geometry is the same whether energy is flowing in or out — which is exactly what reciprocity (from Lesson 2) tells us.

Keep this model in mind throughout this lesson. Every time you see the word "pattern," replace it mentally with "energy coupling map."

<!-- VISUAL: radiation-3d-v5.html — display the dipole 3D pattern here as a first look, before the explanation. Caption: "This is the 3D radiation pattern of a half-wave dipole. Have a look at the shape before reading further. We'll explain exactly why it looks like this in Section 3." No guided exercise yet — this is purely a visual introduction. -->


---

## Section 3 — Why a Donut? The Physics of the Shape

The 3D radiation pattern of a half-wave dipole is a toroid — a donut shape. The wire passes through the hole in the middle. Energy radiates outward strongly in all directions perpendicular to the wire, and not at all along the wire's axis.

This shape is not arbitrary. It follows directly from the current distribution you learned in Lesson 2.

### The connection back to Lesson 2

Recall what you know about current on a half-wave dipole:

- The feedpoint (centre) has **maximum current**
- The tips have **zero current** — forced to zero by the open-end boundary condition
- Between feedpoint and tip, the current tapers smoothly following a half-sinusoid

You also know that it is *accelerating charges* — changing current — that create EM radiation. Where current is high and changing rapidly, radiation is strong. Where current is zero, there is nothing to radiate.

Now look at the geometry.

Current flows *along the length of the wire*. The wire is vertical (say). The radiation from each tiny section of wire goes out perpendicular to the current direction in that section — perpendicular to the wire, that is. Stack up all those small contributions from every section of the wire, and the result is strongest in the horizontal plane (broadside, equatorial) and weakest above and below along the wire's axis.

The donut shape falls out naturally. It doesn't need to be memorised as a separate fact — it is the direct consequence of the current distribution shape.

### The nulls are not a quirk

There is zero radiation along the axis of the wire. Not weak radiation — zero. This often surprises students, who assume there must be *something* in every direction.

But think about what would have to be happening for energy to couple at a point directly above the tip of the dipole. The only current on the wire near that direction is at the very tip — and the current at the tip is zero, by the hard boundary condition. There is no changing current there to drive radiation. The geometry simply cannot transfer energy in that direction.

On the receive side, the same logic applies. An EM wave arriving from directly along the wire's axis — from above the tip — would need to drive current along the conductor. But the wave's electric field, which points in the direction the wave is polarised, would be aligned perpendicular to the wire at that angle of arrival. There is no component of the field that can drive current along the wire's length. Energy does not couple. The null is exact.

This is the energy coupling geometry in action: it's not that the antenna "ignores" signals from that direction. It's that the physical structure, at that arrival angle, provides no mechanism for energy transfer.

### The guitar string payoff

In Lesson 2, the current distribution on a dipole was compared to a vibrating guitar string pinned at both ends: maximum movement at the centre, zero movement at the pins.

A guitar string also has directional properties in what it radiates. The string makes no sound at the bridge pins — not because the bridge absorbs it, but because there is no movement there to generate it. The acoustic radiation from the string is maximum where displacement is maximum.

The dipole is the same physics in a different medium. The radiation is maximum where the current (the "movement") is maximum. Zero where the current is zero.

<!-- VISUAL: Two-panel diagram. LEFT: half-wave dipole (vertical), with the current distribution curve overlaid from Lesson 2 (sinusoidal lobe, maximum at centre, zero at tips). Arrows radiating outward from the mid-section of the wire, strongest broadside, none from the tips. Label: "Maximum current here → maximum energy couples outward in this direction." Null axis marked at top and bottom with label "Zero current at tip → no radiation in this direction." RIGHT: 3D donut shape shown in cross-section (like a bagel sliced through the middle), wire passing through the hole. The cross-section shows the lobe contour matching the arrow lengths on the left diagram. Caption: "The pattern shape is the current distribution mapped onto 3D space." -->


### ▶ Interactive Exercise — radiation-3d-v5.html (Part 1)

**Open:** `radiation-3d-v5.html` (link in the lesson resources bar)

You are looking at the 3D radiation pattern of a half-wave dipole — the donut shape from Section 2. Take your time with this before answering the questions.

**Task 1 — Explore the shape**
Click and drag to rotate the pattern. Look at it from all angles: from the side, from above, from below.

- Find the two null points. Which direction do they face relative to the wire?
- Find the region of maximum radiation. Which direction is that?

**Task 2 — Connect to Lesson 2**
Look at the null points. You know from Lesson 2 exactly what is happening at those physical points on the antenna.

- *What is the current doing at those points?*
- *Why does zero current at a physical point on the wire produce zero radiation in the direction that point faces?*

**Task 3 — Receiving antenna placement**
Imagine you are placing a receiving antenna somewhere around this transmitting dipole, trying to couple as much energy as possible.

- *Where in 3D space would you place your receiving antenna to maximise energy coupling?*
- *Where would you place it to get the absolute minimum? Why?*

**Task 4 — Toggle the view modes**
Use the rings and shells buttons to switch between the two display modes.

- The rings mode shows wavefronts expanding outward in the equatorial plane.
- The shells mode shows them expanding as spherical-ish shells.
- *Which mode makes it easier to see the null? Which makes it easier to see the 3D shape of the energy distribution?*

After this exercise, close the interactive and write one sentence describing the dipole's radiation pattern as a map of energy coupling efficiency — without using the words "signal" or "wave."

---


## Section 4 — Reading a Polar Plot

The 3D pattern is the complete picture, but it's unwieldy in print, in datasheets, and when comparing antennas. In practice, engineers take 2D slices through the 3D pattern. These slices are called **polar plots**.

There are two standard slices, and each has two names — both in common use, depending on whether you're reading an academic textbook or a practical antenna datasheet. You need to know both.

### The two planes

**The H-plane** (also called the **azimuth plane**)

This is a horizontal slice — a cut through the widest part of the donut, looking down from above. For a vertical dipole, this is the plane that circles around the antenna in the horizontal direction.

For a half-wave dipole, the H-plane polar plot is a perfect circle. That tells you something directly useful: in the horizontal plane, the dipole radiates equally in all directions. It is omnidirectional in azimuth. A signal arriving from any compass direction couples energy equally well.

**The E-plane** (also called the **elevation plane**)

This is a vertical slice — a cut through the donut from the side, showing the pattern from tip to tip. For a vertical dipole, this shows the elevation shape: how the pattern changes as you look up toward the sky or down toward the ground.

For a half-wave dipole, the E-plane polar plot shows two lobes — one on each side, bulging outward in the equatorial direction — with a null at top and bottom (directly above and below the tip). The shape looks like a figure-of-eight on its side, or like the cross-section of the donut.

<!-- VISUAL: Two polar plots side by side, clearly labelled. LEFT: H-plane / azimuth plane — circular plot, perfect circle, label "Omnidirectional in azimuth." The antenna symbol is shown as a dot at the centre (you're looking down the wire). RIGHT: E-plane / elevation plane — figure-of-eight shape, two lobes horizontal, nulls at top and bottom, antenna symbol shown as a vertical line at centre. Both plots share the same axis labelling style. Both plots labelled with both naming conventions: "H-plane (azimuth plane)" and "E-plane (elevation plane)." -->

### Reading the dB rings

Polar plots have concentric reference rings marked in decibels (dB). These tell you how much energy couples in each direction *relative to the peak direction*.

The outermost ring is always **0 dB** — the peak coupling direction. Interior rings show weaker directions:

- **−3 dB ring:** half the energy of the peak direction (in power terms). Any direction that falls on this ring has coupling efficiency half of peak.
- **−10 dB ring:** one tenth the energy of peak. A direction on this ring couples ten times less energy than the peak.

Notice this is all *relative*. The polar plot does not tell you how much absolute energy the antenna radiates in any direction, or how it compares to any other antenna. It only tells you how directions compare to each other *within this one antenna's pattern*.

That is intentional. Comparing antennas to each other — expressing gain in absolute terms — requires a reference and a calculation. That lives in Lesson 9. For now: **the dB rings on a polar plot are a relative scale. 0 dB means peak, not "strong."**

> **A note for students encountering "dBi" in the wild:** You may see antenna specifications quoted in "dBi" — decibels relative to an isotropic radiator. This is an absolute gain figure and is different from the relative dB rings on a polar plot. We will define it properly in Lesson 9. For now, ignore dBi. The relative polar plot is sufficient.

<!-- VISUAL: Annotated E-plane polar plot for a half-wave dipole, with dB rings explicitly labelled: 0 dB (outermost ring), −3 dB ring, −10 dB ring. Arrows pointing to: "Main lobe — peak coupling direction," "Null — zero coupling," "−3 dB boundary — half-power directions." The rings are drawn as concentric circles in progressively lighter shading toward the centre. A note below: "These rings are relative — 0 dB here means 'peak for this antenna', not a comparison to anything else." -->


---

## Section 5 — Front-to-Back Ratio

Some antennas are designed to concentrate energy in one direction much more than the opposite direction. When that's the case, there's a useful single number that captures how asymmetric the pattern is: the **front-to-back ratio**.

The front-to-back ratio (often abbreviated F/B) is simply:

> **How many dB quieter is the back lobe than the main lobe?**

You read it directly off a polar plot. Find the peak of the main lobe (0 dB). Then find the level in the exact opposite direction (the "back"). The difference in dB between those two points is the front-to-back ratio.

A high F/B ratio means the antenna strongly favours one direction over the other. A low F/B ratio means front and back are similar. An F/B ratio of 0 dB would mean the antenna radiates equally in both directions.

<!-- VISUAL: A generic asymmetric polar plot — labelled "Example directional antenna (type not yet introduced)." Two lobes of clearly unequal size: main lobe to the right reaching 0 dB, back lobe to the left reaching approximately −15 dB. A double-headed arrow between the peak of the main lobe and the back lobe level, labelled "Front-to-back ratio ≈ 15 dB." No antenna type, no construction detail — just the concept on a schematic polar plot. -->

### What about the dipole?

A half-wave dipole has a symmetric pattern — the two lobes in the E-plane are identical. From the left, you couple exactly as much energy as from the right. The H-plane is a circle. There is no "front" or "back" in any meaningful sense.

This means the dipole has **no useful front-to-back ratio**. It's omnidirectional in the horizontal plane and symmetric in elevation. For a dipole, F/B ratio isn't a design target — it's not a design parameter at all.

When we reach directional antennas in Lesson 4, front-to-back ratio becomes one of the key figures on the specification sheet. A high F/B ratio is often exactly what you want: to receive a signal from one direction while rejecting interference coming from behind.

---

## Section 6 — Directivity: Concentrating Energy

Here is a thought experiment.

Take a half-wave dipole. It radiates in a donut shape — strong in the equatorial plane, nothing along the axis. Now suppose you could somehow squash that donut — flatten it, concentrate the energy into a thinner disc, squeeze more energy into the equatorial directions.

What happens? The total energy radiated stays the same (you haven't changed the transmitter power). But in the directions where the disc is thickest, there is *more* energy per unit area than before. You've redistributed it without creating any new energy.

This is **directivity**. It is the result of shaping the radiation pattern to concentrate energy in fewer directions — at the expense of other directions.

### The reference: an isotropic radiator

Every directivity measurement needs a reference. The universal reference in antenna engineering is the **isotropic radiator**: a theoretical point source that radiates with exactly equal energy in every direction. Its pattern is a perfect sphere.

No real antenna is isotropic. It's physically impossible to build one (it would require a symmetrical point source that doesn't interact with the world in any directional way). But it is a clean mathematical reference: if you imagine all your transmitted power spread perfectly uniformly over the surface of a sphere, you have a baseline to compare everything else against.

The half-wave dipole is slightly more directional than isotropic. Its donut shape concentrates a little more energy in the equatorial plane than a perfect sphere would deliver there. Correspondingly, it has nulls where an isotropic source would still deliver some energy. The total is the same; the shape is different.

<!-- VISUAL: Side-by-side comparison. LEFT: perfect sphere (isotropic radiator), labelled "Isotropic: equal energy in all directions." RIGHT: half-wave dipole toroid, same scale, labelled "Half-wave dipole: more energy equatorially, none at the tips." Both drawn to the same total-surface-area feel — showing visually that the donut has "more" in the middle and "less" at the ends. A caption: "Same total energy budget. Different shape." -->

### What directivity is not

Directivity is a property of the *pattern shape* only. It says nothing about how efficiently the antenna converts transmitter power into radiated energy. An antenna could be very directional but also lossy — it focuses what it does radiate, but wastes some of the input power as heat in the conductor.

That distinction — directivity vs gain vs efficiency — is a Lesson 9 topic. For now, directivity simply means: *how much does this antenna concentrate energy compared to an isotropic source, in its best direction?*

No formulas here. No dBi. Just the concept: shaped patterns redistribute energy; the isotropic sphere is the reference; real antennas compare to it.


---

## Section 7 — A First Look at Other Pattern Shapes

The half-wave dipole's donut is the foundation. But it's not the only shape antennas can produce, and it's worth a brief look at how different geometries produce different patterns before we take the full tour in Lesson 4.

Two simple variations:

**Vertical antenna (quarter-wave vertical over ground)**
The radiation pattern is still a toroid — the same donut physics — but rotated 90°. The wire is vertical, so the donut lies on its side: energy concentrates near the horizon, with a null pointing straight up. This makes vertical antennas useful for ground-level communication where you want to reach out along the earth's surface, not waste energy shooting into the sky.

**A directional antenna**
When an antenna design deliberately concentrates energy into a narrow region, the pattern transforms from a donut or sphere into something more like a searchlight beam: one strong lobe pointing forward, weaker lobes to the sides, a much quieter back. The 3D shape is elongated — not omnidirectional at all.

<!-- VISUAL: Three static pattern shapes side by side, drawn as simple 3D sketches or cross-sections. LEFT: half-wave dipole toroid (from this lesson). CENTRE: same toroid rotated 90° — flattened, hugging the equatorial plane — labelled "Vertical antenna: same physics, different orientation." RIGHT: an elongated pencil/cigar shape with a clear main forward lobe and small back lobe — labelled "Example directional antenna: energy concentrated forward." No antenna type names, no construction detail. Caption: "Pattern shape is a design choice. Lesson 4 introduces the antennas that create these shapes." NOTE to HTML converter: these are static visuals pending enhancement of radiation-3d-v5.html to support multiple antenna types. When the enhanced interactive is available, replace this with a guided interactive exercise using the antenna selector. -->

These patterns raise a question that Lesson 4 answers: *what changes in the antenna's physical design produces these different shapes?* The short answer is geometry — the length, orientation, and arrangement of conducting elements. Every pattern shape is a direct consequence of the current distribution on whatever structure produces it.

---

## Section 8 — Self-Check

Work through all parts before looking back at the lesson.

---

### Part A — Polar Plot Reading

Three polar plots are shown below. For each one, identify: (a) the main lobe direction, (b) any nulls, (c) the approximate front-to-back ratio in dB where applicable.

<!-- VISUAL: Three polar plot diagrams for self-check. PLOT 1: H-plane of a half-wave dipole — a perfect circle. PLOT 2: E-plane of a half-wave dipole — figure-of-eight with nulls at top and bottom, 0 dB ring at widest point, −3 dB and −10 dB rings visible. PLOT 3: Generic directional antenna E-plane — clear main lobe reaching 0 dB, small back lobe at approximately −18 dB, two minor side lobes at about −12 dB each. All three plots should have the same ring scale for consistency. -->

**Questions:**
1. For Plot 1, what does the circular shape tell you about energy coupling in the horizontal plane?
2. For Plot 2, the nulls are at the top and bottom. What is physically happening at those points on the antenna?
3. For Plot 3, estimate the front-to-back ratio. If you were using this antenna to receive a signal from the main lobe direction, how many dB of rejection would you get from an interferer coming from the back?

---

### Part B — Concept Questions

Answer in one or two complete sentences. Do not look back at the lesson.

1. A radiation pattern is often described as "where the signal is strongest." Write a more precise description using the word "energy."

2. A half-wave dipole is placed vertically. A radio operator is positioned directly above the tip of the antenna, at the null. The operator is transmitting at full power. How much energy does your antenna couple from that transmission? What is the reason?

3. Why are the nulls on a half-wave dipole located specifically at the tips — not somewhere in the middle of the wire, not at an angle?

4. What is the difference between the H-plane and the E-plane of a radiation pattern? Give both naming conventions for each.

5. A colleague says: "I want a more directional antenna so I can receive more total power." What is wrong with this statement, and what should they have said?

6. You are given two polar plots for the same antenna: one labelled "transmitting" and one labelled "receiving." Without looking at the labels, can you tell them apart? Why or why not?

---

### Part C — Energy Coupling Question

This question connects Section 3 and Section 2 from this lesson. Think carefully before answering.

A half-wave dipole is positioned horizontally (wire running left-right). An EM wave is travelling horizontally, from left to right, along the wire's axis.

- Will energy couple from this wave into the antenna? Explain your answer using the concept of energy coupling geometry.
- Now the same wave is travelling from front to back — broadside to the antenna. How does the energy coupling change? Why?

---

### Part D — Sketch from Memory

Without looking at any diagrams, draw:

1. The E-plane radiation pattern for a **vertical** half-wave dipole. Label: main lobes, nulls, 0 dB reference direction, and the axis label (elevation angle).
2. The H-plane radiation pattern for the same antenna. Label: what the shape tells you about azimuthal energy distribution.

Add both naming conventions to each plot (H-plane/azimuth, E-plane/elevation).

---

### Part E — Apply and Connect (optional, stretch)

1. The moon is roughly above the horizon — not exactly in the null, but fairly high in elevation. If you are using a horizontal half-wave dipole to attempt moonbounce (EME — earth-moon-earth communication), what does the radiation pattern tell you about how efficient your energy coupling to that path will be? What would you do differently if you wanted to maximise it?

2. In Section 3, the null is described as a consequence of "zero current at the tips." But what if you extended the dipole well beyond λ/2 — say to a full wavelength? Would the null disappear? *(Hint: think about what happens to the current distribution when you change the length. Don't calculate — reason qualitatively.)*


---

## Lesson Summary

- **A radiation pattern is a 3D map of energy coupling efficiency.** At every direction around the antenna, it tells you how efficiently the antenna transfers energy in that direction — on transmit or receive. It is not a map of "where the signal is" or "where the voltage is strongest."

- **The half-wave dipole's pattern is a toroid — a donut.** The wire passes through the hole. Strong coupling broadside (perpendicular to the wire), zero coupling along the wire's axis (at the tips).

- **The pattern shape is caused by the current distribution.** Maximum current at the centre → maximum radiation broadside. Zero current at the tips → exact nulls along the wire axis. The pattern is not a separate fact to memorise — it follows from what you already know.

- **The nulls are exact, not approximate.** On the receive side, zero coupling along the null axis occurs because the antenna geometry provides no mechanism for energy transfer from that direction — not because the wave is "blocked."

- **Polar plots are 2D slices of the 3D pattern.** The H-plane (azimuth plane) is the top-down view. The E-plane (elevation plane) is the side view. For a dipole: H-plane is a circle (omnidirectional in azimuth); E-plane is a figure-of-eight with nulls at the tips.

- **The dB rings on a polar plot are relative.** 0 dB means the peak direction for this antenna. −3 dB is half the energy of peak. −10 dB is one tenth. This is not a comparison to any other antenna.

- **Directivity is a pattern shape property.** Concentrating energy into fewer directions makes those directions "louder," without creating new energy. The isotropic radiator (perfect sphere) is the reference. The half-wave dipole is slightly more directional than isotropic.

- **Front-to-back ratio** measures how much quieter the back of a directional pattern is compared to the main lobe. The dipole is symmetric — it has no meaningful F/B ratio. Directional antennas make F/B ratio a key design target.

---

## What's Next

Lesson 4 is the Antenna Types Tour. You now know what a radiation pattern is and how to read one. In Lesson 4 you will meet the main antenna families — vertical, Yagi, loop, patch, dish — and see how each produces a different pattern shape through different physical design choices. For each antenna type, the question will be: what does the current distribution look like, and what pattern shape does that produce?

The interactive `radiation-3d-v5.html` will be revisited in a future update with multiple antenna types selectable. When that enhancement is complete, Lesson 4's interactive exercises will use it to compare patterns side by side.

---

*Lesson 3 of 20 — Unit 1: How Antennas Work*
