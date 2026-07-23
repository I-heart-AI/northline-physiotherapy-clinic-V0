'use client'

import { useState } from 'react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { BookingDialog } from '@/components/booking/BookingDialog'

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
        {/* Placeholder for content sections */}
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-24">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Northline Physiotherapy Clinic
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Phase 2 layout components are ready. Hero and content sections coming in Phase 3.
            </p>
            <button
              onClick={() => handleBookClick('hero')}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-light text-white font-medium rounded transition-colors"
              data-cta-source="hero"
            >
              Book Assessment
            </button>
          </div>
        </div>
      </main>

      <Footer />

      <BookingDialog
        isOpen={bookingOpen}
        onOpenChange={setBookingOpen}
        source={bookingSource}
      />
    </div>
  )
}
