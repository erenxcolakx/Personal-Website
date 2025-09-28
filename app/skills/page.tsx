import { Skills } from '../components/Skills'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills - Eren Çolak',
  description: 'Explore the comprehensive toolkit of technologies and skills including React, Next.js, Python, Java, Docker, and more.',
  openGraph: {
    title: 'Skills - Eren Çolak',
    description: 'Explore the comprehensive toolkit of technologies and skills including React, Next.js, Python, Java, Docker, and more.',
  },
}

export default function SkillsPage() {
  return <Skills />
}