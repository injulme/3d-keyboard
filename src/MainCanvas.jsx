import * as THREE from 'three';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import Keyboard from './Keyboard';

export default function MainCanvas({ theme }) {
  return (
    <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />

      <Suspense fallback={null}>
        <Keyboard theme={theme} />
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls
      // enablePan={false}
      // enableZoom={true}
      // enableZoom={false}
      // minPolarAngle={Math.PI / 2.2}
      // maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}
