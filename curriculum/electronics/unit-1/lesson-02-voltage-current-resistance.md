# Lesson 2 — Voltage, Current, and Resistance

**Unit:** 1 — The Language of Electricity  
**Level:** `[F]` Foundation  
**RSGB Syllabus:** 2A1, 2A2, 2C1  
**Prerequisites:** Lesson 1 (charge, current, conductors/insulators)  
**Equipment Needed:** None (optional: multimeter + resistor for bench verification)  
**Estimated Time:** 30 minutes theory + interactive exploration

---

## Learning Objectives

By the end of this lesson you will be able to:

1. Explain what voltage is in physical terms — not just "electrical pressure" but why a potential difference causes current to flow
2. State the unit of voltage (volt) and relate it to energy and charge
3. Explain what resistance is and why it exists at the atomic level
4. State the unit of resistance (ohm) and recognise the Ω symbol
5. Apply Ohm's law (V = IR) to calculate any one of voltage, current, or resistance given the other two
6. Rearrange Ohm's law confidently and apply it to simple RF-relevant examples
7. Read a basic circuit schematic showing a voltage source, resistor, and current path

---

## 1. Voltage: The Force That Drives Current

Lesson 1 established that current is charge in motion. But we left a question unanswered: what makes the charge move?

Charge does not flow spontaneously. Electrons in a copper wire have plenty of freedom to move — they are part of the electron sea — but without something pushing them, they drift randomly in all directions and go nowhere useful. For a net current to flow, something must push charge consistently in one direction.

That something is **voltage**.

### The Energy Picture

Voltage is a difference in electrical energy between two points. The formal name is **potential difference** (often abbreviated **PD**), and its unit is the **volt** (symbol **V**), named after Alessandro Volta.

Here is the precise definition:

> **One volt** means that one joule of energy is transferred for every coulomb of charge that moves between the two points.
>
> **1 V = 1 J/C** — one volt equals one joule per coulomb.

That definition is correct but abstract. Let's make it physical.

### The Water Analogy — Useful, Then Discarded

Imagine a water tank elevated above the ground, connected by a pipe to a lower tank. Water flows downhill through the pipe — from high pressure to low pressure. The height difference between the tanks determines how hard the water pushes. A bigger height difference means more pressure, more flow.

In a circuit:
- The **battery** is the elevated tank — it provides the energy that creates the pressure difference
- The **wire** is the pipe — it provides the path
- The **voltage** is the height difference — it determines how hard the charge is pushed
- The **current** is the water flow — how much charge moves per second

This analogy is helpful for about five minutes. It gives you the right intuition: voltage is the *push*, current is the *flow*, and you need both for anything to happen.

But the analogy breaks down quickly. Water is incompressible; charge is not. Water flows through a pipe's interior; at RF frequencies, current flows on a conductor's surface. Water has momentum; electrons in a circuit essentially do not (their drift velocity adjusts almost instantaneously). We will use the water picture once here, acknowledge its limits, and then leave it behind. From this point forward, we work with the electrical quantities directly.

> **Terminology note:** "Voltage" and "potential difference" mean the same thing in circuit analysis. "Voltage" is the informal term; "potential difference" is the formal one. The RSGB syllabus uses both. So do we. There is a related but distinct concept called "electromotive force" (EMF) — the voltage a source provides when no current flows. We will distinguish EMF from PD properly in Lesson 5. For now, treat "voltage" as the potential difference between two points.

### Voltage Is Always Between Two Points

This is critical, and beginners get it wrong constantly: **voltage does not exist at a single point.** It is always a *difference* between two points. When someone says "the voltage at this node is 5 V," they mean "the voltage between this node and the reference point (usually ground) is 5 V."

A battery labelled 12 V means there is a 12-volt potential difference between its positive terminal and its negative terminal. Connect a voltmeter across the battery — one probe on +, one probe on − — and it reads 12 V. Touch both probes to the same terminal and it reads 0 V. There is no potential *difference* between a point and itself.

This "always between two points" rule will become essential when we reach Kirchhoff's voltage law in Lesson 4 and when we analyse RF circuits where the "ground" reference is not always obvious.

<!-- VISUAL: voltage-two-points
A battery (clearly labelled + and −, 12V) connected to a simple circuit with a resistor.

Three voltmeter probe placements shown:

