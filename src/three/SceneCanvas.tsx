import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { HeroArtifact } from './HeroArtifact'

interface SceneCanvasProps {
  scrollProgress: number
}

export function SceneCanvas({ scrollProgress }: SceneCanvasProps) {
  return (
    <div
      className="fixed inset-0 z-0 transition-opacity duration-1000"
      style={{ opacity: Math.max(0, 1 - scrollProgress * 4) }}
    >
      <Canvas
        dpr={Math.min(window.devicePixelRatio, 2)}
        camera={{ position: [0, 0, 8], fov: 22 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <HeroArtifact scrollProgress={scrollProgress} />
        </Suspense>
      </Canvas>
    </div>
  )
}
