import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'

import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kavya-happy-birthday.vercel.app'),
  verification: {
    google: 'JyWDDITT_ITTTa9PcWR_W9ONteZXE15t3E5A5jEVyDw'
  },
  title: {
    default: 'Happy Birthday Kavya',
    template: '%s | Happy Birthday Kavya',
  },
  description:
    'Happy Birthday Kavya! A heartfelt birthday celebration website filled with special birthday wishes, memories, love and a personal message made just for Kavya. Wish Kavya a very happy birthday today.',
  keywords: [
    'happy birthday kavya',
    'kavya birthday',
    'birthday wishes for kavya',
    'happy birthday kavya wishes',
    'kavya birthday website',
    'happy birthday kavya quotes',
    'kavya birthday celebration',
    'wish kavya happy birthday',
  ],
  applicationName: 'Happy Birthday Kavya',
  authors: [{ name: 'Happy Birthday Kavya' }],
  generator: 'Next.js',
  creator: 'Happy Birthday Kavya',
  publisher: 'Happy Birthday Kavya',
  category: 'birthday',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://kavya-happy-birthday.vercel.app/',
    siteName: 'Happy Birthday Kavya',
    title: 'Happy Birthday Kavya',
    description:
      'A special celebration made just for you.',
    locale: 'en_US',
    images: [
      {
        url: '/sunflower.jpg',
        width: 1200,
        height: 727,
        alt: 'Happy Birthday Kavya - golden sunflowers birthday celebration',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Birthday Kavya | Special Birthday Wishes & Celebration',
    description:
      'A heartfelt Happy Birthday Kavya website filled with birthday wishes, memories and love.',
    images: ['/sunflower.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/placeholder-logo.png',
    shortcut: '/placeholder-logo.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: true,
  themeColor: '#fb7185',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
