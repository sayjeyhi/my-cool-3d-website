import { MobileAndMonitor } from './Objects/Mobile-Monitor.tsx'
import { Book } from './Objects/Book.tsx'
import { Me } from './Objects/Me.tsx'
import { Rocket } from './Objects/Rocket.tsx'

export function Scene(): JSX.Element {
  return (
    <>
      <group position={[0, -1.9, 0]} rotation={[0, 1.6, 0]}>
        <MobileAndMonitor />
      </group>
      <group scale={0.2} position={[0, -1, -10]} rotation={[0, -0.75, 0]}>
        <Book />
      </group>
      <group scale={0.4} position={[0.5, -1, 13]} rotation={[0, 1.25, 0]}>
        <Me />
      </group>
      <group scale={0.3} position={[-5, 2, 10]} rotation={[0, 1.25, 0]}>
        <Rocket />
      </group>
    </>
  )
}
