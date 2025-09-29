'use client'

import { GraduationCap, Code, Heart, Target, MapPin, Calendar, Award, Briefcase, Lightbulb, Users, Rocket } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { TextReveal } from './HugeInspired/TextReveal'
import { MarqueeText } from './HugeInspired/MarqueeText'
import { DualMarquee } from './HugeInspired/DualMarquee'
import { StickySection, ParallaxSection } from './HugeInspired/StickySection'
// Removed profile image usage so next/image import is no longer needed

export function About() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <>
      {/* Marquee Background */}
      <div className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 overflow-hidden relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-black/20 dark:border-white/20"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scaleY: [1, 1.01, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-30, -150],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeOut"
              }}
            />
          ))}
        </div>

        {/* Dual Marquee Refactor (stacked lines - no overlap) */}
        <div className="relative py-10">
          {/* Glow backdrop */}
          <div className="absolute inset-0 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
            <div className="absolute inset-0 blur-2xl opacity-35 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
          </div>
          <DualMarquee
            primaryText="ABOUT • STORY • JOURNEY • PASSION • INNOVATION • CREATIVITY"
            secondaryText="DEVELOPER • CREATOR • INNOVATOR • PROBLEM SOLVER"
            primaryDuration={32}
            secondaryDuration={40}
            className="space-y-6"
            primaryClassName="text-[9vw] md:text-[7rem] bg-gradient-to-r from-black/60 via-black/40 to-black/60 dark:from-white/70 dark:via-white/50 dark:to-white/70 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
            secondaryClassName="text-[6.2vw] md:text-[4.2rem] text-blue-600/25 dark:text-blue-300/25 blur-[0.5px]"
            stroke
          />
        </div>
      </div>

      {/* Hero Introduction (Redesigned Facts Panel) */}
      <section className="py-32 bg-gradient-to-br from-white via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden">
        {/* Subtle radial backdrop */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/5 via-purple-500/5 to-pink-500/5 blur-3xl rounded-full" />
        </div>
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">
            {/* Quick Facts Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative lg:col-span-5 space-y-8"
            >
              {/* Decorative vertical line */}
              <div className="absolute left-3 top-0 bottom-0 hidden lg:block">
                <div className="w-px h-full bg-gradient-to-b from-blue-500/0 via-blue-500/40 to-purple-500/0" />
              </div>
              <div className="pl-6">
                <h4 className="text-sm font-semibold tracking-wider text-blue-600 dark:text-blue-400 mb-2">QUICK FACTS</h4>
                <div className="flex flex-col gap-5">
                  <FactCard icon={<MapPin size={22} />} label="Location" value="Istanbul, TR" accent="from-blue-500 to-cyan-400" />
                  <FactCard icon={<GraduationCap size={22} />} label="Education" value="Marmara Uni." accent="from-purple-500 to-pink-400" />
                  <FactCard icon={<Briefcase size={22} />} label="Experience" value="1 Year" accent="from-emerald-500 to-green-400" />
                </div>
              </div>
            </motion.div>

            {/* About Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 lg:col-span-7"
            >
              <div>
                <motion.h2
                  className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{ backgroundSize: "200% 200%" }}
                >
                  ABOUT ME
                </motion.h2>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8"
                />
              </div>

              <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  I’m a <span className="font-semibold text-blue-600 dark:text-blue-400">Full‑Stack Developer</span> and data‑focused engineer studying Computer Engineering at <span className="font-semibold text-gray-900 dark:text-white">Marmara University</span>. I combine product thinking with disciplined engineering: clear domain boundaries, type‑safe flows and measurable performance budgets over trend‑driven complexity.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Projects like <span className="font-semibold text-purple-600 dark:text-purple-400">DeepSport</span> (real‑time sports analytics), <span className="font-semibold text-emerald-600 dark:text-emerald-400">Hiversion</span> (modular SaaS) and <span className="font-semibold text-pink-600 dark:text-pink-400">Smart Test AI</span> (LLM‑assisted test generation) allowed me to design aggregation & caching layers, build evaluation & prompt refinement loops, and ship resilient UI + API integrations with Next.js, Node.js, PostgreSQL and modern frontend tooling. <span className="block mt-4 text-base text-gray-600 dark:text-gray-400">I also completed an intensive OpenAI-focused course building 8 projects: intelligent completion, streaming responses, PDF summarization & chat, text similarity, personalized book recommendations (embeddings & 2D maps), real-time weather querying and conversational persona experiences.</span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  I focus on clarity, observability and sustainable scaling: progressive extraction over premature microservices, guarded AI pipelines, Core Web Vitals discipline and reviewable, type‑safe collaboration. I keep learning, documenting decisions and contributing back when meaningful.
                </motion.p>
              </div>

              {/* Skills Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-3 pt-6"
              >
                {['Domain Driven', 'Performance Minded', 'Type Safe', 'Observability Focused'].map((trait, index) => (
                  <motion.span
                    key={trait}
                    className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-700"
                    whileHover={{ scale: 1.05, y: -2 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {trait}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-32 bg-gradient-to-br from-gray-100 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              MY <span className="text-blue-600 dark:text-blue-400">JOURNEY</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From curious beginner to passionate developer - here&apos;s how my story unfolded
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <JourneyCard
              year="2021"
              title="The Beginning"
              description="Started my programming journey with Python, diving into data analysis and visualization. Built my first projects using Pandas, NumPy, and Matplotlib."
              icon={<Lightbulb size={24} />}
              color="from-yellow-400 to-orange-500"
              delay={0.2}
            />
            <JourneyCard
              year="2022"
              title="Web Development Discovery"
              description="Transitioned to web development, learning HTML, CSS, JavaScript, and React. Created my first interactive web applications and fell in love with frontend development."
              icon={<Code size={24} />}
              color="from-blue-400 to-cyan-500"
              delay={0.4}
            />
            <JourneyCard
              year="2023"
              title="Full-Stack Evolution"
              description="Expanded to backend development with Node.js and Express. Learned database management with PostgreSQL and started building complete web applications."
              icon={<Rocket size={24} />}
              color="from-purple-400 to-pink-500"
              delay={0.6}
            />
            <JourneyCard
              year="2024"
              title="Professional Growth"
              description="Gained industry experience through internship at Banvit, working with Docker, Kubernetes, and Power BI. Contributed to real-world projects and enhanced my skills."
              icon={<Award size={24} />}
              color="from-green-400 to-emerald-500"
              delay={0.8}
            />
            <JourneyCard
              year="2025"
              title="DeepSport Experience"
              description="Contributing to DeepSport's sports analytics platform: implementing full‑stack features, optimizing performance, and collaborating on AI-driven data visualizations and real-time dashboards."
              icon={<Briefcase size={24} />}
              color="from-indigo-400 to-blue-600"
              delay={1.0}
            />
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="py-32 bg-white dark:bg-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h3 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              WHAT DRIVES <span className="text-purple-600 dark:text-purple-400">ME</span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              The principles and values that guide my work and personal growth
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ValueCard
              icon={<Target size={32} />}
              title="Quality First"
              description="I believe in writing clean, maintainable code and creating user experiences that truly matter."
              delay={0.2}
            />
            <ValueCard
              icon={<Users size={32} />}
              title="Collaboration"
              description="Great things happen when talented people work together. I thrive in team environments."
              delay={0.4}
            />
            <ValueCard
              icon={<Lightbulb size={32} />}
              title="Innovation"
              description="Always looking for creative solutions and new ways to solve complex problems."
              delay={0.6}
            />
            <ValueCard
              icon={<Heart size={32} />}
              title="Passion"
              description="Genuine love for technology and continuous learning drives everything I do."
              delay={0.8}
            />
            <ValueCard
              icon={<Rocket size={32} />}
              title="Growth Mindset"
              description="Embracing challenges as opportunities to learn and improve constantly."
              delay={1.0}
            />
            <ValueCard
              icon={<Award size={32} />}
              title="Excellence"
              description="Striving for excellence in every project, no matter how big or small."
              delay={1.2}
            />
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <ParallaxSection speed={-0.5} className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-6 h-full">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="border-r border-white/20"
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scaleY: [1, 1.02, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl md:text-6xl font-bold mb-6">
              BY THE <span className="text-blue-400">NUMBERS</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Some metrics that showcase my journey and dedication
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <EnhancedStatCard number="3+" label="YEAR OF CODING" icon={<Calendar size={32} />} />
            <EnhancedStatCard number="15+" label="PROJECTS COMPLETED" icon={<Briefcase size={32} />} />
            <EnhancedStatCard number="8+" label="TECHNOLOGIES MASTERED" icon={<Code size={32} />} />
          </div>
        </div>
      </ParallaxSection>
    </>
  )
}

// Info Card Component
interface InfoCardProps {
  icon: React.ReactNode
  title: string
  value: string
}

function InfoCard({ icon, title, value }: InfoCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow border border-gray-200 dark:border-gray-700 flex items-center space-x-3">
      <div className="text-blue-600 dark:text-blue-400">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-500 dark:text-gray-400">{title}</p>
        <p className="font-medium text-gray-900 dark:text-white">{value}</p>
      </div>
    </div>
  )
}

// New FactCard (hero facts redesign)
interface FactCardProps {
  icon: React.ReactNode
  label: string
  value: string
  accent?: string // gradient tailwind classes after from-
}

function FactCard({ icon, label, value, accent = 'from-blue-500 to-purple-500' }: FactCardProps) {
  return (
    <motion.div
      className="relative group pl-5"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Left Accent Bar */}
      <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 rounded-full bg-gradient-to-b ${accent} opacity-70 group-hover:opacity-100 transition-opacity`} />
      <div className="flex items-center gap-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm px-5 py-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm group-hover:shadow-md transition-all">
        <div className={`w-11 h-11 rounded-lg bg-gradient-to-br ${accent} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-semibold tracking-wide text-gray-500 dark:text-gray-400">{label.toUpperCase()}</span>
          <span className="text-lg font-semibold text-gray-900 dark:text-white">{value}</span>
        </div>
      </div>
    </motion.div>
  )
}

