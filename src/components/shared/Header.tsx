'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GitBranch } from 'lucide-react'
import { HamburgerMenu } from '@/components/shared/HamburgerMenu'
import { NavTabs } from '@/components/shared/NavTabs'

const macDotClass = 'size-3 rounded-full'
const monoFontClass = 'font-mono text-[12px]'

export default function Header() {
  const pathname = usePathname()

  function handleLogoClick(e: React.MouseEvent) {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 select-none backdrop-blur-xl pt-[env(safe-area-inset-top)]">
      <div aria-hidden className="absolute inset-0 bg-surface/30 pointer-events-none" />
      {/* top border: static white rim */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"
      />
      {/* bottom border: animated shimmer */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px glass-shimmer pointer-events-none"
      />

      <div className="relative flex flex-col text-foreground">
        <div className="flex items-center gap-4 p-3 border-b border-border/15">
          <div className="hidden md:flex items-center gap-2">
            <span className={`${macDotClass} bg-danger`} />
            <span className={`${macDotClass} bg-warning`} />
            <span className={`${macDotClass} bg-success`} />
          </div>

          <Link
            href="/"
            onClick={handleLogoClick}
            className={`${monoFontClass} font-bold text-default-gradient hover:opacity-70 transition-opacity`}
          >
            shelly-portfolio
          </Link>

          <div className={`hidden md:flex items-center gap-2 ${monoFontClass} text-foreground/90`}>
            <GitBranch className="size-3" />
            <span>main</span>
          </div>

          <HamburgerMenu />
        </div>

        <NavTabs />
      </div>
    </header>
  )
}
