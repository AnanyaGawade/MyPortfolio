
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const Points = 'points' as any;
const BufferGeometry = 'bufferGeometry' as any;
const BufferAttribute = 'bufferAttribute' as any;
const PointsMaterial = 'pointsMaterial' as any;
const Mesh = 'mesh' as any;
const IcosahedronGeometry = 'icosahedronGeometry' as any;
const MeshBasicMaterial = 'meshBasicMaterial' as any;
const TorusGeometry = 'torusGeometry' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;

const ParticleField = () => {
  const count = 3000;
  const pointsData = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 80;
      p[i * 3 + 1] = (Math.random() - 0.5) * 80;
      p[i * 3 + 2] = (Math.random() - 0.5) * 80;
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.02;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.005;
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
        size={0.05} 
        color="#3B82F6" 
        transparent 
        opacity={0.3} 
        sizeAttenuation={true}
      />
    </Points>
  );
};

const FloatingShapes = () => {
  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
        <Mesh position={[-15, 8, -25]}>
          <IcosahedronGeometry args={[2, 0]} />
          <MeshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.1} />
        </Mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={2}>
        <Mesh position={[18, -12, -20]}>
          <TorusGeometry args={[6, 0.2, 16, 100]} />
          <MeshBasicMaterial color="#10B981" wireframe transparent opacity={0.05} />
        </Mesh>
      </Float>
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Mesh position={[0, 0, -40]}>
          <IcosahedronGeometry args={[10, 1]} />
          <MeshBasicMaterial color="#3B82F6" wireframe transparent opacity={0.03} />
        </Mesh>
      </Float>
    </>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 30], fov: 75 }}>
        <AmbientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} intensity={1} color="#3B82F6" />
        <Stars 
          radius={200} 
          depth={80} 
          count={8000} 
          factor={8} 
          saturation={0} 
          fade 
          speed={1} 
        />
        <ParticleField />
        <FloatingShapes />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
