<!-- RF-Hub Full Licence Study — Chapter 12: Propagation
     Exam weight: ~8–12% (~11 subsections, 5 pages)
     Sub-sections: §12A ionospheric layers, §12B solar activity/SFI,
                   §12C critical frequency/ionosonde, §12D MUF/LUF,
                   §12E skip/dead zone, §12F fading, §12G tropo,
                   §12H sporadic-E, §12I auroral, §12J meteor scatter,
                   §12K EME
     Syllabus refs: 12A1–12K1 [VERIFY v1.6]
     RSGB source: Full Licence Manual 3rd ed. (G0HIQ), Ch 12, pp. 78–82
     Cross-ref: Intermediate §5B (layers), §5D (solar/Es), §5E (VHF/tropo/scatter), §5F (fading)
     New at Full: MUF formula, LUF, ionosonde, SFI/PFD, auroral Kp index, MSK144
     Iframes: full-muf-luf-predictor.html (§12D)
-->

# §12 — Propagation

Propagation describes how radio waves travel from transmitter to receiver. At HF the ionosphere is the critical factor; at VHF and above, tropospheric effects and direct scatter dominate. Full-level treatment goes beyond the Intermediate's descriptive account to quantitative relationships: the MUF formula, the role of the solar flux index, and the Kp index for aurora. Sections §12A–§12E are the exam core; §12F–§12K round out each mode with the additional detail expected at Full level.

> **Cross-reference — Intermediate §5:** The Intermediate propagation chapter covers ground wave, basic ionospheric structure, frequency-dependent behaviour, solar/seasonal variation, VHF/UHF modes, and fading (§5A–§5F). Full level builds on all of those. Read this chapter alongside the Intermediate material rather than in isolation.

---

## §12A — Ionospheric Layers

The **ionosphere** is the region of the upper atmosphere from approximately 60 km to 1000 km altitude, where solar ultraviolet (UV) and X-ray radiation ionises gas molecules, creating free electrons and positive ions. It is the free electrons that refract and reflect radio waves.

> **Cross-reference:** Intermediate §5B covers ionospheric formation and the basic layer model. The following extends that material with layer-specific properties needed at Full level.

### Layer Properties

| Layer | Altitude | Daytime presence | Night-time | Primary effect |
|---|---|---|---|---|
| **D** | 60–90 km | Present | Disappears | Absorbs MF and low HF; attenuates signals passing through |
| **E** | 90–130 km | Moderate | Weak | Short-range HF hops; host of sporadic-E clouds |
| **F1** | 130–210 km | Present | Merges with F2 | Transitional layer; low HF reflections |
| **F2** | 210–400 km | Strong | Present (weaker) | Primary DX reflection layer; supports long HF paths day and night |

**D layer** — exists only in daylight, created principally by Lyman-α UV radiation acting on nitric oxide. It does not reflect HF but strongly absorbs it; absorption ∝ 1/f², so lower frequencies are absorbed more. This is why the 80 m and 40 m bands are closed or noisy during the day — signals attempting to reach the F layer pass through and are absorbed by the D layer. At night the D layer disappears rapidly, and these bands open.

**E layer** — formed by harder UV and soft X-rays acting on molecular oxygen. Supports one-hop HF paths of approximately 1000–2000 km during daylight. The E layer hosts sporadic-E (§12H).

**F layer** — the workhorse for HF DX. The F1 layer disappears at sunset; the F2 layer persists through the night because recombination at its altitude (very thin air) is slow. A single F2 hop carries signals 2000–4000 km. Multiple hops allow global paths.

### Diurnal and Seasonal Variation

- Ionisation is maximum at local solar noon; the F2 layer density peaks 1–2 hours after noon
- In winter, F2 ionisation is sometimes *higher* than in summer at mid-latitudes (the "winter anomaly")
- The F1 layer is absent in winter at high latitudes

---

## §12B — Solar Activity: Sunspot Cycle and Solar Flux Index

### The 11-Year Sunspot Cycle

