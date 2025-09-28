"use client"

import { useEffect, useRef, useState } from 'react'

// Lightweight, allocation-free lerp
function lerp(a: number, b: number, n: number) { return a + (b - a) * n }

// Detect interactive element (anchor / button / role)
function isInteractive(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false
  return !!target.closest('a, button, [role="button"], [data-cursor="interactive"]')
}

export function CursorFollower() {
  const mainRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const pos = useRef({ x: -100, y: -100 }) // instantaneous pointer
  const smooth = useRef({ x: -100, y: -100 }) // smoothed trailing position
  const hoverState = useRef(false)
  const rafRef = useRef<number | null>(null)
  const [mounted, setMounted] = useState(false)
  const reducedMotion = useRef(false)
  const pointerSupported = typeof window !== 'undefined' && matchMedia('(pointer:fine)').matches

  useEffect(() => {
    if (!pointerSupported) return
    setMounted(true)
    reducedMotion.current = matchMedia('(prefers-reduced-motion: reduce)').matches

    const handleMove = (e: MouseEvent) => {
      pos.current.x = e.clientX
      pos.current.y = e.clientY
    }

    const handlePointerOver = (e: PointerEvent) => {
      hoverState.current = isInteractive(e.target)
    }

    window.addEventListener('mousemove', handleMove, { passive: true })
    window.addEventListener('pointerover', handlePointerOver, { passive: true })
    window.addEventListener('pointerout', handlePointerOver, { passive: true })

    const loop = () => {
      // smoothing factor (faster when distance large)
      const dx = pos.current.x - smooth.current.x
      const dy = pos.current.y - smooth.current.y
      smooth.current.x = lerp(smooth.current.x, pos.current.x, 0.22)
      smooth.current.y = lerp(smooth.current.y, pos.current.y, 0.22)

      const main = mainRef.current
      const ring = ringRef.current
      if (main && ring) {
        // instantaneous main dot
        main.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`
        // trailing ring follows smoothed coords
        const scale = hoverState.current ? 1.2 : 1
        const ringScale = hoverState.current ? 1.55 : 1
        ring.style.transform = `translate3d(${smooth.current.x}px, ${smooth.current.y}px,0) translate(-50%,-50%) scale(${ringScale})`
        main.style.transform += ` translate(-50%,-50%) scale(${scale})`
        // subtle velocity-based opacity / stretch could be added later
      }
      if (!reducedMotion.current) rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('pointerover', handlePointerOver)
      window.removeEventListener('pointerout', handlePointerOver)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [pointerSupported])

  if (!mounted) return null

  // Hidden on touch / coarse pointers
  if (!pointerSupported) return null

  return (
    <>
      {/* Outer trailing ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none w-14 h-14 rounded-full border border-white/30 dark:border-white/20 bg-white/5 dark:bg-white/5 backdrop-blur-md mix-blend-difference transition-[background,backdrop-filter,border] duration-300 will-change-transform"
        style={{
          boxShadow: '0 0 40px -5px rgba(255,255,255,0.25)',
        }}
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/0" />
      </div>
      {/* Core dot */}
      <div
        ref={mainRef}
        className="fixed top-0 left-0 z-[9999] w-4 h-4 rounded-full bg-white mix-blend-difference pointer-events-none shadow-[0_0_0_4px_rgba(255,255,255,0.15)] will-change-transform"
      />
    </>
  )
}