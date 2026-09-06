import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

export type ConversationItem =
  | { kind: 'message'; from: 'user' | 'lili'; text: string }
  | { kind: 'action'; label: string }

interface ConversationDemoProps {
  title: string
  items: ConversationItem[]
}

const STEP_DELAY = 650

export default function ConversationDemo({ title, items }: ConversationDemoProps) {
  const { ref, inView } = useInView<HTMLDivElement>(0.35)
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (visibleCount >= items.length) return

    const timeout = setTimeout(() => {
      setVisibleCount((count) => count + 1)
    }, STEP_DELAY)

    return () => clearTimeout(timeout)
  }, [inView, visibleCount, items.length])

  return (
    <div ref={ref} className="w-full max-w-md">
      <p className="mb-4 text-[13px] uppercase tracking-[0.08em] text-white/50 sm:text-[14px]">
        {title}
      </p>
      <div className="flex flex-col gap-2.5 rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
        {items.map((item, i) => {
          const visible = i < visibleCount
          const style = {
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.35s ease, transform 0.35s ease',
          }

          if (item.kind === 'action') {
            return (
              <div key={i} style={style} className="my-1 flex justify-center">
                <span className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-white/50 sm:text-[12px]">
                  {item.label}
                </span>
              </div>
            )
          }

          const isUser = item.from === 'user'
          return (
            <div key={i} style={style} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[14px] leading-snug sm:text-[15px] ${
                  isUser
                    ? 'bg-white text-black'
                    : 'border border-white/15 bg-transparent text-white'
                }`}
              >
                {item.text}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
