# Hát cùng Trâu Con – hatca.cvcec.org

Góc học tiếng Việt qua **đồng dao, vè, dân ca và hát ru** của Trường Tiếng Việt Của Em (CVCEC), theo bộ mẫu chung "Làng Trâu Con" (mau.cvcec.org/v1).

## Cấu trúc

| Tệp | Nội dung |
|---|---|
| `index.html` | Trang chủ góc học: lời chào, Mục tiêu học tập, Học xong các bạn có thể, Tổng quan nội dung, Hướng dẫn cho cha mẹ & thầy cô, Danh sách bài |
| `bai.html#<ma-bai>` | Trang bài dùng chung cho mọi bài, 5 bước, 5 sao |
| `data/bai-hat.js` | Dữ liệu 3 phần, 24 bài (bài mẫu đầy đủ: Dung dăng dung dẻ) |
| `js/chung.js` | Lưu sao, tiện ích, nhịp mõ – trống (Web Audio), phát tệp giọng của trường |
| `css/hat-ca.css` | Giao diện riêng của góc, chỉ dùng biến `--ttv-*` |
| `AM-THANH.md` | Danh sách tệp giọng đọc, giọng hát cần thu |
| `TICH-HOP.md` | Đoạn mã gắn góc vào bộ mẫu chung và cổng, DNS |

## Năm bước của một bài

1. 🎵 **Nghe & đọc theo** – lời bài sáng từng tiếng theo nhịp mõ (Chậm / Vừa); ô vỗ tay đếm số lần vỗ trúng nhịp; nghe từng câu khi có tệp giọng.
2. 🔍 **Hiểu lời** – bài nói gì (có nút EN), thẻ từ cần biết lật hai mặt, 5 câu hỏi nhanh có tranh.
3. 🧠 **Nhớ lời** – Điền từ (chỗ trống sáng lần lượt), Xếp câu (chạm câu tiếp theo, có Gợi ý), Che dần (4 vòng, chạm ô để xem chữ).
4. 🎮 **Chơi mà nhớ** – Lật thẻ tìm vần (6 cặp), Tiếp sức đọc bài (chọn câu tiếp theo, đưa Trâu Con về quê).
5. 🤸 **Cùng chơi** – cách chơi trò dân gian thật, lưu ý an toàn, 3 thử thách cho cả nhà.

## Thêm một bài mới

1. Trong `data/bai-hat.js`, tìm bài có `trangThai: "du-kien"`, chép các trường của bài mẫu sang: `loi`, `gioiThieu`, `tuKho`, `cauHoi`, `dienTu`, `nhieu`, `vanCap`, `cungChoi`, `thuThach`, `goiY`, `tempo`, `nguon`, `diBan`.
2. Đổi `trangThai` thành `"san-sang"`.
3. Có tệp giọng thì chép vào `audio/<ma-bai>/` rồi đổi `amThanh: true`.

Lời bài chỉ dùng văn học dân gian. Bài hát có tác giả cần giấy phép bằng văn bản trước khi đưa lên.
