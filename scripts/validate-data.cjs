const assert = require("node:assert/strict");
const crypto = require("node:crypto");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const DATA_DIR = path.join(ROOT, "data");
const readData = (filename) => fs.readFileSync(path.join(DATA_DIR, filename), "utf8");
const hash = (text) => crypto.createHash("sha256").update(text).digest("hex").toUpperCase();

function parseCsv(text, filename) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let i = 0; i < text.length; i += 1) {
    const char = text[i];
    const next = text[i + 1];
    if (quoted) {
      if (char === '"' && next === '"') { cell += '"'; i += 1; }
      else if (char === '"') quoted = false;
      else cell += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") { row.push(cell); cell = ""; }
    else if (char === "\n") { row.push(cell.replace(/\r$/, "")); rows.push(row); row = []; cell = ""; }
    else cell += char;
  }
  assert.equal(quoted, false, `${filename}: unterminated quoted field`);
  if (cell.length || row.length) { row.push(cell.replace(/\r$/, "")); rows.push(row); }
  const nonEmpty = rows.filter((values) => values.some((value) => value !== ""));
  assert.ok(nonEmpty.length >= 2, `${filename}: expected header and data`);
  const headers = nonEmpty.shift();
  assert.equal(new Set(headers).size, headers.length, `${filename}: duplicate header`);
  const records = nonEmpty.map((values, index) => {
    assert.equal(values.length, headers.length, `${filename}: row ${index + 2} has wrong column count`);
    return Object.fromEntries(headers.map((header, column) => [header, values[column]]));
  });
  return {headers, records};
}

const table = (filename) => parseCsv(readData(filename), filename);
const integer = (value, label, {blank = false, min = 0} = {}) => {
  if (value === "" && blank) return null;
  assert.notEqual(value, "", `${label}: blank`);
  const parsed = Number(value);
  assert.ok(Number.isFinite(parsed) && Number.isInteger(parsed), `${label}: not an integer`);
  assert.ok(parsed >= min, `${label}: below ${min}`);
  return parsed;
};

const manifest = JSON.parse(readData("dataset-manifest.json"));
const packageJson = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf8"));
assert.equal(manifest.dataset_version, "2.15.3");
assert.equal(packageJson.version, manifest.dataset_version);
assert.equal(manifest.schema_version, 2);
assert.equal(manifest.runtime_status, "production_uses_schema_v2");
assert.equal(manifest.authoritative_anchor.runtime_filename, manifest.files.anchors);
assert.equal(manifest.authoritative_anchor.content_identity_verified, false);
assert.equal(manifest.authoritative_anchor.research_artifact_filename, "historical-palestine-population-animation-anchors-v2.12.0-final.csv");
assert.equal(manifest.authoritative_anchor.research_artifact_sha256, "B546FF3882B8F6F1DDE27B5FA2083DDE6899806CFFC72E39E45234BA752FE79F");

const expectedFiles = {
  anchors: "animation-anchors.csv",
  communities: "communities.csv",
  transitions: "transitions.csv",
  sources: "sources.csv",
  timing: "timing.csv",
};
assert.deepEqual(manifest.files, expectedFiles);
for (const filename of [...Object.values(expectedFiles), "dataset-manifest.json"]) {
  assert.ok(fs.existsSync(path.join(DATA_DIR, filename)), `Missing ${filename}`);
}

const anchorText = readData(manifest.files.anchors);
assert.equal(hash(anchorText), manifest.authoritative_anchor.sha256, "Anchor hash mismatch");

