import Reveal from '../Reveal'

interface DashboardFeature {
  title: string
  description: string
}

const FEATURES: DashboardFeature[] = [
  {
    title: 'Cada conversa vira um card',
    description:
      'Um quadro ao vivo, com uma coluna para cada etapa — desde o primeiro contato até a matrícula efetivada. Os cards se movem sozinhos conforme a Lili coleta dados e agenda visitas, e a equipe também pode arrastar, editar e adicionar leads manualmente.',
  },
  {
    title: 'Números que se atualizam sozinhos',
    description:
      'Total de leads, taxa de conversão, visitas agendadas, matrículas do mês, comparecimento às visitas — tudo recalculado na hora e comparado com o mês anterior, sem planilha manual.',
  },
  {
    title: 'O WhatsApp da Lili, aberto pro time',
    description:
      'A equipe enxerga o histórico completo de qualquer conversa — texto, áudio, imagem, figurinha, documento — e pode responder direto dali, sem precisar abrir o celular.',
  },
  {
    title: 'Ninguém é pego de surpresa',
    description:
      'A conexão do número de WhatsApp é verificada sozinha a cada poucos segundos. Se a Lili cair, a equipe sabe na hora — não no dia seguinte, quando uma família já desistiu de esperar resposta.',
  },
  {
    title: 'Agenda visual, além da conversa',
    description:
      'Uma segunda forma de ver e ajustar as visitas marcadas — olhar por mês ou por semana, criar ou cancelar um horário — sem depender só do que passou pelo WhatsApp.',
  },
  {
    title: 'Automação sob controle',
    description:
      'A equipe enxerga quais automações estão ativas por trás da Lili, liga e desliga cada uma quando precisa, e acompanha falhas recentes sem precisar caçar em nenhum lugar.',
  },
  {
    title: 'Custo de IA sob controle',
    description:
      'Quanto a inteligência por trás da Lili está consumindo, por dia e por semana, em gráfico e com histórico — para a operação nunca ser surpreendida por uma conta.',
  },
  {
    title: 'Relatórios prontos pra decidir',
    description:
      'Funil de conversão, evolução de leads, origem de cada família, distribuição por série — em gráfico, exportável em PDF, com uma visão em planilha para quem prefere Excel.',
  },
]

export default function DashboardSection() {
  return (
    <section
      id="painel"
      className="px-5 py-24 sm:px-8 sm:py-32 md:px-10"
      style={{ background: 'var(--color-paper)', color: 'var(--color-ink)' }}
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.1em] text-black/40 sm:text-[14px]">
            Painel interno
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-3 max-w-xl"
            style={{ fontSize: 'clamp(26px, 4.5vw, 40px)', lineHeight: 1.2, fontWeight: 400 }}
          >
            Por trás da conversa, um painel que a equipe usa todo dia.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className="mt-6 max-w-xl text-black/65"
            style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.6 }}
          >
            A Lili conversa no WhatsApp, mas o que ela faz vira algo visível e controlável num
            painel próprio, de acesso restrito à equipe do colégio.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-20">
          {FEATURES.map((feature, i) => (
            <Reveal
              key={feature.title}
              delay={Math.min(i * 0.06, 0.4)}
              className="border-t border-black/10 py-7 first:border-t-0 sm:py-8"
            >
              <div className="grid grid-cols-[auto_1fr] gap-x-5 sm:grid-cols-[80px_1fr] sm:gap-x-8">
                <span className="text-[13px] text-black/35 sm:text-[14px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 style={{ fontSize: 'clamp(18px, 2.6vw, 22px)', fontWeight: 500 }}>
                    {feature.title}
                  </h3>
                  <p
                    className="mt-2 max-w-2xl text-black/65"
                    style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.55 }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
