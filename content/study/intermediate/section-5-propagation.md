# Section 5: Propagation

<!-- Exam weight: ~10% (~4–5/46 questions) -->
<!-- Sub-sections: 5A, 5B, 5C, 5D, 5E, 5F -->
<!-- Syllabus refs: 5A2, 5A3, 5A4, 5B1, 5B2, 5B3, 5B4, 5B5, 5C3 -->
<!-- RSGB source: Chapter 13 (pp.61–64) -->

Propagation is one of the most fascinating and unpredictable aspects of amateur radio. The same antenna and transmitter that gives you a local contact on Monday can, on Tuesday, put your signal into Japan. Understanding why requires understanding how radio waves interact with the atmosphere — and that depends on physics, solar activity, time of day, and season.

This section explains the mechanisms. Section 4 dealt with getting RF out of the antenna. This section deals with where it goes next.

---

## 5A — Ground Wave and Sky Wave

### Two Paths for HF Signals (5A2, 5A3)

A radio signal leaving an HF antenna can reach a distant receiver by two completely different routes:

**1. Ground wave** — travels along the surface of the earth directly from transmitter to receiver. The wave is gradually bent (diffracted) back down to the earth's surface as it travels, keeping it in contact with the ground.

**2. Sky wave** — travels upward at an angle, enters the ionosphere, is **refracted** back towards the earth, and returns to the surface at some distance from the transmitter.

> [INFO] **Refracted, not reflected.** Amateur radio operators often say sky wave signals are "reflected" by the ionosphere — this is casual shorthand and is technically incorrect. The signal is **refracted** (bent) by the ionosphere, in the same way light bends when it enters glass or water. The RSGB syllabus uses the correct term: **refracted**. Use that word in exam answers.

<!-- SVG: ground-wave-and-sky-wave-geometry — Earth curved surface, transmitter on left, ground wave hugging the surface, sky wave looping up through ionosphere layer, returning at receiver on right, dead zone labelled in between -->

### Ground Wave (5A2)

The ground wave signal hugs the surface of the earth. It suffers two types of loss as it travels:

- **Resistive loss** — the earth is not a perfect conductor. RF current induced in the ground surface causes losses, heating the earth. Wet, conductive ground (salt water, clay) has less loss than dry, rocky ground.
- **Diffraction loss** — energy is continuously bent back towards the earth surface, but this costs energy.

As frequency increases, ground wave loss increases rapidly. Practical consequences:

- **MF (0.5–1.6 MHz, mediumwave):** ground wave works well — national coverage in daylight. The BBC Radio 4 LW transmitter on 198 kHz reaches most of the UK by ground wave.
- **Lower HF (3.5–7 MHz):** ground wave range is reduced to a few hundred kilometres.
- **Upper HF (14–30 MHz):** ground wave range is just a few kilometres — essentially useless for anything beyond local.

Ground wave is the dominant propagation mode for the **foundation/intermediate exam question** about LF/MF broadcasts: why can you hear medium wave stations during the day but get interference from distant stations at night? Because at night the sky wave arrives as well (more on that below).

> [INFO] **5A2:** Ground wave propagation decreases rapidly with increasing frequency. It is the main propagation mode at LF and MF. At HF it is only useful for short-distance contacts.

### Sky Wave (5A3)

The sky wave leaves the antenna at an upward angle, travels through the troposphere (which has no significant effect on HF), enters the ionosphere, is gradually refracted (bent) as it passes through increasing ion density, curves back downward, and returns to earth.

The angle matters: if the wave enters the ionosphere too steeply (nearly vertical), it punches straight through and escapes into space. If it enters at a shallower angle, the bending has more distance to accumulate and it curves back. Think of it like rolling a ball across a curved surface — a gentle approach keeps it on the surface; too steep and it bounces off.

At any given ionospheric state, there is a **maximum angle** from vertical above which a signal at a given frequency will not be refracted back. This determines the minimum skip distance (how close to the transmitter the sky wave can return).

> [INFO] **5A3:** Sky wave is refracted by the ionosphere. The correct term is refracted, not reflected. The bending is gradual, caused by increasing ion density in the ionosphere.

### Skip Distance and Skip Zone (5A4)

**Skip distance** is the shortest distance from the transmitter at which sky wave signals can be received for a given frequency and ionospheric condition.

