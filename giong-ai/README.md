# Giọng đọc AI – Hát cùng Trâu Con (Bài 1–24)

Robot trên GitHub Actions (`.github/workflows/giong-ai.yml` → `tools/giong_ai.py`) tạo giọng Trâu Con (Google Gemini, giọng **Kore**, miền Bắc) cho 187 tệp trong `can-doc.tsv` (Bài 1–16: 134 tệp đọc theo nhịp; Bài 17–24: 53 tệp dân ca, hát ru), lưu thẳng vào đúng thư mục âm thanh của kho. Cách làm giống kho vuihoctiengviet và venhaem.

- **Chạy khi nào:** mỗi ngày lúc 08:26 UTC, khi sửa `chay.txt`, hoặc bấm tay ở Actions → "Giọng đọc AI" → Run workflow.
- **Cần:** secret `GEMINI_API_KEY` (của tổ chức CVCEC hoặc của kho này).
- **Xem tiến độ:** `trang-thai.md`. Nhật ký lần chạy: `nhat-ky.txt`.
- **Nghe lại:** `kiem-tra.tsv` ghi điểm giống (0–1) giữa câu cần đọc và điều Whisper nghe được. Câu dưới 0,75 nên nghe kỹ. Với chữ cái, vần và đánh vần, Whisper hay nghe sai nên các câu này luôn cần người nghe.
- **Đọc lại một câu:** xoá tệp mp3 của câu đó; lần chạy sau robot tạo lại.
- **Không tạo một câu (để người thu tay):** ghi đường dẫn tệp (cột `tep`) vào `bo.txt`, mỗi dòng một tệp.
- **Tệp đã có không bị ghi đè**, kể cả bản thu giọng người thật đặt vào sau.
- Cột `cach` trong `can-doc.tsv`: trống = câu thường · `van` = chữ cái, vần, đánh vần (đọc theo âm) · `truyen` = kể chuyện · `nhip` / `ca-bai` = đồng dao, vè đọc theo nhịp.
- Bài 17–24 (dân ca, hát ru): cột `cach` là `dan-ca` / `ru` (từng câu) và `dan-ca-ca-bai` / `ru-ca-bai` (cả bài); robot nhắc Gemini hát nhẹ, chậm. Cột `vung` (bac / trung / nam) chọn giọng miền theo bài. Giọng AI chỉ hát gần đúng, không theo đúng làn điệu: nghe lại trước khi dùng; muốn thay bằng bản hát thật thì chép đè tệp mp3 (robot không ghi đè).
