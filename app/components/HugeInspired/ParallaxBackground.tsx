"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ParallaxBackgroundProps {
  currentIndex: number;
  colors: string[];
  /* New optional controls to avoid double background stacking */
  enableGradient?: boolean;
  enableShapes?: boolean;
  enableGrid?: boolean;
  enableRadialVignette?: boolean;
  gradientOpacity?: number;
  className?: string;
}

export function ParallaxBackground({
  currentIndex,
  colors,
  enableGradient = true,
  enableShapes = true,
  enableGrid = false,
  enableRadialVignette = true,
  gradientOpacity = 0.15,
  className = "",
}: ParallaxBackgroundProps) {
  const [layers, setLayers] = useState<
    Array<{ x: number; y: number; scale: number; opacity: number }>
  >([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (enableShapes) {
      const newLayers = Array.from({ length: 20 }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: 0.5 + Math.random() * 1.5,
        opacity: 0.1 + Math.random() * 0.3,
      }));
      setLayers(newLayers);
    } else {
      setLayers([]);
    }
  }, [currentIndex, enableShapes]);

  if (!mounted) {
    return <div className="fixed inset-0 overflow-hidden" />;
  }

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Main Background Gradient */}
      {enableGradient && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${colors[currentIndex]}`}
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0, scale: 1.05 }}
          /* Use prop-based opacity */
          animate={{ opacity: gradientOpacity, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.0, ease: "easeInOut" }}
        />
      )}

      {/* Floating Geometric Shapes */}
      {enableShapes &&
        layers.map((layer, index) => (
          <motion.div
            key={`${currentIndex}-${index}`}
            className="absolute rounded-full bg-white/10 backdrop-blur-sm"
            style={{
              left: `${layer.x}%`,
              top: `${layer.y}%`,
              width: `${20 + layer.scale * 30}px`,
              height: `${20 + layer.scale * 30}px`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              x: (index % 2 === 0 ? 1 : -1) * (50 + index * 10),
              y: (index % 3 === 0 ? 1 : -1) * (30 + index * 8),
            }}
            animate={{
              opacity: layer.opacity,
              scale: layer.scale,
              x: 0,
              y: 0,
            }}
            transition={{
              duration: 2 + (index % 3),
              delay: index * 0.1,
              ease: "easeOut",
            }}
          />
        ))}

      {/* Animated Grid */}
      {enableGrid && (
        <div className="absolute inset-0 opacity-5">
          <motion.div
            className="grid grid-cols-12 h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-white"
                animate={{
                  scaleY: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      )}

      {/* Radial Gradient Overlay */}
      {enableRadialVignette && (
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.3) 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        />
      )}
    </div>
  );
}
