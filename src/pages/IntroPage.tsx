import { Header } from "../components/layout/Header";
import { AboutUs } from "../features/introduction/about/AboutUs";
import { IntroductionHero } from "../features/introduction/intro/IntroductionHero";
import { History } from "../features/introduction/history/History";
import { OurTeam } from "../features/introduction/team/OurTeam"; // <--- Import mới
import { MachinerySystem } from "../features/introduction/machinery/MachinerySystem";

export const IntroPage = () => {
  return (
    <div
      className="relative bg-white"
      style={{ width: "1440px", minHeight: "100vh" }}
    >
      <Header />
      <IntroductionHero />
      <div style={{ marginTop: "114px" }}>
        <AboutUs />
      </div>
      <div style={{ marginTop: "40px" }}>
        <History />
      </div>
      <div style={{ marginTop: "85px" }}>
        <OurTeam />
      </div>
      <div style={{ marginTop: "142px" }}>
        <MachinerySystem />
      </div>
    </div>
  );
};
