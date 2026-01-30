"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ExternalLink, Github, Play } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import projects from "../projects/data/projects";
import { ScrollJackingProjects } from "./HugeInspired/ScrollJackingProjects";

// project metadata is imported from app/projects/data/projects.ts

export function Projects() {
  return (
    <>
      {/* Intro Section */}
      <section className="pt-28 pb-20 bg-gray-50 dark:bg-gray-900 relative min-h-screen">
        <div className="container mx-auto px-6">
          {/* Parallax Text */}
          <div className="overflow-hidden mb-20 pointer-events-none select-none relative z-20">
            <motion.div
              className="text-5xl md:text-7xl font-bold text-gray-300/80 dark:text-gray-500/50 tracking-tight flex whitespace-nowrap will-change-transform z-20 drop-shadow-sm"
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              aria-hidden="true"
            >
              <span className="block mr-8">SELECTED WORK • </span>
              <span className="block mr-8">FEATURED PROJECTS • </span>
              <span className="block mr-8">CREATIVE SOLUTIONS • </span>
              <span className="block mr-8">SELECTED WORK • </span>
              <span className="block mr-8">FEATURED PROJECTS • </span>
              <span className="block mr-8">CREATIVE SOLUTIONS • </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center relative  max-w-5xl mx-auto z-50"
          >
            <h2 className="text-6xl md:text-8xl font-bold text-white dark:text-white mb-6">
              FEATURED
              <br />
              <span className="text-gray-600 dark:text-gray-400">PROJECTS</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              A collection of projects that showcase innovation, creativity, and technical
              excellence.
            </p>

            <motion.div
              className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Scroll to explore each project
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            className="flex flex-col items-center mt-20 space-y-6 z-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              className="text-black dark:text-white text-base font-semibold uppercase tracking-wider drop-shadow-lg"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Scroll Down
            </motion.div>

            <motion.div
              className="relative bg-white dark:bg-black rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700"
              animate={{ y: [0, 12, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDown className="w-6 h-6 text-black dark:text-white" />
            </motion.div>

            {/* Scroll line indicator */}
            <motion.div
              className="w-1 h-20 bg-gradient-to-b from-black to-transparent dark:from-white rounded-full shadow-lg"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 1.2, duration: 1.2 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Scroll Jacking Projects Section */}
      <ScrollJackingProjects />
    </>
  );
}

// Project Card Component with Huge Inc. styling
interface ProjectCardProps {
  project: any;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-[4/3] mb-6 rounded-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            className="text-white text-center"
            initial={{ y: 20, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center mx-auto mb-4">
              <ExternalLink className="w-6 h-6" />
            </div>
            <p className="text-sm">View Project</p>
          </motion.div>
        </motion.div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-black dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">2024</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-3">
          {project.technologies.slice(0, 3).map((tech: string) => (
            <span
              key={tech}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.p
          className="text-gray-700 dark:text-gray-300 leading-relaxed"
          initial={{ opacity: 0.7 }}
          whileHover={{ opacity: 1 }}
        >
          {project.description}
        </motion.p>
      </div>
    </motion.div>
  );
}
