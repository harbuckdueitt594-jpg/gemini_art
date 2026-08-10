"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const FOLDERS = [
  { id: "psych", title: "КЕЙС: Лонгрид по психологии", slides: 9 },
  { id: "academic", title: "КЕЙС: Академическая презентация", slides: 9 },
  { id: "commerce", title: "КЕЙС: Коммерция ('Приемка квартиры')", slides: 9 },
];

export default function PresentationFolders() {
  const scrollContainers = useRef<(HTMLDivElement | null)[]>([]);

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>, index: number) => {
    const container = scrollContainers.current[index];
    if (container) {
      const isAtStart = container.scrollLeft === 0;
      const isAtEnd = Math.abs(container.scrollWidth - container.scrollLeft - container.clientWidth) < 1;

      // If scrolling horizontally (trackpad) or trying to scroll vertically within the slider
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
         e.stopPropagation(); // let native horizontal scroll happen
         return;
      }

      // Map vertical wheel to horizontal scroll
      if (e.deltaY > 0 && !isAtEnd) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      } else if (e.deltaY < 0 && !isAtStart) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
      // If at boundaries, allow default vertical page scroll
    }
  };

  return (
    <section className="relative w-full bg-primary-dark text-text-dark py-32 px-6 md:px-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 divider-light-to-dark opacity-80 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col gap-16 relative z-10">
        <header className="border-b border-white/10 pb-8">
          <h2 className="text-3xl md:text-5xl font-syne font-bold uppercase tracking-tighter mb-4 text-balance">
            ПРЕЗЕНТАЦИИ И ЛОНГРИДЫ: ОТ КОММЕРЧЕСКИХ ДО АКАДЕМИЧЕСКИХ
          </h2>
        </header>

        <div className="flex flex-col gap-12">
          {FOLDERS.map((folder, folderIdx) => (
            <div key={folder.id} className="group relative">
              <h3 className="text-xl font-syne font-bold mb-6 text-accent-neon flex items-center gap-4">
                <span className="w-8 h-[1px] bg-accent-neon" />
                {folder.title}
              </h3>

              {/* Folder Container */}
              <div
                className="relative glass-panel-dark rounded-xl p-4 md:p-8"
                onWheel={(e) => handleWheel(e, folderIdx)}
              >
                {/* Horizontal Scroll Area */}
                <div
                  ref={el => { scrollContainers.current[folderIdx] = el }}
                  className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory hide-scrollbar relative z-10"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {Array.from({ length: folder.slides }).map((_, slideIdx) => (
                    <motion.div
                      key={slideIdx}
                      className="shrink-0 w-[280px] md:w-[400px] aspect-[4/3] bg-[#1a1a1f] rounded-lg border border-white/5 snap-center relative overflow-hidden group/slide cursor-ew-resize"
                      whileHover={{ scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                    >
                       <svg className="w-full h-full text-white/5" preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100" fill="currentColor">
                         <rect width="100" height="100" />
                       </svg>
                       <div className="absolute inset-0 flex items-center justify-center font-mono text-white/20 text-2xl font-bold">
                         SLIDE {slideIdx + 1}
                       </div>
                    </motion.div>
                  ))}
                </div>

                {/* Fake folder back tab (aesthetic) */}
                <div className="absolute -top-3 left-4 w-32 h-6 bg-white/[0.03] border border-white/10 border-b-0 rounded-t-lg -z-10 transition-transform duration-300 group-hover:-translate-y-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
