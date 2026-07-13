# Source guide

This guide connects the source IDs and source families in [`historical-palestine-population-data-v1.0.csv`](historical-palestine-population-data-v1.0.csv) to the research materials used in the project. A source ID can represent a family of evidence rather than a single publication. It may support a reconstruction or boundary assumption without directly supplying the published value.

The attached research notes did not always retain a complete title, publisher, URL or DOI. Missing details are identified rather than reconstructed from memory. Internal research-search markers have not been reproduced as public citations.

## How to read the source types

- **Direct census or official enumeration:** a source directly counted or officially estimated a population, although its territory or classifications may still require adjustment.
- **Administrative or fiscal source:** a register counted taxable households or another administrative unit; conversion to residents requires assumptions.
- **Scholarly estimate:** an author reconstructed population from archaeology, settlement area, historical evidence or long-run demographic reasoning.
- **Reconstruction or back-calculation:** the project combined evidence or applied explicit assumptions to create a fixed-territory anchor. The result is not a direct source value.
- **Stitched official series:** Israeli, Jordanian or Palestinian statistical components were combined and geographically reconciled.
- **Interpolation:** the animation derives movement between the published anchor rows. Interpolated frames are not separately sourced historical observations and are not included as rows in the CSV.

## 1. Late Bronze and Iron Age

| Source ID | Source and role | Type | Main use | Caveat |
|---|---|---|---|---|
| `S01_BROSHI_FINK_IA` | Archaeological and demographic syntheses by Magen Broshi and Israel Finkelstein; working source years in the research master are 1988 and 1992. Full publication entries were not retained in the supplied notes. | Scholarly archaeological estimate and project reconstruction | 1200, 1000, 722 and 701 BCE | No census exists. Population is inferred from settlement evidence, and early Israelite/Judahite identification remains period-sensitive. The source geography approximates, rather than exactly reproduces, the fixed territory. |

The separate 1500 BCE synthesis is documented in section 10.

## 2. Persian and Hellenistic periods

| Source ID | Source and role | Type | Main use | Caveat |
|---|---|---|---|---|
| `S02_PERSIAN_YEHUD` | Persian-period Yehud and Samaria demographic studies; the research master uses a working source year of 2006. The supplied notes do not preserve a complete bibliographic entry. | Scholarly reconstruction and back-cast | 586, 538 and 400 BCE | Yehud and Samaria do not equal the fixed modern territory. The values are back-casts, not enumerations. |
| `S03_HELLENISTIC_ROUGH` | Sergio DellaPergola, *Demography in Israel/Palestine: Trends, Prospects, Policy Implications*; Table 2 is described in the notes as giving “rough estimates” for long-run religious populations west of the Jordan River. Working source year: 2001. Publication and URL were not retained. | Scholarly long-run estimate; contextual input to reconstruction | 332, 167 and 63 BCE, with later contextual use at 250, 638 and 749 CE | West-of-Jordan totals are not direct counts for the exact project polygon, and the source does not independently enumerate every visualization category. |
| `S05_SAMARITAN_STUDIES` | Samaritan demographic scholarship and reference overviews; see section 9. | Supplementary scholarly evidence | Samaritan separation from 400 BCE and later Samaritan scenarios | Ancient Samaritan estimates vary enormously and are not direct enumerations. |

## 3. Roman and Byzantine periods

| Source ID | Source and role | Type | Main use | Caveat |
|---|---|---|---|---|
| `S04_BROSHI_1980` | Magen Broshi, “The Population of Western Palestine in the Roman-Byzantine Period” (1980). Publication and stable URL were not retained in the supplied notes. | Scholarly archaeological estimate | Total-population bounds and reconstructions from 63 BCE through 614 CE | The work supports broad totals and density constraints, not direct year-by-year community counts. “Western Palestine” is only a near match to the fixed territory. |
| `S05_SAMARITAN_STUDIES` | Samaritan demographic scholarship summarized in the research notes. | Supplementary scholarly evidence and project reconstruction | Samaritan estimates from 400 BCE through the medieval period | Precise ancient numbers are not available; estimates before and around the Byzantine revolts vary widely. |
| `S06_ARMENIAN_HISTORY` | Palestine Studies, University of Washington Jewish Studies and related Armenian-history summaries. Exact articles and URLs were not retained. | Supplementary community history | Armenian scenarios from late antiquity onward | These materials establish presence and broad scale; they do not provide a complete fixed-territory census series. Armenians are often included within broader Christian totals and must be separated cautiously. |

