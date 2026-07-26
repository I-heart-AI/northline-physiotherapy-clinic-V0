import Image from 'next/image'

export function MeetMayaSection() {
  const pillars = [
    {
      title: 'One-on-one assessment',
      description: 'Every session is dedicated to you — no shared appointments, no rushed evaluations.',
    },
    {
      title: 'Progressive exercise',
      description: 'Your program builds gradually based on how your body responds, not a fixed template.',
    },
    {
      title: 'Practical education',
      description: 'You leave understanding your body better — what to do, what to avoid, and why.',
    },
    {
      title: 'Goal-based rehabilitation',
      description: 'Your goals shape your plan. Whether that is returning to sport, work, or daily life.',
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Portrait */}
          <div className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-[4/5] rounded-lg overflow-hidden border border-border">
            <Image
              src="/images/practitioner-maya.png"
              alt="Maya Chen, Physiotherapist, MScPT — Northline Physiotherapy Clinic"
              fill
              className="object-cover object-top"
              quality={90}
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Meet Your Physiotherapist
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">
              Maya Chen, MScPT
            </h2>
            <p className="text-base text-muted mb-6">
              Registered Physiotherapist &middot; 9 years of experience
            </p>
            <p className="text-base md:text-lg text-muted leading-relaxed mb-8">
              Maya works with each patient individually to understand their situation, identify contributing factors, and build a rehabilitation plan around their specific goals. Her approach draws on current evidence and adapts as your progress evolves.
            </p>

            {/* Approach pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg border border-border p-4"
                >
                  <p className="font-semibold text-foreground text-sm mb-1">{pillar.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
