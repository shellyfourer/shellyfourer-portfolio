'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaReact } from 'react-icons/fa'

const navItems = [
  { label: 'about.tsx', href: '/#about', section: 'about' },
  { label: 'projects.tsx', href: '/#projects', section: 'projects' },
  { label: 'socials.tsx', href: '/#socials', section: 'socials' },
  { label: 'blog.tsx', href: '/#blog', section: 'blog' },
  { label: 'contact.tsx', href: '/#contact', section: 'contact' },
]

export function NavTabs() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { threshold: 0.5 }
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="hidden md:flex font-mono overflow-x-auto">
      {navItems.map(({ label, href, section }) => {
        const active = activeSection === section
        const linkClass = active
          ? 'border-accent'
          : 'border-border/15 text-text/50 hover:text-text/75'
        const iconClass = active ? 'text-accent' : 'text-accent-2/55'

        return (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-2 px-4 py-2 text-[12px] whitespace-nowrap border-r border-t transition-colors duration-150 ${linkClass}`}
          >
            <FaReact className={`size-3 shrink-0 transition-colors duration-150 ${iconClass}`} />
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
