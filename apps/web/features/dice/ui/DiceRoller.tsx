'use client'

import { usePlane } from '@react-three/cannon'
import { Dice } from './Dice'

export function DiceRoller({
  dice,
}: {
  dice: { sides: number; count: number }[]
}) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }))

  let index = 0

  return (
    <>
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#3a2f1d" />
      </mesh>

      {dice.map((group) =>
        Array.from({ length: group.count }).map(() => {
          index++

          return (
            <Dice
              key={index}
              sides={group.sides}
              position={[
                (Math.random() - 0.5) * 4,
                8 + Math.random() * 2,
                (Math.random() - 0.5) * 4,
              ]}
            />
          )
        })
      )}
    </>
  )
}