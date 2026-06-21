import { CLINIC, NAV_ITEMS } from '../content/texts'

export function Footer() {
  return (
    <footer className="relative z-10 py-16 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="w-full h-[1px] mb-12" style={{ background: 'var(--brass)', opacity: 0.3 }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <h3 className="font-serif text-2xl tracking-[0.2em] mb-2" style={{ color: 'var(--ink)' }}>
              {CLINIC.name}
            </h3>
            <p className="font-serif text-sm italic" style={{ color: 'var(--bronze)' }}>
              {CLINIC.subtitle}
            </p>
          </div>

          <div>
            <p className="text-xs tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--brass)' }}>Навигация</p>
            <div className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block text-sm transition-colors duration-300 hover:opacity-70"
                  style={{ color: 'var(--bronze)' }}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--brass)' }}>Контакты</p>
            <address className="not-italic space-y-2 text-sm" style={{ color: 'var(--bronze)' }}>
              <p>{CLINIC.address}</p>
              <p>{CLINIC.phone}</p>
              <p>{CLINIC.email}</p>
            </address>
          </div>
        </div>

        <div className="w-full h-[1px] my-10" style={{ background: 'var(--brass)', opacity: 0.15 }} />
        <p className="text-center text-xs" style={{ color: 'var(--bronze)', opacity: 0.6 }}>
          © {new Date().getFullYear()} {CLINIC.name}. Все права защищены.
        </p>
      </div>
    </footer>
  )
}
