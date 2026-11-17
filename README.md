# Hát cùng Trâu Con – hatca.cvcec.org

Góc học tiếng Việt qua **đồng dao, vè, dân ca và hát ru** của Trường Tiếng Việt Của Em (CVCEC), theo bộ mẫu chung "Làng Trâu Con" (mau.cvcec.org/v1).

## Cấu trúc

| Tệp | Nội dung |
|---|---|
| `index.html` | Trang chủ góc học: lời chào, Mục tiêu học tập, Học xong các bạn có thể, Tổng quan nội dung, Hướng dẫn cho cha mẹ & thầy cô, Danh sách bài |
| `bai.html#<ma-bai>` | Trang bài dùng chung cho mọi bài, 5 bước, 5 sao |
| `data/bai-hat.js` | Dữ liệu 3 phần, 24 bài (cả 24 bài đã soạn) |
| `js/chung.js` | Lưu sao, tiện ích, nhịp mõ – trống (Web Audio), phát tệp giọng của trường |
| `css/hat-ca.css` | Giao diện riêng của góc, chỉ dùng biến `--ttv-*` |
| `AM-THANH.md` | Danh sách tệp giọng đọc, giọng hát cần thu (sinh bằng `node tools/tao-am-thanh.js`) |
| `tests/kiem-du-lieu.js` | Kiểm tra dữ liệu: `node tests/kiem-du-lieu.js --du` |
| `TICH-HOP.md` | Đoạn mã gắn góc vào bộ mẫu chung và cổng, DNS |

## Năm bước của một bài

1. 🎵 **Nghe & đọc theo** – lời bài sáng từng tiếng theo nhịp mõ (Chậm / Vừa); ô vỗ tay đếm số lần vỗ trúng nhịp; nút 🔊 nghe từng câu, nghe cả bài.
2. 🔍 **Hiểu lời** – bài nói gì (có nút EN), thẻ từ cần biết lật hai mặt, 5 câu hỏi nhanh có tranh.
3. 🧠 **Nhớ lời** – Điền từ (chỗ trống sáng lần lượt), Xếp câu (chạm câu tiếp theo, có Gợi ý), Che dần (4 vòng, chạm ô để xem chữ).
4. 🎮 **Chơi mà nhớ** – Lật thẻ tìm vần (4–6 cặp), Tiếp sức đọc bài (chọn câu tiếp theo, đưa Trâu Con về quê).
5. 🤸 **Cùng chơi** – cách chơi trò dân gian (hoặc hoạt động theo bài), lưu ý an toàn, 3 thử thách cho cả nhà.

## Giọng đọc (quy tắc 7, từ 17-11-2026)

- Có tệp của trường (`amThanh: true`, tệp trong `audio/<ma-bai>/`) thì nút 🔊 phát tệp.
- Chưa có tệp (hiện cả 24 bài): nút 🔊 tạm đọc lời bằng giọng máy của thiết bị qua bộ mẫu, `TTV.phat({ tep, chu })`. Trang không gọi speechSynthesis trực tiếp.
- Tiếng mõ, tiếng trống giữ nhịp là âm gõ tạo bằng Web Audio (ngoại lệ riêng của kho, xem CLAUDE.md).
- Dân ca, hát ru cần bản thu giọng hát thật; giọng máy chỉ đọc lời.

## Ghi kết quả học (từ 17-11-2026)

Khi người học xong một trò có tính điểm, `bai.html` gọi `TTV.ghiKetQua({ bai, hoatDong, soTroChoi: 6, diem, diemToiDa, sao, thoiGianGiay })`. `bai` là mã bài (ví dụ `chi-chi-chanh-chanh`).

