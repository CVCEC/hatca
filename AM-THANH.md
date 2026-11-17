# Âm thanh của góc "Hát cùng Trâu Con"

Hiện chưa có tệp nào: các bài đặt `amThanh: false`. Bé đọc theo tiếng mõ (tạo trong trình duyệt); nút 🔊 nghe câu, nghe cả bài tạm đọc bằng giọng máy của thiết bị qua bộ mẫu (`TTV.phat({ tep, chu })`, quy tắc 7). Trang không gọi speechSynthesis trực tiếp.
Khi chép đủ tệp của một bài vào `audio/<ma-bai>/`, đổi `amThanh: true` cho bài đó trong `data/bai-hat.js`: nút 🔊 sẽ phát tệp của trường (tệp lỗi thì bộ mẫu tự đọc bằng giọng máy).

Tổng cộng: **134 tệp** cho 16 bài.

Tệp này sinh từ dữ liệu bằng `node tools/tao-am-thanh.js`; sửa lời bài thì chạy lại.

## Tên tệp (MP3, mỗi tệp dưới 25 MB)

| Tệp | Nội dung |
|---|---|
| `audio/<ma-bai>/ca-bai.mp3` | Cả bài, đọc hoặc hát liền một lượt |
| `audio/<ma-bai>/cau-01.mp3` … `cau-NN.mp3` | Từng câu, đánh số từ 01 theo thứ tự trong `loi` |

## Giọng nào cho phần nào
- **Đồng dao, vè (Phần 1, 2):** đọc theo nhịp, mỗi tiếng một phách. Tốt nhất là thầy cô đọc thật; chưa có thì dùng giọng chuẩn của trường (Elio) và ghi chú là giọng AI.
- **Dân ca, hát ru (Phần 3):** cần giọng hát thật (thầy cô hoặc cộng tác viên của trường hát). Giọng máy không hát được làn điệu, chỉ đọc lời. Khi hát, thêm tiếng đệm (ơ, à ơi, ầu ơ…) theo làn điệu; tệp từng câu chỉ cần câu hát chính.
- Không lấy bản thu của người khác (YouTube, CD, ca sĩ…): bản thu và phần trình diễn có quyền riêng, kể cả khi lời bài là dân gian.
- Lời đánh dấu “cần soát” trong README (mục Lời bài cần CVCEC soát) nên được soát trước khi thu.

## Phần 1 – Đồng dao

### Bài 1 – Dung dăng dung dẻ (`audio/dung-dang-dung-de/`): 11 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Dung dăng dung dẻ |
| cau-02.mp3 | Dắt trẻ đi chơi |
| cau-03.mp3 | Đến cửa nhà trời |
| cau-04.mp3 | Lạy cậu lạy mợ |
| cau-05.mp3 | Cho cháu về quê |
| cau-06.mp3 | Cho dê đi học |
| cau-07.mp3 | Cho cóc ở nhà |
| cau-08.mp3 | Cho gà bới bếp |
| cau-09.mp3 | Xì xà xì xụp |
| cau-10.mp3 | Ngồi thụp xuống đây |

### Bài 2 – Chi chi chành chành (`audio/chi-chi-chanh-chanh/`): 7 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Chi chi chành chành |
| cau-02.mp3 | Cái đanh thổi lửa |
| cau-03.mp3 | Con ngựa chết trương |
| cau-04.mp3 | Ba vương ngũ đế |
| cau-05.mp3 | Chấp chế đi tìm |
| cau-06.mp3 | Ù à ù ập |

### Bài 3 – Kéo cưa lừa xẻ (`audio/keo-cua-lua-xe/`): 6 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Kéo cưa lừa xẻ |
| cau-02.mp3 | Ông thợ nào khoẻ |
| cau-03.mp3 | Về ăn cơm vua |
| cau-04.mp3 | Ông thợ nào thua |
| cau-05.mp3 | Về bú tí mẹ |

### Bài 4 – Nu na nu nống (`audio/nu-na-nu-nong/`): 11 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Nu na nu nống |
| cau-02.mp3 | Cái cống nằm trong |
| cau-03.mp3 | Cái ong nằm ngoài |
| cau-04.mp3 | Củ khoai chấm mật |
| cau-05.mp3 | Phật ngồi phật khóc |
| cau-06.mp3 | Con cóc nhảy ra |
| cau-07.mp3 | Con gà ú ụ |
| cau-08.mp3 | Nhà mụ thổi xôi |
| cau-09.mp3 | Nhà tôi nấu chè |
| cau-10.mp3 | Tay xoè chân rụt |

### Bài 5 – Tập tầm vông (`audio/tap-tam-vong/`): 7 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Tập tầm vông |
| cau-02.mp3 | Tay không tay có |
| cau-03.mp3 | Tập tầm vó |
| cau-04.mp3 | Tay có tay không |
| cau-05.mp3 | Tay nào có |
| cau-06.mp3 | Tay nào không? |

### Bài 6 – Rồng rắn lên mây (`audio/rong-ran-len-may/`): 6 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Rồng rắn lên mây |
| cau-02.mp3 | Có cây lúc lắc |
| cau-03.mp3 | Có nhà điểm binh |
| cau-04.mp3 | Hỏi thăm thầy thuốc |
| cau-05.mp3 | Có nhà hay không? |

