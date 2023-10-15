import { type RootState, useFrame } from '@react-three/fiber'

import { PerspectiveCamera, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import { angleToRadians } from '../utils/angle.ts'

export function Camera (): JSX.Element {
  // // Code to move the camera around
  // const orbitControlsRef = useRef<any>(null)
  //
  // useFrame((state: RootState) => {
  //   if (orbitControlsRef.current) {
  //     const { x, y } = state.mouse
  //     orbitControlsRef.current.setAzimuthalAngle(-x * angleToRadians(45))
  //     orbitControlsRef.current.setPolarAngle((y + 1) * angleToRadians(90 - 30))
  //     orbitControlsRef.current.update()
  //   }
  // })

  return (
    <></>
  )
}
