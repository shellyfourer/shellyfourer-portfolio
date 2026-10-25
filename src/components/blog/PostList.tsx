import { getAllPosts } from '@/lib/blog'
import { PostCardFeatured, PostCardSmall } from '@/components/blog/PostCard'
import { NewsletterForm } from '@/components/blog/NewsletterForm'

export default function PostList() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <section
      className="flex flex-col justify-center gap-10
        px-6 xl:pl-16 xl:pr-40
        min-h-screen-nav py-20 md:py-0 md:h-screen-nav"
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
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_minmax(0,0.5fr)] gap-6 w-full items-start">
          <PostCardFeatured post={featured} />
          {rest.length > 0 ? (
            <div className="flex flex-col gap-4">
              {rest.map((post) => (
                <PostCardSmall key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <NewsletterForm />
          )}
        </div>
      )}
    </section>
  )
}
