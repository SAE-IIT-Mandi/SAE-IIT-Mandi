'use client'; // Ensures this file is treated as a client component

import React, { useState, useCallback } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styles from './CarViewer.module.css';
import { Mesh } from 'three';

// Custom hook for isometric camera
const useIsometricCamera = (camera: any) => {
  useFrame(() => {
    if (camera) {
      camera.position.set(10, 10, 10); // Isometric view position
      camera.lookAt(0, 0, 0); // Look at the center of the model
      camera.updateProjectionMatrix();
    }
  });
};

const GLBModel: React.FC<{ onPartClick: (part: string) => void }> = ({ onPartClick }) => {
  const { scene } = useGLTF('/red_car.glb'); // Adjust the path to your .glb file
  
  // Example function to handle click on parts (customize as needed)
  const handleClick = useCallback((event: any) => {
    const partName = event.object.name; // Assuming parts have names
    onPartClick(partName);
  }, [onPartClick]);

  return (
    <primitive
      object={scene}
      onClick={handleClick}
    />
  );
};

const GLBModelViewer: React.FC<{ part?: string, onBack: () => void }> = ({ part, onBack }) => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handlePartClick = (partName: string) => {
    setSelectedPart(partName);
  };

  return (
    <section className={styles.section}>
      <Canvas className={styles.canvas}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="red" intensity={1} />
        <spotLight position={[5, 15, 5]} angle={0.3} penumbra={1} color="red" intensity={1} />
        <perspectiveCamera makeDefault={true} />
        <GLBModel onPartClick={handlePartClick} />
        <OrbitControls />
      </Canvas>
      {selectedPart && (
        <div className={styles.specs}>
          <h2>{selectedPart} Specifications</h2>
          <p>Details about {selectedPart} go here.</p>
          <button onClick={onBack}>Back to Isometric View</button>
        </div>
      )}
    </section>
  );
};

const ClientGLBModelSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'view' | 'details'>('view');

  return (
    <div className={styles.container}>
      {viewMode === 'view' ? (
        <GLBModelViewer onBack={() => setViewMode('view')} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default ClientGLBModelSection;
