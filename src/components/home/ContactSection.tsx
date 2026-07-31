import Link from 'next/link'
import { socials } from '@/lib/socials'

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center
            px-6 xl:pl-16 xl:pr-40
            min-h-screen-nav py-20 md:py-0 md:h-screen-nav"
    >
      <div className="flex flex-col xl:grid xl:grid-cols-2 gap-10 lg:gap-16 w-full">
        {/* Left — heading + description + CTA */}
        <div className="flex flex-col gap-8">
          <p className="font-mono text-sm text-accent/65 tracking-wide select-none">
            <span className="text-accent/30">{'//'} </span>contact_me
          </p>
          <div className="flex items-stretch gap-2.5">
            <span className="w-0.5 bg-accent-deep shrink-0" />
            <h2 className="text-h2">
              Let&apos;s build something{' '}
              <span className="font-serif italic text-default-gradient">worth building</span>
            </h2>
          </div>
          <p className="text-base text-foreground/55">
            Open to collaborations, freelance work, and conversations about ideas. If something here
            resonated — reach out.
          </p>
          <Link href="mailto:shellyfourer@gmail.com" className="btn-brand self-start">
            send_message
          </Link>
        </div>

        {/* Right — social link cards */}
        <div className="flex flex-col justify-center gap-3">
          {socials.map(({ key, label, handle, href, Icon }) => (
            <a
              key={key}
              href={href}
              {...(key !== 'email' && { target: '_blank', rel: 'noopener noreferrer' })}
              className="group flex items-center gap-4 px-5 py-4 rounded-lg border border-border/30 bg-surface hover:border-accent/40 hover:bg-accent/[0.04] transition-all"
            >
              <Icon className="w-5 h-5 text-accent/50 group-hover:text-accent transition-colors shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-xs text-foreground/35 tracking-wide">{label}</span>
                <span className="font-mono text-sm text-foreground/80 truncate">{handle}</span>
              </div>
              <span className="ml-auto font-mono text-xs text-foreground/25 group-hover:text-accent/50 transition-colors">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
