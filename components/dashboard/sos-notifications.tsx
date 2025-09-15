"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { AlertTriangle, Phone, MapPin, User, Shield, CheckCircle } from "lucide-react"

const sosAlerts = [
  {
    id: 1,
    tourist: "Emma Wilson",
    avatar: "/tourist-emma.jpg",
    location: "Chandni Chowk Market",
    coordinates: { lat: 28.6506, lng: 77.2334 },
    type: "emergency",
    message: "Lost in crowded market, need immediate assistance",
    time: "2 min ago",
    status: "active",
    priority: "high",
    phone: "+1-555-0123",
  },
  {
    id: 2,
    tourist: "David Chen",
    avatar: "/tourist-david.jpg",
    location: "Red Fort Parking",
    coordinates: { lat: 28.6562, lng: 77.241 },
    type: "medical",
    message: "Feeling unwell, need medical attention",
    time: "8 min ago",
    status: "responding",
    priority: "high",
    phone: "+1-555-0456",
  },
  {
    id: 3,
    tourist: "Sarah Johnson",
    avatar: "/tourist-sarah.jpg",
    location: "India Gate",
    coordinates: { lat: 28.6129, lng: 77.2295 },
    type: "safety",
    message: "Suspicious activity reported nearby",
    time: "15 min ago",
    status: "resolved",
    priority: "medium",
    phone: "+1-555-0789",
  },
]

export function SOSNotifications() {
  const [alerts, setAlerts] = useState(sosAlerts)

  const handleRespond = (alertId: number) => {
    setAlerts(alerts.map((alert) => (alert.id === alertId ? { ...alert, status: "responding" } : alert)))
  }

  const handleResolve = (alertId: number) => {
    setAlerts(alerts.map((alert) => (alert.id === alertId ? { ...alert, status: "resolved" } : alert)))
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800 border-red-200"
      case "medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "low":
        return "bg-blue-100 text-blue-800 border-blue-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "text-red-600 bg-red-100"
      case "responding":
        return "text-yellow-600 bg-yellow-100"
      case "resolved":
        return "text-green-600 bg-green-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "emergency":
        return AlertTriangle
      case "medical":
        return Shield
      case "safety":
        return User
      default:
        return AlertTriangle
    }
  }

  const activeAlerts = alerts.filter((alert) => alert.status !== "resolved")
  const resolvedAlerts = alerts.filter((alert) => alert.status === "resolved")

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span>SOS Notifications</span>
          </div>
          <Badge className="bg-red-100 text-red-800">{activeAlerts.length} Active</Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Active Alerts */}
        {activeAlerts.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-sm text-red-600">Active Emergencies</h3>
            {activeAlerts.map((alert) => {
              const TypeIcon = getTypeIcon(alert.type)
              return (
                <Card
                  key={alert.id}
                  className={`border-l-4 ${
                    alert.priority === "high"
                      ? "border-l-red-500"
                      : alert.priority === "medium"
                        ? "border-l-yellow-500"
                        : "border-l-blue-500"
                  }`}
                >
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={alert.avatar || "/placeholder.svg"} alt={alert.tourist} />
                          <AvatarFallback>
                            {alert.tourist
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{alert.tourist}</div>
                          <div className="text-xs text-muted-foreground">{alert.time}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Badge className={`text-xs ${getPriorityColor(alert.priority)}`}>{alert.priority}</Badge>
                        <Badge className={`text-xs ${getStatusColor(alert.status)}`}>{alert.status}</Badge>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center space-x-1 text-sm">
                        <TypeIcon className="h-3 w-3 text-red-600" />
                        <span className="capitalize">{alert.type} Alert</span>
                      </div>

                      <p className="text-sm text-gray-700 bg-gray-50 p-2 rounded">{alert.message}</p>

                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{alert.location}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => handleRespond(alert.id)}
                        disabled={alert.status === "responding"}
                        className="flex-1"
                      >
                        <Phone className="h-3 w-3 mr-1" />
                        {alert.status === "responding" ? "Responding" : "Call"}
                      </Button>
                      <Button
                        size="sm"
                        onClick={() => handleResolve(alert.id)}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                      >
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Resolve
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        )}

        {/* No Active Alerts */}
        {activeAlerts.length === 0 && (
          <div className="text-center py-8">
            <Shield className="h-12 w-12 text-green-500 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">No active emergencies</p>
            <p className="text-xs text-muted-foreground">All tourists are safe</p>
          </div>
        )}

        {/* Recent Resolved */}
        {resolvedAlerts.length > 0 && (
          <div className="space-y-3 pt-4 border-t">
            <h3 className="font-semibold text-sm text-green-600">Recently Resolved</h3>
            {resolvedAlerts.slice(0, 2).map((alert) => (
              <div key={alert.id} className="flex items-center space-x-3 p-2 bg-green-50 rounded">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <div className="flex-1">
                  <div className="text-sm font-medium">{alert.tourist}</div>
                  <div className="text-xs text-muted-foreground">{alert.location}</div>
                </div>
                <div className="text-xs text-muted-foreground">{alert.time}</div>
              </div>
            ))}
          </div>
        )}

        {/* Emergency Contacts */}
        <div className="pt-4 border-t">
          <h3 className="font-semibold text-sm mb-3">Emergency Contacts</h3>
          <div className="space-y-2">
            <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
              <Phone className="h-3 w-3 mr-2" />
              Police: 100
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
              <Phone className="h-3 w-3 mr-2" />
              Medical: 108
            </Button>
            <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
              <Phone className="h-3 w-3 mr-2" />
              Tourist Helpline: 1363
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
