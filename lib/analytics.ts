/**
 * Analytics Stub for Northline Physiotherapy Clinic
 * 
 * This is a simple analytics helper that logs events to console only.
 * Can be replaced with a real provider (Segment, Mixpanel, GA4, etc.) later.
 * 
 * IMPORTANT: Never logs sensitive form data (name, email, phone, goal, service selection)
 */

export interface AnalyticsEvent {
  eventName: 'assessment_cta_clicked' | 'assessment_dialog_opened' | 'assessment_request_submitted'
  source?: string
  timestamp?: number
}

export function trackEvent(event: AnalyticsEvent): void {
  // Add timestamp if not provided
  const eventWithTimestamp: AnalyticsEvent = {
    ...event,
    timestamp: event.timestamp || Date.now(),
  }

  // Log to console (development)
  console.info(`[Northline Analytics] ${event.eventName}`, {
    source: event.source,
    timestamp: new Date(eventWithTimestamp.timestamp).toISOString(),
  })

  // TODO: Replace with real analytics provider
  // Example providers:
  // - Google Analytics 4 (gtag)
  // - Segment (analytics.track)
  // - Mixpanel (mixpanel.track)
  // - PostHog (posthog.capture)
}