### Bài 7 – Thả đỉa ba ba (`audio/tha-dia-ba-ba/`): 11 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Thả đỉa ba ba |
| cau-02.mp3 | Chớ bắt đàn bà |
| cau-03.mp3 | Phải tội đàn ông |
| cau-04.mp3 | Cơm trắng như bông |
| cau-05.mp3 | Gạo tiền như nước |
| cau-06.mp3 | Đổ mắm đổ muối |
| cau-07.mp3 | Đổ chuối hạt tiêu |
| cau-08.mp3 | Đổ niêu nước chè |
| cau-09.mp3 | Đổ phải nhà nào |
| cau-10.mp3 | Nhà ấy phải chịu |

### Bài 8 – Lộn cầu vồng (`audio/lon-cau-vong/`): 7 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Lộn cầu vồng |
| cau-02.mp3 | Nước trong nước chảy |
| cau-03.mp3 | Có cô mười bảy |
| cau-04.mp3 | Có chị mười ba |
| cau-05.mp3 | Hai chị em ta |
| cau-06.mp3 | Ra lộn cầu vồng |

### Bài 9 – Xỉa cá mè (`audio/xia-ca-me/`): 6 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Xỉa cá mè |
| cau-02.mp3 | Đè cá chép |
| cau-03.mp3 | Chân nào đẹp |
| cau-04.mp3 | Đi buôn men |
| cau-05.mp3 | Chân nào đen |

### Bài 10 – Con vỏi con voi (`audio/con-voi-con-voi/`): 8 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Con vỏi con voi |
| cau-02.mp3 | Cái vòi đi trước |
| cau-03.mp3 | Hai chân trước đi trước |
| cau-04.mp3 | Hai chân sau đi sau |
| cau-05.mp3 | Còn cái đuôi thì đi sau rốt |
| cau-06.mp3 | Tôi xin kể nốt |
| cau-07.mp3 | Cái chuyện con voi |

### Bài 11 – Bà còng đi chợ trời mưa (`audio/ba-cong-di-cho/`): 7 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Bà còng đi chợ trời mưa |
| cau-02.mp3 | Cái tôm cái tép đi đưa bà còng |
| cau-03.mp3 | Đưa bà đến quãng đường cong |
| cau-04.mp3 | Đưa bà vào tận ngõ trong nhà bà |
| cau-05.mp3 | Tiền bà trong túi rơi ra |
| cau-06.mp3 | Tép tôm nhặt được trả bà mua rau |

### Bài 12 – Ông giẳng ông giăng (`audio/ong-giang-ong-giang/`): 7 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Ông giẳng ông giăng |
| cau-02.mp3 | Xuống chơi với tôi |
| cau-03.mp3 | Có bầu có bạn |
| cau-04.mp3 | Có ván cơm xôi |
| cau-05.mp3 | Có nồi cơm nếp |
| cau-06.mp3 | Có nệp bánh chưng |

## Phần 2 – Vè

### Bài 13 – Vè chim (`audio/ve-chim/`): 17 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Hay chạy lon xon |
| cau-02.mp3 | Là gà mới nở |
| cau-03.mp3 | Vừa đi vừa nhảy |
| cau-04.mp3 | Là em sáo xinh |
| cau-05.mp3 | Hay nói linh tinh |
| cau-06.mp3 | Là con liếu điếu |
| cau-07.mp3 | Hay nghịch hay tếu |
| cau-08.mp3 | Là cậu chìa vôi |
| cau-09.mp3 | Hay chao đớp mồi |
| cau-10.mp3 | Là chim chèo bẻo |
| cau-11.mp3 | Tính hay mách lẻo |
| cau-12.mp3 | Thím khách trước nhà |
| cau-13.mp3 | Hay nhặt lân la |
| cau-14.mp3 | Là bà chim sẻ |
| cau-15.mp3 | Có tình có nghĩa |
| cau-16.mp3 | Là mẹ chim sâu |

### Bài 14 – Con mèo mà trèo cây cau (`audio/ve-ca/`): 5 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Con mèo mà trèo cây cau |
| cau-02.mp3 | Hỏi thăm chú chuột đi đâu vắng nhà |
| cau-03.mp3 | Chú chuột đi chợ đường xa |
| cau-04.mp3 | Mua mắm mua muối giỗ cha chú mèo |

### Bài 15 – Lúa ngô là cô đậu nành (`audio/ve-trai-cay/`): 7 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Lúa ngô là cô đậu nành |
| cau-02.mp3 | Đậu nành là anh dưa chuột |
| cau-03.mp3 | Dưa chuột là ruột dưa gang |
| cau-04.mp3 | Dưa gang là nàng dưa hấu |
| cau-05.mp3 | Dưa hấu là cậu lúa ngô |
| cau-06.mp3 | Lúa ngô là cô đậu nành |

### Bài 16 – Bao giờ cho đến tháng ba (`audio/ve-loai-vat/`): 11 tệp

| Tệp | Lời |
|---|---|
| ca-bai.mp3 | Cả bài |
| cau-01.mp3 | Bao giờ cho đến tháng ba |
| cau-02.mp3 | Ếch cắn cổ rắn tha ra ngoài đồng |
| cau-03.mp3 | Hùm nằm cho lợn liếm lông |
| cau-04.mp3 | Một chục quả hồng nuốt lão tám mươi |
| cau-05.mp3 | Nắm xôi nuốt trẻ lên mười |
| cau-06.mp3 | Con gà, be rượu nuốt người lao đao |
| cau-07.mp3 | Lươn nằm cho trúm bò vào |
| cau-08.mp3 | Một đàn cào cào đuổi bắt cá rô |
| cau-09.mp3 | Thóc giống cắn chuột trong bồ |
| cau-10.mp3 | Một trăm lá mạ đổ xô nhổ người |
