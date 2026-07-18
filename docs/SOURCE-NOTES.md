# Source notes and derivations

**Dataset:** v2.14.2  
**Territory:** modern Israel excluding the Golan Heights, plus the West Bank including East Jerusalem, plus Gaza  
**Population rule:** residents only

This guide connects every runtime source ID to its evidentiary role, derivation and limitations. A source ID can represent a family of evidence or a project synthesis; it does not imply that one publication directly supplied every population value attached to that ID.

`data/sources.csv` is the production registry. This document is the expanded public research record. Blank bibliographic fields in the runtime registry are not evidence that a source is absent; they reflect the decision to keep production metadata compact and byte-stable.

## Source types

- **Direct census or official enumeration:** a source counted or officially estimated a population, though geographic or classification adjustments may still be required.
- **Administrative or fiscal evidence:** a register counted households or another administrative unit; conversion to residents requires assumptions.
- **Scholarly estimate:** a published reconstruction from archaeology, settlement area, historical evidence or demographic reasoning.
- **Project reconstruction or back-calculation:** evidence and explicit assumptions were combined for the fixed territory; the result is not a direct source value.
- **Stitched official series:** components from different official systems were combined and geographically reconciled.
- **Interpolation:** used between anchors for visualization. Interpolated frames are not historical observations.

## Source register S01–S20

### S01_BROSHI_FINK_IA — Iron Age settlement syntheses

