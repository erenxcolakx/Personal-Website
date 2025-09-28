'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ExternalLink, Maximize2, X, Play, Github } from 'lucide-react'
import { ParallaxBackground } from './ParallaxBackground'

// Map technology labels to existing public image assets (only those that exist)
const techIcons: Record<string, string> = {
  'Next.js': '/images/nextjs.png',
  'React': '/images/react.webp',
  'Tailwind CSS': '/images/tailwind.png',
  'PostgreSQL': '/images/postgresql.png',
  'Postgres (Supabase)': '/images/postgresql.png',
  'Supabase': '/images/postgresql.png',
  'Node.js': '/images/node.png',
  'Express.js': '/images/express.png',
  'Python': '/images/python.png',
  'Docker': '/images/docker.webp',
  'Pandas': '/images/pandas.png',
  'NumPy': '/images/numpy.png',
  'Seaborn': '/images/seaborn.png',
  'Matplotlib': '/images/matplot.png',
  'Java': '/images/java.png',
  'CSS': '/images/css.png',
  'HTML': '/images/html.png',
  'Bootstrap': '/images/bootstrap.png',
  'AI/ML': '/images/smarttestai.png',
}

interface Project {
  id: number
  title: string
  category: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  liveUrl: string
  githubUrl: string
  color: string
  year: string
  isInteractive: boolean
  iframeUrl?: string
  fallbackMessage?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "DeepSport",
    category: "Marketing Site",
    description: "High-conversion landing page for DeepSport platform",
    longDescription: "A performance-focused, responsive landing page highlighting DeepSport's analytics capabilities with localized Turkish content and fast-loading, SEO-friendly architecture.",
    image: "/images/projects/deepsportlp.png",
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'SEO', 'Postgres (Supabase)'],
    liveUrl: "https://deepsportapp.com/tr",
    githubUrl: "#",
    color: "from-orange-500 to-pink-600",
    year: "2024",
    isInteractive: false,
    fallbackMessage: "Marketing site optimized for direct visit; iframe disabled."
  },
  {
    id: 2,
    title: "HitnessLab",
    category: "Fitness Platform",
    description: "Enhanced fitness education and training platform",
    longDescription: "Advanced fitness platform with video courses, progress tracking, and personalized workout plans for fitness enthusiasts.",
    image: "/images/projects/hitnesslab.png",
    technologies: ['Next.js', 'Spring Boot', 'Postgres', 'Microservices', 'Video Streaming', 'Tailwind CSS'],
    liveUrl: "https://hitness-lab.vercel.app",
    githubUrl: "#",
    color: "from-green-600 to-teal-600",
    year: "2024",
  isInteractive: false,
  // iframeUrl removed because project disallows embedding
  fallbackMessage: "This fitness platform blocks iframe embedding."
  },
  {
  id: 3,
    title: "Hiversion",
    category: "SaaS Platform",
    description: "Microservices-based SaaS platform",
    longDescription: "Developing a SaaS platform that combines microservices with a modern frontend for scalable and modular software solutions. Spring Boot used for backend microservices; Next.js and Tailwind CSS for frontend interface.",
    image: "/images/projects/hiversion.png",
    technologies: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS', 'Microservices'],
    liveUrl: "https://hive-front-psi.vercel.app",
    githubUrl: "#",
    color: "from-blue-600 to-purple-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://hive-front-psi.vercel.app",
    fallbackMessage: "This project may not be available for preview due to security restrictions."
  },
  {
  id: 4,
    title: "DeepSport Dashboard",
    category: "Analytics Dashboard",
    description: "Performance tracking dashboard for sports analytics",
    longDescription: "Comprehensive dashboard for coaches and athletes featuring real-time performance metrics, data visualization, and analytics tools.",
    image: "/images/projects/dsdashboard.png",
    technologies: ['Next.js', 'React', 'Chart.js', 'Tailwind CSS', 'Analytics'],
    liveUrl: "https://deep-sport-dashboard.vercel.app",
    githubUrl: "#",
    color: "from-indigo-600 to-blue-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://deep-sport-dashboard.vercel.app",
    fallbackMessage: "Dashboard may require authentication for full access."
  },
  {
  id: 5,
    title: "Trakya Rezonans",
    category: "Healthcare Platform",
    description: "Medical imaging and healthcare services platform",
    longDescription: "Professional healthcare platform providing medical imaging services, appointment scheduling, and patient management systems.",
    image: "/images/projects/trakyarezonans.png",
    technologies: ['React', 'Next.js', 'Responsive Design'],
    liveUrl: "https://trakyarezonans.com",
    githubUrl: "#",
    color: "from-green-600 to-emerald-600",
    year: "2024",
  isInteractive: false,
  // iframeUrl removed because project disallows embedding / for consistency
  fallbackMessage: "Healthcare platform blocks iframe preview for privacy."
  },
  {
  id: 6,
    title: "Smart Test AI",
    category: "AI Education Tool",
    description: "AI-powered test generation from PDF documents",
    longDescription: "Intelligent application that automatically generates tests and quizzes from PDF documents using advanced AI processing.",
    image: "/images/projects/smarttestai.png",
    technologies: ['Next.js', 'Gemini API', 'PDF Processing', 'React'],
    liveUrl: "https://smart-test-ai.vercel.app",
    githubUrl: "#",
    color: "from-violet-600 to-purple-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://smart-test-ai.vercel.app",
    fallbackMessage: "AI test generator may require file uploads for demonstration."
  },
  {
  id: 7,
    title: "Dreamer",
    category: "Dream Journal",
    description: "Personal dream journaling application",
    longDescription: "A beautiful and intuitive dream journal application that helps users track, analyze, and understand their dreams with AI-powered insights.",
    image: "/images/projects/dreamer.png",
    technologies: ['React', 'Next.js', 'Supabase', 'Express.js'],
    liveUrl: "https://dreamerapp.vercel.app",
    githubUrl: "#",
    color: "from-indigo-600 to-purple-600",
    year: "2023",
    isInteractive: false,
    fallbackMessage: "Dream journal app is available as a PWA."
  },
  {
  id: 8,
    title: "Bweet",
    category: "Social Platform",
    description: "Book review social platform",
    longDescription: "Twitter-like social platform dedicated to book reviews, recommendations, and literary discussions among book enthusiasts.",
    image: "/images/projects/bweet.png",
    technologies: ['React', 'Supabase', 'Bootstrap', 'Express.js'],
    liveUrl: "https://bweet.vercel.app",
    githubUrl: "#",
    color: "from-rose-600 to-pink-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://bweet.vercel.app",
    fallbackMessage: "Social platform may require user registration for full experience."
  },
  {
  id: 9,
    title: "LiWeather",
    category: "Weather Application",
    description: "Real-time weather tracking application",
    longDescription: "Comprehensive weather application providing real-time weather data, forecasts, and interactive weather maps.",
    image: "/images/projects/liweather.png",
    technologies: ['React', 'Open-Meteo API'],
    liveUrl: "https://liweather.vercel.app",
    githubUrl: "#",
    color: "from-cyan-600 to-blue-600",
    year: "2024",
    isInteractive: true,
    iframeUrl: "https://liweather.vercel.app",
    fallbackMessage: "Weather app may require location permissions."
  }
]

