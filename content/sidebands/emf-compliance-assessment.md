# Sideband: EMF Compliance Assessment — What UK Amateurs Need to Know

**Tags:** `[F]` `[I]` `[FL]`
**RSGB Refs:** 1G1 (Full — Condition 9-1, Condition 9-6); Intermediate §8B (RF safety); Foundation §9 (RF exposure)
**Cross-refs:** <a href="../study/full/section-1-licence-conditions.html#1g--emf-compliance-assessment-1g1" target="_blank">Full §1G — EMF Compliance (1G1)</a> · <a href="../study/intermediate/section-8-safety.html#8b--rf-radiation-safety" target="_blank">Intermediate §8B — RF Safety</a>
**Series:** Sideband — Topic Snippets for RF-Hub

---

Every UK amateur licence holder is legally required to check that the RF fields around their station do not put members of the general public above safe exposure limits. This requirement became significantly more visible in 2024 when Ofcom issued a revised Notice of Variation clarifying its application to all licence classes. The requirement itself is not new — but the documentation has changed, and many licensees are still working out what it means in practice.

This sideband covers the legal background, the science behind the limits, the maths for calculating compliance distance, and three worked examples at different power levels and antenna types. The goal is to give you the tools to understand what the Ofcom and RSGB spreadsheets are actually doing, not just accept a number from them.

> [INFO] An interactive compliance-distance calculator is embedded at the bottom of this page. Use it alongside the worked examples to explore how changing power, frequency, mode, and antenna gain affects your exclusion zone.

---

## Part 1: The Legal Requirement — Ofcom 2024

The UK amateur radio licence (Terms, Conditions and Limitations, often written TCL) contains **Condition 9**, which deals with RF field strengths. Two sub-conditions are the key ones:

**Condition 9-1** requires that the RF fields produced by your station must not exceed the levels recommended by ICNIRP applicable to the general public. This is a hard legal requirement, not a guideline or best practice.

**Condition 9-6** requires that you keep a written record demonstrating how you are meeting this requirement. A completed copy of the Ofcom or RSGB spreadsheet with your station parameters filled in is sufficient evidence.

### The 2024 Notice of Variation

In 2024, Ofcom issued a revised **Notice of Variation** updating the amateur licence documentation. The most significant change for most licensees was the way the compliance obligation is presented and cross-referenced. The underlying exposure limits — drawn from ICNIRP recommendations — did not change for the HF and VHF/UHF frequencies most amateurs use. What the 2024 revision made clear is that the requirement applies regardless of whether you consider yourself a typical low-power operator.

> [INFO] The full text of the current licence conditions is available from the Ofcom website. The RSGB publishes a concise summary alongside their simplified assessment spreadsheet. Always verify you are using the current version before completing your record.

### When an Assessment is Required

The licence contains a threshold below which no formal assessment is needed. If **both** of the following conditions are met, exclusion zones do not apply and no written record is required for that operating scenario:

- Average EIRP over any 6-minute period is **below 10 W**, and
- Instantaneous peak EIRP is **below 100 W**

Most Intermediate and Full licensees exceed these thresholds during normal operation. A Full licence operator running 100 W into a dipole will produce an EIRP well above 100 W peak. An assessment is therefore required.

> [INFO] The thresholds apply per operating scenario — per antenna at a given site, power level, and frequency. If you change antenna type, move to a different site, or significantly change power, re-run the assessment for the new configuration.

---

## Part 2: The Science — What ICNIRP Actually Limits

ICNIRP (the International Commission on Non-Ionising Radiation Protection) is an independent scientific body that reviews evidence on the biological effects of non-ionising radiation — radio waves, microwaves, visible light, and UV. The exposure guidelines used in the UK are based on ICNIRP recommendations.

### Why Radio Waves Cause Heating

Radio waves, unlike X-rays or gamma rays, do not carry enough energy per photon to ionise atoms or break chemical bonds. Their effect on tissue is **thermal**: the oscillating electric field drives oscillating currents through body tissue, and those currents produce heat. The body can tolerate moderate warming; the risk arises when the rate of energy deposition exceeds the body's ability to dissipate it.

The relevant biological quantity is **Specific Absorption Rate (SAR)** — the rate at which energy is deposited per kilogram of tissue, measured in W/kg. ICNIRP sets a whole-body averaged SAR limit of **0.08 W/kg** for the general public. Measuring SAR directly requires specialised equipment, so in practice compliance is assessed against proxy measures called **reference levels** — field-strength and power-density values that, under worst-case conditions, will not cause SAR to exceed the basic limit.

