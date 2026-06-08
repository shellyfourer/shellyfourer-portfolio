'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'motion/react'
import MenuOverlay from '@/components/shared/MenuOverlay'

const navItems = [
  { label: 'about.tsx', href: '/#about', section: 'about' },
  { label: 'projects.tsx', href: '/#projects', section: 'projects' },
  { label: 'blog.tsx', href: '/#blog', section: 'blog' },
  { label: 'contact.tsx', href: '/#contact', section: 'contact' },
]

const ReactIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="1.35" fill="currentColor" />
    <ellipse cx="8" cy="8" rx="6.8" ry="2.7" stroke="currentColor" strokeWidth="1.1" />
    <ellipse
      cx="8"
      cy="8"
      rx="6.8"
      ry="2.7"
      stroke="currentColor"
      strokeWidth="1.1"
      transform="rotate(60 8 8)"
    />
    <ellipse
      cx="8"
      cy="8"
      rx="6.8"
      ry="2.7"
      stroke="currentColor"
      strokeWidth="1.1"
      transform="rotate(120 8 8)"
    />
  </svg>
)

const GitBranchIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <path d="M6 9v6" />
    <circle cx="18" cy="9" r="3" />
    <path d="M6 6h5a7 7 0 0 1 7 7v3" />
  </svg>
)

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
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
    <>
      <header className="sticky top-0 z-50 bg-surface-raised border-b border-border/30 text-text select-none">
        {/* ── Menu bar — desktop only, JetBrains-style items ── */}
        <div className="hidden md:flex items-center h-7 px-3 border-b border-border/10 bg-surface-raised/90 font-mono text-[11px] text-text/20 select-none">
          {[
            'File',
            'Edit',
            'View',
            'Navigate',
            'Code',
            'Refactor',
            'Run',
            'Tools',
            'Git',
            'Window',
            'Help',
          ].map((item) => (
            <span
              key={item}
              className="px-2 py-1 rounded hover:bg-white/5 hover:text-text/40 transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </div>

        {/* ── Title bar ── */}
        <div className="flex items-center gap-3 px-3 h-9 border-b border-border/15">
          <div className="hidden md:flex items-center gap-1.5 pr-3 border-r border-border/15 self-stretch py-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-mac-red/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-mac-yellow/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-mac-green/70" />
          </div>

          <div className="flex items-center gap-1 font-mono text-[11px] text-text/50">
            <Link
              href="/"
              className="text-default-gradient font-bold hover:opacity-70 transition-opacity"
            >
              shelly-portfolio
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-1.5 font-mono text-[10px] text-text/40">
            <GitBranchIcon className="w-3 h-3" />
            <span>main</span>
          </div>

          <div className="flex-1" />

          {/* Hamburger — mobile only */}
          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex items-center justify-center w-8 h-8 text-text hover:opacity-70 transition-opacity"
          >
            <span className="relative w-4 h-4">
              <span
                className={`absolute inset-0 flex flex-col justify-center gap-1 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
              >
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
                <span className="block h-px w-4 bg-current" />
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
              >
                <span className="absolute block h-px w-4 bg-current rotate-45" />
                <span className="absolute block h-px w-4 bg-current -rotate-45" />
              </span>
            </span>
          </button>
        </div>

        {/* ── Tab bar — desktop only ── */}
        <nav className="hidden md:flex items-stretch h-8 font-mono overflow-x-auto">
          {navItems.map(({ label, href, section }) => {
            const active = activeSection === section
            return (
              <Link
                key={label}
                href={href}
                className={`group relative flex items-center gap-2 px-4 text-[11px] whitespace-nowrap
                  border-r transition-colors duration-150
                  ${
                    active
                      ? 'bg-background/60 text-text/90 border-accent/55'
                      : 'border-border/15 text-text/45 hover:text-text/70 hover:bg-background/20'
                  }`}
              >
                {active && <span className="absolute inset-x-0 top-0 h-0.5 bg-accent" />}
                <ReactIcon
                  className={`w-2.75 h-2.75 shrink-0 transition-colors duration-150
                  ${active ? 'text-accent/85' : 'text-accent-2/55'}`}
                />
                {label}
                <span className="ml-0.5 text-[10px] opacity-0 group-hover:opacity-35 transition-opacity duration-150">
                  ×
                </span>
              </Link>
            )
          })}
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
