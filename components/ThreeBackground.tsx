
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
const TorusGeometry = 'torusGeometry' as any;
const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;

const DataGrid = () => {
  const count = 3000;
  const pointsData = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      p[i * 3] = (Math.random() - 0.5) * 100;
      p[i * 3 + 1] = (Math.random() - 0.5) * 100;
      p[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return p;
  }, []);

  const ref = useRef<THREE.Points>(null!);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.01;
      ref.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
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
        size={0.06} 
        color="#3B82F6" 
        transparent 
        opacity={0.3} 
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
};

const LogicFragments = () => {
  return (
    <>
      {/* Floating Logic Gates / Microchip Dies */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Mesh position={[-15, 12, -20]}>
          <BoxGeometry args={[6, 8, 0.2]} />
          <MeshPhysicalMaterial 
            color="#3B82F6" 
            transmission={0.9} 
            thickness={1} 
            roughness={0.1} 
            transparent 
            opacity={0.1}
          />
        </Mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1}>
        <Mesh position={[22, -10, -15]}>
          <BoxGeometry args={[10, 4, 0.2]} />
          <MeshPhysicalMaterial 
            color="#10B981" 
            transmission={0.8} 
            thickness={2} 
            roughness={0} 
            transparent 
            opacity={0.05}
          />
        </Mesh>
      </Float>

      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
        <Mesh position={[0, -20, -30]}>
          <TorusGeometry args={[15, 0.1, 16, 100]} />
          <MeshPhysicalMaterial color="#3B82F6" wireframe transparent opacity={0.05} />
        </Mesh>
      </Float>
    </>
  );
};

const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-20 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
        <AmbientLight intensity={0.6} />
        <PointLight position={[20, 20, 20]} intensity={1.5} color="#3B82F6" />
        <PointLight position={[-20, -20, -20]} intensity={1} color="#10B981" />
        
        <Stars 
          radius={200} 
          depth={60} 
          count={6000} 
          factor={5} 
          saturation={0} 
          fade 
          speed={0.3} 
        />
        
        <Sparkles 
          count={150} 
          scale={[60, 60, 60]} 
          size={1.5} 
          speed={0.2} 
          opacity={0.15} 
          color="#93C5FD" 
        />
        
        <DataGrid />
        <LogicFragments />
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
