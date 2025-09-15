import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, Users, Calendar } from "lucide-react"
import Link from "next/link"

const destinations = [
  {
    id: 1,
    name: "Red Fort, Delhi",
    image: "/red-fort-delhi.png",
    rating: 4.8,
    safetyScore: 95,
    visitors: "2.5M+ yearly",
    category: "Heritage Site",
    description: "Magnificent Mughal fortress with rich history and stunning architecture.",
    availableSlots: 12,
  },
  {
    id: 2,
    name: "Taj Mahal, Agra",
    image: "/taj-mahal-agra-white-marble-monument.jpg",
    rating: 4.9,
    safetyScore: 98,
    visitors: "6M+ yearly",
    category: "World Heritage",
    description: "Iconic symbol of love and one of the Seven Wonders of the World.",
    availableSlots: 8,
  },
  {
    id: 3,
    name: "Jaipur City Palace",
    image: "/jaipur-city-palace-pink-architecture.jpg",
    rating: 4.7,
    safetyScore: 92,
    visitors: "1.8M+ yearly",
    category: "Royal Palace",
    description: "Stunning blend of Rajasthani and Mughal architecture in the Pink City.",
    availableSlots: 15,
  },
]

export function PopularDestinations() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-balance">Popular Safe Destinations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore top-rated destinations with verified safety scores and real-time availability
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <Card
              key={destination.id}
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{destination.category}</Badge>
                </div>
                <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-xs font-medium">{destination.safetyScore}% Safe</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{destination.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{destination.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm">{destination.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{destination.visitors}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{destination.availableSlots} slots today</span>
                  </div>
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button asChild className="flex-1">
                    <Link href="/booking">Book Now</Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1 bg-transparent">
                    <Link href="/guides">Find Guide</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" asChild>
            <Link href="/planner">Explore All Destinations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
