import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'
import { Navigation } from './components/Navigation'
import { ScrollProgress } from './components/ScrollProgress'
import { InteractiveGrid } from './components/HugeInspired/InteractiveGrid'

// Simple feature flag to disable the animated background grid globally without removing code
const ENABLE_INTERACTIVE_GRID = false

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata = {
  title: {
    default: 'Eren Çolak - Full Stack Developer',
    template: '%s | Eren Çolak'
  },
  description: 'Personal portfolio showcasing full-stack development, software engineering, and innovative projects.',
  keywords: 'developer, portfolio, react, nextjs, javascript, full-stack, eren colak, software engineer, web developer',
  authors: [{ name: 'Eren Çolak' }],
  creator: 'Eren Çolak',
  openGraph: {
    title: 'Eren Çolak - Full Stack Developer',
    description: 'Personal portfolio showcasing full-stack development, software engineering, and innovative projects.',
    type: 'website',
    locale: 'en_US',
    url: 'https://erencolak.com',
    siteName: 'Eren Çolak Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eren Çolak - Full Stack Developer',
    description: 'Personal portfolio showcasing full-stack development, software engineering, and innovative projects.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          {ENABLE_INTERACTIVE_GRID && <InteractiveGrid />}
          <ScrollProgress />
          <Navigation />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}