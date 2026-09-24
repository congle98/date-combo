const COMBO_DATA = {
  bbq: {
    id: "bbq",
    emoji: "🍖",
    label: "Đồ Nướng",
    items: [
      {
        name: "Trạm Nướng - Trần Thái Tông - Cơ sở 1",
        address: "62 Trần Thái Tông",
        desc: "Nướng BBQ, rất nhiều review, hợp đi 2 người",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl2Q9gMarH2Nx8UPg1PXWc8YTB_DV2OJcCdLmREQWD9ZGR9Zva-H2Bzk0__oAM2qFg8mR6bY5-9jd9s86-XOLea0_TQEeVqlvud3GyjkXDDscUfzGpMCJvuoRIFHwBPF0yNrsNZ=w800-h600-k-no",
      },
      {
        name: "Trạm Nướng - Trần Thái Tông - Cơ sở 2",
        address: "71–73 Trần Thái Tông",
        desc: "Cùng hệ Trạm Nướng, vị trí thuận tiện",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkuJWWBmvrMyX6f4iMfnzNLmdZbXXSSZco9L7GYn0WzYdrXYWbAjwGnVGHRJ0FFIKdQrShfvLW0wqaS6hjFSOyluGpoypDwHYm-k6jamxzadvFxM75y_eYEwJNzw0J6VQnt_haxdrn7l7fy=w800-h600-k-no",
      },
      {
        name: "JINRO BBQ",
        address: "9A ngõ 181 Xuân Thủy",
        desc: "BBQ Hàn, 2.8k+ review, mở tới 23h",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlv8llsgMZltkAuXvLRlh5g288TbClgiHmo_qO1zilwEwy4okg0UCe6OYN9VsZhuWR8JBU9k7fTfzcIS2FqICImSGA8RifeL420NZ_tP2P18oSBjL5Vv1WhTic6hbBNCPCkGyKd=w800-h600-k-no",
      },
      {
        name: "SSamjang - Nướng & Cuốn Chợ Hàn",
        address: "1A Dịch Vọng Hậu",
        desc: "Nướng/cuốn Hàn Quốc",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmHTc4JdnzwzRZmhDjVJ0IkWnAkyU0uRbzI7qCHXR34tImGFe_trLeBG5xFhjsThwCWtr8wdEHB5oT5dTmHYdg5xLPjMlgxIhV9LYAy5WxIIUGryEwXNUbferwuyI8qBJd0FonGJfBNUXHn=w800-h600-k-no",
      },
      {
        name: "Doncook Corn Grill & BBQ",
        address: "130 Trung Hòa",
        desc: "Nướng Hàn, thịt nướng phong cách đặc trưng",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl2VkjCWtOmcNhO2F23DQQIFKOgzKrFgY2RmfJ_uf6ZT1V6_AWXD959xZoqjkVoyPR18JyzMQlHhtLua_kuyQC8yXT66AnmTHCg-hFiub-XJLRH1c1I6Gv3eJYkFj8ZydFKFjcBzA=w800-h600-k-no",
      },
      {
        name: "GoGi House",
        address: "124 Trung Hòa",
        desc: "Nướng Hàn kiểu chuỗi, dễ ăn, ít rủi ro",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRzxFSFCdzAkYFJJyPYy64KG0eDAr5CSmvbnSVwoqrtkIecCSfcVK5w3vvMLHgzUCPP1WJFVjFDQilqVD_hG08RBEcUIGa34BYTz70PW8EUf0bKs8rfzwgWIfHIeLoyCQBqbbGAg=w800-h600-k-no",
      },
      {
        name: "GoGi House",
        address: "103D5A Trần Thái Tông",
        desc: "Nướng Hàn, ngay cụm nhà hàng Trần Thái Tông",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlEJlx5fEMZbeHNZuQUMv6GSRawLo-EPRniupN5lAiMVSbuVYsRw40ZG8PvLD5GsQT44zBa9HIMb1tE5vOUbCwa3jwAVPDVLhsUyLOaGzd8HXi7zX9WMhw41QQmXZEyEys61nAJI3WKO44=w800-h600-k-no",
      },
      {
        name: "MIYAKO Hanoi HidaWagyu A5",
        address: "Lô B1, 118 Nguyễn Khánh Toàn",
        desc: "Wagyu A5 Nhật, phân khúc cao",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlWRfB5kxv33r2FF-CjE0WG8z5GFGC8Fktdmj5_uDlMGEZqCRzmsGFLckkOYBm7yOSN0FwL54mnXx5mhzSOHPh4raRHoj9uLXqUNzEfbIDnX_BRPwA-1wdTWKPFcC7wJ-pqdpPKkCO-vfAQ=w800-h600-k-no",
      },
      {
        name: "Sakura Yakiniku",
        address: "104 D5A Trần Thái Tông",
        desc: "Yakiniku Nhật",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWma8zPxKi-zXruSNbcwhHg6h6unmT97IA4dM24MkBe-3yinmlfRjN2BRqTpx4oEhb7hqYEGig7jlv5IUIzWn7kULYNyBwOGj27wzV_vgeHaEsnjPIzGsAcc4VeV9qXfbZtkt25iPUknGMSQ=w800-h600-k-no",
      },
      {
        name: "WOW! Yakiniku",
        address: "Trần Thái Tông",
        desc: "Yakiniku Nhật",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkJHl7FqHQbWvqYtIly4bVp_lwHLbZoKLJZM8aVwBR2WkUKFtyY5oI5wDJOTuF3EGA1cLDVd6z1NPP5kBN91G1j4nPiz9m5tI_aoK1v22M_YzNqDBya_09zomgriceB4fQTDZqh_tBeMPYi=w800-h600-k-no",
      },
      {
        name: "Yakimono",
        address: "263 Tô Hiệu",
        desc: "Nướng Nhật",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk6SpcegOC-HU4q5YCwNECbjkPqUp-58BnB9XQcSUst9Vc3lEvhmNUxQGKIzGiWwlqyuOQ8dyBZHfQWQJBlB9rcGqq4wCtyc8LzugkGKgRmWhepbuDfA6h3PQIgrMUvMumtteiS=w800-h600-k-no",
      },
      {
        name: "Lẩu & Nướng Ăndeee",
        address: "52 Nguyễn Khang",
        desc: "Lẩu + nướng, hợp ăn no",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkXSjSyumLMm7DiwFx6D93ds8wvynKcYWF5YK7IevZfegrJ8E-w6u1kK1oKjFUUy7bPQyu0YNro6UiqmqqJnopTTKlL4YMRRx3_Pl83U64wtzQqBH4JBwzHv7zr_6qv8YuedxMF10lCsUbH=w800-h600-k-no",
      },
      {
        name: "Bò nướng 1A",
        address: "100 Trung Kính",
        desc: "Bò nướng, mở rất khuya",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmnYa5VBJXx111qsJNkMoAM2GiV6ef_MEDVK_ePiw1Ss_yNcV6Z2PupqDZS5b889SQpXHI-_tBl-DPnnA0Ej2GePFJXZcaMAlc8nrrFaYP9RibufuuRzlZZwLLitKXqqP5Uz933=w800-h600-k-no",
      },
      {
        name: "Meat King BBQ",
        address: "4 Trần Kim Xuyến",
        desc: "BBQ Hàn",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklAcGtEdQqQoTu0Hdjcl1O1HbpqNYBeF4C2AAfVkDjRWxChdyNSC9vc95HgXNyOtgyJbAIQr9u_EIBaWUkrRGuaklpux1zFyPkDsWKOFCL9DNBiGD9Gf_LTc-dRyucYAoon_Kb1UrPLR61=w800-h600-k-no",
      },
      {
        name: "Khang Buffet Lẩu Nướng",
        address: "117 Xuân Thủy",
        desc: "Buffet lẩu nướng bình dân",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkGlBwIDXtbUusB0msN38gGbJao4k74wiFm7q1mA-6gf54dqL-rUUcXCBWys6YdfXOcCjYZAu4zomidOXUgCGcF1ExYtE_RWRLbbcVsV53cX2UysIScTS30BG84SoS3W3iQ4VpmLQ=w800-h600-k-no",
      },
      {
        name: "Nhất Nướng",
        address: "28 Trần Vỹ",
        desc: "BBQ, mở tới khuya",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlLCqG3dLu5E-UutBCnV8ziBaWHwlD9A4chk-pWpzd5tIdDhYg319Hbqdjnc52GXhCEt-BZ2_t2Q-GAJ1XJ_svUklmSKO7o--4YKD7SLY_I5GSzQsIfrC3QBUBse5LD6qgpo6_nb5ljaqws=w800-h600-k-no",
      },
      {
        name: "Dae Han",
        address: "Lô B khu A10, KĐT Nam Trung Yên",
        desc: "Chuyên lòng nướng Hàn, có hút mùi tại bàn",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWljS75-DE1YbaIJhH68Z9RZPr0G5XCroshOzbq5lPJ88GCVfUtTRiPNfd2uXh3ugkNWZbtZ0Nj5meNTFXNTiO2Xm_QREvP52m75-zm1-xdWwhiW55LzZRfSfg2r-6Pfv09Fo8IKkw=w800-h600-k-no",
      },
      {
        name: "Tano Nướng & Các Món Nhậu",
        address: "Ngõ 4 Duy Tân",
        desc: "Nướng + món nhậu, phù hợp ăn uống thoải mái",
      },
      {
        name: "Habit BBQ",
        address: "1A Dịch Vọng Hậu",
        desc: "Lẩu nướng không khói",
      },
      {
        name: "Yakimono",
        address: "A109 D5 Trần Thái Tông",
        desc: "Nướng Nhật, buffet",
      },
      {
        name: "Doncook Corn Grill & BBQ",
        address: "130 Trung Hòa",
        desc: "BBQ Hàn",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl2VkjCWtOmcNhO2F23DQQIFKOgzKrFgY2RmfJ_uf6ZT1V6_AWXD959xZoqjkVoyPR18JyzMQlHhtLua_kuyQC8yXT66AnmTHCg-hFiub-XJLRH1c1I6Gv3eJYkFj8ZydFKFjcBzA=w800-h600-k-no",
      },
      {
        name: "MIYAKO Hanoi HidaWagyu A5",
        address: "Lô B1, 118 Nguyễn Khánh Toàn",
        desc: "Wagyu Nhật cao cấp",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlWRfB5kxv33r2FF-CjE0WG8z5GFGC8Fktdmj5_uDlMGEZqCRzmsGFLckkOYBm7yOSN0FwL54mnXx5mhzSOHPh4raRHoj9uLXqUNzEfbIDnX_BRPwA-1wdTWKPFcC7wJ-pqdpPKkCO-vfAQ=w800-h600-k-no",
      },
      {
        name: "JINRO BBQ",
        address: "9A ngõ 181 Xuân Thủy",
        desc: "BBQ Hàn",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlv8llsgMZltkAuXvLRlh5g288TbClgiHmo_qO1zilwEwy4okg0UCe6OYN9VsZhuWR8JBU9k7fTfzcIS2FqICImSGA8RifeL420NZ_tP2P18oSBjL5Vv1WhTic6hbBNCPCkGyKd=w800-h600-k-no",
      },
      {
        name: "SSamjang - Nướng & Cuốn Chợ Hàn",
        address: "1A Dịch Vọng Hậu",
        desc: "Nướng/cuốn Hàn",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmHTc4JdnzwzRZmhDjVJ0IkWnAkyU0uRbzI7qCHXR34tImGFe_trLeBG5xFhjsThwCWtr8wdEHB5oT5dTmHYdg5xLPjMlgxIhV9LYAy5WxIIUGryEwXNUbferwuyI8qBJd0FonGJfBNUXHn=w800-h600-k-no",
      },
      {
        name: "Trạm Nướng - Trần Thái Tông - Cơ sở 1",
        address: "62 Trần Thái Tông",
        desc: "BBQ",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl2Q9gMarH2Nx8UPg1PXWc8YTB_DV2OJcCdLmREQWD9ZGR9Zva-H2Bzk0__oAM2qFg8mR6bY5-9jd9s86-XOLea0_TQEeVqlvud3GyjkXDDscUfzGpMCJvuoRIFHwBPF0yNrsNZ=w800-h600-k-no",
      },
      {
        name: "Lẩu & Nướng Ăndeee",
        address: "52 Nguyễn Khang",
        desc: "Lẩu + nướng",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkXSjSyumLMm7DiwFx6D93ds8wvynKcYWF5YK7IevZfegrJ8E-w6u1kK1oKjFUUy7bPQyu0YNro6UiqmqqJnopTTKlL4YMRRx3_Pl83U64wtzQqBH4JBwzHv7zr_6qv8YuedxMF10lCsUbH=w800-h600-k-no",
      },
      {
        name: "Nhất Nướng",
        address: "28 Trần Vỹ",
        desc: "Nướng BBQ",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlLCqG3dLu5E-UutBCnV8ziBaWHwlD9A4chk-pWpzd5tIdDhYg319Hbqdjnc52GXhCEt-BZ2_t2Q-GAJ1XJ_svUklmSKO7o--4YKD7SLY_I5GSzQsIfrC3QBUBse5LD6qgpo6_nb5ljaqws=w800-h600-k-no",
      },
      {
        name: "Quán Lẩu Nướng Buffet Huyền Trang",
        address: "143 Quan Hoa",
        desc: "Buffet lẩu nướng",
      },
      {
        name: "SSamjang - Nướng & Cuốn Chợ Hàn",
        address: "1A Dịch Vọng Hậu",
        desc: "Nướng Hàn",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmHTc4JdnzwzRZmhDjVJ0IkWnAkyU0uRbzI7qCHXR34tImGFe_trLeBG5xFhjsThwCWtr8wdEHB5oT5dTmHYdg5xLPjMlgxIhV9LYAy5WxIIUGryEwXNUbferwuyI8qBJd0FonGJfBNUXHn=w800-h600-k-no",
      },
      {
        name: "Sakura Yakiniku",
        address: "104 D5A Trần Thái Tông",
        desc: "Yakiniku Nhật",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWma8zPxKi-zXruSNbcwhHg6h6unmT97IA4dM24MkBe-3yinmlfRjN2BRqTpx4oEhb7hqYEGig7jlv5IUIzWn7kULYNyBwOGj27wzV_vgeHaEsnjPIzGsAcc4VeV9qXfbZtkt25iPUknGMSQ=w800-h600-k-no",
      },
    ],
  },
  mixed: {
    id: "mixed",
    emoji: "🍽️",
    label: "Đồ Tổng Hợp",
    items: [
      {
        name: "Tohoku Restaurant",
        address: "75 Trần Thái Tông",
        desc: "🇯🇵 Nhật: sushi, sashimi, món nóng, cơm",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnpTFncbwwFWHQPQEjmLSvGsYzxF_zYwMWBxsLXZ05sU3hoO30bwm6k8EDpbM31BYq7hZtK1qXeBv17SEz1LK8V72TPOCy0Rm42gAjue0bKb3V0B7NKT1dJKUBJMgRgWBLh5LUhbKeGf_pF=w800-h600-k-no",
      },
      {
        name: "MOO BEEF STEAK NGUYỄN KHÁNH TOÀN",
        address: "2F Nguyễn Khánh Toàn",
        desc: "🥩 Steak bò, món Âu",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkZttNF15gQDpusI_FoFlQpBXFyjbvjRRcyMoe91P2kGwK4-4ScPc54sLN5lKEoxpNrj2d86B5Wv4UgPfVLU3zMUXtJXO6uQk1_h69UvXFXgEW0eWtqWolcxEljohSeyP7i5gz49Zqv0xc=w800-h600-k-no",
      },
      {
        name: "Pizza Amalfi",
        address: "Tầng 1 tháp A, Skypark, 3 Tôn Thất Thuyết",
        desc: "🇮🇹 Pizza, pasta, món Ý",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmpGqTh1Sdbun1wBmaAvv9NxnqiGr3MX2KWtEl7xvd8gxHLFnakwji24wK-OcjmFyStDi86yPwPnq-TeZn9BXGdENr9XljD6Qh024oZaqYVFWLYv4oLzq1MvjZctdji7luCOCzDLA=w800-h600-k-no",
      },
      {
        name: "Kampong Chicken House - Cơm gà Hải Nam",
        address: "105 D5C Trần Thái Tông",
        desc: "🇸🇬 Cơm gà Hải Nam, gà quay, xá xíu",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmMxkam9McNiNax6v-6xWjxCNchmQoXsv_RXhf06ProOoTb39yfjUjR6_lFxpJoGN-9_UQbB5Dh41mb2JUZAzHS8CC4RYMFToPVx3MFKykRhsc16rngEloAXkXckbnu-1d2o7rE=w800-h600-k-no",
      },
      {
        name: "Khrua Baan Thai",
        address: "35 Khúc Thừa Dụ",
        desc: "🇹🇭 Thái: tom yum, pad Thai, cà ri",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmwxysyeXxQkZvOAZ3wPuXRfS7asZjeW9VSRSrdjT73MW-j-wCTutM-8tUZz-uW4I6ya2ukLh7bZ-er7aUcDgSDsirGhFooV6SoMu7SVr3UO2ZhEIhuFZ-dytyKYfDSU-hHPPyWdkTYNTav=w800-h600-k-no",
      },
      {
        name: "Spices Taste of India",
        address: "17T5 Hoàng Đạo Thúy",
        desc: "🇮🇳 Ấn: curry, naan, chicken tikka",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl-72Qx9uJLm8KCm3-w1cWQCk7CltGO3oxhnlxZYopwBMpAJMAd2Av-hTq4KbttiXv3jVtYqKfPJkEF2WTb97N70_6Gnq0vD1pbAgduOVtxUZ-yHqK2QyotJEf_T-c2rvrZ7nQ=w800-h600-k-no",
      },
      {
        name: "Fu Rong Hua Cantonese Restaurant",
        address: "D5A Trần Thái Tông",
        desc: "🇭🇰 Quảng Đông: dimsum, vịt quay, BBQ",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkMqFAkGmc-j0dYKZcobOx-qcsOwGXkZoxNJDAQpfZVXQCPhx3ELiVFtOXcmSEYiBnYHIhTifP0bie71ui21lGbzNzBQg6vCiAdDwTprvDqXBDGpjnJg3KPBhlVylwEl9VSILeZ4OCCvl31=w800-h600-k-no",
      },
      {
        name: "EMM's French Bistro",
        address: "28 Đỗ Quang",
        desc: "🇫🇷 Pháp/Âu: steak, pasta, pizza, wine",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkj3S9Hx1l5pMGXyoW1y5JcssualQ319PHRzQ3SUUDoO-c9y7uVPIZinhBUQ5CB2fTZmoizBzl6qXdKGoXJHuelhfWWYLMmW6Y81liYbbRlAzJqR77IZRie2zo5M6vUgG2nXfs=w800-h600-k-no",
      },
      {
        name: "Stirling Steaks",
        address: "48 Trung Yên 6",
        desc: "🥩 Steakhouse",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkuVGvVGgDZQj8uCfjy_64iz-uayq3NrZWvjayTk6ZiV6ySxgG861uIIf9111ppBJMy2eGadNL-XVv5WSfQIYG0BplFJ2ZeWWhk1X6iGMwkUHRJ4Lk3kIvsevOJIHWOQE7YzsaJ1A=w800-h600-k-no",
      },
      {
        name: "Dizenki - Nhà hàng Chay & Thiền trà",
        address: "Ngõ 75 Trần Thái Tông",
        desc: "🌱 Đồ chay, thiền trà",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlmH3Fiql3w9fL9Cq1cPWTB8wea-xBUPtcMsgVvNhU9Ib_tYxt6iJLpyWe1LALJGUCJKzlyS6gzSlEtDAZv0VWAl3kYAcul1t9PhxR0wZ_wbUCyANNYqMdjAJCAaL-SGRQK4mw=w800-h600-k-no",
      },
      {
        name: "Long Wang - Lẩu Hấp Thủy Nhiệt Hồng Kông",
        address: "299 Cầu Giấy",
        desc: "🇭🇰 Lẩu hấp thủy nhiệt kiểu Hong Kong",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmQc-s5HEipygVOgEYANI5NOBtZKCHP4h646D1H8VrEyDWvQLipBomLFgHeyk0nWS9lHzmy1eb1m7nqgEcnKrq0jUxal0I7i640bABdFbTtwF-JK7tow8oJn2VtFstayUOlCTC8=w800-h600-k-no",
      },
      {
        name: "Tian Long",
        address: "Trần Thái Tông",
        desc: "🥘 Lẩu, món Á",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk0ruQ4KjFqCeHyx8W-btPF91Ss1h5B2oFpHmIw5B3qnw6wqDy2pCAWDyXce_AI9Re7o9T0wFcLM658cBl-X1CwWzK_HlCRWlo4YZfQuD4LhztnJwH4ch5tuOJ29hm_LMDkzPm_0URjIwKW=w800-h600-k-no",
      },
      {
        name: "Mala Trần Thái Tông",
        address: "103D5 Trần Thái Tông",
        desc: "🌶️ Lẩu Mala Đài Loan/Tứ Xuyên",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmWERAZnRc3vbczCZB5dCz4KAwJuDpuPbgdZLvPC_zo9SmvWHeEkaGJZMUH7YdQoW_zOJY5-X93Ne9Z0921c3YL6Z-qgpXBmWDnpE_FmDMpzJO0clQ8_cKmW13XE9dA5uVymKwPnNNnIDLn=w800-h600-k-no",
      },
      {
        name: "Shang Chi Trung Hòa - Lẩu Đài Loan Băng Chuyền",
        address: "84 Trung Hòa",
        desc: "🇹🇼 Lẩu Đài Loan băng chuyền",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkp80vdCg4Z-2mKKG-Vh50C6qA0OWjFpZbEx3XVaoJZ2h9Nm7XVNCygpH36VtnDnc0LBZOZtLTTvYVqB-TKSPqW-Z50KCS9cJQitX4UZ6FD-fHvTm2u1iDdgc9nwt9lhebFOAJh=w800-h600-k-no",
      },
      {
        name: "Kichi-Kichi IPH Xuân Thủy",
        address: "IPH, 241 Xuân Thủy",
        desc: "🍲 Lẩu băng chuyền",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm8-DdcHYtszs-7bTBoraIMPz2OxkKXzJ-iynFPwrvLqc-0akT-H07b5VowzBvd2WyOCmS_e1vymNoUPGNR246hwtDx_e0cMHrfksAQY4opQhZO6FTEKH9xIxodOPhGHpEvuRW2cA=w800-h600-k-no",
      },
      {
        name: "Bếp Thái Koh Yam",
        address: "26 Vũ Phạm Hàm",
        desc: "🇹🇭 Thái: tom yum, pad Thai, lẩu Thái",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnMGaLpoMkkAvLq9G2jX33METZXINHbbiuHwXtyQ6Zeypqfs-v0E6Dy75od8x7JuTHV2qzU0vYLrt_lOHIocUE9_BOq7I1-veJU62hwUextXV3UN0_GweERaavSzE258RyO0X5c=w800-h600-k-no",
      },
      {
        name: "Tonkotsu Ramen",
        address: "175 Trần Quốc Vượng",
        desc: "🍜 Ramen Nhật",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk4o4__QQlRX2dC8hfffoeOXMcjx_6CfWYNaYcwkytJ3wmpdjDzNeGwcGbt8thoRACx5k4WyalhyAB3WyId2lLZqdtPhEP2LZ_ttr84_KFrKBnyG0ct5rMN59pSHsgC7zr31jk=w800-h600-k-no",
      },
      {
        name: "Yeol Kwang Restaurant",
        address: "72 Trương Công Giai",
        desc: "🇰🇷 Hàn: gà, món cay, món ăn kèm",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkxtmEqTHNGrST2DvQWZZY4TJ23ltR3ZP0E_R-AZwtSX9CIwJAmIfRbFuPtpFhe58Xd9rqzM7l3IzAqABnBSgWE3ItL-gcENucVpN_Ifdkut1hhxi9Cjd4Sc2EThvdO3zlljmtwBQ=w800-h600-k-no",
      },
      {
        name: "GangnamBox The Loop IPH Hanoi",
        address: "IPH, 241 Xuân Thủy",
        desc: "🇰🇷 Korean food/BBQ",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnGEowaNe9k3MKvYG7SczBI8fwWQQItyw3BGnb8b2FY9dtLxAIOJBQyYC5cIpxw8Ekf_G-rs2z3P2RYt35A0AkLU94zqojb4xPITB9-NnhpsFcT0Ca8jT_8bZHAKMg3NrVEbgY=w800-h600-k-no",
      },
      {
        name: "Burger Lab",
        address: "47 Cầu Giấy",
        desc: "🍔 Burger, khoai, đồ ăn nhanh kiểu Mỹ",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlQjYLACqaNLghYR5ywIImG2q-SFswI-ZsLrijHl4WC5Sgf7asymyeMHzARa7SNEXsOq0U_TpZioUUBzkImdCAc9Zs_Xvo3jf3JuOKGs7CeFblhm5OetJcxUmQa3Q9gR0Qi2V6aQiWR1tU=w800-h600-k-no",
      },
      {
        name: "Bếp Hạnh",
        address: "KĐT Nam Trung Yên",
        desc: "🇻🇳 Cơm Việt, món gia đình",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkmgzHRMTFNwlJUtBN1QOLsaY84YIeYO5EvvBbW8vfX44nluZ_foL-WAoLoaaFGBUGEQ_NMlUVHSbBTrWbgS2mT1Kf40ibb4SuaITZSheLDgktT1sulRpfLlDkXiEl4zw-dJd02JM3Ne6E3=w800-h600-k-no",
      },
      {
        name: "Kiều Hoa Quán",
        address: "291 Tô Hiệu",
        desc: "🇨🇳 Món Trung Hoa",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnLwLLqkD8rDAtBwASUp4Mhmw8hgkzCOZfAI6FL_EfBVg0PjRhg5Z5kcRBFX800cRAyUBSLpnWjWD39ARb_s58HBYAoNjQRrRHIMm8GbIAk8dmMOzM8gYMHYesgEShepBYeo83Y=w800-h600-k-no",
      },
      {
        name: "Phuoc Hanh Vegan Buffet Lẩu Chay",
        address: "Ngõ 10 Nguyễn Văn Huyên",
        desc: "🌱 Buffet chay + lẩu chay",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnQ0PusMKoWRxCFHy1vxrCwCmMS8zIzvwOpiHzscFj41CByDEXFBKS0rH9fIwUU6bUeurn06qxbJWTSrgsua1NYugWLSTu4oVRL52uiP9d8W0fbwoTmSQzlvK64e_E4mp9hODoVng=w800-h600-k-no",
      },
      {
        name: "SSamjang - Nướng & Cuốn Chợ Hàn",
        address: "1A Dịch Vọng Hậu",
        desc: "🇰🇷 Cuốn + món Hàn + nướng",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmHTc4JdnzwzRZmhDjVJ0IkWnAkyU0uRbzI7qCHXR34tImGFe_trLeBG5xFhjsThwCWtr8wdEHB5oT5dTmHYdg5xLPjMlgxIhV9LYAy5WxIIUGryEwXNUbferwuyI8qBJd0FonGJfBNUXHn=w800-h600-k-no",
      },
      {
        name: "GoGi House",
        address: "103D5A Trần Thái Tông",
        desc: "🇰🇷 BBQ Hàn Quốc",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlEJlx5fEMZbeHNZuQUMv6GSRawLo-EPRniupN5lAiMVSbuVYsRw40ZG8PvLD5GsQT44zBa9HIMb1tE5vOUbCwa3jwAVPDVLhsUyLOaGzd8HXi7zX9WMhw41QQmXZEyEys61nAJI3WKO44=w800-h600-k-no",
      },
      {
        name: "MIYAKO Hanoi HidaWagyu A5",
        address: "Lô B1, 118 Nguyễn Khánh Toàn",
        desc: "🇯🇵 Wagyu A5, yakiniku cao cấp",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlWRfB5kxv33r2FF-CjE0WG8z5GFGC8Fktdmj5_uDlMGEZqCRzmsGFLckkOYBm7yOSN0FwL54mnXx5mhzSOHPh4raRHoj9uLXqUNzEfbIDnX_BRPwA-1wdTWKPFcC7wJ-pqdpPKkCO-vfAQ=w800-h600-k-no",
      },
      {
        name: "Fu Rong Hua - Cantonese Kitchens",
        address: "17T9 Nguyễn Thị Thập",
        desc: "🥟 Dimsum, vịt quay, món Quảng Đông",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlO1BaOozzT7lX17IWISOYnuaLxHO__BIvYD_MJJAt6t8R0yzxPgnlSxTCGQ7yaod4saIER7Xxk3UnJsds22HqUJPz0PX-RJGaXKuqZh1XI-0W3peH7ojo0rsd9CO2xspeTcUQRwqEDH5c=w800-h600-k-no",
      },
      {
        name: "Long Wang - Lẩu Hấp Thủy Nhiệt Hồng Kông",
        address: "17T4 Hoàng Đạo Thúy",
        desc: "🥘 Lẩu hấp Hong Kong",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn7AEtWdxvMOm6gk-nGsx2t2P_XJplaRzi4UYcSPrZSDQ27OvzRzIu1znDXIksKbqLo75tIsqnXXU3AjLi7pa-74KemUmRDchlG4ugLbwhZ9liNCqa-ZCWIUfEUr95chkU41WfHdzSHS8TI=w800-h600-k-no",
      },
      {
        name: "MOO BEEF STEAK NGUYỄN THỊ ĐỊNH",
        address: "B40 Nguyễn Thị Định",
        desc: "🥩 Steak, Âu hiện đại",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnqHndxGZHkgXrmO7DHjzD2NvvMJZls1o-1i8vyCvEM2gSEMR2G07g0h3_Z2MNvuZxVK14q_6c6p3yBqJrK-B3pYGYHl4civnHpF6LW8QQ0580PWrcYyTCJwz2HRHC1hPL5HH7T=w800-h600-k-no",
      },
      {
        name: "Haidilao Vincom Trần Duy Hưng",
        address: "Vincom Trần Duy Hưng",
        desc: "🍲 Lẩu Haidilao, nhiều vị nước dùng",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmYoCCqe-1gzkhAZYERHCvZMG1ltg-KkbC1TWWfw6Tq2jgS2tS7BA4CLgrAo002ATjIFb02Bgo3ZO65ry9GrFzJWjq_0DOF9WZcktSLO8u0mG04FUNy7BfDym43YDfq5X3atMRaZh6YsdDP=w800-h600-k-no",
      },
      {
        name: "Gruzia Restaurant - Wine House",
        address: "150 Nguyễn Chánh",
        desc: "Gruzia + wine house, khá khác biệt so với các quán Nhật/Hàn quanh Cầu Giấy. Cảm giác như đi ăn một nơi mới.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnu_JyF9KoWHII5NZGovm134d5xcnENo5eheQFKsWiz77CCTrLiIvoi2TVepQuINftiuHqsa99DcnUg19D8kjU-Chdm5Uz1N-A0thdu86eulBnF4D8jFc0ZHfurnJp-ZYMdjN_O=w800-h600-k-no",
      },
      {
        name: "Saju Sushi & BBQ Restaurant",
        address: "Somerset Hòa Bình, 106 Hoàng Quốc Việt",
        desc: "Nhật, sushi + BBQ, nằm trong khu căn hộ/khách sạn nên không gian khá lịch sự.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnpP9k-ueC4l3bbbEdYYNwO-BakqGevQDhJ0jsiWfVQG6LerPPDAEoQYk7CXysSPXbTnfPPeMYbOFp_D5Te7VjbF5_XkA3vcQiU4IGWlicRM-leUTJVENY3nW0KOzzZgwcXcm7S6J6zB14=w800-h600-k-no",
      },
      {
        name: "Steak Box & Bistro",
        address: "3 Trần Quý Kiên",
        desc: "Steak/bistro quy mô vừa phải, hợp date 2 người hơn kiểu nhà hàng đông khách.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm9KkDmiVUS9uodq_C8qF_kfxz0YBx7_Kr_kVHRhdrB4upTnISiSrVWpUHUjez90kMZ9TpczEOwJ7WTJS0MSgQb5KkBgjSlcPZoTaFtfL2ZbwdzjKwd4aB0VREJMHRIuaupQaNkYw=w800-h600-k-no",
      },
      {
        name: "Pizza 4P's @Indochina Plaza",
        address: "241 Xuân Thủy",
        desc: "Pizza 4P's, không gian đẹp, dễ ăn và ít áp lực cho buổi hẹn đầu. Rating 4.9 với hơn 10k review.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWklgfQMPRbGpVWmkQyFPPGXHJSyx5qGnNes5YFwDhmzcvVId_-KdOL5cblXQOrj77--U_gDUJc5jVVfWiOrM0UfOSBtPfGiO91YdIBrZbQUDJ0mJMdp7QKBVePVJeCsFPJs-0hT=w800-h600-k-no",
      },
      {
        name: "Doncook Corn Grill & BBQ",
        address: "130 Trung Hòa",
        desc: "BBQ Hàn, không gian hiện đại, phù hợp nếu muốn ăn ngon nhưng không cần fine dining.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl2VkjCWtOmcNhO2F23DQQIFKOgzKrFgY2RmfJ_uf6ZT1V6_AWXD959xZoqjkVoyPR18JyzMQlHhtLua_kuyQC8yXT66AnmTHCg-hFiub-XJLRH1c1I6Gv3eJYkFj8ZydFKFjcBzA=w800-h600-k-no",
      },
      {
        name: "Maison Sen Buffet",
        address: "90 Trần Thái Tông",
        desc: "Buffet kiểu nhà hàng, không gian lớn và khá sang, phù hợp nếu cô ấy thích nhiều lựa chọn món.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkTTfTzovNdjORsbd7-tNqkaBGkS94LJcRm8IQRn7UmyI9QBLEw0Bt4DplG2afhhfduBW180Dms6D5ZLx34FXch_rbJAQ4zah5poAnUNUfZKM2VJXk8LHEkVK66Ry_g7B1yiPkUgg=w800-h600-k-no",
      },
      {
        name: "Ikka Wagyu Yakiniku",
        address: "Lô B1, 118 Nguyễn Khánh Toàn",
        desc: "Wagyu/yakiniku phân khúc cao; Tripadvisor xếp trong nhóm nhà hàng romantic của Cầu Giấy.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlWRfB5kxv33r2FF-CjE0WG8z5GFGC8Fktdmj5_uDlMGEZqCRzmsGFLckkOYBm7yOSN0FwL54mnXx5mhzSOHPh4raRHoj9uLXqUNzEfbIDnX_BRPwA-1wdTWKPFcC7wJ-pqdpPKkCO-vfAQ=w800-h600-k-no",
      },
    ],
  },
  drinks: {
    id: "drinks",
    emoji: "☕",
    label: "Nước",
    items: [
      {
        name: "Second Home Cafe",
        address: "Ngõ 44/37 Trần Thái Tông",
        desc: "Café nhỏ, yên, tiện đi bộ/đi xe rất gần",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkv_T_QWkioHNDRXFgJlRipC7gI-t6pMPQfty65sjKnQB1ve1uPRERo_-w1drCPsf-DKA16DclRBl38AxLIKTAa9yx7xJbhTudvi7rMyjof_Oii2YGsUsRmjCysgYL7e_xybkbuT-vrpXo=w800-h600-k-no",
      },
      {
        name: "JIDAI by Cerenote Coffee",
        address: "20 ngõ 165 Cầu Giấy",
        desc: "Café mở rất muộn, hợp kéo dài buổi tối",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlC4DIZZiHawANEmzAKqdknOaa8AXMWF2TVlsDwfBDGLGodAPH5UiCg87e0VcSatVa9lMSCShMT4hUA4CvQQIOqDvgoSCk4SlRlprrI0iKa-lc9dYdbDgyLxepxQZ9LTbJbi_0RNrI9pA8k=w800-h600-k-no",
      },
      {
        name: "Tiny Post Cafe",
        address: "251 Nguyễn Khang",
        desc: "Quán nhỏ, mở tới 0h, hợp ngồi nói chuyện",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkqy86chpepWgbGWwb9Ec-h5CPwQ5wnf0KF4UEYJS3lMcZIR31TG6wXcpNEhiSqbYFgUZm03VQ8RkdJXtSUVm-froT5Je5z5wbAs-q5gmrdcWeRxZkwhf-AIaya_bA9nbtztpTE=w800-h600-k-no",
      },
      {
        name: "Cộng Cà Phê",
        address: "11 Nguyễn Văn Huyên",
        desc: "Café phong cách hoài niệm, mở tới 23:30",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnmaHclxCT1E0ldysaRE7aBXj25ovY9M_xSEfMeniDKYbosfW-gNKSpW9AAMZicwcRHo95yQWIwIY1J1W6hjOXbTfqT-h_1kubIx639dpiwGH4YIqf5kWnYNRstc-TXJ52pK7Se=w800-h600-k-no",
      },
      {
        name: "Sagi Coffee",
        address: "347 Nguyễn Khang",
        desc: "Café khá rộng, mở tới 23h",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnDufks1h3Q8uok4VW7oQAbzH7fs_3dT0vURwYOdToDpWrehbeqp9lBluh2IKMHSv4KT9ykPZL0IpTGbQMvqNf7EA5jeKGURO3CHQvv36ba2EDQISNHp8hP7AnSsajDOMvl6csa=w800-h600-k-no",
      },
      {
        name: "Macada Coffee & Bingsu",
        address: "305 Nguyễn Khang",
        desc: "Có coffee + bingsu, rất hợp sau BBQ",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkWm8fFwIIR4aZPGuy-g2lFTf2MfHlfg3YH2mlcQMQsO3g9h9HC2Pf__mHWMjxvnoA07zZaVYCsNOkNSYV6VX9cCVApBOqj65gwxR049I8p_9GaTh2FTr1iJfJ3gtKZSpbgd5w3=w800-h600-k-no",
      },
      {
        name: "Timeline Coffee",
        address: "Ngõ 260 Cầu Giấy",
        desc: "Café dễ ngồi lâu",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnc2C_qIflsNS_aW7P-A-8XDs9GRZW1XQeYGjF9Jvy-1_xLx2KXgIaYity_fluIi2k7sQ4Qq3EPz5biAZhlCj4-0jVB_XjcQF1rRqP7DDuhELEemPk41245moe_sHWfa2eXtysZgg=w800-h600-k-no",
      },
      {
        name: "Hilltop Coffee",
        address: "11 Quan Hoa",
        desc: "Café nhỏ, yên, hợp nói chuyện riêng",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkfAQzystQHdDSDw7ta5fXqgqNKxv9AvEYJ3ZNwJnFLVv5D30f9sjZpDVDaRadWtcqGgTQLP9kWEKpPEBDnEI3d2KHcXXIbd2L-LuDhZaT1MJuhiHs2unTLh4sWgXnvfBe3ULi1Hp8GRu3R=w800-h600-k-no",
      },
      {
        name: "Claudi Coffee Rooftop",
        address: "110 Cầu Giấy",
        desc: "Rooftop, hợp chuyển sang ngồi chill",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlL-7hh2pU7GyTVmQK3ke92nwocZt0Ljz6V7AFAmAyZ5VWpyYRPA0XgEvcftbIbi9Izi5AqH2rjtftOEhtEXVx_1XdHMuBeOm9Yn8rKGylCdwNj6OUQQIV6LYlWg_D1drGXH0gGcM6woMOh=w800-h600-k-no",
      },
      {
        name: "Chill 'n Feel Coffee",
        address: "50 Trương Công Giai",
        desc: "Café hiện đại, mở tới 23h",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnH3vs23t752GwAayK_kYg02A7WTG5YbTCxnYLwq02NFZaKx0NWvDEUtt6tXOv3EIlvYL2DihteVjkDgZaQebMsWG1VT1xZspBPOArYZgvdLmYjUTVrE76-W0APyq3wZPxIlO0aVw=w800-h600-k-no",
      },
      {
        name: "New Style Coffee",
        address: "161 Tô Hiệu",
        desc: "Gần như cùng tuyến đường",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk4tst2sMpVCgE4Y3SWskUHQJeIzC5s0ETz9J-YNDfTZV3koPTD0ToXvNcbXh1ZhAIlKJoOgXGMQP1ZZIuIJGAvHqqQ5Fi9pTEBJQxGKZ6_qH6CjKBUqqf8SlM4alUapo72bFZFi5eIfqln=w800-h600-k-no",
      },
      {
        name: "LAIKA Cafe - Xuân Thủy",
        address: "117 Xuân Thủy",
        desc: "Rất tiện nếu muốn không chạy xa",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWl5UMuiDke3PKLhrgMHHraF1tNqDqOwsUDp5j4VMAWj33X-XEOdAPgHqkm4IlK-chIcbhijIQ1JIkW9wjtthnHkkowNArtP46KIQL0F15dPNbJpLY_Xrt9xbHcK662fOU643xnYoQ=w800-h600-k-no",
      },
      {
        name: "Zippycafe Dịch Vọng",
        address: "2 Dịch Vọng",
        desc: "Café gần khu Dịch Vọng",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1Qxf9diNvWbk0aqLfmRsEeZvUeiRM87T1hwbnCJVD-NqTSgQ15X76IZCOXc5qdhkur8S85NPnWefHvkLLizcZEgToqiJTa8sWTcV-4E71G4TwiMhWOZUd169sWnEpj61S9cdFGSZ59Os=w800-h600-k-no",
      },
      {
        name: "Le Doux Coffee - Cầu Giấy",
        address: "Ngõ 16 Nguyễn Văn Huyên",
        desc: "Quán café đẹp, dễ chuyển tuyến",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWllc6hgs4yg5O2e622r8FtSS3xeFyQFBe3PFOdyMXTQ98jn9DyaBJ9RSyW5DuBYi49xKuTJq1frEnCS3mGobudI-EBtQlEXjMInKE_O1GahUKoxDmcVjUjBrkGMfkqiVikPgR7P=w800-h600-k-no",
      },
      {
        name: "Vitamin Pub - Rooftop Pub Chill",
        address: "22 Nguyễn Khang",
        desc: "Muốn chuyển từ ăn sang cocktail/chill",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlIsR4kTgP0cXOBSx2h5p9WKC0AfqIbfl_0gRS2lZaXe5w3yTKhG2qX-fYPVrc6byGHZcbgXmePr_OzyTO4QmeKZsilowwraW9ph1yZZHb3f2MEwA8zqrQkyUctUBeVIgWAOevtIHJTHMAM=w800-h600-k-no",
      },
      {
        name: "Ka Coffee",
        address: "Ngõ 112 Hoàng Quốc Việt",
        desc: "Café được đánh giá cao",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnP-AfA4Dg16YMhZHJNsSKF70Xp_z6LWm6zyaWEH3FlPlNwBDX5baIghEVHH5HMt15LzCc67kFyqWmDNyzar9ZYOfZDD7qNnzwi_iKJFNNb_-ncBabTTOxdx6KAcA13k1df2mI5pA=w800-h600-k-no",
      },
      {
        name: "The Better (Bingsu & Coffee)",
        address: "49 Trần Quốc Hoàn",
        desc: "Bingsu + coffee, khá hợp sau BBQ",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmTKPHBbEPSGjg4Gp2sOvbjLG3w5vmL5qNmWgemyhtBc6qAtiF5QavdG7pG5mZmflXkp7O1mDMB-caqVh0gpqk1u2Wdx6HQSEPQ1N-bvwIWp4WaIIJWQFy2yQqN0gC4TnszdZ2IpW0PLHE=w800-h600-k-no",
      },
      {
        name: "Thu Hường Cake",
        address: "11 Dịch Vọng",
        desc: "Chuyển sang bánh/ngọt + đồ uống",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkokapnuwTZ-fXif2jrAdQlIFUYgw3OuwBgR_erFwLuYvkA548pe8jWFa-JCQDdgHFr1Zgum3MetAMMiy2SuRsnU47J08rBFgxvD_FVUb1ZalMfq7jl1_4ia81k3R4PfkCOHqRbgc-5BzI=w800-h600-k-no",
      },
      {
        name: "Athena Coffee",
        address: "57 Trung Hòa",
        desc: "Café/dessert, ngồi nhẹ nhàng",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmKVM6nyRRvZLGeb8GYwxmKXdUNbXN8KufL-pAjgN69ba30q36ykxiWo1UIUiJGNOHHdTSIIV3cAOOCp9aOf-wY70khbg5qIETXHtdetJtbx4OImBMF8QhfJJJRuBX5Zhi5DTd_=w800-h600-k-no",
      },
      {
        name: "Nhà Không Cửa Coffee",
        address: "Nguyễn Khang",
        desc: "Café kiểu riêng tư",
      },
      {
        name: "M Coffee Bar Rooftop",
        address: "148 Hoàng Quốc Việt",
        desc: "Rooftop, ngồi lâu",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnu6Ngq4lPOJthuO3_emJl_3Unpq_XSHh0VtBcgW0G4IC-9ORhV0E6q75sni4CDE3mQzQdounpNIkYRCqDRtVXCg_CRpI7Bla_pBiWrsOxoDXN3FZRGpnt6ffKiBUJNmzQKMS7m=w800-h600-k-no",
      },
      {
        name: "The Coffee House",
        address: "302 Cầu Giấy",
        desc: "Café phổ biến, dễ ngồi",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmGu9vYQN4xW8MqrnYYjx0kh5Ree8uZ-OOK9aNnhC_RmsoGwfoFttKJhs57tkxB1uZxpyZvhnZVqXPsGQnXrnf72w5vjLm-4YV0jcSocPzwJsZZbAV6uvTnM5WyhDVsxcWG23DJ7A=w800-h600-k-no",
      },
      {
        name: "Cộng Cà Phê Trung Hòa",
        address: "Trung Hòa",
        desc: "Café Việt, ngồi lâu",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlWioTGnwl9olb5f-fcI4qbAWhc0gft8LDGfSOnyhiRXQWFACmYaVXSQP-5MbqzYudc5pHV83ycmzbZZSpPK198Esm9CjA69jly9aAF4s9EM829FnJQBhkBuymANOi-1Yfo192F6g=w800-h600-k-no",
      },
      {
        name: "Bọt Cafe",
        address: "Ngõ 68 Cầu Giấy",
        desc: "Café nhỏ, dễ nói chuyện",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWk9zCQv4qBgCTCRNw4VcdBNCFF94pYDWkjAPGLW0B5rj1d6w_pQEfiaW1mQhunoPaQNq55f3l3W4GDM3bkaw2Zwz7dafaZ-zg4GNXOff3tAko9-AiRdMIYRR_bnYhxQgYYTy_PQ=w800-h600-k-no",
      },
      {
        name: "YOYE Rooftop",
        address: "148 Hoàng Quốc Việt",
        desc: "Rooftop, không gian thoáng",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm916ZXFYz_auwC9iMf9Gbv4p4OIcecuhmg5qaESJTpC7e--hYDmDVHzCpIoI25NFRWe-9hJgslBEseXcl5AO8QxE8nnqzVJd_aIOAs8L56b-cNBr0-K79112joBm9oW8wwpdDBsw=w800-h600-k-no",
      },
      {
        name: "Vincom Center Trần Duy Hưng",
        address: "Trần Duy Hưng",
        desc: "Tiện đi dạo TTTM",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkVwjTTYF26OLVr3XfyPUW1eU--SpVaJlJwXRtjzkCw-vf1vaKRLzvlTjozLcDMaoaO26sl82U19jQlNWboOPBwsH_Izp21GaTuO8tW5khciL-nLNn_ckfdOOuAaUOt9j6UL4v0eI8y54JU=w800-h600-k-no",
      },
      {
        name: "monochrome (hanoi)",
        address: "142 Trung Hòa",
        desc: "Cocktail bar, mở tới 02:00. Kiểu nên đi sau bữa tối hơn là ăn chính.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWm1MC8Vol2w7Af5gvrtj5A4hEV2mB1-XlB-pYMH6H1Lot-4guZ5pvQaf2oY5kPYpj48uSIZxvkeRbdphoSYUBs3TlTiJ-mrl0FVZyyVPb6BEdywH4CBLZx0lvqQnxAbHIqj2OE6=w800-h600-k-no",
      },
      {
        name: "Lofi Rooftop Pub",
        address: "96 Nguyễn Đình Hoàn",
        desc: "Rooftop/wine bar, mở tới khoảng 1:30–2:00. Hợp làm điểm kết thúc buổi date.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmZD_zBw4T5Zn8T1WazwXzn8rngHP3AjcFfpttRYQb3OO_nRf6z0bzsgdwpmlN1MT2rRFFpqwxFT--mNgwOAZ7Cm4Xu4KT1QMjQQpNViQC09-eTyARZkn-JNvRILLVbgvHX8O5qnEoRTOw=w800-h600-k-no",
      },
      {
        name: "The Laputa - Sky Pub & Chill",
        address: "357 Nguyễn Khang",
        desc: "Sky pub/cocktail, mở tới 02:00. Có thể ăn quanh Nguyễn Khang rồi lên đây uống.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnrXyxuA7MPZdka5xlud2aOeD9UWL7oAf2fAA4BFz5tisG5kIo0_zKRrf05nvAcNRj0H2pvLO7VBLYElYe_6Fd0H9F3t3PHlaGFkcGR3iUfUOycJRGW4rZndjCCgKoEVk_OFIEs0g=w800-h600-k-no",
      },
      {
        name: "Q Bar",
        address: "Tầng 62 Keangnam Landmark 72, Phạm Hùng",
        desc: "Cocktail bar trên tầng cao Keangnam, đúng kiểu sang chảnh và có view.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmshMl4-mysy7Q2svgcQ8jVgfFlKe2aThknxRZ240YaBXeqF-H-UfvQ-Ev-ggxOKeEy1MQvOfgL0de31hu7VZ2j6YlrgF7v-jpkhs_n38njSIiwUbeK2oikcgTl_Jd4RjeV3Udg2pRj02nF=w800-h600-k-no",
      },
      {
        name: "nüp[space]",
        address: "40 ngõ 68 Cầu Giấy",
        desc: "Lounge bar/café, thiết kế thiên về không gian trải nghiệm hơn café bình thường.",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkt8YDml0Cz73o0yp9bnBFgxd1Zt_gQk97jHrxfcq5bQDQrTHEx9HweaB6YnqTajxJhAF-JiPbW4Io_vztzOXcy2z7Vc7extOWCATcS0-o4UkMWSTnbcVtWy1WTC2S6mrzfVUoUew=w800-h600-k-no",
      },
    ],
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = COMBO_DATA;
}
