"use client";

import { AnimatePresence, motion } from "framer-motion";
import { BarChart3, Boxes, Brain, Code, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

interface ServiceItem {
  title: string;
  icon: React.ElementType;
  description: string;
  stack: string[];
  gradient: string;
  details: string;
  bullets: string[];
}

const services: ServiceItem[] = [
  {
    title: "Full Stack Web Apps",
    icon: Code,
    description:
      "Production-grade Next.js & Node.js applications: clear domain boundaries, end-to-end type safety and performance-focused delivery.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
    gradient: "from-blue-600/20 to-purple-600/20",
    details:
      "Goal: consolidate scattered micro side projects into a coherent core to increase iteration speed. In Hiversion and personal products I applied a scalable modular monolith (avoiding premature microservices), explicit domain model, layered caching and CI/CD for safe iteration. Coding style: deterministic, measurable, scalable.",
    bullets: [
      "Domain modeling & boundary mapping",
      "End-to-end type safety (TS + schema validation)",
      "Measurable performance budgets (CWV)",
      "Auth / RBAC & session strategies",
      "Fluid form & mutation UX",
    ],
  },
  {
    title: "Data Dashboards",
    icon: BarChart3,
    description: "Real-time / near real-time metrics distilled into readable visual narratives.",
    stack: ["React", "Charting", "API Design", "Caching"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    details:
      "Reduced decision fatigue for coaches & analysts by layering metrics into digestible tiers. In DeepSport Dashboard separated live sports measurements into meaningful layers with minimal latency; implemented progressive loading / skeleton strategies preserving readability and interaction under heavy usage.",
    bullets: [
      "Composable chart primitive architecture",
      "Aggregation & projection API layer",
      "Layered caching & revalidation",
      "Drill‑down & comparative views",
      "Skeleton + streaming loading UX",
    ],
  },
  {
    title: "AI Assisted Features",
    icon: Brain,
    description:
      "LLM-powered automation, semantic search and safe generative feature integrations.",
    stack: ["OpenAI", "Prompt Eng.", "Eval", "Cost Tracking"],
    gradient: "from-pink-500/20 to-rose-500/20",
    details:
      "Aim: shift attention from repetitive manual steps to higher-value review by generating reliable AI-assisted drafts. In Smart Test AI: structured prompt templates for test scenario generation, semantic grouping (direct guided prompt + content summarization instead of full RAG), embedding cost/latency balancing, prompt guardrails, measurable quality & cost metrics. Also built 8 intensive OpenAI course projects (intelligent completion, streaming responses, PDF summarization & chat, text similarity, personalized book recommendations, real-time weather querying, persona conversations).",
    bullets: [
      "Prompt templating & semantic grouping",
      "Prompt guardrails + evaluation loops",
      "Cost & latency optimization",
      "Output observability (logging & trace)",
      "Safe fallback / fault tolerance",
      "8 generative AI / NLP micro‑project experience",
    ],
  },
  {
    title: "Modular Architectures",
    icon: Boxes,
    description:
      "Safe evolution aligned with product growth: modular monolith → targeted service extraction.",
    stack: ["Domain Design", "Queues", "CI/CD", "Observability"],
    gradient: "from-amber-500/20 to-orange-500/20",
    details:
      "Motivation: avoid premature microservice complexity; keep growth controlled, observable, flexible. Start with clear domain boundaries in a single codebase, then isolate data & transfer hot paths for phased extraction. Emphasis on observability, resilience and maintainability over accidental complexity.",
    bullets: [
      "Boundary & capability mapping",
      "Event / queue driven decomposition",
      "Progressive extraction paths",
      "Resilience & backpressure tactics",
      "Tracing & metric observability",
    ],
  },
];

export function Services() {
  const [open, setOpen] = useState<ServiceItem | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [close]);

  // prevent body scroll when modal open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <section className="w-full text-white pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">What I Do</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            High-impact engineering across product layers with a focus on clarity, performance and
            maintainability.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 xl:gap-10">
          {services.map((s, i) => (
            <motion.button
              type="button"
              aria-label={`Open details about ${s.title}`}
              onClick={() => setOpen(s)}
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="text-left relative group p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 dark:from-white/10 dark:to-white/5 focus:outline-none focus:ring-2 focus:ring-blue-500/40 overflow-hidden"
            >
              <div className="relative h-full rounded-2xl bg-white dark:bg-neutral-950 p-6 md:p-8 flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.05)] min-h-[420px]">
                {/* subtle top ambient gradient */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.10),transparent_60%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.05),transparent_60%)]" />
                {/* learn more pill top-right */}
                <div className="absolute top-4 right-4 z-10">
                  <div className="text-[10px] font-medium tracking-wide px-3 py-1.5 rounded-full bg-neutral-900/70 dark:bg-white/10 text-white/90 dark:text-white backdrop-blur-md shadow-lg border border-white/10 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition duration-300">
                    <span>Learn</span>
                    <span className="text-white/60">More</span>
                  </div>
                </div>
                <div
                  className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-[1.5deg]`}
                >
                  <s.icon className="w-7 h-7 text-black dark:text-white" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-60 mix-blend-overlay transition" />
                </div>
                <h3
                  className="relative text-xl font-semibold mb-4 tracking-tight flex items-center gap-2"
                  role="heading"
                  aria-level={3}
                >
                  {s.title}
                </h3>
                <p className="relative text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-1 max-w-[260px]">
                  {s.description}
                </p>
                <div className="relative flex flex-wrap gap-2 mt-auto">
                  {s.stack.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs rounded-full bg-black/2 dark:bg-white/5 border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-300 backdrop-blur-[2px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* focus ring helper overlay */}
                <span className="pointer-events-none absolute inset-0 rounded-2xl ring-0 group-focus-visible:ring-2 ring-blue-500/50 transition" />
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
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${open.gradient} flex items-center justify-center`}
                  >
                    <open.icon className="w-8 h-8 text-black dark:text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight mb-1">{open.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md leading-relaxed">
                      {open.details}
                    </p>
                  </div>
                </div>
                {/* Bullet list removed per request – concise description paragraph is sufficient */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {open.stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 text-xs rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="pt-4 text-xs text-gray-500 dark:text-gray-500">
                  Press Esc or click outside to close.
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
