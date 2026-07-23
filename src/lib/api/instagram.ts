import { InstagramPost } from '@/lib/types/instagram'

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN
  const res = await fetch(
    `https://graph.instagram.com/me/media?fields=media_type,media_url,thumbnail_url,permalink,caption&limit=8&access_token=${token}`,
    { next: { revalidate: 3600 } } // this will revalidate the data every hour because the instagram link expires in 1 hour
    //additionally, it will check for new posts every hour
  )
  const data = await res.json()
  return data.data ?? []
}
