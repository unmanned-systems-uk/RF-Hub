# Lesson 2 — Voltage, Current, and Resistance

**Unit:** 1 — The Language of Electricity  
**Level:** `[F]` Foundation  
**RSGB Syllabus:** 2A1, 2A2, 2C1  
**Prerequisites:** Lesson 1 (What Is Electricity?)  
**Equipment Needed:** None (optional: multimeter, resistors, battery for bench verification)  
**Estimated Time:** 30 minutes theory + interactive exploration

---

## Learning Objectives

By the end of this lesson you will be able to:

1. Define voltage (potential difference) and explain what it physically represents
2. Define resistance and explain why it opposes current flow
3. State Ohm's law in all three rearrangements and use it to solve simple circuits
4. Read and interpret a basic circuit schematic with standard symbols
5. Explain the relationship between voltage, current, and resistance using both the formula and a physical mental model
6. Work confidently with metric prefixes (milli, micro, kilo, mega) in circuit calculations

---

## 1. What Pushes the Charge?

Lesson 1 established that current is charge in motion. But charge does not move on its own — something has to push it. That something is **voltage**.

Voltage is the **electrical pressure** that drives current through a circuit. It is a difference in electrical potential energy between two points — which is why the precise technical term is **potential difference** (abbreviated **PD**). When we say "the voltage across a component is 12 V," we mean there is a difference in electrical potential energy between one side of that component and the other, and that difference is capable of doing work — pushing charge through the component.

The unit of voltage is the **volt** (symbol **V**), named after Alessandro Volta, who built the first chemical battery in 1800.

> **1 volt** means that 1 joule of energy is transferred for every coulomb of charge that moves between the two points. In symbols: **1 V = 1 J/C**.

You do not need to memorise that definition for Foundation level, but it is worth understanding what it means physically: voltage is energy per unit charge. A higher voltage means more energy available to push each coulomb of charge through the circuit.

### The Water Analogy

Analogies are dangerous in electronics because they always break down eventually. But this one is useful at the start, so we will use it carefully and flag exactly where it fails.

Think of a water system. A pump pushes water around a loop of pipe. The water flows through a narrow section (a restriction) and back to the pump.

| Water system | Electrical circuit |
|-------------|-------------------|
| Pump | Battery or power supply |
| Water pressure | Voltage (potential difference) |
| Flow rate (litres per second) | Current (amperes) |
| Narrow pipe (restriction) | Resistance |

The pump creates a pressure difference between its outlet and its inlet. That pressure difference pushes water through the pipe. A narrower pipe (more restriction) means less flow for the same pressure. A wider pipe (less restriction) means more flow.

This maps directly onto Ohm's law, which we will reach in Section 3.

> **Where the analogy breaks:** Water is a physical substance that moves through pipes. Electric current in a metal conductor is the drift of electrons that were already in the wire — nothing "flows in" from outside the way water flows into a pipe. The water analogy also cannot represent AC (alternating current), electromagnetic fields, or anything beyond the simplest DC circuits. Use it as a starting scaffold, then let it go.

<!-- VISUAL: water-analogy-circuit
Split-screen comparison, animated:

LEFT — "Water System":
  - A pump at the bottom, with outlet (high pressure, amber) and inlet (low pressure, cyan)
  - A loop of pipe going up from the outlet, through a narrow restriction section (labelled "Restriction"), and back down to the inlet
  - Animated water particles flowing through the loop — faster in the wide sections, visibly slowing through the narrow restriction
  - Pressure gauge at pump outlet: reads "HIGH"
  - Pressure gauge at pump inlet: reads "LOW"
  - Label on the restriction: "Narrow pipe = more opposition to flow"

RIGHT — "Electrical Circuit":
  - A battery at the bottom, with + terminal (amber) and − terminal (cyan)
  - A wire loop going up from +, through a resistor symbol (labelled "Resistor"), and back down to −
  - Animated conventional current (amber dots) flowing clockwise — through the resistor and back to the battery
  - Voltage label across the battery: "V" with an arrow from + to −
  - Current label on the wire: "I" with arrow showing direction
  - Label on the resistor: "Resistance = opposition to current"

Connecting lines between the two sides:
  - Pump ↔ Battery
  - Pressure difference ↔ Voltage
  - Flow rate ↔ Current
  - Restriction ↔ Resistance

