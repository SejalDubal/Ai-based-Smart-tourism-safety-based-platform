"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Map,
  MapPin,
  Search,
  Filter,
  Star,
  Clock,
  Camera,
  Utensils,
  Building,
  TreePine,
  Shield,
  Navigation,
  Layers,
  Plus,
} from "lucide-react"

const attractions = [
  {
    id: 1,
    name: "Red Fort",
    type: "Heritage",
    rating: 4.5,
    distance: "2.3 km",
    duration: "2-3 hours",
    safetyScore: 95,
    coordinates: { lat: 28.6562, lng: 77.241 },
    price: "₹50",
    image: "/red-fort-delhi.png",
    description: "UNESCO World Heritage Site and symbol of India's rich history",
  },
  {
    id: 2,
    name: "India Gate",
    type: "Monument",
    rating: 4.3,
    distance: "1.8 km",
    duration: "1-2 hours",
    safetyScore: 98,
    coordinates: { lat: 28.6129, lng: 77.2295 },
    price: "Free",
    image: "/india-gate.jpg",
    description: "War memorial and popular evening destination",
  },
  {
    id: 3,
    name: "Humayun's Tomb",
    type: "Heritage",
    rating: 4.4,
    distance: "3.1 km",
    duration: "1.5-2 hours",
    safetyScore: 92,
    coordinates: { lat: 28.5933, lng: 77.2507 },
    price: "₹40",
    image: "/humayuns-tomb.jpg",
    description: "Magnificent Mughal architecture and garden tomb",
  },
  {
    id: 4,
    name: "Lotus Temple",
    type: "Religious",
    rating: 4.6,
    distance: "4.2 km",
    duration: "1-1.5 hours",
    safetyScore: 96,
    coordinates: { lat: 28.5535, lng: 77.2588 },
    price: "Free",
    image: "/lotus-temple.jpg",
    description: "Architectural marvel and place of worship",
  },
  {
    id: 5,
    name: "Chandni Chowk",
    type: "Market",
    rating: 4.2,
    distance: "2.8 km",
    duration: "2-4 hours",
    safetyScore: 85,
    coordinates: { lat: 28.6506, lng: 77.2334 },
    price: "Free",
    image: "/chandni-chowk.jpg",
    description: "Historic market with street food and shopping",
  },
]

export function InteractiveMap() {
  const [selectedAttraction, setSelectedAttraction] = useState<number | null>(null)
  const [mapView, setMapView] = useState("satellite")
  const [filterType, setFilterType] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredAttractions = attractions.filter((attraction) => {
    const matchesSearch = attraction.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFilter = filterType === "all" || attraction.type.toLowerCase() === filterType.toLowerCase()
    return matchesSearch && matchesFilter
  })

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "heritage":
      case "monument":
        return Building
      case "religious":
        return TreePine
      case "market":
        return Utensils
      default:
        return MapPin
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Map className="h-5 w-5 text-cyan-600" />
            <span>Interactive Map</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Navigation className="h-4 w-4 mr-1" />
              My Location
            </Button>
            <Select value={mapView} onValueChange={setMapView}>
              <SelectTrigger className="w-32">
                <Layers className="h-4 w-4 mr-1" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="satellite">Satellite</SelectItem>
                <SelectItem value="street">Street</SelectItem>
                <SelectItem value="terrain">Terrain</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search attractions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-1" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="heritage">Heritage</SelectItem>
              <SelectItem value="monument">Monument</SelectItem>
              <SelectItem value="religious">Religious</SelectItem>
              <SelectItem value="market">Market</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        {/* Map Container */}
        <div className="relative h-96 bg-gradient-to-br from-green-100 to-blue-100 border-2 border-dashed border-gray-300 flex items-center justify-center">
          <div className="text-center space-y-2">
            <Map className="h-12 w-12 text-gray-400 mx-auto" />
            <p className="text-gray-500 font-medium">Interactive Map View</p>
            <p className="text-sm text-gray-400">Map integration would be implemented here</p>
          </div>

          {/* Map Pins Overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {filteredAttractions.map((attraction, index) => {
              const IconComponent = getTypeIcon(attraction.type)
              return (
                <div
                  key={attraction.id}
                  className="absolute pointer-events-auto cursor-pointer"
                  style={{
                    left: `${20 + index * 15}%`,
                    top: `${30 + index * 10}%`,
                  }}
                  onClick={() => setSelectedAttraction(attraction.id)}
                >
                  <div
                    className={`relative ${selectedAttraction === attraction.id ? "scale-125" : ""} transition-transform`}
                  >
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <IconComponent className="h-4 w-4 text-white" />
                    </div>
                    {selectedAttraction === attraction.id && (
                      <div className="absolute -top-2 -right-2 w-4 h-4 bg-amber-500 rounded-full animate-pulse" />
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Attraction Details */}
        {selectedAttraction && (
          <div className="p-4 border-t bg-gray-50">
            {(() => {
              const attraction = attractions.find((a) => a.id === selectedAttraction)
              if (!attraction) return null

              return (
                <div className="flex items-start space-x-4">
                  <img
                    src={attraction.image || "/placeholder.svg?height=80&width=80"}
                    alt={attraction.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{attraction.name}</h3>
                        <p className="text-sm text-muted-foreground">{attraction.description}</p>
                      </div>
                      <Button size="sm">
                        <Plus className="h-4 w-4 mr-1" />
                        Add to Trip
                      </Button>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{attraction.type}</Badge>
                      <Badge variant="outline" className="flex items-center space-x-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span>{attraction.rating}</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{attraction.distance}</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{attraction.duration}</span>
                      </Badge>
                      <Badge variant="outline" className="flex items-center space-x-1">
                        <Shield className="h-3 w-3 text-green-600" />
                        <span>{attraction.safetyScore}% Safe</span>
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-medium text-lg">{attraction.price}</span>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Camera className="h-4 w-4 mr-1" />
                          Photos
                        </Button>
                        <Button variant="outline" size="sm">
                          <Navigation className="h-4 w-4 mr-1" />
                          Directions
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
