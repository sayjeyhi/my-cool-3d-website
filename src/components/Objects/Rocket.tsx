/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import type * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { type GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Cylinder: THREE.Mesh
    Torus: THREE.Mesh
    Cylinder001: THREE.Mesh
    Sphere: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cube: THREE.Mesh
    Cube001: THREE.Mesh
    Cylinder003: THREE.Mesh
  }
  materials: {
    M1: THREE.MeshStandardMaterial
    ['M1.001']: THREE.MeshStandardMaterial
    GlassM1: THREE.MeshPhysicalMaterial
    ['M1.002']: THREE.MeshStandardMaterial
  }
}

export function Rocket(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/objects/rocket.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.M1}
        position={[0.81, 0.72, -0.01]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={0.86}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={materials['M1.001']}
        position={[0.6, 0.51, -0.01]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={[0.73, 0.67, 0.73]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['M1.001']}
        position={[1.2, 1.1, 0.57]}
        rotation={[1.67, -0.78, 0.07]}
        scale={0.52}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.GlassM1}
        position={[1.18, 1.09, 0.99]}
        rotation={[0.05, -0.05, -0.78]}
        scale={[0.34, 0.34, 0.23]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['M1.001']}
        position={[0.78, 0.69, -0.01]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['M1.001']}
        position={[0.71, 0.62, -0.01]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={0.81}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['M1.001']}
        position={[0.71, 0.62, -0.01]}
        rotation={[Math.PI / 2, Math.PI / 4, -Math.PI / 2]}
        scale={0.81}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['M1.002']}
        position={[-0.29, -0.42, -0.01]}
        rotation={[0, 0, -Math.PI / 4]}
        scale={0.24}
      />
    </group>
  )
}

useGLTF.preload('/objects/rocket.glb')
