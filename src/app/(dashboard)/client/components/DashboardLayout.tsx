import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/app/(dashboard)/client/components/sidebar/Sidebar"), { ssr: false });
const Navbar = dynamic(() => import("@/app/(dashboard)/client/components/Navbar"), { ssr: false });

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <Navbar />
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
