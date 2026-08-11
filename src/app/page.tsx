import HeroSection from "@/components/HeroSection";
import ManifestoSection from "@/components/ManifestoSection";
import CategoryIndex from "@/components/CategoryIndex";
import CaseStudies from "@/components/CaseStudies";
import InteractiveFolders from "@/components/InteractiveFolders";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      <HeroSection />
      <ManifestoSection />
      <CategoryIndex />
      <CaseStudies />
      <InteractiveFolders />
      <FooterSection />
    </main>
  );
}
