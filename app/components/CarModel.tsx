// app/components/CarModel.js
"use client";  // Add this line to indicate that the component should be a Client Component

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useState } from 'react';

const CarModel = () => {
  const { nodes, materials } = useGLTF('/red_car.glb');
  const [selectedPart, setSelectedPart] = useState(null);

  const handleClick = (partName) => {
    setSelectedPart(partName);
  };

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <group>
          <mesh
            geometry={nodes.Car.geometry}
            material={materials.CarMaterial}
            onClick={() => handleClick('Car')}
          />
          {/* Add more parts as needed */}
        </group>
        <OrbitControls />
      </Canvas>
      {selectedPart && (
        <div className="part-info">
          <h3>{selectedPart}</h3>
          <p>Details about the {selectedPart}.</p>
          <Canvas>
            {/* Render selected part as a separate 3D model */}
          </Canvas>
        </div>
      )}
    </>
  );
};

export default CarModel;
