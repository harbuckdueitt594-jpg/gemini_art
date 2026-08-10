import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import CategoryIndex from "@/components/CategoryIndex";
import CaseStudyMagazine from "@/components/CaseStudyMagazine";
import CaseStudyNeuro from "@/components/CaseStudyNeuro";
import CaseStudyPrint from "@/components/CaseStudyPrint";
import CaseStudyVibe from "@/components/CaseStudyVibe";
import CaseStudyAI from "@/components/CaseStudyAI";
import PresentationFolders from "@/components/PresentationFolders";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1 w-full flex flex-col relative z-10">
      <Hero />
      <Manifesto />
      <CategoryIndex />
      <CaseStudyMagazine />
      <CaseStudyNeuro />
      <CaseStudyPrint />
      <CaseStudyVibe />
      <CaseStudyAI />
      <PresentationFolders />
      <Footer />
    </main>
  );
}
