"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const projects = [
  {
    title: "Bweet",
    description:
      "A modern social media platform built with Next.js and TypeScript. Features real-time messaging, user authentication, and responsive design.",
    image: "/images/projects/bweet.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dreamer",
    description:
      "Dream tracking and analysis application with AI-powered insights and beautiful data visualizations.",
    image: "/images/projects/dreamer.png",
    technologies: ["React Native", "Python", "TensorFlow", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Dreamer App",
    description:
      "Mobile companion app for dream tracking with offline capabilities and cloud synchronization.",
    image: "/images/projects/dreamerapp.png",
    technologies: ["React Native", "Redux", "AsyncStorage", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DS Dashboard",
    description:
      "Comprehensive analytics dashboard for data science projects with interactive charts and real-time updates.",
    image: "/images/projects/dsdashboard.png",
    technologies: ["Next.js", "D3.js", "Python", "FastAPI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "HitnessLab",
    description:
      "Fitness education platform where instructors can upload and manage training videos with course management features.",
    image: "/images/projects/hitnesslab.png",
    technologies: ["Spring Boot", "Next.js", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Hiversion",
    description:
      "SaaS platform combining microservices with modern frontend for scalable and modular software solutions.",
    image: "/images/projects/hiversion.png",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Li Weather",
    description:
      "Beautiful weather application with location-based forecasts and animated weather icons.",
    image: "/images/projects/liweather.png",
    technologies: ["React", "OpenWeather API", "CSS3", "Geolocation API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "SmartTestAI",
    description:
      "AI-powered testing platform that automatically generates test cases and validates software functionality.",
    image: "/images/projects/smarttestai.png",
    technologies: ["Python", "TensorFlow", "FastAPI", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Trakya Rezonans",
    description:
      "Medical imaging platform for radiology centers with advanced image processing and patient management.",
    image: "/images/projects/trakyarezonans.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "DICOM"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export function ScrollJackingProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="bg-white dark:bg-black">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity }}
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="relative overflow-hidden aspect-[4/3] mb-6 rounded-xl ring-1 ring-gray-200 dark:ring-gray-700 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        {/* Skeleton */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${loaded ? "opacity-0" : "opacity-100"}`}
        >
          <div className="h-10 w-10 rounded-full border-4 border-gray-300 dark:border-gray-600 border-t-transparent animate-spin" />
        </div>

        {/* Error fallback */}
        {error && (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 text-xs gap-2 p-4 bg-gray-100/80 dark:bg-gray-800/80">
            <span className="font-medium">Image not found</span>
            <code className="break-all opacity-70">{project.image}</code>
          </div>
        )}

        {!error && (
          <Image
            src={project.image}
            alt={project.title}
            fill
            unoptimized
            onLoadingComplete={() => {
              // debug log
              // eslint-disable-next-line no-console
              console.log("Loaded image:", project.image);
              setLoaded(true);
            }}
            onError={() => {
              setError(true);
              setLoaded(true);
            }}
            className={`object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 ${loaded ? "opacity-100" : "opacity-0"} ${error ? "hidden" : ""}`}
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            priority={index < 3}
          />
        )}

        {/* Soft gradient overlay always present for readability */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent transition-opacity ${loaded ? "opacity-40 group-hover:opacity-30" : "opacity-70"} ${error ? "hidden" : ""}`}
        />

        {/* Hover actions */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            className="text-white text-center space-y-4"
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.05 }}
          >
            <div className="flex space-x-4 justify-center">
              <motion.a
                href={project.liveUrl}
                className="w-11 h-11 border border-white/70 backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
              </motion.a>
              <motion.a
                href={project.githubUrl}
                className="w-11 h-11 border border-white/70 backdrop-blur-sm bg-white/10 hover:bg-white hover:text-black rounded-full flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="space-y-3">
        <motion.h3
          className="text-lg font-semibold md:text-xl text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 tracking-tight"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.18 }}
        >
          {project.title}
        </motion.h3>

        <div className="flex flex-wrap gap-2 mb-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 text-[11px] font-medium rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>

        <motion.p
          className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3"
          initial={{ opacity: 0.85 }}
          whileHover={{ opacity: 1 }}
        >
          {project.description}
        </motion.p>
      </div>
    </motion.div>
  );
}
