const COMBO_DATA = {
  bbq: {
    id: "bbq",
    emoji: "🔥",
    label: "Chuyên nướng",
    foodLabel: "Quán nướng",
    cafeLabel: "Quán nước",
    combos: [
      {
        id: 1,
        food: {
          name: "JINRO BBQ",
          address: "9A ngõ 181 Xuân Thủy",
          desc: "BBQ Hàn, nhiều món thịt nướng, không khí trẻ",
        },
        cafe: {
          name: "Tiny Post Cafe",
          address: "251 Nguyễn Khang",
          desc: "Cafe vintage, không gian khá thoải mái, mở muộn",
        },
      },
      {
        id: 2,
        food: {
          name: "YAKIMONO",
          address: "75 Trung Hòa",
          desc: "Nướng & lẩu Nhật, nhiều lựa chọn, phù hợp đi 2 người",
        },
        cafe: {
          name: "L'amant Cafe",
          address: "Trung Hòa",
          desc: "Cafe thiên về không gian, khá nhẹ nhàng",
        },
      },
      {
        id: 3,
        food: {
          name: "Meat King BBQ",
          address: "4 Trần Kim Xuyến",
          desc: "BBQ Hàn, tập trung các món thịt nướng",
        },
        cafe: {
          name: "Le Doux Coffee",
          address: "10 ngõ 16 Nguyễn Văn Huyên",
          desc: "Cafe decor đẹp, phù hợp ngồi nói chuyện",
        },
      },
      {
        id: 4,
        food: {
          name: "G.Master",
          address: "101A tòa D5 Trần Thái Tông",
          desc: "Nướng Nhật, phong cách izakaya",
        },
        cafe: {
          name: "Pause Coffee",
          address: "15 ngõ 72 Trần Thái Tông",
          desc: "Cafe rộng, lịch sự, có thể ngồi lâu",
        },
      },
      {
        id: 5,
        food: {
          name: "Ăndeee",
          address: "52 Nguyễn Khang",
          desc: "Lẩu + nướng, menu khá đa dạng",
        },
        cafe: {
          name: "Tiny Post Cafe",
          address: "251 Nguyễn Khang",
          desc: "Cafe vintage, mở tới khuya",
        },
      },
      {
        id: 6,
        food: {
          name: "Sườn Mười",
          address: "128 Vũ Phạm Hàm",
          desc: "Chuyên sườn BBQ, thiên về thịt nướng",
        },
        cafe: {
          name: "Cộng Cà Phê",
          address: "Tòa nhà 4F, Trung Hòa",
          desc: "Cafe phong cách Việt, decor đặc trưng",
        },
      },
      {
        id: 7,
        food: {
          name: "Trạm Nướng",
          address: "62 Trần Thái Tông",
          desc: "Nướng than hoa, nhân viên hỗ trợ nướng",
        },
        cafe: {
          name: "Gác Trịnh Cafe",
          address: "28 ngõ 45 Trần Thái Tông",
          desc: "Cafe phong cách vintage, không gian có chất riêng",
        },
      },
      {
        id: 8,
        food: {
          name: "Trạm Nướng",
          address: "71–73 Trần Thái Tông",
          desc: "Nướng than hoa, thịt/nầm/hải sản",
        },
        cafe: {
          name: "Contrast Coffee 24h",
          address: "217 Tô Hiệu",
          desc: "Cafe mở rất muộn, phù hợp ngồi lâu",
        },
      },
      {
        id: 9,
        food: {
          name: "Lẩu Nướng Maho",
          address: "31 Vũ Phạm Hàm",
          desc: "Lẩu và nướng, quy mô vừa",
        },
        cafe: {
          name: "Cộng Cà Phê",
          address: "Tòa nhà 4F, Trung Hòa",
          desc: "Cafe phong cách Việt, không gian dễ chịu",
        },
      },
      {
        id: 10,
        food: {
          name: "GoGi House",
          address: "Căn 12, Lô 4A, KĐT Trung Yên",
          desc: "BBQ Hàn Quốc, menu quen thuộc, dễ chọn món",
        },
        cafe: {
          name: "Cộng Cà Phê",
          address: "Tòa nhà 4F, Trung Hòa",
          desc: "Không gian Việt, đồ uống đa dạng",
        },
      },
      {
        id: 11,
        food: {
          name: "Doncook Corn Grill & BBQ",
          address: "130 Trung Hòa",
          desc: "BBQ Hàn, tập trung thịt nướng",
        },
        cafe: {
          name: "Laika Cafe",
          address: "91 Trung Hòa",
          desc: "Cafe trẻ, menu đồ uống đa dạng",
        },
      },
      {
        id: 12,
        food: {
          name: "Meat Plus",
          address: "105 Trung Hòa",
          desc: "Nướng Hàn gọi món, nổi bật các món bò/thịt",
        },
        cafe: {
          name: "Tiny Post Cafe",
          address: "251 Nguyễn Khang",
          desc: "Cafe vintage, có thể ngồi lâu",
        },
      },
      {
        id: 13,
        food: {
          name: "Wang Wang",
          address: "30 Hồ Tùng Mậu",
          desc: "Buffet lẩu nướng Hàn Quốc, nhiều món",
        },
        cafe: {
          name: "The Coffee House",
          address: "302 Cầu Giấy",
          desc: "Chuỗi cafe quen thuộc, dễ lựa chọn",
        },
      },
      {
        id: 14,
        food: {
          name: "Buffet 149K Lẩu – Nướng Trung Hoa",
          address: "116 Hoàng Quốc Việt",
          desc: "Buffet lẩu nướng giá mềm, nhiều món",
        },
        cafe: {
          name: "Xu Xèng Coffee & Drinks",
          address: "144 Xuân Thủy",
          desc: "Cafe nhỏ, phù hợp ngồi trò chuyện",
        },
      },
      {
        id: 15,
        food: {
          name: "Quán Nướng 26",
          address: "26 Nguyễn Phong Sắc",
          desc: "Nướng bình dân, không khí thoải mái",
        },
        cafe: {
          name: "Vanila Coffee",
          address: "Dịch Vọng Hậu",
          desc: "Cafe nhỏ, giá khá dễ chịu",
        },
      },
      {
        id: 16,
        food: {
          name: "Em Nướng",
          address: "Cầu Giấy",
          desc: "Nướng than hoa kiểu Việt, nhiều món thịt",
        },
        cafe: {
          name: "Le Doux Coffee",
          address: "10 ngõ 16 Nguyễn Văn Huyên",
          desc: "Cafe decor đẹp, không gian tương đối yên",
        },
      },
      {
        id: 17,
        food: {
          name: "Bò Nầm Nướng Quán Trung",
          address: "157 Nguyễn Ngọc Vũ",
          desc: "Chuyên bò và nầm nướng, phục vụ buổi tối",
        },
        cafe: {
          name: "JIDAI by Cerenote",
          address: "20 ngõ 165 Cầu Giấy",
          desc: "Cafe mở rất muộn, phù hợp ngồi sau ăn",
        },
      },
      {
        id: 18,
        food: {
          name: "Ngon BBQ",
          address: "1116 Đường Láng",
          desc: "Lẩu + nướng, phục vụ khá muộn",
        },
        cafe: {
          name: "JIDAI by Cerenote",
          address: "20 ngõ 165 Cầu Giấy",
          desc: "Cafe mở rất muộn, phù hợp ngồi sau ăn",
        },
      },
      {
        id: 19,
        food: {
          name: "Lẩu Nướng Buffet Huyền Trang",
          address: "19 ngõ 143 Quan Hoa",
          desc: "Buffet lẩu nướng, nhiều món, hoạt động muộn",
        },
        cafe: {
          name: "Contrast Coffee 24h",
          address: "217 Tô Hiệu",
          desc: "Cafe 24h, phù hợp nếu muốn ngồi lâu",
        },
      },
      {
        id: 20,
        food: {
          name: "Quán Nướng 26",
          address: "26 Nguyễn Phong Sắc",
          desc: "Nướng bình dân, nhiều món thịt",
        },
        cafe: {
          name: "PINK Coffee",
          address: "Tầng 8-9, 37 Nguyễn Văn Huyên",
          desc: "Cafe trẻ, không gian tương đối thoải mái",
        },
      },
      {
        id: 21,
        food: {
          name: "G.Master",
          address: "101A tòa D5 Trần Thái Tông",
          desc: "Nướng Nhật, có thêm món nhậu kiểu Nhật",
        },
        cafe: {
          name: "Vanila Coffee",
          address: "Dịch Vọng Hậu",
          desc: "Cafe nhỏ, giá dễ tiếp cận",
        },
      },
      {
        id: 22,
        food: {
          name: "JINRO BBQ",
          address: "9A ngõ 181 Xuân Thủy",
          desc: "BBQ Hàn, menu thịt nướng đa dạng",
        },
        cafe: {
          name: "Tiny Post Cafe",
          address: "251 Nguyễn Khang",
          desc: "Cafe vintage, mở tới khuya",
        },
      },
      {
        id: 23,
        food: {
          name: "Meat King BBQ",
          address: "4 Trần Kim Xuyến",
          desc: "BBQ Hàn, thiên về thịt nướng",
        },
        cafe: {
          name: "Cộng Cà Phê",
          address: "Tòa nhà 4F, Trung Hòa",
          desc: "Cafe phong cách Việt, không gian đặc trưng",
        },
      },
      {
        id: 24,
        food: {
          name: "Ăndeee",
          address: "52 Nguyễn Khang",
          desc: "Lẩu/nướng, menu rộng, khá dễ ăn",
        },
        cafe: {
          name: "Le Doux Coffee",
          address: "10 ngõ 16 Nguyễn Văn Huyên",
          desc: "Cafe decor đẹp, phù hợp trò chuyện",
        },
      },
      {
        id: 25,
        food: {
          name: "Lẩu Nướng Maho",
          address: "31 Vũ Phạm Hàm",
          desc: "Lẩu nướng, không gian vừa phải",
        },
        cafe: {
          name: "PINK Coffee",
          address: "Tầng 8-9, 37 Nguyễn Văn Huyên",
          desc: "Cafe trẻ, nhiều đồ uống",
        },
      },
      {
        id: 26,
        food: {
          name: "GoGi House",
          address: "Căn 12, Lô 4A, KĐT Trung Yên",
          desc: "BBQ Hàn Quốc, chuỗi quen thuộc",
        },
        cafe: {
          name: "The Coffee House",
          address: "302 Cầu Giấy",
          desc: "Cafe chuỗi, menu dễ lựa chọn",
        },
      },
      {
        id: 27,
        food: {
          name: "Meat Plus",
          address: "105 Trung Hòa",
          desc: "Nướng Hàn gọi món, nổi bật thịt bò",
        },
        cafe: {
          name: "Cộng Cà Phê",
          address: "Tòa nhà 4F, Trung Hòa",
          desc: "Cafe Việt, không gian đặc trưng",
        },
      },
      {
        id: 28,
        food: {
          name: "YAKIMONO",
          address: "75 Trung Hòa",
          desc: "Buffet nướng/lẩu Nhật, menu phong phú",
        },
        cafe: {
          name: "Xu Xèng Coffee & Drinks",
          address: "144 Xuân Thủy",
          desc: "Cafe nhỏ, không quá ồn",
        },
      },
      {
        id: 29,
        food: {
          name: "Buffet 149K Lẩu – Nướng Trung Hoa",
          address: "116 Hoàng Quốc Việt",
          desc: "Buffet nướng giá mềm, nhiều món",
        },
        cafe: {
          name: "Le Doux Coffee",
          address: "10 ngõ 16 Nguyễn Văn Huyên",
          desc: "Cafe decor đẹp, không gian dễ ngồi",
        },
      },
      {
        id: 30,
        food: {
          name: "Trạm Nướng",
          address: "62 Trần Thái Tông",
          desc: "Nướng than hoa, nhân viên hỗ trợ nướng",
        },
        cafe: {
          name: "Pause Coffee",
          address: "15 ngõ 72 Trần Thái Tông",
          desc: "Cafe rộng, lịch sự, thuận tiện sau bữa ăn",
        },
      },
    ],
  },
  diverse: {
    id: "diverse",
    emoji: "🌕",
    label: "Đa dạng",
    foodLabel: "Quán ăn",
    cafeLabel: "Quán nước",
    combos: [
      {
        id: 1,
        food: {
          name: "Le Monde Steak",
          address: "84 Trung Hòa",
          desc: "Steak kiểu Âu, không gian lịch sự, hợp ăn tối 2 người",
        },
        cafe: {
          name: "Claudi Coffee Rooftop",
          address: "110 Cầu Giấy",
          desc: "Rooftop, có không gian ngoài trời, mở tới 23h",
        },
      },
      {
        id: 2,
        food: {
          name: "Pizza Amalfi",
          address: "Tòa Skypark, 3 Tôn Thất Thuyết",
          desc: "Pizza & món Ý, dễ ăn và dễ chia sẻ",
        },
        cafe: {
          name: "M Coffee Bar Rooftop",
          address: "148 Hoàng Quốc Việt",
          desc: "Rooftop, không gian thoáng, có thể ngồi nói chuyện",
        },
      },
      {
        id: 3,
        food: {
          name: "Tohoku Japanese Restaurant",
          address: "75 Trần Thái Tông",
          desc: "Nhà hàng Nhật, sushi và món Nhật",
        },
        cafe: {
          name: "Claudi Coffee Rooftop",
          address: "110 Cầu Giấy",
          desc: "Cafe rooftop, hợp ngồi sau bữa tối",
        },
      },
      {
        id: 4,
        food: {
          name: "JINRO BBQ",
          address: "9A ngõ 181 Xuân Thủy",
          desc: "BBQ Hàn, thịt nướng, không khí trẻ",
        },
        cafe: {
          name: "Bọt Cafe",
          address: "8 ngách 34 ngõ 68 Cầu Giấy",
          desc: "Cafe nhỏ, giá mềm, không gian khá yên",
        },
      },
      {
        id: 5,
        food: {
          name: "WuLong - Taiwanese Hotpot Buffet",
          address: "126 Nguyễn Khánh Toàn",
          desc: "Buffet lẩu Đài Loan, nhiều món nhúng",
        },
        cafe: {
          name: "Claudi Coffee Rooftop",
          address: "110 Cầu Giấy",
          desc: "Rooftop, thích hợp chuyển sang ngồi nói chuyện",
        },
      },
      {
        id: 6,
        food: {
          name: "Fu Rong Hua Cantonese Restaurant",
          address: "D5A Trần Thái Tông",
          desc: "Món Quảng Đông, dimsum và món Hoa",
        },
        cafe: {
          name: "The Coffee House",
          address: "302 Cầu Giấy",
          desc: "Cafe chuỗi, menu dễ chọn, không gian quen thuộc",
        },
      },
      {
        id: 7,
        food: {
          name: "Nhà Hàng Tôm Hùm Seafood",
          address: "8 Trần Kim Xuyến",
          desc: "Hải sản, tôm hùm và các món biển",
        },
        cafe: {
          name: "And dessert cafe",
          address: "36 Nguyễn Khang",
          desc: "Cafe + dessert, mở tới 2h sáng",
        },
      },
      {
        id: 8,
        food: {
          name: "Moo Beef Steak",
          address: "2F Nguyễn Khánh Toàn",
          desc: "Steak/bò kiểu Âu hiện đại, khá chỉn chu",
        },
        cafe: {
          name: "M Coffee Bar Rooftop",
          address: "148 Hoàng Quốc Việt",
          desc: "Rooftop, không gian thoáng",
        },
      },
      {
        id: 9,
        food: {
          name: "Hải Sản Tomato",
          address: "33 Nguyễn Thị Định",
          desc: "Hải sản, nhiều món gọi riêng",
        },
        cafe: {
          name: "Bọt Cafe",
          address: "8 ngách 34 ngõ 68 Cầu Giấy",
          desc: "Cafe nhỏ, yên, giá vừa phải",
        },
      },
      {
        id: 10,
        food: {
          name: "Nhà Hàng Trung Hoa Đỉnh Thái Phong",
          address: "Số 5 Tú Mỡ",
          desc: "Món Trung Hoa, menu khá rộng",
        },
        cafe: {
          name: "YOYe Rooftop",
          address: "Tầng M, 148 Hoàng Quốc Việt",
          desc: "Rooftop/bar-cafe, không gian thoáng",
        },
      },
      {
        id: 11,
        food: {
          name: "Thục Hương Lầu",
          address: "83–85 Trung Hòa",
          desc: "Nhà hàng Trung Hoa, nhiều món gọi chung",
        },
        cafe: {
          name: "Claudi Coffee Rooftop",
          address: "110 Cầu Giấy",
          desc: "Rooftop, hợp ngồi sau bữa tối",
        },
      },
      {
        id: 12,
        food: {
          name: "EMM's French Bistro",
          address: "28 Đỗ Quang",
          desc: "Bistro Pháp, phong cách nhẹ nhàng, phù hợp date",
        },
        cafe: {
          name: "M Coffee Bar Rooftop",
          address: "148 Hoàng Quốc Việt",
          desc: "Rooftop, có không gian ngoài trời",
        },
      },
      {
        id: 13,
        food: {
          name: "Spices Taste of India",
          address: "17T5 Hoàng Đạo Thúy",
          desc: "Đồ Ấn, curry, naan và món nướng kiểu Ấn",
        },
        cafe: {
          name: "Bọt Cafe",
          address: "8 ngách 34 ngõ 68 Cầu Giấy",
          desc: "Cafe nhỏ, yên, hợp trò chuyện",
        },
      },
      {
        id: 14,
        food: {
          name: "Khrua Baan Thai",
          address: "35 Khúc Thừa Dụ",
          desc: "Đồ Thái, vị chua cay, nhiều món chia sẻ",
        },
        cafe: {
          name: "Claudi Coffee Rooftop",
          address: "110 Cầu Giấy",
          desc: "Rooftop, không gian thoáng",
        },
      },
      {
        id: 15,
        food: {
          name: "Phước Hạnh Vegan Buffet Lẩu Chay",
          address: "Số 1 ngõ 10 Nguyễn Văn Huyên",
          desc: "Buffet lẩu chay, nhiều rau/nấm/đồ chay",
        },
        cafe: {
          name: "Bọt Cafe",
          address: "8 ngách 34 ngõ 68 Cầu Giấy",
          desc: "Cafe nhỏ, không gian nhẹ nhàng",
        },
      },
      {
        id: 16,
        food: {
          name: "Stirling Steaks",
          address: "48 Trung Yên 6",
          desc: "Steakhouse, chuyên các món bò/steak",
        },
        cafe: {
          name: "The Coffee House",
          address: "302 Cầu Giấy",
          desc: "Cafe quen thuộc, dễ ngồi",
        },
      },
      {
        id: 17,
        food: {
          name: "SSamjang - Nướng & Cuốn Chợ Hàn",
          address: "1A Dịch Vọng Hậu",
          desc: "Đồ Hàn, nướng và cuốn kiểu Hàn",
        },
        cafe: {
          name: "Bọt Cafe",
          address: "8 ngách 34 ngõ 68 Cầu Giấy",
          desc: "Cafe nhỏ, giá hợp lý",
        },
      },
      {
        id: 18,
        food: {
          name: "Seoul Pocha",
          address: "Ngõ 11 Duy Tân",
          desc: "Đồ Hàn kiểu pocha, thiên về món ăn + đồ nhắm",
        },
        cafe: {
          name: "M Coffee Bar Rooftop",
          address: "148 Hoàng Quốc Việt",
          desc: "Rooftop, thoáng và dễ ngồi lâu",
        },
      },
      {
        id: 19,
        food: {
          name: "Au Lac Family Restaurant",
          address: "23 Ngõ Huyện",
          desc: "Món Việt, nhiều lựa chọn gia đình",
        },
        cafe: {
          name: "The Coffee House",
          address: "302 Cầu Giấy",
          desc: "Cafe chuỗi, dễ lựa chọn",
        },
      },
      {
        id: 20,
        food: {
          name: "Nhà Hàng Hải Sản Biển Đông",
          address: "Số 2 ngõ 84 Trần Thái Tông",
          desc: "Hải sản, menu rất rộng, nhiều món chia sẻ",
        },
        cafe: {
          name: "Bọt Cafe",
          address: "8 ngách 34 ngõ 68 Cầu Giấy",
          desc: "Cafe nhỏ, phù hợp ngồi trò chuyện",
        },
      },
      {
        id: 21,
        food: {
          name: "Tian Long",
          address: "107-D5 Trần Thái Tông",
          desc: "Lẩu, nhiều loại nước dùng và đồ nhúng",
        },
        cafe: {
          name: "Claudi Coffee Rooftop",
          address: "110 Cầu Giấy",
          desc: "Rooftop, có thể ngồi đến 23h",
        },
      },
      {
        id: 22,
        food: {
          name: "KAWASEI Japanese Restaurant",
          address: "Ngõ 82 Duy Tân",
          desc: "Nhật, menu đa dạng, mở từ sáng tới 23h",
        },
        cafe: {
          name: "And dessert cafe",
          address: "36 Nguyễn Khang",
          desc: "Cafe + dessert, mở tới 2h",
        },
      },
      {
        id: 23,
        food: {
          name: "Tohoku Japanese Restaurant",
          address: "75 Trần Thái Tông",
          desc: "Nhật, sushi/sashimi và món nóng",
        },
        cafe: {
          name: "The Laputa - Sky Pub & Chill",
          address: "357 Nguyễn Khang",
          desc: "Sky pub/chill, mở tới 2h",
        },
      },
      {
        id: 24,
        food: {
          name: "GangnamBox The Loop IPH Hanoi",
          address: "241 Xuân Thủy",
          desc: "Món Hàn, thuận tiện nếu muốn kết hợp đi trung tâm thương mại",
        },
        cafe: {
          name: "The Coffee House",
          address: "302 Cầu Giấy",
          desc: "Cafe quen thuộc, dễ ngồi",
        },
      },
      {
        id: 25,
        food: {
          name: "Lẩu Thái Ếch Nymo",
          address: "29 Nguyễn Phong Sắc",
          desc: "Lẩu Thái ếch, vị đậm và có nhiều món ăn kèm",
        },
        cafe: {
          name: "And dessert cafe",
          address: "36 Nguyễn Khang",
          desc: "Dessert + đồ uống, mở tới 2h",
        },
      },
      {
        id: 26,
        food: {
          name: "Long Wang - Lẩu Hấp Thủy Nhiệt Hồng Kông",
          address: "299 Cầu Giấy",
          desc: "Lẩu hấp thủy nhiệt kiểu Hong Kong",
        },
        cafe: {
          name: "YOYe Rooftop",
          address: "Tầng M, 148 Hoàng Quốc Việt",
          desc: "Rooftop, không gian thoáng",
        },
      },
      {
        id: 27,
        food: {
          name: "Tonkotsu Ramen",
          address: "175 Trần Quốc Vượng",
          desc: "Ramen Nhật, món nhanh gọn nhưng vẫn có chất Nhật",
        },
        cafe: {
          name: "The Laputa - Sky Pub & Chill",
          address: "357 Nguyễn Khang",
          desc: "Sky pub/chill, mở tới 2h",
        },
      },
      {
        id: 28,
        food: {
          name: "Yeol Kwang Restaurant",
          address: "72 Trương Công Giai",
          desc: "Đồ Hàn, món cay và món ăn kiểu Hàn",
        },
        cafe: {
          name: "Bọt Cafe",
          address: "8 ngách 34 ngõ 68 Cầu Giấy",
          desc: "Cafe nhỏ, không gian yên",
        },
      },
      {
        id: 29,
        food: {
          name: "Pane e Vino Italian Restaurant & Wine Shop",
          address: "57 Nguyễn Chánh",
          desc: "Ý, pasta/pizza và đồ uống kiểu Âu",
        },
        cafe: {
          name: "Claudi Coffee Rooftop",
          address: "110 Cầu Giấy",
          desc: "Rooftop, hợp kéo dài buổi tối",
        },
      },
      {
        id: 30,
        food: {
          name: "MIYAKO Hanoi HidaWagyu A5 - JP Restaurant BBQ",
          address: "Nguyễn Khánh Toàn",
          desc: "Wagyu A5 Nhật, BBQ cao cấp; thiên về trải nghiệm",
        },
        cafe: {
          name: "The Laputa - Sky Pub & Chill",
          address: "357 Nguyễn Khang",
          desc: "Sky pub/chill, mở tới 2h",
        },
      },
    ],
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = COMBO_DATA;
}
