"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Star,
  Clock,
  Shield,
  Plus,
  Heart,
  Camera,
  Navigation,
  Filter,
  Search,
  TrendingUp,
  Users,
  Sparkles,
  ThumbsUp,
  Zap,
} from "lucide-react"

const nearbyAttractions = [
  {
    id: 1,
    name: "Red Fort",
    type: "Heritage",
    rating: 4.5,
    reviews: 12450,
    distance: "2.3 km",
    duration: "2-3 hours",
    safetyScore: 95,
    price: "₹50",
    image: "/red-fort-delhi.png",
    description: "UNESCO World Heritage Site showcasing Mughal architecture",
    highlights: ["UNESCO Site", "Audio Guide", "Light Show"],
    bestTime: "Morning",
    crowdLevel: "Moderate",
  },
  {
    id: 2,
    name: "India Gate",
    type: "Monument",
    rating: 4.3,
    reviews: 8920,
    distance: "1.8 km",
    duration: "1-2 hours",
    safetyScore: 98,
    price: "Free",
    image: "/india-gate.jpg",
    description: "War memorial and popular picnic spot",
    highlights: ["Free Entry", "Evening Views", "Street Food"],
    bestTime: "Evening",
    crowdLevel: "High",
  },
  {
    id: 3,
    name: "Humayun's Tomb",
    type: "Heritage",
    rating: 4.4,
    reviews: 6780,
    distance: "3.1 km",
    duration: "1.5-2 hours",
    safetyScore: 92,
    price: "₹40",
    image: "/humayuns-tomb.jpg",
    description: "Magnificent garden tomb and architectural marvel",
    highlights: ["Garden Views", "Photography", "Peaceful"],
    bestTime: "Morning",
    crowdLevel: "Low",
  },
  {
    id: 4,
    name: "Lotus Temple",
    type: "Religious",
    rating: 4.6,
    reviews: 9340,
    distance: "4.2 km",
    duration: "1-1.5 hours",
    safetyScore: 96,
    price: "Free",
    image: "/lotus-temple.jpg",
    description: "Architectural wonder and place of meditation",
    highlights: ["Unique Design", "Meditation", "Free Entry"],
    bestTime: "Afternoon",
    crowdLevel: "Moderate",
  },
  {
    id: 5,
    name: "Qutub Minar",
    type: "Heritage",
    rating: 4.2,
    reviews: 5670,
    distance: "5.8 km",
    duration: "2-3 hours",
    safetyScore: 90,
    price: "₹35",
    image: "/qutub-minar.jpg",
    description: "Tallest brick minaret in the world",
    highlights: ["UNESCO Site", "Historical", "Architecture"],
    bestTime: "Morning",
    crowdLevel: "Moderate",
  },
  {
    id: 6,
    name: "Chandni Chowk",
    type: "Market",
    rating: 4.0,
    reviews: 4520,
    distance: "2.8 km",
    duration: "2-4 hours",
    safetyScore: 85,
    price: "Free",
    image: "/chandni-chowk.jpg",
    description: "Historic market with authentic street food",
    highlights: ["Street Food", "Shopping", "Cultural"],
    bestTime: "Evening",
    crowdLevel: "Very High",
  },
]

