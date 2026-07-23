/**
 * Pricing data for Northline Physiotherapy Clinic services
 */

export interface PricingTier {
  id: string
  name: string
  description: string
  price: number
  duration: string
  features: string[]
}

export const pricingTiers: PricingTier[] = [
  {
    id: 'initial-assessment',
    name: 'Initial Assessment',
    description: 'Comprehensive evaluation and personalized treatment plan',
    price: 95,
    duration: '60 minutes',
    features: [
      'Movement and strength evaluation',
      'Medical history review',
      'Personalized treatment plan',
      'Home exercise prescription',
      'Insurance documentation',
    ],
  },
  {
    id: 'standard-session',
    name: 'Standard Treatment Session',
    description: 'Ongoing therapy and rehabilitation',
    price: 75,
    duration: '45 minutes',
    features: [
      'Targeted treatment techniques',
      'Progressive rehabilitation',
      'Manual therapy as needed',
      'Exercise instruction and progression',
      'Progress tracking',
    ],
  },
  {
    id: 'extended-session',
    name: 'Extended Session',
    description: 'For complex cases or comprehensive treatment',
    price: 110,
    duration: '60 minutes',
    features: [
      'In-depth treatment and assessment',
      'Advanced rehabilitation techniques',
      'Detailed movement analysis',
      'Comprehensive exercise program',
      'Nutritional guidance',
    ],
  },
]

/**
 * Discount packages
 */
export interface PackageDeal {
  id: string
  name: string
  sessionCount: number
  regularPrice: number
  packagePrice: number
  savingsPercent: number
  description: string
}

export const packageDeals: PackageDeal[] = [
  {
    id: 'package-5',
    name: '5-Session Package',
    sessionCount: 5,
    regularPrice: 375,
    packagePrice: 350,
    savingsPercent: 7,
    description: 'Save $25 compared to regular pricing',
  },
  {
    id: 'package-10',
    name: '10-Session Package',
    sessionCount: 10,
    regularPrice: 750,
    packagePrice: 700,
    savingsPercent: 7,
    description: 'Save $50 compared to regular pricing',
  },
]
