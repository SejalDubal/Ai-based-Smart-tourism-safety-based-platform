import { TripPlannerHero } from "@/components/trip-planner/trip-planner-hero"
import { InteractiveMap } from "@/components/trip-planner/interactive-map"
import { ItineraryPlanner } from "@/components/trip-planner/itinerary-planner"
import { AttractionsList } from "@/components/trip-planner/attractions-list"
import { TripSummary } from "@/components/trip-planner/trip-summary"
import { NearbyTripSuggestions } from "@/components/trip-planner/nearby-trip-suggestions"

export default function TripPlannerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-amber-50">
      <TripPlannerHero />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Map and Attractions */}
          <div className="lg:col-span-2 space-y-6">
            <InteractiveMap />
            <AttractionsList />
            <NearbyTripSuggestions />
          </div>

          {/* Right Column - Itinerary Planner */}
          <div className="space-y-6">
            <ItineraryPlanner />
            <TripSummary />
          </div>
        </div>
      </div>
    </div>
  )
}
