import Link from 'next/link'

export default function BlogSection() {
  return (
    <section
      id="blog"
      className="flex items-center
            px-6 md:px-12 lg:pl-16 lg:pr-40
            min-h-screen-nav py-20 lg:py-0 lg:h-screen-nav"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 w-full items-center">
        {/* Left — text + pill (mobile/tablet) + button */}
        <div className="flex flex-col gap-8">
          <p className="font-mono text-sm text-accent/65 tracking-wide select-none">
            <span className="text-accent/30">{'//'} </span>blog
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-stretch gap-2.5">
              <span className="w-0.5 bg-accent-deep shrink-0" />
              <h2 className="text-h2">Coming soon</h2>
            </div>
            <p className="text-lead font-medium text-foreground/70 leading-relaxed">
              A space where I reflect on learning, building, and growing as a developer and
              creative.
            </p>
          </div>

          {/* Pill — inline on mobile/tablet, hidden at lg (shown in right column instead) */}
          <div className="lg:hidden">
            <div className="inline-flex bg-surface-raised/90 border border-border/30 rounded-xl px-5 py-3.5 font-mono text-sm text-foreground/60 whitespace-nowrap">
              <span className="text-accent-deep/70">~ %</span>
              {' tail -f thoughts.log '}
              <span className="text-accent-deep/70">█</span>
            </div>
          </div>

          <Link href="/" className="btn-brand self-start">
            Read
          </Link>
        </div>

        {/* Right — floating draft cards, desktop only */}
        <div className="hidden lg:block relative h-72" aria-hidden="true">
          {/* Pill — tail command */}
          <div className="-rotate-[1.5deg] absolute top-0 left-0">
            <div className="bg-surface-raised/90 border border-border/30 rounded-xl px-5 py-3.5 font-mono text-sm text-foreground/60 whitespace-nowrap">
              <span className="text-accent-deep/70">~ %</span>
              {' tail -f thoughts.log '}
              <span className="text-accent-deep/70">█</span>
            </div>
          </div>

          {/* Draft card 1 */}
          <div className="rotate-2 absolute top-20 left-0">
            <div className="bg-surface/92 border border-accent/40 rounded-lg w-[270px] h-[104px] overflow-hidden relative">
              <p className="absolute left-5 top-4 text-sm font-medium text-foreground/95 w-[230px] leading-[1.35]">
                why terminals feel human
              </p>
              <p className="absolute left-5 bottom-4 font-mono text-xs text-accent/55">
                draft · thoughts/01.md
              </p>
            </div>
          </div>

          {/* Draft card 2 */}
          <div className="-rotate-[2.5deg] absolute top-44 right-0">
            <div className="bg-surface/92 border border-accent/40 rounded-lg w-[270px] h-[104px] overflow-hidden relative">
              <p className="absolute left-5 top-4 text-sm font-medium text-foreground/95 w-[230px] leading-[1.35]">
                on color systems & feeling
              </p>
              <p className="absolute left-5 bottom-4 font-mono text-xs text-accent/55">
                draft · thoughts/02.md
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