Sunspots are dark regions on the solar surface associated with intense magnetic activity. Their count (Smoothed Sunspot Number, SSN) follows an approximately 11-year cycle between solar minimum and solar maximum. Solar Cycle 25 began in 2019 and peaked around 2024–2025 with unusually high activity.

High solar activity means:
- More UV and EUV radiation → stronger F2 ionisation → higher critical frequency (fc)
- Higher fc → higher MUF → more HF bands open for DX → 10 m (28 MHz) and 12 m (24 MHz) usable at solar maximum, effectively dead near minimum

### Solar Flux Index (SFI / F10.7)

The **Solar Flux Index** (SFI, also F10.7) is the solar radio flux measured daily at 10.7 cm wavelength (2800 MHz) from Penticton, British Columbia, Canada. It is expressed in **solar flux units (sfu)** where 1 sfu = 10⁻²² W m⁻² Hz⁻¹.

SFI correlates closely with the EUV radiation that ionises the F2 layer and is used as the key numerical proxy for HF propagation prediction:

| SFI range | Interpretation | HF impact |
|---|---|---|
| 65–70 | Solar minimum | 10 m, 12 m closed or marginal; 14–18 MHz DX with effort |
| 80–100 | Low moderate | 14–18 MHz reliable; 21 MHz possible |
| 100–150 | Moderate to high | 21 MHz opens; 28 MHz possible near equinox |
| >150 | High (solar max) | 28 MHz global; 24 MHz excellent; trans-equatorial propagation (TEP) |

SFI is published daily by NOAA, RSGB PropNet, and DX cluster software. Many logging programs display the current SFI, Kp, and A-index as headline indicators of propagation conditions.

> [INFO] **12B1:** The Solar Flux Index (SFI / F10.7) measures solar radio emission at 2800 MHz and is the primary numerical indicator used in HF propagation prediction. High SFI → higher MUF → more HF bands open. The 11-year sunspot cycle drives SFI between ~65 (minimum) and >200 (maximum).

### Geomagnetic Disturbances

Solar flares emit X-ray bursts that reach Earth in ~8 minutes, causing a **Sudden Ionospheric Disturbance (SID)**: a rapid increase in D-layer ionisation → HF blackout (typically on the sunlit hemisphere only), lasting minutes to hours.

Coronal Mass Ejections (CMEs) arrive 1–3 days later, compressing the magnetosphere and causing a **geomagnetic storm**. The F layer becomes disturbed and irregular; HF propagation deteriorates or ceases for hours to days. The **Kp index** (0–9 scale, measured every 3 hours) quantifies geomagnetic disturbance: Kp ≤ 2 = quiet; Kp 4–5 = unsettled; Kp ≥ 6 = storm; Kp ≥ 7 = severe storm. High Kp enables aurora at lower latitudes (§12I) but degrades HF propagation.

---

## §12C — Critical Frequency and the Ionosonde

### Critical Frequency (fc)

The **critical frequency** (fc, specifically **foF2** for the F2 layer) is the highest frequency at which a radio wave transmitted vertically upward is reflected back to Earth. A wave at exactly fc is reflected; a wave at any higher frequency passes through the F2 layer and is lost to space.

Typical values:
- Solar minimum, night: foF2 ≈ 2–4 MHz
- Solar minimum, day: foF2 ≈ 5–8 MHz
- Solar maximum, day: foF2 ≈ 8–14 MHz

The critical frequency depends on the electron density N (electrons per m³):

```
fc = √(N / 81)   [MHz, with N in electrons/m³]
```

(This is the plasma frequency formula, from which the fc–N relationship is derived.)

### The Ionosonde

An **ionosonde** is a specialised swept-frequency radar that transmits short pulses across the HF range (typically 1–20 MHz) and measures the two-way travel time to the reflecting layer. From the time delay, the virtual height of reflection is calculated. The resulting plot — an **ionogram** — shows virtual height vs frequency for each layer (D, E, F1, F2).

