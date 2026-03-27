# content/ — Non-Lesson Authored Content

This directory holds all authored content that is **not** a curriculum lesson.

## Where Does My File Go?

| Content Type | Directory | Examples |
|-------------|-----------|----------|
| **Sideband snippets** | `content/sidebands/` | Reusable RF topic explainers with interactive visuals |
| **Blog articles** | `content/blog/drafts/` | Blog post drafts (move to `content/blog/` when published) |
| **Blog project docs** | `content/blog/` | Blog indexes, instructions, checklists |
| **Video transcripts** | `content/transcripts/` | YouTube/video transcripts for must-watch list |
| **Technical guides** | `content/guides/` | Standalone reference guides (not part of a curriculum unit) |

## NOT Here

| Content Type | Correct Location |
|-------------|-----------------|
| Curriculum lesson `.md` files | `curriculum/<subject>/unit-N/` |
| Project docs (schemas, specs, deployment) | `docs/` |
| External files (Word docs, equipment logs) | `resources/` |
| Built HTML pages | `frontend/pages/` |

## Naming Conventions

- **Sidebands:** `sideband-<topic-slug>.md`
- **Blog drafts:** `point-N-<topic-slug>.md` or descriptive kebab-case
- **Transcripts:** `<video-topic>.md` with YouTube URL on line 2
- **Guides:** `<topic-slug>.md`