**Skip zone** (or dead zone) is the region between the end of the ground wave range and the start of the sky wave return. In this zone, no signals from your transmitter are heard:

![HF propagation regions: ground wave (near the transmitter), skip zone / dead zone (no signal), and sky wave (distant reception after ionospheric refraction).](/assets/images/study/section-5/skip-distance-skip-zone.png)

*(Fig 13.1 equivalent — RSGB Ch 13)*

The skip zone is important because:
- Stations in the skip zone cannot hear you and you cannot hear them — no matter how much power you use
- The skip zone changes throughout the day as ionospheric conditions change
- Cross-town contacts on HF are difficult for this reason — you are likely inside the skip zone of stations in your own country while you are in contact with stations thousands of miles away

**Multiple hops:** The sky wave that returns to earth is not absorbed — it is re-reflected (in the ground-wave sense, i.e., the ground reflects it) back up to the ionosphere, where it is refracted again. A single hop from the F2 layer reaches a maximum of about **4,000 km**. Multiple hops extend this to any distance, including around the world.

> [INFO] **5A4:** Skip distance is the minimum distance at which sky wave is received. The skip zone is the dead zone between ground wave range and the first sky wave return point. Multiple hops allow global communication.

---

## 5B — The Ionosphere

### What the Ionosphere Is (5B1)

The ionosphere is a region of the upper atmosphere, from about **60 km to 400 km** altitude, in which molecules of air have been ionised (had electrons stripped off) by solar ultraviolet radiation and solar particle streams. These free electrons and ions are what radio waves interact with.

The ionosphere is not a single solid layer — it is a region of ionised gas (plasma), with density and height varying continuously with solar conditions, time of day, season, and geographic location. It can be thought of as a set of overlapping layers, each with different typical heights and densities.

### The D Layer (5B1)

- **Height:** approximately 60–90 km
- **Behaviour:** exists only during daylight (requires sunlight to maintain ionisation)
- **Effect on radio waves:** absorbs rather than refracts — particularly effective at absorbing lower-frequency HF signals

The D layer is the gatekeeper that determines the **Lowest Usable Frequency (LUF)**: the minimum frequency that can pass through the D layer without being absorbed. Frequencies below the LUF are absorbed by the D layer and never reach the F layer.

At night, the D layer disappears (solar radiation stops; ions and electrons recombine rapidly at the higher density of low altitudes). This has major consequences:
- LF and MF sky waves can now reach the F layer and return to earth at long distances — this is why you hear distant medium-wave stations at night that you cannot hear during the day
- Lower HF frequencies (3.5 MHz, 7 MHz) that were absorbed during the day can now propagate long distances

> [INFO] **5B1:** The D layer (60–90 km) absorbs HF signals during daylight, especially at lower frequencies. It disappears at night, allowing LF/MF and lower HF sky waves to propagate over long distances.

### The E Layer (5B1)

- **Height:** approximately 100–125 km
- **Behaviour:** weaker ionisation than F layers; exists by day, weakens significantly at night
- **Effect on radio waves:** provides short-skip propagation on lower HF bands; the E layer can refract signals on 3–10 MHz over distances of a few hundred to a thousand kilometres

The most significant E-layer phenomenon for operators is **Sporadic-E (Es)**:

**Sporadic-E** is the appearance of intense, patchy regions of very high ionisation in the E layer. These patches can refract signals at much higher frequencies than normal — typically 50 MHz (6 m) and sometimes up to 144 MHz (2 m). This allows contacts of up to **2,000 km** on bands that are normally line-of-sight only.

Key characteristics of Sporadic-E:
- Most common in **summer** (May–August in the UK) and to a lesser extent in December
- Completely unpredictable — can appear and disappear within minutes
- Not related to sunspot activity — it is caused by wind shear and jet stream behaviour in the lower atmosphere (exact mechanism still debated)
- Contact completion must often be rapid as the opening can close without warning

> [INFO] **5B1:** The E layer (100–125 km) supports short-skip HF propagation. Sporadic-E brings intense patches of E-layer ionisation that allow VHF signals (up to ~150 MHz) to propagate up to 2,000 km. Most common in summer; completely unpredictable.

### The F Layer (5B1, 5B2)

The F layer is the workhorse of long-distance HF communication:

