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
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return;

      const now = Date.now();
      if (now - lastScrollTime.current < 100) return; // Throttle scroll events
      lastScrollTime.current = now;

      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (!isInView) return;

      if (isScrolling) {
        e.preventDefault();
        return;
      }

      // Check boundaries
      if (currentSection === 0 && e.deltaY < 0) return;
      if (currentSection === totalSections - 1 && e.deltaY > 0) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextSection = Math.max(0, Math.min(totalSections - 1, currentSection + direction));

      if (nextSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(nextSection);
        onSectionChange(nextSection);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current || isScrolling) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;

      if (!isInView) return;

      let nextSection = currentSection;

      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          nextSection = Math.min(totalSections - 1, currentSection + 1);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          nextSection = Math.max(0, currentSection - 1);
          break;
        case "Home":
          e.preventDefault();
          nextSection = 0;
          break;
        case "End":
          e.preventDefault();
          nextSection = totalSections - 1;
          break;
        default:
          return;
      }

      if (nextSection !== currentSection) {
        setIsScrolling(true);
        setCurrentSection(nextSection);
        onSectionChange(nextSection);

        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
          setIsScrolling(false);
        }, 800);
      }
    };

    // Touch handling
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

        const direction = deltaY > 0 ? 1 : -1;
        const nextSection = Math.max(0, Math.min(totalSections - 1, currentSection + direction));

        if (nextSection !== currentSection) {
          setIsScrolling(true);
          setCurrentSection(nextSection);
          onSectionChange(nextSection);

          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }

          timeoutRef.current = setTimeout(() => {
            setIsScrolling(false);
          }, 800);
        }

        startY = currentY;
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

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 800);
    }
  };

  return {
    containerRef,
    currentSection,
    isScrolling,
    goToSection,
  };
}