const suggestedPlaces = [
  {
    id: 101,
    name: "Jama Masjid",
    type: "Religious",
    rating: 4.4,
    reviews: 7890,
    distance: "2.1 km",
    duration: "1-2 hours",
    safetyScore: 88,
    price: "Free",
    image: "/jama-masjid.jpg",
    description: "One of India's largest mosques with stunning architecture",
    highlights: ["Historic Architecture", "Panoramic Views", "Cultural Experience"],
    bestTime: "Morning",
    crowdLevel: "Moderate",
    recommendationReason: "Perfect complement to Red Fort visit",
    recommendationType: "combo",
    aiScore: 95,
  },
  {
    id: 102,
    name: "Raj Ghat",
    type: "Memorial",
    rating: 4.2,
    reviews: 5670,
    distance: "1.5 km",
    duration: "30-45 mins",
    safetyScore: 96,
    price: "Free",
    image: "/raj-ghat.jpg",
    description: "Memorial dedicated to Mahatma Gandhi",
    highlights: ["Peaceful", "Historical", "Garden Setting"],
    bestTime: "Morning",
    crowdLevel: "Low",
    recommendationReason: "Based on your interest in monuments",
    recommendationType: "preference",
    aiScore: 88,
  },
  {
    id: 103,
    name: "Akshardham Temple",
    type: "Religious",
    rating: 4.7,
    reviews: 15420,
    distance: "8.2 km",
    duration: "3-4 hours",
    safetyScore: 98,
    price: "Free",
    image: "/akshardham.jpg",
    description: "Modern architectural marvel with cultural exhibitions",
    highlights: ["Modern Architecture", "Light Show", "Cultural Exhibits"],
    bestTime: "Evening",
    crowdLevel: "High",
    recommendationReason: "Trending among visitors this week",
    recommendationType: "trending",
    aiScore: 92,
  },
  {
    id: 104,
    name: "Lodhi Gardens",
    type: "Park",
    rating: 4.3,
    reviews: 4320,
    distance: "3.8 km",
    duration: "1-2 hours",
    safetyScore: 94,
    price: "Free",
    image: "/lodhi-gardens.jpg",
    description: "Beautiful gardens with historical tombs",
    highlights: ["Nature Walk", "Photography", "Peaceful"],
    bestTime: "Morning",
    crowdLevel: "Low",
    recommendationReason: "Great for relaxation after busy sightseeing",
    recommendationType: "balance",
    aiScore: 85,
  },
  {
    id: 105,
    name: "National Museum",
    type: "Museum",
    rating: 4.1,
    reviews: 3450,
    distance: "2.8 km",
    duration: "2-3 hours",
    safetyScore: 96,
    price: "₹20",
    image: "/national-museum.jpg",
    description: "Extensive collection of Indian art and artifacts",
    highlights: ["Art Collection", "Educational", "Air Conditioned"],
    bestTime: "Afternoon",
    crowdLevel: "Low",
    recommendationReason: "Perfect indoor activity for hot weather",
    recommendationType: "weather",
    aiScore: 82,
  },
]

