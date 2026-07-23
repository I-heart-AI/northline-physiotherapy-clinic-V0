import { z } from 'zod'

/**
 * Zod schema for initial physiotherapy assessment form
 * All validations are for UX/client-side only (prototype)
 */

export const assessmentFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters')
    .regex(/^[a-zA-Z\s\-']+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),

  email: z
    .string()
    .email('Please enter a valid email address'),

  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits')
    .regex(/^[\d\s\+\-\(\)\.]+$/, 'Phone number contains invalid characters'),

  rehabilitationGoal: z
    .string()
    .min(10, 'Please describe your goal in at least 10 characters')
    .max(500, 'Goal description must be less than 500 characters'),

  preferredService: z
    .enum(
      ['ankle-foot', 'knee', 'hip', 'back', 'shoulder', 'neck-spine', 'general-wellness'],
      {
        errorMap: () => ({ message: 'Please select a service area' }),
      },
    ),
})

export type AssessmentFormData = z.infer<typeof assessmentFormSchema>

/**
 * Service area options for dropdown
 */
export const SERVICE_AREAS = [
  { value: 'ankle-foot', label: 'Ankle/Foot' },
  { value: 'knee', label: 'Knee' },
  { value: 'hip', label: 'Hip' },
  { value: 'back', label: 'Back' },
  { value: 'shoulder', label: 'Shoulder' },
  { value: 'neck-spine', label: 'Neck/Spine' },
  { value: 'general-wellness', label: 'General Wellness' },
] as const
