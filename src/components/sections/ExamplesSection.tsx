import Reveal from '../Reveal'
import ConversationDemo, { type ConversationItem } from '../ConversationDemo'
import FloatingSticker from '../FloatingSticker'

const CONSULTA: ConversationItem[] = [
  { kind: 'message', from: 'user', text: 'Oi, bom dia! Queria saber sobre vagas pro 5º ano' },
  {
    kind: 'message',
    from: 'lili',
    text: 'Bom dia! 🌼 Eu sou a Lili, atendente do Colégio Reggio Emilia. Posso saber seu nome?',
  },
  { kind: 'message', from: 'user', text: 'Sou a Carla' },
  {
    kind: 'message',
    from: 'lili',
    text: 'Perfeito, Carla! Qual é o nome completo do estudante?',
  },
  { kind: 'message', from: 'user', text: 'Enzo Ferreira, nasceu em 14/03/2015' },
  { kind: 'action', label: 'calculando a idade e salvando os dados da família' },
  { kind: 'message', from: 'lili', text: 'Anotado! E qual a escola atual dele?' },
  { kind: 'message', from: 'user', text: 'Colégio Vitória, ele tá no 5º ano lá' },
  { kind: 'action', label: 'consultando os valores reais do 5º ano' },
  {
    kind: 'message',
    from: 'lili',
    text: 'Valor das parcelas pro 5º ano: R$ 2.180 com desconto até dia 2 💛 Quer agendar uma visita?',
  },
]

const AGENDAMENTO: ConversationItem[] = [
  { kind: 'message', from: 'user', text: 'Dá pra visitar sexta-feira às 10h?' },
  { kind: 'action', label: 'verificando a agenda oficial do colégio' },
  {
    kind: 'message',
    from: 'lili',
    text: 'Sexta-feira às 10h está livre! 😊 Posso confirmar pra você e o Enzo?',
  },
  { kind: 'message', from: 'user', text: 'Pode sim!' },
  { kind: 'action', label: 'criando o agendamento com os dados da família' },
  {
    kind: 'message',
    from: 'lili',
    text: 'Visita confirmada! A Ariane vai te esperar no Portão 2. 💛',
  },
  { kind: 'action', label: 'avisando a equipe da escola' },
]

const TRIAGEM: ConversationItem[] = [
  { kind: 'message', from: 'user', text: 'Boa tarde, gostaria de enviar meu currículo pra vaga de professora' },
  { kind: 'action', label: 'identificando que não é uma família interessada em matrícula' },
  {
    kind: 'message',
    from: 'lili',
    text: 'Olá! Para enviar seu currículo, entre em nosso site reggioemilia.com.br/trabalhe-conosco. Seu currículo ficará em nosso banco de dados.',
  },
]

const DEMOS = [
  { title: 'Consulta e coleta de dados', items: CONSULTA },
  { title: 'Agendamento de visita', items: AGENDAMENTO },
  { title: 'Triagem automática', items: TRIAGEM },
]

export default function ExamplesSection() {
  return (
    <section id="exemplos" className="bg-black px-5 py-24 text-white sm:px-8 sm:py-32 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.1em] text-white/40 sm:text-[14px]">
            Ela em ação
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-3 max-w-xl"
            style={{ fontSize: 'clamp(26px, 4.5vw, 40px)', lineHeight: 1.2, fontWeight: 400 }}
          >
            Três conversas reais, do jeito que elas acontecem.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:mt-20 lg:grid-cols-3 lg:gap-6">
          {DEMOS.map((demo, i) => (
            <Reveal key={demo.title} delay={i * 0.1} className="relative flex justify-center lg:block">
              {demo.title === 'Agendamento de visita' && (
                <FloatingSticker
                  src="/lili-agendamento.png"
                  alt=""
                  size={76}
                  rotate={8}
                  className="absolute -right-2 top-9 z-10 hidden sm:block lg:-right-3 lg:top-9"
                  floatDuration={5.5}
                />
              )}
              <ConversationDemo title={demo.title} items={demo.items} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
