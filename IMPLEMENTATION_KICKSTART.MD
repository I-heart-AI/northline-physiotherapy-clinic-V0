# Northline Physiotherapy Clinic — Implementation Kickstart

**Project**: Fictional physiotherapy clinic landing page prototype  
**Status**: Ready for implementation  
**Last updated**: December 2024  

---

## 1. Project Overview

Build a modern, accessible landing page for "Northline Physiotherapy Clinic," a fictional physiotherapy practice. The site features a single clear call-to-action ("Book Your Initial Assessment"), a booking dialog with simulated form submission, patient testimonials, and supporting educational content.

**Key constraint**: This is a prototype. No real data is stored, sent, or logged. All forms are simulated with success states.

---

## 2. Technical Architecture

### Framework & Build
- **Next.js 16** (App Router)
- **React 19.2**
- **TypeScript**
- **Tailwind CSS v4** (with theme tokens in globals.css)
- **shadcn/ui** components (Button, Dialog, Input, Textarea, Select, Card, Badge)

### Key Libraries
- `react-hook-form` — Form validation and state management
- `zod` — Schema validation for form data
- Custom analytics stub (no external services)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-first responsive design (mobile, tablet, desktop)
- Reduced-motion support for animations

---

## 3. Design System

### Color Palette
| Token | Hex | Purpose |
|-------|-----|---------|
| `--primary` | `#0f766e` | Deep teal — primary CTAs, focus states, section accents |
| `--primary-light` | `#14b8a6` | Light teal — hover states, secondary highlights |
| `--accent` | `#78716c` | Warm sage — backgrounds, borders, muted text |
| `--background` | `#fafaf8` | Off-white — page background |
| `--foreground` | `#1c1917` | Charcoal — body text, headings |
| `--muted` | `#a8a29e` | Gray — secondary text, helper text |
| `--border` | `#e7e5e4` | Light gray — borders, dividers |
| `--destructive` | `#dc2626` | Red — error states only |

### Typography
| Level | Font | Size | Weight | Line Height | Use |
|-------|------|------|--------|-------------|-----|
| Hero heading | Inter | 48px | 700 | 1.2 | Page title, section heroes |
| Large heading | Inter | 32px | 700 | 1.3 | Section titles |
| Heading | Inter | 24px | 600 | 1.3 | Subsection titles |
| Body | Inter | 16px | 400 | 1.6 | Main content |
| Body small | Inter | 14px | 400 | 1.5 | Secondary content, labels |
| Button | Inter | 14px | 600 | 1.4 | CTA buttons |

**Font**: Inter (Google Fonts) — single family, multiple weights

### Spacing Scale
Use Tailwind's default scale: `p-2`, `p-4`, `p-6`, `p-8`, `gap-4`, `my-6`, etc.

- Horizontal padding: `px-4` (mobile), `px-8` (tablet), `px-12` (desktop)
- Vertical spacing: `py-6` (mobile), `py-8` (tablet), `py-12` (desktop)
- Component gaps: `gap-4`, `gap-6`

### Interactive States
- **Focus**: 3px teal outline, 2px offset, visible on all interactive elements
- **Hover (CTA)**: Shift to `--primary-light`, subtle scale (1.02)
- **Disabled**: 50% opacity, cursor not-allowed
- **Loading**: Spinner icon in button, button text unchanged

### Accessibility Requirements
- WCAG AA contrast compliance (minimum 4.5:1 for body text, 3:1 for UI components)
- Keyboard navigation: Tab through all interactive elements, Enter to submit
- Semantic HTML: `<button>`, `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`
- Focus management: Dialog trap focus when open, restore focus on close
- Reduced motion: Disable animations if `prefers-reduced-motion` is set
- Image alt text: Required for all content images, empty alt for decorative elements
- Form labels: Associated with inputs via `htmlFor`
- ARIA attributes where needed (aria-label, aria-labelledby, aria-expanded, etc.)

---

## 4. Image Generation Specifications

Generate exactly **three images** using the GenerateImage tool:

### Image 1: Hero Assessment (4:3 landscape)
**Filename**: `public/images/hero-assessment.jpg`  
**Prompt**: "Professional physiotherapy clinic scene: a fictional East Asian female physiotherapist in her mid-30s, wearing professional attire, guiding an adult patient through a controlled rehabilitation movement. The patient is standing with the physiotherapist providing hands-on guidance. Bright, well-lit clinic with wooden flooring and neutral tones. Natural daylight from large windows. Professional, calm, therapeutic atmosphere. No pain expressions, medical equipment visible, text, or visible logos."

