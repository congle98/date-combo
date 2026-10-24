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
      { occasion: "Buổi hẹn đầu", context: "Mới quen, chưa rõ gu và mức độ thoải mái", gifts: [
        ["Bó hoa nhỏ 3–5 cành", "tulip, cúc tana hoặc hoa theo mùa; chọn bó gọn, ít mùi để dễ mang đi."],
        ["Hộp bánh mini", "chọn vài chiếc bánh nhỏ để có thể cùng thử trong buổi hẹn; hỏi trước về dị ứng nếu tiện."],
        ["Chocolate hoặc bánh quy đóng hộp nhỏ", "dễ chia sẻ và không đòi hỏi người nhận phải trưng bày hay sử dụng lâu dài."],
        ["Thiệp viết tay", "một lời chúc ngắn, tự nhiên, gắn với điều hai người đã trò chuyện."]
      ], note: "Giữ quà nhẹ nhàng và vừa ngân sách; đừng chọn món quá riêng tư hoặc khiến người nhận thấy phải đáp lễ." },
      { occasion: "Sinh nhật", context: "Có thể chọn theo sở thích, thói quen và điều người ấy đang cần", gifts: [
        ["Sách đúng gu", "chọn thể loại hoặc tác giả người ấy từng nhắc; viết lời đề tặng lên thiệp rời để không làm hỏng sách."],
        ["Bánh sinh nhật mini", "chọn vị đã biết người ấy thích; xác nhận số người ăn, dị ứng và chế độ ăn."],
        ["Đồ dùng cho sở thích", "sổ vẽ, màu vẽ, phụ kiện chạy bộ, dụng cụ làm bánh hoặc chậu cây nhỏ; ưu tiên thứ người ấy đang thiếu."],
        ["Một buổi trải nghiệm", "vé workshop, xem phim, hòa nhạc hoặc trà chiều; hỏi lịch trước khi đặt và chọn vé đổi được nếu có."],
        ["Trang sức hoặc phụ kiện", "chỉ chọn khi đã biết chất liệu, màu kim loại, size và kiểu người ấy thường dùng."]
      ], note: "Giữ hóa đơn hoặc chọn nơi đổi mẫu được. Tránh tự đoán mỹ phẩm, nước hoa và quần áo nếu chưa biết chính xác gu." },
      { occasion: "Kỷ niệm yêu nhau", context: "Tập trung vào câu chuyện chung và thời gian dành cho nhau", gifts: [
        ["Album ảnh nhỏ", "chọn ảnh từ những cột mốc hai người cùng nhớ và thêm chú thích ngắn cho từng trang."],
        ["Hộp quà theo kỷ niệm", "ghép trà/cà phê từng uống cùng nhau, món ăn vặt yêu thích, một tấm ảnh và thiệp."],
        ["Trang sức tối giản", "chọn dây chuyền hoặc vòng tay nếu biết người ấy thích đeo trang sức và đã rõ chất liệu, kích cỡ."],
        ["Bữa tối hoặc buổi trải nghiệm", "đặt bàn ở nơi gắn với kỷ niệm hoặc thử hoạt động cả hai từng muốn làm."],
        ["Bản đồ / khung ảnh kỷ niệm", "đánh dấu nơi gặp nhau lần đầu hoặc một chuyến đi đáng nhớ; hợp người thích đồ lưu niệm cá nhân."]
      ], note: "Kể lý do bạn chọn món đó. Hỏi lịch trước nếu có đặt chỗ, chuyến đi hoặc hoạt động bất ngờ." },
      { occasion: "Valentine, 8/3 hoặc 20/10", context: "Ngày lễ có thể tặng hoa, món nhỏ hoặc trải nghiệm; không cần chạy theo giá trị món quà", gifts: [
        ["Hoa theo màu người ấy thích", "chọn bó vừa tay, ghi thiệp với lời chúc riêng; hỏi tiệm về độ bền nếu cần mang đi lâu."],
        ["Chocolate hoặc hộp bánh từ tiệm", "chọn loại người ấy ăn được và khẩu phần phù hợp; có thể mua cùng nhau nếu chưa biết vị."],
        ["Set trà hoặc cà phê", "hợp người thích pha đồ uống ở nhà; chọn loại đã từng thấy người ấy uống."],
        ["Một buổi hẹn đã chuẩn bị", "đặt bàn hoặc lên lịch dạo phố, xem phim, workshop; gửi người ấy thời gian và lựa chọn để xác nhận."],
        ["Món đồ thủ công nhỏ", "móc khóa, gốm hoặc thiệp từ cửa hàng địa phương; chọn công năng hoặc màu sắc hợp người nhận."]
      ], note: "Đừng mặc định mọi người đều thích hoa, chocolate hay quà bất ngờ; hỏi nhẹ về sở thích và kế hoạch trong ngày." },
      { occasion: "Động viên sau ngày khó khăn", context: "Quan tâm trước, tặng quà sau; để người ấy chọn cách được hỗ trợ", gifts: [
        ["Món ăn hoặc đồ uống quen thuộc", "mua đúng món người ấy thường gọi, hỏi xem có muốn nhận không trước khi mang tới."],
        ["Bó hoa nhỏ, ít mùi", "chọn hoa theo mùa; cân nhắc dị ứng, vật nuôi và việc người ấy có tiện mang về không."],
        ["Túi đồ thư giãn", "trà, tất mềm, snack mặn/ngọt người ấy thích; tránh mỹ phẩm hoặc nến thơm nếu chưa rõ dị ứng."],
        ["Đồ ăn tối mang đến", "hỏi trước về giờ và món ăn; đề nghị để trước cửa nếu người ấy muốn nghỉ riêng."],
        ["Lời đề nghị giúp cụ thể", "đi dạo, nghe chuyện, đón về hoặc phụ việc nhỏ; chấp nhận nếu người ấy muốn ở một mình."]
      ], note: "Không yêu cầu người ấy phải vui lên hay kể chuyện ngay. Tặng quà không thay cho việc lắng nghe." },
      { occasion: "Chúc mừng tốt nghiệp, công việc mới hoặc thành tựu", context: "Chọn món ghi nhận nỗ lực và hữu ích cho chặng tiếp theo", gifts: [
        ["Bó hoa chúc mừng", "chọn màu người ấy thích và ghi rõ thành tựu bạn muốn chúc mừng."],
        ["Sổ tay hoặc bút chất lượng tốt", "hợp người hay ghi chép, học tập hoặc làm việc; chọn kích cỡ tiện mang theo."],
        ["Bình giữ nhiệt hoặc túi đựng laptop", "chọn theo nhu cầu thực tế, kích cỡ thiết bị và màu sắc người ấy thường dùng."],
        ["Sách chuyên môn hoặc sách truyền cảm hứng", "chỉ chọn nếu hiểu lĩnh vực và biết người ấy chưa có cuốn đó."],
        ["Bữa ăn mừng", "mời người ấy tới quán họ muốn thử; để họ chọn ngày nếu lịch đang bận."]
      ], note: "Ghi nhận công sức cụ thể thay vì chỉ nói chung chung. Không biến dịp vui thành áp lực về mục tiêu tiếp theo." },
      { occasion: "Lần đầu ra mắt gia đình", context: "Lịch sự, dễ chia sẻ và phù hợp quy ước gia đình", gifts: [
        ["Hộp trái cây hoặc bánh đóng gói", "chọn loại dễ chia phần và hỏi người yêu trước về khẩu vị, kiêng kỵ của gia đình."],
        ["Trà hoặc cà phê", "chọn bao bì gọn, nhãn mác rõ; phù hợp khi biết gia đình có thói quen dùng."],
        ["Đặc sản địa phương", "chọn món dễ bảo quản, nguồn gốc rõ ràng và không quá đắt."],
        ["Bó hoa nhã nhặn", "hỏi người yêu xem gia đình có thích hoa không và tránh loại có mùi nồng."]
      ], note: "Hỏi người yêu trước về số lượng, phong tục, món kiêng và cách xưng hô. Không mang quà quá xa xỉ khiến chủ nhà ngại." },
      { occasion: "Chưa rõ sở thích / mới tìm hiểu", context: "Ưu tiên món nhỏ, có thể dùng chung hoặc dễ đổi", gifts: [
        ["Thiệp và bánh quy / chocolate nhỏ", "dễ nhận, dễ chia sẻ; hỏi trước về dị ứng và chế độ ăn."],
        ["Hoa theo mùa, bó nhỏ", "chọn màu trung tính và loại ít mùi nếu chưa biết người ấy thích hoa nào."],
        ["Voucher linh hoạt", "chọn nơi có nhiều lựa chọn và thời hạn đủ dài; rủ người ấy cùng chọn ngày."],
        ["Trà, cà phê hoặc đặc sản địa phương", "chọn loại dễ dùng, đóng gói gọn và có thông tin thành phần."],
        ["Mời người ấy cùng chọn", "đưa ra vài cửa hàng hoặc hoạt động để món quà đúng ý mà vẫn có thời gian bên nhau."]
      ], note: "Tránh nước hoa, đồ mặc cần đúng size, mỹ phẩm đặc trị, thú cưng và quà quá đắt khi chưa hiểu rõ mong muốn." }
    ];
    return '<section class="gift-advice"><div class="gift-advice-heading"><span>GỢI Ý CHỌN QUÀ</span><p>Gợi ý món cụ thể, vì sao hợp dịp và điều nên kiểm tra trước khi mua. Hãy chọn theo điều người ấy thích, không theo giá món quà.</p></div><div class="gift-advice-grid">' + advice.map(function (row) { return '<article class="gift-advice-card"><h3>' + escapeHtml(row.occasion) + '</h3><p class="gift-advice-context">' + escapeHtml(row.context) + '</p><ul>' + row.gifts.map(function (gift) { return '<li><strong>' + escapeHtml(gift[0]) + '</strong> — ' + escapeHtml(gift[1]) + '</li>'; }).join('') + '</ul><p class="gift-advice-note">' + escapeHtml(row.note) + '</p></article>'; }).join('') + '</div></section>' + datingTipsHtml();
  }
  function datingTipsHtml() {
    var tips = [
      ["Trước khi hẹn", ["Hỏi ngày, giờ và khu vực nào tiện; gửi 2–3 lựa chọn thay vì tự quyết hết.", "Chọn nơi phù hợp ngân sách của cả hai, có phương án trong nhà nếu thời tiết xấu.", "Đặt bàn hoặc mua vé khi cần; xác nhận lại kế hoạch và điểm gặp trong ngày." ]],
      ["Khi mới tìm hiểu", ["Chọn nơi công cộng, dễ tìm và vừa đủ yên để trò chuyện.", "Ưu tiên buổi hẹn ngắn, khoảng một hoạt động chính; có thể kéo dài nếu cả hai đều muốn.", "Tôn trọng tốc độ làm quen. Không gây áp lực về quà, địa chỉ nhà, liên lạc riêng tư hay sự thân mật." ]],
      ["Trò chuyện và lắng nghe", ["Hỏi câu mở về sở thích, món ăn, phim hoặc chuyến đi; tiếp nối từ câu trả lời thay vì hỏi dồn.", "Chia sẻ về mình cân bằng, tránh biến buổi hẹn thành buổi phỏng vấn hoặc độc thoại.", "Để điện thoại sang một bên khi đang nói chuyện; chú ý tín hiệu người kia muốn đổi chủ đề hay nghỉ." ]],
      ["Tiền bạc và phép lịch sự", ["Trao đổi tự nhiên về cách thanh toán; đừng mặc định ai phải trả toàn bộ.", "Đến đúng giờ hoặc báo sớm nếu trễ; cảm ơn nhân viên và tôn trọng không gian chung.", "Không chụp, đăng ảnh hoặc kể chuyện riêng của người kia khi chưa được đồng ý." ]],
      ["Ranh giới và an toàn", ["Sự đồng ý cần rõ ràng và có thể thay đổi; im lặng hoặc ngại từ chối không đồng nghĩa đồng ý.", "Không ép uống rượu, đi tiếp nơi khác hoặc chia sẻ thông tin cá nhân.", "Với lần đầu gặp, tự chủ phương tiện về và báo lịch trình cho người tin cậy nếu thấy cần." ]],
      ["Sau buổi hẹn", ["Nếu vui, nhắn lời cảm ơn cụ thể và nói rõ bạn muốn gặp lại; đề xuất kế hoạch đơn giản.", "Nếu người kia chưa trả lời, cho họ thời gian; tránh nhắn dồn hoặc gây áp lực.", "Nếu không muốn tiếp tục, nói lịch sự và rõ ràng. Tôn trọng câu trả lời và ranh giới của nhau." ]]
    ];
    return '<section class="dating-tips"><div class="gift-advice-heading"><span>TIPS TÌNH YÊU & HẸN HÒ</span><p>Những điều nhỏ giúp buổi hẹn thoải mái, tôn trọng và dễ nhớ với cả hai người.</p></div><div class="dating-tips-grid">' + tips.map(function (row) { return '<article class="dating-tip-card"><h3>' + escapeHtml(row[0]) + '</h3><ul>' + row[1].map(function (tip) { return '<li>' + escapeHtml(tip) + '</li>'; }).join('') + '</ul></article>'; }).join('') + '</div></section>';
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