A small warning note at the bottom: "This analogy helps at the start. It breaks down for AC, fields, and anything beyond simple DC. Use it, then move on."

Style: Dark background, clean pipe/circuit rendering. Pump/battery housing in mid-grey. Pressure/voltage indicators in amber. Flow/current dots animated.
-->

---

## 2. Resistance: Opposition to Current

When current flows through a material, the material opposes that flow. The moving electrons collide with the atoms of the conductor, transferring energy (which appears as heat). This opposition is called **resistance**.

The unit of resistance is the **ohm** (symbol **Ω**, the Greek capital letter omega), named after Georg Simon Ohm.

Every material has some resistance. Even copper wire — the best practical conductor in everyday use — has resistance, though it is very small for short lengths. The resistance depends on four things:

1. **Material** — copper has low resistance; nichrome (used in heating elements) has high resistance. This property is called **resistivity** and is a fixed characteristic of the material.
2. **Length** — longer conductor = more resistance. Double the length, double the resistance.
3. **Cross-sectional area** — thicker conductor = less resistance. Double the area, halve the resistance.
4. **Temperature** — for most metals, resistance increases with temperature. (This is why a light bulb's resistance is higher when hot than when cold.)

In RF work, these four factors come up constantly. The resistance of an antenna element affects efficiency. The resistance of a coaxial cable determines signal loss. The resistance of a PCB trace at high current can cause voltage drop. We will quantify these effects in later units — for now, the concept is what matters.

### The Resistor

A **resistor** is a component deliberately designed to provide a specific, controlled amount of resistance. It is the simplest and most common passive component in electronics.

Resistors are used to:
- **Limit current** — prevent too much current flowing through a sensitive component (e.g. an LED)
- **Divide voltage** — create a specific fraction of a larger voltage (potential dividers, covered in Lesson 4)
- **Set bias points** — establish the correct operating conditions for transistors (Unit 4)
- **Terminate transmission lines** — provide the correct impedance at the end of a cable (antenna curriculum link)

The circuit symbol for a resistor is a rectangle (IEC/European standard, used in the RSGB syllabus and this curriculum) or a zigzag line (American standard, common in US literature and many online resources). You will see both in the wild. Learn to recognise both; we draw the rectangle.

<!-- VISUAL: resistor-symbols
Two resistor symbols side by side:

LEFT — "IEC / European (used in this curriculum)":
  - A simple rectangle with wire leads on each end
  - Labelled "R" with a value, e.g. "R1 = 470 Ω"

RIGHT — "US / ANSI":
  - A zigzag line with wire leads on each end
  - Same label: "R1 = 470 Ω"

Below both: "Same component. Two drawing conventions. Both are widely used. This curriculum uses the IEC rectangle."

Style: Clean, dark background. Symbols in white/light grey. Labels in IBM Plex Mono.
-->

---

## 3. Ohm's Law

This is the equation you will use more than any other in electronics. It connects the three quantities we have now defined — voltage, current, and resistance — in one relationship.

> **V = I × R**

Voltage (in volts) equals current (in amperes) multiplied by resistance (in ohms).

This says: if you push a current of *I* amperes through a resistance of *R* ohms, the voltage across that resistance will be *V* volts. Or, turning it around: if you apply *V* volts across a resistance of *R* ohms, a current of *I* = V/R amperes will flow.

The three rearrangements are:

| To find | Formula | When you know |
|---------|---------|---------------|
| Voltage | V = I × R | Current and resistance |
| Current | I = V / R | Voltage and resistance |
| Resistance | R = V / I | Voltage and current |

These are not three different laws. They are one law rearranged. If you know any two of the three quantities, you can find the third.

### The Triangle Trick

Many people learn Ohm's law using a triangle with V at the top, I at bottom-left, and R at bottom-right. Cover the quantity you want to find: what remains shows you the formula. Cover V, you see I × R. Cover I, you see V over R. Cover R, you see V over I.

The triangle works as a memory aid, but **understand the physics first**. V = IR says: the voltage across a resistance is proportional to the current through it. More current, more voltage drop. More resistance, more voltage drop. That proportionality is Ohm's law.

<!-- VISUAL: ohms-law-interactive
An interactive Ohm's law calculator and visualiser:

TOP — The Triangle:
  A triangle with V at the apex, I at bottom-left, R at bottom-right.
  Click/tap any variable to "cover" it — the remaining two show the formula.
  - Cover V → "V = I × R" appears, highlighted
  - Cover I → "I = V / R" appears, highlighted
  - Cover R → "R = V / I" appears, highlighted

MIDDLE — Live Calculator:
  Three input fields: V (volts), I (amperes), R (ohms)
  Each field has a unit selector for prefixes: V (mV, V, kV), I (μA, mA, A), R (Ω, kΩ, MΩ)
  Enter any two values → the third calculates automatically
  The active formula is shown below the inputs, with the numbers substituted

BOTTOM — Simple Circuit Visualiser:
  A battery + resistor circuit (same layout as Lesson 1 simple circuit)
  The battery voltage adjusts to match the V input
  The resistor value adjusts to match R
  Animated current flow speed scales with I
  The resistor "glows" faintly at high current (more energy dissipated as heat)

Labels update in real time. Changing any value ripples through the entire display.

Style: Dark background. Triangle in amber/cyan/purple for the three variables. Calculator in IBM Plex Mono. Circuit in the same style as Lesson 1 visuals.
-->

### Worked Examples

Let's apply Ohm's law to situations you will actually encounter.

**Example 1 — LED current limiting**

You have a 9 V battery and want to power an LED that needs approximately 20 mA (0.02 A) and drops about 2 V across itself. What resistance do you need in series?

The resistor must drop the remaining voltage: 9 V − 2 V = 7 V.

R = V / I = 7 / 0.02 = **350 Ω**

The nearest standard resistor value is 330 Ω (which gives slightly more current) or 390 Ω (slightly less). Either works — LEDs are tolerant. In practice you would pick 390 Ω for a small safety margin.

**Example 2 — Voltage across a known load**

A 50 Ω dummy load is connected to a test signal source. You measure the current as 100 mA (0.1 A). What voltage is the source producing?

V = I × R = 0.1 × 50 = **5 V**

The 50 Ω value here is not random — it is the standard impedance in RF systems. Dummy loads, coaxial cables, transmitter outputs, and antenna feedpoints are all designed around 50 Ω. You will see this number constantly.

**Example 3 — Finding current draw**

A 13.8 V power supply feeds a transceiver that presents 4.6 Ω of effective resistance on transmit. How much current does it draw?

I = V / R = 13.8 / 4.6 = **3.0 A**

This is a realistic scenario — a 13.8 V supply is standard for amateur radio equipment, and 3 A is typical for a 25–30 W VHF transmitter on full power.

> **A note on significant figures:** In these examples we used clean numbers for clarity. In real circuits, resistor tolerances (±1%, ±5%, ±10%), voltage regulation, and temperature effects mean your measured values will never match calculations exactly. Get comfortable with "close enough" — precision comes from measurement, not from extra decimal places in a formula.

---

## 4. Units, Prefixes, and Sanity Checks

Electronics spans an enormous range of values. Currents from nanoamps to hundreds of amps. Resistances from milliohms to megaohms. Voltages from microvolts to kilovolts. You need metric prefixes to stay sane.

Here are the prefixes you will use constantly in this curriculum:

| Prefix | Symbol | Multiplier | In words | Common use |
|--------|--------|------------|----------|------------|
| pico | p | × 10⁻¹² | trillionth | pF (capacitors) |
| nano | n | × 10⁻⁹ | billionth | nH (inductors), nV (noise) |
| micro | μ | × 10⁻⁶ | millionth | μA (small currents), μV (signals), μH (inductors) |
| milli | m | × 10⁻³ | thousandth | mA (circuit current), mV (small voltages), mW (signal power) |
| (none) | — | × 1 | — | A, V, Ω, W, Hz |
| kilo | k | × 10³ | thousand | kΩ (resistors), kHz (audio frequencies) |
| mega | M | × 10⁶ | million | MΩ (high resistance), MHz (radio frequencies) |
| giga | G | × 10⁹ | billion | GHz (microwave frequencies) |

### The Conversion Rule

To use Ohm's law (or any formula), all values must be in base units — volts, amperes, ohms. Convert prefixes before calculating.

**The method:** move the decimal point. Milli means ÷ 1000. Kilo means × 1000. Micro means ÷ 1,000,000. Mega means × 1,000,000.

**Example:** A 4.7 kΩ resistor with 9 V across it. What current flows?

First, convert: 4.7 kΩ = 4,700 Ω.

I = V / R = 9 / 4700 = 0.00191 A = **1.91 mA**

**Example:** 330 μA through a 22 kΩ resistor. What voltage?

Convert both: 330 μA = 0.000330 A. 22 kΩ = 22,000 Ω.

V = I × R = 0.000330 × 22,000 = **7.26 V**

### The Shortcut: Keep the Prefixes Consistent

There is a quicker way. If you keep voltage in volts, current in milliamps, and resistance in kilohms, the prefixes cancel:

> V = mA × kΩ

This works because milli (10⁻³) times kilo (10³) equals 1. So 1.91 mA × 4.7 kΩ = 8.98 V — no conversion needed.

Similarly: **mV = μA × kΩ** (because micro × kilo = milli).

These shortcuts are not essential, but they save time and reduce errors once you are comfortable with them.

<!-- VISUAL: prefix-ladder
A vertical "ladder" or scale showing prefixes:

  G (giga) — 10⁹
  M (mega) — 10⁶
  k (kilo) — 10³
  [base unit] — 10⁰
  m (milli) — 10⁻³
  μ (micro) — 10⁻⁶
  n (nano) — 10⁻⁹
  p (pico) — 10⁻¹²

Each step on the ladder is a factor of 1000 (three decimal places).

Interaction: The student enters a value with a prefix (e.g. "4.7 kΩ") and selects a target prefix (e.g. "Ω"). An animated arrow moves down the ladder, showing the decimal point shifting three places per step. The converted value appears at the bottom.

A side panel shows the Ohm's law shortcut table:
  V = mA × kΩ
  mV = μA × kΩ
  V = A × Ω (base units — always works)

Style: Dark background. Ladder rungs in mid-grey. Active prefix highlighted amber. Decimal point animation smooth and clear.
-->

---

## 5. Reading a Circuit Schematic

Before you can analyse any real circuit, you need to read circuit diagrams — **schematics**. A schematic is a standardised drawing that shows which components are in the circuit, how they are connected, and what values they have. It does not show the physical layout or appearance — only the electrical connections.

Here are the symbols you need for this lesson and the next few:

| Component | Symbol description | Notes |
|-----------|--------------------|-------|
| **Cell** (single) | Two parallel lines: one long (positive) and one short (negative) | A single electrochemical cell (1.5 V typical) |
| **Battery** | Multiple cells in series, or a single cell symbol with higher voltage labelled | Multiple cells = higher voltage |
| **Resistor** | Rectangle (IEC) or zigzag (US) | Value in ohms, with prefix |
| **Variable resistor** | Resistor with an arrow through it or a third terminal | Adjustable resistance |
| **Wire / conductor** | Straight line | Assumed to have zero resistance |
| **Junction** | Solid dot where wires cross | Wires are electrically connected |
| **No junction** | Wires crossing without a dot (or with a bridge/hop) | Wires are NOT connected — they just cross on paper |
| **Switch** | A gap with a lever/contact | Open = no connection, closed = connected |
| **Lamp** | Circle with a cross inside | Generic load symbol |
| **Earth / ground** | Three horizontal lines of decreasing width, or a single line with three downward slashes | Reference point — 0 V |

<!-- VISUAL: schematic-symbol-reference
A clean reference card showing each symbol listed above:

Layout: Two-column grid. Each cell contains:
  - The symbol drawn cleanly
  - The component name
  - A one-line note

Symbols drawn in light grey/white on dark background. Labels in IBM Plex Sans. Values in IBM Plex Mono.

The cell/battery symbol should show the + and − sides clearly labelled.
The junction vs no-junction comparison should be side by side with a clear "CONNECTED" vs "NOT CONNECTED" annotation — this is one of the most common reading errors for beginners.

At the bottom, a small example circuit using several of these symbols together: a battery, switch, resistor, and lamp in a simple series loop, fully labelled.

Style: Dark background, clean thin lines for symbols. Reference-card layout — designed to be useful as a quick lookup, not just a teaching illustration.
-->

### How to Read a Schematic

A schematic is read by tracing current paths, not by looking at the physical shape of the drawing. The spatial arrangement on the page has no physical meaning — a wire drawn going upward does not mean the actual wire goes upward. Only the connections matter.

When you look at a schematic:

1. **Find the source.** Identify the battery or power supply. Note which terminal is positive.
2. **Trace the current path.** Follow conventional current from the positive terminal, through the external circuit (all the components), and back to the negative terminal.
3. **Identify series connections.** Components in a line, one after another, share the same current. (Lesson 4 covers this in depth.)
4. **Identify parallel connections.** Components side by side, connected at both ends, share the same voltage. (Also Lesson 4.)
5. **Note the values.** Each component should have a value label (R1 = 470 Ω, V1 = 12 V, etc.).

We will practice reading real schematics throughout this curriculum. By Unit 4 you will be reading amplifier circuit diagrams with transistors, bias networks, and feedback loops. It all starts with the symbols above.

---

## 6. Ohm's Law in the Real World

Ohm's law looks simple — and it is, for ideal components. But real circuits have wrinkles that are worth flagging now, even though we will not fully address them until later lessons.

**Not all components obey Ohm's law.** A resistor does — it has a constant resistance regardless of the voltage across it (within its rated limits). It is called a **linear** component because the V-I graph is a straight line through the origin. Double the voltage, double the current.

A **diode** does not obey Ohm's law. Its resistance changes with the voltage across it — low resistance in one direction, very high resistance in the other. Its V-I graph is a curve, not a straight line. Diodes are **non-linear**. We will meet them in Unit 4.

A lamp filament does not obey Ohm's law perfectly either — its resistance increases as it heats up. If you measure a torch bulb cold with a multimeter, you get a lower resistance than you calculate from its running voltage and current.

For now, every problem in this lesson and the next uses ideal resistors (constant R). Real-world non-linearity becomes important in Unit 4 (semiconductors) and Unit 6 (amplifier classes and distortion).

**Ohm's law applies to individual components, not to whole circuits directly.** If a circuit has multiple resistors, you cannot just plug the total battery voltage and one resistor's value into V = IR and get the right answer. You need to account for how the resistors are connected — series or parallel — which is the subject of Lesson 4. For this lesson, all examples use a single resistor across a voltage source.

---

## 🔧 Hands-On: Verify Ohm's Law (Optional Bench Experiment)

If you have a multimeter, a battery, and a few resistors, you can verify Ohm's law directly.

**What you need:**
- A battery (9 V PP3 is convenient)
- Three resistors of different values (e.g. 100 Ω, 470 Ω, 1 kΩ) — any values work, as long as you know them
- A multimeter that can measure DC voltage and DC current
- Connecting wire or crocodile clip leads

**What to do:**

1. Connect the battery and one resistor in a series loop with the multimeter in current (mA) mode, in series.
2. Read the current. Record it.
3. Now switch the multimeter to voltage mode and measure across the resistor (in parallel with it). Record the voltage.
4. Calculate: R = V / I. Does it match the resistor's marked value (within tolerance)?
5. Repeat with each resistor. Does a higher resistance give a lower current for the same battery voltage, as Ohm's law predicts?
6. Try calculating the expected current before measuring: I = V_battery / R. How close is your prediction to the measured value?

The small discrepancy you may observe is due to the battery's internal resistance (the battery's voltage drops slightly under load) and the resistor's tolerance. Both are real effects we will cover in later lessons.

