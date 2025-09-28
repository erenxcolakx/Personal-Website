"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

interface MiniProject {
  slug: string
  title: string
  image: string
  category: string
  year: string
  gradient: string
  href: string
  stack?: string[]
}

const featured: MiniProject[] = [
  {
    slug: 'deepsport-landing',
    title: 'DeepSport Landing',
    image: '/images/projects/deepsportlp.png',
    category: 'Marketing',
    year: '2024',
    gradient: 'from-orange-500/40 to-pink-600/40',
    href: '/projects',
    stack: ['Next.js', 'Tailwind', 'Framer', 'SEO']
  },
  {
    slug: 'hiversion',
    title: 'Hiversion',
    image: '/images/projects/hiversion.png',
    category: 'SaaS Platform',
    year: '2024',
    gradient: 'from-blue-600/40 to-purple-600/40',
    href: '/projects',
    stack: ['Next.js', 'Spring', 'PostgreSQL']
  },
  {
    slug: 'deep-sport-dashboard',
    title: 'DeepSport Dashboard',
    image: '/images/projects/dsdashboard.png',
    category: 'Analytics',
    year: '2024',
    gradient: 'from-indigo-500/40 to-blue-600/40',
    href: '/projects',
    stack: ['Next.js', 'Charts', 'API']
  },
  {
    slug: 'smart-test-ai',
    title: 'Smart Test AI',
    image: '/images/projects/smarttestai.png',
    category: 'AI Tool',
    year: '2024',
    gradient: 'from-violet-500/40 to-purple-600/40',
    href: '/projects',
    stack: ['Next.js', 'AI', 'Uploads']
  },
]

export function FeaturedProjects() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [showHint, setShowHint] = useState(true)

  // Hide hint after interaction or delay
  useEffect(() => {
    const node = scrollerRef.current
    if (!node) return

    const handleScroll = () => {
      if (node.scrollLeft > 16) setShowHint(false)
    }
    node.addEventListener('scroll', handleScroll, { passive: true })
    const t = setTimeout(() => setShowHint(false), 6000)
    return () => {
      node.removeEventListener('scroll', handleScroll)
      clearTimeout(t)
    }
  }, [])

  return (
  <section className="w-full text-black dark:text-white pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl text-sm md:text-base">Selected recent work focused on performance, clean architecture and delightful user experience.</p>
          </div>
          <Link href="/projects" className="hidden md:inline-block text-sm font-medium px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black hover:opacity-80 transition">All Projects →</Link>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-thumb-black/20 dark:scrollbar-thumb-white/20"
          >
            {featured.map((p, i) => (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="min-w-[280px] md:min-w-[320px] snap-start"
              >
                <Link href={p.href} className="group block">
                  <div className={`relative rounded-2xl p-[1px] bg-gradient-to-br ${p.gradient} overflow-hidden`}> 
                    <div className="relative rounded-2xl overflow-hidden bg-neutral-900 h-52">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width:768px) 60vw, 320px"
                        priority={i < 2}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70 group-hover:opacity-60 transition" />
                      <div className="absolute bottom-3 left-4 right-4">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-medium tracking-wider text-white/70">{p.category}</span>
                          <span className="text-xs font-medium text-white/60">{p.year}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white leading-tight drop-shadow">{p.title}</h3>
                      </div>
                    </div>
                    {p.stack && (
                      <>
                        <div className="h-px bg-white/10 dark:bg-white/5" />
                        <div className="flex flex-wrap gap-1 px-3 py-3 bg-black/40 dark:bg-white/5 backdrop-blur-sm">
                          {p.stack.map(s => (
                            <span
                              key={s}
                              className="text-[10px] md:text-[11px] uppercase tracking-wide font-medium bg-white/85 dark:bg-white/10 text-black dark:text-white/70 rounded-full px-2 py-1 shadow-sm whitespace-nowrap"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          {showHint && (
            <div
              aria-hidden="true"
              className="hidden md:flex items-center gap-2 absolute top-1/2 -translate-y-1/2 right-0 pr-3 pl-6 h-24 bg-gradient-to-l from-white dark:from-black from-70% to-transparent pointer-events-none select-none"
            >
              <span className="text-xs font-medium text-gray-600 dark:text-gray-400 tracking-wide">Scroll</span>
              <svg
                className="w-5 h-5 text-gray-700 dark:text-gray-300 animate-pulse"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
