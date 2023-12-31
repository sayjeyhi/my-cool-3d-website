/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import type * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { type GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Sphere: THREE.Mesh
    Cylinder: THREE.Mesh
    Sphere003: THREE.Mesh
    Cylinder001: THREE.Mesh
    Cylinder002: THREE.Mesh
    Cylinder004: THREE.Mesh
    Cylinder003: THREE.Mesh
    Cube001: THREE.Mesh
    Cube002: THREE.Mesh
    Cube003: THREE.Mesh
    Sphere001: THREE.Mesh
  }
  materials: {
    M1: THREE.MeshStandardMaterial
    ['M1.003']: THREE.MeshStandardMaterial
    ['M1.001']: THREE.MeshPhysicalMaterial
    ['M1.002']: THREE.MeshStandardMaterial
  }
}

export function Me (props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/objects/me.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.M1}
        position={[0.18, -0.06, -0.18]}
        scale={1.66}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['M1.003']}
        position={[0.18, -1.59, -0.18]}
        scale={1.66}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials['M1.001']}
        position={[0.18, -0.06, -0.18]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.66}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['M1.002']}
        position={[1.46, -0.03, -0.18]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.66}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['M1.003']}
        position={[1.75, -0.03, -0.18]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={1.25}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials.M1}
        position={[0.18, -1.36, 1.32]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={0.95}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.M1}
        position={[-0.47, -1.5, 1.38]}
        rotation={[-Math.PI / 2, 0, 2.65]}
        scale={0.43}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials['M1.002']}
        position={[1.58, 1.19, 1.19]}
        rotation={[-0.51, -0.01, -0.22]}
        scale={0.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={materials['M1.002']}
        position={[-1.4, -0.77, 1.16]}
        rotation={[-0.04, 0.09, -0.38]}
        scale={0.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['M1.002']}
        position={[1.71, -0.88, -0.92]}
        rotation={[-0.05, 0.08, -0.27]}
        scale={0.14}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials['M1.003']}
        position={[0.18, -0.06, -0.18]}
        scale={1.48}
      />
    </group>
  )
}

useGLTF.preload('/objects/me.glb')
