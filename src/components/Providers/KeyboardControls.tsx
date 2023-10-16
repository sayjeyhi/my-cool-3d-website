import { KeyboardControls as Component, type KeyboardControlsEntry } from '@react-three/drei'
import { useMemo } from 'react'
import { IControls } from '../../types'

export function KeyboardControls({ children }: { children: JSX.Element }) {
  const keymap = useMemo<Array<KeyboardControlsEntry<IControls>>>(
    () => [
      { name: IControls.forward, keys: ['ArrowUp', 'KeyW'] },
      { name: IControls.back, keys: ['ArrowDown', 'KeyS'] },
      { name: IControls.left, keys: ['ArrowLeft', 'KeyA'] },
      { name: IControls.right, keys: ['ArrowRight', 'KeyD'] },
      { name: IControls.jump, keys: ['Space'] }
    ],
    []
  )

  return <Component map={keymap}>{children}</Component>
}
