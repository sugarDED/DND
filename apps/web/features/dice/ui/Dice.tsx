'use client'

import { useBox } from '@react-three/cannon'
import { DiceMesh } from './DiceMesh'

export function Dice({
  position,
  sides,
}: {
  position: [number, number, number]
  sides: number
}) {

  const [ref] = useBox(() => ({
    mass: 1,
    position,

    args: [1, 1, 1],

    angularVelocity: [
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
    ],

    velocity: [
      (Math.random() - 0.5) * 8,
      5,
      (Math.random() - 0.5) * 8,
    ],

    linearDamping: 0.2,
    angularDamping: 0.2,
  }))

  return (
    <group ref={ref as any}>
      <DiceMesh sides={sides} />
    </group>
  )
}