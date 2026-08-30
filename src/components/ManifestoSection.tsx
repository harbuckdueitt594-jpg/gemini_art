"use client";

import ScrambleText from "@/components/ScrambleText";
import SphereGallery3D from "@/components/SphereGallery3D";

const sampleImages = Array.from({ length: 34 }, (_, i) => ({
  image: `/sample-${i + 1}.jpg`,
  link: `#case-${i + 1}`,
}));

export default function ManifestoSection() {
  const text =
    "Я соединяю эстетику премиального арт-дирекшна с технологиями искусственного интеллекта. Создаю визуальные экосистемы, быстрый веб и кастомных ИИ-агентов, сокращая Time-to-Market в 3-5 раз без потери качества.";

  return (
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-[#F6F8FA] border-b border-[#E2E7ED]">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16 md:gap-24">
        {/* Part A: Center-Aligned Manifesto Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <ScrambleText
            words={text}
            tag="h2"
            font={{
              fontFamily: "var(--font-syne), sans-serif",
              fontWeight: 500,
              fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
              lineHeight: "1.25",
              letterSpacing: "-0.02em",
              textAlign: "center",
            }}
            enterAnimation={{
              mode: "multiLine",
              restState: "solid",
              replay: false,
              position: "center",
              scrambleIntensity: 100,
            }}
            hoverAnimation={{
              type: "diffusion",
              lines: "all",
              radius: 3,
              glitchChars: "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*",
            }}
            color="#0A0D12"
          />
        </div>

        {/* Part B: SphereGallery3D (Raw WebGL Fibonacci Sphere) */}
        <div className="w-full border border-[#E2E7ED] bg-[#FFFFFF] shadow-xs p-4 md:p-8 relative">
          <div className="absolute top-4 left-6 text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase">
            3D SPHERE GALLERY // FIBONACCI NODE DISTRIBUTION
          </div>
          <SphereGallery3D
            images={sampleImages}
            branches={34}
            scale={60}
            size={28}
            scatter={0}
            rounded={18}
            direction="clockwise"
            speed={18}
            background="transparent"
          />
        </div>
      </div>
    </section>
  );
}
