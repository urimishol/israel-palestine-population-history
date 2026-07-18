# Project guide and consolidated decisions

**Project:** Historical Population of Israel, the West Bank and Gaza  
**Current dataset:** v2.14.2  
**Status:** authoritative project guidance  
**Territory:** modern Israel excluding the Golan Heights, plus the West Bank including East Jerusalem, plus Gaza

This document replaces the project's separate active decision notes. It records the current rules and adopted decisions without treating superseded draft values as live alternatives. The detailed evidence and derivations are in [`SOURCE-NOTES.md`](SOURCE-NOTES.md); the history of revisions is in [`RESEARCH-AUDIT.md`](RESEARCH-AUDIT.md).

## Authority

When project materials disagree, use this domain-specific order:

1. `data/animation-anchors.csv` controls current population values, plausible uppers, labels, events, context text, anchor semantics and population-transition profiles.
2. `data/communities.csv` controls community identifiers, colours and stable ordering.
3. `data/transitions.csv` controls explicit split, merge and rename relationships.
4. `data/sources.csv` controls valid source IDs used by the runtime.
5. `data/timing.csv` controls explicit minimum display holds.
6. `data/dataset-manifest.json` controls the dataset version, runtime filenames, territory and authoritative anchor hash.
7. This document controls methodology and adopted interpretation where the runtime files do not encode it.
8. Earlier decision notes, source notes and research reports provide evidence and revision history; they do not override the current runtime.

The runtime files are deliberately normalized. They must not be recombined into a competing master CSV.

## Scope and method

### Fixed territory

Use the same modern polygon at every anchor:

- Israel excluding the Golan Heights;
- the West Bank including East Jerusalem;
- Gaza.

Ancient kingdoms, Roman and Byzantine provinces, Ottoman districts, Mandate Palestine and modern statistical jurisdictions rarely match this polygon exactly. Territorial mismatch must be stated; source-era totals must not be transferred mechanically.

### Residents only

Include people resident inside the polygon. Exclude temporary armies, pilgrims, transient garrisons and short-lived expeditionary forces. Refugees and migrants are included when they reside inside the polygon at the relevant anchor.

### Evidence and uncertainty

Every estimate must be traceable to one or more of:

- direct census or official enumeration;
- administrative or fiscal evidence;
- published scholarly estimate;
- project reconstruction or back-calculation with explicit assumptions;
- interpolation between documented anchors.

Ancient and medieval values are rounded scenarios, not census equivalents. `plausible_upper` fields are visual uncertainty scenarios, not statistical confidence limits. Community uppers are independent and must not be summed. A total-population upper is independently chosen.

The runtime does not retain low scenarios. Where targeted research constructed coherent low, selected and high columns, the low scenarios remain documented in `SOURCE-NOTES.md` rather than in production.

### Interpretation

The dataset supports a reproducible visualization, not a claim about present-day ownership, rights, legitimacy or exclusive indigeneity. Political control, material culture, language, ancestry and religious identity are not interchangeable.

## Community model

| Runtime ID | Historical treatment |
|---|---|
| `israelite_jewish` | One visualization continuity series with period-sensitive labels: Proto-Israelites, Israelites, Judeans and Jews. The continuity is semantic and visual, not a claim of unchanged identity. |
| `northern_israelites` | Temporary internal series for residents associated with the Kingdom of Israel. Its visible label is **Israelites**, never “Northern Israelites.” |
| `philistines` | Temporary early-Iron-Age category for the historically mixed population of Philistia, not a count of Aegean migrants or homogeneous ancestry. |
| `samaritans` | Separate only once historically distinguishable; never retrojected to the Bronze or early Iron Age. |
| `imperial_settlers` | Episodic resident immigrant, colonial or settler communities. Temporary armies and merely Hellenized, Romanized or Greek-speaking locals are excluded. |
| `christians` | Separate from the middle Roman period; imperial support in 324 is not treated as instant conversion. |
| `muslims` | Separate only after the Arab-Muslim conquest; 638 is not an instant Muslim-majority switch. |
| `druze` | Used only from the medieval period onward. |
| `armenians` | Small separate visibility allocation where resident Armenian communities are securely attested; excluded from the Christian bar to prevent double-counting. |
| `circassians` | Used only after late-Ottoman settlement. |
| `other_unknown` | Substantive residual for locally rooted, mixed or insecurely classified residents. It is not one homogeneous community. |

