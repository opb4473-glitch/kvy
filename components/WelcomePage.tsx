'use client'

import { Flower2 } from 'lucide-react'

export default function WelcomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 pt-4 pb-36 sm:pt-20 sm:pb-32">
      <div className="max-w-2xl mx-auto text-center">
        {/* Ornament */}
        <div className="mb-8 inline-flex items-center gap-3 animate-bloom">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-amber-400" />
          <Flower2 className="w-6 h-6 text-rose-400 animate-heartbeat" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-amber-400" />
        </div>

        {/* Welcome Text */}
        <div className="space-y-3 mb-6">
          <p className="text-xs sm:text-sm md:text-base uppercase tracking-[0.2em] sm:tracking-[0.35em] text-rose-400 font-medium animate-fade-up" style={{ animationDelay: '100ms' }}>
            A celebration made with love
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-foreground mb-3 drop-shadow-sm animate-fade-up" style={{ animationDelay: '200ms' }}>
            Happy Birthday
          </h1>
          <h2 className="p-4 text-5xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-rose-400 via-amber-400 to-rose-400 text-shimmer animate-gradient-x">
            Kavya
          </h2>
        </div>

        {/* Decorative Text */}
        <div className="space-y-4 mb-14">
          <p className="text-lg sm:text-xl md:text-2xl text-foreground/70 font-light animate-fade-up" style={{ animationDelay: '350ms' }}>
            Welcome to your special day
          </p>

          <div className="max-w-xl mx-auto space-y-4 text-muted-foreground leading-relaxed animate-fade-up" style={{ animationDelay: '450ms' }}>
            <p className="text-md italic font-light">
              Aaj ka din sirf ek date nahi hai&hellip; yeh woh din hai jab duniya thodi aur
              khoobsurat ho gayi thi, kyunki aap iss duniya me aayi thi.
            </p>
            <p className="text-md italic font-light">
              Aapki hasi, aapki softness, aapka woh pyaar jo aap bina soche sabko de deti ho&hellip;
              woh sab cheezein aaj celebrate ho rahi hain.
            </p>
            <p className="text-md italic font-light">
              Yeh chhoti si jagah bas ek bahana hai&hellip; aapko yaad dilane ka ki aap kitni special ho.
            </p>
            <p className="text-md italic font-light">
              Stay the way you are&hellip; there&rsquo;s something really beautiful about it.
            </p>
          </div>
        </div>

        {/* Start Hint */}
        <div className="inline-flex flex-col items-center gap-3 animate-fade-up" style={{ animationDelay: '650ms' }}>
          <div className="flex items-center gap-3 px-4 sm:px-6 py-3 rounded-full glass border border-rose-200/70 text-rose-600 text-xs sm:text-sm font-medium shadow-sm">
            <Flower2 className="w-4 h-4 animate-heartbeat shrink-0" />
            <span className="whitespace-nowrap">Click the arrow to begin the celebration</span>
          </div>
          <div className="flex gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-300 animate-sparkle" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-sparkle" style={{ animationDelay: '0.4s' }} />
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-sparkle" style={{ animationDelay: '0.8s' }} />
          </div>
        </div>
      </div>
    </div>
  )
}
