import { Canvas } from '@react-three/fiber'
import { Suspense, useState } from 'react'

import { Env } from './components/Env'
import { Scene } from './components/Scene'
import { PerformanceMonitor } from '@react-three/drei'
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
      camera={{ position: [12, 2, -30], fov: 26, zoom: 1 }}>
      <color attach="background" args={['#acd39b']} />
      <fogExp2 attach="fog" args={['#acd39b', 0.005]} />

      <PerformanceMonitor
        onDecline={() => {
          degrade(true)
        }}
      />

      <Lights />
      <Controls />

      {/* <Grid */}
      {/*   sectionColor={'#444'} */}
      {/*   renderOrder={-1} */}
      {/*   position={[0, -1.85, 0]} */}
      {/*   infiniteGrid */}
      {/*   cellSize={0} */}
      {/*   cellThickness={0} */}
      {/*   sectionSize={0.5} */}
      {/*   sectionThickness={0.6} */}
      {/*   fadeDistance={30} */}
      {/* /> */}

      <Suspense fallback={null}>
        <Scene />
      </Suspense>

      <Env perfSucks={perfSucks} />
    </Canvas>
  )
}
