// ClientGLBModelSection.tsx

'use client'; // Ensures this file is treated as a client component

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styles from './CarViewer.module.css';

const GLBModel: React.FC = () => {
  const { scene } = useGLTF('/red_car.glb'); // Adjust the path to your .glb file

  return <primitive object={scene} />;
};

const ClientGLBModelSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <Canvas className={styles.canvas}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <GLBModel />
        <OrbitControls /> {/* Optional: Allows you to rotate, zoom, and pan */}
      </Canvas>
    </section>
  );
};

export default ClientGLBModelSection;
