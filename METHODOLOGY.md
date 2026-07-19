# Methodology and dataset design

**Dataset:** v2.15.3  
**Coverage:** 1500 BCE–2026 CE  
**Territory:** modern Israel excluding the Golan Heights, plus the West Bank including East Jerusalem, plus Gaza

## Purpose

This dataset supports a bar-chart-race visualization of historically distinguishable resident communities within one fixed modern territory. It combines direct censuses, official estimates, administrative evidence, published scholarship and explicit project reconstructions.

The visualization is not a claim about present-day sovereignty, ownership, political rights, exclusive ancestry or indigeneity. Political control, material culture, language, ancestry and religious identity are not interchangeable. Ancient and medieval values are scenarios constructed from incomplete evidence, not census equivalents.

## Geographic scope

The same polygon is used at every anchor:

- Israel, excluding the Golan Heights;
- the West Bank, including East Jerusalem;
- the Gaza Strip.

Ancient kingdoms, Roman and Byzantine provinces, Ottoman districts, Mandate Palestine and modern statistical jurisdictions rarely match this polygon. Source-era totals are therefore not transferred mechanically. Every reconstruction considers territorial mismatch, and uncertain or unassignable residents remain in **Other / Unknown**.

## Resident-population rule

The dataset includes people resident inside the fixed territory at the relevant anchor. It excludes temporary armies, pilgrims, transient garrisons and short-lived expeditionary forces. Refugees and migrants are included when they reside inside the territory at the anchor date.

## Evidence hierarchy

Each value is traceable to one or more of the following:

1. **Direct census or official enumeration** — a population counted or officially estimated within a defined jurisdiction.
2. **Administrative or fiscal evidence** — registers of households, taxpayers or settlements that require demographic conversion.
3. **Published scholarly estimate** — archaeological, historical or demographic reconstruction.
4. **Project reconstruction or back-calculation** — a transparent synthesis adjusted to the fixed territory and project categories.
5. **Interpolation** — a visualization method between documented anchors, not an independent historical observation.

The expanded source register, derivations and territorial cautions are documented in [`SOURCE-NOTES.md`](SOURCE-NOTES.md).

## Uncertainty model

Each anchor contains a **selected value** used for the solid bar. Where the evidence supports a broader scenario, a community may also have a **plausible upper** shown as a faded extension.

These upper values are visualization scenarios, not statistical confidence intervals:

- a community upper must be at least its selected value;
- community uppers are independent and must not be added together;
- the total-population upper is chosen independently and is not the sum of community uppers;
- the production dataset does not store low scenarios, although coherent low scenarios developed for selected periods are retained in `SOURCE-NOTES.md`;
- early values are rounded to avoid false precision.

At 1500, 1200, 1000 and c.850 BCE, the Other / Unknown upper is a conditional residual under the independently selected total-high scenario while the other communities remain at their selected values.

## Community classification

The categories are period-sensitive analytical groupings rather than timeless ethnic populations.

| Runtime ID | Treatment |
|---|---|
| `israelite_jewish` | One visualization continuity series with period-sensitive labels: Proto-Israelites, Israelites, Judeans and Jews. The continuity is semantic and visual, not a claim of unchanged identity. |
| `northern_israelites` | Temporary series associated with residents of the Kingdom of Israel. The visible label is **Israelites**; the internal ID prevents ambiguity in the data model. |
| `philistines` | Temporary early-Iron-Age category for the mixed population of historically developing Philistia, not a count of homogeneous ancestry or only Aegean migrants. |
| `samaritans` | Separate only once historically distinguishable; never retrojected to the Bronze or early Iron Age. The visible label is **Israelite Samaritans**, following the community's present-day self-designation. |
| `imperial_settlers` | Episodic resident immigrant, colonial or settler populations. Temporary armies and merely Hellenized, Romanized or Greek-speaking locals are excluded. |
| `christians` | Separate from the middle Roman period; imperial patronage is not treated as instantaneous mass conversion. |
| `muslims` | Separate only after the Arab-Muslim conquest; 638 is not treated as an immediate Muslim-majority switch. |
| `druze` | Used only from the medieval period onward. |
| `armenians` | Small separate visibility allocation where resident Armenian communities are securely attested; excluded from the Christian bar to avoid double-counting. |
| `circassians` | Used only after late-Ottoman settlement. |
| `other_unknown` | A substantive residual for locally rooted, mixed or insecurely classified residents. It is not one homogeneous community. |

## Anchor-year strategy

The runtime contains 42 anchors:

1500, 1200, 1000, c.850, 722, 701, 586, 538, 400, 332, 167, c.100 and 63 BCE; 70, 135, 250, 324, 450, 529, 614, 638, 749, 1099, 1187, 1291, 1348, 1517, 1596, 1872, 1882, 1914, 1922, 1931, 1945, 1948, 1961, 1967, 1997, 2007, 2017, 2023 and 2026 CE.

