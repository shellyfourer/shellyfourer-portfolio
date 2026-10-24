import Link from 'next/link'
import Image from 'next/image'
import type { PostMeta } from '@/lib/blog'

export function PostCardFeatured({ post }: { post: PostMeta }) {
  const { slug, frontmatter, readingTime } = post
  const date = new Date(frontmatter.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex flex-col bg-surface border border-border/30 rounded-card overflow-hidden
        transition-[border-color,box-shadow] duration-200 hover:border-accent/50 hover:shadow-glow-sm"
    >
      {/* Cover */}
      {frontmatter.coverImage ? (
        <div className="relative w-full aspect-[21/9] bg-surface-raised overflow-hidden">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-200"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      ) : (
        <div className="w-full aspect-[16/9] bg-surface-raised flex items-center justify-center">
          <span className="font-mono text-xs text-foreground/20">[ no cover ]</span>
        </div>
      )}

      {/* Text */}
      <div className="flex flex-col gap-3 px-5 py-4">
        <p className="text-base font-medium text-foreground/95 leading-snug">{frontmatter.title}</p>
        <p className="text-sm text-foreground/45 leading-relaxed line-clamp-2">
          {frontmatter.description}
        </p>
        <div className="flex items-center gap-2 font-mono text-xs text-foreground/30 pt-1 flex-wrap">
          <span className="whitespace-nowrap">{date}</span>
          <span>·</span>
          <span className="whitespace-nowrap">{readingTime}</span>
          {frontmatter.draft && (
            <>
              <span>·</span>
              <span className="text-warning whitespace-nowrap">draft</span>
            </>
          )}
          {frontmatter.tags[0] && (
            <>
              <span>·</span>
              <span className="text-accent/50 whitespace-nowrap">{frontmatter.tags[0]}</span>
            </>
          )}
        </div>
      </div>
    </Link>
  )
}

export function PostCardSmall({ post }: { post: PostMeta }) {
  const { slug, frontmatter, readingTime } = post

  return (
    <Link
      href={`/blog/${slug}`}
      className="group flex items-center gap-4 bg-surface border border-border/30 rounded-card px-4 py-3.5 overflow-hidden
        transition-[border-color,box-shadow] duration-200 hover:border-accent/50 hover:shadow-glow-sm"
    >
      {frontmatter.coverImage && (
        <div className="relative w-12 h-12 shrink-0 rounded overflow-hidden bg-surface-raised">
          <Image
            src={frontmatter.coverImage}
            alt={frontmatter.title}
            fill
            className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-200"
            sizes="48px"
          />
        </div>
      )}
      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-sm font-medium text-foreground/90 leading-snug truncate">
          {frontmatter.title}
        </p>
        <p className="font-mono text-xs text-foreground/30">{readingTime}</p>
      </div>
    </Link>
  )
}