From the ionogram:
- **foF2** is read as the highest frequency producing a F2 echo — this is the critical frequency
- The **virtual height** of each layer is visible directly
- Layer splitting (E and F2 separately) is visible by day; at night only F2 remains

Real-time ionograms from a network of ~200 ionosondes worldwide are available at ionosonde.net and through the DIDBase system. Amateur operators can use these to estimate current foF2 at their location and hence predict the MUF for a given path.

> [INFO] **12C1:** The critical frequency (foF2) is the highest frequency reflected vertically by the F2 layer. It is measured by an ionosonde (swept radar). fc varies from ~3 MHz (solar minimum, night) to ~14 MHz (solar maximum, day). All HF band planning for oblique paths starts from this number.

---

## §12D — MUF, LUF, and Optimal Working Frequency

### Maximum Usable Frequency (MUF)

For an oblique (non-vertical) path, a wave strikes the ionosphere at an angle — and a wave at a higher frequency than fc can still be reflected, because the oblique geometry reduces the effective vertical component of the wave vector. The **Maximum Usable Frequency** for a given path is:

```
MUF = fc × sec(θ)
```

Where θ is the angle of incidence measured from the *vertical* at the reflection point, and sec(θ) = 1/cos(θ).

For a flat-Earth approximation with F2 layer height h and ground path length d:

```
sec(θ) = √(1 + (d / 2h)²)
```

**Worked example:** fc = 8 MHz, h = 300 km, d = 2000 km:

```
sec(θ) = √(1 + (2000 / 600)²) = √(1 + 11.1) = √12.1 ≈ 3.48
MUF = 8 × 3.48 ≈ 28 MHz
```

So a 2000 km path with fc = 8 MHz has MUF ≈ 28 MHz — the 10 m band just opens. The same path with fc = 6 MHz (lower solar activity) gives MUF ≈ 21 MHz — only 15 m is open.

The sec(θ) factor is commonly in the range 3–5 for typical amateur paths:
- 1000 km path, h = 300 km → sec ≈ 2.5
- 2000 km path, h = 300 km → sec ≈ 3.5
- 3000 km path, h = 300 km → sec ≈ 5.0

For multi-hop paths (e.g. UK to Japan via 3–4 hops), the MUF for the complete path is set by the hop with the *lowest* MUF along the route.

### Lowest Usable Frequency (LUF)

The **Lowest Usable Frequency** is set by D-layer absorption. As frequency decreases, D-layer absorption increases approximately as 1/f². Below the LUF, signal losses in the D layer reduce the received signal strength below a useful threshold, regardless of whether the F layer would reflect the signal.

- Daytime LUF: typically 8–12 MHz on long paths (D layer strong)
- Night-time LUF: typically 2–5 MHz (D layer gone; absorption minimal)
- LUF rises during solar flares (D-layer enhancement)

The **Optimal Working Frequency (OWF)** is typically taken as **0.85 × MUF**. Operating at 85% of MUF gives a 15% margin against ionospheric variations (day-to-day variations in foF2 can be ±20–30% of the monthly median). Operating too close to MUF risks sudden signal loss as the ionosphere fluctuates below the required level.

> [INFO] **12D1:** MUF = fc × sec(θ) — the maximum frequency for a given path, determined by the critical frequency and path geometry. LUF is set by D-layer absorption (∝ 1/f²). The usable frequency window is LUF to MUF; the optimal working frequency is 0.85 × MUF.

### MUF/LUF Predictor

Use the interactive below to explore how MUF and LUF vary with solar flux, path length, and time of day:

<iframe src='/interactives/full-muf-luf-predictor.html' style='width:100%; height:700px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='MUF / LUF Predictor'></iframe>

---

## §12E — Skip Distance and the Dead Zone

### Skip Distance

A transmitter radiates signals at a range of elevation angles. Waves at high elevation angles hit the ionosphere nearly vertically — if the frequency is below fc they are reflected; if above fc they pass through. Waves at lower elevation angles strike obliquely and are reflected at higher frequencies (§12D).

