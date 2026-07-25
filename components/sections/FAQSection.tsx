'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { faqItems } from '@/data/faq-data'

export function FAQSection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  return (
    <section id="faq" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
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
