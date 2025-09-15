import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { SafetyMap } from "@/components/dashboard/safety-map"
import { BookingsOverview } from "@/components/dashboard/bookings-overview"
import { SOSNotifications } from "@/components/dashboard/sos-notifications"
import { RealTimeStats } from "@/components/dashboard/real-time-stats"
import { AlertsPanel } from "@/components/dashboard/alerts-panel"
import { GuideManagement } from "@/components/dashboard/guide-management"

export default function AuthorityDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-6">
            <RealTimeStats />
            <SafetyMap />
            <BookingsOverview />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <SOSNotifications />
            <AlertsPanel />
            <GuideManagement />
          </div>
        </div>
      </div>
    </div>
  )
}
