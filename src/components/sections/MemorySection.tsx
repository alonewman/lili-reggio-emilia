import Reveal from '../Reveal'

const FIELDS = [
  { label: 'Responsável', value: 'Carla Ferreira' },
  { label: 'Estudante', value: 'Enzo Ferreira' },
  { label: 'Idade', value: '10 anos' },
  { label: 'Escola anterior', value: 'Colégio Vitória' },
  { label: 'Série de interesse', value: '5º ano' },
  { label: 'Visita', value: 'Confirmada · sexta, 10h' },
]

export default function MemorySection() {
  return (
    <section
      id="memoria"
      className="px-5 py-24 sm:px-8 sm:py-32 md:px-10"
      style={{ background: 'var(--color-paper)', color: 'var(--color-ink)' }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.1em] text-black/40 sm:text-[14px]">
              Contexto
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-3"
              style={{ fontSize: 'clamp(26px, 4.5vw, 40px)', lineHeight: 1.2, fontWeight: 400 }}
            >
              Ela guarda o contexto.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="mt-6 max-w-md text-black/65"
              style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.6 }}
            >
              Cada família tem uma ficha viva, que cresce a cada mensagem. A Lili não trata cada
              pergunta como se fosse a primeira: ela sabe quem está falando, o que já foi
              respondido e o que ainda falta — e nunca pede de novo um dado que a família já deu.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:p-8">
            <p className="mb-5 text-[13px] uppercase tracking-[0.08em] text-black/35">
              Ficha da família
            </p>
            <dl className="flex flex-col gap-4">
              {FIELDS.map((field) => (
                <div key={field.label} className="flex items-baseline justify-between gap-4 border-b border-black/[0.06] pb-3 last:border-b-0 last:pb-0">
                  <dt className="text-[14px] text-black/45">{field.label}</dt>
                  <dd className="text-right text-[15px] font-medium">{field.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
