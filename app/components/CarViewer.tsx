"use client"; // This directive tells Next.js that this component should be rendered on the client side

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import styles from './CarViewer.module.css';

const CarPartInfo = ({ partName }: { partName: string }) => {
  // Replace this with actual data for each car part
  const partsInfo: { [key: string]: string } = {
    'Wheel': 'This is the wheel of the car. It helps in smooth movement.',
    'Engine': 'This is the engine. It powers the car.',
    // Add more parts and their descriptions here
  };

  return (
    <div className={styles.infoBox}>
      <h2>{partName}</h2>
      <p>{partsInfo[partName]}</p>
    </div>
  );
};

const CarModel = ({ onPartClick }: { onPartClick: (partName: string) => void }) => {
  const { nodes, materials } = useGLTF('/red_car.glb'); // Ensure this path is correct
  
  return (
    <group>
      {nodes.Wheel && (
        <mesh
          geometry={nodes.Wheel.geometry}
          material={materials.WheelMaterial}
          onClick={() => onPartClick('Wheel')}
        />
      )}
      {nodes.Engine && (
        <mesh
          geometry={nodes.Engine.geometry}
          material={materials.EngineMaterial}
          onClick={() => onPartClick('Engine')}
        />
      )}
      {/* Add more nodes and safe checks as needed */}
    </group>
  );
};

const CarViewer = () => {
  const [selectedPart, setSelectedPart] = useState<string | null>(null);

  const handlePartClick = (partName: string) => {
    setSelectedPart(partName);
  };

  return (
    <section className={styles.carSection}>
      <div className={styles.canvasContainer}>
        <Canvas>
          <OrbitControls />
          <CarModel onPartClick={handlePartClick} />
        </Canvas>
      </div>
      {selectedPart && <CarPartInfo partName={selectedPart} />}
    </section>
  );
};

export default CarViewer;
