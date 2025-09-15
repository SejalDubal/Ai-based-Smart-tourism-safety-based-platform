import { HeroSection } from "@/components/hero-section"
import { QuickSearch } from "@/components/quick-search"
import { SafetyFeatures } from "@/components/safety-features"
import { PopularDestinations } from "@/components/popular-destinations"
import { TrustIndicators } from "@/components/trust-indicators"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <QuickSearch />
      <SafetyFeatures />
      <PopularDestinations />
      <TrustIndicators />
    </div>
  )
}
