import HeroSection from "@/components/home/HeroSection";
import VideoSection from "@/components/home/VideoSection";
import AboutSection from "@/components/home/AboutSection";
import ProcessSection from "@/components/home/ProcessSection";
import PortfolioSection from "@/components/home/PortfolioSection";
import GetInTouch from "@/components/home/GetInTouch";
import ManufactureSection from "@/components/home/ManufactureSection";

export default function Home() {
  return (
  <>
    <HeroSection />
    <VideoSection />
    <AboutSection />
    <ProcessSection />
    <PortfolioSection />
    <GetInTouch />
    <ManufactureSection />
    {/* <ToolLibrary /> */}
    </>
  );
}
