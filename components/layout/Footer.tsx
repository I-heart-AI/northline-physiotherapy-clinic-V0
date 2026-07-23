'use client'

import Link from 'next/link'
import { Logo } from '@/components/common/Logo'
import { Phone, Mail, MapPin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: 'Services',
      links: [
        { label: 'Physiotherapy Assessment', href: '#services' },
        { label: 'Sports Injury Recovery', href: '#services' },
        { label: 'Post-Surgical Rehab', href: '#services' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '#why-us' },
        { label: 'Our Team', href: '#team' },
        { label: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Accessibility', href: '/accessibility' },
      ],
    },
  ]

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo variant="footer" />
            </Link>
            <p className="text-sm text-muted mb-6">
              Professional physiotherapy and rehabilitation services to help you move freely again.
            </p>
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">(555) 123-4567</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">contact@northline.local</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">123 Wellness Ave, Medical District, ST 12345</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((section) => (
            <div key={section.title} className="md:col-span-1">
              <h3 className="font-semibold text-sm text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          {/* Bottom Info */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-muted">
            <p>
              &copy; {currentYear} Northline Physiotherapy Clinic. All rights reserved.
            </p>
            <p>
              This is a prototype. Patient data is not real and exists for demonstration only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
