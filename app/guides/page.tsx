import { GuideHero } from "@/components/guides/guide-hero"
import { GuideFilters } from "@/components/guides/guide-filters"
import { GuideGrid } from "@/components/guides/guide-grid"
import { GuideStats } from "@/components/guides/guide-stats"

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background">
      <GuideHero />
      <GuideStats />
      <div className="container px-4 mx-auto py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <GuideFilters />
          </div>
          <div className="lg:col-span-3">
            <GuideGrid />
          </div>
        </div>
      </div>
    </div>
  )
}
