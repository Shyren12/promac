// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { IntroPage } from "./pages/IntroPage";

function App() {
  return (
    <main className="min-h-screen w-full bg-black flex justify-center overflow-x-hidden pb-20">
      {/* KHU VỰC ĐỊNH TUYẾN (ROUTING) */}
      <Routes>
        {/* 1. Trang Chủ (Mặc định) */}
        <Route path="/" element={<HomePage />} />

        {/* 2. Trang Giới Thiệu (Khi bấm Về Promac) */}
        <Route path="/gioi-thieu" element={<IntroPage />} />

        {/* Các trang khác chưa làm thì để tạm HomePage hoặc trang 404 */}
        <Route path="*" element={<HomePage />} />
      </Routes>
    </main>
  );
}

export default App;
