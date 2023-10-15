import { Canvas } from '@react-three/fiber'
import { Suspense, useState, useRef, type Ref, useEffect } from 'react'

import { Env } from './components/Env'
import { Scene } from './components/Scene'
import { PerformanceMonitor, Grid, OrbitControls } from '@react-three/drei'
import { Camera } from './components/Camera.tsx'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import { Controls } from './components/Controls'
import { Lights } from './components/Lights.tsx'

export default function App(): JSX.Element {
  const [perfSucks, degrade] = useState(false)

  return (
    <Canvas
      shadows
      dpr={[1, perfSucks ? 1.5 : 2]}
      eventSource={document.getElementById('root')!}
      eventPrefix="client"
      camera={{ position: [12, 2, -10], fov: 26, zoom: 1 }}>
      <color attach="background" args={['#acd39b']} />
      <Lights />
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
      <Controls />
      {/** PerfMon will detect performance issues */}
      <PerformanceMonitor
        onDecline={() => {
          degrade(true)
        }}
      />

      <Suspense fallback={null}>
        <Scene />
      </Suspense>
      <Env perfSucks={perfSucks} />
    </Canvas>
  )
}
