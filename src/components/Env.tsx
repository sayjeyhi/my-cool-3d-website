import { Environment, Lightformer } from '@react-three/drei'

export function Env({ perfSucks }: { perfSucks: boolean }) {
  return (
    <Environment resolution={512}>
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <Lightformer
        intensity={4}
        rotation-x={Math.PI / 2}
        position={[0, 5, -9]}
        scale={[10, 10, 1]}
      />
      <group rotation={[Math.PI / 2, 1, 0]}>
        <Lightformer
          intensity={0.5}
          rotation-y={Math.PI / 2}
          position={[-5, -1, -1]}
          scale={[50, 2, 1]}
        />
        <Lightformer
          intensity={0.5}
          rotation-y={-Math.PI / 2}
          position={[10, 1, 0]}
          scale={[50, 2, 1]}
        />
      </group>
      {/* <Lightformer */}
      {/*  intensity={5} */}
      {/*  form="ring" */}
      {/*  color="red" */}
      {/*  rotation-y={Math.PI / 2} */}
      {/*  position={[-5, 2, -1]} */}
      {/*  scale={[10, 10, 1]} */}
      {/* /> */}
    </Environment>
  )
  //
  // return (
  //   <Environment
  //     frames={perfSucks ? 1 : Infinity}
  //     preset="lobby"
  //     resolution={256}
  //     background
  //     blur={0}>
  //     <Lightformer
  //       intensity={4}
  //       rotation-x={Math.PI / 2}
  //       position={[0, 5, -9]}
  //       scale={[10, 10, 1]}
  //     />
  //     <Lightformer
  //       intensity={4}
  //       rotation-x={Math.PI / 2}
  //       position={[0, 5, -9]}
  //       scale={[10, 10, 1]}
  //     />
  //     <group rotation={[Math.PI / 2, 1, 0]}>
  //       <Lightformer
  //         intensity={0.5}
  //         rotation-y={Math.PI / 2}
  //         position={[-5, -1, -1]}
  //         scale={[50, 2, 1]}
  //       />
  //       <Lightformer
  //         intensity={0.5}
  //         rotation-y={-Math.PI / 2}
  //         position={[10, 1, 0]}
  //         scale={[50, 2, 1]}
  //       />
  //     </group>
  //     {/* <Lightformer */}
  //     {/*  intensity={5} */}
  //     {/*  form="ring" */}
  //     {/*  color="red" */}
  //     {/*  rotation-y={Math.PI / 2} */}
  //     {/*  position={[-5, 2, -1]} */}
  //     {/*  scale={[10, 10, 1]} */}
  //     {/* /> */}
  //   </Environment>
  // )
}
