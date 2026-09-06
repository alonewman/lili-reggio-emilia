import type { CSSProperties, ReactNode } from 'react'
import { useInView } from '../hooks/useInView'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'span'
  style?: CSSProperties
}

export default function Reveal({ children, className, delay = 0, as = 'div', style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const Tag = as

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        ...style,
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </Tag>
  )
}
