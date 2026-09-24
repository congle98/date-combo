(function () {
  "use strict";

  var tabs = Object.keys(COMBO_DATA).map(function (key) {
    return COMBO_DATA[key];
  });

  var tabsEl = document.getElementById("tabs");
  var listEl = document.getElementById("placeList");
  var countEl = document.getElementById("count");
  var searchInput = document.getElementById("searchInput");
  var searchClear = document.getElementById("searchClear");

  var activeTabId = tabs[0].id;
  var keyword = "";

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function normalize(value) {
    return String(value)
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d");
  }

  function mapsUrl(item) {
    var query = item.name + " " + item.address + " Hà Nội";
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
  }

  function getTab(id) {
    return tabs.filter(function (tab) {
      return tab.id === id;
    })[0];
  }

  function matches(item) {
    if (!keyword) return true;
    var haystack = normalize(item.name + " " + item.address + " " + item.desc);
    return haystack.indexOf(normalize(keyword)) !== -1;
  }

  function cardHtml(item, index, tab) {
    var num = String(index + 1).padStart(2, "0");
    var media = "";

    if (item.photo) {
      media =
        '<img class="place-img" src="' + item.photo + '" alt="' + escapeHtml(item.name) + '" loading="lazy" />';
    }

    media +=
      '<span class="place-emoji" aria-hidden="true">' + tab.emoji + "</span>" +
      '<span class="place-num">' + num + "</span>" +
      (item.isNew ? '<span class="place-new" title="Quán mới thêm">⭐</span>' : "");

    return (
      '<a class="place-card' + (item.photo ? "" : " is-placeholder") + '" href="' + mapsUrl(item) + '" target="_blank" rel="noopener">' +
        '<span class="place-media">' + media + "</span>" +
        '<span class="place-info">' +
          '<span class="place-name">' + escapeHtml(item.name) + "</span>" +
          '<span class="place-addr">📍 ' + escapeHtml(item.address) + "</span>" +
          '<span class="place-desc">' + escapeHtml(item.desc) + "</span>" +
          '<span class="place-cta">Mở trên Google Maps ↗</span>' +
        "</span>" +
      "</a>"
    );
  }

  function attachImageFallbacks() {
    var images = listEl.querySelectorAll("img.place-img");
    Array.prototype.forEach.call(images, function (img) {
      img.addEventListener("error", function () {
        var card = img.closest(".place-card");
        if (card) card.classList.add("is-placeholder");
        img.remove();
      });
    });
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
          document.body.dataset.tab = tab.id;
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
    var items = tab.items.filter(matches);

    if (items.length === 0) {
      listEl.innerHTML =
        '<div class="empty">😢 Không tìm thấy địa điểm nào<span>Thử từ khoá khác nhé em</span></div>';
    } else {
      listEl.innerHTML = items
        .map(function (item, index) {
          return cardHtml(item, index, tab);
        })
        .join("");
      attachImageFallbacks();
    }

    if (keyword) {
      countEl.textContent =
        items.length + " kết quả cho “" + keyword + "” trong " + tab.label;
    } else {
      countEl.textContent = items.length + " địa điểm · bấm để mở Google Maps";
    }

    searchClear.hidden = !keyword;
  }

  searchInput.addEventListener("input", function () {
    keyword = searchInput.value.trim();
    renderList();
  });

  searchClear.addEventListener("click", function () {
    searchInput.value = "";
    keyword = "";
    renderList();
    searchInput.focus();
  });

  document.body.dataset.tab = activeTabId;
  renderTabs();
  renderList();
})();
