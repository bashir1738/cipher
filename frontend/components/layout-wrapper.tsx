"use client"

import { usePathname } from 'next/navigation'
import { SiteHeader } from '@/components/site/header'
import { SiteFooter } from '@/components/site/footer'

export function LayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isDashboard = pathname.startsWith('/dashboard')

  return (
    <>
      {!isDashboard && <SiteHeader />}
      <main className={!isDashboard ? "min-h-[calc(100vh-8rem)]" : ""}>{children}</main>
      {!isDashboard && <SiteFooter />}
    </>
  )
}
