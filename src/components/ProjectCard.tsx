"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import clsx from "clsx";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const sizeClasses = {
    small: "col-span-1 row-span-1 md:col-span-4",
    medium: "col-span-1 row-span-1 md:col-span-6",
    large: "col-span-1 row-span-1 md:col-span-8",
  };

  const currentSize = project.size || "medium";

  return (
    <motion.div
      layoutId={`project-container-${project.id}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={onClick}
      className={clsx(
        "group relative cursor-pointer overflow-hidden rounded-3xl",
        "bg-white/[0.03] backdrop-blur-xl border border-white/10 hover:border-white/25",
        "transition-all duration-500 hover:shadow-2xl hover:shadow-white/5",
        sizeClasses[currentSize]
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="p-8 h-full flex flex-col justify-between min-h-[320px]">
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="text-xs font-medium tracking-wider text-white/50 uppercase">
              {project.category}
            </span>
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <ArrowUpRight size={18} />
            </div>
          </div>

          <motion.h3
            layoutId={`project-title-${project.id}`}
            className="text-2xl md:text-3xl font-semibold leading-tight text-white/90 group-hover:text-white transition-colors duration-300 mb-4"
          >
            {project.title}
          </motion.h3>

          <p className="text-white/60 font-light line-clamp-3 leading-relaxed">
            {project.description}
          </p>
        </div>

        {project.techStack && (
          <div className="mt-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
