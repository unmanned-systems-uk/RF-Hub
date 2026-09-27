# RF-Hub Podcasts

Reusable brief + workflow for generating audio content from RF-Hub curriculum, using Google NotebookLM (or similar LLM audio tools) — with built-in promotional call-to-actions steering listeners back to rf-hub.info.

## Files

- `PODCAST-BRIEF-TEMPLATE.md` — the editorial brief. Upload this to NotebookLM alongside your curriculum topic source.
- `episodes/` — per-episode overrides, artwork, published-URL log (create as needed).

## Workflow

### 1. Pick a topic

Any RF-Hub curriculum markdown works:
- `/content/study/intermediate/section-<N>-<slug>.md`
- `/content/study/full/section-<N>-<slug>.md`
- Sidebands under `/content/sidebands/*.md`
- Blog articles

### 2. Prepare the sources for NotebookLM

Create a new NotebookLM notebook. Upload TWO documents:
1. **`PODCAST-BRIEF-TEMPLATE.md`** with the two placeholder replacements done:
   - `<TOPIC>` → e.g. "Propagation — Intermediate §5"
   - `<TARGET AUDIENCE LEVEL>` → Foundation / Intermediate / Full
2. **The curriculum source .md** (e.g. `section-5-propagation.md`)

### 3. Generate the audio

- Click "Audio Overview" in NotebookLM.
- Optionally use the "customise" prompt to add a specific angle for this episode
  (e.g. *"Focus on the exam question 'What causes skip zones?' and how to reason about it"*).
- Generate. Review the output. Regenerate with adjusted instructions if the CTAs feel forced or unnatural.

### 4. Anthony's own intro/outro (optional)

If Anthony wants to top-and-tail with his own voice:
- Record a **30-second personalised intro** (welcoming listeners, mentioning callsign G/SWL/EH43, framing the episode)
- Record a **15-second personalised outro** (his sign-off + specific ask for the episode)
- Stitch in Audacity/similar: [Anthony intro] → [NotebookLM main content] → [Anthony outro]

### 5. Publish

- Upload the finished MP3 to a hosting service (RSS.com, Anchor, Spotify Podcasters — Anthony's call)
- Add a link on rf-hub.info under a new `/pages/podcasts/` section (future task)
- Log the episode metadata in `episodes/<YYYY-MM-DD-slug>.md` for reference

## Constraints — same as the brief

Regulatory accuracy is CRITICAL. See the brief for the standing list:
- Post-2024 Ofcom power figures
- 60m Full 100W PEP + 200W EIRP cap
- CEPT T/R 61-01 = Full only
- Encryption prohibited
- EMF compliance is a legal requirement

## Iterating the brief

The brief in `PODCAST-BRIEF-TEMPLATE.md` is version 1. Once we have 2–3 episodes in the wild, we'll know:
- Whether NotebookLM naturally weaves in the RF-Hub mentions (or over-does them)
- Whether the "study prompts throughout" cadence is right
- Whether the CTA closing formula works
- Whether the tone matches what Anthony's audience actually engages with

Adjust the brief in-place — it's a living document.