**Aspect ratio**: 4:3 (landscape)  
**Usage**: Hero section background (with overlay gradient)

### Image 2: Practitioner Portrait (4:5 portrait)
**Filename**: `public/images/practitioner-maya.jpg`  
**Prompt**: "Professional portrait of Maya Chen, a fictional East Asian female physiotherapist in her mid-30s, same person as in the hero image. She is standing in the same bright physiotherapy clinic, wearing professional attire. Headshot and shoulders, warm professional expression, natural lighting, soft background blur of clinic environment. Consistent facial features, age, and professional styling from hero image."

**Aspect ratio**: 4:5 (portrait)  
**Usage**: Team section, testimonial attributions

### Image 3: Clinic Environment (3:2 landscape)
**Filename**: `public/images/clinic-space.jpg`  
**Prompt**: "Bright, modern physiotherapy treatment and rehabilitation space. Clean, open floor plan with a professional treatment table, resistance bands, light rehabilitation equipment (bands, balance boards, foam rollers), open floor space for exercise. Natural lighting from windows. Wooden or light flooring. Neutral, professional décor. No visible patients, dramatic expressions, medical procedures, bodybuilding equipment, anatomical graphics, or brand logos."

**Aspect ratio**: 3:2 (landscape)  
**Usage**: Why Choose Us section, or supporting content block

**Placeholder strategy**: Use neutral light-gray placeholder divs (`bg-muted/20`) with correct aspect ratios before images load. Prevent layout shift with CSS aspect-ratio or spacer divs.

---

## 5. Component Hierarchy & Structure

```
app/
├── layout.tsx                          # Root layout (fonts, theme, metadata)
├── page.tsx                            # Homepage (main landing page)
├── privacy/
│   └── page.tsx                        # Privacy policy page
├── accessibility/
│   └── page.tsx                        # Accessibility statement page
└── globals.css                         # Design tokens, theme, utilities

components/
├── layout/
│   ├── Header.tsx                      # Navigation header with logo
│   ├── Footer.tsx                      # Footer with links, info
│   └── StickyMobileBookCTA.tsx          # Mobile sticky booking bar
├── sections/
│   ├── HeroSection.tsx                 # Hero banner with CTA
│   ├── ServiceOverviewSection.tsx      # Service description
│   ├── AssessmentProcessSection.tsx    # 3-step process
│   ├── WhyChooseUsSection.tsx          # Clinic benefits
│   ├── SocialProofSection.tsx          # Patient testimonials & stories
│   ├── PricingAndFAQSection.tsx        # Pricing, FAQ accordion
│   └── CTASection.tsx                  # Final CTA before footer
├── booking/
│   ├── BookingDialog.tsx               # Main booking modal
│   ├── AssessmentForm.tsx              # Form component
│   └── BookingSuccess.tsx              # Success state display
├── ui/
│   ├── Button.tsx                      # (shadcn, pre-installed)
│   ├── Dialog.tsx                      # (shadcn modal)
│   ├── Input.tsx                       # (shadcn form input)
│   ├── Textarea.tsx                    # (shadcn form textarea)
│   ├── Select.tsx                      # (shadcn dropdown)
│   ├── Card.tsx                        # (shadcn card)
│   ├── Badge.tsx                       # (shadcn label/badge)
│   └── (other shadcn components)
└── common/
    ├── Logo.tsx                        # Northline logo SVG + wordmark
    ├── PatientStory.tsx                # Testimonial card component
    └── Accordion.tsx                   # FAQ accordion

lib/
├── utils.ts                            # (cn function, pre-installed)
├── analytics.ts                        # Analytics stub (logging only)
├── form-validation.ts                  # Zod schemas for form validation
└── form-utils.ts                       # Form helper functions

public/
├── images/
│   ├── hero-assessment.jpg             # (Generated)
│   ├── practitioner-maya.jpg           # (Generated)
│   └── clinic-space.jpg                # (Generated)
└── fonts/                              # (If self-hosting fonts)

data/
├── patient-stories.ts                  # Array of testimonials
├── faq-data.ts                         # FAQ items
└── pricing-data.ts                     # Service pricing
```