> **Experiment note:** Full write-up with safety notes, equipment options, and measurement recording template is available in the RF-Hub experiment library.

---

## Summary

**Voltage** (potential difference) is the electrical pressure that drives current. Measured in **volts** (V). It is the energy transferred per unit charge: 1 V = 1 J/C.

**Resistance** is the opposition to current flow. Measured in **ohms** (Ω). It depends on material, length, cross-sectional area, and temperature.

**Ohm's law: V = I × R.** The voltage across a resistance equals the current through it multiplied by the resistance. Rearranged: I = V/R and R = V/I.

**Metric prefixes** are essential. Convert to base units (V, A, Ω) before calculating, or use consistent prefix shortcuts (V = mA × kΩ).

**Circuit schematics** are read by tracing current paths through standard symbols, not by physical layout. Learn the symbols; we will build on them in every lesson from here on.

**Ohm's law applies to linear components** (resistors). Non-linear components (diodes, transistors) need more sophisticated analysis, covered in Unit 4.

---

## Self-Check Exercises

### Ohm's Law Calculations

**Q1.** A 12 V battery is connected across a 680 Ω resistor. What current flows?

<!-- SELF-CHECK-ANSWERS: ohm-q1
I = V / R = 12 / 680 = 0.01765 A = 17.6 mA.

