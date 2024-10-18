import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import Name from './Name';

export default function Home() {
    
    useEffect(() => {
        // Add overflow hidden to the body and html to prevent any scrollbars
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        // Clean up after component is unmounted
        return () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
        };
    }, []);

    return (
        <Canvas style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
            <Name />
        </Canvas>
    );
}
