# Research audit and supersession record

**Current release:** v2.14.2  
**Runtime anchor SHA-256:** `C36994A3B70E8AECC8EFEDA926DF2F9E6BA9E8FECEDD13DEC0E4F05050942895`

This document records how the current dataset emerged from successive research passes. It distinguishes live conclusions from historical drafts so that earlier estimates remain intelligible without competing with production.

## Audit principles

1. Preserve evidence and reasoning even when a numeric recommendation is superseded.
2. Keep only one current numeric authority: `data/animation-anchors.csv`.
3. Mark research-generated values as estimates, allocations, back-calculations or interpolations.
4. Preserve territorial mismatch and identity cautions.
5. Do not turn incomplete bibliographic records or internal search markers into invented citations.
6. Treat runtime implementation decisions separately from historical-demographic decisions.

## Research sequence

### 1. Initial source map and Run 1 framework

The first pass mapped the changing evidence base from archaeology through modern official statistics. It established:

- a fixed modern territory;
- resident populations only;
- period-sensitive categories;
- Other / Unknown where classification is insecure;
- transparent interpolation;
- explicit source types and territorial mismatch;
- a 39-anchor plan beginning at 1200 BCE.

These methodological rules remain foundational. The original starting year and anchor count do not: later work added the 1500, c.850 and c.100 BCE anchors, producing the current 42-anchor dataset.

The initial report contains internal search-session citation markers. They are historical evidence of the research process but are not durable public citations.

### 2. Preview numeric dataset

`deep-research-report(2).md` supplied the first complete numerical preview and source families S01–S20. It was explicitly confidence-weighted and identified the weakest zones: the Iron Age opening, Persian/Hellenistic splits, Roman–Byzantine community shares, medieval totals, 1948 and the 2023–2026 stitch.

The preview was valuable as a scaffold but is not current data. Major superseded examples include:

- 1200 BCE total 250,000 rather than 150,000;
- 1000 BCE total 350,000 rather than 180,000;
- no c.850 or c.100 anchor;
- 63 BCE total 700,000 and Jews 450,000 rather than 500,000 and 280,000;
- the pre-S26 Roman–Byzantine allocations.

The preview's embedded citations use non-portable internal markers; retained stable references were moved into `SOURCE-NOTES.md` where available.

### 3. Late Bronze opening review — S21

The 1500 BCE review added one combined anchor with a 75,000 / 150,000 / 250,000 low/selected/high scenario. It rejected retrojection of later identities and treated the opening bar as all residents, not an arithmetic residual.

This decision superseded Run 1's 1200 BCE start while preserving the fixed territory and uncertainty rules.

### 4. Divided monarchy review — S22

The targeted Iron Age report defended a c.850 BCE fork because two political systems are clearer in ninth-century inscriptions and archaeology than at a conventional c.930 division date. It also established the correct qualitative aftermath of 722:

- the 722 row is an eve-of-conquest scenario;
- the Kingdom of Israel falls, but its residents do not vanish;
- the temporary Israelite political bar flows qualitatively toward Judeans and Other / Unknown;
- the later Samaritan category can emerge from a broader northern/local parent without a total-descent claim.

The report's first numeric calculation used an older brief with 1000 BCE total 350,000 and produced c.850 total 380,000. The standalone S22 note then reconciled the calculation to a 1000 BCE total of 150,000 and produced c.850 total 285,000.

Subsequent opening-trajectory work adopted 180,000 at 1000 BCE and 300,000 at c.850 BCE. The current runtime and S24 decision record those authoritative values. The earlier S22 calculations remain useful only for their method and evidence.

The original proposed visible label “Northern Israelites” was rejected. Production displays **Israelites**; `northern_israelites` remains an internal ID.

### 5. Hasmonean audit — S23

The 167–63 BCE audit tested the apparent rise from 90,000 to 450,000 Jews and concluded that the original trajectory was too steep and too easily misread as biological growth.

It adopted:

- 167 BCE total 280,000; Jews 90,000;
- a new c.100 BCE anchor with total 400,000; Jews 180,000;
- 63 BCE total 500,000; Jews 280,000.

The review retained large Samaritan, Hellenistic and unresolved local populations. Jewish growth was attributed qualitatively to natural increase, migration, settlement, incorporation or conversion and changing visibility. Political expansion was explicitly separated from fixed-territory population growth.

The recommended-row CSV was an implementation handoff. Once integrated, it ceased to be an independent authority.

### 6. Philistine and narrative-balance review — S24

The pre-Hellenistic audit asked whether a non-Israelite community could receive a defensible temporary bar. It concluded that the Philistines met the threshold because settlement-based regional estimates exist, while other candidates did not.

The review:

- added 25,000–50,000 selected Philistine allocations from 1200 through 701 BCE;
- deducted them from Other / Unknown without changing totals or existing named populations;
- ended the category through a c.604–586 BCE qualitative merge;
- added early Other / Unknown plausible uppers where a coherent residual was available;
- broadened context beyond Jewish political history;
- clarified terminology for the Kingdom of Israel and Kingdom of Judah.

