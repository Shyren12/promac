// src/components/layout/Header.tsx
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { NavLink } from "react-router-dom"; // <--- IMPORT NavLink

const NAV_ITEMS = [
  // path: "/" là trang chủ
  { label: "TRANG CHỦ", path: "/", hasArrow: false },

  // Các mục chưa có trang thì tạm để path="/" hoặc "#"
  { label: "DỊCH VỤ & SẢN PHẨM", path: "/dich-vu", hasArrow: true },
  { label: "CHÍNH SÁCH", path: "/chinh-sach", hasArrow: true },
  { label: "DỰ ÁN", path: "/du-an", hasArrow: false },

  // path: "/gioi-thieu" là trang IntroPage mình vừa làm
  { label: "VỀ PROMAC", path: "/gioi-thieu", hasArrow: false },

  { label: "TIN TỨC", path: "/tin-tuc", hasArrow: false },
  { label: "LIÊN HỆ", path: "/lien-he", hasArrow: false },
];

export const Header = () => {
  return (
    <div className="relative w-full">
      <header
        className="relative flex items-center box-border z-50"
        style={{
          width: "1434px",
          height: "102px",
          backgroundColor: "#FFFFFF",
          paddingTop: "40px",
          paddingBottom: "40px",
          paddingLeft: "93px",
          paddingRight: "93px",
          boxShadow: "0px 4px 12px 0px #00000040",
          marginLeft: "3px",
        }}
      >
        <nav
          className="flex items-center"
          style={{
            marginLeft: "131px",
            gap: "40px",
          }}
        >
          {NAV_ITEMS.map((item, index) => (
            <NavLink
              key={index}
              to={item.path} // Dùng props to thay cho href
              // NavLink cung cấp biến isActive tự động
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-center",
                  "font-inter font-bold",
                  "text-[18px]",
                  "leading-[100%]",
                  "tracking-[0px]",
                  "transition-colors duration-200",

                  // LOGIC TỰ ĐỘNG:
                  // Nếu đang ở trang đó (isActive = true) -> Màu Đỏ + Gạch chân
                  // Nếu không -> Màu Đen + Hover Đỏ
                  isActive
                    ? "text-[#FF0000] underline decoration-solid"
                    : "text-[#000000] hover:text-[#FF0000] no-underline"
                )
              }
              style={{ gap: "5px" }}
            >
              {/* Dùng render prop để lấy isActive cho icon mũi tên */}
              {({ isActive }) => (
                <>
                  <span className="block pt-[2px]">{item.label}</span>

                  {item.hasArrow && (
                    <div className="w-[20px] h-[20px] flex items-center justify-center">
                      <ChevronDown
                        size={20}
                        // Icon cũng đổi màu theo trạng thái Active
                        color={isActive ? "#FF0000" : "#000000"}
                        strokeWidth={2}
                      />
                    </div>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>
      </header>
    </div>
  );
};