About 17.6 milliamps. A 680 Ω resistor is a common value — you'll see it in bias networks and signal conditioning circuits.
-->

**Q2.** A current of 25 mA flows through a 2.2 kΩ resistor. What voltage appears across it?

<!-- SELF-CHECK-ANSWERS: ohm-q2
Convert: 25 mA = 0.025 A, 2.2 kΩ = 2200 Ω.
V = I × R = 0.025 × 2200 = 55 V.

Or using the shortcut: V = mA × kΩ = 25 × 2.2 = 55 V. Same answer, faster.
-->

**Q3.** You measure 5 V across a component while 200 μA flows through it. What is the resistance?

<!-- SELF-CHECK-ANSWERS: ohm-q3
Convert: 200 μA = 0.000200 A.
R = V / I = 5 / 0.000200 = 25,000 Ω = 25 kΩ.

25 kΩ — a value you might see in a high-impedance input stage or a bias network.
-->

**Q4.** A 50 Ω dummy load has 7 V across it. What current flows, and how would you express it in milliamps?

<!-- SELF-CHECK-ANSWERS: ohm-q4
I = V / R = 7 / 50 = 0.14 A = 140 mA.

140 milliamps through a 50 Ω load at 7 V. This is a typical test scenario — the 50 Ω dummy load is the workhorse of RF testing. We'll return to it many times.
-->

