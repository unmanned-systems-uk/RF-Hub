# Sideband: UK Callsigns & Regional Secondary Locators

**Tags:** `[F]` `[I]` `[FL]`
**RSGB Refs:** 1H1 (Full), 1B (Intermediate)
**Cross-refs:** <a href="../study/full/section-1-licence-conditions.html#1h--schedule-1-callsigns-and-operating-conditions-1h1" target="_blank">Full §1H — Callsigns & Schedule 1</a> · <a href="../study/intermediate/section-1-licensing.html#1b-theory--uk-callsign-structure" target="_blank">Intermediate §1B — Callsign Structure</a> · <a href="phonetic-alphabet.html" target="_blank">NATO Phonetic Alphabet</a>
**Series:** Sideband — Topic Snippets for RF-Hub

---

A UK amateur radio callsign tells you three things at a glance: **which licence class** the holder holds, **which region** of the UK they are in (or the legacy region their callsign was issued for), and **how they are currently operating** (via a suffix). Once you can decode the pattern, every callsign on the band tells a story.

This sideband is a complete reference for the current UK callsign system, including the post-2024 Ofcom licence update. An interactive parser — enter any UK callsign to decode it — is embedded below. [VERIFY parser availability]

---

<!-- INTERACTIVE: uk-callsign-parser
Widget: /interactives/uk-callsign-parser.html
Input: text field for any UK callsign (with optional suffix e.g. M0ABC/P)
Output: licence class (Foundation/Intermediate/Full), region, RSL decoded, suffix meaning, validity check
UI: inline result panel below input, no page navigation
Note: Frontend building this widget in parallel. Embed via iframe when ready.
-->

<iframe src="/interactives/uk-callsign-parser.html" style="width:100%; height:260px; border:1px solid #1e293b; border-radius:8px; display:block;" loading="lazy" title="UK Callsign Parser"></iframe>

---

## Callsign Structure

All UK amateur callsigns follow the same pattern:

```
[PREFIX] [DIGIT] [LETTERS] / [OP-SUFFIX]
  │        │        │            │
  │        │        │            └─ /M /P /A /MM /AM /T (optional)
  │        │        └─ 2–3 personal letters
  │        └─ encodes licence class (see table)
  └─ encodes region (M=England, MM=Scotland, MW=Wales, etc.)
```

**Example:** `MM7ABC/P`
- `MM` = Scotland (modern M-series, Scottish prefix)
- `7` = Foundation licence
- `ABC` = personal suffix
- `/P` = operating portable (e.g. SOTA summit)

---

## Prefix and Digit — Licence Class

The digit in the callsign encodes the licence class. In the modern M-series:

| Digit | Class | Prefix examples |
|-------|-------|----------------|
| **0** | Full | M0, MM0, MW0, MI0, MD0, MJ0, MU0 |
| **1** | Full | M1 [VERIFY — less commonly assigned] |
| **5** | Full | M5 [VERIFY — modern Full allocation] |
| **3** | Foundation | M3, MM3, MW3, MI3, MD3, MJ3, MU3 |
| **6** | Foundation | M6, MM6, MW6, MI6, MD6, MJ6, MU6 |
| **7** | Foundation | M7, MM7, MW7, MI7, MD7, MJ7, MU7 |
| **8** | Intermediate | M8 (England only — new 2023 series) [VERIFY regional variants] |
| **9** | Intermediate | M9 (England only — new 2023 series) [VERIFY regional variants] |

> **Note:** Digits 2 and 4 are not allocated in the current M-series. [VERIFY]

**Legacy G-series (still valid — these callsigns were issued before the M-series):**

| Legacy prefix | Class | Notes |
|--------------|-------|-------|
| G0, G3, G4 | Full — England | Pre-M-series; holder may have sat exam decades ago |
| G6, G7 | Full — England | Later G-series allocations [VERIFY digit/class mapping] |
| GM0, GM3, GM4 | Full — Scotland | Legacy G-series, Scottish prefix |
| GW0, GW3, GW4 | Full — Wales | Legacy G-series, Welsh prefix |
| GI0, GI3, GI4 | Full — N. Ireland | Legacy G-series |
| GD0, GD3, GD4 | Full — Isle of Man | Legacy G-series |
| GJ0, GJ3, GJ4 | Full — Jersey | Legacy G-series |
| GU0, GU3, GU4 | Full — Guernsey | Legacy G-series |
| 2E0, 2E1 | Intermediate — England | Legacy intermediate series, still in widespread use |
| 2M0, 2M1 | Intermediate — Scotland | Legacy 2-series |
| 2W0, 2W1 | Intermediate — Wales | Legacy 2-series |
| 2I0, 2I1 | Intermediate — N. Ireland | Legacy 2-series |
| 2D0 | Intermediate — Isle of Man | Legacy 2-series |
| 2J0 | Intermediate — Jersey | Legacy 2-series |
| 2U0 | Intermediate — Guernsey | Legacy 2-series |

