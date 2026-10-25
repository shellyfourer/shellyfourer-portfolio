import { AnimatedEyebrow } from '@/components/shared/AnimatedEyebrow'
import { AnimatedHeadline } from '@/components/shared/AnimatedHeadline'
import { AnimatedFadeIn } from '@/components/shared/AnimatedFadeIn'
import { HeroScrollIndicator } from '@/components/shared/HeroScrollIndicator'
import { SocialsRail } from '@/components/shared/SocialsRail'

const accent =
  'font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent'

export default function BlogHero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden
        h-screen-nav px-6 md:px-16 gap-6"
    >
      <div className="flex flex-col items-center gap-4 md:gap-5">
        <AnimatedEyebrow className="font-mono text-sm text-accent select-none">
          ~ % cat blog/thoughts.md
          <span className="cursor-blink text-accent/50 ml-0.5"> _</span>
        </AnimatedEyebrow>

        <AnimatedHeadline className="text-h1 text-center" delay={0.25}>
          think in <span className={accent}>logs</span>, <br className="sm:hidden" />
          write in <span className={accent}>code</span>.
        </AnimatedHeadline>

        <AnimatedFadeIn
          className="text-base text-foreground/55 leading-relaxed text-center"
          delay={0.3}
        >
          Thoughts on software engineering, reverse engineering, creative development, and building
          things.
        </AnimatedFadeIn>
      </div>

      <HeroScrollIndicator delay={1} />

      <SocialsRail />
    </section>
  )
}
