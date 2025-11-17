"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ShieldCheck, GitBranch, Clock, Zap, Users, TrendingUp, CheckCircle, Rocket, Lock, BarChart3 } from "lucide-react"

export default function Home() {
  const router = useRouter()

  const heroFeatures = [
    { icon: Lock, label: 'On-chain Escrow' },
    { icon: Rocket, label: 'Instant Payouts' },
    { icon: BarChart3, label: 'Zero Hidden Fees' },
  ]

  const features = [
    { title: 'Secure Payments', desc: 'On-chain escrow for trustless transactions.', icon: ShieldCheck },
    { title: 'Decentralized Workflows', desc: 'Collaborate across a decentralized DAG network.', icon: GitBranch },
    { title: 'Fast Settlements', desc: 'Low-latency, fee-efficient payouts.', icon: Clock },
  ]

  const benefits = [
    { title: 'For Freelancers', items: ['Guaranteed payments', 'No platform fees', 'Full control of rates', 'Direct client messaging'] },
    { title: 'For Clients', items: ['Trusted contractor vetting', 'Smart escrow protection', 'Transparent pricing', 'Easy contract management'] },
  ]

  const useCases = [
    { icon: Zap, title: 'Web & App Dev', desc: 'Build scalable projects with secure milestone payments.' },
    { icon: Users, title: 'Design Services', desc: 'Collaborate on creative projects with decentralized workflows.' },
    { icon: TrendingUp, title: 'Consulting', desc: 'Manage hourly or fixed-rate engagements transparently.' },
  ]

  const testimonials = [
    { name: 'Sarah Chen', role: 'Freelance Developer', text: 'Cipher finally gave me back control of my earnings. No hidden fees, instant payouts.' },
    { name: 'Marcus Rodriguez', role: 'Agency Founder', text: 'Managing distributed teams is seamless. The contract system is a game-changer.' },
    { name: 'Emma Thompson', role: 'Client Manager', text: 'I trust the escrow system. Peace of mind knowing both sides are protected.' },
  ]

  return (
    <div className="w-full bg-background">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center py-16 overflow-hidden">
        {/* Simple background gradient */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-950/10 via-background to-cyan-950/10" />

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="flex flex-col items-center text-center gap-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10">
              <Rocket className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-cyan-300">Decentralized Freelance Marketplace</span>
            </div>

            {/* Heading */}
            <h1 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight max-w-4xl">
              Work <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Without</span> Limits
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Connect with clients, manage contracts on-chain, and get paid instantly. No middleman, no hidden fees.
            </p>

            {/* Feature Badges */}
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              {heroFeatures.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.label} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-slate-700/50">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-slate-300">{feature.label}</span>
                  </div>
                )
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button onClick={() => router.push("/dashboard")} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Start Building
              </Button>
              <Button variant="outline" size="lg" className="border-slate-600 hover:bg-slate-800/50">
                Learn More
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 pt-12 border-t border-slate-800">
              <div>
                <div className="text-2xl font-bold text-cyan-400">1.2k+</div>
                <div className="text-xs text-slate-400 mt-1">Freelancers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">$2.4M+</div>
                <div className="text-xs text-slate-400 mt-1">Contracts</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">98%</div>
                <div className="text-xs text-slate-400 mt-1">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

  {/* Benefits Section */}
  <div id="features" className="py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Built for Both Sides</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="bg-slate-900/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-slate-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div id="use-cases" className="py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Perfect for Any Project</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase) => {
              const Icon = useCase.icon
              return (
                <Card key={useCase.title} className="bg-slate-900/30 border-slate-700/50 hover:border-slate-600/50 transition-colors">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-cyan-400 mb-2" />
                    <CardTitle>{useCase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-400">{useCase.desc}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 border-t border-slate-800 bg-slate-900/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">What Users Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="bg-slate-800/40 border-slate-700/50">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

  {/* Final CTA Section */}
  <div className="py-16 border-t border-slate-800 bg-linear-to-r from-blue-950/30 to-cyan-950/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Take Control?</h2>
          <p className="text-lg text-muted-foreground mb-8">Join thousands of freelancers and clients already using Cipher for secure, decentralized collaboration.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button onClick={() => router.push("/dashboard")} size="lg" className="bg-blue-600 hover:bg-blue-700">Start Free Today</Button>
            <Button variant="outline" size="lg" className="border-slate-600 hover:bg-slate-800/50">View Documentation</Button>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="py-8 border-t border-slate-800 text-center text-sm text-muted-foreground">
        Built for freelancers and clients who want control over payments and contracts.
      </div>
    </div>
  )
}