Position A: Red probe on +, black probe on −, across the battery.
  - Voltmeter reads: "12.0 V"
  - Label: "Potential difference between + and − = 12 V"

Position B: Both probes on the + terminal.
  - Voltmeter reads: "0.0 V"
  - Label: "No difference between a point and itself"

Position C: Red probe on top of resistor, black probe on bottom of resistor.
  - Voltmeter reads: "12.0 V" (assuming single resistor in a simple loop)
  - Label: "Same 12 V appears across the load — the energy is transferred here"

Key annotation at bottom: "Voltage is always BETWEEN two points. Never AT a single point."

Style: Dark background. Battery in amber/cyan (+ / −). Voltmeter display in green LED-style digits (IBM Plex Mono). Probe wires in red and black.
-->

---

## 2. Resistance: Opposition to Current

If voltage is the push, **resistance** is the opposition. Every material, every component, every piece of wire resists the flow of current to some degree.

The unit of resistance is the **ohm** (symbol **Ω**, the Greek capital letter omega), named after Georg Simon Ohm. A component with a resistance of one ohm allows one ampere of current to flow when one volt is applied across it.

### What Resistance Actually Is

At the atomic level, resistance exists because electrons moving through a material collide with things. In a metal conductor, the free electrons are constantly bumping into the lattice of atoms, into impurities, into each other. Each collision transfers some of the electron's kinetic energy to the lattice as heat. The electrons lose speed, get pushed forward by the electric field again, collide again, lose speed again.

The resistance of a material depends on:

- **What it is made of.** Copper has low resistance because its atomic structure provides a clear path for electrons. Nichrome (an alloy used in heating elements) has high resistance because its structure scatters electrons much more. Every material has a property called **resistivity** — an intrinsic measure of how strongly it opposes current.

- **How long it is.** A longer conductor means more collisions along the way. Double the length, double the resistance. This is why long cable runs matter in antenna feed systems — the resistance of the conductor itself causes measurable signal loss.

- **How thick it is.** A thicker conductor provides more parallel paths for electrons. Double the cross-sectional area, halve the resistance. This is why high-current power cables are thick and why PCB traces carrying significant current are made wider.

- **Temperature.** In most metals, resistance increases with temperature. The atoms vibrate more vigorously, creating more obstacles for the electrons. This matters in power amplifiers where components get hot — the resistance of the transistor's channel changes with temperature, affecting bias and gain. (Carbon and some other materials behave oppositely — resistance decreases with temperature. We will encounter this in Unit 2 when we discuss resistor types.)

