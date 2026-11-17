/* Dữ liệu góc "Hát cùng Trâu Con" – học tiếng Việt qua đồng dao, vè, dân ca và hát ru.
   Bài mẫu đầy đủ: "Dung dăng dung dẻ". Các bài khác mới có tên (trangThai: "du-kien"),
   soạn dần theo đúng khuôn của bài mẫu rồi đổi trangThai thành "san-sang".

   Lời bài: chỉ dùng văn học dân gian (đồng dao, vè, dân ca, hát ru), chọn bản phổ biến.
   Bài hát có tác giả (nhạc thiếu nhi) chỉ đưa lên khi đã có giấy phép bằng văn bản.

   amThanh: false → ẩn nút "Nghe". Khi đã chép đủ tệp giọng của trường vào audio/<ma>/
   (xem AM-THANH.md) thì đổi thành true. Không dùng giọng máy của thiết bị. */
window.HAT_CA = {
  phan: [
    { id: "dongdao", so: 1, ten: "Đồng dao", en: "Children's chants", bieu: "👫",
      moTa: "Vừa đọc vừa chơi: dắt tay, kéo cưa, bắt ngón tay…",
      moTaEn: "Chant while you play: walking hand in hand, sawing, catching fingers…" },
    { id: "ve", so: 2, ten: "Vè", en: "Folk list-rhymes", bieu: "🐦",
      moTa: "Bài vè kể tên chim, cá, trái cây… đọc vui, nhớ nhanh",
      moTaEn: "Rhymes that name birds, fish, fruit… fun to say, quick to remember" },
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

    /* ================= PHẦN 1 – ĐỒNG DAO (dự kiến) ================= */
    { ma: "chi-chi-chanh-chanh", so: 2, phan: "dongdao", trangThai: "du-kien", ten: "Chi chi chành chành", en: "Catch the finger", troChoi: "Bắt ngón tay" },
    { ma: "keo-cua-lua-xe", so: 3, phan: "dongdao", trangThai: "du-kien", ten: "Kéo cưa lừa xẻ", en: "Sawing the log", troChoi: "Kéo cưa" },
    { ma: "nu-na-nu-nong", so: 4, phan: "dongdao", trangThai: "du-kien", ten: "Nu na nu nống", en: "Counting feet", troChoi: "Đếm chân" },
    { ma: "tap-tam-vong", so: 5, phan: "dongdao", trangThai: "du-kien", ten: "Tập tầm vông", en: "Which hand?", troChoi: "Đoán tay" },
    { ma: "rong-ran-len-may", so: 6, phan: "dongdao", trangThai: "du-kien", ten: "Rồng rắn lên mây", en: "The dragon-snake", troChoi: "Rồng rắn" },
    { ma: "tha-dia-ba-ba", so: 7, phan: "dongdao", trangThai: "du-kien", ten: "Thả đỉa ba ba", en: "Catch me in the river", troChoi: "Đuổi bắt" },
    { ma: "lon-cau-vong", so: 8, phan: "dongdao", trangThai: "du-kien", ten: "Lộn cầu vồng", en: "Rainbow turn", troChoi: "Lộn cầu vồng" },
    { ma: "xia-ca-me", so: 9, phan: "dongdao", trangThai: "du-kien", ten: "Xỉa cá mè", en: "Who is “it”?", troChoi: "Chọn người" },
    { ma: "con-voi-con-voi", so: 10, phan: "dongdao", trangThai: "du-kien", ten: "Con vỏi con voi", en: "The elephant walk", troChoi: "Làm voi đi" },
    { ma: "ba-cong-di-cho", so: 11, phan: "dongdao", trangThai: "du-kien", ten: "Bà còng đi chợ trời mưa", en: "Granny goes to market", troChoi: "Đóng vai" },
    { ma: "ong-giang-ong-giang", so: 12, phan: "dongdao", trangThai: "du-kien", ten: "Ông giẳng ông giăng", en: "Mister Moon", troChoi: "Ngắm trăng Trung thu" },

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
