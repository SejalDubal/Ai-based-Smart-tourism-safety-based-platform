"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, Star, Eye } from "lucide-react"

const featuredArticles = [
  {
    id: 1,
    title: "Ultimate Safety Guide for Solo Female Travelers in India",
    excerpt:
      "Comprehensive safety tips, cultural insights, and practical advice for women traveling alone in India. Learn about safe accommodations, transportation, and cultural etiquette.",
    image: "/blog-solo-female-travel.jpg",
    category: "Safety",
    author: "Priya Sharma",
    authorAvatar: "/author-priya.jpg",
    publishDate: "Dec 10, 2024",
    readTime: "8 min read",
    views: "12.5K",
    rating: 4.9,
    featured: true,
  },
  {
    id: 2,
    title: "Hidden Gems: 15 Offbeat Destinations in Rajasthan",
    excerpt:
      "Discover lesser-known palaces, villages, and natural wonders beyond the popular tourist circuit. Experience authentic Rajasthani culture and hospitality.",
    image: "/blog-rajasthan-gems.jpg",
    category: "Destinations",
    author: "Rajesh Kumar",
    authorAvatar: "/author-rajesh.jpg",
    publishDate: "Dec 8, 2024",
    readTime: "12 min read",
    views: "8.9K",
    rating: 4.7,
    featured: true,
  },
]

export function FeaturedArticles() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Featured Articles</h2>
        <Badge className="bg-amber-100 text-amber-800">
          <Star className="h-3 w-3 mr-1" />
          Editor's Choice
        </Badge>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {featuredArticles.map((article) => (
          <Card
            key={article.id}
            className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
          >
            <div className="relative">
              <img
                src={article.image || "/placeholder.svg?height=250&width=400"}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <Badge className="bg-cyan-600 text-white">{article.category}</Badge>
              </div>
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="bg-white/90 text-gray-800">
                  <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
                  {article.rating}
                </Badge>
              </div>
            </div>

            <CardContent className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold line-clamp-2 group-hover:text-cyan-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mt-2 line-clamp-3">{article.excerpt}</p>
              </div>

              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <User className="h-3 w-3" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{article.publishDate}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                  <Eye className="h-3 w-3" />
                  <span>{article.views} views</span>
                </div>
                <Button className="group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  Read More
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