The **skip distance** is the minimum surface distance from the transmitter at which the sky-wave signal returns to Earth. At elevations below the critical angle for the operating frequency, all waves pass through the ionosphere — there is a minimum reflection distance below which the sky wave does not return.

- At 14 MHz with moderate ionospheric conditions: skip distance ≈ 800–1500 km
- At 28 MHz: skip distance may be 2000–4000 km (or no propagation if below MUF)
- At 7 MHz: skip distance ≈ 200–800 km by day, shorter at night when F layer is lower

### Dead Zone

The **dead zone** (or skip zone) is the annular region between:
- The outer limit of the **ground wave** (typically a few hundred km at HF, decreasing with frequency)
- The inner limit of the **sky wave** (the skip distance)

Within the dead zone, neither propagation mode delivers a usable signal. A station 300 km away may hear nothing while a station 1200 km away receives a strong signal and a station 50 km away receives via ground wave.

The dead zone varies constantly with ionospheric conditions. On 14 MHz at solar maximum, the skip distance can extend to 3000 km, leaving a very large dead zone; during grey-line conditions or at solar minimum the skip distance shortens.

**Practical implication:** A station transmitting at a frequency above the MUF for a specific path will not establish contact — the wave passes through the ionosphere and is lost to space. Listening for signals from the target area and noting that they are audible confirms the path is open.

---

## §12F — Fading: Multipath and Selective

> **Cross-reference:** The mechanism of fading (QSB) — multiple path lengths, phase addition and cancellation — is covered in detail in Intermediate §5F. Read that section alongside the following.

### Multipath Fading

On any HF sky-wave path, the signal may arrive via several routes simultaneously:
- Different ionospheric layers (E and F2 simultaneously)
- Different numbers of hops (1-hop and 2-hop F2)
- Different polarisation states (ordinary and extraordinary rays in the magnetised ionosphere)

Each path has a slightly different length; the signals arrive with different phases. When they add in phase the signal is strong; when they add destructively the signal fades — sometimes deeply (30 dB or more). As the ionosphere changes continuously, the path lengths change, causing the characteristic slow variation of signal strength (QSB).

**Fast fading (flutter):** Fractions of a second, audible as rapid amplitude variation; common near MUF (signals are propagating near the edge of the usable window and path geometry is sensitive to small changes).

**Slow fading:** Minutes, typical of stable F2 paths.

### Selective Fading

**Selective fading** occurs when different frequencies within the same signal fade at different rates. A wideband signal (like SSB, which spans ~2.4 kHz) has frequency components that travel on paths of slightly different lengths due to the dispersive nature of the ionosphere. One part of the audio spectrum may fade while another does not.

The audible result on SSB is the characteristic "Donald Duck" distortion — parts of the voice are attenuated or absent while others are loud, making the signal unintelligible even when the measured signal strength appears adequate.

**Selective fading is worst when:**
- Near the MUF (path is most dispersive)
- On wideband modes (SSB more affected than CW)
- During disturbed ionospheric conditions (multiple competing layers)

There is no simple cure: CW (200 Hz BW) suffers much less than SSB; digital modes with error correction (FT8, JS8Call) recover from fading that would destroy SSB intelligibility.

---

## §12G — Tropospheric Propagation

The troposphere (surface to ~12 km) supports VHF and UHF propagation beyond the geometric horizon through two mechanisms.

> **Cross-reference:** Intermediate §5E covers troposcatter and ducting briefly. The following adds quantitative context.

### Troposcatter

Random turbulence in the troposphere (temperature and humidity gradients) scatters a tiny fraction of the incident RF energy in all directions, including back toward Earth. This **troposcatter** is always present and provides a weak but reliable signal path of up to ~800 km at VHF/UHF, even with no temperature inversion.

Path loss is very high — typically 100–150 dB more than free-space loss at the same distance — so troposcatter is not useful for casual amateur contacts except with high-gain antenna systems and high power. It is used commercially for over-the-horizon links in remote areas.

### Tropospheric Ducting

