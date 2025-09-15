"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Map, AlertTriangle, Users, MapPin, Layers, Maximize, RefreshCw, Zap } from "lucide-react"

const safetyAlerts = [
  {
    id: 1,
    type: "high",
    title: "Crowd Congestion",
    location: "India Gate",
    coordinates: { lat: 28.6129, lng: 77.2295 },
    severity: "High",
    time: "5 min ago",
    tourists: 45,
    description: "Heavy crowd buildup during evening hours",
  },
  {
    id: 2,
    type: "medium",
    title: "Weather Alert",
    location: "Red Fort",
    coordinates: { lat: 28.6562, lng: 77.241 },
    severity: "Medium",
    time: "12 min ago",
    tourists: 23,
    description: "Heavy rain warning issued",
  },
  {
    id: 3,
    type: "low",
    title: "Traffic Disruption",
    location: "Chandni Chowk",
    coordinates: { lat: 28.6506, lng: 77.2334 },
    severity: "Low",
    time: "18 min ago",
    tourists: 12,
    description: "Minor traffic delays on main route",
  },
]

const touristLocations = [
  { id: 1, name: "Group A", location: "Red Fort", count: 15, status: "safe" },
  { id: 2, name: "Group B", location: "India Gate", count: 28, status: "alert" },
  { id: 3, name: "Group C", location: "Lotus Temple", count: 12, status: "safe" },
  { id: 4, name: "Solo Travelers", location: "Various", count: 34, status: "monitoring" },
]

export function SafetyMap() {
  const [mapView, setMapView] = useState("safety")
  const [selectedAlert, setSelectedAlert] = useState<number | null>(null)

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe":
        return "text-green-600 bg-green-100"
      case "alert":
        return "text-red-600 bg-red-100"
      case "monitoring":
        return "text-yellow-600 bg-yellow-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <Card className="col-span-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Map className="h-5 w-5 text-cyan-600" />
            <span>Real-Time Safety Map</span>
          </CardTitle>

          <div className="flex items-center space-x-2">
            <Select value={mapView} onValueChange={setMapView}>
              <SelectTrigger className="w-32">
                <Layers className="h-4 w-4 mr-1" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="safety">Safety View</SelectItem>
                <SelectItem value="tourists">Tourist Tracking</SelectItem>
                <SelectItem value="guides">Guide Locations</SelectItem>
                <SelectItem value="incidents">Incident Reports</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <RefreshCw className="h-4 w-4 mr-1" />
              Refresh
            </Button>

            <Button variant="outline" size="sm">
              <Maximize className="h-4 w-4 mr-1" />
              Fullscreen
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Container */}
          <div className="lg:col-span-2">
            <div className="relative h-96 bg-gradient-to-br from-blue-50 to-green-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2">
                <Map className="h-12 w-12 text-gray-400 mx-auto" />
                <p className="text-gray-500 font-medium">Real-Time Safety Map</p>
                <p className="text-sm text-gray-400">Live tracking and monitoring system</p>
              </div>

              {/* Alert Markers */}
              <div className="absolute inset-0 pointer-events-none">
                {safetyAlerts.map((alert, index) => (
                  <div
                    key={alert.id}
                    className="absolute pointer-events-auto cursor-pointer"
                    style={{
                      left: `${20 + index * 25}%`,
                      top: `${30 + index * 15}%`,
                    }}
                    onClick={() => setSelectedAlert(alert.id)}
                  >
                    <div className={`relative ${selectedAlert === alert.id ? "scale-125" : ""} transition-transform`}>
                      <div
                        className={`w-6 h-6 ${getSeverityColor(alert.severity)} rounded-full flex items-center justify-center shadow-lg border-2 border-white`}
                      >
                        <AlertTriangle className="h-3 w-3 text-white" />
                      </div>
                      <div
                        className={`absolute -top-1 -right-1 w-3 h-3 ${getSeverityColor(alert.severity)} rounded-full animate-pulse`}
                      />
                    </div>
                  </div>
                ))}

                {/* Tourist Group Markers */}
                {touristLocations.map((group, index) => (
                  <div
                    key={group.id}
                    className="absolute pointer-events-auto cursor-pointer"
                    style={{
                      left: `${60 + index * 15}%`,
                      top: `${20 + index * 20}%`,
                    }}
                  >
                    <div className="relative">
                      <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                        <Users className="h-4 w-4 text-white" />
                      </div>
                      <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-amber-500 text-white text-xs flex items-center justify-center p-0">
                        {group.count}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Alerts Panel */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">Active Alerts</h3>
              <Badge variant="outline" className="text-xs">
                <Zap className="h-3 w-3 mr-1" />
                Live
              </Badge>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto">
              {safetyAlerts.map((alert) => (
                <Card
                  key={alert.id}
                  className={`cursor-pointer transition-all ${selectedAlert === alert.id ? "ring-2 ring-cyan-500" : ""}`}
                  onClick={() => setSelectedAlert(alert.id)}
                >
                  <CardContent className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Badge
                          className={`text-xs ${
                            alert.severity === "High"
                              ? "bg-red-100 text-red-800"
                              : alert.severity === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-blue-100 text-blue-800"
                          }`}
                        >
                          {alert.severity}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{alert.time}</span>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm">{alert.title}</h4>
                        <p className="text-xs text-muted-foreground">{alert.description}</p>
                      </div>

                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{alert.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="h-3 w-3" />
                          <span>{alert.tourists} tourists</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                          Investigate
                        </Button>
                        <Button size="sm" className="text-xs h-7">
                          Respond
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Tourist Groups */}
            <div className="space-y-3">
              <h3 className="font-semibold">Tourist Groups</h3>
              {touristLocations.map((group) => (
                <div key={group.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-sm">{group.name}</div>
                    <div className="text-xs text-muted-foreground">{group.location}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-sm">{group.count}</div>
                    <Badge className={`text-xs ${getStatusColor(group.status)}`}>{group.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
