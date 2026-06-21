const TEXTURES = [
  { label: 'Оникс', color: 'var(--onyx-honey)' },
  { label: 'Латунь', color: 'var(--brass-light)' },
  { label: 'Бронзовое стекло', color: 'var(--bronze)' },
  { label: 'Тёплый дуб', color: 'var(--oak)' },
  { label: 'Ботаника', color: 'var(--botanical)' },
]

export function Space() {
  return (
    <section id="space" className="relative z-10 py-16 md:py-28 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
          {TEXTURES.map((t) => (
            <div key={t.label} className="group flex flex-col items-center gap-2 md:gap-3">
              <div
                className="w-full aspect-square rounded-xl md:rounded-2xl transition-transform duration-700 group-hover:scale-95"
                style={{ background: t.color, opacity: 0.7 }}
              />
              <span className="text-[9px] md:text-xs tracking-[0.08em] uppercase text-center" style={{ color: 'var(--bronze)' }}>
                {t.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
