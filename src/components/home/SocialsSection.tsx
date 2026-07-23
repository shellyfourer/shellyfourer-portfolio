import { fetchInstagramPosts } from '@/lib/api/instagram'
import MediaCard from './MediaCard'
import Link from 'next/link'

const INSTAGRAM_ICON =
  'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z'

export async function SocialsSection() {
  const posts = await fetchInstagramPosts()

  return (
    <section
      id="socials"
      className="flex flex-col justify-center gap-8
        px-6 md:pr-24 lg:pl-16 lg:pr-40
        h-[calc(100svh-90px)] md:h-[calc(100svh-122px)] lg:h-[calc(100svh-148px)]"
    >
      {/* Heading */}
      <div className="flex flex-col gap-5">
        <p className="font-mono text-sm text-accent/65 tracking-wide select-none">
          <span className="text-accent/30">{'//'} </span>socials
        </p>
        <div className="flex items-stretch gap-2.5">
          <span className="w-0.5 bg-accent-2 shrink-0" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-1.6px]">
            My journey in the world of software engineering
          </h2>
        </div>
      </div>

      {/* Feed */}
      <div>
        {/* Instagram label */}
        <Link href="https://www.instagram.com/byshellyfourer" target="_blank" rel="noopener noreferrer">
          <div className="flex items-center gap-2 font-mono text-xs text-text/40 mb-4 hover:text-accent transition duration-300">
            <svg className="w-4 h-4 fill-accent shrink-0" viewBox="0 0 24 24">
              <path d={INSTAGRAM_ICON} />
            </svg>
            Instagram
          </div>
        </Link>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {posts.map((post) => (
            <MediaCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
