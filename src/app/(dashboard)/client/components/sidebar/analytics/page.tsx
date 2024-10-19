import DashboardLayout from "@/app/(dashboard)/client/components/DashboardLayout"
import { Button } from "@/components/ui/button"

export default function AnalyticPage() {
  return (
    <DashboardLayout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">Analytics</h1>
      </div>
      <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            You have no analytics
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start selling as soon as you add a analytic.
          </p>
          <Button className="mt-4">Add Analytic</Button>
        </div>
      </div>
    </DashboardLayout>
  )
}
