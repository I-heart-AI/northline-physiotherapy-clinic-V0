'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'

interface StickyMobileBookCTAProps {
  onBookClick: () => void
}

export function StickyMobileBookCTA({ onBookClick }: StickyMobileBookCTAProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isAtFooter, setIsAtFooter] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show when hero is out of view (more than 600px scrolled)
      const heroVisible = window.scrollY < 600
      setIsVisible(!heroVisible)

      // Hide when footer is close (within 96px)
      const scrollPosition = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight
      const distanceFromBottom = pageHeight - scrollPosition
      setIsAtFooter(distanceFromBottom < 96)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    trackEvent('assessment_cta_clicked', { source: 'sticky-mobile-cta' })
    onBookClick()
  }

  // Only show on mobile
  if (!isVisible || isAtFooter) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 md:hidden bg-foreground/95 backdrop-blur-sm border-t border-border p-4 safe-area-inset-bottom z-40">
      <div className="flex items-center justify-between gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-white font-semibold text-sm">
            Ready to move freely?
          </p>
          <p className="text-white/70 text-xs truncate">
            Book your assessment
          </p>
        </div>
        <Button
          onClick={handleClick}
          className="bg-primary hover:bg-primary-light text-white font-semibold px-5 py-2 text-sm flex-shrink-0"
          data-cta-source="sticky"
        >
          Book Your Initial Assessment
        </Button>
      </div>
    </div>
  )
}