When a **temperature inversion** forms — a layer of warm air above cool air — the refractive index gradient can guide VHF/UHF signals horizontally over great distances with little loss. The signal is trapped in a "duct" between the inversion layer and the ground (surface duct) or between two inversion layers (elevated duct).

**Conditions favouring ducting:**
- High pressure (anticyclonic) weather — stable descending air mass
- Coastal boundaries — sea is cooler than land in summer mornings
- Subsidence inversions at 500–1500 m altitude over sea

**Amateur impact:**
- 144 MHz: DX contacts to 1000–2000 km; cross-Channel and trans-North Sea paths opening regularly in summer
- 432 MHz and above: even more susceptible to ducting; paths over 2000 km recorded
- FM broadcast band (88–108 MHz) co-channel interference from distant stations is a common indicator of ducting conditions — if you hear unexpected FM stations from 500+ km, check DX cluster for VHF openings

---

## §12H — Sporadic-E (Es)

**Sporadic-E** is the sudden appearance of patches of unusually dense ionisation in the E layer (90–130 km), far denser than normal E-layer ionisation and capable of reflecting much higher frequencies.

### Characteristics

- Occurrence is largely unpredictable; peaks in Northern Hemisphere summer (May–August) and around equinoxes; a secondary peak in late November–December
- The patches are small (tens to hundreds of km across) and move horizontally at speeds of 50–100 km/h
- A single-hop Es path covers approximately **1000–2200 km** — insufficient for nearby contacts, too short for F2-style DX
- At 50 MHz (6 m), Es is the dominant long-distance mode and produces spectacular openings; at 70 MHz similar; at 144 MHz (2 m), Es openings are rarer but do occur, often at the higher end of summer peak
- At HF, Es can produce extremely strong signals on bands that are otherwise dead (e.g. 21 or 28 MHz in deep solar minimum) but over limited distances

### Double-Hop Es

Two Es patches in sequence enable **double-hop** propagation, roughly doubling the path to 2000–4000 km. This allows 50 MHz contacts across the Atlantic (EU to NA) or EU to Middle East/Africa — paths that would otherwise require F2 ionisation.

### Mechanism

The exact mechanism of Es formation remains an active research topic. Leading theories involve:
- **Wind shear** at E-layer altitudes creating convergence of metallic ions (from meteor ablation) into thin, dense layers
- **Gravity wave** interactions coupling lower atmosphere dynamics to E-layer ionisation
- Correlation with thunderstorm activity at low and mid latitudes

### Monitoring Es

- DX cluster: spots on 50 and 70 MHz are a reliable indicator; also VHF DX records on HF bands
- PSKReporter and DX Maps: real-time band opening maps
- FM co-channel (§12G indicator also works for Es at longer ranges ~2000 km)

> **Cross-reference:** Intermediate §5D covers Es occurrence and basic properties.

---

## §12I — Auroral Propagation

During geomagnetic disturbances, energetic charged particles from the sun enter the upper atmosphere near the magnetic poles, ionising nitrogen and oxygen and producing the visible aurora borealis/australis. The ionised auroral curtain can reflect VHF radio waves.

### Propagation Characteristics

- **Frequency range:** Primarily 50–144 MHz; occasionally 432 MHz in very strong events
- **Path geometry:** Signals must reflect from the auroral arc, which lies roughly along geomagnetic latitudes 65–75°N (or S). Contacts are therefore predominantly oriented **north–south** — UK stations work Scandinavia and Iceland via aurora; east–west contacts are rarely possible
- **Characteristic distortion:** Signals received via aurora are "buzzed" — rapid amplitude and frequency modulation from the constantly moving, irregular ionisation. CW is the most effective mode; SSB is heavily distorted and rarely intelligible; FM is unusable
- **Digital modes:** FSK441 (and to some extent JT6M for aurora EME) can work through the distortion; standard FT8 is not suitable for auroral paths due to Doppler spread

### Predicting Aurora

The **Kp index** (0–9) measures global geomagnetic disturbance averaged over 3-hour intervals. For aurora-assisted propagation:

