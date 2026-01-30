"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import projects from "../../projects/data/projects";

interface MiniProject {
  slug: string;
  title: string;
  image: string;
  category: string;
  year: string;
  gradient: string;
  href: string;
  summary: string;
  stack?: string[];
}

// Accent variants extracted for easier future theming
const accent = {
  orangePink: "from-orange-500/40 to-pink-600/40",
  bluePurple: "from-blue-600/40 to-purple-600/40",
  indigoBlue: "from-indigo-500/40 to-blue-600/40",
  violetPurple: "from-violet-500/40 to-purple-600/40",
};

// derive featured list from centralized projects data
const featured: MiniProject[] = projects
  .filter((p: any) => p.featured)
  .map((p: any) => ({
    slug: p.slug,
    title: p.title,
    image: p.image,
    category: "Featured",
    year: p.year,
    gradient: accent.bluePurple,
    href: p.liveUrl || "/projects",
    summary: p.description,
    stack: p.technologies,
  }));

export function FeaturedProjects() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="w-full text-white pt-16 md:pt-20 relative overflow-hidden">
      {/* decorative background elements */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.15]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.25),transparent_60%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:120px_120px] mix-blend-overlay" />
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
          <div className="space-y-3 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              A selection of builds emphasizing architectural clarity, performance and refined
              interaction design.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-block text-sm font-medium px-5 py-2 rounded-full bg-white text-black dark:bg-white dark:text-black hover:opacity-80 transition self-start md:self-end"
          >
            All Projects →
          </Link>
        </div>

        <div className="grid gap-10 md:gap-12 md:grid-cols-12 items-start">
          {featured.map((p, i) => {
            const spotlight = i === 0;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 60, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`${spotlight ? "md:col-span-6 md:row-span-2" : "md:col-span-3"} group relative`}
              >
                <Link
                  href={p.href}
                  aria-label={`View details about ${p.title}`}
                  className="block focus:outline-none"
                >
                  <div
                    className={`relative rounded-3xl p-[2px] bg-gradient-to-br ${p.gradient} overflow-hidden shadow-[0_8px_40px_-10px_rgba(0,0,0,0.6)] transition-all duration-700 group-hover:shadow-[0_12px_55px_-8px_rgba(0,0,0,0.65)]`}
                  >
                    {/* subtle animated sheen */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl overflow-hidden">
                      <span className="absolute -inset-[160%] bg-[conic-gradient(from_0deg,rgba(255,255,255,0)_0deg,rgba(255,255,255,0.28)_110deg,rgba(255,255,255,0)_180deg)] animate-spin-slower opacity-0 group-hover:opacity-40" />
                    </div>
                    <div
                      className={`relative rounded-[calc(1.5rem-2px)] overflow-hidden bg-neutral-900/95 backdrop-blur-xl ${spotlight ? "h-[540px]" : "h-[300px] md:h-[340px]"} flex flex-col`}
                    >
                      <div className="relative flex-1">
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          className={`object-cover transition-all duration-[1400ms] group-hover:scale-[1.12] group-hover:brightness-105`}
                          sizes={
                            spotlight
                              ? "(max-width:768px) 100vw, 720px"
                              : "(max-width:768px) 50vw, 320px"
                          }
                          priority={i < 2}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                          <span className="text-[10px] font-medium tracking-wide uppercase bg-white/10 backdrop-blur-md border border-white/15 text-white/85 px-2 py-1 rounded-full">
                            {p.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 z-10">
                          <span className="text-[10px] font-medium tracking-wide bg-black/40 backdrop-blur-md text-white/75 border border-white/15 px-2 py-1 rounded-md">
                            {p.year}
                          </span>
                        </div>
                        <div className="absolute bottom-5 left-5 right-5 z-10 space-y-4">
                          <div className="space-y-2">
                            <h3
                              className={`font-semibold leading-tight drop-shadow-sm text-white ${spotlight ? "text-[2.05rem] md:text-[2.35rem]" : "text-lg md:text-xl"}`}
                            >
                              {p.title}
                            </h3>
                            <p
                              className={`text-[11px] md:text-xs leading-relaxed text-white/60 ${spotlight ? "max-w-md" : "line-clamp-3 group-hover:line-clamp-none transition-[line-clamp] duration-300"}`}
                            >
                              {p.summary}
                            </p>
                          </div>
                          {spotlight && p.stack && (
                            <div className="hidden md:flex flex-wrap gap-2">
                              {p.stack.slice(0, 5).map((s) => (
                                <span
                                  key={s}
                                  className="text-[10px] font-medium bg-white/10 text-white/80 rounded-full px-2.5 py-1 border border-white/15 backdrop-blur-sm"
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      {p.stack && !spotlight && (
                        <div className="relative overflow-hidden">
                          <div className="h-px bg-white/10" />
                          <div className="flex flex-wrap gap-1.5 px-4 py-3 bg-black/55 backdrop-blur-sm translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                            {p.stack.map((s) => (
                              <span
                                key={s}
                                className="text-[10px] md:text-[11px] font-medium bg-white/85 dark:bg-white/10 text-black dark:text-white/75 rounded-full px-2.5 py-1 shadow-sm whitespace-nowrap border border-white/20"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