**Q5.** An HF transceiver draws 22 A from a 13.8 V power supply at full transmit power. What is the effective resistance the transceiver presents to the supply?

<!-- SELF-CHECK-ANSWERS: ohm-q5
R = V / I = 13.8 / 22 = 0.627 Ω.

About 0.63 Ω — very low. This is why high-current transmitters need thick power cables and good connections. Even a small additional resistance in the cable (say 0.1 Ω) would drop 2.2 V at 22 A, significantly reducing the voltage at the transceiver. We'll quantify this in Lesson 4.
-->

### Prefix Conversions

Convert each of the following to the base unit specified.

**Q6.** 3.3 kΩ to ohms

<!-- SELF-CHECK-ANSWERS: prefix-q6
3.3 kΩ = 3.3 × 1000 = 3,300 Ω
-->

**Q7.** 470 μA to amperes

<!-- SELF-CHECK-ANSWERS: prefix-q7
470 μA = 470 × 10⁻⁶ = 0.000470 A = 4.70 × 10⁻⁴ A
-->

**Q8.** 2.7 MΩ to ohms, and then to kilohms

<!-- SELF-CHECK-ANSWERS: prefix-q8
2.7 MΩ = 2.7 × 10⁶ = 2,700,000 Ω = 2,700 kΩ.
To go from MΩ to kΩ, multiply by 1000 (move one step down the prefix ladder).
-->

