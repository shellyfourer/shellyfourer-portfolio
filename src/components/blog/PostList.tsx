import { getAllPosts } from '@/lib/blog'
import { PostCardFeatured } from '@/components/blog/PostCard'
import { NewsletterForm } from '@/components/blog/NewsletterForm'

export default function PostList() {
  const posts = getAllPosts()

  return (
    <section
      className="flex flex-col justify-center gap-10
        px-6 xl:pl-16 xl:pr-40
        min-h-screen-nav py-20"
    >
      <div className="flex flex-col gap-4">
        <p className="font-mono text-sm text-accent/65 tracking-wide select-none">
          <span className="text-accent/30">{'//'} </span>posts
        </p>
        <div className="flex items-stretch gap-2.5">
          <span className="w-0.5 bg-accent-deep shrink-0" />
          <h2 className="text-h2">Latest writing</h2>
        </div>
      </div>

      {posts.length === 0 ? (
        <p className="font-mono text-sm text-foreground/35">No posts yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start">
          {posts.map((post) => (
            <PostCardFeatured key={post.slug} post={post} />
          ))}
          <NewsletterForm compact />
        </div>
      )}
    </section>
  )
}
