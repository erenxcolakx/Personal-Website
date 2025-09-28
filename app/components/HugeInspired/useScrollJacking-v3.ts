'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface UseScrollJackingProps {
  totalSections: number
  onSectionChange: (index: number) => void
  threshold?: number
}

export function useScrollJacking({ 
  totalSections, 
  onSectionChange, 
  threshold = 50 
}: UseScrollJackingProps) {
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>()
  const wheelTimeoutRef = useRef<NodeJS.Timeout>()

  const changeSection = useCallback((newSection: number) => {
    if (newSection >= 0 && newSection < totalSections && newSection !== currentSection && !isScrolling) {
      setIsScrolling(true)
      setCurrentSection(newSection)
      onSectionChange(newSection)

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      // Reset scrolling state
      timeoutRef.current = setTimeout(() => {
        setIsScrolling(false)
      }, 600)
    }
  }, [currentSection, totalSections, onSectionChange, isScrolling])

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) return

      const rect = containerRef.current.getBoundingClientRect()
      // Check if container is in viewport with more lenient bounds
      const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2

      if (!isInView) return

      // Prevent default to stop normal scrolling
      e.preventDefault()

      // If already scrolling, ignore new scroll events
      if (isScrolling) return

      // Clear any pending wheel timeout
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current)
      }

      // Debounce wheel events
      wheelTimeoutRef.current = setTimeout(() => {
        const direction = e.deltaY > 0 ? 1 : -1
        const nextSection = currentSection + direction

        // Allow scrolling in both directions
        if (nextSection >= 0 && nextSection < totalSections) {
          changeSection(nextSection)
        }
      }, 50)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (!containerRef.current || isScrolling) return

      const rect = containerRef.current.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2

      if (!isInView) return

      let nextSection = currentSection

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault()
          nextSection = Math.min(totalSections - 1, currentSection + 1)
          break
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          nextSection = Math.max(0, currentSection - 1)
          break
        case 'Home':
          e.preventDefault()
          nextSection = 0
          break
        case 'End':
          e.preventDefault()
          nextSection = totalSections - 1
          break
        default:
          return
      }

      changeSection(nextSection)
    }

    // Touch handling
    let startY = 0
    let startTime = 0

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY
      startTime = Date.now()
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || isScrolling) return

      const rect = containerRef.current.getBoundingClientRect()
      const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2

      if (!isInView) return

      const currentY = e.touches[0].clientY
      const deltaY = startY - currentY
      const deltaTime = Date.now() - startTime

      // Only trigger if swipe is fast enough and long enough
      if (Math.abs(deltaY) > threshold && deltaTime < 300) {
        e.preventDefault()
        
        const direction = deltaY > 0 ? 1 : -1
        const nextSection = currentSection + direction
        
        if (nextSection >= 0 && nextSection < totalSections) {
          changeSection(nextSection)
        }
        
        // Reset start position
        startY = currentY
        startTime = Date.now()
      }
    }

    // Add event listeners
    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
      if (wheelTimeoutRef.current) {
        clearTimeout(wheelTimeoutRef.current)
      }
    }
  }, [changeSection, currentSection, totalSections, threshold, isScrolling])

  const goToSection = useCallback((index: number) => {
    changeSection(index)
  }, [changeSection])

  return {
    containerRef,
    currentSection,
    isScrolling,
    goToSection
  }
}