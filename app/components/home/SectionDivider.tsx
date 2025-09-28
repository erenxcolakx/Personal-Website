'use client'

import { motion } from 'framer-motion'

interface SectionDividerProps {
  position?: 'top' | 'bottom'
}

export function SectionDivider({ position = 'bottom' }: SectionDividerProps) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
  className={`relative w-full h-8 -mt-4 select-none pointer-events-none`}
    >
      <div className={`absolute inset-x-0 ${position === 'bottom' ? 'top-0' : 'bottom-0'} h-full`}>        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 dark:via-white/5 to-black/80 dark:to-white/5 opacity-70" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/30 dark:via-white/10 to-transparent" />
      </div>
    </motion.div>
  )
}
