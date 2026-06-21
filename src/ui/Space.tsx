const TEXTURES = [
  { label: 'Оникс', color: 'var(--onyx-honey)' },
  { label: 'Латунь', color: 'var(--brass-light)' },
  { label: 'Бронзовое стекло', color: 'var(--bronze)' },
  { label: 'Тёплый дуб', color: 'var(--oak)' },
  { label: 'Ботаника', color: 'var(--botanical)' },
]

export function Space() {
  return (
    <section id="space" className="relative z-10 py-24 md:py-40 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-[0.5px] mx-auto mb-6" style={{ background: 'var(--brass)' }} />
          <h2
            className="font-serif text-3xl md:text-5xl tracking-[0.06em] mb-4"
            style={{ color: 'var(--ink)' }}
          >
            Пространство
          </h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: 'var(--bronze)' }}>
            Каждая деталь интерьера создана для ощущения безопасности и тепла
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {TEXTURES.map((t) => (
            <div key={t.label} className="group flex flex-col items-center gap-3">
              <div
                className="w-full aspect-square rounded-2xl transition-transform duration-700 group-hover:scale-95"
                style={{ background: t.color, opacity: 0.7 }}
              />
              <span className="text-xs tracking-[0.1em] uppercase" style={{ color: 'var(--bronze)' }}>
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
