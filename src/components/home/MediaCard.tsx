import Link from 'next/link'
import { Heart, MessageCircle } from 'lucide-react'
import { InstagramPost } from '@/lib/types/instagram'
import { LazyVideo } from '@/components/shared/LazyVideo'

function formatCount(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return String(n)
}

export default function MediaCard({ post }: { post: InstagramPost }) {
  return (
    <Link
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col border border-border/25 hover:border-accent/50 rounded-xl overflow-hidden bg-surface transition-colors duration-200"
    >
      {/* Terminal chrome */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border/20 bg-surface-raised shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
        </div>
        <span className="font-mono text-xs text-foreground/30 truncate">
          {post.caption ?? 'instagram post'}
        </span>
        <div className="ml-auto flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-success/80" />
          <span className="font-mono text-[10px] text-foreground/30">live</span>
        </div>
      </div>

      {/* Media */}
      <div className="aspect-square relative overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-110">
          {post.media_type === 'VIDEO' ? (
            <LazyVideo
              src={post.media_url}
              poster={post.thumbnail_url}
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={post.media_url}
              alt={post.caption ?? ''}
              className="w-full h-full object-cover"
            />
          )}
        </div>

        <div className="absolute inset-0 flex items-center justify-center gap-5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/40">
          {post.like_count != null && (
            <div className="flex flex-col items-center gap-1 text-white drop-shadow">
              <Heart className="w-6 h-6 fill-white stroke-none" />
              <span className="font-mono text-sm font-semibold">
                {formatCount(post.like_count)}
              </span>
            </div>
          )}
          {post.comments_count != null && (
            <div className="flex flex-col items-center gap-1 text-white drop-shadow">
              <MessageCircle className="w-6 h-6 fill-white stroke-none" />
              <span className="font-mono text-sm font-semibold">
                {formatCount(post.comments_count)}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
