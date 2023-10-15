import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useRef, type Ref, useEffect } from 'react'

import { Env } from './components/Env'
import { Scene } from './components/Scene'
import { PerformanceMonitor, Grid, OrbitControls } from '@react-three/drei'
import { Camera } from './components/Camera.tsx'
import { EffectComposer, Bloom } from '@react-three/postprocessing'

export default function App(): JSX.Element {
  const ref = useRef<Ref<typeof OrbitControls>>(null)
  const [perfSucks, degrade] = useState(false)

  useEffect(() => {
    console.log('reff', ref.current)
    ref.current?.listenToKeyEvents(document)
  }, [ref.current])

  return (
    <Canvas
      shadows
      dpr={[1, perfSucks ? 1.5 : 2]}
      eventSource={document.getElementById('root')!}
      eventPrefix="client"
      camera={{ position: [12, 2, -10], fov: 26, zoom: 1 }}>
      <color attach="background" args={['#acd39b']} />

      <hemisphereLight intensity={1.2} />

      <mesh scale={4} position={[0.75, -2, 0.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <mesh scale={4} position={[0.6, -2, 15]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>

      <Grid
        sectionColor={'#444'}
        renderOrder={-1}
        position={[0, -1.85, 0]}
        infiniteGrid
        cellSize={0}
        cellThickness={0}
        sectionSize={0.5}
        sectionThickness={0.6}
        fadeDistance={30}
      />
      <OrbitControls
        ref={ref as any}
        // y-axis
        minPolarAngle={0.8}
        maxPolarAngle={1.4}
        // x-axis
        minAzimuthAngle={0.5}
        maxAzimuthAngle={2.6}
        maxDistance={40}
        minDistance={15}
        makeDefault={false}
        autoRotate={false}
        onUpdate={pointer => {
          console.log('update', pointer)
          pointer?.listenToKeyEvents(document)
        }}
        enableDamping
      />
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={1} mipmapBlur />
      </EffectComposer>
      {/** PerfMon will detect performance issues */}
      <PerformanceMonitor
        onDecline={() => {
          degrade(true)
        }}
      />

      <ambientLight intensity={0.5} />
      <pointLight position={[0, 10, 0]} intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />

      <ambientLight args={['#fff', 0.5]} />
      <pointLight args={['#fff', 0.5, 100, 2]} position={[0, 10, 0]} castShadow />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Env perfSucks={perfSucks} />
    </Canvas>
  )
}
