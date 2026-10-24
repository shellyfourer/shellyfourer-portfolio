import { AnimatedEyebrow } from '@/components/shared/AnimatedEyebrow'
import { AnimatedHeadline } from '@/components/shared/AnimatedHeadline'
import { AnimatedFadeIn } from '@/components/shared/AnimatedFadeIn'
import { HeroScrollIndicator } from '@/components/shared/HeroScrollIndicator'
import { SocialsRail } from '@/components/shared/SocialsRail'

const accent =
  'font-serif italic bg-linear-to-r from-accent-deep to-accent-vivid bg-clip-text text-transparent'

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden
            h-screen-nav
            px-6 md:px-16 pb-12 md:pb-16 gap-8 snap-none"
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
          Software Engineering student crafting full-stack experiences with strong systems thinking
          and creative execution.
        </AnimatedFadeIn>
      </div>

      <HeroScrollIndicator delay={1} />

      <SocialsRail />
    </section>
  )
}
