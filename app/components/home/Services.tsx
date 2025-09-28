'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import { Code, BarChart3, Brain, Boxes } from 'lucide-react'

interface ServiceItem {
  title: string
  icon: React.ElementType
  description: string
  stack: string[]
  gradient: string
  details: string
  bullets: string[]
}

const services: ServiceItem[] = [
  {
    title: 'Full Stack Web Apps',
    icon: Code,
    description: 'End-to-end scalable applications with clean architecture, type-safe data flows and performance focus.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Tailwind'],
    gradient: 'from-blue-600/20 to-purple-600/20',
    details: 'I design and build production-grade web applications with clearly defined domain boundaries, predictable data flow and strong performance budgets. From monoliths that can safely evolve to decomposed services when timing is right.',
    bullets: ['Type-safe API layers & validation', 'Edge & incremental rendering strategies', 'Performance profiling & Core Web Vitals', 'Authentication & RBAC patterns', 'Robust form / mutation UX']
  },
  {
    title: 'Data Dashboards',
    icon: BarChart3,
    description: 'Insightful, real-time dashboards turning raw metrics into actionable visual stories.',
    stack: ['React', 'Charting', 'API Design', 'Caching'],
    gradient: 'from-emerald-500/20 to-teal-500/20',
    details: 'Transform raw event streams or batch data into narrative visual layers that drive decisions. I focus on readable density, progressive loading and drill-down patterns.',
    bullets: ['Composable chart primitives', 'API shaping & aggregation layers', 'Caching & revalidation strategies', 'Skeletons & streaming UX', 'Drill-down & comparative views']
  },
  {
    title: 'AI Assisted Features',
    icon: Brain,
    description: 'Integrating LLM-driven automation, semantic search and intelligent content generation.',
    stack: ['OpenAI', 'RAG', 'Vector DB', 'Prompt Eng.'],
    gradient: 'from-pink-500/20 to-rose-500/20',
    details: 'I add pragmatic AI layers: retrieval augmented generation, semantic enrichment and user-in-the-loop tooling to enhance—not replace—core product workflows.',
    bullets: ['Prompt guardrails & eval loops', 'RAG pipelines & embeddings', 'Latency & cost optimization', 'Observability for model outputs', 'Fallback & safety strategies']
  },
  {
    title: 'Modular Architectures',
    icon: Boxes,
    description: 'Microservice & modular monolith patterns that evolve safely with product growth.',
    stack: ['Domain Design', 'Queues', 'CI/CD', 'Observability'],
    gradient: 'from-amber-500/20 to-orange-500/20',
    details: 'I help shape architectures that avoid both premature fragmentation and dangerous over-coupling—allowing teams to iterate fast while preserving clarity.',
    bullets: ['Domain boundary mapping', 'Event-driven & queue patterns', 'Progressive extraction paths', 'Resilience & backpressure tactics', 'Instrumentation & tracing']
  },
]

export function Services() {
  const [open, setOpen] = useState<ServiceItem | null>(null)

  const close = useCallback(() => setOpen(null), [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [close])

  // prevent body scroll when modal open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => { document.body.style.overflow = prev }
    }
  }, [open])

  return (
  <section className="w-full text-black dark:text-white pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What I Do</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">High-impact engineering across product layers with a focus on clarity, performance and maintainability.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-10">
          {services.map((s, i) => (
            <motion.button
              type="button"
              onClick={() => setOpen(s)}
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="text-left relative group p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            >
              <div className="h-full rounded-2xl bg-white dark:bg-neutral-950 p-8 flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.05)]">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6`}> 
                  <s.icon className="w-7 h-7 text-black dark:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 tracking-tight flex items-center gap-2">
                  {s.title}
                  <span className="text-[10px] font-medium tracking-wide px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 text-gray-600 dark:text-gray-300 group-hover:bg-black/10 dark:group-hover:bg-white/20 transition">Learn More</span>
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 flex-1">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.stack.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            aria-modal="true"
            role="dialog"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={close} />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.97 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-2xl rounded-3xl bg-white dark:bg-neutral-950 border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
              <button
                onClick={close}
                className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/20 transition"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-8 md:p-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${open.gradient} flex items-center justify-center`}> 
                    <open.icon className="w-8 h-8 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-1">{open.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">{open.details}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {open.bullets.map(b => (
                    <li key={b} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {open.stack.map(s => (
                    <span key={s} className="px-3 py-1 text-xs rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300">
                      {s}
                    </span>
                  ))}
                </div>
                <div className="pt-4 text-xs text-gray-500 dark:text-gray-500">Press Esc or click outside to close.</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
