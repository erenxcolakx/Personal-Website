"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface StatItem {
  key: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  priority?: number; // used for ordering
}

const fallbackStats: StatItem[] = [
  { key: "projects", label: "Projects", value: 12, suffix: "+" },
  { key: "experience", label: "Years Experience", value: 1, suffix: "y" },
  { key: "repos", label: "Open Source Repos", value: 18, suffix: "+" },
  { key: "builds", label: "Active Builds", value: 4 },
];

export function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<StatItem[]>(fallbackStats);
  const [error, setError] = useState<string | null>(null);

  // Static export mode: remove runtime API call (no /api route available in out/)
  useEffect(() => {
    // Provide immediate static data (simulate loaded state)
    setStats(fallbackStats);
    setLoading(false);
  }, []);

  return (
    <section className="w-full text-white pt-16 md:pt-20">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s, i) => (
            <Stat key={s.key} item={s} index={i} inView={inView} loading={loading} />
          ))}
        </div>
        {error && (
          <div className="mt-6 text-center text-xs text-red-500/70">
            GitHub stats could not load (rate limit or network). Showing fallback.
          </div>
        )}
      </div>
    </section>
  );
}

function Stat({
  item,
  index,
  inView,
  loading,
}: {
  item: StatItem;
  index: number;
  inView: boolean;
  loading?: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || loading) return;
    const start = 0;
    const end = item.value;
    const duration = (item.duration ?? 1.4) * 1000;
    const startTime = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setDisplay(Math.round(start + (end - start) * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, item.value, item.duration, loading]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="h-20 flex items-center justify-center">
        {loading ? (
          <div className="w-16 h-10 rounded-md bg-black/5 dark:bg-white/10 animate-pulse" />
        ) : (
          <div className="text-5xl font-bold tracking-tight bg-gradient-to-b from-black to-gray-700 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            {item.prefix}
            {display}
            {item.suffix}
          </div>
        )}
      </div>
      <div className="mt-2 text-[10px] md:text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 font-medium">
        {item.label}
      </div>
    </motion.div>
  );
}