<!-- VISUAL: resistance-atomic-collisions
A horizontal conductor shown as a translucent tube (reuses the visual style from Lesson 1's current-flow-pipe).

Inside: a lattice of fixed atoms (amber dots in a regular grid). Free electrons (cyan dots) drift from right to left through the lattice.

Animation: An electron moves through the lattice, bumps into an atom, changes direction slightly, continues, bumps again. Each collision produces a tiny flash of amber/red at the impact point — representing energy transferred as heat.

Below the conductor, three comparison panels (toggled by tabs or a slider):

Panel 1 — "Short vs Long":
  Short conductor (few atoms, few collisions) next to long conductor (many atoms, many collisions).
  Label: "Longer path → more collisions → more resistance"

Panel 2 — "Thin vs Thick":
  Thin conductor (narrow tube, electrons crowded) next to thick conductor (wide tube, electrons spread out with more parallel paths).
  Label: "Larger area → more parallel paths → less resistance"

Panel 3 — "Cold vs Hot":
  Cold lattice (atoms barely vibrating, electrons pass through relatively easily) next to hot lattice (atoms vibrating vigorously, electrons scattered more often).
  Label: "Higher temperature → more vibration → more resistance (in metals)"

Style: Dark background. Lattice atoms in amber, electrons in cyan, collision heat flashes in red/orange.
-->

### The Resistor: A Component That Provides Resistance

In Lesson 1, we said every circuit needs a load. The simplest load is a **resistor** — a component designed to provide a specific, controlled amount of resistance.

Resistors are everywhere in electronics. They limit current, divide voltage, set bias points for transistors, terminate transmission lines, and form part of filters. We will study them in depth in Unit 2 (Lesson 6 — Resistors In Depth), including colour codes, tolerance, power ratings, and types. For now, you need to know three things:

1. A resistor has a specific resistance value, measured in ohms (Ω).
2. The circuit symbol for a resistor is a rectangle (IEC standard, used in the UK and most of Europe) or a zigzag line (US/ANSI standard). Both are widely used. This curriculum uses the IEC rectangle.
3. When current flows through a resistor, the resistor converts electrical energy into heat. This is not a side effect — it is the fundamental mechanism of resistance. Every collision between an electron and the lattice transfers energy. That energy has to go somewhere, and it goes into heat.

<!-- VISUAL: resistor-symbols
Two resistor symbols side by side:

LEFT — IEC (International):
  A simple rectangle, terminals extending from each short side.
  Label inside or beside: "R" (or a value like "470 Ω")
  Caption: "IEC standard — used in UK, Europe, and this curriculum"

RIGHT — ANSI (American):
  The classic zigzag line.
  Same label and value.
  Caption: "ANSI standard — common in US textbooks and datasheets"

Below both: "Both mean the same thing. You will encounter both. This curriculum uses the IEC rectangle."

Optional: a small photo inset of a real through-hole resistor (axial, with colour bands visible) — connecting the abstract symbol to the physical component. Caption: "A real resistor. The colour bands encode its value — we'll decode them in Unit 2."

Style: Clean dark background. Symbols in white/light grey lines. Labels in IBM Plex Sans.
-->

---

## 3. Ohm's Law: The Equation That Runs Everything

We now have three quantities:

- **Voltage** (V) — the push, measured in volts
- **Current** (I) — the flow, measured in amperes
- **Resistance** (R) — the opposition, measured in ohms

Georg Ohm discovered the relationship between them in 1827:

> **V = I × R**
>
> Voltage equals current multiplied by resistance.

This is **Ohm's law**. It is the single most-used equation in all of electronics. You will use it in every unit of this curriculum, in every circuit you analyse, and in every piece of RF equipment you ever design, build, or troubleshoot.

The equation says: if you know any two of the three quantities, you can calculate the third.

### The Three Forms

Ohm's law rearranges into three forms depending on what you need to find:

**To find voltage:** V = I × R
"What voltage appears across this component if I know the current through it and its resistance?"

**To find current:** I = V / R
"How much current flows through this resistance when I apply this voltage?"

**To find resistance:** R = V / I
"What resistance would produce this current at this voltage?"

These are not three separate laws. They are one equation, rearranged. If you can rearrange V = IR, you never need to memorise the other two forms — you derive them on the spot.

<!-- VISUAL: ohms-law-triangle-interactive
The classic Ohm's law triangle, but interactive:

A triangle divided into three sections:
  Top: V
  Bottom-left: I
  Bottom-right: R

Interaction: click/tap on the quantity you want to FIND. That quantity highlights and moves to the left side of an equation. The other two form the right side.

Click V → shows: V = I × R (I and R multiply)
Click I → shows: I = V ÷ R (V over R)
Click R → shows: R = V ÷ I (V over I)

Below the triangle, a live calculator:
  Three input fields: V (volts), I (amps), R (ohms)
  Enter any two → the third calculates automatically
  Unit prefix selector on each field (μ, m, (none), k, M) so the student can enter "50 mA" directly
  The calculated field highlights in amber

The calculator should handle unit prefixes intelligently:
  e.g., V = 12, R = 4.7 kΩ → I = 2.553 mA (auto-selects mA prefix for readability)

Key label: "One equation. Three forms. Learn V = IR and derive the rest."

Style: Dark background. Triangle in white/grey outlines. Active quantity in amber. Calculator inputs in IBM Plex Mono.
-->

### Why "I" for Current?

You might wonder why current is represented by the letter **I** rather than **C** (which is already taken by the coulomb). The convention comes from the French *intensité de courant* — intensity of current. André-Marie Ampère used it, and it stuck. Every equation, every circuit diagram, every datasheet uses I for current.

---

## 4. Ohm's Law in Practice: Worked Examples

Theory means nothing until you can use it. Here are four worked examples at increasing complexity. Work through each one with a calculator before reading the solution.

### Example 1: Finding Current

A 9 V battery is connected across a 1 kΩ resistor. What current flows?

**Given:** V = 9 V, R = 1 kΩ = 1000 Ω
**Find:** I

I = V / R = 9 / 1000 = 0.009 A = **9 mA**

Nine milliamps. This is a typical current for a small signal circuit — an LED indicator, a bias network, a sensor input.

### Example 2: Finding Voltage

A current of 250 mA flows through a 47 Ω resistor. What voltage appears across the resistor?

**Given:** I = 250 mA = 0.25 A, R = 47 Ω
**Find:** V

V = I × R = 0.25 × 47 = **11.75 V**

Nearly 12 volts. Notice that we had to convert milliamps to amps before multiplying — always work in base units (V, A, Ω) to avoid errors. Alternatively, learn the shortcut: milliamps × ohms gives millivolts, then convert. But base units are safer until the prefix arithmetic is second nature.

### Example 3: Finding Resistance

You want to limit the current through an LED to 20 mA. Your supply voltage is 5 V, and the LED drops about 2 V across itself (we will explain why in Unit 4 — for now, take it as given). What value resistor do you need in series with the LED?

**Given:** The resistor must drop the remaining voltage: V = 5 − 2 = 3 V. I = 20 mA = 0.02 A.
**Find:** R

R = V / I = 3 / 0.02 = **150 Ω**

A 150 Ω resistor. This is a real-world calculation you will do dozens of times.

### Example 4: An RF-Relevant Example

A 50 Ω dummy load is connected to a transmitter producing 100 W. We have not covered power yet (that is Lesson 3), but here is a preview: power, voltage, and resistance are related by P = V²/R. Rearranging: V = √(P × R) = √(100 × 50) = √5000 ≈ 70.7 V.

Now use Ohm's law: I = V / R = 70.7 / 50 = **1.41 A**.

So a 100 W HF transmitter driving a 50 Ω load produces about 70.7 V RMS and draws about 1.41 A of RF current through the load. These are real numbers. When you key up on 100 W into a dummy load, that is what is happening inside the resistor — 1.41 amps of current through 50 ohms, converting 100 watts into heat.

> **Why 50 Ω?** You will encounter "50 ohms" everywhere in RF engineering — coaxial cables, antenna inputs, test equipment, dummy loads. The reason is historical and practical: 50 Ω is a compromise between the impedance that gives minimum loss in a coaxial cable (~77 Ω) and the impedance that handles maximum power (~30 Ω). Almost all RF systems are standardised on 50 Ω. We will return to this in the antenna curriculum (feed impedance) and in Unit 3 (impedance matching).

<!-- VISUAL: ohms-law-worked-examples
An interactive worked-example solver. NOT a static image — a tool the student uses.

Layout: Three input boxes (V, I, R) with unit selectors. A "Calculate" button (or auto-calculate on input).

Pre-loaded examples (tabs or dropdown):
  - Tab 1: "9V battery + 1kΩ" → V=9, R=1000, I=? (auto-fills, highlights answer)
  - Tab 2: "250mA through 47Ω" → I=0.25, R=47, V=? 
  - Tab 3: "LED current limiter" → V=3, I=0.02, R=?
  - Tab 4: "100W dummy load" → V=70.7, R=50, I=?
  - Tab 5: "Blank" → student enters own values

Each pre-loaded example shows:
  - The circuit diagram (simple loop: source + resistor)
  - The known values highlighted
  - The equation form used
  - The step-by-step calculation
  - The answer with appropriate unit prefix

The student can modify any value and see the answer update — encourages experimentation.

Style: Dark background. Input fields in monospace. Calculated result in amber highlight. Circuit diagrams in the same style as the simple-circuit-interactive from Lesson 1.
-->

---

## 5. Reading Your First Schematic

Before we leave this lesson, let's connect the theory to the way circuits are actually drawn in practice.

A **schematic** (also called a **circuit diagram**) is a drawing that shows how components are connected using standard symbols. It is the universal language of electronics — every engineer, every technician, every amateur radio operator reads schematics.

The simplest schematic you can draw matches the circuits we have been discussing:

<!-- VISUAL: first-schematic
A clean, properly drawn schematic of the simplest useful circuit:

Components:
  - A DC voltage source (battery symbol: long line for +, short line for −) labelled "V = 12 V"
  - A single resistor (IEC rectangle) labelled "R = 1 kΩ"
  - Connecting wires (straight lines)
  - Conventional current direction arrow (amber, clockwise from + terminal through external circuit to − terminal)

Annotations (appearing on hover or as callout labels):
  - At the voltage source: "Voltage source provides the push (12 V potential difference)"
  - At the resistor: "Resistor opposes current. V = IR tells us I = 12/1000 = 12 mA"
  - At the current arrow: "Conventional current: from + through circuit to −"
  - At a wire junction: "Wires on a schematic are ideal — zero resistance (an approximation — real wires have small resistance)"

Below the schematic, a component symbol key:
  - Battery symbol → "DC voltage source"
  - Rectangle → "Resistor (IEC)"
  - Straight line → "Wire (ideal conductor)"
  - Arrow → "Current direction (conventional)"

A second, slightly more complex schematic alongside (or toggled):
  Two resistors in series with the same battery. Labelled R1 and R2. Current arrow the same direction.
  Note: "Two resistors in a loop — Lesson 4 will show you how to analyse this"

Style: Dark background. Schematic lines in white/light grey. Component labels in IBM Plex Sans. Values in IBM Plex Mono. Current arrow in amber.
-->

A schematic is not a physical layout. The wires on a schematic do not show where the actual wires run on a circuit board. They show *electrical connections* — what is connected to what. Two components that are centimetres apart on a PCB might be drawn right next to each other on the schematic because they are electrically connected. Conversely, components drawn far apart on the schematic might sit side by side on the board.

This distinction matters: a schematic tells you the *electrical truth* about a circuit. A physical layout tells you where things are in space. Both are important, but they serve different purposes. In this curriculum, we work primarily with schematics.

### Schematic Conventions You Need Now

There are a few conventions worth knowing immediately. We will add to this list as the curriculum progresses:

**Lines are wires.** A straight line on a schematic is an electrical connection. It is assumed to have zero resistance unless explicitly marked otherwise.

**Junctions are dots.** Where two wires connect, a dot is drawn at the junction. Two wires crossing *without* a dot are not connected (they just happen to cross on the drawing).

**Current flows clockwise by convention** in simple loop circuits drawn in the standard orientation. This is not a physical law — it is a drawing convention that makes schematics easier to read.

**Ground symbols** indicate the reference point for voltage measurements. You will see them from Lesson 4 onward. For now, just know that "ground" means "the point we call 0 V."

---

## 6. Units, Prefixes, and Avoiding Mistakes

Ohm's law is simple. The most common errors are not mathematical — they are unit errors. This section exists to prevent them.

### The Prefix Trap

Most real-world values in electronics use prefixed units: milliamps, kilohms, microvolts. The single most common Ohm's law mistake is mixing prefixes without converting.

**Wrong:** "V = I × R = 20 mA × 4.7 kΩ = 94" — 94 what? Not volts. Not millivolts. This is nonsense because you multiplied milliamps by kilohms without converting either one.

**Right — Method 1 (convert to base units):**
I = 20 mA = 0.020 A
R = 4.7 kΩ = 4700 Ω
V = 0.020 × 4700 = **94 V**

**Right — Method 2 (learn the shortcut):**
mA × kΩ = V (the milli and kilo cancel: 10⁻³ × 10³ = 10⁰ = 1)
So: 20 mA × 4.7 kΩ = **94 V** directly.

Method 2 is faster once you are confident, but Method 1 never fails. Use Method 1 until you trust your prefix handling.

### Common Prefix Pairs in Ohm's Law

| If you multiply... | You get... | Why |
|---|---|---|
| A × Ω | V | Base units — always works |
| mA × Ω | mV | Both have the milli factor |
| mA × kΩ | V | milli × kilo = unity |
| μA × MΩ | V | micro × mega = unity |
| μA × kΩ | mV | micro × kilo = milli |

You do not need to memorise this table. If you always convert to base units (A, V, Ω) first, you will never make a prefix error. The shortcuts emerge naturally with practice.

---

## 🔧 Hands-On: Verify Ohm's Law on the Bench (Optional Bench Experiment)

If you have a multimeter and a few resistors, you can verify Ohm's law directly.

**What you need:**
- A multimeter (any basic DMM)
- A battery or DC power supply (1.5 V, 9 V, or any known voltage)
- Two or three resistors of known value (e.g., 100 Ω, 470 Ω, 1 kΩ)
- Connecting leads

**What to do:**

1. Measure the battery voltage with the multimeter set to DC volts. Record the value — this is your V.
2. Connect one resistor across the battery. Measure the current by placing the multimeter in series (set to mA or A range). Record the value — this is your I.
3. Calculate: does V / I equal the resistor's marked value? It should be close (within the resistor's tolerance — typically 5% or 10%).
4. Repeat with a different resistor. A higher resistance should give a lower current, and vice versa.
5. Try two resistors in series (we have not formally covered this — just wire them end to end and measure the total current). Is it less than with either resistor alone? It should be. Lesson 4 will explain why.

