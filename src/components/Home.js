import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import hfont from './Helvetica_Neue_Medium.json';

const Home = () => {
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
                    bottom: '100px',
                    right: '40px',
                    color: 'white',
                    fontSize: '20px',
                    fontStyle: 'italic',
                }}>
                    Try dragging me around
                </div>
            </div>

            {/* Second section: About Me */}
            <div style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: 'black', color: 'white' }} className="about">
                <h1 style={{ color: 'white', fontSize: '2rem', marginBottom: '10px' }}>About Me</h1>
                <p style={{ color: 'gray', fontSize: '1rem', marginBottom: '30px' }}>introduction</p>

                <p style={{ color: 'white', fontSize: '1.8rem', lineHeight: '2.5rem', margin: '0 auto', maxWidth: '900px', fontWeight: 'bold' }}>
                    Hello, I am Sanghyup Lee, a software developer passionate 
                    about building interactive applications, machine learning, and solving complex problems using technology. 
                    I am currently majoring in <span style={{ color: '#FFDE21' }}>Computer Science</span> at <span style={{ color: '#007bff' }}> Johns Hopkins University</span>.
                </p>
            </div>
        </div>
    );
};

export default Home;