Roman coloniae and other imperial-resident values are episodic reconstructions supported by Roman-period and urban evidence. They represent resident communities, not temporary armies or garrisons.

## 4. Early Islamic and medieval periods

| Source ID | Source and role | Type | Main use | Caveat |
|---|---|---|---|---|
| `S03_HELLENISTIC_ROUGH` | DellaPergola’s rough long-run anchors, described above. | Scholarly estimate and contextual constraint | Early Islamic total and religious-composition scenarios, especially 638 and 749 | Does not directly supply every community value. Conversion and Islamization are treated as gradual. |
| `S05_SAMARITAN_STUDIES` | Samaritan demographic scholarship. | Supplementary evidence | Small Samaritan populations | Very wide uncertainty; no census-like continuity. |
| `S06_CRUSADER_MEDIEVAL` | DellaPergola’s end-12th-century and 14th-century anchors, a Kingdom of Jerusalem population discussion, and Denys Pringle’s late-12th-century Jerusalem estimates. The research master records working source years 2001 and 2022; full entries were not retained. | Scholarly estimate and project reconstruction | 1099, 1187, 1291 and 1348 | Evidence is uneven and often urban or institutional. Frankish/Latin residents must be separated from armies. Source territories do not precisely match the fixed polygon. |
| `S06_ARMENIAN_HISTORY` | Armenian community histories described above. | Supplementary community source | Armenian residents in medieval urban centres | Presence is better established than fixed-territory totals. |

The medieval anchors are broad shock scenarios rather than direct enumerations. This is especially important for the Crusader conquests, the end of the coastal Crusader regime and the Black Death.

## 5. Ottoman period

| Source ID | Source and role | Type | Main use | Caveat |
|---|---|---|---|---|
| `S07_OTTOMAN_EARLY` | Wolf-Dieter Hütteroth and Kamal Abdulfattah’s study of late-16th-century Ottoman registers (working source year 1977), with related town summaries. Amnon Cohen and Bernard Lewis are identified in the earlier source map as contextual sources for urban religious breakdowns; their full entries were not retained. | Fiscal register plus household-to-person reconstruction | 1517 back-cast and 1596 benchmark | Tax registers count taxable households, not the de jure population. The project uses an explicit household multiplier. Ottoman districts do not match the fixed territory, and mobile or exempt residents may be missed. |
| `S08_OTTOMAN_1872` | A summary of the 1871–72 Ottoman census and related demographic reconstruction; working source year 2013. Exact author, title, institution and URL were not retained. | Near-match official count plus reconstruction | 1872 | Bedouin coverage and administrative boundaries are uncertain. The dataset therefore rates this anchor low quality. |
| `S09_MCCARTHY_1882_1914` | Justin McCarthy, *The Population of Palestine* (1990), together with Ottoman records, PalQuest and related summaries. Publisher and URL were not retained. | Critical reconstruction from official records | 1882 and 1914 | Official counts omitted or classified some foreign residents differently; the 1882 estimate includes a resident-foreign-Jew correction. Ottoman boundaries and treatment of Bedouin populations require approximation. |
| `S06_ARMENIAN_HISTORY` | Armenian population histories described in section 9. | Supplementary community source | Armenian estimates in 1517, 1882 and 1914 | Used to separate a community often embedded in broader Christian totals. |

Circassian values begin only after late Ottoman resettlement and rely on settlement history plus later village, language or official categories. They are not projected into earlier periods.

## 6. British Mandate period

| Source ID | Source and role | Type | Main use | Caveat |
|---|---|---|---|---|
| `S10_CENSUS_1922` | J. B. Barron, *Palestine: Report and General Abstracts of the Census of 1922* (1923). Publisher and stable URL were not retained. | Direct official census | 1922 total and religious categories | Religion is measured more directly than ethnicity. Armenian and Circassian separation uses church, language or supplementary evidence, and some populations—especially Bedouin—were estimated or difficult to enumerate. |
| `S11_CENSUS_1931` | E. Mills, *Census of Palestine 1931* (1933). Publisher and stable URL were not retained. | Direct official census | 1931 total and religious categories | The Armenian and Circassian series require supplementary separation from broader census categories. |
| `S12_VILLAGE_STATS_1945` | *Village Statistics, April 1945* and the 1946 *Survey of Palestine* source tradition. Full issuing-body details and URLs were not retained. | Official estimate and administrative compilation | 1945 | This is an official benchmark rather than a new full census. “Others” is noted in the research material as mainly Druze; small-community separation uses supplementary evidence. |

