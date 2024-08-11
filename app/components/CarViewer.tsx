'use client';

import React, { useState, useCallback, useRef, Suspense } from 'react'; // Added useRef to the import
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styles from './CarViewer.module.css';

// Custom hook for isometric camera
const useIsometricCamera = (camera: any) => {
  useFrame(() => {
    if (camera) {
      camera.position.set(35, 35, 35); // Isometric view angle
      camera.lookAt(0, 0, 0); // Look at the center of the model
      camera.updateProjectionMatrix();
    }
  });
};

const GLBModel: React.FC<{ onPartClick: (part: string) => void }> = ({ onPartClick }) => {
  const { scene } = useGLTF('/red_car.glb'); // Adjust the path to your .glb file
  scene.scale.set(0.07, 0.07, 0.07); // Further reduce the car model size
  scene.position.set(0, -2, -2); // Shift the car model down slightly
  scene.rotation.y = 3.4 * Math.PI / 2; // Rotate the car to make the front visible in isometric view

  const isDragging = useRef(false);

  const handlePointerDown = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handlePointerMove = useCallback(() => {
    isDragging.current = true;
  }, []);

  const handleClick = useCallback(
    (event: any) => {
      if (!isDragging.current) {
        const partName = event.object.name; // Assuming parts have names
        onPartClick(partName);
      }
    },
    [onPartClick]
  );

  return (
    <primitive
      object={scene}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onClick={handleClick}
    />
  );
};

const PartDetails: React.FC<{ part: string; onBack: () => void }> = ({ part, onBack }) => {
  const { scene } = useGLTF(`/red_car.glb`); // Adjust the path to the part's .glb file

  return (
    <div className={styles.overlay}>
      <Canvas className={styles.canvas}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <primitive object={scene} />
        <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
      </Canvas>
      <div className={styles.specs}>
        <h2>{part} Specifications</h2>
        <p>Details about {part} go here.</p>
        <button className={styles.specsButton} onClick={onBack}>
          Back to Isometric View
        </button>
      </div>
    </div>
  );
};

const GLBModelViewer: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handlePartClick = (partName: string) => {
    setSelectedPart(partName);
  };

  const handleBack = () => {
    setSelectedPart(null);
  };

  return (
    <section className={styles.section}>
      {selectedPart ? (
        <PartDetails part={selectedPart} onBack={handleBack} />
      ) : (
        <Suspense fallback={<Loader />}>
          <Canvas className={styles.canvas}>
            <ambientLight intensity={0.5} />
            <GLBModel onPartClick={handlePartClick} />
            <OrbitControls enablePan={false} enableZoom={true} enableRotate={true} />
          </Canvas>
        </Suspense>
      )}
    </section>
  );
};

const Loader: React.FC = () => (
  <div className={styles.loader}>Wecome to experience the thrill...<br/>Click on the part for further details.</div>
);

const ClientGLBModelSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <GLBModelViewer />
    </div>
  );
};

export default ClientGLBModelSection;
