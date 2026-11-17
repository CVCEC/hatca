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
      amThanh: false,
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
      amThanh: false,
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
      amThanh: false,
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
      amThanh: false,
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
      amThanh: false,
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
      amThanh: false,
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
      amThanh: false,
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
      amThanh: false,
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
      amThanh: false,
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
      amThanh: false,
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

    /* ================= PHẦN 2 – VÈ (dự kiến) ================= */
    { ma: "ve-chim", so: 13, phan: "ve", trangThai: "du-kien", ten: "Vè chim", en: "The bird rhyme", troChoi: "Đoán tên chim" },
    { ma: "ve-ca", so: 14, phan: "ve", trangThai: "du-kien", ten: "Vè cá", en: "The fish rhyme", troChoi: "Đi chợ cá" },
    { ma: "ve-trai-cay", so: 15, phan: "ve", trangThai: "du-kien", ten: "Vè trái cây", en: "The fruit rhyme", troChoi: "Đố quả" },
    { ma: "ve-loai-vat", so: 16, phan: "ve", trangThai: "du-kien", ten: "Vè loài vật", en: "The animal rhyme", troChoi: "Làm động tác con vật" },

    /* ================= PHẦN 3 – DÂN CA & HÁT RU (dự kiến; cần bản thu giọng hát) ================= */
    { ma: "bac-kim-thang", so: 17, phan: "baihat", trangThai: "du-kien", ten: "Bắc kim thang", en: "The bamboo bridge", mien: "Nam Bộ", troChoi: "Vỗ tay theo nhịp" },
    { ma: "ly-cay-bong", so: 18, phan: "baihat", trangThai: "du-kien", ten: "Lý cây bông", en: "The flower song", mien: "Nam Bộ", troChoi: "Kể tên các loài hoa" },
    { ma: "trong-com", so: 19, phan: "baihat", trangThai: "du-kien", ten: "Trống cơm", en: "The rice drum", mien: "Bắc Bộ", troChoi: "Gõ trống" },
    { ma: "co-la", so: 20, phan: "baihat", trangThai: "du-kien", ten: "Cò lả", en: "The flying stork", mien: "Bắc Bộ", troChoi: "Múa cánh cò" },
    { ma: "ly-con-sao", so: 21, phan: "baihat", trangThai: "du-kien", ten: "Lý con sáo", en: "The starling", mien: "Nam Bộ", troChoi: "Chim sáo bay" },
    { ma: "ly-ngua-o", so: 22, phan: "baihat", trangThai: "du-kien", ten: "Lý ngựa ô", en: "The black horse", mien: "Nam Bộ", troChoi: "Cưỡi ngựa gỗ" },
    { ma: "ru-con", so: 23, phan: "baihat", trangThai: "du-kien", ten: "Ru con", en: "A northern lullaby", mien: "Bắc Bộ", troChoi: "Ru em búp bê" },
    { ma: "vi-dau", so: 24, phan: "baihat", trangThai: "du-kien", ten: "Ví dầu", en: "A southern lullaby", mien: "Nam Bộ", troChoi: "Ru em búp bê" }
  ]
};