const communities = table(manifest.files.communities);
assert.deepEqual(communities.headers, ["community_id", "default_label", "color", "sort_order"]);
const communityIds = communities.records.map((row) => row.community_id);
assert.equal(communityIds.length, 11);
assert.equal(new Set(communityIds).size, communityIds.length);
communities.records.forEach((row, index) => {
  assert.match(row.community_id, /^[a-z][a-z0-9_]*$/);
  assert.match(row.color, /^#[0-9A-Fa-f]{6}$/);
  assert.equal(integer(row.sort_order, `community ${row.community_id} sort_order`), index);
});

const sources = table(manifest.files.sources);
assert.deepEqual(sources.headers, ["source_id", "short_citation", "full_citation", "url", "notes"]);
const sourceIds = sources.records.map((row) => row.source_id);
assert.equal(sourceIds.length, 28);
assert.equal(new Set(sourceIds).size, sourceIds.length);
const sourceSet = new Set(sourceIds);
for (const row of sources.records) {
  assert.match(row.source_id, /^S\d{2}_[A-Z0-9_]+$/);
  assert.ok(row.short_citation.trim());
  if (row.url) assert.match(row.url, /^https:\/\//);
}
for (const id of [
  "S21_LBA_1500_SYNTH",
  "S22_IRON_AGE_TWO_KINGDOMS",
  "S23_HASMONEAN_DEMOGRAPHIC_TRANSITION",
  "S24_PHILISTINE_DEMOGRAPHIC_TRAJECTORY",
  "S25_MANDATE_MUSLIM_NATURAL_INCREASE",
  "S26_ROMAN_BYZANTINE_DEMOGRAPHIC_TRANSITION",
  "S27_MODERN_SAMARITAN_SERIES",
]) assert.ok(sourceSet.has(id), `Missing ${id}`);

const anchors = parseCsv(anchorText, manifest.files.anchors);
const expectedYears = [-1500,-1200,-1000,-850,-722,-701,-586,-538,-400,-332,-167,-100,-63,70,135,250,324,450,529,614,638,749,1099,1187,1291,1348,1517,1596,1872,1882,1914,1922,1931,1945,1948,1961,1967,1997,2007,2017,2023,2026];
assert.equal(anchors.records.length, expectedYears.length);
const years = anchors.records.map((row, index) => integer(row.year, `anchor row ${index + 2} year`, {min: -10000}));
assert.deepEqual(years, expectedYears);
const yearSet = new Set(years);
for (const id of communityIds) {
  assert.ok(anchors.headers.includes(id));
  assert.ok(anchors.headers.includes(`${id}_plausible_upper`));
}
for (const row of anchors.records) {
  assert.equal(row.territory_scope, manifest.territory_scope);
  assert.ok(["gradual", "shock"].includes(row.transition));
  assert.ok(["", "babylonian_shock_window", "gradual_demography_event_settlers"].includes(row.transition_profile));
  const total = integer(row.total_population, `${row.year_label} total`);
  const totalUpper = integer(row.total_population_plausible_upper, `${row.year_label} total upper`, {blank: true});
  if (totalUpper !== null) assert.ok(totalUpper >= total);
  let sum = 0;
  for (const id of communityIds) {
    const selected = integer(row[id], `${row.year_label} ${id}`);
    const upper = integer(row[`${id}_plausible_upper`], `${row.year_label} ${id} upper`, {blank: true});
    if (upper !== null) assert.ok(upper >= selected);
    sum += selected;
  }
  assert.equal(sum, total, `${row.year_label}: communities do not sum to total`);
  const ids = row.data_source_ids.split(";").map((id) => id.trim()).filter(Boolean);
  assert.ok(ids.length > 0);
  assert.equal(new Set(ids).size, ids.length);
  ids.forEach((id) => assert.ok(sourceSet.has(id), `${row.year_label}: unknown source ${id}`));
}

const transitions = table(manifest.files.transitions);
assert.deepEqual(transitions.headers, ["transition_id","from_year","to_year","operation","source_id","target_id","visual_style","branch_order","transition_start_year","transition_end_year"]);
const transitionGroups = new Map();
for (const row of transitions.records) {
  const from = integer(row.from_year, `${row.transition_id} from`, {min: -10000});
  const to = integer(row.to_year, `${row.transition_id} to`, {min: -10000});
  assert.equal(expectedYears.indexOf(to), expectedYears.indexOf(from) + 1);
  assert.ok(["split", "merge", "rename"].includes(row.operation));
  assert.ok(communityIds.includes(row.source_id));
  assert.ok(communityIds.includes(row.target_id));
  const branch = integer(row.branch_order, `${row.transition_id} branch`);
  const hasStart = row.transition_start_year !== "";
  const hasEnd = row.transition_end_year !== "";
  assert.equal(hasStart, hasEnd);
  if (hasStart) {
    const start = integer(row.transition_start_year, `${row.transition_id} start`, {min: -10000});
    const end = integer(row.transition_end_year, `${row.transition_id} end`, {min: -10000});
    assert.ok(start > from && start < to && end > start && end <= to);
  }
  const group = transitionGroups.get(row.transition_id) || [];
  group.push(branch);
  transitionGroups.set(row.transition_id, group);
}
assert.equal(transitionGroups.size, 6);
for (const [id, branches] of transitionGroups) {
  assert.deepEqual([...branches].sort((a,b) => a-b), branches.map((_, index) => index), `${id}: branch order`);
}

const timing = table(manifest.files.timing);
assert.deepEqual(timing.headers, ["year", "minimum_hold_seconds"]);
const timingYears = new Set();
for (const row of timing.records) {
  const year = integer(row.year, "timing year", {min: -10000});
  assert.ok(yearSet.has(year));
  assert.ok(!timingYears.has(year));
  timingYears.add(year);
  const seconds = Number(row.minimum_hold_seconds);
  assert.ok(Number.isFinite(seconds) && seconds > 0);
}

const checksumText = fs.readFileSync(path.join(ROOT, "CHECKSUMS.sha256"), "utf8").trim();
const checksumLines = checksumText.split(/\r?\n/);
assert.equal(checksumLines.length, 6);
for (const line of checksumLines) {
  const match = line.match(/^([0-9A-F]{64})  data\/(.+)$/);
  assert.ok(match, `Malformed checksum: ${line}`);
  assert.equal(hash(readData(match[2])), match[1], `Checksum mismatch: ${match[2]}`);
}

for (const relative of ["README.md", "METHODOLOGY.md", "SOURCE-NOTES.md", "DATA-SCHEMA.md", "LICENSE.md"]) {
  const absolute = path.join(ROOT, relative);
  const text = fs.readFileSync(absolute, "utf8");
  assert.doesNotMatch(text, /cite|GITHUB_URL|DOI_IF_ASSIGNED/);
  for (const match of text.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
    const target = match[1].split("#")[0];
    if (!target || /^(https?:|mailto:)/.test(target)) continue;
    assert.ok(fs.existsSync(path.resolve(path.dirname(absolute), target)), `${relative}: broken link ${match[1]}`);
  }
}

console.log(`Validated dataset v${manifest.dataset_version}`);
console.log(`Anchors: ${anchors.records.length}; communities: ${communityIds.length}; sources: ${sourceIds.length}`);
for (const filename of ["animation-anchors.csv","communities.csv","transitions.csv","sources.csv","timing.csv","dataset-manifest.json"]) {
  console.log(`${hash(readData(filename))}  data/${filename}`);
}
