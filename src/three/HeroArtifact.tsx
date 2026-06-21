import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshTransmissionMaterial, Float, ContactShadows, Environment, Lightformer } from '@react-three/drei'
import * as THREE from 'three'

interface HeroArtifactProps {
  scrollProgress: number
}

function OnyxStone({ scrollProgress }: { scrollProgress: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)

  const geometry = useMemo(() => {
    const geo = new THREE.SphereGeometry(0.6, 128, 128)
    const pos = geo.attributes.position
    const v = new THREE.Vector3()
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i)
      const noise =
        Math.sin(v.x * 2.5 + v.y * 1.3) * 0.06 +
        Math.sin(v.y * 3.1 + v.z * 2.0) * 0.08 +
        Math.cos(v.z * 2.8 + v.x * 1.5) * 0.04
      v.normalize().multiplyScalar(0.6 * (1 + noise))
      pos.setXYZ(i, v.x, v.y, v.z)
    }
    geo.computeVertexNormals()
    return geo
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.elapsedTime
    meshRef.current.rotation.y = t * 0.05 + scrollProgress * Math.PI * 0.5
    meshRef.current.rotation.x = Math.sin(t * 0.03) * 0.08 + scrollProgress * 0.3
    const breathe = 1 + Math.sin(t * 0.8) * 0.012
    meshRef.current.scale.setScalar(breathe)
  })

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <MeshTransmissionMaterial
        backside
        backsideThickness={0.5}
        samples={8}
        thickness={1.5}
        chromaticAberration={0.05}
        anisotropy={0.3}
        distortion={0.3}
        distortionScale={0.4}
        temporalDistortion={0.06}
        ior={1.5}
        color="#c9a872"
        attenuationColor="#8a6530"
        attenuationDistance={0.35}
        roughness={0.12}
        transmission={0.92}
        resolution={256}
        toneMapped={false}
      />
    </mesh>
  )
}

function BrassRing({ scrollProgress }: { scrollProgress: number }) {
  const ringRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (!ringRef.current) return
    const t = state.clock.elapsedTime
    ringRef.current.rotation.x = Math.PI * 0.45 + Math.sin(t * 0.04) * 0.05
    ringRef.current.rotation.z = t * 0.03 + scrollProgress * Math.PI * 0.3
  })

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[0.85, 0.012, 32, 128]} />
      <meshStandardMaterial
        color="#B8924A"
        metalness={0.95}
        roughness={0.15}
        envMapIntensity={2.5}
      />
    </mesh>
  )
}

export function HeroArtifact({ scrollProgress }: HeroArtifactProps) {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame(() => {
    if (!groupRef.current) return
    groupRef.current.position.y = 0.5 - scrollProgress * 2
  })

  return (
    <>
      <Environment
        background={false}
        environmentIntensity={0.8}
      >
        <color attach="background" args={['#f4efe7']} />
        <Lightformer form="circle" position={[0, 5, -5]} scale={12} intensity={2} color="#F4EFE7" />
        <Lightformer form="circle" position={[5, 0, 3]} scale={8} intensity={1.5} color="#f5e6c8" />
        <Lightformer form="circle" position={[-5, -2, -3]} scale={8} intensity={1} color="#D8B871" />
        <Lightformer form="circle" position={[0, -6, 0]} scale={14} intensity={1} color="#E8DFD1" />
        <Lightformer form="circle" position={[0, 0, 8]} scale={14} intensity={1.2} color="#faf5ed" />
      </Environment>

      <Float speed={0.6} rotationIntensity={0.08} floatIntensity={0.2}>
        <group ref={groupRef}>
          <OnyxStone scrollProgress={scrollProgress} />
          <BrassRing scrollProgress={scrollProgress} />
        </group>
      </Float>

      <ContactShadows
        position={[0, -1.2, 0]}
        opacity={0.25}
        scale={4}
        blur={2.5}
        color="#6E5A45"
      />
    </>
  )
}
