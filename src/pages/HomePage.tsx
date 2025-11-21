// src/pages/HomePage.tsx
import { Header } from "../components/layout/Header";

export const HomePage = () => {
  return (
    <div
      className="relative bg-white"
      style={{ width: "1440px", minHeight: "100vh" }}
    >
      <Header />

      <div className="h-screen flex items-center justify-center text-3xl font-bold">
        Trang Chủ
      </div>
    </div>
  );
};
