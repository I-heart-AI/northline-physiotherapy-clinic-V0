'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { AssessmentForm } from './AssessmentForm'
import { BookingSuccess } from './BookingSuccess'

interface BookingDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  source: string
}

export function BookingDialog({ isOpen, onOpenChange, source }: BookingDialogProps) {
  const [step, setStep] = useState<'form' | 'success'>('form')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (data: any) => {
    setIsLoading(true)
    // Simulate 800ms loading
    await new Promise((resolve) => setTimeout(resolve, 800))
    setIsLoading(false)
    setStep('success')
  }

  const handleClose = () => {
    setStep('form')
    onOpenChange(false)
  }

  const handleSuccess = () => {
    handleClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg">
        {step === 'form' ? (
          <>
            <DialogHeader>
              <DialogTitle>Book Your Initial Assessment</DialogTitle>
              <DialogDescription>
                Let us understand your needs and create a personalized recovery plan.
              </DialogDescription>
            </DialogHeader>
            <AssessmentForm 
              onSubmit={handleSubmit} 
              isLoading={isLoading}
              source={source}
            />
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Assessment Booked</DialogTitle>
            </DialogHeader>
            <BookingSuccess onClose={handleSuccess} />
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
