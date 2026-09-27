# RFH-YouTube — Agent Specification Draft

**Status:** DRAFT for PO Anthony review. Not yet provisioned.
**Proposed session:** `YOUTUBE`
**Proposed UUID:** to be assigned by CC-Forge on provisioning.

---

## Purpose

Dedicated agent for RF-Hub's YouTube channel + podcast production. Owns everything from source-material curation through publishing metadata.

---

## Responsibilities

### Content pipeline
1. **Episode planning** — pick source material from `/content/study/` or `/content/podcasts/episodes/`, prepare NotebookLM briefs
2. **Podcast metadata** — draft title/description/chapters/hashtags per episode using templates
3. **Thumbnail direction** — spec per-episode thumbnails (image brief, key text, colour theme) for Anthony or a designer to render
4. **Cover-art versioning** — track podcast square + YouTube landscape variants; keep them consistent as branding evolves
5. **Publishing checklist** — pre-flight per episode (audio quality, art assets, metadata, chapter markers, correct upload settings)

### Cross-platform distribution
- YouTube (video)
- Podcast host (RSS to Spotify/Apple/Amazon/Google)
- rf-hub.info `/pages/podcasts/` landing page (future)
- Blog cross-posts where relevant

### Quality gates
- Regulatory accuracy check on every episode (post-2024 Ofcom, 60m exception, CEPT scope, etc. — same standing rules as content agents)
- Attribution consistency (RSGB independent, AI-transparent)
- Brand-voice consistency across episodes

### Analytics feedback loop (once channel is running)
- Track top-performing episodes → informs future topic selection
- Track drop-off points in videos → informs episode length + structure iteration
- Feed learnings back into `PODCAST-BRIEF-TEMPLATE.md`

---

## Non-responsibilities (delegation boundaries)

- **Does NOT write curriculum content** — that stays with Docs agent
- **Does NOT build interactive tools** — that stays with Frontend agent
- **Does NOT generate audio narration itself** — Anthony/NotebookLM produce; agent brief only
- **Does NOT edit video** — agent produces briefs + specs; Anthony or a designer renders
- **Does NOT own social media** — YouTube + podcast hosts only; Twitter/Instagram/etc are separate if ever added

---

## Working directory + isolation

- **Home:** `/home/rfhub/agents/youtube/`
- **Working dirs on shared code:** `cd /home/rfhub/rf-hub` for read access to source material
- **Reference paths:**
  - `/content/podcasts/` — briefs, episode metadata, workflow docs (owns)
  - `/content/study/` — READ ONLY, curriculum source material
  - `/content/sidebands/`, `/frontend/pages/blog/` — READ ONLY, potential episode sources

---

## Tools + integrations

- **CCPM API** — task tracking, sprint membership (probably joins RFH-MAINT or gets its own MEDIA sprint)
- **Google NotebookLM** — audio generation (external, Anthony's account)
- **Podcast host** — Buzzsprout free tier recommended (external, Anthony's account)
- **Video tools** — Headliner for MP4 assembly (external)
- **YouTube Studio** — upload, metadata, analytics (external)
- **Publishing state** — episode manifest tracked in `/content/podcasts/episodes/PUBLISHED.md` (owns)

---

## Standing rules

- **All content aligns with 2024 Ofcom licence framework** — pre-2024 figures must be historical/context only
- **RSGB attribution:** independent, not affiliated
- **Cover art asset consistency:** established brand colours (cyan, dark navy, orange accents)
- **URL-mention discipline in scripts:** cap RF-Hub URL mentions per episode (2-3 organic + 1 CTA, not spam)
- **Chapter markers required** — every YouTube upload needs chapters formatted for auto-detection (0:00 start)
- **Description hashtags:** first 3 are clickable tags, rest are keyword coverage
- **Custom thumbnails required** — never use auto-generated frame

---

## Success metrics (agent-owned KPIs)

- Episode publishing cadence (once launched, target: 1 per fortnight to start)
- Episode completion rate (>60% average watch time = good for podcast-style)
- Subscriber growth (100 subs = milestone 1)
- Click-through from YouTube description to rf-hub.info (Google Analytics goal)

Track in `/content/podcasts/CHANNEL-METRICS.md` (owns).

---

## Provisioning steps (for CC-Forge to execute)

1. Create `/home/rfhub/agents/youtube/` directory + `.claude/` config
2. Assign new UUID via CCPM API
3. Add to CCPM agent registry with role `youtube_producer`
4. Create tmux session `YOUTUBE`
5. Draft `/home/rfhub/agents/youtube/CLAUDE.md` with role identity + working directory + delegation boundaries + standing rules (this doc is the source)
6. Set model + context (Sonnet 4.6 recommended; content-writing work fits well)
7. Wire into RFH-Master's send-to-agent.sh routing
8. First task: read RP-Master's response (once received) on video promo workflow + incorporate into RF-Hub's approach

---

## PO Anthony's answers (2026-09-14)

1. **Sprint membership:** ✅ New pinned RFH-MEDIA sprint (created + active — sprint_id `a283c60f`)
2. **Cover art:** ✅ Mixed — ChatGPT image generation for stylised assets + Frontend agent for SVGs
3. **Podcast host:** ✅ Buzzsprout free tier — already set up, Episode 1 uploaded
4. **Voice-over:** ✅ Mixed — Anthony records intro/outro segments; NotebookLM produces main body
5. **Naming:** ✅ **RFH-Media** (not RFH-YouTube — broader remit than just YouTube)
6. **First deliverable after provisioning:** ✅ Draft Episode 2 brief on §5 Propagation

## Provisioning status

- V2-Master notified 2026-09-14 (msg `8bebf792`) — registration + registry entry
- CC-Forge-Master CC'd (msg `d7eaba66`) — actual dir/tmux/CLAUDE.md provisioning if in their scope
- Awaiting UUID assignment + tmux MEDIA session bring-up

---

## Also awaiting

**RP-Master query sent 2026-09-14** asking about ZerosRP video promo workflow. Their response will inform:
- Recommended screen-capture tool
- Editing pipeline (if any automation exists on their side)
- Templates/scripts we can adopt

Once RP-Master responds, incorporate learnings into this spec before final provisioning.
