"use client"

import { Calendar, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    title: 'IT Intern',
    company: 'Hepsiburada',
    logo: '/images/logos/hepsiburada.png',
    location: 'Istanbul, Turkey',
    period: '10.2025 - Present',
    type: 'Internship',
    description: "Started an internship at Hepsiburada.",
    achievements: [
      'Joined Hepsiburada as an intern and began contributing to projects'
    ],
    technologies: ['HTML','CSS','JavaScript']
  },
  {
    title: 'Full Stack Developer',
    company: 'DeepSport Athletic',
    logo: '/images/logos/deepsport.png',
    location: 'Istanbul, Turkey',
    period: '06.2025 - Present',
    type: 'Full-time',
    description: 'Redesigned and rebuilt DeepSport\'s landing page using Next.js and TailwindCSS. Developed HitnessLab — a SaaS platform where instructors can upload and share videos with students — using Spring Boot microservices and Next.js.',
    achievements: [
      'Redesigned and rebuilt DeepSport\'s landing page from scratch with a focus on SEO and performance',
      'Developed HitnessLab — a SaaS platform where instructors can upload and share videos with students',
      'Implemented Spring Boot microservices and Next.js frontend',
      'Designed and built innovative performance tracking dashboards for coaches and athletes'
    ],
    technologies: ['Next.js', 'Spring Boot', 'Tailwind CSS', 'PostgreSQL', 'Microservices', 'Java']
  },
  {
    title: 'Part-time Front-End Developer',
    company: 'DeepSport Athletic',
    logo: '/images/logos/deepsport.png',
    location: 'Istanbul, Turkey',
    period: '11.2024 - 01.2025',
    type: 'Part-time',
    description: 'Implemented SSR and SSG in Next.js to improve SEO scores and search engine visibility. Redesigned the site\'s responsive layout using TailwindCSS, ensuring seamless performance on tablets and mobile devices.',
    achievements: [
      'Implemented SSR and SSG in Next.js to improve SEO scores and search engine visibility',
      'Redesigned the site\'s responsive layout using TailwindCSS for seamless performance on tablets and mobile',
      'Led the migration to a new UI for DeepSport, actively contributing to both design and development stages',
      'Improved website performance and user experience significantly'
    ],
    technologies: ['Next.js', 'TailwindCSS', 'SSR', 'SSG', 'Responsive Design', 'SEO']
  },
  {
    title: 'IT Intern',
    company: 'BRF - Banvit',
    logo: '/images/logos/banvit.png',
    location: 'Istanbul, Turkey',
    period: '07.2024 - 08.2024',
    type: 'Internship',
    description: 'Worked on deploying applications in Docker and Kubernetes environments, including AWS deployment tasks. Created reports and data visualizations using Power BI. Contributed to daily system maintenance and user support tasks with the IT team.',
    achievements: [
      'Worked on deploying applications in Docker and Kubernetes environments, including AWS deployment tasks',
      'Created reports and data visualizations using Power BI',
      'Contributed to daily system maintenance and user support tasks with the IT team',
      'Gained hands-on experience with enterprise-level infrastructure and deployment processes'
    ],
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Power BI', 'Linux', 'System Administration']
  },
  {
    title: 'Social Media Coordinator',
    company: 'DeMarmara Experiential Education Center',
    logo: '/images/logos/dem.png',
    location: 'Istanbul, Turkey',
    period: 'October 2022 - June 2023',
    type: 'Volunteer',
    description: 'DeM is a student club that performs social responsibility and experiential learning activities. I contributed as a creator and coordinator of social media content.',
    achievements: [
      'Created and coordinated social media content for educational activities',
      'Contributed to social responsibility and experiential learning initiatives',
      'Managed digital content strategy for student engagement',
      'Collaborated with team members on various educational projects'
    ],
    technologies: ['Social Media Management', 'Content Creation', 'Digital Marketing', 'Team Coordination']
  }
]

const education = [
  {
    degree: 'Bachelor of Computer Science and Engineering',
    school: 'Marmara University',
    location: 'Istanbul, Turkey',
    period: 'Sep. 2021 - Present (4th Year)',
    description: 'Focused on software engineering, algorithms, data structures, and modern programming paradigms. Built strong foundation in computer science fundamentals with emphasis on practical application.',
    achievements: [
      'Currently in 4th year of Computer Science and Engineering program',
      'Strong foundation in algorithms, data structures, and software design',
      'Extensive coursework in web development, databases, and system design',
      'Active participation in software development projects and internships'
    ]
  }
]

