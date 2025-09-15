"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ShoppingCart, Users, Calendar, Clock, Shield, CreditCard } from "lucide-react"

export function BookingSummary() {
  const [guestCount, setGuestCount] = useState(2)
  const [promoCode, setPromoCode] = useState("")

  // Mock selected data - in real app this would come from context/state
  const selectedDestination = "Red Fort, Delhi"
  const selectedDate = "March 15, 2024"
  const selectedTime = "11:00 AM"
  const basePrice = 35
  const totalPrice = basePrice * guestCount
  const taxes = Math.round(totalPrice * 0.18)
  const finalTotal = totalPrice + taxes

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <ShoppingCart className="h-5 w-5" />
          <span>Booking Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Selected Details */}
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Destination</Label>
            <p className="text-sm text-muted-foreground">{selectedDestination}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center space-x-1">
                <Calendar className="h-3 w-3" />
                <span>Date</span>
              </Label>
              <p className="text-sm text-muted-foreground">{selectedDate}</p>
            </div>
            <div className="space-y-2">
              <Label className="text-sm font-medium flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>Time</span>
              </Label>
              <p className="text-sm text-muted-foreground">{selectedTime}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Guest Count */}
        <div className="space-y-3">
          <Label className="text-sm font-medium flex items-center space-x-1">
            <Users className="h-3 w-3" />
            <span>Number of Guests</span>
          </Label>
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setGuestCount(Math.max(1, guestCount - 1))}
              disabled={guestCount <= 1}
            >
              -
            </Button>
            <span className="w-8 text-center font-medium">{guestCount}</span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setGuestCount(Math.min(10, guestCount + 1))}
              disabled={guestCount >= 10}
            >
              +
            </Button>
          </div>
        </div>

        <Separator />

        {/* Promo Code */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Promo Code</Label>
          <div className="flex space-x-2">
            <Input
              placeholder="Enter code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              className="flex-1"
            />
            <Button variant="outline">Apply</Button>
          </div>
        </div>

        <Separator />

        {/* Price Breakdown */}
        <div className="space-y-3">
          <div className="flex justify-between text-sm">
            <span>Base Price ({guestCount} guests)</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Taxes & Fees</span>
            <span>₹{taxes}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>₹{finalTotal}</span>
          </div>
        </div>

        {/* Safety Features */}
        <div className="bg-primary/5 rounded-lg p-3 space-y-2">
          <div className="flex items-center space-x-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Safety Included</span>
          </div>
          <ul className="text-xs text-muted-foreground space-y-1 ml-6">
            <li>• Real-time safety monitoring</li>
            <li>• Emergency SOS support</li>
            <li>• Verified guide assistance</li>
          </ul>
        </div>

        {/* Booking Button */}
        <Button size="lg" className="w-full">
          <CreditCard className="h-4 w-4 mr-2" />
          Proceed to Payment
        </Button>

        {/* Cancellation Policy */}
        <div className="text-xs text-muted-foreground space-y-1">
          <p className="font-medium">Cancellation Policy:</p>
          <p>Free cancellation up to 24 hours before your visit. Full refund guaranteed.</p>
        </div>
      </CardContent>
    </Card>
  )
}
