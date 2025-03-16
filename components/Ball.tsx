"use client";

import React, { useRef } from 'react';
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

const Ball = ({ imgUrl }: { imgUrl: string }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const decal = useTexture(imgUrl);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={meshRef} castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <mesh position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 6.25]} scale={1}>
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={decal}
            transparent
            opacity={0.8}
            side={2}
          />
        </mesh>
      </mesh>
    </>
  );
};

export default Ball; 