| hoatDong | Khi nào | Điểm |
|---|---|---|
| `nghe` | Đọc hết bài theo nhịp mõ | số tiếng vỗ tay trúng nhịp / số tiếng |
| `cau-hoi` | Trả lời hết 5 câu hỏi nhanh | số câu đúng ngay lần đầu / 5 |
| `dien-tu` | Điền đủ chỗ trống | số chỗ đúng ngay lần đầu |
| `xep-cau` | Xếp xong cả bài | số câu chạm đúng ngay (dùng Gợi ý thì không tính) |
| `lat-the` | Tìm đủ cặp vần | 0–10, theo số lượt lật |
| `tiep-suc` | Đưa Trâu Con về quê | số câu chọn đúng ngay lần đầu |

Sao: 3 khi đạt từ 90%, 2 khi từ 60%, còn lại 1. Thẻ từ, Che dần và Cùng chơi không tính điểm. Không thêm khoá localStorage (sao vẫn ở `hatca:<ma-bai>`).

## Danh sách 24 bài

| Bài | Mã bài | Tên | Ghi chú |
|---|---|---|---|
| 1 | dung-dang-dung-de | Dung dăng dung dẻ | bài mẫu |
| 2 | chi-chi-chanh-chanh | Chi chi chành chành | |
| 3 | keo-cua-lua-xe | Kéo cưa lừa xẻ | bản “Ông thợ nào khoẻ” |
| 4 | nu-na-nu-nong | Nu na nu nống | |
| 5 | tap-tam-vong | Tập tầm vông | lời đồng dao, không phải bài hát có tác giả |
| 6 | rong-ran-len-may | Rồng rắn lên mây | |
| 7 | tha-dia-ba-ba | Thả đỉa ba ba | |
| 8 | lon-cau-vong | Lộn cầu vồng | |
| 9 | xia-ca-me | Xỉa cá mè | 5 câu đầu |
| 10 | con-voi-con-voi | Con vỏi con voi | |
| 11 | ba-cong-di-cho | Bà còng đi chợ trời mưa | |
| 12 | ong-giang-ong-giang | Ông giẳng ông giăng | 6 câu đầu |
| 13 | ve-chim | Vè chim | 16 câu đầu |
| 14 | ve-ca | Con mèo mà trèo cây cau | **thay** “Vè cá” |
| 15 | ve-trai-cay | Lúa ngô là cô đậu nành | **thay** “Vè trái cây” |
| 16 | ve-loai-vat | Bao giờ cho đến tháng ba | **thay** “Vè loài vật” (vè nói ngược) |
| 17 | bac-kim-thang | Bắc kim thang | Nam Bộ |
| 18 | ly-cay-bong | Ru em (hát ru xứ Huế) | **thay** “Lý cây bông”; Trung Bộ |
| 19 | trong-com | Trống cơm | Bắc Bộ, lời chính |
| 20 | co-la | Cò lả | Bắc Bộ, lời chính |
| 21 | ly-con-sao | Cái ngủ mày ngủ cho lâu | **thay** “Lý con sáo”; hát ru Bắc Bộ |
| 22 | ly-ngua-o | Lý ngựa ô | Nam Bộ, lời chính |
| 23 | ru-con | Ru con (“Con cò mà đi ăn đêm”) | Bắc Bộ |
| 24 | vi-dau | Ví dầu | Nam Bộ |

**Vì sao thay bài.** Mã bài giữ nguyên, vì nhãn bậc trong lộ trình (mau-chung `v1/ttv-lo-trinh.js`) và khoá lưu `hatca:<ma-bai>` đi theo mã. Khi soạn không tra được nguồn bên ngoài; bài nào không chắc lời bản phổ biến thì không tự soạn lời mà thay bằng bài dân gian cùng loại:
- *Vè cá*: không đối chiếu được một bản dân gian phổ biến, đáng tin.
- *Vè trái cây*: bản hay gặp trên mạng ghi là sáng tác mới, có tác giả (còn bản quyền).
- *Vè loài vật*: không có một bài vè cố định mang tên này; dùng vè nói ngược “Bao giờ cho đến tháng ba”, cũng kể chuyện loài vật.
- *Lý cây bông*: không chắc lời bản phổ biến (nhiều tiếng đệm và dị bản).
- *Lý con sáo*: chỉ chắc 2 câu ca dao gốc, không đủ cho bài học.

