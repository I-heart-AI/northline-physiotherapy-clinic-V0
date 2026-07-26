/**
 * Patient Stories & Testimonials
 * All stories are FICTIONAL and marked as such in the UI
 */

export interface PatientStory {
  id: string
  name: string
  goal: string
  story: string
  outcome: string
  isPrototype: boolean
  consentStatus: 'approved' | 'prototype'
  approvedForMarketing: boolean
  isFeatured?: boolean
}

export const patientStories: PatientStory[] = [
  {
    id: 'story-1',
    name: 'James',
    goal: 'Post-knee surgery recovery',
    story:
      'After my ACL surgery, I felt uncertain about what movements were safe during recovery. The initial assessment gave me clarity on my rehabilitation path.',
    outcome: 'Clear understanding of recovery phases, guided progression, and returned to light activities within weeks',
    isPrototype: true,
    consentStatus: 'prototype',
    approvedForMarketing: false,
    isFeatured: false,
  },
  {
    id: 'story-2',
    name: 'Sophie',
    goal: 'Chronic back pain relief',
    story:
      'I\'ve had back pain for years and tried various approaches. The physiotherapist explored the contributing factors and built a personalized plan that helped me understand what to work on.',
    outcome: 'Reduced pain levels, improved posture awareness, and regained confidence in daily activities',
    isPrototype: true,
    consentStatus: 'prototype',
    approvedForMarketing: false,
    isFeatured: false,
  },
  {
    id: 'story-3',
    name: 'Marcus',
    goal: 'Sports injury rehabilitation (shoulder)',
    story:
      'As an amateur runner, a shoulder injury sidelined me for months. The physiotherapist created a structured return-to-sport program that kept me motivated.',
    outcome: 'Gradual return to running, strengthened shoulder stability, and confidence to continue training',
    isPrototype: true,
    consentStatus: 'prototype',
    approvedForMarketing: false,
    isFeatured: false,
  },
  {
    id: 'featured-1',
    name: 'Alex',
    goal: 'General wellness and prevention',
    story:
      'I wanted to improve my mobility and prevent future injuries. The assessment identified areas of weakness and the physiotherapist gave me practical exercises to maintain and improve my overall fitness.',
    outcome: 'Increased flexibility, strength improvements, and a sustainable wellness routine',
    isPrototype: true,
    consentStatus: 'prototype',
    approvedForMarketing: false,
    isFeatured: true,
  },
]

/**
 * Disclaimer text for social proof section
 */
export const socialProofDisclaimer =
  'These patient stories are fictional examples created for demonstration purposes. This is a prototype website. Real patient experiences and outcomes may vary based on individual circumstances, treatment adherence, and clinical assessment. Please do not enter actual medical information into forms on this site.'
