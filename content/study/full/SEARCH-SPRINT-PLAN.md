# RFH-SEARCH: Search Engine Overhaul Sprint (Proposed)

**Purpose:** Fix three concrete complaints (missing content, missing widget on most pages, needs to move to top banner) by moving search from hand-curated to auto-generated, and from opt-in-per-page to SPOT-in-nav.

**Duration:** 1 week, ~5–7 tasks
**Sprint key (proposal):** RFH-SEARCH or fold into MAINT

## Sprint scope

### Task 1 — Move search box into nav SPOT (Frontend)
- Add search input + results dropdown to `/frontend/partials/site-nav.html`
- Delete per-page `<link href="/assets/css/search.css">` + `<script src="/assets/js/search.js">` includes (~60 pages)
- All pages get search from top banner automatically, positioned top-right of nav bar
- Existing search.js + search.css keep working, just moved and consolidated
- Cache-bust bump

### Task 2 — Build-time index generator (Backend or Frontend script)
- Node script `/frontend/scripts/build-search-index.js` (or Python — Anthony's call)
- Walks `/frontend/pages/**/*.html` recursively
- For each page: extract `<title>`, meta description, all `<h1>`/`<h2>`/`<h3>` headings + their IDs, first ~200 chars of body text under each heading
- Emit an entry per section-anchor (see Task 3) → richer than current hand-curated entries
- Merge with any hand-curated overrides (e.g. blog articles Anthony wants featured with custom keywords) from `/frontend/assets/js/search-index-overrides.js`
- Output: `/frontend/assets/js/search-index.js` (overwrites current hand-curated file)
- Run script, verify "remote"/"control" now hit the Full §1 page

### Task 3 — Anchor-level indexing (part of Task 2)
- Index each `ch-NX` heading as a separate entry
- URL includes the fragment anchor (e.g. `/pages/study/full/section-1-licence-conditions.html#ch-1e`)
- Result: searching "remote control" navigates directly to §1E, not the top of the page
- Section titles pulled from the `<h2>` text (e.g. "1E — Remote Control")

### Task 4 — Trigger mechanism (see decisions below)
- Pick trigger strategy (see options)
- Wire it up
- Test: edit a page, add a heading, verify search index updates

### Task 5 — Manual `npm run reindex` (or shell script) (Frontend)
- Escape-hatch script for edge cases
- Documented in `/README.md` and `/CLAUDE.md`
- Runs the same Task 2 generator, prints "N pages indexed, M sections"

### Task 6 — Backfill missing keywords (Docs)
- Some concepts don't appear as headings but are important searchable terms (e.g. "encrypted", "PME", "ICNIRP")
- Docs authors a `/frontend/assets/js/search-index-overrides.js` with hand-curated `{url, extraKeywords}` entries
- These get merged into the auto-generated index at build time
- Small file, easy to maintain

### Task 7 — Testing pass
- Search all Anthony's known-missing queries (remote, control, encrypted, PME, ICNIRP, MUF, dip meter, reciprocal mixing, EMF, etc.)
- Every one should hit a relevant page
- Also verify: navigate to any page → search box in nav bar → works

## Trigger mechanism — YOUR DECISION

The whole point of an auto-generator is losing the manual burden. If it only runs manually, we're back to today's problem. Options:

### Option A — Git post-commit hook (recommended for RF-Hub)
- Hook at `.git/hooks/post-commit`
- Runs the generator if any `frontend/pages/**/*.html` changed
- Auto-regenerates immediately after every commit that touches pages
- Zero cost per commit (<1s regeneration for 60 pages)
- **Pro:** always fresh at commit time; no daemon; no cron
- **Con:** local to the machine you commit on (RF-Hub is single-VM anyway → not a real concern)

### Option B — inotify watcher daemon
- Systemd service watches `/home/rfhub/rf-hub/frontend/pages/` for file writes
- Regenerates immediately on any HTML change (including outside git)
- **Pro:** truly automatic; catches out-of-band edits
- **Con:** extra daemon to maintain; potential for spurious triggers during large edits

### Option C — Cron every 5–10 minutes
- Cheap, no hooks, no daemons
- **Pro:** simplest
- **Con:** up to 10 min staleness after a page publishes; runs even when nothing changed

### Option D — nginx reload hook
- Regenerate whenever nginx is reloaded
- **Pro:** ties to actual deployment
- **Con:** RF-Hub content doesn't require nginx reload for changes (files served directly from disk)

### Option E — Combination: post-commit + weekly cron safety-net
- A + C, belt-and-braces
- Post-commit catches the normal case; weekly cron catches any drift
- **Pro:** thorough
- **Con:** slight overhead of "just in case" logic

## My recommendation

**Option A (post-commit hook) + manual script from Task 5** — matches how the site actually operates. Every content change already goes through a git commit (LessonsBuilder, Docs, etc.), so post-commit is the natural trigger. Manual script covers the rare edge case.

Cost: ~10 lines in `.git/hooks/post-commit`, one shell script. Zero maintenance.

## Deferred to Phase 2

- Server-side full-text search (PostgreSQL tsvector) — cross-page + cross-quiz + cross-blog unified results
- Search-analytics logging (what people search that returns 0 results — feeds a "known-gaps" report)
- Fuzzy/typo tolerance beyond current trigram scoring

## Ready to dispatch once you pick:

1. Which trigger option (A/B/C/D/E)?
2. Node or Python for the generator script?
3. Sprint key: standalone `RFH-SEARCH` sprint, or fold into existing `RFH-MAINT`?
4. Go/no-go on Task 6 (Docs backfill of overrides) or defer if auto-generation is good enough alone?