> [VERIFY] The complete digit-to-class mapping for legacy G-series (G0 vs G3 vs G6 vs G7) against current Ofcom records — the mapping has evolved over decades of callsign assignments.

---

## Regional Secondary Locators (RSLs)

The **Regional Secondary Locator** is the letter (or letters) in the prefix that identifies the region. In the modern M-series the RSL is built into the prefix letter:

| Region | Modern prefix | Legacy RSL (G-series) | Legacy RSL letter(s) |
|--------|--------------|----------------------|----------------------|
| **England** | M | G | G (none added) |
| **Scotland** | MM | GM | M |
| **Wales** | MW | GW | W |
| **Northern Ireland** | MI | GI | I |
| **Isle of Man** | MD | GD | D |
| **Jersey** | MJ | GJ | J |
| **Guernsey** | MU | GU | U |

The RSL indicates where the **callsign was issued** (for G-series) or where the **operator is licensed** (for M-series). For the modern M-series, the prefix letter already encodes the region — a Scotland-licensed Foundation holder is MM7, not M7.

> **RSL accuracy is a licence condition.** When the RSL is used, it must be correct for the location of the transmission (licence clause 6-23). Using an incorrect RSL (e.g. claiming MM when you are actually in England) is a breach of licence conditions.

### RSL Reference Table

| RSL | Region | Modern equivalent | Example (legacy) | Example (modern) |
|-----|--------|------------------|-----------------|-----------------|
| G | England | M | G4ABC | M0ABC |
| GM | Scotland | MM | GM0XYZ | MM0XYZ |
| GW | Wales | MW | GW4DEF | MW0DEF |
| GI | Northern Ireland | MI | GI4JKL | MI0JKL |
| GD | Isle of Man | MD | GD3MNO | MD3MNO |
| GJ | Jersey | MJ | GJ3PQR | MJ3PQR |
| GU | Guernsey | MU | GU3STU | MU3STU |

---

## Callsign Suffixes — Operating Location Modifiers

A suffix after a forward-slash indicates **how or where** you are currently operating. Under the 2024 licence update, formal suffix definitions were removed from the licence document — but the following suffixes remain in established use and exam questions test them [VERIFY current licence document status]:

| Suffix | Spoken as | Meaning | When to use |
|--------|-----------|---------|-------------|
| **/M** | "stroke Mobile" | Mobile — operating from a moving or stopped vehicle, or on foot | Car, motorcycle, walking with a handheld |
| **/P** | "stroke Portable" | Portable — temporary location with a postal/physical address | SOTA summit, POTA park, contest field, hilltop with a postcode |
| **/A** | "stroke Alpha" or "stroke Alternative" | Alternative premises — a different fixed address from your licence address | Friend's house, hotel room, holiday cottage, club shack |
| **/MM** | "stroke Maritime Mobile" | Maritime mobile — on a vessel at sea | Yacht, cargo vessel, ferry in open water |
| **/AM** | "stroke Aeronautical Mobile" | Aeronautical mobile — airborne | Aircraft; **max 500 mW EIRP; primary amateur bands only** [VERIFY post-2024 conditions] |
| **/T** | "stroke Temporary" | Temporary location [VERIFY — may overlap with /P or /A in current licence] | Historically: temporary fixed operation; check current guidance |

### Situation Guide

| Where you are operating | Suffix |
|------------------------|--------|
| Your licence address (home) | None |
| Garden or shed at same address | None |
| Parked car | /M |
| Car in motion | /M |
| Walking with a handheld | /M |
| SOTA or POTA activation (named summit/park) | /P |
| Contest from a field with a postcode | /P |
| Friend's house or holiday cottage | /A |
| Hotel or temporary accommodation | /A |
| Canal boat (inland waterway) | /M |
| Yacht in open sea (international waters) | /MM |
| Commercial aircraft | /AM |

> **On CW:** The "/" is sent as **−··−·** (dah-dit-dit-dah-dit), the internationally recognised fraction bar prosign. Spoken on voice as "stroke" (UK convention) or "slash" (informal).

> **2024 update note:** The 2024 Ofcom licence revision removed formal suffix definitions from the licence document itself. The standard suffixes above are still used in practice and are tested in exams. [VERIFY] against the current licence document for any changes to how they are described or required.

---

## Worked Examples — Decoding Real Callsigns

### G0HIQ

| Element | Decoded |
|---------|---------|
| **G** | England (legacy G-series, no RSL letter inserted) |
| **0** | Full licence |
| **HIQ** | Personal suffix |
| **Full read:** | Full-licence holder in England; callsign issued in the pre-M-series era |

---

### 2E0ABC

