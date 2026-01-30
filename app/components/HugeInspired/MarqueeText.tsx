"use client";

import { motion } from "framer-motion";

interface MarqueeTextProps {
  text: string;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}

export function MarqueeText({
  text,
  speed = 50,
  direction = "left",
  className = "",
}: MarqueeTextProps) {
  const duplicatedText = Array(4).fill(text).join(" • ");

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: direction === "left" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <span className="text-6xl md:text-8xl font-bold opacity-10">{duplicatedText}</span>
      </motion.div>
    </div>
  );
}

export function ScrollMarquee({
  text,
  className = "",
  baseVelocity = 100,
}: {
  text: string;
  className?: string;
  baseVelocity?: number;
}) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {Array(6)
          .fill(text)
          .map((item, index) => (
            <span key={index} className="mr-8 text-6xl md:text-8xl font-bold opacity-10">
              {item}
            </span>
          ))}
      </motion.div>
    </div>
  );
}
