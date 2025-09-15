import { BookingHero } from "@/components/booking/booking-hero"
import { DestinationSelector } from "@/components/booking/destination-selector"
import { BookingCalendar } from "@/components/booking/booking-calendar"
import { TimeSlotSelector } from "@/components/booking/time-slot-selector"
import { BookingSummary } from "@/components/booking/booking-summary"

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-background">
      <BookingHero />
      <div className="container px-4 mx-auto py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <DestinationSelector />
            <BookingCalendar />
            <TimeSlotSelector />
          </div>
          <div className="lg:col-span-1">
            <BookingSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
