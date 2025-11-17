"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Clock, DollarSign, Search, Filter } from "lucide-react"

const jobs = [
  {
    id: 1,
    title: "React Dashboard Development",
    client: "Tech Startup",
    budget: "$5,000 - $8,000",
    deadline: "30 days",
    category: "Frontend",
    description: "Build a comprehensive dashboard for our analytics platform using React and TypeScript.",
    applicants: 5,
    status: "Open",
  },
  {
    id: 2,
    title: "Mobile App UI Design",
    client: "E-commerce Company",
    budget: "$3,000 - $5,000",
    deadline: "14 days",
    category: "Design",
    description: "Create mobile app UI designs for iOS and Android with Figma.",
    applicants: 12,
    status: "Open",
  },
  {
    id: 3,
    title: "Smart Contract Development",
    client: "DeFi Protocol",
    budget: "$8,000 - $12,000",
    deadline: "60 days",
    category: "Blockchain",
    description: "Develop and audit smart contracts for our DeFi protocol on Ethereum.",
    applicants: 3,
    status: "Open",
  },
]

export function JobBoard() {
  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Job Board</h1>
        <p className="text-slate-400">Browse and apply for available freelance projects</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <Input placeholder="Search jobs..." className="pl-10 bg-slate-800/50 border-slate-700 text-slate-200" />
        </div>
        <Button variant="outline" className="border-slate-700 text-slate-300 hover:bg-slate-800 bg-transparent">
          <Filter className="w-4 h-4 mr-2" />
          Filter
        </Button>
        <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Post Job</Button>
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 gap-4">
        {jobs.map((job) => (
          <Card
            key={job.id}
            className="bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all cursor-pointer"
          >
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left - Job Info */}
                <div className="md:col-span-2 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{job.title}</h3>
                      <p className="text-sm text-slate-400">by {job.client}</p>
                    </div>
                    <Badge variant="outline" className="border-indigo-500 text-indigo-400">
                      {job.category}
                    </Badge>
                  </div>

                  <p className="text-sm text-slate-300">{job.description}</p>

                  <div className="flex flex-wrap gap-4 pt-2">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <DollarSign className="w-4 h-4" />
                      {job.budget}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock className="w-4 h-4" />
                      {job.deadline}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Briefcase className="w-4 h-4" />
                      {job.applicants} applicants
                    </div>
                  </div>
                </div>

                {/* Right - Action */}
                <div className="flex flex-col items-end justify-between">
                  <Badge className="bg-emerald-500/20 text-emerald-400 border-0">{job.status}</Badge>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">View & Apply</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
