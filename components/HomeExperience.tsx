'use client'

import { useState, useEffect } from 'react'
import WelcomePage from '@/components/WelcomePage'
import MemoriesPage from '@/components/MemoriesPage'
import CakePage from '@/components/CakePage'
import FinalePageComponent from '@/components/FinalePageComponent'
import PageNavigation from '@/components/PageNavigation'
import AnimatedBackground from '@/components/AnimatedBackground'
import IntroScreen from '@/components/IntroScreen'
import ShayriPage from '@/components/ShayriPage'

export default function HomeExperience() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [introDone, setIntroDone] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const pages = [
    { component: <WelcomePage />, label: 'Welcome' },
    { component: <CakePage />, label: 'Wish' },
    { component: <MemoriesPage />, label: 'Memories' },
    // { component: <MessagePage />, label: 'Messages' },
    { component: <ShayriPage />, label: 'Shayri' },
    { component: <FinalePageComponent />, label: 'Finale' },
  ]

  if (!isClient) {
    return null
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      {!introDone && <IntroScreen onComplete={() => setIntroDone(true)} />}

      {introDone && (
        <>
          <div className="animate-fade-in">
            <AnimatedBackground />
          </div>

          <div className="relative w-full min-h-screen">
            {/* Page Display */}
            <div className="w-full min-h-screen flex items-center justify-center">
              <div key={currentPage} className="w-full animate-page-in">
                {pages[currentPage].component}
              </div>
            </div>

            {/* Navigation */}
            <PageNavigation
              currentPage={currentPage}
              totalPages={pages.length}
              labels={pages.map((p) => p.label)}
              onPageChange={setCurrentPage}
            />
          </div>
        </>
      )}
    </main>
  )
}
