const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");

const fail = (message) => {
  throw new Error(message);
};

const read = (filename) => fs.readFileSync(path.join(DATA_DIR, filename), "utf8");
const sha256 = (text) => crypto.createHash("sha256").update(text).digest("hex").toUpperCase();

const parseCsv = (text, filename) => {
  const matrix = [];
  let row = [];
  let cell = "";
  let quoted = false;

  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];

    if (quoted) {
      if (char === '"' && next === '"') {
        cell += '"';
        i += 1;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell.replace(/\r$/, ""));
      matrix.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  assert.equal(quoted, false, `${filename}: unterminated quoted field`);
  if (cell.length > 0 || row.length > 0) {
    row.push(cell.replace(/\r$/, ""));
    matrix.push(row);
  }

  const nonEmpty = matrix.filter((values) => values.some((value) => value !== ""));
  assert.ok(nonEmpty.length >= 2, `${filename}: expected a header and at least one record`);
  const headers = nonEmpty.shift();
  assert.equal(new Set(headers).size, headers.length, `${filename}: duplicate header`);

  const records = nonEmpty.map((values, index) => {
    assert.equal(
      values.length,
      headers.length,
      `${filename}: row ${index + 2} has ${values.length} cells; expected ${headers.length}`,
    );
    return Object.fromEntries(headers.map((header, column) => [header, values[column]]));
  });

  return {headers, records};
};

const table = (filename) => parseCsv(read(filename), filename);
const number = (value, label, {blank = false, integer = true, min = 0} = {}) => {
  if (value === "" && blank) return null;
  assert.notEqual(value, "", `${label}: required number is blank`);
  const parsed = Number(value);
  assert.ok(Number.isFinite(parsed), `${label}: must be finite`);
  if (integer) assert.ok(Number.isInteger(parsed), `${label}: must be an integer`);
  assert.ok(parsed >= min, `${label}: must be at least ${min}`);
  return parsed;
};

const manifestText = read("dataset-manifest.json");
const manifest = JSON.parse(manifestText);
const packageJson = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));

assert.equal(manifest.dataset_version, "2.14.2", "Unexpected dataset version");
assert.equal(packageJson.version, manifest.dataset_version, "package and dataset versions differ");
assert.equal(manifest.schema_version, 2, "Unexpected schema version");
assert.equal(manifest.runtime_status, "production_uses_schema_v2");
assert.equal(manifest.authoritative_anchor.runtime_filename, manifest.files.anchors);
assert.equal(manifest.authoritative_anchor.content_identity_verified, false);

const expectedFiles = {
  anchors: "animation-anchors.csv",
  communities: "communities.csv",
  transitions: "transitions.csv",
  sources: "sources.csv",
  timing: "timing.csv",
};
assert.deepEqual(manifest.files, expectedFiles, "Manifest runtime filenames changed");
for (const filename of Object.values(expectedFiles)) {
  assert.ok(fs.existsSync(path.join(DATA_DIR, filename)), `Missing ${filename}`);
}

const anchorText = read(manifest.files.anchors);
assert.equal(
  sha256(anchorText),
  manifest.authoritative_anchor.sha256,
  "animation-anchors.csv does not match the manifest SHA-256",
);

const communityTable = table(manifest.files.communities);
assert.deepEqual(
  communityTable.headers,
  ["community_id", "default_label", "color", "sort_order"],
  "Unexpected communities.csv schema",
);
const communityIds = communityTable.records.map(({community_id}) => community_id);
assert.equal(new Set(communityIds).size, communityIds.length, "Duplicate community_id");
const sortOrders = communityTable.records.map(({sort_order}, index) =>
  number(sort_order, `communities row ${index + 2} sort_order`));
