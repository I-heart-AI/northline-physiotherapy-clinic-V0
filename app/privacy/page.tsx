'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onBookClick={() => {}} />

      <main className="flex-1 mx-auto max-w-4xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <article className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Privacy & Data</h1>
            <p className="text-lg text-muted">Northline Physiotherapy — Prototype Privacy Notice</p>
          </div>

          <div className="border-t border-border pt-8 space-y-6">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">About This Prototype</h2>
              <p className="text-foreground leading-relaxed">
                Northline Physiotherapy Clinic&apos;s website is currently a <strong>prototype demonstration</strong>. This page is not a complete privacy policy and does not represent the final production policy for the clinic.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Form Submission & Data Handling</h2>
              <ul className="space-y-2 text-foreground leading-relaxed list-disc list-inside">
                <li>
                  <strong>No data is transmitted or stored:</strong> When you fill out the assessment form, no information is sent to any server or database. The form operates entirely within your browser.
                </li>
                <li>
                  <strong>No appointments are booked:</strong> Clicking "Book Assessment" does not create a real appointment in any scheduling system.
                </li>
                <li>
                  <strong>No health records created:</strong> This prototype does not create, store, or access any patient health records.
                </li>
                <li>
                  <strong>Session-only state:</strong> All form data is cleared when you close your browser or navigate away.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">⚠️ Important Warning</h2>
              <div className="bg-accent/10 border border-accent rounded-lg p-4 space-y-2">
                <p className="font-semibold text-foreground">
                  Do not enter sensitive medical information into this form.
                </p>
                <p className="text-foreground leading-relaxed">
                  Although this prototype does not store or transmit data, it is a demonstration site without production-grade security. If you require a real appointment or need to share health information with Northline Physiotherapy, please contact the clinic directly.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Analytics & Tracking</h2>
              <p className="text-foreground leading-relaxed">
                This prototype includes basic analytics logging to the browser console only. No external analytics services, cookies, or tracking pixels are used. No information about your visit is collected or transmitted.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Before Production Launch</h2>
              <p className="text-foreground leading-relaxed">
                Before Northline Physiotherapy launches this website with real booking functionality, the clinic will:
              </p>
              <ul className="space-y-2 text-foreground leading-relaxed list-disc list-inside">
                <li>Implement HIPAA-compliant data handling (if in the US) or equivalent local regulations</li>
                <li>Adopt a comprehensive privacy policy</li>
                <li>Implement secure form submission and encrypted data storage</li>
                <li>Integrate a real appointment booking system with proper consent flows</li>
                <li>Conduct a professional security audit</li>
                <li>Obtain legal review for healthcare compliance</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Questions?</h2>
              <p className="text-foreground leading-relaxed">
                For questions about this prototype or real services, contact Northline Physiotherapy directly through the contact information in the footer.
              </p>
            </section>
          </div>

          <div className="pt-8 border-t border-border">
            <Link
              href="/"
              className="text-primary hover:text-primary-light font-medium underline transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
