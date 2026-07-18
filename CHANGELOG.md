# Changelog

## 2.14.2 — 2026-07-18

First authoritative public release of the normalized production dataset. It replaces the earlier preview repository contents.

### Data and research

- Expanded the dataset to 42 anchors from 1500 BCE through 2026 CE.
- Added the c.850 BCE two-kingdom horizon and c.100 BCE Hasmonean horizon.
- Revised the opening Iron Age trajectory.
- Added a temporary Philistine series and a c.604–586 BCE category-merge horizon.
- Revised the 167–63 BCE Hasmonean trajectory.
- Revised the 70–638 CE Roman–Byzantine trajectory with coherent uncertainty scenarios.
- Added Mandate-period Muslim natural-increase context.
- Preserved provisional conflict-period treatment for 2023–2026.

### Structure and reproducibility

- Normalized communities, transitions, sources and timing into separate CSV files.
- Made `transitions.csv` the sole explicit authority for split, merge and rename behavior.
- Added a versioned manifest and runtime anchor SHA-256.
- Added standalone public validation.
- Consolidated methodology, decisions, source notes and research history into four documents.

### Final timing patch

- Changed 70, 749 and 1099 population transitions to gradual.
- Added the 1099 `gradual_demography_event_settlers` profile so pre-existing communities interpolate gradually while Crusader settlers appear only in the final event window.
- No population or plausible-upper endpoints changed in this timing patch.