assert.deepEqual(sortOrders, sortOrders.map((_, index) => index), "Community sort order must be contiguous");
for (const [index, community] of communityTable.records.entries()) {
  assert.match(community.community_id, /^[a-z][a-z0-9_]*$/, `Invalid community ID at row ${index + 2}`);
  assert.match(community.color, /^#[0-9A-Fa-f]{6}$/, `Invalid color for ${community.community_id}`);
}

const sourceTable = table(manifest.files.sources);
assert.deepEqual(
  sourceTable.headers,
  ["source_id", "short_citation", "full_citation", "url", "notes"],
  "Unexpected sources.csv schema",
);
const sourceIds = sourceTable.records.map(({source_id}) => source_id);
assert.equal(new Set(sourceIds).size, sourceIds.length, "Duplicate source_id");
const sourceSet = new Set(sourceIds);
for (const [index, source] of sourceTable.records.entries()) {
  assert.match(source.source_id, /^S\d{2}_[A-Z0-9_]+$/, `Invalid source ID at row ${index + 2}`);
  assert.ok(source.short_citation.trim(), `${source.source_id}: short citation is required`);
  if (source.url) assert.match(source.url, /^https:\/\//, `${source.source_id}: URL must use HTTPS`);
}
for (const required of [
  "S21_LBA_1500_SYNTH",
  "S22_IRON_AGE_TWO_KINGDOMS",
  "S23_HASMONEAN_DEMOGRAPHIC_TRANSITION",
  "S24_PHILISTINE_DEMOGRAPHIC_TRAJECTORY",
  "S25_MANDATE_MUSLIM_NATURAL_INCREASE",
  "S26_ROMAN_BYZANTINE_DEMOGRAPHIC_TRANSITION",
]) {
  assert.ok(sourceSet.has(required), `Missing required source ${required}`);
}

const anchorTable = parseCsv(anchorText, manifest.files.anchors);
const requiredAnchorHeaders = [
  "year",
  "year_label",
  "total_population",
  "total_population_plausible_upper",
  "territory_scope",
  "data_source_ids",
  "transition",
  "transition_profile",
  "transition_start_year",
];
for (const header of requiredAnchorHeaders) {
  assert.ok(anchorTable.headers.includes(header), `Missing anchor column ${header}`);
}
for (const id of communityIds) {
  assert.ok(anchorTable.headers.includes(id), `Missing selected column ${id}`);
  assert.ok(anchorTable.headers.includes(`${id}_plausible_upper`), `Missing upper column for ${id}`);
}

const expectedYears = [
  -1500, -1200, -1000, -850, -722, -701, -586, -538, -400, -332, -167, -100, -63,
  70, 135, 250, 324, 450, 529, 614, 638, 749, 1099, 1187, 1291, 1348, 1517, 1596,
  1872, 1882, 1914, 1922, 1931, 1945, 1948, 1961, 1967, 1997, 2007, 2017, 2023, 2026,
];
assert.equal(anchorTable.records.length, 42, "Expected 42 anchors");
const years = anchorTable.records.map(({year}, index) => number(year, `anchor row ${index + 2} year`, {min: -10000}));
assert.deepEqual(years, expectedYears, "Anchor years or order changed");
const yearSet = new Set(years);

const transitionKinds = new Set(["gradual", "shock"]);
const transitionProfiles = new Set(["", "babylonian_shock_window", "gradual_demography_event_settlers"]);

for (const [index, anchor] of anchorTable.records.entries()) {
  const rowLabel = `anchor ${anchor.year_label || anchor.year || index + 2}`;
  assert.ok(anchor.year_label, `${rowLabel}: year_label is required`);
  assert.equal(anchor.territory_scope, manifest.territory_scope, `${rowLabel}: territory mismatch`);
  assert.ok(transitionKinds.has(anchor.transition), `${rowLabel}: invalid transition ${anchor.transition}`);
  assert.ok(transitionProfiles.has(anchor.transition_profile), `${rowLabel}: invalid transition profile`);

  const total = number(anchor.total_population, `${rowLabel} total_population`);
  const totalUpper = number(anchor.total_population_plausible_upper, `${rowLabel} total upper`, {blank: true});
  if (totalUpper !== null) assert.ok(totalUpper >= total, `${rowLabel}: total upper is below selected`);

  let selectedSum = 0;
  for (const id of communityIds) {
    const selected = number(anchor[id], `${rowLabel} ${id}`);
    const upper = number(anchor[`${id}_plausible_upper`], `${rowLabel} ${id} upper`, {blank: true});
    selectedSum += selected;
    if (upper !== null) assert.ok(upper >= selected, `${rowLabel}: ${id} upper is below selected`);
  }
  assert.equal(selectedSum, total, `${rowLabel}: selected communities do not sum to total`);

  const ids = anchor.data_source_ids.split(";").map((id) => id.trim()).filter(Boolean);
  assert.ok(ids.length > 0, `${rowLabel}: at least one source ID is required`);
  assert.equal(new Set(ids).size, ids.length, `${rowLabel}: duplicate source ID`);
  for (const id of ids) assert.ok(sourceSet.has(id), `${rowLabel}: unregistered source ID ${id}`);

  if (anchor.transition_profile === "babylonian_shock_window") {
    const start = number(anchor.transition_start_year, `${rowLabel} transition_start_year`, {min: -10000});
    assert.ok(index > 0, `${rowLabel}: shock profile cannot be first anchor`);
    assert.ok(start > years[index - 1] && start < years[index], `${rowLabel}: shock start is outside segment`);
  } else {
    assert.equal(anchor.transition_start_year, "", `${rowLabel}: unexpected transition_start_year`);
  }

  if (anchor.transition_profile === "gradual_demography_event_settlers") {
    assert.equal(anchor.transition, "gradual", `${rowLabel}: mixed settler profile must be gradual`);
    assert.ok(Number(anchor.imperial_settlers) > 0, `${rowLabel}: mixed settler destination must have settlers`);
    assert.ok(Number(anchor.imperial_settlers_plausible_upper) >= Number(anchor.imperial_settlers));
  }
}

const anchorByYear = new Map(anchorTable.records.map((anchor) => [Number(anchor.year), anchor]));
assert.equal(anchorByYear.get(70).transition, "gradual");
assert.equal(anchorByYear.get(135).transition, "shock");
assert.equal(anchorByYear.get(529).transition, "gradual");
assert.equal(anchorByYear.get(614).transition, "gradual");
assert.equal(anchorByYear.get(749).transition, "gradual");
assert.equal(anchorByYear.get(1099).transition, "gradual");
assert.equal(anchorByYear.get(1099).transition_profile, "gradual_demography_event_settlers");
assert.equal(anchorByYear.get(-586).transition_profile, "babylonian_shock_window");
assert.equal(anchorByYear.get(-586).transition_start_year, "-604");

const transitionTable = table(manifest.files.transitions);
assert.deepEqual(
  transitionTable.headers,
  [
    "transition_id", "from_year", "to_year", "operation", "source_id", "target_id",
    "visual_style", "branch_order", "transition_start_year", "transition_end_year",
  ],
  "Unexpected transitions.csv schema",
);
const operations = new Set(["split", "merge", "rename"]);
const styles = new Set([
  "opening_analytical_emergence",
  "split_child_flow",
  "source_continuation",
  "merge_source_flow",
  "qualitative_merge",
  "label_crossfade",
]);
const allowedStyles = {
  split: new Set(["opening_analytical_emergence", "split_child_flow", "source_continuation"]),
  merge: new Set(["merge_source_flow", "qualitative_merge"]),
  rename: new Set(["label_crossfade"]),
};
const transitionGroups = new Map();
const relationships = new Set();

for (const [index, relation] of transitionTable.records.entries()) {
  const label = `transition row ${index + 2}`;
  const from = number(relation.from_year, `${label} from_year`, {min: -10000});
  const to = number(relation.to_year, `${label} to_year`, {min: -10000});
  assert.ok(yearSet.has(from) && yearSet.has(to), `${label}: unknown endpoint`);
  assert.equal(expectedYears.indexOf(to), expectedYears.indexOf(from) + 1, `${label}: endpoints must be adjacent`);
  assert.ok(operations.has(relation.operation), `${label}: invalid operation`);
  assert.ok(styles.has(relation.visual_style), `${label}: invalid visual style`);
  assert.ok(allowedStyles[relation.operation].has(relation.visual_style), `${label}: invalid operation/style pair`);
  assert.ok(communityIds.includes(relation.source_id), `${label}: unknown source community`);
  assert.ok(communityIds.includes(relation.target_id), `${label}: unknown target community`);
  const branch = number(relation.branch_order, `${label} branch_order`);

  const relationship = [relation.transition_id, from, to, relation.operation, relation.source_id, relation.target_id].join("|");
  assert.ok(!relationships.has(relationship), `${label}: duplicate relationship`);
  relationships.add(relationship);

  const hasStart = relation.transition_start_year !== "";
  const hasEnd = relation.transition_end_year !== "";
  assert.equal(hasStart, hasEnd, `${label}: transition window must specify both boundaries`);
  if (hasStart) {
    const start = number(relation.transition_start_year, `${label} transition_start_year`, {min: -10000});
    const end = number(relation.transition_end_year, `${label} transition_end_year`, {min: -10000});
    assert.ok(start > from && start < to, `${label}: start is outside segment`);
    assert.ok(end > start && end <= to, `${label}: end is outside segment`);
  }

  const group = transitionGroups.get(relation.transition_id) || [];
  group.push({...relation, branch, from, to});
  transitionGroups.set(relation.transition_id, group);
}

assert.equal(transitionGroups.size, 6, "Unexpected number of transition relationships");
for (const [id, group] of transitionGroups) {
  assert.deepEqual(
    group.map(({branch}) => branch).sort((a, b) => a - b),
    group.map((_, index) => index),
    `${id}: branch order must be contiguous and zero-based`,
  );
  assert.equal(new Set(group.map(({from, to}) => `${from}|${to}`)).size, 1, `${id}: endpoint mismatch`);
  assert.equal(new Set(group.map(({operation}) => operation)).size, 1, `${id}: operation mismatch`);
}

const timingTable = table(manifest.files.timing);
assert.deepEqual(timingTable.headers, ["year", "minimum_hold_seconds"], "Unexpected timing.csv schema");
const timingYears = new Set();
for (const [index, timing] of timingTable.records.entries()) {
  const year = number(timing.year, `timing row ${index + 2} year`, {min: -10000});
  assert.ok(yearSet.has(year), `timing row ${index + 2}: unknown anchor year`);
  assert.ok(!timingYears.has(year), `timing row ${index + 2}: duplicate year`);
  timingYears.add(year);
  number(timing.minimum_hold_seconds, `timing row ${index + 2} minimum_hold_seconds`, {
    integer: false,
    min: Number.EPSILON,
  });
}

const dataHashes = Object.fromEntries(
  ["animation-anchors.csv", "communities.csv", "transitions.csv", "sources.csv", "timing.csv", "dataset-manifest.json"]
    .map((filename) => [filename, sha256(read(filename))]),
);

const checksumLines = fs.readFileSync(path.join(ROOT, "CHECKSUMS.sha256"), "utf8")
  .trim()
  .split(/\r?\n/);
assert.equal(checksumLines.length, Object.keys(dataHashes).length, "Unexpected checksum count");
for (const line of checksumLines) {
  const match = line.match(/^([0-9A-F]{64})  data\/(.+)$/);
  assert.ok(match, `Malformed checksum line: ${line}`);
  const [, expected, filename] = match;
  assert.equal(dataHashes[filename], expected, `Checksum file mismatch for ${filename}`);
}

const markdownFiles = [
  "README.md",
  "LICENSE.md",
  "CHANGELOG.md",
  "docs/PROJECT-GUIDE-AND-DECISIONS.md",
  "docs/SOURCE-NOTES.md",
  "docs/RESEARCH-AUDIT.md",
  "docs/DATA-SCHEMA.md",
];
for (const relative of markdownFiles) {
  const absolute = path.join(ROOT, relative);
  const text = fs.readFileSync(absolute, "utf8");
  assert.doesNotMatch(text, /cite|GITHUB_URL|DOI_IF_ASSIGNED/, `${relative}: non-public placeholder found`);
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].split("#")[0];
    if (!target || /^(https?:|mailto:)/.test(target)) continue;
    const resolved = path.resolve(path.dirname(absolute), target);
    assert.ok(fs.existsSync(resolved), `${relative}: broken local link ${match[1]}`);
  }
}

console.log(`Validated dataset v${manifest.dataset_version}`);
console.log(`Anchors: ${anchorTable.records.length}; communities: ${communityIds.length}; sources: ${sourceIds.length}`);
for (const [filename, hash] of Object.entries(dataHashes)) console.log(`${hash}  data/${filename}`);
