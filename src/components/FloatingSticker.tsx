import { useEffect, useRef, useState } from 'react'

interface FloatingStickerProps {
  src: string
  alt: string
  size?: number
  className?: string
  floatDuration?: number
  rotate?: number
}

export default function FloatingSticker({
  src,
  alt,
  size = 140,
  className,
  floatDuration = 6,
  rotate = 0,
}: FloatingStickerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) / (window.innerWidth / 2)
      const dy = (e.clientY - cy) / (window.innerHeight / 2)
      const clamp = (v: number) => Math.max(-1, Math.min(1, v))
      setTilt({ x: clamp(dy) * -12, y: clamp(dx) * 16 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className={`pointer-events-none select-none ${className ?? ''}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div
        ref={ref}
        style={{
          width: size,
          height: size,
          perspective: '700px',
          animation: `float ${floatDuration}s ease-in-out infinite`,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: 'transform 0.25s ease-out',
            filter: 'drop-shadow(0 24px 28px rgba(0,0,0,0.35))',
          }}
        >
          <img src={src} alt={alt} className="h-full w-full object-contain" draggable={false} />
        </div>
      </div>
    </div>
  )
}