export function AttractionsList() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("distance")
  const [filterType, setFilterType] = useState("all")

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const filteredAttractions = nearbyAttractions
    .filter((attraction) => {
      const matchesSearch = attraction.name.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesFilter = filterType === "all" || attraction.type.toLowerCase() === filterType.toLowerCase()
      return matchesSearch && matchesFilter
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating
        case "distance":
          return Number.parseFloat(a.distance) - Number.parseFloat(b.distance)
        case "price":
          const priceA = a.price === "Free" ? 0 : Number.parseInt(a.price.replace("₹", ""))
          const priceB = b.price === "Free" ? 0 : Number.parseInt(b.price.replace("₹", ""))
          return priceA - priceB
        default:
          return 0
      }
    })

  const sortedSuggestedPlaces = suggestedPlaces.sort((a, b) => b.aiScore - a.aiScore)

  const getCrowdColor = (level: string) => {
    switch (level) {
      case "Low":
        return "text-green-600 bg-green-50"
      case "Moderate":
        return "text-yellow-600 bg-yellow-50"
      case "High":
        return "text-orange-600 bg-orange-50"
      case "Very High":
        return "text-red-600 bg-red-50"
      default:
        return "text-gray-600 bg-gray-50"
    }
  }

  const getRecommendationBadge = (type: string) => {
    switch (type) {
      case "combo":
        return { icon: ThumbsUp, color: "bg-blue-50 text-blue-700", label: "Great Combo" }
      case "trending":
        return { icon: TrendingUp, color: "bg-purple-50 text-purple-700", label: "Trending" }
      case "preference":
        return { icon: Sparkles, color: "bg-cyan-50 text-cyan-700", label: "For You" }
      case "balance":
        return { icon: Zap, color: "bg-green-50 text-green-700", label: "Balance" }
      case "weather":
        return { icon: Shield, color: "bg-orange-50 text-orange-700", label: "Weather Smart" }
      default:
        return { icon: Sparkles, color: "bg-gray-50 text-gray-700", label: "Suggested" }
    }
  }

  const renderAttractionCard = (attraction: any, isSuggested = false) => (
    <Card key={attraction.id} className="hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex space-x-4">
          <img
            src={attraction.image || "/placeholder.svg?height=100&width=100"}
            alt={attraction.name}
            className="w-24 h-24 rounded-lg object-cover"
          />

          <div className="flex-1 space-y-2">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold text-lg">{attraction.name}</h3>
                  {isSuggested && (
                    <Badge className={`text-xs ${getRecommendationBadge(attraction.recommendationType).color}`}>
                      {getRecommendationBadge(attraction.recommendationType).icon({ className: "h-3 w-3 mr-1" })}
                      {getRecommendationBadge(attraction.recommendationType).label}
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{attraction.description}</p>
                {isSuggested && (
                  <p className="text-xs text-cyan-600 mt-1 flex items-center">
                    <Sparkles className="h-3 w-3 mr-1" />
                    {attraction.recommendationReason}
                  </p>
                )}
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleFavorite(attraction.id)}
                className="text-muted-foreground hover:text-red-500"
              >
                <Heart className={`h-4 w-4 ${favorites.includes(attraction.id) ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">{attraction.type}</Badge>
              <Badge variant="outline" className="flex items-center space-x-1">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span>{attraction.rating}</span>
                <span className="text-xs">({attraction.reviews})</span>
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
                <span>{attraction.safetyScore}%</span>
              </Badge>
              {isSuggested && (
                <Badge variant="outline" className="flex items-center space-x-1 bg-cyan-50 text-cyan-700">
                  <Sparkles className="h-3 w-3" />
                  <span>AI: {attraction.aiScore}%</span>
                </Badge>
              )}
            </div>

            <div className="flex flex-wrap gap-1">
              {attraction.highlights.map((highlight: string) => (
                <Badge key={highlight} variant="outline" className="text-xs">
                  {highlight}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm">
                <span className="font-medium text-lg">{attraction.price}</span>
                <span className="text-muted-foreground">Best: {attraction.bestTime}</span>
                <Badge className={`text-xs ${getCrowdColor(attraction.crowdLevel)}`}>
                  <Users className="h-3 w-3 mr-1" />
                  {attraction.crowdLevel}
                </Badge>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Camera className="h-4 w-4 mr-1" />
                  Photos
                </Button>
                <Button variant="outline" size="sm">
                  <Navigation className="h-4 w-4 mr-1" />
                  Directions
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add to Trip
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5 text-cyan-600" />
          <span>Nearby Attractions</span>
        </CardTitle>

        {/* Search and Filters */}
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
              <SelectItem value="memorial">Memorial</SelectItem>
              <SelectItem value="park">Park</SelectItem>
              <SelectItem value="museum">Museum</SelectItem>
            </SelectContent>
          </Select>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-40">
              <TrendingUp className="h-4 w-4 mr-1" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="distance">Distance</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="price">Price</SelectItem>
              <SelectItem value="aiScore">AI Score</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="suggested" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="suggested" className="flex items-center space-x-1">
              <Sparkles className="h-4 w-4" />
              <span>Suggested</span>
            </TabsTrigger>
            <TabsTrigger value="list">List View</TabsTrigger>
            <TabsTrigger value="grid">Grid View</TabsTrigger>
          </TabsList>

          <TabsContent value="suggested" className="space-y-4 mt-4">
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-4 rounded-lg border">
              <div className="flex items-center space-x-2 mb-2">
                <Sparkles className="h-5 w-5 text-cyan-600" />
                <h3 className="font-semibold text-cyan-900">AI-Powered Recommendations</h3>
              </div>
              <p className="text-sm text-cyan-700">
                These places are specially selected based on your itinerary, preferences, and current trends.
              </p>
            </div>

            {sortedSuggestedPlaces.map((attraction) => renderAttractionCard(attraction, true))}
          </TabsContent>

          <TabsContent value="list" className="space-y-4 mt-4">
            {filteredAttractions.map((attraction) => renderAttractionCard(attraction, false))}
          </TabsContent>

          <TabsContent value="grid" className="mt-4">
            <div className="grid md:grid-cols-2 gap-4">
              {filteredAttractions.map((attraction) => (
                <Card key={attraction.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="relative">
                        <img
                          src={attraction.image || "/placeholder.svg?height=150&width=300"}
                          alt={attraction.name}
                          className="w-full h-32 rounded-lg object-cover"
                        />
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => toggleFavorite(attraction.id)}
                          className="absolute top-2 right-2 bg-white/80 hover:bg-white text-muted-foreground hover:text-red-500"
                        >
                          <Heart
                            className={`h-4 w-4 ${favorites.includes(attraction.id) ? "fill-red-500 text-red-500" : ""}`}
                          />
                        </Button>
                      </div>

                      <div>
                        <h3 className="font-semibold">{attraction.name}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{attraction.description}</p>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        <Badge variant="secondary">{attraction.type}</Badge>
                        <Badge variant="outline" className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span>{attraction.rating}</span>
                        </Badge>
                        <Badge variant="outline">{attraction.distance}</Badge>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="font-medium">{attraction.price}</span>
                        <Button size="sm">
                          <Plus className="h-4 w-4 mr-1" />
                          Add
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
