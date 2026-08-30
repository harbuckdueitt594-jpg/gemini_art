import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import CategoryIndex from "@/components/CategoryIndex";
import SectionEidos from "@/components/SectionEidos";
import SectionBeautyFX from "@/components/SectionBeautyFX";
import SectionNeuroEcom from "@/components/SectionNeuroEcom";
import SectionPosters from "@/components/SectionPosters";
import SectionVibe from "@/components/SectionVibe";
import SectionAI from "@/components/SectionAI";
import InteractiveFolders from "@/components/InteractiveFolders";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col bg-[#F6F8FA]">
      <HeroSection />
      <ManifestoSection />
      <CategoryIndex />
      <SectionEidos />
      <SectionBeautyFX />
      <SectionNeuroEcom />
      <SectionPosters />
      <SectionVibe />
      <SectionAI />
      <InteractiveFolders />
      <FooterSection />
    </main>
  );
}
