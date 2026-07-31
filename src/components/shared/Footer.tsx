import { GitBranch } from 'lucide-react'
import Link from 'next/link'
import { socials } from '@/lib/socials'

export default function Footer() {
  return (
    <footer className="relative font-mono text-[11px] select-none backdrop-blur-xl border-t border-border/20 text-foreground/60">
      <div aria-hidden className="absolute inset-0 bg-surface/30 pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px glass-shimmer pointer-events-none"
      />

      <div className="relative flex flex-wrap items-center h-6 px-0 gap-0">
        {/* Left group */}
        <div className="flex items-center flex-1 h-full">
          <div className="flex items-center gap-1.5 px-2.5 h-full bg-accent/20 hover:bg-accent/30 transition-colors">
            <GitBranch className="w-3 h-3" />
            <span>main</span>
          </div>

          <div className="flex items-center gap-2.5 px-3 h-full opacity-60">
            <span className="flex items-center gap-1">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              0
            </span>
            <span className="flex items-center gap-1">
              <svg
                width="11"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              0
            </span>
          </div>
        </div>

        {/* Right group */}
        <div className="flex items-center h-full">
          {socials.map(({ key, label, href, Icon, ariaLabel }) => (
            <a
              key={key}
              href={href}
              target={key === 'email' ? undefined : '_blank'}
              rel={key === 'email' ? undefined : 'noopener noreferrer'}
              aria-label={ariaLabel}
              className="px-2.5 h-full flex items-center gap-1.5 opacity-50 hover:opacity-90 hover:bg-white/5 transition-all"
            >
              <Icon className="w-3 h-3" />
              <span className="hidden lg:inline">{label}</span>
            </a>
          ))}

          <span className="h-3.5 w-px bg-white/10 mx-0.5" />

          <Link
            href="/privacy"
            className="px-2.5 h-full flex items-center opacity-40 hover:opacity-70 hover:bg-white/5 transition-all"
          >
            privacy policy
          </Link>

          <span className="hidden lg:flex px-2.5 h-full items-center opacity-25 text-[10px]">
            © {new Date().getFullYear()} Shelly Fourer
          </span>
        </div>
      </div>
    </footer>
  )
}
