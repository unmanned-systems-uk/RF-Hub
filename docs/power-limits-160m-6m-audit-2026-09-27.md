# 160 m + 6 m Power Limits — Ofcom 2024 Verification (2026-09-27)

**Audited by:** RFH-Docs | Task 4372bbde-ec94-47d0-ad23-73a3a8ddc7f3
**Do not edit HTML from this note** — Master routes the fix to Frontend/LessonsBuilder.

## Source

**Ofcom, *Amateur Radio Wireless Telegraphy Licence Conditions Booklet*, OFW611, published 21 February 2024.** Schedule 1, page 14 onward: Table A (Foundation), Table B (Intermediate), Table C (Full). Figures below are transcribed in our own words from the table rows for 1810–2000 kHz and 50–52 MHz; no verbatim table text reproduced beyond the numeric limits themselves, which are facts, not copyrightable expression.

Document currently linked from `study/index.html` line 295 as "Ofcom Amateur Radio Licence document" — correct source, just worth noting for whoever routes the fix that OFW611 is the specific booklet to re-check against if Ofcom republish.

## Correct figures (Max Peak Envelope Power)

### 160 m (1.810–2.000 MHz)

| Segment | Foundation | Intermediate | Full |
|---|---|---|---|
| 1810–1830 kHz (Primary) | 25 W (13.98 dBW) | 100 W (20 dBW) | **1000 W (30 dBW)** |
| 1830–1850 kHz (Primary) | 25 W (13.98 dBW) | 100 W (20 dBW) | **1000 W (30 dBW)** |
| 1850–2000 kHz (Secondary) | **25 W (13.98 dBW)** | 32 W (15 dBW) | 32 W (15 dBW) |

### 6 m (50–52 MHz)

| Segment | Foundation | Intermediate | Full |
|---|---|---|---|
| 50–51 MHz (Primary) | 25 W (13.98 dBW) | 100 W (20 dBW) | **1000 W (30 dBW)** |
| 51–52 MHz (Secondary) | 25 W (13.98 dBW) | 100 W (20 dBW) | 100 W (20 dBW) |

**Key point:** there is no special 400 W case for Full on either band. Full licence on both 160 m and 6 m primary segments gets the same 1000 W (30 dBW) as most other primary HF/VHF bands. The pre-2024 licence did have a 400 W (26 dBW) Full limit here, but that was superseded on 21 Feb 2024.

## Site audit — every line that needs changing

**`frontend/pages/sidebands/uk-spectrum-band-plan.html`**

| Location | Current | Correct | Issue |
|---|---|---|---|
| ~line 507, 160 m table, Full/Primary | 400 W | **1000 W** | Wrong — uses pre-2024 figure |
| ~line 505, 160 m table, Foundation/Secondary | 32 W max | **25 W** | Wrong — Foundation cannot exceed 25 W on any segment; 32 W secondary cap is an Intermediate/Full-only allowance |
| ~line 1029, 6 m table, Full/Primary | ~400 W | **1000 W** | Wrong — same pre-2024 figure, also should drop the "~" (it's an exact regulatory limit, not approximate) |
| ~line 1312, "Power Limits at a Glance", 160 m primary, Full | 400 W | **1000 W** | Wrong, same root cause |
| ~line 1312, "Power Limits at a Glance", 160 m secondary, Foundation | 32 W | **25 W** | Wrong, same root cause as the per-band table |
| ~line 1323, "Power Limits at a Glance", 6 m primary, Full | ~400 W | **1000 W** | Wrong, same root cause |

All other cells in both the per-band tables and the "at a Glance" table for these two bands (Foundation/Intermediate on both segments; Full on the 160 m and 6 m *secondary* segments) already match Ofcom and don't need changing.

**`frontend/pages/study/intermediate/section-1-licensing.html`**

Line ~996 callout is **correct as written**: the post-2024 general Full-licence primary-band limit of 30 dBW (1000 W) does apply to 160 m, and the pre-2024 1.810–1.830 MHz special case (30 dBW island inside an otherwise 26 dBW/400 W band) has indeed been folded into the general rule. No change needed here — this page is the one telling the truth; the band-plan page is the one that's wrong.

**`frontend/pages/study/intermediate/section-3-transmitters.html`**

Line ~1031 callout: "A Full-licence HF linear running 400 W at 60% efficiency draws P_in = 667 W..." — the *arithmetic* is fine as a worked example (400 W is a legitimate power level to illustrate PA dissipation, well within the Full 1000 W ceiling), but as flagged, it reads like 400 W is presented as *the* Full-licence limit, which will now directly contradict the corrected band-plan page. Suggest rewording along the lines of:

> "A Full-licence HF linear running at, say, 400 W (well within the 1000 W Full-licence primary-band limit) at 60% efficiency draws P_in = 667 W from the PSU and dissipates 267 W as heat."

This keeps the worked example (400 W chosen for round numbers, not because it's a regulatory ceiling) and makes clear it isn't citing the licence limit.

## Date labelling ("Post-February 2024" vs "1 September 2024")

Both dates are correct but refer to two different events — not a conflict, just worth a one-line clarification if Frontend is touching this section anyway:

- **21 February 2024**: Ofcom published OFW611 and the new power limits/licence conditions took legal effect immediately.
- **1 September 2024**: RSGB began *examining* to syllabus v1.6, which was updated to reflect the new licence conditions. Ofcom had allowed RSGB a 6-month transition window to update training material and exams.

So `uk-spectrum-band-plan.html`'s "Power Limits at a Glance (Post-February 2024)" heading is accurate — the limits themselves date from February. The "exam syllabus was updated from 1 September 2024" line (~333) is also accurate, describing a different milestone. No fix needed, just flagging so nobody "corrects" one date to match the other.

## Copyright note

Per the third-party-source rule, this note quotes no Ofcom table text verbatim — only the numeric limits (facts) transcribed in our own descriptions, with the source document/table cited above for anyone who wants to check the primary source directly.
