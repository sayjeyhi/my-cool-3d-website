import { OrbitControls } from '@react-three/drei'
import { type Ref, useEffect, useRef } from 'react'

export function Controls(): JSX.Element {
  const ref = useRef<Ref<typeof OrbitControls>>()

  useEffect(() => {
    console.log('Controls', ref.current)
    ref.current?.listenToKeyEvents(window)
  }, [])

  return (
    <OrbitControls
      ref={ref as any}
      autoRotateSpeed={1}
      maxDistance={40}
      minDistance={15}
      makeDefault={false}
      autoRotate={false}
      // y-axis
      minPolarAngle={0.8}
      maxPolarAngle={1.5}
      // x-axis
      minAzimuthAngle={0.5}
      maxAzimuthAngle={2.6}
      enableDamping
    />
  )
}