// Journey Card Component
interface JourneyCardProps {
  year: string
  title: string
  description: string
  icon: React.ReactNode
  color: string
  delay?: number
}

function JourneyCard({ year, title, description, icon, color, delay = 0 }: JourneyCardProps) {
  return (
    <motion.div
      className="relative flex items-start space-x-6 mb-12 group"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {/* Timeline Line */}
      <div className="absolute left-8 top-16 w-px h-full bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600"></div>
      
      {/* Icon */}
      <motion.div
        className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-r ${color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>

      {/* Content */}
      <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 group-hover:shadow-xl transition-all duration-300">
        <div className="flex items-center space-x-4 mb-3">
          <span className={`px-3 py-1 text-sm font-bold text-white rounded-full bg-gradient-to-r ${color}`}>
            {year}
          </span>
          <h4 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h4>
        </div>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

// Value Card Component
interface ValueCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

function ValueCard({ icon, title, description, delay = 0 }: ValueCardProps) {
  return (
    <motion.div
      className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 group hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      {/* Background Gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={false}
      />
      
      <div className="relative z-10">
        <motion.div
          className="text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          {icon}
        </motion.div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Hover Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
    </motion.div>
  )
}

// Enhanced Stat Card Component
interface EnhancedStatCardProps {
  number: string
  label: string
  icon: React.ReactNode
}

function EnhancedStatCard({ number, label, icon }: EnhancedStatCardProps) {
  return (
    <motion.div
      className="text-center group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="text-blue-400 mb-4 mx-auto group-hover:text-white transition-colors duration-300"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        {icon}
      </motion.div>
      <motion.h3
        className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
      >
        {number}
      </motion.h3>
      <p className="text-gray-400 font-medium tracking-wider group-hover:text-gray-300 transition-colors duration-300">
        {label}
      </p>
    </motion.div>
  )
}