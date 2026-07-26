'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { StickyMobileBookCTA } from '@/components/layout/StickyMobileBookCTA'
import { BookingDialog } from '@/components/booking/BookingDialog'
import { HeroSection } from '@/components/sections/HeroSection'
import { ServiceOverviewSection } from '@/components/sections/ServiceOverviewSection'
import { AssessmentProcessSection } from '@/components/sections/AssessmentProcessSection'
import { MeetMayaSection } from '@/components/sections/MeetMayaSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { SocialProofSection } from '@/components/sections/SocialProofSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Page() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [bookingSource, setBookingSource] = useState('hero')

  const handleBookClick = (source: string = 'hero') => {
    setBookingSource(source)
    setBookingOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header onBookClick={() => handleBookClick('header')} />

      <main className="flex-1">
        <HeroSection onBookClick={() => handleBookClick('hero')} />
        <ServiceOverviewSection onBookClick={() => handleBookClick('service-overview')} />
        <AssessmentProcessSection onBookClick={() => handleBookClick('process')} />
        <MeetMayaSection />
        <WhyChooseUsSection onBookClick={() => handleBookClick('why-choose-us')} />
        <SocialProofSection />
        <FAQSection />
        <CTASection onBookClick={() => handleBookClick('final-cta')} />
      </main>

      <Footer />

      <StickyMobileBookCTA onBookClick={() => handleBookClick('sticky-mobile')} />

      <BookingDialog
        isOpen={bookingOpen}
        onOpenChange={setBookingOpen}
        source={bookingSource}
      />
    </div>
  )
}
