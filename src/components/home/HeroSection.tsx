import { AnimatedEyebrow } from '@/components/shared/AnimatedEyebrow'
import { AnimatedHeadline } from '@/components/shared/AnimatedHeadline'
import { AnimatedFadeIn } from '@/components/shared/AnimatedFadeIn'
import { HeroScrollIndicator } from '@/components/shared/HeroScrollIndicator'
import { socialLinks } from '@/lib/socials'

const accent =
  'font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent'

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden
            h-screen-nav
            px-6 md:px-16 gap-6 snap-none"
    >
      {/* Center content */}
      <div className="flex flex-col items-center gap-4 md:gap-6">
        <AnimatedEyebrow className="font-mono text-sm text-accent select-none">
          <span className="text-accent/30">&lt;</span>
          Shelly Fourer · creative_dev <span className="text-accent/30">/&gt;</span>
          <span className="cursor-blink text-accent/50 ml-0.5">_</span>
        </AnimatedEyebrow>

        {/* Desktop version */}
        <AnimatedHeadline className="hidden sm:block text-h1 text-center " delay={0.25}>
          feel in <span className={accent}>code</span>, think in{' '}
          <span className={accent}>color</span>.
        </AnimatedHeadline>

        {/* Mobile version */}

        <AnimatedHeadline className="sm:hidden text-h1 text-center " delay={0.25}>
          feel in <span className={accent}>code</span>, <br /> think in{' '}
          <span className={accent}>color</span>.
        </AnimatedHeadline>

        <AnimatedFadeIn
          className="text-base text-foreground leading-relaxed text-center"
          delay={0.5}
        >
          Creative Software Engineering student shipping full-stack products - and it shows.
        </AnimatedFadeIn>
      </div>

      <HeroScrollIndicator delay={1} />

      {/* Socials - bottom left, desktop only */}

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
    </section>
  )
}
