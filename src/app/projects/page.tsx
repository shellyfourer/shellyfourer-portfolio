import ProjectsCarousel from '@/components/projects/ProjectsCarousel'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected work - Full-stack web apps, Shopify and WordPress e-commerce, and custom creative builds. Design and development, end to end.',
  openGraph: {
    title: 'Projects - Shelly Fourer',
    description:
      'Selected work - full-stack web apps, Shopify and WordPress e-commerce, and custom creative builds. Design and development, end to end.',
    url: 'https://shellyfourer.com/projects',
  },
  twitter: {
    title: 'Projects - Shelly Fourer',
    description:
      'Selected work - full-stack web apps, Shopify and WordPress e-commerce, and custom creative builds.',
  },
}

export default function ProjectsPage() {
  return (
    <div className="font-sans text-foreground flex-1 flex flex-col">
      <ProjectsCarousel />
    </div>
  )
}