### The Frequency Dependence

RF absorption varies strongly with frequency, which is why the reference levels are not a single flat number:

- **Below 10 MHz (HF low end):** Absorption efficiency is lower. Wavelengths are long; induced currents in tissue are relatively small. Reference E-field levels are relatively permissive.
- **10–400 MHz (HF high end and VHF):** Absorption peaks in this range. A human body standing on the ground has approximate resonance around 70–80 MHz (where body height is roughly λ/4). ICNIRP sets its most restrictive reference levels across this entire range.
- **Above 1 GHz (UHF, microwave):** Penetration depth decreases. Energy is absorbed in a shallower surface layer. Limits relax from a whole-body SAR perspective, but surface heating of skin and eyes becomes the concern.

### General Public vs Occupational Limits

ICNIRP provides two separate sets of limits. Occupational limits are higher, based on the assumption that trained workers are aware of the risk and can control their exposure. General-public limits are lower, protecting people who may be unaware they are being exposed, including children and people with medical conditions.

The UK amateur licence **always requires compliance with general-public limits** for any location where members of the public might be present. This includes your neighbours' gardens, public pavements adjacent to your antenna, and shared-access areas such as communal building rooftops or allotment paths.

### Reference Levels at Amateur Frequencies

Rather than memorising the full ICNIRP table, it helps to know the values at key amateur bands:

| Amateur band | Frequency | E-field limit (V/m) | Power density limit (W/m²) |
|---|---|---|---|
| 160 m | 1.8 MHz | ~65 | — |
| 80 m | 3.5 MHz | ~46 | — |
| 40 m | 7 MHz | ~33 | — |
| 20 m | 14 MHz | 28 | 2 |
| 15 m | 21 MHz | 28 | 2 |
| 10 m | 28 MHz | 28 | 2 |
| 2 m | 145 MHz | 28 | 2 |
| 70 cm | 433 MHz | 41 | 4.5 |

*Values derived from ICNIRP 1998 general-public reference levels. For HF bands below 10 MHz the E-field limit scales approximately as 87 / √f where f is in MHz. For the 10–400 MHz range the limit is a constant 28 V/m (2 W/m²). Figures are approximate; use the current ICNIRP document for precise values.*

> [INFO] The 10–400 MHz range includes the 20 m, 15 m, 10 m, and 2 m amateur bands. It is also where absorption is at its peak and the reference level is at its tightest. Most compliance calculations for typical HF and VHF operation use the 2 W/m² figure.

---

## Part 3: The Maths — How Compliance Distance is Calculated

The calculation has three stages: find the peak EIRP, apply the duty cycle to get average EIRP, then solve for the distance at which average power density equals the reference level.

### Stage 1: Effective Isotropic Radiated Power (EIRP)

EIRP expresses how much power a real antenna system delivers to free space in its direction of maximum gain, stated as the equivalent power a perfect isotropic (equal in all directions) point source would need to produce the same field strength at that distance.

> **EIRP = PEP × G_linear / L_linear**

Where:
- **PEP** is transmitter peak envelope power in watts
- **G_linear** is antenna gain as a linear ratio: `G_linear = 10^(G_dBi / 10)`
- **L_linear** is feeder loss as a linear ratio: `L_linear = 10^(L_dB / 10)` — this divides the power because loss reduces what reaches the antenna

If your antenna gain is quoted in **dBd** (relative to a half-wave dipole) rather than dBi (relative to isotropic), add 2.15 dB to convert: `G_dBi = G_dBd + 2.15`.

**Example:** 100 W PEP into an antenna with 10 dBd gain through a feeder with 2 dB loss:
- G_dBi = 10 + 2.15 = 12.15 dBi, G_linear = 10^(12.15/10) = 16.4
- L_linear = 10^(2/10) = 1.585
- EIRP = 100 × 16.4 / 1.585 = **1035 W**

### Stage 2: Average EIRP — Applying the Duty Cycle

ICNIRP limits apply to **averaged exposure over 6 minutes**, not instantaneous peak values. This reflects the thermal model of tissue heating: the body can tolerate brief high-power exposures that would be hazardous if sustained.

