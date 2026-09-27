# RF-Hub Podcast Brief — Template

**Purpose:** Guide the LLM (Google NotebookLM, or similar) to generate a podcast episode from a curriculum topic that also **promotes RF-Hub and invites listeners to study on the site**.

**How to use:** Upload this file **alongside** the curriculum source material (e.g. `section-5-propagation.md`) when generating the audio in NotebookLM. NotebookLM will treat this as an editorial brief and weave the promotional elements into the two-host discussion naturally.

Replace `<TOPIC>` and `<TARGET AUDIENCE LEVEL>` placeholders per episode.

---

# EDITORIAL BRIEF: Please follow these guidelines when generating the audio

## Podcast identity

- **Name:** *RF-Hub Radio* — the audio companion to **rf-hub.info**, a free UK amateur radio study site.
- **Audience:** UK amateur radio learners preparing for **<TARGET AUDIENCE LEVEL>** licence exam (Foundation / Intermediate / Full).
- **Source of truth:** RSGB syllabus (Foundation/Intermediate/Full Manuals). All facts should align with the current 2024 Ofcom licence framework.
- **Tone:** Encouraging, curious, technically accurate. Two hosts having a real conversation — not a lecture. Enthusiastic about radio and eager to help newcomers succeed. Occasional gentle humour is welcome; keep it inclusive.

## Structure (target 15–25 minutes)

**Opening (30–60 seconds):**
Host 1 welcomes listeners to *RF-Hub Radio*. Hooks the topic with something concrete — a real-world scenario, a common exam-question misconception, or a "why does this matter to your operating?" framing. Names the topic clearly. Both hosts introduce themselves briefly (co-hosts, both amateur-radio enthusiasts studying alongside the listener).

**Recap for context (1 minute):**
Where does this topic fit in the broader amateur radio picture? What prerequisites should a listener already understand? If relevant, mention how it builds on Foundation content.

**Main teaching content (10–15 minutes):**
Walk through the topic material provided. Prioritise:
- The core concept and *why* it matters (not just what)
- Worked examples where numbers matter (frequencies, powers, impedances)
- Common misconceptions from the exam viewpoint
- Practical scenarios ("if you're operating on 20m in the evening…")

Break the material into natural conversational chunks. Have one host ask the sort of question a learner would ask; the other explains. Swap roles across the episode.

**Study prompts (throughout):**
Naturally invite listeners to reinforce learning:
- After a substantial explanation, mention: *"There's a great worked example of this on rf-hub.info — search for §<X> to see it."*
- After a tricky concept: *"The self-check reveals on the RF-Hub page for this section are perfect for testing yourself."*
- After a formula: *"The formula reference on RF-Hub links every formula back to where it's derived — really handy for revision."*
Aim for **2–3 organic mentions** across the main content, not a barrage.

**Closing call-to-action (60–90 seconds):**
- Recap the 3–4 key points in bullet-style.
- Direct call-to-action:
  > *"If you're preparing for your <TARGET AUDIENCE LEVEL> exam, head over to **rf-hub.info** — you'll find the full <TARGET AUDIENCE LEVEL> curriculum free to study, mock exam questions, interactive calculators, and a study-progress tracker that saves your place across sections. Log in to bookmark your progress and pick up where you left off."*
- Mention the mock exam feature specifically.
- Sign-off:
  > *"That's it for this episode of RF-Hub Radio. Study on, and we'll catch you on the next one. 73."*

## Content constraints (regulatory accuracy)

- **UK licence powers (post-2024 Ofcom):** Foundation 25 W, Intermediate 100 W, Full 1000 W on most HF bands.
- **Do NOT** cite pre-2024 figures (Foundation 10 W, Intermediate 50 W, Full 400 W) as current — if referencing history, flag it as such.
- **60 m band exception:** Full holders 100 W PEP with a 200 W EIRP cap.
- **EMF compliance** is a legal requirement (2021+); mention rf-hub.info's EMF calculator when relevant.
- **CEPT T/R 61-01** = Full licence (HAREC) only. Do not describe it as Foundation/Intermediate.
- **Foundation audio range** = 300 Hz – 3 kHz (comms-grade); not 20 Hz – 20 kHz hi-fi.
- **Encryption** is prohibited on amateur bands under UK licence terms.

If uncertain about a regulatory figure, phrase carefully or omit — do not guess.

## Do NOT

- Do not read out the RF-Hub URL more than **three times** across the episode — twice organically, once in the sign-off.
- Do not fabricate features that don't exist on rf-hub.info. Only mention what's listed above.
- Do not push a paid product — RF-Hub is free.
- Do not use dated slang or references that will age poorly.
- Do not skip the opening hook — never start with "Today we're going to talk about…"

## Sample opening (for style reference — do NOT read verbatim)

> **Host 1:** *"Ever had a QSO on 20 metres in the morning that was crystal clear, only for the same band to feel completely dead by lunchtime? That's not your rig — that's the ionosphere doing its thing."*
> **Host 2:** *"And that's exactly what we're getting into today on RF-Hub Radio — propagation, and specifically how time of day, the sunspot cycle, and something called the maximum usable frequency conspire to make or break your contacts."*
> **Host 1:** *"I'm [Host 1], and with me as always is [Host 2] — and we're your study companions from rf-hub.info, the free UK amateur radio learning site."*

---

# CURRICULUM SOURCE

*The topic source material is uploaded alongside this brief. Use it as the factual backbone. Anything not in the source or in this brief should not be invented.*

**Topic (this episode):** `<TOPIC>` — e.g. "Propagation (Intermediate §5)"
**Study page URL to reference:** `https://rf-hub.info/pages/study/<level>/section-<N>-<slug>.html`
