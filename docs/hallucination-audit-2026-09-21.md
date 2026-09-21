# Hallucination Audit — 2026-09-21

**Scope:** `/content/study/intermediate/` + `/content/study/full/` (Foundation not yet written, skipped)
**Grep patterns applied:**
- `— actually:` / `→.*actually` (mid-sentence self-correction)
- `exam answer shows` / `exam says.*but` (conflicting exam-answer references)
- `Full licence` cross-references in Intermediate files (wrong-level content)
- Contradictory factual claims within same passage (manual review)

**Note:** `[VERIFY]` tags throughout Full section files are **intentional editorial flags** (author-placed to indicate regulatory values that need cross-checking before the curriculum is locked). These are NOT hallucinations and are NOT listed below.

---

## Summary

| Severity | Count |
|---|---|
| HIGH (factually wrong, quiz-source area) | 2 |
| MEDIUM (confused explanation or wrong-level content) | 2 |
| LOW (minor / likely intentional) | 3 |
| **Total flagged** | **7** |

---

## HIGH Severity

### H1 — GW1ZTZ callsign stripping (FIXED in commit d8xxxxx)

**File:** `content/study/intermediate/section-1-licensing.md`
**Original lines:** 251–256 (pre-fix)

**Extracted passage (original):**
```
**Example:** An Intermediate (2E1CYL) is in your shack. Your friend GW1ZTZ (Full Welsh)
is visiting. GW1ZTZ can operate at Full power in England using their callsign without the
regional prefix → **G1ZTZ** (Full licence, England, using the home nation call without prefix
correction — actually: operating from England, they would use GW1ZTZ if calling from Scotland/
Wales, or may announce their callsign normally. The exam answer shows using G1ZTZ when
operating from England under the Full licence call without regional indicator).
```

**Diagnosis:** Self-contradiction within a single parenthetical: the passage proposes `G1ZTZ` as the correct form, then hedges with "actually: …they would use GW1ZTZ". Neither conclusion is correct. The fundamental error is claiming a nation letter can be stripped from a callsign when operating cross-border. `G1ZTZ` is a different licensee's callsign entirely — transmitting as `G1ZTZ` when holding a `GW1ZTZ` callsign is a licence violation.

**Correct rule:** Callsigns are assigned to persons. Cross-nation operation requires a stroke-prefix with the visited nation's RSL (`G/GW1ZTZ`) or the alternate-address suffix (`GW1ZTZ/A`).

**Severity:** HIGH — the passage is in a supervision/callsign context that directly feeds exam questions. The incorrect `G1ZTZ` form would produce wrong exam answers.

