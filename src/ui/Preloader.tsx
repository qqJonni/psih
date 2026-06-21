import { useEffect, useState } from 'react'

interface Props {
  onComplete: () => void
}

export function Preloader({ onComplete }: Props) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setVisible(false)
            onComplete()
          }, 800)
          return 100
        }
        return p + Math.random() * 6 + 2
      })
    }, 60)
    return () => clearInterval(interval)
  }, [onComplete])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-opacity duration-1000"
      style={{
        background: 'var(--ivory)',
        opacity: progress >= 100 ? 0 : 1,
        pointerEvents: progress >= 100 ? 'none' : 'auto',
      }}
    >
      <div className="relative mb-8">
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle
            cx="36" cy="36" r="32"
            fill="none"
            stroke="var(--cream)"
            strokeWidth="0.5"
          />
          <circle
            cx="36" cy="36" r="32"
            fill="none"
            stroke="var(--brass)"
            strokeWidth="1"
            strokeDasharray={`${(Math.min(progress, 100) / 100) * 201} 201`}
            strokeLinecap="round"
            transform="rotate(-90 36 36)"
            className="transition-all duration-300"
          />
        </svg>
      </div>
      <h1
        className="font-serif text-3xl md:text-5xl tracking-[0.35em]"
        style={{ color: 'var(--ink)' }}
      >
        ЦЕЛЬНОСТЬ
      </h1>
      <p className="mt-3 text-xs tracking-[0.2em] uppercase" style={{ color: 'var(--bronze)' }}>
        клиника Юлии Огарковой
      </p>
    </div>
  )
}
