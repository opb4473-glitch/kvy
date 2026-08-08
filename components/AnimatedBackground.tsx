'use client'

import { useMemo } from 'react'

const ORB_COLORS = [
  'bg-rose-300/40',
  'bg-amber-200/50',
  'bg-emerald-200/40',
  'bg-pink-200/45',
]

const PETAL_COLORS = [
  'bg-rose-300',
  'bg-rose-400',
  'bg-amber-300',
  'bg-pink-300',
]

export default function AnimatedBackground() {
  const petals = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 8 + Math.random() * 10,
        delay: Math.random() * 14,
        duration: 12 + Math.random() * 12,
        color: PETAL_COLORS[i % PETAL_COLORS.length],
      })),
    []
  )

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      {/* Soft base wash */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-emerald-50" />

      {/* Floating gradient orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-rose-300/30 blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 -right-32 w-[28rem] h-[28rem] rounded-full bg-amber-200/40 blur-3xl animate-drift" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-emerald-200/35 blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-10 right-1/4 w-64 h-64 rounded-full bg-pink-200/40 blur-3xl animate-drift" style={{ animationDelay: '3s' }} />

      {/* Twinkling sparkles */}
      <div className="absolute top-1/4 left-1/5 w-1.5 h-1.5 rounded-full bg-rose-300 animate-sparkle" />
      <div className="absolute top-2/3 left-3/4 w-1 h-1 rounded-full bg-amber-300 animate-sparkle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/5 right-1/6 w-2 h-2 rounded-full bg-emerald-300 animate-sparkle" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-1/4 left-1/2 w-1 h-1 rounded-full bg-rose-400 animate-sparkle" style={{ animationDelay: '0.6s' }} />
      <div className="absolute top-1/2 left-1/6 w-1.5 h-1.5 rounded-full bg-amber-400 animate-sparkle" style={{ animationDelay: '1.6s' }} />

      {/* Falling petals */}
      {petals.map((petal) => (
        <span
          key={petal.id}
          className={`absolute block ${petal.color} rounded-[50%_0_50%_50%] animate-petal`}
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
