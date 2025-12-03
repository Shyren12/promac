import React from "react";
import { Phone, Mail } from "lucide-react";

export const ReturnPolicyHero: React.FC = () => {
  return (
    <section
      className="relative mx-auto flex flex-col items-center bg-[#FFF5F6] rounded-[30px]"
      style={{ width: "1379px", height: "451px", marginTop: "40px" }}
    >
      <div className="mt-[56px] text-center">
        <h1
          className="font-extrabold text-[#FF0000]"
          style={{ fontFamily: "Inter", fontSize: "40px", lineHeight: "48px" }}
        >
          Đổi trả hàng hóa
        </h1>
        <p
          className="mt-[24px] font-semibold text-[#374151]"
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            width: "697px",
            marginInline: "auto",
          }}
        >
          Chúng tôi sẵn sàng hỗ trợ bạn qua Hotline, Email, hoặc tại Văn phòng.
        </p>
      </div>
      {/* ... (Phần Button và Contact giữ nguyên y hệt các Hero khác) ... */}
      <button
        className="mt-[72px] flex flex-col items-center justify-center bg-[#FF0000] text-[#F5F5F5] transition-transform hover:scale-105 active:scale-95"
        style={{
          width: "309px",
          height: "70px",
          borderRadius: "20px",
          border: "1px solid #FFF5F6",
          boxShadow: "0px 0px 14px #FF0000",
          gap: "12px",
        }}
      >
        <span
          className="font-bold"
          style={{ fontFamily: "Inter", fontSize: "20px" }}
        >
          Yêu cầu Báo giá
        </span>
      </button>
      <div
        className="absolute"
        style={{
          top: "347px",
          width: "749px",
          border: "1px solid rgba(0,0,0,0.5)",
        }}
      />
      <div
        className="absolute flex items-center justify-center w-full"
        style={{ top: "370px", gap: "40px" }}
      >
        <div className="flex items-center gap-[12px]">
          <Phone className="w-5 h-5 text-black/50" />
          <a
            href="tel:02822272416"
            className="font-normal text-black/50 hover:text-red-500"
          >
            (028) 22272416
          </a>
        </div>
        <div className="flex items-center gap-[12px]">
          <Mail className="w-5 h-5 text-black/50" />
          <a
            href="mailto:info@promac"
            className="font-normal text-black/50 hover:text-red-500"
          >
            info@promacprinting.com
          </a>
        </div>
      </div>
    </section>
  );
};
