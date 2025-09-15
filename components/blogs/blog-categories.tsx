"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Utensils, Camera, MapPin, Plane, DollarSign, Users, Heart, TrendingUp } from "lucide-react"

const categories = [
  { name: "Safety Tips", count: 45, icon: Shield, color: "bg-red-100 text-red-800" },
  { name: "Food & Dining", count: 38, icon: Utensils, color: "bg-orange-100 text-orange-800" },
  { name: "Photography", count: 29, icon: Camera, color: "bg-purple-100 text-purple-800" },
  { name: "Destinations", count: 67, icon: MapPin, color: "bg-blue-100 text-blue-800" },
  { name: "Transportation", count: 23, icon: Plane, color: "bg-green-100 text-green-800" },
  { name: "Budget Travel", count: 34, icon: DollarSign, color: "bg-yellow-100 text-yellow-800" },
  { name: "Solo Travel", count: 28, icon: Users, color: "bg-pink-100 text-pink-800" },
  { name: "Cultural Guide", count: 41, icon: Heart, color: "bg-indigo-100 text-indigo-800" },
]

const trendingTopics = [
  "Winter Travel Safety",
  "Street Food Guide",
  "Budget Accommodations",
  "Cultural Festivals",
  "Photography Tips",
  "Solo Female Travel",
]

export function BlogCategories() {
  return (
    <div className="space-y-6">
      {/* Categories */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Categories</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {categories.map((category) => {
              const IconComponent = category.icon
              return (
                <Button key={category.name} variant="ghost" className="w-full justify-between hover:bg-gray-50">
                  <div className="flex items-center space-x-2">
                    <IconComponent className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{category.name}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </Button>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Trending Topics */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-amber-500" />
            <span>Trending Topics</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {trendingTopics.map((topic) => (
              <Badge
                key={topic}
                variant="outline"
                className="cursor-pointer hover:bg-cyan-50 hover:border-cyan-300 text-xs"
              >
                {topic}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Popular Authors */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Popular Authors</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { name: "Priya Sharma", articles: 12, avatar: "/author-priya.jpg" },
              { name: "Rajesh Kumar", articles: 8, avatar: "/author-rajesh.jpg" },
              { name: "Sarah Johnson", articles: 6, avatar: "/author-sarah.jpg" },
            ].map((author) => (
              <div key={author.name} className="flex items-center space-x-3">
                <img
                  src={author.avatar || "/placeholder.svg?height=32&width=32"}
                  alt={author.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="text-sm font-medium">{author.name}</div>
                  <div className="text-xs text-muted-foreground">{author.articles} articles</div>
                </div>
                <Button variant="outline" size="sm">
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
