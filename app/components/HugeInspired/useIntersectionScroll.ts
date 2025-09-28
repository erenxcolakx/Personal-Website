'use client'

import { useEffect, useRef, useState } from 'react'

interface UseIntersectionScrollProps {
  totalSections: number
  onSectionChange: (index: number) => void
}

export function useIntersectionScroll({ 
  totalSections, 
  onSectionChange 
}: UseIntersectionScrollProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-section') || '0')
            if (index !== currentSection) {
              setCurrentSection(index)
              onSectionChange(index)
            }
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: '-20% 0px -20% 0px'
      }
    )

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [currentSection, onSectionChange])

  const goToSection = (index: number) => {
    if (index >= 0 && index < totalSections && sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'center'
      })
    }
  }

  const setSectionRef = (index: number) => (ref: HTMLDivElement | null) => {
    sectionRefs.current[index] = ref
  }

  return {
    containerRef,
    currentSection,
    isScrolling: false,
    goToSection,
    setSectionRef
  }
}