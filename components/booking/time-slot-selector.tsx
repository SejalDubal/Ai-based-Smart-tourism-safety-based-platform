"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users } from "lucide-react"

const timeSlots = [
  { id: 1, time: "09:00 AM", duration: "2 hours", capacity: 50, booked: 12, price: 35 },
  { id: 2, time: "11:00 AM", duration: "2 hours", capacity: 50, booked: 35, price: 35 },
  { id: 3, time: "01:00 PM", duration: "2 hours", capacity: 50, booked: 28, price: 40 },
  { id: 4, time: "03:00 PM", duration: "2 hours", capacity: 50, booked: 45, price: 40 },
  { id: 5, time: "05:00 PM", duration: "2 hours", capacity: 50, booked: 50, price: 45 },
  { id: 6, time: "07:00 PM", duration: "2 hours", capacity: 30, booked: 8, price: 50 },
]

export function TimeSlotSelector() {
  const [selectedSlot, setSelectedSlot] = useState<number | null>(null)

  const getSlotStatus = (booked: number, capacity: number) => {
    const percentage = (booked / capacity) * 100
    if (percentage >= 100) return { status: "full", color: "destructive" }
    if (percentage >= 80) return { status: "limited", color: "secondary" }
    return { status: "available", color: "default" }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Clock className="h-5 w-5" />
          <span>Select Time Slot</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          {timeSlots.map((slot) => {
            const slotInfo = getSlotStatus(slot.booked, slot.capacity)
            const isSelected = selectedSlot === slot.id
            const isDisabled = slotInfo.status === "full"

            return (
              <div
                key={slot.id}
                className={`
                  relative cursor-pointer rounded-lg border-2 p-4 transition-all
                  ${isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"}
                  ${isDisabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
                onClick={() => !isDisabled && setSelectedSlot(slot.id)}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <div className="font-semibold text-lg">{slot.time}</div>
                      <div className="text-sm text-muted-foreground">{slot.duration} duration</div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">₹{slot.price}</div>
                      <div className="text-xs text-muted-foreground">per person</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">
                        {slot.booked}/{slot.capacity} booked
                      </span>
                    </div>
                    <Badge
                      variant={slotInfo.color as any}
                      className={slotInfo.status === "full" ? "bg-destructive text-destructive-foreground" : ""}
                    >
                      {slotInfo.status === "full"
                        ? "Sold Out"
                        : slotInfo.status === "limited"
                          ? "Few Left"
                          : "Available"}
                    </Badge>
                  </div>

                  {/* Capacity Bar */}
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        slotInfo.status === "full"
                          ? "bg-destructive"
                          : slotInfo.status === "limited"
                            ? "bg-secondary"
                            : "bg-primary"
                      }`}
                      style={{ width: `${(slot.booked / slot.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>

                {isSelected && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary-foreground rounded-full"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {selectedSlot && (
          <div className="p-4 bg-primary/5 rounded-lg">
            <p className="text-sm text-primary font-medium">
              Selected: {timeSlots.find((s) => s.id === selectedSlot)?.time} slot
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
