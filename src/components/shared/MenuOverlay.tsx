'use client'
import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion } from 'motion/react'
import { usePathname, useRouter } from 'next/navigation'
import { FaReact } from 'react-icons/fa'
import { socials } from '@/lib/socials'

const navItems = [
  { label: 'home.tsx', section: null },
  { label: 'about.tsx', section: 'about' },
  { label: 'projects.tsx', section: 'projects' },
  { label: 'socials.tsx', section: 'socials' },
  { label: 'blog.tsx', section: 'blog' },
  { label: 'contact.tsx', section: 'contact' },
]

type MenuOverlayProps = { onClose: () => void }

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  const pathname = usePathname()
  const router = useRouter()
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = ''
    }
  }, [])

  function handleNav(section: string | null) {
    onClose()
    if (section === null) {
      if (pathname === '/') window.scrollTo({ top: 0, behavior: 'smooth' })
      else router.push('/')
      return
    }
    if (pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      sessionStorage.setItem('scrollToSection', section)
      router.push('/')
    }
  }

  return createPortal(
    <motion.div
      id="mobile-menu"
      className="md:hidden fixed inset-0 z-[55] flex flex-col backdrop-blur-xl text-foreground"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Glass base matching header/footer */}
      <div aria-hidden className="absolute inset-0 bg-surface/30 pointer-events-none" />

      {/* nav */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-8 gap-1">
        {navItems.map(({ label, section }, i) => (
          <motion.button
            key={label}
            type="button"
            onClick={() => handleNav(section)}
            className="flex items-center gap-4 py-4 font-mono text-[15px] text-foreground border-b border-border/10 transition-colors duration-150 text-left w-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.08 + i * 0.05, duration: 0.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <FaReact className="size-3.5 shrink-0 text-accent" />
            {label}
          </motion.button>
        ))}
      </div>

      {/* socials */}
      <motion.div
        className="relative z-10 flex items-center gap-6 px-8 pb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      >
        {socials.map(({ key, href, ariaLabel, Icon }) => (
          <a
            key={key}
            href={href}
            {...(key !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
            aria-label={ariaLabel}
            className="text-accent/40 hover:text-accent transition-colors duration-150"
          >
            <Icon className="w-5 h-5" aria-hidden />
          </a>
        ))}
      </motion.div>
    </motion.div>,
    document.body
  )
}
