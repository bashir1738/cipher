"use client"

import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"

export default function Home() {
  const router = useRouter()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to Cipher</h1>
        <p className="text-lg text-muted-foreground">Decentralized Freelancer Marketplace on BlockDAG</p>
        <Button
          onClick={() => router.push("/dashboard")}
          size="lg"
          className="bg-blue-600 hover:bg-blue-700 text-white"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  )
}
