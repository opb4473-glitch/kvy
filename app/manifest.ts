import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Happy Birthday Kavya',
    short_name: 'Happy Birthday Kavya',
    description:
      'A heartfelt Happy Birthday Kavya website filled with special birthday wishes, memories and love.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff7ed',
    theme_color: '#fb7185',
    icons: [
      {
        src: '/placeholder-logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
