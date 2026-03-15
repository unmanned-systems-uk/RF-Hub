# Lesson 5 — Polarisation: Orientation Matters

**Unit 1: How Antennas Work**
**Prerequisite:** Lessons 1, 2, 3, and 4
**Reading time:** approximately 20–25 minutes

---

## What This Lesson Covers

In Lesson 4 you met six antenna families. In five of those sections the word **polarisation** appeared — at the vertical monopole, the collinear, the Yagi, the GPS patch, and the dish feed. Each time it was connected to a different practical consequence, and each time the explanation was deferred.

This lesson pays that debt. You will learn what polarisation actually is, why it determines whether two antennas can couple energy, what happens when they disagree, and how circular polarisation solves a problem that linear polarisation cannot.

This lesson also resolves a promise made back in Lesson 2. When we discussed the receive side, we said: "the wave doesn't hit the antenna — the antenna samples the field already threading through it." We said that distinction matters, and that Lesson 5 would explain why. Section 3 delivers that explanation.

**What this lesson does not cover:** elliptical polarisation as a full topic (it gets one sentence), design equations for circularly polarised antennas, impedance effects, or absolute gain values in dBi.

---

## Section 1 — Bridge from Lesson 4: Five Seeds, One Lesson

Lesson 4 planted five observations about polarisation. Before we define the concept, it is worth naming them explicitly so you know what this lesson will resolve.

**Seed 1 — Vertical monopole (Section 2):** "The orientation of the conductor sets the orientation of the E field in the wave." You saw that a vertical wire produces a wave whose E field oscillates vertically. That observation is about to become the definition.

**Seed 2 — Collinear (Section 3):** "A receiving antenna with a different polarisation orientation would not couple efficiently with this signal." You were told this matters — but not yet told why.

**Seed 3 — Yagi (Section 5):** Rotating the Yagi's elements 90° around the boom changes the polarisation without changing the radiation pattern. Two Yagis on the same tower with different element orientations will not couple energy well between them.

**Seed 4 — GPS patch (Section 6):** GPS uses circular polarisation so the receiver works regardless of how you tilt it. You heard the term but not the mechanism.

**Seed 5 — Dish feed (Section 7):** The dish is polarisation-neutral. The feed antenna at the focal point sets the polarisation. Satellite operators use dual-polarisation to double capacity on a single frequency.

Each of these seeds connects to a different section of this lesson. By the end, every one of them will be resolved.

One framing note before we begin. In Lesson 3 you learned to think about antenna performance through the lens of energy coupling efficiency. Polarisation is another factor in that coupling — alongside the radiation pattern. Getting the pattern right and the polarisation wrong can cost you most of your signal.

---

## Section 2 — What Is Polarisation?

Polarisation is the orientation of the E field oscillation in a propagating electromagnetic wave.

That is the entire definition. One sentence.

When you learned in Lesson 1 that an EM wave consists of an E field and an H field oscillating perpendicular to each other and perpendicular to the direction of travel, there was a question we did not ask: *which way is the E field oscillating?* The wave is travelling horizontally toward a distant receiver — but is the E field moving up and down, or side to side, or at some angle in between?

The answer depends entirely on the antenna that created the wave.

A vertical conductor — like the monopole from Lesson 4 — drives current up and down. The changing current produces an E field that oscillates in the same plane: vertically. The wave that propagates outward from this antenna carries a vertically oscillating E field. We call this a **vertically polarised** wave.

A horizontal conductor — a dipole mounted flat — drives current side to side. The E field oscillates horizontally. The wave is **horizontally polarised**.

This is exactly what Lesson 4 Seed 1 told you: the wire's orientation and the wave's E field orientation are the same thing. That observation is now the formal definition.

<!-- VISUAL: Two side-by-side animations, each showing a wave propagating rightward from a source antenna toward a distant point. LEFT: A vertical conductor (monopole) with current arrows flowing up and down. The propagating wave shows the E field vector oscillating vertically (up-down arrows along the wave). Label: "Vertically polarised — E field oscillates in the vertical plane." RIGHT: A horizontal conductor (dipole mounted flat) with current arrows flowing left and right. The propagating wave shows the E field vector oscillating horizontally (left-right arrows along the wave). Label: "Horizontally polarised — E field oscillates in the horizontal plane." Both waves show H field oscillating perpendicular to E, but E is the dominant visual element. The source conductor is drawn at the left of each animation, clearly showing that its physical orientation matches the E field orientation in the wave. -->