## Anchor set

The current runtime contains 42 anchors:

1500, 1200, 1000, c.850, 722, 701, 586, 538, 400, 332, 167, c.100 and 63 BCE; 70, 135, 250, 324, 450, 529, 614, 638, 749, 1099, 1187, 1291, 1348, 1517, 1596, 1872, 1882, 1914, 1922, 1931, 1945, 1948, 1961, 1967, 1997, 2007, 2017, 2023 and 2026 CE.

## Consolidated adopted decisions

### D01 — 1500 BCE opening

The animation begins at 1500 BCE with all residents combined:

| Category | Selected | Plausible upper |
|---|---:|---:|
| Canaanites and other local communities | 150,000 | 250,000 |
| Total | 150,000 | 250,000 |

The research low scenario is 75,000. No later community is back-projected into this anchor. The gradual separation toward 1200 BCE represents improved analytical visibility, not sudden population replacement.

This decision supersedes Run 1's original instruction to begin at 1200 BCE.

### D02 — Early Iron Age and the two kingdoms

The authoritative selected allocations are:

| Anchor | Proto-Israelites / Israelites / Judeans | Israelites associated with the Kingdom of Israel | Philistines | Other / Unknown | Total |
|---|---:|---:|---:|---:|---:|
| 1200 BCE | 17,500 | — | 25,000 | 107,500 | 150,000 |
| 1000 BCE | 65,000 | — | 30,000 | 85,000 | 180,000 |
| c.850 BCE | 40,000 | 120,000 | 40,000 | 100,000 | 300,000 |
| 722 BCE | 80,000 | 160,000 | 50,000 | 110,000 | 400,000 |
| 701 BCE | 220,000 | — | 50,000 | 90,000 | 360,000 |
| 586 BCE | 70,000 | — | — | 130,000 | 200,000 |

The c.850 fork is a visualization shorthand for two ninth-century political-regional systems becoming clearer. It does not assert an exact c.930 division, biological fission, homogeneous kingdoms or population replacement.

At 722 BCE the values describe the eve of the final Assyrian conquest. The Kingdom of Israel falls in the following transition; its inhabitants do not disappear. At 701 BCE the political bar ends and its lineage flows qualitatively toward the Judean continuity series and Other / Unknown. No transfer percentage is inferred.

The c.850 total of 300,000 supersedes the older reconciled S22 value of 285,000. The visible northern-kingdom label is **Israelites**; `northern_israelites` is only an internal ID.

### D03 — Philistine trajectory and pre-Hellenistic balance

The Philistine bar represents all inhabitants allocated to historically developing Philistia, including locally rooted people and migrants. Selected values are 25,000 at 1200 BCE, 30,000 at 1000 BCE, 40,000 at c.850 BCE and 50,000 at 722 and 701 BCE.

The category remains approximately stable after 701 BCE and merges rapidly into Other / Unknown around the Babylonian destruction horizon of c.604–586 BCE. Zero at 586 means that a separately measurable Philistine political-cultural category is no longer defensible; it does not mean that every person died or left.

Phoenician-linked coastal communities, Idumaeans, Assyrian-period resettlers and other reviewed candidates remain in period-sensitive context or Other / Unknown because no defensible fixed-territory population series exists for them.

### D04 — Samaritan emergence and Judeans-to-Jews rename

The Samaritan bar emerges analytically between 538 and 400 BCE from the broad northern/local population retained in Other / Unknown. The split does not imply that every northern survivor became Samaritan or that Samaritan identity began in a single year.

The long continuity series changes its visible label from Judeans to Jews between 400 and 332 BCE. This is a label transition, not a demographic transfer.

### D05 — Hasmonean demographic transition

The adopted selected trajectory is:

| Anchor | Jews | Samaritans | Hellenistic resident communities | Other / Unknown | Total |
|---|---:|---:|---:|---:|---:|
| 167 BCE | 90,000 | 75,000 | 15,000 | 100,000 | 280,000 |
| c.100 BCE | 180,000 | 65,000 | 20,000 | 135,000 | 400,000 |
| 63 BCE | 280,000 | 70,000 | 25,000 | 125,000 | 500,000 |

The Jewish trajectory combines natural increase, migration, settlement, incorporation or conversion, and changing historical visibility. No numerical allocation among these mechanisms is claimed. Political annexation inside the fixed polygon does not itself increase the total population.

