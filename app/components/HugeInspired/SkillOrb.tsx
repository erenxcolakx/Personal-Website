"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

interface SkillOrbProps {
  skill: {
    name: string;
    icon: string;
  };
  index: number;
}

export function SkillOrb({ skill, index }: SkillOrbProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="w-32 h-32 bg-gradient-to-br from-gray-900/80 to-gray-800/60 dark:from-gray-100/10 dark:to-gray-200/5 backdrop-blur-md border border-gray-700/50 dark:border-white/20 rounded-2xl flex flex-col items-center justify-center relative overflow-hidden shadow-xl"
        whileHover={{ scale: 1.05 }}
        animate={
          isHovered
            ? {
                boxShadow:
                  "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.1)",
                borderColor: "rgba(255, 255, 255, 0.4)",
              }
            : {}
        }
        transition={{ duration: 0.3 }}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background:
              "linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 50%, rgba(236, 72, 153, 0.1) 100%)",
          }}
        />

        {/* Subtle Inner Glow */}
        <motion.div
          className="absolute inset-2 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)",
          }}
        />

        {/* Skill Icon */}
        <div className="relative z-10 mb-3">
          <motion.div
            className="w-16 h-16 relative p-2 rounded-xl bg-white/5 dark:bg-white/10 backdrop-blur-sm"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={48}
              height={48}
              className="object-contain w-full h-full transition-all duration-500 group-hover:drop-shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">${skill.name.charAt(0)}</div>`;
                }
              }}
            />
          </motion.div>
        </div>

        {/* Skill Name */}
        <span className="text-sm font-semibold text-gray-200 dark:text-gray-300 text-center group-hover:text-white transition-colors duration-300 relative z-10 px-2">
          {skill.name}
        </span>

        {/* Animated Border */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, transparent 0%, rgba(59, 130, 246, 0.3) 50%, transparent 100%)",
            padding: "1px",
          }}
          initial={{ opacity: 0, rotate: 0 }}
          animate={
            isHovered
              ? {
                  opacity: 1,
                  rotate: 360,
                }
              : { opacity: 0, rotate: 0 }
          }
          transition={{
            duration: 2,
            ease: "linear",
            repeat: isHovered ? Infinity : 0,
          }}
        >
          <div className="w-full h-full bg-transparent rounded-2xl" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
