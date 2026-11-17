# Gắn góc "Hát cùng Trâu Con" vào hệ sinh thái (đã duyệt và làm 16-11-2026)

## 1. Bộ mẫu chung – CVCEC/mau-chung, `v1/cvcec-chung.js`, thêm vào `TTV_DANH_SACH` (sau mục "khobau", trước "cotich")

```js
    { id: "hatca", ten_vi: "Hát cùng Trâu Con", ten_en: "Sing with Trâu Con", ngan_vi: "Hát ca", ngan_en: "Songs",
      mo_ta_vi: "Đồng dao, vè, dân ca và hát ru: đọc theo nhịp, chơi cho nhớ", mo_ta_en: "Chants, folk rhymes, folk songs and lullabies: chant to the beat, play to remember",
      url: "https://hatca.cvcec.org/", mau: "#BF55A0", mau_dam: "#7E2A6B", mau_nhat: "#F6E4F1", trau: "trau-listening.png" },
```

Chữ trắng trên màu đậm #7E2A6B đạt tỉ lệ tương phản khoảng 8,6 : 1.

## 2. Cổng – CVCEC/cong-truong-tieng-viet, `chung/gioi-thieu-goc.js`, thêm vào `window.CONG_GT`

```js
  hatca: {
    gioiThieu: { vi: "Dành cho mọi bạn, kể cả bạn mới bắt đầu: học tiếng Việt qua đồng dao, vè, dân ca và hát ru. Vỗ tay theo nhịp mõ, hiểu lời, học thuộc, chơi trò chơi để nhớ, rồi chơi trò dân gian thật cùng gia đình.", en: "For every learner, including beginners: learn Vietnamese through traditional chants, folk rhymes, folk songs and lullabies. Clap to the beat, understand the words, learn them by heart, play games to remember, then play the real folk game with your family." },
    buoc: [
      { e: "🎵", vi: "Nghe và đọc theo nhịp mõ, vỗ tay mỗi tiếng", en: "Chant along to the woodblock beat, one clap per syllable" },
      { e: "🔍", vi: "Hiểu lời: thẻ từ cần biết và câu hỏi nhanh", en: "Understand the words: word cards and quick questions" },
      { e: "🧠", vi: "Nhớ lời: điền từ, xếp câu, che dần chữ", en: "Remember the lyrics: fill the gaps, put lines in order, hide the words" },
      { e: "🎮", vi: "Chơi mà nhớ: lật thẻ tìm vần, tiếp sức đọc bài", en: "Play to remember: rhyme memory cards and a line relay" },
      { e: "🤸", vi: "Cùng chơi: trò chơi dân gian thật với bạn bè, gia đình", en: "Play together: the real folk game with friends and family" },
      { e: "⭐", vi: "Mỗi bước 1 sao, đủ 5 sao là thuộc bài", en: "1 star per step, 5 stars when you know the song" }
    ],
    tongQuan: [
      { so: "24", vi: "bài học", en: "lessons" },
      { so: "3", vi: "phần: Đồng dao, Vè, Dân ca & hát ru", en: "parts: Chants, Folk rhymes, Folk songs & lullabies" },
      { so: "5", vi: "bước, 5 sao mỗi bài", en: "steps, 5 stars per lesson" }
    ],
    phan: [
      { vi: "Đồng dao (Bài 1–12): vừa đọc vừa chơi", en: "Chants (Lessons 1–12): chant while you play" },
      { vi: "Vè (Bài 13–16): chim, cá, trái cây, loài vật", en: "Folk rhymes (Lessons 13–16): birds, fish, fruit, animals" },
      { vi: "Dân ca & hát ru (Bài 17–24)", en: "Folk songs & lullabies (Lessons 17–24)" }
    ],
    vaoThang: true, // trang chủ đã có Mục tiêu, Học xong, Tổng quan, Hướng dẫn
    thu: { url: "https://hatca.cvcec.org/", duong: ["/", "/bai.html"], baiThu: "dung-dang-dung-de", ten: { vi: "Bài 1: Dung dăng dung dẻ", en: "Lesson 1: Dung dăng dung dẻ (Walking hand in hand)" } }
  },
```

## 3. DNS và GitHub Pages
- Tạo kho CVCEC/hatca (công khai), đẩy mã lên nhánh main, bật GitHub Pages (nhánh main, thư mục gốc).
- Thêm CNAME `hatca` → `cvcec.github.io` tại Nhân Hòa. Tệp CNAME trong kho đã ghi `hatca.cvcec.org`.
- Sau khi gắn vào bộ mẫu: thêm dòng `- hatca.cvcec.org – CVCEC/hatca` vào danh sách trang trong CLAUDE.md của mọi kho.
