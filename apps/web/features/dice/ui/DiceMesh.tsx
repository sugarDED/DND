'use client'

import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'

export function DiceMesh({ sides }: { sides: number }) {

  const path = `/dice/d${sides}.glb`

  const { scene } = useGLTF(path)

  const model = useMemo(() => {

    const clone = scene.clone()

    clone.traverse((obj: any) => {
      if (obj.isMesh) {
        obj.castShadow = true
        obj.receiveShadow = true
      }
    })

    return clone

  }, [scene])

  return <primitive object={model} scale={1} />
}