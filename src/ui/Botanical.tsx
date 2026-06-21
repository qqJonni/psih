export function Botanical() {
  return (
    <section className="relative z-10 py-12 md:py-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex items-center justify-center">
        <svg
          viewBox="0 0 600 300"
          className="w-full max-w-lg opacity-60"
          fill="none"
          stroke="var(--brass)"
          strokeWidth="0.6"
          strokeLinecap="round"
        >
          {/* Branch left */}
          <path
            d="M300 280 C280 240, 220 200, 180 160 C160 140, 140 100, 150 60"
            className="botanical-stroke"
          />
          {/* Leaves left */}
          <path d="M220 190 C200 180, 190 160, 200 145 C210 155, 225 170, 220 190Z" className="botanical-stroke" style={{ animationDelay: '0.3s' }} />
          <path d="M180 140 C160 135, 150 115, 155 100 C165 110, 175 125, 180 140Z" className="botanical-stroke" style={{ animationDelay: '0.6s' }} />
          {/* Branch right */}
          <path
            d="M300 280 C320 240, 380 200, 420 160 C440 140, 460 100, 450 60"
            className="botanical-stroke"
          />
          {/* Leaves right */}
          <path d="M380 190 C400 180, 410 160, 400 145 C390 155, 375 170, 380 190Z" className="botanical-stroke" style={{ animationDelay: '0.5s' }} />
          <path d="M420 140 C440 135, 450 115, 445 100 C435 110, 425 125, 420 140Z" className="botanical-stroke" style={{ animationDelay: '0.8s' }} />
          {/* Center bud */}
          <circle cx="300" cy="55" r="8" className="botanical-stroke" style={{ animationDelay: '1s' }} />
          <circle cx="300" cy="55" r="3" fill="var(--brass)" opacity="0.3" className="botanical-stroke" style={{ animationDelay: '1.2s' }} />
        </svg>
      </div>
    </section>
  )
}
