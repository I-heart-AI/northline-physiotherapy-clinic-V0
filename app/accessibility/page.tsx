'use client'

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import Link from 'next/link'

export default function AccessibilityPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header onBookClick={() => {}} />

      <main className="flex-1 mx-auto max-w-4xl px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <article className="space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Accessibility</h1>
            <p className="text-lg text-muted">Northline Physiotherapy&apos;s Commitment to Digital Accessibility</p>
          </div>

          <div className="border-t border-border pt-8 space-y-6">
            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Our Commitment</h2>
              <p className="text-foreground leading-relaxed">
                Northline Physiotherapy is committed to ensuring that all visitors, regardless of ability, can access and navigate our website with ease. We believe that digital accessibility is fundamental to inclusive healthcare.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Accessibility Features</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Keyboard Navigation</h3>
                  <p className="text-foreground leading-relaxed">
                    Navigate the entire website using only your keyboard. Use <kbd className="bg-background border border-border px-2 py-1 rounded text-sm">Tab</kbd> to move between elements and <kbd className="bg-background border border-border px-2 py-1 rounded text-sm">Enter</kbd> to activate buttons and links.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Visible Focus Indicators</h3>
                  <p className="text-foreground leading-relaxed">
                    All interactive elements display clear focus states so you always know where you are on the page.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Color Contrast Compliance</h3>
                  <p className="text-foreground leading-relaxed">
                    All text meets WCAG AA standards with a minimum contrast ratio of 4.5:1, ensuring readability for users with low vision.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Semantic HTML Structure</h3>
                  <p className="text-foreground leading-relaxed">
                    Our website uses proper heading hierarchy, landmark regions, and semantic elements to support screen reader users.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Descriptive Image Text</h3>
                  <p className="text-foreground leading-relaxed">
                    All images include descriptive alt text so screen reader users understand the content and context.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Reduced Motion Support</h3>
                  <p className="text-foreground leading-relaxed">
                    If you have enabled &ldquo;Reduce Motion&rdquo; in your system settings, animations and transitions are disabled.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Accessible Form Controls</h3>
                  <p className="text-foreground leading-relaxed">
                    All form inputs are properly labeled, error messages are clear, and required fields are indicated.
                  </p>
                </div>

                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold text-foreground mb-1">Responsive Design</h3>
                  <p className="text-foreground leading-relaxed">
                    The website is fully responsive and works on all screen sizes from mobile phones to large desktop monitors.
                  </p>
                </div>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Standards We Follow</h2>
              <p className="text-foreground leading-relaxed">
                This website strives to comply with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards established by the World Wide Web Consortium (W3C).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Browser & Assistive Technology Support</h2>
              <p className="text-foreground leading-relaxed mb-3">
                This website has been tested with:
              </p>
              <ul className="space-y-2 text-foreground leading-relaxed list-disc list-inside">
                <li>Screen readers: NVDA, JAWS, VoiceOver</li>
                <li>Browsers: Chrome, Firefox, Safari, Edge</li>
                <li>Mobile devices: iOS with VoiceOver, Android with TalkBack</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">⚠️ Prototype Note</h2>
              <div className="bg-accent/10 border border-accent rounded-lg p-4 space-y-2">
                <p className="font-semibold text-foreground">
                  This is a prototype version of the website.
                </p>
                <p className="text-foreground leading-relaxed">
                  Before production launch, Northline Physiotherapy will conduct a formal accessibility audit by certified auditors to ensure full compliance and identify any accessibility barriers that may have been missed.
                </p>
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Feedback & Accessibility Issues</h2>
              <p className="text-foreground leading-relaxed">
                If you encounter any accessibility barriers or have suggestions for improvement, please contact Northline Physiotherapy. Your feedback helps us provide a better experience for all visitors.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-foreground">Additional Resources</h2>
              <ul className="space-y-2 text-foreground leading-relaxed">
                <li>
                  <a href="https://www.w3.org/WAI/fundamentals/" className="text-primary hover:text-primary-light underline transition-colors" target="_blank" rel="noopener noreferrer">
                    Web Accessibility Initiative (WAI)
                  </a>
                </li>
                <li>
                  <a href="https://www.w3.org/WAI/WCAG21/quickref/" className="text-primary hover:text-primary-light underline transition-colors" target="_blank" rel="noopener noreferrer">
                    WCAG 2.1 Quick Reference
                  </a>
                </li>
              </ul>
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