> **Experiment note:** This experiment is referenced here but exists as a standalone entity in the RF-Hub experiment library.

---

## Summary

**Voltage** (potential difference) is the energy per unit charge between two points. Measured in volts (V). One volt = one joule per coulomb. Voltage is always between two points — never at a single point.

**Resistance** is the opposition to current flow, caused by collisions between moving electrons and the atomic lattice. Measured in ohms (Ω). Resistance depends on material, length, cross-sectional area, and temperature.

**Ohm's law: V = I × R.** The single most important equation in electronics. Rearranges to I = V/R and R = V/I. Know one equation, derive the rest.

**Unit discipline matters.** Always convert to base units (V, A, Ω) before calculating, or learn the prefix shortcuts (mA × kΩ = V). Mixing prefixes without converting is the most common source of error.

**Schematics** use standard symbols to show electrical connections. Lines are wires, dots are junctions, and the diagram shows electrical truth, not physical layout.

**50 Ω** appears everywhere in RF engineering — it is the standard system impedance. We planted the seed here; the full explanation comes in later units.

---

## Self-Check Exercises

### Ohm's Law Calculations

Use V = IR (and its rearrangements) for all of these. Show your working.

**Q1.** A 12 V power supply is connected across a 680 Ω resistor. What current flows?

<!-- SELF-CHECK-ANSWERS: ohms-q1
I = V / R = 12 / 680 = 0.01765 A = 17.65 mA.
About 17.6 milliamps. A typical small-signal current.
-->

