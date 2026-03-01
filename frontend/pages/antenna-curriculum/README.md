# RF-Hub Antenna Curriculum

## 4 Units · 20 Lessons · From EM Waves to Phased Arrays

This directory contains the structured antenna learning curriculum for RF-Hub.
Content is authored in Markdown. At milestone points, lessons are built into
interactive HTML pages for the live site.

### Structure

```
antenna-curriculum/
├── README.md                          ← You are here
├── CURRICULUM-STATUS.md               ← Progress tracking
│
├── unit-1-how-antennas-work/          ← No equipment needed
│   ├── lesson-01-em-radiation.md
│   ├── lesson-02-how-antennas-radiate.md
│   ├── lesson-03-radiation-patterns.md
│   ├── lesson-04-antenna-types.md
│   └── lesson-05-polarisation.md
│
├── unit-2-characteristics-and-measurement/  ← Introduces VNA
│   ├── lesson-06-impedance.md
│   ├── lesson-07-swr-and-return-loss.md
│   ├── lesson-08-smith-chart.md
│   ├── lesson-09-gain-directivity-efficiency.md
│   └── lesson-10-vna-antenna-measurement-lab.md
│
├── unit-3-design-and-construction/    ← Build-measure-iterate
│   ├── lesson-11-dipole-deep-dive.md
│   ├── lesson-12-vertical-antennas.md
│   ├── lesson-13-yagi-antennas.md
│   ├── lesson-14-broadband-antennas.md
│   └── lesson-15-impedance-matching.md
│
└── unit-4-advanced-systems/           ← Arrays & beamforming
    ├── lesson-16-antenna-arrays.md
    ├── lesson-17-phased-arrays.md
    ├── lesson-18-direction-finding.md
    ├── lesson-19-practical-phased-array.md
    └── lesson-20-software-beamforming.md
```

### Design Principles

1. **One concept per lesson** — 20-30 min theory + interactive, separate lab time
2. **Three layers per lesson** — Theory → Interactive Visualisation → Hands-On Lab
3. **SDR-first** — Discover concepts with equipment before formalising
4. **Spiral learning** — Revisit concepts at increasing depth
5. **Progressive equipment** — Early lessons need nothing; later lessons use VNA

### Existing Interactive Resources (to embed)

| File | Embed In | Path |
|------|----------|------|
| EM radiation visualiser | Lesson 1 | `resources/em-radiation.html` |
| EM wave animation | Lesson 1 | `resources/em-animato-2.html` |
| TX/RX chain demo | Lesson 2 | `resources/tx-rx-complete.html` |
| 3D radiation patterns | Lessons 3, 9, 13 | `resources/radiation-3d-v5.html` |

### Workflow

- **Claude** writes lesson content in MD files
- **Anthony** reviews and approves content accuracy
- **Claude Code** converts approved MD → interactive HTML at milestones
- All changes committed to `unmanned-systems-uk/RF-Hub` repo

### Milestones

| Milestone | Trigger | Action |
|-----------|---------|--------|
| M1 | Unit 1 all lessons approved | Build Unit 1 HTML pages |
| M2 | Unit 2 all lessons approved | Build Unit 2 HTML pages |
| M3 | Unit 3 all lessons approved | Build Unit 3 HTML pages |
| M4 | Unit 4 all lessons approved | Build Unit 4 HTML pages |
