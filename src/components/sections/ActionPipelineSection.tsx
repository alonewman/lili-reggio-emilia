import Reveal from '../Reveal'

const STEPS = [
  { title: 'Mensagem recebida', detail: 'A família manda "sexta 10h" no WhatsApp.' },
  {
    title: 'Ela entende',
    detail: 'Identifica que é um pedido de agendamento, já com os dados da conversa.',
  },
  {
    title: 'Consulta a agenda',
    detail: 'Verifica em tempo real se o horário está livre na agenda oficial do colégio.',
  },
  {
    title: 'Executa',
    detail: 'Cria o evento com a ficha completa da família já na descrição.',
  },
  {
    title: 'Equipe é avisada',
    detail: 'O grupo interno da escola recebe o aviso automático da nova visita.',
  },
  { title: 'Responde', detail: 'A família recebe a confirmação — sem esperar por ninguém.' },
]

export default function ActionPipelineSection() {
  return (
    <section id="acao" className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32 md:px-10">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.1em] text-white/40 sm:text-[14px]">
            De conversa para ação
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-3 max-w-xl"
            style={{ fontSize: 'clamp(26px, 4.5vw, 40px)', lineHeight: 1.2, fontWeight: 400 }}
          >
            O valor da Lili está em conectar a conversa com a operação.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col sm:mt-20">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1} className="relative flex gap-6 pb-10 last:pb-0 sm:gap-8">
              <div className="flex flex-col items-center">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-[13px] text-white/70">
                  {i + 1}
                </span>
                {i < STEPS.length - 1 && <span className="mt-1 w-px flex-1 bg-white/15" />}
              </div>
              <div className="pt-1">
                <h3 style={{ fontSize: 'clamp(17px, 2.2vw, 20px)', fontWeight: 500 }}>{step.title}</h3>
                <p
                  className="mt-1.5 text-white/55"
                  style={{ fontSize: 'clamp(14px, 1.7vw, 16px)', lineHeight: 1.55 }}
                >
                  {step.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
