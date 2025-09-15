import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Shield, MapPin } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-card via-background to-muted py-20 lg:py-32">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                <Shield className="h-3 w-3 mr-1" />
                AI-Powered Safety First
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Smart Tourist Safety & <span className="text-primary">Trip Planner</span>
              </h1>
              <p className="text-xl text-muted-foreground text-pretty max-w-2xl">
                Discover amazing destinations with confidence. Our AI-powered platform ensures your safety while helping
                you create unforgettable travel experiences with verified guides and real-time updates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="/planner">Start Planning Trip</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8 bg-transparent">
                <Link href="/guides">Find Verified Guides</Link>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Safe Travelers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Verified Guides</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">200+</div>
                <div className="text-sm text-muted-foreground">Safe Destinations</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
              <img
                src="/beautiful-tourist-destination-with-ancient-fort-an.jpg"
                alt="Beautiful tourist destination with ancient fort and mountains"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Floating safety indicators */}
            <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Safe Zone</span>
              </div>
            </div>

            <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Live Location Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
