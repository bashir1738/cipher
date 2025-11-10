import type React from "react"
import { SidebarProvider, Sidebar, SidebarContent, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider>
      <Sidebar className="border-r border-slate-800 bg-slate-950">
        <SidebarHeader className="border-b border-slate-800 px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="font-bold text-white text-lg">Cipher</span>
          </div>
        </SidebarHeader>
        <SidebarContent className="px-4 py-6">
          <DashboardSidebar />
        </SidebarContent>
        <SidebarFooter className="border-t border-slate-800 px-4 py-4">
          <div className="text-xs text-slate-400">© 2025 Cipher</div>
        </SidebarFooter>
      </Sidebar>
      <div className="flex-1 flex flex-col min-h-screen bg-slate-900">
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </SidebarProvider>
  )
}
