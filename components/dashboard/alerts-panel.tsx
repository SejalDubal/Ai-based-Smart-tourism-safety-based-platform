"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, AlertTriangle, Info, CheckCircle, Clock } from "lucide-react"

const systemAlerts = [
  {
    id: 1,
    type: "warning",
    title: "High Crowd Density",
    message: "India Gate area experiencing unusual crowd buildup",
    time: "5 min ago",
    priority: "medium",
    status: "active",
  },
  {
    id: 2,
    type: "info",
    title: "Weather Update",
    message: "Light rain expected in Central Delhi area",
    time: "12 min ago",
    priority: "low",
    status: "active",
  },
  {
    id: 3,
    type: "success",
    title: "System Maintenance",
    message: "Scheduled maintenance completed successfully",
    time: "1 hour ago",
    priority: "low",
    status: "resolved",
  },
  {
    id: 4,
    type: "error",
    title: "Communication Issue",
    message: "Temporary connectivity issue with Sector 7 resolved",
    time: "2 hours ago",
    priority: "high",
    status: "resolved",
  },
]

export function AlertsPanel() {
  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return AlertTriangle
      case "error":
        return AlertTriangle
      case "success":
        return CheckCircle
      case "info":
        return Info
      default:
        return Bell
    }
  }

  const getAlertColor = (type: string) => {
    switch (type) {
      case "warning":
        return "text-yellow-600 bg-yellow-100"
      case "error":
        return "text-red-600 bg-red-100"
      case "success":
        return "text-green-600 bg-green-100"
      case "info":
        return "text-blue-600 bg-blue-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const activeAlerts = systemAlerts.filter((alert) => alert.status === "active")
  const resolvedAlerts = systemAlerts.filter((alert) => alert.status === "resolved")

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="h-5 w-5 text-amber-600" />
            <span>System Alerts</span>
          </div>
          <Badge className="bg-amber-100 text-amber-800">{activeAlerts.length} Active</Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Active Alerts */}
        {activeAlerts.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-sm">Active Alerts</h3>
            {activeAlerts.map((alert) => {
              const AlertIcon = getAlertIcon(alert.type)
              return (
                <div key={alert.id} className="p-3 border rounded-lg space-y-2">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <AlertIcon
                        className={`h-4 w-4 ${
                          alert.type === "warning"
                            ? "text-yellow-600"
                            : alert.type === "error"
                              ? "text-red-600"
                              : alert.type === "success"
                                ? "text-green-600"
                                : "text-blue-600"
                        }`}
                      />
                      <div>
                        <div className="font-medium text-sm">{alert.title}</div>
                        <div className="text-xs text-muted-foreground flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{alert.time}</span>
                        </div>
                      </div>
                    </div>
                    <Badge className={`text-xs ${getPriorityColor(alert.priority)}`}>{alert.priority}</Badge>
                  </div>

                  <p className="text-sm text-gray-700">{alert.message}</p>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="text-xs h-7 bg-transparent">
                      View Details
                    </Button>
                    <Button size="sm" className="text-xs h-7">
                      Acknowledge
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* No Active Alerts */}
        {activeAlerts.length === 0 && (
          <div className="text-center py-6">
            <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <p className="text-sm text-muted-foreground">No active alerts</p>
            <p className="text-xs text-muted-foreground">All systems operating normally</p>
          </div>
        )}

        {/* Recent Resolved */}
        {resolvedAlerts.length > 0 && (
          <div className="space-y-3 pt-4 border-t">
            <h3 className="font-semibold text-sm text-green-600">Recently Resolved</h3>
            {resolvedAlerts.slice(0, 2).map((alert) => {
              const AlertIcon = getAlertIcon(alert.type)
              return (
                <div key={alert.id} className="flex items-center space-x-3 p-2 bg-gray-50 rounded">
                  <AlertIcon className="h-3 w-3 text-green-600" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{alert.title}</div>
                    <div className="text-xs text-muted-foreground">{alert.time}</div>
                  </div>
                  <CheckCircle className="h-3 w-3 text-green-600" />
                </div>
              )
            })}
          </div>
        )}

        {/* Alert Settings */}
        <div className="pt-4 border-t">
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            <Bell className="h-3 w-3 mr-2" />
            Configure Alerts
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
