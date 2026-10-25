import { InstagramPost } from '@/lib/types/instagram'

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=media_type,media_url,thumbnail_url,permalink,caption,like_count,comments_count,is_shared_to_feed&limit=20&access_token=${token}`,
    { next: { revalidate: 3600 } } // revalidates hourly — instagram URLs expire in 1 hour
  )
  const data = await res.json()
  const posts: InstagramPost[] = data.data ?? []

  // Trial reels are not shared to feed — filter them out.
  // Non-video posts don't have is_shared_to_feed, so we only apply the check to VIDEO type.
  return posts.filter((p) => p.media_type !== 'VIDEO' || p.is_shared_to_feed === true).slice(0, 4)
}