The H field is still there, oscillating perpendicular to the E field as always. But when we talk about polarisation, we describe the wave by its E field orientation. This is a convention — and it is universal. If someone tells you a signal is "vertically polarised," they mean the E field oscillates vertically.


---

## Section 3 — Why Polarisation Affects Energy Coupling

This is the section that Lesson 2 promised you.

In Lesson 2, Section 5, we said: "the wave doesn't hit the antenna — the antenna samples the field already threading through it. This distinction matters — we'll return to it in Lesson 5 because it's the reason that rotating an antenna changes signal strength."

Now you know what polarisation is. We can resolve the wrong model and replace it with the correct one.

### The wrong picture

You might still be carrying a mental image of the receive process that looks something like this: a wave travelling through space arrives at the antenna and *hits* it, like a ball hitting a stick. The wave crashes into the antenna, the antenna absorbs it, and signal comes out.

This picture is wrong, and here is why it leads you astray. In the "wave hits antenna" model, the wave's arrival direction matters most. The antenna is a target, and the wave is a projectile. In that picture, rotating the antenna would not change much — the wave would still arrive and still "hit" it.

But anyone who has ever rotated an antenna knows that orientation matters enormously. You can take a perfectly good antenna, point it in the right direction with full radiation pattern coverage, and lose almost all of your signal simply by twisting it 90°. The "wave hits antenna" model cannot explain this.

### The correct picture

Here is what actually happens.

The electromagnetic wave does not arrive as a projectile. It is a region of oscillating E and H fields that passes *through* the space where the antenna sits. The wave does not stop at the antenna. It passes through and continues. The antenna is immersed in the field — it samples what is already there.

Now: the E field component that is **parallel** to the conductor drives current along the conductor. This is the mechanism. The E field pushes electrons in the direction the field points. If the field points along the wire, the electrons move along the wire, and a current flows. The receiver amplifies that current.

But the E field component that is **perpendicular** to the conductor does nothing useful. There is no conductor length in that direction for the field to push electrons along. The electrons have nowhere to go. No current flows. No energy couples.

This is why rotating an antenna changes signal strength. When the E field is aligned with the conductor, maximum current flows and maximum energy couples. When the E field is perpendicular to the conductor, zero current flows and zero energy couples. At any angle in between, only the component of the E field that projects onto the conductor axis drives current.

