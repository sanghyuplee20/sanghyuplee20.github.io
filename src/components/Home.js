import React from 'react';
import { Canvas } from '@react-three/fiber';
import Name from './Name';

export default function Home() {
    return (
        <Canvas style={{height: '100vh', width: '100vw'}}>
            <Name />
        </Canvas>
    );
}


            // {/* Second section: About Me */}
            // <div style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: 'black', color: 'white' }} className="about">
            //     <h1 style={{ color: 'white', fontSize: '2rem', marginBottom: '10px' }}>About Me</h1>
            //     <p style={{ color: 'gray', fontSize: '1rem', marginBottom: '30px' }}>introduction</p>

            //     <p style={{ color: 'white', fontSize: '1.8rem', lineHeight: '2.5rem', margin: '0 auto', maxWidth: '900px', fontWeight: 'bold' }}>
            //         Hello, I am Sanghyup Lee, a software developer passionate 
            //         about building interactive applications, machine learning, and solving complex problems using technology. 
            //         I am currently majoring in <span style={{ color: '#FFDE21' }}>Computer Science</span> at <span style={{ color: '#007bff' }}> Johns Hopkins University</span>.
            //     </p>
            // </div>