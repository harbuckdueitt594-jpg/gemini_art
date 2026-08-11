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
    <section className="w-full py-32 px-8 bg-surface border-t border-white/5 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-xl md:text-2xl font-display font-medium text-text-primary uppercase mb-20 text-center tracking-tight">
          ПРЕЗЕНТАЦИИ И ЛОНГРИДЫ: ОТ КОММЕРЧЕСКИХ ДО АКАДЕМИЧЕСКИХ
        </h2>

        <div className="flex flex-col gap-12 max-w-2xl mx-auto">
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
      className="relative w-full aspect-[16/9]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        // Optional: reset slide when mouse leaves
        // setCurrentSlide(1);
      }}
      onWheel={handleWheel}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Folder Back Tab */}
      <div className="absolute top-0 left-0 w-1/3 h-8 bg-surface-secondary/20 rounded-t-lg border-t border-l border-r border-white/10" />

      {/* Slide Container (slides out on hover) */}
      <motion.div
        className="absolute inset-x-0 bottom-0 top-8 bg-main rounded-tr-lg rounded-b-lg border border-white/20 z-10 flex items-center justify-center shadow-xl overflow-hidden"
        animate={{ y: isHovered ? -20 : 0 }}
      >
        <div className="text-4xl font-display text-text-secondary/20">Slide {currentSlide}</div>
      </motion.div>

      {/* Folder Front Cover */}
      <div className="absolute inset-x-0 bottom-0 top-12 bg-surface-secondary/10 backdrop-blur-md rounded-xl border border-white/10 z-20 p-6 flex flex-col justify-between">
        <h3 className="text-lg font-medium text-text-primary font-display">{folder.title}</h3>

        <div className="flex justify-between items-center text-xs font-mono text-text-secondary">
          <span>{String(currentSlide).padStart(2, '0')} / {String(folder.slides).padStart(2, '0')}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">SCROLL TO NAVIGATE</span>
        </div>
      </div>
    </motion.div>
  );
}
