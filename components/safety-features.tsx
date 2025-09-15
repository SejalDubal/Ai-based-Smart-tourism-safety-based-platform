import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, MapPin, Phone, AlertTriangle, Users, Clock } from "lucide-react"

const safetyFeatures = [
  {
    icon: Shield,
    title: "Real-time Safety Monitoring",
    description: "Live updates on safety conditions, crowd levels, and security alerts for all destinations.",
    badge: "AI-Powered",
  },
  {
    icon: MapPin,
    title: "Safe Zone Mapping",
    description: "Interactive maps showing safe areas, emergency services, and recommended routes.",
    badge: "GPS Enabled",
  },
  {
    icon: Phone,
    title: "Emergency SOS System",
    description: "One-tap emergency assistance with location sharing to local authorities and contacts.",
    badge: "24/7 Support",
  },
  {
    icon: AlertTriangle,
    title: "Smart Risk Assessment",
    description: "AI analyzes weather, crowd data, and local conditions to provide safety recommendations.",
    badge: "Predictive",
  },
  {
    icon: Users,
    title: "Verified Guide Network",
    description: "All guides are background-checked with digital ID verification and real-time tracking.",
    badge: "Trusted",
  },
  {
    icon: Clock,
    title: "Live Activity Tracking",
    description: "Share your itinerary with trusted contacts and get automatic check-in reminders.",
    badge: "Family Safe",
  },
]

export function SafetyFeatures() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="w-fit mx-auto">
            <Shield className="h-3 w-3 mr-1" />
            Safety First Technology
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Advanced Safety Features for Peace of Mind</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our comprehensive safety ecosystem combines AI technology, real-time monitoring, and verified networks to
            ensure your travels are both exciting and secure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {safetyFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Safety Stats */}
        <div className="mt-16 bg-primary/5 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">99.8%</div>
              <div className="text-sm text-muted-foreground mt-1">Safety Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground mt-1">Emergency Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">{"<"}30s</div>
              <div className="text-sm text-muted-foreground mt-1">Emergency Response</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground mt-1">Partner Authorities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
