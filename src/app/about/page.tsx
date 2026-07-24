import ExploreRail from '@/components/shared/ExploreRail'
import { SectionReveal } from '@/components/shared/SectionReveal'
import AboutHero from '@/components/about/AboutHero'
import TwoProcesses from '@/components/about/TwoProcesses'
import TechStack from '@/components/about/TechStack'
import GitTimeline from '@/components/about/GitTimeline'
import Philosophy from '@/components/about/Philosophy'

export const metadata = {
  title: 'About — Shelly Fourer',
  description: 'Half artist, half engineer.',
}

export default function AboutPage() {
  return (
    <div className="font-sans text-foreground">
      <div className="relative">
        <ExploreRail />
        <AboutHero />
        <SectionReveal>
          <TwoProcesses />
        </SectionReveal>
        <SectionReveal>
          <TechStack />
        </SectionReveal>
        <SectionReveal>
          <GitTimeline />
        </SectionReveal>
      </div>
      <SectionReveal>
        <Philosophy />
      </SectionReveal>
    </div>
  )
}
