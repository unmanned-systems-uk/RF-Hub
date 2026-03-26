# Wire in the Wind — Remote EFHW Blog
## Blog 1.0: Remote End-Fed Wire Antennas for SDR Reception
### Claude Desktop Project Instructions

## What This Project Covers
This is Blog 1.0 for RF-Hub — the first in a planned series connecting RF theory to practical builds. It documents the design, construction, and measurement of a remote SDR installation with end-fed wire antennas in a Scottish Borders valley.

## Start of Every Chat
1. Read the master index: `D:\live_code\RF-Hub\docs\blog-1.0\BLOG-1.0-INDEX.md`
2. Check the RF-Hub repo for any changes: https://github.com/unmanned-systems-uk/RF-Hub.git
3. Note where we left off in the progress tracker

## Repository & File Locations
- **Repo:** github.com/unmanned-systems-uk/RF-Hub
- **Blog docs (all working files):** `D:\live_code\RF-Hub\docs\blog-1.0\`
- **Master index:** `D:\live_code\RF-Hub\docs\blog-1.0\BLOG-1.0-INDEX.md`
- **HTML skeleton:** `D:\live_code\RF-Hub\frontend\pages\blog\remote-efhw-reception.html`
- **CSS (locked):** `rf-hub-v2.css` — do not modify
- **Template:** `understanding-s11.html` is the canonical layout template

## Current Status & Next Task
**Phase:** Pre-build editorial drafting
**Completed:** Points 1-3 drafted, terrain propagation tool concept documented
**Next task:** Draft Point 4 — Counterpoise (`drafts/point-4-counterpoise-draft.md`)

After Point 4, all pre-build editorial text is complete. Practical build
sessions will then provide photos, measurements, and real-world content.

## Confirmed Site & Equipment

### Location
- Valley in the Scottish Borders (do not name the specific village)
- Tweed valley: Moorfoot Hills north, Southern Uplands south
- Valley axis roughly east-west
- House: old stone-built, 2-4m thick granite walls
- Split level: house ground floor one storey below garden level
- No solar panels. WiFi/433/868 MHz do not penetrate walls.

### Wire Geometry
- Wire runs **N→S**: mast (feedpoint) to north, house chimney (non-feed end) to south
- Broadside (max sensitivity) aligns **east-west** along valley axis
- Null points at house — best orientation for noise rejection
- ~40m line-of-sight, ~100m cable route

### Equipment
- **Mast:** Moonraker LMA-L, 6-section aluminium, ~10m extended, 6kg
- **Antenna 1:** Moonraker LWHF-160 — end-fed long wire, 41.7m, 9:1 UNUN, SO239, 160m–6m
- **Antenna 2:** BH7JYR 4-band EFHW — ~20m, 1:64 UNUN, 40/20/15/10m
- **SDR:** RTL-SDR Blog V4 (primary), HackRF One/Pro (optional)
- **Compute:** Raspberry Pi 4 or 5, PoE powered
- **Enclosure:** Hammond 1550 series, IP66, die-cast aluminium
- **Cable:** Cat6 outdoor-rated Ethernet, ~100m routed (at 802.3af/at PoE limit)
- **Measurement:** Rigol RSA5065N (spectrum analyser + VNA), two NanoVNAs
- **Drone:** Available for height/terrain survey

### Operator
- Working towards UK Foundation amateur radio licence
- AI-transparent development philosophy

## Editorial Guidelines

### Tone & Voice
- First person throughout — this is Anthony's project diary
- Honest about motivations (learning > engineering necessity)
- Technically grounded but not lecturing
- Acknowledges simpler alternatives without being dismissive
- Expects things to go wrong — that's the point (Unsquelched mindset)

### Terminology
- If Anthony uses incorrect RF terminology, gently correct and explain
- UNUN (not UNUM), ferrite (not freight), Amateur (not Armature)
- Support independent reasoning over front-loading answers

### Content Philosophy
- Experimentation drives content, not the reverse (3-hour rule)
- Dual-output: most experiments serve both RF-Hub curriculum and Unsquelched
- Blog gets the clean version; Unsquelched gets the unfiltered reality

## Blog Structure — The Four Arguments

The blog was originally framed around coax loss. Through editorial
development, the real priority order emerged:

1. **Counterpoise integrity** (Point 4) — the killer argument
2. **Noise environment** (Point 2) — conducted > radiated noise
3. **Experimental freedom** (Points 1 & 3) — orientation, counterpoise experiments
4. **Coax loss** (supporting evidence, not the headline)

The HTML skeleton will be restructured to reflect this ordering once all
four Points are finalised.

## Spin-Off Projects (tracked, not blocking)
- **Terrain Propagation Tool** — `concepts/terrain-propagation-tool-concept.md`
  AI-powered terrain analysis + WSPR/beacon data correlation. Phase A buildable now.
- **Blog 2.0 — Dipole Migration** — teed up in Points 1 & 3
- **Blog 2.0 — 90° Rotation Experiment** — teed up in Point 3

## Cross-Project Shared Context
- `D:\live_code\RF-Hub\claude-desktop-project-management\shared-context\01-PROJECT-MAP.md`
- `D:\live_code\RF-Hub\claude-desktop-project-management\shared-context\02-CONTENT-REGISTRY.md`
- `D:\live_code\RF-Hub\claude-desktop-project-management\shared-context\03-EQUIPMENT-TRACKER.md`
- `D:\live_code\RF-Hub\claude-desktop-project-management\shared-context\04-LEARNING-LOG.md`

## Handoff Protocol
- **GitHub Issues** for cross-project handoffs (e.g., curriculum gaps found during blog work)
- **Claude Code** handles website integration of finished blog content
- **Google Calendar** for scheduling outdoor build tasks (weather-dependent)

## Workflow Rules
1. All working documents stay in `D:\live_code\RF-Hub\docs\blog-1.0\`
2. Update `BLOG-1.0-INDEX.md` after every session (status, changelog)
3. Each editorial Point is a separate markdown file in `drafts/`
4. Photos and measurement exports go in `assets/` (post-build)
5. Do not modify `rf-hub-v2.css`
6. Do not integrate HTML via Claude Code until all content is final
7. Flag curriculum concepts as candidates for specific RF-Hub lessons
