# Study Page Quality Checklist
**Version:** 1.0  
**Last Updated:** 2026-09-11  
**Owner:** RFH-Testing  

Use this checklist to validate that a study page is exam-ready before marking it complete. Apply to all Phase 2 sections (Section 4–9) and any new study content.

---

## Pre-Flight Checklist (Before Content Handoff)

Run this validation **before** notifying authors that content is ready for review.

### RSGB Alignment

- [ ] **Syllabus references on all major topics**
  - Every h3 and h4 has a parenthetical RSGB reference (e.g., "(2F1)", "(3F2)").
  - Use the RSGB Intermediate Licence syllabus or Ofcom equivalent as the authoritative source.
  - Example: `<h3>Colpitts Oscillator (2D1)</h3>`

- [ ] **Cross-reference map updated**
  - `docs/CROSS-REFERENCE-MAP.md` includes all new h3/h4 headings with their RSGB codes.
  - If cross-referencing another section, link to the anchor (e.g., `#ch-2f1`).

- [ ] **Content depth meets or exceeds syllabus**
  - Compare against the RSGB split-chapter PDFs for your section.
  - Depth should match or exceed the official syllabus; should not be visibly shallower.
  - Self-check questions should test the depth of content provided.

- [ ] **No copied prose from RSGB**
  - Content must be original wording throughout.
  - Paraphrasing is acceptable; direct quotes require attribution.
  - Use automated plagiarism checker if available (e.g., Turnitin, Copyscape).

- [ ] **No factual errors (spot-check top 10 RSGB claims)**
  - Identify the 10 most critical facts for this section.
  - Cross-check each against RSGB manual or Ofcom official documents.
  - Examples:
    - Power limits (Foundation 25W, Intermediate 100W, Full 1000W) must be post-2024.
    - Frequency allocations (e.g., "144–146 MHz") must match current UK Ofcom band plan.
    - Technical specs (e.g., "Silicon Vf = 0.6–0.7 V") must be accurate within reasonable tolerance.

---

### Structural Quality

- [ ] **Table of Contents (TOC) block at top**
  - All major h2 headings included in TOC.
  - TOC uses anchor links to jump to h2 IDs (e.g., `#ch-2c` for "Chapter 2C").
  - TOC is functional: test each link to verify jump-to behavior.

- [ ] **Heading hierarchy is monotonic**
  - No jumping from h2 directly to h4 (should go h2 → h3 → h4).
  - Hierarchy should feel natural and support outline generation.
  - Screen readers rely on correct heading levels.

- [ ] **Every major concept has a self-check question**
  - Each h3 should have at least one self-check (reveal/hide) button.
  - Self-checks test understanding, not just recall.
  - Questions should be answerable using content in the section.

- [ ] **Every major concept has an illustration OR go-deeper link**
  - No concept stands alone without visual aid or external resource.
  - Illustrations can be SVG diagrams, embedded interactives, or external images.
  - Go-deeper links should point to authoritative resources (RSGB, Ofcom, textbooks, Wikipedia).
  - Mark pending resources with: `⏳ Go deeper: [Resource] (coming in Section N)`

- [ ] **Cross-references use explicit callouts**
  - Don't just say "see the transformer section"; use a callout block or explicit note.
  - Format: `**See also:** [Section 2 / Transformers](#ch-2g)`
  - Callouts help readers navigate without relying on implicit structure.

- [ ] **Cross-refs to future/pending sections carry "wait for" notes**
  - If referencing content not yet written, flag it explicitly.
  - Format: `⏳ **This concept continues in Section 4 (digital modes).`
  - Helps readers understand why content feels incomplete.

---

### Accessibility (WCAG AA)

- [ ] **`<main>` landmark wraps primary content**
  - All study page content should be inside `<main>`.
  - Improves navigation for screen reader users.
  - Structure: `<body> → <main> → content</main></body>`

- [ ] **All iframes have title attributes**
  - Each iframe must have a descriptive `title=` attribute.
  - Example: `<iframe title="LC Tank Oscillation Interactive" ...></iframe>`
  - Helps screen readers announce interactive content.

- [ ] **All external links have `target="_blank" rel="noopener"`**
  - External links should open in new tab.
  - `rel="noopener"` prevents security vulnerabilities.
  - Check: Links to Ofcom, RSGB, Wikipedia, etc.

- [ ] **Colour contrast meets WCAG AA**
  - Body text: minimum 4.5:1 contrast ratio.
  - Use a contrast checker (WebAIM, Contrast Ratio) to validate.
  - Dark theme should use `--text-primary` (light text on dark background).

- [ ] **Alt text on all images**
  - Every `<img>` tag needs a descriptive `alt=` attribute.
  - SVG diagrams need either `<title>` elements or `aria-label=`.

---

### Interactive Quality

- [ ] **Every embedded interactive loads without errors**
  - Test each interactive URL directly in the browser.
  - Check browser console (F12) for JavaScript errors.
  - Verify iframe `src=` path is correct (absolute or relative, consistent with deployment).

- [ ] **Interactive works standalone at its direct URL**
  - Navigate to `/interactives/[name].html` directly.
  - Interactive should be fully functional without parent page context.
  - Should work with no iframe parent container.

- [ ] **Interactive functional on mobile (375px width)**
  - Open interactive in browser dev tools, set to 375px width.
  - Canvas-based interactives: verify all controls are visible and tappable.
  - Check: buttons are large enough (≥44px touch target), text is readable.

- [ ] **Interactive has a descriptive title attribute**
  - `<iframe title="[descriptive name]" ...></iframe>`

---

### 2024 UK Licence Framework Accuracy

- [ ] **Foundation power = 25 W**
  - Entry-level licence; default across most bands.
  - Exceptions: 10 W on some restricted bands (e.g., 10.1–10.15 MHz).
  - **Must not reference pre-2024 figure of 10 W** unless in explicit historical note.

