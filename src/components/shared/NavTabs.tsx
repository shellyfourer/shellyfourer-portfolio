'use client'
import { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { FaReact } from 'react-icons/fa'

const navItems = [
  { label: 'about.tsx', section: 'about' },
  { label: 'projects.tsx', section: 'projects' },
  { label: 'socials.tsx', section: 'socials' },
  { label: 'blog.tsx', section: 'blog' },
  { label: 'contact.tsx', section: 'contact' },
]

export function NavTabs() {
  const [observedSection, setObservedSection] = useState('')
  const pathname = usePathname()
  const router = useRouter()

  const activeSection =
    pathname === '/about' ? 'about' : pathname === '/projects' ? 'projects' : observedSection

  useEffect(() => {
    if (pathname === '/about' || pathname === '/projects') return

    const intersecting = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            intersecting.add(entry.target.id)
            setObservedSection(entry.target.id)
          } else {
            intersecting.delete(entry.target.id)
          }
        }
        if (intersecting.size === 0) setObservedSection('')
      },
      { threshold: 0.5 }
    )
    const sections = document.querySelectorAll('section[id]')
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [pathname])

  useEffect(() => {
    if (pathname !== '/') return
    const target = sessionStorage.getItem('scrollToSection')
    if (!target) return
    sessionStorage.removeItem('scrollToSection')
    const timer = setTimeout(() => {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
    return () => clearTimeout(timer)
  }, [pathname])

  function scrollTo(section: string) {
    if (pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      sessionStorage.setItem('scrollToSection', section)
      router.push('/')
    }
  }

  return (
    <nav className="hidden md:flex font-mono overflow-x-auto">
      {navItems.map(({ label, section }) => {
        const active = activeSection === section
        const btnClass = active
          ? 'border-t-transparent border-r-border/15'
          : 'border-border/15 text-foreground/50 hover:text-foreground/75'
        const iconClass = active ? 'text-accent' : 'text-accent-deep/55'

        return (
          <button
            key={label}
            type="button"
            onClick={() => scrollTo(section)}
            className={`relative flex items-center gap-2 px-4 py-2 text-[12px] whitespace-nowrap border-r border-t transition-colors duration-150 ${btnClass}`}
          >
            {active && (
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-px glass-shimmer pointer-events-none"
              />
            )}
            <FaReact className={`size-3 shrink-0 transition-colors duration-150 ${iconClass}`} />
            {label}
          </button>
        )
      })}
    </nav>
  )
}
