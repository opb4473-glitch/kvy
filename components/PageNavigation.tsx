'use client'

import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Flower2,
  MessageCircleHeart,
  Cake,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

interface PageNavigationProps {
  currentPage: number
  totalPages: number
  labels: string[]
  onPageChange: (page: number) => void
}

const ICONS: LucideIcon[] = [Heart, Flower2, MessageCircleHeart, Cake, Sparkles]

export default function PageNavigation({
  currentPage,
  totalPages,
  labels,
  onPageChange,
}: PageNavigationProps) {
  const handlePrevious = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-background via-background/80 to-transparent pt-8 sm:pt-10 pb-5 sm:pb-6 px-3 sm:px-4">
      <div className="max-w-2xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 0}
          aria-label="Previous page"
          className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-semibold text-base transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 bg-white/70 border border-rose-200/70 text-rose-600 shadow-sm hover:shadow-md hover:scale-105 active:scale-95 backdrop-blur"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Page Indicator */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {Array.from({ length: totalPages }, (_, i) => {
            const Icon = ICONS[i] ?? Heart
            return (
              <button
                key={i}
                onClick={() => onPageChange(i)}
                className={`flex items-center justify-center rounded-full transition-all duration-500 p-1.5 sm:p-2 ${i === currentPage
                  ? 'bg-gradient-to-r from-rose-400 to-amber-400 text-white shadow-lg shadow-rose-200 scale-105'
                  : 'bg-white/60 text-foreground/50 hover:bg-white hover:text-rose-400 border border-rose-100'
                  }`}
                aria-label={`Go to ${labels[i]}`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {i === currentPage && (
                  <span className="hidden sm:inline ml-1.5 text-xs font-semibold tracking-wide">
                    {labels[i]}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages - 1}
          aria-label="Next page"
          className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-semibold text-base transition-all duration-300 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:scale-100 bg-gradient-to-r from-rose-400 to-amber-400 text-white shadow-md hover:shadow-xl hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
