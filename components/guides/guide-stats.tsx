import { Card, CardContent } from "@/components/ui/card"
import { Users, Star, MapPin, Languages } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "1,200+",
    label: "Verified Guides",
    description: "Background checked professionals",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    description: "Based on 50K+ reviews",
  },
  {
    icon: MapPin,
    value: "200+",
    label: "Cities Covered",
    description: "Across India and beyond",
  },
  {
    icon: Languages,
    value: "25+",
    label: "Languages",
    description: "Multilingual support",
  },
]

export function GuideStats() {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="font-semibold">{stat.label}</div>
                    <div className="text-sm text-muted-foreground">{stat.description}</div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