**Q2.** A current of 500 mA flows through a 22 Ω resistor. What voltage is dropped across it?

<!-- SELF-CHECK-ANSWERS: ohms-q2
V = I × R = 0.5 × 22 = 11.0 V.
Convert mA to A first: 500 mA = 0.5 A. Then multiply.
-->

**Q3.** You measure 3.3 V across a resistor and 1.5 mA through it. What is the resistance?

<!-- SELF-CHECK-ANSWERS: ohms-q3
R = V / I = 3.3 / 0.0015 = 2200 Ω = 2.2 kΩ.
Convert mA to A first: 1.5 mA = 0.0015 A.
Or use the shortcut: V / mA = kΩ → 3.3 / 1.5 = 2.2 kΩ.
-->

**Q4.** An RF dummy load is rated at 50 Ω. A transmitter delivers 25 W into it. Using P = V²/R (preview from Lesson 3), calculate the voltage across the load and the current through it.

<!-- SELF-CHECK-ANSWERS: ohms-q4
Step 1 — Find voltage: V = √(P × R) = √(25 × 50) = √1250 = 35.36 V
Step 2 — Find current: I = V / R = 35.36 / 50 = 0.707 A

So at 25 W into 50 Ω: about 35.4 V and 707 mA.

Check: P = V × I = 35.36 × 0.707 = 25.0 W ✓

