# Giọng đọc AI – Hát cùng Trâu Con (Bài 1–16)

Robot trên GitHub Actions (`.github/workflows/giong-ai.yml` → `tools/giong_ai.py`) tạo giọng Trâu Con (Google Gemini, giọng **Kore**, miền Bắc) cho 134 tệp trong `can-doc.tsv` (Bài 1–16, đọc theo nhịp), lưu thẳng vào đúng thư mục âm thanh của kho. Cách làm giống kho vuihoctiengviet và venhaem.

- **Chạy khi nào:** mỗi ngày lúc 08:26 UTC, khi sửa `chay.txt`, hoặc bấm tay ở Actions → "Giọng đọc AI" → Run workflow.
- **Cần:** secret `GEMINI_API_KEY` (của tổ chức CVCEC hoặc của kho này).
- **Xem tiến độ:** `trang-thai.md`. Nhật ký lần chạy: `nhat-ky.txt`.
- **Nghe lại:** `kiem-tra.tsv` ghi điểm giống (0–1) giữa câu cần đọc và điều Whisper nghe được. Câu dưới 0,75 nên nghe kỹ. Với chữ cái, vần và đánh vần, Whisper hay nghe sai nên các câu này luôn cần người nghe.
- **Đọc lại một câu:** xoá tệp mp3 của câu đó; lần chạy sau robot tạo lại.
- **Không tạo một câu (để người thu tay):** ghi đường dẫn tệp (cột `tep`) vào `bo.txt`, mỗi dòng một tệp.
- **Tệp đã có không bị ghi đè**, kể cả bản thu giọng người thật đặt vào sau.
- Cột `cach` trong `can-doc.tsv`: trống = câu thường · `van` = chữ cái, vần, đánh vần (đọc theo âm) · `truyen` = kể chuyện · `nhip` / `ca-bai` = đồng dao, vè đọc theo nhịp.
- **Bài 17–24 (dân ca, hát ru) không dùng giọng AI** (quyết định của CVCEC, 25-11-2026): giọng AI hát sai làn điệu. Các bài này dùng bản thu giọng hát thật của trường, chép vào `audio/<ma-bai>/` theo AM-THANH.md rồi đổi `amThanh: true`. Không thêm lại các bài này vào `can-doc.tsv`. (Robot vẫn còn cách `dan-ca` / `ru` và cột `vung` nhưng không bài nào dùng.)
