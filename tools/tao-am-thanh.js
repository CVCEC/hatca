/* Sinh lại AM-THANH.md từ data/bai-hat.js: `node tools/tao-am-thanh.js`.
   Danh sách tệp cần thu cho mọi bài "san-sang": ca-bai.mp3 và cau-NN.mp3 theo thứ tự trong `loi`. */
"use strict";
var fs = require("fs"), path = require("path");
global.window = {};
require(path.join(__dirname, "..", "data", "bai-hat.js"));
var D = window.HAT_CA, ra = [];
ra.push("# Âm thanh của góc \"Hát cùng Trâu Con\"", "",
  "Từ 25-11-2026 cả 24 bài đã có tệp giọng AI **Kore** (giọng chuẩn của Trâu Con ở mọi góc, Google Gemini, miền Bắc) do robot `giong-ai/` tạo; các bài đặt `amThanh: true`. Trang ghi rõ “giọng AI” dưới mỗi bài. Nút 🔊 đi qua bộ mẫu (`TTV.phat({ tep, chu })`, quy tắc 7); tệp lỗi thì bộ mẫu tự đọc bằng giọng máy. Trang không gọi speechSynthesis trực tiếp.",
  "Thay bằng bản thu người thật: chép tệp đúng tên dưới đây vào `audio/<ma-bai>/` (đè tệp AI). Robot không ghi đè tệp đã có. Phần 3 (dân ca, hát ru) vẫn cần bản hát của thầy cô.", "",
  "Tệp này sinh từ dữ liệu bằng `node tools/tao-am-thanh.js`; sửa lời bài thì chạy lại.", "",
  "## Tên tệp (MP3, mỗi tệp dưới 25 MB)", "",
  "| Tệp | Nội dung |", "|---|---|",
  "| `audio/<ma-bai>/ca-bai.mp3` | Cả bài, đọc hoặc hát liền một lượt |",
  "| `audio/<ma-bai>/cau-01.mp3` … `cau-NN.mp3` | Từng câu, đánh số từ 01 theo thứ tự trong `loi` |", "",
  "## Giọng nào cho phần nào",
  "- **Đồng dao, vè (Phần 1, 2):** đọc theo nhịp, mỗi tiếng một phách. Tốt nhất là thầy cô đọc thật; chưa có thì dùng giọng chuẩn của trường (giọng AI Kore) và ghi chú là giọng AI (trang đã ghi).",
  "- **Dân ca, hát ru (Phần 3):** cần giọng hát thật (thầy cô hoặc cộng tác viên của trường hát). Trong lúc chờ, Trâu Con hát lời bằng giọng AI (trang ghi rõ); giọng AI không hát đúng làn điệu. Khi hát, thêm tiếng đệm (ơ, à ơi, ầu ơ…) theo làn điệu; tệp từng câu chỉ cần câu hát chính.",
  "- Không lấy bản thu của người khác (YouTube, CD, ca sĩ…): bản thu và phần trình diễn có quyền riêng, kể cả khi lời bài là dân gian.",
  "- Lời đánh dấu “cần soát” trong README (mục Lời bài cần CVCEC soát) nên được soát trước khi thu.", "");
var tong = 0;
D.phan.forEach(function (p) {
  var ds = D.bai.filter(function (b) { return b.phan === p.id && b.trangThai === "san-sang"; });
  if (!ds.length) return;
  ra.push("## Phần " + p.so + " – " + p.ten, "");
  ds.forEach(function (b) {
    var n = b.loi.length + 1; tong += n;
    ra.push("### Bài " + b.so + " – " + b.ten + " (`audio/" + b.ma + "/`): " + n + " tệp" + (b.mien ? " · giọng hát, " + b.mien : ""), "",
      "| Tệp | Lời |", "|---|---|", "| ca-bai.mp3 | Cả bài |");
    b.loi.forEach(function (c, i) { ra.push("| cau-" + String(i + 1).padStart(2, "0") + ".mp3 | " + c + " |"); });
    ra.push("");
  });
});
ra.splice(5, 0, "Tổng cộng: **" + tong + " tệp** cho " + D.bai.filter(function (b) { return b.trangThai === "san-sang"; }).length + " bài.", "");
fs.writeFileSync(path.join(__dirname, "..", "AM-THANH.md"), ra.join("\n"));
console.log("Đã ghi AM-THANH.md: " + tong + " tệp.");
