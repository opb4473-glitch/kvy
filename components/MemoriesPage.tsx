'use client'

import Image from 'next/image'
import { Dog, Sun, Sparkles, Compass, type LucideIcon } from 'lucide-react'

interface Memory {
  title: string
  description: string
  icon: LucideIcon
  bg: string
  accent: string
}

const memories: Memory[] = [
  {
    title: 'Dog Lover Extraordinaire',
    description:
      'Your love for dogs is truly unmatched. Every tail wag, every puppy kiss — you find pure joy in these moments.',
    icon: Dog,
    bg: '/dog.jpg',
    accent: 'from-amber-500/70 to-amber-700/60',
  },
  {
    title: 'Sunflower Dreams',
    description:
      'Like sunflowers that follow the sun, you bring warmth and positivity wherever you go.',
    icon: Sun,
    bg: '/sunflowers.jpg',
    accent: 'from-rose-500/70 to-rose-700/60',
  },
  {
    title: 'Special Soul',
    description:
      'Your kindness, laughter, and genuine spirit make every moment with you unforgettable.',
    icon: Sparkles,
    bg: '/soul.jpg',
    accent: 'from-violet-500/70 to-purple-700/60',
  },
  {
    title: 'Adventurous Heart',
    description:
      'You embrace life with enthusiasm and create beautiful memories along the way.',
    icon: Compass,
    bg: '/advanture.jpg',
    accent: 'from-emerald-500/70 to-teal-700/60',
  },
]

export default function MemoriesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 animate-bloom">
          <p className="text-sm md:text-base uppercase tracking-[0.35em] text-rose-400 font-medium mb-3">
            Through the little things
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Moments of Joy
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400" />
            <span className="w-2 h-2 rotate-45 bg-rose-400 animate-heartbeat" />
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400" />
          </div>
          <p className="text-lg text-muted-foreground font-light">
            What makes you absolutely wonderful
          </p>
        </div>


        {/* Memory Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {memories.map((memory, index) => {
            const Icon = memory.icon
            return (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-white/70 animate-bloom"
                style={{ animationDelay: `${200 + index * 120}ms` }}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${memory.bg})` }}
                />

                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${memory.accent} transition-opacity duration-500 opacity-90 group-hover:opacity-80`}
                />

                {/* Content */}
                <div className="relative z-10 text-white px-7 py-9">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex items-center justify-center w-11 h-11 rounded-2xl bg-white/20 backdrop-blur border border-white/30 shadow-inner">
                      <Icon className="w-5 h-5" />
                    </span>
                    <h3 className="text-2xl font-bold font-display drop-shadow-sm">
                      {memory.title}
                    </h3>
                  </div>
                  <p className="leading-relaxed text-white/90 font-light">
                    {memory.description}
                  </p>
                  <div className="mt-5 h-0.5 w-12 bg-white/40 rounded-full transition-all duration-500 group-hover:w-24 group-hover:bg-white/70" />
                </div>
              </div>
            )
          })}
        </div>


        {/* Sunflower Image */}
        <div className="mb-12 group animate-bloom" style={{ animationDelay: '150ms' }}>
          <div className="relative w-full h-64 md:h-80 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/70 ring-1 ring-amber-200/60">
            <Image
              src="/sunflower.jpg"
              alt="A field of golden sunflowers"
              fill
              className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/25 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/90 text-sm tracking-[0.3em] uppercase font-light">
              Your warmth in bloom
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
