'use client';
import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particle({ position }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime;
      meshRef.current.rotation.x = Math.sin(time + position[0]) * 0.1;
      meshRef.current.rotation.y = Math.cos(time + position[1]) * 0.1;
      meshRef.current.position.y = position[1] + Math.sin(time + position[0]) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <sphereGeometry args={[0.015, 8, 8]} />
      <meshBasicMaterial color="#4A90E2" opacity={0.2} transparent />
    </mesh>
  );
}

export default function FloatingParticles() {
  const [isClient, setIsClient] = useState(false);
  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const particles = useMemo(() => {
    const count = 40;
    return Array.from({ length: count }, () => [
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 30,
    ]);
  }, []);

  // Fallback CSS animation for Safari/iPad
  if (!isClient || isSafari) {
    return (
      <div className="fixed inset-0 -z-10 opacity-20">
        {particles.map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-ether rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 -z-10 opacity-30">
      <Canvas camera={{ position: [0, 0, 5] }}>
        {particles.map((pos, i) => <Particle key={i} position={pos} />)}
      </Canvas>
    </div>
  );
}
