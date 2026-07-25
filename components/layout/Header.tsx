'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/common/Logo'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  onBookClick: () => void
}

export function Header({ onBookClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Our Process', href: '#process' },
    { label: 'Services', href: '#services' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card shadow-sm">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo variant="header" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <Button
              onClick={onBookClick}
              className="hidden md:inline-flex bg-primary hover:bg-primary-light text-white"
              data-cta-source="header-desktop"
            >
              Book Assessment
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-border">
            <div className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-2 py-2 text-sm font-medium text-foreground hover:bg-secondary rounded transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button
                onClick={() => {
                  onBookClick()
                  setMobileMenuOpen(false)
                }}
                className="w-full bg-primary hover:bg-primary-light text-white mt-2"
                data-cta-source="header-mobile"
              >
                Book Assessment
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
