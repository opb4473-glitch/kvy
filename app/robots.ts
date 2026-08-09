import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: 'https://kavya-happy-birthday.vercel.app/sitemap.xml',
    host: 'https://kavya-happy-birthday.vercel.app',
  }
}