The S24 decision also recorded the later authoritative 1000 and c.850 totals, superseding S22's numeric reconciliation. Some exact context text in that addendum was subsequently edited; production wording now lives only in the anchor CSV.

The recommended-row CSV was a temporary handoff and is superseded by the current runtime.

### 7. Mandate Muslim-growth context — S25

S25 added one contextual source supporting the interpretation that most Muslim growth during the Mandate resulted from births exceeding deaths. It did not alter the 1882 or 1945 endpoints and did not create a new demographic series.

### 8. Roman–Byzantine adversarial audit — S26

The S26 audit reviewed 70, 135, 250, 324, 450, 529, 614 and 638 CE against settlement archaeology, revolt studies, Christianization research, Samaritan scholarship and conquest archaeology.

Its principal corrections were:

- preserve severe but regionally uneven Jewish losses after 70 and 135;
- raise continuing Jewish visibility in Galilee and elsewhere;
- treat Samaritan estimates as project allocations rather than ancient counts;
- shift the selected settlement high point from 450 to 529;
- slow Christian demographic growth relative to imperial institutional support;
- end the separate imperial-settler category after 135;
- remove Sasanian forces from the resident population;
- reduce 638 resident Muslims to a small early post-conquest allocation;
- retain substantial Other / Unknown;
- construct coherent low/selected/high scenarios rather than independent maxima.

The audit's selected values and high scenarios were integrated under S26. Production lacks low columns, so the low scenarios remain only in `SOURCE-NOTES.md`.

The S26 decision initially instructed `shock` at 70. A later animation-timing review changed the 70 transition to gradual without changing endpoints or semantics. The v2.14.2 runtime therefore supersedes that one implementation instruction.

### 9. Schema-v2 runtime migration

The implementation migrated remaining hard-coded content into normalized data files:

- community configuration to `communities.csv`;
- split, merge and rename behavior to `transitions.csv`;
- source-ID validation to `sources.csv`;
- explicit minimum holds to `timing.csv`;
- version, filenames and provenance to `dataset-manifest.json`.

The redundant anchor-level lineage directive was removed. Population interpolation and lineage overlays became independent, allowing the c.604–586 demographic shock window and Philistine qualitative merge to be validated separately.

The migration audit supplied with the application describes the v2.12.0 transition migration. It is historical implementation documentation, not a current runtime input. This consolidated audit records the final v2.14.2 state.

### 10. Final transition-timing review — v2.14.2

The final timing patch changed four runtime cells without changing population or plausible-upper endpoints:

- 70 `transition=gradual`;
- 749 `transition=gradual`;
- 1099 `transition=gradual`;
- 1099 `transition_profile=gradual_demography_event_settlers`.

For 749→1099, existing communities interpolate gradually. Crusader settlers remain zero until the final event window, then their selected and upper bars appear together. The displayed total is recalculated from displayed communities throughout the mixed transition.

## Supersession matrix

| Historical material | Current treatment |
|---|---|
| Initial source-map report | Methodological history; stable citations retained where possible. |
| Run 1 decision note | Core rules retained; 1200 start and 39-anchor count superseded. |
| Preview numeric dataset | Historical scaffold only; no current numbers. |
| 1500 BCE v0.5 CSV | Historical implementation handoff; superseded by runtime. |
| S21 decision/source note | Active evidence and interpretation; runtime controls exact fields. |
| Iron Age research report | Evidence and qualitative logic retained; original numbers superseded. |
| S22 decision/source note | Qualitative logic retained; c.850 values and visible label superseded. |
| S23 decision/source note | Active conclusions; current runtime controls wording and timing. |
| Hasmonean recommended rows | Superseded implementation handoff. |
| S24 decision/source note | Active numeric and interpretive conclusions; runtime controls final wording. |
| Philistine recommended rows | Superseded implementation handoff. |
| S26 decision/research report | Active demographic conclusions; v2.14.2 supersedes the 70 timing instruction. |
| Application migration audit | Historical implementation record through v2.12.0. |
| `animation-anchors.csv` v2.14.2 | Sole current anchor authority. |

## Current evidence gaps

The consolidation does not make the evidence stronger than it is. Important unresolved limitations include:

- incomplete durable bibliography for several early source families, especially S02, S06, S08 and parts of S13–S20;
- no direct fixed-polygon counts for ancient or medieval anchors;
- identity inference from material culture and regional political labels;
- large uncertainty in Samaritan, Armenian and other small-community allocations;
- uneven territorial matching across ancient provinces and archaeological surveys;
- no single official fixed-territory series for 1948, 1961 or 1967;
- overlapping Jerusalem geographies in modern Israeli and Palestinian statistics;
- provisional Gaza data after 2023.

Future revision should prioritize complete bibliographic recovery and targeted audits of weak periods. It should not create precision merely to fill blanks.

## Archival policy

The separate historical reports, addenda and recommended-row CSVs may be retained outside the active Project Sources as an archive. They should not be loaded alongside the consolidated documents as parallel binding guidance. For active work, use:

1. `PROJECT-GUIDE-AND-DECISIONS.md`;
2. `SOURCE-NOTES.md`;
3. this research audit;
4. `DATA-SCHEMA.md`;
5. the current normalized runtime data.
