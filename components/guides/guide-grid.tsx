"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Languages, Shield, Award, Clock, Users, MessageCircle, Heart, ChevronDown } from "lucide-react"

const guides = [
  {
    id: 1,
    name: "Rajesh Kumar",
    avatar: "/guide-rajesh.jpg",
    rating: 4.9,
    reviews: 234,
    location: "Delhi",
    languages: ["English", "Hindi", "French"],
    specializations: ["Heritage Sites", "Cultural Tours"],
    experience: "8 years",
    price: 1500,
    verified: true,
    responseTime: "< 1 hour",
    completedTours: 1200,
    description:
      "Expert in Mughal architecture and Delhi's rich history. Passionate about sharing stories of ancient India.",
    badges: ["Top Rated", "Heritage Expert"],
    availability: "Available Today",
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "/guide-priya.jpg",
    rating: 4.8,
    reviews: 189,
    location: "Jaipur",
    languages: ["English", "Hindi", "German"],
    specializations: ["Royal Palaces", "Photography"],
    experience: "6 years",
    price: 1200,
    verified: true,
    responseTime: "< 2 hours",
    completedTours: 890,
    description: "Photography enthusiast specializing in capturing the Pink City's royal heritage and vibrant culture.",
    badges: ["Photography Pro", "Local Expert"],
    availability: "Available Tomorrow",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    avatar: "/guide-mohammed.jpg",
    rating: 4.9,
    reviews: 312,
    location: "Agra",
    languages: ["English", "Hindi", "Arabic", "Urdu"],
    specializations: ["World Heritage", "Architecture"],
    experience: "12 years",
    price: 2000,
    verified: true,
    responseTime: "< 30 min",
    completedTours: 1800,
    description: "Taj Mahal specialist with deep knowledge of Mughal architecture and Islamic art history.",
    badges: ["Super Guide", "Taj Expert"],
    availability: "Available Today",
  },
  {
    id: 4,
    name: "Anita Patel",
    avatar: "/guide-anita.jpg",
    rating: 4.7,
    reviews: 156,
    location: "Mumbai",
    languages: ["English", "Hindi", "Gujarati"],
    specializations: ["Food Tours", "Local Markets"],
    experience: "5 years",
    price: 1000,
    verified: true,
    responseTime: "< 1 hour",
    completedTours: 650,
    description: "Food enthusiast who knows every street food corner and hidden culinary gem in Mumbai.",
    badges: ["Food Expert", "Local Insider"],
    availability: "Available Today",
  },
  {
    id: 5,
    name: "David Wilson",
    avatar: "/guide-david.jpg",
    rating: 4.8,
    reviews: 98,
    location: "Goa",
    languages: ["English", "Portuguese", "Hindi"],
    specializations: ["Beach Tours", "Colonial History"],
    experience: "4 years",
    price: 1800,
    verified: true,
    responseTime: "< 2 hours",
    completedTours: 420,
    description: "British expat with extensive knowledge of Goa's Portuguese colonial heritage and beach culture.",
    badges: ["Beach Expert", "History Buff"],
    availability: "Available Tomorrow",
  },
  {
    id: 6,
    name: "Lakshmi Nair",
    avatar: "/guide-lakshmi.jpg",
    rating: 4.9,
    reviews: 267,
    location: "Kerala",
    languages: ["English", "Malayalam", "Tamil"],
    specializations: ["Backwaters", "Ayurveda", "Spice Tours"],
    experience: "9 years",
    price: 1400,
    verified: true,
    responseTime: "< 1 hour",
    completedTours: 1100,
    description: "Kerala native specializing in backwater cruises, Ayurvedic traditions, and spice plantation tours.",
    badges: ["Backwater Expert", "Wellness Guide"],
    availability: "Available Today",
  },
]

export function GuideGrid() {
  const [sortBy, setSortBy] = useState("rating")
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (guideId: number) => {
    setFavorites((prev) => (prev.includes(guideId) ? prev.filter((id) => id !== guideId) : [...prev, guideId]))
  }

  const sortedGuides = [...guides].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "experience":
        return Number.parseInt(b.experience) - Number.parseInt(a.experience)
      default:
        return 0
    }
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Available Guides</h2>
          <p className="text-muted-foreground">{guides.length} verified guides found</p>
        </div>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="experience">Most Experienced</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Guide Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {sortedGuides.map((guide) => (
          <Card key={guide.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardContent className="p-6">
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={guide.avatar || "/placeholder.svg"} alt={guide.name} />
                        <AvatarFallback>
                          {guide.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      {guide.verified && (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                          <Shield className="h-3 w-3 text-primary-foreground" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{guide.name}</h3>
                      <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{guide.location}</span>
                        <span>•</span>
                        <span>{guide.experience} experience</span>
                      </div>
                    </div>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(guide.id)}
                    className="text-muted-foreground hover:text-red-500"
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(guide.id) ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{guide.rating}</span>
                    <span className="text-sm text-muted-foreground">({guide.reviews} reviews)</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <Users className="h-3 w-3 inline mr-1" />
                    {guide.completedTours} tours
                  </div>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-1">
                  {guide.badges.map((badge) => (
                    <Badge key={badge} variant="secondary" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                  <Badge variant={guide.availability === "Available Today" ? "default" : "outline"} className="text-xs">
                    {guide.availability}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground line-clamp-2">{guide.description}</p>

                {/* Specializations */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-1 text-sm">
                    <Award className="h-3 w-3 text-muted-foreground" />
                    <span className="font-medium">Specializes in:</span>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {guide.specializations.map((spec) => (
                      <Badge key={spec} variant="outline" className="text-xs">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="flex items-center space-x-2 text-sm">
                  <Languages className="h-3 w-3 text-muted-foreground" />
                  <span>{guide.languages.join(", ")}</span>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="space-y-1">
                    <div className="font-semibold text-lg">₹{guide.price}/day</div>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>Responds {guide.responseTime}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageCircle className="h-3 w-3 mr-1" />
                      Message
                    </Button>
                    <Button size="sm">Book Now</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          <ChevronDown className="h-4 w-4 mr-2" />
          Load More Guides
        </Button>
      </div>
    </div>
  )
}
