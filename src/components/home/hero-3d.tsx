'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#4A90E2"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0}
      />
    </Sphere>
  );
}

function Particles() {
  const particles = useMemo(() => {
    return Array.from({ length: 100 }).map(() => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ] as [number, number, number],
      size: Math.random() * 0.02 + 0.01,
    }));
  }, []);

  return (
    <>
      {particles.map((particle, i) => (
        <mesh key={i} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial color="#2563EB" opacity={0.6} transparent />
        </mesh>
      ))}
    </>
  );
}

export function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full opacity-30">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <AnimatedSphere />
        <Particles />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
