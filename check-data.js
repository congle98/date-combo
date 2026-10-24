"use strict";

const COMBO_DATA = require("./data.js");
const fs = require("fs");
const path = require("path");
const EXPECTED = { food: 100, drinks: 130, special: 60, activities: 60, gifts: 90, getaway: 60 };
const errors = [];

Object.entries(EXPECTED).forEach(([id, expected]) => {
  const group = COMBO_DATA[id];
  if (!group) {
    errors.push(`Missing group: ${id}`);
    return;
  }
  if (group.items.length !== expected) {
    errors.push(`${id} has ${group.items.length} records; expected ${expected}`);
  }

  const seen = new Set();
  group.items.forEach((item, index) => {
    const label = `[${id}] item ${index + 1}`;
    ["name", "address", "desc", "subcategory", "source", "photo", "photoSource", "photoSourceUrl"].forEach((field) => {
      if (!item[field] || String(item[field]).trim() === "") errors.push(`${label}: ${field} is empty`);
    });
    const key = `${item.name.toLowerCase()}|${item.address.toLowerCase()}`;
    if (seen.has(key)) errors.push(`${label}: duplicate name/address`);
    seen.add(key);
    if (item.sourceUrl && !/^https:\/\//.test(item.sourceUrl)) errors.push(`${label}: sourceUrl is not HTTPS`);
    if (item.photoSourceUrl && !/^https:\/\//.test(item.photoSourceUrl)) errors.push(`${label}: photoSourceUrl is not HTTPS`);
    if (item.photo && /^https:\/\//.test(item.photo)) errors.push(`${label}: photo should be a local downloaded image`);
    if (item.photo && !fs.existsSync(path.join(__dirname, item.photo))) errors.push(`${label}: local photo file is missing: ${item.photo}`);
  });
});

if (errors.length) {
  console.error(`FAIL — ${errors.length} problem(s):`);
  errors.forEach((error) => console.error(`  - ${error}`));
  process.exit(1);
}

console.log("OK — category counts and place records match the date-guide targets.");
Object.entries(EXPECTED).forEach(([id, expected]) => {
  console.log(`  ${COMBO_DATA[id].emoji} ${COMBO_DATA[id].label}: ${COMBO_DATA[id].items.length}/${expected}`);
});