Nếu CVCEC có lời bản phổ biến đã đối chiếu của các bài cũ, có thể soạn lại vào đúng mã bài đó.

## Lời bài cần CVCEC soát

Lời soạn theo trí nhớ về bản phổ biến, không tra được nguồn bên ngoài lúc soạn. Những chỗ dưới đây chưa chắc, nên soát trước khi thu âm:
- **Chi chi chành chành**: “Chấp chế đi tìm” (có nơi “Bắt dế”, “Cấp kế”); có nơi đọc thêm “Đóng sập cửa vào”.
- **Rồng rắn lên mây**: “Có cây lúc lắc”, “Có nhà điểm binh” (dị bản “núc nắc”, “hiển binh”); lời hỏi đáp “xin khúc đầu, khúc giữa, khúc đuôi” chỉ tả chung.
- **Thả đỉa ba ba**: câu cuối “Nhà ấy phải chịu” hay “Nhà nấy phải chịu”.
- **Xỉa cá mè**: phần sau “Chân nào đen” không chắc nên dừng ở 5 câu.
- **Ông giẳng ông giăng**: lấy 6 câu đầu; nghĩa của “nệp” (giải là “một dãy, một chồng bánh”) cần soát.
- **Vè chim**: “Thím khách trước nhà”, và tên tiếng Anh của liếu điếu.
- **Bao giờ cho đến tháng ba**: “Thóc giống cắn chuột” hay “đuổi chuột”; câu “Con gà, be rượu nuốt người lao đao” có nhắc rượu, xem có hợp với bé nhỏ không.
- **Trống cơm**: câu 4–6 và tiếng đệm (ố mấy / ấy mấy).
- **Cò lả**: “Bay qua cửa phủ, bay về Đồng Đăng” và hai câu cuối “Dặn rằng, ơ người ơi / Người có nhớ ta chăng?” là phần chưa chắc nhất.
- **Ru em (Huế)**: chọn “ngủ cho muồi” (dị bản “théc cho muồi”).
- **Cái ngủ mày ngủ cho lâu**: “Cầm cổ lôi về” (dị bản “Túm cổ”), “con trắm con trê”.
- **Lý ngựa ô**: thứ tự các câu và chữ “Búp sen lá dặm” (chưa chắc là “dặm” hay chữ khác).
- **Ru con**: “Ông ơi ông vớt tôi nao” (dị bản “vào”).

Phần Cùng chơi: Bài 1–10, 14 (Mèo đuổi chuột), 17 (vỗ tay đôi), 22 (cưỡi ngựa que) là trò chơi dân gian; các bài còn lại không có trò riêng đi kèm nên dùng hoạt động theo bài (đóng vai, đọc đối đáp, nối vòng, gõ trống, múa, ru búp bê) và ghi rõ như vậy trong gợi ý.

## Thêm hoặc sửa một bài

1. Sửa trong `data/bai-hat.js`, giữ đủ các trường của bài mẫu: `loi`, `gioiThieu`, `tuKho`, `cauHoi`, `dienTu`, `nhieu`, `vanCap`, `cungChoi`, `thuThach`, `goiY`, `tempo`, `nguon`, `diBan` (bài dân ca thêm `mien`). Trường `hinh` là hình minh hoạ; chữ trong bài không dùng emoji.
2. Chạy `node tests/kiem-du-lieu.js --du` (trường, NFC, chỗ trống khớp lời, cặp vần không trùng) và `node tools/tao-am-thanh.js`.
3. Có tệp giọng thì chép vào `audio/<ma-bai>/` rồi đổi `amThanh: true`.

Lời bài chỉ dùng văn học dân gian. Bài hát có tác giả cần giấy phép bằng văn bản trước khi đưa lên.
