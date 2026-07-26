import { AnimatedEyebrow } from '@/components/shared/AnimatedEyebrow'
import { AnimatedCyclingHeadline } from '@/components/shared/AnimatedCyclingHeadline'
import { HeroScrollIndicator } from '@/components/shared/HeroScrollIndicator'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const accent =
  'pb-[0.2em] -mb-[0.2em] pr-[0.2em] -mr-[0.2em] ' +
  'relative inline-block font-serif text-default-gradient font-normal italic uppercase tracking-[-1.6px]'

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center overflow-hidden
            h-screen-nav
            px-6 md:px-16 gap-6 snap-none"
    >
      {/* Center content */}
      <div className="flex flex-col items-center gap-4 md:gap-5">
        <AnimatedEyebrow className="font-mono text-sm text-accent select-none">
          <span className="text-accent/30">&lt;</span>
          creative_dev
          <span className="text-accent/30"> /&gt;</span>
          <span className="cursor-blink text-accent/50 ml-0.5">_</span>
        </AnimatedEyebrow>

        <AnimatedCyclingHeadline
          intro={
            <>
              Hi, my name <br /> is <span className={accent}>Shelly</span>
            </>
          }
          outro={
            <>
              I create <span className={accent}>UNIQUE</span>
              <br />
              experiences
            </>
          }
        />

        <p className="text-lg md:text-xl lg:text-2xl tracking-[-1.2px] text-center text-foreground p-2.5">
          I&#39;m a Web Developer and Artist <br /> that thinks in code and feels in color
        </p>
      </div>

      <HeroScrollIndicator delay={3} />

      {/* Socials - bottom left, desktop only */}

      <div className="hidden xl:flex xl:flex-col items-start justify-center px-16 gap-5 absolute bottom-0 pb-10 left-0">
        <div className="flex xl:flex-col items-center gap-5 text-accent/40">
          <a
            href="https://github.com/shellyfourer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid place-items-center w-8 h-8 md:w-10 md:h-10 hover:text-accent transition-colors"
          >
            <FaGithub className="w-8 h-8 md:w-10 md:h-10" />
          </a>

          <a
            href="https://linkedin.com/in/shellyfourer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid place-items-center w-8 h-8 md:w-10 md:h-10 hover:text-accent transition-colors"
          >
            <FaLinkedin className="w-8 h-8 md:w-10 md:h-10" />
          </a>

          <a
            href="https://instagram.com/byshellyfourer"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="grid place-items-center w-8 h-8 md:w-10 md:h-10 hover:text-accent transition-colors"
          >
            <FaInstagram className="w-8 h-8 md:w-10 md:h-10" />
          </a>
        </div>
      </div>
    </section>
  )
}
