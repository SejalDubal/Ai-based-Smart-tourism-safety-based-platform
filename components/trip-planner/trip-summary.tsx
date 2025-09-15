"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Calendar,
  MapPin,
  Clock,
  DollarSign,
  Users,
  Shield,
  Download,
  Share,
  Edit,
  Star,
  Camera,
  Utensils,
  Car,
  Plane,
} from "lucide-react"

const tripSummary = {
  destination: "Delhi, India",
  duration: "2 Days",
  travelers: 2,
  totalCost: 2950,
  safetyScore: 92,
  activities: {
    heritage: 3,
    food: 2,
    shopping: 1,
    religious: 1,
    museum: 1,
  },
  transportation: {
    walking: "2.5 km",
    metro: "8 stations",
    taxi: "3 rides",
  },
  highlights: [
    "UNESCO World Heritage Sites",
    "Authentic Mughlai Cuisine",
    "Traditional Markets",
    "Historical Architecture",
  ],
}

export function TripSummary() {
  const activityTypes = [
    { type: "Heritage", count: tripSummary.activities.heritage, icon: Camera, color: "bg-blue-100 text-blue-800" },
    { type: "Food", count: tripSummary.activities.food, icon: Utensils, color: "bg-orange-100 text-orange-800" },
    { type: "Shopping", count: tripSummary.activities.shopping, icon: Star, color: "bg-green-100 text-green-800" },
    {
      type: "Religious",
      count: tripSummary.activities.religious,
      icon: MapPin,
      color: "bg-purple-100 text-purple-800",
    },
    { type: "Museum", count: tripSummary.activities.museum, icon: Camera, color: "bg-indigo-100 text-indigo-800" },
  ]

  return (
    <div className="space-y-6">
      {/* Trip Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-cyan-600" />
            <span>Trip Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <MapPin className="h-6 w-6 text-cyan-600 mx-auto mb-1" />
              <div className="font-semibold">{tripSummary.destination}</div>
              <div className="text-sm text-muted-foreground">Destination</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Clock className="h-6 w-6 text-amber-600 mx-auto mb-1" />
              <div className="font-semibold">{tripSummary.duration}</div>
              <div className="text-sm text-muted-foreground">Duration</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <Users className="h-6 w-6 text-green-600 mx-auto mb-1" />
              <div className="font-semibold">{tripSummary.travelers} People</div>
              <div className="text-sm text-muted-foreground">Travelers</div>
            </div>
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <DollarSign className="h-6 w-6 text-purple-600 mx-auto mb-1" />
              <div className="font-semibold">₹{tripSummary.totalCost}</div>
              <div className="text-sm text-muted-foreground">Total Cost</div>
            </div>
          </div>

          {/* Safety Score */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium flex items-center">
                <Shield className="h-4 w-4 text-green-600 mr-1" />
                Safety Score
              </span>
              <span className="text-sm font-semibold">{tripSummary.safetyScore}%</span>
            </div>
            <Progress value={tripSummary.safetyScore} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Excellent safety rating based on location analysis and real-time data
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Activity Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Activity Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {activityTypes
              .filter((activity) => activity.count > 0)
              .map((activity) => {
                const IconComponent = activity.icon
                return (
                  <div key={activity.type} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <IconComponent className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{activity.type}</span>
                    </div>
                    <Badge className={`text-xs ${activity.color}`}>
                      {activity.count} {activity.count === 1 ? "activity" : "activities"}
                    </Badge>
                  </div>
                )
              })}
          </div>
        </CardContent>
      </Card>

      {/* Transportation */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <Car className="h-5 w-5 text-cyan-600" />
            <span>Transportation</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Walking Distance</span>
              <span className="text-sm font-medium">{tripSummary.transportation.walking}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Metro Stations</span>
              <span className="text-sm font-medium">{tripSummary.transportation.metro}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Taxi Rides</span>
              <span className="text-sm font-medium">{tripSummary.transportation.taxi}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trip Highlights */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <Star className="h-5 w-5 text-amber-500" />
            <span>Trip Highlights</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {tripSummary.highlights.map((highlight, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-600 rounded-full" />
                <span className="text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button className="w-full bg-cyan-600 hover:bg-cyan-700">
          <Download className="h-4 w-4 mr-2" />
          Download Itinerary
        </Button>
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline">
            <Share className="h-4 w-4 mr-2" />
            Share Trip
          </Button>
          <Button variant="outline">
            <Edit className="h-4 w-4 mr-2" />
            Edit Plan
          </Button>
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-cyan-50 to-amber-50">
        <CardContent className="p-4">
          <h3 className="font-semibold mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Plane className="h-4 w-4 mr-2" />
              Book Flights
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Car className="h-4 w-4 mr-2" />
              Reserve Transportation
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start">
              <Camera className="h-4 w-4 mr-2" />
              Find Local Guides
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
