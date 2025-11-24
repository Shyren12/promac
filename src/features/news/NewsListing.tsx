import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NewsSearchFilter } from "./NewsSearchFilter"; // <--- Import Component mới

// --- DỮ LIỆU GIẢ (32 Bài) ---
const NEWS_DATA = Array.from({ length: 32 }).map((_, i) => ({
  id: i + 1,
  date: "22 July 2024",
  readTime: "Read 4 min",
  title: `Bài viết số ${i + 1}: Our SaaS Product Just Launched!`,
  desc: "Remote work has drastically improved my design skills by giving me the freedom to experiment, focus, and learn at my own pace.",
  image: "bg-gray-200",
  tag: i % 2 === 0 ? "In ấn" : "Voucher", // Giả lập tag để test filter
}));

const ITEMS_PER_PAGE = 15;

export const NewsListing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State lưu từ khóa lọc
  const [currentPage, setCurrentPage] = useState(1);

  // --- LOGIC LỌC BÀI VIẾT ---
  // Nếu có từ khoá -> Lọc theo Title hoặc Tag
  const filteredNews = NEWS_DATA.filter((item) => {
    if (!searchTerm || searchTerm === "Tất cả") return true;
    const lowerTerm = searchTerm.toLowerCase();
    return (
      item.title.toLowerCase().includes(lowerTerm) ||
      item.tag.toLowerCase().includes(lowerTerm)
    );
  });

  // --- LOGIC PHÂN TRANG TRÊN DỮ LIỆU ĐÃ LỌC ---
  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentNews = filteredNews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Hàm chuyển trang
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  // Callback nhận từ Search Filter
  const handleSearchFilter = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset về trang 1 khi tìm kiếm
  };

  return (
    <section className="w-full flex flex-col items-center">
      {/* 1. TITLE */}
      <div className="flex flex-col items-center text-center mt-[100px] mb-[80px] w-[1074px]">
        <h2
          className="font-bold text-[#0E0E0E]"
          style={{ fontFamily: "Inter", fontSize: "56px", lineHeight: "140%" }}
        >
          Danh mục dự án
        </h2>
        <p
          className="font-semibold text-[#000000] mt-[20px]"
          style={{ fontFamily: "Inter", fontSize: "20px", lineHeight: "24px" }}
        >
          Khám phá danh mục sản phẩm đa dạng của chúng tôi, thể hiện chất lượng
          in ấn vượt trội trên nhiều lĩnh vực và ngành nghề khác nhau.{" "}
        </p>
      </div>

      {/* 2. SEARCH SECTION (NEW COMPONENT) */}
      <div className="mb-[100px]">
        {/* Truyền hàm handleSearchFilter vào để nhận dữ liệu từ dropdown */}
        <NewsSearchFilter onSearch={handleSearchFilter} />
      </div>

      {/* 3. GRID SECTION */}
      <div
        className="grid grid-cols-3 mb-[100px]"
        style={{ width: "1318px", columnGap: "22px", rowGap: "50px" }}
      >
        {currentNews.length > 0 ? (
          currentNews.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-[380px] group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="w-full h-[268px] bg-[#F2F2F2] rounded-[4px] mb-[20px] relative overflow-hidden">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <span className="text-gray-400">Image {item.id}</span>
                </div>
              </div>
              {/* Content */}
              <div className="flex flex-col">
                <div className="flex items-center gap-[4px] mb-[12px]">
                  <span className="font-inter font-semibold text-[18px] text-[#4F4F4F]">
                    {item.date}
                  </span>
                  <span className="font-inter font-semibold text-[18px] text-[#4F4F4F] mx-1">
                    |
                  </span>
                  <span className="font-inter font-semibold text-[18px] text-[#4F4F4F]">
                    {item.readTime}
                  </span>
                </div>
                <h3 className="font-inter font-medium text-[#000000] text-[24px] leading-[29px] tracking-[-0.04em] mb-[12px]">
                  {item.title}
                </h3>
                <p className="font-inter font-normal text-[#828282] text-[18px] leading-[160%] tracking-[-0.02em] mb-[20px] line-clamp-3">
                  {item.desc}
                </p>
                <div className="flex items-center gap-[8px] group/btn">
                  <span className="font-inter font-bold text-[16px] text-[#FF0000] leading-[19px]">
                    Đọc ngay
                  </span>
                  <div className="relative w-[18px] h-[10px] flex items-center transition-transform group-hover/btn:translate-x-1">
                    <svg
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5H17"
                        stroke="#FF0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13 1L17 5L13 9"
                        stroke="#FF0000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-[136px] h-[1px] bg-[#FF0000] mt-[2px]" />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center text-gray-500 text-xl py-10">
            Không tìm thấy bài viết nào phù hợp.
          </div>
        )}
      </div>

      {/* 4. PAGINATION (FIXED NEXT BUTTON HOVER) */}
      {totalPages > 1 && (
        <div className="flex items-center gap-[32px] mb-[100px]">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`flex items-center justify-center gap-[4px] w-[115px] h-[40px] rounded-[10px] transition-all border
                ${
                  currentPage === 1
                    ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                    : "border-[#828282] text-[#7D7D7D] hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white cursor-pointer"
                }`}
          >
            <ChevronLeft className="w-[16px] h-[16px]" />
            <span className="font-inter font-normal text-[14px]">Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-[10px]">
            {Array.from({ length: totalPages }).map((_, index) => {
              const pageNum = index + 1;
              const isActive = currentPage === pageNum;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-[40px] h-[40px] flex items-center justify-center border rounded-[10px] font-inter text-[14px] transition-all
                        ${
                          isActive
                            ? "border-[#FF0000] text-[#FF0000] font-bold"
                            : "border-[#828282] text-[#828282] hover:bg-gray-100"
                        }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Button (ĐÃ FIX: Thêm hover đỏ giống Previous) */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center gap-[4px] w-[91px] h-[40px] border rounded-[10px] transition-all
                ${
                  currentPage === totalPages
                    ? "border-gray-200 text-gray-300 cursor-not-allowed"
                    : // Style mặc định: Viền xám, Chữ xám.
                      // Style Hover: Nền đỏ, Viền đỏ, Chữ trắng.
                      "border-[#828282] text-[#7D7D7D] hover:bg-[#FF0000] hover:border-[#FF0000] hover:text-white cursor-pointer"
                }`}
          >
            <span className="font-inter font-normal text-[14px]">Next</span>
            <ChevronRight className="w-[16px] h-[16px]" />
          </button>
        </div>
      )}
    </section>
  );
};