**Status:** FIXED in this commit (rewrote passage per Master's brief).

---

### H2 — 2E0 described as "Full licence" in supervised-power [INFO] box

**File:** `content/study/intermediate/section-1-licensing.md`
**Lines:** 275–278

**Extracted passage:**
```
> [INFO] **1C (D2F-M2-Q06):** If a scout is supervised by a 2E0 Intermediate operator,
> the scout must operate at no greater than **100 W.** Intermediate licence power is
> 100 W PEP — which applies here since the supervising operator holds a Full licence allowing
> higher power. The limit is set by the supervising licensee's licence terms.
```

**Diagnosis:** Direct contradiction within the same callout. The first sentence correctly identifies the supervisor as a `2E0 Intermediate` operator. The explanation then states "the supervising operator holds a Full licence allowing higher power" — which contradicts the first sentence (2E0 is an Intermediate prefix in England, not a Full licence prefix). The 100 W result is numerically correct (Intermediate maximum = 100 W), but the reasoning is inverted. The passage appears to be attempting to explain why the limit is 100 W rather than higher, but reached for "Full licence" when it should have said "Intermediate licence" as the ceiling.

A candidate reading this callout could conclude that: (a) 2E0 is a Full licence prefix (it is not), or (b) the 100 W limit applies because the supervisor has a Full licence (it applies because the supervisor has only an Intermediate licence — the supervised station cannot exceed the supervisor's own maximum).

**Severity:** HIGH — tagged as an Intermediate exam question (D2F-M2-Q06), directly in the supervision power-limits section. Likely to produce wrong answers if a candidate internalises the incorrect reasoning.

**Status:** NOT fixed in this pass — flagged for follow-on rewrite.

---

## MEDIUM Severity

### M1 — Wrong-level prerequisite in Intermediate §7

**File:** `content/study/intermediate/section-7-operating-practices.md`
**Line:** 97

**Extracted passage:**
```
> **Prerequisite:** Foundation and Intermediate courses cover the basics of making a call.
> The following is a reminder of the full procedure, with the nuance expected at Full licence level.
> If any step is unclear, review §7A (Band Plans and Frequency Etiquette) for calling-frequency
> conventions.
```

**Diagnosis:** This is an Intermediate section file. The callout says "the nuance expected at Full licence level." This is stale template text copied from a Full section — an Intermediate student reading this would be confused about whether they are expected to know "Full licence level" nuance and whether they need to study additional material.

**Severity:** MEDIUM — no factual error in the content that follows, but the level attribution is wrong and may cause confusion about exam scope.

**Status:** NOT fixed in this pass — flagged for follow-on rewrite.

---

### M2 — "A Full licensee must allow inspection" in Intermediate exam callout

**File:** `content/study/intermediate/section-1-licensing.md`
**Lines:** 43–45

**Extracted passage:**
```
> [INFO] **1A (D2F-M1-Q07):** A Full licensee must allow inspection of their radio equipment
> by **any person authorised by Ofcom.** This includes Ofcom enforcement officers and anyone
> acting on Ofcom's behalf.
```

**Diagnosis:** This callout is tagged as a D2F (Intermediate exam) question but names only "A Full licensee." The inspection obligation under Condition 7-1 applies to all UK amateur licence holders, not Full holders only. An Intermediate student reading this might reasonably conclude the inspection requirement does not apply to them. The exam question referenced (D2F-M1-Q07) may be asking specifically about Full licensees, in which case the callout is technically correct for that question — but it sits in the Intermediate section without qualification, creating a misleading implication.

**Severity:** MEDIUM — does not teach wrong content outright, but withholds the applicable rule from the Intermediate audience. Should state "any licensee" or add a clarifying sentence.

**Status:** NOT fixed in this pass — flagged for follow-on rewrite.

---

## LOW Severity

### L1 — "Actually" in mid-sentence (same as H1)

Already captured as H1 above. No additional entries with `— actually:` or `→.*actually` found across the scoped files.

---

### L2 — "Refracted, not reflected" correction box

**File:** `content/study/intermediate/section-5-propagation.md`
**Line:** 24

**Extracted passage:**
```
> [INFO] **Refracted, not reflected.** Amateur radio operators often say sky wave signals
> are "reflected" by the ionosphere — this is casual shorthand and is technically incorrect.
> The signal is **refracted** (bent) by the ionosphere...
```

**Diagnosis:** This is an intentional factual correction written as a teaching callout. It is factually correct and stylistically appropriate. Flagged here only because the pattern-match triggered on "technically incorrect." Not a hallucination.

**Severity:** LOW — correct content, intentional. No action needed.

---

### L3 — "Always wait, then measure" — capacitor discharge caution

**File:** `content/study/intermediate/section-8-safety.md`
**Line:** 405

**Extracted passage:**
```
Large electrolytic capacitors retain their charge after the supply is switched off.
A power supply filter capacitor can hold hundreds of volts for minutes or hours.
Always wait, then measure across the capacitors with a voltmeter before touching
any internal components.
```

**Diagnosis:** Pattern-matched on `wait,` as a possible self-correction marker. This is a grammatically normal imperative sentence — "Always wait, then measure" — not an AI self-interruption. Content is factually correct.

**Severity:** LOW — false positive. No action needed.

---

## Files Scanned (Markdown only, excluding planning/meta files)

### Intermediate
- section-1-licensing.md ✓
- section-2-electronics.md ✓
- section-3-transmitters.md ✓
- section-4-feeders-antennas.md ✓
- section-5-propagation.md ✓
- section-6-receivers.md ✓
- section-7-operating-practices.md ✓
- section-8-safety.md ✓
- section-9-measurements.md ✓

### Full
- section-1-licence-conditions.md ✓
- section-2-operating-techniques.md ✓
- section-3-amateur-radio-safety.md ✓
- section-4-basic-circuits.md ✓
- section-5-semiconductors.md ✓
- section-6-analogue-digital-signals.md ✓
- section-7-transmitter.md ✓
- section-8-transmitter-interference.md ✓
- section-9-receiver.md ✓
- section-10-sdr.md ✓
- section-11-feeders-antennas.md ✓
- section-12-propagation.md ✓
- section-13-emc.md ✓
- section-14-measurements.md ✓

---

## Recommended Follow-On Actions

| Priority | Action |
|---|---|
| 1 | Fix H2 — rewrite 2E0/Full contradiction in `section-1-licensing.md:275-278` |
| 2 | Fix M2 — broaden inspection-obligation callout to "any licensee" |
| 3 | Fix M1 — remove "Full licence level" from Intermediate §7 prerequisite |
