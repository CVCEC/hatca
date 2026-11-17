# CLAUDE.md – Hệ sinh thái Trường Tiếng Việt Của Em (CVCEC)

Đọc tệp này trước khi sửa bất kỳ trang nào của trường. Trả lời và viết commit bằng tiếng Việt.

## Bối cảnh
- Chương trình "Trường Tiếng Việt Của Em" của CVCEC – Canada Vietnam Cultural & Educational Council: nền tảng học tiếng Việt và văn hoá trên web, miễn phí, cho mọi lứa tuổi từ trẻ 5 tuổi tới người lớn. Người học chủ yếu là người nước ngoài và trẻ Việt kiều chưa nói được tiếng Việt (bắt đầu từ số 0). Phần lớn học trên iPad và điện thoại. CVCEC tự xây dựng và quản lý toàn bộ.
- Cổng chính: https://vietclass.cvcec.org (kho CVCEC/cong-truong-tieng-viet), nhúng từng góc học trong khung iframe.

## Các trang (GitHub Pages, DNS tại Nhân Hòa, tên miền cvcec.org đã xác minh với GitHub)
- vietnam.cvcec.org – CVCEC/khampha-vietnam
- vuihoctiengviet.cvcec.org – CVCEC/vuihoctiengviet
- venhaem.cvcec.org – CVCEC/venhaem
- baihoc.cvcec.org – CVCEC/truong-tieng-viet
- khobau.cvcec.org – CVCEC/khobautiengviet
- truyencotich.cvcec.org – CVCEC/truyencotich
- cuocsong.cvcec.org – CVCEC/baihoccuocsong
- nguphap.cvcec.org – CVCEC/nguphap
- hatca.cvcec.org – CVCEC/hatca
- trienlam.cvcec.org – CVCEC/trien-lam-em-hoc-tieng-viet
- mau.cvcec.org – CVCEC/mau-chung (bộ mẫu chung)

## Phong cách "Làng Trâu Con"
- Làng quê Việt kiểu sách tranh phẳng; thẻ trắng bo góc lớn; nút viên thuốc; chữ tròn, đậm.
- Màu và phông chỉ lấy từ biến --ttv-* của bộ mẫu; không viết cứng mã màu thương hiệu trong trang.
- Mỗi góc học một màu (gốc / đậm / nhạt) và một ảnh Trâu Con riêng, lấy từ TTV_DANH_SACH.
- Chữ trắng CHỈ trên đỏ son, xanh mực, đỏ lá phong và màu đậm của góc học; màu gốc/nhạt chỉ làm dải màu, nền thẻ, biểu tượng.
- Màn chơi và màn đọc dùng data-ttv-nen="don-gian" (nền kem trơn, không mây/ruộng); chữ đọc nằm trên thẻ trắng.
- Màu chức năng riêng của từng trang (nhóm âm, bản đồ, nhân vật…) giữ trong trang.
- Danh sách góc học chỉ sửa ở TTV_DANH_SACH trong v1/cvcec-chung.js. v1 chỉ sửa không phá vỡ; thay đổi lớn tạo v2.

## Quy tắc bắt buộc
1. Logo góc trên-trái hoặc dưới-trái; chỉ dùng ảnh logo và ảnh Trâu Con chính thức, không vẽ lại, không kéo méo. Dòng mờ "Copyrighted by CVCEC Trường Tiếng Việt Của Em 2026" trên mọi trang.
2. Link giữa các trang cvcec.org mở cùng tab, không target="_blank". Link ra ngoài (Google Form…) được mở tab mới.
3. KHÔNG đổi, xoá hay đổi tên khoá localStorage đang có (khobau:, traucon-kc:, ttvce-b…, vhtv:… và các KEY trong mã). Mất khoá là bé mất sao.
4. Chạy tốt trong khung iframe của cổng: không chặn nhúng khung; âm thanh phát sau khi bé chạm; không phụ thuộc window.top.
5. Tiếng Việt: chuẩn hoá NFC khi so sánh chữ; đọc chữ cái theo âm (a, bờ, cờ, dờ…); không ghi cách đọc dưới chữ.
6. Trâu Con xưng "mình", gọi học sinh "các bạn"; hiền, ấm, chậm.
7. Âm thanh: ưu tiên tệp giọng chuẩn của trường. Từ 17-11-2026, khi chưa có tệp thì TẠM dùng giọng máy của thiết bị, nhưng chỉ qua bộ mẫu: `TTV.phat({tep, chu})` (có tệp thì phát tệp, không có thì đọc `chu`) hoặc `TTV.giong.doc(chu)`. Không gọi speechSynthesis trực tiếp trong trang. Tên chữ cái đưa cho giọng máy theo âm (`TTV.giong.tenChuCai("b")` → "bờ"). Câu cần thu âm ghi vào kịch bản thu âm (am-thanh/ của kho mau-chung).
8. Không đưa tên, logo Khai Minh Đức lên game và slide.
9. Không hiện tên trẻ, phụ huynh. Triển lãm và Về Nhà Em chỉ để xem (hạn chế tải về) và có ghi chú điều khoản sử dụng, liên hệ contact@cvcec.org.
10. Mỗi trang tối đa 1 GB; mỗi tệp dưới 25 MB. Hỏi tôi trước khi thêm video mới.
11. Dùng tốt ở iPad (1024px) và điện thoại (390px); vùng chạm tối thiểu 44px.