- [ ] **Intermediate power = 100 W**
  - Default across HF/VHF/UHF.
  - Exceptions: 50 W on some bands; 32 W on upper 1.8 MHz; 1 W on 135.7 kHz.
  - **Must not reference pre-2024 figure of 50 W** unless in historical context.

- [ ] **Full power = 1000 W on primary HF bands (30 dBW)**
  - Standard across main HF allocations.
  - Specialist exceptions on some bands (documented in Ofcom band table).
  - **Must not reference pre-2024 figure of 400 W** unless in historical context.
  - Any band-specific exceptions should be documented (e.g., "1 W on 135.7 kHz, specialist exceptions on some 1.8 MHz bands").

- [ ] **No orphaned pre-2024 power figures**
  - Search page for "10W Foundation", "50W Intermediate", "400W Full".
  - Any pre-2024 figures must be explicitly labeled `(pre-2024)` or `(historical)`.

- [ ] **Worked examples use current power limits**
  - If page includes calculation examples, use 2024 limits.
  - Example: "An Intermediate operator on 20m can use up to 100W PEP" (not 50W).

---

### Responsive Design

- [ ] **Viewport meta tag present**
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`

- [ ] **No horizontal scroll at 1920px**
  - Test in desktop view; content should fit within viewport.

- [ ] **Content readable at 768px (tablet)**
  - Font size should not drop below 14px at this width.
  - iframes should scale or become scrollable (not overflow).

- [ ] **No overflow at 375px (mobile)**
  - Buttons, form controls should be ≥44px touch targets.
  - Text should reflow naturally; images should scale.

---

### Content-Specific Checks (by Section)

#### Section 1: Licensing & Regulations (1A–1F)
- [ ] Current Ofcom power framework (Foundation 25W, Intermediate 100W, Full 1000W)
- [ ] UK band allocations (144–146 MHz, 430–440 MHz, etc.)
- [ ] Callsign rules (M0ABC format, secondary callsigns)
- [ ] Permitted frequencies for each licence class
- [ ] No reference to pre-2024 regulations (unless historical)

#### Section 2: Electronics & Electrical (2A–2I)
- [ ] ELI in inductor (V leads I), ICE in capacitor (I leads V) — directions correct
- [ ] Silicon forward voltage: 0.6–0.7 V; Germanium: 0.25 V
- [ ] Power calculations (P = I²R, V²/R, etc.)
- [ ] Resonance and tank circuits (energy exchange, damping)
- [ ] RF components (inductors, capacitors, filters, crystals)
- [ ] -3dB point / half-power / 0.707 × V_in relationship

#### Section 3: Transmitters & Receivers (3A–3G)
- [ ] Colpitts oscillator identification and operation
- [ ] Piezoelectric effect in crystals (mechanical resonance → electrical)
- [ ] VFO stability concepts
- [ ] AM/FM/SSB modulation (300 Hz–3 kHz audio bandwidth)
- [ ] Frequency deviation formula (β = Δf / f_mod for FM)
- [ ] TX/RX architectures (direct-conversion, superhet)
- [ ] Modulation index (m parameter for AM; β parameter for FM)

#### Section 4–9 (Future)
- Check corresponding RSGB manual chapter for syllabus requirements.
- Apply same rigor to power limits, technical specs, and cross-references.

---

## Testing Workflow

### Step 1: Self-Check (Content Author)
Before content review:
1. Run the checklist items yourself.
2. Fix any failing items.
3. Commit and announce ready for review.

### Step 2: Testing Gate (RFH-Testing)
1. Run full regression suite on updated pages.
2. Verify all checklist items pass.
3. Check for regressions in other sections.
4. Generate TESTING-REPORT-[date].md with results.
5. If all pass: approve for release.
6. If failures: route back to author with specific failing checklist items.

### Step 3: Release
Once approved:
1. Merge to main.
2. Update CROSS-REFERENCE-MAP.md if new sections added.
3. Deploy to production.
4. Announce in sprint summary.

---

## Quick-Check Script (for Testing)

To run a quick automated check on a new study page:

```bash
python3 /home/rfhub/agents/testing/validate_study_page.py [path/to/section-N.html]
```

*(Script to be created — validates headings, iframes, external links, WCAG basics)*

---

## Known Limitations & Workarounds

| Issue | Workaround |
|-------|-----------|
| Automated RSGB plagiarism detection not available | Use Copyscape or read section alongside official RSGB to verify paraphrasing |
| Contrast checking requires manual tool | Use WebAIM contrast checker; automate if Lighthouse integration added |
| Pre-2024 power figures appear in historical callouts | Flag clearly with `(pre-2024)` or `(historical)` label |
| Cross-references to future sections hard to maintain | Use `⏳ Coming in Section N` format; update when sections land |

---

## Review Checklist (for RFH-Master / Content Lead)

Before approving a section for release:

- [ ] Testing provided PASS on all regression checks
- [ ] All items in this checklist validated (✅ or N/A marked)
- [ ] RSGB content spot-checks passed
- [ ] 2024 power framework correctly applied
- [ ] Accessibility checks passed (WCAG AA)
- [ ] Responsive validation passed (1920/768/375)
- [ ] Interactives load and function correctly
- [ ] No regressions detected in other sections
- [ ] CROSS-REFERENCE-MAP.md updated
- [ ] Ready for production release

---

## History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-09-11 | Initial release — codified from Phase 1 (S11) validation standards. Covers Sections 1–3 requirements; ready for Phase 2 (Sections 4–9). |

---

**For questions or updates:** contact RFH-Testing or RFH-Master.

**Last Reviewed:** 2026-09-11  
**Next Review:** After Section 4 content lands
