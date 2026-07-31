'use client'
import Link from 'next/link'
import { motion } from 'motion/react'
import { socials } from '@/lib/socials'

type MenuOverlayProps = {
  onClose: () => void
}

export default function MenuOverlay({ onClose }: MenuOverlayProps) {
  return (
    <motion.div
      id="mobile-menu"
      className="fixed left-0 right-0 bottom-0 top-22 z-40 bg-background/95 backdrop-blur-md flex justify-center items-center text-center"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      initial={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Backdrop – tap outside to close */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0"
      />
      <div className="relative flex flex-col items-center gap-10">
        <nav className="flex flex-col gap-5 uppercase font-medium text-lg text-foreground">
          <Link
            href="/public"
            onClick={onClose}
            className="hover:text-accent-deep transition-colors"
          >
            Home
          </Link>
          <Link
            href="/public"
            onClick={onClose}
            className="hover:text-accent-deep transition-colors"
          >
            About
          </Link>
          <Link
            href="/public"
            onClick={onClose}
            className="hover:text-accent-deep transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/public"
            onClick={onClose}
            className="hover:text-accent-deep transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/public"
            onClick={onClose}
            className="hover:text-accent-deep transition-colors"
          >
            Contact
          </Link>
        </nav>

        {/* Socials */}
        <div className="flex items-center gap-6 text-accent/40">
          {socials.map(({ key, href, ariaLabel, Icon }) => (
            <a
              key={key}
              href={href}
              {...(key !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
              aria-label={ariaLabel}
              className="hover:text-accent transition-colors"
            >
              <Icon className="w-6 h-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
