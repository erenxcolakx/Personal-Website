"use client"

import { useState } from 'react'
import { Mail, MapPin, Send, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="w-full py-24 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden">
      {/* subtle radial accent */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(circle_at_center,black,transparent)] bg-[radial-gradient(circle_at_70%_40%,rgba(59,130,246,0.10),transparent_65%)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5 bg-gradient-to-b from-black to-neutral-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm md:text-base">Have a product idea, collaboration or technical challenge? Let’s build something meaningful.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-14">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold tracking-tight mb-6">Let&apos;s Connect</h3>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg">Open to freelance work, early-stage product shaping, performance refactors and AI-assisted feature development. Reach out through any channel below.</p>
            </motion.div>

            <div className="space-y-8">
              {[{icon:Mail,label:'Email',value:'erenncolak@hotmail.com',href:'mailto:erenncolak@hotmail.com'},{icon:MapPin,label:'Location',value:'Istanbul, Turkey'}].map((item,i)=>{
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.55, delay: i * 0.05 }}
                    className="flex gap-5"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/25 to-purple-500/25 border border-white/20 dark:border-white/10 backdrop-blur flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-sm md:text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{item.value}</a>
                      ) : (
                        <span className="text-sm md:text-base text-gray-600 dark:text-gray-400">{item.value}</span>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-sm font-semibold tracking-wider text-gray-700 dark:text-gray-300 uppercase mb-4">Social</h4>
              <div className="flex gap-4">
                <a href="https://github.com/erenxcolakx" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group relative w-12 h-12 rounded-xl bg-white/60 dark:bg-neutral-900/60 backdrop-blur flex items-center justify-center border border-black/10 dark:border-white/10 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.25)] transition">
                  <Github className="w-6 h-6 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition" />
                </a>
                <a href="https://www.linkedin.com/in/erenncolak" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 text-white flex items-center justify-center shadow hover:shadow-lg transition">
                  <Linkedin className="w-6 h-6 group-hover:scale-110 transition" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl p-8 md:p-10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md border border-black/10 dark:border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            <h3 className="text-2xl font-semibold tracking-tight mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name" required>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={inputClass} />
                </Field>
                <Field label="Email" required>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className={inputClass} />
                </Field>
              </div>
              <Field label="Subject" required>
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} required placeholder="What is this about?" className={inputClass} />
              </Field>
              <Field label="Message" required>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Tell me about the idea or problem..." className={inputClass + ' resize-none'} />
              </Field>
              <motion.button
                whileTap={{ scale: 0.96 }}
                whileHover={{ y: -2 }}
                type="submit"
                className="w-full flex items-center justify-center gap-2 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 text-white font-medium text-sm tracking-wide shadow hover:shadow-xl transition relative overflow-hidden group"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.3),transparent_60%)]" />
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
        <div className="mt-24 text-center text-xs md:text-sm text-gray-500 dark:text-gray-500">
          © {new Date().getFullYear()} Eren Çolak. Built with Next.js & Tailwind.
        </div>
      </div>
    </section>
  )
}

// Small sub components & shared classes
const inputClass = "w-full px-4 py-3 rounded-xl bg-white/70 dark:bg-neutral-950/60 border border-black/10 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 transition"

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block text-xs uppercase tracking-wider font-medium text-gray-600 dark:text-gray-400 space-y-2">
      <span>{label}{required && ' *'}</span>
      {children}
    </label>
  )
}