<!-- VISUAL: Two-panel diagram — the L02 wrong-model resolution. PANEL A (wrong model): A wave drawn as an arrow/projectile approaching the tip of a vertical antenna from the left. The wave appears to "hit" the antenna end-on. Large red X over the panel. Label: "Not this — the wave does not hit the antenna." PANEL B (correct model): A vertical antenna, with a wavefront (series of vertical dashed lines representing the wave's E field) passing broadside through the antenna from left to right. Small arrows along the antenna show the E field component parallel to the conductor, driving current up and down. The wavefront continues past the antenna on the right — it does not stop. Label: "This — the E field component parallel to the conductor drives current." Arrows clearly show the E field direction matching the conductor orientation. -->

### Three positions — one wave, one antenna

To see this mechanism clearly, imagine a single vertically polarised wave arriving at a receive antenna. The antenna can be oriented in three ways:

**Position 1 — Antenna vertical (aligned with E field).** The E field oscillates up and down. The conductor runs up and down. The entire E field drives current along the full length of the conductor. Maximum energy couples. This is matched polarisation.

**Position 2 — Antenna tilted at 45°.** The E field still oscillates vertically, but the conductor is now at an angle. Only the component of the E field that projects onto the conductor axis drives current. That component is smaller than the full field — specifically, it is the field strength multiplied by cos 45°, which is 0.707. You couple about 71% of the field strength, which means about half the power.

**Position 3 — Antenna horizontal (perpendicular to E field).** The E field oscillates up and down. The conductor runs side to side. The E field has zero component along the conductor. No current flows. Zero energy couples. This is cross-polarisation.

<!-- VISUAL: Three-position sequence diagram. Same vertically polarised wave arriving from the left in all three panels. The wave's E field is shown as vertical double-headed arrows. POSITION 1: Antenna vertical. Full-length projection arrow along the conductor shown in green. Label: "100% coupling — E field fully aligned." POSITION 2: Antenna tilted at 45°. The E field vector is decomposed into two components: one parallel to the tilted conductor (shown in green, shorter) and one perpendicular (shown in grey, discarded). Label: "Partial coupling — only the parallel component (cos 45° = 0.707) drives current." POSITION 3: Antenna horizontal. The E field projection onto the conductor is zero — shown as a red dot. Label: "Zero coupling — E field perpendicular to conductor." All three panels should use the same wave and same antenna drawn at different angles, making it visually clear that nothing changed except orientation. -->

This resolves Lesson 4 Seed 2 — the collinear observation. "A receiving antenna with a different polarisation orientation would not couple efficiently with this signal." Now you know the mechanism: only the E field component parallel to the conductor drives current. A vertical collinear transmitting a vertically polarised wave will couple poorly with a horizontal receiving antenna because the E field and the conductor are perpendicular.


---

## Section 4 — Polarisation Mismatch and Coupling Loss

Section 3 explained the mechanism. Now we put a number on it.

When two linearly polarised antennas are misaligned by an angle θ (theta), the coupling loss in decibels is:

> **Polarisation mismatch loss (dB) = −20 × log₁₀(cos θ)**

where θ is the angle between the two polarisation planes — that is, the angle between the orientations of the two conductors.

<!-- VISUAL: Formula animation brief. The formula −20 × log₁₀(cos θ) is shown with θ highlighted in amber. Below the formula, a diagram shows two antennas: one fixed (TX, vertical), one rotatable (RX). The angle θ is shown as the arc between their orientations. On hover or scroll: the formula rearranges to solve for θ given a target loss — letters slide into new positions. cos θ isolates first, then θ = arccos(…). A small worked-example panel beside the formula shows a live calculation: input θ, output loss in dB. -->

### Worked examples at three key angles

**θ = 0° (matched polarisation)**

cos 0° = 1

Loss = −20 × log₁₀(1) = −20 × 0 = **0 dB**

No loss. The E field is fully aligned with the conductor. All of it drives current. This is the ideal case — and the reason you match polarisation whenever you can.

**θ = 45° (half-power point)**

cos 45° = 0.707

Loss = −20 × log₁₀(0.707) = −20 × (−0.15) = **3 dB**

Three decibels of loss. Half the power is gone — simply because the antenna is tilted 45° from the polarisation of the incoming wave. The field has not weakened. Nothing has changed about the transmitter. You have lost half your received power purely from orientation mismatch.

**θ = 90° (cross-polarised)**

cos 90° = 0

Loss = −20 × log₁₀(0) = **theoretically infinite**

The E field is entirely perpendicular to the conductor. Zero component drives current. In theory, no energy couples at all. In practice, you can still lose 20 dB or more — a factor of 100 in power — because reflections from buildings, terrain, and the ionosphere mix the polarisation slightly and prevent a perfect null. But 20+ dB of loss is devastating to a communication link.

### The mismatch summary

| TX Polarisation | RX Polarisation | Approximate Loss |
|:---|:---|:---|
| Vertical | Vertical | 0 dB (matched) |
| Horizontal | Horizontal | 0 dB (matched) |
| Vertical | Horizontal | 20+ dB (cross-polarised) |
| Vertical | 45° slant | 3 dB |
| Any linear | Circular | 3 dB |
| RHCP | RHCP | 0 dB (matched) |
| RHCP | LHCP | 20+ dB (cross-polarised) |

We have not yet explained circular polarisation — that is Section 5. For now, note the two circular rows at the bottom. They follow a pattern: matched circular is lossless, opposite-hand circular is cross-polarised. And any linear antenna receiving a circular signal pays exactly 3 dB — always, regardless of rotation. That constant 3 dB will make sense after Section 5.

### ▶ Interactive Exercise — polarisation-mismatch.html

**Open:** `polarisation-mismatch.html` (link in the lesson resources bar)

<!-- VISUAL: This section embeds the polarisation-mismatch.html interactive via iframe. The interactive shows a TX antenna (fixed orientation), an RX antenna with a rotation slider (0°–360°), an oscilloscope display showing the received waveform, and an FFT display showing the peak power level. A mode toggle switches between Linear TX and Circular (RHCP) TX. iframe src: "../../../frontend/interactives/polarisation-mismatch.html" suggested height: 500px. -->

This interactive lets you discover the mismatch relationship before the formula tells you what to expect.

**Part 1 — Linear mode (default)**

1. The TX antenna is transmitting a vertically polarised signal. The RX antenna starts at 0° — matched. Look at the oscilloscope waveform and the FFT peak. This is your reference: full signal.
2. Slowly rotate the RX antenna from 0° toward 90°. Watch both displays as you go. At what angle does the FFT peak drop noticeably? At what angle has it dropped by about half its original height?
3. Continue to 90°. What happens to the oscilloscope waveform? What does the FFT peak show?
4. Keep rotating past 90° toward 180°. What happens? Does the signal return?
5. Complete the full 360° rotation. Describe the pattern you see. Where are the peaks and where are the nulls?

**Part 2 — Circular mode**

6. Switch the TX to RHCP (circular) mode using the toggle. Set the RX back to 0°.
7. Now rotate the RX through the full 360° — slowly. Watch the FFT peak level.
8. Compare this to what you saw in linear mode. What is different? What is the FFT peak level compared to the linear-matched reference?
9. Why is the circular-to-linear loss constant regardless of RX rotation angle? (Hint: think about what component of the rotating E field a linear antenna can respond to at any given instant.)

### The Yagi observation resolved

This resolves Lesson 4 Seed 3 — the Yagi polarisation observation. In Lesson 4 you saw that rotating a Yagi 90° around its boom changes the polarisation without changing the radiation pattern. Two Yagis on the same tower, one with horizontal elements and one with vertical elements, both pointing at the same distant station, will not couple energy well between them.

Now you can calculate the loss. The two Yagis have their driven elements perpendicular to each other: θ = 90°. The polarisation mismatch loss is 20+ dB — a factor of 100 in power. Same direction, same gain, same frequency, same path — but 99% of the signal is lost because the E field orientation and the conductor orientation are perpendicular.

This is not a defect. It is a feature that is deliberately exploited. Two Yagis on the same tower can operate on the same frequency with different polarisations and barely interfere with each other. Satellite operators and broadcasters use this technique routinely — and we will return to it in Section 6.


---

## Section 5 — Circular Polarisation

Everything so far has involved **linear** polarisation — the E field oscillates back and forth in a single fixed plane. Vertical, horizontal, or some angle in between, but always a straight line.

Circular polarisation is different. The E field vector does not oscillate in one plane. Instead, it **rotates** as the wave propagates. If you could freeze the wave and look at it from the front — looking at the oncoming wave as it travels toward you — the tip of the E field vector traces out a circle.

Imagine pointing your right hand toward the oncoming wave, thumb pointing at you. If the E field rotates in the direction your fingers curl — clockwise, looking at the approaching wave — this is **right-hand circular polarisation (RHCP)**.

If the rotation is counter-clockwise looking at the approaching wave, it is **left-hand circular polarisation (LHCP)**.

<!-- VISUAL: Three-column diagram showing polarisation types from the "looking at oncoming wave" perspective (wave travelling toward the viewer). COLUMN 1 — LINEAR: The E field vector oscillates up and down (or side to side) in a fixed plane. The tip of the vector traces a straight line. A side view shows the sinusoidal oscillation as the wave propagates. Label: "Linear — E field oscillates in one plane." COLUMN 2 — CIRCULAR: The E field vector rotates. The tip traces a circle. A side view shows the E field tracing a helix as the wave propagates (like a corkscrew). Show the RHCP version: looking at the oncoming wave, the rotation is clockwise. Label: "Circular (RHCP) — E field rotates clockwise (looking at oncoming wave)." COLUMN 3 — ELLIPTICAL: The E field vector traces an ellipse — not a perfect circle, not a perfect line, but something in between. Label: "Elliptical — the general case." -->

<!-- VISUAL: Right-hand rule diagram. A right hand is shown with the thumb pointing toward the viewer (representing the direction of wave travel — toward you). The fingers curl clockwise. Label: "Right-hand rule: thumb in direction of travel, fingers curl in direction of E field rotation = RHCP." A small annotation: "LHCP = left hand, same rule, counter-clockwise." -->

### Why satellites use circular polarisation

A satellite in orbit does not stay at a fixed angle relative to a ground station. As it crosses the sky, the geometry between the satellite's antenna and the ground antenna changes continuously. If the satellite transmitted a linearly polarised signal — say, vertically polarised — the ground antenna would receive full signal when the relative orientations matched, but the signal would fade as the satellite moved and the relative angle shifted. At certain positions, the mismatch could be severe.

Circular polarisation solves this. Because the E field rotates continuously, there is no single orientation that the ground antenna needs to match. As long as the receiving antenna is designed for the same hand of circular polarisation (RHCP or LHCP), the coupling is constant regardless of how the relative orientation changes.

This is exactly why GPS works the way it does — and why Lesson 4 Seed 4 mentioned it.

### The GPS seed resolved

GPS satellites transmit RHCP at around 1575 MHz. The GPS patch antenna in your phone or car is designed to receive RHCP. It does not matter how you tilt your device — face up, tilted sideways, held at an angle — the circular polarisation handles the orientation change automatically. This is a deliberate engineering choice, not an accident. The patch geometry is modified slightly (typically with a corner truncation or dual feed) to produce a rotating E field instead of a linearly oscillating one.

### The 3 dB penalty — circular to linear

What happens if you try to receive a circularly polarised signal with a linearly polarised antenna?

At any instant, the rotating E field has a component along the linear antenna's axis and a component perpendicular to it. The linear antenna responds only to the parallel component — just as Section 3 explained. But because the E field is rotating, the parallel component is constantly changing. Sometimes it is fully aligned, sometimes it is zero, and it cycles between the two.

Averaged over time, the linear antenna captures exactly half the power of the circularly polarised wave. Half the power is 3 dB. This loss is constant — it does not depend on which way the linear antenna is oriented. Whether the linear antenna is vertical, horizontal, or at 45°, it always loses the same 3 dB from a circular signal. That constancy is the trade-off: you accept a fixed 3 dB penalty in exchange for orientation independence.

This is what you saw in the interactive exercise (Part 2): the FFT peak stayed constant as you rotated the RX through 360°, but it was 3 dB below the peak you saw in linear-matched mode.

### Opposite-hand is cross-polarised

RHCP and LHCP are as different from each other as vertical and horizontal.

If a satellite transmits RHCP and you receive with an LHCP antenna, the mismatch is not 3 dB — it is 20 dB or more. The opposite-hand circular antenna actively rejects the signal. The rotating E field and the antenna's response rotate in opposite directions, and the net coupling over a full cycle is near zero.

This is the same row in the mismatch table: RHCP → LHCP gives 20+ dB loss, just as V → H gives 20+ dB loss. Circular polarisation has its own version of cross-polarisation — and it is just as severe.

### A note on elliptical polarisation

In practice, most real signals fall somewhere between perfect linear and perfect circular — the E field traces an ellipse rather than a straight line or a perfect circle. This is called **elliptical polarisation**, and it is the general case of which linear and circular are special extremes. The details — axial ratio, tilt angle — belong to later units.


---

## Section 6 — Practical Polarisation Guide

You now understand the mechanism (Section 3), the mismatch cost (Section 4), and the circular option (Section 5). This section puts that knowledge to work across the applications you are most likely to encounter.

### Applications by service

| Service | Typical Polarisation | Why |
|:---|:---|:---|
| FM broadcast (UK) | Vertical (or mixed V+H) | Vehicles use vertical whip antennas — vertical polarisation reaches the largest audience. Some stations transmit mixed (slant or dual) to serve both car and home antennas. |
| Amateur VHF/UHF FM | Vertical | Convention and practicality — handheld and mobile antennas are vertical whips. Repeater systems are vertically polarised. |
| Amateur VHF/UHF SSB/CW | Horizontal | Convention — long-distance (tropospheric, EME) work uses horizontal Yagis. Separates SSB/CW traffic from FM traffic by polarisation. |
| Amateur HF | Varies / does not matter | The ionosphere rotates the polarisation plane unpredictably (Faraday rotation). By the time an HF signal arrives via skywave, its polarisation has been scrambled — matching at the receive end is futile. |
| Satellite downlinks | RHCP or LHCP | Orientation independence as the satellite crosses the sky. Hand is chosen per mission and published in link budgets. |
| GPS (L1 band, 1575 MHz) | RHCP | All GPS satellites transmit RHCP. Receivers use RHCP patches. Works regardless of device tilt. |
| Wi-Fi (2.4 / 5 GHz) | Typically vertical, often mixed | Consumer access points usually have vertical antennas. Indoor multipath reflections scramble polarisation somewhat, reducing the penalty for mismatched devices. |
| TV broadcast (UK, legacy analogue) | Horizontal | Historical convention — rooftop Yagi antennas are mounted with horizontal elements. |
| DAB radio (UK) | Vertical (some transmitters) | Chosen to suit car whip antennas. |
| ADS-B (1090 MHz) | Vertical | Aircraft use vertical monopole antennas on the fuselage. Ground receivers use vertical antennas to match. |

### The dish feed — Seed 5 resolved

Lesson 4 told you that the dish is polarisation-neutral and that the feed antenna at the focal point sets the polarisation. Now you can see why this matters in practice.

A satellite operator wants to maximise the data capacity of a single frequency allocation. One powerful technique is **dual-polarisation**: transmit two independent data streams on the same frequency, one on vertical polarisation and one on horizontal polarisation. Because V and H are cross-polarised (20+ dB isolation), the two streams barely interfere with each other. A receiving dish with a dual-polarisation feed can separate the two streams and effectively double the capacity of the link — without using any additional spectrum.

The dish reflects both polarisations identically. It does not care. The engineering challenge is entirely in the feed design — building a feed that can simultaneously handle two orthogonal polarisations and route them to separate receivers. The dish just reflects.

### A note on Faraday rotation

The HF row in the table above deserves a brief explanation. When a radio wave passes through the ionosphere — the electrically charged layer in the upper atmosphere — the Earth's magnetic field causes the polarisation plane to rotate. This is called **Faraday rotation**. The amount of rotation depends on frequency, ionospheric conditions, and path length, and it changes unpredictably over time.

At HF frequencies (3–30 MHz), where skywave propagation bounces signals off the ionosphere over hundreds or thousands of kilometres, the polarisation at the receive end bears little relation to the polarisation at the transmit end. This is why HF operators generally do not worry about polarisation matching — the ionosphere has already scrambled it. At VHF and above, Faraday rotation is negligible for terrestrial paths, and polarisation matching matters a great deal.


---

## Section 7 — Unit 1 Close and Capstone

### What you have built

This is the final lesson of Unit 1. Over five lessons you have built a complete conceptual foundation for understanding antennas.

**Lesson 1 — What is EM Radiation?** A changing electric field creates a magnetic field; a changing magnetic field creates an electric field. Together they form a self-sustaining wave that propagates at the speed of light. The relationship λ = c/f connects wavelength, frequency, and the speed of light. The E and H fields are an inseparable pair, perpendicular to each other and perpendicular to the direction of travel.

**Lesson 2 — From Waves to Wires.** An antenna radiates because AC current means accelerating charges, and accelerating charges produce changing fields that detach from the wire and propagate freely. The half-wave dipole carries maximum current at its centre and zero at its tips. Reciprocity means the antenna works identically for transmitting and receiving.

**Lesson 3 — Radiation Patterns.** The radiation pattern is a 3D map of energy coupling efficiency. The dipole's toroid shape is a direct consequence of its current distribution. Polar plots are 2D slices of the 3D pattern. Directivity means reshaping the pattern — redistributing the same total energy into fewer directions.

**Lesson 4 — Antenna Types Tour.** Six antenna families, from omnidirectional to pencil-beam, each with a different current distribution producing a different pattern. The vertical monopole, collinear, loop, Yagi, patch, and dish — arranged along a directivity spectrum. Current distribution is the analytical lens that explains every pattern shape.

**Lesson 5 — Polarisation.** The E field orientation of the wave determines whether two antennas can couple energy. Only the E field component parallel to the conductor drives current. Mismatch costs decibels — up to 20+ dB for cross-polarisation. Circular polarisation trades a fixed 3 dB penalty for orientation independence, which is why satellites and GPS use it.

Together, these five lessons give you the wave, the pattern, and the polarisation. You can now look at any antenna and reason about what it does: what current distribution it carries, what pattern shape that produces, what polarisation the wave has, and whether it will couple efficiently with a given receive antenna.

### What comes next

What you do not yet know is what happens at the feedpoint.

When you connect a transmission line to an antenna, the antenna presents an impedance — a combination of resistance and reactance that determines how much of the transmitter's power actually reaches the antenna and how much bounces back. Getting impedance wrong means wasted power, reflected energy, and potential damage to equipment.

Unit 2 begins with **impedance** — the concept that connects the antenna to the radio. You will learn what impedance is, what SWR and return loss mean, how the Smith Chart works, and how to measure all of it with a VNA. By the end of Unit 2 you will be able to connect a real antenna to a real instrument and interpret what you see.

### ▶ Capstone Exercise — Hunt the Source (df-hunt.html)

**Open:** `df-hunt.html` (link in the lesson resources bar)

<!-- VISUAL: This section embeds the df-hunt.html interactive via iframe. The interactive shows a 2D overhead map with a hidden TX antenna, two small loop antennas at known positions, rotation controls for each loop, FFT/signal strength displays, bearing lines, and a "Found" button. iframe src: "../../../frontend/interactives/df-hunt.html" suggested height: 600px. -->

This exercise synthesises two lessons: the loop antenna's sharp broadside null from Lesson 4, and the polarisation coupling mechanism from this lesson.

You see a 2D overhead map. Somewhere on it, a hidden transmitter is broadcasting. You cannot see it. Your job is to find it using two small loop antennas placed at known positions on the map.

**How it works:**

Remember from Lesson 4: a small loop antenna has a sharp null broadside to the loop face. When the loop's face is perpendicular to the incoming wave — when the broadside axis points directly at the signal source — the received signal drops to minimum. The null is sharp and precise, which makes it ideal for direction finding.

**Instructions:**

1. Look at the map. You have two loop antennas — Loop A and Loop B — at fixed positions. Each has a rotation control and a signal strength display.
2. Start with Loop A. Rotate it slowly and watch the signal strength. The signal will rise and fall as you rotate. Find the angle where the signal drops to its lowest point — the null. This is the direction in which the loop's broadside axis is pointing directly at the hidden transmitter. A faint bearing line shows the direction of the null.
3. Now do the same with Loop B. Find its null bearing.
4. The two bearing lines will intersect at a point on the map. That intersection is where the hidden transmitter is located.
5. When you think you have found it, press the "Found" button. The system will check whether the intersection of your two bearings falls within tolerance of the actual transmitter position.

**Tips:**

- You are looking for the *minimum*, not the maximum. The null is sharper and more precise than the peak, which is why DF operators hunt the null.
- Move slowly near the null point. Small changes in angle produce large changes in signal strength.
- If your first attempt does not succeed, adjust your bearings and try again. You can keep refining without penalty.
- After a successful find, press "New Game" for a new random transmitter position and try again.

**Reflection question after you have found the source:**

The loop null occurs broadside to the loop face. In Lesson 4 we explained this by saying the current circulates around the loop and the magnetic axis is perpendicular to the loop plane. Now think about it through the polarisation lens from this lesson: when the loop face points at the source, what is the relationship between the incoming E field and the current path around the loop? Why does this produce a null?


---

## Self-Check

Work through these without looking back at the lesson. If you get stuck, re-read the relevant section — don't just peek at the answer.

### Part A — Quick Concepts

Answer each question in one or two complete sentences.

1. What polarisation does a vertical whip antenna produce? Why?

2. A satellite transmits RHCP. You receive it with a vertical dipole. How much signal do you lose from the polarisation mismatch alone? Why is the loss that specific amount?

3. Why is circular polarisation preferred for satellite communications rather than linear?

4. Your neighbour has mounted their FM receiving antenna horizontally. Most local FM broadcasts in your area are vertically polarised. What problem will they experience, and approximately how severe is it in decibels?

5. GPS signals are RHCP. If you attempted to receive them with an LHCP antenna, what would happen? Why?

### Part B — Calculations

Show your working for each.

1. Two linearly polarised antennas are misaligned by 30°. Calculate the polarisation mismatch loss in dB using the formula from Section 4.

2. At what angle does the mismatch loss reach exactly 3 dB? Show your working by solving the formula for θ.

3. A Yagi is mounted with horizontal elements. A second Yagi on the same tower is mounted with vertical elements. Both are pointed at the same distant station. What is the approximate coupling loss between these two antennas due to polarisation alone? What does this tell you about using polarisation to isolate signals?

### Part C — Connect It Back (Energy Coupling)

This question ties polarisation back to the energy coupling model from Lesson 3.

A half-wave dipole is mounted vertically. An EM wave arrives from the broadside direction — the direction of maximum radiation in the pattern. The wave is horizontally polarised.

Does the antenna couple energy from this wave? Explain your answer using **both** the radiation pattern (from Lesson 3) and polarisation (from this lesson).

What does this tell you about the relationship between pattern and polarisation as factors in energy coupling? Can you have good pattern alignment and still lose the signal?

### Part D — Antenna Scavenger Hunt (Optional Portfolio Exercise)

This exercise takes everything from Unit 1 out of the classroom and into the real world. It is optional but strongly recommended.

**Find and document 10 different antennas** in the real world. Walk around your neighbourhood, drive around, or use Google Street View if mobility is limited. For each antenna, identify and record:

- **Type** — dipole, Yagi, dish, vertical/monopole, panel, patch, collinear, loop, or other
- **Likely frequency range** — use physical size as a clue. Remember: λ = c/f, and a half-wave dipole has a total length of about λ/2. If an element is roughly 1 metre long, what frequency is that? (Hint: 300/f(MHz) gives wavelength in metres.)
- **Polarisation** — vertical, horizontal, or circular. Reason from the element orientation. A vertical element produces vertical polarisation. Horizontal elements produce horizontal polarisation. A patch on a GPS device is likely RHCP.
- **Probable purpose** — mobile phone, TV reception, satellite, amateur radio, Wi-Fi, point-to-point microwave, ADS-B, DAB, or something else
- **A photo or screenshot**

**Bonus challenges:**

- Find at least one example from each of the six antenna families in Lesson 4 (vertical/monopole, collinear, loop, Yagi, patch, dish)
- Spot a polarisation mismatch in the wild — a TV Yagi mounted with the wrong element orientation for the local transmitter, or a Wi-Fi antenna tilted at an odd angle
- Estimate the gain of one antenna based on its type and size — is it omnidirectional, moderately directional, or a pencil beam?


---

## Lesson Summary

- **Polarisation is the orientation of the E field in a propagating wave.** A vertical conductor produces a vertically polarised wave. A horizontal conductor produces a horizontally polarised wave. The definition is that simple — the conductor's orientation determines the E field orientation.

- **Only the E field component parallel to the conductor drives current.** This is the mechanism behind polarisation mismatch. A perpendicular E field component has no conductor length to push electrons along. This is also why the "wave hits antenna" model from Lesson 2 was wrong — the wave passes through the antenna, and the field component matters, not the arrival direction.

- **Mismatch is quantified by the cos θ formula.** Polarisation mismatch loss (dB) = −20 × log₁₀(cos θ). At 0° the loss is zero (matched). At 45° the loss is 3 dB (half power). At 90° the loss is theoretically infinite (cross-polarised). In practice, reflections and scattering prevent a perfect null, but 20+ dB of loss is common and devastating.

- **Circular polarisation trades a fixed 3 dB penalty for orientation independence.** The E field rotates as the wave propagates. A matching circular antenna (same hand) couples fully regardless of relative orientation. A linear antenna receiving circular always loses 3 dB — but that 3 dB is constant, which is exactly the property that makes circular useful for satellites and GPS.

- **Opposite-hand circular is cross-polarised.** RHCP to LHCP gives 20+ dB loss, the same as vertical to horizontal. Circular polarisation has its own version of cross-polarisation.

- **All five L04 seeds are resolved.** The vertical monopole's conductor orientation sets the E field orientation (definition). The collinear's polarisation mismatch now has a mechanism (parallel component drives current). The Yagi's element rotation changes polarisation without changing the pattern (and you can calculate the loss). The GPS patch uses RHCP for orientation independence. The dish feed sets the polarisation, enabling dual-polarisation for capacity doubling.

---

*Lesson 5 of 20 — Unit 1: How Antennas Work*
*This is the final lesson of Unit 1.*
