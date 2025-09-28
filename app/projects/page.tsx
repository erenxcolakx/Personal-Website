import { Projects } from '../components/Projects'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects - Eren Çolak',
  description: 'Discover featured projects including Hiversion, HitnessLab, DeepSport, and other innovative web applications.',
  openGraph: {
    title: 'Projects - Eren Çolak',
    description: 'Discover featured projects including Hiversion, HitnessLab, DeepSport, and other innovative web applications.',
  },
}

export default function ProjectsPage() {
  return <Projects />
}