// import { angleToRadians } from '../utils/angle.ts'

export function Lights(): JSX.Element {
  return (
    <>
      <pointLight args={['#fff', 0.5, 100, 2]} position={[0, 10, 0]} castShadow />
      <directionalLight args={['#fff', 1]} position={[10, 10, 5]} castShadow />
      <mesh scale={4} position={[0.75, -2, 0.5]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 4, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
      <mesh scale={4} position={[0.6, -2, 15]} rotation={[-Math.PI / 2, 0, Math.PI / 2.5]}>
        <ringGeometry args={[0.9, 1, 3, 1]} />
        <meshStandardMaterial color="white" roughness={0.75} />
      </mesh>
    </>
  )
}
