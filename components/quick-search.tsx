"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, Calendar, Users, Compass } from "lucide-react"

const popularSearches = [
  "Red Fort Delhi",
  "Taj Mahal Agra",
  "Jaipur City Palace",
  "Goa Beaches",
  "Kerala Backwaters",
  "Rajasthan Heritage",
]

const quickActions = [
  {
    icon: Calendar,
    title: "Book Heritage Sites",
    description: "Reserve time slots at forts and monuments",
    href: "/booking",
  },
  {
    icon: Users,
    title: "Find Local Guides",
    description: "Connect with verified tour guides",
    href: "/guides",
  },
  {
    icon: Compass,
    title: "Plan Itinerary",
    description: "Create day-wise travel plans",
    href: "/planner",
  },
  {
    icon: MapPin,
    title: "Safety Updates",
    description: "Real-time location safety info",
    href: "/dashboard",
  },
]

export function QuickSearch() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // In a real app, this would navigate to search results
      console.log("Searching for:", searchQuery)
    }
  }

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Search Section */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-balance">Where would you like to explore safely?</h2>
            <p className="text-muted-foreground text-lg">
              Search for destinations, heritage sites, or activities with real-time safety information
            </p>

            <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search destinations, forts, museums..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-10 h-12 text-base"
                />
              </div>
              <Button size="lg" onClick={handleSearch} className="h-12 px-8">
                Search
              </Button>
            </div>

            {/* Popular Searches */}
            <div className="space-y-3">
              <p className="text-sm text-muted-foreground">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.map((search) => (
                  <Badge
                    key={search}
                    variant="secondary"
                    className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setSearchQuery(search)}
                  >
                    {search}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action) => {
              const Icon = action.icon
              return (
                <Card
                  key={action.title}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">{action.title}</h3>
                      <p className="text-sm text-muted-foreground">{action.description}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
