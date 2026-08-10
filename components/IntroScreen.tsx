'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const LINES = [
  'Wait for it...',
  'Something is meant just for you...',
  'Today is not just another day...',
  'It is...',
  '11th Aug',
  'Kavya',
]

const TYPE_SPEED = 55
const LINE_PAUSE = 500
const FINAL_PAUSE = 1400
const FADE_MS = 1000

export default function IntroScreen({ onComplete }: { onComplete: () => void }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [fading, setFading] = useState(false)
  const [canSkip, setCanSkip] = useState(false)
  const doneRef = useRef(false)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  const finish = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    setFading(true)
    const t = setTimeout(() => onCompleteRef.current(), FADE_MS)
    return t
  }, [])

  useEffect(() => {
    const current = LINES[lineIndex]
    let t: ReturnType<typeof setTimeout>

    if (charCount < current.length) {
      t = setTimeout(() => setCharCount((c) => c + 1), TYPE_SPEED)
    } else if (lineIndex < LINES.length - 1) {
      t = setTimeout(() => {
        setLineIndex((i) => i + 1)
        setCharCount(0)
      }, LINE_PAUSE)
    } else {
      t = setTimeout(finish, FINAL_PAUSE)
    }

    return () => clearTimeout(t)
  }, [lineIndex, charCount, finish])

  // useEffect(() => {
  //   const t = setTimeout(() => setCanSkip(true), 1200)
  //   return () => clearTimeout(t)
  // }, [])

  const typed = LINES[lineIndex].slice(0, charCount)
  const isLastLine = lineIndex === LINES.length - 1
  const isTyping = charCount < LINES[lineIndex].length

  return (
    <div
      onClick={() => { }}
      role="button"
      aria-label="Skip intro"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black select-none transition-opacity duration-1000 ${fading ? 'opacity-0' : 'opacity-100'
        }`}
    >
      {/* Faint glow behind the text */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full animate-float-slow will-change-transform"
          style={{
            background:
              'radial-gradient(circle at center, rgba(251,113,133,0.14) 0%, rgba(251,113,133,0) 65%)',
          }}
        />
      </div>

      <div className="relative text-center px-6">
        <p
          className={`font-mono text-2xl sm:text-4xl md:text-5xl font-semibold ${isLastLine
            ? 'bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400 text-shimmer animate-gradient-x bg-clip-text text-transparent'
            : 'text-rose-50'
            }`}
        >
          {typed}
          <span className="ml-1 inline-block w-0.5 h-[1em] align-middle bg-amber-300 animate-caret" aria-hidden />
        </p>

        {isLastLine && !isTyping && (
          <p className="mt-6 text-rose-200/60 text-xs sm:text-sm tracking-[0.3em] uppercase animate-fade-in">
            A little something, made just for you ✨
          </p>
        )}
      </div>

      {canSkip && (
        <span className="absolute bottom-10 left-0 right-0 text-center text-white/25 text-[11px] tracking-[0.35em] uppercase animate-pulse">
          Click anywhere to skip
        </span>
      )}
    </div>
  )
}
