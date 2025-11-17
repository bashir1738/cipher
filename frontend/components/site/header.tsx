"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
    import { Menu, X } from "lucide-react"
    import { useState } from "react"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-cyan-400 transition-colors">
          Cipher
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/" className="text-slate-400 hover:text-slate-200 transition-colors">Home</Link>
          <Link href="/#features" className="text-slate-400 hover:text-slate-200 transition-colors">Features</Link>
          <Link href="/#use-cases" className="text-slate-400 hover:text-slate-200 transition-colors">Use Cases</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Connect Wallet</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-slate-200 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/50">
          <div className="px-6 py-4 space-y-3 flex flex-col">
            <Link href="/" className="text-slate-400 hover:text-slate-200 transition-colors py-2">Home</Link>
            <Link href="/#features" className="text-slate-400 hover:text-slate-200 transition-colors py-2">Features</Link>
            <Link href="/#use-cases" className="text-slate-400 hover:text-slate-200 transition-colors py-2">Use Cases</Link>
            <div className="pt-3 border-t border-slate-700">
              <Button size="sm" className="w-full bg-blue-600 hover:bg-blue-700">Connect Wallet</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
