# Lesson 3: Radiation Patterns — Where Does the Energy Go?

**Unit:** 1 — How Antennas Work  
**Prerequisites:** Lesson 2 (How Antennas Radiate)  
**Equipment needed:** None  
**Estimated time:** 30 minutes

---

## Learning Objectives

By the end of this lesson you will be able to:

- Read and interpret 2D radiation patterns (azimuth and elevation cuts)
- Read a 3D radiation pattern and identify its features
- Identify main lobe, side lobes, nulls, back lobe, and half-power beamwidth
- Explain why the isotropic radiator is useful as a reference even though it
  can't physically exist
- Describe the radiation pattern shape of a half-wave dipole

---

## The Big Idea

In Lesson 2 we said that the current distribution on an antenna causes
radiation to be stronger in some directions than others. A **radiation pattern**
is simply a map of that directionality — it tells you where the antenna sends
(or receives) the most energy.

Understanding radiation patterns is like understanding a torch beam. A bare
lightbulb spreads light everywhere. A torch focuses it into a beam. Different
antenna types produce different "beam shapes" — and the radiation pattern is
how we describe and compare them.

---

## The Isotropic Radiator: A Useful Fiction

Imagine a theoretical point source that radiates equally in every direction —
up, down, left, right, forward, backward. This is an **isotropic radiator**.
Its 3D pattern would be a perfect sphere.

No real antenna does this. It's physically impossible. But it's enormously
useful as a **reference point**. When we say an antenna has "6 dBi gain," the
"i" stands for "isotropic" — it means the antenna focuses energy 6 dB better
than this imaginary perfect sphere in its best direction.

Think of it like sea level for altitude measurements. Sea level isn't
interesting by itself, but it gives everything else a reference.

---

## The Dipole Pattern: Your First Real Pattern

A half-wave dipole (from Lesson 2) produces a distinctive pattern:

- **3D shape:** A doughnut (toroid) wrapped around the wire
- **Maximum radiation:** Broadside to the wire (perpendicular)
- **Zero radiation (nulls):** Off the tips of the wire (along its axis)

If you hold a dipole vertically:
- It radiates strongly toward the horizon in all horizontal directions
- It radiates nothing straight up or straight down

If you hold it horizontally:
- It still radiates strongest broadside, but now the nulls are off the ends

> **🔧 Interactive:** [3D Radiation Pattern Viewer](../../../resources/radiation-3d-v5.html)  
> Load the dipole pattern and rotate it. Find the doughnut shape. Identify
> where the nulls are. Try rotating your mental model to match a vertical
> installation vs. a horizontal one.

---

## Reading 2D Pattern Plots

A 3D pattern is informative but hard to print or compare precisely. So we
typically slice through it to create **2D plots**:

### Azimuth (Horizontal) Plane

Imagine slicing through the 3D pattern horizontally — like cutting through the
doughnut at its widest point. The result is a circular plot showing signal
strength at each compass bearing.

- For a vertical dipole: the azimuth cut is a perfect circle (equal radiation
  in all horizontal directions — this is called **omnidirectional**)
- For a Yagi pointing north: the azimuth cut shows a strong lobe to the north
  and smaller lobes or nulls in other directions

### Elevation (Vertical) Plane

Now slice vertically — like cutting the doughnut in half from top to bottom.
This shows signal strength at each elevation angle.

- For a vertical dipole: the elevation cut shows a figure-eight shape — strong
  at the horizon, null straight up
- The angle of maximum radiation above the horizon is called the **takeoff
  angle** — critical for HF communications

### How to Read the Scales

Pattern plots use either:

- **Linear scale** — signal strength shown as distance from centre (intuitive
  but compresses detail)
- **Logarithmic (dB) scale** — each concentric ring represents a fixed dB
  step (reveals detail in the sidelobes)

Most engineering plots use dB scale. The outermost ring is the maximum (0 dB
reference), and inner rings might be -3 dB, -10 dB, -20 dB, etc.

---

## Pattern Terminology

Here are the key terms you'll encounter on every antenna data sheet and in
every antenna discussion:

**Main lobe (main beam):** The direction of strongest radiation. This is where
the antenna is "pointing."

**Side lobes:** Smaller lobes of radiation in unwanted directions. All real
antennas have some side lobes — the goal is usually to minimise them.

**Back lobe:** Radiation in the direction opposite the main beam. For a Yagi
pointed north, the back lobe is to the south.

**Nulls:** Directions where radiation drops to zero (or very close to it).
The dipole has nulls off its tips.

**Half-power beamwidth (HPBW):** The angular width of the main beam measured
between the points where power drops to half (-3 dB). A narrow beamwidth
means a focused beam; a wide beamwidth means broad coverage.

**Front-to-back ratio (F/B):** The ratio in dB between the main lobe and the
back lobe. A Yagi with 20 dB F/B ratio has 100× more power going forward
than backward.

**Front-to-side ratio:** Similar concept but comparing main lobe to the worst
side lobe.

### Putting It Together: A Practical Example

Imagine you're setting up a Yagi antenna for receiving ADS-B signals from
aircraft at a distant airport to the east:

- The **main lobe** points east toward the airport
- The **HPBW** tells you how accurately you need to aim
- The **F/B ratio** tells you how well it rejects signals from behind
- The **side lobes** might pick up interfering signals from other directions
- The **nulls** are directions where you'll receive nothing

---

## Common Pattern Shapes to Recognise

| Antenna | 3D Pattern Shape | Azimuth (H-plane) | Elevation (E-plane) |
|---------|-----------------|--------------------|--------------------|
| Isotropic | Sphere | Circle | Circle |
| Vertical dipole | Doughnut (horizontal) | Circle (omni) | Figure-eight |
| Horizontal dipole | Doughnut (vertical) | Figure-eight | Depends on height |
| Yagi | Elongated egg | Strong front lobe | Narrow main beam |
| Discone | Flattened doughnut | Circle (omni) | Broad, low angle |
| Dish | Pencil beam | Very narrow lobe | Very narrow lobe |

> **🔧 Interactive (future):** Pattern comparison tool — toggle between
> different antenna types and see their 2D and 3D patterns side by side.

---

## Knowledge Check

1. **What is the 3D radiation pattern shape of a half-wave dipole?**
   <!-- A toroid (doughnut) shape centred on the wire -->

2. **Where are the nulls on a vertical dipole?**
   <!-- Straight up and straight down (along the axis of the wire) -->

3. **An antenna has a half-power beamwidth of 30°. Is this a focused beam or
   broad coverage?**
   <!-- Focused beam — 30° is relatively narrow (compare to a dipole at ~78°) -->

4. **What does front-to-back ratio tell you?**
   <!-- How much stronger the main beam is compared to radiation in the opposite direction -->

5. **On a dB-scale pattern plot, what does the -3 dB contour represent?**
   <!-- The half-power boundary — signal strength is half the maximum -->

---

## Summary

- A **radiation pattern** maps where an antenna sends/receives energy
- The **isotropic radiator** is a theoretical reference — perfect sphere, equal
  in all directions
- A dipole pattern is a **doughnut** — strong broadside, null off the tips
- 2D cuts show **azimuth** (horizontal) and **elevation** (vertical) slices
- Key terms: main lobe, side lobes, nulls, HPBW, front-to-back ratio
- Pattern plots use dB scale for detail — -3 dB = half power
- Different antenna types produce characteristically different pattern shapes

---

**Previous:** [Lesson 2 — How Antennas Radiate](lesson-02-how-antennas-radiate.md)  
**Next:** [Lesson 4 — Antenna Types: A Guided Tour](lesson-04-antenna-types.md)
