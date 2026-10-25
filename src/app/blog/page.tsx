import type { Metadata } from 'next'
import ExploreRail from '@/components/shared/ExploreRail'
import { SectionReveal } from '@/components/shared/SectionReveal'
import BlogHero from '@/components/blog/BlogHero'
import PostList from '@/components/blog/PostList'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on software engineering, reverse engineering, creative development, and building things.',
  alternates: { canonical: 'https://shellyfourer.com/blog' },
  openGraph: {
    type: 'website',
    title: 'Blog | Shelly Fourer',
    description:
      'Thoughts on software engineering, reverse engineering, creative development, and building things.',
    url: 'https://shellyfourer.com/blog',
    images: [
      {
        url: '/og.jpg',
        width: 1200,
        height: 630,
        alt: 'Shelly Fourer | Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Shelly Fourer',
    description:
      'Thoughts on software engineering, reverse engineering, creative development, and building things.',
    images: ['/og.jpg'],
  },
}

export default function BlogPage() {
  return (
    <div className="font-sans text-foreground">
      <div className="relative">
        <ExploreRail />
        <BlogHero />
        <SectionReveal>
          <PostList />
        </SectionReveal>
      </div>
    </div>
  )
}