Two separate factors reduce the average EIRP below the peak value:

**Mode duty factor (d_mode):** The fraction of time the transmitter produces RF while the PTT is pressed. This depends on the emission mode:

| Mode | Mode duty factor | Notes |
|---|---|---|
| FM | 1.00 | Constant carrier; power does not vary with modulation |
| AM | 0.50–1.00 | Carrier always present; sidebands add power on audio peaks |
| CW | 0.40 | Typical keying ratio — mix of dots, dashes, and spaces |
| SSB voice | 0.20 | Only present during speech peaks; silent between words |
| RTTY / PSK | 0.50 | Continuous alternating mark/space or phase shifts |
| FT8 | 0.50 | 15 s TX / 15 s RX in normal operation |

**Transmit fraction (d_tx):** The fraction of the 6-minute window during which PTT is pressed. A typical SSB QSO involves roughly equal talking and listening time, giving d_tx ≈ 0.5. A contest operator calling CQ continuously may reach d_tx = 0.9. An occasional portable station might use d_tx = 0.2.

**Combined duty fraction and average EIRP:**

> **d_total = d_mode × d_tx**

> **EIRP_avg = EIRP_peak × d_total**

### Stage 3: Compliance Distance

In the far field, a transmitter producing EIRP watts distributes power over an expanding sphere. The power density at distance d is:

> **S = EIRP_avg / (4π × d²)**

Rearranging to find the distance where S equals the ICNIRP reference level S_lim:

> **d_compliance = √( EIRP_avg / (4π × S_lim) )**

Any member of the general public must be kept at least this distance from the antenna during transmission.

> [WARNING] The far-field formula becomes unreliable close to the antenna. In the **reactive near-field zone** (roughly d < λ / 2π) field strengths can be substantially higher than the formula predicts. At 14 MHz this zone extends to about 3.3 m from the antenna. At 145 MHz it is about 0.33 m. Never stand next to or touch a transmitting antenna, regardless of what the compliance calculation says.

---

## Part 4: Duty Cycle — The Most Misunderstood Factor

Mode duty and transmit fraction have more effect on compliance distance than almost any other parameter.

Consider an operator running 400 W PEP on 14 MHz SSB. With d_mode = 0.20 (SSB) and d_tx = 0.50 (standard QSO), d_total = 0.10. Only 10% of the peak EIRP contributes to the 6-minute average. Now consider the same 400 W on FM at 145 MHz with d_mode = 1.0 and d_tx = 0.50: d_total = 0.50. That is five times more average EIRP, at the same peak power and operating time.

> [INFO] SSB produces a much smaller compliance zone than FM at the same PEP. This is not a loophole — it reflects genuine biology. The 6-minute averaging window exists precisely because tissue heating is a time-integral process.

### Choosing Realistic Values for the Assessment

When completing the Ofcom or RSGB spreadsheet, use values that accurately represent your actual operating pattern:

- **Contest CW:** d_tx ≈ 0.8–0.9 (near-continuous calling), d_mode = 0.40
- **SSB DX operating:** d_tx ≈ 0.5–0.6, d_mode = 0.20
- **Ragchew FM:** d_tx ≈ 0.4–0.5, d_mode = 1.00
- **Digital (FT8, casual):** d_tx ≈ 0.3 (many idle RX periods), d_mode = 0.50

Using an artificially pessimistic transmit fraction produces an unnecessarily large compliance zone and may lead to unnecessary power reduction. Using an unrealistically low fraction understates actual exposure. Aim for the value that best describes a representative 6-minute period during your normal operating.

---

## Part 5: Worked Example 1 — HF Dipole, 100 W CW

**Setup:** 100 W PEP, CW, 14 MHz (20 m). Half-wave dipole, 1 dB feeder loss. Contest operation — approximately 50% transmit time in 6 minutes.

**Step 1 — Peak EIRP:**
- G = 2.15 dBi (dipole), G_linear = 10^(2.15/10) = 1.64
- L = 1 dB, L_linear = 10^(1/10) = 1.26
- EIRP_peak = 100 × 1.64 / 1.26 = **130 W**

**Step 2 — Average EIRP:**
- d_mode (CW) = 0.40, d_tx = 0.50 → d_total = 0.20
- EIRP_avg = 130 × 0.20 = **26 W**