- **Height daytime:** splits into F1 (~300 km) and F2 (~400 km)
- **Height night-time:** F1 and F2 **merge into a single F layer** at about 250–300 km
- **Behaviour:** highest ionisation of any layer; ions at this altitude recombine slowly because the air is very thin — the F layer persists for several hours after sunset, continuing to support propagation

**During the day:** the F2 layer is responsible for the long-distance DX contacts on HF. The higher altitude means a single hop can cover up to 4,000 km. The F2 layer is at its most active when solar radiation is at maximum — mid-day and in summer.

**At night:** F1 and F2 merge into a single weaker F layer. The MUF drops as ionisation decreases, so fewer frequencies can propagate via sky wave. Lower HF bands benefit because the D layer is gone (lower LUF), but the higher HF bands become less reliable.

<!-- SVG: ionosphere-layer-diagram — altitude vs ion density, D/E/F1/F2 shown by day, single F shown by night, heights labelled -->

> [INFO] **5B2:** The F layer (F1 + F2 during the day, single F at night) provides long-distance HF propagation. F2 at ~400 km allows single-hop distances of up to 4,000 km. At night, F1 and F2 merge and the layer drops to ~250–300 km. The layer persists after sunset because ions recombine slowly at that altitude.

**See also:** [Antenna Curriculum Lesson 1: EM Radiation](/pages/antenna-curriculum/unit-1-how-antennas-work/lesson-01-em-radiation.html) — covers the electromagnetic nature of radio waves propagating through space.

---

## 5C — Frequency-Dependent Behaviour

### Maximum Usable Frequency (MUF) (5B2)

The **MUF (Maximum Usable Frequency)** is the highest frequency that the ionosphere will refract back to earth for a given path length at a given moment.

Why there is a maximum: as frequency increases, the bending ability of the ionosphere decreases. Above the MUF, signals pass straight through the ionosphere and escape into space, regardless of angle. There is no sky wave above the MUF.

![Maximum Usable Frequency — below MUF, signals refract back to earth; above MUF, they escape to space. The MUF depends on ionospheric conditions and path geometry.](/assets/images/study/section-5/maximum-usable-frequency-muf.png)

The MUF is not a fixed number — it changes:
- **With time of day:** higher at mid-day, lower at night
- **With season:** higher in summer (stronger solar ionisation)
- **With sunspot cycle:** higher at solar maximum
- **With path length:** longer paths can support higher frequencies (the signal takes a shallower angle through the ionosphere)

A practical approximation: above **15 MHz**, sky wave becomes less reliable; above **30 MHz**, the ionosphere almost never refracts signals back (the HF/VHF boundary). On days of high solar activity (high sunspot number), 28 MHz (10 m) and sometimes 50 MHz (6 m) can open via the F2 layer.

> [INFO] **5B2:** The MUF is the highest frequency refracted for a given path. Above the MUF, signals escape into space. The MUF changes with time of day, season, and sunspot activity. Above ~30 MHz, ionospheric refraction rarely occurs.

### Lowest Usable Frequency (LUF) (5B3)

The **LUF (Lowest Usable Frequency)** is the minimum frequency at which sky wave propagation is useful for a given path. Below the LUF, the D layer absorbs too much of the signal energy for a usable signal to arrive.

LUF rises during the day (as the D layer strengthens) and falls at night (as the D layer disappears). In practical terms:
- On a summer afternoon, 3.5 MHz (80 m) may have a high LUF — the D layer absorbs most of your signal; only short local contacts work
- At night, the LUF drops below 1 MHz — 80 m and even 160 m can propagate over long distances

The usable frequency range for a given path at a given time sits **between** the LUF and the MUF:
```
LUF ←— usable range for this path —→ MUF
      ↑ signal works in this range ↑
```

If LUF > MUF (unusual but possible during disturbed conditions), no HF frequency works for that path.

> [INFO] **5B3:** The LUF is the minimum frequency at which sky wave is useful — below it, the D layer absorbs too much. The LUF rises with solar activity during the day and falls to near zero at night. The usable range for a given path lies between LUF and MUF.

---

## 5D — Seasonal and Solar Variation

### Day and Night (5B1, 5B2)

The most important cycle is the **diurnal** (daily) cycle, driven by sunlight:

