"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, BookOpen, TrendingUp, Users, Globe } from "lucide-react"

export function BlogsHero() {
  const [searchQuery, setSearchQuery] = useState("")

  const stats = [
    { icon: BookOpen, label: "Articles", value: "500+" },
    { icon: Users, label: "Contributors", value: "50+" },
    { icon: Globe, label: "Countries", value: "25+" },
    { icon: TrendingUp, label: "Monthly Readers", value: "100K+" },
  ]

  return (
    <div className="relative bg-gradient-to-r from-cyan-600 via-cyan-700 to-cyan-800 text-white">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <BookOpen className="h-8 w-8 text-amber-400" />
            <h1 className="text-4xl md:text-5xl font-bold">Travel Insights</h1>
          </div>

          <p className="text-xl text-cyan-100 max-w-2xl mx-auto">
            Discover expert travel tips, safety guides, cultural insights, and destination stories from experienced
            travelers and local experts
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search articles, destinations, tips..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-3 text-lg bg-white/95 backdrop-blur-sm text-gray-900 border-0 rounded-full"
              />
              <Button className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-cyan-600 hover:bg-cyan-700">
                Search
              </Button>
            </div>
          </div>

          {/* Popular Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            <span className="text-sm text-cyan-200">Popular:</span>
            {["Safety Tips", "Cultural Guide", "Budget Travel", "Solo Travel", "Food Guide"].map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 cursor-pointer"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat) => {
              const IconComponent = stat.icon
              return (
                <div key={stat.label} className="text-center">
                  <IconComponent className="h-8 w-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-cyan-200">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
