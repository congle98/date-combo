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
        desc: "Nhật, món đa dạng",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnpTFncbwwFWHQPQEjmLSvGsYzxF_zYwMWBxsLXZ05sU3hoO30bwm6k8EDpbM31BYq7hZtK1qXeBv17SEz1LK8V72TPOCy0Rm42gAjue0bKb3V0B7NKT1dJKUBJMgRgWBLh5LUhbKeGf_pF=w800-h600-k-no",
      },
      {
        name: "Pizza Amalfi",
        address: "Tầng 1 tháp A, Skypark, 3 Tôn Thất Thuyết",
        desc: "Pizza/Ý, dễ ăn cho date",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmpGqTh1Sdbun1wBmaAvv9NxnqiGr3MX2KWtEl7xvd8gxHLFnakwji24wK-OcjmFyStDi86yPwPnq-TeZn9BXGdENr9XljD6Qh024oZaqYVFWLYv4oLzq1MvjZctdji7luCOCzDLA=w800-h600-k-no",
      },
      {
        name: "Fu Rong Hua Cantonese Restaurant",
        address: "D5A Trần Thái Tông",
        desc: "Món Quảng Đông",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkMqFAkGmc-j0dYKZcobOx-qcsOwGXkZoxNJDAQpfZVXQCPhx3ELiVFtOXcmSEYiBnYHIhTifP0bie71ui21lGbzNzBQg6vCiAdDwTprvDqXBDGpjnJg3KPBhlVylwEl9VSILeZ4OCCvl31=w800-h600-k-no",
      },
      {
        name: "WuLong - Taiwanese Hotpot Buffet",
        address: "126 Nguyễn Khánh Toàn",
        desc: "Lẩu Đài Loan",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWltv0wVN2j4Gb25fRRgl_W91A6EZElg2rxT7HyJmh1EbeAlRZdWANq23FhEUPE4d7qO1EsOIT9YZJ8WLFI2PcA296IzxfJ6lehY4cTyptYYiEh48jZST1d1HdobEl4JkhJPwQs=w800-h600-k-no",
      },
      {
        name: "Nhà hàng Hải sản Tomato",
        address: "33 Nguyễn Thị Định",
        desc: "Hải sản",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmQLi1npOlb1Qng5v2OjhPdwP-0ZG95cSkjcROyXFNWNF7FRdndRDXxAqY0t38OBi0EsAC9IVPMUKqoyGy9DOm_m0IxMYrK89vbFadbbCpHvKl6JGnRqyiHCFHCK0nyMd10rm6VxohFl_IE=w800-h600-k-no",
      },
      {
        name: "Nhà Hàng Hải Sản Biển Đông",
        address: "Số 2 ngõ 84 Trần Thái Tông",
        desc: "Hải sản, quy mô lớn",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnpNOyVejNrpNfN5VT2hZvGKcBrI4LwlOsk77bZdfPqujbEIeRywrZ6F8hoEkcqKFaAQ51UeYKY5BZuQv3fEyXqh887da3zmQ0pLQGZm_p4S1TrvgK3syK-uSgehwJoSNqxApA=w800-h600-k-no",
      },
      {
        name: "Nhà Hàng Tôm Hùm Seafood",
        address: "8 Trần Kim Xuyến",
        desc: "Hải sản/tôm hùm",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn7Axzz3cHeAkMsulI2a1tcuj-MYiP92gGfXZp4yX2EVcVWqWjrNpeOMvJPhqaTbYz2lEJPC3I3WhuC-jMdhGCTZ1-6L5k0jYrtt1sqatFl_-d9Grsm7EO1r9Q1i4Tmy-EZNeaK78BnJ4s=w800-h600-k-no",
      },
      {
        name: "Donsaiya Japanese Restaurant",
        address: "70 Duy Tân",
        desc: "Cơm/mì Nhật",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmj2Qa9Y2frNLwp6Is5uqt5yf8jqLKvoBCnQ30QGWXZtgHtQ8t23gBJ-IlpdjHuRsLkK3MPtBPJWRJ0HIvBm2Mw6z3mXtTa2icBEm8dKVy8NfkdKd6MeFFUISaciERBFWsMW59Q=w800-h600-k-no",
      },
      {
        name: "Kiều Hoa Quán",
        address: "291 Tô Hiệu",
        desc: "Món ăn Trung Hoa",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnLwLLqkD8rDAtBwASUp4Mhmw8hgkzCOZfAI6FL_EfBVg0PjRhg5Z5kcRBFX800cRAyUBSLpnWjWD39ARb_s58HBYAoNjQRrRHIMm8GbIAk8dmMOzM8gYMHYesgEShepBYeo83Y=w800-h600-k-no",
      },
      {
        name: "Chu's Kitchen",
        address: "Ngõ 79 Cầu Giấy",
        desc: "Món Việt",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmiT3u3NWKZxNCiKYHot-PC3-M086WAJXffnAzRWBT2IykmZOD3FA2rwGNlGN-1dSyULgEf-x_nhPPQFXWyu-O3wNHZnNwosENxnQEsP5i5cOW7-aNcGGWkO5FDvLH5u8jsnSgmlC6qptvU=w800-h600-k-no",
      },
      {
        name: "Manwah",
        address: "Tầng 2 Park Home, Cầu Giấy",
        desc: "Lẩu Đài Loan",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkAVX9BgYA325iSRljwB-s7B4dQ1hviMCu7Uno0v0L40Ul3C744_O-Ww-qavGBxH5-3kU0mq8hLLchJYKIjrL0JCjPjf6tkvUSolNOP5pjfTxJutreDUy0S9Cg9N5-mQ1GHAsrUrA=w800-h600-k-no",
      },
      {
        name: "SSamjang - Nướng & Cuốn Chợ Hàn",
        address: "1A Dịch Vọng Hậu",
        desc: "Hàn Quốc",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmHTc4JdnzwzRZmhDjVJ0IkWnAkyU0uRbzI7qCHXR34tImGFe_trLeBG5xFhjsThwCWtr8wdEHB5oT5dTmHYdg5xLPjMlgxIhV9LYAy5WxIIUGryEwXNUbferwuyI8qBJd0FonGJfBNUXHn=w800-h600-k-no",
      },
      {
        name: "GoGi House",
        address: "124 Trung Hòa",
        desc: "Nướng Hàn",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWlRzxFSFCdzAkYFJJyPYy64KG0eDAr5CSmvbnSVwoqrtkIecCSfcVK5w3vvMLHgzUCPP1WJFVjFDQilqVD_hG08RBEcUIGa34BYTz70PW8EUf0bKs8rfzwgWIfHIeLoyCQBqbbGAg=w800-h600-k-no",
      },
      {
        name: "WuLong - Taiwanese Hotpot Buffet",
        address: "126 Nguyễn Khánh Toàn",
        desc: "Lẩu",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWltv0wVN2j4Gb25fRRgl_W91A6EZElg2rxT7HyJmh1EbeAlRZdWANq23FhEUPE4d7qO1EsOIT9YZJ8WLFI2PcA296IzxfJ6lehY4cTyptYYiEh48jZST1d1HdobEl4JkhJPwQs=w800-h600-k-no",
      },
      {
        name: "Pizza Amalfi",
        address: "Tầng 1 tháp A, Skypark, 3 Tôn Thất Thuyết",
        desc: "Pizza/Ý",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmpGqTh1Sdbun1wBmaAvv9NxnqiGr3MX2KWtEl7xvd8gxHLFnakwji24wK-OcjmFyStDi86yPwPnq-TeZn9BXGdENr9XljD6Qh024oZaqYVFWLYv4oLzq1MvjZctdji7luCOCzDLA=w800-h600-k-no",
      },
      {
        name: "Tohoku Restaurant",
        address: "75 Trần Thái Tông",
        desc: "Nhật",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnpTFncbwwFWHQPQEjmLSvGsYzxF_zYwMWBxsLXZ05sU3hoO30bwm6k8EDpbM31BYq7hZtK1qXeBv17SEz1LK8V72TPOCy0Rm42gAjue0bKb3V0B7NKT1dJKUBJMgRgWBLh5LUhbKeGf_pF=w800-h600-k-no",
      },
      {
        name: "Fu Rong Hua Cantonese Restaurant",
        address: "D5A Trần Thái Tông",
        desc: "Quảng Đông",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkMqFAkGmc-j0dYKZcobOx-qcsOwGXkZoxNJDAQpfZVXQCPhx3ELiVFtOXcmSEYiBnYHIhTifP0bie71ui21lGbzNzBQg6vCiAdDwTprvDqXBDGpjnJg3KPBhlVylwEl9VSILeZ4OCCvl31=w800-h600-k-no",
      },
      {
        name: "Nhà hàng Hải sản Tomato",
        address: "33 Nguyễn Thị Định",
        desc: "Hải sản",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmQLi1npOlb1Qng5v2OjhPdwP-0ZG95cSkjcROyXFNWNF7FRdndRDXxAqY0t38OBi0EsAC9IVPMUKqoyGy9DOm_m0IxMYrK89vbFadbbCpHvKl6JGnRqyiHCFHCK0nyMd10rm6VxohFl_IE=w800-h600-k-no",
      },
      {
        name: "Donsaiya Japanese Restaurant",
        address: "70 Duy Tân",
        desc: "Nhật bình dân vừa phải",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmj2Qa9Y2frNLwp6Is5uqt5yf8jqLKvoBCnQ30QGWXZtgHtQ8t23gBJ-IlpdjHuRsLkK3MPtBPJWRJ0HIvBm2Mw6z3mXtTa2icBEm8dKVy8NfkdKd6MeFFUISaciERBFWsMW59Q=w800-h600-k-no",
      },
      {
        name: "Nhà Hàng Tôm Hùm Seafood",
        address: "8 Trần Kim Xuyến",
        desc: "Hải sản",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWn7Axzz3cHeAkMsulI2a1tcuj-MYiP92gGfXZp4yX2EVcVWqWjrNpeOMvJPhqaTbYz2lEJPC3I3WhuC-jMdhGCTZ1-6L5k0jYrtt1sqatFl_-d9Grsm7EO1r9Q1i4Tmy-EZNeaK78BnJ4s=w800-h600-k-no",
      },
      {
        name: "Nhà Hàng Hải Sản Biển Đông",
        address: "Số 2 ngõ 84 Trần Thái Tông",
        desc: "Hải sản",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnpNOyVejNrpNfN5VT2hZvGKcBrI4LwlOsk77bZdfPqujbEIeRywrZ6F8hoEkcqKFaAQ51UeYKY5BZuQv3fEyXqh887da3zmQ0pLQGZm_p4S1TrvgK3syK-uSgehwJoSNqxApA=w800-h600-k-no",
      },
      {
        name: "Kiều Hoa Quán",
        address: "291 Tô Hiệu",
        desc: "Món Trung",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnLwLLqkD8rDAtBwASUp4Mhmw8hgkzCOZfAI6FL_EfBVg0PjRhg5Z5kcRBFX800cRAyUBSLpnWjWD39ARb_s58HBYAoNjQRrRHIMm8GbIAk8dmMOzM8gYMHYesgEShepBYeo83Y=w800-h600-k-no",
      },
      {
        name: "Manwah",
        address: "Tầng 2 Park Home, Cầu Giấy",
        desc: "Lẩu",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkAVX9BgYA325iSRljwB-s7B4dQ1hviMCu7Uno0v0L40Ul3C744_O-Ww-qavGBxH5-3kU0mq8hLLchJYKIjrL0JCjPjf6tkvUSolNOP5pjfTxJutreDUy0S9Cg9N5-mQ1GHAsrUrA=w800-h600-k-no",
      },
      {
        name: "Lẩu & Nướng Ăndeee",
        address: "52 Nguyễn Khang",
        desc: "Lẩu/nướng",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkXSjSyumLMm7DiwFx6D93ds8wvynKcYWF5YK7IevZfegrJ8E-w6u1kK1oKjFUUy7bPQyu0YNro6UiqmqqJnopTTKlL4YMRRx3_Pl83U64wtzQqBH4JBwzHv7zr_6qv8YuedxMF10lCsUbH=w800-h600-k-no",
      },
      {
        name: "Tohoku Restaurant",
        address: "75 Trần Thái Tông",
        desc: "Nhật",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWnpTFncbwwFWHQPQEjmLSvGsYzxF_zYwMWBxsLXZ05sU3hoO30bwm6k8EDpbM31BYq7hZtK1qXeBv17SEz1LK8V72TPOCy0Rm42gAjue0bKb3V0B7NKT1dJKUBJMgRgWBLh5LUhbKeGf_pF=w800-h600-k-no",
      },
      {
        name: "Pizza Amalfi",
        address: "Tầng 1 tháp A, Skypark, 3 Tôn Thất Thuyết",
        desc: "Pizza",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmpGqTh1Sdbun1wBmaAvv9NxnqiGr3MX2KWtEl7xvd8gxHLFnakwji24wK-OcjmFyStDi86yPwPnq-TeZn9BXGdENr9XljD6Qh024oZaqYVFWLYv4oLzq1MvjZctdji7luCOCzDLA=w800-h600-k-no",
      },
      {
        name: "WuLong - Taiwanese Hotpot Buffet",
        address: "126 Nguyễn Khánh Toàn",
        desc: "Lẩu Đài Loan",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWltv0wVN2j4Gb25fRRgl_W91A6EZElg2rxT7HyJmh1EbeAlRZdWANq23FhEUPE4d7qO1EsOIT9YZJ8WLFI2PcA296IzxfJ6lehY4cTyptYYiEh48jZST1d1HdobEl4JkhJPwQs=w800-h600-k-no",
      },
      {
        name: "SSamjang - Nướng & Cuốn Chợ Hàn",
        address: "1A Dịch Vọng Hậu",
        desc: "Hàn Quốc",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmHTc4JdnzwzRZmhDjVJ0IkWnAkyU0uRbzI7qCHXR34tImGFe_trLeBG5xFhjsThwCWtr8wdEHB5oT5dTmHYdg5xLPjMlgxIhV9LYAy5WxIIUGryEwXNUbferwuyI8qBJd0FonGJfBNUXHn=w800-h600-k-no",
      },
      {
        name: "Donsaiya Japanese Restaurant",
        address: "70 Duy Tân",
        desc: "Nhật",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWmj2Qa9Y2frNLwp6Is5uqt5yf8jqLKvoBCnQ30QGWXZtgHtQ8t23gBJ-IlpdjHuRsLkK3MPtBPJWRJ0HIvBm2Mw6z3mXtTa2icBEm8dKVy8NfkdKd6MeFFUISaciERBFWsMW59Q=w800-h600-k-no",
      },
      {
        name: "Fu Rong Hua Cantonese Restaurant",
        address: "D5A Trần Thái Tông",
        desc: "Quảng Đông",
        photo:
          "https://lh3.googleusercontent.com/gps-cs-s/AHRPTWkMqFAkGmc-j0dYKZcobOx-qcsOwGXkZoxNJDAQpfZVXQCPhx3ELiVFtOXcmSEYiBnYHIhTifP0bie71ui21lGbzNzBQg6vCiAdDwTprvDqXBDGpjnJg3KPBhlVylwEl9VSILeZ4OCCvl31=w800-h600-k-no",
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
    ],
  },
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = COMBO_DATA;
}
