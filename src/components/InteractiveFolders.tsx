"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const folderRef = useRef<HTMLDivElement>(null);

  // Use a ref to keep track of the latest state in the event listener
  const isHoveredRef = useRef(isHovered);
  const currentSlideRef = useRef(currentSlide);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isHoveredRef.current) {
        e.preventDefault();

        const now = Date.now();
        // Debounce scroll to avoid skipping multiple slides at once
        if (now - lastScrollTime.current < 200) return;

        if (e.deltaY > 0 && currentSlideRef.current < folder.slides) {
          lastScrollTime.current = now;
          setCurrentSlide(prev => Math.min(prev + 1, folder.slides));
        } else if (e.deltaY < 0 && currentSlideRef.current > 1) {
          lastScrollTime.current = now;
          setCurrentSlide(prev => Math.max(prev - 1, 1));
        }
      }
    };

    const el = folderRef.current;
    if (el) el.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      if (el) el.removeEventListener('wheel', handleWheel);
    };
  }, [folder.slides]);

  // Array of placeholder slides
  const slidesArray = Array.from({ length: folder.slides }, (_, i) => i + 1);

  return (
    <motion.div
      ref={folderRef}
      className="relative w-full aspect-[16/9] bg-[#8C9298] rounded-xl border border-white/50 shadow-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      animate={{ rotateX: isHovered ? 10 : 0, y: isHovered ? -10 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Folder Back Tab */}
      <div className="absolute top-0 left-0 w-1/3 h-8 bg-[#8C9298] rounded-t-lg border-t border-l border-r border-white/50 -mt-8" />

      {/* Slide Container (slides out on hover) */}
      <div className="absolute inset-0 overflow-visible z-10">
         <AnimatePresence mode="popLayout">
           {slidesArray.map((slideIndex) => (
             slideIndex === currentSlide && (
               <motion.div
                 key={slideIndex}
                 initial={{ opacity: 0, scale: 0.9, y: 20 }}
                 animate={{
                    opacity: 1,
                    scale: isHovered ? 1.05 : 1,
                    y: isHovered ? -40 : 16 // peek out on hover
                 }}
                 exit={{ opacity: 0, scale: 0.9, y: 20 }}
                 transition={{ type: "spring", stiffness: 300, damping: 20 }}
                 className="absolute inset-x-4 bottom-16 top-4 bg-[#F4F4F6] rounded-lg border border-white/20 flex items-center justify-center shadow-2xl"
               >
                 <div className="text-4xl font-display text-[#1A1D20]/20">Slide {slideIndex}</div>
               </motion.div>
             )
           ))}
         </AnimatePresence>
      </div>

      {/* Folder Front Cover Overlay to create depth */}
      <div className="absolute inset-x-0 bottom-0 top-16 bg-[#5E646A]/90 backdrop-blur-md rounded-xl border border-white/50 z-20 p-6 flex flex-col justify-between transform-origin-bottom" style={{ transformOrigin: 'bottom' }}>
        <h3 className="text-xl font-medium text-[#F4F4F6] font-display">{folder.title}</h3>

        <div className="flex justify-between items-center text-xs font-mono text-[#F4F4F6]/70">
          <span>{String(currentSlide).padStart(2, '0')} / {String(folder.slides).padStart(2, '0')}</span>
          <span className={`transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>SCROLL TO NAVIGATE</span>
        </div>
      </div>
    </motion.div>
  );
}