**Step 3 — Compliance distance:**
- S_lim at 14 MHz = 2 W/m²
- d = √(26 / (4π × 2)) = √(26 / 25.1) = √1.04 = **1.02 m**

**Result:** The compliance distance in the main-beam direction is approximately **1 m**. For a horizontal dipole erected at 7 m or more, no accessible ground-level area will fall within this zone. No access restriction is needed.

> [INFO] A compliance distance under 1 m often surprises operators who expect tighter numbers. It reflects the combination of modest dipole gain, a low CW duty cycle, and a fairly permissive 2 W/m² reference level at HF. The Ofcom spreadsheet will give a slightly different answer due to additional near-field and height corrections, but the order of magnitude is correct.

---

## Part 6: Worked Example 2 — VHF FM, 50 W Yagi

**Setup:** 50 W PEP, FM, 145 MHz (2 m). 9-element Yagi with 12 dBi gain, 2 dB feeder loss. Typical local ragchew — 50% transmit time.

**Step 1 — Peak EIRP:**
- G_linear = 10^(12/10) = 15.85
- L_linear = 10^(2/10) = 1.585
- EIRP_peak = 50 × 15.85 / 1.585 = **500 W**

**Step 2 — Average EIRP:**
- d_mode (FM) = 1.00, d_tx = 0.50 → d_total = 0.50
- EIRP_avg = 500 × 0.50 = **250 W**

**Step 3 — Compliance distance:**
- S_lim at 145 MHz = 2 W/m²
- d = √(250 / (4π × 2)) = √(250 / 25.1) = √9.96 = **3.15 m**

**Result:** The compliance distance in the forward direction is approximately **3.1 m**. A 50 W FM station with a 9-element Yagi has a compliance zone roughly three times larger than the 100 W CW dipole — primarily because FM is a continuous-carrier mode.

> [WARNING] The 3.1 m zone applies in the **Yagi's forward direction**. If the beam is aimed toward a neighbour's garden or a public road, that 3.1 m must be clear of people during transmission. Angling the beam upward or away from inhabited areas is usually the simplest solution.

---

## Part 7: Worked Example 3 — High-Power HF Beam, 400 W SSB

**Setup:** 400 W PEP, SSB, 14 MHz. 3-element Yagi, 8 dBd = 10.15 dBi gain, 1 dB feeder loss. Active DX operator — 60% transmit time.

**Step 1 — Peak EIRP:**
- G_linear = 10^(10.15/10) = 10.35
- L_linear = 10^(1/10) = 1.26
- EIRP_peak = 400 × 10.35 / 1.26 = **3286 W**

**Step 2 — Average EIRP:**
- d_mode (SSB) = 0.20, d_tx = 0.60 → d_total = 0.12
- EIRP_avg = 3286 × 0.12 = **394 W**

**Step 3 — Compliance distance:**
- S_lim at 14 MHz = 2 W/m²
- d = √(394 / (4π × 2)) = √(394 / 25.1) = √15.7 = **3.96 m**

**Result:** Approximately **4 m** in the beam's forward direction. For most installations, an HF beam is mounted above head height and aimed horizontally — the 4 m forward zone passes well above any ground-level accessible area. However, this must be checked against your specific site geometry.

> [WARNING] At 1000 W PEP (the Full licence maximum), the same antenna and duty cycle gives EIRP_avg ≈ 985 W and d ≈ **6.3 m**. A kilowatt station with a gain antenna can produce a compliance zone that extends beyond a small urban garden boundary. Use the Ofcom or RSGB calculator to find the combination of power, gain, height, and operating mode that keeps the exclusion zone within your property — or demonstrate that the forward beam path does not cross any accessible ground-level area.

---

## Part 8: Practical Guidance — Keeping Within the Limits

Understanding the maths lets you see which levers to use when the compliance distance is too large.

### Raise the Antenna

Height is the most effective tool. A beam at 10 m height projects its 4 m forward compliance zone at 10 m altitude — it reaches the ground at a horizontal distance of approximately 26 m. No one on the ground is within the zone. The same beam at 3 m might sweep through an adjacent garden at close range. A few metres of additional mast height can move the entire compliance zone out of accessible areas without any power reduction.

### Reduce Power

Compliance distance scales with the **square root** of average EIRP. Halving the power reduces the compliance distance by a factor of √2 ≈ 1.4 (a 30% reduction). To halve the compliance distance, you would need to reduce power to one quarter. Power reduction is less efficient than raising the antenna, but useful when height is limited.

