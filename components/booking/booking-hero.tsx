import { Badge } from "@/components/ui/badge"
import { Calendar, Shield, Clock } from "lucide-react"

export function BookingHero() {
  return (
    <section className="bg-gradient-to-r from-primary/10 via-background to-secondary/10 py-16">
      <div className="container px-4 mx-auto text-center space-y-6">
        <Badge variant="secondary" className="w-fit mx-auto">
          <Calendar className="h-3 w-3 mr-1" />
          Smart Booking System
        </Badge>
        <h1 className="text-4xl lg:text-5xl font-bold text-balance">
          Book Your <span className="text-primary">Heritage Experience</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
          Reserve time slots at India's most iconic forts, monuments, and heritage sites with guaranteed safety and
          skip-the-line access.
        </p>

        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <div className="flex items-center space-x-2 text-sm">
            <Shield className="h-4 w-4 text-green-500" />
            <span>Safety Verified</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Clock className="h-4 w-4 text-blue-500" />
            <span>Skip the Line</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="h-4 w-4 text-purple-500" />
            <span>Flexible Booking</span>
          </div>
        </div>
      </div>
    </section>
  )
}
