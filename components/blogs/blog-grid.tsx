"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, User, ArrowRight, Eye, Heart, Share, Filter, Grid, List } from "lucide-react"

const blogArticles = [
  {
    id: 3,
    title: "Street Food Safety: A Complete Guide for Travelers",
    excerpt:
      "Learn how to enjoy delicious street food safely while traveling. Tips on choosing vendors, food hygiene, and what to avoid.",
    image: "/blog-street-food.jpg",
    category: "Food & Safety",
    author: "Chef Amit Patel",
    authorAvatar: "/author-amit.jpg",
    publishDate: "Dec 5, 2024",
    readTime: "6 min read",
    views: "15.2K",
    likes: 234,
    tags: ["Food Safety", "Street Food", "Travel Tips"],
  },
  {
    id: 4,
    title: "Digital Nomad's Guide to Working from Indian Hill Stations",
    excerpt:
      "Best hill stations for remote work with reliable internet, co-working spaces, and affordable living costs.",
    image: "/blog-digital-nomad.jpg",
    category: "Digital Nomad",
    author: "Sarah Johnson",
    authorAvatar: "/author-sarah.jpg",
    publishDate: "Dec 3, 2024",
    readTime: "10 min read",
    views: "9.8K",
    likes: 156,
    tags: ["Remote Work", "Hill Stations", "Digital Nomad"],
  },
  {
    id: 5,
    title: "Monsoon Travel: Best Destinations and Safety Precautions",
    excerpt:
      "Discover the beauty of monsoon travel while staying safe. Best destinations, packing tips, and weather considerations.",
    image: "/blog-monsoon-travel.jpg",
    category: "Seasonal Travel",
    author: "Monsoon Explorer",
    authorAvatar: "/author-monsoon.jpg",
    publishDate: "Dec 1, 2024",
    readTime: "7 min read",
    views: "11.4K",
    likes: 189,
    tags: ["Monsoon", "Weather", "Safety"],
  },
  {
    id: 6,
    title: "Budget Backpacking: ₹1000 Per Day Across India",
    excerpt: "Complete guide to ultra-budget travel in India. Accommodation, food, transport, and money-saving hacks.",
    image: "/blog-budget-backpacking.jpg",
    category: "Budget Travel",
    author: "Budget Traveler",
    authorAvatar: "/author-budget.jpg",
    publishDate: "Nov 28, 2024",
    readTime: "15 min read",
    views: "22.1K",
    likes: 445,
    tags: ["Budget Travel", "Backpacking", "Money Saving"],
  },
  {
    id: 7,
    title: "Cultural Etiquette: Do's and Don'ts for Temple Visits",
    excerpt:
      "Respectful temple visiting guide covering dress codes, behavior, photography rules, and cultural sensitivity.",
    image: "/blog-temple-etiquette.jpg",
    category: "Culture",
    author: "Cultural Guide",
    authorAvatar: "/author-culture.jpg",
    publishDate: "Nov 25, 2024",
    readTime: "5 min read",
    views: "7.6K",
    likes: 123,
    tags: ["Culture", "Religion", "Etiquette"],
  },
  {
    id: 8,
    title: "Photography Guide: Capturing India's Golden Hour",
    excerpt: "Master the art of travel photography in India. Best times, locations, equipment, and composition tips.",
    image: "/blog-photography.jpg",
    category: "Photography",
    author: "Photo Pro",
    authorAvatar: "/author-photo.jpg",
    publishDate: "Nov 22, 2024",
    readTime: "12 min read",
    views: "13.7K",
    likes: 267,
    tags: ["Photography", "Golden Hour", "Travel Tips"],
  },
]

export function BlogGrid() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("latest")
  const [filterCategory, setFilterCategory] = useState("all")
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const filteredArticles = blogArticles
    .filter(
      (article) => filterCategory === "all" || article.category.toLowerCase().includes(filterCategory.toLowerCase()),
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "popular":
          return (
            Number.parseInt(b.views.replace("K", "000").replace(".", "")) -
            Number.parseInt(a.views.replace("K", "000").replace(".", ""))
          )
        case "likes":
          return b.likes - a.likes
        case "latest":
        default:
          return new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
      }
    })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold">Latest Articles</h2>

        <div className="flex items-center space-x-3">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-40">
              <Filter className="h-4 w-4 mr-1" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="safety">Safety</SelectItem>
              <SelectItem value="food">Food & Safety</SelectItem>
              <SelectItem value="budget">Budget Travel</SelectItem>
              <SelectItem value="culture">Culture</SelectItem>
              <SelectItem value="photography">Photography</SelectItem>
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="latest">Latest</SelectItem>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="likes">Most Liked</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-lg">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Articles Grid/List */}
      {viewMode === "grid" ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card
              key={article.id}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="relative">
                <img
                  src={article.image || "/placeholder.svg?height=200&width=350"}
                  alt={article.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-cyan-600 text-white text-xs">{article.category}</Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(article.id)}
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-muted-foreground hover:text-red-500"
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(article.id) ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
              </div>

              <CardContent className="p-4 space-y-3">
                <h3 className="font-semibold line-clamp-2 group-hover:text-cyan-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>

                <div className="flex flex-wrap gap-1">
                  {article.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Eye className="h-3 w-3" />
                      <span>{article.views}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Heart className="h-3 w-3" />
                      <span>{article.likes}</span>
                    </span>
                  </div>
                </div>

                <Button size="sm" className="w-full group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  Read Article
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex space-x-4">
                  <img
                    src={article.image || "/placeholder.svg?height=100&width=150"}
                    alt={article.title}
                    className="w-32 h-24 rounded-lg object-cover"
                  />

                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <Badge className="bg-cyan-600 text-white text-xs">{article.category}</Badge>
                          <span className="text-xs text-muted-foreground">{article.publishDate}</span>
                        </div>
                        <h3 className="font-semibold text-lg hover:text-cyan-600 transition-colors cursor-pointer">
                          {article.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => toggleFavorite(article.id)}
                        className="text-muted-foreground hover:text-red-500"
                      >
                        <Heart
                          className={`h-4 w-4 ${favorites.includes(article.id) ? "fill-red-500 text-red-500" : ""}`}
                        />
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{article.author}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <Eye className="h-3 w-3" />
                          <span>{article.views}</span>
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Share className="h-3 w-3 mr-1" />
                          Share
                        </Button>
                        <Button size="sm">
                          Read More
                          <ArrowRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Load More Articles
        </Button>
      </div>
    </div>
  )
}
