/* Kiểm tra dữ liệu data/bai-hat.js: chạy `node tests/kiem-du-lieu.js` (thêm --du để bắt buộc đủ 24 bài "san-sang").
   - Mọi bài "san-sang" có đủ các trường như bài mẫu "dung-dang-dung-de", đúng kiểu.
   - Mọi chữ ở dạng NFC; không có emoji trong chữ (chỉ trường "hinh" và "bieu" được dùng hình).
   - dienTu khớp đúng một tiếng trong câu; vanCap không trùng thẻ; cauHoi có đáp án hợp lệ. */
"use strict";
var path = require("path");
global.window = {};
require(path.join(__dirname, "..", "data", "bai-hat.js"));
var D = window.HAT_CA, loi = [];
function bao(ma, s) { loi.push(ma + ": " + s); }

var MAU = D.bai.filter(function (b) { return b.ma === "dung-dang-dung-de"; })[0];
var TRUONG = Object.keys(MAU);
var HINH = /\p{Extended_Pictographic}/u;
function boDau(t) { return t.normalize("NFC").replace(/^[“"‘'(\[]+|[”"’'),.!?;:\]]+$/g, ""); }

// Duyệt mọi chuỗi: NFC, không emoji (trừ khoá hinh, bieu)
function duyet(ma, v, khoa) {
  if (typeof v === "string") {
    if (v !== v.normalize("NFC")) bao(ma, "chữ chưa NFC ở " + khoa + ": " + v);
    if (!/(^|\.)(hinh|bieu)$/.test(khoa) && HINH.test(v)) bao(ma, "có emoji trong chữ ở " + khoa + ": " + v);
    if (/\s{2,}|^\s|\s$/.test(v)) bao(ma, "thừa khoảng trắng ở " + khoa);
  } else if (Array.isArray(v)) v.forEach(function (x, i) { duyet(ma, x, khoa + "[" + i + "]"); });
  else if (v && typeof v === "object") Object.keys(v).forEach(function (k) { duyet(ma, v[k], khoa ? khoa + "." + k : k); });
}
duyet("phan", D.phan, "");

var maDaCo = {}, soDaCo = {};
D.bai.forEach(function (b) {
  if (maDaCo[b.ma]) bao(b.ma, "trùng mã bài"); maDaCo[b.ma] = 1;
  if (soDaCo[b.so]) bao(b.ma, "trùng số bài"); soDaCo[b.so] = 1;
  if (!D.phan.some(function (p) { return p.id === b.phan; })) bao(b.ma, "phần không có");
  if (b.trangThai !== "san-sang") { if (process.argv.indexOf("--du") >= 0) bao(b.ma, "chưa san-sang"); return; }
  duyet(b.ma, b, "");
  TRUONG.forEach(function (k) {
    if (!(k in b)) bao(b.ma, "thiếu trường " + k);
    else if (typeof b[k] !== typeof MAU[k] || Array.isArray(b[k]) !== Array.isArray(MAU[k])) bao(b.ma, "sai kiểu trường " + k);
  });
  if (b.phan === "baihat" && !b.mien) bao(b.ma, "bài dân ca thiếu mien");
  if (b.amThanh !== false) bao(b.ma, "amThanh phải là false khi chưa có tệp");
  if (!(b.tempo && b.tempo.cham > 0 && b.tempo.vua > b.tempo.cham)) bao(b.ma, "tempo sai");
  if (b.loi.length < 4) bao(b.ma, "lời dưới 4 câu (trò Tiếp sức cần ít nhất 4)");
  ["vi", "en"].forEach(function (k) { if (!b.gioiThieu[k]) bao(b.ma, "thiếu gioiThieu." + k); });
  if (b.tuKho.length < 5) bao(b.ma, "tuKho dưới 5 thẻ");
  b.tuKho.forEach(function (w, i) { ["tu", "hinh", "nghia", "en"].forEach(function (k) { if (!w[k]) bao(b.ma, "tuKho[" + i + "] thiếu " + k); }); });
  if (b.cauHoi.length !== 5) bao(b.ma, "cauHoi phải có 5 câu");
  b.cauHoi.forEach(function (q, i) {
    if (!q.hoi || !q.en || !Array.isArray(q.chon) || q.chon.length !== 3) bao(b.ma, "cauHoi[" + i + "] sai khuôn");
    else if (!(q.dung >= 0 && q.dung < q.chon.length)) bao(b.ma, "cauHoi[" + i + "] đáp án sai");
    (q.chon || []).forEach(function (c, j) { if (!c.chu || !c.hinh) bao(b.ma, "cauHoi[" + i + "].chon[" + j + "] thiếu chu/hinh"); });
  });
  // dienTu: mỗi chỗ trống khớp một tiếng trong câu, không dùng một tiếng hai lần
  var daDung = {};
  if (b.dienTu.length < 5) bao(b.ma, "dienTu dưới 5 chỗ");
  b.dienTu.forEach(function (x) {
    var cau = b.loi[x[0]];
    if (cau == null) { bao(b.ma, "dienTu câu " + x[0] + " không có"); return; }
    var ts = cau.split(/\s+/), k = ts.findIndex(function (w, j) { return !daDung[x[0] + ":" + j] && boDau(w).toLowerCase() === x[1].toLowerCase(); });
    if (k < 0) bao(b.ma, "dienTu “" + x[1] + "” không có trong câu " + x[0]); else daDung[x[0] + ":" + k] = 1;
  });
  if (b.nhieu.length < 3) bao(b.ma, "nhieu dưới 3 tiếng");
  if (b.vanCap.length < 4 || b.vanCap.length > 6) bao(b.ma, "vanCap cần 4–6 cặp");
  var the = {};
  b.vanCap.forEach(function (c) { c.forEach(function (w) { var t = w.toLowerCase(); if (the[t]) bao(b.ma, "vanCap trùng thẻ " + w); the[t] = 1; }); });
  ["ten", "nguoi", "cho", "en", "anToan"].forEach(function (k) { if (!b.cungChoi[k]) bao(b.ma, "cungChoi thiếu " + k); });
  if (!(b.cungChoi.buoc && b.cungChoi.buoc.length >= 3)) bao(b.ma, "cungChoi dưới 3 bước");
  if (b.thuThach.length !== 3) bao(b.ma, "thuThach phải có 3 việc");
  ["nghe", "hieu", "nho", "choi", "cungChoi"].forEach(function (k) { if (!b.goiY[k]) bao(b.ma, "goiY thiếu " + k); });
});

var san = D.bai.filter(function (b) { return b.trangThai === "san-sang"; }).length;
if (loi.length) { console.log("LỖI (" + loi.length + "):\n- " + loi.join("\n- ")); process.exit(1); }
console.log("Dữ liệu hợp lệ: " + D.bai.length + " bài, " + san + " bài sẵn sàng.");