Notice the current and voltage are both reasonable — you could touch neither safely, but neither is extreme. At 100 W (Lesson 3 preview), V would be 70.7 V and I would be 1.41 A.
-->

**Q5.** A receiver's front-end amplifier has an input impedance of 50 Ω. A signal of 10 μV appears at its input. What current does the signal drive into the amplifier?

<!-- SELF-CHECK-ANSWERS: ohms-q5
I = V / R = 10 × 10⁻⁶ / 50 = 2 × 10⁻⁷ A = 0.2 μA = 200 nA.

Two hundred nanoamps. This is a realistic weak-signal scenario — and it illustrates why receiver front ends must be extremely sensitive. The signals they work with drive currents measured in nanoamps.
-->

### Prefix Practice

Convert each value to base units (V, A, or Ω), then convert the answer back to a sensible prefixed unit.

**Q6.** 47 kΩ = ? Ω

<!-- SELF-CHECK-ANSWERS: prefix-q6
47 kΩ = 47 × 10³ = 47,000 Ω
-->

**Q7.** 2.2 MΩ = ? Ω

<!-- SELF-CHECK-ANSWERS: prefix-q7
2.2 MΩ = 2.2 × 10⁶ = 2,200,000 Ω
-->

**Q8.** 330 mA = ? A