British Mandate Palestine is a close territorial match, but the project still treats enumeration methods and small-category separation cautiously.

## 7. 1948–1967 reconstructions

| Source ID | Source and role | Type | Main use | Caveat |
|---|---|---|---|---|
| `S13_1948_RECON` | End-1948 Israel counts combined with 1949-era West Bank and Gaza demographic summaries. Exact underlying publication entries and URLs were not retained. | Project reconstruction from multiple near-period counts | 1948 | There was no single fixed-territory census in the war year. Refugees resident inside the polygon are included; people displaced outside it are not. Community values are reconstructed and the shock-year residual is not forced into a precise identity. |
| `S14_1961_RECON` | Israel’s early-1960s population, Jordanian 1961 West Bank census evidence, Gaza estimates and DellaPergola’s long-run series. The supplied notes do not retain the Jordanian census title or issuing-body details. | Stitched reconstruction | 1961 | The Jordanian census covers the West Bank but not Israel or Gaza; the fixed-territory result is therefore not one direct census. |
| `S15_1967_STITCH` | DellaPergola/Bachi’s west-of-Jordan total combined with direct Israeli enumeration of the West Bank and Gaza in 1967. Full entries and URLs were not retained. | Stitched official enumeration and scholarly total | 1967 | A wartime/postwar enumeration can miss people absent during or after the war. East Jerusalem and overlapping geographies require special handling. |

## 8. Modern Israeli, Jordanian and Palestinian statistics

| Source ID | Source and role | Type | Main use | Caveat |
|---|---|---|---|---|
| `S16_1997_STITCH` | Israel Central Bureau of Statistics (CBS) baseline plus the first Palestinian Central Bureau of Statistics (PCBS) census. | Stitched official statistics | 1997 | The PCBS “remaining West Bank and Gaza Strip” comparison and Israeli treatment of Jerusalem must be reconciled to avoid double counting. Full release titles and URLs were not retained. |
| `S17_2007_STITCH` | Israel CBS plus the second PCBS census. | Stitched official statistics | 2007 | The PCBS component covers the remaining West Bank and Gaza Strip; Jerusalem geographies require reconciliation. Full release titles and URLs were not retained. |
| `S18_2017_STITCH` | Israel CBS plus the third PCBS census and its religion table; the supplied research notes also retain a Samaritan community count of 796. | Stitched official statistics with a supplementary community count | 2017 | The PCBS religion universe excludes the parts of Jerusalem annexed by Israel in 1967 so that they are not added twice. Foreign residents and “other/not stated” categories are incompletely aligned. |
| `S19_2023_STITCH` | Israel CBS end-2023 population and religion splits plus PCBS Palestinian spatial components. | Provisional conflict-period stitch | 2023 | Gaza lacks a new wartime census. Area C, foreign residents, East Jerusalem, displacement and mortality create additional uncertainty. |
| `S20_2026_PROV` | Israel CBS April 2026 release plus the PCBS end-2025 population table. | Provisional conflict-period stitch and reconstruction | 2026 | The cited CBS release groups “Jews and others,” so the standalone Jewish value is a scenario split rather than a direct enumeration. Palestinian East Jerusalem is scaled out of the PCBS-side addition. Gaza mortality, displacement and migration remain unresolved. |
| No dataset ID | Relevant United Nations and humanitarian demographic material, including OCHA and UNRWA, identified in the source map. Exact releases and URLs were not retained. | Contextual and humanitarian evidence | Post-2023 disruption and plausibility checks | These sources support the decision to treat the period as a shock regime; the supplied notes do not identify them as direct suppliers of a specific published anchor value. |

The modern series is assembled from several statistical systems. “Stitched” therefore does not mean that one source directly published the fixed-territory total or every community split.

## 9. Small-community supplementary sources

