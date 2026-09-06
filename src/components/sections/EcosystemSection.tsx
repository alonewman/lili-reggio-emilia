import { useState, type ReactElement } from 'react'
import Reveal from '../Reveal'
import { CalendarIcon, SheetIcon, ChatIcon, TeamIcon, DocIcon } from '../EcosystemIcons'

interface Node {
  label: string
  x: number
  y: number
  Icon: typeof CalendarIcon
  detail: string
  Visual: () => ReactElement
}

function CalendarVisual() {
  return (
    <svg viewBox="0 0 140 36" className="h-9 w-full max-w-[220px]" aria-hidden="true">
      {Array.from({ length: 7 }).map((_, i) => (
        <rect
          key={i}
          x={i * 20 + 2}
          y={4}
          width={14}
          height={28}
          rx={3}
          fill={i === 2 || i === 5 ? 'var(--color-amber)' : 'none'}
          stroke={i === 2 || i === 5 ? 'var(--color-amber)' : 'rgba(21,19,15,0.25)'}
          strokeWidth={1.2}
        />
      ))}
    </svg>
  )
}

function SheetVisual() {
  const widths = [92, 64, 78, 45]
  return (
    <svg viewBox="0 0 140 36" className="h-9 w-full max-w-[220px]" aria-hidden="true">
      {widths.map((w, i) => (
        <rect
          key={i}
          x={2}
          y={i * 9 + 1}
          width={w}
          height={5}
          rx={2.5}
          fill={i === 1 ? 'var(--color-amber)' : 'rgba(21,19,15,0.2)'}
        />
      ))}
    </svg>
  )
}

function ChatVisual() {
  return (
    <svg viewBox="0 0 140 36" className="h-9 w-full max-w-[220px]" aria-hidden="true">
      <rect x={2} y={2} width={70} height={12} rx={6} fill="rgba(21,19,15,0.2)" />
      <rect x={20} y={18} width={80} height={12} rx={6} fill="var(--color-amber)" />
    </svg>
  )
}

function TeamVisual() {
  const positions = [20, 45, 70, 95, 120]
  return (
    <svg viewBox="0 0 140 36" className="h-9 w-full max-w-[220px]" aria-hidden="true">
      {positions.map((x, i) => (
        <circle
          key={i}
          cx={x}
          cy={18}
          r={9}
          fill={i === 2 ? 'var(--color-amber)' : 'none'}
          stroke={i === 2 ? 'var(--color-amber)' : 'rgba(21,19,15,0.25)'}
          strokeWidth={1.2}
        />
      ))}
    </svg>
  )
}

function DocVisual() {
  return (
    <svg viewBox="0 0 140 36" className="h-9 w-full max-w-[220px]" aria-hidden="true">
      <rect x={6} y={8} width={60} height={26} rx={3} fill="none" stroke="rgba(21,19,15,0.2)" strokeWidth={1.2} />
      <rect x={16} y={4} width={60} height={26} rx={3} fill="none" stroke="rgba(21,19,15,0.3)" strokeWidth={1.2} />
      <rect x={26} y={0} width={60} height={26} rx={3} fill="none" stroke="var(--color-amber)" strokeWidth={1.4} />
    </svg>
  )
}

const NODES: Node[] = [
  {
    label: 'Agenda da escola',
    x: 50,
    y: 88,
    Icon: CalendarIcon,
    detail:
      'Cada visita marcada, reagendada ou cancelada passa pela mesma agenda oficial que a secretaria já usa — nunca uma agenda paralela.',
    Visual: CalendarVisual,
  },
  {
    label: 'Valores e materiais',
    x: 86.1,
    y: 61.7,
    Icon: SheetIcon,
    detail:
      'Mensalidade, período integral, apostilas, capacidade de sala: a Lili consulta esses valores direto da fonte oficial toda vez que alguém pergunta.',
    Visual: SheetVisual,
  },
  {
    label: 'Canal da secretaria',
    x: 72.3,
    y: 19.3,
    Icon: ChatIcon,
    detail:
      'Quando um caso precisa de um humano, a equipe recebe o resumo completo da conversa — não uma notificação vazia para começar do zero.',
    Visual: ChatVisual,
  },
  {
    label: 'Equipe interna',
    x: 27.7,
    y: 19.3,
    Icon: TeamIcon,
    detail:
      'Visita marcada, visita cancelada, caso transferido: o grupo interno da escola é avisado automaticamente, com os dados da família.',
    Visual: TeamVisual,
  },
  {
    label: 'Documentos institucionais',
    x: 13.9,
    y: 61.7,
    Icon: DocIcon,
    detail:
      'PDF de matrículas, tabela de uniformes, apostilas: os mesmos documentos que a secretaria usaria, enviados no momento certo da conversa.',
    Visual: DocVisual,
  },
]

