'use client'

import { useState } from 'react'
import { Cake, Sparkles, Heart } from 'lucide-react'

const SPRINKLE_GRADIENT =
  'radial-gradient(circle at 25% 35%, rgba(236,72,153,0.85) 0 2px, transparent 2.5px), radial-gradient(circle at 70% 60%, rgba(245,158,11,0.85) 0 2px, transparent 2.5px), radial-gradient(circle at 45% 80%, rgba(16,185,129,0.85) 0 2px, transparent 2.5px), radial-gradient(circle at 85% 20%, rgba(244,114,182,0.8) 0 2px, transparent 2.5px)'

const CANDLE_STRIPES = (from: string, to: string) =>
  `repeating-linear-gradient(180deg, ${from} 0 8px, ${to} 8px 16px)`

const CONFETTI = Array.from({ length: 42 }, (_, i) => ({
  id: i,
  left: (i * 7.3) % 100,
  delay: (i % 9) * 0.14,
  duration: 2.6 + ((i * 13) % 12) / 10,
  color: ['bg-rose-400', 'bg-amber-400', 'bg-emerald-400', 'bg-pink-400', 'bg-violet-400'][i % 5],
  shape: i % 3,
}))

function Frosting({ count = 5 }: { count?: number }) {
  return (
    <div className="absolute top-0 inset-x-0">
      <div className="h-6 bg-white/95 rounded-t-2xl" />
      <div className="flex justify-between px-3 -mt-1">
        {Array.from({ length: count }, (_, i) => (
          <span
            key={i}
            className="w-3 bg-white/95 rounded-b-full"
            style={{ height: 10 + (i % 3) * 7 }}
          />
        ))}
      </div>
    </div>
  )
}

