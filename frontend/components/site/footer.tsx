import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export function SiteFooter() {
  const year = new Date().getFullYear()

  const footerSections = [
    {
      title: 'Product',
      links: [
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Features', href: '#features' },
        { label: 'Pricing', href: '#pricing' },
      ]
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Blog', href: '#blog' },
        { label: 'Contact', href: '#contact' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
        { label: 'Security', href: '/security' },
      ]
    },
  ]

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div>
            <h3 className="text-lg font-bold tracking-tight mb-3">Cipher</h3>
            <p className="text-sm text-slate-400 mb-4">Decentralized freelance marketplace on BlockDAG.</p>
            <div className="flex gap-3">
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <div>© {year} Cipher. All rights reserved.</div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <span>Made with ❤️ for freelancers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
