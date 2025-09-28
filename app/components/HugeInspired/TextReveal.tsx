'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const words = text.split(" ")
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-2"
          initial={{ y: "100%", opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: delay + index * 0.1,
            ease: [0.23, 1, 0.32, 1]
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}

interface SplitTextProps {
  text: string
  className?: string
  delay?: number
}

export function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const letters = text.split("")
  
  return (
    <div ref={ref} className={className}>
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: delay + index * 0.03,
            ease: "easeOut"
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  )
}