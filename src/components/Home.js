import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import * as THREE from 'three';
import hfont from './Helvetica_Neue_Medium.json';

const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    if (textRef.current) {
      // Calculate the bounding box of the 3D text
      const box = new THREE.Box3().setFromObject(textRef.current);
      const size = box.getSize(new THREE.Vector3());
    }
  }, []);

  return (
    <div style={{ backgroundColor: 'black', color: 'white' }}>
      {/* First section: 3D Text */}
      <div style={{ height: '100vh', position: 'relative', backgroundColor: 'black' }} className="home">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />

          {/* 3D Text with dynamic centering */}
          <Text3D font={hfont} size={1} height={0.2} curveSegments={12} bevelEnabled bevelThickness={0.03} bevelSize={0.02} position={[-4.5, 0, 0]}>
            Sanghyup Lee
            <meshNormalMaterial />
          </Text3D>

          {/* Orbit Controls for interaction */}
          <OrbitControls enableZoom={false} />
        </Canvas>

        {/* Comment at the bottom right corner */}
        <div style={{
          position: 'absolute',
          bottom: '40px',
          right: '40px',
          color: 'white',
          fontSize: '40px',
          fontStyle: 'italic',
        }}>
          Try dragging me around
        </div>
      </div>

      {/* Second section: About Me */}
      <div style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: 'black', color: 'white' }} className="about">
        <h1>About Me</h1>
        <p>
          Hi, I am Sanghyup Lee, a software developer passionate about building interactive applications and solving complex problems using
          technology. I am currently majoring in Computer Science and Applied Math at Johns Hopkins University.
        </p>
        <p>
          I have experience working with technologies such as React, Three.js, Node.js, and much more. In my spare time, I enjoy working on side projects,
          solving puzzles, and learning about new trends in technology.
        </p>
      </div>
    </div>
  );
};

export default Home;
