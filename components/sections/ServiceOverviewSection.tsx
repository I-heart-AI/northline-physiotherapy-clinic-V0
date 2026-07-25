'use client'

import { Button } from '@/components/ui/button'
import { trackEvent } from '@/lib/analytics'

interface ServiceOverviewSectionProps {
  onBookClick: () => void
}

export function ServiceOverviewSection({ onBookClick }: ServiceOverviewSectionProps) {
  const handleClick = () => {
    trackEvent('assessment_cta_clicked', { source: 'service-overview-cta' })
    onBookClick()
  }

  return (
    <section id="initial-assessment" className="w-full py-12 md:py-16 lg:py-20 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              What is an Initial Assessment?
            </h2>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-6">
              Your initial assessment is a comprehensive evaluation where we listen to your story, understand your goals, and identify the root cause of your symptoms. We&apos;re not just treating the symptom—we&apos;re solving the problem.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">✓</span>
                </div>
                <p className="text-base text-foreground">
                  <strong>Full movement evaluation</strong> — We assess your mobility, strength, and pain patterns.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">✓</span>
                </div>
                <p className="text-base text-foreground">
                  <strong>Clear diagnosis</strong> — We explain what&apos;s happening and why, in plain language.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">✓</span>
                </div>
                <p className="text-base text-foreground">
                  <strong>Personalized plan</strong> — Your recovery path, tailored to your goals and lifestyle.
                </p>
              </div>
            </div>
            <Button
              onClick={handleClick}
              className="bg-primary hover:bg-primary-light text-white font-semibold px-6 py-2.5"
              data-cta-source="service-overview"
            >
              Book Your Initial Assessment
            </Button>
          </div>

          {/* Right side info box */}
          <div className="bg-white rounded-lg border border-border p-8 md:p-10">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6">What to Expect</h3>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary mb-2">Duration</p>
                <p className="text-base text-foreground">60 minutes for thorough evaluation and discussion</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary mb-2">Format</p>
                <p className="text-base text-foreground">In-person at our clinic with full movement assessment</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-primary mb-2">Outcome</p>
                <p className="text-base text-foreground">You&apos;ll leave with a clear understanding and next steps</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
