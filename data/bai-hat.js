/* Dữ liệu góc "Hát cùng Trâu Con" – học tiếng Việt qua đồng dao, vè, dân ca và hát ru.
   24 bài, 3 phần. Bài mẫu: "Dung dăng dung dẻ"; 23 bài còn lại soạn theo đúng khuôn bài mẫu (17-11-2026).

   Lời bài: chỉ dùng văn học dân gian (đồng dao, vè, dân ca, hát ru), chọn bản phổ biến;
   dị bản ghi ở trường diBan. Bài hát có tác giả (nhạc thiếu nhi) chỉ đưa lên khi đã có giấy phép bằng văn bản.
   Dân ca, hát ru: chỉ ghi lời chính; tiếng đệm khi hát (ơ, à ơi, í i…) theo bản thu của trường.

   Bài thay thế (giữ nguyên mã bài để không đổi nhãn lộ trình và khoá lưu hatca:<ma>):
     ve-ca        → "Con mèo mà trèo cây cau"   (không đối chiếu được bản dân gian phổ biến của "Vè cá")
     ve-trai-cay  → "Lúa ngô là cô đậu nành"    (bản "Vè trái cây" hay gặp trên mạng là sáng tác mới, có tác giả)
     ve-loai-vat  → "Bao giờ cho đến tháng ba"  (vè nói ngược về loài vật)
     ly-cay-bong  → "Ru em" (hát ru Huế)        (không đối chiếu được lời bản phổ biến của "Lý cây bông")
     ly-con-sao   → "Cái ngủ mày ngủ cho lâu"   (lời "Lý con sáo" chỉ chắc 2 câu ca dao, không đủ cho bài học)

   amThanh: false → nút Nghe đọc tạm bằng giọng máy qua bộ mẫu (TTV.phat, quy tắc 7).
   Khi đã chép đủ tệp giọng của trường vào audio/<ma>/ (xem AM-THANH.md) thì đổi thành true. */
