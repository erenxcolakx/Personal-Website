"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollJackingProps {
  totalSections: number;
  onSectionChange: (index: number) => void;
  threshold?: number;
}

export function useScrollJacking({ totalSections, onSectionChange }: UseScrollJackingProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top > 100 || rect.bottom < -100) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(totalSections - 1, currentSection + direction));

      if (nextSection !== currentSection) {
        setCurrentSection(nextSection);
        onSectionChange(nextSection);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentSection, totalSections, onSectionChange]);

  const goToSection = (index: number) => {
    if (index >= 0 && index < totalSections) {
      setCurrentSection(index);
      onSectionChange(index);
    }
  };

  return {
    containerRef,
    currentSection,
    isScrolling: false,
    goToSection,
  };
}
