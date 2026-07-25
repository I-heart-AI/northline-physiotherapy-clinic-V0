'use client'

import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'

interface AssessmentProcessSectionProps {
  onBookClick: () => void
}

export function AssessmentProcessSection({ onBookClick }: AssessmentProcessSectionProps) {
  const handleClick = () => {
    trackEvent('assessment_cta_clicked', { source: 'process-cta' })
    onBookClick()
  }

  const steps = [
    {
      number: '1',
      title: 'Listen & Understand',
      description: 'We start by hearing your story. What brought you in? What are your goals? What have you already tried? Understanding your full picture is crucial.',
    },
    {
      number: '2',
      title: 'Assess & Diagnose',
      description: 'Through careful physical assessment, we identify movement patterns, strength imbalances, and pain sources. We explain our findings clearly so you understand exactly what&apos;s happening.',
    },
    {
      number: '3',
      title: 'Plan & Progress',
      description: 'Together, we create a realistic recovery plan with clear milestones. You know what to expect, and we adjust as you progress. No guesswork, just steady improvement.',
    },
  ]

  return (
    <section id="process" className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Our Three-Step Process
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl">
            Every assessment follows the same proven approach: we listen, we assess, and we plan. No shortcuts.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Card */}
              <div className="bg-background rounded-lg border border-border p-6 md:p-8 h-full">
                {/* Step number */}
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-6 flex-shrink-0">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-base text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-0 w-8 h-1 bg-border transform translate-x-full -translate-y-1/2" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center pt-6">
          <Button
            onClick={handleClick}
            className="bg-primary hover:bg-primary-light text-white font-semibold px-8 py-3"
            data-cta-source="process"
          >
            Book Your Initial Assessment
          </Button>
        </div>
      </div>
    </section>
  )
}
