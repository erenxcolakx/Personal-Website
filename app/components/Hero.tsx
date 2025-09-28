'use client'

import { useState, useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -200])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  useEffect(() => {
    setMounted(true)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  if (!mounted) return null

  return (
    <motion.section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white dark:bg-black text-black dark:text-white"
      style={{ y, opacity }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-black/20 dark:border-white/20" />
          ))}
        </div>
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-4 h-4 bg-black dark:bg-white rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      {/* Floating Elements */}
      {mounted && (
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-black/30 dark:bg-white/30 rounded-full"
              initial={{
                x: (i + 1) * 200,
                y: (i + 1) * 150,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, (i % 2 === 0 ? 25 : -25), 0],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      )}

      <div className="container mx-auto px-6 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Main Content */}
          <div className="space-y-8">
            <motion.h1
              className="flex flex-row justify-center align-items-center text-6xl md:text-8xl lg:text-9xl font-bold leading-none"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.span
                className="block text-black dark:text-white py-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Eren
              </motion.span>
              <motion.span
                className="block text-transparent py-6 bg-clip-text bg-gradient-to-r from-black to-gray-600 dark:from-white dark:to-gray-400"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Çolak
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer & Software Engineer crafting innovative digital solutions
              with modern technologies and creative problem-solving
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12"
            >
              <MagneticButton href="/projects">
                View My Work
              </MagneticButton>
              <MagneticButton href="/contact" variant="outline">
                Get In Touch
              </MagneticButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-center space-x-6 mt-12"
            >
              {[
                { href: "https://github.com/erenxcolakx", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/erenncolak", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:erenncolak@hotmail.com", icon: Mail, label: "Email" },
                { href: "/resume.pdf", icon: Download, label: "Download Resume", download: true }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? "_blank" : undefined}
                  rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  download={social.download}
                  className="p-4 border-2 border-black/20 dark:border-white/20 rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 group"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-black dark:border-white rounded-full flex justify-center cursor-pointer"
          onClick={() => window.location.href = '/projects'}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-black dark:bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

// Magnetic Button Component
interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline';
}

function MagneticButton({ href, children, variant = 'default' }: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLAnchorElement>(null)

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const deltaX = (e.clientX - centerX) * 0.3
    const deltaY = (e.clientY - centerY) * 0.3

    setPosition({ x: deltaX, y: deltaY })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        ref={buttonRef}
        className={`
          relative px-8 py-4 text-lg font-medium transition-all duration-300 group overflow-hidden inline-block
          ${variant === 'outline'
            ? 'border-2 border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black'
            : 'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200'
          }
        `}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <span className="relative z-10">{children}</span>
        {variant === 'outline' && (
          <motion.div
            className="absolute inset-0 bg-black dark:bg-white"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
            style={{ originX: 0 }}
          />
        )}
      </Link>
    </motion.div>
  )
}