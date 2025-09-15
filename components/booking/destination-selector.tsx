"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Star, Search } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Red Fort, Delhi",
    image: "/red-fort-delhi.png",
    rating: 4.8,
    price: 35,
    category: "UNESCO Heritage",
    location: "Delhi",
    safetyScore: 95,
    availableSlots: 12,
    description: "Magnificent Mughal fortress with rich history",
  },
  {
    id: 2,
    name: "Taj Mahal, Agra",
    image: "/taj-mahal-agra-white-marble-monument.jpg",
    rating: 4.9,
    price: 50,
    category: "World Wonder",
    location: "Agra",
    safetyScore: 98,
    availableSlots: 8,
    description: "Iconic symbol of love and architectural marvel",
  },
  {
    id: 3,
    name: "Jaipur City Palace",
    image: "/jaipur-city-palace-pink-architecture.jpg",
    rating: 4.7,
    price: 30,
    category: "Royal Palace",
    location: "Jaipur",
    safetyScore: 92,
    availableSlots: 15,
    description: "Stunning blend of Rajasthani and Mughal architecture",
  },
  {
    id: 4,
    name: "Amber Fort, Jaipur",
    image: "/amber-fort-jaipur.jpg",
    rating: 4.6,
    price: 25,
    category: "Hill Fort",
    location: "Jaipur",
    safetyScore: 90,
    availableSlots: 20,
    description: "Majestic fort overlooking Maota Lake",
  },
]

export function DestinationSelector() {
  const [selectedDestination, setSelectedDestination] = useState<number | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDestinations = destinations.filter(
    (dest) =>
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5" />
          <span>Select Destination</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Destination Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filteredDestinations.map((destination) => (
            <div
              key={destination.id}
              className={`relative cursor-pointer rounded-lg border-2 transition-all ${
                selectedDestination === destination.id
                  ? "border-primary bg-primary/5"
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => setSelectedDestination(destination.id)}
            >
              <div className="p-4 space-y-3">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold">{destination.name}</h3>
                    <p className="text-sm text-muted-foreground">{destination.description}</p>
                  </div>
                  <img
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span>{destination.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>{destination.safetyScore}% Safe</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">₹{destination.price}</div>
                    <div className="text-xs text-muted-foreground">per person</div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Badge variant="secondary">{destination.category}</Badge>
                  <div className="text-xs text-muted-foreground">{destination.availableSlots} slots available</div>
                </div>
              </div>

              {selectedDestination === destination.id && (
                <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {selectedDestination && (
          <div className="p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-primary font-medium">
              Great choice! {destinations.find((d) => d.id === selectedDestination)?.name} is ready for booking.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
