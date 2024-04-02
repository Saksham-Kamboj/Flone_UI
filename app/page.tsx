import HomeStunningHomepages from "@/components/Home/Home-Stunning-Homepages";
import HomeAction from "@/components/Home/home-action";
import HomeAdvanceOption from "@/components/Home/home-advance-option";
import HomeCarousal from "@/components/Home/home-carousal";
import HomeFeatures from "@/components/Home/home-features";
import HomeFullCarousal from "@/components/Home/home-full-carousal";
import HomeMain from "@/components/Home/home-main";
import HomeTemplateFeatures from "@/components/Home/home-template-features";

export default function Home() {
  return (
    <div>
      <HomeMain />
      <HomeFeatures />
      <HomeStunningHomepages />
      <HomeFullCarousal />
      {/* <HomeAdvanceOption /> */}
      <HomeCarousal />
      <HomeTemplateFeatures />
      <HomeAction />
    </div>
  );
}
