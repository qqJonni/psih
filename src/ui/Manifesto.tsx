import { MANIFESTO } from '../content/texts'

export function Manifesto() {
  return (
    <section id="philosophy" className="relative z-10 py-20 md:py-48 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="w-12 h-[0.5px] mx-auto mb-10" style={{ background: 'var(--brass)' }} />
        <h2
          className="font-serif text-3xl md:text-5xl lg:text-6xl leading-tight tracking-[0.04em] mb-12 whitespace-pre-line"
          style={{ color: 'var(--ink)' }}
        >
          {MANIFESTO.title}
        </h2>
        {MANIFESTO.paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-serif text-base md:text-lg leading-relaxed italic mb-6 last:mb-0"
            style={{ color: 'var(--bronze)' }}
          >
            {p}
          </p>
        ))}
        <div className="w-12 h-[0.5px] mx-auto mt-12" style={{ background: 'var(--brass)' }} />
      </div>
    </section>
  )
}
