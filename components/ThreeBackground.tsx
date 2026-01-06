
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

const Points = 'points' as any;
const BufferGeometry = 'bufferGeometry' as any;
const BufferAttribute = 'bufferAttribute' as any;
const PointsMaterial = 'pointsMaterial' as any;
const Mesh = 'mesh' as any;
const BoxGeometry = 'boxGeometry' as any;
const MeshPhysicalMaterial = 'meshPhysicalMaterial' as any;
const IcosahedronGeometry = 'icosahedronGeometry' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const Group = 'group' as any;

const NeuralNetwork = () => {
  const count = 2000;
  const pointsData = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 30 + Math.random() * 20;
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <Points ref={ref}>
      <BufferGeometry>
        <BufferAttribute
          attach="attributes-position"
          count={count}
          array={pointsData}
          itemSize={3}
        />
      </BufferGeometry>
      <PointsMaterial 
        size={0.08} 
        color="#3B82F6" 
        transparent 
        opacity={0.4} 
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const DataCore = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const outerRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.2;
      meshRef.current.rotation.z = time * 0.15;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y = -time * 0.1;
      outerRef.current.rotation.x = time * 0.05;
    }
  });

  return (
    <Group>
      <Float speed={3} rotationIntensity={1} floatIntensity={2}>
        <Mesh ref={meshRef}>
          <IcosahedronGeometry args={[10, 2]} />
          <MeshPhysicalMaterial 
            color="#3B82F6" 
            wireframe 
            transparent 
            opacity={0.1}
            emissive="#3B82F6"
            emissiveIntensity={0.5}
          />
        </Mesh>
      </Float>
      <Mesh ref={outerRef}>
        <IcosahedronGeometry args={[25, 1]} />
        <MeshPhysicalMaterial 
          color="#10B981" 
          wireframe 
          transparent 
          opacity={0.02}
        />
      </Mesh>
    </Group>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 70], fov: 60 }}>
        <AmbientLight intensity={0.4} />
        <PointLight position={[40, 40, 40]} intensity={1.5} color="#3B82F6" />
        <PointLight position={[-40, -40, -40]} intensity={1} color="#10B981" />
        
        <Stars 
          radius={150} 
          depth={50} 
          count={4000} 
          factor={4} 
          saturation={0} 
          fade 
          speed={0.5} 
        />
        
        <Sparkles 
          count={100} 
          scale={[80, 80, 80]} 
          size={2} 
          speed={0.4} 
          opacity={0.1} 
          color="#93C5FD" 
        />
        
        <NeuralNetwork />
        <DataCore />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
