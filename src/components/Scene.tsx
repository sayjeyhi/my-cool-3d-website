import { MobileAndMonitor } from './Objects/Mobile-Monitor.tsx'
import { Book } from './Objects/Book.tsx'
import { Me } from './Objects/Me.tsx'
import { Rocket } from './Objects/Rocket.tsx'
// Texts
import { AboutMe } from './Objects/texts/AboutMe'
import { Books } from './Objects/texts/Books'
import { Media } from './Objects/texts/Media'
import { NameFull } from './Objects/texts/NameFull'
import { NamePersian } from './Objects/texts/NamePersian'
import { Sayjeyhi } from './Objects/texts/Sayjeyhi'
import { Talks } from './Objects/texts/Talks'

export function Scene(): JSX.Element {
  return (
    <>
      <MobileAndMonitor position={[0, -1.9, 0]} rotation={[0, 1.6, 0]} />
      <Book scale={0.2} position={[0, -1, -10]} rotation={[0, -0.75, 0]} />
      <Me scale={0.4} position={[0.85, -1.2, 13.9]} rotation={[0, 1.25, 0]} />
      <Rocket scale={0.3} position={[-5, 2, 10]} rotation={[0, 1.25, 0]} />

      <AboutMe position={[0, -1.9, 2]} rotation={[0, 1.6, 0]} />
      <Books position={[0, 0, 17]} rotation={[1.2, 3, 1]} />
      <Media position={[0, 0, 19]} rotation={[1.2, 3, 1]} />
      <NameFull position={[0, 0, 21]} rotation={[1.2, 3, 1]} />
      <NamePersian position={[0, 0, 23]} rotation={[1.2, 3, 1]} />
      <Sayjeyhi position={[0, 0, 25]} rotation={[1.2, 3, 1]} />
      <Talks position={[0, 0, 28]} rotation={[1.2, 3, 1]} />
    </>
  )
}
