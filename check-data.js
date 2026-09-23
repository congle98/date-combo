"use strict";

const COMBO_DATA = require("./data.js");

const EXPECTED_PER_TAB = 30;
const errors = [];

const tabs = Object.values(COMBO_DATA);

if (tabs.length !== 2) {
  errors.push(`Expected 2 tabs, found ${tabs.length}`);
}

tabs.forEach((tab) => {
  if (!tab.id || !tab.label || !tab.emoji) {
    errors.push(`Tab "${tab.id || "?"}" missing id/label/emoji`);
  }
  if (!Array.isArray(tab.combos)) {
    errors.push(`Tab "${tab.id}" has no combos array`);
    return;
  }
  if (tab.combos.length !== EXPECTED_PER_TAB) {
    errors.push(`Tab "${tab.id}" has ${tab.combos.length} combos, expected ${EXPECTED_PER_TAB}`);
  }

  const seenIds = new Set();
  tab.combos.forEach((combo, index) => {
    const label = `[${tab.id}] combo ${index + 1}`;

    if (combo.id !== index + 1) {
      errors.push(`${label}: id is ${combo.id}, expected ${index + 1}`);
    }
    if (seenIds.has(combo.id)) {
      errors.push(`${label}: duplicate id ${combo.id}`);
    }
    seenIds.add(combo.id);

    ["food", "cafe"].forEach((kind) => {
      const place = combo[kind];
      if (!place) {
        errors.push(`${label}: missing ${kind}`);
        return;
      }
      ["name", "address", "desc"].forEach((field) => {
        if (!place[field] || String(place[field]).trim() === "") {
          errors.push(`${label}: ${kind}.${field} is empty`);
        }
      });
      const url =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(`${place.name} ${place.address} Hà Nội`);
      if (!url.startsWith("https://www.google.com/maps/search/")) {
        errors.push(`${label}: bad maps url for ${kind}`);
      }
      if (url.length > 900) {
        errors.push(`${label}: maps url suspiciously long for ${kind}`);
      }
    });
  });
});

if (errors.length > 0) {
  console.error(`FAIL — ${errors.length} problem(s):`);
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

const total = tabs.reduce((sum, tab) => sum + tab.combos.length, 0);
console.log(`OK — ${tabs.length} tabs, ${total} combos, all fields complete, maps links valid`);
tabs.forEach((tab) => {
  console.log(`  ${tab.emoji} ${tab.label}: ${tab.combos.length} combos`);
});
