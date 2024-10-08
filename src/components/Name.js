import { Center, OrbitControls, Text3D, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import mfont from './Merriweather_Regular.json';

export default function Name() {
    // Load the MatCap texture
    const matcapTexture = useTexture('/matcap.png'); // Updated path

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
        </>
    );
}
