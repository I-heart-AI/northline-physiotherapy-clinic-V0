'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle2 } from 'lucide-react'

interface BookingSuccessProps {
  onClose: () => void
}

export function BookingSuccess({ onClose }: BookingSuccessProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="flex flex-col items-center justify-center py-8 px-4">
      <CheckCircle2 size={64} className="text-primary mb-4" />
      
      <h2 className="text-2xl font-bold text-foreground mb-2 text-center">
        Assessment Booked!
      </h2>
      
      <p className="text-sm text-muted text-center mb-6 max-w-sm">
        Thank you for booking your initial assessment. We&apos;ll be in touch soon to confirm your appointment details.
      </p>

      <div className="bg-secondary p-4 rounded-lg mb-6 w-full">
        <p className="text-xs text-muted mb-2">
          <span className="font-semibold text-foreground">Next Steps:</span>
        </p>
        <ul className="text-xs text-muted space-y-1 list-disc list-inside">
          <li>We&apos;ll send you a confirmation email shortly</li>
          <li>You can reschedule or modify your booking anytime</li>
          <li>Bring any relevant medical records to your appointment</li>
        </ul>
      </div>

      <p className="text-xs text-muted text-center mb-6">
        This dialog will close automatically. This is a prototype—no data is stored.
      </p>

      <Button
        onClick={onClose}
        className="bg-primary hover:bg-primary-light text-white"
      >
        Close
      </Button>
    </div>
  )
}
