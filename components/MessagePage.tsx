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
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-3xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12 animate-bloom">
          <p className="text-sm md:text-base uppercase tracking-[0.35em] text-rose-400 font-medium mb-3">
            From everyone who loves you
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Birthday Love
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <Heart className="w-5 h-5 text-rose-400 animate-heartbeat" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        {/* Messages */}
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div
              key={index}
              className="animate-bloom"
              style={{ animationDelay: `${msg.delay}ms` }}
            >
              <div className="relative bg-white/70 backdrop-blur rounded-3xl p-8 shadow-lg border border-rose-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <span className="absolute -top-3 left-8 flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-rose-400 to-amber-400 text-white shadow-md">
                  <Feather className="w-4 h-4" />
                </span>
                <p className="text-foreground/80 text-lg md:text-xl leading-relaxed mb-5 font-light italic">
                  {msg.message}
                </p>
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-rose-400 to-amber-400" />
                  <p className="text-foreground/60 font-medium text-sm tracking-wide">
                    {msg.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Element */}
        <div className="mt-14 text-center animate-bloom" style={{ animationDelay: '450ms' }}>
          <div className="space-y-5">
            <p className="text-2xl font-bold font-display text-foreground/80">
              Sending you endless love
            </p>
            <div className="flex justify-center items-center gap-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rotate-45 animate-heartbeat ${
                    i % 2 === 0 ? 'bg-rose-400' : 'bg-amber-400'
                  }`}
                  style={{ animationDelay: `${i * 180}ms` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Wish Card */}
        <div className="mt-10 bg-gradient-to-br from-white/90 to-rose-50/80 rounded-3xl p-9 shadow-xl border border-rose-100 text-center animate-bloom" style={{ animationDelay: '550ms' }}>
          <Heart className="w-6 h-6 text-rose-400 mx-auto mb-4 animate-heartbeat" />
          <p className="text-xl md:text-2xl font-display text-foreground leading-relaxed">
            May this year bring you as much happiness as you bring to everyone around you.
          </p>
        </div>
      </div>
    </div>
  )
}
