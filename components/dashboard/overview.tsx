"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { BarChart3, TrendingUp, Users, Wallet } from "lucide-react"

const revenueData = [
  { month: "Jan", revenue: 4000, contracts: 24 },
  { month: "Feb", revenue: 3000, contracts: 13 },
  { month: "Mar", revenue: 2000, contracts: 9 },
  { month: "Apr", revenue: 2780, contracts: 39 },
  { month: "May", revenue: 1890, contracts: 22 },
  { month: "Jun", revenue: 2390, contracts: 35 },
  { month: "Jul", revenue: 3490, contracts: 48 },
]

const stats = [
  {
    title: "Total Revenue",
    value: "$24,500",
    change: "+12.5%",
    icon: Wallet,
    color: "from-emerald-500 to-cyan-500",
  },
  {
    title: "Active Contracts",
    value: "12",
    change: "+2 this week",
    icon: BarChart3,
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Total Clients",
    value: "48",
    change: "+8.2%",
    icon: Users,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Completion Rate",
    value: "94.2%",
    change: "+2.3%",
    icon: TrendingUp,
    color: "from-blue-500 to-indigo-500",
  },
]

export function DashboardOverview() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Freelancer</h1>
        <p className="text-slate-400">Here's your performance overview for this month.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card
              key={idx}
              className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all hover:shadow-lg"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-sm font-medium text-slate-300">{stat.title}</CardTitle>
                    <CardDescription className="text-xs text-slate-500 mt-1">{stat.change}</CardDescription>
                  </div>
                  <div className={`p-2 bg-gradient-to-br ${stat.color} rounded-lg`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Revenue Trend</CardTitle>
            <CardDescription>Monthly revenue over the last 7 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
                  labelStyle={{ color: "#e2e8f0" }}
                />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#06b6d4" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-slate-800/50 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white">Contracts Activity</CardTitle>
            <CardDescription>Contract count by month</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1e293b", border: "1px solid #334155" }}
                  labelStyle={{ color: "#e2e8f0" }}
                />
                <Bar dataKey="contracts" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "Contract Completed", project: "UI Design for Mobile App", time: "2 hours ago" },
              { action: "New Message", project: "From: John Developer", time: "4 hours ago" },
              { action: "Payment Received", project: "Project: Website Redesign", time: "1 day ago" },
              { action: "New Job Posted", project: "React Component Development", time: "2 days ago" },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between py-3 border-b border-slate-700 last:border-0">
                <div>
                  <p className="text-sm font-medium text-slate-200">{activity.action}</p>
                  <p className="text-xs text-slate-400">{activity.project}</p>
                </div>
                <span className="text-xs text-slate-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
