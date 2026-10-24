import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypePrettyCode from 'rehype-pretty-code'
import type { Options as PrettyCodeOptions } from 'rehype-pretty-code'
import { getPost, getAllSlugs } from '@/lib/blog'
import { mdxComponents } from '@/components/blog/MDXComponents'
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

  const { title, description, coverImage, tags, date, author } = post.frontmatter
  const ogImage = coverImage ?? '/og.jpg'

  return {
    title,
    description,
    keywords: tags,
    openGraph: {
      type: 'article',
      title,
      description,
      url: `${BASE_URL}/blog/${slug}`,
      publishedTime: date,
      authors: [author],
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const { frontmatter, content, readingTime } = post
  const date = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <main className="px-6 md:px-16 py-20 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-6 mb-12">
        <div className="flex items-center gap-3">
          {frontmatter.tags[0] && (
            <span className="font-mono text-xs text-accent/80 border border-accent/40 rounded px-3 py-1.5">
              {frontmatter.tags[0]}
            </span>
          )}
        </div>

        <h1 className="text-h2 text-foreground/95 leading-tight">{frontmatter.title}</h1>

        <div className="flex items-center gap-3 font-mono text-xs text-foreground/35">
          <span>{date}</span>
          <span>·</span>
          <span>{readingTime}</span>
          <span>·</span>
          <span>{frontmatter.author}</span>
        </div>
      </div>

      {/* Body */}
      <article>
        <MDXRemote
          source={content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
            },
          }}
        />
      </article>
    </main>
  )
}