Anchors were selected where at least one of the following applies:

- a materially better evidentiary benchmark exists;
- a major demographic or political shock requires an endpoint;
- a community becomes historically distinguishable or ceases to be defensibly separable;
- a direct census or official statistical benchmark is available;
- an additional anchor is needed to prevent a misleading visual trajectory between distant endpoints.

## Period reconstructions

### Late Bronze Age opening

The animation begins at 1500 BCE with all residents combined because later identities cannot be separated defensibly.

| Category | Selected | Plausible upper |
|---|---:|---:|
| Canaanites and other local communities | 150,000 | 200,000 |
| Total | 150,000 | 200,000 |

The documented low research scenario is 75,000. A broader 250,000 figure is retained only as an outer sensitivity, not as the runtime upper. The gradual separation toward 1200 BCE represents increasing analytical visibility, not sudden population replacement.

### Early Iron Age and the two kingdoms

| Anchor | Proto-Israelites / Israelites / Judeans | Kingdom of Israel-associated Israelites | Philistines | Other / Unknown | Total |
|---|---:|---:|---:|---:|---:|
| 1200 BCE | 17,500 | — | 25,000 | 107,500 | 150,000 |
| 1000 BCE | 65,000 | — | 30,000 | 85,000 | 180,000 |
| c.850 BCE | 40,000 | 120,000 | 40,000 | 100,000 | 300,000 |
| 722 BCE | 80,000 | 160,000 | 50,000 | 110,000 | 400,000 |
| 701 BCE | 220,000 | — | 50,000 | 90,000 | 360,000 |
| 586 BCE | 70,000 | — | — | 130,000 | 200,000 |

The c.850 BCE fork is a visualization shorthand for two ninth-century political-regional systems becoming clearer. It does not imply an exact moment of biological or ethnic division. The 722 BCE anchor represents the eve of the final Assyrian conquest. The Kingdom of Israel then disappears as a political category, but its inhabitants do not vanish; subsequent values allow for continuity, deportation, migration, resettlement and reclassification without assigning an unsupported transfer percentage.

The Philistine series represents residents of historically developing Philistia. It remains visible through 701 BCE and merges into Other / Unknown across the Babylonian destruction horizon around 604–586 BCE. Zero at 586 BCE means that a separately measurable Philistine political-cultural category is no longer defensible, not that every resident died or left.

### Persian and Hellenistic periods

The Israelite Samaritan bar emerges analytically between 538 and 400 BCE from the broad northern and local population retained in Other / Unknown. This does not imply that every northern survivor became Samaritan or that Samaritan identity began in one year.

The long continuity series changes its visible label from Judeans to Jews between 400 and 332 BCE. This is a label transition rather than a demographic transfer.

The adopted Hasmonean-period trajectory is:

| Anchor | Jews | Israelite Samaritans | Hellenistic resident communities | Other / Unknown | Total |
|---|---:|---:|---:|---:|---:|
| 167 BCE | 90,000 | 75,000 | 15,000 | 100,000 | 280,000 |
| c.100 BCE | 180,000 | 65,000 | 20,000 | 135,000 | 400,000 |
| 63 BCE | 280,000 | 70,000 | 25,000 | 125,000 | 500,000 |

The Jewish increase combines natural increase, migration, settlement, incorporation or conversion, and changing historical visibility. The dataset does not allocate numerical shares among these mechanisms. Political annexation inside the fixed polygon does not itself increase the territorial population.

### Roman and Byzantine periods

| Anchor | Selected total | Plausible upper | Interpretation |
|---|---:|---:|---|
| 70 CE | 550,000 | 800,000 | Broad c.70–73 aftermath of the First Jewish Revolt; severe losses without Jewish disappearance. |
| 135 CE | 450,000 | 650,000 | Immediate post-Bar-Kokhba horizon; devastation in Judea is not extrapolated uniformly across the polygon. |
| 250 CE | 700,000 | 900,000 | Broad middle-Roman recovery horizon. |
| 324 CE | 800,000 | 950,000 | Political and institutional change under Constantine, not instantaneous mass conversion. |
| 450 CE | 850,000 | 1,000,000 | Mid-fifth-century ascent or plateau; the exact population peak and community shares remain uncertain. |
| 529 CE | 900,000 | 1,000,000 | Eve or early phase of the major Samaritan revolt; cumulative losses occur afterward. |
| 614 CE | 820,000 | 950,000 | Conquest-year or short-aftermath horizon with broad settlement continuity; Sasanian forces are excluded. |
| 638 CE | 810,000 | 950,000 | Approximate c.640 post-conquest horizon; resident Muslims remain few and conversion is gradual. |