| Condition | D layer | F layer | Effect |
|-----------|---------|---------|--------|
| Daytime | Strong — absorbs low HF | F1 + F2, high and dense | Higher MUF, higher LUF; 14–28 MHz works well for DX |
| Night-time | Gone | Single F, lower, weaker | Lower MUF; 3.5–7 MHz propagates over long distances; LF/MF sky wave possible |
| Sunrise/sunset | Building / collapsing | Transition | Variable, sometimes excellent conditions (grey-line) |

> [INFO] **5B1:** During the day, the D layer blocks low HF frequencies but allows mid/upper HF to propagate. At night, the D layer disappears and low HF frequencies can propagate over long distances.

### Summer and Winter (5B3)

In the northern hemisphere:
- **Summer:** the sun is higher in the sky, solar radiation is more intense. The ionosphere is more strongly ionised → higher MUF → better 10 m and 15 m propagation. Sporadic-E is more common.
- **Winter:** the sun is lower. Less ionisation → lower MUF → 10 m and 15 m often dead. However, the absence of D layer absorption means lower bands (3.5 MHz, 7 MHz) can work better at night.

This is explained by the 23.5° tilt of the Earth's axis. When the UK faces toward the sun in summer, solar radiation arrives at a steeper angle, delivering more energy per unit area to the upper atmosphere.

<!-- SVG: earth-tilt-diagram — show UK in summer (sun high) vs UK in winter (sun low), 23.5° tilt labelled -->

### The Sunspot Cycle (5B3, 5B4)

**Sunspots** are dark, cooler regions on the sun's surface associated with strong magnetic fields. Their number follows an approximate **11-year cycle** between solar minimum (few sunspots) and solar maximum (many sunspots).

More sunspots = more solar activity = more UV and particle emission = more ionisation = higher MUF.

At **solar maximum:**
- 28 MHz (10 m) can be open to distant DX for hours at a time
- F2-layer MUF may exceed 40 MHz on some paths
- Trans-equatorial propagation (TEP) becomes possible
- The amateur bands from 14–28 MHz are excellent for DX

At **solar minimum:**
- 28 MHz may be silent for months
- 14 MHz and 21 MHz become less reliable for long distance
- Lower bands (3.5 and 7 MHz) become the primary DX frequencies
- MUF may rarely exceed 14 MHz for some paths

**Solar cycle 25** (current as of the time of writing) peaked around 2024–2025 with unusually high sunspot numbers, giving exceptional HF propagation. If you hear operators on 10 m and 6 m saying conditions are "amazing", this is why.

> [INFO] **5B3, 5B4:** The 11-year sunspot cycle modulates ionospheric ionisation and therefore MUF. Solar maximum gives excellent upper HF propagation. Solar minimum kills the higher bands. Sunspot counts and MUF forecasts are available from online propagation prediction tools.

### Solar Disturbances (5B4)

The sun occasionally produces sudden events that affect propagation:

**Solar flares:** sudden intense bursts of X-ray and UV radiation. Arrive at the speed of light (8 minutes to reach Earth). Cause rapid, intense ionisation of the D layer → **HF blackout** on the sunlit side of the Earth. Can last minutes to hours.

**Coronal Mass Ejections (CMEs):** plasma clouds ejected from the sun. Arrive 1–3 days after the associated flare. Cause geomagnetic storms. These can either:
- Enhance propagation temporarily (via auroral ionisation) — particularly on VHF via auroral propagation
- Disrupt propagation by disturbing the F layer — raised absorption, spread Doppler, weak signals

**Aurora:** during geomagnetic storms, charged particles funnel into the polar regions and ionise the upper atmosphere, creating the aurora. Signals reflected from the auroral curtain have a characteristic rasping, distorted quality. Some VHF operators deliberately use auroral backscatter for contacts on 50 MHz and 144 MHz — it works best at 45–90° to the magnetic east–west axis.

> [INFO] **5B4:** Solar flares cause HF blackouts (intense D-layer absorption) on the sunlit side of the Earth. CMEs follow 1–3 days later and cause geomagnetic storms. Aurora can enable VHF propagation via backscatter from the auroral curtain.

---

## 5E — VHF and UHF Propagation

### Line-of-Sight is the Norm (5B5)

