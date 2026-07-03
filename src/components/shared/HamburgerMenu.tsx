'use client'
import { useState } from 'react'
import { AnimatePresence } from 'motion/react'
import MenuOverlay from '@/components/shared/MenuOverlay'

const hamburgerBarClass = 'h-px w-4 bg-current'

export function HamburgerMenu() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-menu"
        onClick={() => setMenuOpen((v) => !v)}
        className="ml-auto md:hidden flex items-center justify-center size-8 hover:opacity-70 transition-opacity"
      >
        <span className="relative size-4">
          <span
            className={`absolute inset-0 flex flex-col justify-center gap-1 transition-opacity duration-200 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}
          >
            <span className={hamburgerBarClass} />
            <span className={hamburgerBarClass} />
            <span className={hamburgerBarClass} />
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${menuOpen ? 'opacity-100' : 'opacity-0'}`}
          >
            <span className={`absolute ${hamburgerBarClass} rotate-45`} />
            <span className={`absolute ${hamburgerBarClass} -rotate-45`} />
          </span>
        </span>
      </button>

      <AnimatePresence>
        {menuOpen && <MenuOverlay onClose={() => setMenuOpen(false)} />}
      </AnimatePresence>
    </>
  )
}
