import Link from 'next/link'
import { GitBranch } from 'lucide-react'
import { HamburgerMenu } from '@/components/shared/HamburgerMenu'
import { NavTabs } from '@/components/shared/NavTabs'

const macDotClass = 'size-3 rounded-full'
const monoFontClass = 'font-mono text-[12px]'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex flex-col bg-surface border-b border-border/30 text-foreground select-none">
      <div className="flex items-center gap-4 p-3 border-b border-border/30">
        <div className="hidden md:flex items-center gap-2">
          <span className={`${macDotClass} bg-danger`} />
          <span className={`${macDotClass} bg-warning`} />
          <span className={`${macDotClass} bg-success`} />
        </div>

        <Link
          href="/"
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
    </header>
  )
}
