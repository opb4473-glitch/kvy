'use client'

import { useEffect, useMemo, useState } from 'react'
import { Flower2, Heart, PawPrint, Sparkles, PartyPopper } from 'lucide-react'

const CONFETTI_COLORS = [
  'bg-rose-400',
  'bg-amber-400',
  'bg-emerald-400',
  'bg-pink-400',
  'bg-violet-400',
]

export default function FinalePageComponent() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(true)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const confettiPieces = useMemo(
    () =>
      Array.from({ length: 60 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.8,
        duration: 3 + Math.random() * 2.5,
        color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
        shape: i % 3,
      })),
    []
  )

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-4 pb-36 sm:pt-20 sm:pb-32 relative overflow-hidden">
      {/* Animated Confetti */}
      {showConfetti &&
        confettiPieces.map((piece) => (
          <span
            key={piece.id}
            className={`absolute top-0 animate-confetti ${piece.color} ${piece.shape === 0
              ? 'w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full'
              : piece.shape === 1
                ? 'w-1.5 h-2.5 sm:w-2 sm:h-3.5 rounded-sm'
                : 'w-2 h-2 sm:w-3 sm:h-3 rotate-45'
              }`}
            style={{
              left: `${piece.left}%`,
              animationDelay: `${piece.delay}s`,
              animationDuration: `${piece.duration}s`,
            }}
          />
        ))}

      <div className="max-w-2xl mx-auto w-full text-center z-10 animate-bloom">
        {/* Main Message */}
        <div className="mb-12">
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.35em] text-rose-400 font-medium mb-3 animate-fade-up">
            For the very last thing
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <span className="bg-gradient-to-r from-rose-400 via-amber-400 to-emerald-400 text-shimmer animate-gradient-x">
              One More Thing
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
        </div>

        {/* Special Message Card */}
        <div className="bg-white/75 backdrop-blur rounded-3xl p-6 sm:p-9 md:p-11 shadow-xl border border-rose-100 mb-12 animate-bloom" style={{ animationDelay: '250ms' }}>
          <div className="space-y-6">
            <p className="text-2xl md:text-3xl font-bold font-display text-foreground">
              You are truly amazing
            </p>

            <div className="space-y-4 text-base sm:text-lg text-foreground/75 leading-relaxed font-light">
              <p>
                This day is a celebration of everything that makes you special. Your
                kindness, your laughter, your love for animals, and your appreciation for
                the beauty in life, like sunflowers.
              </p>
              <p>
                You have a gift of making everyone around you feel valued and loved.
                Keep being the wonderful human you are.
              </p>
              <p>
                Thank you for bringing joy, warmth, and unforgettable moments into our
                lives.
              </p>
            </div>
          </div>
        </div>

        {/* Final Wishes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: Flower2, text: 'Grow & Bloom', sub: 'like the sunflowers' },
            { icon: Heart, text: 'Love & Joy', sub: 'in every little moment' },
            { icon: PawPrint, text: 'Puppy Hugs', sub: 'from every good dog' },
          ].map((wish, i) => {
            const Icon = wish.icon
            return (
              <div
                key={i}
                className="group bg-white/70 backdrop-blur rounded-2xl p-7 border border-rose-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-bloom"
                style={{ animationDelay: `${300 + i * 120}ms` }}
              >
                <span className="flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-rose-400 to-amber-400 text-white shadow-md group-hover:scale-110 transition-transform duration-500">
                  <Icon className="w-6 h-6" />
                </span>
                <p className="text-xl font-bold font-display text-foreground mb-1">
                  {wish.text}
                </p>
                <p className="text-sm text-muted-foreground font-light">{wish.sub}</p>
              </div>
            )
          })}
        </div>

        {/* Final Footer */}
        <div className="text-center animate-bloom" style={{ animationDelay: '600ms' }}>
          <div className="mb-6">
            <div className="flex justify-center items-center gap-3 mb-3">
              <span className="w-2.5 h-2.5 rotate-45 bg-rose-400 animate-heartbeat" />
              <p className="text-xl sm:text-2xl md:text-3xl font-bold font-display text-foreground">
                Here&rsquo;s to you, Kavya
              </p>
              <span className="w-2.5 h-2.5 rotate-45 bg-amber-400 animate-heartbeat" style={{ animationDelay: '0.3s' }} />
            </div>
            <div className="flex justify-center items-center gap-3">
              <Flower2 className="w-6 h-6 text-rose-400 animate-float" />
              <Heart className="w-6 h-6 text-amber-400 animate-heartbeat" />
              <PawPrint className="w-6 h-6 text-emerald-400 animate-float" style={{ animationDelay: '0.5s' }} />
              <PartyPopper className="w-6 h-6 text-violet-400 animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          <p className="text-muted-foreground text-sm md:text-base font-light">
            Have the most incredible year filled with endless happiness,
            <br />
            amazing adventures, and all the dog cuddles you can handle.
          </p>

          <div className="mt-8 text-foreground/50 text-xs tracking-[0.3em] uppercase">
            Made for you by a friend
          </div>
        </div>
      </div>
    </div>
  )
}
