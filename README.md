# Historical Population of Israel, the West Bank and Gaza, 1500 BCE–2026

This repository publishes the dataset behind *Who Lived Here? Population of Israel and Palestine Through 3,500 Years*, a bar-chart-race animation of estimated resident community populations within one fixed modern territory. The video and dataset were researched and produced by **Uri Mishol as an independent personal project**.

This is a historical-demography dataset, not a political argument. It brings together archaeological reconstruction, historical scholarship, administrative records, censuses and modern official statistics whose quality and geographic coverage vary greatly.

## Motivation

Modern national narratives—Zionist, Palestinian and others—often emphasize the historical periods and communities that most strongly support their own account, while giving less attention to other significant layers of the region’s history.

This project aims, as far as the evidence permits, to place these multiple historical layers in one frame. Viewers may recognize parts of the history that support the narrative familiar to them while also encountering periods and communities that narrative may have overlooked. The project does not claim perfect neutrality, complete objectivity or a final reconstruction of the region’s population history.

## Territory

The same territory is used throughout:

- Israel excluding the Golan Heights;
- the West Bank including East Jerusalem;
- Gaza.

Historical kingdoms, provinces, districts and source territories rarely match this polygon exactly. Territorial adjustments, locality-level combinations or approximations are therefore necessary, and significant mismatches are noted in the source guide and dataset metadata.

## What the dataset represents

- Resident populations only. Temporary armies, pilgrims and transient garrisons are excluded.
- Selected estimates for 40 anchor years from approximately 1500 BCE to 2026, rather than a continuous census series.
- Categories that change when communities become historically applicable or distinguishable.
- Interpolation in the animation between anchor years. Those intermediate frames are visualization output, not additional historical observations.
- A changing evidence base: ancient and medieval values are much less certain than modern census and official-statistics values.

The CSV contains the selected values used by the animation, evidence labels, scenario notes, source-family IDs and selected plausible-upper fields. Plausible-upper fields are uncertainty indicators, not symmetric statistical confidence intervals; they should not be summed across communities. Read them with `evidence_label` and `scenario_note`.

The source guide distinguishes direct or official enumeration, fiscal records, scholarly estimates, reconstruction or back-calculation, stitched official series and animation interpolation.

## Opening anchor: approximately 1500 BCE

At 1500 BCE all residents are combined as **Canaanites & other local communities**:

- low: 75,000;
- selected: 150,000;
- high: 250,000;
- quality: Very Low.

The selected value is a rounded visualization scenario derived from archaeological research, not a direct published estimate or census-like fact. The combined category includes residents of towns, farming villages and pastoral communities; it does not imply a single homogeneous people.

The gradual separation of communities after 1500 BCE represents improved historical identifiability, not sudden population replacement.

## Category caveats

- Early Israelites/Judahites and later Jews form one visualization series with period-sensitive labels. This provides continuity for the chart; it does not claim that identity, institutions or population boundaries were unchanged.
- Samaritans are separated only once they are historically distinguishable.
- Christians, Muslims, Druze, Armenians and Circassians appear only when historically applicable.
- Imperial communities are episodic resident groups, such as residents of Hellenistic poleis, Roman colonies or Frankish settlements—not occupying armies.
- **Other / Unknown** is retained whenever more precise identification is not defensible.

## Modern-period caveat

The 2023–2026 values are provisional, especially for Gaza. War, displacement, uncertain mortality and migration, disrupted enumeration, and differences between Israeli, Palestinian and humanitarian statistical geographies make this period unsuitable for ordinary trend extrapolation.

## Files

- [`historical-palestine-population-data-v1.0.csv`](historical-palestine-population-data-v1.0.csv) — the exact chart-ready anchor dataset used in the final video, published under a versioned filename.
- [`sources.md`](sources.md) — a period-by-period guide to the source IDs, source types, uses and limitations.
- [`LICENSE.md`](LICENSE.md) — licensing and third-party-material notice.

## Suggested citation

> Mishol, Uri. *Historical Population of Israel, the West Bank and Gaza, 1500 BCE–2026*. Version 1.0, 2026. GitHub: [github.com/urimishol/israel-palestine-population-history](https://github.com/urimishol/israel-palestine-population-history).

## Corrections

Evidence-based corrections are welcome. Please open a GitHub issue identifying the affected year, category and source ID, and provide a credible archaeological, historical or demographic source together with an explanation of the proposed change and any territorial mismatch.

## Scope of interpretation

Population history is historically significant, but it does not by itself establish contemporary ownership, territorial rights, exclusive indigeneity or political legitimacy.