The 63 BCE row represents the late-Hasmonean population immediately before Pompey's intervention. Hellenistic resident communities remain the relevant imperial category; Roman conquest does not create an immediate Roman settler population.

### D06 — Roman–Byzantine transition

The adopted selected totals and total plausible uppers are:

| Anchor | Selected total | Plausible upper | Required interpretation |
|---|---:|---:|---|
| 70 CE | 550,000 | 800,000 | Broader c.70–73 aftermath of the First Jewish Revolt; severe losses without Jewish disappearance. |
| 135 CE | 450,000 | 650,000 | Immediate post-Bar-Kokhba horizon; Judean devastation is not extrapolated to the entire polygon. |
| 250 CE | 700,000 | 900,000 | Broad middle-Roman recovery horizon. |
| 324 CE | 800,000 | 950,000 | Political and institutional turn under Constantine, not instant mass conversion. |
| 450 CE | 850,000 | 1,000,000 | Mid-fifth-century ascent or plateau; neither the peak nor a Christian majority is treated as secure. |
| 529 CE | 900,000 | 1,000,000 | Eve/early phase of the Samaritan revolt; cumulative losses occur afterward. |
| 614 CE | 820,000 | 950,000 | Conquest-year/short-aftermath horizon with broad settlement continuity; Sasanian forces are excluded. |
| 638 CE | 810,000 | 950,000 | Approximate c.640 post-conquest horizon; resident Muslims remain few and conversion is gradual. |

The selected high point among these anchors is 529, not 450. The imperial-settler bar is retained only at 70 and 135 and becomes zero thereafter. A separate Christian category begins at 250. Armenians receive only a small visibility allocation from 324. `Other / Unknown` remains substantial and is not synonymous with polytheists.

The full coherent low/selected/high research scenarios are preserved in `SOURCE-NOTES.md`. Production stores selected values and plausible uppers only.

### D07 — Mandate-period Muslim growth context

The 1882 and 1945 Muslim endpoints remain sourced to the late-Ottoman reconstruction and 1945 official estimate. S25 adds contextual support for the interpretation that most Mandate-period Muslim growth resulted from births exceeding deaths. It does not revise any population endpoint.

### D08 — Modern data and the 2023–2026 shock period

Post-1948 anchors stitch Israeli, Jordanian and Palestinian official series while reconciling overlapping Jerusalem geographies. Small communities may require supplementary allocations where official tables aggregate them.

The 2023 and 2026 anchors are provisional. War, mortality uncertainty, displacement, migration, disrupted enumeration and incompatible statistical geographies make ordinary interpolation inappropriate. These values must not be presented with census-like certainty.

### D09 — Runtime lineage and transition timing

Explicit lineage behavior comes only from `transitions.csv`. Relationships are visual and qualitative; population values interpolate independently toward authoritative anchor endpoints.

The current v2.14.2 timing supersedes earlier decision-note timing wherever they differ. In particular:

- 70 uses a gradual population transition into the broader post-revolt horizon;
- 135 remains a shock;
- 529 and 614 use gradual transitions;
- 749 uses a gradual transition;
- 1099 uses `gradual_demography_event_settlers`: pre-existing communities change gradually, while Crusader settlers appear only in the final event window;
- the 701→586 Babylonian profile holds demographic values until approximately 604 BCE, then applies the shock window;
- the Philistine lineage merge has its own c.604–586 window and remains independent of population interpolation.

### D10 — Current wording is data

Events, titles and context bodies in `animation-anchors.csv` are authoritative. Earlier draft wording in decision notes is retained only as research history. Narrative text should remain concise, use “the Kingdom of Israel” and “the Kingdom of Judah” where needed to avoid modern ambiguity, and use “Judeans,” not “Judahites.”

## Reproducibility rules

- Preserve the six runtime data files byte-for-byte for release v2.14.2.
- Verify the anchor SHA-256 against the manifest.
- Require every source ID referenced by an anchor to exist in `sources.csv`.
- Require selected community values to sum exactly to the selected total.
- Require each plausible upper to be blank or at least the selected value.
- Validate transition endpoints, community IDs, branch order and timing windows.
- Record future changes in a new dataset version and update this consolidated decision record rather than adding another parallel active note.