## Lộ trình học (cập nhật 17-11-2026)
- Hai hướng học tách bạch:
  - "Làng học tập Trâu Con" cho trẻ dưới 15 tuổi: giữ nguyên các góc, học theo hứng thú; không hiện số thứ tự hay nhãn bậc. Thứ tự góc: Luyện nói – Luyện thanh, Tiếng Việt cơ bản, Văn hoá truyền thống, Ngữ pháp tiếng Việt, Khám phá Việt Nam, Hát cùng Trâu Con, Kho báu ca dao tục ngữ, Truyện cổ tích, Bài học cuộc sống.
  - "Lộ trình theo khung năng lực" cho người học từ 15 tuổi: tab riêng của cổng (/lo-trinh/), xương sống là sách "Vui học tiếng Việt" Quyển 1–2, cùng với Về Nhà Em. Hai góc này có nhom: "lo-trinh" trong TTV_DANH_SACH. Sẽ mở rộng luyện nghe hội thoại, viết văn xuôi, chính tả, ngữ pháp nâng cao theo sườn Quyển 1–2 (soạn mẫu, duyệt rồi mới làm tiếp).
  - Triển lãm xem công khai, đứng cuối, ngoài hai nhóm.
- Lộ trình đối chiếu Khung năng lực tiếng Việt dùng cho người nước ngoài (TT 17/2015/TT-BGDĐT): Bậc 0 Làm quen (chặng riêng của trường), Sơ cấp Bậc 1–2, Trung cấp Bậc 3–4. Ghi "tham chiếu", không gọi là chứng chỉ hay "đạt chuẩn".
- Nguồn: v1/ttv-lo-trinh.js trong kho mau-chung (`TTV_LO_TRINH`): các bậc, câu "Mình làm được…" cho Nghe, Nói, Đọc, Viết. Tab Lộ trình chỉ dùng nhãn bài của vuihoc và venhaem; nhãn của các góc trong Làng giữ lại trong tệp nhưng không hiện cho trẻ.
- "Góc học tập của em" có hai loại: dưới 15 tuổi xem sao theo góc của Làng; 15+ xem tiến độ theo bậc và 4 kỹ năng của Lộ trình. Chọn theo nhóm tuổi trong hồ sơ; nhóm 13–17 tự chọn trên trang (lưu trên máy).
- Nhóm người học dùng chung mã: "5-8", "9-14", "nguoi-lon".
- Bậc 0–2 có lời hướng dẫn tiếng Anh (nút VI/EN), Bậc 3 trở đi giảm dần.
- Không đổi nội dung bài khi sắp xếp lại.

## Tài khoản và dữ liệu học
- Chỉ người học có tài khoản và xem thành tích của mình (Góc học tập của em). Không làm chế độ, bảng theo dõi hay tài khoản riêng cho giáo viên, phụ huynh. Người dưới 13 tuổi do cha mẹ đăng ký và đồng ý (đã có ở cổng), nhưng không có trang theo dõi riêng cho cha mẹ.
- Giáo viên chỉ có tab "Hoạt động" (gợi ý hoạt động trên lớp) của cổng; không làm thêm hướng dẫn giáo viên.
- Góc học không tự ghi vào Firebase. Khi người học chơi xong một trò, góc học gọi `TTV.ghiKetQua({bai, hoatDong, soTroChoi, diem, diemToiDa, sao, thoiGianGiay})`; cổng ghi vào tài khoản.
- Không thu ngày sinh, địa chỉ, số điện thoại, ảnh, giọng nói, vị trí. Luyện nói chỉ chạy trên máy. Không hiện tên thật.
- Chỉ dùng dữ liệu cho nghiên cứu khi Chính sách bảo mật đã ghi mục đích này và người học (hoặc cha mẹ) đã đồng ý.

## Game bài học
HTML/CSS/JS thuần; dữ liệu bài trong const BAI_HOC đầu script; chạm/kéo bằng Pointer Events; phản hồi "Đúng rồi!" / "Thử lại nhé"; xong một trò thì gọi `TTV.ghiKetQua(...)`.

