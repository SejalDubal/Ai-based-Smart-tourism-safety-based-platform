"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Users, MapPin, AlertTriangle, Shield, TrendingUp, TrendingDown, Activity, Clock } from "lucide-react"

const stats = [
  {
    title: "Active Tourists",
    value: "2,847",
    change: "+12%",
    trend: "up",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
  },
  {
    title: "Safety Alerts",
    value: "3",
    change: "-25%",
    trend: "down",
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-100",
  },
  {
    title: "Active Guides",
    value: "156",
    change: "+8%",
    trend: "up",
    icon: Shield,
    color: "text-green-600",
    bgColor: "bg-green-100",
  },
  {
    title: "Monitored Locations",
    value: "89",
    change: "+2%",
    trend: "up",
    icon: MapPin,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
  },
]

const systemHealth = [
  { name: "GPS Tracking", status: 98, color: "bg-green-500" },
  { name: "Communication", status: 95, color: "bg-green-500" },
  { name: "Alert System", status: 100, color: "bg-green-500" },
  { name: "Database", status: 92, color: "bg-yellow-500" },
]

export function RealTimeStats() {
  return (
    <div className="space-y-6">
      {/* Main Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const IconComponent = stat.icon
          const TrendIcon = stat.trend === "up" ? TrendingUp : TrendingDown

          return (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <IconComponent className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <Badge
                    variant={stat.trend === "up" ? "default" : "secondary"}
                    className={`${stat.trend === "up" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    <TrendIcon className="h-3 w-3 mr-1" />
                    {stat.change}
                  </Badge>
                </div>
                <div className="mt-4">
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.title}</div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* System Health */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-cyan-600" />
              <span>System Health</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {systemHealth.map((system) => (
              <div key={system.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>{system.name}</span>
                  <span className="font-medium">{system.status}%</span>
                </div>
                <Progress value={system.status} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-amber-600" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { time: "2 min ago", event: "New tourist check-in at Red Fort", type: "info" },
                { time: "5 min ago", event: "Safety alert resolved in Chandni Chowk", type: "success" },
                { time: "12 min ago", event: "Guide verification completed", type: "info" },
                { time: "18 min ago", event: "Emergency response activated", type: "warning" },
              ].map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div
                    className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === "success"
                        ? "bg-green-500"
                        : activity.type === "warning"
                          ? "bg-yellow-500"
                          : activity.type === "error"
                            ? "bg-red-500"
                            : "bg-blue-500"
                    }`}
                  />
                  <div className="flex-1">
                    <div className="text-sm">{activity.event}</div>
                    <div className="text-xs text-muted-foreground">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
