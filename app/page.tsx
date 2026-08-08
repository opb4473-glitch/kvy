'use client'

import { useState, useEffect } from 'react'
import WelcomePage from '@/components/WelcomePage'
import MemoriesPage from '@/components/MemoriesPage'
import MessagePage from '@/components/MessagePage'
import CakePage from '@/components/CakePage'
import FinalePageComponent from '@/components/FinalePageComponent'
import PageNavigation from '@/components/PageNavigation'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const pages = [
    { component: <WelcomePage />, label: 'Welcome' },
    { component: <CakePage />, label: 'Wish' },
    { component: <MemoriesPage />, label: 'Memories' },
    // { component: <MessagePage />, label: 'Messages' },
    { component: <FinalePageComponent />, label: 'Finale' },
  ]

  if (!isClient) {
    return null
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedBackground />

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
    </main>
  )
}
