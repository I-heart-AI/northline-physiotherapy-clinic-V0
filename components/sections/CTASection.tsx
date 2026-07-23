'use client'

import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'

interface CTASectionProps {
  onBookClick: () => void
}

export function CTASection({ onBookClick }: CTASectionProps) {
  const handleClick = () => {
    trackEvent('assessment_cta_clicked', { source: 'final-cta' })
    onBookClick()
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-primary-light">
      <div className="mx-auto max-w-3xl px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Ready to Start Your Recovery?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto text-balance">
          Take the first step toward moving freely again. Book your initial assessment today and discover your personalized path to recovery.
        </p>
        <Button
          onClick={handleClick}
          className="bg-white hover:bg-white/90 text-primary font-bold px-8 py-4 text-lg md:text-xl"
          data-cta-source="final"
        >
          Book Your Initial Assessment
        </Button>
        <p className="text-white/70 text-sm mt-8">
          No commitment. Just a conversation about your recovery.
        </p>
      </div>
    </section>
  )
}
