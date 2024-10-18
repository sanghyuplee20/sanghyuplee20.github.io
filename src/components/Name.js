import { Center, OrbitControls, Text3D, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import mfont from './Merriweather_Regular.json';

function RandomMesh({ matcapTexture }) {
  const meshRef = useRef();

  // Rotate the mesh
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  const randomGeometry = Math.floor(Math.random() * 3); // Randomly pick a geometry

  return (
    <mesh
      ref={meshRef}
      position={[
        (Math.random() - 0.5) * 15, // Random x position
        (Math.random() - 0.5) * 15, // Random y position
        (Math.random() - 0.5) * 15, // Random z position
      ]}
      scale={0.1 + Math.random() * 0.1}
      rotation={[
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI,
      ]}
    >
      {randomGeometry === 0 && <tetrahedronGeometry args={[1, 0]} />} 
      {randomGeometry === 1 && <torusGeometry args={[1, 0.4, 16, 100]} />} 
      {randomGeometry === 2 && <capsuleGeometry args={[1, 2, 10, 20]} />} 
      <meshMatcapMaterial matcap={matcapTexture} />
    </mesh>
  );
}

export default function Name() {
  // Load the MatCap texture
  const matcapTexture = useTexture('/matcap.png');

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight />
      <ambientLight intensity={0.75} />
      <pointLight position={[10, 10, 10]} />
      <Center>
        <Text3D
          font={mfont}
          size={0.6}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Sanghyup Lee
          <meshMatcapMaterial matcap={matcapTexture} side={THREE.DoubleSide} />
        </Text3D>
      </Center>

      {/* Generate 100 rotating random meshes */}
      {Array.from({ length: 100 }).map((_, index) => (
        <RandomMesh key={index} matcapTexture={matcapTexture} />
      ))}
    </>
  );
}