### Choose Your Mode

Switching from FM to SSB for a given session dramatically reduces average EIRP at the same PEP. An SSB duty factor of 0.20 compared to FM's 1.00 means a 50 W SSB station has a similar compliance distance to a 10 W FM station using the same antenna and transmit fraction.

### Point the Antenna Carefully

Yagis have significant front-to-back ratios — typically 20–30 dB. The compliance distance applies in the **forward direction only**. Off the back and sides, field strengths are much lower. If the beam is pointed toward open sky, an uninhabited field, or the sea, the forward zone may never cross accessible ground. Document this geometry clearly in your record.

### Restrict Access

If the compliance zone cannot be contained within your property boundary by engineering means, you may physically restrict access — fencing, locked gates, clear signage warning of RF exposure during transmissions. This requires ongoing enforcement and is harder to document convincingly. Engineering a compliant installation is generally preferable.

### Record-Keeping Requirements

Keep a record for each distinct configuration: antenna type, gain, height, feeder loss, band, mode, power level, operating pattern (transmit %), and the calculated compliance distance. A completed Ofcom or RSGB spreadsheet with your station parameters, dated and retained, satisfies Condition 9-6. Update it whenever you change antenna, power level, or site.

> [INFO] The record is for your own evidence file. It does not need to be audited by Ofcom. A single A4 printout with the parameters filled in and your signature is perfectly sufficient. If a complaint is ever raised, this record demonstrates that you have taken the obligation seriously.

---

## Interactive Calculator

Use the embedded tool below to explore compliance distances for your own station parameters. Enter your band, power level, antenna gain, feeder loss, emission mode, and transmit percentage to see the compliance distance in real time.

<iframe src='/interactives/full-emf-compliance-distance.html' style='width:100%; height:750px; border:1px solid #1e293b; border-radius:8px; display:block;' loading='lazy' title='EMF Compliance Distance Calculator'></iframe>

---

## Summary

- **Condition 9-1** of the UK amateur licence requires ICNIRP general-public exposure limits to be met at all locations accessible to non-amateurs.
- **A written assessment is required** whenever instantaneous EIRP exceeds 100 W or average EIRP exceeds 10 W over any 6-minute period.
- EIRP (peak) = PEP × G_linear / L_linear.
- Average EIRP = peak EIRP × mode duty factor × transmit fraction.
- Compliance distance = √( EIRP_avg / (4π × S_lim) ).
- SSB has a far lower duty factor than FM — compliance zones for SSB are significantly smaller at the same PEP.
- Height, mode choice, power level, and beam direction are all levers for achieving compliance.
- **Keep a written record** (Condition 9-6). The Ofcom or RSGB spreadsheet with your parameters filled in is sufficient.

---

## Sources

The following were used in preparing this sideband:

- **ICNIRP (1998):** *Guidelines for Limiting Exposure to Time-Varying Electric, Magnetic and Electromagnetic Fields (up to 300 GHz).* Health Physics 74(4):494–522. The reference levels at HF and VHF cited in this sideband are drawn from this document.
- **ICNIRP (2020):** *2020 Guidelines for Limiting Exposure to Electromagnetic Fields (100 kHz to 300 GHz).* Health Physics 118(5):483–524. Revised limits for higher frequencies; the HF and VHF reference levels used in UK amateur assessment are unchanged from 1998.
- **Ofcom:** *UK Amateur Radio Licence — Terms, Conditions and Limitations.* Current version available from ofcom.org.uk. Conditions 9-1 and 9-6 form the legal basis for the assessment requirement.
- **Ofcom:** *EMF Compliance Assessment Spreadsheet.* Available from the Ofcom amateur radio pages alongside the licence guidance. The recommended tool for completing your compliance record.
- **RSGB:** *The Radio Communication Handbook.* Current edition. Chapters on licence conditions and EMF assessment provide supporting context.
- **RSGB:** *EMF Assessment Guidance and Simplified Spreadsheet.* Available from the RSGB website. A more accessible version of the Ofcom tool suitable for typical amateur installations.

*This sideband presents EMF compliance assessment in educational terms to support understanding of the legal obligation. It is not a substitute for completing an actual assessment with the current Ofcom or RSGB tool, and does not constitute legal or regulatory advice. Always verify against the current licence conditions published by Ofcom.*