**Q9.** 15 mV to volts

<!-- SELF-CHECK-ANSWERS: prefix-q9
15 mV = 15 × 10⁻³ = 0.015 V
-->

### Concept Questions

**Q10.** You double the resistance in a circuit while keeping the voltage the same. What happens to the current? Explain using Ohm's law.

<!-- SELF-CHECK-ANSWERS: concept-q10
The current halves. From I = V/R: if R doubles and V stays the same, I must halve. More resistance means more opposition to current flow, so less current flows for the same driving voltage. This is the most fundamental insight from Ohm's law — current and resistance are inversely proportional when voltage is fixed.
-->

**Q11.** You have a 1 kΩ resistor and a 10 kΩ resistor. You connect each, one at a time, across the same 5 V supply. Without calculating, which carries more current? Now calculate both.

<!-- SELF-CHECK-ANSWERS: concept-q11
The 1 kΩ resistor carries more current — it has less resistance, so for the same voltage, more current flows.

1 kΩ: I = 5 / 1000 = 0.005 A = 5 mA
10 kΩ: I = 5 / 10,000 = 0.0005 A = 0.5 mA

The 1 kΩ carries exactly 10 times more current, which makes sense — 10 times less resistance, 10 times more current.
-->

**Q12.** A friend says: "Voltage pushes current through the wire, and the wire has zero resistance, so infinite current should flow." What is wrong with this reasoning?

