'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { patientStories } from '@/data/patient-stories'

export function SocialProofSection() {
  return (
    <section id="reviews" className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Real Patient Experiences
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            See how our patients have progressed from confusion and pain to clarity and strength.
          </p>
        </div>

        {/* Stories grid - equal width cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-10">
          {patientStories.slice(0, 3).map((story, index) => (
            <Card key={index} className="border-border p-6 md:p-8 flex flex-col">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-accent">
                      {story.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{story.name}</p>
                    <p className="text-xs text-muted">{story.goal}</p>
                  </div>
                </div>
              </div>
              <p className="text-base text-foreground leading-relaxed mb-4 flex-1">
                "{story.story}"
              </p>
              <p className="text-xs text-muted">Fictional example</p>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-background rounded-lg border border-border p-6 text-center">
          <p className="text-xs md:text-sm text-muted leading-relaxed">
            <strong>Important:</strong> These are fictional patient stories created for this prototype. 
            They do not represent real patients or actual outcomes. This is a demonstration site. 
            No real patient data is involved. For real reviews and patient outcomes, consult with an actual clinic.
          </p>
        </div>
      </div>
    </section>
  )
}
