"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Calendar,
  Clock,
  MapPin,
  Plus,
  Edit,
  Trash2,
  GripVertical,
  Star,
  Navigation,
  Camera,
  Utensils,
  Car,
  AlertCircle,
} from "lucide-react"

const sampleItinerary = [
  {
    day: 1,
    date: "Dec 15, 2024",
    activities: [
      {
        id: 1,
        time: "09:00",
        title: "Red Fort",
        type: "Heritage",
        duration: "2 hours",
        location: "Old Delhi",
        notes: "Start early to avoid crowds",
        cost: "₹50",
      },
      {
        id: 2,
        time: "12:00",
        title: "Lunch at Karim's",
        type: "Food",
        duration: "1 hour",
        location: "Jama Masjid",
        notes: "Famous for Mughlai cuisine",
        cost: "₹800",
      },
      {
        id: 3,
        time: "14:00",
        title: "Jama Masjid",
        type: "Religious",
        duration: "1 hour",
        location: "Old Delhi",
        notes: "Largest mosque in India",
        cost: "Free",
      },
      {
        id: 4,
        time: "16:00",
        title: "Chandni Chowk Shopping",
        type: "Shopping",
        duration: "2 hours",
        location: "Chandni Chowk",
        notes: "Buy souvenirs and spices",
        cost: "₹2000",
      },
    ],
  },
  {
    day: 2,
    date: "Dec 16, 2024",
    activities: [
      {
        id: 5,
        time: "10:00",
        title: "India Gate",
        type: "Monument",
        duration: "1 hour",
        location: "Central Delhi",
        notes: "Great for morning photos",
        cost: "Free",
      },
      {
        id: 6,
        time: "12:00",
        title: "National Museum",
        type: "Museum",
        duration: "2 hours",
        location: "Central Delhi",
        notes: "Rich collection of artifacts",
        cost: "₹20",
      },
      {
        id: 7,
        time: "15:00",
        title: "Humayun's Tomb",
        type: "Heritage",
        duration: "1.5 hours",
        location: "South Delhi",
        notes: "UNESCO World Heritage Site",
        cost: "₹40",
      },
    ],
  },
]

