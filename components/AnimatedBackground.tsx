'use client'

import { useMemo } from 'react'

const PETAL_COLORS = [
  'bg-rose-300',
  'bg-rose-400',
  'bg-amber-300',
  'bg-pink-300',
]

export default function AnimatedBackground() {
  const petals = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 10,
        delay: Math.random() * 14,
        duration: 14 + Math.random() * 12,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
      })),
    []
  )

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Soft base wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-emerald-50" />

      {/* Floating gradient orbs (radial gradients — no expensive blur filter) */}
      <div
        className="absolute -top-24 -left-24 w-[26rem] h-[26rem] rounded-full animate-float-slow will-change-transform"
        style={{
          background:
            'radial-gradient(circle at center, rgba(253,164,175,0.5) 0%, rgba(253,164,175,0) 65%)',
        }}
      />
      <div
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full animate-drift will-change-transform"
        style={{
          background:
            'radial-gradient(circle at center, rgba(253,230,138,0.6) 0%, rgba(253,230,138,0) 65%)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/4 w-[22rem] h-[22rem] rounded-full animate-float will-change-transform"
        style={{
          background:
            'radial-gradient(circle at center, rgba(167,243,208,0.55) 0%, rgba(167,243,208,0) 65%)',
          animationDelay: '1.5s',
        }}
      />
      <div
        className="absolute top-10 right-1/4 w-[18rem] h-[18rem] rounded-full animate-drift will-change-transform"
        style={{
          background:
            'radial-gradient(circle at center, rgba(249,168,212,0.55) 0%, rgba(249,168,212,0) 65%)',
          animationDelay: '3s',
        }}
      />

      {/* Twinkling sparkles */}
      <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-rose-300 animate-sparkle will-change-transform" />
      <div className="absolute top-2/3 left-3/4 w-1 h-1 rounded-full bg-amber-300 animate-sparkle will-change-transform" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/5 right-1/6 w-2 h-2 rounded-full bg-emerald-300 animate-sparkle will-change-transform" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-rose-400 animate-sparkle will-change-transform" style={{ animationDelay: '0.6s' }} />
      <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 rounded-full bg-amber-400 animate-sparkle will-change-transform" style={{ animationDelay: '1.6s' }} />

      {/* Falling petals */}
      {petals.map((petal) => (
        <span
          key={petal.id}
          className={`absolute block ${petal.color} rounded-[50%_0_50%_50%] animate-petal will-change-transform`}
          style={{
            left: `${petal.left}%`,
            top: 0,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  )
}
