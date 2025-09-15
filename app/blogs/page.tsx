import { BlogsHero } from "@/components/blogs/blogs-hero"
import { FeaturedArticles } from "@/components/blogs/featured-articles"
import { BlogGrid } from "@/components/blogs/blog-grid"
import { BlogCategories } from "@/components/blogs/blog-categories"
import { Newsletter } from "@/components/blogs/newsletter"

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-amber-50">
      <BlogsHero />

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-8">
            <FeaturedArticles />
            <BlogGrid />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <BlogCategories />
            <Newsletter />
          </div>
        </div>
      </div>
    </div>
  )
}
