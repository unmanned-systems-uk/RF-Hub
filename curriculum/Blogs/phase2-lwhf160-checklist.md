# Phase 2 — Moonraker LWHF-160 Deployment
## Production Checklist & Shot List

### PRE-SESSION: Before You Start

**Hardware check — have these ready:**
- [ ] Moonraker LWHF-160 (still in packaging for unboxing shots)
- [ ] NanoVNA (charged, calibrated, correct firmware noted)
- [ ] Rigol RSA5065N (if doing bench measurements before outdoor deployment)
- [ ] SDR dongle (RTL-SDR Blog V4 or whichever you're connecting)
- [ ] Raspberry Pi + PoE setup (if integrating with remote enclosure)
- [ ] Coax patch lead (UNUN to SDR/VNA — note the connector: LWHF-160 is SO239)
- [ ] Adapters: SO239-to-SMA (for NanoVNA) / SO239-to-whatever-your-SDR-needs
- [ ] Counterpoise wire (quarter-wave or earth rod — note what you use and length)
- [ ] Cable ties, rope/cord for wire support, any mounting hardware
- [ ] Tape measure (for documenting wire routing distances and heights)

**Camera check:**
- [ ] Battery charged, memory card clear
- [ ] Tripod or stable surface for product/bench shots
- [ ] Outdoor lighting conditions considered (overcast is actually ideal for detail shots)

**Software check:**
- [ ] NanoVNA Saver on laptop (for saving S11 sweeps as screenshots + data files)
- [ ] SDR software ready (SDR++, GQRX, or whatever you're using to verify reception)
- [ ] Screen recording running if doing software demos

---

### SHOT LIST

#### A. Unboxing & Inspection (indoor/bench)
1. **Product in packaging** — sealed box, label visible
2. **Contents laid out** — wire coil, UNUN box, any documentation, connectors
3. **UNUN close-up** — the 9:1 box, SO239 connector, ground terminal
4. **Wire close-up** — gauge, insulation type, how it's coiled/packaged
5. **Scale reference** — UNUN next to a ruler or known object for size context
6. **Any markings/labels** — frequency range, power rating, model number

#### B. Pre-Deployment Measurements (bench / NanoVNA)
7. **NanoVNA connected to UNUN** — show the adapter chain (SO239 → SMA)
8. **S11 sweep: UNUN only, no wire attached** — this is your baseline (should be near 0 dB / open circuit across HF)
9. **S11 sweep: UNUN + full wire, indoors/coiled** — shows the antenna is non-resonant when not deployed; interesting comparison for later
10. **Screenshot/save every sweep** — NanoVNA Saver exports both image and touchstone (.s1p) data

> **NOTE TO SELF:** Write down the NanoVNA model number and firmware version.
> This feeds the cross-instrument comparison work planned for RF-Hub.

#### C. Outdoor Deployment
11. **Chosen location — wide shot** — show the garden/space, where the wire will run
12. **UNUN mounting point** — how and where it's fixed (post, bracket, enclosure wall)
13. **Ground/counterpoise connection** — what you connected, how long, where it runs
14. **Wire routing — progress shots** — show the path the 41.7m wire takes (bends, height changes, support points)
15. **Wire end point** — where the far end terminates, insulator if used
16. **Height measurements** — tape measure at highest point and lowest point
17. **Full installation — wide shot** — the complete antenna visible in context
18. **Ethernet/coax route** — the path from UNUN back to the shack/enclosure

#### D. Post-Deployment Measurements (NanoVNA at the feedpoint)
19. **S11 sweep: deployed antenna, full range** — the real measurement
20. **S11 sweep: zoomed into amateur bands** — 40m, 20m, 15m, 10m individually if time allows
21. **Smith Chart view** — at least one screenshot showing impedance behaviour
22. **SWR view** — same sweep displayed as SWR for the blog comparison tables
23. **Screenshot/save all sweeps** — same NanoVNA Saver export routine

> **KEY QUESTION TO ANSWER:** At which frequencies (if any) does the LWHF-160 show
> natural resonance dips? The theory says it shouldn't be resonant anywhere specific,
> but 41.7m of wire will have resonances — documenting where they fall is valuable content.

#### E. SDR Reception Test
24. **Waterfall screenshot — wideband HF** — first impression of what's audible
25. **Specific signal captures** — tune to a known strong signal (broadcast, amateur, utility) and screenshot
26. **Comparison if possible** — same signal on LWHF-160 vs no antenna / vs discone / vs whatever you have available
27. **Audio recording** — even 30 seconds of a decoded signal is good content

#### F. Optional but Valuable
28. **Video walkthrough** — 2-3 minute handheld video walking the wire route, talking through decisions
29. **Time-lapse** — if camera supports it, the deployment process compressed
30. **Night reception** — HF propagation changes dramatically; a later session comparing daytime vs nighttime waterfall would be excellent content

---

### NOTES TO CAPTURE DURING/AFTER SESSION

Write these down on paper or voice-record — we'll shape them in the debrief:

- **What surprised you?** (good or bad)
- **What didn't go as planned?** (this is Unsquelched gold)
- **Wire routing compromises** — where did you have to bend, lower, or reroute?
- **Heights achieved** — actual numbers
- **Counterpoise arrangement** — what you used, any problems
- **Noise floor observation** — is it quieter/noisier than expected?
- **Strongest signals heard** — what bands, what services
- **Any RFI/interference sources** — switch-mode PSUs, LED lights, solar inverters
- **Weather conditions** — matters for later repeatability
- **Time of day** — affects HF propagation significantly
- **Anything you'd do differently next time**

---

### POST-SESSION: What to Bring to the Debrief

1. **All photos** (upload a selection of the best ones)
2. **NanoVNA Saver exports** (screenshots + .s1p files if you have them)
3. **SDR waterfall screenshots**
4. **Your notes / memory of what happened**
5. **Any video clips** worth referencing

We'll use these to fill in the real content for Chapters 1, 2, 5, and 6 of the blog post,
replacing the theoretical placeholders with actual experience.

---

### CURRICULUM TAGS

Concepts encountered during this session that map to RF-Hub lessons:

| Concept | Curriculum Lesson |
|---|---|
| Impedance mismatch / SWR on deployed wire | Lesson 6 (Impedance), Lesson 7 (SWR) |
| S11 measurement technique | Lesson 10 (VNA Lab), Understanding S11 blog |
| Smith Chart interpretation | Lesson 8 (Smith Chart) |
| Non-resonant antenna behaviour | Lesson 15 (Impedance Matching) |
| Common-mode noise / counterpoise | Lesson 15, potential new lesson |
| Coax loss vs remote digitisation | New content — this blog |
