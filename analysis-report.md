# Báo cáo phân tích trang nguồn

Nguồn phân tích: `https://preview--to-quoc-trong-tim-123.lovable.app/`

## 1) URL có trong trang (đã trích xuất từ DOM)

### 1.1 Internal anchors
1. https://preview--to-quoc-trong-tim-123.lovable.app/#home
2. https://preview--to-quoc-trong-tim-123.lovable.app/#country
3. https://preview--to-quoc-trong-tim-123.lovable.app/#university
4. https://preview--to-quoc-trong-tim-123.lovable.app/#pride
5. https://preview--to-quoc-trong-tim-123.lovable.app/#chatbot

### 1.2 External links
1. https://tuyensinh.hou.edu.vn/
2. https://lovable.dev/projects/f5333ebf-bda2-4ba3-a3ff-32849147c23b?utm_source=lovable-badge

### 1.3 Static assets/scripts/styles/fonts/media
1. https://fonts.googleapis.com/
2. https://fonts.gstatic.com/
3. https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap
4. https://preview--to-quoc-trong-tim-123.lovable.app/assets/index-DqKaZuEY.css
5. https://preview--to-quoc-trong-tim-123.lovable.app/assets/index-onIZAZAK.js
6. https://preview--to-quoc-trong-tim-123.lovable.app/lovable-uploads/7efa42f0-fa5b-40d4-b030-a55e6ea64936.png
7. https://preview--to-quoc-trong-tim-123.lovable.app/assets/vietnam-map-qyhfZCzZ.jpg
8. https://preview--to-quoc-trong-tim-123.lovable.app/assets/dinh-doc-lap-BIKLZuBJ.webp
9. https://preview--to-quoc-trong-tim-123.lovable.app/assets/cot-co-ha-noi-CA8Upe4l.webp
10. https://preview--to-quoc-trong-tim-123.lovable.app/assets/van-mieu-DeyVa1cG.png
11. https://preview--to-quoc-trong-tim-123.lovable.app/assets/ho-guom-CLaAZAor.jpg
12. https://preview--to-quoc-trong-tim-123.lovable.app/assets/ninh-binh-vkJKwKRd.jpg
13. https://preview--to-quoc-trong-tim-123.lovable.app/assets/dai-noi-hue-B_wtWm5v.jpg
14. https://preview--to-quoc-trong-tim-123.lovable.app/assets/buu-dien-tphcm-CV7LqEPm.jpg
15. https://preview--to-quoc-trong-tim-123.lovable.app/videos/mhn3.mp4
16. https://cdn.gpteng.co/lovable.js

Tổng URL trích xuất được: **23**.

## 2) Bố cục DOM chính (layout map)

- Header sticky + nav anchor
- Section hero (`#home`) với CTA kép
- Section đất nước (`#country`) gồm bản đồ + tabs nội dung thành phố
- Section danh lam thắng cảnh (gallery/carousel)
- Section trường đại học (`#university`) gồm giới thiệu, thống kê, chương trình đào tạo, CTA
- Section tự hào sinh viên (`#pride`) gồm testimonial/story cards
- Section chatbot (`#chatbot`) gồm hội thoại mô phỏng + quick questions
- Section CTA cuối + thông tin liên hệ
- Footer

## 3) Kết quả dựng lại trang tương tự

Đã dựng mới trong project React + Tailwind, giữ tinh thần layout và luồng nội dung, đồng thời cải thiện UI/UX theo hướng:
- phân cấp rõ ràng
- tăng tương phản
- responsive tốt hơn
- nút/điểm chạm đạt chuẩn
- typography và spacing ổn định

### Vị trí mã nguồn
- `src/App.tsx`
- `src/index.css`

### Ảnh đã tải về và lưu vào thư mục dự án
Thư mục: `src/assets/tqtt/`
- 7efa42f0-fa5b-40d4-b030-a55e6ea64936.png
- vietnam-map-qyhfZCzZ.jpg
- cot-co-ha-noi-CA8Upe4l.webp
- van-mieu-DeyVa1cG.png
- ho-guom-CLaAZAor.jpg
- ninh-binh-vkJKwKRd.jpg
- dai-noi-hue-B_wtWm5v.jpg
- dinh-doc-lap-BIKLZuBJ.webp
- buu-dien-tphcm-CV7LqEPm.jpg

## 4) Build status
- Đã chạy `npm run build`: **thành công**.

## 5) Commit
- Commit hash: `9bae3ad`
- Message: `Rebuild patriotic university landing page clone from source DOM`
