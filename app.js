(function () {
  "use strict";

  var order = ["food", "drinks", "special", "activities", "gifts", "getaway"];
  var foodTabs = order.filter(function (key) { return COMBO_DATA[key]; }).map(function (key) { return COMBO_DATA[key]; });
  var ideas = [];
  var tabs = foodTabs.concat(ideas.filter(function (idea) { return !COMBO_DATA[idea.id]; }));
  var tabsEl = document.getElementById("tabs");
  var listEl = document.getElementById("placeList");
  var countEl = document.getElementById("count");
  var searchInput = document.getElementById("searchInput");
  var searchClear = document.getElementById("searchClear");
  var areaSelect = document.getElementById("areaSelect");
  var subcategorySelect = document.getElementById("subcategorySelect");
  var budgetSelect = document.getElementById("budgetSelect");
  var activeTabId = "all";
  var keyword = "";

  function escapeHtml(value) {
    return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function normalize(value) {
    return String(value).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d");
  }
  function mapsUrl(query) { return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query); }
  function matches(item) {
    var text = normalize([item.name, item.address, item.desc].join(" "));
    var region = normalize(areaSelect.value);
    var inRegion = !region || normalize(item.area || "").indexOf(region) !== -1 || text.indexOf(region) !== -1;
    var category = !subcategorySelect.value || item.subcategory === subcategorySelect.value;
    var budget = true;
    if (budgetSelect.value) {
      var bounds = budgetSelect.value.split("-").map(Number);
      budget = item.priceMin !== null && item.priceMin !== undefined && item.priceMax !== null && item.priceMax !== undefined && item.priceMin <= bounds[1] && item.priceMax >= bounds[0];
    }
    return (!keyword || text.indexOf(normalize(keyword)) !== -1) && inRegion && category && budget;
  }
  function updateSubcategoryOptions(selected) {
    var values = [];
    selected.forEach(function (tab) {
      if (!tab.items) return;
      tab.items.forEach(function (item) {
        if (item.subcategory && values.indexOf(item.subcategory) === -1) values.push(item.subcategory);
      });
    });
    values.sort(function (a, b) { return a.localeCompare(b, "vi"); });
    var previous = subcategorySelect.value;
    subcategorySelect.innerHTML = "";
    var all = document.createElement("option");
    all.value = "";
    all.textContent = "Tất cả danh mục";
    subcategorySelect.appendChild(all);
    values.forEach(function (value) {
      var option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      subcategorySelect.appendChild(option);
    });
    subcategorySelect.value = values.indexOf(previous) !== -1 ? previous : "";
  }
  function cardHtml(item, index, tab) {
    var num = String(index + 1).padStart(2, "0");
    var media = item.photo ? '<img class="place-img" src="' + escapeHtml(item.photo) + '" alt="' + escapeHtml(item.name) + '" loading="lazy" />' : '<span class="place-image-note no-photo">Chưa có ảnh từ Maps hoặc nguồn chính thức</span>';
    media += '<span class="place-num">' + num + '</span>';
    var price = item.priceMin !== null && item.priceMin !== undefined ? '<span class="place-meta">' + (item.priceMax !== null && item.priceMax !== undefined ? item.priceMin.toLocaleString("vi-VN") + '–' + item.priceMax.toLocaleString("vi-VN") : 'Từ ' + item.priceMin.toLocaleString("vi-VN")) + 'đ / người</span>' : '<span class="place-meta">Giá: cần kiểm tra</span>';
    var source = item.sourceUrl ? '<a class="source-link" href="' + escapeHtml(item.sourceUrl) + '" target="_blank" rel="noopener">Nguồn: ' + escapeHtml(item.source) + '</a>' : '<span class="source-link">Nguồn: dữ liệu cũ · cần kiểm tra lại</span>';
    var photoSource = item.photo && item.photoSourceUrl ? '<a class="photo-credit" href="' + escapeHtml(item.photoSourceUrl) + '" target="_blank" rel="noopener">Ảnh: ' + escapeHtml(item.photoSource || "Google Maps") + ' ↗</a>' : "";
    return '<article class="place-card' + (item.photo ? "" : " is-placeholder") + '"><a class="place-open" href="' + mapsUrl(item.name + " " + item.address) + '" target="_blank" rel="noopener"><span class="place-media">' + media + '</span><span class="place-info"><span class="place-name">' + escapeHtml(item.name) + '</span><span class="place-addr">📍 ' + escapeHtml(item.address) + '</span><span class="place-desc">' + escapeHtml(item.desc) + '</span>' + price + '<span class="place-cta">Mở trên Google Maps ↗</span></span></a>' + photoSource + source + '</article>';
  }
  function ideaHtml(item) {
    return '<article class="idea-card"><span class="idea-icon">' + item.emoji + '</span><div><h2>' + escapeHtml(item.label) + '</h2><p>' + escapeHtml(item.desc) + '</p><span class="idea-budget">' + escapeHtml(item.budget) + '</span><a href="' + mapsUrl(item.query) + '" target="_blank" rel="noopener">Khám phá trên bản đồ ↗</a></div></article>';
  }
  function giftAdviceHtml() {
    var advice = [
      { occasion: "Buổi hẹn đầu", gifts: [
        ["Bó hoa nhỏ 3–5 cành", "hoa tulip, cúc tana hoặc hoa theo mùa; gọn, dễ mang theo khi đi cà phê."],
        ["Hộp bánh mini", "chọn tiệm có hộp nhỏ để hai người có thể cùng ăn, thay vì một món quà quá riêng tư."],
        ["Một tấm thiệp viết tay", "ghi một lời chúc ngắn gắn với buổi hẹn; hợp khi chưa biết rõ gu và ngân sách của người ấy."]
      ], note: "Giữ món quà nhẹ nhàng, không tạo cảm giác người nhận phải đáp lại." },
      { occasion: "Sinh nhật", gifts: [
        ["Sách đúng chủ đề yêu thích", "chọn thể loại hoặc tác giả người ấy từng nhắc; có thể viết lời đề tặng ở tấm thiệp rời."],
        ["Bánh sinh nhật mini", "chọn vị đã biết người ấy thích và hỏi trước về dị ứng, chế độ ăn."],
        ["Đồ dùng cho sở thích", "sổ vẽ, màu vẽ, phụ kiện chạy bộ hoặc dụng cụ làm bánh; chọn theo món người ấy đang thiếu."],
        ["Một buổi trải nghiệm", "vé workshop, xem phim hoặc buổi trà chiều; hỏi lịch trống trước khi đặt."]
      ], note: "Giữ hóa đơn hoặc chọn nơi có chính sách đổi size/mẫu; tránh tự chọn mỹ phẩm nếu chưa rõ loại da và thương hiệu." },
      { occasion: "Kỷ niệm yêu nhau", gifts: [
        ["Album ảnh nhỏ", "chọn vài tấm ảnh và ghi chú ngắn về những kỷ niệm chung."],
        ["Trang sức tối giản", "dây chuyền hoặc vòng tay kiểu dáng đơn giản nếu đã biết người ấy thường đeo gì."],
        ["Một bữa tối đã đặt bàn", "chọn món cả hai thích và ghi lời nhắn khi đặt chỗ nếu nhà hàng hỗ trợ."],
        ["Hộp quà ghép theo kỷ niệm", "trà hoặc cà phê hai người từng uống, món ăn vặt yêu thích và một tấm thiệp."]
      ], note: "Ưu tiên điều gợi lại câu chuyện chung hơn giá trị món quà; xác nhận lịch trước khi lên kế hoạch bất ngờ." },
      { occasion: "Động viên sau ngày khó khăn", gifts: [
        ["Món ăn hoặc đồ uống yêu thích", "mua đúng món người ấy thường chọn; tiện mang đến mà không cần sắp xếp cầu kỳ."],
        ["Bó hoa tông nhẹ", "chọn bó nhỏ, ít mùi nếu chưa rõ người ấy có nhạy cảm với phấn hoa hay không."],
        ["Túi chăm sóc thư giãn", "trà, tất mềm và đồ ăn nhẹ; tránh sản phẩm bôi da hoặc có hương liệu khi chưa biết sở thích."],
        ["Một lời đề nghị giúp cụ thể", "ví dụ mang bữa tối đến hoặc đi dạo cùng; hỏi trước xem người ấy muốn được chia sẻ hay nghỉ ngơi."]
      ], note: "Món quà nên thể hiện sự quan tâm mà không buộc người nhận phải vui lên ngay." },
      { occasion: "Chúc mừng thành tựu", gifts: [
        ["Bó hoa chúc mừng", "chọn màu sắc người ấy thích và kèm lời chúc cụ thể về thành quả vừa đạt được."],
        ["Sổ tay hoặc bút tốt", "hợp khi người ấy làm việc, học tập hoặc ghi chép thường xuyên."],
        ["Phụ kiện cho cột mốc mới", "bình giữ nhiệt, túi đựng laptop hoặc đồ nghề theo công việc; chọn theo nhu cầu đã biết."],
        ["Bữa ăn mừng", "mời đi ăn ở nơi người ấy muốn thử; để người ấy chọn ngày nếu lịch đang bận."]
      ], note: "Nói rõ bạn trân trọng nỗ lực nào của người ấy; lời chúc cụ thể làm món quà có ý nghĩa hơn." },
      { occasion: "Chưa rõ sở thích / mới tìm hiểu", gifts: [
        ["Thiệp và món ăn nhỏ", "chọn bánh hoặc chocolate loại phổ biến, hỏi trước về dị ứng và chế độ ăn."],
        ["Hoa theo mùa", "chọn bó nhỏ, màu trung tính; tránh hoa có mùi đậm nếu chưa rõ sở thích."],
        ["Voucher trải nghiệm linh hoạt", "chọn nơi cho phép đổi lịch hoặc rủ người ấy cùng chọn hoạt động."],
        ["Một món đồ địa phương nhỏ", "trà, cà phê hoặc đồ thủ công gọn nhẹ; kèm nơi mua để người ấy dễ đổi nếu cần."]
      ], note: "Tránh nước hoa, quần áo cần đúng size, mỹ phẩm đặc trị và quà quá đắt khi chưa hiểu rõ gu." }
    ];
    return '<section class="gift-advice"><div class="gift-advice-heading"><span>GỢI Ý CHỌN QUÀ</span><p>Gợi ý món cụ thể theo từng dịp. Chọn theo sở thích đã biết, ngân sách thoải mái và mức độ thân thiết.</p></div><div class="gift-advice-grid">' + advice.map(function (row) { return '<article class="gift-advice-card"><h3>' + escapeHtml(row.occasion) + '</h3><ul>' + row.gifts.map(function (gift) { return '<li><strong>' + escapeHtml(gift[0]) + '</strong> — ' + escapeHtml(gift[1]) + '</li>'; }).join('') + '</ul><p class="gift-advice-note">' + escapeHtml(row.note) + '</p></article>'; }).join('') + '</div></section>';
  }
  function renderTabs() {
    tabsEl.innerHTML = "";
    [{ id: "all", emoji: "✨", label: "Tất cả" }].concat(tabs).forEach(function (tab) {
      var btn = document.createElement("button");
      btn.type = "button"; btn.className = "tab" + (tab.id === activeTabId ? " active" : "");
      btn.textContent = tab.emoji + " " + tab.label;
      btn.setAttribute("aria-pressed", tab.id === activeTabId ? "true" : "false");
      btn.addEventListener("click", function () { activeTabId = tab.id; document.body.dataset.tab = tab.id; renderTabs(); renderList(); });
      tabsEl.appendChild(btn);
    });
  }
  function renderList() {
    var selected = activeTabId === "all" ? foodTabs : tabs.filter(function (tab) { return tab.id === activeTabId; });
    updateSubcategoryOptions(selected);
    if (selected.length && !selected[0].items) {
      listEl.innerHTML = ideaHtml(selected[0]);
      countEl.textContent = "Ý tưởng để bạn bắt đầu lên kế hoạch";
    } else {
      var items = [];
      selected.forEach(function (tab) { tab.items.filter(matches).forEach(function (item) { items.push({ item: item, tab: tab }); }); });
      listEl.innerHTML = items.length ? items.map(function (entry, index) { return cardHtml(entry.item, index, entry.tab); }).join("") : '<div class="empty">Chưa tìm thấy gợi ý phù hợp<span>Thử khu vực hoặc từ khoá khác nhé.</span></div>';
      var categoryTab = selected.length === 1 ? selected[0] : null;
      var target = categoryTab ? categoryTab.items.length : null;
      if (categoryTab && categoryTab.id === "gifts") listEl.insertAdjacentHTML("afterbegin", giftAdviceHtml());
      countEl.textContent = categoryTab ? items.length + " / " + target + " địa điểm trong danh mục · " + (keyword || areaSelect.value || subcategorySelect.value || budgetSelect.value ? "đang áp dụng bộ lọc" : "giá và giờ mở cửa nên được xác nhận") : items.length + " gợi ý tổng hợp · giá và giờ mở cửa nên được xác nhận trước buổi hẹn";
      Array.prototype.forEach.call(listEl.querySelectorAll("img.place-img"), function (img) {
        img.addEventListener("error", function () {
          var card = img.closest(".place-card");
          var note = card && card.querySelector(".photo-credit");
          img.hidden = true;
          if (note) { note.textContent = "Ảnh không tải được"; note.classList.add("photo-error"); }
        });
      });
    }
    searchClear.hidden = !keyword;
  }
  searchInput.addEventListener("input", function () { keyword = searchInput.value.trim(); renderList(); });
  searchClear.addEventListener("click", function () { searchInput.value = ""; keyword = ""; renderList(); searchInput.focus(); });
  areaSelect.addEventListener("change", renderList);
  subcategorySelect.addEventListener("change", renderList);
  budgetSelect.addEventListener("change", renderList);
  renderTabs(); renderList();
})();
