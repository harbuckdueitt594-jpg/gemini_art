"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          />
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 pointer-events-none">
            <motion.div
              layoutId={`project-container-${project.id}`}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0a0a0c] border border-white/10 rounded-3xl shadow-2xl pointer-events-auto scrollbar-hide"
            >
              <div className="sticky top-0 right-0 w-full flex justify-end p-4 z-20">
                <button
                  onClick={onClose}
                  className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="px-8 pb-12 pt-4 md:px-12 md:pb-16 md:pt-8">
                <span className="text-sm font-medium tracking-wider text-white/50 uppercase mb-4 block">
                  {project.category}
                </span>

                <motion.h2
                  layoutId={`project-title-${project.id}`}
                  className="text-3xl md:text-5xl font-bold leading-tight mb-8"
                >
                  {project.title}
                </motion.h2>

                <div className="space-y-8 text-lg font-light text-white/70 leading-relaxed">
                  <div>
                    <h3 className="text-xl font-medium text-white mb-3">The Challenge</h3>
                    <p>{project.description}</p>
                  </div>

                  {project.solution && (
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Strategy & Solution</h3>
                      <p>{project.solution}</p>
                    </div>
                  )}

                  {project.result && (
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Result & Business Impact</h3>
                      <p>{project.result}</p>
                    </div>
                  )}

                  {project.techStack && (
                    <div>
                      <h3 className="text-xl font-medium text-white mb-3">Technologies</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
