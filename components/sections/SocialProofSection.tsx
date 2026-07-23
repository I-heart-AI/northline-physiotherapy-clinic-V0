'use client'

import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { patientStories } from '@/data/patient-stories'

export function SocialProofSection() {
  // Featured story (first one)
  const featured = patientStories[0]
  const otherStories = patientStories.slice(1, 3)

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
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

        {/* Featured testimonial */}
        <Card className="mb-10 md:mb-14 border-border bg-gradient-to-br from-primary/5 to-transparent p-6 md:p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-primary">
                  {featured.name.charAt(0)}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <blockquote className="text-base md:text-lg text-foreground leading-relaxed mb-4 italic">
                "{featured.story}"
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">{featured.name}</p>
                <p className="text-sm text-muted">{featured.goal}</p>
                <p className="text-xs text-muted mt-2">Fictional example</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional stories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {otherStories.map((story, index) => (
            <Card key={index} className="border-border p-6 md:p-8">
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
              <p className="text-base text-foreground leading-relaxed mb-4">
                {story.story}
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
