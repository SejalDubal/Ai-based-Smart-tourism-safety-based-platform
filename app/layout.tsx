import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Navigation } from "@/components/navigation"
import { FloatingChatbot } from "@/components/floating-chatbot"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "SafeTravel - Smart Tourist Safety & Trip Planner",
  description:
    "Plan safe and memorable trips with our AI-powered travel platform featuring verified guides, real-time safety updates, and comprehensive booking system.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <FloatingChatbot />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
