'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { SkillOrb } from './HugeInspired/SkillOrb'

const skills = [
  { name: 'Python', icon: '/images/python.png' },
  { name: 'NumPy', icon: '/images/numpy.png' },
  { name: 'Pandas', icon: '/images/pandas.png' },
  { name: 'Seaborn', icon: '/images/seaborn.png' },
  { name: 'Matplotlib', icon: '/images/matplot.png' },
  { name: 'C', icon: '/images/clang.png' },
  { name: 'Java', icon: '/images/java.png' },
  { name: 'JavaScript', icon: '/images/js.png' },
  { name: 'HTML5', icon: '/images/html.png' },
  { name: 'CSS3', icon: '/images/css.png' },
  { name: 'Tailwind', icon: '/images/tailwind.png' },
  { name: 'Bootstrap', icon: '/images/bootstrap.png' },
  { name: 'jQuery', icon: '/images/jquery.png' },
  { name: 'Node.js', icon: '/images/node.png' },
  { name: 'Express.js', icon: '/images/express.png' },
  { name: 'PostgreSQL', icon: '/images/postgresql.png' },
  { name: 'React.js', icon: '/images/react.webp' },
  { name: 'Next.js', icon: '/images/nextjs.png' },
  { name: 'Docker', icon: '/images/docker.webp' }
]

export function Skills() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  return (
    <section ref={containerRef} id="skills" className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-black dark:to-gray-800 text-black dark:text-white relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div 
              key={i} 
              className="border-r border-black/20 dark:border-white/20"
              animate={{ 
                opacity: [0.1, 0.3, 0.1],
                scaleY: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            className="text-[20vw] font-bold text-gray-900/5 dark:text-white/5 whitespace-nowrap"
            animate={{ x: [0, -100] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          >
            SKILLS • TECHNOLOGIES • 
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            SKILLS &
            <br />
            <span className="text-gray-500 dark:text-gray-400">TECHNOLOGIES</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit for building modern applications
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <SkillOrb key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>

        {/* Additional Skills Cloud */}
        <motion.div 
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ALSO EXPERIENCED WITH
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              'TypeScript', 'Spring Boot', 'SQL (Postgres)', 'Git', 'GitHub', 'Vercel', 
              'Power BI', 'AWS', 'Kubernetes', 'Postman', 'Figma', 'Plotly', 'Scikit-Learn'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-6 py-3 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:from-blue-500 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-300 cursor-default font-medium uppercase tracking-wider text-sm rounded-full shadow-md hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}