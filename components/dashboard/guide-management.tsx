"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MapPin, Star, Phone, MessageCircle, Shield } from "lucide-react"

const activeGuides = [
  {
    id: 1,
    name: "Rajesh Kumar",
    avatar: "/guide-rajesh.jpg",
    location: "Red Fort",
    status: "active",
    rating: 4.9,
    tourists: 4,
    lastUpdate: "2 min ago",
  },
  {
    id: 2,
    name: "Priya Sharma",
    avatar: "/guide-priya.jpg",
    location: "Amber Fort",
    status: "active",
    rating: 4.8,
    tourists: 6,
    lastUpdate: "5 min ago",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    avatar: "/guide-mohammed.jpg",
    location: "Taj Mahal",
    status: "break",
    rating: 4.9,
    tourists: 0,
    lastUpdate: "15 min ago",
  },
  {
    id: 4,
    name: "Anita Patel",
    avatar: "/guide-anita.jpg",
    location: "Lotus Temple",
    status: "active",
    rating: 4.7,
    tourists: 3,
    lastUpdate: "8 min ago",
  },
]

export function GuideManagement() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-green-600 bg-green-100"
      case "break":
        return "text-yellow-600 bg-yellow-100"
      case "offline":
        return "text-gray-600 bg-gray-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const activeCount = activeGuides.filter((guide) => guide.status === "active").length
  const totalTourists = activeGuides.reduce((sum, guide) => sum + guide.tourists, 0)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Users className="h-5 w-5 text-cyan-600" />
            <span>Guide Management</span>
          </div>
          <Badge className="bg-cyan-100 text-cyan-800">{activeCount} Active</Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-cyan-50 rounded-lg">
            <div className="text-lg font-bold text-cyan-600">{activeCount}</div>
            <div className="text-xs text-muted-foreground">Active Guides</div>
          </div>
          <div className="text-center p-3 bg-amber-50 rounded-lg">
            <div className="text-lg font-bold text-amber-600">{totalTourists}</div>
            <div className="text-xs text-muted-foreground">Tourists Guided</div>
          </div>
        </div>

        {/* Active Guides List */}
        <div className="space-y-3">
          <h3 className="font-semibold text-sm">Active Guides</h3>
          {activeGuides.map((guide) => (
            <div key={guide.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={guide.avatar || "/placeholder.svg"} alt={guide.name} />
                    <AvatarFallback>
                      {guide.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div
                    className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                      guide.status === "active"
                        ? "bg-green-500"
                        : guide.status === "break"
                          ? "bg-yellow-500"
                          : "bg-gray-500"
                    }`}
                  />
                </div>

                <div>
                  <div className="font-medium text-sm">{guide.name}</div>
                  <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    <span>{guide.location}</span>
                    <span>•</span>
                    <span>{guide.lastUpdate}</span>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-1">
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs">{guide.rating}</span>
                </div>
                <Badge className={`text-xs ${getStatusColor(guide.status)}`}>{guide.status}</Badge>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="space-y-2 pt-4 border-t">
          <h3 className="font-semibold text-sm">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              <MessageCircle className="h-3 w-3 mr-1" />
              Broadcast
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              <Phone className="h-3 w-3 mr-1" />
              Emergency Call
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              <Shield className="h-3 w-3 mr-1" />
              Safety Check
            </Button>
            <Button variant="outline" size="sm" className="text-xs bg-transparent">
              <Users className="h-3 w-3 mr-1" />
              Assign Guide
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