## Cách làm việc
- Trước khi sửa nhiều tệp, nêu kế hoạch ngắn và chờ tôi đồng ý.
- Làm từng trang một; không sửa nội dung bài học khi không được yêu cầu.
- Sau khi đẩy lên, liệt kê link để tôi kiểm tra trên iPad.
- Khi chép CLAUDE.md vào một kho đã có CLAUDE.md, giữ lại các dòng NGOẠI LỆ RIÊNG của kho đó.

## Riêng kho này (hatca.cvcec.org – Hát cùng Trâu Con)
- Học tiếng Việt qua đồng dao, vè, dân ca và hát ru. 3 phần, 24 bài: Đồng dao (Bài 1–12, Bậc 1), Vè (Bài 13–16, Bậc 2), Dân ca & hát ru (Bài 17–24, Bậc 3). Nhãn bậc theo mã bài ở v1/ttv-lo-trinh.js của mau-chung: KHÔNG đổi mã bài (ma).
- Cả 24 bài đã soạn theo khuôn bài mẫu "Dung dăng dung dẻ" (trangThai "san-sang", 17-11-2026). Năm bài thay thế giữ mã cũ (ve-ca, ve-trai-cay, ve-loai-vat, ly-cay-bong, ly-con-sao), xem README. Lời có chỗ cần CVCEC soát: README, mục "Lời bài cần CVCEC soát".
- Trang chủ: index.html (Mục tiêu học tập · Học xong các bạn có thể · Tổng quan nội dung · Hướng dẫn cho cha mẹ & thầy cô · Danh sách bài). Bấm vào góc học phải mở trang này trước, không nhảy thẳng vào Bài 1.
- Bước 6 (từ 17-11-2026, không tính sao): "Học hát cùng giảng viên" – video giảng viên âm nhạc dạy hát. Điền đường dẫn vào trường videoGiangVien của bài (ví dụ "video/co-la.mp4", dưới 25 MB, hỏi CVCEC trước khi thêm video – quy tắc 10); chưa có thì trang hiện khung "Video đang cập nhật". Video không có nút tải về.
- Trang bài dùng chung: bai.html#<ma-bai>. Mỗi bài 5 bước, 5 sao: Nghe & đọc theo · Hiểu lời (thẻ từ, câu hỏi nhanh) · Nhớ lời (điền từ, xếp câu, che dần) · Chơi mà nhớ (lật thẻ tìm vần, tiếp sức đọc bài) · Cùng chơi (trò chơi dân gian thật, thử thách cho cả nhà).
- Dữ liệu: data/bai-hat.js (window.HAT_CA). Mỗi bài: loi, gioiThieu, tuKho, cauHoi, dienTu, nhieu, vanCap, cungChoi, thuThach, goiY, tempo, nguon, diBan (bài dân ca thêm mien). Kiểm tra trước khi đẩy: node tests/kiem-du-lieu.js --du. Sửa lời thì chạy node tools/tao-am-thanh.js để cập nhật AM-THANH.md.
- Khoá lưu (mới): hatca:<ma-bai> → { sao: { nghe, hieu, nho, choi, cungChoi }, xong: {…}, thuThach: […] }. Không đổi tên.
- NGOẠI LỆ RIÊNG – tiếng mõ, tiếng trống: tạo bằng Web Audio trong trình duyệt (js/chung.js, HC.chayNhip), là âm gõ giữ nhịp, KHÔNG phải giọng đọc, nên được dùng. Giọng đọc, giọng hát theo quy tắc 7: có tệp của trường (AM-THANH.md, amThanh: true) thì phát tệp; amThanh: false thì nút Nghe (từng câu, cả bài) tạm đọc lời bằng giọng máy qua TTV.phat({ tep, chu }). Không gọi speechSynthesis trực tiếp.
- Ghi kết quả (17-11-2026): bai.html gọi TTV.ghiKetQua với bai = mã bài; hoatDong = nghe (đọc theo nhịp, điểm = số tiếng vỗ trúng), cau-hoi, dien-tu, xep-cau, tiep-suc (điểm = số lần đúng ngay lần đầu), lat-the (điểm 0–10 theo số lượt lật); soTroChoi = 6; sao 3/2/1 theo tỉ lệ ≥ 90% / ≥ 60% / còn lại. Thẻ từ, Che dần và Cùng chơi không tính điểm. Không thêm khoá localStorage.
- Bản quyền lời bài: chỉ văn học dân gian (đồng dao, vè, dân ca, hát ru). Bài hát thiếu nhi có tác giả chỉ đưa lên khi có giấy phép bằng văn bản. Không chép bản thu âm của người khác (YouTube, CD…).
- Phần 3 (dân ca, hát ru) cần bản thu giọng hát thật; chưa làm phần tô sáng lời theo bản thu (dự kiến thêm mocThoiGian: giây bắt đầu mỗi câu).
- Màu góc (hồng sen #BF55A0 / #7E2A6B / #F6E4F1) và ảnh Trâu Con (trau-listening.png) lấy từ TTV_DANH_SACH, id "hatca".
