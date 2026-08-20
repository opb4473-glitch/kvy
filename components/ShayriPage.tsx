'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react'

interface Shayri {
  lines: string[]
  accent: string
}

const SHAYRI_LIST: Shayri[] = [
  {
    lines: [
      'सपनों की शहज़ादी हो, या जन्नत की कोई हूर हो,',
      'स्वर्ग की अप्सरा हो तुम, या धरती का कोई नूर हो।',
      'धड़कन भी थम सी जाती है तुम्हें देखने के बाद,',
      'खुदा की कसम...',
      'तुम तो खूबसूरती का साक्षात सुरूर हो।'
    ],
    accent: 'from-rose-400 to-amber-400',
  },
]

const CHAR_SPEED = 90
const LINE_PAUSE = 1200
const SHAYRI_PAUSE = 600

function TypewriterText({ lines, onComplete }: { lines: string[]; onComplete?: () => void }) {
  const [currentLine, setCurrentLine] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setCurrentLine(0)
    setCharCount(0)
    setDone(false)
  }, [lines])

  useEffect(() => {
    if (done) return
    const current = lines[currentLine]
    let t: ReturnType<typeof setTimeout>

    if (charCount < current.length) {
      t = setTimeout(() => setCharCount((c) => c + 1), CHAR_SPEED)
    } else if (currentLine < lines.length - 1) {
      t = setTimeout(() => {
        setCurrentLine((i) => i + 1)
        setCharCount(0)
      }, LINE_PAUSE)
    } else {
      t = setTimeout(() => {
        setDone(true)
        onComplete?.()
      }, SHAYRI_PAUSE)
    }

    return () => clearTimeout(t)
  }, [currentLine, charCount, lines, done, onComplete])

  return (
    <div className="space-y-4">
      {lines.map((line, i) => {
        const isPast = i < currentLine
        const isCurrent = i === currentLine
        const isVisible = isPast || isCurrent

        if (!isVisible) return null

        const text = isPast ? line : line.slice(0, charCount)

        return (
          <p
            key={i}
            className="text-lg sm:text-xl md:text-2xl font-light leading-relaxed text-foreground/80 font-display"
          >
            {text}
            {isCurrent && !done && (
              <span className="ml-0.5 inline-block w-[2px] h-[1.1em] align-middle bg-amber-400 animate-caret" />
            )}
          </p>
        )
      })}
    </div>
  )
}

export default function ShayriPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showNav, setShowNav] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const currentShayri = SHAYRI_LIST[currentIndex]
  const hasMultiple = SHAYRI_LIST.length > 1

  const goNext = useCallback(() => {
    if (currentIndex < SHAYRI_LIST.length - 1) {
      setShowNav(false)
      setCurrentIndex((i) => i + 1)
    }
  }, [currentIndex])

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setShowNav(false)
      setCurrentIndex((i) => i - 1)
    }
  }, [currentIndex])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-4 pb-36 sm:pt-20 sm:pb-32" ref={containerRef}>
      {/* Decorative top ornament */}
      <div className={`mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-6'}`}>
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400" />
          <Sparkles className="w-5 h-5 text-amber-400 animate-spin-slow" />
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400" />
        </div>
      </div>
 

      {/* Shayri Card */}
      <div className={`max-w-2xl w-full mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="relative">
          {/* Glow effect behind card */}
          <div className="absolute -inset-4 bg-gradient-to-r from-rose-400/20 via-amber-400/20 to-rose-400/20 rounded-3xl blur-xl opacity-50 animate-pulse" />

          <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-rose-100/80">
            {/* Decorative quote mark */}
            <div className="absolute top-6 left-8 text-6xl sm:text-7xl font-serif text-rose-200/60 select-none leading-none">
              &ldquo;
            </div>

            {/* Shayri content */}
            <div className="relative z-10 pt-8 text-center">
              <TypewriterText
                key={currentIndex}
                lines={currentShayri.lines}
                onComplete={() => setShowNav(true)}
              />
            </div>

            {/* Bottom ornament */}
            <div className={`mt-8 flex justify-center transition-opacity duration-700 ${showNav ? 'opacity-100' : 'opacity-0'}`}>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-300 animate-heartbeat" />
                <span className="w-1 h-1 rounded-full bg-amber-400 animate-heartbeat" style={{ animationDelay: '0.3s' }} />
                <span className="w-1.5 h-1.5 rounded-full bg-rose-300 animate-heartbeat" style={{ animationDelay: '0.6s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation between shayris */}
      {hasMultiple && (
        <div className={`mt-10 flex items-center gap-6 transition-all duration-700 ${showNav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
          <button
            onClick={goPrev}
            disabled={currentIndex === 0}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-white/70 border border-rose-200/70 text-rose-500 shadow-sm hover:shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed backdrop-blur"
            aria-label="Previous shayri"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {SHAYRI_LIST.map((_, i) => (
              <span
                key={i}
                className={`transition-all duration-500 rounded-full ${
                  i === currentIndex
                    ? 'w-8 h-2 bg-gradient-to-r from-rose-400 to-amber-400'
                    : 'w-2 h-2 bg-rose-200'
                }`}
              />
            ))}
          </div>

          <button
            onClick={goNext}
            disabled={currentIndex === SHAYRI_LIST.length - 1}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-rose-400 to-amber-400 text-white shadow-md hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
            aria-label="Next shayri"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Add more prompt */}
      <div className={`mt-8 transition-all duration-700 delay-500 ${showNav ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex items-center gap-2 text-rose-300/70">
          <Heart className="w-3.5 h-3.5 animate-heartbeat" />
          <span className="text-xs tracking-wider uppercase">Har lafz dil se</span>
          <Heart className="w-3.5 h-3.5 animate-heartbeat" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </div>
  )
}
