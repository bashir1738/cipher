"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, FileText, Plus, Trash2 } from "lucide-react"
import { useState } from "react"

export function ProfilePage() {
  const [experiences, setExperiences] = useState([
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Corp",
      duration: "2021 - Present",
      description: "Led UI team",
    },
    {
      id: 2,
      role: "Full Stack Developer",
      company: "Startup Inc",
      duration: "2019 - 2021",
      description: "Built web applications",
    },
  ])

  const [skills] = useState([
    "React",
    "TypeScript",
    "Next.js",
    "Tailwind CSS",
    "Smart Contracts",
    "Web3",
    "Node.js",
    "PostgreSQL",
  ])

  return (
    <div className="p-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Profile</h1>
        <p className="text-slate-400">Manage your professional information and credentials</p>
      </div>

      {/* Profile Header */}
      <Card className="bg-slate-800/50 border-slate-700">
        <CardContent className="p-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg" />
              <div>
                <h2 className="text-2xl font-bold text-white">Alex Developer</h2>
                <p className="text-slate-400">Full Stack Developer & Smart Contract Specialist</p>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-sm text-slate-300">5.0 (124 reviews)</span>
                </div>
              </div>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">Edit Profile</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-slate-700">
            <div>
              <p className="text-sm text-slate-400">Total Earnings</p>
              <p className="text-2xl font-bold text-emerald-400">$24,500</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Contracts Completed</p>
              <p className="text-2xl font-bold text-blue-400">42</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Completion Rate</p>
              <p className="text-2xl font-bold text-purple-400">98%</p>
            </div>
            <div>
              <p className="text-sm text-slate-400">Member Since</p>
              <p className="text-2xl font-bold text-cyan-400">2 years</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="experience" className="space-y-4">
        <TabsList className="bg-slate-800/50 border border-slate-700">
          <TabsTrigger value="experience" className="data-[state=active]:bg-indigo-600">
            Experience
          </TabsTrigger>
          <TabsTrigger value="skills" className="data-[state=active]:bg-indigo-600">
            Skills
          </TabsTrigger>
          <TabsTrigger value="portfolio" className="data-[state=active]:bg-indigo-600">
            Portfolio
          </TabsTrigger>
        </TabsList>

        {/* Experience */}
        <TabsContent value="experience" className="space-y-4">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">
            <Plus className="w-4 h-4 mr-2" /> Add Experience
          </Button>

          {experiences.map((exp) => (
            <Card key={exp.id} className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-white">{exp.role}</h3>
                    <p className="text-sm text-slate-400">{exp.company}</p>
                    <p className="text-xs text-slate-500 mt-1">{exp.duration}</p>
                    <p className="text-sm text-slate-300 mt-3">{exp.description}</p>
                  </div>
                  <Button variant="ghost" size="icon" className="text-slate-400 hover:text-red-400">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Skills */}
        <TabsContent value="skills" className="space-y-4">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  <Badge key={idx} variant="outline" className="border-indigo-500 text-indigo-400 px-3 py-1">
                    {skill}
                  </Badge>
                ))}
              </div>
              <Button className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white">
                <Plus className="w-4 h-4 mr-2" /> Add Skill
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Portfolio */}
        <TabsContent value="portfolio" className="space-y-4">
          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">
            <Plus className="w-4 h-4 mr-2" /> Add Project
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(2)].map((_, idx) => (
              <Card key={idx} className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="w-full h-32 bg-slate-700/50 rounded-lg mb-4 flex items-center justify-center">
                    <FileText className="w-8 h-8 text-slate-500" />
                  </div>
                  <h3 className="font-semibold text-white">Project {idx + 1}</h3>
                  <p className="text-sm text-slate-400 mt-2">Project description goes here</p>
                  <Button variant="outline" className="w-full mt-4 border-slate-700 text-slate-300 bg-transparent">
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
