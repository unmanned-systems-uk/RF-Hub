# Blog 1.0 — Remote End-Fed Wire Antennas for SDR Reception

## Master Index & Progress Tracker

**Project:** RF-Hub Blog Series — First entry
**GitHub Issue:** [#13](https://github.com/unmanned-systems-uk/RF-Hub/issues/13)
**Status:** Pre-build editorial drafting — ALL FOUR POINTS COMPLETE
**Started:** 2026-03-24
**Last updated:** 2026-03-24

---

## Directory Structure

```
docs/blog-1.0/
├── BLOG-1.0-INDEX.md          ← this file
├── drafts/
│   ├── point-1-feedpoint-location-v2.md    [v2 — REVIEW]
│   ├── point-2-rf-environment-draft.md     [v1 — REVIEW]
│   ├── point-3-orientation-draft.md        [v1 — REVIEW]
│   ├── point-4-counterpoise-draft.md       [v1 — REVIEW]
│   ├── blog-1.0-why-remote-discussion.md   [v1 — SUPERSEDED by individual points]
│   └── html-skeleton.html                  [SKELETON — awaits real content]
├── concepts/
│   └── terrain-propagation-tool-concept.md [v1 — CONCEPT]
├── checklists/
│   └── phase2-lwhf160-checklist.md         [v1 — READY]
└── assets/
    └── (photos, screenshots, NanoVNA exports — post-build)
```

**Frontend file (skeleton):**
`frontend/pages/blog/remote-efhw-reception.html`

---

## Document Register

| # | Document | Location | Version | Status |
|---|----------|----------|---------|--------|
| 1 | Point 1 — Feedpoint Location | `drafts/point-1-feedpoint-location-v2.md` | v2 | Ready for review |
| 2 | Point 2 — RF Environment | `drafts/point-2-rf-environment-draft.md` | v1 | Ready for review |
| 3 | Point 3 — Antenna Orientation | `drafts/point-3-orientation-draft.md` | v1 | Ready for review |
| 4 | Point 4 — Counterpoise | `drafts/point-4-counterpoise-draft.md` | v1 | Ready for review |
| 5 | HTML Skeleton | `drafts/html-skeleton.html` | v3 | Skeleton only — awaits real content |
| 6 | Why Remote (discussion notes) | `drafts/blog-1.0-why-remote-discussion.md` | v1 | Superseded by Points 1–4 |
| 7 | Phase 2 Shot List & Checklist | `checklists/phase2-lwhf160-checklist.md` | v1 | Ready for session |
| 8 | Terrain Propagation Tool Concept | `concepts/terrain-propagation-tool-concept.md` | v1 | Concept only |

---

## Progress — Editorial Sections

### Pre-Build Writing (current phase)

| Section | Content | Status | Notes |
|---------|---------|--------|-------|
| Point 1: Feedpoint Location | Why 100m, honest vs engineering reasons, mast specs, split-level house, terrain intro | ✅ v2 drafted | Tone-setter — sets editorial voice |
| Point 2: RF Environment | Household noise, conducted vs radiated, granite walls, Ethernet breaks noise path | ✅ v1 drafted | Key insight: conducted > radiated |
| Point 3: Antenna Orientation | Null placement, Config A vs B, valley geometry, polarisation, terrain analysis | ✅ v1 drafted | Blog 2.0 rotation experiment teed up |
| Point 4: Counterpoise | Counterpoise theory, near-house problems, clean remote counterpoise, experiments | ✅ v1 drafted | Killer argument — delivers on Points 1–3 setup |

### Post-Build Content (awaiting practical session)

| Section | Content | Status | Dependencies |
|---------|---------|--------|-------------|
| Unboxing & inspection | LWHF-160 product photos and initial impressions | ⬜ Awaiting build | Hardware in hand |
| Bench measurements | NanoVNA S11 sweeps of UNUN and antenna pre-deployment | ⬜ Awaiting build | NanoVNA calibrated |
| Deployment documentation | Mast installation, wire routing, counterpoise, photos | ⬜ Awaiting build | Mast + antenna installed |
| Post-deployment measurements | S11 sweeps deployed, SWR, Smith Chart screenshots | ⬜ Awaiting build | Antenna deployed |
| SDR reception tests | Waterfall captures, noise floor comparison, signal examples | ⬜ Awaiting build | SDR operational |
| Drone survey | Heights, slope angles, terrain profile, aerial photos | ⬜ Awaiting build | Drone available |
| Final editorial assembly | Merge Points 1–4 + practical content into HTML | ⬜ Awaiting all above | All content ready |

---

## Progress — Spin-Off Projects

| Project | Document | Status | Priority |
|---------|----------|--------|----------|
| Terrain Propagation Tool | `concepts/terrain-propagation-tool-concept.md` | Concept drafted | High — Phase A buildable now |
| Blog 2.0 — Dipole Migration | (not started) | Teed up in Points 1 & 3 | After Blog 1.0 published |
| Blog 2.0 — 90° Rotation Experiment | (not started) | Teed up in Point 3 | After Blog 1.0 published |
| WSPR Receive Integration | Mentioned in terrain tool concept | Not started | Requires remote SDR operational |

---

## Confirmed Site & Equipment Details

### Location
- **Region:** Valley in the Scottish Borders
- **Terrain:** Tweed valley, Moorfoot Hills to north, Southern Uplands to south
- **Valley axis:** Roughly east–west
- **House:** Old stone-built, 2–4m thick walls, high granite content
- **RF characteristics:** WiFi and 433/868 MHz do not penetrate walls
- **Split level:** House ground floor one storey below garden level
- **Solar panels:** No

### Antenna — Feedpoint (north, mast)
- **Mast:** Moonraker LMA-L, 6-section aluminium telescopic, ~10m (33ft) extended, 2.2m collapsed, 6kg
- **Wire orientation:** N→S (feedpoint at mast, non-feed end at house chimney)
- **Broadside alignment:** East–west (along valley axis)

### Antenna — LWHF-160
- **Product:** Moonraker LWHF-160
- **Type:** End-fed long wire, non-resonant
- **Wire length:** 41.7m
- **UNUN:** 9:1, SO239 connector
- **Coverage:** 160m–6m (1.8–50 MHz) inc. WARC bands
- **Power rating:** 400W (irrelevant for RX-only)
- **Ground terminal:** Screw connection for earth rod / counterpoise

### Antenna — EFHW
- **Product:** BH7JYR 4-band EFHW
- **Type:** End-fed half-wave, resonant
- **Wire length:** ~20m (half-wave at 7 MHz)
- **UNUN:** 1:64
- **Coverage:** 40/20/15/10m (7, 14, 21, 28 MHz)

### SDR & Compute
- **SDR:** RTL-SDR Blog V4 (primary), HackRF One/Pro (optional)
- **Compute:** Raspberry Pi 4 or 5
- **Power:** PoE (802.3af/at, ~100m cable run — at spec limit)
- **Enclosure:** Hammond 1550 series, IP66, die-cast aluminium
- **Cable:** Cat6 outdoor-rated Ethernet, ~100m routed

### Measurement Equipment
- **Spectrum analyser:** Rigol RSA5065N (with VNA capability)
- **NanoVNA:** Two units (model numbers to be confirmed)
- **Drone:** Available for height measurement and aerial photography

### Operator
- **Licence status:** Working towards UK Foundation licence
- **Development philosophy:** AI-transparent, experimentation drives content

---

## Open Questions

| # | Question | Status | Affects |
|---|----------|--------|---------|
| 1 | ~~Foundation licence status~~ | ✅ Working towards it | Point 1 text |
| 2 | ~~Wire routing direction~~ | ✅ Mast (feedpoint) → house (non-feed end) | Points 1, 3 |
| 3 | ~~Garden faces which direction~~ | ✅ North (towards Moorfoot Hills) | Point 3 geometry |
| 4 | ~~Solar panels~~ | ✅ No | Point 2 noise sources |
| 5 | ~~SDR noise observation near house~~ | ✅ Not yet — Phase 2 | Point 2, checklist |
| 6 | ~~BH7JYK vs BH7JYR~~ | ✅ BH7JYR confirmed | Product references |
| 7 | ~~LWHF-160 frequency range~~ | ✅ 160m–6m confirmed | Product references |
| 8 | Exact lat/lon for antenna location | ⬜ Needed for terrain tool | Terrain analysis |
| 9 | Maidenhead grid square | ⬜ Derivable from lat/lon | WSPR queries |
| 10 | Chimney height (estimate before drone) | ⬜ Needed for slope angle | Point 1, Point 3 |
| 11 | NanoVNA model numbers and firmware | ⬜ Needed for measurement docs | Phase 2 checklist |
| 12 | Google Elevation API key for RF-Hub | ⬜ Needed for terrain tool Phase A | Terrain tool |
| 13 | Soil type at mast location (clay, loam, peat?) | ⬜ Affects earth rod performance | Point 4 experiments |
| 14 | Depth to bedrock at mast location | ⬜ Affects earth rod length | Point 4 experiments |
| 15 | Common-mode choke at feedpoint — belt-and-braces or unnecessary? | ⬜ Design decision | Point 4, enclosure design |

---

## Changelog

| Date | Change |
|------|--------|
| 2026-03-24 | Project initiated. Points 1–3 drafted. HTML skeleton created. |
| 2026-03-24 | Distance updated from 25m to 100m (routed). Coax loss table recalculated. |
| 2026-03-24 | Location confirmed: Scottish Borders, Tweed valley, N→S wire orientation. |
| 2026-03-24 | Terrain propagation tool concept documented. |
| 2026-03-24 | Directory structure created. Master index established. |
| 2026-03-24 | Migrated all files to D:\live_code\RF-Hub\docs\blog-1.0\ |
| 2026-03-24 | Point 4 (Counterpoise) v1 drafted. All pre-build editorial text complete. |
| 2026-03-26 | GitHub Issue #13 created. Linked in master index. |