export default function CakePage() {
  const [candlesBlow, setCandlesBlow] = useState(false)
  const [showMessage, setShowMessage] = useState(false)

  const handleMakewish = () => {
    setCandlesBlow(true)
    setTimeout(() => {
      setShowMessage(true)
    }, 1600)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl mx-auto w-full text-center">
        {/* Header */}
        <div className="mb-12 animate-bloom">
          <p className="text-sm md:text-base uppercase tracking-[0.35em] text-rose-400 font-medium mb-3">
            Close your eyes and think of something lovely
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Make a Wish
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            Tap the button and watch your candles light up the room
          </p>
        </div>

        {/* Hand-crafted CSS Cake */}
        <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80 animate-bloom" style={{ animationDelay: '150ms' }}>
          {/* Plate */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[16.5rem] h-5 rounded-full bg-gradient-to-b from-white to-rose-100 shadow-lg" />
          <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[15.5rem] h-2 rounded-full bg-rose-200/60 blur-sm" />

          {/* Tier 1 */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[18px] w-[13rem] h-[4.6rem] rounded-t-2xl bg-gradient-to-b from-rose-200 via-rose-300 to-rose-400 shadow-inner overflow-hidden">
            <div className="absolute inset-0 rounded-t-2xl opacity-70" style={{ backgroundImage: SPRINKLE_GRADIENT }} />
            <Frosting count={6} />
          </div>

          {/* Tier 2 */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[94px] w-[10.5rem] h-[3.9rem] rounded-t-2xl bg-gradient-to-b from-amber-200 via-amber-300 to-amber-400 shadow-inner overflow-hidden">
            <div className="absolute inset-0 rounded-t-2xl opacity-70" style={{ backgroundImage: SPRINKLE_GRADIENT }} />
            <Frosting count={5} />
          </div>

          {/* Tier 3 */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[158px] w-[7.8rem] h-[3.3rem] rounded-t-2xl bg-gradient-to-b from-white via-rose-50 to-rose-200 shadow-inner overflow-hidden">
            <div className="absolute inset-0 rounded-t-2xl opacity-60" style={{ backgroundImage: SPRINKLE_GRADIENT }} />
            <Frosting count={4} />
          </div>

          {/* Candles */}
          <div className="absolute bottom-[212px] left-1/2 -translate-x-1/2 flex items-end gap-4">
            {[0, 1, 2].map((i) => (
              <div key={i} className="relative">
                {/* Smoke after blow */}
                {candlesBlow && (
                  <>
                    <span className="absolute -top-6 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-foreground/25 blur-[2px] animate-smoke" />
                    <span className="absolute -top-8 left-1/3 w-1.5 h-1.5 rounded-full bg-foreground/20 blur-[2px] animate-smoke" style={{ animationDelay: '0.25s' }} />
                    <span className="absolute -top-10 left-2/3 w-2 h-2 rounded-full bg-foreground/20 blur-[2px] animate-smoke" style={{ animationDelay: '0.5s' }} />
                  </>
                )}

                {/* Candle body */}
                <div
                  className="w-2.5 h-12 rounded-md"
                  style={{
                    background: CANDLE_STRIPES(
                      i === 0 ? '#fb7185' : i === 1 ? '#fbbf24' : '#34d399',
                      i === 0 ? '#fda4af' : i === 1 ? '#fcd34d' : '#6ee7b7'
                    ),
                    boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
                  }}
                />

                {/* Wick */}
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-0.5 h-2 bg-foreground/60 rounded-full" />

                {/* Flame */}
                {!candlesBlow && (
                  <>
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-amber-300/50 blur-md animate-candle-glow" />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-3 h-4 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] bg-gradient-to-b from-amber-200 via-orange-400 to-orange-500 animate-flicker" />
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Confetti on Blow */}
          {candlesBlow && (
            <div className="absolute inset-0 pointer-events-none">
              {CONFETTI.map((piece) => (
                <span
                  key={piece.id}
                  className={`absolute top-0 animate-confetti ${piece.color} ${
                    piece.shape === 0
                      ? 'w-2 h-2 rounded-full'
                      : piece.shape === 1
                        ? 'w-1.5 h-3 rounded-sm'
                        : 'w-2.5 h-2.5 rotate-45'
                  }`}
                  style={{
                    left: `${piece.left}%`,
                    animationDelay: `${piece.delay}s`,
                    animationDuration: `${piece.duration}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Action */}
        <div className="mt-10">
          {!candlesBlow ? (
            <button
              onClick={handleMakewish}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400 animate-gradient-x text-white font-semibold py-4 px-9 rounded-full text-lg md:text-xl shadow-lg shadow-rose-200 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 border border-white/40"
            >
              <Cake className="w-6 h-6" />
              Make a Wish
            </button>
          ) : (
            <div className="flex items-center justify-center gap-3 text-2xl md:text-3xl font-bold font-display text-foreground animate-bloom">
              <Sparkles className="w-7 h-7 text-amber-400 animate-spin-slow" />
              Your wish is on its way
              <Sparkles className="w-7 h-7 text-amber-400 animate-spin-slow" />
            </div>
          )}
        </div>

        {/* Message after blowing candles */}
        {showMessage && (
          <div className="mt-10 animate-bloom space-y-6">
            <div className="bg-white/80 backdrop-blur rounded-3xl p-8 md:p-9 shadow-xl border border-rose-100">
              <Heart className="w-6 h-6 text-rose-400 mx-auto mb-4 animate-heartbeat" />
              <p className="text-2xl md:text-3xl font-bold font-display text-foreground mb-4">
                Happiest Birthday, Kavya
              </p>
              <p className="text-lg text-foreground/75 leading-relaxed font-light">
                As you blow out those candles, remember that you deserve every good thing
                coming your way. Your life is like a beautiful garden filled with loyal
                dogs and radiant sunflowers — full of love, warmth, and natural beauty.
              </p>
              <div className="flex justify-center items-center gap-3 mt-6">
                {[0, 1, 2, 3, 4].map((i) => (
                  <span
                    key={i}
                    className={`w-2.5 h-2.5 rotate-45 animate-heartbeat ${
                      i % 2 === 0 ? 'bg-rose-400' : 'bg-amber-400'
                    }`}
                    style={{ animationDelay: `${i * 180}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
