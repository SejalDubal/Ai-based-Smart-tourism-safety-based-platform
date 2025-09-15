import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, Globe } from "lucide-react"

const trustMetrics = [
  {
    icon: Shield,
    title: "Government Certified",
    description: "Officially recognized by Ministry of Tourism",
    badge: "Verified",
  },
  {
    icon: Award,
    title: "Industry Awards",
    description: "Best Travel Safety Platform 2024",
    badge: "Winner",
  },
  {
    icon: Users,
    title: "Trusted by Millions",
    description: "Over 2 million safe journeys completed",
    badge: "Popular",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "ISO 27001 certified security protocols",
    badge: "Certified",
  },
]

const partners = [
  "Ministry of Tourism",
  "Indian Railways",
  "State Tourism Boards",
  "Local Police Departments",
  "Emergency Services",
  "Heritage Conservation",
]

export function TrustIndicators() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Trusted by Travelers Worldwide</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our commitment to safety and excellence is recognized by leading organizations and millions of satisfied
            travelers
          </p>
        </div>

        {/* Trust Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustMetrics.map((metric) => {
            const Icon = metric.icon
            return (
              <Card key={metric.title} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <h3 className="font-semibold">{metric.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {metric.badge}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Partners */}
        <div className="bg-background rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-center mb-8">Official Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <div key={partner} className="text-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                <div className="text-sm font-medium text-muted-foreground">{partner}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
