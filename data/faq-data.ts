/**
 * FAQ items for Northline Physiotherapy Clinic
 */

export interface FAQItem {
  id: string
  question: string
  answer: string
}

export const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What happens during an initial assessment?',
    answer:
      'During your initial assessment, we conduct a thorough evaluation of your movement, strength, flexibility, and any pain or limitations. We discuss your goals and medical history to develop a personalized treatment plan tailored to your needs.',
  },
  {
    id: 'faq-2',
    question: 'How long does treatment typically take?',
    answer:
      'Recovery timelines vary depending on your condition and goals. Most clients see noticeable improvements within 4-8 weeks with consistent treatment and home exercise adherence. We reassess regularly and adjust your plan as needed.',
  },
  {
    id: 'faq-3',
    question: 'Do I need a referral from my doctor?',
    answer:
      'While not always required, we recommend consulting with your GP before starting physiotherapy, especially if you have a new injury or ongoing medical condition. Many insurance plans may require a referral for coverage.',
  },
  {
    id: 'faq-4',
    question: 'Can physiotherapy help with chronic pain?',
    answer:
      'Yes. Physiotherapy can be very effective for chronic pain management through movement retraining, strengthening, flexibility work, and education. We work with you to identify movement patterns and develop sustainable strategies.',
  },
  {
    id: 'faq-5',
    question: 'What should I bring to my appointment?',
    answer:
      'Please bring any relevant medical records, imaging results (X-rays, MRI), insurance details, and a list of current medications. Wear comfortable clothing that allows easy movement. Arrive 5-10 minutes early to complete intake forms.',
  },
  {
    id: 'faq-6',
    question: 'How often should I come in for treatment?',
    answer:
      'Frequency depends on your condition and goals. We typically recommend starting with 2-3 sessions per week, then adjusting based on progress. We\'ll discuss an appropriate schedule during your initial assessment.',
  },
]
