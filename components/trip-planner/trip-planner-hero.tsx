"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, CalendarIcon, Users, Clock, Sparkles, Route } from "lucide-react"
import { format } from "date-fns"

export function TripPlannerHero() {
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [destination, setDestination] = useState("")
  const [travelers, setTravelers] = useState("2")

  return (
    <div className="relative bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Route className="h-8 w-8 text-amber-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Smart Trip Planner</h1>
          </div>

          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Create personalized itineraries with AI-powered recommendations, safety insights, and real-time updates
          </p>

          {/* Planning Form */}
          <Card className="bg-white/95 backdrop-blur-sm text-gray-900 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Destination
                  </label>
                  <Input
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    Start Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left bg-transparent">
                        {startDate ? format(startDate, "MMM dd") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={startDate} onSelect={setStartDate} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    End Date
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start text-left bg-transparent">
                        {endDate ? format(endDate, "MMM dd") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar mode="single" selected={endDate} onSelect={setEndDate} />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center">
                    <Users className="h-4 w-4 mr-1" />
                    Travelers
                  </label>
                  <Select value={travelers} onValueChange={setTravelers}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Person</SelectItem>
                      <SelectItem value="2">2 People</SelectItem>
                      <SelectItem value="3">3 People</SelectItem>
                      <SelectItem value="4">4 People</SelectItem>
                      <SelectItem value="5+">5+ People</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button className="flex-1 bg-cyan-600 hover:bg-cyan-700">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Generate AI Itinerary
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Route className="h-4 w-4 mr-2" />
                  Plan Manually
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Clock className="h-3 w-3 mr-1" />5 min setup
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <MapPin className="h-3 w-3 mr-1" />
                500+ destinations
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Sparkles className="h-3 w-3 mr-1" />
                AI-powered
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