<!-- SELF-CHECK-ANSWERS: prefix-q8
330 mA = 330 × 10⁻³ = 0.330 A
-->

**Q9.** 15 μV = ? V

<!-- SELF-CHECK-ANSWERS: prefix-q9
15 μV = 15 × 10⁻⁶ = 0.000015 V
-->

**Q10.** 0.0068 A = ? mA

<!-- SELF-CHECK-ANSWERS: prefix-q10
0.0068 A = 6.8 × 10⁻³ A = 6.8 mA
-->

### Concept Questions

**Q11.** Two identical resistors are connected to identical batteries. Resistor A is made of copper wire. Resistor B is made of nichrome wire of the same dimensions. Which one passes more current? Why?

<!-- SELF-CHECK-ANSWERS: concept-q11
Resistor A (copper) passes more current. Copper has much lower resistivity than nichrome, so for the same physical dimensions, the copper resistor has lower resistance. Lower resistance with the same voltage means higher current (I = V/R). This is why nichrome is used in heater elements — its high resistance converts more electrical energy to heat — and copper is used for wiring — its low resistance wastes minimal energy in the wire itself.
-->

**Q12.** You double the voltage across a resistor. What happens to the current through it? What happens to the resistance?

<!-- SELF-CHECK-ANSWERS: concept-q12
The current doubles (I = V/R — if V doubles and R stays the same, I doubles).
The resistance does not change — it is a property of the component, not of the voltage or current applied to it. (Exception: at very high temperatures, resistance can change — but Ohm's law assumes resistance is constant for a given set of conditions.)
-->

**Q13.** You measure 0 V across a resistor in a circuit. What can you conclude about the current through it?

<!-- SELF-CHECK-ANSWERS: concept-q13
If V = 0 across the resistor, then by Ohm's law I = V/R = 0/R = 0 A. No current flows through it. This could mean the circuit is open somewhere, or it could mean this resistor is in a part of the circuit where no current path exists. Zero voltage across a resistor always means zero current through it (assuming the resistance is not zero — a zero-ohm "resistor" is a wire, and you can have current through a wire with zero voltage across it).
-->

**Q14.** Why is voltage always measured *across* (between two points) and current always measured *through* (in series with a component)?

<!-- SELF-CHECK-ANSWERS: concept-q14
Voltage is a potential DIFFERENCE between two points — it only has meaning as a comparison between two locations. A voltmeter must connect to both points to measure the difference. This is why it connects in parallel (across the component).

Current is the rate of charge flow THROUGH a point or component. To measure it, the meter must be placed in the path of the current so that all the charge flows through the meter. This is why an ammeter connects in series (the current flows through it).

Connecting a voltmeter in series or an ammeter in parallel are classic beginner mistakes — and both can damage the meter or the circuit. We will cover meter usage properly in a later unit.
-->

---

## What's Next

You now have the three pillars: voltage, current, and resistance, linked by Ohm's law. But we have not yet asked: **where does the energy go?**

In **Lesson 3 — Power and Energy**, we introduce **power** (the rate of energy transfer), the equations P = VI, P = I²R, and P = V²/R, and connect them to real-world consequences: heat dissipation in resistors, transmitter power output, and why component ratings matter.

---

<!-- LESSON-META
lesson_id: E-L02
unit: 1
curriculum: electronics
title: Voltage, Current, and Resistance
level: [F]
rsgb_ref: 2A1, 2A2, 2C1
status: DRAFT
interactives_used: none (visual briefs for HTML agent)
visual_briefs: voltage-two-points, resistance-atomic-collisions, resistor-symbols, ohms-law-triangle-interactive, ohms-law-worked-examples, first-schematic
experiment_refs: ohms-law-bench-verification (bench experiment, optional)
estimated_reading_time: 30 minutes
cross_curriculum_links: antenna-curriculum (50Ω system impedance, feed line resistance/loss), Unit 2 Lesson 6 (resistor types and colour codes), Unit 3 Lesson 16 (impedance as generalised resistance)
-->
