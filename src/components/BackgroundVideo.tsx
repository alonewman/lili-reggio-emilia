import { useEffect, useRef } from 'react'

const VIDEO_SRC = '/hero-video.mp4'

const SENSITIVITY = 0.8

// Approximate x-position (in source video px) where the KlingAI watermark begins, bottom-right corner.
const WATERMARK_X = 1695
const EDGE_MARGIN = 24
const OBJECT_POSITION_X = 0.7

function computeWatermarkZoom(videoWidth: number, videoHeight: number) {
  const cw = window.innerWidth
  const ch = window.innerHeight
  const baseScale = Math.max(cw / videoWidth, ch / videoHeight)
  const overflow = videoWidth * baseScale - cw
  const left0 = -overflow * OBJECT_POSITION_X
  const watermarkScreenX = WATERMARK_X * baseScale + left0

  if (watermarkScreenX <= 0 || watermarkScreenX >= cw) return 1
  return (cw + EDGE_MARGIN) / watermarkScreenX
}

export default function BackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const prevXRef = useRef<number | null>(null)
  const targetTimeRef = useRef(0)
  const seekingRef = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const applyZoom = () => {
      if (!video.videoWidth || !video.videoHeight) return
      const zoom = computeWatermarkZoom(video.videoWidth, video.videoHeight)
      video.style.transform = zoom > 1 ? `scale(${zoom})` : 'none'
      video.style.transformOrigin = '0% 50%'
    }

    video.addEventListener('loadedmetadata', applyZoom)
    window.addEventListener('resize', applyZoom)
    applyZoom()

    const seekTo = (time: number) => {
      targetTimeRef.current = time
      if (!seekingRef.current) {
        seekingRef.current = true
        video.currentTime = time
      }
    }

    const handleSeeked = () => {
      if (Math.abs(video.currentTime - targetTimeRef.current) > 0.01) {
        video.currentTime = targetTimeRef.current
      } else {
        seekingRef.current = false
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!video.duration || Number.isNaN(video.duration)) return

      if (prevXRef.current === null) {
        prevXRef.current = e.clientX
        return
      }

      const delta = e.clientX - prevXRef.current
      prevXRef.current = e.clientX

      const offset = (delta / window.innerWidth) * SENSITIVITY * video.duration
      const current = seekingRef.current ? targetTimeRef.current : video.currentTime
      const targetTime = Math.min(Math.max(current + offset, 0), video.duration)

      seekTo(targetTime)
    }

    video.addEventListener('seeked', handleSeeked)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      video.removeEventListener('loadedmetadata', applyZoom)
      window.removeEventListener('resize', applyZoom)
      video.removeEventListener('seeked', handleSeeked)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={VIDEO_SRC}
      muted
      playsInline
      preload="auto"
      className="absolute inset-0 z-0 h-full w-full object-cover"
      style={{ objectPosition: '70% center' }}
    />
  )
}
