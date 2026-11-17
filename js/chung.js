/* Dùng chung cho trang chủ và trang bài của góc "Hát cùng Trâu Con".
   Khoá lưu (MỚI, không đổi tên sau khi đã đưa lên):
     "hatca:<ma-bai>" → { sao: { nghe, hieu, nho, choi, cungChoi }, xong: { … }, thuThach: [true, false, …] }
   Không lưu chữ bé viết, không ghi âm, không gửi gì đi đâu. */
(function () {
  "use strict";
  var BUOC = ["nghe", "hieu", "nho", "choi", "cungChoi"];

  function khoa(ma) { return "hatca:" + ma; }
  function doc(ma) {
    try {
      var s = localStorage.getItem(khoa(ma)); var v = s ? JSON.parse(s) : null;
      if (!v || typeof v !== "object") v = {};
      v.sao = v.sao || {}; v.xong = v.xong || {}; v.thuThach = v.thuThach || [];
      return v;
    } catch (e) { return { sao: {}, xong: {}, thuThach: [] }; }
  }
  function ghi(ma, v) { try { localStorage.setItem(khoa(ma), JSON.stringify(v)); } catch (e) {} }
  function soSao(ma) { var s = doc(ma).sao; return BUOC.filter(function (b) { return s[b]; }).length; }

  function tao(the, lop, chu) { var el = document.createElement(the); if (lop) el.className = lop; if (chu != null) el.textContent = chu; return el; }
  function nfc(s) { return String(s == null ? "" : s).normalize("NFC"); }
  function bai(ma) { return (window.HAT_CA.bai || []).filter(function (b) { return b.ma === ma; })[0] || null; }
  function phan(id) { return (window.HAT_CA.phan || []).filter(function (p) { return p.id === id; })[0] || null; }
  function tron(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  // Tách một câu thành các tiếng (bỏ dấu câu ở hai đầu tiếng)
  function tieng(cau) { return nfc(cau).split(/\s+/).filter(Boolean); }
  function boDau(t) { return nfc(t).replace(/^[“"‘'(\[]+|[”"’'),.!?;:\]]+$/g, ""); }
  // Ảnh Trâu Con chính thức của bộ mẫu chung (không vẽ lại, không kéo méo)
  function trau(ten) { return (window.TTV && TTV.anh) ? TTV.anh(ten) : "https://mau.cvcec.org/assets/" + ten; }

  /* ------------------------------------------------------------------
     NHỊP MÕ – TRỐNG: âm gõ tạo ngay trong trình duyệt (Web Audio), không phải giọng đọc.
     Chỉ bắt đầu sau khi bé chạm (iPad yêu cầu).
     ------------------------------------------------------------------ */
  var ctx = null, tong = null;
  function moAmThanh() {
    if (!ctx) {
      var AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC(); tong = ctx.createGain(); tong.gain.value = 0.8; tong.connect(ctx.destination);
    }
    if (ctx.state === "suspended") { try { ctx.resume(); } catch (e) {} }
    return ctx;
  }
  // Tiếng mõ gỗ: hai sóng sin tắt nhanh
  function go(t, manh) {
    [[manh ? 1180 : 960, 0.5], [manh ? 3150 : 2600, 0.12]].forEach(function (p) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "sine"; o.frequency.setValueAtTime(p[0], t); o.frequency.exponentialRampToValueAtTime(p[0] * 0.78, t + 0.06);
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(p[1] * (manh ? 1.2 : 1), t + 0.003);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.1);
      o.connect(g); g.connect(tong); o.start(t); o.stop(t + 0.12);
    });
  }
  // Tiếng trống: sóng trầm hạ dần
  function trong(t) {
    var o = ctx.createOscillator(), g = ctx.createGain();
    o.type = "sine"; o.frequency.setValueAtTime(150, t); o.frequency.exponentialRampToValueAtTime(52, t + 0.28);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.9, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4);
    o.connect(g); g.connect(tong); o.start(t); o.stop(t + 0.42);
  }
  // Tiếng "ting" khi được sao
  function ting() {
    if (!moAmThanh()) return;
    var t = ctx.currentTime + 0.01;
    [880, 1320].forEach(function (f, i) {
      var o = ctx.createOscillator(), g = ctx.createGain();
      o.type = "triangle"; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t + i * 0.09); g.gain.exponentialRampToValueAtTime(0.25, t + i * 0.09 + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + i * 0.09 + 0.35);
      o.connect(g); g.connect(tong); o.start(t + i * 0.09); o.stop(t + i * 0.09 + 0.4);
    });
  }

  /* Đọc theo nhịp: mỗi tiếng một phách mõ, tiếng cuối câu gõ trống.
     loi: mảng câu; tempo: phách/phút; goi.tieng(i, j) mỗi khi tới tiếng thứ j của câu i;
     goi.xong() khi hết bài. Trả về hàm dừng. */
  function chayNhip(loi, tempo, goi, tuyChon) {
    if (!moAmThanh()) { if (goi.loi) goi.loi(); return { lich: [], bayGio: function () { return 0; }, dung: function () {} }; }
    tuyChon = tuyChon || {};
    var phach = 60 / tempo, dem = tuyChon.dem == null ? 2 : tuyChon.dem;
    var t0 = ctx.currentTime + 0.15, lich = [];
    for (var d = 0; d < dem; d++) go(t0 + d * phach, d === dem - 1);
    var t = t0 + dem * phach;
    loi.forEach(function (cau, i) {
      var ts = tieng(cau);
      ts.forEach(function (_, j) {
        var cuoi = j === ts.length - 1;
        if (!tuyChon.imLang) { if (cuoi) trong(t); else go(t, j === 0); }
        lich.push({ t: t, i: i, j: j }); t += phach;
      });
    });
    var het = t, dangChay = true, k = -1;
    function vong() {
      if (!dangChay) return;
      var bay = ctx.currentTime;
      while (k + 1 < lich.length && lich[k + 1].t <= bay + 0.02) { k++; if (goi.tieng) goi.tieng(lich[k].i, lich[k].j); }
      if (bay >= het) { dangChay = false; if (goi.xong) goi.xong(); return; }
      requestAnimationFrame(vong);
    }
    requestAnimationFrame(vong);
    return {
      lich: lich,                                   // thời điểm từng tiếng (giây, theo đồng hồ âm thanh)
      bayGio: function () { return ctx.currentTime; },
      dung: function () {
        if (!dangChay) return;
        dangChay = false;
        try { tong.disconnect(); } catch (e) {}
        tong = ctx.createGain(); tong.gain.value = 0.8; tong.connect(ctx.destination);
      }
    };
  }

  /* Giọng đọc của trường: tệp trong audio/<ma>/. Chỉ dùng khi bài có amThanh: true. */
  var dangPhat = null;
  function phatTep(url) {
    try { if (dangPhat) dangPhat.pause(); } catch (e) {}
    var a = new Audio(url); dangPhat = a;
    var p = a.play(); if (p && p.catch) p.catch(function () {});
    return a;
  }
  function tepCau(b, i) { return "audio/" + b.ma + "/cau-" + String(i + 1).padStart(2, "0") + ".mp3"; }
  function tepCaBai(b) { return "audio/" + b.ma + "/ca-bai.mp3"; }

  window.HC = {
    BUOC: BUOC, doc: doc, ghi: ghi, soSao: soSao, tao: tao, nfc: nfc, bai: bai, phan: phan,
    tron: tron, tieng: tieng, boDau: boDau, trau: trau,
    moAmThanh: moAmThanh, chayNhip: chayNhip, ting: ting,
    phatTep: phatTep, tepCau: tepCau, tepCaBai: tepCaBai
  };
})();