**Role:** 1200, 1000, 722 and 701 BCE baseline evidence, later reconciled through S22 and S24.  
**Type:** scholarly archaeological estimates plus project reconstruction.  
**Retained principal citation:** Magen Broshi and Israel Finkelstein, “The Population of Palestine in Iron Age II,” *Bulletin of the American Schools of Oriental Research* 287 (1992): 47–60. [Stable article record](https://www.journals.uchicago.edu/doi/10.2307/1357138).

No census exists. Settlement size, contemporaneity, persons-per-hectare assumptions and identity attribution are uncertain. Some published northern-kingdom totals include Gilead east of the Jordan; those residents are excluded. Earlier working notes also used an Iron I synthesis dated 1988, but did not retain a complete public bibliographic entry.

### S02_PERSIAN_YEHUD — Persian-period Yehud and Samaria studies

**Role:** 586, 538 and 400 BCE back-casts and the broad Yehud/Samaria framework.  
**Type:** scholarly reconstruction and project back-casting.

The original research record did not retain a single complete bibliographic entry for this source family. Yehud and Samaria cover only parts of the fixed territory; coastal districts, Idumaea and other regions remain in Other / Unknown. Return from exile is one demographic process among local continuity, movement and administrative change.

### S03_HELLENISTIC_ROUGH — Hellenistic and long-run demographic studies

**Role:** contextual input at 332 and 167 BCE and in the original long-run reconstruction.  
**Type:** rough scholarly estimate and project synthesis.  
**Retained citation:** Sergio DellaPergola, *Demography in Israel/Palestine: Trends, Prospects, Policy Implications* (2001), especially its explicitly rough long-run estimates.

West-of-Jordan totals are not direct fixed-polygon counts and do not enumerate every visualization category. S23 supersedes the former 167–63 BCE numeric trajectory; S26 supersedes the former 70–638 Roman–Byzantine trajectory.

### S04_BROSHI_1980 — Roman–Byzantine population reconstruction

**Role:** structural ceiling and order-of-magnitude constraint for Roman and Byzantine population.  
**Type:** scholarly archaeological-demographic back-calculation.  
**Citation:** Magen Broshi, “The Population of Western Palestine in the Roman-Byzantine Period,” *BASOR* 236 (1979): 1–10. [DOI](https://doi.org/10.2307/1356664); [accessible PDF](https://homepages.uc.edu/~martinj/Latin/Roman_Population/Broschi-%20Polulation%20of%20Western%20Palestine%20in%20the%20Roman-Byzantine%20Period.pdf).

Broshi's near-one-million maximum is a model based on urban area, density and agricultural capacity, not a census. S26 is the current source for the selected community trajectory from 70 through 638 CE.

### S05_SAMARITAN_STUDIES — Samaritan historical and demographic studies

**Role:** separate Samaritan visibility from 400 BCE and broad ancient/medieval scenarios.  
**Type:** specialist historical and archaeological scholarship plus project allocation.

Ancient Samaritan totals vary enormously and cannot be treated as direct counts. Useful modern syntheses include Reinhard Pummer, [“The Samaritans in Recent Research”](https://bibleinterp.arizona.edu/articles/2015/12/pum398030), and *The Samaritans: A Profile* (2016). S26 adds Crown and Chalmers for the Byzantine revolts and their historiography.

### S06_ARMENIAN_HISTORY — Armenian community history

**Role:** small resident Armenian allocations from late antiquity through the modern period.  
**Type:** supplementary community history and visibility allocation.

The initial research record cited Palestine Studies, University of Washington Jewish Studies and related Armenian histories but did not retain complete entries. Presence is better established than fixed-territory totals. Armenians are excluded from the Christian bar wherever separately shown, preventing double-counting. S26 adds a primary epigraphic source for late-antique Jerusalem.

### S06_CRUSADER_MEDIEVAL — Crusader and medieval demography

**Role:** 1099, 1187, 1291 and 1348 scenarios.  
**Type:** scholarly estimate and project reconstruction.

The family includes DellaPergola's rough end-twelfth- and fourteenth-century anchors, discussion of the Kingdom of Jerusalem, and Denys Pringle's late-twelfth-century Jerusalem work. Complete original entries were not retained. Evidence is uneven and often urban or institutional. Frankish residents are separated from armies; the category is not a count of all Crusaders present during conquest.

### S07_OTTOMAN_EARLY — Early Ottoman registers

**Role:** 1517 back-cast and 1596 fiscal benchmark.  
**Type:** Ottoman tax register plus household-to-person reconstruction.  
**Retained authors:** Wolf-Dieter Hütteroth and Kamal Abdulfattah (1977), supplemented in the original source map by Amnon Cohen and Bernard Lewis for urban religious breakdowns.

Registers count taxable households, not the de jure population. Household multipliers, exemptions, mobile residents and Ottoman districts create uncertainty. The fixed territory is approximated rather than copied from an Ottoman administrative total.

### S08_OTTOMAN_1872 — 1871–72 Ottoman population snapshot

**Role:** 1872 anchor.  
**Type:** near-match official count plus reconstruction.

The supplied research record did not retain a complete author/title/URL. Administrative coverage, Bedouin enumeration and boundary mismatch make this a low-confidence official-era anchor.

### S09_MCCARTHY_1882_1914 — Late Ottoman reconstruction

**Role:** 1882 and 1914 anchors.  
**Type:** critical reconstruction from official Ottoman records.  
**Principal retained citation:** Justin McCarthy, *The Population of Palestine* (1990), supplemented by Ottoman records and PalQuest summaries in the original research.

Official categories and foreign-resident treatment are not uniform. The 1882 reconstruction corrects for some resident foreign Jews; Druze, Armenians and Circassians require supplementary separation.

### S10_CENSUS_1922 — Palestine Census of 1922

**Role:** direct 1922 benchmark.  
**Type:** official census.  
**Citation:** J. B. Barron, *Palestine: Report and General Abstracts of the Census of 1922* (1923).

Religion is measured more directly than ethnicity. Bedouin and some small populations were difficult to enumerate. Armenian and Circassian series require church, language or supplementary evidence.

### S11_CENSUS_1931 — Palestine Census of 1931

**Role:** direct 1931 benchmark.  
**Type:** official census.  
**Citation:** E. Mills, *Census of Palestine 1931* (1933).

Small-community separation from broader religious and language categories remains partly reconstructed.

### S12_VILLAGE_STATS_1945 — 1945 official estimate

**Role:** final full pre-1948 benchmark.  
**Type:** official estimate and administrative compilation.  
**Citation:** *Village Statistics, April 1945*, read with the 1946 *Survey of Palestine* source tradition.

This is an official estimate rather than a new full census. The official “others” category is mainly Druze; Armenian and Circassian separation uses supplementary evidence.

### S13_1948_RECON — 1948 fixed-territory reconstruction

**Role:** war-year anchor.  
**Type:** project reconstruction from end-1948 Israel counts and near-period West Bank and Gaza evidence.

No single census covered the fixed polygon in 1948. Refugees resident within it are included; people displaced outside it are not. The categories and total represent a shock-year reconstruction, not a simultaneous direct enumeration.

### S14_1961_RECON — 1961 stitched reconstruction

**Role:** pre-1967 benchmark.  
**Type:** stitched reconstruction combining Israel, the Jordanian West Bank census and Gaza estimates.

The Jordanian census excludes Israel and Gaza. The result is not one official fixed-territory count.

### S15_1967_STITCH — 1967 official-data stitch

**Role:** 1967 anchor.  
**Type:** stitched official enumeration and scholarly total.

The source family combines DellaPergola/Bachi west-of-Jordan totals with Israeli West Bank and Gaza enumeration. Wartime absence, displacement and East Jerusalem treatment create uncertainty.

### S16_1997_STITCH, S17_2007_STITCH and S18_2017_STITCH

**Role:** modern census benchmarks.  
**Type:** stitched Israel Central Bureau of Statistics and Palestinian Central Bureau of Statistics data.

The stitches reconcile Israeli and Palestinian geographic universes, especially Jerusalem. The 2017 source family also supports the separately retained Samaritan count. Official categories do not always separate Armenians, Circassians, foreign residents or people with unstated religion.

### S19_2023_STITCH and S20_2026_PROV

**Role:** conflict-period anchors.  
**Type:** provisional stitch of Israeli and Palestinian official releases with geographic adjustment.

Gaza has no new wartime census. Mortality, displacement, migration, Area C, foreign residents and East Jerusalem create additional uncertainty. The 2026 source family uses Israel CBS 2026 and PCBS end-2025 data. These anchors are provisional shock scenarios, not ordinary projections.

## S21_LBA_1500_SYNTH — 1500 BCE opening

### Adopted scenario

| Scenario | Residents |
|---|---:|
| Low research scenario | 75,000 |
| Selected runtime value | 150,000 |
| High / plausible upper | 250,000 |

Quality is Very Low. All residents are combined because later identities cannot be separated defensibly. The selected value is a rounded visualization scenario, not a published point estimate.

### Principal evidence

1. Titus Michael Kennedy, *A Demographic Analysis of Late Bronze Age Canaan: Ancient Population Estimates and Insights through Archaeology* (doctoral thesis, University of South Africa, 2013). [Repository record](https://ir.unisa.ac.za/handle/10500/13257). Kennedy synthesizes western-Palestine estimates and a much larger Canaan-wide reconstruction; the larger geography is not transferred mechanically.
2. Shlomo Bunimovitz, *The Land of Israel in the Late Bronze Age* (doctoral dissertation, Tel Aviv University, 1989), summarized by Kennedy as roughly 46,000–58,000 sedentary residents in western Palestine, excluding pastoral populations.
3. Israel Finkelstein, “The Territorial-Political System of Canaan in the Late Bronze Age,” *Ugarit-Forschungen* 28 (1996): 221–255, summarized by Kennedy as approximately 90,000 to not much more than 100,000 settled residents.
4. Magen Broshi, “Methodology of Population Estimates: The Roman-Byzantine Period as a Case Study,” in *Biblical Archaeology Today 1990* (1993): 420–425, summarized as approximately 60,000–70,000 settled residents near 1200 BCE.
5. Magen Broshi and Ram Gophna, “Middle Bronze Age II Palestine: Its Settlements and Population,” *BASOR* 261 (1986): 73–90. [JSTOR](https://www.jstor.org/stable/1357066). This supplies a near-period benchmark of about 140,000 settled inhabitants.
6. Rivka Gonen, “Urban Canaan in the Late Bronze Period,” *BASOR* 253 (1984): 61–73. [JSTOR](https://www.jstor.org/stable/1356940).
7. John Strange, “The Palestinian City-States of the Bronze Age,” in *A Comparative Study of Thirty City-State Cultures* (2000): 67–76. [Publication](https://publ.royalacademy.dk/books/18/100). Strange summarizes published estimates spanning roughly 46,000–200,000.

### Derivation and mismatch

The low accommodates the smallest sedentary reconstructions plus a modest allowance for undercounted residents. The selected sits near the late Middle Bronze benchmark and allows for rural and pastoral residents. The high accommodates older upper estimates, missing sites and mobile populations. “Western Palestine” is only a near territorial match; no mechanical area scaling is applied.

## S22_IRON_AGE_TWO_KINGDOMS — divided monarchy and Assyrian aftermath

### Current adopted scenario

| Anchor | Group | Selected | Plausible upper |
|---|---|---:|---:|
| c.850 BCE | Israelites associated with the Kingdom of Israel | 120,000 | 160,000 |
| c.850 BCE | Judeans | 40,000 | 55,000 |
| c.850 BCE | Philistines | 40,000 | 50,000 |
| c.850 BCE | Other / Unknown | 100,000 | 100,000 |
| c.850 BCE | Total | 300,000 | 360,000 |
| 722 BCE | Israelites associated with the Kingdom of Israel | 160,000 | 210,000 |
| 722 BCE | Judeans | 80,000 | 110,000 |
| 722 BCE | Philistines | 50,000 | 50,000 |
| 722 BCE | Other / Unknown | 110,000 | 130,000 |
| 722 BCE | Total | 400,000 | 500,000 |

The original S22 reconciliation produced 285,000 at c.850 from an older 1000 BCE total of 150,000. The current 300,000 total and 100,000 residual were adopted later and are authoritative. The historical reasoning for a ninth-century fork and the 722 allocation remains applicable.

### Evidence and derivation

Broshi and Finkelstein's mid-eighth-century reconstruction supplies a later relative benchmark: approximately 222,500 residents in Israel west of the Jordan and 110,000 in Judah. The ratio is used cautiously as an allocation key, not as homogeneous ethnic counts. [Article](https://www.journals.uchicago.edu/doi/10.2307/1357138).

The ninth-century horizon is supported by the [Tel Dan stele](https://www.imj.org.il/en/collections/371407-0), state-formation syntheses and [radiocarbon work at Lachish](https://www.cambridge.org/core/journals/radiocarbon/article/lachish-fortifications-and-state-formation-in-the-biblical-kingdom-of-judah-in-light-of-radiometric-datings/49893FB9A29AE6696A2058962392A635). It does not establish an exact demographic date.

Assyrian inscriptions document deportation but do not enumerate the entire northern population. [Sargon II inscriptions](https://build-oracc.museum.upenn.edu/rinap/downloads/Frame_RINAP_2.pdf), [Tavger on regional continuity](https://www.openstarts.units.it/handle/10077/31105), and [Squitieri on Assyrian-period reorganization](https://www.tandfonline.com/doi/full/10.1080/00758914.2024.2351677) support a mixed outcome of deportation, flight, local continuity, migration to Judah and incoming resettlement. No survivor percentage is encoded.

Persian-period Samaria and Mount Gerizim scholarship, including [Dušek](https://www.mdpi.com/2077-1444/11/2/63), supports northern cultural continuity without an instantaneous, complete Samaritan schism.

Ancient borders changed, the full northern kingdom extended east of the Jordan, and the Golan is excluded. Coastal, Philistine, Phoenician-facing, pastoral and insecure populations remain outside the kingdom allocations where necessary.

## S23_HASMONEAN_DEMOGRAPHIC_TRANSITION — 167–63 BCE

### Coherent research scenarios

| Anchor and group | Low | Selected | High |
|---|---:|---:|---:|
| 167 BCE — Jews | 60,000 | 90,000 | 130,000 |
| 167 BCE — Samaritans | 45,000 | 75,000 | 110,000 |
| 167 BCE — Hellenistic residents | 5,000 | 15,000 | 25,000 |
| 167 BCE — Other / Unknown | 70,000 | 100,000 | 145,000 |
| **167 BCE — Total** | **180,000** | **280,000** | **410,000** |
| c.100 BCE — Jews | 110,000 | 180,000 | 280,000 |
| c.100 BCE — Samaritans | 40,000 | 65,000 | 100,000 |
| c.100 BCE — Hellenistic residents | 10,000 | 20,000 | 35,000 |
| c.100 BCE — Other / Unknown | 80,000 | 135,000 | 205,000 |
| **c.100 BCE — Total** | **240,000** | **400,000** | **620,000** |
| 63 BCE — Jews | 170,000 | 280,000 | 400,000 |
| 63 BCE — Samaritans | 40,000 | 70,000 | 110,000 |
| 63 BCE — Hellenistic residents | 10,000 | 25,000 | 45,000 |
| 63 BCE — Other / Unknown | 80,000 | 125,000 | 185,000 |
| **63 BCE — Total** | **300,000** | **500,000** | **740,000** |

### Evidence and interpretation

The review used Finkelstein's Judea estimates, Leibner's Galilee settlement evidence, Levin on Idumaean complexity, Bourgel on Samaritan identity, Dąbrowa on varied Hasmonean practices and Broshi as a distant capacity constraint:

- [Finkelstein, Yehud/Judea](https://israelfinkelstein.wordpress.com/wp-content/uploads/2013/07/yehud-judea-rb.pdf)
- [Leibner, Galilee survey](https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/20/71/99/14/2020719914/2020719914.pdf)
- [Levin, Idumaea](https://www.mdpi.com/2077-1444/11/10/487)
- [Bourgel, Samaritan identity](https://www.mdpi.com/2077-1444/10/11/628)
- [Dąbrowa, Hasmonean policy](https://ejournals.eu/pliki_artykulu_czasopisma/pelny_tekst/762e6202-3186-44be-be3e-722fd65e0ff6/pobierz)

The Jewish increase is not modeled as biological growth alone. It can include migration, settlement, incorporation or conversion and greater historical visibility. Idumaean, Galilean, coastal and mixed populations remain in Other / Unknown where classification is insecure. Peraea, other Transjordanian territories and the Golan are excluded.

## S24_PHILISTINE_DEMOGRAPHIC_TRAJECTORY — temporary Philistine bar

### Adopted trajectory

| Anchor | Selected | Plausible upper | Method |
|---|---:|---:|---|
| 1200 BCE | 25,000 | 30,000 | Twelfth-century settlement estimate; schematic anchor. |
| 1000 BCE | 30,000 | 30,000 | Late-eleventh-century reconstruction applied approximately. |
| c.850 BCE | 40,000 | 50,000 | Explicit project interpolation. |
| 722 BCE | 50,000 | 50,000 | Broader Philistine city-state-zone benchmark. |
| 701 BCE | 50,000 | 50,000 | Explicit carry-forward; no conquest deduction invented. |
| 586 BCE | 0 | 0 | Category merged after the c.604 BCE Babylonian rupture. |

Philistines are deducted from the former Other / Unknown allocation; no total or previously named-community selected value changes. Equal selected and upper values produce no faded extension.

### Evidence

1. Assaf Yasur-Landau, *The Philistines and Aegean Migration at the End of the Late Bronze Age* (2010), estimating about 25,000 inhabitants of Philistia in the twelfth century and about 30,000 at the eleventh-century peak. [DOI](https://doi.org/10.1017/CBO9780511761201).
2. Israel Finkelstein, “The Philistine Countryside,” *Israel Exploration Journal* 46 (1996): 225–242. [Accessible copy](https://www.academia.edu/1947734/Finkelstein_I_1996_The_Philistine_Countryside_Israel_Exploration_Journal_46_225_242).
3. Broshi and Finkelstein (1992), estimating approximately 36,000 in narrow Philistia and about 50,000 in a broader city-state zone. [Article](https://www.journals.uchicago.edu/doi/10.2307/1357138).
4. Aren Maeir, “The End and Disappearance of the Biblical Philistines” (2025), locating the decisive political-cultural rupture in the Babylonian campaigns of 604/603 BCE without asserting eradication of every inhabitant. [Accessible copy](https://www.academia.edu/166683976/The_End_and_Disappearance_of_the_Biblical_Philistines_Archaeological_and_Historical_Evidence_and_Comparison_to_the_Israelite_and_Judahite_Exiles).
5. Michal Feldman et al., “Ancient DNA Sheds Light on the Genetic Origins of Early Iron Age Philistines,” *Science Advances* 5 (2019). [DOI](https://doi.org/10.1126/sciadv.aax0061). The study supports admixture and local continuity; it is not used to estimate population shares.
6. Oren Tal, “People, Material Culture, and Ethno-Religious Regions in Achaemenid Palestine,” in *The Social Archaeology of the Levant* (2018). [DOI](https://doi.org/10.1017/9781316661468.023).

Philistia covers only part of the polygon. Gaza is included; affiliations in the western Shephelah changed. The 50,000 benchmark is not proof that every resident self-identified as Philistine.

## S25_MANDATE_MUSLIM_NATURAL_INCREASE — context-only evidence

**Role:** supports the 1945 context statement that most Mandate-period Muslim growth came from births exceeding deaths. It does not supply or change the 1882 or 1945 endpoints.

**Citation:** British Mandatory Government, *Mandate for Palestine: Report to the League of Nations, 1937*, population section. [UNISPAL copy](https://www.un.org/unispal/document/auto-insert-208273/).

The endpoints remain sourced to S09 and S12. “Most growth” is a period interpretation, not a claim that migration was zero.

## S26_ROMAN_BYZANTINE_DEMOGRAPHIC_TRANSITION — 70–638 CE

### Coherent research scenarios

Each low, selected and high column reconciles internally. Production retains selected values and the corresponding high/plausible-upper fields; low scenarios remain here.

| Year | Total | Jews | Samaritans | Imperial settlers | Christians | Muslims | Armenians | Other / Unknown |
|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 70 | 350k / 550k / 800k | 150k / 250k / 380k | 50k / 90k / 130k | 10k / 30k / 50k | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 140k / 180k / 240k |
| 135 | 300k / 450k / 650k | 80k / 150k / 250k | 60k / 100k / 150k | 20k / 40k / 70k | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 | 140k / 160k / 180k |
| 250 | 450k / 700k / 900k | 100k / 180k / 240k | 90k / 150k / 220k | 0 / 0 / 0 | 20k / 50k / 100k | 0 / 0 / 0 | 0 / 0 / 0 | 240k / 320k / 340k |
| 324 | 550k / 800k / 950k | 100k / 170k / 200k | 100k / 170k / 220k | 0 / 0 / 0 | 50k / 130k / 190k | 0 / 0 / 0 | 0 / 1k / 3k | 300k / 329k / 337k |
| 450 | 600k / 850k / 1,000k | 80k / 130k / 150k | 110k / 190k / 220k | 0 / 0 / 0 | 220k / 330k / 425k | 0 / 0 / 0 | 0 / 2k / 5k | 190k / 198k / 200k |
| 529 | 700k / 900k / 1,000k | 80k / 130k / 145k | 100k / 170k / 210k | 0 / 0 / 0 | 400k / 460k / 500k | 0 / 0 / 0 | 0 / 2k / 5k | 120k / 138k / 140k |
| 614 | 620k / 820k / 950k | 60k / 100k / 120k | 40k / 70k / 100k | 0 / 0 / 0 | 400k / 525k / 600k | 0 / 0 / 0 | 0 / 2k / 5k | 120k / 123k / 125k |
| 638 | 620k / 810k / 950k | 60k / 100k / 120k | 40k / 70k / 100k | 0 / 0 / 0 | 400k / 510k / 585k | 0 / 5k / 15k | 0 / 2k / 5k | 120k / 123k / 125k |

### Principal bibliography and use

1. Broshi (1979), cited under S04: structural ceiling/order of magnitude, not anchor counts.
2. Doron Bar, “Population, Settlement and Economy in Late Roman and Byzantine Palestine (70–641 AD),” *BSOAS* 67.3 (2004): 307–320. [JSTOR](https://www.jstor.org/stable/4145797); [accessible PDF](https://homepages.uc.edu/~martinj/Latin/Roman_Population/Bar%20-%20Population%20Settlement%20Economy%20in%20Late%20Roman%20and%20Byzantine%20Palestine.pdf). Stronger for settlement chronology than absolute totals; includes the excluded Golan.
3. Doron Bar, “The Christianisation of Rural Palestine during Late Antiquity,” *Journal of Ecclesiastical History* 54.3 (2003): 401–421. [DOI](https://doi.org/10.1017/S0022046903007309). Church construction is a proxy, not a resident count.
4. Dvir Raviv and Chaim Ben David, “Cassius Dio’s Figures for the Demographic Consequences of the Bar Kokhba War,” *Journal of Roman Archaeology* 34.2 (2021): 585–607. [DOI](https://doi.org/10.1017/S1047759421000271). Useful for spatial severity in Judea, not a whole-polygon total.
5. Uzi Leibner, *Settlement and History in Hellenistic, Roman, and Byzantine Galilee* (2009), especially 356–370. [DOI](https://doi.org/10.1628/978-3-16-151460-9); [open PDF](https://tile.loc.gov/storage-services/master/gdc/gdcebookspublic/20/20/71/99/14/2020719914/2020719914.pdf). Regional evidence guards against extrapolating Judean collapse to Galilee.
6. Mark Alan Chancey and Adam Lowry Porter, “The Archaeology of Roman Palestine,” *Near Eastern Archaeology* 64.4 (2001): 164–203. [DOI](https://doi.org/10.2307/3210829); [accessible PDF](https://berlinarchaeology.files.wordpress.com/2013/08/chancy-lowry-2001-roman-palestine.pdf).
7. Alan D. Crown, “The Samaritans in the Byzantine Orbit,” *Bulletin of the John Rylands Library* 69.1 (1986): 96–138. [DOI](https://doi.org/10.7227/bjrl.69.1.5). Event framework; narrative casualty figures are not population counts.
8. Matthew J. Chalmers, “The Rise and Fall of a Peripheral People?” *Studies in Late Antiquity* 6.2 (2022): 217–247. [DOI](https://doi.org/10.1525/sla.2022.6.2.217). Historiographical caution against a single catastrophe trope.
9. Gideon Avni, “The Persian Conquest of Jerusalem (614 C.E.)—An Archaeological Assessment,” *BASOR* 357 (2010): 35–48. [DOI](https://doi.org/10.1086/BASOR27805159); [overview](https://bibleinterp.arizona.edu/articles/pers357904). Jerusalem evidence cannot determine a whole-polygon count.
10. Itamar Taxel, “Early Islamic Palestine,” *Journal of Islamic Archaeology* 5.2 (2018): 153–180. [DOI](https://doi.org/10.1558/jia.38016). Supports settlement continuity and gradual change, not community shares.
11. Michael E. Stone, “Sixth–Seventh-Century CE Armenian Inscriptions of a Monastic Community in Jerusalem,” *‘Atiqot* 116 (2024). [DOI](https://doi.org/10.70967/2948-040X.1130); [IAA publication](https://publications.iaa.org.il/atiqot/vol116/iss1/9/). Establishes presence, not a territorial total.
12. Josephus, *Jewish War* 6.420–434, and Cassius Dio, *Roman History* 69.14.1–3: literary evidence for violence and remembered scale, not demographic counts.

### Interpretation and mismatch

No quantitative source exactly matches the polygon. Broshi's “Western Palestine” is close but historical; Bar explicitly includes the Golan; Raviv and Ben David concern a Judean war zone; Leibner covers Eastern Lower Galilee; Avni focuses Jerusalem; and Samaritan sources include diaspora communities outside the polygon. The scenarios are therefore project syntheses adjusted conceptually to the fixed territory, not province-to-polygon conversions.

The Jewish and Samaritan trajectories preserve regional continuity while recognizing severe revolt losses. Christian growth is gradual and later than institutional Christianization. The separate imperial category ends after 135 because Romanized or Greek-speaking locals are not settlers. The Sasanian army in 614 and temporary Arab-Muslim forces are excluded. The 638 Muslim allocation is a small resident post-conquest scenario, not an army count.

## Citation and provenance limitations

The earliest research reports used internal search-session citation markers that are not durable public references. They have not been reproduced here. Where the retained project record lacks a complete publication entry, this guide says so rather than reconstructing one from memory. Future research should replace incomplete source-family descriptions with stable, full bibliographic records while preserving the existing source IDs or documenting any ID migration.
