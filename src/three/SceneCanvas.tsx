import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing'
import { HeroArtifact } from './HeroArtifact'

const isMobile = window.innerWidth < 768

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
          {!isMobile && (
            <EffectComposer multisampling={4}>
              <Bloom
                luminanceThreshold={0.9}
                luminanceSmoothing={0.9}
                intensity={0.3}
                mipmapBlur
              />
              <Vignette eskil={false} offset={0.2} darkness={0.3} />
            </EffectComposer>
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}
