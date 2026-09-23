(function () {
  "use strict";

  var tabs = Object.keys(COMBO_DATA).map(function (key) {
    return COMBO_DATA[key];
  });

  var tabsEl = document.getElementById("tabs");
  var listEl = document.getElementById("comboList");
  var countEl = document.getElementById("count");
  var diceBtn = document.getElementById("diceBtn");
  var toastEl = document.getElementById("toast");

  var activeTabId = tabs[0].id;
  var lastPick = null;
  var toastTimer = null;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function mapsUrl(place) {
    var query = place.name + " " + place.address + " Hà Nội";
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
  }

  function getTab(id) {
    return tabs.filter(function (tab) {
      return tab.id === id;
    })[0];
  }

  function placeHtml(place, kind, tab) {
    var isFood = kind === "food";
    var icon = isFood ? "🍽️" : "☕";
    var cls = isFood ? "place-food" : "place-cafe";
    var kindLabel = isFood ? tab.foodLabel : tab.cafeLabel;

    return (
      '<a class="place ' + cls + '" href="' + mapsUrl(place) + '" target="_blank" rel="noopener">' +
        '<span class="place-icon" aria-hidden="true">' + icon + "</span>" +
        '<span class="place-body">' +
          '<span class="place-kind">' + escapeHtml(kindLabel) + "</span>" +
          '<span class="place-name">' + escapeHtml(place.name) + "</span>" +
          '<span class="place-addr">📍 ' + escapeHtml(place.address) + "</span>" +
          '<span class="place-desc">' + escapeHtml(place.desc) + "</span>" +
          '<span class="place-cta">Mở trên Google Maps ↗</span>' +
        "</span>" +
      "</a>"
    );
  }

  function comboHtml(combo, index, tab) {
    var num = String(index + 1).padStart(2, "0");
    return (
      '<article class="combo" id="combo-' + tab.id + "-" + combo.id + '">' +
        '<div class="combo-head">' +
          '<span class="combo-num">' + num + "</span>" +
          '<span class="combo-title">Combo ' + num + "</span>" +
        "</div>" +
        placeHtml(combo.food, "food", tab) +
        '<div class="combo-link">rồi ghé</div>' +
        placeHtml(combo.cafe, "cafe", tab) +
      "</article>"
    );
  }

  function renderTabs() {
    tabsEl.innerHTML = "";
    tabs.forEach(function (tab) {
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "tab" + (tab.id === activeTabId ? " active" : "");
      btn.textContent = tab.emoji + " " + tab.label;
      btn.setAttribute("aria-pressed", tab.id === activeTabId ? "true" : "false");
      btn.addEventListener("click", function () {
        if (tab.id !== activeTabId) {
          activeTabId = tab.id;
          lastPick = null;
          renderTabs();
          renderList();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      tabsEl.appendChild(btn);
    });
  }

  function renderList() {
    var tab = getTab(activeTabId);
    listEl.innerHTML = tab.combos
      .map(function (combo, index) {
        return comboHtml(combo, index, tab);
      })
      .join("");
    countEl.textContent = tab.combos.length + " combo · bấm vào quán để mở Google Maps";
  }

  function showToast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      toastEl.classList.remove("show");
    }, 2600);
  }

  function pickRandom() {
    var tab = getTab(activeTabId);
    var combos = tab.combos;
    var index = Math.floor(Math.random() * combos.length);

    if (combos.length > 1 && index === lastPick) {
      index = (index + 1) % combos.length;
    }
    lastPick = index;

    var picked = document.querySelectorAll(".combo.is-picked");
    Array.prototype.forEach.call(picked, function (el) {
      el.classList.remove("is-picked");
    });

    var el = document.getElementById("combo-" + tab.id + "-" + combos[index].id);
    if (el) {
      el.classList.add("is-picked");
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    showToast("Combo " + String(index + 1).padStart(2, "0") + " — đi nhé em 😋");
  }

  diceBtn.addEventListener("click", pickRandom);

  renderTabs();
  renderList();
})();
