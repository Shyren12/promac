import { Header } from "../components/layout/Header";
import { HomeBanner } from "../features/home/HomeBanner"; // <--- IMPORT
import { HomeExperience } from "../features/home/HomeExperience";
import { HomeProcess } from "../features/home/HomeProcess";
import { HomeServices } from "../features/home/HomeServices";
import { HomeStory } from "../features/home/HomeStory";
import { HomeWelcome } from "../features/home/HomeWelcome";
import { HomeWhyChoose } from "../features/home/HomeWhyChoose";

export const HomePage = () => {
  return (
    <div
      className="relative bg-white"
      style={{ width: "1440px", minHeight: "100vh" }}
    >
      {/* Header luôn nằm trên cùng */}
      <Header />

      {/* Banner chính của trang chủ */}
      <HomeBanner />

      <div style={{ marginTop: "39px" }}>
        <HomeWelcome />
      </div>
      <div style={{ marginTop: "41px" }}>
        <HomeStory />
      </div>

      <div style={{ marginTop: "68px" }}>
        <HomeServices />
      </div>

      <div style={{ marginTop: "140px" }}>
        <HomeWhyChoose />
      </div>

      <div style={{ marginTop: "100px" }}>
        <HomeExperience />
      </div>
      <div>
        <HomeProcess />
      </div>
    </div>
  );
};