---

## 6. Logo & Branding

### Northline Logo Component
- **Location**: `components/common/Logo.tsx`
- **Style**: Inline SVG + text wordmark
- **Design**: Abstract "N" inspired by movement/progression (not medical symbols)
- **Colors**: Deep teal (`#0f766e`) + charcoal (`#1c1917`)
- **Variants**:
  - Header: Compact horizontal (approximately 32px height)
  - Footer: Slightly larger horizontal (approximately 40px height)
- **Accessibility**: Keep "Northline Physiotherapy Clinic" as visible HTML text (not embedded in SVG)

### Wordmark Structure
```
┌─────────────────────────────────┐
│  [N symbol]  Northline          │
│              Physiotherapy Clinic│
└─────────────────────────────────┘
```

---

## 7. Booking Dialog & Form Specification

### Dialog Behavior
- Opens via CTA click (any "Book Your Initial Assessment" button)
- Traps focus (Tab cycles through form elements only)
- Closes via close button (X) or dialog backdrop click (optional)
- Does NOT auto-close on success
- Success message persists until user manually closes

### Form Fields
| Field | Type | Required | Validation | Notes |
|-------|------|----------|-----------|-------|
| Name | Text | Yes | 2-50 chars, no special chars | Required |
| Email | Email | Yes | Valid email format | Required, not stored |
| Phone | Tel | Yes | Valid phone format (E.164 or local) | Required, not stored |
| Rehabilitation Goal | Textarea | Yes | 10-500 chars | What would you like help with? |
| Preferred Area/Service | Select | Yes | Predefined options | Dropdown: "Ankle/Foot", "Knee", "Hip", "Back", "Shoulder", "Neck/Spine", "General Wellness" |

### Form States
1. **Initial**: Empty, submit button enabled
2. **Typing**: Live validation feedback (optional), submit enabled
3. **Submitting**: Button disabled, loading spinner visible, no new submissions accepted
4. **Success**: 800ms delay, then show success message, hide form
5. **Reset**: After dialog close, clear form for next use

### Validation Rules
- All fields required
- Email format validation
- Phone number basic format (at least 10 digits)
- Name: alphanumeric + spaces + hyphens
- Goal text: 10-500 characters
- Service: required selection

### Success State
```
✓ Prototype assessment request received

This demonstration did not create a real physiotherapy 
appointment or send your information.
```

### Important Notes
- **No data logging**: Do not log patient name, email, phone, goal, or service selection
- **No storage**: Form submission is fully simulated
- **No external requests**: No API calls, no database writes
- **Analytics only**: Log event name + CTA source only (see Section 8)

---

## 8. Analytics Implementation

### Analytics Stub Location
**File**: `lib/analytics.ts`

### Stub Structure
```typescript
// Simple typed analytics helper
// Can be replaced with real provider later (Segment, Mixpanel, GA4, etc.)

interface AnalyticsEvent {
  eventName: string;
  source?: string;
  timestamp?: number;
}

export function trackEvent(event: AnalyticsEvent) {
  // In development: console.info only
  // Never log: name, email, phone, goal, or sensitive form data
  console.info(`[Analytics] ${event.eventName}`, { source: event.source });
}
```

### Events to Track
| Event | Trigger | Source Prop | When |
|-------|---------|-------------|------|
| `assessment_cta_clicked` | Any CTA click | CTA location (hero, sticky, section, etc.) | Immediately on click |
| `assessment_dialog_opened` | Dialog opens | CTA source | When dialog mounts |
| `assessment_request_submitted` | Form submission succeeds | CTA source | After 800ms simulated load |

### CTA Source Values
Use unique `source` identifiers for each CTA placement:
- `hero-cta`
- `sticky-mobile-cta`
- `why-choose-us-cta`
- `pricing-cta`
- `final-cta`
- etc.

### Implementation
Pass `source` as a prop to each CTA component. On click, call:
```typescript
trackEvent({ 
  eventName: 'assessment_cta_clicked', 
  source: 'hero-cta' 
});
```

---

## 9. Content & Copy

### Testimonials & Patient Stories
- **Count**: 3 patient stories + 1 featured testimonial
- **Fields per story**:
  - Name (first name only)
  - Goal (e.g., "Post-knee surgery recovery")
  - Story text (2-3 sentences, focused on physiotherapy experience)
  - Outcome (clear plan, understanding, gradual progress, attention, etc.)
