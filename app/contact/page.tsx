import { Contact } from '../components/Contact'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - Eren Çolak',
  description: 'Get in touch with Eren Çolak for collaboration opportunities, project inquiries, or professional connections.',
  openGraph: {
    title: 'Contact - Eren Çolak',
    description: 'Get in touch with Eren Çolak for collaboration opportunities, project inquiries, or professional connections.',
  },
}

export default function ContactPage() {
  return <Contact />
}