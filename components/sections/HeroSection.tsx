'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'

interface HeroSectionProps {
  onBookClick: () => void
}

export function HeroSection({ onBookClick }: HeroSectionProps) {
  const handleClick = () => {
    trackEvent('assessment_cta_clicked', { source: 'hero-cta' })
    onBookClick()
  }

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-assessment.png"
          alt="Physiotherapist guiding patient through rehabilitation movement"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/60 via-foreground/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-20 lg:py-28 w-full">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance mb-6">
            Move freely again. Without the guesswork.
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 text-balance">
            Professional physiotherapy assessment and personalized rehabilitation. Start your recovery journey with expert guidance and clear, achievable milestones.
          </p>
          <Button
            onClick={handleClick}
            className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3 text-base md:text-lg"
            data-cta-source="hero"
          >
            Book Your Initial Assessment
          </Button>
        </div>
      </div>
    </section>
  )
}
