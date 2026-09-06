import Reveal from '../Reveal'

interface Capability {
  title: string
  description: string
  tag?: string
}

const CAPABILITIES: Capability[] = [
  {
    title: 'Primeiro contato e triagem',
    description:
      'Recebe texto e áudio, sempre começa pela apresentação e por saber o nome de quem está falando — e sozinha percebe quando a mensagem é um currículo, e não uma família interessada em matrícula, encaminhando cada uma para o caminho certo.',
  },
  {
    title: 'Memória que persiste',
    description:
      'Cada família tem uma ficha viva: nome, idade da criança, escola anterior, série de interesse, status da visita. Ela nunca repete uma pergunta já respondida nem recomeça a apresentação no meio de uma conversa.',
  },
  {
    title: 'Conhecimento institucional sob consulta',
    description:
      'Dúvidas sobre proposta pedagógica, estrutura, documentos ou rotina são respondidas a partir de uma base de conhecimento real — nunca inventadas. Quando não encontra a resposta, ela admite e chama a secretaria.',
  },
  {
    title: 'Informação comercial sempre atual',
    description:
      'Valores de mensalidade, período integral, apostilas e capacidade de sala vêm de planilhas vivas, consultadas a cada pergunta. As regras comerciais — desconto de irmãos, política de bolsa, valor do curso de férias — são as mesmas para todo mundo, sempre.',
  },
  {
    title: 'Entrega o material certo na hora certa',
    description:
      'PDF institucional, tabela de valores, apostilas, uniformes: cada peça sai automaticamente no momento certo da conversa, sem a família precisar pedir e sem repetir o mesmo envio duas vezes.',
  },
  {
    title: 'Agendamento real',
    description:
      'Antes de confirmar qualquer horário, ela consulta a agenda oficial do colégio, calcula a data certa a partir de "sexta-feira" ou "semana que vem", e cria o evento já com os dados da família na descrição. Reagenda e cancela sempre buscando o compromisso de verdade primeiro.',
  },
  {
    title: 'Sabe até onde vai',
    description:
      'Pedido de humano, reclamação, dado sensível, um caso de inclusão — ela reconhece a hora de passar adiante. E quando transfere, já entrega o resumo completo da conversa: quem assume não começa do zero.',
  },
  {
    title: 'Mantém a escola informada',
    description:
      'Toda visita marcada ou cancelada — mesmo uma mudança feita direto na agenda, fora da conversa — gera um aviso automático para a equipe, já com os dados da família.',
  },
  {
    title: 'Prioriza os leads mais quentes',
    tag: 'em ajuste',
    description:
      'O sistema também foi construído para medir o nível de interesse de cada família ao longo da conversa e alertar a equipe sobre quem está muito interessado mas ainda não marcou visita. Essa camada está em fase de calibração.',
  },
]

export default function CapabilitiesSection() {
  return (
    <section
      id="capacidades"
      className="px-5 py-24 sm:px-8 sm:py-32 md:px-10"
      style={{ background: 'var(--color-paper)', color: 'var(--color-ink)' }}
    >
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.1em] text-black/40 sm:text-[14px]">
            Capacidades
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-3 max-w-xl"
            style={{ fontSize: 'clamp(26px, 4.5vw, 40px)', lineHeight: 1.2, fontWeight: 400 }}
          >
            O que ela realmente resolve, uma a uma.
          </h2>
        </Reveal>

        <div className="mt-16 sm:mt-20">
          {CAPABILITIES.map((cap, i) => (
            <Reveal
              key={cap.title}
              delay={Math.min(i * 0.06, 0.4)}
              className="border-t border-black/10 py-7 first:border-t-0 sm:py-8"
            >
              <div className="grid grid-cols-[auto_1fr] gap-x-5 sm:grid-cols-[80px_1fr] sm:gap-x-8">
                <span className="text-[13px] text-black/35 sm:text-[14px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <h3 style={{ fontSize: 'clamp(18px, 2.6vw, 22px)', fontWeight: 500 }}>
                      {cap.title}
                    </h3>
                    {cap.tag && (
                      <span
                        className="rounded-full px-2.5 py-0.5 text-[11px]"
                        style={{ background: 'rgba(61,53,112,0.1)', color: 'var(--color-indigo)' }}
                      >
                        {cap.tag}
                      </span>
                    )}
                  </div>
                  <p
                    className="mt-2 max-w-2xl text-black/65"
                    style={{ fontSize: 'clamp(15px, 1.8vw, 17px)', lineHeight: 1.55 }}
                  >
                    {cap.description}
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
