'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface DualMarqueeProps {
  primaryText: string
  secondaryText: string
  // Duration in seconds for one full loop (lower = faster)
  primaryDuration?: number
  secondaryDuration?: number
  // Reverse secondary direction
  reverseSecondary?: boolean
  className?: string
  primaryClassName?: string
  secondaryClassName?: string
  // Enable stroke duplicate layer for primary
  stroke?: boolean
}

// Utility: duplicate text enough times to cover long screens
function buildContent(text: string, repeat = 3) {
  return Array.from({ length: repeat }, () => text).join('  •  ')
}

export function DualMarquee({
  primaryText,
  secondaryText,
  primaryDuration = 32,
  secondaryDuration = 36,
  reverseSecondary = true,
  className = '',
  primaryClassName = '',
  secondaryClassName = '',
  stroke = true
}: DualMarqueeProps) {
  const primaryContent = buildContent(primaryText, 4)
  const secondaryContent = buildContent(secondaryText, 4)

  return (
    <div className={`relative flex flex-col gap-6 select-none overflow-hidden ${className}`} aria-hidden>
      {/* Primary Line */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap will-change-transform"
          animate={{ x: [0, -1000] }}
          transition={{ duration: primaryDuration, repeat: Infinity, ease: 'linear' }}
        >
          <span className={`font-extrabold tracking-tight leading-none ${primaryClassName}`}>
            {primaryContent}
          </span>
        </motion.div>
        {stroke && (
          <motion.div
            className="pointer-events-none absolute inset-0 flex whitespace-nowrap will-change-transform [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
            animate={{ x: [0, -1000] }}
            transition={{ duration: primaryDuration, repeat: Infinity, ease: 'linear' }}
          >
            <span className={`font-extrabold tracking-tight leading-none ${primaryClassName} text-transparent [-webkit-text-stroke:1px_theme(colors.blue.500/30)] dark:[-webkit-text-stroke:1px_theme(colors.blue.300/35)] opacity-50`}> 
              {primaryContent}
            </span>
          </motion.div>
        )}
      </div>

      {/* Secondary Line */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap will-change-transform"
          animate={{ x: reverseSecondary ? [-1000, 0] : [0, -1000] }}
          transition={{ duration: secondaryDuration, repeat: Infinity, ease: 'linear' }}
        >
          <span className={`font-semibold tracking-wide leading-none ${secondaryClassName}`}>
            {secondaryContent}
          </span>
        </motion.div>
      </div>
    </div>
  )
}

export default DualMarquee