export function ItineraryPlanner() {
  const [itinerary, setItinerary] = useState(sampleItinerary)
  const [selectedDay, setSelectedDay] = useState(1)
  const [isEditing, setIsEditing] = useState(false)
  const [newActivity, setNewActivity] = useState({
    time: "",
    title: "",
    type: "",
    duration: "",
    location: "",
    notes: "",
    cost: "",
  })

  const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
      case "food":
        return Utensils
      case "heritage":
      case "monument":
      case "museum":
        return Camera
      case "religious":
        return MapPin
      case "shopping":
        return Star
      default:
        return MapPin
    }
  }

  const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case "food":
        return "bg-orange-100 text-orange-800"
      case "heritage":
      case "monument":
        return "bg-blue-100 text-blue-800"
      case "religious":
        return "bg-purple-100 text-purple-800"
      case "shopping":
        return "bg-green-100 text-green-800"
      case "museum":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const addActivity = () => {
    if (!newActivity.title || !newActivity.time) return

    const dayData = itinerary.find((d) => d.day === selectedDay)
    if (dayData) {
      const updatedItinerary = itinerary.map((day) =>
        day.day === selectedDay
          ? {
              ...day,
              activities: [
                ...day.activities,
                {
                  id: Date.now(),
                  ...newActivity,
                },
              ],
            }
          : day,
      )
      setItinerary(updatedItinerary)
      setNewActivity({
        time: "",
        title: "",
        type: "",
        duration: "",
        location: "",
        notes: "",
        cost: "",
      })
      setIsEditing(false)
    }
  }

  const removeActivity = (dayNum: number, activityId: number) => {
    const updatedItinerary = itinerary.map((day) =>
      day.day === dayNum
        ? {
            ...day,
            activities: day.activities.filter((activity) => activity.id !== activityId),
          }
        : day,
    )
    setItinerary(updatedItinerary)
  }

  const currentDay = itinerary.find((d) => d.day === selectedDay)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-cyan-600" />
          <span>Day-wise Itinerary</span>
        </CardTitle>

        {/* Day Selector */}
        <Tabs value={selectedDay.toString()} onValueChange={(value) => setSelectedDay(Number.parseInt(value))}>
          <TabsList className="grid w-full grid-cols-2">
            {itinerary.map((day) => (
              <TabsTrigger key={day.day} value={day.day.toString()}>
                Day {day.day}
              </TabsTrigger>
            ))}
          </TabsList>

          {itinerary.map((day) => (
            <TabsContent key={day.day} value={day.day.toString()} className="space-y-4 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">Day {day.day}</h3>
                  <p className="text-sm text-muted-foreground">{day.date}</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setIsEditing(!isEditing)}>
                  <Plus className="h-4 w-4 mr-1" />
                  Add Activity
                </Button>
              </div>

              {/* Add Activity Form */}
              {isEditing && (
                <Card className="bg-gray-50">
                  <CardContent className="p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium">Time</label>
                        <Input
                          type="time"
                          value={newActivity.time}
                          onChange={(e) => setNewActivity({ ...newActivity, time: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium">Duration</label>
                        <Input
                          placeholder="2 hours"
                          value={newActivity.duration}
                          onChange={(e) => setNewActivity({ ...newActivity, duration: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Activity Title</label>
                      <Input
                        placeholder="Activity name"
                        value={newActivity.title}
                        onChange={(e) => setNewActivity({ ...newActivity, title: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-sm font-medium">Type</label>
                        <Select
                          value={newActivity.type}
                          onValueChange={(value) => setNewActivity({ ...newActivity, type: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Heritage">Heritage</SelectItem>
                            <SelectItem value="Food">Food</SelectItem>
                            <SelectItem value="Shopping">Shopping</SelectItem>
                            <SelectItem value="Religious">Religious</SelectItem>
                            <SelectItem value="Museum">Museum</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium">Cost</label>
                        <Input
                          placeholder="₹500"
                          value={newActivity.cost}
                          onChange={(e) => setNewActivity({ ...newActivity, cost: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium">Location</label>
                      <Input
                        placeholder="Location"
                        value={newActivity.location}
                        onChange={(e) => setNewActivity({ ...newActivity, location: e.target.value })}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium">Notes</label>
                      <Textarea
                        placeholder="Additional notes..."
                        value={newActivity.notes}
                        onChange={(e) => setNewActivity({ ...newActivity, notes: e.target.value })}
                        rows={2}
                      />
                    </div>

                    <div className="flex space-x-2">
                      <Button onClick={addActivity} size="sm">
                        Add Activity
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)} size="sm">
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Activities List */}
              <div className="space-y-3">
                {day.activities.map((activity, index) => {
                  const IconComponent = getTypeIcon(activity.type)
                  return (
                    <Card key={activity.id} className="hover:shadow-sm transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                              <IconComponent className="h-4 w-4 text-cyan-600" />
                            </div>
                            {index < day.activities.length - 1 && <div className="w-px h-12 bg-gray-200" />}
                          </div>

                          <div className="flex-1 space-y-2">
                            <div className="flex items-start justify-between">
                              <div>
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium text-sm text-muted-foreground">{activity.time}</span>
                                  <Badge className={`text-xs ${getTypeColor(activity.type)}`}>{activity.type}</Badge>
                                </div>
                                <h4 className="font-semibold">{activity.title}</h4>
                                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                  <span className="flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {activity.duration}
                                  </span>
                                  <span className="flex items-center">
                                    <MapPin className="h-3 w-3 mr-1" />
                                    {activity.location}
                                  </span>
                                  <span className="font-medium text-gray-900">{activity.cost}</span>
                                </div>
                              </div>

                              <div className="flex items-center space-x-1">
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <GripVertical className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="icon" className="h-8 w-8">
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8 text-red-500 hover:text-red-700"
                                  onClick={() => removeActivity(day.day, activity.id)}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>

                            {activity.notes && (
                              <p className="text-sm text-muted-foreground bg-gray-50 p-2 rounded">{activity.notes}</p>
                            )}

                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Navigation className="h-3 w-3 mr-1" />
                                Directions
                              </Button>
                              <Button variant="outline" size="sm">
                                <Car className="h-3 w-3 mr-1" />
                                Book Transport
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Day Summary */}
              <Card className="bg-gradient-to-r from-cyan-50 to-amber-50">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-600">{day.activities.length}</div>
                        <div className="text-xs text-muted-foreground">Activities</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-amber-600">
                          ₹
                          {day.activities.reduce((sum, activity) => {
                            const cost =
                              activity.cost === "Free" ? 0 : Number.parseInt(activity.cost.replace("₹", "")) || 0
                            return sum + cost
                          }, 0)}
                        </div>
                        <div className="text-xs text-muted-foreground">Total Cost</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <AlertCircle className="h-4 w-4" />
                      <span>Estimated travel time: 45 mins</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </CardHeader>
    </Card>
  )
}
