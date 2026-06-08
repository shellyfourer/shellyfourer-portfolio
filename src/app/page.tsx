import ExploreRail from '@/components/shared/ExploreRail'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import ProjectSection from '@/components/home/ProjectSection'
import BlogSection from '@/components/home/BlogSection'
import ContactSection from '@/components/home/ContactSection'
import { SectionReveal } from '@/components/shared/SectionReveal'

export default function Home() {
  return (
    <div className="font-sans text-text">
      <div className="relative">
        <ExploreRail />
        <HeroSection />
        <SectionReveal>
          <AboutSection />
        </SectionReveal>
        <SectionReveal>
          <ProjectSection />
        </SectionReveal>
        <SectionReveal>
          <BlogSection />
        </SectionReveal>
      </div>
      <SectionReveal>
        <ContactSection />
      </SectionReveal>
    </div>
  )
}
