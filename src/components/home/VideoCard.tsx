import Link from 'next/link'
import { YouTubeVideo } from '@/lib/types/youtube'

export default function VideoCard({ video }: { video: YouTubeVideo }) {
  // Muted autoplay + loop. `playlist=id` is required for a single video to loop.
  const src =
    `https://www.youtube-nocookie.com/embed/${video.id}` +
    `?autoplay=1&mute=1&loop=1&playlist=${video.id}` +
    `&playsinline=1&rel=0&modestbranding=1`

  return (
    <div className="group flex flex-col border border-border/25 hover:border-accent/50 rounded-xl overflow-hidden bg-surface transition-colors duration-200">
      {/* Terminal chrome */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-border/20 bg-surface-raised shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-danger/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-warning/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-success/70" />
        </div>
        <Link
          href={video.permalink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-foreground/30 truncate hover:text-accent transition-colors"
        >
          {video.title || 'youtube video'}
        </Link>
        <div className="ml-auto flex items-center gap-1.5 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-success/80" />
          <span className="font-mono text-[10px] text-foreground/30">live</span>
        </div>
      </div>

      {/* Autoplaying embed */}
      <div className="aspect-video relative overflow-hidden bg-black">
        <iframe
          src={src}
          title={video.title}
          className="absolute inset-0 w-full h-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  )
}
