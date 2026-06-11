'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

const links = [
  { label: 'The Place', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Visit', href: '#location' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 transition-all duration-300 md:px-12',
        scrolled
          ? 'border-b border-border bg-background/90 py-4 backdrop-blur-md'
          : 'border-b border-transparent',
      )}
    >
      <a
        href="#top"
        className="font-heading text-2xl tracking-[0.18em] text-cream md:text-3xl"
      >
        TAVERNA
      </a>

      <ul className="hidden items-center gap-9 md:flex">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-cream"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#location"
        className="rounded-full bg-green px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-green-dark"
      >
        Reserve
      </a>
    </nav>
  )
}
