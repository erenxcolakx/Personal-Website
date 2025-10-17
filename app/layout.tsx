import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from './components/ThemeProvider'
import { Navigation } from './components/Navigation'
import { ScrollProgress } from './components/ScrollProgress'
import { InteractiveGrid } from './components/HugeInspired/InteractiveGrid'

// Simple feature flag to disable the animated background grid globally without removing code
const ENABLE_INTERACTIVE_GRID = false

// Limit Inter weights to only those actually used for headings/body to reduce font payload
const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  variable: '--font-inter',
  display: 'swap',
})

// Limit JetBrains Mono to a minimal set used in code snippets (if any appear later)
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400','500','700'],
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
  metadataBase: new URL('https://erencolak.com'),
  alternates: {
    canonical: 'https://erencolak.com'
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' }
    ],
    other: [
      { rel: 'manifest', url: '/site.webmanifest' }
    ]
  },
  openGraph: {
    title: 'Eren Çolak - Full Stack Developer',
    description: 'Personal portfolio showcasing full-stack development, software engineering, and innovative projects.',
    type: 'website',
    locale: 'en_US',
    url: 'https://erencolak.com',
    siteName: 'Eren Çolak Portfolio',
    images: [
      {
        url: '/og.svg',
        width: 1200,
        height: 630,
        alt: 'Eren Çolak Portfolio Cover'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eren Çolak - Full Stack Developer',
    description: 'Personal portfolio showcasing full-stack development, software engineering, and innovative projects.',
  images: ['/og.svg']
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
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
          {ENABLE_INTERACTIVE_GRID && <InteractiveGrid />}
          <ScrollProgress />
          <Navigation />
          {/* Structured Data JSON-LD */}
          <script
            type="application/ld+json"
            // Using dangerouslySetInnerHTML since Next metadata JSON-LD helper not used here yet
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                  {
                    '@type': 'Person',
                    '@id': 'https://erencolak.com/#person',
                    name: 'Eren Çolak',
                    url: 'https://erencolak.com',
                    image: 'https://erencolak.com/favicon.png',
                    jobTitle: 'Full Stack Developer',
                    sameAs: [
                      'https://github.com/erenxcolakx',
                      'https://www.linkedin.com/in/erenncolak'
                    ]
                  },
                  {
                    '@type': 'WebSite',
                    '@id': 'https://erencolak.com/#website',
                    url: 'https://erencolak.com',
                    name: 'Eren Çolak Portfolio',
                    publisher: { '@id': 'https://erencolak.com/#person' },
                    inLanguage: 'en'
                  }
                ]
              })
            }}
          />
          <main className="min-h-screen relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
}