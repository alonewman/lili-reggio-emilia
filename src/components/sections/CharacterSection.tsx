import Reveal from '../Reveal'

const MOMENTS = [
  { src: '/images/text-and-voice.webp', caption: 'Texto ou áudio, tanto faz' },
  { src: '/images/handoff-secretary.webp', caption: 'Sabe a hora de passar adiante' },
  { src: '/images/automation-tablet.webp', caption: 'Sempre operando por trás' },
  { src: '/images/ecosystem-connected-alt.webp', caption: 'Conectada ao que a escola já usa' },
]

export default function CharacterSection() {
  return (
    <section
      id="personagem"
      className="px-5 py-24 sm:px-8 sm:py-32 md:px-10"
      style={{ background: 'var(--color-paper)', color: 'var(--color-ink)' }}
    >
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl bg-black">
            <video
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
              style={{ objectPosition: '70% center' }}
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.1em] text-black/40 sm:text-[14px]">
              A Lili
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2
              className="mt-3"
              style={{ fontSize: 'clamp(26px, 4.5vw, 40px)', lineHeight: 1.2, fontWeight: 400 }}
            >
              A mesma presença, do início ao fim da conversa.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p
              className="mt-6 max-w-md text-black/65"
              style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.6 }}
            >
              A Lili tem uma identidade própria, reconhecível em cada mensagem — gentil, direta,
              acolhedora. Ela nunca finge ser uma pessoa, mas também nunca soa como um robô lendo
              um script. É a mesma Lili na saudação, na dúvida sobre valores e na confirmação da
              visita.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-5xl sm:mt-20">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {MOMENTS.map((moment, i) => (
            <Reveal key={moment.src} delay={i * 0.08}>
              <img
                src={moment.src}
                alt={moment.caption}
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <p className="mt-2.5 text-[13px] text-black/55 sm:text-[14px]">{moment.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
