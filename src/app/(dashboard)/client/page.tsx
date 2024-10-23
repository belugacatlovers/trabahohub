// app/dashboard/client/page.tsx
import DashboardLayout from "@/components/client-components/DashboardLayout"
import OrderClient from "@/components/ui/features/orders"

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <OrderClient />
    </DashboardLayout>
  )
}
