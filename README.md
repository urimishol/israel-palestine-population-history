# Historical populations in the territory of modern Israel, the West Bank and Gaza

This repository publishes the dataset behind [*Who Lived Here? Population of Israel and Palestine Through 3,500 Years*](https://www.youtube.com/watch?v=Bsf6Uza9cgA), a bar-chart-race animation researched and produced by Uri Mishol as an independent project.

**Current dataset version:** 2.15.3  
**Coverage:** 1500 BCE–2026 CE  
**Territory:** modern Israel excluding the Golan Heights, the West Bank including East Jerusalem, and the Gaza Strip

Ancient and medieval values are uncertainty-aware scholarly reconstructions rather than census counts. Modern anchors combine censuses, official estimates and geographically reconciled statistical series. The project is designed as a reproducible historical-demographic visualization, not as a claim about present-day sovereignty, ownership, political rights, exclusive ancestry or indigeneity.

## Reading the visualization

- **Solid bars** show the selected reconstruction used by the animation.
- **Faded extensions**, where present, show a plausible upper scenario for that community.
- Community upper scenarios are independent and must not be added together.
- **Other / Unknown** is a substantive residual for locally rooted, mixed or insecurely classified residents; it is not one homogeneous community.
- Labels change with the historical period. A continuous visual series does not imply an unchanged identity through time.

## Repository contents

### Data

| File | Purpose |
|---|---|
| [`data/animation-anchors.csv`](data/animation-anchors.csv) | Population endpoints, plausible uppers, labels, events, context text, transition profiles and source IDs. |
| [`data/communities.csv`](data/communities.csv) | Stable community identifiers, colours, labels and ordering. |
| [`data/transitions.csv`](data/transitions.csv) | Qualitative split, merge and rename relationships. |
| [`data/sources.csv`](data/sources.csv) | Compact source registry. |
| [`data/timing.csv`](data/timing.csv) | Explicit minimum display holds. |
| [`data/dataset-manifest.json`](data/dataset-manifest.json) | Version, territory, filenames, provenance and authoritative anchor hash. |

Exact SHA-256 values for the six released data files are recorded in [`CHECKSUMS.sha256`](CHECKSUMS.sha256).

### Documentation

| File | Purpose |
|---|---|
| [`METHODOLOGY.md`](METHODOLOGY.md) | Geographic scope, evidence hierarchy, uncertainty model, community classification and period reconstruction methods. |
| [`SOURCE-NOTES.md`](SOURCE-NOTES.md) | Expanded bibliography, derivations, source types and territorial limitations. |
| [`DATA-SCHEMA.md`](DATA-SCHEMA.md) | Dataset structure, transition semantics and validation requirements. |
| [`CITATION.cff`](CITATION.cff) | Machine-readable citation metadata. |
| [`LICENSE.md`](LICENSE.md) | CC BY 4.0 terms for the original compilation and documentation. |

## Data authority

`data/animation-anchors.csv` is the sole current authority for population values, plausible uppers, labels, events, context text, anchor semantics and population-transition profiles.

The manifest retains an earlier research-artifact filename and hash as provenance metadata. That earlier artifact is not a required release file or a competing current dataset. The current anchor SHA-256 is:

`91E6252C242FB7534293DE55178509AADF8006176D44204583CEAF9DD16662B4`

## Validation

The repository includes a standalone validator with no third-party dependencies. With Node.js 18 or later:

```bash
npm test
```

Validation checks the manifest and anchor hash, checksums, CSV structure, anchor chronology, population arithmetic, plausible uppers, source-ID integrity, community configuration, transition relationships and timing references.

## Corrections

Evidence-based corrections are welcome. Please identify the affected anchor, community and source ID; provide a credible archaeological, historical or demographic source; and explain any territorial mismatch.

## Citation

Suggested citation:

> Mishol, Uri. *Historical Populations in the Territory of Modern Israel, the West Bank and Gaza*. Dataset version 2.15.3, 2026. https://github.com/urimishol/israel-palestine-population-history

## Licence

Except for independently copyrighted third-party materials and source publications, the original dataset compilation and documentation are licensed under [CC BY 4.0](LICENSE.md).
