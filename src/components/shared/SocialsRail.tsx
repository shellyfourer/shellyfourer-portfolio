import { socialLinks } from '@/lib/socials'

export function SocialsRail() {
  return (
    <div className="hidden xl:flex xl:flex-col items-start justify-center px-16 gap-5 absolute bottom-0 pb-10 left-0">
      <div className="flex xl:flex-col items-center gap-5 text-accent/40">
        {socialLinks.map(({ key, href, ariaLabel, Icon }) => (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="grid place-items-center w-8 h-8 md:w-10 md:h-10 hover:text-accent transition-colors"
          >
            <Icon className="w-8 h-8 md:w-10 md:h-10" />
          </a>
        ))}
      </div>
    </div>
  )
}
