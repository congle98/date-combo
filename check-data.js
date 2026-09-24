"use strict";

const COMBO_DATA = require("./data.js");

const EXPECTED = { bbq: 30, mixed: 37, drinks: 31 };
const errors = [];

const tabs = Object.values(COMBO_DATA);

if (tabs.length !== 3) {
  errors.push(`Expected 3 tabs, found ${tabs.length}`);
}

tabs.forEach((tab) => {
  if (!tab.id || !tab.label || !tab.emoji) {
    errors.push(`Tab "${tab.id || "?"}" missing id/label/emoji`);
  }
  if (!Array.isArray(tab.items)) {
    errors.push(`Tab "${tab.id}" has no items array`);
    return;
  }
  const expected = EXPECTED[tab.id];
  if (expected && tab.items.length !== expected) {
    errors.push(`Tab "${tab.id}" has ${tab.items.length} items, expected ${expected}`);
  }

  tab.items.forEach((item, index) => {
    const label = `[${tab.id}] item ${index + 1}`;

    ["name", "address", "desc"].forEach((field) => {
      if (!item[field] || String(item[field]).trim() === "") {
        errors.push(`${label}: ${field} is empty`);
      }
    });

    if (item.photo && !/^https:\/\/lh3\.googleusercontent\.com\/gps-cs-s\//.test(item.photo)) {
      errors.push(`${label}: unexpected photo URL`);
    }

    const url =
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(`${item.name} ${item.address} Hà Nội`);
    if (!url.startsWith("https://www.google.com/maps/search/")) {
      errors.push(`${label}: bad maps url`);
    }
  });
});

if (errors.length > 0) {
  console.error(`FAIL — ${errors.length} problem(s):`);
  errors.forEach((e) => console.error(`  - ${e}`));
  process.exit(1);
}

const total = tabs.reduce((sum, tab) => sum + tab.items.length, 0);
const withPhoto = tabs.reduce(
  (sum, tab) => sum + tab.items.filter((i) => i.photo).length,
  0
);
console.log(`OK — ${tabs.length} tabs, ${total} items, ${withPhoto} with photos, maps links valid`);
tabs.forEach((tab) => {
  console.log(`  ${tab.emoji} ${tab.label}: ${tab.items.length} items`);
});