- **UI Labels**: Mark each as "Fictional example" and include "Fictional patient experience" in attribution
- **Disclaimer**: Add prominent disclaimer below social-proof section explaining all stories are fictional
- **Hidden fields**: `isPrototype`, `consentStatus`, `approvedForMarketing` (kept in data, not displayed)

### Sections & Key Messages
1. **Hero**: "Move freely again. Without the guesswork."
2. **Service Overview**: What is an initial assessment?
3. **Assessment Process**: 3-step explanation
4. **Why Choose Us**: Benefits (expertise, plan clarity, one-on-one, progress adjustment)
5. **Patient Stories**: Testimonials + disclaimer
6. **Pricing & FAQ**: Service pricing, common questions
7. **Final CTA**: Reinforce booking action

### Privacy & Accessibility Pages
Both use the same header, footer, typography, colors as main site.

**Privacy page** (`/privacy`):
- Explain this is a fictional prototype
- Form does not transmit or store data
- No patient health records created
- No real appointments booked
- Warning: Do not enter sensitive medical information
- Note: Real clinic requires full privacy policy before launch

**Accessibility page** (`/accessibility`):
- Northline's commitment to accessible digital experiences
- Keyboard navigation supported
- Visible focus states
- Color contrast compliance
- Semantic structure
- Descriptive images
- Reduced-motion support
- Accessible form controls
- Note: Prototype requires formal accessibility audit before production

Both pages include a simple text link back to homepage (no CTA buttons).

---

## 10. Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px – 1024px
- **Desktop**: > 1024px

### Mobile-First Approach
Build for mobile first, then enhance with `md:` and `lg:` Tailwind prefixes.

### Key Responsive Changes
| Element | Mobile | Tablet | Desktop |
|---------|--------|--------|---------|
| Hero heading | 32px | 40px | 48px |
| Section padding | px-4, py-6 | px-6, py-8 | px-12, py-12 |
| Grid columns | 1 col | 2 cols | 3+ cols |
| Sticky CTA | Fixed bottom bar | Hidden or fixed | Hidden (desktop CTA visible) |
| Logo size | 28px | 32px | 36px |
| Font size (body) | 14px | 15px | 16px |

### Sticky Mobile CTA Bar
- Appears only on mobile (< 768px)
- Shows when hero CTA is out of view
- Hides when footer is within ~96px of viewport bottom
- Fixed position, full width, dark background
- Contains: Service info + CTA button

---

## 11. Implementation Phases

### Phase 1: Foundation (Days 1-2)
- [ ] Set up Next.js 16 project structure
- [ ] Install dependencies (shadcn/ui, react-hook-form, zod)
- [ ] Configure Tailwind v4 with design tokens
- [ ] Create root layout with fonts (Inter from Google Fonts)
- [ ] Create Logo component (SVG)
- [ ] Generate three images (or use placeholders)

### Phase 2: Layout Components (Days 2-3)
- [ ] Build Header with logo and navigation
- [ ] Build Footer with links, info
- [ ] Create analytics stub (`lib/analytics.ts`)
- [ ] Create form validation schema (`lib/form-validation.ts`)

### Phase 3: Hero & Main Sections (Days 3-4)
- [ ] Build HeroSection
- [ ] Build ServiceOverviewSection
- [ ] Build AssessmentProcessSection
- [ ] Build WhyChooseUsSection
- [ ] Build PricingAndFAQSection
- [ ] Build final CTASection

### Phase 4: Booking System (Days 4-5)
- [ ] Build BookingDialog (wrapper)
- [ ] Build AssessmentForm component
- [ ] Build BookingSuccess state
- [ ] Wire form validation and submission simulation
- [ ] Add 800ms loading state
- [ ] Connect analytics tracking

### Phase 5: Social Proof (Days 5-6)
- [ ] Create patient stories data (`data/patient-stories.ts`)
- [ ] Build PatientStory component
- [ ] Build SocialProofSection with disclaimer
- [ ] Add testimonial styling and layout

### Phase 6: Mobile & Accessibility (Days 6-7)
- [ ] Build StickyMobileBookCTA component
- [ ] Test all CTAs with analytics tracking
- [ ] Verify keyboard navigation
- [ ] Test focus management
- [ ] Verify color contrast (WCAG AA)
- [ ] Test reduced-motion support
- [ ] Responsive testing (mobile, tablet, desktop)