export function Experience() {
  return (
    <section id="experience" className="w-full py-24 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      {/* subtle backdrop grid / radial */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent)] bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.10),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
            Experience & Education
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            A timeline of engineering impact, growth and learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-16">
          {/* Timeline */}
          <div className="lg:col-span-2 space-y-12">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-2xl font-semibold tracking-tight"
            >
              Professional Experience
            </motion.h3>

            <div className="relative pl-2">
              {/* vertical line */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-black/10 dark:via-white/15 to-transparent" />
              <div className="space-y-14">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.title + index}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    className="relative flex gap-6"
                  >
                    {/* node */}
                      <div className="mt-2">
                      {exp.logo ? (
                        <Image
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      ) : (
                        <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-500" />
                      )}
                    </div>
                    <div className="flex-1 p-6 rounded-2xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] transition duration-500">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold tracking-tight mb-1">{exp.title}</h4>
                          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-3">
                            <span className="sr-only">Company:</span>
                            <span>{exp.company}</span>
                          </p>
                        </div>
                        <div className="flex flex-col items-start sm:items-end text-xs md:text-sm gap-1 text-gray-500 dark:text-gray-400">
                          <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{exp.period}</span>
                          <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{exp.location}</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">{exp.description}</p>
                      <ul className="space-y-1.5 mb-5">
                        {exp.achievements.map((a, i) => (
                          <li key={i} className="flex gap-2 text-xs md:text-sm text-gray-600 dark:text-gray-300">
                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map(t => (
                          <span key={t} className="px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] md:text-xs tracking-wide text-gray-700 dark:text-gray-300 uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Education / Certifications */}
          <div className="space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold tracking-tight mb-6">Education</h3>
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree + i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, delay: i * 0.05 }}
                  className="mb-8 last:mb-0 rounded-2xl p-6 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] transition duration-500"
                >
                  <h4 className="text-lg font-semibold tracking-tight mb-1">{edu.degree}</h4>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">{edu.school}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs md:text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <span className="inline-flex items-center gap-1"><Calendar className="w-4 h-4" />{edu.period}</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="w-4 h-4" />{edu.location}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">{edu.description}</p>
                  <h5 className="text-xs font-semibold tracking-wide text-gray-700 dark:text-gray-200 mb-2 uppercase">Highlights</h5>
                  <ul className="space-y-1.5">
                    {edu.achievements.map((a, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-600 dark:text-gray-300">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold tracking-tight mb-6">Certifications</h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Docker & Kubernetes: The Practical Guide',
                    provider: 'Udemy',
                    date: 'Aug 2024',
                    credentialId: 'UC-760127d4-f382-4b52-b333-9c3d75c3611',
                    skills: ['Docker','Kubernetes','AWS'],
                    file: 'Docker&Kubernetes.pdf'
                  },
                  {
                    title: 'The Complete 2024 Web Development Bootcamp',
                    provider: 'Udemy',
                    date: 'Apr 2024',
                    credentialId: 'UC-3d29c5a9-913e-41b3-be69-92bbaba31285',
                    skills: ['HTML5','CSS','Bootstrap','JavaScript','jQuery','Node.js','Express.js','PostgreSQL','React.js'],
                    file: 'The Complete 2024 Web Development Bootcamp.pdf'
                  },
                  {
                    title: 'PostgreSQL Veritabanı Programlama',
                    provider: 'Udemy',
                    date: 'Mar 2024',
                    credentialId: 'UC-f12e27d7-8bab-463c-aacf-1a485fd86a2c',
                    skills: ['PostgreSQL','SQL'],
                    file: 'PostgreSQL.pdf'
                  },
                  {
                    title: 'Introduction to Machine Learning',
                    provider: 'Global AI Hub',
                    date: 'Oct 2023',
                    credentialId: 'eyJ1c2VyLWlkIjoxNDg2MDgsImNvdXJzZS1pZCI6MTE0NDY1LCJjZXJ0LWlkIjoiMTE0Njk3In0=',
                    skills: ['Machine Learning','Artificial Intelligence']
                  },
                  {
                    title: 'Bootstrap 5',
                    provider: 'BTK Akademi',
                    date: 'Sep 2023',
                    credentialId: '2Nwc0EqlMK',
                    skills: ['CSS','Bootstrap']
                  },
                  {
                    title: 'Staj Programı - Python',
                    provider: 'Patika.dev',
                    date: 'Dec 2022',
                    credentialId: '-',
                    skills: ['Git','Python']
                  },
                  {
                    title: 'Versiyon Kontrolleri: Git ve GitHub Katılım Sertifikası',
                    provider: 'BTK Akademi',
                    date: 'Sep 2022',
                    credentialId: 'eK1hyLpGW',
                    skills: ['Git']
                  }
                ].map((cert, i) => (
                  <motion.div
                    key={cert.title + i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className="rounded-xl p-5 bg-white/60 dark:bg-neutral-900/60 backdrop-blur border border-black/10 dark:border-white/10 text-sm flex flex-col gap-2 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div>
                        <h4 className="font-medium tracking-tight mb-0.5">{cert.title}</h4>
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">{cert.provider}</p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end text-[10px] md:text-xs text-gray-600 dark:text-gray-400 gap-0.5">
                        <span>{cert.date}</span>
                        {/* Credential ID removed per request */}
                      </div>
                    </div>
                    {cert.skills && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cert.skills.map(s => (
                          <span key={s} className="px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-[10px] md:text-[11px] text-gray-700 dark:text-gray-300">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                    {/* View Certificate link removed per request */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}