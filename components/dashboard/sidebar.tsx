"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Briefcase, MessageSquare, FileCheck, User, Home, Wallet, Settings } from "lucide-react"

const menuItems = [
  { href: "/dashboard", icon: Home, label: "Overview", badge: null },
  { href: "/dashboard/jobs", icon: Briefcase, label: "Jobs", badge: "3" },
  { href: "/dashboard/messages", icon: MessageSquare, label: "Messages", badge: "2" },
  { href: "/dashboard/contracts", icon: FileCheck, label: "Contracts", badge: null },
  { href: "/dashboard/profile", icon: User, label: "Profile", badge: null },
]

const bottomItems = [
  { href: "#", icon: Wallet, label: "Wallet" },
  { href: "#", icon: Settings, label: "Settings" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">
      <SidebarMenu className="flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))

          return (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={isActive}
                className={`group relative transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 text-indigo-400 font-medium"
                    : "text-slate-400 hover:text-slate-300 hover:bg-slate-800/50"
                }`}
              >
                <Link href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-lg">
                  <Icon className={`w-5 h-5 transition-transform ${isActive ? "text-cyan-400" : ""}`} />
                  <span className="flex-1">{item.label}</span>
                  {item.badge && (
                    <span
                      className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        isActive ? "bg-indigo-500/30 text-indigo-300" : "bg-slate-700/50 text-slate-300"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>

      <SidebarMenu className="border-t border-slate-800 pt-4 mt-4">
        {bottomItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={isActive}
                className={`group transition-all duration-200 ${
                  isActive
                    ? "bg-slate-800/50 text-slate-100"
                    : "text-slate-400 hover:text-slate-300 hover:bg-slate-800/50"
                }`}
              >
                <Link href={item.href} className="flex items-center gap-3 px-4 py-3 rounded-lg">
                  <Icon className="w-5 h-5" />
                  <span className="flex-1">{item.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </div>
  )
}
