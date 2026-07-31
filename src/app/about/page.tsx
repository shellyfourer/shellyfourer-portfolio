import ExploreRail from '@/components/shared/ExploreRail'
import { SectionReveal } from '@/components/shared/SectionReveal'
import AboutHero from '@/components/about/AboutHero'
import TwoProcesses from '@/components/about/TwoProcesses'
import TechStack from '@/components/about/TechStack'
import GitTimeline from '@/components/about/GitTimeline'
import Philosophy from '@/components/about/Philosophy'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Half artist, half engineer. Software engineering student working across TypeScript/Next.js, Java/Spring Boot, and C++. Full-stack developer at Roket Agency, with a background in fine arts, music, and theater.',
  openGraph: {
    title: 'About Shelly Fourer - Software Engineer & Artist',
    description:
      'Half artist, half engineer. Software engineering student working across TypeScript/Next.js, Java/Spring Boot, and C++. Full-stack developer at Roket Agency.',
    url: 'https://shellyfourer.com/about',
  },
  twitter: {
    title: 'About Shelly Fourer - Software Engineer & Artist',
    description:
      'Half artist, half engineer. Software engineering student, full-stack developer at Roket Agency, and creative problem solver.',
  },
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
