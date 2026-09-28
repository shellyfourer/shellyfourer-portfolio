import { fetchInstagramPosts } from '@/lib/api/instagram'
import { fetchYouTubeVideos } from '@/lib/api/youtube'
import MediaCard from './MediaCard'
import VideoCard from './VideoCard'
import Link from 'next/link'

const INSTAGRAM_ICON =
  'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'

const YOUTUBE_ICON =
  'M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z'

export async function SocialsSection() {
  const [posts, videos] = await Promise.all([fetchInstagramPosts(), fetchYouTubeVideos()])

  return (
    <section
      id="socials"
      className="flex flex-col justify-center gap-8
        px-6 xl:pl-16 xl:pr-40
        min-h-screen-nav py-20 md:py-0 md:h-screen-nav"
    >
      {/* Heading */}
      <div className="flex flex-col gap-5">
        <p className="font-mono text-sm text-accent/65 tracking-wide select-none">
          <span className="text-accent/30">{'//'} </span>socials
        </p>
        <div className="flex items-stretch gap-2.5">
          <span className="w-0.5 bg-accent-deep shrink-0" />
          <h2 className="text-h2">My journey in the world of software engineering</h2>
        </div>
      </div>

      {/* YouTube feed */}
      {videos.length > 0 && (
        <div>
          {/* YouTube label */}
          <Link
            href="https://www.youtube.com/@byshellyfourer"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 font-mono text-xs text-foreground/40 mb-4 hover:text-accent transition duration-300">
              <svg className="w-4 h-4 fill-accent shrink-0" viewBox="0 0 576 512">
                <path d={YOUTUBE_ICON} />
              </svg>
              YouTube
            </div>
          </Link>

          {/* Grid — each video spans 2 columns, matching the width of two
              Instagram posts. Left-aligned, so a single video sits at the start. */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {videos.map((video) => (
              <div key={video.id} className="col-span-2">
                <VideoCard video={video} />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Instagram feed */}
      <div>
        {/* Instagram label */}
        <Link
          href="https://www.instagram.com/byshellyfourer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="flex items-center gap-2 font-mono text-xs text-foreground/40 mb-4 hover:text-accent transition duration-300">
            <svg className="w-4 h-4 fill-accent shrink-0" viewBox="0 0 24 24">
              <path d={INSTAGRAM_ICON} />
            </svg>
            Instagram
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {posts.map((post) => (
            <MediaCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
