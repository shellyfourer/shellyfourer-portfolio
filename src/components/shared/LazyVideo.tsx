'use client'

import { useEffect, useRef } from 'react'

export function LazyVideo({
  src,
  poster,
  className,
}: Readonly<{ src: string; poster?: string; className?: string }>) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.src = src
          video.load()
          video.play().catch(() => {})
          observer.disconnect()
        }
      },
      { rootMargin: '200px' }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [src])

  return <video ref={ref} muted loop playsInline poster={poster} className={className} />
}
