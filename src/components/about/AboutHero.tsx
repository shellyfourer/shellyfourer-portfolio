import { AnimatedEyebrow } from '@/components/shared/AnimatedEyebrow'
import { AnimatedHeadline } from '@/components/shared/AnimatedHeadline'
import { AnimatedFadeIn } from '@/components/shared/AnimatedFadeIn'
import { HeroScrollIndicator } from '@/components/shared/HeroScrollIndicator'
import { SocialsRail } from '@/components/shared/SocialsRail'

const chips = ['fine_arts', 'music', 'theater_&_film', 'math_&_science', 'code']
const accent =
  'font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent'
export default function AboutHero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden
        h-screen-nav
        px-6 md:px-16 gap-6"
    >
      <div className="flex flex-col items-center gap-4 md:gap-5">
        <AnimatedEyebrow className="font-mono text-sm text-accent select-none">
          ~ % cat about/shelly.md
          <span className="cursor-blink text-accent/50 ml-0.5"> _</span>
        </AnimatedEyebrow>

        <AnimatedHeadline className="text-h1 text-center">
          half <span className={accent}>artist</span>, half <span className={accent}>engineer</span>
          .
        </AnimatedHeadline>

        <AnimatedFadeIn
          className="text-base text-foreground leading-relaxed text-center max-w-2xl"
          delay={0.3}
        >
          I&apos;m studying software engineering while building Shopify, WordPress, and custom web
          apps through{' '}
          <a
            href="https://roket.lt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-accent/80 hover:text-accent transition-colors"
          >
            Roket Agency
          </a>
          , + taking on full-stack projects for my own clients.
        </AnimatedFadeIn>

        <AnimatedFadeIn className="flex flex-wrap justify-center gap-2" delay={0.5}>
          {chips.map((chip) => (
            <span
              key={chip}
              className="font-mono text-xs text-accent/80 border border-accent/40 rounded px-3 py-1.5"
            >
              {chip}
            </span>
          ))}
        </AnimatedFadeIn>
      </div>

      <HeroScrollIndicator delay={1} />

      <SocialsRail />
    </section>
  )
}
