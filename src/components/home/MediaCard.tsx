import Link from 'next/link'
import { InstagramPost } from '@/lib/types/instagram'
import { LazyVideo } from '@/components/shared/LazyVideo'

const INSTAGRAM_ICON =
  'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'

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
          <span className="w-2.5 h-2.5 rounded-full bg-mac-red/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-mac-yellow/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-mac-green/70" />
        </div>
        <span className="font-mono text-xs text-text/30 truncate">
          {post.caption ?? 'instagram post'}
        </span>
        <div className="ml-auto flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-mac-green/80" />
          <span className="font-mono text-[10px] text-text/30">live</span>
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

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
          <svg className="w-8 h-8 fill-white drop-shadow-md" viewBox="0 0 24 24">
            <path d={INSTAGRAM_ICON} />
          </svg>
        </div>
      </div>
    </Link>
  )
}
