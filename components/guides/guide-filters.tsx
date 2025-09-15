"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Filter, Search, X } from "lucide-react"

const languages = [
  "English",
  "Hindi",
  "Spanish",
  "French",
  "German",
  "Japanese",
  "Chinese",
  "Arabic",
  "Russian",
  "Italian",
]

const specializations = [
  "Heritage Sites",
  "Adventure Tours",
  "Cultural Tours",
  "Food Tours",
  "Photography",
  "Wildlife",
  "Spiritual Tours",
  "Architecture",
  "Local Markets",
  "Night Tours",
]

const cities = ["Delhi", "Agra", "Jaipur", "Mumbai", "Goa", "Kerala", "Rajasthan", "Kashmir", "Himachal", "Tamil Nadu"]

export function GuideFilters() {
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState([500, 3000])
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([])
  const [selectedSpecializations, setSelectedSpecializations] = useState<string[]>([])
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [minRating, setMinRating] = useState([4])

  const handleLanguageChange = (language: string, checked: boolean) => {
    if (checked) {
      setSelectedLanguages([...selectedLanguages, language])
    } else {
      setSelectedLanguages(selectedLanguages.filter((l) => l !== language))
    }
  }

  const handleSpecializationChange = (specialization: string, checked: boolean) => {
    if (checked) {
      setSelectedSpecializations([...selectedSpecializations, specialization])
    } else {
      setSelectedSpecializations(selectedSpecializations.filter((s) => s !== specialization))
    }
  }

  const handleCityChange = (city: string, checked: boolean) => {
    if (checked) {
      setSelectedCities([...selectedCities, city])
    } else {
      setSelectedCities(selectedCities.filter((c) => c !== city))
    }
  }

  const clearAllFilters = () => {
    setSearchQuery("")
    setPriceRange([500, 3000])
    setSelectedLanguages([])
    setSelectedSpecializations([])
    setSelectedCities([])
    setMinRating([4])
  }

  const activeFiltersCount =
    selectedLanguages.length + selectedSpecializations.length + selectedCities.length + (minRating[0] > 4 ? 1 : 0)

  return (
    <Card className="sticky top-6">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <span>Filters</span>
          </CardTitle>
          {activeFiltersCount > 0 && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              <X className="h-4 w-4 mr-1" />
              Clear ({activeFiltersCount})
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <Label>Search Guides</Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Guide name or expertise..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <Separator />

        {/* Price Range */}
        <div className="space-y-3">
          <Label>Price Range (per day)</Label>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={setPriceRange}
              max={5000}
              min={200}
              step={100}
              className="w-full"
            />
          </div>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
        </div>

        <Separator />

        {/* Rating */}
        <div className="space-y-3">
          <Label>Minimum Rating</Label>
          <div className="px-2">
            <Slider value={minRating} onValueChange={setMinRating} max={5} min={3} step={0.5} className="w-full" />
          </div>
          <div className="text-sm text-muted-foreground">{minRating[0]}+ stars</div>
        </div>

        <Separator />

        {/* Cities */}
        <div className="space-y-3">
          <Label>Cities</Label>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {cities.map((city) => (
              <div key={city} className="flex items-center space-x-2">
                <Checkbox
                  id={`city-${city}`}
                  checked={selectedCities.includes(city)}
                  onCheckedChange={(checked) => handleCityChange(city, checked as boolean)}
                />
                <Label htmlFor={`city-${city}`} className="text-sm cursor-pointer">
                  {city}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Languages */}
        <div className="space-y-3">
          <Label>Languages</Label>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {languages.map((language) => (
              <div key={language} className="flex items-center space-x-2">
                <Checkbox
                  id={`lang-${language}`}
                  checked={selectedLanguages.includes(language)}
                  onCheckedChange={(checked) => handleLanguageChange(language, checked as boolean)}
                />
                <Label htmlFor={`lang-${language}`} className="text-sm cursor-pointer">
                  {language}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Specializations */}
        <div className="space-y-3">
          <Label>Specializations</Label>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {specializations.map((specialization) => (
              <div key={specialization} className="flex items-center space-x-2">
                <Checkbox
                  id={`spec-${specialization}`}
                  checked={selectedSpecializations.includes(specialization)}
                  onCheckedChange={(checked) => handleSpecializationChange(specialization, checked as boolean)}
                />
                <Label htmlFor={`spec-${specialization}`} className="text-sm cursor-pointer">
                  {specialization}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Active Filters */}
        {activeFiltersCount > 0 && (
          <>
            <Separator />
            <div className="space-y-2">
              <Label className="text-sm">Active Filters</Label>
              <div className="flex flex-wrap gap-1">
                {selectedCities.map((city) => (
                  <Badge key={city} variant="secondary" className="text-xs">
                    {city}
                  </Badge>
                ))}
                {selectedLanguages.map((lang) => (
                  <Badge key={lang} variant="secondary" className="text-xs">
                    {lang}
                  </Badge>
                ))}
                {selectedSpecializations.map((spec) => (
                  <Badge key={spec} variant="secondary" className="text-xs">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  )
}
