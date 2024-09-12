import React from 'react';
import { useGLTF } from '@react-three/drei';
import { convertColor } from '@/utils/convertColor';

export function Nike(props) {
  const { nodes, materials } = useGLTF('/models/nike/scene-transformed.glb');
  materials['NikeShoe'].color = convertColor(props.color);

  return (
    <group {...props} dispose={null} scale={4.5} rotation={[0,90,0]}>
      <mesh  castShadow receiveShadow geometry={nodes.defaultMaterial.geometry} material={materials.NikeShoe} />
    </group>
  );
}

useGLTF.preload('/models/nike/scene-transformed.glb');
