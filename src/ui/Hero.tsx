import { CLINIC } from '../content/texts'

export function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-end pb-28 md:pb-36 z-10 pointer-events-none">
      <div className="text-center px-4">
        <h1
          className="font-serif text-4xl md:text-7xl lg:text-8xl tracking-[0.15em] md:tracking-[0.3em] mb-4 opacity-0 animate-[fadeUp_1.2s_0.3s_forwards]"
          style={{ color: 'var(--ink)' }}
        >
          {CLINIC.name}
        </h1>
        <p
          className="font-serif text-sm md:text-lg tracking-[0.2em] italic opacity-0 animate-[fadeUp_1s_0.8s_forwards]"
          style={{ color: 'var(--bronze)' }}
        >
          {CLINIC.subtitle}
        </p>
        <div
          className="w-16 h-[0.5px] mx-auto my-8 opacity-0 animate-[fadeUp_1s_1.1s_forwards]"
          style={{ background: 'var(--brass)' }}
        />
        <p
          className="text-sm md:text-base tracking-[0.06em] mb-12 max-w-sm mx-auto opacity-0 animate-[fadeUp_1s_1.3s_forwards]"
          style={{ color: 'var(--bronze)' }}
        >
          {CLINIC.tagline}
        </p>
        <a
          href="#booking"
          className="pointer-events-auto inline-block px-10 py-3.5 text-xs tracking-[0.2em] uppercase rounded-full transition-all duration-700 hover:scale-105 opacity-0 animate-[fadeUp_1s_1.6s_forwards]"
          style={{ background: 'var(--brass)', color: 'var(--ivory)' }}
        >
          Записаться
        </a>
      </div>

    </section>
  )
}
