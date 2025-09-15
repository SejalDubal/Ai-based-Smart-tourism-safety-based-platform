import { Badge } from "@/components/ui/badge"
import { Users, Shield, Award } from "lucide-react"

export function GuideHero() {
  return (
    <section className="bg-gradient-to-r from-secondary/10 via-background to-primary/10 py-16">
      <div className="container px-4 mx-auto text-center space-y-6">
        <Badge variant="secondary" className="w-fit mx-auto">
          <Users className="h-3 w-3 mr-1" />
          Verified Guide Network
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold text-balance">
          Find Your Perfect <span className="text-primary">Travel Guide</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Connect with verified, experienced local guides who know the best spots, hidden gems, and safety protocols for
          an unforgettable journey.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="h-4 w-4 text-green-500" />
            <span>Background Verified</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Award className="h-4 w-4 text-blue-500" />
            <span>Certified Professionals</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Users className="h-4 w-4 text-purple-500" />
            <span>Local Experts</span>
          </div>
        </div>
      </div>
    </section>
  )
}
