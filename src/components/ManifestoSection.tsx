"use client";

import ScrambleText from "./ScrambleText";
import SphereGallery3D from "./SphereGallery3D";

export default function ManifestoSection() {
  const manifestoText = `Я соединяю эстетику премиального арт-дирекшна с технологиями искусственного интеллекта. Создаю визуальные экосистемы, быстрый веб и кастомных ИИ-агентов, сокращая Time-to-Market в 3–5 раз без потери качества.`;

  return (
    <section className="relative w-full py-28 px-8 bg-[#EAECEE] text-[#1A1D20] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-20 items-center">

        {/* First Part: Centered Scramble Text */}
        <div className="w-full max-w-5xl text-center flex flex-col items-center justify-center">
          <ScrambleText
            words={manifestoText}
            tag="p"
            className="font-display text-2xl md:text-4xl font-semibold tracking-tighter leading-[1.2] text-[#1A1D20]"
            color="#1A1D20"
            scrambleSpeed={20}
            hoverEffect="diffusion"
            radius={3}
          />
        </div>

        {/* Second Part: Sphere Gallery 3D */}
        <div className="w-full relative flex flex-col items-center">
          <div className="text-xs font-mono tracking-widest text-[#8C9298] mb-6 uppercase">
            3D SPHERE GALLERY // VISUAL ECOSYSTEMS
          </div>

          <SphereGallery3D
            branches={34}
            scale={65}
            size={28}
            rounded={18}
            speed={18}
            hover={200}
            direction="counterclockwise"
            core={{
              coreSize: 24,
              coreColor: "rgba(26, 29, 32, 0.4)",
              lineColor: "rgba(26, 29, 32, 0.2)",
            }}
            className="w-full h-[550px] shadow-2xl rounded-3xl overflow-hidden border border-black/10"
          />
        </div>

      </div>
    </section>
  );
}
