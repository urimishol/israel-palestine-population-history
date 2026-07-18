# Historical Population of Israel, the West Bank and Gaza, 1500 BCE–2026

This repository publishes the authoritative dataset behind [*Who Lived Here? Population of Israel and Palestine Through 3,500 Years*](https://youtu.be/9MYU29YUECQ), a bar-chart-race animation researched and produced by Uri Mishol as an independent personal project.

**Current dataset version:** 2.14.2

The project combines archaeological reconstruction, historical scholarship, administrative records, censuses and modern official statistics. Their quality and geographic coverage vary greatly. Ancient and medieval values are deliberately presented as approximate scenarios rather than census-like facts.

## Territory

The same modern territory is used throughout:

- Israel excluding the Golan Heights;
- the West Bank including East Jerusalem;
- Gaza.

Historical kingdoms, provinces and administrative districts rarely match this polygon. Adjustments, reconstructions or approximations are therefore necessary and are documented in the source notes.

## What the data represents

- Resident populations only; temporary armies, pilgrims and transient garrisons are excluded.
- 42 anchor years from approximately 1500 BCE to 2026 CE.
- Period-sensitive community labels rather than fixed modern categories projected backward.
- Selected population scenarios and, where supported, plausible upper scenarios.
- Explicit qualitative lineage relationships for category emergence, merge and rename behavior.
- Provisional treatment of 2023–2026 because war, displacement, mortality and disrupted enumeration make normal projection inappropriate.

Plausible uppers are not symmetric confidence intervals. Community uppers are independent and must not be added together.

## Repository contents

### Data

| File | Purpose |
|---|---|
| [`data/animation-anchors.csv`](data/animation-anchors.csv) | Selected anchor values, uncertainty, labels, events, contexts, population-transition profiles and source IDs. |
| [`data/communities.csv`](data/communities.csv) | Community IDs, stable colours and display order. |
| [`data/transitions.csv`](data/transitions.csv) | Qualitative split, merge and rename relationships. |
| [`data/sources.csv`](data/sources.csv) | Compact runtime source-ID registry. |
| [`data/timing.csv`](data/timing.csv) | Explicit minimum holds for selected anchors. |
| [`data/dataset-manifest.json`](data/dataset-manifest.json) | Dataset version, territory, runtime filenames, provenance and anchor hash. |

Exact release hashes for all six runtime files are recorded in [`CHECKSUMS.sha256`](CHECKSUMS.sha256).
The earlier research-artifact filename retained in the manifest is provenance metadata; it is not a required runtime file or a competing public release.

### Documentation

| File | Purpose |
|---|---|
| [`docs/PROJECT-GUIDE-AND-DECISIONS.md`](docs/PROJECT-GUIDE-AND-DECISIONS.md) | Current methodology, authority rules and consolidated adopted decisions. |
| [`docs/SOURCE-NOTES.md`](docs/SOURCE-NOTES.md) | Expanded source guide, derivations, citations and territorial limitations. |
| [`docs/RESEARCH-AUDIT.md`](docs/RESEARCH-AUDIT.md) | Research history, superseded scenarios and revision rationale. |
| [`docs/DATA-SCHEMA.md`](docs/DATA-SCHEMA.md) | Runtime schema, validation rules and transition behavior. |

## Community model

Early Israelites, Judeans and later Jews form one visualization continuity series with period-sensitive labels. This is a semantic bridge, not a claim that identity or institutions remained unchanged.

Samaritans, Philistines, Christians, Muslims, Druze, Armenians, Circassians and resident imperial communities appear only where historically applicable or analytically defensible. `Other / Unknown` is retained whenever evidence cannot support a more precise classification.

## Validation

The repository includes a standalone validator with no third-party dependencies. With Node.js 18 or later:

```bash
npm test
```

Validation checks the manifest and anchor hash, CSV structure, unique anchors and source IDs, population arithmetic, plausible uppers, community configuration, transition relationships and timing references.

## Evidence hierarchy

For current values and presentation fields, the normalized files in `data/` are authoritative. The consolidated decisions explain their interpretation. Earlier reports and temporary recommended-row CSVs are research history, not competing datasets.

The source guide distinguishes direct enumeration, fiscal evidence, scholarly estimates, project reconstructions, stitched official series and interpolation. Where the retained project record lacks a complete bibliographic entry, the omission is stated rather than silently reconstructed.

## Citation

> Mishol, Uri. *Historical Population of Israel, the West Bank and Gaza, 1500 BCE–2026*. Dataset version 2.14.2, 2026. https://github.com/urimishol/israel-palestine-population-history

Machine-readable citation metadata is available in [`CITATION.cff`](CITATION.cff).

## Corrections

Evidence-based corrections are welcome. Please identify the affected anchor, community and source ID; provide a credible archaeological, historical or demographic source; and explain any territorial mismatch.

## Scope of interpretation

Population history is historically significant, but it does not by itself establish contemporary ownership, territorial rights, political legitimacy or exclusive indigeneity. The project is a documented reconstruction for visualization, not a polemical demographic claim.

## Licence

The original dataset compilation and documentation are licensed under [CC BY 4.0](LICENSE.md). Third-party publications and external data remain subject to their own terms.
