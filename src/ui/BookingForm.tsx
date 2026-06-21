import { useState } from 'react'
import { CLINIC, DIRECTIONS } from '../content/texts'

export function BookingForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', service: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.')
  }

  return (
    <section id="booking" className="relative z-10 py-20 md:py-32 px-6 md:px-8" style={{ background: 'var(--ivory)' }}>
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <div className="w-12 h-[1px] mx-auto mb-6" style={{ background: 'var(--brass)' }} />
          <h2
            className="font-serif text-3xl md:text-5xl tracking-[0.08em] mb-4"
            style={{ color: 'var(--ink)' }}
          >
            Запись на приём
          </h2>
          <p className="text-sm" style={{ color: 'var(--bronze)' }}>
            {CLINIC.address}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-5 md:p-10 rounded-2xl space-y-5 md:space-y-6"
          style={{
            background: 'var(--mist)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(184, 146, 74, 0.12)',
          }}
        >
          <div>
            <label className="block text-xs tracking-[0.1em] uppercase mb-2" style={{ color: 'var(--bronze)' }}>
              Имя
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300 focus:ring-1"
              style={{
                background: 'var(--ivory)',
                color: 'var(--ink)',
                border: '1px solid rgba(184, 146, 74, 0.15)',
              }}
              placeholder="Ваше имя"
            />
          </div>

          <div>
            <label className="block text-xs tracking-[0.1em] uppercase mb-2" style={{ color: 'var(--bronze)' }}>
              Телефон
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none transition-all duration-300"
              style={{
                background: 'var(--ivory)',
                color: 'var(--ink)',
                border: '1px solid rgba(184, 146, 74, 0.15)',
              }}
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <div>
            <label className="block text-xs tracking-[0.1em] uppercase mb-2" style={{ color: 'var(--bronze)' }}>
              Направление
            </label>
            <select
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-3 rounded-lg text-sm outline-none appearance-none"
              style={{
                background: 'var(--ivory)',
                color: 'var(--ink)',
                border: '1px solid rgba(184, 146, 74, 0.15)',
              }}
            >
              <option value="">Выберите направление</option>
              {DIRECTIONS.map((s) => (
                <option key={s.title} value={s.title}>{s.title}</option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 text-sm tracking-[0.15em] uppercase rounded-full transition-all duration-500 hover:scale-[1.02]"
            style={{ background: 'var(--brass)', color: 'var(--ivory)' }}
          >
            Записаться
          </button>
        </form>

        <div className="mt-8 text-center space-y-2">
          <p className="text-sm" style={{ color: 'var(--bronze)' }}>{CLINIC.phone}</p>
          <p className="text-sm" style={{ color: 'var(--bronze)' }}>{CLINIC.email}</p>
        </div>
      </div>
    </section>
  )
}
