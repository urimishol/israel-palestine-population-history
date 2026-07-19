# Dataset schema and release specification

**Dataset version:** 2.15.3  
**Schema version:** 2  
**Current anchor SHA-256:** `91E6252C242FB7534293DE55178509AADF8006176D44204583CEAF9DD16662B4`

## Data authority

The public information repository contains one canonical copy of the released dataset under `data/`.

`data/animation-anchors.csv` is the sole current authority for population values, plausible uppers, labels, events, context text, anchor semantics and population-transition profiles.

The manifest also preserves the provenance of the earlier research artifact:

- research artifact: `historical-palestine-population-animation-anchors-v2.12.0-final.csv`;
- research-artifact SHA-256: `B546FF3882B8F6F1DDE27B5FA2083DDE6899806CFFC72E39E45234BA752FE79F`;
- current released anchor: `animation-anchors.csv`;
- current anchor SHA-256: `91E6252C242FB7534293DE55178509AADF8006176D44204583CEAF9DD16662B4`;
- `content_identity_verified`: `false`.

The earlier artifact is provenance metadata, not a required release file and not a competing current dataset. Content identity is false because approved schema, data and presentation changes were incorporated after that artifact.

Any consumer or validator should reject the release if the bytes of `data/animation-anchors.csv` do not match the current hash recorded in the manifest.

## Release files

The `data/` directory contains exactly six authoritative files:

- `animation-anchors.csv`: historical anchors, selected values, uncertainty, labels, events, contexts, population-transition profiles and source IDs;
- `communities.csv`: community IDs, stable colours, default labels and tie-break ordering;
- `transitions.csv`: qualitative lineage relationships and their visual timing;
- `sources.csv`: validated source registry;
- `timing.csv`: optional per-anchor minimum hold durations;
- `dataset-manifest.json`: dataset version, schema version, territory, filenames, provenance and current anchor hash.

## Manifest

The manifest contains:

- `dataset_version`;
- `schema_version`;
- `territory_scope`;
- `authoritative_anchor.research_artifact_filename`;
- `authoritative_anchor.research_artifact_sha256`;
- `authoritative_anchor.runtime_filename`;
- `authoritative_anchor.sha256`;
- `authoritative_anchor.content_identity_verified`;
- the five runtime CSV filenames;
- `runtime_status`.

The `runtime_filename` identifies the current released anchor file. The research-artifact fields record lineage only.

## Anchor data

Required anchor fields include:

- `year`, `year_label`, `total_population` and nullable `total_population_plausible_upper`;
- one selected value and nullable plausible upper per configured community;
- period-sensitive community labels;
- evidence, era, event and transition metadata;
- three context title/label pairs;
- `transition_profile` and nullable `transition_start_year`;
- optional `context_card_order` presentation metadata;
- territory and source metadata.

Selected community values must be finite, nonnegative and sum exactly to `total_population`. Every populated plausible upper must be at least its selected value.

## Uncertainty

Total-population uncertainty is independent of community uncertainty and is not constructed by summing community uppers. Community uppers are likewise independent and must not be added together.

Total-population upper scenarios are retained as research metadata but are not displayed beside the selected Total Population value. At 1500, 1200, 1000 and c.850 BCE, the Other / Unknown plausible upper is the conditional residual under the independently selected total-high scenario while every other community remains at its selected value: 200,000, 157,500, 105,000 and 160,000 respectively.

The 1500 BCE current upper is 200,000. The broader 250,000 scenario is documented only as an outer research sensitivity.

## Population transitions

Supported anchor transitions are `gradual` and `shock`.

Supported non-default profiles are:

- `babylonian_shock_window`;
- `gradual_demography_event_settlers`.

The Babylonian profile requires a start year strictly between adjacent anchors. It holds the 701 BCE population state until approximately 604 BCE and then advances every selected value, plausible upper and the total toward the 586 BCE endpoint using shock easing.

The mixed settler profile requires:

