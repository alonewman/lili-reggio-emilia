import Reveal from '../Reveal'
import FloatingSticker from '../FloatingSticker'

const STEPS = ['Pessoa', 'entende', 'decide', 'consulta', 'executa', 'responde']

export default function DifferenceSection() {
  return (
    <section id="diferenca" className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32 md:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.1em] text-white/40 sm:text-[14px]">
            Atendimento tradicional
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <p
            className="mt-3 text-white/40"
            style={{ fontSize: 'clamp(20px, 3.4vw, 30px)', lineHeight: 1.3 }}
          >
            Pergunta → resposta pronta. Fim.
          </p>
        </Reveal>

        <div className="mt-16 flex items-center gap-3 sm:mt-20">
          <Reveal delay={0.15}>
            <p className="text-[13px] uppercase tracking-[0.1em] text-white/60 sm:text-[14px]">
              A Lili
            </p>
          </Reveal>
          <FloatingSticker
            src="/lili-perfil.png"
            alt=""
            size={56}
            rotate={-8}
            className="hidden sm:block"
            floatDuration={7}
          />
        </div>

        <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-2 sm:gap-x-4">
          {STEPS.map((step, i) => (
            <span key={step} className="flex items-baseline gap-x-3 sm:gap-x-4">
              <Reveal
                delay={0.2 + i * 0.12}
                as="span"
                style={{ fontSize: 'clamp(28px, 6vw, 52px)', lineHeight: 1.15, fontWeight: 400 }}
              >
                {step}
              </Reveal>
              {i < STEPS.length - 1 && (
                <span className="text-white/25" style={{ fontSize: 'clamp(20px, 4vw, 34px)' }}>
                  →
                </span>
              )}
            </span>
          ))}
        </div>

        <Reveal delay={0.2 + STEPS.length * 0.12 + 0.1} className="mt-16 max-w-xl sm:mt-20">
          <p className="text-white/60" style={{ fontSize: 'clamp(16px, 2.4vw, 20px)', lineHeight: 1.5 }}>
            Cada etapa acontece no mesmo turno da conversa. A família nunca fica esperando uma
            confirmação que devia ter vindo sozinha.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
