'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { pricingTiers } from '@/data/pricing-data'
import { faqItems } from '@/data/faq-data'
import { trackEvent } from '@/lib/analytics'

interface PricingAndFAQSectionProps {
  onBookClick: () => void
}

export function PricingAndFAQSection({ onBookClick }: PricingAndFAQSectionProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  const handleBookClick = () => {
    trackEvent('assessment_cta_clicked', { source: 'pricing-cta' })
    onBookClick()
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Pricing section */}
        <div className="mb-16 md:mb-20">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Transparent Pricing
            </h2>
            <p className="text-base md:text-lg text-muted max-w-2xl">
              No hidden fees. No surprise charges. Here&apos;s exactly what our services cost.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={`border rounded-lg p-6 md:p-8 flex flex-col ${
                  index === 1
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-white'
                }`}
              >
                {index === 1 && (
                  <div className="inline-flex bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full mb-4 w-fit">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {tier.name}
                </h3>
                <p className="text-sm text-muted mb-6">{tier.description}</p>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">
                      ${tier.price}
                    </span>
                    <span className="text-muted text-sm">{tier.duration}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm text-foreground">
                      <span className="text-primary font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={handleBookClick}
                  className={
                    index === 1
                      ? 'bg-primary hover:bg-primary-light text-white w-full font-semibold'
                      : 'border border-border bg-white hover:bg-background text-foreground w-full font-semibold'
                  }
                  data-cta-source="pricing"
                >
                  Book Now
                </Button>
              </Card>
            ))}
          </div>

          <p className="text-xs text-center text-muted">
            Pricing subject to confirmation. Contact us for package options and custom arrangements.
          </p>
        </div>

        {/* FAQ section */}
        <div>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-base md:text-lg text-muted max-w-2xl">
              Have questions? We&apos;re here to help.
            </p>
          </div>

          {/* FAQ accordion */}
          <div className="space-y-4 max-w-3xl">
            {faqItems.map((item, index) => (
              <button
                key={index}
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full text-left"
              >
                <Card
                  className={`border rounded-lg p-6 transition-all cursor-pointer hover:border-primary ${
                    expandedFaq === index ? 'border-primary bg-primary/5' : 'border-border bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-semibold text-foreground text-base md:text-lg">
                      {item.question}
                    </h3>
                    <span
                      className={`text-primary text-xl flex-shrink-0 transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </div>

                  {expandedFaq === index && (
                    <p className="text-base text-muted mt-4 leading-relaxed">
                      {item.answer}
                    </p>
                  )}
                </Card>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
