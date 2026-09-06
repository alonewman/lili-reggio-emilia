import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Capacidades', href: '#capacidades' },
  { label: 'Em ação', href: '#exemplos' },
  { label: 'Ecossistema', href: '#ecossistema' },
  { label: 'Impacto', href: '#impacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0))',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-[21px] tracking-tight text-white sm:text-[26px]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Lili
          </span>
          <span
            className="select-none text-[25px] text-white sm:text-[30px]"
            style={{ letterSpacing: '-0.02em' }}
          >
            ✳︎
          </span>
          <span className="hidden text-[13px] text-white/50 sm:inline">Colégio Reggio Emilia</span>
        </div>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center text-[23px] text-white md:flex">
          {NAV_LINKS.map((link, i) => (
            <span key={link.label}>
              <a href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </a>
              {i < NAV_LINKS.length - 1 && <span>, </span>}
            </span>
          ))}
        </div>

        <a
          href="#exemplos"
          className="hidden text-[23px] text-white underline underline-offset-2 transition-opacity hover:opacity-60 md:inline-block"
        >
          Ver a Lili em ação
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-20 flex flex-col items-center justify-center gap-[5px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 transition-transform duration-300 ${menuOpen ? 'bg-black' : 'bg-white'}`}
            style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
          />
          <span
            className={`h-[2px] w-6 transition-opacity duration-300 ${menuOpen ? 'bg-black' : 'bg-white'}`}
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className={`h-[2px] w-6 transition-transform duration-300 ${menuOpen ? 'bg-black' : 'bg-white'}`}
            style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[9] flex flex-col items-start justify-center gap-8 bg-white/95 px-8 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[32px] font-medium text-black"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#exemplos"
          className="text-[32px] font-medium text-black underline underline-offset-2"
          onClick={() => setMenuOpen(false)}
        >
          Ver a Lili em ação
        </a>
      </div>
    </>
  )
}