export default function EcosystemSection() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [selectedNode, setSelectedNode] = useState<string>(NODES[0].label)

  const selected = NODES.find((n) => n.label === selectedNode) ?? NODES[0]

  return (
    <section
      id="ecossistema"
      className="px-5 py-24 sm:px-8 sm:py-32 md:px-10"
      style={{ background: 'var(--color-paper)', color: 'var(--color-ink)' }}
    >
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="text-[13px] uppercase tracking-[0.1em] text-black/40 sm:text-[14px]">
            Ecossistema
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            className="mt-3 max-w-xl"
            style={{ fontSize: 'clamp(26px, 4.5vw, 40px)', lineHeight: 1.2, fontWeight: 400 }}
          >
            Uma agente conectada à operação da escola.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p
            className="mt-6 max-w-xl text-black/65"
            style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', lineHeight: 1.6 }}
          >
            A Lili não vive isolada numa janela de chat. Ela lê e atualiza, em tempo real, as
            mesmas fontes que a escola já usa no dia a dia. Toque em cada ponto para ver o que
            passa por ali.
          </p>
        </Reveal>

        <div className="mt-16 sm:mt-20">
          <Reveal
            delay={0.2}
            className="relative mx-auto w-full max-w-[420px]"
            style={{ aspectRatio: '1 / 1' }}
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {NODES.map((node) => {
                const isLive = hoveredNode === node.label || selectedNode === node.label
                return (
                  <line
                    key={node.label}
                    x1={50}
                    y1={50}
                    x2={node.x}
                    y2={node.y}
                    stroke={isLive ? 'var(--color-amber)' : 'rgba(21,19,15,0.15)'}
                    strokeWidth={isLive ? 0.6 : 0.3}
                    style={{ transition: 'stroke 0.25s ease, stroke-width 0.25s ease' }}
                  />
                )
              })}
            </svg>

            <div
              className="absolute flex items-center justify-center rounded-full text-center"
              style={{
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 'clamp(84px, 20%, 108px)',
                height: 'clamp(84px, 20%, 108px)',
                background: 'var(--color-ink)',
                color: '#fff',
              }}
            >
              <span style={{ fontFamily: 'var(--font-heading)' }} className="text-[18px] sm:text-[22px]">
                Lili
              </span>
            </div>

            {NODES.map((node) => {
              const isLive = hoveredNode === node.label || selectedNode === node.label
              return (
                <button
                  key={node.label}
                  type="button"
                  onMouseEnter={() => setHoveredNode(node.label)}
                  onMouseLeave={() => setHoveredNode((current) => (current === node.label ? null : current))}
                  onClick={() => setSelectedNode(node.label)}
                  className="absolute flex w-[38%] cursor-pointer flex-col items-center justify-center gap-1.5 rounded-2xl border bg-white px-2.5 py-3 text-center text-[11px] leading-tight sm:w-[34%] sm:px-3 sm:text-[13px]"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    borderColor: isLive ? 'var(--color-amber)' : 'rgba(21,19,15,0.15)',
                    transform: `translate(-50%, -50%) scale(${isLive ? 1.08 : 1})`,
                    boxShadow: isLive ? '0 10px 24px rgba(192,127,52,0.18)' : 'none',
                    transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                  }}
                >
                  <node.Icon
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    style={{ color: isLive ? 'var(--color-amber)' : 'var(--color-ink)' }}
                  />
                  {node.label}
                </button>
              )
            })}
          </Reveal>

          <Reveal delay={0.3} className="mx-auto mt-10 w-full max-w-xl sm:mt-12">
            <div
              key={selected.label}
              className="rounded-3xl border border-black/10 bg-white px-6 py-7 sm:px-8 sm:py-8"
              style={{ animation: 'fadeInDetail 0.35s ease' }}
            >
              <div className="flex items-center gap-3">
                <selected.Icon className="h-6 w-6" style={{ color: 'var(--color-amber)' }} />
                <h3 style={{ fontSize: 'clamp(17px, 2vw, 20px)', fontWeight: 500 }}>{selected.label}</h3>
              </div>
              <p className="mt-3 text-black/65" style={{ fontSize: 'clamp(14px, 1.6vw, 16px)', lineHeight: 1.55 }}>
                {selected.detail}
              </p>
              <div className="mt-6 text-black/70">
                <selected.Visual />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
