import Reveal from '../Reveal'

const PAIRS = [
  {
    before: 'Mensagens acumuladas fora do horário comercial',
    after: 'Atendimento contínuo, no mesmo WhatsApp que a família já usa',
  },
  {
    before: 'Respostas genéricas, iguais para todo mundo',
    after: 'Respostas com dados reais, sempre atualizados',
  },
  {
    before: 'Dados de cada família espalhados em conversas soltas',
    after: 'Ficha de cada família pronta e organizada',
  },
  {
    before: 'Agendamento por telefone, sujeito a conflito de agenda',
    after: 'Visita criada direto na agenda oficial, sem conflitos',
  },
  {
    before: 'Secretaria começando cada atendimento do zero',
    after: 'Só os casos realmente complexos chegam a um humano — já com contexto',
  },
]

export default function ImpactSection() {
  return (
    <section id="impacto" className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32 md:px-10">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.1em] text-white/40 sm:text-[14px]">
            Impacto
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-3 max-w-xl"
            style={{ fontSize: 'clamp(26px, 4.5vw, 40px)', lineHeight: 1.2, fontWeight: 400 }}
          >
            O que muda quando o atendimento vira operação.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col sm:mt-20">
          {PAIRS.map((pair, i) => (
            <Reveal
              key={pair.before}
              delay={i * 0.08}
              className="grid grid-cols-1 gap-3 border-t border-white/10 py-7 first:border-t-0 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6 sm:py-8"
            >
              <p className="text-white/40" style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.5 }}>
                {pair.before}
              </p>
              <span className="hidden text-white/25 sm:block">→</span>
              <p style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.5 }}>{pair.after}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