export function ScrollJackingProjects() {
  const [currentProject, setCurrentProject] = useState(0)
  const [direction, setDirection] = useState(1)
  const [animating, setAnimating] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const deltaRef = useRef(0)
  const touchStartY = useRef<number | null>(null)

  const clampIndex = (i: number) => Math.max(0, Math.min(projects.length - 1, i))

  const goTo = useCallback((next: number, dir: number) => {
    setCurrentProject(prev => {
      const target = clampIndex(next)
      if (target === prev) return prev
      setDirection(dir)
      setAnimating(true)
      // unlock after animation ends
      setTimeout(() => setAnimating(false), 900)
      return target
    })
  }, [] )

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const wheelHandler = (e: WheelEvent) => {
      if (document.body.classList.contains('project-modal-open')) return
      const atFirst = currentProject === 0
      const atLast = currentProject === projects.length - 1
      const goingDown = e.deltaY > 0
      const goingUp = e.deltaY < 0

      // Allow normal page scroll if user tries to scroll beyond edges
      if ((atFirst && goingUp) || (atLast && goingDown)) {
        return // do not prevent default -> page can continue
      }

      // Inside slider range: intercept
      e.preventDefault()
      if (animating) return
      // Accumulate with damping to avoid micro-scroll triggering
      deltaRef.current += e.deltaY
      const threshold = 180 // higher threshold for deliberate intent
      if (deltaRef.current > threshold && goingDown) {
        deltaRef.current = 0
        goTo(currentProject + 1, 1)
      } else if (deltaRef.current < -threshold && goingUp) {
        deltaRef.current = 0
        goTo(currentProject - 1, -1)
      }
    }

    const touchStart = (e: TouchEvent) => {
      if (document.body.classList.contains('project-modal-open')) return
      touchStartY.current = e.touches[0].clientY
    }
    const touchMove = (e: TouchEvent) => {
      if (touchStartY.current == null || animating) return
      const diff = touchStartY.current - e.touches[0].clientY
      const atFirst = currentProject === 0
      const atLast = currentProject === projects.length - 1
      const threshold = 80

      if (diff > threshold) { // swipe up (go down)
        if (!atLast) {
          touchStartY.current = null
          goTo(currentProject + 1, 1)
        }
      } else if (diff < -threshold) { // swipe down (go up)
        if (!atFirst) {
          touchStartY.current = null
          goTo(currentProject - 1, -1)
        }
      }
    }
    const touchEnd = () => { touchStartY.current = null }

    el.addEventListener('wheel', wheelHandler, { passive: false })
    el.addEventListener('touchstart', touchStart, { passive: true })
    el.addEventListener('touchmove', touchMove, { passive: true })
    el.addEventListener('touchend', touchEnd)
    return () => {
      el.removeEventListener('wheel', wheelHandler)
      el.removeEventListener('touchstart', touchStart)
      el.removeEventListener('touchmove', touchMove)
      el.removeEventListener('touchend', touchEnd)
    }
  }, [currentProject, animating, goTo])

  // Keyboard navigation
  useEffect(() => {
    const keyHandler = (e: KeyboardEvent) => {
      if (document.body.classList.contains('project-modal-open')) return
      if (animating) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        goTo(currentProject + 1, 1)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        goTo(currentProject - 1, -1)
      }
    }
    window.addEventListener('keydown', keyHandler)
    return () => window.removeEventListener('keydown', keyHandler)
  }, [currentProject, animating, goTo])

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-black pointer-events-none">
        <ParallaxBackground
          currentIndex={currentProject}
          colors={projects.map(p => p.color)}
        />
      </div>

      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <ProjectSection
          key={projects[currentProject].id}
          project={projects[currentProject]}
          index={currentProject}
          isActive={true}
          direction={direction}
        />
      </AnimatePresence>

      {/* Progress Indicators */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-[60]">
        {projects.map((p, i) => (
          <button
            key={p.id}
            aria-label={`Go to ${p.title}`}
            onClick={() => !animating && goTo(i, i > currentProject ? 1 : -1)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentProject ? 'bg-white scale-125 shadow-[0_0_0_4px_rgba(255,255,255,0.2)]' : 'bg-white/30 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  )
}

interface ProjectSectionProps {
  project: Project
  index: number
  isActive: boolean
  direction: number
}

function ProjectSection({ project, index, direction }: ProjectSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [showIframe, setShowIframe] = useState(false)
  const [iframeLoading, setIframeLoading] = useState(false)
  const [iframeError, setIframeError] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)
  const [imgError, setImgError] = useState(false)

  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.92,
      filter: 'blur(6px)'
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 0.9, ease: 'easeOut' }
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.92,
      filter: 'blur(6px)',
      transition: { duration: 0.6, ease: 'easeIn' }
    })
  }

  const handleLoadIframe = () => {
    setShowIframe(true)
    setIframeLoading(true)
    setIframeError(false)
  }

  const handleIframeLoad = () => {
    setIframeLoading(false)
    setIframeError(false)
  }

  const handleIframeError = () => {
    setIframeLoading(false)
    setIframeError(true)
  }

  // Handle body scroll when expanded
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('project-modal-open')
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('projectModalChange', { detail: { open: true } }))
      }
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('project-modal-open')
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('projectModalChange', { detail: { open: false } }))
      }
    }

    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('project-modal-open')
    }
  }, [isExpanded])

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isExpanded) {
        setIsExpanded(false)
      }
    }

    if (isExpanded) {
      document.addEventListener('keydown', handleEscape)
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isExpanded])

  return (
    <>
      <motion.div
        ref={sectionRef}
        className="h-screen flex items-center justify-center relative px-2"
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
      >
        <motion.div
          className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center h-full"
        >
          {/* Project Content */}
          <motion.div
            className="text-white z-10"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: false }}
            >
              <span className="text-sm font-medium text-white/60 uppercase tracking-wider">
                {project.category}
              </span>
              <span className="text-sm font-medium text-white/60 uppercase tracking-wider ml-4">
                {project.year}
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-6 leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.15 } }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              className="text-xl text-white/80 mb-8 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.25 } }}
            >
              {project.longDescription}
            </motion.p>

            {/* Technologies */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.35 } }}
            >
              {project.technologies.map((tech, techIndex) => {
                const icon = techIcons[tech]
                return (
                  <motion.span
                    key={tech + techIndex}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium flex items-center gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + techIndex * 0.1 }}
                    viewport={{ once: false }}
                  >
                    {icon && (
                      <Image
                        src={icon}
                        alt={tech + ' logo'}
                        width={18}
                        height={18}
                        className="object-contain rounded-sm"
                        sizes="18px"
                      />
                    )}
                    <span>{tech}</span>
                  </motion.span>
                )
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.45 } }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 px-6 py-3 font-medium transition-all duration-300 group bg-white text-black hover:bg-white/90 rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink className="w-5 h-5" />
                <span>{project.isInteractive ? 'Open Project' : 'Visit Site'}</span>
              </motion.a>
              {project.githubUrl && project.githubUrl !== '#' && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 px-6 py-3 font-medium transition-all duration-300 group border border-white/30 text-white hover:bg-white/10 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="w-5 h-5" />
                  <span>Code</span>
                </motion.a>
              )}
              {!project.isInteractive && project.fallbackMessage && (
                <div className="text-sm text-white/60 max-w-xs leading-relaxed">
                  {project.fallbackMessage}
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Project Preview */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, scale: 0.85, rotateY: 35 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.9, ease: 'easeOut', delay: 0.25 } }}
          >
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl bg-neutral-900">
              {!showIframe ? (
                <div className="relative w-full h-full">
                  <div
                    className={`w-full h-full flex items-center justify-center relative cursor-pointer group ${imgLoaded ? 'bg-black' : `bg-gradient-to-br ${project.color}`}`}
                    onClick={project.isInteractive ? handleLoadIframe : undefined}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      onLoad={() => setImgLoaded(true)}
                      onError={() => setImgError(true)}
                      className={`object-cover transition-opacity duration-500 ${imgLoaded ? 'opacity-100' : 'opacity-0'} ${imgError ? 'opacity-0' : ''}`}
                      sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 600px"
                      priority={index < 2}
                    />
                    {!imgLoaded && !imgError && (
                      <span className="text-8xl font-bold text-white/20 group-hover:text-white/30 transition-colors duration-300">
                        {project.title.charAt(0)}
                      </span>
                    )}
                    {imgError && (
                      <span className="absolute bottom-2 left-2 text-xs bg-red-600 text-white px-2 py-1 rounded">image error</span>
                    )}
                    {project.isInteractive && (
                      <>
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          whileHover={{ scale: 1.05 }}
                        >
                          <motion.div
                            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Play className="w-8 h-8 text-white ml-1" />
                          </motion.div>
                        </motion.div>
                        <div className="absolute bottom-4 left-4 flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-2">
                          <Play className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-medium">Click to Load Demo</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <div className="absolute top-4 left-4 z-20">
                    <motion.button
                      onClick={() => setIsExpanded(true)}
                      className="p-2 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white rounded-lg transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      title="Expand to Full Screen"
                    >
                      <Maximize2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                  {iframeLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                      <div className="text-center">
                        <motion.div
                          className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <p className="text-gray-600 text-sm">Loading interactive demo...</p>
                      </div>
                    </div>
                  )}
                  {iframeError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <ExternalLink className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Preview Not Available</h3>
                        <p className="text-gray-600 text-sm mb-4">{project.fallbackMessage}</p>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors duration-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Visit Project</span>
                        </a>
                      </div>
                    </div>
                  )}
                  {project.isInteractive && project.iframeUrl && (
                    <iframe
                      key={`iframe-${project.id}`}
                      src={project.iframeUrl}
                      className={`w-full h-full border-0 ${iframeLoading || iframeError ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
                      onLoad={handleIframeLoad}
                      onError={handleIframeError}
                      title={`${project.title} - Live Preview`}
                      sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                      loading="lazy"
                    />
                  )}
                </div>
              )}
            </div>

            {/* Floating Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm"
              animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-white/5 rounded-full backdrop-blur-sm"
              animate={{ y: [0, 15, 0], rotate: [360, 180, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
              onClick={() => setIsExpanded(false)}
            />
            <motion.div
              className="relative w-full h-full max-w-7xl max-h-[95vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <div className="absolute top-4 right-4 z-20">
                <motion.button
                  onClick={() => setIsExpanded(false)}
                  className="p-3 bg-red-500/90 hover:bg-red-600/90 backdrop-blur-sm text-white rounded-lg transition-all duration-200 shadow-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title="Close Full Screen"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
              {project.isInteractive && project.iframeUrl ? (
                <iframe
                  key={`modal-iframe-${project.id}`}
                  src={project.iframeUrl}
                  className="w-full h-full border-0"
                  title={`${project.title} - Full Screen Preview`}
                  sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-8xl font-bold text-white/20">{project.title.charAt(0)}</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}