The separate imperial-settler category is retained only at 70 and 135. A Christian category begins at 250, while Armenians receive only a small separate visibility allocation from 324. Other / Unknown remains substantial and is not synonymous with polytheists.

### Medieval and Ottoman periods

Medieval anchors combine settlement archaeology, documentary evidence, urban studies and rough regional demographic estimates. Crusader settlers represent resident Frankish and related communities, not temporary armies. The 749–1099 transition therefore keeps pre-existing communities on a gradual demographic path while introducing Crusader settlers only in the final event window.

Early Ottoman estimates use fiscal registers and household multipliers, adjusted for exemptions, mobile populations and boundary mismatch. The 1872, 1882 and 1914 anchors use increasingly direct official-era evidence but still require adjustments for administrative coverage, foreign residents, Bedouin enumeration and small communities.

### Mandate and modern periods

The 1922 and 1931 anchors use official censuses. The 1945 anchor uses the official administrative estimate in *Village Statistics* with supplementary allocations for small communities. The interpretation that most Mandate-period Muslim growth resulted from births exceeding deaths is treated as contextual evidence; it does not independently determine the endpoints.

Post-1948 anchors stitch Israeli, Jordanian and Palestinian official series while reconciling overlapping Jerusalem geographies. No single official series directly covers the fixed territory at 1948, 1961 or 1967.

The modern Israelite Samaritan values are:

| Anchor | Selected | Plausible upper | Basis |
|---|---:|---:|---|
| 1945 | 290 | 300 | Rounded interpolation between documented 1934 and 1948 community totals. |
| 1948 | 308 | — | Documented Holon/Israel plus Shechem total. |
| 1961 | 350 | 370 | Contemporary approximate Holon plus Nablus split. |
| 1967 | 400 | 420 | Rounded interpolation between 1963 and 1970, checked against the official Nablus-district count. |

The 2023 and 2026 anchors are provisional. War mortality, displacement, migration, disrupted enumeration, incompatible geographic definitions and the absence of a new Gaza census make ordinary interpolation inappropriate. These values must not be presented with census-like certainty.

## Interpolation and lineage transitions

Population endpoints and lineage graphics are independent:

- selected populations and plausible uppers interpolate toward authoritative anchor values;
- `gradual` transitions indicate continuous visual change;
- `shock` transitions concentrate change near an event horizon;
- split, merge and rename relationships in `transitions.csv` are qualitative visual relationships and do not arithmetically transfer population;
- the 701→586 BCE profile holds values near their 701 state until approximately 604 BCE, then applies the Babylonian shock window;
- the Philistine qualitative merge uses its own c.604–586 window;
- the 749→1099 profile changes existing communities gradually and introduces Crusader settlers only in the final event window.

## Source display

The animation footer is a compact provenance cue rather than a bibliography. It names representative evidence and identifies project syntheses, reconstructions, back-casts, stitches, interpolations, projections and allocations where necessary. Internal source IDs remain in the data for validation and traceability but are not shown to viewers.

## Limitations and future research

Important limitations remain:

- no direct fixed-polygon counts exist for ancient or medieval anchors;
- several early source families lack complete durable bibliographic records;
- archaeological material, political labels and religious or ethnic identities do not map neatly onto one another;
- ancient and medieval allocations for Israelite Samaritans, Armenians and other small communities are especially uncertain;
- ancient provinces, archaeological surveys and official statistical jurisdictions do not consistently match the fixed territory;
- 1948, 1961 and 1967 require stitched reconstructions rather than one official territorial count;
- modern Israeli and Palestinian series use overlapping Jerusalem geographies that require reconciliation;
- Gaza data after 2023 remain provisional.

Future work should prioritize bibliographic recovery and targeted audits of weak periods. It should not add numerical precision merely to fill gaps.

## Runtime authority and reproducibility

The normalized runtime files have distinct responsibilities:

1. `data/animation-anchors.csv` — population endpoints, uncertainty, labels, events, context text and population-transition profiles;
2. `data/communities.csv` — community identifiers, colours and stable ordering;
3. `data/transitions.csv` — explicit split, merge and rename relationships;
4. `data/sources.csv` — validated source registry;
5. `data/timing.csv` — explicit minimum display holds;
6. `data/dataset-manifest.json` — version, territory, filenames and authoritative anchor hash.

The public information repository contains one canonical copy of these six files under `data/`. The authoritative anchor SHA-256 for v2.15.3 is:

`91E6252C242FB7534293DE55178509AADF8006176D44204583CEAF9DD16662B4`

Selected community values must sum exactly to each selected total. Every source ID referenced by an anchor must exist in `sources.csv`. Plausible uppers must be blank or at least equal to their selected values. Transition endpoints, community IDs, branch order and timing windows must pass validation before release.
