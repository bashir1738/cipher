"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Send, Phone, Video } from "lucide-react"
import { useState } from "react"

const conversations = [
  { id: 1, name: "John Developer", lastMessage: "When can you start?", time: "2 min", unread: true, online: true },
  {
    id: 2,
    name: "Sarah Designer",
    lastMessage: "Looks great! Let's proceed...",
    time: "1 hour",
    unread: false,
    online: false,
  },
  {
    id: 3,
    name: "Mike Project Manager",
    lastMessage: "Please check the latest files",
    time: "3 hours",
    unread: true,
    online: true,
  },
]

const messages = [
  {
    id: 1,
    sender: "John Developer",
    content: "Hi! I'm interested in the React project.",
    time: "10:30 AM",
    direction: "incoming",
  },
  {
    id: 2,
    sender: "Me",
    content: "Great! Tell me more about your experience.",
    time: "10:35 AM",
    direction: "outgoing",
  },
  {
    id: 3,
    sender: "John Developer",
    content: "I have 5+ years of React experience...",
    time: "10:40 AM",
    direction: "incoming",
  },
  { id: 4, sender: "John Developer", content: "When can you start?", time: "10:45 AM", direction: "incoming" },
]

export function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState(conversations[0])
  const [message, setMessage] = useState("")

  return (
    <div className="p-8 h-full">
      <h1 className="text-3xl font-bold text-white mb-6">Messages</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-180px)]">
        {/* Conversations List */}
        <Card className="bg-slate-800/50 border-slate-700 flex flex-col">
          <CardHeader className="pb-4 border-b border-slate-700">
            <CardTitle className="text-white">Conversations</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 overflow-auto p-0">
            <div className="divide-y divide-slate-700">
              {conversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedChat(conv)}
                  className={`w-full p-4 text-left transition-colors ${
                    selectedChat.id === conv.id ? "bg-slate-700/50" : "hover:bg-slate-700/30"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${conv.online ? "bg-emerald-500" : "bg-slate-500"}`} />
                        <p className="font-medium text-slate-200 truncate">{conv.name}</p>
                      </div>
                      <p className="text-sm text-slate-400 truncate mt-1">{conv.lastMessage}</p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className="text-xs text-slate-500">{conv.time}</span>
                      {conv.unread && <div className="w-2 h-2 rounded-full bg-indigo-500" />}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="bg-slate-800/50 border-slate-700 lg:col-span-2 flex flex-col">
          {/* Chat Header */}
          <CardHeader className="border-b border-slate-700 pb-4">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white">{selectedChat.name}</CardTitle>
                <p className="text-xs text-slate-400 mt-1">{selectedChat.online ? "Online" : "Offline"}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-200">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="text-slate-400 hover:text-slate-200">
                  <Video className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          <CardContent className="flex-1 overflow-auto p-6 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.direction === "outgoing" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-xs px-4 py-2 rounded-lg ${
                    msg.direction === "outgoing" ? "bg-indigo-600/80 text-white" : "bg-slate-700/50 text-slate-200"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                  <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                </div>
              </div>
            ))}
          </CardContent>

          {/* Input */}
          <div className="border-t border-slate-700 p-4">
            <div className="flex gap-3">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-slate-700/50 border-slate-600 text-slate-200"
              />
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
