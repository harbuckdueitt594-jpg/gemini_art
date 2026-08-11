"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const folders = [
  { id: 1, title: "КЕЙС: Лонгрид по психологии", slides: 9 },
  { id: 2, title: "КЕЙС: Академическая презентация", slides: 9 },
  { id: 3, title: "КЕЙС: Коммерция ('Приемка квартиры')", slides: 9 },
];

export default function InteractiveFolders() {
  const [activeFolder, setActiveFolder] = useState<number | null>(null);

  const selectedFolder = folders.find(f => f.id === activeFolder);

  return (
    <section className="w-full py-32 px-8 bg-gradient-to-b from-[#EAECEE] to-[#656A70] overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-mono tracking-widest text-[#1A1D20]/70 mb-4">07 / OTHER CASES</h2>
          <h3 className="text-4xl md:text-7xl tracking-tighter font-display font-medium text-[#1A1D20] uppercase mb-4 leading-[0.9]">
            ПРЕЗЕНТАЦИИ И ЛОНГРИДЫ
          </h3>
          <p className="text-xl md:text-3xl font-display text-[#1A1D20]/80">от коммерческих до академических</p>
        </div>

        <div className="flex flex-col gap-16 max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
          {folders.map((folder) => (
            <FolderItem key={folder.id} folder={folder} onClick={() => setActiveFolder(folder.id)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeFolder && selectedFolder && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 backdrop-blur-2xl bg-[#1A1D20]/80 flex flex-col p-10 overflow-y-auto"
          >
            <div className="w-full max-w-7xl mx-auto flex flex-col gap-8 relative h-full">
              <div className="flex justify-between items-center bg-[#EAECEE] p-6 rounded-2xl sticky top-0 z-10 shadow-lg">
                <h3 className="text-2xl font-display font-medium text-[#1A1D20]">{selectedFolder.title}</h3>
                <button
                  onClick={() => setActiveFolder(null)}
                  className="px-6 py-2 bg-[#1A1D20] text-[#EAECEE] rounded-full font-mono text-sm hover:bg-[#111] transition-colors"
                >
                  BACK
                </button>
              </div>

              <motion.div
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20"
              >
                {Array.from({ length: selectedFolder.slides }, (_, i) => i + 1).map((slide) => (
                  <div key={slide} className="aspect-video bg-[#EAECEE] rounded-xl shadow-xl flex items-center justify-center relative overflow-hidden group">
                     <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     <span className="font-display text-[#1A1D20]/40 text-2xl font-medium">SLIDE {slide}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

interface FolderProps {
  id: number;
  title: string;
  slides: number;
}

function FolderItem({ folder, onClick }: { folder: FolderProps, onClick: () => void }) {
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
      onClick={onClick}
      className="relative w-full aspect-[16/9] bg-[#8C9298] rounded-xl border border-white/30 shadow-lg cursor-pointer transform scale-125 mx-auto mt-8 mb-12 origin-center hover:z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      animate={{ rotateX: isHovered ? 10 : 0, y: isHovered ? -10 : 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Folder Back Tab */}
      <div className="absolute top-0 left-0 w-1/3 h-8 bg-[#8C9298] rounded-t-lg border-t border-l border-r border-white/30 -mt-8" />

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
                 className="absolute inset-x-4 bottom-16 top-4 bg-[#F4F4F6] rounded-lg border border-black/5 flex items-center justify-center shadow-2xl"
               >
                 <div className="text-4xl font-display text-[#1A1D20]/20">Slide {slideIndex}</div>
               </motion.div>
             )
           ))}
         </AnimatePresence>
      </div>

      {/* Folder Front Cover Overlay to create depth */}
      <div className="absolute inset-x-0 bottom-0 top-16 bg-[#5E646A]/90 backdrop-blur-md rounded-xl border border-white/30 z-20 p-6 flex flex-col justify-between transform-origin-bottom" style={{ transformOrigin: 'bottom' }}>
        <h3 className="text-xl font-medium text-[#EAECEE] font-display">{folder.title}</h3>

        <div className="flex justify-between items-center text-xs font-mono text-[#EAECEE]/70">
          <span>{String(currentSlide).padStart(2, '0')} / {String(folder.slides).padStart(2, '0')}</span>
          <span className={`transition-opacity ${isHovered ? 'opacity-100' : 'opacity-0'}`}>CLICK TO EXPAND / SCROLL TO NAVIGATE</span>
        </div>
      </div>
    </motion.div>
  );
}
