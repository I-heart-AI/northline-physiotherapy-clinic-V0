'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'

interface WhyChooseUsSectionProps {
  onBookClick: () => void
}

export function WhyChooseUsSection({ onBookClick }: WhyChooseUsSectionProps) {
  const handleClick = () => {
    trackEvent('assessment_cta_clicked', { source: 'why-choose-us-cta' })
    onBookClick()
  }

  const benefits = [
    {
      title: 'Expert Practitioners',
      description: 'Our team brings years of experience across diverse patient needs and recovery scenarios.',
    },
    {
      title: 'Clear Communication',
      description: 'We explain your condition and recovery plan in language you understand. No jargon.',
    },
    {
      title: 'One-on-One Attention',
      description: 'Every session is tailored to you. Your progress matters, and we adjust your plan accordingly.',
    },
    {
      title: 'Proven Results',
      description: 'Patients leave our clinic with confidence, a clear path forward, and measurable progress.',
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-border bg-muted/20">
            <Image
              src="/images/clinic-space.png"
              alt="Modern physiotherapy treatment space with equipment and open floor"
              fill
              className="object-cover"
              quality={90}
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Why Choose Northline
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-8">
              We&apos;re not a one-size-fits-all clinic. We&apos;re physiotherapists who genuinely care about your recovery. Here&apos;s why patients trust us:
            </p>

            {/* Benefits list */}
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg leading-none">→</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-base md:text-lg mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-base text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              onClick={handleClick}
              className="bg-primary hover:bg-primary-light text-white font-semibold px-6 py-2.5"
              data-cta-source="why-choose-us"
            >
              Book Your Assessment
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
