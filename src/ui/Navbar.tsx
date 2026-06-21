import { useState } from 'react'
import { CLINIC, NAV_ITEMS } from '../content/texts'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div
        className="mx-3 lg:mx-6 mt-3 md:mt-5 px-4 lg:px-6 py-3 md:py-4 rounded-2xl flex items-center justify-between"
        style={{
          background: 'var(--mist)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(184, 146, 74, 0.15)',
        }}
      >
        <a href="#" className="font-serif text-lg md:text-xl tracking-[0.25em]" style={{ color: 'var(--ink)' }}>
          {CLINIC.name}
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-3 lg:gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[10px] lg:text-xs tracking-[0.08em] uppercase transition-colors duration-500 hover:opacity-70 whitespace-nowrap"
              style={{ color: 'var(--bronze)' }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            className="px-4 lg:px-6 py-2 lg:py-2.5 text-[10px] lg:text-xs tracking-[0.08em] uppercase rounded-full transition-all duration-500 whitespace-nowrap"
            style={{
              background: 'var(--brass)',
              color: 'var(--ivory)',
            }}
          >
            Записаться
          </a>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Меню"
        >
          <span className="block w-5 h-[1px] transition-transform duration-300" style={{
            background: 'var(--brass)',
            transform: menuOpen ? 'rotate(45deg) translate(2px, 2px)' : '',
          }} />
          <span className="block w-5 h-[1px] transition-opacity duration-300" style={{
            background: 'var(--brass)',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span className="block w-5 h-[1px] transition-transform duration-300" style={{
            background: 'var(--brass)',
            transform: menuOpen ? 'rotate(-45deg) translate(2px, -2px)' : '',
          }} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden mx-4 mt-2 px-6 py-6 rounded-2xl flex flex-col gap-4"
          style={{
            background: 'var(--mist)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm tracking-[0.12em] uppercase"
              style={{ color: 'var(--bronze)' }}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#booking"
            className="mt-2 px-5 py-2.5 text-sm tracking-[0.12em] uppercase rounded-full text-center"
            style={{ background: 'var(--brass)', color: 'var(--ivory)' }}
            onClick={() => setMenuOpen(false)}
          >
            Записаться
          </a>
        </div>
      )}
    </nav>
  )
}
