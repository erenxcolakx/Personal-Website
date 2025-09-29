import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  const base = 'https://erencolak.com'
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: []
    },
    sitemap: `${base}/sitemap.xml`,
    host: base,
  }
}