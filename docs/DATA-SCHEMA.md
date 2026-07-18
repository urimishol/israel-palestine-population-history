# Dataset schema v2 runtime report

## Runtime authority

The animation application loads and validates schema v2 through
`public/data/dataset-manifest.json`; this public data repository mirrors those
runtime files byte-for-byte under `data/`. The current dataset is v2.14.2:

- authoritative research artifact:
  `historical-palestine-population-animation-anchors-v2.12.0-final.csv`;
- research-artifact SHA-256:
  `B546FF3882B8F6F1DDE27B5FA2083DDE6899806CFFC72E39E45234BA752FE79F`;
- public repository copy: `data/animation-anchors.csv`;
- runtime-anchor SHA-256:
  `C36994A3B70E8AECC8EFEDA926DF2F9E6BA9E8FECEDD13DEC0E4F05050942895`.

The runtime refuses to load when the anchor bytes do not match the manifest.
`content_identity_verified` is false because the runtime incorporates approved
schema and content updates beyond the listed research artifact. Release-integrity
projections verify the authoritative runtime values and presentation fields.
The named research artifact is retained as provenance metadata and is not a
required runtime file or a competing public dataset in this release.

## Runtime files

- `animation-anchors.csv`: historical anchors, selected values, uncertainty,
  labels, events, contexts, population transition profiles, and source IDs.
- `communities.csv`: community IDs, stable colors, defaults, and tie-break order.
- `transitions.csv`: qualitative lineage relationships and their visual timing.
- `sources.csv`: validated source registry.
- `timing.csv`: optional per-anchor minimum hold durations.
- `dataset-manifest.json`: version, provenance, territory, filenames, and hash.

`MIGRATION-AUDIT.md` is historical documentation, not a runtime input.

## Anchor data

Required production fields include:

- `year`, `year_label`, `total_population`, and nullable
  `total_population_plausible_upper`;
- one selected value and nullable plausible upper per configured community;
- period-specific community labels;
- evidence, era, event, transition, and three context title/label pairs;
- `transition_profile` and nullable `transition_start_year`;
- optional `context_card_order` presentation metadata;
- territory and source metadata.

Selected community values must be finite, nonnegative, and sum exactly to
`total_population`. Every plausible upper must be at least its selected value.
Total-population uncertainty is independent of community uncertainty and is not
constructed by summing community uppers.

Supported anchor transitions are `gradual` and `shock`. The supported
non-default profiles are `babylonian_shock_window` and
`gradual_demography_event_settlers`. The Babylonian profile requires a start
year strictly between adjacent anchors. The mixed settler profile requires a
blank start year, a gradual transition, a major event marker, a positive
`imperial_settlers` endpoint and plausible upper, a visible settler label, and
a zero settler value at the preceding anchor.

The anchor schema contains no explicit lineage directive. Runtime split, merge,
and rename behavior comes solely from normalized `transitions.csv` rows.

Blank or absent `context_card_order` values retain the default demographic,
population, then other context-card priority. The supported override
`population_context > demographic_context` shows the population card first and
the demographic card second without changing their semantic source columns.

## Lineage transitions

`transitions.csv` has these exact columns:

- `transition_id`, `from_year`, `to_year`;
- `operation`, `source_id`, `target_id`, `visual_style`, `branch_order`;
- nullable `transition_start_year`, `transition_end_year`.

Rows sharing a transition ID form an ordered multi-target relationship. Blank
start/end values use the full anchor-to-anchor segment. If either boundary is
present, both are required and must define a valid window inside the segment.
Transition endpoints must be adjacent anchor years. IDs, endpoint pairs,
source/target relationships, and branch orders must be unique where applicable;
branch orders must be contiguous and zero-based. Operations, visual styles,
community IDs, and operation/style combinations are validated generically.

Operations are `split`, `merge`, and `rename`. Supported visual styles are:

- `opening_analytical_emergence`;
- `split_child_flow`;
- `source_continuation`;
- `merge_source_flow`;
- `qualitative_merge`;
- `label_crossfade`.

Lineage relationships never transfer population arithmetically. Population
values always interpolate independently toward authoritative anchor values.

## c.604–586 BCE behavior

For the 701→586 BCE segment, the 586 anchor's
`babylonian_shock_window` profile holds all population values at their 701 BCE
state until c.604 BCE, then advances every selected value, plausible upper, and
the total toward the 586 BCE endpoint using shock easing.

The Philistine qualitative merge uses the independent start/end window in
`transitions.csv`. Population progress and lineage-overlay progress are computed
separately even though both currently use c.604–586 BCE.

## Mixed 749–1099 transition

For the 749→1099 segment, `gradual_demography_event_settlers` applies the
ordinary gradual progress to every pre-existing resident community. Crusader
settlers remain at zero until the final 25-frame event window, then their
selected value and plausible upper use the existing shock easing. The displayed
selected total is calculated from the displayed community values on every mixed
frame, preserving exact reconciliation and the authoritative endpoints.

## Timing and presentation

Minimum holds are read from `timing.csv` and converted with
`Math.round(seconds * 30)`. Code allocates the remaining reading time while
keeping the chart at 9,937 frames. Context-card holds additionally enforce the
display's four-words-per-second reading target with a 3.5-second minimum per
card; sequential two-card anchors account for their 0.4-second crossfade. The
full composition is 10,447 frames, including an unchanged 240-frame opening and
270-frame closing.

The chart displays at most eight positive communities, interpolates endpoint
ranks, preserves stable community colors, and uses minimum visible widths for
small positive values and uncertainty extensions.

## Validation

Generic validation covers schema, types, chronology, totals, uncertainty,
sources, context pairing, transition relationships/windows, duplicate
relationships, branch ordering, and timing rows.

Release-integrity validation additionally locks v2.14.2 hashes, exact years,
transition IDs, community/source counts, schedule and timeline-state snapshots,
minimum context reading windows, and frame-level c.604–586 invariants. It
confirms pre-window stability, destination equality, continuous total
reconciliation, and independent lineage and population progress.

The project exposes only the `PopulationRaceFullDraft` composition.