| Kp | Aurora likelihood (UK) |
|---|---|
| ≤ 3 | No aurora |
| 4–5 | Aurora possible at northern Scotland/Orkney |
| 5–6 | Aurora to northern England, northern Wales |
| 7–8 | Aurora to southern England; usable for VHF aurora contacts across UK |
| ≥ 8 | Exceptional; visible aurora from southern Europe |

Real-time Kp is available from NOAA Space Weather Center, Space Weather Live, and various amateur apps. The A-index (daily average) provides context; the K-index (3-hour snapshot) is more useful for predicting current openings.

---

## §12J — Meteor Scatter

When a meteoroid enters the atmosphere at 60–120 km altitude and ablates, it leaves a column of ionised gas — a **meteor trail** — that can briefly reflect VHF radio waves. The trail lasts from milliseconds (small meteors, underdense trails) to several seconds (larger meteors, overdense trails).

### Practical Parameters

- **Frequency range:** 28–144 MHz; 50 MHz and 144 MHz are the primary amateur bands
- **Path length:** 1000–2200 km (comparable to single-hop Es, but the geometry is different — both stations must have a reflection point visible in common from the meteor trail)
- **Trail duration:** A few milliseconds to 10 s; contacts must exchange information in very short bursts
- **Modes:**
  - **MSK144**: the current standard for 144 MHz meteor scatter; 15-second Tx/Rx periods; ultra-fast modulation (very wide bandwidth) captures the brief trail reflections; replaces the older FSK441
  - **FSK441**: still used at 50 MHz and for slower contacts; 30-second periods
  - **Q65 (short):** weak-signal optimised, suitable when trails are brief
- **Software:** WSJT-X implements all current meteor scatter modes with tight timing coordination

### Meteor Showers

Major showers significantly increase the rate of usable trails:

| Shower | Peak date (approx.) | Zenithal Hourly Rate |
|---|---|---|
| Quadrantids | 3–4 January | ~120 |
| Perseids | 11–13 August | ~100 |
| Geminids | 13–14 December | ~120 |
| Leonids | 17–18 November | ~15 (storm years >> 1000) |
| Sporadic background | Year-round | ~5–10/hour |

During major showers, 144 MHz meteor scatter contacts become more frequent; outside showers, the sporadic background still provides usable opportunities, especially at 50 MHz.

> **Cross-reference:** Intermediate §5E briefly mentions meteor scatter. Full level adds the specific modes (MSK144) and shower calendar.

---

## §12K — Earth-Moon-Earth (EME)

**EME** (moonbounce) uses the lunar surface as a passive reflector. Round-trip path: approximately 800,000 km; path loss approximately 250–260 dB at 144 MHz.

### Requirements and Modern Practice

Historically EME required large arrays (e.g. 16 × 20-element Yagis), high power (1 kW+), and low-noise LNAs. Digital weak-signal modes have changed this:

- **JT65B** at 144 MHz: contacts possible with 100 W and a 4–5 element Yagi under good conditions; EME has been democratised
- **QRA64**: slightly more efficient than JT65B; growing adoption at microwave bands
- The key constraint is antenna gain and system noise temperature, not transmitter power: every dB of noise figure at the LNA input directly reduces the detectable signal threshold

### Operating Considerations

- **Antenna pointing:** The moon moves ~0.5°/min; antenna heading must be updated every few minutes for a beam narrower than ~10°
- **Doppler shift:** The moon's velocity relative to both stations causes Doppler shift; at 144 MHz the total Doppler (TX station + RX station) can reach ±300 Hz. WSJT-X applies Doppler correction automatically
- **Window:** Both stations must have the moon above the horizon simultaneously; EME contacts are timed to mutual moon-rise/moon-set windows, typically 4–8 hours of common visibility per day
- **Propagation-independent:** EME works regardless of ionospheric state — during geomagnetic storms when all HF and VHF/UHF paths fail, EME continues to function

> **Cross-reference:** Intermediate §5E mentions EME briefly (§5E, "Moonbounce" subsection).

