'use client'

import { Heart, Feather } from 'lucide-react'

const messages = [
  {
    author: 'Your Friends & Family',
    message:
      'On your special day, we celebrate YOU — your incredible spirit, your infectious joy, and your unconditional love for those around you.',
    delay: 0,
  },
  {
    author: 'With All Our Hearts',
    message:
      'Thank you for being the amazing person you are. Every day with you is a gift wrapped in laughter and kindness.',
    delay: 150,
  },
  {
    author: 'Your Circle',
    message:
      'Here\u2019s to another year of adventures, puppy cuddles, sunflower fields, and unforgettable moments with you.',
    delay: 300,
  },
]

export default function MessagePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-4 pb-36 sm:pt-20 sm:pb-32">
      <div className="max-w-3xl mx-auto w-full">

        {/* Wish Card */}
        <div className="mt-10 bg-gradient-to-br from-white/90 to-rose-50/80 rounded-3xl p-6 sm:p-9 shadow-xl border border-rose-100 text-center animate-bloom" style={{ animationDelay: '550ms' }}>
          <Heart className="w-6 h-6 text-rose-400 mx-auto mb-4 animate-heartbeat" />
          <p className="text-lg sm:text-xl md:text-2xl font-display text-foreground leading-relaxed">
            May this year bring you as much happiness as you bring to everyone around you.
          </p>
        </div>
      </div>
    </div>
  )
}
