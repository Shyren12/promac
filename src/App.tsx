// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { IntroPage } from "./pages/IntroPage";
import { Footer } from "./components/layout/Footer";
function App() {
  return (
    // --- SỬA LỖI TẠI ĐÂY ---
    // 1. Thêm 'flex-col': Để nội dung xếp dọc
    // 2. Thêm 'items-center': Để căn giữa giao diện
    // 3. Thêm 'pt-[3px]': Để tạo khoảng cách nhỏ trên cùng giống thiết kế
    <main className="min-h-screen w-full bg-black flex flex-col items-center justify-start overflow-x-hidden pt-[0px]">
      {/* KHU VỰC ĐỊNH TUYẾN (ROUTING) */}
      <Routes>
        {/* 1. Trang Chủ (Mặc định) */}
        <Route path="/" element={<HomePage />} />

        {/* 2. Trang Giới Thiệu (Khi bấm Về Promac) */}
        <Route path="/gioi-thieu" element={<IntroPage />} />

        {/* Các trang khác chưa làm thì để tạm HomePage hoặc trang 404 */}
        <Route path="*" element={<HomePage />} />
      </Routes>
      {/* 3. ĐẶT FOOTER Ở ĐÂY ĐỂ HIỂN THỊ CHO MỌI TRANG */}
      <Footer />
    </main>
  );
}

export default App;
