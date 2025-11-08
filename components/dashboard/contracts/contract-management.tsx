"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { CheckCircle2, Clock, AlertCircle, DollarSign } from "lucide-react"

const contracts = {
  active: [
    {
      id: 1,
      title: "UI Design for Mobile App",
      client: "Tech Startup",
      amount: "$5,000",
      progress: 65,
      deadline: "15 days",
      status: "In Progress",
    },
    {
      id: 2,
      title: "Website Redesign",
      client: "E-commerce",
      amount: "$3,500",
      progress: 40,
      deadline: "20 days",
      status: "In Progress",
    },
  ],
  completed: [
    {
      id: 3,
      title: "API Integration",
      client: "Fintech Corp",
      amount: "$2,800",
      progress: 100,
      deadline: "Completed",
      status: "Completed",
    },
    {
      id: 4,
      title: "Logo Design",
      client: "Startup Inc",
      amount: "$1,200",
      progress: 100,
      deadline: "Completed",
      status: "Completed",
    },
  ],
  pending: [
    {
      id: 5,
      title: "Smart Contract Audit",
      client: "DeFi Protocol",
      amount: "$8,000",
      progress: 0,
      deadline: "Not started",
      status: "Pending",
    },
  ],
}

export function ContractManagement() {
  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Contract Management</h1>
        <p className="text-slate-400">Track your active contracts, milestones, and payments</p>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <TabsList className="bg-slate-800/50 border border-slate-700">
          <TabsTrigger value="active" className="data-[state=active]:bg-indigo-600">
            Active
          </TabsTrigger>
          <TabsTrigger value="completed" className="data-[state=active]:bg-emerald-600">
            Completed
          </TabsTrigger>
          <TabsTrigger value="pending" className="data-[state=active]:bg-amber-600">
            Pending
          </TabsTrigger>
        </TabsList>

        {/* Active Contracts */}
        <TabsContent value="active" className="space-y-4">
          {contracts.active.map((contract) => (
            <Card key={contract.id} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{contract.title}</h3>
                      <p className="text-sm text-slate-400">{contract.client}</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-300">Progress</span>
                        <span className="text-slate-400">{contract.progress}%</span>
                      </div>
                      <Progress value={contract.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-2">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-emerald-500" />
                        <div>
                          <p className="text-xs text-slate-500">Amount</p>
                          <p className="text-sm font-semibold text-slate-200">{contract.amount}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-amber-500" />
                        <div>
                          <p className="text-xs text-slate-500">Deadline</p>
                          <p className="text-sm font-semibold text-slate-200">{contract.deadline}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between items-end">
                    <Badge className="bg-blue-500/20 text-blue-400">{contract.status}</Badge>
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Completed Contracts */}
        <TabsContent value="completed" className="space-y-4">
          {contracts.completed.map((contract) => (
            <Card key={contract.id} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                      {contract.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">{contract.client}</p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <Badge className="bg-emerald-500/20 text-emerald-400">{contract.status}</Badge>
                    <p className="text-sm font-semibold text-emerald-400">{contract.amount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Pending Contracts */}
        <TabsContent value="pending" className="space-y-4">
          {contracts.pending.map((contract) => (
            <Card key={contract.id} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-amber-500" />
                      {contract.title}
                    </h3>
                    <p className="text-sm text-slate-400 mt-1">{contract.client}</p>
                  </div>
                  <div className="flex flex-col justify-between items-end">
                    <Badge className="bg-amber-500/20 text-amber-400">{contract.status}</Badge>
                    <Button variant="outline" className="border-slate-700 text-slate-300 bg-transparent">
                      Accept
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