---

## §12L — Self-Check Questions

**Q1.** Why can the 80 m band (3.5 MHz) support long-distance sky-wave contacts at night but not typically by day?

<details><summary>Answer</summary>

By day, the D layer is present (60–90 km altitude), created by UV radiation. D-layer absorption is proportional to 1/f², so at 3.5 MHz absorption is very high. Signals attempting to reach the F layer are absorbed in the D layer before they can be reflected. At night, the D layer disappears rapidly (no UV source), so 3.5 MHz signals pass through with minimal absorption and are reflected by the F2 layer — enabling DX contacts.
</details>

---

**Q2.** The critical frequency foF2 is measured as 9 MHz. A path of 2000 km uses an F2 layer at height 300 km. Estimate the MUF for this path.

<details><summary>Answer</summary>

sec(θ) = √(1 + (d/2h)²) = √(1 + (2000/(2×300))²) = √(1 + (3.33)²) = √(1 + 11.1) = √12.1 ≈ 3.48

MUF = fc × sec(θ) = 9 × 3.48 ≈ **31 MHz**

The 10 m band (28 MHz) would be open for this path; the OWF (0.85 × 31) ≈ 26 MHz, so 12 m (24.9 MHz) would be the most reliable operating frequency.
</details>

---

**Q3.** What is the dead zone, and why does it exist?

<details><summary>Answer</summary>

The dead zone is the annular region where neither ground wave nor sky wave delivers a usable signal. Ground wave attenuates with distance (typically useful within a few hundred km at HF). Sky wave returns to Earth at a minimum distance called the skip distance — below the skip distance it does not return. Between these two limits is the dead zone: no propagation mode reaches it. Its extent depends on frequency and ionospheric conditions.
</details>

---

**Q4.** What is the Solar Flux Index (SFI), and how does it relate to HF propagation?

<details><summary>Answer</summary>

The SFI (or F10.7) is the solar radio flux measured daily at 10.7 cm wavelength (2800 MHz). It correlates closely with the solar EUV output that ionises the F2 layer. High SFI → higher electron density → higher critical frequency (foF2) → higher MUF for any given path → more HF bands usable for DX. SFI ~65 at solar minimum (10 m closed), >150 at solar maximum (10 m opens globally). Amateurs monitor SFI daily as the primary HF propagation indicator.
</details>

---

**Q5.** A station working meteor scatter on 144 MHz uses MSK144. What determines the maximum contact range, and why must both stations be online simultaneously?

<details><summary>Answer</summary>

Range is determined by the geometry of the meteor trail: both stations must have a common reflection point on the trail, which exists at 80–120 km altitude. The maximum path where this is geometrically possible is approximately 1000–2200 km — beyond this, the trail is below the horizon for at least one station.

Both stations must be online simultaneously because the ionised trail lasts only milliseconds to a few seconds. Unlike ionospheric propagation (which can be one-way for long periods), a meteor trail is a fleeting, point-in-time reflector. Both stations must transmit in strict alternating 15-second periods, and reception of the brief burst must coincide with a meteor trail appearing during that period.
</details>

---

**Q6.** During a geomagnetic storm (Kp = 7), which propagation modes would you expect to be working and which would be degraded?

<details><summary>Answer</summary>

**Degraded:** HF sky-wave paths — the F2 layer is disturbed and irregular during geomagnetic storms; MUF drops, D-layer absorption may increase on lower HF, and paths become unreliable. The higher the HF band, the more susceptible.

**Working or enhanced:**
- **Aurora** (50–144 MHz): Kp 7 provides strong auroral ionisation, enabling north–south VHF paths via aurora; characteristic buzzing CW signals
- **EME**: Earth-Moon-Earth is completely unaffected by ionospheric conditions — the path is through space; contacts continue normally
- **Ground wave**: Short-range ground-wave contacts on MF/HF continue regardless of ionospheric state
- **Troposcatter/ducting**: Unaffected by geomagnetic activity

</details>
