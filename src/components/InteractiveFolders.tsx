"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const folders = [
  { id: 1, title: "КЕЙС: Лонгрид по психологии", slides: 9 },
  { id: 2, title: "КЕЙС: Академическая презентация", slides: 9 },
  { id: 3, title: "КЕЙС: Коммерция ('Приемка квартиры')", slides: 9 },
];

export default function InteractiveFolders() {
  return (
    <section className="w-full py-32 px-8 bg-gradient-to-b from-[#EAECEE] via-[#5E646A] to-[#08080A] overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl tracking-tighter font-display font-medium text-[#1A1D20] uppercase mb-20 text-center leading-[0.9]">
          ПРЕЗЕНТАЦИИ И ЛОНГРИДЫ: ОТ КОММЕРЧЕСКИХ ДО АКАДЕМИЧЕСКИХ
        </h2>

        <div className="flex flex-col gap-12 max-w-2xl mx-auto" style={{ perspective: '1200px' }}>
          {folders.map((folder) => (
            <FolderItem key={folder.id} folder={folder} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FolderProps {
  id: number;
  title: string;
  slides: number;
}

function FolderItem({ folder }: { folder: FolderProps }) {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  const handleWheel = (e: React.WheelEvent) => {
    if (!isHovered) return;

    // Prevent default scrolling when interacting with slides internally
    if (e.deltaY > 0 && currentSlide < folder.slides) {
      e.preventDefault();
      setCurrentSlide(prev => Math.min(prev + 1, folder.slides));
    } else if (e.deltaY < 0 && currentSlide > 1) {
      e.preventDefault();
      setCurrentSlide(prev => Math.max(prev - 1, 1));
    }
    // If at boundaries, allow default scroll to bubble up
  };

  return (
    <motion.div
      className="relative w-full aspect-[16/9] bg-[#D8DBDE] rounded-xl border border-white/50 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        // Optional: reset slide when mouse leaves
        // setCurrentSlide(1);
      }}
      onWheel={handleWheel}
      animate={{ rotateX: isHovered ? 10 : 0, y: isHovered ? -10 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Folder Back Tab */}
      <div className="absolute top-0 left-0 w-1/3 h-8 bg-[#D8DBDE] rounded-t-lg border-t border-l border-r border-white/50 -mt-8" />

      {/* Slide Container (slides out on hover) */}
      <motion.div
        className="absolute inset-x-4 bottom-4 top-4 bg-[#F4F4F6] rounded-lg border border-white/20 z-10 flex items-center justify-center shadow-md overflow-hidden"
        animate={{ y: isHovered ? -20 : 0 }}
      >
        <div className="text-4xl font-display text-[#1A1D20]/20">Slide {currentSlide}</div>
      </motion.div>

      {/* Folder Front Cover Overlay to create depth */}
      <div className="absolute inset-x-0 bottom-0 top-12 bg-[#D8DBDE]/80 backdrop-blur-md rounded-xl border border-white/50 z-20 p-6 flex flex-col justify-between">
        <h3 className="text-xl font-medium text-[#1A1D20] font-display">{folder.title}</h3>

        <div className="flex justify-between items-center text-xs font-mono text-[#1A1D20]/70">
          <span>{String(currentSlide).padStart(2, '0')} / {String(folder.slides).padStart(2, '0')}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">SCROLL TO NAVIGATE</span>
        </div>
      </div>
    </motion.div>
  );
}
