import { SPECIALISTS } from '../content/texts'

export function Specialists() {
  return (
    <section id="specialists" className="relative z-10 py-16 md:py-28 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="w-12 h-[0.5px] mx-auto mb-6" style={{ background: 'var(--brass)' }} />
          <h2
            className="font-serif text-3xl md:text-5xl tracking-[0.06em]"
            style={{ color: 'var(--ink)' }}
          >
            Специалисты
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {SPECIALISTS.map((specialist) => (
            <div
              key={specialist.name}
              className="group text-center p-4 md:p-8 rounded-2xl transition-all duration-500"
              style={{ background: 'var(--mist)' }}
            >
              <div
                className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto mb-3 md:mb-5 flex items-center justify-center"
                style={{ background: 'var(--cream)', border: '1px solid rgba(184, 146, 74, 0.2)' }}
              >
                <span className="font-serif text-lg md:text-2xl" style={{ color: 'var(--brass)' }}>
                  {specialist.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3
                className="font-serif text-sm md:text-xl mb-1"
                style={{ color: 'var(--ink)' }}
              >
                {specialist.name}
              </h3>
              <p className="text-[10px] md:text-xs tracking-[0.03em]" style={{ color: 'var(--bronze)' }}>
                {specialist.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