Above approximately **30 MHz**, signals almost never refract from the ionosphere under normal conditions. VHF and UHF propagation is primarily **line-of-sight (LOS)**: the transmitter and receiver must be able to "see" each other, with the signal limited by the horizon.

The **radio horizon** is slightly further than the visual horizon because the atmosphere bends radio waves slightly downward (atmospheric refraction). A useful approximation for VHF/UHF:

```
Radio range (km) ≈ 3.57 × (√h_tx + √h_rx)
```

Where h is antenna height in metres. For two stations, both with antennas at 10 m height:
```
Range ≈ 3.57 × (√10 + √10) = 3.57 × 6.32 + 3.57 × 3.16... 
     ≈ 3.57 × 6.32 ≈ 22.6 km each + 22.6 km → total range ≈ 45 km
```

(Examinations won't ask you to calculate this — just understand that height increases range and radio horizon slightly exceeds visual horizon.)

> [INFO] **5B5:** VHF/UHF is primarily line-of-sight above ~30 MHz. The radio horizon is slightly further than the visual horizon due to atmospheric refraction. Antenna height is the primary factor in extending range.

**See also:** [Station Survey 01 — The Six-Degree Skyline](/pages/blog/station-survey-01-six-degree-skyline.html){:target="_blank"} — a real case study applying these concepts: terrain profiling with Copernicus data and LiDAR reveals how hills, trees, and buildings cap the effective radio horizon at a UK station, and models the improvement from raising the antenna.

### Tropospheric Ducting (5C3)

The **troposphere** is the lowest layer of the atmosphere (0–12 km) — the layer where weather happens.

Normally, air temperature decreases with altitude. But under certain weather conditions, a **temperature inversion** occurs: a layer of warmer air sits above cooler air. Radio signals entering the warm layer are bent back downward and can become **trapped in a duct** — bouncing between the inversion layer and the earth's surface for hundreds of kilometres with very little loss.

![Tropospheric ducting — a warmer air layer above cooler air traps VHF/UHF signals, allowing extended line-of-sight propagation well beyond the normal radio horizon.](/assets/images/study/section-5/temperature-inversion-tropo-ducting.png)

**Tropo ducting characteristics:**
- Works on VHF and UHF (and lower microwave frequencies)
- Typical range enhancement: a few hundred to over 1,000 km
- Most common in **summer**, when temperature inversions form over sea areas (especially North Sea and English Channel)
- Signals sound "flat" and strong — often stronger than expected from a local station

**Weather also degrades UHF:** heavy rain, snow, and hail absorb shorter wavelengths. At 10 GHz and above, rain fade becomes significant. This is less relevant at 144 MHz but matters on microwave bands.

> [INFO] **5C3:** Tropospheric ducting occurs when a temperature inversion traps VHF/UHF signals in a layer, allowing propagation over hundreds of kilometres. Most common in summer. Heavy rain/snow/hail absorbs UHF signals.

### Sporadic-E (5B1 revisited)

Covered in §5B above, but worth noting again here for VHF operators: **Sporadic-E** is the most exciting regular VHF propagation mode for most UK operators. It brings unexpected contacts on 50 MHz (6 m) and occasionally 70 MHz (4 m) and 144 MHz (2 m) from continental Europe and sometimes further.

When an Es opening is in progress:
- Signals arrive from one or two specific directions (the patches are localised)
- Signals may be S9+ one moment and gone the next
- The opening may last minutes or hours — completely unpredictable

Es is best monitored on the DX cluster and on dedicated propagation websites (PSK Reporter, DX Maps).

### Other VHF/UHF Modes (brief)

**Meteor scatter:** very brief pings of signal reflected from the ionised trails of meteors burning up in the atmosphere. Usable with digital weak-signal modes (MSK144). Contacts are made in bursts of a few seconds. Major meteor showers (Perseids in August, Geminids in December) produce the most activity.

**Moonbounce (EME — Earth–Moon–Earth):** signal bounced off the lunar surface. Round-trip distance ~800,000 km; path loss is enormous (~250 dB). Requires large antennas and high power (or weak-signal digital modes such as JT65). Not in the exam, but worth knowing it is a real mode used by active amateurs.

**Satellite:** amateur satellites (OSCAR series) provide relatively simple fixed-path propagation. Some are in low earth orbit (LEO), usable for 10-minute passes; others (Phase 3, linear transponders) are in high elliptical orbits giving hours of access per pass.

---

## 5F — Practical Propagation Effects

### Fading (5B2)

**Fading** (or QSB — Q-code for signal variation) is the variation in received signal strength over time, caused by **multipath propagation**: multiple slightly different paths from transmitter to receiver, each arriving with a slightly different delay. As the ionosphere moves and changes, these paths vary in length by metres — enough to put the signals from each path in and out of phase.

When signals from two paths add in phase → signal is strong. When they partially cancel → signal is weak. The receiver sees the combined effect of all paths, with strength varying from second to second.

**Fading rates:**
- **Fast fading (flutter):** fractions of a second — common on short F-layer paths or when the ionosphere is disturbed
- **Slow fading:** minutes — common on stable long-distance F-layer paths

**Selective fading** is when different frequencies within the same signal band fade at different rates — the multipath delay varies with frequency. This is particularly destructive to SSB (a wideband mode) because parts of the voice spectrum fade while others don't, making the received audio garbled even when the signal appears to be present.

> [INFO] **5B2:** Fading (QSB) is caused by multipath propagation — multiple slightly different path lengths cause signals to add and cancel as the ionosphere changes. Selective fading garbles SSB because different parts of the audio spectrum fade at different rates.

### Short Path and Long Path

For any two points on earth, there are two Great Circle paths connecting them — a short path and a long path (the complementary arc around the globe).

- **Short path:** the shorter Great Circle arc — usually the strongest signal
- **Long path:** the longer arc, going the "other way around" — sometimes stronger when the ionospheric conditions on the short path are poor and the long path benefits from a favourable grey-line or different local time at the reflection points

To work long path, rotate your beam 180° from the short-path heading. Some DX operators listen for the long-path signal arriving slightly after the short-path signal (the extra distance adds propagation time).

### Grey-Line Propagation

The **grey line** (or terminator) is the twilight zone at the boundary between the sunlit and dark sides of the earth. At this boundary:
- The D layer is in the process of building (morning terminator) or collapsing (evening terminator)
- For a brief period, the D layer absorption is low while the F layer is still present
- LF and lower HF signals can propagate over very long distances along the terminator with little D-layer loss

Grey-line openings on 3.5 MHz (80 m) and 7 MHz (40 m) at dawn and dusk can produce exceptional DX contacts — intercontinental contacts that are impossible at mid-day.

### Typical Propagation Ranges (5B5, 5C3)

| Band | Mode | Typical range | Notes |
|------|------|---------------|-------|
| LF/MF (< 1.8 MHz) | Ground wave | Hundreds of km | Day; national coverage |
| LF/MF | Sky wave | Thousands of km | Night only (D layer gone) |
| 3.5 MHz (80 m) | Sky wave | 500–2,000 km day; 3,000+ km night | D layer limits daytime range |
| 7 MHz (40 m) | Sky wave | 1,000–3,000 km day; global night | Excellent European band by day |
| 14 MHz (20 m) | Sky wave | Global (multiple hops) | Best all-round DX band |
| 21–28 MHz | Sky wave | Global near solar max | Dead near solar minimum |
| 50 MHz (6 m) | Sporadic-E | Up to 2,000 km | Summer; unpredictable |
| 144 MHz (2 m) | Line-of-sight | < 100 km typically | Tropo/Es for longer |
| 144 MHz | Tropo ducting | 100–1,000+ km | Summer inversions |
| 432 MHz+ | Line-of-sight | < 50 km typically | Rain/snow can attenuate |

---

## 5G — Self-Check Questions

**Q1.** A signal from the UK on 14 MHz arrives in Australia via the ionosphere. Is it refracted or reflected?

<details><summary>Answer</summary>

**Refracted.** The signal is gradually bent by the increasing ion density in the ionosphere — the bending is continuous and smooth, not a sharp bounce as the word "reflected" implies. The correct scientific term is refracted.
</details>

---

**Q2.** At what height is the D layer, and what is its main effect on radio propagation?

<details><summary>Answer</summary>

The D layer extends from approximately **60 to 90 km**. Its main effect is **absorption** of low-frequency and lower HF signals during daylight. It acts as a barrier that determines the Lowest Usable Frequency (LUF). At night, the D layer disappears, allowing LF, MF, and lower HF sky waves to propagate long distances.
</details>

---

**Q3.** What is the Maximum Usable Frequency (MUF) and what factors affect it?

<details><summary>Answer</summary>

The MUF is the **highest frequency the ionosphere will refract back to earth** for a given path. Signals above the MUF pass straight through the ionosphere and escape into space.

Factors that increase the MUF:
- **More sunspot activity** (solar maximum)
- **Daytime** rather than night-time
- **Summer** rather than winter
- **Longer path** (shallower angle through the ionosphere)
</details>

---

**Q4.** You are operating on 7 MHz in the UK at mid-afternoon and cannot make contact with a station 500 km away, but you can contact a station in Australia (17,000 km). Why?

<details><summary>Answer</summary>

The 500 km station is in the **skip zone** (dead zone): too far for ground wave and too close for sky wave. The sky wave returns to earth past them. The Australian station is beyond the skip distance and is receiving your sky wave after multiple hops. The nearby station simply cannot be reached on 7 MHz at this time of day.
</details>

---

**Q5.** Why can you hear distant medium-wave stations at night that you cannot hear during the day?

<details><summary>Answer</summary>

During the day, the **D layer** absorbs medium-wave frequencies. Only the ground wave reaches you, which has limited range (hundreds of km).

At night, the **D layer disappears**. The sky wave now reaches the F layer and is refracted back to earth, returning thousands of kilometres from the transmitter. Distant stations that were beyond ground wave range during the day now arrive via sky wave.
</details>

---

**Q6.** What is Sporadic-E and why is it significant for VHF operators?

<details><summary>Answer</summary>

Sporadic-E (Es) is the appearance of intense, localised patches of very high ionisation in the E layer (100–125 km altitude). These patches can refract signals at frequencies far higher than the E layer normally supports — typically up to **150 MHz** and occasionally higher.

This allows contacts on 50 MHz (6 m) and sometimes 144 MHz (2 m) over distances of up to **2,000 km**, far beyond normal line-of-sight range.

Es is most common in **summer**, is completely unpredictable, and can appear and disappear within minutes.
</details>

---

**Q7.** What is tropospheric ducting and in what conditions does it occur?

<details><summary>Answer</summary>

Tropospheric ducting occurs when a **temperature inversion** forms in the troposphere — a layer of warmer air above cooler air. VHF and UHF signals entering this layer are bent back downward and become trapped, propagating for hundreds of kilometres with very little loss.

It is most common in **summer**, when temperature inversions form over sea areas. It affects VHF and UHF bands. Signals during a duct can be unexpectedly strong from great distances.
</details>

---

**Q8.** An HF operator finds that 28 MHz works well for DX contacts today, but was silent for the past six months. What is the most likely explanation?

<details><summary>Answer</summary>

The sunspot cycle. During a period of high sunspot numbers (**solar maximum**), ionospheric ionisation is intense and the MUF rises well above 28 MHz, supporting excellent F-layer propagation on 10 m. During low sunspot activity (**solar minimum**), the MUF may rarely reach 28 MHz, leaving the band "dead" for months at a time.

The ~11-year sunspot cycle is the main driver of long-term changes in upper-HF propagation.
</details>

---

## Suggested Interactives for RFH-Interactives

1. **Ionospheric-layer explorer** — cross-section of the Earth's atmosphere from 0 to 500 km. Toggle day/night and season. Show D, E, F1, F2 layer positions and relative ion density (brightness). Slider for sunspot number. Overlay refracted vs absorbed ray paths for 3, 7, 14, 28, 50 MHz. Show which signals make it through and which are absorbed or escape. Ideal placement: §5B.

2. **MUF / skip-distance predictor** — inputs: frequency, time of day, season, sunspot activity level. Outputs: whether signal propagates, estimated MUF for the path, skip distance, typical range. Add a world-map overlay showing where the sky wave lands. Ideal placement: §5C.

3. **Sunspot-cycle timeline** — animated bar chart of sunspot count over the past 3 cycles (23, 24, 25). Overlay a line showing typical MUF on the 20 m band. Highlight where we are now. Educational context for understanding band conditions. Ideal placement: §5D.

---

*Section 5 complete. Handoff to Frontend (LessonsBuilder) for HTML build. Do NOT build HTML here.*