| Source or family | Dataset connection | Role | Caveat |
|---|---|---|---|
| Samaritan demographic scholarship and reference overviews, including BibleInterp summaries | `S05_SAMARITAN_STUDIES` and later community counts inside stitched source families | Supports the date of separate identification, broad ancient scenarios and small modern counts | Full bibliographic entries were not retained. Ancient totals vary widely and are not direct census values. |
| Palestine Studies, University of Washington Jewish Studies and related Armenian-history summaries | `S06_ARMENIAN_HISTORY` | Supports Armenian presence and broad community scale, including roughly 2,000–3,000 before the First World War, growth to about 15,000 by 1925, and roughly 15,000 before 1948 | Exact articles and URLs were not retained. Armenian estimates are often separated from broader Christian totals and should not be mistaken for direct fixed-territory census counts. |
| Late Ottoman Circassian settlement history, followed by village, language and official-category evidence | Included within `S09_MCCARTHY_1882_1914`, `S10_CENSUS_1922`, `S11_CENSUS_1931`, `S12_VILLAGE_STATS_1945` and later stitched families | Supports the appearance and approximate scale of resident Circassian communities | No standalone source ID or complete bibliography was retained. Modern official tables often subsume Circassians under Muslim or Arab categories. |

## 10. 1500 BCE opening anchor

**Source ID:** `S21_LBA_1500_SYNTH`  
**Published scenario:** low 75,000; selected 150,000; high 250,000; quality Very Low.  
**Method:** `archaeology_fixed_territory_approx`.

The selected value is a rounded visualization scenario. None of the works below provides a direct census-like estimate for precisely 1500 BCE in the exact fixed project territory.

1. **Titus Michael Kennedy.** *A Demographic Analysis of Late Bronze Age Canaan: Ancient Population Estimates and Insights through Archaeology*. Doctoral thesis, University of South Africa, 2013. Kennedy synthesizes earlier western-Palestine estimates and constructs a broader Canaan-wide reconstruction including settled and mobile populations. Its geography is much larger than the project territory, so its totals are not transferred mechanically. [University of South Africa record](https://ir.unisa.ac.za/handle/10500/13257).

2. **Shlomo Bunimovitz.** *The Land of Israel in the Late Bronze Age: A Case Study of Socio-Cultural Change in a Complex Society*. Doctoral dissertation, Tel Aviv University, 1989. The estimate summarized by Kennedy is approximately 46,000–58,000 sedentary residents in western Palestine, excluding pastoral populations.

3. **Israel Finkelstein.** “The Territorial-Political System of Canaan in the Late Bronze Age.” *Ugarit-Forschungen* 28 (1996): 221–255. The estimate summarized by Kennedy is approximately 90,000 to not much more than 100,000 settled residents, based on an expanded site inventory.

4. **Magen Broshi.** “Methodology of Population Estimates: The Roman-Byzantine Period as a Case Study.” In *Biblical Archaeology Today 1990* (1993), 420–425. The estimate summarized by Kennedy is approximately 60,000–70,000 settled residents in western Palestine near 1200 BCE.

5. **Magen Broshi and Ram Gophna.** “Middle Bronze Age II Palestine: Its Settlements and Population.” *Bulletin of the American Schools of Oriental Research* 261 (1986): 73–90. This supplies a near-period western-Palestine benchmark of approximately 140,000 settled inhabitants near the end of the Middle Bronze Age. [JSTOR record](https://www.jstor.org/stable/1357066).

6. **Rivka Gonen.** “Urban Canaan in the Late Bronze Period.” *Bulletin of the American Schools of Oriental Research* 253 (1984): 61–73. This provides a settlement inventory and evidence for fewer and generally smaller urban settlements than in the preceding Middle Bronze period. [JSTOR record](https://www.jstor.org/stable/1356940).

7. **John Strange.** “The Palestinian City-States of the Bronze Age.” In Mogens Herman Hansen, ed., *A Comparative Study of Thirty City-State Cultures* (2000), 67–76. Strange summarizes published Late Bronze estimates spanning approximately 46,000–200,000 and emphasizes methodological uncertainty. [Royal Danish Academy publication](https://publ.royalacademy.dk/books/18/100).

### Derivation and territorial caveat

- **75,000 low:** accommodates the lowest sedentary reconstructions plus a modest allowance for residents missed by settlement surveys.
- **150,000 selected:** a rounded scenario near the late Middle Bronze benchmark and compatible with revised settled estimates plus uncounted rural and pastoral residents.
- **250,000 high:** accommodates older high estimates, missing settlements, mobile residents and uncertainty across the Middle-to-Late Bronze transition. It is a plausible upper scenario, not a claimed maximum.

“Western Palestine” is treated as a near territorial match. No mechanical area scaling is applied, and no direct estimate exists for precisely 1500 BCE in Israel excluding the Golan Heights, the West Bank including East Jerusalem, and Gaza.

At this anchor, `Other / Unknown` contains all residents and is displayed as **Canaanites & other local communities**. It is a combined category, not an arithmetic residual and not a claim of cultural homogeneity.
