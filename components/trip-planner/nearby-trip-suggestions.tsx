"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Star, Users, Camera, Mountain, Building2, Heart, Plus } from "lucide-react"
import Image from "next/image"

const tripSuggestions = {
  "day-trips": [
    {
      id: 1,
      title: "Golden Triangle Express",
      location: "Delhi → Agra → Jaipur",
      duration: "3 Days",
      distance: "560 km",
      rating: 4.8,
      reviews: 2847,
      price: "₹12,500",
      image: "/taj-mahal-agra-white-marble-monument.jpg",
      highlights: ["Taj Mahal", "Red Fort", "Hawa Mahal", "Amber Fort"],
      category: "Heritage",
      difficulty: "Easy",
      bestTime: "Oct-Mar",
    },
    {
      id: 2,
      title: "Rishikesh Adventure",
      location: "Delhi → Rishikesh",
      duration: "2 Days",
      distance: "240 km",
      rating: 4.6,
      reviews: 1523,
      price: "₹8,900",
      image: "/beautiful-tourist-destination-with-ancient-fort-an.jpg",
      highlights: ["River Rafting", "Yoga Ashrams", "Lakshman Jhula", "Beatles Ashram"],
      category: "Adventure",
      difficulty: "Moderate",
      bestTime: "Sep-Apr",
    },
    {
      id: 3,
      title: "Shimla Hill Station",
      location: "Delhi → Shimla",
      duration: "3 Days",
      distance: "350 km",
      rating: 4.4,
      reviews: 3241,
      price: "₹15,200",
      image: "/amber-fort-jaipur.jpg",
      highlights: ["Mall Road", "Toy Train", "Kufri", "Christ Church"],
      category: "Hill Station",
      difficulty: "Easy",
      bestTime: "Mar-Jun, Oct-Feb",
    },
  ],
  weekend: [
    {
      id: 4,
      title: "Neemrana Fort Palace",
      location: "Delhi → Neemrana",
      duration: "2 Days",
      distance: "120 km",
      rating: 4.7,
      reviews: 892,
      price: "₹18,500",
      image: "/red-fort-delhi.png",
      highlights: ["Heritage Hotel", "Zip Lining", "Royal Dining", "Vintage Car Museum"],
      category: "Luxury",
      difficulty: "Easy",
      bestTime: "Oct-Mar",
    },
    {
      id: 5,
      title: "Mathura Vrindavan",
      location: "Delhi → Mathura",
      duration: "2 Days",
      distance: "150 km",
      rating: 4.5,
      reviews: 1647,
      price: "₹6,800",
      image: "/beautiful-tourist-destination-with-ancient-fort-an.jpg",
      highlights: ["Krishna Janmabhoomi", "Banke Bihari Temple", "Prem Mandir", "Yamuna Aarti"],
      category: "Spiritual",
      difficulty: "Easy",
      bestTime: "Oct-Mar",
    },
  ],
  offbeat: [
    {
      id: 6,
      title: "Spiti Valley Circuit",
      location: "Delhi → Spiti",
      duration: "7 Days",
      distance: "780 km",
      rating: 4.9,
      reviews: 567,
      price: "₹35,000",
      image: "/amber-fort-jaipur.jpg",
      highlights: ["Key Monastery", "Chandratal Lake", "Kaza Village", "Pin Valley"],
      category: "Adventure",
      difficulty: "Challenging",
      bestTime: "Jun-Sep",
    },
    {
      id: 7,
      title: "Rann of Kutch",
      location: "Delhi → Kutch",
      duration: "4 Days",
      distance: "920 km",
      rating: 4.6,
      reviews: 743,
      price: "₹22,400",
      image: "/taj-mahal-agra-white-marble-monument.jpg",
      highlights: ["White Desert", "Rann Utsav", "Handicrafts", "Flamingo Watching"],
      category: "Cultural",
      difficulty: "Moderate",
      bestTime: "Nov-Feb",
    },
  ],
}

const categoryIcons = {
  Heritage: Building2,
  Adventure: Mountain,
  "Hill Station": Mountain,
  Luxury: Heart,
  Spiritual: Heart,
  Cultural: Camera,
}

export function NearbyTripSuggestions() {
  const [activeTab, setActiveTab] = useState("day-trips")

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800"
      case "Moderate":
        return "bg-yellow-100 text-yellow-800"
      case "Challenging":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Heritage: "bg-amber-100 text-amber-800",
      Adventure: "bg-green-100 text-green-800",
      "Hill Station": "bg-blue-100 text-blue-800",
      Luxury: "bg-purple-100 text-purple-800",
      Spiritual: "bg-orange-100 text-orange-800",
      Cultural: "bg-pink-100 text-pink-800",
    }
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-cyan-600" />
          Nearby Trip Suggestions
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Discover amazing destinations within reach of your current location
        </p>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="day-trips">Day Trips</TabsTrigger>
            <TabsTrigger value="weekend">Weekend</TabsTrigger>
            <TabsTrigger value="offbeat">Offbeat</TabsTrigger>
          </TabsList>

          {Object.entries(tripSuggestions).map(([key, trips]) => (
            <TabsContent key={key} value={key} className="mt-4">
              <div className="grid gap-4">
                {trips.map((trip) => {
                  const CategoryIcon = categoryIcons[trip.category as keyof typeof categoryIcons]

                  return (
                    <Card key={trip.id} className="overflow-hidden hover:shadow-md transition-shadow">
                      <div className="flex">
                        <div className="relative w-32 h-24 flex-shrink-0">
                          <Image
                            src={trip.image || "/placeholder.svg"}
                            alt={trip.title}
                            fill
                            className="object-cover"
                          />
                          <Badge className={`absolute top-2 left-2 text-xs ${getCategoryColor(trip.category)}`}>
                            <CategoryIcon className="h-3 w-3 mr-1" />
                            {trip.category}
                          </Badge>
                        </div>

                        <div className="flex-1 p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h4 className="font-semibold text-sm">{trip.title}</h4>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <MapPin className="h-3 w-3" />
                                {trip.location}
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-sm text-cyan-600">{trip.price}</p>
                              <p className="text-xs text-muted-foreground">per person</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 mb-2 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {trip.duration}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {trip.distance}
                            </span>
                            <span className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              {trip.rating}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              {trip.reviews}
                            </span>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              <Badge variant="outline" className={`text-xs ${getDifficultyColor(trip.difficulty)}`}>
                                {trip.difficulty}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                Best: {trip.bestTime}
                              </Badge>
                            </div>
                            <Button size="sm" variant="outline" className="h-7 text-xs bg-transparent">
                              <Plus className="h-3 w-3 mr-1" />
                              Add to Trip
                            </Button>
                          </div>

                          <div className="mt-2">
                            <p className="text-xs text-muted-foreground">
                              <span className="font-medium">Highlights:</span> {trip.highlights.slice(0, 3).join(", ")}
                              {trip.highlights.length > 3 && "..."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}
