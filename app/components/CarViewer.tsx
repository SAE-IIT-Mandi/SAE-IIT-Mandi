'use client';
import React, { useState, useCallback, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styles from './CarViewer.module.css';

// Custom hook for isometric camera
const useIsometricCamera = (camera: any) => {
  useFrame(() => {
    if (camera) {
      camera.position.set(35, 35, 35); 
      camera.lookAt(0, 0, 0); 
      camera.updateProjectionMatrix();
    }
  });
};

const GLBModel: React.FC<{ onPartClick: (part: string) => void }> = ({ onPartClick }) => {
  const { scene } = useGLTF('/red_car.glb');
  scene.scale.set(0.07, 0.07, 0.07); 
  scene.position.set(0, -2, -2); 
  scene.rotation.y = 3.4 * Math.PI / 2; 

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
  const [zoomLevel, setZoomLevel] = useState(1); // Track zoom level
  const [scrollEnabled, setScrollEnabled] = useState(true); // Track if scrolling should be enabled

  const handlePartClick = (partName: string) => {
    setSelectedPart(partName);
  };

  const handleBack = () => {
    setSelectedPart(null);
  };

  const handleZoomChange = (event: any) => {
    const cameraZoom = event.target.object.zoom;
    setZoomLevel(cameraZoom);

    if (cameraZoom >= 2 && scrollEnabled) { 
      setScrollEnabled(false); // Disable further zooming
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
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
            <OrbitControls
              enablePan={false}
              enableZoom={scrollEnabled} 
              onZoom={handleZoomChange}
              zoomSpeed={0.7} 
            />
          </Canvas>
        </Suspense>
      )}
    </section>
  );
};

const Loader: React.FC = () => (
  <div className={styles.loader}>Welcome to experience the thrill...<br />Click on the part for further details.</div>
);

const ClientGLBModelSection: React.FC = () => {
  return (
    <div className={styles.container}>
      <GLBModelViewer />
    </div>
  );
};

export default ClientGLBModelSection;