| Element | Decoded |
|---------|---------|
| **2** | Intermediate licence (legacy 2-series) |
| **E** | England (RSL) |
| **0** | Issued from the first Intermediate block |
| **ABC** | Personal suffix |
| **Full read:** | Intermediate-licence holder in England; callsign predates the M8/M9 series introduced in 2023 |

---

### MM7XYZ/P

| Element | Decoded |
|---------|---------|
| **MM** | Scotland (modern M-series) |
| **7** | Foundation licence |
| **XYZ** | Personal suffix |
| **/P** | Currently operating portable |
| **Full read:** | Scotland-licensed Foundation holder, on a portable activation (e.g. SOTA Munro summit) |

---

### M6ABC/MM

| Element | Decoded |
|---------|---------|
| **M** | England (modern M-series) |
| **6** | Foundation licence |
| **ABC** | Personal suffix |
| **/MM** | Currently at sea (maritime mobile) |
| **Full read:** | England-licensed Foundation holder operating from a vessel in open sea; must comply with maritime operating conditions |

---

### GB100RSGB

| Element | Decoded |
|---------|---------|
| **GB** | Special event / commemorative prefix |
| **100** | Numeric element (centenary indicator) |
| **RSGB** | Event identifier |
| **Full read:** | Commemorative special event callsign marking the RSGB centenary; issued via NoV; operated by a licensed amateur who retains their own callsign for normal operation |

---

## Special and Club Callsigns

### GB — Special Event and Commemorative Callsigns

The **GB prefix** is reserved for special event stations and commemorative operations, issued by Ofcom via a **Notice of Variation (NoV)**. Examples:

- `GB0xxx` — special event station (e.g. airshow, heritage railway, museum)
- `GB2xxx`, `GB4xxx` — club or commemorative
- `GB100RSGB` — RSGB centenary (extended numeric element permitted for commemorative calls)

The Full licence holder who applies for the NoV is legally responsible for the station. They continue to use their own callsign for normal operation — the GB callsign is used only during the special event.

### GX / GZ — Club Callsigns [VERIFY]

Some club stations use GX or GZ prefixes for their assigned club callsigns. The letter following G depends on the region and the specific series assigned at the time of issue. [VERIFY current Ofcom allocation of GX/GZ and their regional scope.]

### MX / MZ [VERIFY]

The MX and MZ prefixes appear in some Ofcom documentation. [VERIFY current allocation and purpose — may be reserved for specific uses or unallocated.]

### Callsign of the Year

The RSGB occasionally designates a specific callsign for use by member clubs or at major events (e.g. `GB4GB` for Jamboree on the Air). These are issued via the normal NoV process.

### Licence Class Progression

When you pass a higher-class exam:
- You **keep your existing callsign** (it doesn't automatically change)
- Your licence is re-issued at the higher class under your existing callsign
- If you want a new callsign matching your new class (e.g. an M0 callsign when you upgrade from M7), you can apply to Ofcom for a new one — this is optional
- Your existing callsign remains valid until you request a change

> Example: M7ABC passes the Full exam. They now operate as M7ABC at Full power with Full privileges. If they later request a new callsign, they might be assigned M0DEF. [VERIFY] current Ofcom process for callsign change on upgrade.

---

## Quick Reference

```
LICENCE CLASS (modern M-series):
  Full:         M0, M1, M5  (England)
                MM0 (Scotland), MW0 (Wales), MI0 (N.Ire),
                MD0 (IoM), MJ0 (Jersey), MU0 (Guernsey)
  Intermediate: M8, M9      (England, new 2023 series)
                2E0, 2E1    (England, legacy)
                2M0 (Scot), 2W0 (Wales), 2I0 (N.Ire)
  Foundation:   M3, M6, M7  (England)
                MM3/6/7 (Scot), MW3/6/7 (Wales), MI3/6/7 (N.Ire)

LEGACY G-SERIES (still valid):
  England:      G + digit (G0, G3, G4, G6, G7...)
  Scotland:     GM + digit
  Wales:        GW + digit
  N. Ireland:   GI + digit
  Isle of Man:  GD + digit
  Jersey:       GJ + digit
  Guernsey:     GU + digit

REGIONAL SECONDARY LOCATORS:
  G=England  GM=Scotland  GW=Wales  GI=N.Ireland
  GD=Isle of Man  GJ=Jersey  GU=Guernsey

OPERATING SUFFIXES:
  /M   Mobile (vehicle, on foot)
  /P   Portable (temporary location)
  /A   Alternative address
  /MM  Maritime mobile (at sea)
  /AM  Aeronautical mobile (500 mW EIRP) [VERIFY]
  /T   Temporary [VERIFY current licence status]
```

---

*Sideband snippets are short-form RF-Hub reference topics. They appear in lessons, blog posts, and the knowledge base.*
