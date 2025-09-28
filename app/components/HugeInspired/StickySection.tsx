'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface StickySectionProps {
  children: ReactNode
  className?: string
  height?: string
}

export function StickySection({ 
  children, 
  className = "", 
  height = "200vh" 
}: StickySectionProps) {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div ref={targetRef} style={{ height }} className={`relative ${className}`}>
      <motion.div
        style={{ opacity, scale, y }}
        className="sticky top-0 h-screen flex items-center justify-center"
      >
        {children}
      </motion.div>
    </div>
  )
}

export function ParallaxSection({ 
  children, 
  speed = 0.5,
  className = "" 
}: { 
  children: ReactNode
  speed?: number
  className?: string 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 100])

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  )
}