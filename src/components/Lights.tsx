import { Bloom, EffectComposer } from '@react-three/postprocessing'

export function Lights(): JSX.Element {
  return (
    <>
      <hemisphereLight intensity={1.2} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 10, 0]} intensity={1} />
      <pointLight position={[0, -10, 0]} intensity={1} />
      <ambientLight args={['#fff', 0.5]} />
      <pointLight args={['#fff', 0.5, 100, 2]} position={[0, 10, 0]} castShadow />

      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0.95} mipmapBlur />
      </EffectComposer>

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
