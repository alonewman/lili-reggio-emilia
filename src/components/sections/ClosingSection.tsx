import { useTypewriter } from '../../hooks/useTypewriter'
import { useInView } from '../../hooks/useInView'

const CLOSING_TEXT = 'A Lili nasceu para transformar atendimento em operação.'

export default function ClosingSection() {
  const { ref, inView } = useInView<HTMLDivElement>(0.5)
  const { displayed, done } = useTypewriter(CLOSING_TEXT, 40, 300, inView)

  return (
    <section
      ref={ref}
      className="flex min-h-[70vh] flex-col items-center justify-center bg-black px-5 py-24 text-center text-white sm:px-8"
    >
      <p className="mb-5 text-[13px] uppercase tracking-[0.1em] text-white/40 sm:text-[14px]">
        Colégio Reggio Emilia × Lili
      </p>

      <p
        className="max-w-2xl"
        style={{ fontSize: 'clamp(24px, 5vw, 44px)', lineHeight: 1.25, fontWeight: 400, minHeight: '1.5em' }}
      >
        {displayed}
        {!done && (
          <span
            className="ml-[3px] inline-block h-[0.9em] w-[3px] align-middle bg-white"
            style={{ animation: 'blink 1s step-end infinite' }}
          />
        )}
      </p>

      <p className="mt-10 text-[13px] text-white/35">Uma apresentação do que já está em funcionamento.</p>
    </section>
  )
}
