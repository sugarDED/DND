'use client'

import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/cannon'
import { OrbitControls } from '@react-three/drei'
import { DiceRoller } from './DiceRoller'

export function DiceScene({
  dice,
}: {
  dice: { sides: number; count: number }[]
}) {
  return (
    <Canvas
    shadows
    camera={{ position: [6, 6, 6], fov: 50 }}
    style={{ width: '100%', height: '400px' }}
  >
    <ambientLight intensity={0.35} />

    <directionalLight
    position={[5, 10, 5]}
    intensity={1.5}
    castShadow
    shadow-mapSize-width={2048}
    shadow-mapSize-height={2048}
   />

    <pointLight position={[-5, 5, -5]} intensity={0.5} />

      <Physics gravity={[0, -9.8, 0]}>
        <DiceRoller dice={dice} />
      </Physics>

      <OrbitControls />
    </Canvas>
  )
}