'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { trackEvent } from '@/lib/analytics'
import { assessmentFormSchema } from '@/lib/form-validation'

interface AssessmentFormProps {
  onSubmit: (data: any) => Promise<void>
  isLoading: boolean
  source: string
}

export function AssessmentForm({ onSubmit, isLoading, source }: AssessmentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(assessmentFormSchema),
    mode: 'onBlur',
  })

  const [serviceArea, setServiceArea] = useState('')

  const serviceOptions = [
    { value: 'sports-injury', label: 'Sports Injury Recovery' },
    { value: 'post-surgical', label: 'Post-Surgical Rehabilitation' },
    { value: 'chronic-pain', label: 'Chronic Pain Management' },
    { value: 'mobility-improvement', label: 'Mobility Improvement' },
    { value: 'workplace-injury', label: 'Workplace Injury Recovery' },
    { value: 'general-assessment', label: 'General Assessment' },
    { value: 'other', label: 'Other' },
  ]

  const onSubmitForm = async (data: any) => {
    const formData = {
      ...data,
      serviceArea,
    }
    trackEvent('form_submitted', {
      source,
      serviceArea,
    })
    await onSubmit(formData)
  }

  const handleServiceChange = (value: string) => {
    setServiceArea(value)
    setValue('serviceArea', value)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
      {/* Name */}
      <div className="space-y-1">
        <label htmlFor="name" className="text-sm font-medium text-foreground">
          Full Name *
        </label>
        <Input
          id="name"
          placeholder="John Doe"
          {...register('fullName')}
          disabled={isLoading}
          className="bg-background"
        />
        {errors.fullName && (
          <p className="text-xs text-destructive">{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email *
        </label>
        <Input
          id="email"
          type="email"
          placeholder="john@example.com"
          {...register('email')}
          disabled={isLoading}
          className="bg-background"
        />
        {errors.email && (
          <p className="text-xs text-destructive">{errors.email.message}</p>
        )}
      </div>

      {/* Phone */}
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-foreground">
          Phone *
        </label>
        <Input
          id="phone"
          type="tel"
          placeholder="(555) 123-4567"
          {...register('phone')}
          disabled={isLoading}
          className="bg-background"
        />
        {errors.phone && (
          <p className="text-xs text-destructive">{errors.phone.message}</p>
        )}
      </div>

      {/* Service Area */}
      <div className="space-y-1">
        <label htmlFor="service" className="text-sm font-medium text-foreground">
          Service Area *
        </label>
        <Select value={serviceArea} onValueChange={handleServiceChange} disabled={isLoading}>
          <SelectTrigger id="service" className="bg-background">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            {serviceOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.serviceArea && (
          <p className="text-xs text-destructive">{errors.serviceArea.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Brief Description
        </label>
        <Textarea
          id="message"
          placeholder="Tell us about your situation (optional)"
          {...register('message')}
          disabled={isLoading}
          rows={3}
          className="bg-background resize-none"
        />
        {errors.message && (
          <p className="text-xs text-destructive">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-primary hover:bg-primary-light text-white"
      >
        {isLoading ? 'Booking...' : 'Complete Booking'}
      </Button>

      <p className="text-xs text-muted text-center">
        This is a prototype. No data is stored or transmitted.
      </p>
    </form>
  )
}
