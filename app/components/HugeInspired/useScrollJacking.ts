"use client";

import { useEffect, useRef, useState } from "react";

interface UseScrollJackingProps {
  totalSections: number;
  onSectionChange: (index: number) => void;
  threshold?: number;
}

export function useScrollJacking({
  totalSections,
  onSectionChange,
  threshold = 50,
}: UseScrollJackingProps) {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || isScrolling) return;

      const currentY = e.touches[0].clientY;
      const deltaY = startY - currentY;

      if (Math.abs(deltaY) > threshold) {
        e.preventDefault();
        handleSectionChange(deltaY > 0 ? 1 : -1);
        startY = currentY;
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      // More aggressive viewport detection - if any part of container is visible
      const isInView = rect.bottom > -100 && rect.top < window.innerHeight + 100;

      if (!isInView) return;

      // Don't process if already scrolling
      if (isScrolling) return;

      // Check boundaries - allow normal scrolling at edges
      if (currentSection === 0 && e.deltaY < 0) return;
      if (currentSection === totalSections - 1 && e.deltaY > 0) return;

      // Prevent default scrolling when in our container
      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      handleSectionChange(direction);
    };

    const handleSectionChange = (direction: number) => {
      if (isScrolling) return;

      const nextSection = Math.max(0, Math.min(totalSections - 1, currentSection + direction));

      if (nextSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(nextSection);
        onSectionChange(nextSection);

        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        // Reset scrolling state after animation
        timeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 1000); // Longer timeout to prevent rapid scrolling
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current || isScrolling) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top < window.innerHeight && rect.bottom > 0;

      if (!isInView) return;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          handleSectionChange(1);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          handleSectionChange(-1);
          break;
        case "Home":
          e.preventDefault();
          if (currentSection !== 0) {
            setIsScrolling(true);
            setCurrentSection(0);
            onSectionChange(0);
            timeoutRef.current = setTimeout(() => setIsScrolling(false), 600);
          }
          break;
        case "End":
          e.preventDefault();
          if (currentSection !== totalSections - 1) {
            setIsScrolling(true);
            setCurrentSection(totalSections - 1);
            onSectionChange(totalSections - 1);
            timeoutRef.current = setTimeout(() => setIsScrolling(false), 600);
          }
          break;
      }
    };

    // Add event listeners
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSection, totalSections, onSectionChange, threshold, isScrolling]);

  const goToSection = (index: number) => {
    if (index >= 0 && index < totalSections && index !== currentSection && !isScrolling) {
      setIsScrolling(true);
      setCurrentSection(index);
      onSectionChange(index);

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Reset scrolling state after animation
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  };

  return {
    containerRef,
    currentSection,
    isScrolling,
    goToSection,
  };
}