window.HAT_CA = {
  phan: [
    { id: "dongdao", so: 1, ten: "Đồng dao", en: "Children's chants", bieu: "👫",
      moTa: "Vừa đọc vừa chơi: dắt tay, kéo cưa, bắt ngón tay…",
      moTaEn: "Chant while you play: walking hand in hand, sawing, catching fingers…" },
    { id: "ve", so: 2, ten: "Vè", en: "Folk list-rhymes", bieu: "🐦",
      moTa: "Vè và đồng dao kể chuyện: tên chim, mèo và chuột, cây trái, chuyện nói ngược… đọc vui, nhớ nhanh",
      moTaEn: "Rhymes that tell and list: birds, the cat and the mouse, crops, a topsy-turvy world… fun to say, quick to remember" },
    { id: "baihat", so: 3, ten: "Dân ca & hát ru", en: "Folk songs & lullabies", bieu: "🎶",
      moTa: "Làn điệu dân ca ba miền và lời ru của bà, của mẹ",
      moTaEn: "Folk songs from the three regions and the lullabies of grandmothers and mothers" }
  ],

  bai: [
    /* ================= BÀI MẪU ================= */
    {
      ma: "dung-dang-dung-de", so: 1, phan: "dongdao", trangThai: "san-sang",
      ten: "Dung dăng dung dẻ",
      en: "Walking hand in hand",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bài có nhiều dị bản: có nơi đọc “Đến ngõ nhà trời”, “Ngồi xệp xuống đây”. Góc học dùng bản phổ biến.",
      troChoi: "Dắt tay đi chơi",
      tempo: { cham: 76, vua: 100 },
      amThanh: true,
      loi: [
        "Dung dăng dung dẻ",
        "Dắt trẻ đi chơi",
        "Đến cửa nhà trời",
        "Lạy cậu lạy mợ",
        "Cho cháu về quê",
        "Cho dê đi học",
        "Cho cóc ở nhà",
        "Cho gà bới bếp",
        "Xì xà xì xụp",
        "Ngồi thụp xuống đây"
      ],
      gioiThieu: {
        vi: "Đây là bài đồng dao các bạn nhỏ vừa đọc vừa nắm tay nhau đi chơi. Cả nhóm đung đưa tay theo nhịp, đi đến “cửa nhà trời”, xin phép cậu mợ cho về quê, rồi kể vui: dê thì đi học, cóc thì ở nhà, gà thì bới bếp. Đến câu cuối, tất cả cùng ngồi thụp xuống!",
        en: "A traditional chant children say while walking hand in hand. The group swings their arms to the beat, arrives at “heaven's gate”, politely asks their uncle and aunt to let them go back to the countryside, then lists funny jobs: the goat goes to school, the toad stays home, the hen scratches around the kitchen. On the last line, everyone squats down together!"
      },
      tuKho: [
        { tu: "dung dăng dung dẻ", hinh: "👫", nghia: "dáng đi tung tăng, tay đung đưa qua lại", en: "walking happily with arms swinging" },
        { tu: "lạy", hinh: "🙏", nghia: "chắp tay, cúi đầu để chào hoặc xin phép người lớn", en: "to bow with hands together, to ask an elder politely" },
        { tu: "cậu", hinh: "👨", nghia: "anh trai hoặc em trai của mẹ", en: "your mother's brother (uncle)" },
        { tu: "mợ", hinh: "👩", nghia: "vợ của cậu", en: "the wife of your mother's brother (aunt)" },
        { tu: "quê", hinh: "🏡", nghia: "nơi ông bà, gia đình mình sinh ra và lớn lên", en: "hometown, the place your family comes from" },
        { tu: "bới bếp", hinh: "🐔", nghia: "lấy chân cào tìm thức ăn quanh chỗ nấu ăn", en: "to scratch around the kitchen looking for food" },
        { tu: "xì xà xì xụp", hinh: "🎶", nghia: "tiếng đọc vui cho có nhịp, như “la la la” khi hát", en: "fun sounds just for the rhythm, like “la la la”" },
        { tu: "ngồi thụp", hinh: "⬇️", nghia: "ngồi xuống thật nhanh", en: "to squat down quickly" }
      ],
      cauHoi: [
        { hoi: "Các bạn nhỏ được dắt đi đâu?", en: "Where are the children led to?",
          chon: [{ chu: "Đến cửa nhà trời", hinh: "☁️" }, { chu: "Đến trường học", hinh: "🏫" }, { chu: "Ra chợ", hinh: "🧺" }], dung: 0 },
        { hoi: "Các bạn xin phép ai cho về quê?", en: "Whom do they ask before going to the countryside?",
          chon: [{ chu: "Cậu và mợ", hinh: "👨‍👩" }, { chu: "Thầy và cô", hinh: "🧑‍🏫" }, { chu: "Anh và chị", hinh: "🧒" }], dung: 0 },
        { hoi: "Con vật nào được đi học?", en: "Which animal goes to school?",
          chon: [{ chu: "Con dê", hinh: "🐐" }, { chu: "Con cóc", hinh: "🐸" }, { chu: "Con gà", hinh: "🐔" }], dung: 0 },
        { hoi: "Con vật nào ở nhà?", en: "Which animal stays home?",
          chon: [{ chu: "Con cóc", hinh: "🐸" }, { chu: "Con dê", hinh: "🐐" }, { chu: "Con gà", hinh: "🐔" }], dung: 0 },
        { hoi: "Con gà làm gì?", en: "What does the hen do?",
          chon: [{ chu: "Bới bếp", hinh: "🔥" }, { chu: "Đi học", hinh: "🎒" }, { chu: "Ngủ trưa", hinh: "😴" }], dung: 0 }
      ],
      /* Điền từ: [số thứ tự câu (từ 0), tiếng cần điền] */
      dienTu: [[1, "trẻ"], [2, "trời"], [4, "quê"], [5, "dê"], [6, "cóc"], [7, "gà"], [9, "thụp"]],
      nhieu: ["mèo", "chợ", "bò", "sông", "chim"],
      /* Cặp vần dùng cho trò Lật thẻ tìm vần */
      vanCap: [["dẻ", "trẻ"], ["chơi", "trời"], ["quê", "dê"], ["học", "cóc"], ["nhà", "gà"], ["xụp", "thụp"]],
      cungChoi: {
        ten: "Dắt tay đi chơi",
        nguoi: "Từ 3 bạn trở lên, càng đông càng vui",
        cho: "Sân rộng hoặc phòng khách",
        buoc: [
          { hinh: "🤝", chu: "Các bạn nắm tay nhau thành một hàng ngang." },
          { hinh: "🚶", chu: "Vừa đi vừa đọc, tay đung đưa ra trước, ra sau theo nhịp." },
          { hinh: "🙏", chu: "Đến câu “Lạy cậu lạy mợ”, cả hàng cùng cúi đầu chào." },
          { hinh: "⬇️", chu: "Đến tiếng “thụp”, tất cả ngồi xuống thật nhanh. Bạn ngồi xuống sau cùng sẽ bắt nhịp lượt sau." }
        ],
        en: "Hold hands in a line. Walk and swing your arms to the beat while you chant. At “Lạy cậu lạy mợ”, everyone bows. On the word “thụp”, everyone squats down fast – the last one down starts the next round.",
        anToan: "Chơi ở chỗ rộng, sàn không trơn; đi chậm, không kéo tay bạn mạnh."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Chơi “Dắt tay đi chơi” với anh chị em hoặc bạn bè",
        "Hỏi cha mẹ: Mình có cậu, mợ không? Cậu mợ ở đâu?"
      ],
      goiY: {
        nghe: "Cho bé đọc theo nhịp 2–3 lần trước khi học thuộc, mỗi tiếng vỗ tay một cái. Câu đồng dao 4 tiếng giúp bé nói tròn từng tiếng và rõ dấu thanh. Lần đầu nên chọn nhịp “Chậm”.",
        hieu: "Nói thêm với bé về họ hàng bên ngoại: “cậu” là anh, em trai của mẹ; “mợ” là vợ của cậu. Giải thích rằng “xì xà xì xụp” chỉ là tiếng đọc cho vui, không cần tìm nghĩa.",
        nho: "Học thuộc theo kiểu che dần: mỗi vòng che bớt chữ, bé đọc to. Đừng ngắt lời khi bé đọc sai; đợi bé đọc xong rồi cùng đọc lại câu đó.",
        choi: "Lật thẻ tìm vần giúp bé nghe ra vần: dẻ – trẻ, quê – dê. Hỏi thêm: “Con tìm một tiếng nữa vần với ‘gà’ nhé?” (nhà, ba, hoa…).",
        cungChoi: "Đây là trò chơi dân gian thật. Hãy chơi cùng bé ở nhà, hoặc cho cả lớp chơi giờ ra chơi. Thầy cô có thể dùng bài này mở đầu buổi học trong 3 phút."
      }
    },


    /* ================= PHẦN 1 – ĐỒNG DAO ================= */
    {
      ma: "chi-chi-chanh-chanh", so: 2, phan: "dongdao", trangThai: "san-sang",
      ten: "Chi chi chành chành",
      en: "Catch the finger",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản: có nơi đọc “Bắt dế đi tìm”, “Cấp kế đi tìm”, có nơi đọc thêm “Đóng sập cửa vào”. Nhiều tiếng trong bài là tiếng cổ, mỗi người giải thích một khác.",
      troChoi: "Bắt ngón tay",
      tempo: { cham: 76, vua: 100 },
      amThanh: true,
      loi: [
        "Chi chi chành chành",
        "Cái đanh thổi lửa",
        "Con ngựa chết trương",
        "Ba vương ngũ đế",
        "Chấp chế đi tìm",
        "Ù à ù ập"
      ],
      gioiThieu: {
        vi: "Đây là bài đồng dao đi kèm trò chơi bắt ngón tay. Một bạn xoè bàn tay, các bạn khác đặt ngón tay trỏ vào lòng bàn tay ấy. Cả nhóm cùng đọc theo nhịp. Đến tiếng “ập” cuối bài, bạn xoè tay nắm tay lại thật nhanh, các bạn kia phải rút ngón tay ra cho kịp. Nhiều tiếng trong bài là tiếng cổ, đọc lên vui tai và có nhịp, nên các bạn nhỏ thuộc rất nhanh.",
        en: "A chant for a finger-catching game. One child holds out an open palm; the others each put a fingertip on it. Everyone chants to the beat. On the last word “ập”, the child quickly closes the hand, and the others must pull their fingers away in time. Many words are very old and are said mostly for their fun sound and rhythm."
      },
      tuKho: [
        { tu: "chành", hinh: "✋", nghia: "mở rộng ra, xoè ra (như xoè bàn tay)", en: "to open wide, to spread out (like an open hand)" },
        { tu: "cái đanh", hinh: "📌", nghia: "cái đinh (tiếng cũ)", en: "a nail (old word)" },
        { tu: "thổi lửa", hinh: "🔥", nghia: "thổi cho lửa cháy to lên khi nấu bếp", en: "to blow on a fire to make it burn" },
        { tu: "con ngựa", hinh: "🐴", nghia: "con vật to, chân dài, chạy nhanh; ngày xưa người ta cưỡi ngựa đi xa", en: "a horse" },
        { tu: "ba vương ngũ đế", hinh: "👑", nghia: "các vua ngày xưa trong truyện cổ (ba vua, năm vua)", en: "kings and emperors of ancient stories (three kings, five emperors)" },
        { tu: "đi tìm", hinh: "🔍", nghia: "đi kiếm một người hay một vật", en: "to go looking for" },
        { tu: "ù à ù ập", hinh: "🎶", nghia: "tiếng đọc cho vui, báo hiệu sắp nắm tay lại", en: "fun sounds that warn the hand is about to close" },
        { tu: "ập", hinh: "👊", nghia: "rất nhanh, bất ngờ (nắm tay lại thật nhanh)", en: "suddenly, very fast (the hand snaps shut)" }
      ],
      cauHoi: [
        { hoi: "Ở tiếng cuối bài, bạn xoè tay làm gì?", en: "What does the child with the open hand do on the last word?",
          chon: [{ chu: "Nắm tay lại thật nhanh", hinh: "👊" }, { chu: "Vỗ tay hai cái", hinh: "👏" }, { chu: "Giơ tay lên cao", hinh: "🙋" }], dung: 0 },
        { hoi: "Các bạn khác đặt gì vào lòng bàn tay?", en: "What do the other children put on the palm?",
          chon: [{ chu: "Một ngón tay", hinh: "☝️" }, { chu: "Một viên kẹo", hinh: "🍬" }, { chu: "Một cái đinh", hinh: "📌" }], dung: 0 },
        { hoi: "Trong bài có con vật nào?", en: "Which animal is in the chant?",
          chon: [{ chu: "Con ngựa", hinh: "🐴" }, { chu: "Con mèo", hinh: "🐱" }, { chu: "Con gà", hinh: "🐔" }], dung: 0 },
        { hoi: "“Cái đanh” là cái gì?", en: "What is “cái đanh”?",
          chon: [{ chu: "Cái đinh", hinh: "📌" }, { chu: "Cái bánh", hinh: "🍪" }, { chu: "Cái nón", hinh: "👒" }], dung: 0 },
        { hoi: "Tiếng cuối cùng của bài là tiếng nào?", en: "What is the very last word of the chant?",
          chon: [{ chu: "ập", hinh: "💥" }, { chu: "chành", hinh: "✋" }, { chu: "tìm", hinh: "🔍" }], dung: 0 }
      ],
      dienTu: [[0, "chành"], [1, "lửa"], [2, "ngựa"], [3, "vương"], [4, "tìm"], [5, "ập"]],
      nhieu: ["nước", "trâu", "vua", "đèn", "nhà"],
      vanCap: [["chành", "đanh"], ["lửa", "ngựa"], ["trương", "vương"], ["đế", "chế"]],
      cungChoi: {
        ten: "Chi chi chành chành (bắt ngón tay)",
        nguoi: "Từ 3 bạn trở lên",
        cho: "Ngồi quanh bàn, trên chiếu hoặc trên sàn",
        buoc: [
          { hinh: "✋", chu: "Một bạn làm “cái”: xoè bàn tay, ngửa lòng bàn tay ra." },
          { hinh: "☝️", chu: "Các bạn khác đặt một ngón tay trỏ vào giữa lòng bàn tay đó." },
          { hinh: "🎶", chu: "Cả nhóm cùng đọc bài theo nhịp. Bạn làm “cái” có thể đọc chậm, đọc nhanh để đánh lừa." },
          { hinh: "👊", chu: "Đến tiếng “ập”, bạn làm “cái” nắm tay lại, các bạn khác rút tay ra thật nhanh. Ai bị nắm ngón tay thì làm “cái” ván sau." }
        ],
        en: "One child is “it” and holds out an open palm. The others each put one index finger on the palm. Everyone chants together. On the word “ập”, “it” closes the hand – the others pull their fingers away fast. Whoever gets caught is “it” next round.",
        anToan: "Nắm tay nhẹ nhàng, không bấm móng tay, không kéo giật ngón tay bạn."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Chơi “Chi chi chành chành” với cả nhà, mỗi người làm “cái” một lần",
        "Hỏi ông bà, cha mẹ: Ngày nhỏ ông bà đọc bài này có giống mình không?"
      ],
      goiY: {
        nghe: "Câu ngắn 4 tiếng, nhiều tiếng có vần “anh”, “ưa”, “ương”: cho bé vỗ tay mỗi tiếng một cái. Đến tiếng “ập”, cả nhà cùng nắm tay lại cho vui.",
        hieu: "Nhiều tiếng trong bài là tiếng cổ, người lớn cũng giải thích khác nhau. Nói với bé: bài này chủ yếu để đọc cho có nhịp khi chơi, không cần hiểu hết từng tiếng.",
        nho: "Bài chỉ có 6 câu; chơi trò bắt ngón tay vài lần là bé thuộc. Khi che dần, nhắc bé nhớ cặp vần: chành – đanh, lửa – ngựa.",
        choi: "Sau trò lật thẻ, hỏi thêm: “Con tìm một tiếng vần với ‘ngựa’ nhé?” (cửa, lửa, bữa…).",
        cungChoi: "Trò này chơi được ngay trên bàn ăn hoặc lúc chờ đợi. Người lớn làm “cái” trước, đọc chậm dần rồi nhanh dần để bé thích thú."
      }
    },

    {
      ma: "keo-cua-lua-xe", so: 3, phan: "dongdao", trangThai: "san-sang",
      ten: "Kéo cưa lừa xẻ",
      en: "Sawing the log",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có một dị bản khác cũng rất quen: “Kéo cưa lừa xẻ / Làm ít ăn nhiều / Nằm đâu ngủ đấy / Nó lấy mất cưa / Lấy gì mà kéo”. Góc học dùng bản “Ông thợ nào khoẻ”.",
      troChoi: "Kéo cưa",
      tempo: { cham: 76, vua: 100 },
      amThanh: true,
      loi: [
        "Kéo cưa lừa xẻ",
        "Ông thợ nào khoẻ",
        "Về ăn cơm vua",
        "Ông thợ nào thua",
        "Về bú tí mẹ"
      ],
      gioiThieu: {
        vi: "Hai bạn ngồi đối mặt, nắm tay nhau, đẩy qua kéo lại như hai bác thợ đang cưa gỗ. Bài đồng dao trêu vui: bác thợ nào khoẻ thì được về ăn cơm vua, bác thợ nào thua thì phải về bú tí mẹ như em bé. Ngày xưa, gỗ được xẻ bằng cưa tay: hai người thợ đứng hai đầu, kéo cưa qua lại.",
        en: "Two children sit face to face, hold hands, and push and pull like two carpenters sawing a log. The chant teases: the stronger carpenter gets to eat at the king's table, the one who loses has to go home and drink mother's milk like a baby. Long ago, logs were cut with a hand saw pulled back and forth by two workers."
      },
      tuKho: [
        { tu: "kéo cưa", hinh: "🪚", nghia: "kéo cái cưa qua lại để cắt gỗ", en: "to pull a saw back and forth to cut wood" },
        { tu: "lừa xẻ", hinh: "↔️", nghia: "đưa cưa qua lại cho đều tay để xẻ gỗ thành tấm", en: "to work the saw evenly to split the log into boards" },
        { tu: "thợ", hinh: "👷", nghia: "người làm một nghề bằng tay, như thợ mộc, thợ may", en: "a craftsman, a worker" },
        { tu: "khoẻ", hinh: "💪", nghia: "có nhiều sức, mạnh", en: "strong" },
        { tu: "cơm vua", hinh: "👑", nghia: "bữa cơm ngon trong cung vua; ý là được thưởng", en: "a meal at the king's palace – a reward" },
        { tu: "thua", hinh: "🏳️", nghia: "không thắng được bạn", en: "to lose" },
        { tu: "bú tí mẹ", hinh: "🍼", nghia: "em bé uống sữa mẹ; ý trêu vui là còn bé như em bé", en: "a baby drinking mother's milk – a playful tease" }
      ],
      cauHoi: [
        { hoi: "Hai bạn chơi làm giống ai?", en: "Who do the two players pretend to be?",
          chon: [{ chu: "Hai bác thợ cưa gỗ", hinh: "🪚" }, { chu: "Hai bạn đá bóng", hinh: "⚽" }, { chu: "Hai cô bán hàng", hinh: "🧺" }], dung: 0 },
        { hoi: "Ông thợ khoẻ được về đâu?", en: "Where does the strong worker get to go?",
          chon: [{ chu: "Về ăn cơm vua", hinh: "👑" }, { chu: "Về bú tí mẹ", hinh: "🍼" }, { chu: "Về đi ngủ", hinh: "😴" }], dung: 0 },
        { hoi: "Ông thợ thua thì sao?", en: "What happens to the worker who loses?",
          chon: [{ chu: "Về bú tí mẹ", hinh: "🍼" }, { chu: "Về ăn cơm vua", hinh: "👑" }, { chu: "Đi chợ", hinh: "🧺" }], dung: 0 },
        { hoi: "Hai bạn ngồi thế nào khi chơi?", en: "How do the two players sit?",
          chon: [{ chu: "Đối mặt, nắm tay nhau", hinh: "🤝" }, { chu: "Quay lưng vào nhau", hinh: "🔄" }, { chu: "Mỗi bạn một góc nhà", hinh: "🏠" }], dung: 0 },
        { hoi: "Cái cưa dùng để làm gì?", en: "What is a saw used for?",
          chon: [{ chu: "Cắt gỗ", hinh: "🪵" }, { chu: "Nấu cơm", hinh: "🍚" }, { chu: "Chải tóc", hinh: "💇" }], dung: 0 }
      ],
      dienTu: [[0, "cưa"], [1, "thợ"], [1, "khoẻ"], [2, "vua"], [3, "thua"], [4, "mẹ"]],
      nhieu: ["bố", "gạo", "yếu", "bà", "cày"],
      vanCap: [["vua", "thua"], ["xẻ", "khoẻ"], ["cưa", "lừa"], ["mẹ", "bé"]],
      cungChoi: {
        ten: "Kéo cưa",
        nguoi: "2 bạn (hoặc bé và một người lớn)",
        cho: "Ngồi trên sàn, chiếu hoặc thảm",
        buoc: [
          { hinh: "🤝", chu: "Hai bạn ngồi đối mặt, duỗi chân, nắm chặt hai tay nhau." },
          { hinh: "↔️", chu: "Vừa đọc vừa đẩy kéo: một bạn ngả người ra sau thì bạn kia cúi người ra trước, như đang kéo cưa." },
          { hinh: "🎶", chu: "Mỗi tiếng một lần đẩy hoặc kéo, đều tay theo nhịp." },
          { hinh: "🔁", chu: "Đọc xong một lượt thì đọc lại nhanh hơn một chút. Trò này không cần thắng thua, chỉ cần đều nhịp và vui." }
        ],
        en: "Sit facing each other with legs out and hold both hands. As you chant, push and pull: one leans back while the other leans forward, like sawing a log. One push or pull per syllable. Then chant again a little faster. No winners needed – just keep the beat together.",
        anToan: "Kéo nhẹ, không giật mạnh; ngồi trên sàn có thảm để không bị ngã đau."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Chơi “Kéo cưa” với một người lớn trong nhà",
        "Hỏi cha mẹ: Ngày xưa người ta xẻ gỗ bằng gì? Nhà mình có đồ gì làm bằng gỗ?"
      ],
      goiY: {
        nghe: "Bài chỉ 5 câu, mỗi câu 4 tiếng. Cho bé ngồi đối mặt với người lớn, vừa đọc vừa đẩy kéo tay theo nhịp: cơ thể nhớ nhịp, miệng nhớ lời.",
        hieu: "Giải thích “cơm vua” là phần thưởng, còn “bú tí mẹ” là câu trêu vui, không phải chê bạn. Có thể kể thêm: ngày xưa chưa có máy cưa, hai người thợ kéo cưa tay cả ngày.",
        nho: "Cặp vần vua – thua giúp bé nhớ hai câu cuối. Khi che dần, đọc chậm và để bé tự nói tiếng cuối câu.",
        choi: "Hỏi thêm: “Tiếng nào vần với ‘cưa’?” (lừa, mưa, trưa…). Nhắc bé: bản “Làm ít ăn nhiều” cũng là bài Kéo cưa lừa xẻ.",
        cungChoi: "Trò hợp với bé nhỏ: người lớn ngồi đối diện, kéo nhẹ. Bé lớn hơn có thể chơi với bạn cùng tuổi."
      }
    },

    {
      ma: "nu-na-nu-nong", so: 4, phan: "dongdao", trangThai: "san-sang",
      ten: "Nu na nu nống",
      en: "Counting feet",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản: có nơi đọc “Bụt ngồi bụt khóc”, “Con gà ú ù”, “Nhà tôi cũng nấu chè”.",
      troChoi: "Đếm chân",
      tempo: { cham: 76, vua: 100 },
      amThanh: true,
      loi: [
        "Nu na nu nống",
        "Cái cống nằm trong",
        "Cái ong nằm ngoài",
        "Củ khoai chấm mật",
        "Phật ngồi phật khóc",
        "Con cóc nhảy ra",
        "Con gà ú ụ",
        "Nhà mụ thổi xôi",
        "Nhà tôi nấu chè",
        "Tay xoè chân rụt"
      ],
      gioiThieu: {
        vi: "Các bạn ngồi thành hàng, duỗi chân ra trước. Một bạn vừa đọc vừa chạm nhẹ vào từng bàn chân, mỗi tiếng một chân. Tiếng “rụt” cuối bài rơi vào chân nào thì chân ấy co lại. Chơi đến khi chỉ còn một chân. Lời bài kể những thứ quen ở làng quê: cái cống, con ong, củ khoai chấm mật, con cóc, con gà, nồi xôi, nồi chè.",
        en: "Children sit in a row with legs stretched out. One child chants and taps each foot in turn, one foot per syllable. The foot tapped on the last word “rụt” is pulled in. Keep going until only one foot is left. The words name things from village life: a drain, a bee, sweet potato dipped in honey, a toad, a hen, sticky rice and sweet soup."
      },
      tuKho: [
        { tu: "cái cống", hinh: "🕳️", nghia: "đường ống nhỏ cho nước chảy qua, ở bờ ruộng hay dưới đường", en: "a small channel or pipe for water" },
        { tu: "củ khoai", hinh: "🍠", nghia: "củ mọc dưới đất, luộc lên ăn bùi và ngọt", en: "sweet potato" },
        { tu: "mật", hinh: "🍯", nghia: "nước ngọt và sánh, như mật ong, mật mía", en: "honey or thick sugar syrup" },
        { tu: "phật", hinh: "🙏", nghia: "tượng Phật trong chùa; trong bài chỉ đọc cho vần, cho vui", en: "a Buddha statue in a pagoda; here it is said just for the rhyme" },
        { tu: "mụ", hinh: "👵", nghia: "cách gọi một bà ở làng ngày xưa", en: "an old village word for an older woman" },
        { tu: "thổi xôi", hinh: "🍚", nghia: "nấu xôi bằng hơi nước (đồ xôi)", en: "to steam sticky rice" },
        { tu: "chè", hinh: "🍮", nghia: "món ngọt nấu bằng đậu, nếp và đường", en: "sweet soup made with beans, sticky rice and sugar" },
        { tu: "rụt", hinh: "🦶", nghia: "co lại, thu vào", en: "to pull in" }
      ],
      cauHoi: [
        { hoi: "Củ khoai chấm với gì?", en: "What is the sweet potato dipped in?",
          chon: [{ chu: "Mật", hinh: "🍯" }, { chu: "Muối", hinh: "🧂" }, { chu: "Nước mắm", hinh: "🐟" }], dung: 0 },
        { hoi: "Con vật nào nhảy ra?", en: "Which animal jumps out?",
          chon: [{ chu: "Con cóc", hinh: "🐸" }, { chu: "Con gà", hinh: "🐔" }, { chu: "Con ong", hinh: "🐝" }], dung: 0 },
        { hoi: "Nhà mụ nấu gì?", en: "What does granny's house cook?",
          chon: [{ chu: "Thổi xôi", hinh: "🍚" }, { chu: "Nấu chè", hinh: "🍮" }, { chu: "Luộc khoai", hinh: "🍠" }], dung: 0 },
        { hoi: "Nhà tôi nấu gì?", en: "What does my house cook?",
          chon: [{ chu: "Nấu chè", hinh: "🍮" }, { chu: "Thổi xôi", hinh: "🍚" }, { chu: "Nướng cá", hinh: "🐟" }], dung: 0 },
        { hoi: "Tiếng cuối bài rơi vào chân nào thì sao?", en: "What happens to the foot tapped on the last word?",
          chon: [{ chu: "Chân đó co lại", hinh: "🦶" }, { chu: "Chân đó đứng lên", hinh: "🧍" }, { chu: "Chân đó nhảy lò cò", hinh: "🤸" }], dung: 0 }
      ],
      dienTu: [[1, "trong"], [2, "ngoài"], [3, "mật"], [5, "cóc"], [7, "xôi"], [8, "chè"], [9, "rụt"]],
      nhieu: ["cơm", "mèo", "bánh", "sông", "đứng"],
      vanCap: [["nống", "cống"], ["trong", "ong"], ["ngoài", "khoai"], ["khóc", "cóc"], ["ụ", "mụ"], ["xôi", "tôi"]],
      cungChoi: {
        ten: "Nu na nu nống (đếm chân)",
        nguoi: "Từ 3 bạn trở lên",
        cho: "Ngồi thành hàng trên chiếu, thảm hoặc bậc thềm",
        buoc: [
          { hinh: "🧑‍🤝‍🧑", chu: "Các bạn ngồi sát nhau thành một hàng, duỗi thẳng chân ra trước." },
          { hinh: "👆", chu: "Một bạn làm “cái”, vừa đọc vừa chạm nhẹ vào từng bàn chân theo thứ tự, mỗi tiếng một chân." },
          { hinh: "🦶", chu: "Tiếng “rụt” cuối bài rơi vào chân nào thì chân đó co lại." },
          { hinh: "🔁", chu: "Đọc lại từ đầu, bắt đầu từ chân kế tiếp. Bạn nào co được cả hai chân là xong lượt; chân còn lại sau cùng thì bạn đó làm “cái” ván sau." }
        ],
        en: "Sit side by side with legs stretched out. One child chants and taps each foot in turn, one foot per syllable. The foot tapped on “rụt” is pulled in. Start again from the next foot. When both your feet are in, you are safe; the owner of the last foot left is “it” next round.",
        anToan: "Chạm nhẹ bằng tay, không đập mạnh vào chân bạn; ngồi trên thảm hoặc chiếu cho êm."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Chơi “Nu na nu nống” với ít nhất 3 người trong nhà",
        "Cùng cha mẹ ăn thử một món trong bài: khoai, xôi hoặc chè"
      ],
      goiY: {
        nghe: "Bài có 10 câu, mỗi câu 4 tiếng. Đọc chậm, chạm vào chân bé mỗi tiếng một cái: bé vừa nghe vừa đếm nhịp bằng cơ thể.",
        hieu: "Bài kể đồ vật, con vật, món ăn quen ở làng quê. Hỏi bé đã ăn khoai, xôi, chè chưa; món nào ngon nhất? “Phật”, “mụ” là tiếng đọc cho vần, không cần giảng kỹ.",
        nho: "Bài có nhiều cặp vần nối câu: nống – cống, trong – ong, ngoài – khoai… Nhắc bé: tiếng cuối câu trước gọi tiếng trong câu sau.",
        choi: "Chỉ cho bé thấy cách vần nối câu: “nống” ở câu 1 vần với “cống” ở câu 2. Đây là cách đồng dao giúp người đọc nhớ lời.",
        cungChoi: "Trò chơi hợp cho cả nhà ngồi trên chiếu. Người lớn làm “cái” trước để bé quen nhịp, sau đó cho bé làm “cái”."
      }
    },

    {
      ma: "tap-tam-vong", so: 5, phan: "dongdao", trangThai: "san-sang",
      ten: "Tập tầm vông",
      en: "Which hand?",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản đọc thêm “Tay nào không / Tay nào có?”. Bài hát thiếu nhi “Tập tầm vông” có tác giả là một bài khác; góc học chỉ dùng lời đồng dao.",
      troChoi: "Đoán tay",
      tempo: { cham: 76, vua: 100 },
      amThanh: true,
      loi: [
        "Tập tầm vông",
        "Tay không tay có",
        "Tập tầm vó",
        "Tay có tay không",
        "Tay nào có",
        "Tay nào không?"
      ],
      gioiThieu: {
        vi: "Đây là bài đồng dao của trò đoán tay. Một bạn giấu một vật nhỏ (hạt đậu, viên sỏi) trong một bàn tay, đưa hai tay ra sau lưng và đổi qua đổi lại. Cả nhóm cùng đọc. Đọc xong, bạn kia phải đoán: tay nào có, tay nào không? Đoán đúng thì đến lượt mình giấu.",
        en: "A guessing-game chant. One child hides a small object (a bean, a pebble) in one hand and swaps it behind their back while everyone chants. At the end, the other child must guess: which hand has it, which hand is empty? A right guess means it is your turn to hide."
      },
      tuKho: [
        { tu: "tập tầm vông", hinh: "🎶", nghia: "tiếng đọc cho vui, mở đầu trò đoán tay", en: "fun sounds that start the hand-guessing game" },
        { tu: "tập tầm vó", hinh: "🎵", nghia: "tiếng đọc cho vui, đổi một chút cho có vần", en: "fun sounds, changed a little to rhyme" },
        { tu: "tay không", hinh: "🤚", nghia: "bàn tay không cầm gì", en: "an empty hand" },
        { tu: "tay có", hinh: "✊", nghia: "bàn tay đang cầm đồ vật", en: "a hand holding something" },
        { tu: "tay nào", hinh: "❓", nghia: "hỏi để chọn một trong hai bàn tay", en: "which hand? (asking to choose one)" }
      ],
      cauHoi: [
        { hoi: "Đây là trò chơi gì?", en: "What kind of game is this?",
          chon: [{ chu: "Đoán tay", hinh: "🤲" }, { chu: "Kéo co", hinh: "🪢" }, { chu: "Trốn tìm", hinh: "🙈" }], dung: 0 },
        { hoi: "Đồ vật được giấu ở đâu?", en: "Where is the object hidden?",
          chon: [{ chu: "Trong một bàn tay", hinh: "✊" }, { chu: "Trong túi áo", hinh: "👕" }, { chu: "Dưới gối", hinh: "🛏️" }], dung: 0 },
        { hoi: "“Tay không” là tay thế nào?", en: "What does “tay không” mean?",
          chon: [{ chu: "Tay không cầm gì", hinh: "🤚" }, { chu: "Tay cầm kẹo", hinh: "🍬" }, { chu: "Tay đang vẫy", hinh: "👋" }], dung: 0 },
        { hoi: "Đọc xong bài, bạn kia phải làm gì?", en: "What must the other player do at the end?",
          chon: [{ chu: "Đoán tay nào có", hinh: "🤔" }, { chu: "Chạy đi trốn", hinh: "🏃" }, { chu: "Hát thêm một bài", hinh: "🎤" }], dung: 0 },
        { hoi: "Câu cuối bài là câu gì?", en: "What kind of sentence is the last line?",
          chon: [{ chu: "Câu hỏi", hinh: "❓" }, { chu: "Câu chào", hinh: "👋" }, { chu: "Câu cảm ơn", hinh: "🙏" }], dung: 0 }
      ],
      dienTu: [[0, "vông"], [1, "có"], [2, "vó"], [3, "không"], [4, "có"], [5, "không"]],
      nhieu: ["cầm", "chân", "mèo", "cao", "đây"],
      vanCap: [["vông", "không"], ["vó", "có"], ["tay", "bay"], ["nào", "sao"]],
      cungChoi: {
        ten: "Tập tầm vông (đoán tay)",
        nguoi: "2 bạn trở lên",
        cho: "Ở đâu cũng chơi được: trong nhà, trên xe, ngoài sân",
        buoc: [
          { hinh: "🫘", chu: "Một bạn cầm một vật nhỏ (hạt đậu to, viên sỏi, cục tẩy) và đưa hai tay ra sau lưng." },
          { hinh: "🎶", chu: "Cả nhóm cùng đọc bài; bạn giấu đổi vật qua lại giữa hai tay sau lưng." },
          { hinh: "✊", chu: "Đọc hết bài, bạn giấu đưa hai nắm tay ra trước." },
          { hinh: "🤔", chu: "Bạn kia chỉ vào một tay và nói “Tay này có!”. Đoán đúng thì đổi lượt: người đoán được giấu." }
        ],
        en: "One child holds a small object behind their back and swaps it between hands while everyone chants. At the end, they hold out two closed fists. The other child points to one and says “Tay này có!” (this hand has it). A right guess means you swap roles.",
        anToan: "Chỉ dùng vật to hơn đồng xu, không cho vào miệng; em bé dưới 3 tuổi chỉ đứng xem, không cầm hạt nhỏ."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Chơi “Tập tầm vông” 5 lượt với một người trong nhà",
        "Giấu một đồ vật khác và nói tên đồ vật đó bằng tiếng Việt"
      ],
      goiY: {
        nghe: "Câu rất ngắn (3–4 tiếng), hợp với bé mới học. Nhấn rõ hai thanh khác nhau: “có” (dấu sắc) và “không” (thanh ngang).",
        hieu: "Cặp từ trái nghĩa “có – không” là trọng tâm. Hỏi bé: “Tay này có hay không?” và để bé trả lời bằng cả câu: “Tay này có.”",
        nho: "Bài lặp lại nhiều; chỉ cần nhớ hai cặp “vông – không”, “vó – có” là thuộc.",
        choi: "Sau khi lật thẻ, chơi đoán tay thật và tập nói: “Tay trái có”, “Tay phải không”.",
        cungChoi: "Trò hợp lúc chờ đợi (trên xe, ở phòng khám). Người lớn nói chậm, cho bé hỏi bằng câu: “Tay nào có?”"
      }
    },

    {
      ma: "rong-ran-len-may", so: 6, phan: "dongdao", trangThai: "san-sang",
      ten: "Rồng rắn lên mây",
      en: "The dragon-snake",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản: “Có cây núc nắc”, “Có nhà hiển binh”, “Thầy thuốc có nhà hay không?”. Phần hỏi đáp giữa thầy thuốc và rồng rắn mỗi nơi nói một khác.",
      troChoi: "Rồng rắn",
      tempo: { cham: 76, vua: 100 },
      amThanh: true,
      loi: [
        "Rồng rắn lên mây",
        "Có cây lúc lắc",
        "Có nhà điểm binh",
        "Hỏi thăm thầy thuốc",
        "Có nhà hay không?"
      ],
      gioiThieu: {
        vi: "Các bạn xếp thành một hàng dài, tay đặt lên vai hoặc nắm áo bạn đứng trước, làm thành con rồng rắn. Bạn đứng đầu là đầu rồng, bạn cuối là đuôi. Một bạn làm thầy thuốc đứng riêng. Rồng rắn vừa đi lượn vừa đọc, đến hỏi thăm thầy thuốc. Sau vài câu hỏi đáp, thầy thuốc đuổi bắt khúc đuôi, còn đầu rồng dang tay che cho đuôi.",
        en: "Children line up, each holding the shoulders or shirt of the one in front, to make a long dragon-snake. The first is the head, the last is the tail. Another child is the doctor. The dragon-snake winds along chanting, then asks for the doctor. After a short question-and-answer, the doctor tries to catch the tail while the head spreads its arms to protect it."
      },
      tuKho: [
        { tu: "rồng rắn", hinh: "🐉", nghia: "con rồng dài như con rắn; ở đây là cả hàng các bạn nối đuôi nhau", en: "a dragon-snake: here, the whole line of children" },
        { tu: "lên mây", hinh: "☁️", nghia: "bay lên trời cao, tới chỗ có mây", en: "to fly up to the clouds" },
        { tu: "lúc lắc", hinh: "🌳", nghia: "đung đưa qua lại", en: "swinging, swaying" },
        { tu: "điểm binh", hinh: "💂", nghia: "đếm và xem lại quân lính (từ cũ)", en: "to count and inspect soldiers (old word)" },
        { tu: "hỏi thăm", hinh: "🗣️", nghia: "hỏi để biết tin một người", en: "to ask about someone" },
        { tu: "thầy thuốc", hinh: "🩺", nghia: "người chữa bệnh, bác sĩ", en: "a doctor, a healer" },
        { tu: "có nhà", hinh: "🏠", nghia: "đang ở nhà", en: "to be at home" }
      ],
      cauHoi: [
        { hoi: "Con rồng rắn trong trò chơi là gì?", en: "What is the dragon-snake in the game?",
          chon: [{ chu: "Các bạn nối đuôi nhau", hinh: "🧑‍🤝‍🧑" }, { chu: "Một con diều", hinh: "🪁" }, { chu: "Một sợi dây", hinh: "🪢" }], dung: 0 },
        { hoi: "Rồng rắn đi hỏi thăm ai?", en: "Whom does the dragon-snake ask for?",
          chon: [{ chu: "Thầy thuốc", hinh: "🩺" }, { chu: "Thầy giáo", hinh: "🧑‍🏫" }, { chu: "Ông bà", hinh: "👴" }], dung: 0 },
        { hoi: "Thầy thuốc là người làm gì?", en: "What does a doctor do?",
          chon: [{ chu: "Chữa bệnh", hinh: "💊" }, { chu: "Nấu cơm", hinh: "🍚" }, { chu: "Bán cá", hinh: "🐟" }], dung: 0 },
        { hoi: "Thầy thuốc muốn bắt ai?", en: "Whom does the doctor try to catch?",
          chon: [{ chu: "Bạn ở khúc đuôi", hinh: "🐍" }, { chu: "Bạn ở đầu", hinh: "🐲" }, { chu: "Người đứng xem", hinh: "👀" }], dung: 0 },
        { hoi: "Ai che cho khúc đuôi?", en: "Who protects the tail?",
          chon: [{ chu: "Bạn đầu rồng", hinh: "🛡️" }, { chu: "Thầy thuốc", hinh: "🩺" }, { chu: "Không ai cả", hinh: "🚫" }], dung: 0 }
      ],
      dienTu: [[0, "mây"], [1, "cây"], [1, "lắc"], [2, "binh"], [3, "thuốc"], [4, "nhà"]],
      nhieu: ["sông", "cá", "trâu", "mưa", "vườn"],
      vanCap: [["mây", "cây"], ["binh", "xinh"], ["nhà", "gà"], ["thăm", "năm"]],
      cungChoi: {
        ten: "Rồng rắn lên mây",
        nguoi: "Từ 5 bạn trở lên",
        cho: "Sân rộng, bãi cỏ hoặc sân trường",
        buoc: [
          { hinh: "🧑‍🤝‍🧑", chu: "Các bạn đứng thành hàng dọc, hai tay nắm vạt áo hoặc đặt lên vai bạn trước. Bạn đầu là đầu rồng, bạn cuối là khúc đuôi." },
          { hinh: "🩺", chu: "Một bạn làm thầy thuốc, đứng riêng một chỗ." },
          { hinh: "🐉", chu: "Rồng rắn vừa đi lượn vòng vừa đọc bài, đến trước mặt thầy thuốc." },
          { hinh: "🗣️", chu: "Thầy thuốc trả lời trêu: “Thầy thuốc đi chơi!”, “Thầy thuốc đang ngủ!”… Rồng rắn đi thêm một vòng rồi hỏi lại. Khi thầy thuốc nói “Có!”, hai bên hỏi đáp xin khúc đầu, khúc giữa, khúc đuôi." },
          { hinh: "🏃", chu: "Thầy thuốc chọn khúc đuôi và chạy đuổi bắt bạn ở đuôi. Đầu rồng dang tay chặn, cả hàng lượn theo, không để đứt hàng. Bắt được đuôi thì đổi vai." }
        ],
        en: "Line up holding the shoulders or shirt of the child in front – the first is the head, the last is the tail. One child is the doctor. The dragon-snake winds around chanting and stops at the doctor, who teases: “The doctor is out!”, “The doctor is asleep!”… When the doctor finally says “Yes!”, they bargain for the head, the middle and the tail. The doctor chooses the tail and chases it; the head spreads its arms to block, and the line must not break. Catch the tail and swap roles.",
        anToan: "Chơi trên sân bằng, không có vật cứng; chạy vừa phải, không kéo giật áo bạn; đông bạn thì chia thành nhiều con rồng ngắn."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Chơi “Rồng rắn lên mây” với các bạn trong giờ ra chơi",
        "Hỏi ông bà, cha mẹ: Ngày nhỏ, thầy thuốc trong trò chơi trả lời thế nào?"
      ],
      goiY: {
        nghe: "Đọc bài khi cả nhóm đang lượn theo hàng: mỗi tiếng một bước chân. Câu cuối là câu hỏi “Có nhà hay không?”.",
        hieu: "“Điểm binh” là từ cũ, chỉ cần hiểu là “đếm quân lính”. Nói thêm: “thầy thuốc” là cách gọi bác sĩ ngày xưa.",
        nho: "Bài ngắn, 5 câu. Học thuộc bằng cách chơi thật: đọc to mỗi lần rồng rắn đến hỏi thầy thuốc.",
        choi: "Hỏi bé: “Tiếng nào vần với ‘mây’?” (cây, bay, tay…).",
        cungChoi: "Trò vận động mạnh, hợp giờ ra chơi. Thầy cô có thể làm thầy thuốc ở lượt đầu để chỉ cách hỏi đáp và nhắc các bạn không kéo áo mạnh."
      }
    },

    {
      ma: "tha-dia-ba-ba", so: 7, phan: "dongdao", trangThai: "san-sang",
      ten: "Thả đỉa ba ba",
      en: "Catch me in the river",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản “Nhà nấy phải chịu”; có nơi đọc khác vài câu giữa bài.",
      troChoi: "Đuổi bắt",
      tempo: { cham: 76, vua: 100 },
      amThanh: true,
      loi: [
        "Thả đỉa ba ba",
        "Chớ bắt đàn bà",
        "Phải tội đàn ông",
        "Cơm trắng như bông",
        "Gạo tiền như nước",
        "Đổ mắm đổ muối",
        "Đổ chuối hạt tiêu",
        "Đổ niêu nước chè",
        "Đổ phải nhà nào",
        "Nhà ấy phải chịu"
      ],
      gioiThieu: {
        vi: "Đây là trò đuổi bắt dưới “sông”. Các bạn vẽ hai đường song song làm con sông. Một bạn làm “đỉa” ở dưới sông. Các bạn khác lội qua sông từ bờ này sang bờ kia; “đỉa” chạm vào ai đang ở dưới sông thì bạn ấy làm đỉa. Bài đồng dao dùng để chọn người làm đỉa: đọc đến tiếng “chịu” cuối bài, trúng bạn nào thì bạn ấy làm đỉa.",
        en: "A chasing game in a “river”. Draw two parallel lines on the ground as the river. One child is the leech (đỉa) in the river. The others wade across from one bank to the other; anyone the leech touches while in the river becomes the leech. The chant chooses the first leech: whoever is pointed at on the last word “chịu” is it."
      },
      tuKho: [
        { tu: "con đỉa", hinh: "🪱", nghia: "con vật nhỏ, mềm, sống dưới nước, hay bám vào chân người", en: "a leech, a small soft water animal that clings to legs" },
        { tu: "ba ba", hinh: "🐢", nghia: "con vật giống rùa, mai mềm, sống ở sông hồ", en: "a soft-shell turtle" },
        { tu: "chớ", hinh: "🚫", nghia: "đừng", en: "don't" },
        { tu: "trắng như bông", hinh: "☁️", nghia: "trắng tinh như bông gòn", en: "as white as cotton" },
        { tu: "hạt tiêu", hinh: "🌶️", nghia: "hạt nhỏ, cay, dùng để nêm món ăn", en: "black pepper" },
        { tu: "niêu", hinh: "🍲", nghia: "nồi đất nhỏ để nấu cơm, kho cá", en: "a small clay pot" },
        { tu: "nước chè", hinh: "🍵", nghia: "nước trà, pha từ lá chè", en: "tea" },
        { tu: "chịu", hinh: "🙋", nghia: "nhận phần của mình, phải làm", en: "to accept, to take your turn" }
      ],
      cauHoi: [
        { hoi: "Trong trò chơi, “đỉa” ở đâu?", en: "Where is the leech in the game?",
          chon: [{ chu: "Dưới sông", hinh: "🌊" }, { chu: "Trên cây", hinh: "🌳" }, { chu: "Trong nhà", hinh: "🏠" }], dung: 0 },
        { hoi: "Cơm trắng như gì?", en: "The rice is as white as what?",
          chon: [{ chu: "Như bông", hinh: "☁️" }, { chu: "Như than", hinh: "⚫" }, { chu: "Như lá", hinh: "🍃" }], dung: 0 },
        { hoi: "“Niêu” là gì?", en: "What is a “niêu”?",
          chon: [{ chu: "Nồi đất nhỏ", hinh: "🍲" }, { chu: "Cái ghế", hinh: "🪑" }, { chu: "Con cá", hinh: "🐟" }], dung: 0 },
        { hoi: "Bài đồng dao dùng để làm gì?", en: "What is the chant used for?",
          chon: [{ chu: "Chọn người làm đỉa", hinh: "👉" }, { chu: "Ru em ngủ", hinh: "😴" }, { chu: "Đếm tiền", hinh: "💰" }], dung: 0 },
        { hoi: "Bị “đỉa” chạm vào thì sao?", en: "What happens when the leech touches you?",
          chon: [{ chu: "Làm đỉa thay", hinh: "🔄" }, { chu: "Được về nhà", hinh: "🏠" }, { chu: "Được một sao", hinh: "⭐" }], dung: 0 }
      ],
      dienTu: [[0, "đỉa"], [3, "bông"], [4, "nước"], [5, "muối"], [6, "tiêu"], [7, "chè"], [9, "chịu"]],
      nhieu: ["sữa", "đường", "kẹo", "bánh", "cá"],
      vanCap: [["ba", "bà"], ["ông", "bông"], ["muối", "chuối"], ["tiêu", "niêu"], ["chè", "hè"]],
      cungChoi: {
        ten: "Thả đỉa ba ba",
        nguoi: "Từ 4 bạn trở lên",
        cho: "Sân rộng, bãi cỏ; vẽ hai vạch cách nhau khoảng 3–4 bước làm “sông”",
        buoc: [
          { hinh: "👉", chu: "Các bạn đứng thành vòng tròn. Một bạn vừa đọc bài vừa chỉ lần lượt vào từng bạn, mỗi tiếng một bạn. Tiếng “chịu” trúng ai thì bạn ấy làm “đỉa”." },
          { hinh: "🌊", chu: "Vẽ hai vạch làm hai bờ sông. “Đỉa” đứng giữa sông, các bạn khác đứng trên bờ." },
          { hinh: "🏃", chu: "Các bạn lội qua sông sang bờ bên kia. Đứng trên bờ thì an toàn, “đỉa” không được bắt." },
          { hinh: "🔄", chu: "“Đỉa” chạm được vào bạn nào đang ở dưới sông thì bạn ấy làm “đỉa” thay." }
        ],
        en: "Stand in a circle. One child chants and points to each player in turn, one per syllable; whoever gets the last word “chịu” is the leech. Draw two lines as the river banks. The leech stays in the river; the others cross from bank to bank. On the bank you are safe. If the leech touches you in the river, you become the leech.",
        anToan: "Chỉ chạm nhẹ bằng tay, không xô đẩy; sân bằng, không trơn; không chơi gần sông, hồ thật."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Dùng bài để chọn người làm “cái” trong một trò chơi khác",
        "Hỏi cha mẹ: Con đỉa sống ở đâu? Ở Việt Nam, đỉa có nhiều ở ruộng lúa không?"
      ],
      goiY: {
        nghe: "Câu 4 tiếng, nhịp đều; đọc mỗi tiếng chỉ một bạn để bé thấy đồng dao dùng để “đếm” chọn người.",
        hieu: "Bài nhắc nhiều thứ trong bếp ngày xưa: mắm, muối, hạt tiêu, niêu, nước chè. Cho bé xem hạt tiêu, nước mắm trong bếp nhà mình. Câu “Chớ bắt đàn bà / Phải tội đàn ông” chỉ đọc cho vần, không có ý chê ai.",
        nho: "Nhắc bé nhóm câu bắt đầu bằng “Đổ”: đổ mắm, đổ chuối, đổ niêu, đổ phải nhà nào.",
        choi: "Cặp vần muối – chuối, tiêu – niêu giúp bé nghe ra vần “uôi”, “iêu”. Hỏi thêm tiếng vần với “bông” (ông, sông, không…).",
        cungChoi: "Trò chạy nhiều, hợp giờ ra chơi. Với bé nhỏ vẽ “sông” hẹp, với bé lớn vẽ rộng hơn."
      }
    },

    {
      ma: "lon-cau-vong", so: 8, phan: "dongdao", trangThai: "san-sang",
      ten: "Lộn cầu vồng",
      en: "Rainbow turn",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản “Có em mười bảy”, “Cùng lộn cầu vồng”.",
      troChoi: "Lộn cầu vồng",
      tempo: { cham: 76, vua: 100 },
      amThanh: true,
      loi: [
        "Lộn cầu vồng",
        "Nước trong nước chảy",
        "Có cô mười bảy",
        "Có chị mười ba",
        "Hai chị em ta",
        "Ra lộn cầu vồng"
      ],
      gioiThieu: {
        vi: "Hai bạn đứng đối mặt, nắm hai tay nhau, vừa đọc vừa đung đưa tay sang hai bên theo nhịp. Đến câu cuối “Ra lộn cầu vồng”, hai bạn giơ tay lên cao rồi cùng chui qua dưới tay, xoay người quay lưng vào nhau mà không buông tay. Hai cánh tay cong lên trông như chiếc cầu vồng. Đọc lần nữa thì lộn trở lại.",
        en: "Two children stand face to face holding both hands and swing their arms side to side to the beat. On the last line, “Ra lộn cầu vồng”, they lift their arms and turn under them until they are back to back, without letting go. Their arched arms look like a rainbow. Chant again to turn back."
      },
      tuKho: [
        { tu: "lộn", hinh: "🔄", nghia: "xoay người, quay ngược lại", en: "to turn over, to flip around" },
        { tu: "cầu vồng", hinh: "🌈", nghia: "vòng cong nhiều màu trên trời sau cơn mưa", en: "rainbow" },
        { tu: "nước trong", hinh: "💧", nghia: "nước sạch, nhìn thấy tận đáy", en: "clear water" },
        { tu: "nước chảy", hinh: "🌊", nghia: "nước trôi đi, như nước sông, nước suối", en: "flowing water" },
        { tu: "cô", hinh: "👧", nghia: "cô gái; trong bài là cô gái mười bảy tuổi", en: "a young woman, here seventeen years old" },
        { tu: "mười bảy", hinh: "🔢", nghia: "số 17", en: "seventeen" },
        { tu: "chị em", hinh: "👭", nghia: "chị và em trong nhà, hoặc bạn thân như chị em", en: "sisters, or friends as close as sisters" }
      ],
      cauHoi: [
        { hoi: "Hai bạn chơi đứng thế nào?", en: "How do the two players stand?",
          chon: [{ chu: "Đối mặt, nắm hai tay", hinh: "🤝" }, { chu: "Ngồi xa nhau", hinh: "🪑" }, { chu: "Đứng một mình", hinh: "🧍" }], dung: 0 },
        { hoi: "Cô bao nhiêu tuổi?", en: "How old is the young woman?",
          chon: [{ chu: "Mười bảy", hinh: "🎂" }, { chu: "Mười ba", hinh: "🎈" }, { chu: "Hai mươi", hinh: "🎁" }], dung: 0 },
        { hoi: "Chị bao nhiêu tuổi?", en: "How old is the older sister?",
          chon: [{ chu: "Mười ba", hinh: "🎈" }, { chu: "Mười bảy", hinh: "🎂" }, { chu: "Năm tuổi", hinh: "🧸" }], dung: 0 },
        { hoi: "Hai tay giơ cao trông giống gì?", en: "What do the raised arms look like?",
          chon: [{ chu: "Cầu vồng", hinh: "🌈" }, { chu: "Cái cây", hinh: "🌳" }, { chu: "Con cá", hinh: "🐟" }], dung: 0 },
        { hoi: "Nước trong bài thế nào?", en: "What is the water like?",
          chon: [{ chu: "Trong và chảy", hinh: "💧" }, { chu: "Đục và đứng im", hinh: "🟫" }, { chu: "Đóng băng", hinh: "🧊" }], dung: 0 }
      ],
      dienTu: [[0, "vồng"], [1, "chảy"], [2, "bảy"], [3, "ba"], [4, "ta"], [5, "lộn"]],
      nhieu: ["mây", "năm", "anh", "trời", "đi"],
      vanCap: [["chảy", "bảy"], ["ba", "ta"], ["vồng", "sông"], ["em", "xem"]],
      cungChoi: {
        ten: "Lộn cầu vồng",
        nguoi: "2 bạn một đôi; nhiều đôi chơi cùng lúc càng vui",
        cho: "Chỗ trống rộng, trong nhà hoặc ngoài sân",
        buoc: [
          { hinh: "🤝", chu: "Hai bạn đứng đối mặt, nắm chặt hai tay nhau." },
          { hinh: "↔️", chu: "Vừa đọc vừa đung đưa hai tay sang trái, sang phải theo nhịp." },
          { hinh: "🌈", chu: "Đến câu “Ra lộn cầu vồng”, hai bạn giơ một bên tay lên cao, cùng cúi đầu chui qua, xoay người thành đứng quay lưng vào nhau, tay vẫn nắm." },
          { hinh: "🔁", chu: "Đọc lại bài, đến câu cuối thì lộn trở về đứng đối mặt." }
        ],
        en: "Stand face to face and hold both hands. Swing your arms left and right to the beat. On “Ra lộn cầu vồng”, lift one pair of arms high, duck under together and turn until you are back to back, still holding hands. Chant again and turn back to face each other.",
        anToan: "Xoay chậm, không vặn tay bạn; hai bạn cao gần bằng nhau thì dễ chơi hơn."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Chơi “Lộn cầu vồng” với anh chị em hoặc bạn bè, lộn 3 lần không buông tay",
        "Lần tới thấy cầu vồng trên trời, nói to bằng tiếng Việt: “Cầu vồng!”"
      ],
      goiY: {
        nghe: "Nhịp đung đưa tay giúp bé giữ nhịp 4 tiếng. Chú ý dấu thanh: “vồng” (dấu huyền), “chảy”, “bảy” (dấu hỏi).",
        hieu: "Dạy số đếm: mười ba, mười bảy. Hỏi bé: “Con bao nhiêu tuổi? Anh chị con bao nhiêu tuổi?”",
        nho: "Câu đầu và câu cuối gần giống nhau (lộn cầu vồng), giúp bé nhớ bài như một vòng tròn.",
        choi: "Cặp vần chảy – bảy có cùng dấu hỏi; cho bé nói thêm tiếng vần với “ba” (ta, nhà, gà…).",
        cungChoi: "Người lớn chơi với bé nhỏ thì quỳ xuống cho bằng chiều cao, xoay thật chậm."
      }
    },

    {
      ma: "xia-ca-me", so: 9, phan: "dongdao", trangThai: "san-sang",
      ten: "Xỉa cá mè",
      en: "Who is “it”?",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; nhiều nơi đọc tiếp thêm vài câu sau “Chân nào đen”, mỗi nơi một khác. Góc học dùng 5 câu đầu quen thuộc nhất.",
      troChoi: "Chọn người",
      tempo: { cham: 76, vua: 100 },
      amThanh: true,
      loi: [
        "Xỉa cá mè",
        "Đè cá chép",
        "Chân nào đẹp",
        "Đi buôn men",
        "Chân nào đen"
      ],
      gioiThieu: {
        vi: "Đây là bài đồng dao ngắn dùng để chọn người. Các bạn ngồi thành hàng, duỗi chân ra. Một bạn vừa đọc vừa chạm vào từng bàn chân, mỗi tiếng một chân. Tiếng “đen” cuối bài trúng chân nào thì chân đó rút về. Chơi tới khi còn lại một chân: bạn có chân ấy làm “cái” trong trò chơi tiếp theo. Cá mè, cá chép là hai loài cá quen thuộc ở ao làng Việt Nam.",
        en: "A short counting-out chant. Children sit in a row with legs out. One child chants and taps each foot, one per syllable. The foot tapped on the last word “đen” is pulled in. When only one foot is left, its owner is “it” for the next game. Silver carp (cá mè) and common carp (cá chép) are fish found in Vietnamese village ponds."
      },
      tuKho: [
        { tu: "xỉa", hinh: "👉", nghia: "chọc, chỉ nhanh vào", en: "to poke, to point quickly" },
        { tu: "cá mè", hinh: "🐟", nghia: "loài cá nước ngọt, thân dẹt, vảy trắng bạc, sống ở ao hồ", en: "silver carp, a pond fish" },
        { tu: "đè", hinh: "✋", nghia: "ấn, đặt lên trên", en: "to press down on" },
        { tu: "cá chép", hinh: "🎏", nghia: "loài cá ao quen thuộc, vảy vàng hoặc đỏ; ngày Ông Công ông Táo người ta thả cá chép", en: "common carp; families release carp on Kitchen Gods' Day" },
        { tu: "buôn", hinh: "🧺", nghia: "mua hàng về rồi bán lại", en: "to trade, to buy and sell" },
        { tu: "men", hinh: "🫙", nghia: "chất làm cho bột nở, làm cơm lên men", en: "yeast, which makes dough rise or rice ferment" }
      ],
      cauHoi: [
        { hoi: "Bài nói tên hai loài cá nào?", en: "Which two fish are named?",
          chon: [{ chu: "Cá mè, cá chép", hinh: "🐟" }, { chu: "Cá voi, cá mập", hinh: "🐋" }, { chu: "Cá heo, cá vàng", hinh: "🐬" }], dung: 0 },
        { hoi: "Chân nào đi buôn men?", en: "Which foot goes off to trade yeast?",
          chon: [{ chu: "Chân nào đẹp", hinh: "✨" }, { chu: "Chân nào đen", hinh: "🖤" }, { chu: "Chân nào to", hinh: "🦶" }], dung: 0 },
        { hoi: "Bài này dùng để làm gì?", en: "What is this chant used for?",
          chon: [{ chu: "Chọn người làm “cái”", hinh: "👉" }, { chu: "Ru em ngủ", hinh: "😴" }, { chu: "Đếm tiền", hinh: "💰" }], dung: 0 },
        { hoi: "“Buôn” nghĩa là gì?", en: "What does “buôn” mean?",
          chon: [{ chu: "Mua về rồi bán lại", hinh: "🧺" }, { chu: "Ngủ trưa", hinh: "😴" }, { chu: "Bơi dưới nước", hinh: "🏊" }], dung: 0 },
        { hoi: "Cá mè, cá chép sống ở đâu?", en: "Where do these fish live?",
          chon: [{ chu: "Ở ao, hồ", hinh: "🏞️" }, { chu: "Trên cây", hinh: "🌳" }, { chu: "Trong hang đá", hinh: "🪨" }], dung: 0 }
      ],
      dienTu: [[0, "mè"], [1, "Đè"], [1, "chép"], [2, "đẹp"], [3, "men"], [4, "đen"]],
      nhieu: ["rô", "trê", "bán", "xanh", "tay"],
      vanCap: [["mè", "đè"], ["chép", "đẹp"], ["men", "đen"], ["cá", "lá"], ["chân", "sân"]],
      cungChoi: {
        ten: "Xỉa cá mè (chọn người làm “cái”)",
        nguoi: "Từ 3 bạn trở lên",
        cho: "Ngồi thành hàng trên chiếu, thảm hoặc bậc thềm",
        buoc: [
          { hinh: "🧑‍🤝‍🧑", chu: "Các bạn ngồi thành hàng, duỗi thẳng hai chân ra trước." },
          { hinh: "👉", chu: "Một bạn vừa đọc vừa xỉa nhẹ vào từng bàn chân, mỗi tiếng một chân." },
          { hinh: "🦶", chu: "Tiếng “đen” trúng chân nào thì chân ấy rút lại." },
          { hinh: "🎯", chu: "Đọc tiếp từ chân kế bên, đến khi còn một chân. Bạn có chân cuối cùng làm “cái” cho trò chơi sau (bịt mắt bắt dê, trốn tìm…)." }
        ],
        en: "Sit in a row with legs stretched out. One child chants and taps each foot gently, one per syllable. The foot tapped on “đen” is pulled in. Keep going from the next foot until only one is left. That child is “it” for the next game, such as blind man's buff or hide-and-seek.",
        anToan: "Xỉa nhẹ bằng đầu ngón tay; không chọc vào mắt, vào mặt bạn."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Dùng bài “Xỉa cá mè” để chọn người làm “cái” khi chơi trốn tìm",
        "Cùng cha mẹ xem tranh hoặc ra chợ tìm cá chép, cá mè"
      ],
      goiY: {
        nghe: "Câu chỉ 3 tiếng, nhịp nhanh, rất hợp bé mới học. Chú ý dấu nặng ở “đẹp”, dấu sắc ở “chép”.",
        hieu: "Kể bé nghe về cá chép trong ngày Ông Công ông Táo (23 tháng Chạp âm lịch): nhiều nhà thả cá chép ra sông, hồ.",
        nho: "Ba cặp vần mè – đè, chép – đẹp, men – đen nối các câu với nhau; nhớ được vần là nhớ được bài.",
        choi: "Hỏi thêm: tiếng nào vần với “men”? (đen, quen, sen…).",
        cungChoi: "Đồng dao chọn người giúp các bé chia vai công bằng, không cãi nhau. Có thể dùng thay cho “oẳn tù tì”."
      }
    },

    {
      ma: "con-voi-con-voi", so: 10, phan: "dongdao", trangThai: "san-sang",
      ten: "Con vỏi con voi",
      en: "The elephant walk",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản “Còn cái đuôi đi sau rốt”.",
      troChoi: "Làm voi đi",
      tempo: { cham: 76, vua: 100 },
      amThanh: true,
      loi: [
        "Con vỏi con voi",
        "Cái vòi đi trước",
        "Hai chân trước đi trước",
        "Hai chân sau đi sau",
        "Còn cái đuôi thì đi sau rốt",
        "Tôi xin kể nốt",
        "Cái chuyện con voi"
      ],
      gioiThieu: {
        vi: "Bài đồng dao tả con voi đi: cái vòi đi trước, rồi đến hai chân trước, hai chân sau, cuối cùng là cái đuôi. “Con vỏi con voi” là cách đọc vui của trẻ em, như gọi thân mật “con voi”. Các bạn vừa đọc vừa làm động tác: một tay làm vòi, khom người bước đi chậm rãi như voi.",
        en: "A chant describing how an elephant walks: the trunk goes first, then the two front legs, then the two back legs, and the tail comes last of all. “Con vỏi con voi” is a playful way children say “elephant”. Act it out: one arm as the trunk, bend over and walk slowly like an elephant."
      },
      tuKho: [
        { tu: "con voi", hinh: "🐘", nghia: "con vật rất to, có vòi dài và hai ngà", en: "elephant" },
        { tu: "cái vòi", hinh: "👃", nghia: "cái mũi rất dài của con voi", en: "the elephant's trunk" },
        { tu: "đi trước", hinh: "⬅️", nghia: "đi ở phía đầu, đến trước", en: "to go first, in front" },
        { tu: "đi sau", hinh: "➡️", nghia: "đi ở phía sau, đến sau", en: "to go behind" },
        { tu: "cái đuôi", hinh: "〰️", nghia: "phần nhỏ và dài ở cuối thân con vật", en: "tail" },
        { tu: "sau rốt", hinh: "🔚", nghia: "sau cùng, cuối cùng", en: "last of all" },
        { tu: "kể nốt", hinh: "📖", nghia: "kể tiếp cho hết", en: "to finish telling" }
      ],
      cauHoi: [
        { hoi: "Bộ phận nào của voi đi trước tiên?", en: "Which part of the elephant goes first?",
          chon: [{ chu: "Cái vòi", hinh: "🐘" }, { chu: "Cái đuôi", hinh: "〰️" }, { chu: "Cái tai", hinh: "👂" }], dung: 0 },
        { hoi: "Cái gì đi sau rốt?", en: "What comes last of all?",
          chon: [{ chu: "Cái đuôi", hinh: "〰️" }, { chu: "Cái vòi", hinh: "🐘" }, { chu: "Hai chân trước", hinh: "🦶" }], dung: 0 },
        { hoi: "Con voi có mấy chân?", en: "How many legs does the elephant have?",
          chon: [{ chu: "Bốn chân", hinh: "🐘" }, { chu: "Hai chân", hinh: "🐔" }, { chu: "Sáu chân", hinh: "🐜" }], dung: 0 },
        { hoi: "“Sau rốt” nghĩa là gì?", en: "What does “sau rốt” mean?",
          chon: [{ chu: "Sau cùng", hinh: "🔚" }, { chu: "Trước tiên", hinh: "🔝" }, { chu: "Ở giữa", hinh: "⏺️" }], dung: 0 },
        { hoi: "Khi làm voi đi, tay các bạn làm gì?", en: "What does your arm do when you act like an elephant?",
          chon: [{ chu: "Làm cái vòi", hinh: "💪" }, { chu: "Làm đôi cánh", hinh: "🕊️" }, { chu: "Làm cái mỏ", hinh: "🐤" }], dung: 0 }
      ],
      dienTu: [[0, "voi"], [1, "vòi"], [2, "trước"], [3, "sau"], [4, "đuôi"], [5, "nốt"], [6, "chuyện"]],
      nhieu: ["tai", "ngà", "mèo", "nhanh", "đầu"],
      vanCap: [["voi", "vòi"], ["rốt", "nốt"], ["sau", "mau"], ["đuôi", "nuôi"], ["chân", "sân"]],
      cungChoi: {
        ten: "Làm voi đi",
        nguoi: "1 bạn trở lên; cả lớp chơi được",
        cho: "Trong nhà hoặc ngoài sân",
        buoc: [
          { hinh: "🐘", chu: "Mỗi bạn khom người, buông một cánh tay xuống trước mặt làm vòi, tay kia vòng ra sau làm đuôi." },
          { hinh: "🚶", chu: "Vừa đọc vừa bước chậm, nặng nề như voi, mỗi tiếng một bước." },
          { hinh: "🧑‍🤝‍🧑", chu: "Đông bạn thì xếp thành đàn voi: “vòi” của bạn sau nắm “đuôi” (bàn tay) của bạn trước." },
          { hinh: "🛑", chu: "Đến câu “Cái chuyện con voi”, cả đàn đứng lại, giơ vòi lên cao và kêu to một tiếng như voi." }
        ],
        en: "Bend forward and let one arm hang in front as a trunk, with the other hand behind you as a tail. Walk slowly and heavily like an elephant, one step per syllable. With a group, make an elephant parade: each trunk holds the “tail” hand of the child in front. On the last line, everyone stops, raises their trunk and trumpets.",
        anToan: "Đi chậm, nhìn đường; đàn voi đi vòng ở chỗ rộng, không chen đẩy."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Làm “đàn voi” đi quanh nhà với cả nhà",
        "Vẽ con voi và chỉ bằng tiếng Việt: vòi, chân trước, chân sau, đuôi"
      ],
      goiY: {
        nghe: "Câu dài ngắn khác nhau (4 đến 8 tiếng); để bé đọc chậm, mỗi tiếng một bước chân như voi.",
        hieu: "Dạy cặp từ trái nghĩa “trước – sau”. Dùng đồ chơi con voi hoặc tranh để chỉ: vòi, chân trước, chân sau, đuôi.",
        nho: "Bài đi theo thứ tự cơ thể con voi từ đầu đến đuôi; nhớ thứ tự là nhớ bài.",
        choi: "Hỏi thêm: “Tiếng nào vần với ‘voi’?” (vòi, coi, soi…).",
        cungChoi: "Trò hợp cho bé nhỏ, vận động nhẹ trong nhà. Thầy cô dùng làm hoạt động chuyển tiết."
      }
    },

    {
      ma: "ba-cong-di-cho", so: 11, phan: "dongdao", trangThai: "san-sang",
      ten: "Bà còng đi chợ trời mưa",
      en: "Granny goes to market",
      nguon: "Đồng dao, ca dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản “Đưa bà qua quãng đường cong”. Lời bài là ca dao, đồng dao dân gian; các bản phổ nhạc có tác giả không dùng ở đây.",
      troChoi: "Đóng vai",
      tempo: { cham: 72, vua: 96 },
      amThanh: false,
      loi: [
        "Bà còng đi chợ trời mưa",
        "Cái tôm cái tép đi đưa bà còng",
        "Đưa bà đến quãng đường cong",
        "Đưa bà vào tận ngõ trong nhà bà",
        "Tiền bà trong túi rơi ra",
        "Tép tôm nhặt được trả bà mua rau"
      ],
      gioiThieu: {
        vi: "Bà còng đi chợ gặp trời mưa. Cái tôm, cái tép tốt bụng đi theo đưa bà về nhà, qua quãng đường cong, vào tận ngõ. Tiền trong túi bà rơi ra, tôm tép nhặt được liền trả lại bà để bà mua rau. Bài viết theo thể thơ lục bát: một câu 6 tiếng, một câu 8 tiếng. Bài khen những người tốt bụng, thật thà, biết giúp đỡ người già.",
        en: "A bent-backed granny goes to market in the rain. A kind shrimp and a little shrimp walk her home, along the curving road and all the way into her lane. Her money falls out of her pocket; the shrimps pick it up and give it back so she can buy vegetables. The poem uses the lục bát form: a 6-syllable line, then an 8-syllable line. It praises kindness, honesty and helping older people."
      },
      tuKho: [
        { tu: "còng", hinh: "👵", nghia: "lưng cong xuống vì già", en: "bent over with age" },
        { tu: "con tôm", hinh: "🦐", nghia: "con vật nhỏ ở dưới nước, có râu dài, nhiều chân", en: "shrimp" },
        { tu: "con tép", hinh: "🦐", nghia: "con tôm rất nhỏ", en: "a tiny shrimp" },
        { tu: "đưa", hinh: "🤝", nghia: "đi cùng ai để giúp, để dẫn đường", en: "to walk someone somewhere, to accompany" },
        { tu: "quãng đường", hinh: "🛣️", nghia: "một đoạn đường", en: "a stretch of road" },
        { tu: "ngõ", hinh: "🏘️", nghia: "đường nhỏ dẫn vào nhà", en: "a lane leading to a house" },
        { tu: "nhặt", hinh: "✋", nghia: "cúi xuống lấy vật rơi dưới đất", en: "to pick up" },
        { tu: "trả", hinh: "💝", nghia: "đưa lại cho người chủ", en: "to give back" }
      ],
      cauHoi: [
        { hoi: "Bà còng đi đâu?", en: "Where is the granny going?",
          chon: [{ chu: "Đi chợ", hinh: "🧺" }, { chu: "Đi học", hinh: "🎒" }, { chu: "Đi ngủ", hinh: "😴" }], dung: 0 },
        { hoi: "Trời thế nào?", en: "What is the weather like?",
          chon: [{ chu: "Trời mưa", hinh: "🌧️" }, { chu: "Trời nắng", hinh: "☀️" }, { chu: "Trời có tuyết", hinh: "❄️" }], dung: 0 },
        { hoi: "Ai đưa bà về?", en: "Who walks the granny home?",
          chon: [{ chu: "Cái tôm, cái tép", hinh: "🦐" }, { chu: "Con mèo, con chó", hinh: "🐱" }, { chu: "Con gà, con vịt", hinh: "🐔" }], dung: 0 },
        { hoi: "Cái gì trong túi bà rơi ra?", en: "What falls out of granny's pocket?",
          chon: [{ chu: "Tiền", hinh: "💰" }, { chu: "Kẹo", hinh: "🍬" }, { chu: "Chìa khoá", hinh: "🔑" }], dung: 0 },
        { hoi: "Tôm tép làm gì với tiền?", en: "What do the shrimps do with the money?",
          chon: [{ chu: "Trả lại bà", hinh: "💝" }, { chu: "Mua kẹo", hinh: "🍬" }, { chu: "Giấu đi", hinh: "🙈" }], dung: 0 }
      ],
      dienTu: [[0, "mưa"], [1, "tép"], [2, "cong"], [3, "ngõ"], [4, "túi"], [5, "nhặt"], [5, "rau"]],
      nhieu: ["nắng", "cá", "thịt", "bánh", "sông"],
      vanCap: [["mưa", "đưa"], ["còng", "cong"], ["ra", "bà"], ["rau", "sau"], ["tép", "chép"]],
      cungChoi: {
        ten: "Đóng vai bà còng đi chợ",
        nguoi: "Từ 3 bạn trở lên: một bạn làm bà còng, hai bạn làm tôm và tép",
        cho: "Trong nhà hoặc lớp học; một cái giỏ, vài tờ giấy làm tiền",
        buoc: [
          { hinh: "👵", chu: "Một bạn làm bà còng: khom lưng, xách giỏ, chống gậy (một cuộn giấy)." },
          { hinh: "🦐", chu: "Hai bạn làm tôm và tép, đi hai bên dìu bà." },
          { hinh: "🌧️", chu: "Cả lớp đọc bài; “bà” và “tôm tép” đi theo lời: qua quãng đường cong, vào ngõ." },
          { hinh: "💝", chu: "Đến câu “Tiền bà trong túi rơi ra”, “bà” thả tờ giấy xuống; tôm tép nhặt lên, trả bà và nói: “Bà ơi, tiền của bà đây ạ!” Bà đáp: “Bà cảm ơn các cháu!”" }
        ],
        en: "One child is the granny: bend over, carry a basket, lean on a rolled-paper stick. Two children are the shrimps and walk on each side to help her. Everyone chants while the actors follow the words: along the curving road, into the lane. At “Tiền bà trong túi rơi ra”, granny drops a paper “coin”; the shrimps pick it up, give it back and say “Bà ơi, tiền của bà đây ạ!” Granny answers “Bà cảm ơn các cháu!”",
        anToan: "Dùng gậy giả nhẹ (cuộn giấy), đi chậm, không kéo tay “bà”."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Giúp ông bà hoặc cha mẹ một việc nhỏ khi đi chợ (xách giỏ, cầm túi rau)",
        "Nói được câu: “Bà ơi, tiền của bà đây ạ!”"
      ],
      goiY: {
        nghe: "Đây là thể thơ lục bát: câu 6 tiếng, câu 8 tiếng. Gõ nhịp chậm, cho bé ngắt hơi sau mỗi câu.",
        hieu: "Nói chuyện với bé về lòng tốt và sự thật thà: nhặt được của rơi thì trả lại người mất. Hỏi bé đã bao giờ giúp ông bà chưa.",
        nho: "Vần lục bát nối câu: “mưa” ở cuối câu 6 tiếng vần với “đưa” ở tiếng thứ sáu của câu 8 tiếng. Chỉ cho bé thấy cách vần này.",
        choi: "Cho bé tìm thêm tiếng vần với “mưa” (đưa, trưa, dưa…) và với “bà” (ra, nhà, hoa…).",
        cungChoi: "Đây là hoạt động đóng vai theo lời bài, hợp lớp học. Thầy cô nhấn mạnh câu nói lễ phép có “ạ” khi nói với người lớn."
      }
    },

    {
      ma: "ong-giang-ong-giang", so: 12, phan: "dongdao", trangThai: "san-sang",
      ten: "Ông giẳng ông giăng",
      en: "Mister Moon",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; góc học lấy 6 câu đầu. Bài đủ còn dài và mỗi nơi đọc tiếp một khác. “Giăng” là cách nói của một số vùng miền Bắc, nghĩa là “trăng”.",
      troChoi: "Ngắm trăng Trung thu",
      tempo: { cham: 76, vua: 100 },
      amThanh: false,
      loi: [
        "Ông giẳng ông giăng",
        "Xuống chơi với tôi",
        "Có bầu có bạn",
        "Có ván cơm xôi",
        "Có nồi cơm nếp",
        "Có nệp bánh chưng"
      ],
      gioiThieu: {
        vi: "Các bạn nhỏ gọi ông trăng là “ông giăng” và mời ông trăng xuống chơi. Để mời khách, các bạn kể ra nhiều món ngon: ván cơm xôi, nồi cơm nếp, nệp bánh chưng. Đây là bài đồng dao các bạn hay đọc khi ngồi ngắm trăng, nhất là đêm Trung thu (rằm tháng Tám âm lịch).",
        en: "Children call the moon “ông giăng” (Mister Moon) and invite him to come down and play. To welcome their guest, they list lots of good food: a tray of sticky rice, a pot of sticky rice, a row of square rice cakes. Children often say this chant while moon-gazing, especially at the Mid-Autumn Festival (the 15th day of the 8th lunar month)."
      },
      tuKho: [
        { tu: "ông giăng", hinh: "🌕", nghia: "ông trăng; “giăng” là cách nói “trăng” ở một số vùng miền Bắc", en: "Mister Moon; “giăng” means “trăng” (moon) in some northern dialects" },
        { tu: "bầu bạn", hinh: "👫", nghia: "bạn bè cùng chơi, cùng trò chuyện", en: "friends, company" },
        { tu: "ván", hinh: "🪵", nghia: "tấm gỗ phẳng; ở đây là một mâm, một khay to", en: "a wooden board; here, a big tray" },
        { tu: "cơm xôi", hinh: "🍙", nghia: "xôi, gạo nếp đồ chín", en: "sticky rice" },
        { tu: "cơm nếp", hinh: "🍚", nghia: "cơm nấu bằng gạo nếp, dẻo và thơm", en: "rice cooked from sticky (glutinous) rice" },
        { tu: "nệp", hinh: "📚", nghia: "một dãy, một chồng (bánh) xếp vào nhau", en: "a row or stack (of cakes)" },
        { tu: "bánh chưng", hinh: "🟩", nghia: "bánh gạo nếp hình vuông, gói lá dong, có đậu xanh và thịt; ăn vào dịp Tết", en: "square sticky rice cake wrapped in leaves, eaten at Tết" }
      ],
      cauHoi: [
        { hoi: "“Ông giăng” là ai?", en: "Who is “ông giăng”?",
          chon: [{ chu: "Ông trăng", hinh: "🌕" }, { chu: "Ông mặt trời", hinh: "☀️" }, { chu: "Ông nội", hinh: "👴" }], dung: 0 },
        { hoi: "Các bạn mời ông giăng làm gì?", en: "What do the children invite the moon to do?",
          chon: [{ chu: "Xuống chơi", hinh: "🎈" }, { chu: "Đi ngủ", hinh: "😴" }, { chu: "Đi học", hinh: "🎒" }], dung: 0 },
        { hoi: "Bánh nào có trong bài?", en: "Which cake is in the chant?",
          chon: [{ chu: "Bánh chưng", hinh: "🟩" }, { chu: "Bánh mì", hinh: "🥖" }, { chu: "Bánh kem", hinh: "🎂" }], dung: 0 },
        { hoi: "Cơm xôi, cơm nếp nấu bằng gì?", en: "What are these made from?",
          chon: [{ chu: "Gạo nếp", hinh: "🌾" }, { chu: "Bột mì", hinh: "🥐" }, { chu: "Khoai tây", hinh: "🥔" }], dung: 0 },
        { hoi: "Các bạn nhỏ hay đọc bài này vào dịp nào?", en: "When do children often say this chant?",
          chon: [{ chu: "Đêm Trung thu", hinh: "🏮" }, { chu: "Sáng Chủ nhật", hinh: "🌅" }, { chu: "Giờ ăn trưa", hinh: "🍽️" }], dung: 0 }
      ],
      dienTu: [[0, "giăng"], [1, "chơi"], [2, "bạn"], [3, "xôi"], [4, "nếp"], [5, "chưng"]],
      nhieu: ["trời", "sao", "kẹo", "gà", "mây"],
      vanCap: [["tôi", "xôi"], ["bạn", "ván"], ["nếp", "nệp"], ["giăng", "trăng"], ["chưng", "mừng"]],
      cungChoi: {
        ten: "Ngắm trăng, rước đèn Trung thu",
        nguoi: "Cả nhà, cả lớp",
        cho: "Ngoài sân, ban công hoặc bên cửa sổ vào đêm trăng sáng",
        buoc: [
          { hinh: "🌕", chu: "Chọn một đêm trăng sáng (đêm rằm). Cả nhà ra sân hoặc ngồi bên cửa sổ ngắm trăng." },
          { hinh: "🏮", chu: "Mỗi bạn cầm một chiếc đèn lồng (đèn ông sao, đèn giấy), đi thành hàng vòng quanh sân." },
          { hinh: "🎶", chu: "Vừa đi vừa đọc “Ông giẳng ông giăng”, mỗi tiếng một bước." },
          { hinh: "🥮", chu: "Đọc xong, cả nhà ngồi “phá cỗ”: chia bánh trung thu, hoa quả; mỗi bạn kể một món mình muốn mời ông trăng." }
        ],
        en: "On a bright full-moon night, go outside or sit by a window to look at the moon. Each child carries a lantern and walks in a line around the yard, chanting one step per syllable. Afterwards the family shares mooncakes and fruit (“phá cỗ”), and each child names a food they would offer Mister Moon.",
        anToan: "Dùng đèn lồng có đèn pin hoặc đèn điện, không dùng nến khi bé tự cầm; người lớn đi cùng khi ra sân buổi tối."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Ngắm trăng cùng gia đình và nói bằng tiếng Việt: “Trăng tròn quá!”",
        "Kể tên 3 món ăn ngày Tết hoặc Trung thu bằng tiếng Việt"
      ],
      goiY: {
        nghe: "Câu 4 tiếng, nhịp đều như bước chân rước đèn. Chú ý “giẳng” (dấu hỏi) và “giăng” (thanh ngang).",
        hieu: "Giải thích “giăng” là “trăng” theo cách nói của một số vùng miền Bắc. Kể bé nghe về Tết Trung thu: rước đèn, ăn bánh trung thu, ngắm trăng.",
        nho: "Các câu “Có…” lặp lại; bé chỉ cần nhớ thứ tự món ăn: cơm xôi, cơm nếp, bánh chưng.",
        choi: "Cặp “giăng – trăng” cùng vần “ăng” và cùng một nghĩa: hai cách nói của hai vùng. Chỉ cho bé thấy điều thú vị này.",
        cungChoi: "Gắn bài với dịp Trung thu của cộng đồng người Việt nơi gia đình sống, hoặc bất kỳ đêm trăng tròn nào."
      }
    },

    /* ================= PHẦN 2 – VÈ ================= */
    {
      ma: "ve-chim", so: 13, phan: "ve", trangThai: "san-sang",
      ten: "Vè chim",
      en: "The bird rhyme",
      nguon: "Vè dân gian Việt Nam",
      diBan: "Bản phổ biến (bản quen thuộc trong sách Tiếng Việt lớp 2); có dị bản. Góc học lấy 16 câu đầu; bài đủ còn có cô tu hú và bác cú mèo.",
      troChoi: "Đố tên chim",
      tempo: { cham: 84, vua: 108 },
      amThanh: false,
      loi: [
        "Hay chạy lon xon",
        "Là gà mới nở",
        "Vừa đi vừa nhảy",
        "Là em sáo xinh",
        "Hay nói linh tinh",
        "Là con liếu điếu",
        "Hay nghịch hay tếu",
        "Là cậu chìa vôi",
        "Hay chao đớp mồi",
        "Là chim chèo bẻo",
        "Tính hay mách lẻo",
        "Thím khách trước nhà",
        "Hay nhặt lân la",
        "Là bà chim sẻ",
        "Có tình có nghĩa",
        "Là mẹ chim sâu"
      ],
      gioiThieu: {
        vi: "Bài vè kể về các loài chim, mỗi loài một nết. Câu trước tả đặc điểm, câu sau nói tên: chạy lon xon là gà mới nở, vừa đi vừa nhảy là chim sáo, hay nói linh tinh là liếu điếu… Các loài chim được gọi như người trong nhà: em sáo, cậu chìa vôi, thím khách, bà chim sẻ, mẹ chim sâu. Vè chim vừa vui vừa giúp các bạn nhớ tên nhiều loài chim ở làng quê Việt Nam.",
        en: "A folk list-rhyme about birds, each with its own personality. One line describes, the next names the bird: running about is the newly hatched chick, hopping as it walks is the myna, chattering away is the liếu điếu… The birds are called like family members: little sister myna, uncle wagtail, auntie treepie, granny sparrow, mother flowerpecker. It is a fun way to learn the names of many birds of the Vietnamese countryside."
      },
      tuKho: [
        { tu: "lon xon", hinh: "🐥", nghia: "chạy bước ngắn và nhanh, lăng xăng", en: "running about with quick little steps" },
        { tu: "linh tinh", hinh: "💬", nghia: "đủ thứ chuyện, không đâu vào đâu", en: "about all sorts of things, chatter" },
        { tu: "tếu", hinh: "😄", nghia: "vui, hay pha trò", en: "jokey, playful" },
        { tu: "chao", hinh: "🕊️", nghia: "nghiêng cánh bay lượn qua lại", en: "to swoop, to tilt in the air" },
        { tu: "đớp mồi", hinh: "🐛", nghia: "há mỏ bắt lấy thức ăn thật nhanh", en: "to snap up food" },
        { tu: "mách lẻo", hinh: "🤫", nghia: "đem chuyện của người này kể cho người khác", en: "to tell tales, to tattle" },
        { tu: "lân la", hinh: "🚶", nghia: "đi lại gần dần dần", en: "to come closer little by little" },
        { tu: "có tình có nghĩa", hinh: "💗", nghia: "thương yêu và tốt với mọi người", en: "loving and loyal, kind to others" }
      ],
      cauHoi: [
        { hoi: "Con gì hay chạy lon xon?", en: "Who runs about with quick little steps?",
          chon: [{ chu: "Gà mới nở", hinh: "🐥" }, { chu: "Chim sẻ", hinh: "🐦" }, { chu: "Chèo bẻo", hinh: "🐦‍⬛" }], dung: 0 },
        { hoi: "Em sáo đi thế nào?", en: "How does the myna move?",
          chon: [{ chu: "Vừa đi vừa nhảy", hinh: "🦘" }, { chu: "Bơi dưới nước", hinh: "🏊" }, { chu: "Nằm ngủ", hinh: "😴" }], dung: 0 },
        { hoi: "Con chim nào hay nói linh tinh?", en: "Which bird chatters away?",
          chon: [{ chu: "Liếu điếu", hinh: "💬" }, { chu: "Chim sâu", hinh: "🐦" }, { chu: "Gà mới nở", hinh: "🐥" }], dung: 0 },
        { hoi: "Chèo bẻo có tính gì?", en: "What is the drongo like?",
          chon: [{ chu: "Hay mách lẻo", hinh: "🤫" }, { chu: "Hay ngủ", hinh: "😴" }, { chu: "Hay khóc", hinh: "😢" }], dung: 0 },
        { hoi: "Ai có tình có nghĩa?", en: "Who is loving and loyal?",
          chon: [{ chu: "Mẹ chim sâu", hinh: "💗" }, { chu: "Cậu chìa vôi", hinh: "🐦" }, { chu: "Thím khách", hinh: "🏠" }], dung: 0 }
      ],
      dienTu: [[0, "xon"], [1, "nở"], [3, "xinh"], [5, "điếu"], [7, "vôi"], [9, "bẻo"], [13, "sẻ"]],
      nhieu: ["cò", "vịt", "ngủ", "bay", "quạ"],
      vanCap: [["xinh", "tinh"], ["vôi", "mồi"], ["bẻo", "lẻo"], ["nhà", "la"], ["xon", "con"], ["sâu", "mau"]],
      cungChoi: {
        ten: "Đố tên chim (đọc vè đối đáp)",
        nguoi: "2 nhóm, hoặc một người lớn và bé",
        cho: "Ở đâu cũng chơi được",
        buoc: [
          { hinh: "👥", chu: "Chia làm hai nhóm: nhóm Hỏi và nhóm Đáp." },
          { hinh: "❓", chu: "Nhóm Hỏi đọc câu tả, giọng như câu đố: “Hay chạy lon xon?”" },
          { hinh: "🐥", chu: "Nhóm Đáp đọc ngay câu tên: “Là gà mới nở!” và làm động tác con chim đó." },
          { hinh: "🔄", chu: "Đọc hết bài thì đổi vai. Lượt sau nhóm Hỏi đọc lộn thứ tự để khó hơn." }
        ],
        en: "Split into two groups: Askers and Answerers. Askers say a describing line like a riddle: “Hay chạy lon xon?” Answerers reply at once with the naming line – “Là gà mới nở!” – and act out the bird. At the end, swap roles. Next round, ask in a mixed-up order to make it harder.",
        anToan: "Làm động tác chim bay ở chỗ rộng, dang tay không chạm vào bạn."
      },
      thuThach: [
        "Đọc thuộc 8 câu đầu cho ông bà hoặc cha mẹ nghe",
        "Chơi đố tên chim với một người trong nhà",
        "Nhìn ra cửa sổ hoặc ra công viên, tìm một con chim và nói tên nó bằng tiếng Việt"
      ],
      goiY: {
        nghe: "Vè đọc nhanh, vui, mỗi câu 4 tiếng. Câu tả đọc lên giọng như câu đố, câu tên đọc dứt khoát.",
        hieu: "Vè gọi chim như gọi người: em, cậu, thím, bà, mẹ. Đây là dịp ôn cách xưng hô trong gia đình Việt. Nếu có thể, tìm tranh các loài chim để bé xem.",
        nho: "Học theo cặp câu: một câu tả, một câu tên. Thuộc 2–4 câu mỗi ngày là đủ.",
        choi: "Cho bé tự đặt một cặp câu vè về con vật nhà mình, ví dụ: “Hay nằm sưởi nắng / Là chú mèo con”.",
        cungChoi: "Trò đối đáp giúp bé phản xạ nhanh. Ở lớp, chia hai dãy bàn đối đáp; ở nhà, người lớn hỏi, bé đáp."
      }
    },

    {
      ma: "ve-ca", so: 14, phan: "ve", trangThai: "san-sang",
      ten: "Con mèo mà trèo cây cau",
      en: "The cat and the mouse",
      nguon: "Đồng dao, ca dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản “Chú chuột đi chợ đằng xa”.",
      troChoi: "Mèo đuổi chuột",
      tempo: { cham: 72, vua: 96 },
      amThanh: false,
      loi: [
        "Con mèo mà trèo cây cau",
        "Hỏi thăm chú chuột đi đâu vắng nhà",
        "Chú chuột đi chợ đường xa",
        "Mua mắm mua muối giỗ cha chú mèo"
      ],
      gioiThieu: {
        vi: "Con mèo trèo lên cây cau, hỏi thăm chú chuột đi đâu mà vắng nhà. Câu trả lời thật buồn cười: chú chuột đi chợ đường xa, mua mắm mua muối để làm giỗ cha của… chú mèo! Mèo hay bắt chuột, nên chuột trốn đi và nói đùa cho vui. Bài viết theo thể lục bát (câu 6 tiếng, câu 8 tiếng), đọc nhẹ nhàng như kể chuyện.",
        en: "A cat climbs an areca palm and asks where the mouse has gone, since no one is home. The funny answer: the mouse has gone to a faraway market to buy fish sauce and salt for the memorial feast of… the cat's father! Cats chase mice, so the mouse stays away and makes a cheeky joke. It is written in lục bát verse (a 6-syllable line, then an 8-syllable line) and read gently, like telling a story."
      },
      tuKho: [
        { tu: "trèo", hinh: "🧗", nghia: "leo lên cao bằng tay chân", en: "to climb" },
        { tu: "cây cau", hinh: "🌴", nghia: "cây thân thẳng và cao, quả nhỏ; ngày xưa người ta ăn quả cau với lá trầu", en: "areca palm; its nuts were chewed with betel leaves" },
        { tu: "hỏi thăm", hinh: "🗣️", nghia: "hỏi để biết tin", en: "to ask after someone" },
        { tu: "vắng nhà", hinh: "🏚️", nghia: "không có ở nhà", en: "not at home" },
        { tu: "mắm", hinh: "🐟", nghia: "món làm từ cá hoặc tôm ướp muối lâu ngày, như nước mắm", en: "fermented fish or shrimp sauce, like fish sauce" },
        { tu: "muối", hinh: "🧂", nghia: "hạt trắng, mặn, dùng nêm thức ăn", en: "salt" },
        { tu: "giỗ", hinh: "🕯️", nghia: "ngày nhớ người thân đã mất; cả nhà nấu cơm, mời họ hàng đến", en: "a memorial day for a family member who has died; the family cooks a meal and invites relatives" }
      ],
      cauHoi: [
        { hoi: "Con mèo trèo lên cây gì?", en: "What tree does the cat climb?",
          chon: [{ chu: "Cây cau", hinh: "🌴" }, { chu: "Cây chuối", hinh: "🍌" }, { chu: "Cây tre", hinh: "🎋" }], dung: 0 },
        { hoi: "Mèo hỏi thăm ai?", en: "Whom does the cat ask about?",
          chon: [{ chu: "Chú chuột", hinh: "🐭" }, { chu: "Chú chó", hinh: "🐶" }, { chu: "Chú gà", hinh: "🐔" }], dung: 0 },
        { hoi: "Chú chuột đi đâu?", en: "Where did the mouse go?",
          chon: [{ chu: "Đi chợ", hinh: "🧺" }, { chu: "Đi học", hinh: "🎒" }, { chu: "Đi ngủ", hinh: "😴" }], dung: 0 },
        { hoi: "Chú chuột mua gì?", en: "What does the mouse buy?",
          chon: [{ chu: "Mắm và muối", hinh: "🧂" }, { chu: "Kẹo và bánh", hinh: "🍬" }, { chu: "Sữa", hinh: "🥛" }], dung: 0 },
        { hoi: "Vì sao chú chuột trốn đi?", en: "Why does the mouse stay away?",
          chon: [{ chu: "Vì mèo hay bắt chuột", hinh: "🐱" }, { chu: "Vì trời mưa", hinh: "🌧️" }, { chu: "Vì chuột đói", hinh: "🍽️" }], dung: 0 }
      ],
      dienTu: [[0, "cau"], [1, "chuột"], [1, "nhà"], [2, "chợ"], [2, "xa"], [3, "muối"], [3, "mèo"]],
      nhieu: ["chó", "trường", "gạo", "gần", "cá"],
      vanCap: [["trèo", "mèo"], ["nhà", "cha"], ["cau", "sau"], ["chuột", "ruột"], ["muối", "chuối"], ["mắm", "tắm"]],
      cungChoi: {
        ten: "Mèo đuổi chuột",
        nguoi: "Từ 6 bạn trở lên",
        cho: "Sân rộng hoặc phòng lớn",
        buoc: [
          { hinh: "🧑‍🤝‍🧑", chu: "Các bạn nắm tay nhau đứng thành vòng tròn rộng, giơ tay cao làm “lỗ hổng” giữa hai người." },
          { hinh: "🐭", chu: "Chọn một bạn làm chuột đứng trong vòng, một bạn làm mèo đứng ngoài vòng." },
          { hinh: "🎶", chu: "Cả vòng đọc bài “Con mèo mà trèo cây cau”. Đọc hết bài thì chuột chạy, luồn qua các lỗ hổng; mèo đuổi theo." },
          { hinh: "🔁", chu: "Mèo phải chạy đúng đường chuột đã chạy. Mèo bắt được chuột thì hai bạn đổi vai, hoặc chọn hai bạn khác." }
        ],
        en: "Hold hands in a wide circle with arms raised to make gaps. One child is the mouse inside the circle, one is the cat outside. Everyone chants; at the end the mouse runs, weaving in and out through the gaps, and the cat chases, following exactly the mouse's path. When the cat catches the mouse, they swap roles or two new children play. (This game also has its own chant, “Mèo đuổi chuột”.)",
        anToan: "Chạy vừa phải; các bạn đứng vòng không ngáng chân mèo hay chuột."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Chơi “Mèo đuổi chuột” cùng các bạn",
        "Tìm trong bếp nhà mình chai nước mắm và hũ muối, rồi nói tên bằng tiếng Việt"
      ],
      goiY: {
        nghe: "Thể lục bát: câu 6 tiếng, câu 8 tiếng. Đọc như kể chuyện, ngừng một chút trước câu cuối để bé chờ đoạn buồn cười.",
        hieu: "Giải thích “giỗ”: ngày cả nhà nhớ người thân đã mất. Câu đùa ở chỗ chuột lấy cớ đi mua đồ làm giỗ cha của mèo để trốn mèo.",
        nho: "Câu 2 và câu 3 đều có “chú chuột”; câu 1 và câu 4 đều có “mèo”: nhắc bé để nhớ thứ tự.",
        choi: "Chỉ cho bé cặp vần trèo – mèo ở đầu và cuối bài, và cặp nhà – xa – cha nối các câu lục bát.",
        cungChoi: "Trò chạy nhiều, hợp giờ ra chơi. Nhắc bé: mèo chạy đúng đường của chuột mới tính."
      }
    },

    {
      ma: "ve-trai-cay", so: 15, phan: "ve", trangThai: "san-sang",
      ten: "Lúa ngô là cô đậu nành",
      en: "Corn, soybean and melons",
      nguon: "Đồng dao dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản đổi thứ tự hoặc tên vài loại cây. Lời đồng dao dân gian; các bản phổ nhạc có tác giả không dùng ở đây.",
      troChoi: "Nối vòng cây trái",
      tempo: { cham: 80, vua: 104 },
      amThanh: false,
      loi: [
        "Lúa ngô là cô đậu nành",
        "Đậu nành là anh dưa chuột",
        "Dưa chuột là ruột dưa gang",
        "Dưa gang là nàng dưa hấu",
        "Dưa hấu là cậu lúa ngô",
        "Lúa ngô là cô đậu nành"
      ],
      gioiThieu: {
        vi: "Bài đồng dao kể tên cây trái ngoài đồng: lúa ngô, đậu nành, dưa chuột, dưa gang, dưa hấu. Mỗi loại cây được gọi như người trong nhà (cô, anh, nàng, cậu), và tên ở cuối câu trước lại mở đầu câu sau, nối thành một vòng tròn: đọc hết bài lại quay về câu đầu. Trong mỗi câu còn có hai tiếng vần với nhau: ngô – cô, nành – anh, chuột – ruột, gang – nàng, hấu – cậu.",
        en: "A chant naming crops from the fields: corn, soybean, cucumber, oriental melon and watermelon. Each plant is called like a family member, and the plant at the end of one line starts the next, making a circle: the last line takes you back to the start. Each line also has two rhyming words: ngô – cô, nành – anh, chuột – ruột, gang – nàng, hấu – cậu."
      },
      tuKho: [
        { tu: "lúa ngô", hinh: "🌽", nghia: "cây ngô (miền Nam gọi là bắp)", en: "corn, maize" },
        { tu: "đậu nành", hinh: "🫘", nghia: "hạt đậu tròn, vàng nhạt, dùng làm đậu phụ, sữa đậu nành", en: "soybean" },
        { tu: "dưa chuột", hinh: "🥒", nghia: "quả dài, vỏ xanh, ăn sống giòn mát (miền Nam gọi là dưa leo)", en: "cucumber" },
        { tu: "dưa gang", hinh: "🍈", nghia: "quả dưa to và dài, vỏ xanh có sọc, ruột mềm, ăn với đường", en: "a large oriental melon" },
        { tu: "dưa hấu", hinh: "🍉", nghia: "quả to, vỏ xanh, ruột đỏ, ngọt và nhiều nước; hay có trong ngày Tết", en: "watermelon" },
        { tu: "ruột", hinh: "❤️", nghia: "phần bên trong; “anh em ruột” là anh em cùng cha mẹ", en: "the inside; also “blood” sibling" },
        { tu: "nàng", hinh: "👸", nghia: "cô gái (cách gọi cũ, nhẹ nhàng)", en: "a young lady (old, gentle word)" }
      ],
      cauHoi: [
        { hoi: "Ruột dưa hấu màu gì?", en: "What colour is a watermelon inside?",
          chon: [{ chu: "Màu đỏ", hinh: "🍉" }, { chu: "Màu tím", hinh: "🍇" }, { chu: "Màu trắng", hinh: "🥥" }], dung: 0 },
        { hoi: "Đậu nành là anh của ai?", en: "Soybean is the big brother of whom?",
          chon: [{ chu: "Dưa chuột", hinh: "🥒" }, { chu: "Dưa hấu", hinh: "🍉" }, { chu: "Lúa ngô", hinh: "🌽" }], dung: 0 },
        { hoi: "Câu cuối bài giống câu nào?", en: "The last line is the same as which line?",
          chon: [{ chu: "Câu đầu", hinh: "🔁" }, { chu: "Câu giữa", hinh: "⏺️" }, { chu: "Không câu nào", hinh: "🚫" }], dung: 0 },
        { hoi: "Miền Nam gọi dưa chuột là gì?", en: "What do southerners call dưa chuột?",
          chon: [{ chu: "Dưa leo", hinh: "🥒" }, { chu: "Dưa hấu", hinh: "🍉" }, { chu: "Dưa gang", hinh: "🍈" }], dung: 0 },
        { hoi: "Tiếng nào vần với “ngô”?", en: "Which word rhymes with “ngô”?",
          chon: [{ chu: "cô", hinh: "👩" }, { chu: "anh", hinh: "👨" }, { chu: "nàng", hinh: "👸" }], dung: 0 }
      ],
      dienTu: [[0, "cô"], [1, "anh"], [2, "ruột"], [3, "nàng"], [4, "cậu"], [5, "nành"]],
      nhieu: ["chú", "bà", "em", "dì", "bác"],
      vanCap: [["ngô", "cô"], ["nành", "anh"], ["chuột", "ruột"], ["gang", "nàng"], ["hấu", "cậu"], ["lúa", "múa"]],
      cungChoi: {
        ten: "Nối vòng cây trái",
        nguoi: "Từ 3 bạn trở lên",
        cho: "Ngồi thành vòng tròn, trong nhà hoặc lớp học",
        buoc: [
          { hinh: "⭕", chu: "Các bạn ngồi thành vòng tròn." },
          { hinh: "🎶", chu: "Bạn thứ nhất đọc câu 1, bạn bên cạnh đọc câu 2, cứ thế đọc nối quanh vòng; mỗi tiếng vỗ tay một cái." },
          { hinh: "🔁", chu: "Hết bài thì quay lại câu đầu và đọc tiếp, mỗi vòng nhanh hơn một chút." },
          { hinh: "🌽", chu: "Bạn nào quên câu thì đứng lên nói tên một loại rau, quả bằng tiếng Việt rồi chơi tiếp." }
        ],
        en: "Sit in a circle. The first child says line 1, the next says line 2, and so on around the circle, clapping on each syllable. When you reach the end, start again from line 1, a little faster each round. If you forget your line, stand up, name a fruit or vegetable in Vietnamese, then keep playing.",
        anToan: "Trò ngồi một chỗ, an toàn; nhắc các bạn vỗ tay nhẹ, không vỗ vào bạn bên cạnh."
      },
      thuThach: [
        "Đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Cùng cha mẹ đi chợ, tìm và gọi tên bằng tiếng Việt: dưa chuột, dưa hấu, ngô",
        "Kể tên 3 loại quả khác bằng tiếng Việt"
      ],
      goiY: {
        nghe: "Mỗi câu 6 tiếng, có vần ngay trong câu (ngô – cô). Đọc chậm để bé nghe rõ hai tiếng vần.",
        hieu: "Cho bé xem quả thật hoặc tranh: ngô, đậu nành, dưa chuột, dưa gang, dưa hấu. Nói thêm cách gọi miền Nam: bắp, dưa leo.",
        nho: "Mẹo nhớ: tên ở cuối câu trước là tên ở đầu câu sau. Bé chỉ cần nhớ câu đầu là đọc nối được cả bài.",
        choi: "Lật thẻ tìm vần chính là các cặp vần trong bài. Hỏi thêm: “Tiếng nào vần với ‘anh’?” (xanh, canh, nhanh…).",
        cungChoi: "Đây là hoạt động đọc nối vòng, giúp bé tập trung và nghe bạn. Bé nhỏ có thể cầm tranh loại quả trong câu của mình."
      }
    },

    {
      ma: "ve-loai-vat", so: 16, phan: "ve", trangThai: "san-sang",
      ten: "Bao giờ cho đến tháng ba",
      en: "The topsy-turvy rhyme",
      nguon: "Vè nói ngược, dân gian Việt Nam",
      diBan: "Bản phổ biến; có dị bản: “Thóc giống đuổi chuột trong bồ”, “Con gà be rượu nuốt người lao đao”… mỗi nơi đọc khác vài chữ.",
      troChoi: "Nói ngược, làm ngược",
      tempo: { cham: 72, vua: 96 },
      amThanh: false,
      loi: [
        "Bao giờ cho đến tháng ba",
        "Ếch cắn cổ rắn tha ra ngoài đồng",
        "Hùm nằm cho lợn liếm lông",
        "Một chục quả hồng nuốt lão tám mươi",
        "Nắm xôi nuốt trẻ lên mười",
        "Con gà, be rượu nuốt người lao đao",
        "Lươn nằm cho trúm bò vào",
        "Một đàn cào cào đuổi bắt cá rô",
        "Thóc giống cắn chuột trong bồ",
        "Một trăm lá mạ đổ xô nhổ người"
      ],
      gioiThieu: {
        vi: "Đây là bài vè nói ngược: mọi chuyện trong bài đều ngược đời để gây cười. Con ếch nhỏ lại cắn cổ con rắn, con hùm (con hổ) nằm yên cho lợn liếm lông, quả hồng nuốt ông lão, nắm xôi nuốt em bé, đàn cào cào đuổi bắt cá rô, thóc giống cắn chuột, lá mạ nhổ người… Các bạn đọc và tìm xem ngoài đời thật thì thế nào nhé: rắn bắt ếch, người ăn hồng, người nhổ mạ!",
        en: "A topsy-turvy rhyme: everything happens the wrong way round to make people laugh. The little frog bites the snake's neck, the tiger lies still while the pig licks its fur, persimmons swallow an old man, a ball of sticky rice swallows a child, grasshoppers chase a fish, seed rice bites a rat, rice seedlings pull up a person… Read it and work out what really happens: snakes catch frogs, people eat persimmons, people pull up seedlings!"
      },
      tuKho: [
        { tu: "nói ngược", hinh: "🔄", nghia: "nói trái với sự thật để đùa cho vui", en: "to say things the wrong way round, as a joke" },
        { tu: "hùm", hinh: "🐯", nghia: "con hổ", en: "tiger" },
        { tu: "lươn", hinh: "🐍", nghia: "con vật dài như rắn, sống trong bùn ở ruộng", en: "a rice-field eel" },
        { tu: "trúm", hinh: "🪤", nghia: "ống tre dùng để bắt lươn", en: "a bamboo trap for catching eels" },
        { tu: "cào cào", hinh: "🦗", nghia: "con vật nhỏ, chân dài, nhảy giỏi, sống ở bãi cỏ", en: "grasshopper" },
        { tu: "thóc giống", hinh: "🌾", nghia: "hạt thóc tốt để dành gieo vụ sau", en: "seed rice saved for planting" },
        { tu: "bồ", hinh: "🧺", nghia: "đồ đan bằng tre, to, để đựng thóc", en: "a big woven bamboo bin for rice" },
        { tu: "lá mạ", hinh: "🌱", nghia: "cây lúa non, được nhổ lên đem đi cấy", en: "rice seedlings" }
      ],
      cauHoi: [
        { hoi: "Trong bài, con gì cắn cổ con rắn?", en: "In the rhyme, who bites the snake's neck?",
          chon: [{ chu: "Con ếch", hinh: "🐸" }, { chu: "Con mèo", hinh: "🐱" }, { chu: "Con gà", hinh: "🐔" }], dung: 0 },
        { hoi: "Ngoài đời thật, ai bắt ai?", en: "In real life, who catches whom?",
          chon: [{ chu: "Rắn bắt ếch", hinh: "🐍" }, { chu: "Ếch bắt rắn", hinh: "🐸" }, { chu: "Ếch bắt hổ", hinh: "🐯" }], dung: 0 },
        { hoi: "“Hùm” là con gì?", en: "What animal is “hùm”?",
          chon: [{ chu: "Con hổ", hinh: "🐯" }, { chu: "Con lợn", hinh: "🐷" }, { chu: "Con chó", hinh: "🐶" }], dung: 0 },
        { hoi: "Đàn cào cào đuổi bắt con gì?", en: "What do the grasshoppers chase?",
          chon: [{ chu: "Cá rô", hinh: "🐟" }, { chu: "Con chuột", hinh: "🐭" }, { chu: "Con lươn", hinh: "🐍" }], dung: 0 },
        { hoi: "Vì sao bài này buồn cười?", en: "Why is this rhyme funny?",
          chon: [{ chu: "Vì mọi chuyện đều ngược", hinh: "🔄" }, { chu: "Vì có nhiều bánh kẹo", hinh: "🍬" }, { chu: "Vì bài rất dài", hinh: "📜" }], dung: 0 }
      ],
      dienTu: [[1, "rắn"], [2, "lông"], [3, "hồng"], [6, "trúm"], [7, "rô"], [8, "chuột"], [9, "người"]],
      nhieu: ["mèo", "voi", "gạo", "trâu", "dưa"],
      vanCap: [["ba", "ra"], ["đồng", "lông"], ["mươi", "mười"], ["đao", "vào"], ["rô", "bồ"], ["hồng", "sông"]],
      cungChoi: {
        ten: "Nói ngược, làm ngược",
        nguoi: "Từ 2 bạn trở lên",
        cho: "Trong nhà hoặc lớp học, chỗ rộng",
        buoc: [
          { hinh: "🐸", chu: "Một bạn đọc một câu vè, các bạn khác làm động tác con vật trong câu: ếch nhảy, rắn trườn, hổ vồ, cào cào nhảy…" },
          { hinh: "🔄", chu: "Sau mỗi câu, cả nhóm “nói xuôi” lại cho đúng: “Rắn bắt ếch!”, “Người ăn hồng!”" },
          { hinh: "😄", chu: "Lượt sau, mỗi bạn tự nghĩ một câu nói ngược thật vui, ví dụ “Con chuột đuổi con mèo”." },
          { hinh: "🏆", chu: "Bạn làm động tác giống nhất được đọc câu tiếp theo." }
        ],
        en: "One child says a line; the others act out the animals in it: the frog hops, the snake slithers, the tiger pounces, grasshoppers jump… After each line, everyone says it “the right way round”: “Rắn bắt ếch!” (the snake catches the frog), “Người ăn hồng!” (people eat persimmons). Then each child makes up a funny topsy-turvy line, such as “Con chuột đuổi con mèo”. The best actor reads the next line.",
        anToan: "Làm động tác con vật ở chỗ rộng, không vồ, không cắn thật vào bạn."
      },
      thuThach: [
        "Đọc thuộc 4 câu đầu cho ông bà hoặc cha mẹ nghe",
        "Nói xuôi lại 3 câu trong bài cho đúng với đời thật",
        "Tự đặt một câu nói ngược về con vật nhà mình và đọc cho cả nhà nghe"
      ],
      goiY: {
        nghe: "Thể lục bát: câu 6 tiếng, câu 8 tiếng. Bài dài 10 câu, nghe 2–3 lần trước khi học thuộc; có thể học 4 câu mỗi ngày.",
        hieu: "Trọng tâm là hiểu cái “ngược”: hỏi bé “Ngoài đời, ai bắt ai?”. Nhiều từ chỉ đồ vật ở làng quê (trúm, bồ, mạ); cho bé xem tranh nếu có. Câu “Con gà, be rượu nuốt người lao đao” nói người ăn uống no say đến chóng mặt; với bé nhỏ, chỉ cần nói “người ăn no quá”.",
        nho: "Mỗi câu có một cặp “ai làm gì ai” bị đảo ngược. Nhớ cặp con vật (ếch – rắn, hùm – lợn, lươn – trúm) là nhớ câu.",
        choi: "Vần lục bát nối câu: “ba” vần với “ra”, “đồng” vần với “lông”. Cho bé tìm thêm cặp vần trong bài.",
        cungChoi: "Trò này luyện câu “Con A cắn con B” rồi đảo thành “Con B cắn con A”. Rất hợp lớp học tiếng Việt."
      }
    },

    /* ================= PHẦN 3 – DÂN CA & HÁT RU (cần bản thu giọng hát) ================= */
    {
      ma: "bac-kim-thang", so: 17, phan: "baihat", trangThai: "san-sang",
      ten: "Bắc kim thang",
      en: "The bamboo bridge",
      mien: "Nam Bộ",
      nguon: "Đồng dao, dân ca Nam Bộ",
      diBan: "Bản phổ biến; khi hát, mỗi nơi thêm tiếng đệm và lặp lời khác nhau. Câu đầu được giải thích theo nhiều cách.",
      troChoi: "Vỗ tay đôi theo nhịp",
      tempo: { cham: 84, vua: 108 },
      amThanh: false,
      loi: [
        "Bắc kim thang cà lang bí rợ",
        "Cột qua kèo là kèo qua cột",
        "Chú bán dầu qua cầu mà té",
        "Chú bán ếch ở lại làm chi",
        "Con le le đánh trống thổi kèn",
        "Con bìm bịp thổi tò tí te tò te"
      ],
      gioiThieu: {
        vi: "Đây là bài đồng dao, dân ca Nam Bộ rất quen với trẻ em miền Nam. Câu đầu nói chuyện bắc giàn cho dây cà, dây bí leo (người ta giải thích mỗi người một khác). Sau đó bài kể chuyện vui: chú bán dầu đi qua cây cầu tre bị té, chú bán ếch đứng lại; con le le đánh trống, con bìm bịp thổi kèn “tò tí te”. Các bạn vừa hát vừa vỗ tay theo nhịp.",
        en: "A well-known chant and folk song from southern Vietnam. The first line is about putting up a trellis for squash vines to climb (people explain it in different ways). Then comes a funny story: the oil seller slips crossing the bamboo bridge, the frog seller stays behind; the whistling duck beats a drum and the coucal blows a horn, “tò tí te”. Clap to the beat as you sing."
      },
      tuKho: [
        { tu: "bắc", hinh: "🪜", nghia: "đặt, dựng (thang, cầu, giàn) để đi qua hay leo lên", en: "to set up (a ladder, bridge or trellis)" },
        { tu: "bí rợ", hinh: "🎃", nghia: "quả bí đỏ (cách gọi ở miền Nam)", en: "pumpkin (southern word)" },
        { tu: "cột, kèo", hinh: "🏠", nghia: "cây gỗ dựng nhà: cột đứng thẳng, kèo đỡ mái", en: "the posts and rafters of a house" },
        { tu: "té", hinh: "🤕", nghia: "ngã (cách nói ở miền Nam)", en: "to fall (southern word)" },
        { tu: "làm chi", hinh: "❓", nghia: "làm gì (cách nói ở miền Trung, miền Nam)", en: "what for? (regional)" },
        { tu: "le le", hinh: "🦆", nghia: "loài chim giống vịt nhỏ, sống ở đầm, ao", en: "a whistling duck, like a small wild duck" },
        { tu: "bìm bịp", hinh: "🐦", nghia: "loài chim lông nâu đen, hay kêu “bìm bịp” trong bụi rậm ven sông", en: "the coucal, a bird that calls “bìm bịp” in riverside bushes" },
        { tu: "tò tí te", hinh: "🎺", nghia: "tiếng kèn thổi vui", en: "the sound of a horn" }
      ],
      cauHoi: [
        { hoi: "Bài này là dân ca của miền nào?", en: "Which region is this song from?",
          chon: [{ chu: "Nam Bộ", hinh: "🛶" }, { chu: "Bắc Bộ", hinh: "⛰️" }, { chu: "Trung Bộ", hinh: "🏯" }], dung: 0 },
        { hoi: "Chú bán dầu bị làm sao?", en: "What happened to the oil seller?",
          chon: [{ chu: "Qua cầu bị té", hinh: "🤕" }, { chu: "Bị lạc đường", hinh: "🧭" }, { chu: "Ngủ quên", hinh: "😴" }], dung: 0 },
        { hoi: "Con le le làm gì?", en: "What does the whistling duck do?",
          chon: [{ chu: "Đánh trống", hinh: "🥁" }, { chu: "Gảy đàn", hinh: "🎸" }, { chu: "Bơi lội", hinh: "🏊" }], dung: 0 },
        { hoi: "Con bìm bịp làm gì?", en: "What does the coucal do?",
          chon: [{ chu: "Thổi kèn tò tí te", hinh: "🎺" }, { chu: "Đánh trống", hinh: "🥁" }, { chu: "Bán ếch", hinh: "🐸" }], dung: 0 },
        { hoi: "Ở miền Nam, “té” nghĩa là gì?", en: "In the South, what does “té” mean?",
          chon: [{ chu: "Ngã", hinh: "🤕" }, { chu: "Chạy", hinh: "🏃" }, { chu: "Ăn", hinh: "🍚" }], dung: 0 }
      ],
      dienTu: [[0, "thang"], [1, "Cột"], [2, "cầu"], [2, "té"], [3, "ếch"], [4, "trống"], [5, "bịp"]],
      nhieu: ["sáo", "đàn", "mưa", "cá", "ghe"],
      vanCap: [["thang", "lang"], ["dầu", "cầu"], ["le", "te"], ["té", "bé"], ["kèn", "đèn"]],
      cungChoi: {
        ten: "Vỗ tay đôi theo nhịp",
        nguoi: "2 bạn một đôi",
        cho: "Ngồi hoặc đứng đối mặt, ở đâu cũng chơi được",
        buoc: [
          { hinh: "🤝", chu: "Hai bạn ngồi đối mặt." },
          { hinh: "👏", chu: "Nhịp 1: tự vỗ hai tay vào nhau. Nhịp 2: vỗ tay phải vào tay phải của bạn. Nhịp 3: tự vỗ tay. Nhịp 4: vỗ tay trái vào tay trái của bạn." },
          { hinh: "🎶", chu: "Vừa hát “Bắc kim thang” vừa vỗ lặp lại theo nhịp; đến “tò tí te tò te” thì cả hai làm động tác thổi kèn." },
          { hinh: "🐇", chu: "Lần sau hát nhanh hơn; đôi nào giữ nhịp đều đến hết bài là giỏi." }
        ],
        en: "Sit face to face. Beat 1: clap your own hands. Beat 2: clap right hands with your partner. Beat 3: clap your own hands. Beat 4: clap left hands. Repeat while singing “Bắc kim thang”; on “tò tí te tò te”, both pretend to blow a horn. Next time go faster – keep the beat to the end!",
        anToan: "Vỗ tay vừa phải, không vỗ mạnh vào tay bạn."
      },
      thuThach: [
        "Hát hoặc đọc thuộc bài cho ông bà hoặc cha mẹ nghe",
        "Chơi vỗ tay đôi với một người trong nhà đến hết bài",
        "Hỏi ông bà, cha mẹ: Ở miền Nam, người ta gọi “ngã” là gì, gọi “bí đỏ” là gì?"
      ],
      goiY: {
        nghe: "Câu dài 7–9 tiếng, nhịp nhanh, vui. Ban đầu chọn nhịp Chậm; khi có bản thu giọng hát của trường, cho bé nghe hát trước rồi mới vỗ tay theo.",
        hieu: "Bài có nhiều từ miền Nam: té (ngã), bí rợ (bí đỏ), làm chi (làm gì). Đây là dịp giới thiệu tiếng nói các miền. Câu đầu người lớn cũng giải thích mỗi người một khác; không cần tìm nghĩa từng tiếng.",
        nho: "Bài có cặp đối: chú bán dầu – chú bán ếch; con le le – con bìm bịp. Nhớ cặp là nhớ bài.",
        choi: "Cặp thang – lang, dầu – cầu nằm ngay trong một câu. Hỏi bé tìm thêm tiếng vần với “cầu” (dầu, sâu, trâu…).",
        cungChoi: "Vỗ tay đôi giúp bé giữ nhịp và phối hợp hai tay. Bé nhỏ thì chỉ vỗ tay đơn, mỗi tiếng một cái."
      }
    },

    {
      ma: "ly-cay-bong", so: 18, phan: "baihat", trangThai: "san-sang",
      ten: "Ru em (hát ru xứ Huế)",
      en: "A Huế lullaby",
      mien: "Trung Bộ",
      nguon: "Hát ru dân gian xứ Huế (Trung Bộ)",
      diBan: "Bản phổ biến; có dị bản “Ru em em théc cho muồi”. Lời ru đủ còn kể thêm các chợ khác; góc học lấy 4 câu đầu.",
      troChoi: "Ru em búp bê",
      tempo: { cham: 60, vua: 76 },
      amThanh: false,
      loi: [
        "Ru em em ngủ cho muồi",
        "Để mẹ đi chợ mua vôi ăn trầu",
        "Mua vôi chợ Quán chợ Cầu",
        "Mua cau Nam Phổ mua trầu chợ Dinh"
      ],
      gioiThieu: {
        vi: "Đây là lời ru của xứ Huế, miền Trung. Người chị (hay người bà) ru em bé ngủ thật say để mẹ đi chợ mua vôi, mua cau, mua trầu. Lời ru nhắc tên những chợ quen ở vùng Huế: chợ Quán, chợ Cầu, Nam Phổ, chợ Dinh. Ngày xưa, các bà, các mẹ hay ăn trầu: lá trầu quệt chút vôi, cuốn với miếng cau.",
        en: "A lullaby from Huế, in central Vietnam. An older sister (or a grandmother) sings the baby to sleep so that mother can go to market to buy lime, areca nuts and betel leaves. The song names markets around Huế: chợ Quán, chợ Cầu, Nam Phổ, chợ Dinh. Long ago, grandmothers and mothers chewed betel: a betel leaf spread with a little lime, rolled around a piece of areca nut."
      },
      tuKho: [
        { tu: "ru", hinh: "🎵", nghia: "hát nhẹ, chậm cho em bé ngủ", en: "to sing a baby to sleep" },
        { tu: "ngủ cho muồi", hinh: "😴", nghia: "ngủ thật say, ngủ ngon", en: "to sleep soundly" },
        { tu: "vôi", hinh: "🫙", nghia: "chất trắng, dẻo, quệt lên lá trầu khi ăn trầu", en: "slaked lime, spread on betel leaves" },
        { tu: "trầu", hinh: "🍃", nghia: "lá cây trầu, cay và thơm; ngày xưa người lớn hay ăn", en: "betel leaf" },
        { tu: "cau", hinh: "🌴", nghia: "quả của cây cau, ăn cùng lá trầu", en: "areca nut" },
        { tu: "chợ", hinh: "🧺", nghia: "nơi nhiều người đến mua bán", en: "market" },
        { tu: "Huế", hinh: "🏯", nghia: "thành phố ở miền Trung, ngày xưa là kinh đô", en: "a city in central Vietnam, the old royal capital" }
      ],
      cauHoi: [
        { hoi: "Lời ru này của vùng nào?", en: "Where is this lullaby from?",
          chon: [{ chu: "Xứ Huế, miền Trung", hinh: "🏯" }, { chu: "Hà Nội, miền Bắc", hinh: "⛰️" }, { chu: "Cần Thơ, miền Nam", hinh: "🛶" }], dung: 0 },
        { hoi: "Mẹ đi chợ mua gì?", en: "What does mother buy?",
          chon: [{ chu: "Vôi, cau, trầu", hinh: "🍃" }, { chu: "Bánh kẹo", hinh: "🍬" }, { chu: "Quần áo", hinh: "👕" }], dung: 0 },
        { hoi: "Vì sao ru em ngủ?", en: "Why is the baby sung to sleep?",
          chon: [{ chu: "Để mẹ đi chợ", hinh: "🧺" }, { chu: "Để em đi học", hinh: "🎒" }, { chu: "Để em ăn cơm", hinh: "🍚" }], dung: 0 },
        { hoi: "Mẹ mua cau ở đâu?", en: "Where does mother buy areca nuts?",
          chon: [{ chu: "Nam Phổ", hinh: "🌴" }, { chu: "Chợ Cầu", hinh: "🌉" }, { chu: "Chợ Dinh", hinh: "🏪" }], dung: 0 },
        { hoi: "“Ngủ cho muồi” nghĩa là gì?", en: "What does “ngủ cho muồi” mean?",
          chon: [{ chu: "Ngủ thật say", hinh: "😴" }, { chu: "Ngủ một chút", hinh: "⏱️" }, { chu: "Không ngủ", hinh: "👀" }], dung: 0 }
      ],
      dienTu: [[0, "muồi"], [1, "chợ"], [1, "vôi"], [2, "Cầu"], [3, "cau"], [3, "trầu"], [3, "Dinh"]],
      nhieu: ["muối", "gạo", "cá", "chè", "Bến"],
      vanCap: [["trầu", "cầu"], ["vôi", "tôi"], ["Dinh", "xinh"], ["mẹ", "nhẹ"], ["cau", "sau"]],
      cungChoi: {
        ten: "Ru em búp bê",
        nguoi: "1 bạn trở lên",
        cho: "Trong nhà, chỗ yên tĩnh",
        buoc: [
          { hinh: "🧸", chu: "Ôm một em búp bê hoặc gấu bông, hoặc đặt vào chiếc võng nhỏ (khăn buộc hai đầu)." },
          { hinh: "🎵", chu: "Hát (hoặc đọc) thật chậm, thật nhẹ; đưa võng hoặc vỗ nhẹ lưng búp bê theo nhịp." },
          { hinh: "🤫", chu: "Hát nhỏ dần ở câu cuối, như em bé đã ngủ." },
          { hinh: "🧺", chu: "Hát xong, bạn nhỏ làm “mẹ đi chợ”: nói tên một thứ muốn mua bằng tiếng Việt." }
        ],
        en: "Hold a doll or teddy, or lay it in a little hammock (a cloth tied at both ends). Sing or say the words very slowly and softly, swinging the hammock or patting the doll's back to the beat. Get quieter on the last line, as if the baby has fallen asleep. Then play “mother goes to market”: name something you want to buy, in Vietnamese.",
        anToan: "Võng búp bê buộc thấp, sát đất; bé không tự trèo vào võng."
      },
      thuThach: [
        "Hát hoặc đọc lời ru cho ông bà hoặc cha mẹ nghe",
        "Ru em búp bê ngủ bằng lời ru này",
        "Hỏi ông bà, cha mẹ: Ngày nhỏ, ai hát ru mình? Hát bài gì?"
      ],
      goiY: {
        nghe: "Hát ru phải chậm, nhẹ. Chọn nhịp Chậm; khi có bản thu giọng hát của trường, cho bé nghe giọng hát thật để cảm được làn điệu ru Huế.",
        hieu: "Chỉ trên bản đồ Việt Nam: Huế ở miền Trung. Kể bé nghe tục ăn trầu ngày xưa và câu “Miếng trầu là đầu câu chuyện”.",
        nho: "Bài 4 câu, thể lục bát. Nhớ thứ tự: ru em → mẹ đi chợ → mua vôi → mua cau, mua trầu.",
        choi: "Tiếp sức đọc bài giúp bé nhớ tên các chợ theo thứ tự. Cặp vần trầu – Cầu nối câu 2 với câu 3.",
        cungChoi: "Hoạt động yên tĩnh, hợp trước giờ ngủ. Người lớn hát ru bé, rồi bé hát ru búp bê."
      }
    },

    {
      ma: "trong-com", so: 19, phan: "baihat", trangThai: "san-sang",
      ten: "Trống cơm",
      en: "The rice drum",
      mien: "Bắc Bộ",
      nguon: "Dân ca đồng bằng Bắc Bộ",
      diBan: "Lời chính, bản phổ biến; khi hát có nhiều tiếng đệm (tình bằng, tang tình, ố mấy…) và câu lặp, mỗi bản hát khác nhau. Bài đủ còn những lời khác.",
      troChoi: "Gõ trống theo nhịp",
      tempo: { cham: 66, vua: 84 },
      amThanh: false,
      loi: [
        "Tình bằng có cái trống cơm",
        "Khen ai khéo vỗ, ố mấy bông mà nên bông",
        "Một bầy tang tình con nhện",
        "Ố mấy giăng tơ, ố mấy giăng tơ",
        "Một bầy tang tình con nhện ơi",
        "Nó ra ố mấy đường tơ"
      ],
      gioiThieu: {
        vi: "Trống cơm là một loại trống nhỏ, dài, hai mặt bịt da. Khi chơi, người ta lấy cơm nghiền dán lên mặt trống để tiếng trống êm và vang hơn, vì thế mới gọi là trống cơm. Bài dân ca khen người khéo vỗ trống, rồi hát vui về bầy nhện giăng tơ. Những tiếng “tình bằng”, “tang tình”, “ố mấy” là tiếng đệm cho câu hát thêm mượt, thêm vui.",
        en: "The trống cơm (rice drum) is a small, long drum with two skin heads. Players press a little mashed rice onto the drumheads to make the sound softer and richer – hence its name. The folk song praises whoever plays the drum so skilfully, then sings about a group of spiders spinning their threads. Words like “tình bằng”, “tang tình”, “ố mấy” are filler sounds that make the singing smooth and lively."
      },
      tuKho: [
        { tu: "trống cơm", hinh: "🥁", nghia: "trống nhỏ, dài, hai mặt; dán cơm nghiền lên mặt trống để chỉnh tiếng", en: "a small two-headed drum; mashed rice on the heads tunes its sound" },
        { tu: "khéo", hinh: "👍", nghia: "giỏi, làm đẹp, làm tốt bằng tay", en: "skilful" },
        { tu: "vỗ", hinh: "👏", nghia: "đập bàn tay vào", en: "to beat, to tap" },
        { tu: "bầy", hinh: "👪", nghia: "đàn, nhiều con cùng loại ở với nhau", en: "a group of animals" },
        { tu: "con nhện", hinh: "🕷️", nghia: "con vật nhỏ, tám chân, giăng tơ làm lưới", en: "spider" },
        { tu: "giăng tơ", hinh: "🕸️", nghia: "kéo sợi tơ mỏng ra thành lưới", en: "to spin a web" },
        { tu: "tình bằng, tang tình, ố mấy", hinh: "🎵", nghia: "tiếng đệm trong câu hát, không cần tìm nghĩa", en: "filler sounds in the song" }
      ],
      cauHoi: [
        { hoi: "Bài dân ca này của miền nào?", en: "Which region is this folk song from?",
          chon: [{ chu: "Bắc Bộ", hinh: "⛰️" }, { chu: "Nam Bộ", hinh: "🛶" }, { chu: "Trung Bộ", hinh: "🏯" }], dung: 0 },
        { hoi: "Vì sao gọi là trống cơm?", en: "Why is it called a rice drum?",
          chon: [{ chu: "Vì dán cơm lên mặt trống", hinh: "🍚" }, { chu: "Vì đánh trống lúc ăn cơm", hinh: "🍽️" }, { chu: "Vì trống dùng để đựng cơm", hinh: "🥣" }], dung: 0 },
        { hoi: "Bài hát khen ai?", en: "Who is praised?",
          chon: [{ chu: "Người khéo vỗ trống", hinh: "🥁" }, { chu: "Người nấu cơm", hinh: "🍚" }, { chu: "Người bán hàng", hinh: "🧺" }], dung: 0 },
        { hoi: "Bầy nhện làm gì?", en: "What do the spiders do?",
          chon: [{ chu: "Giăng tơ", hinh: "🕸️" }, { chu: "Đánh trống", hinh: "🥁" }, { chu: "Bay lượn", hinh: "🕊️" }], dung: 0 },
        { hoi: "“Tang tình”, “ố mấy” là gì?", en: "What are “tang tình” and “ố mấy”?",
          chon: [{ chu: "Tiếng đệm cho câu hát", hinh: "🎵" }, { chu: "Tên con vật", hinh: "🐾" }, { chu: "Tên món ăn", hinh: "🍲" }], dung: 0 }
      ],
      dienTu: [[0, "trống"], [0, "cơm"], [1, "vỗ"], [2, "nhện"], [3, "tơ"], [5, "đường"]],
      nhieu: ["chiêng", "sáo", "cá", "lưới", "mèo"],
      vanCap: [["cơm", "thơm"], ["trống", "cống"], ["tơ", "cờ"], ["vỗ", "gỗ"], ["khen", "đèn"]],
      cungChoi: {
        ten: "Gõ trống theo nhịp",
        nguoi: "Cả nhà, cả lớp",
        cho: "Trong nhà; dùng hộp giấy, nồi úp hoặc mặt bàn làm trống",
        buoc: [
          { hinh: "🥁", chu: "Mỗi bạn có một “trống”: hộp giấy, nồi úp hoặc mặt bàn." },
          { hinh: "🎵", chu: "Theo nhịp mõ của bài: gõ nhẹ một cái ở mỗi tiếng, gõ mạnh “tùng” ở cuối câu." },
          { hinh: "👥", chu: "Chia hai nhóm: nhóm 1 hát, nhóm 2 gõ trống; rồi đổi vai." },
          { hinh: "🕷️", chu: "Đến câu về con nhện, các bạn làm động tác giăng tơ: hai tay kéo sợi tơ từ trên xuống." }
        ],
        en: "Everyone gets a “drum”: a cardboard box, an upside-down pot or the table. Follow the woodblock beat: tap softly on each syllable and strike a strong “tùng” at the end of each line. Split into two groups – one sings, one drums – then swap. On the spider lines, mime spinning silk by pulling threads down with both hands.",
        anToan: "Gõ bằng tay hoặc đũa nhẹ, không gõ vào đồ thuỷ tinh."
      },
      thuThach: [
        "Hát hoặc đọc lời bài cho ông bà hoặc cha mẹ nghe",
        "Làm một chiếc trống từ hộp giấy và gõ theo nhịp bài",
        "Tìm hiểu cùng cha mẹ: ngoài trống cơm, Việt Nam còn có những loại trống nào?"
      ],
      goiY: {
        nghe: "Dân ca có nhiều tiếng đệm; cho bé nghe và đọc theo nhịp, chưa cần hát đúng làn điệu. Khi có bản thu giọng hát của trường, nghe nhiều lần trước khi hát theo.",
        hieu: "Giải thích tiếng đệm: “tình bằng”, “tang tình”, “ố mấy” làm câu hát mềm mại, không cần dịch. Nếu có thể, cho bé xem tranh chiếc trống cơm.",
        nho: "Học thuộc câu 1 và câu 3 trước (“Tình bằng có cái trống cơm”, “Một bầy tang tình con nhện”); các câu sau lặp lại nhiều.",
        choi: "Hỏi bé tìm tiếng vần với “cơm” (thơm, rơm, đơm…).",
        cungChoi: "Gõ trống theo nhịp giúp bé cảm được phách của câu hát. Đây là hoạt động âm nhạc theo bài, không phải trò chơi dân gian riêng."
      }
    },

    {
      ma: "co-la", so: 20, phan: "baihat", trangThai: "san-sang",
      ten: "Cò lả",
      en: "The flying stork",
      mien: "Bắc Bộ",
      nguon: "Dân ca đồng bằng Bắc Bộ",
      diBan: "Lời chính dựa trên câu ca dao “Con cò bay lả bay la / Bay qua cửa phủ bay về Đồng Đăng”; khi hát có thêm tiếng đệm và câu lặp, mỗi bản hát khác nhau.",
      troChoi: "Múa cánh cò",
      tempo: { cham: 66, vua: 84 },
      amThanh: false,
      loi: [
        "Con cò cò bay lả lả bay la",
        "Bay qua cửa phủ, bay về Đồng Đăng",
        "Tình tính tang, tang tính tình",
        "Dặn rằng, ơ người ơi",
        "Người có nhớ ta chăng?"
      ],
      gioiThieu: {
        vi: "Cò lả là làn điệu dân ca đồng bằng Bắc Bộ. Bài hát vẽ cảnh con cò trắng bay lả lướt trên cánh đồng, bay qua cửa phủ, bay về Đồng Đăng (một thị trấn ở Lạng Sơn, phía bắc Việt Nam). Câu “Tình tính tang, tang tính tình” là tiếng đệm giả tiếng đàn, nghe rất vui tai. Con cò là hình ảnh quen thuộc của làng quê Việt: cò chăm chỉ lội ruộng kiếm ăn.",
        en: "Cò lả is a folk tune from the northern Red River delta. The song pictures a white stork gliding over the fields, flying past the district gate and on to Đồng Đăng (a town in Lạng Sơn, in the far north). “Tình tính tang, tang tính tình” imitates the sound of a lute. The stork (or egret) is a beloved symbol of the Vietnamese countryside: it wades patiently through the rice fields looking for food."
      },
      tuKho: [
        { tu: "con cò", hinh: "🕊️", nghia: "chim chân dài, cổ dài, lông trắng, hay lội ruộng bắt tôm cá", en: "a stork or egret: a long-legged white bird that wades in rice fields" },
        { tu: "bay lả", hinh: "🪶", nghia: "bay chao nghiêng, nhẹ nhàng, mềm mại", en: "to glide gracefully" },
        { tu: "cửa phủ", hinh: "🏯", nghia: "cổng của phủ, nơi làm việc của quan ngày xưa", en: "the gate of an old district office" },
        { tu: "Đồng Đăng", hinh: "🗺️", nghia: "tên một thị trấn ở tỉnh Lạng Sơn, phía bắc Việt Nam", en: "a town in Lạng Sơn province, northern Vietnam" },
        { tu: "tình tính tang", hinh: "🪕", nghia: "tiếng đệm bắt chước tiếng đàn", en: "filler sounds imitating a lute" },
        { tu: "dặn", hinh: "🗣️", nghia: "nói cho người khác nhớ", en: "to remind, to tell someone to remember" },
        { tu: "nhớ", hinh: "💭", nghia: "còn nghĩ tới, không quên", en: "to remember, to miss" }
      ],
      cauHoi: [
        { hoi: "Con cò bay thế nào?", en: "How does the stork fly?",
          chon: [{ chu: "Bay lả, nhẹ nhàng", hinh: "🕊️" }, { chu: "Bay thật nhanh", hinh: "🚀" }, { chu: "Không bay", hinh: "🚫" }], dung: 0 },
        { hoi: "Cò bay về đâu?", en: "Where does the stork fly to?",
          chon: [{ chu: "Đồng Đăng", hinh: "🗺️" }, { chu: "Ra biển", hinh: "🌊" }, { chu: "Vào thành phố", hinh: "🏙️" }], dung: 0 },
        { hoi: "“Tình tính tang” bắt chước tiếng gì?", en: "What does “tình tính tang” imitate?",
          chon: [{ chu: "Tiếng đàn", hinh: "🪕" }, { chu: "Tiếng mưa", hinh: "🌧️" }, { chu: "Tiếng chim", hinh: "🐦" }], dung: 0 },
        { hoi: "Cò hay kiếm ăn ở đâu?", en: "Where do storks look for food?",
          chon: [{ chu: "Ngoài ruộng", hinh: "🌾" }, { chu: "Trên mái nhà", hinh: "🏠" }, { chu: "Trong rừng sâu", hinh: "🌲" }], dung: 0 },
        { hoi: "Bài dân ca này của miền nào?", en: "Which region is this song from?",
          chon: [{ chu: "Bắc Bộ", hinh: "⛰️" }, { chu: "Nam Bộ", hinh: "🛶" }, { chu: "Trung Bộ", hinh: "🏯" }], dung: 0 }
      ],
      dienTu: [[0, "cò"], [0, "la"], [1, "phủ"], [1, "Đăng"], [2, "tang"], [3, "rằng"], [4, "nhớ"]],
      nhieu: ["vịt", "sông", "trăng", "đàn", "quên"],
      vanCap: [["la", "ta"], ["Đăng", "chăng"], ["tang", "sang"], ["cò", "to"], ["bay", "tay"]],
      cungChoi: {
        ten: "Múa cánh cò",
        nguoi: "1 bạn trở lên, cả lớp càng vui",
        cho: "Chỗ rộng trong nhà hoặc ngoài sân",
        buoc: [
          { hinh: "🕊️", chu: "Dang hai tay làm cánh cò, nhón chân, đi nhẹ nhàng." },
          { hinh: "🎵", chu: "Theo nhịp bài, hai tay chao lên chao xuống như cò bay lả." },
          { hinh: "🌾", chu: "Đến câu “Tình tính tang”, dừng lại, co một chân, đứng như cò đứng ruộng." },
          { hinh: "🔁", chu: "Hát lại, đổi chân đứng. Bạn nào đứng một chân lâu nhất làm “cò đầu đàn” dẫn lượt sau." }
        ],
        en: "Spread your arms like a stork's wings, go up on tiptoe and walk softly. Follow the beat, gliding your arms up and down. At “Tình tính tang”, stop and stand on one leg like a stork in the rice field. Sing again and switch legs. Whoever balances longest leads the flock next time.",
        anToan: "Đứng một chân cạnh tường hoặc bàn để vịn khi cần; sàn không trơn."
      },
      thuThach: [
        "Hát hoặc đọc lời bài cho ông bà hoặc cha mẹ nghe",
        "Múa cánh cò cùng anh chị em hoặc bạn bè",
        "Tìm Lạng Sơn (Đồng Đăng) trên bản đồ Việt Nam cùng cha mẹ"
      ],
      goiY: {
        nghe: "Câu dài ngắn không đều, có tiếng đệm. Cho bé nghe nhiều lần, đọc theo nhịp Chậm; khi có bản thu giọng hát của trường thì hát theo.",
        hieu: "Kể về con cò trong ca dao Việt Nam: cò là hình ảnh người nông dân chăm chỉ, hiền lành. Chỉ Đồng Đăng (Lạng Sơn) trên bản đồ.",
        nho: "Câu 1 có nhiều tiếng lặp (cò cò, lả lả); câu 3 là tiếng đàn. Nhớ hai câu này là thuộc nửa bài.",
        choi: "Tìm tiếng vần với “la” (ta, xa, nhà…) và với “chăng” (Đăng, trăng, răng…).",
        cungChoi: "Múa cánh cò là hoạt động vận động nhẹ theo bài, hợp tiết âm nhạc hoặc sinh hoạt lớp."
      }
    },

    {
      ma: "ly-con-sao", so: 21, phan: "baihat", trangThai: "san-sang",
      ten: "Cái ngủ mày ngủ cho lâu",
      en: "Sleep, stay a long while",
      mien: "Bắc Bộ",
      nguon: "Hát ru dân gian Bắc Bộ",
      diBan: "Bản phổ biến; có dị bản “Bắt được con giếc con trê”, “Túm cổ lôi về…”. Khi ru, người ta thêm tiếng “à ơi” ở đầu và cuối câu.",
      troChoi: "Ru em búp bê",
      tempo: { cham: 60, vua: 76 },
      amThanh: false,
      loi: [
        "Cái ngủ mày ngủ cho lâu",
        "Mẹ mày đi cấy đồng sâu chưa về",
        "Bắt được con trắm con trê",
        "Cầm cổ lôi về cho cái ngủ ăn"
      ],
      gioiThieu: {
        vi: "Đây là lời ru của miền Bắc. Người ru gọi giấc ngủ là “cái ngủ”, như gọi một bạn nhỏ, và dặn cái ngủ ở lại thật lâu với em bé. Mẹ em bé đang đi cấy lúa ở cánh đồng sâu, chưa về. Mẹ bắt được con cá trắm, con cá trê, sẽ mang về cho “cái ngủ” ăn. Lời ru cho thấy công việc vất vả của người mẹ làm ruộng và tình thương mẹ dành cho con.",
        en: "A lullaby from northern Vietnam. The singer calls sleep “cái ngủ”, as if it were a little friend, and asks it to stay a long time with the baby. The baby's mother is planting rice in a deep, muddy field and hasn't come home yet. She has caught a grass carp and a catfish, and will bring them home to feed “sleep”. The song shows a farming mother's hard work and her love for her child."
      },
      tuKho: [
        { tu: "cái ngủ", hinh: "😴", nghia: "giấc ngủ, được gọi như một bạn nhỏ", en: "sleep, called like a little friend" },
        { tu: "mày", hinh: "👉", nghia: "tiếng gọi thân mật với người nhỏ hoặc với vật; ở đây người ru nói với “cái ngủ”", en: "an informal “you”; here the singer is talking to “sleep”" },
        { tu: "đi cấy", hinh: "🌾", nghia: "cắm cây mạ xuống ruộng nước để thành cây lúa", en: "to plant rice seedlings in a flooded field" },
        { tu: "đồng sâu", hinh: "🏞️", nghia: "cánh đồng xa, nước ngập sâu", en: "a far-off, deep-water field" },
        { tu: "cá trắm", hinh: "🐟", nghia: "loài cá nước ngọt to, thân dài", en: "grass carp, a big freshwater fish" },
        { tu: "cá trê", hinh: "🐟", nghia: "loài cá da trơn, có râu, sống ở ao ruộng", en: "catfish" },
        { tu: "lôi", hinh: "↩️", nghia: "kéo đi theo mình", en: "to drag, to pull along" }
      ],
      cauHoi: [
        { hoi: "“Cái ngủ” là gì?", en: "What is “cái ngủ”?",
          chon: [{ chu: "Giấc ngủ", hinh: "😴" }, { chu: "Cái giường", hinh: "🛏️" }, { chu: "Cái chăn", hinh: "🧣" }], dung: 0 },
        { hoi: "Mẹ đi đâu?", en: "Where is mother?",
          chon: [{ chu: "Đi cấy lúa", hinh: "🌾" }, { chu: "Đi chợ", hinh: "🧺" }, { chu: "Đi học", hinh: "🎒" }], dung: 0 },
        { hoi: "Mẹ bắt được con gì?", en: "What did mother catch?",
          chon: [{ chu: "Cá trắm, cá trê", hinh: "🐟" }, { chu: "Con gà", hinh: "🐔" }, { chu: "Con thỏ", hinh: "🐰" }], dung: 0 },
        { hoi: "Đây là lời ru của miền nào?", en: "Where is this lullaby from?",
          chon: [{ chu: "Bắc Bộ", hinh: "⛰️" }, { chu: "Nam Bộ", hinh: "🛶" }, { chu: "Trung Bộ", hinh: "🏯" }], dung: 0 },
        { hoi: "Mẹ đã về chưa?", en: "Has mother come home yet?",
          chon: [{ chu: "Chưa về", hinh: "🕰️" }, { chu: "Đã về rồi", hinh: "🏠" }, { chu: "Không đi đâu", hinh: "🚫" }], dung: 0 }
      ],
      dienTu: [[0, "ngủ"], [0, "lâu"], [1, "cấy"], [1, "sâu"], [2, "trắm"], [2, "trê"], [3, "ăn"]],
      nhieu: ["chợ", "gà", "nhanh", "trường", "cơm"],
      vanCap: [["lâu", "sâu"], ["trê", "về"], ["mẹ", "nhẹ"], ["cấy", "lấy"], ["ăn", "chăn"]],
      cungChoi: {
        ten: "Ru em búp bê (võng khăn)",
        nguoi: "2 bạn trở lên",
        cho: "Chỗ yên tĩnh trong nhà",
        buoc: [
          { hinh: "🧸", chu: "Đặt búp bê hoặc gấu bông vào một chiếc khăn, hai bạn cầm hai đầu khăn làm võng." },
          { hinh: "🎵", chu: "Bắt đầu bằng “À ơi…”, rồi hát (hoặc đọc) thật chậm từng câu; mỗi câu đưa võng hai lần." },
          { hinh: "🤫", chu: "Hát nhỏ dần ở câu cuối; khi “em bé” đã ngủ, cả nhà đặt ngón tay lên môi: “Suỵt!”" },
          { hinh: "🌾", chu: "Đổi vai: bạn vừa ru làm “mẹ đi cấy”, bước chậm từng bước như đang cấy lúa dưới ruộng." }
        ],
        en: "Lay a doll or teddy in a cloth held at both ends by two children as a hammock. Begin with “À ơi…”, then sing or say each line very slowly, swinging the hammock twice per line. Get quieter on the last line; when the “baby” is asleep, everyone puts a finger to their lips: “Suỵt!” Swap roles: the singer becomes the mother planting rice, stepping slowly as if in a paddy.",
        anToan: "Hai bạn cầm võng khăn đưa nhẹ, sát mặt đất; không cho em bé thật nằm vào võng khăn."
      },
      thuThach: [
        "Hát hoặc đọc lời ru cho ông bà hoặc cha mẹ nghe",
        "Ru búp bê ngủ, bắt đầu bằng “À ơi…”",
        "Hỏi ông bà, cha mẹ: Cấy lúa là làm thế nào? Ông bà đã đi cấy bao giờ chưa?"
      ],
      goiY: {
        nghe: "Lời ru chậm, êm. Chọn nhịp Chậm. Có thể thêm “À ơi” ở đầu như cách ru thật. Khi có bản thu giọng hát của trường, cho bé nghe làn điệu ru Bắc Bộ.",
        hieu: "Nói với bé: “mày” ở đây là người ru nói với “cái ngủ”; với người lớn, các bạn nói lễ phép, không gọi “mày”. Kể về việc cấy lúa và các loài cá ở ruộng.",
        nho: "Bài 4 câu lục bát; nhớ chuỗi: ngủ → mẹ đi cấy → bắt cá → mang về.",
        choi: "Cặp vần lâu – sâu, trê – về nối các câu; chỉ cho bé thấy vần nối hai câu.",
        cungChoi: "Hoạt động hợp trước giờ ngủ; người lớn ru bé bằng chính lời ru này."
      }
    },

    {
      ma: "ly-ngua-o", so: 22, phan: "baihat", trangThai: "san-sang",
      ten: "Lý ngựa ô",
      en: "The black horse",
      mien: "Nam Bộ",
      nguon: "Dân ca Nam Bộ",
      diBan: "Lời chính, bản phổ biến; có dị bản ở nhiều chữ và tiếng đệm khác nhau. Miền Trung cũng có điệu Lý ngựa ô riêng.",
      troChoi: "Cưỡi ngựa que",
      tempo: { cham: 84, vua: 108 },
      amThanh: false,
      loi: [
        "Khớp con ngựa ngựa ô",
        "Ngựa ô anh khớp",
        "Khớp cái kiệu vàng",
        "Anh tra khớp bạc",
        "Lục lạc đồng đen",
        "Búp sen lá dặm",
        "Dây cương nhuộm thắm",
        "Cán roi anh bịt vàng",
        "Anh đưa nàng",
        "Anh đưa nàng về dinh"
      ],
      gioiThieu: {
        vi: "Lý ngựa ô là điệu lý Nam Bộ vui, nhịp nhanh như tiếng vó ngựa. Chàng trai thắng con ngựa ô (ngựa lông đen) vào chiếc kiệu vàng và trang trí thật đẹp: khớp bạc, lục lạc đồng, dây cương nhuộm đỏ, cán roi bịt vàng, để đưa cô dâu về nhà. Bài cho các bạn thấy đám cưới ngày xưa ở làng quê: chú rể đi đón cô dâu bằng ngựa và kiệu.",
        en: "Lý ngựa ô is a lively southern folk tune with a quick beat like galloping hooves. A young man harnesses his black horse to a golden carriage and decorates everything beautifully – a silver bit, copper bells, red-dyed reins, a whip with a gold-capped handle – to bring his bride home. It shows a village wedding of long ago, when the groom fetched the bride by horse and carriage."
      },
      tuKho: [
        { tu: "ngựa ô", hinh: "🐎", nghia: "ngựa có lông màu đen", en: "a black horse" },
        { tu: "khớp", hinh: "🐴", nghia: "đeo dây và đồ thắng vào đầu, miệng con ngựa để điều khiển", en: "to put the bridle and bit on a horse" },
        { tu: "kiệu", hinh: "🎠", nghia: "ghế có mui, có đòn khiêng hoặc ngựa kéo, ngày xưa để chở người", en: "a palanquin or carriage" },
        { tu: "lục lạc", hinh: "🔔", nghia: "cái chuông nhỏ đeo ở cổ ngựa, kêu leng keng", en: "small bells on a horse's collar" },
        { tu: "dây cương", hinh: "🪢", nghia: "dây buộc vào miệng ngựa để người cưỡi điều khiển", en: "reins" },
        { tu: "nhuộm thắm", hinh: "🟥", nghia: "nhuộm màu đỏ đậm", en: "dyed deep red" },
        { tu: "nàng", hinh: "👰", nghia: "cô gái; ở đây là cô dâu", en: "a young woman; here, the bride" },
        { tu: "về dinh", hinh: "🏡", nghia: "về nhà (nói vui, như về nhà quan)", en: "to go home (playfully, as if to a mansion)" }
      ],
      cauHoi: [
        { hoi: "Ngựa ô là ngựa màu gì?", en: "What colour is a ngựa ô?",
          chon: [{ chu: "Màu đen", hinh: "🐎" }, { chu: "Màu trắng", hinh: "⬜" }, { chu: "Màu nâu", hinh: "🟫" }], dung: 0 },
        { hoi: "Lục lạc làm bằng gì?", en: "What are the bells made of?",
          chon: [{ chu: "Đồng đen", hinh: "🔔" }, { chu: "Gỗ", hinh: "🪵" }, { chu: "Giấy", hinh: "📄" }], dung: 0 },
        { hoi: "Anh đưa ai về dinh?", en: "Whom does he take home?",
          chon: [{ chu: "Nàng (cô dâu)", hinh: "👰" }, { chu: "Ông bà", hinh: "👴" }, { chu: "Con ngựa", hinh: "🐎" }], dung: 0 },
        { hoi: "Bài dân ca này của miền nào?", en: "Which region is this song from?",
          chon: [{ chu: "Nam Bộ", hinh: "🛶" }, { chu: "Bắc Bộ", hinh: "⛰️" }, { chu: "Tây Bắc", hinh: "🏔️" }], dung: 0 },
        { hoi: "Bài hát kể về dịp gì?", en: "What occasion is the song about?",
          chon: [{ chu: "Đám cưới", hinh: "💒" }, { chu: "Sinh nhật", hinh: "🎂" }, { chu: "Tết Trung thu", hinh: "🏮" }], dung: 0 }
      ],
      dienTu: [[0, "ô"], [2, "vàng"], [3, "bạc"], [4, "đen"], [6, "thắm"], [8, "nàng"], [9, "dinh"]],
      nhieu: ["trâu", "xanh", "nhà", "gỗ", "đỏ"],
      vanCap: [["vàng", "nàng"], ["bạc", "lạc"], ["đen", "sen"], ["ô", "cô"], ["khớp", "lớp"]],
      cungChoi: {
        ten: "Cưỡi ngựa que",
        nguoi: "1 bạn trở lên",
        cho: "Sân hoặc phòng rộng",
        buoc: [
          { hinh: "🎋", chu: "Mỗi bạn lấy một cây gậy dài, nhẹ (ống giấy cuộn, cán chổi, tàu lá chuối) làm ngựa, kẹp giữa hai chân." },
          { hinh: "🐎", chu: "Hát (hoặc đọc) và phi “ngựa” theo nhịp: mỗi tiếng một bước nhún như ngựa phi." },
          { hinh: "🔔", chu: "Đến câu “Lục lạc đồng đen”, lắc tay như lắc chuông: leng keng!" },
          { hinh: "🏡", chu: "Đến câu cuối “Anh đưa nàng về dinh”, cả đàn ngựa phi về “nhà” (một góc sân đã chọn)." }
        ],
        en: "Each child takes a long, light stick (a rolled-up paper tube, a broom handle or a banana leaf stem) as a horse and holds it between their legs. Sing or chant and gallop to the beat, one bounce per syllable. At “Lục lạc đồng đen”, shake your hand like ringing bells: jingle! On the last line, all the horses gallop “home” to a chosen corner.",
        anToan: "Dùng gậy nhẹ, đầu tròn (ống giấy cuộn là tốt nhất); phi ngựa cách xa nhau, không vung gậy."
      },
      thuThach: [
        "Hát hoặc đọc lời bài cho ông bà hoặc cha mẹ nghe",
        "Làm một con ngựa que và phi theo nhịp bài",
        "Hỏi ông bà, cha mẹ: Đám cưới ngày xưa và bây giờ khác nhau thế nào?"
      ],
      goiY: {
        nghe: "Câu ngắn, nhịp nhanh như vó ngựa. Chọn nhịp Vừa khi bé đã quen. Khi có bản thu giọng hát của trường, cho bé nghe làn điệu lý Nam Bộ.",
        hieu: "Nhiều từ chỉ đồ của ngựa (khớp, dây cương, lục lạc, roi): dùng tranh để giải thích. Kể bé nghe về đám cưới ngày xưa: rước dâu bằng kiệu, bằng ngựa.",
        nho: "Bài là một chuỗi đồ trang trí: khớp bạc, lục lạc, búp sen, dây cương, cán roi. Nhớ theo thứ tự từ đầu ngựa ra sau.",
        choi: "Cặp vần vàng – nàng, bạc – lạc, đen – sen giúp bé nhớ các câu liền nhau.",
        cungChoi: "Cưỡi ngựa que là trò chơi dân gian vui; người lớn đếm nhịp và nhắc các bạn giữ khoảng cách."
      }
    },

    {
      ma: "ru-con", so: 23, phan: "baihat", trangThai: "san-sang",
      ten: "Ru con",
      en: "A northern lullaby",
      mien: "Bắc Bộ",
      nguon: "Hát ru dân gian Bắc Bộ, lời ca dao “Con cò mà đi ăn đêm”",
      diBan: "Bản phổ biến; khi ru có thêm “à ơi”, “ạ ời”. Có dị bản “Ông ơi ông vớt tôi vào”.",
      troChoi: "Ru em búp bê",
      tempo: { cham: 60, vua: 76 },
      amThanh: false,
      loi: [
        "Con cò mà đi ăn đêm",
        "Đậu phải cành mềm lộn cổ xuống ao",
        "Ông ơi ông vớt tôi nao",
        "Tôi có lòng nào ông hãy xáo măng",
        "Có xáo thì xáo nước trong",
        "Đừng xáo nước đục đau lòng cò con"
      ],
      gioiThieu: {
        vi: "Lời ru miền Bắc kể chuyện con cò đi kiếm ăn ban đêm, đậu phải cành cây mềm nên ngã lộn xuống ao. Cò kêu ông lão vớt mình lên và nói: tôi chẳng làm gì sai, ông đừng làm hại tôi; nếu ông nhất định nấu thì nấu nước trong, đừng nấu nước đục kẻo cò con đau lòng. Ngày xưa, bà và mẹ ru em bé bằng lời này; con cò là hình ảnh người mẹ vất vả kiếm ăn, lúc nào cũng lo cho con.",
        en: "A northern lullaby: a stork goes looking for food at night, lands on a weak branch and tumbles into a pond. It begs an old man to pull it out: “I have done nothing wrong, please don't harm me; if you must cook me, use clear water, not muddy water, or my chicks will be heartbroken.” Grandmothers and mothers sang this to put babies to sleep; the stork stands for a hard-working mother who always worries about her children."
      },
      tuKho: [
        { tu: "ăn đêm", hinh: "🌙", nghia: "đi kiếm ăn vào ban đêm", en: "to look for food at night" },
        { tu: "cành mềm", hinh: "🌿", nghia: "cành cây nhỏ, yếu, dễ gãy", en: "a thin, weak branch" },
        { tu: "lộn cổ", hinh: "🙃", nghia: "ngã chúc đầu xuống", en: "to fall head first" },
        { tu: "vớt", hinh: "🪣", nghia: "lấy vật dưới nước lên", en: "to fish something out of the water" },
        { tu: "nao", hinh: "❓", nghia: "nào (tiếng cũ, dùng khi nhờ vả, kêu gọi)", en: "please, come on (old word)" },
        { tu: "xáo măng", hinh: "🎍", nghia: "nấu (cò) với măng tre", en: "to cook (the stork) with bamboo shoots" },
        { tu: "nước đục", hinh: "🟤", nghia: "nước có bùn, không trong", en: "muddy water" },
        { tu: "đau lòng", hinh: "💔", nghia: "buồn lắm", en: "heartbroken" }
      ],
      cauHoi: [
        { hoi: "Con cò đi ăn lúc nào?", en: "When does the stork go looking for food?",
          chon: [{ chu: "Ban đêm", hinh: "🌙" }, { chu: "Buổi sáng", hinh: "🌅" }, { chu: "Buổi trưa", hinh: "☀️" }], dung: 0 },
        { hoi: "Vì sao cò ngã xuống ao?", en: "Why does the stork fall into the pond?",
          chon: [{ chu: "Đậu phải cành mềm", hinh: "🌿" }, { chu: "Bị mưa to", hinh: "🌧️" }, { chu: "Bị mèo đuổi", hinh: "🐱" }], dung: 0 },
        { hoi: "Cò nhờ ai vớt lên?", en: "Whom does the stork ask for help?",
          chon: [{ chu: "Ông lão", hinh: "👴" }, { chu: "Con cá", hinh: "🐟" }, { chu: "Bạn chim", hinh: "🐦" }], dung: 0 },
        { hoi: "Cò lo cho ai?", en: "Whom does the stork worry about?",
          chon: [{ chu: "Cò con", hinh: "🐣" }, { chu: "Ông lão", hinh: "👴" }, { chu: "Con cá", hinh: "🐟" }], dung: 0 },
        { hoi: "Ngày xưa ai hay hát lời ru này?", en: "Who used to sing this lullaby?",
          chon: [{ chu: "Bà và mẹ", hinh: "👵" }, { chu: "Thầy giáo", hinh: "🧑‍🏫" }, { chu: "Người bán hàng", hinh: "🧺" }], dung: 0 }
      ],
      dienTu: [[0, "đêm"], [1, "mềm"], [1, "ao"], [2, "vớt"], [3, "măng"], [4, "trong"], [5, "con"]],
      nhieu: ["ngày", "sông", "cứng", "cá", "ngọt"],
      vanCap: [["đêm", "mềm"], ["ao", "nao"], ["trong", "lòng"], ["măng", "trăng"], ["cò", "to"], ["ông", "sông"]],
      cungChoi: {
        ten: "Ru em búp bê (à ơi)",
        nguoi: "1 bạn trở lên",
        cho: "Chỗ yên tĩnh trong nhà",
        buoc: [
          { hinh: "🧸", chu: "Bế búp bê trong tay, ngồi trên ghế hoặc võng." },
          { hinh: "🎵", chu: "Mở đầu bằng “À ơi…”, hát chậm từng câu, cuối câu kéo dài “ơ…”." },
          { hinh: "🤲", chu: "Vừa hát vừa đung đưa người nhẹ nhàng sang hai bên." },
          { hinh: "🤫", chu: "Hát xong, đặt búp bê nằm xuống, đắp chăn, nói nhỏ: “Ngủ ngoan nhé!”" }
        ],
        en: "Hold the doll in your arms, sitting on a chair or in a hammock. Begin with “À ơi…”, then sing each line slowly, stretching out the end of each line. Sway gently from side to side. When you finish, lay the doll down, tuck it in and whisper “Ngủ ngoan nhé!” (sleep well).",
        anToan: "Ngồi vững khi đung đưa; võng thật thì cần người lớn trông."
      },
      thuThach: [
        "Hát hoặc đọc lời ru cho ông bà hoặc cha mẹ nghe",
        "Nhờ ông bà hoặc cha mẹ hát ru mình bằng lời “Con cò mà đi ăn đêm”",
        "Nói được câu “Ngủ ngoan nhé!” khi ru búp bê"
      ],
      goiY: {
        nghe: "Lời ru thể lục bát, rất chậm. Khi có bản thu giọng hát của trường, nghe giọng ru thật; giọng đọc và tiếng mõ chỉ để tập nhịp chữ.",
        hieu: "Lời ru có chuyện buồn; với bé nhỏ, nhấn vào ý con cò thương con và mong ông lão tốt bụng. Giải thích “nao” là tiếng cũ, nghĩa như “nào”.",
        nho: "Vần lục bát nối câu: đêm – mềm, ao – nao, trong – lòng. Nhớ vần là nhớ câu sau.",
        choi: "Hỏi bé tìm tiếng vần với “đêm” (mềm, thêm, êm…).",
        cungChoi: "Gợi ý cha mẹ hát chính lời ru này cho bé trước giờ ngủ vài tối liền."
      }
    },

    {
      ma: "vi-dau", so: 24, phan: "baihat", trangThai: "san-sang",
      ten: "Ví dầu",
      en: "A southern lullaby",
      mien: "Nam Bộ",
      nguon: "Hát ru dân gian Nam Bộ",
      diBan: "Bản phổ biến; có dị bản “Cầu tre lắc lẻo gập ghềnh khó đi”. Khi ru, người ta mở đầu bằng “Ầu ơ…”.",
      troChoi: "Mẹ dắt con qua cầu",
      tempo: { cham: 60, vua: 76 },
      amThanh: false,
      loi: [
        "Ví dầu cầu ván đóng đinh",
        "Cầu tre lắt lẻo gập ghềnh khó đi",
        "Khó đi mẹ dắt con đi",
        "Con thi trường học, mẹ thi trường đời"
      ],
      gioiThieu: {
        vi: "Đây là lời ru quen thuộc nhất của miền Nam, thường mở đầu bằng tiếng “Ầu ơ…”. Lời ru nói về cây cầu ván đóng đinh, cây cầu tre lắt lẻo, gập ghềnh, rất khó đi. Ở miền Tây Nam Bộ có nhiều kênh rạch, nhiều cầu tre nhỏ. Cầu khó đi thì mẹ dắt con đi; con đi học, đi thi ở trường, còn mẹ thì “thi” với cuộc sống vất vả mỗi ngày để nuôi con.",
        en: "The best-known southern lullaby, usually beginning with “Ầu ơ…”. It sings of a plank bridge nailed together and a shaky, bumpy bamboo bridge that is hard to cross. The Mekong Delta has many canals and little bamboo bridges. When the bridge is hard to cross, mother holds her child's hand; the child takes tests at school, while mother faces the “tests” of a hard life every day to raise her child."
      },
      tuKho: [
        { tu: "ví dầu", hinh: "🤔", nghia: "giả như, nếu như (tiếng mở đầu lời ru miền Nam)", en: "suppose, if (an opening phrase in southern lullabies)" },
        { tu: "cầu ván", hinh: "🌉", nghia: "cây cầu làm bằng tấm gỗ", en: "a bridge made of wooden planks" },
        { tu: "đóng đinh", hinh: "🔨", nghia: "dùng búa đóng đinh để giữ chặt", en: "to nail together" },
        { tu: "cầu tre", hinh: "🎋", nghia: "cây cầu làm bằng cây tre", en: "a bamboo bridge" },
        { tu: "lắt lẻo", hinh: "〰️", nghia: "cao, mảnh và chông chênh, dễ rung lắc", en: "high, thin and shaky" },
        { tu: "gập ghềnh", hinh: "⛰️", nghia: "lồi lõm, không bằng phẳng", en: "bumpy, uneven" },
        { tu: "dắt", hinh: "🤝", nghia: "nắm tay dẫn đi", en: "to lead by the hand" },
        { tu: "trường đời", hinh: "🌏", nghia: "cuộc sống, nơi người lớn học hỏi và vượt qua khó khăn", en: "the “school of life”" }
      ],
      cauHoi: [
        { hoi: "Cầu tre thế nào?", en: "What is the bamboo bridge like?",
          chon: [{ chu: "Lắt lẻo, gập ghềnh", hinh: "🎋" }, { chu: "Rộng và phẳng", hinh: "🛣️" }, { chu: "Làm bằng đá", hinh: "🪨" }], dung: 0 },
        { hoi: "Ai dắt con đi qua cầu?", en: "Who leads the child across?",
          chon: [{ chu: "Mẹ", hinh: "👩" }, { chu: "Bạn", hinh: "🧒" }, { chu: "Con mèo", hinh: "🐱" }], dung: 0 },
        { hoi: "Con thi ở đâu?", en: "Where does the child take tests?",
          chon: [{ chu: "Trường học", hinh: "🏫" }, { chu: "Trường đời", hinh: "🌏" }, { chu: "Ngoài chợ", hinh: "🧺" }], dung: 0 },
        { hoi: "Lời ru này thường mở đầu bằng tiếng gì?", en: "How does this lullaby usually begin?",
          chon: [{ chu: "Ầu ơ", hinh: "🎵" }, { chu: "Xin chào", hinh: "👋" }, { chu: "Một, hai, ba", hinh: "🔢" }], dung: 0 },
        { hoi: "Vì sao miền Tây Nam Bộ có nhiều cầu nhỏ?", en: "Why are there many small bridges in the Mekong Delta?",
          chon: [{ chu: "Vì có nhiều kênh rạch", hinh: "🛶" }, { chu: "Vì có nhiều núi", hinh: "⛰️" }, { chu: "Vì có nhiều tuyết", hinh: "❄️" }], dung: 0 }
      ],
      dienTu: [[0, "đinh"], [1, "tre"], [1, "ghềnh"], [2, "mẹ"], [2, "con"], [3, "học"], [3, "đời"]],
      nhieu: ["sắt", "bố", "chơi", "sông", "nhà"],
      vanCap: [["đi", "thi"], ["tre", "ve"], ["lẻo", "kẹo"], ["học", "cóc"], ["đời", "chơi"], ["đinh", "xinh"]],
      cungChoi: {
        ten: "Mẹ dắt con qua cầu",
        nguoi: "Bé và một người lớn",
        cho: "Trong nhà; dán một đường băng dính dài trên sàn làm “cầu”",
        buoc: [
          { hinh: "🎋", chu: "Dán một đường băng dính dài trên sàn, hoặc đặt một sợi dây thẳng làm “cầu tre”." },
          { hinh: "🤝", chu: "Người lớn nắm tay bé, cùng đi trên “cầu”, mỗi tiếng một bước, vừa đi vừa đọc bài." },
          { hinh: "🎵", chu: "Qua hết “cầu”, bé ôm búp bê và ru “Ầu ơ… ví dầu…” thật chậm." },
          { hinh: "🔄", chu: "Đổi vai: bé “dắt” búp bê hoặc em nhỏ qua cầu." }
        ],
        en: "Put a long strip of tape or a straight rope on the floor as the “bamboo bridge”. The grown-up holds the child's hand and they walk along it together, one step per syllable, saying the words. At the end of the bridge, the child cuddles a doll and sings “Ầu ơ… ví dầu…” very slowly. Then swap: the child leads the doll or a younger sibling across.",
        anToan: "“Cầu” dán sát sàn, không đi trên ghế hay vật cao; người lớn luôn nắm tay bé."
      },
      thuThach: [
        "Hát hoặc đọc lời ru cho ông bà hoặc cha mẹ nghe",
        "Chơi “Mẹ dắt con qua cầu” với cha hoặc mẹ",
        "Hỏi cha mẹ: Ở quê mình có cầu tre không? Cha mẹ đã đi qua chưa?"
      ],
      goiY: {
        nghe: "Lời ru Nam Bộ mở bằng “Ầu ơ…”, hát rất chậm, kéo dài cuối câu. Khi có bản thu giọng hát của trường, cho bé nghe giọng ru thật.",
        hieu: "Giải thích “trường đời”: người lớn cũng phải học và vượt qua khó khăn mỗi ngày. Hỏi bé: “Mẹ đã giúp con qua những việc khó nào?”",
        nho: "Câu 2 kết thúc bằng “khó đi”, câu 3 lại bắt đầu bằng “Khó đi”: tiếng nối câu giúp bé nhớ.",
        choi: "Cặp vần đi – thi nối câu 3 và câu 4; cho bé tìm thêm tiếng vần với “đi” (thi, ghi, bi…).",
        cungChoi: "Hoạt động gắn kết mẹ con theo lời ru; có thể làm lúc chuẩn bị đi ngủ."
      }
    }
  ]
};
