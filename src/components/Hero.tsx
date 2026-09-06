import { useEffect, useState } from 'react'
import { useTypewriter } from '../hooks/useTypewriter'
import BackgroundVideo from './BackgroundVideo'

const TYPEWRITER_TEXT =
  'Ela não só responde: entende, consulta a agenda e confirma a visita — sozinha, ali no WhatsApp.'

const NAV_PILLS = [
  { label: 'Ver ela em ação', href: '#exemplos' },
  { label: 'Como ela decide', href: '#diferenca' },
  { label: 'O que ela resolve', href: '#capacidades' },
  { label: 'Como ela se conecta', href: '#ecossistema' },
]

const PILL_BASE_CLASS =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full mx-[0.2em] mb-[0.4em] px-4 py-[0.3em] text-[13px] transition-colors duration-200 sm:px-5 sm:text-[15px]'

function ExternalIcon() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3 9L9 3M9 3H4M9 3V8"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Hero() {
  const { displayed, done } = useTypewriter(TYPEWRITER_TEXT)
  const [pillsVisible, setPillsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setPillsVisible(true), 400)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden">
      <BackgroundVideo />

      <div className="relative z-[1] flex h-screen flex-col justify-end px-5 pb-12 sm:px-8 md:justify-center md:px-10 md:pb-0">
        <div className="relative z-10 max-w-xl">
          <div
            className="pointer-events-none mb-5 select-none sm:mb-6"
            style={{
              fontSize: 'clamp(18px, 4vw, 26px)',
              lineHeight: 1.3,
              fontWeight: 400,
              color: '#fff',
              filter: 'blur(4px)',
            }}
          >
            Essa é a Lili,
            <br />
            atendente virtual do Colégio Reggio Emilia
          </div>

          <p
            className="mb-5 text-white sm:mb-6"
            style={{
              fontSize: 'clamp(18px, 4vw, 26px)',
              lineHeight: 1.35,
              fontWeight: 400,
              minHeight: '54px',
            }}
          >
            {displayed}
            {!done && (
              <span
                className="ml-[2px] inline-block h-[1.1em] w-[2px] align-middle bg-white"
                style={{ animation: 'blink 1s step-end infinite' }}
              />
            )}
          </p>

          <div
            className="flex flex-wrap gap-y-1"
            style={{
              opacity: pillsVisible ? 1 : 0,
              transform: pillsVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
            }}
          >
            {NAV_PILLS.map((pill) => (
              <a
                key={pill.label}
                href={pill.href}
                className={`${PILL_BASE_CLASS} border border-black/10 bg-white text-black hover:bg-black hover:text-white`}
              >
                {pill.label}
              </a>
            ))}

            <a
              href="https://reggioemilia.com.br"
              target="_blank"
              rel="noreferrer"
              className={`${PILL_BASE_CLASS} gap-2 border border-white bg-transparent text-white hover:bg-white hover:text-black sm:gap-3`}
            >
              <span>Conhecer o Reggio Emilia</span>
              <ExternalIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
