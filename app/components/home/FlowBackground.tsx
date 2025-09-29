"use client";
import { memo, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

/**
 * FlowBackground
 * Lightweight animated background:
 * - Layer 1: soft gradient blobs (CSS + transform animation)
 * - Layer 2: flowing lines (canvas) subtle
 * - Layer 3: tiny drifting particles (Framer Motion)
 * Designed to sit behind content on black without overpowering.
 */

interface FlowBackgroundProps {
  className?: string
}

export const FlowBackground = memo(function FlowBackground({ className = '' }: FlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const animationRef = useRef<number>()

  // Canvas flowing lines
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)

    const lines = Array.from({ length: 18 }).map((_, i) => ({
      baseY: (height / 18) * i + Math.random() * 20,
      amp: 20 + Math.random() * 40,
      speed: 0.4 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
      hue: 205 + Math.random() * 60,
      thickness: 0.4 + Math.random() * 0.6
    }))

    function draw(t: number) {
      if (!ctx) return
      ctx.clearRect(0, 0, width, height)
      ctx.globalCompositeOperation = 'lighter'
      for (const l of lines) {
        ctx.beginPath()
        for (let x = 0; x <= width; x += 24) {
          const y = l.baseY + Math.sin((x * 0.004) + (t * 0.0004 * l.speed) + l.phase) * l.amp
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        const alpha = 0.05
        ctx.strokeStyle = `hsla(${l.hue},70%,60%,${alpha})`
        ctx.lineWidth = l.thickness
        ctx.stroke()
      }
      animationRef.current = requestAnimationFrame(draw)
    }
    animationRef.current = requestAnimationFrame(draw)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Particles using framer motion for gentle drift
  const particles = Array.from({ length: 40 })
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Gradient Blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-32 w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.18),transparent_60%)] animate-pulse-slow" />
        <div className="absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle_at_70%_40%,rgba(168,85,247,0.18),transparent_65%)] animate-pulse-slower" />
        <div className="absolute bottom-[-300px] left-1/4 w-[560px] h-[560px] rounded-full bg-[radial-gradient(circle_at_50%_60%,rgba(236,72,153,0.16),transparent_60%)] animate-pulse-slowest" />
      </div>

      {/* Flowing Lines Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 [mask-image:radial-gradient(circle_at_center,white,transparent_75%)]" />

      {/* Drifting Particles */}
      <div className="absolute inset-0">
        {particles.map((_, i) => {
          const x = Math.random() * 100
          const y = Math.random() * 100
          const duration = 12 + Math.random() * 14
          const delay = Math.random() * 6
          const driftX = x + (Math.random() * 20 - 10)
          const driftY = y + (Math.random() * 20 - 10)
          return (
            <motion.span
              key={i}
              initial={{ opacity: 0, left: `${x}%`, top: `${y}%`, scale: 0.4 }}
              animate={{
                opacity: [0, 1, 1, 0],
                left: [`${x}%`, `${driftX}%`],
                top: [`${y}%`, `${driftY}%`],
                scale: [0.4, 1, 0.8, 0.4]
              }}
              transition={{ duration, repeat: Infinity, delay, ease: 'easeInOut' }}
              className="absolute w-1 h-1 rounded-full bg-cyan-300/40 blur-[1px]" />
          )
        })}
      </div>

      {/* Subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,black_80%)]" />
    </div>
  )
})

// Tailwind animations (ensure in globals if not existing)
// .animate-pulse-slow { animation: pulse 8s ease-in-out infinite; }
// .animate-pulse-slower { animation: pulse 12s ease-in-out infinite; }
// .animate-pulse-slowest { animation: pulse 18s ease-in-out infinite; }
