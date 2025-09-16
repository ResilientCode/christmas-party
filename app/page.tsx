import { ChristmasHeader } from "@/components/christmas-header"
import { EventDetails } from "@/components/event-details"
import { ActivityTimeline } from "@/components/activity-timeline"
import { VenueInfo } from "@/components/venue-info"
import { RSVPSection } from "@/components/rsvp-section"

export default function ChristmasPartyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <ChristmasHeader />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <EventDetails />
        <ActivityTimeline />
        <VenueInfo />
        <RSVPSection />
      </main>
    </div>
  )
}
