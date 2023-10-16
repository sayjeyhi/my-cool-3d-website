import { OrbitControls, useKeyboardControls } from '@react-three/drei'
import { type IControls } from '../types.ts'
import { useEffect } from 'react'

export function Controls(): JSX.Element {
  const [sub] = useKeyboardControls<IControls>()

  useEffect(() => {
    return sub(
      state => state,
      pressed => {
        if (pressed.forward) console.log('forward')
        if (pressed.back) console.log('back')
        if (pressed.left) console.log('left')
        if (pressed.right) console.log('right')
      }
    )
  }, [])

  return (
    <OrbitControls
      autoRotateSpeed={1}
      maxDistance={40}
      minDistance={15}
      screenSpacePanning={false}
      // y-axis
      minPolarAngle={0.8}
      maxPolarAngle={1.5}
      // x-axis
      minAzimuthAngle={0.5}
      maxAzimuthAngle={2.6}
      enablePan
      enableDamping
      dampingFactor={0.5}
      enableRotate={true}
    />
  )
}
