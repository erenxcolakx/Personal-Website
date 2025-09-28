import { About } from '../components/About'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About - Eren Çolak',
  description: 'Learn more about Eren Çolak, a passionate full-stack developer and software engineer from Istanbul, Turkey.',
  openGraph: {
    title: 'About - Eren Çolak',
    description: 'Learn more about Eren Çolak, a passionate full-stack developer and software engineer from Istanbul, Turkey.',
  },
}

export default function AboutPage() {
  return <About />
}