"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Users, MapPin, Clock, Filter, Download, Eye, CheckCircle, AlertCircle, XCircle } from "lucide-react"

const bookingsData = [
  {
    id: "BK001",
    tourist: "Sarah Johnson",
    destination: "Red Fort",
    date: "2024-12-15",
    time: "10:00 AM",
    status: "confirmed",
    guide: "Rajesh Kumar",
    groupSize: 4,
    amount: "₹2,000",
    safetyScore: 95,
  },
  {
    id: "BK002",
    tourist: "Mike Chen",
    destination: "Taj Mahal",
    date: "2024-12-15",
    time: "2:00 PM",
    status: "pending",
    guide: "Priya Sharma",
    groupSize: 2,
    amount: "₹3,500",
    safetyScore: 98,
  },
  {
    id: "BK003",
    tourist: "Emma Wilson",
    destination: "Amber Fort",
    date: "2024-12-16",
    time: "9:00 AM",
    status: "confirmed",
    guide: "Mohammed Ali",
    groupSize: 6,
    amount: "₹4,200",
    safetyScore: 92,
  },
  {
    id: "BK004",
    tourist: "David Brown",
    destination: "Lotus Temple",
    date: "2024-12-16",
    time: "11:00 AM",
    status: "cancelled",
    guide: "Anita Patel",
    groupSize: 3,
    amount: "₹1,800",
    safetyScore: 96,
  },
  {
    id: "BK005",
    tourist: "Lisa Garcia",
    destination: "Qutub Minar",
    date: "2024-12-17",
    time: "3:00 PM",
    status: "confirmed",
    guide: "Lakshmi Nair",
    groupSize: 5,
    amount: "₹2,800",
    safetyScore: 90,
  },
]

const bookingStats = {
  total: 156,
  confirmed: 128,
  pending: 18,
  cancelled: 10,
  revenue: "₹4,85,600",
}

export function BookingsOverview() {
  const [filterStatus, setFilterStatus] = useState("all")
  const [timeRange, setTimeRange] = useState("today")

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "confirmed":
        return CheckCircle
      case "pending":
        return AlertCircle
      case "cancelled":
        return XCircle
      default:
        return Clock
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "text-green-600 bg-green-100"
      case "pending":
        return "text-yellow-600 bg-yellow-100"
      case "cancelled":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const filteredBookings = bookingsData.filter((booking) => filterStatus === "all" || booking.status === filterStatus)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5 text-cyan-600" />
            <span>Bookings Overview</span>
          </CardTitle>

          <div className="flex items-center space-x-2">
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-1" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="bookings">All Bookings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{bookingStats.total}</div>
                <div className="text-sm text-muted-foreground">Total Bookings</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{bookingStats.confirmed}</div>
                <div className="text-sm text-muted-foreground">Confirmed</div>
              </div>
              <div className="text-center p-4 bg-yellow-50 rounded-lg">
                <div className="text-2xl font-bold text-yellow-600">{bookingStats.pending}</div>
                <div className="text-sm text-muted-foreground">Pending</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600">{bookingStats.cancelled}</div>
                <div className="text-sm text-muted-foreground">Cancelled</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{bookingStats.revenue}</div>
                <div className="text-sm text-muted-foreground">Revenue</div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="space-y-3">
              <h3 className="font-semibold">Recent Bookings</h3>
              {bookingsData.slice(0, 3).map((booking) => {
                const StatusIcon = getStatusIcon(booking.status)
                return (
                  <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <StatusIcon
                        className={`h-5 w-5 ${
                          booking.status === "confirmed"
                            ? "text-green-600"
                            : booking.status === "pending"
                              ? "text-yellow-600"
                              : "text-red-600"
                        }`}
                      />
                      <div>
                        <div className="font-medium">{booking.tourist}</div>
                        <div className="text-sm text-muted-foreground">
                          {booking.destination} • {booking.date} at {booking.time}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{booking.amount}</div>
                      <Badge className={`text-xs ${getStatusColor(booking.status)}`}>{booking.status}</Badge>
                    </div>
                  </div>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="bookings" className="space-y-4">
            {/* Filters */}
            <div className="flex items-center space-x-3">
              <Select value={filterStatus} onValueChange={setFilterStatus}>
                <SelectTrigger className="w-40">
                  <Filter className="h-4 w-4 mr-1" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bookings Table */}
            <div className="space-y-3">
              {filteredBookings.map((booking) => {
                const StatusIcon = getStatusIcon(booking.status)
                return (
                  <Card key={booking.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <StatusIcon
                            className={`h-5 w-5 ${
                              booking.status === "confirmed"
                                ? "text-green-600"
                                : booking.status === "pending"
                                  ? "text-yellow-600"
                                  : "text-red-600"
                            }`}
                          />

                          <div>
                            <div className="font-medium">{booking.tourist}</div>
                            <div className="text-sm text-muted-foreground">ID: {booking.id}</div>
                          </div>

                          <div>
                            <div className="flex items-center space-x-1 text-sm">
                              <MapPin className="h-3 w-3" />
                              <span>{booking.destination}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>
                                {booking.date} at {booking.time}
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="text-sm">Guide: {booking.guide}</div>
                            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                              <Users className="h-3 w-3" />
                              <span>{booking.groupSize} people</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right space-y-2">
                          <div className="font-medium">{booking.amount}</div>
                          <div className="flex items-center space-x-2">
                            <Badge className={`text-xs ${getStatusColor(booking.status)}`}>{booking.status}</Badge>
                            <Button variant="outline" size="sm">
                              <Eye className="h-3 w-3 mr-1" />
                              View
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Popular Destinations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      { name: "Red Fort", bookings: 45, percentage: 85 },
                      { name: "Taj Mahal", bookings: 38, percentage: 72 },
                      { name: "Amber Fort", bookings: 32, percentage: 60 },
                      { name: "Lotus Temple", bookings: 28, percentage: 53 },
                    ].map((dest) => (
                      <div key={dest.name} className="space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>{dest.name}</span>
                          <span>{dest.bookings} bookings</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-cyan-600 h-2 rounded-full" style={{ width: `${dest.percentage}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Booking Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-600">+23%</div>
                      <div className="text-sm text-muted-foreground">Growth this month</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Peak Hours</span>
                        <span>10 AM - 2 PM</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Average Group Size</span>
                        <span>4.2 people</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Cancellation Rate</span>
                        <span>6.4%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
