import { DIRECTIONS } from '../content/texts'

export function Services() {
  return (
    <section id="directions" className="relative z-10 py-16 md:py-28 px-6" style={{ background: 'var(--ivory)' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="w-12 h-[0.5px] mx-auto mb-6" style={{ background: 'var(--brass)' }} />
          <h2
            className="font-serif text-3xl md:text-5xl tracking-[0.06em]"
            style={{ color: 'var(--ink)' }}
          >
            Направления
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden" style={{ background: 'rgba(184, 146, 74, 0.1)' }}>
          {DIRECTIONS.map((item) => (
            <div
              key={item.title}
              className="group p-6 md:p-10 text-center transition-all duration-700 cursor-default"
              style={{ background: 'var(--ivory)' }}
            >
              <h3
                className="font-serif text-xl md:text-2xl mb-4 tracking-[0.02em]"
                style={{ color: 'var(--ink)' }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--bronze)' }}>
                {item.description}
              </p>
              <div
                className="w-0 group-hover:w-12 h-[0.5px] mt-6 mx-auto transition-all duration-700 ease-out"
                style={{ background: 'var(--brass)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