<!-- SELF-CHECK-ANSWERS: concept-q12
Two things are wrong:

1. Real wires do have resistance — it is small, but not zero. A metre of 1 mm diameter copper wire has about 0.022 Ω. For short wires at moderate currents this barely matters, but it is never truly zero.

2. Even if we treat the wire as ideal (zero resistance), the circuit must include some load or source impedance. A real battery has internal resistance (Lesson 5 covers this), so even with a "zero resistance" external wire, the current is limited by the battery's internal resistance. Connecting a wire directly across a battery with no load is a short circuit — the battery tries to deliver maximum current, limited only by its internal resistance, and gets very hot. This is dangerous with high-capacity batteries.

Ohm's law with R = 0 gives I = V/0 = infinity — which is a mathematical signal that the model is incomplete, not a prediction of what actually happens.
-->

**Q13.** Why is 50 Ω a significant number in RF electronics?

<!-- SELF-CHECK-ANSWERS: concept-q13
50 Ω is the standard characteristic impedance for most RF systems. Coaxial cables (like RG-58, RG-213, LMR-400), transmitter outputs, receiver inputs, test equipment (spectrum analysers, signal generators, VNA ports), dummy loads, and antenna feedpoints are all designed around 50 Ω. It was chosen as a compromise between the impedance that gives minimum loss in coaxial cable (~77 Ω) and the impedance that gives maximum power handling (~30 Ω).

When you see 50 Ω in a worked example, it is not an arbitrary number — it is the standard you will work with in almost every RF measurement and connection.
-->

### Schematic Reading

**Q14.** Look at the circuit described below and answer the questions.

A circuit consists of: a 9 V battery, a switch, and a 470 Ω resistor, all connected in a series loop.

(a) If the switch is closed, what current flows?  
(b) What voltage appears across the resistor?  
(c) What voltage appears across the closed switch?  
(d) The switch opens. What is the current now?

<!-- SELF-CHECK-ANSWERS: schematic-q14
(a) I = V / R = 9 / 470 = 0.01914 A = 19.1 mA.

(b) The full 9 V appears across the resistor. It is the only component with significant resistance in the circuit (the wire and closed switch have negligible resistance), so it drops all the voltage. V = I × R = 0.01914 × 470 = 9 V. ✓

(c) Approximately 0 V. A closed switch (ideally) has zero resistance, so by Ohm's law, V = I × 0 = 0 V. In practice, a real switch has a tiny contact resistance (milliohms), so there's a negligibly small voltage across it.

(d) Zero. The switch has broken the circuit. No complete path exists, so no current flows anywhere. The full 9 V now appears across the open switch (the gap), and 0 V appears across the resistor. This is a direct application of the complete-circuit principle from Lesson 1.
-->

---

## What's Next

You now have the three pillars of DC circuit analysis: voltage, current, and resistance, linked by Ohm's law. But Ohm's law alone only handles a single resistor across a source.

In **Lesson 3 — Power and Energy**, we add the fourth quantity: **power** — how fast energy is being converted in a circuit. You will learn P = VI (and its variants), understand why power matters in everything from resistor selection to transmitter efficiency, and see how heat dissipation limits what a circuit can do.

Then in **Lesson 4 — Series and Parallel Circuits**, we break free from single-resistor circuits and learn Kirchhoff's laws — the rules that let you analyse any circuit, no matter how many components it has.

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
visual_briefs: water-analogy-circuit, resistor-symbols, ohms-law-interactive, prefix-ladder, schematic-symbol-reference
experiment_refs: verify-ohms-law (bench experiment, optional)
estimated_reading_time: 30 minutes
cross_curriculum_links: 50 Ω standard impedance (antenna curriculum — feedpoint impedance, transmission lines)
-->
