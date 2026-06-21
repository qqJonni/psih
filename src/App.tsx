import { useState, useCallback } from 'react'
import { SceneCanvas } from './three/SceneCanvas'
import { Preloader } from './ui/Preloader'
import { Navbar } from './ui/Navbar'
import { Hero } from './ui/Hero'
import { Manifesto } from './ui/Manifesto'
import { Botanical } from './ui/Botanical'
import { Services } from './ui/Services'
import { Specialists } from './ui/Specialists'
import { Space } from './ui/Space'
import { BookingForm } from './ui/BookingForm'
import { Footer } from './ui/Footer'
import { useScrollProgress } from './hooks/useScrollProgress'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const scrollProgress = useScrollProgress()
  const onLoaded = useCallback(() => setLoaded(true), [])

  return (
    <>
      <Preloader onComplete={onLoaded} />

      {loaded && (
        <>
          <SceneCanvas scrollProgress={scrollProgress} />
          <Navbar />

          <div className="relative z-10">
            <Hero />
            <Manifesto />
            <Botanical />
            <Services />
            <Specialists />
            <Space />
            <BookingForm />
            <Footer />
          </div>
        </>
      )}
    </>
  )
}
