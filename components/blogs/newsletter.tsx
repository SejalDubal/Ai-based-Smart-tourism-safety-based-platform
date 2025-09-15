"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Mail, Gift, Star, Users } from "lucide-react"

export function Newsletter() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <div className="space-y-6">
      {/* Newsletter Signup */}
      <Card className="bg-gradient-to-br from-cyan-50 to-amber-50">
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <Mail className="h-5 w-5 text-cyan-600" />
            <span>Travel Newsletter</span>
          </CardTitle>
          <p className="text-sm text-muted-foreground">
            Get weekly travel tips, safety updates, and destination guides delivered to your inbox
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {!subscribed ? (
            <>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Button onClick={handleSubscribe} className="w-full bg-cyan-600 hover:bg-cyan-700">
                  Subscribe Now
                </Button>
              </div>

              <div className="flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Users className="h-3 w-3" />
                  <span>25K+ subscribers</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3" />
                  <span>4.9/5 rating</span>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Mail className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-green-800">Successfully Subscribed!</h3>
              <p className="text-sm text-muted-foreground">Check your email for a welcome message and travel guide</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Special Offers */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center space-x-2">
            <Gift className="h-5 w-5 text-amber-500" />
            <span>Special Offers</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className="bg-amber-500 text-white text-xs">Limited Time</Badge>
              <span className="text-sm font-medium">Free Travel Guide</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">Download our comprehensive India travel safety guide</p>
            <Button size="sm" variant="outline" className="w-full bg-transparent">
              Download Now
            </Button>
          </div>

          <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-200">
            <div className="flex items-center space-x-2 mb-2">
              <Badge className="bg-cyan-500 text-white text-xs">New</Badge>
              <span className="text-sm font-medium">Premium Membership</span>
            </div>
            <p className="text-xs text-muted-foreground mb-2">
              Access exclusive content and personalized recommendations
            </p>
            <Button size="sm" variant="outline" className="w-full bg-transparent">
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Recent Comments */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Comments</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              {
                user: "Travel Enthusiast",
                comment: "Great tips for solo female travelers!",
                article: "Safety Guide for Solo Female Travelers",
              },
              {
                user: "Budget Backpacker",
                comment: "This saved me so much money on my trip",
                article: "Budget Backpacking Guide",
              },
              {
                user: "Food Lover",
                comment: "Amazing street food recommendations",
                article: "Street Food Safety Guide",
              },
            ].map((comment, index) => (
              <div key={index} className="text-xs space-y-1">
                <div className="font-medium">{comment.user}</div>
                <div className="text-muted-foreground">"{comment.comment}"</div>
                <div className="text-cyan-600 hover:underline cursor-pointer">on {comment.article}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