- a blank `transition_start_year`;
- a gradual transition;
- a major event marker;
- a positive `imperial_settlers` endpoint and plausible upper;
- a visible settler label;
- zero settlers at the preceding anchor.

For the 749→1099 segment, pre-existing resident communities follow ordinary gradual progress. Crusader settlers remain at zero until the final event window, then their selected and upper values use shock easing. The displayed selected total is recalculated from displayed communities throughout the mixed transition.

## Lineage transitions

The anchor schema contains no explicit lineage directive. Split, merge and rename behaviour comes solely from `transitions.csv`.

`transitions.csv` has these exact columns:

- `transition_id`, `from_year`, `to_year`;
- `operation`, `source_id`, `target_id`, `visual_style`, `branch_order`;
- nullable `transition_start_year`, `transition_end_year`.

Rows sharing a transition ID form an ordered multi-target relationship. Blank boundaries use the full anchor-to-anchor segment. If either boundary is present, both are required and must define a valid window inside the segment.

Transition endpoints must be adjacent anchor years. IDs, endpoint pairs, source/target relationships and branch orders must be unique where applicable. Branch orders must be contiguous and zero-based.

Supported operations are:

- `split`;
- `merge`;
- `rename`.

Supported visual styles are:

- `opening_analytical_emergence`;
- `split_child_flow`;
- `source_continuation`;
- `merge_source_flow`;
- `qualitative_merge`;
- `label_crossfade`.

Lineage relationships never transfer population arithmetically. Population interpolation and lineage-overlay progress are computed independently. The Philistine qualitative merge uses its own c.604–586 BCE window even though the demographic shock uses the same broad horizon.

## Context ordering

Blank or absent `context_card_order` values retain the default demographic, population and then other context-card priority.

The supported override `population_context > demographic_context` shows the population card first and the demographic card second without changing their semantic source columns.

## Timing and presentation semantics

Minimum holds are read from `timing.csv` and converted at 30 frames per second with `Math.round(seconds * 30)` in the reference animation.

Context-card holds enforce:

- four words per second for context bodies;
- five words per second for all visible copy, including headings and event labels;
- exclusion of entry, crossfade and exit frames from readable time;
- a 3.5-second minimum per context card;
- at least 2.5 readable seconds for event-only anchors.

The reference animation displays at most eight positive communities, interpolates endpoint ranks, preserves stable community colours and uses minimum visible widths for small positive values and uncertainty extensions.

At evidence level 1, selected community labels, community-upper labels and the selected Total Population label are rounded to two significant digits at render time. Stored values, interpolation, totals and bar geometry retain exact precision.

Small evidence-level-2 bar values below 10,000 are shown to the nearest hundred. The same rule applies to the documented modern Israelite Samaritan series. Non-census `other_unknown` balancing residuals use two significant digits with a minimum hundred-person increment; exact census residuals retain recorded precision.

If a selected value and its plausible upper round to the same displayed value, the redundant upper annotation and faded extension are omitted.

The visible label is **Israelite Samaritans**, while the stable internal ID remains `samaritans`.

## Source metadata

Every `data_source_ids` value referenced by an anchor must exist in `sources.csv`.

The viewer-facing `data_source_label` is compact bibliographic shorthand. It may identify a project synthesis, reconstruction, back-cast, stitch, interpolation, projection or allocation. Internal source IDs remain available for validation and traceability but are not shown in the animation.

`SOURCE-NOTES.md` provides the expanded bibliography, derivations, territorial mismatches and source-type explanations.

## Validation requirements

Validation covers:

- schema and types;
- chronology;
- exact selected-total reconciliation;
- uncertainty rules;
- source-ID integrity;
- context-title and context-label pairing;
- transition relationships and windows;
- duplicate relationships;
- branch ordering;
- timing rows;
- the current anchor SHA-256 recorded in the manifest.

Release checks should also preserve the expected anchor years, transition IDs, community and source counts, readable context windows and the special transition invariants documented above.
