import { Experience } from '../components/Experience'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience - Eren Çolak',
  description: 'Professional experience and career journey in software development, internships, and educational background.',
  openGraph: {
    title: 'Experience - Eren Çolak',
    description: 'Professional experience and career journey in software development, internships, and educational background.',
  },
}

export default function ExperiencePage() {
  return <Experience />
}