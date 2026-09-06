import type { CSSProperties } from 'react'

interface IconProps {
  className?: string
  style?: CSSProperties
}

export function CalendarIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 9.5H20.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 3V6.5M16 3V6.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M8.5 13.5L10.5 15.5L15 11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function SheetIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.5 9.5H20.5M3.5 14.5H20.5M9.5 9.5V20.5M14.5 9.5V20.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export function ChatIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path
        d="M4 12C4 7.58 7.8 4 12.5 4S21 7.58 21 12s-3.8 8-8.5 8c-1.02 0-1.99-.17-2.89-.48L4 21l1.4-4.1C4.51 15.7 4 13.9 4 12Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="M8.5 11.5H15.5M8.5 14.5H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function TeamIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <circle cx="9" cy="8.5" r="2.75" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3.75 19c0-2.9 2.35-5 5.25-5s5.25 2.1 5.25 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="16.5" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" />
      <path d="M15 13.3c2.3.15 4.25 1.95 4.25 4.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

export function DocIcon({ className, style }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M6.5 3.5H14L18.5 8V20.5H6.5V3.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M14 3.5V8H18.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 12.5H16M9 15.5H16M9 18H13.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}
