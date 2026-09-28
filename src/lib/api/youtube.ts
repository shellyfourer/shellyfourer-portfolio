import { YouTubeVideo } from '@/lib/types/youtube'

const HANDLE = 'byshellyfourer'
const API = 'https://www.googleapis.com/youtube/v3'

// Uploads that run this long or shorter are treated as Shorts and hidden.
// The Data API exposes no direct "isShort" flag and the /shorts/ redirect
// trick isn't reliable server-side, so duration is the deterministic signal.
const SHORTS_MAX_SECONDS = 60

type Thumbnail = { url: string }

interface PlaylistItem {
  contentDetails: { videoId: string }
  snippet: {
    title: string
    publishedAt: string
    thumbnails: {
      maxres?: Thumbnail
      high?: Thumbnail
      medium?: Thumbnail
      default?: Thumbnail
    }
  }
}

interface VideoDetails {
  id: string
  contentDetails: { duration: string }
  statistics: { viewCount?: string; likeCount?: string }
}

// Parse an ISO 8601 duration (e.g. "PT12M27S", "PT1H2M3S") into seconds.
function parseDuration(iso: string): number {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/)
  if (!m) return 0
  const [, h, min, s] = m
  return Number(h ?? 0) * 3600 + Number(min ?? 0) * 60 + Number(s ?? 0)
}

// Latest long-form uploads (Shorts excluded). Cached hourly to stay well
// within the YouTube Data API quota.
export async function fetchYouTubeVideos(limit = 2): Promise<YouTubeVideo[]> {
  const key = process.env.YOUTUBE_API_KEY
  if (!key) return []

  // 1. Resolve the channel's uploads playlist from its handle.
  const channelRes = await fetch(
    `${API}/channels?part=contentDetails&forHandle=${HANDLE}&key=${key}`,
    { next: { revalidate: 3600 } }
  )
  const channelData = await channelRes.json()
  const uploads: string | undefined =
    channelData.items?.[0]?.contentDetails?.relatedPlaylists?.uploads
  if (!uploads) return []

  // 2. Fetch a batch of recent uploads (more than `limit`, since Shorts
  //    are filtered out below).
  const playlistRes = await fetch(
    `${API}/playlistItems?part=snippet,contentDetails&maxResults=15&playlistId=${uploads}&key=${key}`,
    { next: { revalidate: 3600 } }
  )
  const playlistData = await playlistRes.json()
  const items: PlaylistItem[] = playlistData.items ?? []
  if (items.length === 0) return []

  // 3. Durations + view/like counts for those videos (one call for all ids).
  const ids = items.map((i) => i.contentDetails.videoId).join(',')
  const detailsRes = await fetch(
    `${API}/videos?part=contentDetails,statistics&id=${ids}&key=${key}`,
    { next: { revalidate: 3600 } }
  )
  const detailsData = await detailsRes.json()
  const details = new Map<string, VideoDetails>(
    (detailsData.items ?? []).map((v: VideoDetails) => [v.id, v])
  )

  const videos: YouTubeVideo[] = []
  for (const item of items) {
    if (videos.length >= limit) break

    const videoId = item.contentDetails.videoId
    const detail = details.get(videoId)
    if (!detail) continue

    // Skip Shorts.
    if (parseDuration(detail.contentDetails.duration) <= SHORTS_MAX_SECONDS) continue

    const t = item.snippet.thumbnails
    const thumbnail = t.maxres?.url ?? t.high?.url ?? t.medium?.url ?? t.default?.url ?? ''
    const stats = detail.statistics

    videos.push({
      id: videoId,
      title: item.snippet.title,
      thumbnail,
      permalink: `https://www.youtube.com/watch?v=${videoId}`,
      publishedAt: item.snippet.publishedAt,
      viewCount: stats?.viewCount != null ? Number(stats.viewCount) : undefined,
      likeCount: stats?.likeCount != null ? Number(stats.likeCount) : undefined,
    })
  }

  return videos
}
