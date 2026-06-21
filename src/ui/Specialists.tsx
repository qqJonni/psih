import { SPECIALISTS } from '../content/texts'

export function Specialists() {
  return (
    <section id="specialists" className="relative z-10 py-24 md:py-32 px-6" style={{ background: 'var(--cream)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-[1px] mx-auto mb-6" style={{ background: 'var(--brass)' }} />
          <h2
            className="font-serif text-3xl md:text-5xl tracking-[0.08em]"
            style={{ color: 'var(--ink)' }}
          >
            Специалисты
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SPECIALISTS.map((specialist) => (
            <div
              key={specialist.name}
              className="group text-center p-6 md:p-8 rounded-2xl transition-all duration-500"
              style={{ background: 'var(--mist)' }}
            >
              {/* Avatar placeholder */}
              <div
                className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center"
                style={{ background: 'var(--cream)', border: '1px solid rgba(184, 146, 74, 0.2)' }}
              >
                <span className="font-serif text-2xl" style={{ color: 'var(--brass)' }}>
                  {specialist.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <h3
                className="font-serif text-lg md:text-xl mb-1"
                style={{ color: 'var(--ink)' }}
              >
                {specialist.name}
              </h3>
              <p className="text-xs tracking-[0.05em]" style={{ color: 'var(--bronze)' }}>
                {specialist.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
