import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import type { Options as PrettyCodeOptions } from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm'
import { getPost, getAllSlugs } from '@/lib/blog'
import { mdxComponents } from '@/components/blog/MDXComponents'
import { NewsletterForm } from '@/components/blog/NewsletterForm'
import { BASE_URL } from '@/lib/site'

const prettyCodeOptions: PrettyCodeOptions = {
  theme: 'vesper',
  keepBackground: false,
  defaultLang: 'plaintext',
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  const fm = post.frontmatter
  const url = fm.canonicalUrl ?? `${BASE_URL}/blog/${slug}`
  const ogImage = fm.ogImage ?? fm.coverImage ?? '/og.jpg'

  return {
    title: fm.title,
    description: fm.description,
    keywords: fm.keywords ?? fm.tags,
    authors: [{ name: fm.author }],
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: fm.title,
      description: fm.description,
      url,
      publishedTime: fm.date,
      modifiedTime: fm.lastModified ?? fm.date,
      authors: [fm.author],
      tags: fm.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fm.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fm.title,
      description: fm.description,
      images: [ogImage],
    },
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const { frontmatter, content, readingTime } = post
  const date = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const url = frontmatter.canonicalUrl ?? `${BASE_URL}/blog/${slug}`
  const image = frontmatter.ogImage ?? frontmatter.coverImage

  const jsonLd: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: frontmatter.title,
      description: frontmatter.description,
      datePublished: frontmatter.date,
      dateModified: frontmatter.lastModified ?? frontmatter.date,
      author: { '@type': 'Person', name: frontmatter.author },
      keywords: (frontmatter.keywords ?? frontmatter.tags).join(', '),
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      ...(image ? { image: `${BASE_URL}${image}` } : {}),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${BASE_URL}/blog` },
        { '@type': 'ListItem', position: 3, name: frontmatter.title, item: url },
      ],
    },
    ...(frontmatter.faq && frontmatter.faq.length > 0
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: frontmatter.faq.map((item) => ({
              '@type': 'Question',
              name: item.question,
              acceptedAnswer: { '@type': 'Answer', text: item.answer },
            })),
          },
        ]
      : []),
  ]

  return (
    <main className="w-full min-w-0 px-6 md:px-16 py-20 max-w-4xl mx-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center gap-3">
          {frontmatter.tags[0] && (
            <span className="font-mono text-xs text-accent/80 border border-accent/40 rounded px-3 py-1.5">
              {frontmatter.tags[0]}
            </span>
          )}
        </div>

        <h1 className="text-h2 text-foreground/95 leading-tight break-words">
          {frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-foreground/35">
          <span>{date}</span>
          <span>·</span>
          <span>{readingTime}</span>
          <span>·</span>
          <span>{frontmatter.author}</span>
        </div>
      </div>

      {/* Body */}
      <article className="min-w-0">
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
            },
          }}
        />
      </article>

      <div className="mt-16">
        <NewsletterForm />
      </div>
    </main>
  )
}