### Phase 7: Info Pages & Final Polish (Days 7-8)
- [ ] Build Privacy page (`/privacy`)
- [ ] Build Accessibility page (`/accessibility`)
- [ ] Verify all links work
- [ ] Final accessibility audit
- [ ] Final contrast verification
- [ ] Browser testing
- [ ] Performance optimization (image lazy loading, etc.)

---

## 12. Dependencies to Install

```bash
pnpm add react-hook-form zod @hookform/resolvers
```

**Pre-installed**:
- shadcn/ui (Button, Dialog, Input, Textarea, Select, Card, Badge)
- Tailwind CSS v4
- Next.js 16
- React 19.2
- TypeScript

---

## 13. Accessibility Checklist

- [ ] All text meets WCAG AA contrast (4.5:1 minimum)
- [ ] Keyboard navigation works (Tab through all interactive elements)
- [ ] Focus states visible on all buttons, links, form inputs
- [ ] Form labels associated with inputs (`htmlFor`)
- [ ] Dialog traps focus when open
- [ ] Semantic HTML used throughout (`<button>`, `<header>`, `<main>`, etc.)
- [ ] Image alt text present and descriptive
- [ ] Reduced-motion respected (`prefers-reduced-motion`)
- [ ] Error messages clear and associated with inputs
- [ ] Disabled states clear (visual + cursor)
- [ ] Dialog close button accessible

---

## 14. Testing Checklist

### Functional
- [ ] All CTAs open booking dialog
- [ ] Form validation works (required fields, formats)
- [ ] Form submission shows loading state then success message
- [ ] Dialog can close and reopen
- [ ] Form resets after dialog closes
- [ ] Analytics logs correct events
- [ ] Sticky CTA appears/hides correctly on scroll

### Responsive
- [ ] Mobile layout (< 768px) — single column, readable
- [ ] Tablet layout (768-1024px) — 2-column grids
- [ ] Desktop layout (> 1024px) — 3-column grids
- [ ] Images scale properly
- [ ] Typography readable at all sizes
- [ ] Sticky bar hidden on desktop

### Accessibility
- [ ] Keyboard navigation (Tab, Enter, Escape)
- [ ] Focus visible on all interactive elements
- [ ] Color contrast passes WCAG AA
- [ ] Screen reader compatible (semantic HTML)
- [ ] Reduced-motion honored

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## 15. Known Constraints & Notes

### What's NOT Included
- Real payment processing
- Real appointment booking system
- Real email notifications
- Real form storage or submission
- Authentication / user accounts
- CMS integration
- Blog or content management

### Prototype Limitations
- All form submissions are simulated (800ms delay, then success)
- No data persists between sessions
- No real analytics provider
- Analytics logs only to `console.info`
- Patient stories are fictional (clearly labeled)

### Future Enhancements (Post-Prototype)
- Connect to real appointment booking system (Calendly, Square Appointments, etc.)
- Integrate email service (Resend, SendGrid)
- Add real analytics (GA4, Segment, Mixpanel)
- Implement CMS for content management
- Add multi-language support
- Mobile app version
- Admin dashboard for clinic staff

---

## 16. Next Steps

1. **Review and approve this implementation plan**
2. **Generate the three images** (once approved)
3. **Begin Phase 1**: Project setup and foundation
4. **Progress through phases** sequentially
5. **Test thoroughly** at each phase checkpoint
6. **Deploy to Vercel** for preview and sharing

---

## Decisions Log

All clarifying decisions have been integrated into this plan:
- ✅ Image generation specifications (3 images, aspect ratios, prompts)
- ✅ Booking dialog behavior (manual close, simulated 800ms, no data storage)
- ✅ Mobile sticky CTA (hide before footer, responsive info bar)
- ✅ Analytics stub (console.info only, no external services)
- ✅ Testimonials (marked as fictional, disclaimer included)
- ✅ Privacy & Accessibility pages (separate routes, prototype disclaimers)
- ✅ Contrast verification (during build and final review)
- ✅ Logo (code-native SVG, no medical symbols)

---

**Status**: ✅ Ready for implementation  
**Approval needed**: Yes — please confirm this plan before building.
