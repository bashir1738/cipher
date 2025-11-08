"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Bell, Search, ChevronDown } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950/50 backdrop-blur-sm">
      <div className="flex items-center justify-between px-8 py-4 gap-6">
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <Input
              placeholder="Search jobs, messages..."
              className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:bg-slate-800 focus:border-indigo-500"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-200 hover:bg-slate-800/50">
            <Bell className="w-5 h-5" />
          </Button>

          <div className="w-px h-6 bg-slate-800" />

          <Button variant="ghost" className="flex items-center gap-2 text-slate-300 hover:bg-slate-800/50">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full" />
            <span className="text-sm">0x1234...5678</span>
            <ChevronDown className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
