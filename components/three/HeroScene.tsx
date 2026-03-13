"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Html, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

function Chip({ position }: { position: [number, number, number] }) {
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={2.2}>
      <mesh position={position} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.15, 1.4]} />
        <meshStandardMaterial
          color="#38bdf8"
          metalness={0.9}
          roughness={0.15}
          emissive="#22d3ee"
          emissiveIntensity={0.5}
        />
      </mesh>
      <mesh position={[position[0] + 0.45, position[1] + 0.04, position[2]]}>
        <boxGeometry args={[0.9, 0.04, 0.2]} />
        <meshStandardMaterial
          color="#e0f2fe"
          emissive="#7dd3fc"
          emissiveIntensity={0.8}
        />
      </mesh>
    </Float>
  );
}

function DataStream({
  from,
  to,
  color,
}: {
  from: [number, number, number];
  to: [number, number, number];
  color: string;
}) {
  const points = [from, to];
  return (
    <line>
      <bufferGeometry
        attach="geometry"
        setFromPoints={points.map(
          (p) => new (require("three").Vector3)(p[0], p[1], p[2])
        )}
      />
      <lineBasicMaterial
        attach="material"
        color={color}
        linewidth={2}
        transparent
        opacity={0.8}
      />
    </line>
  );
}

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 3.5, 8], fov: 40 }}
        shadows
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#020617"]} />
        <ambientLight intensity={0.4} />
        <directionalLight
          position={[4, 8, 6]}
          intensity={1.4}
          castShadow
          color="#e0f2fe"
        />
        <pointLight position={[-5, 2, -4]} intensity={1.2} color="#a855f7" />
        <pointLight position={[5, -1, -6]} intensity={0.8} color="#22d3ee" />

        <Suspense fallback={<Html center>loading</Html>}>
          <Chip position={[-2.4, 0.6, 0]} />
          <Chip position={[1.8, -0.4, -0.6]} />
          <Chip position={[0.2, 1.2, 0.9]} />

          <DataStream
            from={[-2.4, 0.6, 0]}
            to={[1.8, -0.4, -0.6]}
            color="#22d3ee"
          />
          <DataStream
            from={[1.8, -0.4, -0.6]}
            to={[0.2, 1.2, 0.9]}
            color="#a855f7"
          />
          <DataStream
            from={[0.2, 1.2, 0.9]}
            to={[-2.4, 0.6, 0]}
            color="#38bdf8"
          />

          <mesh rotation-x={-Math.PI / 2} position={[0, -1.2, 0]} receiveShadow>
            <planeGeometry args={[18, 18]} />
            <meshStandardMaterial
              color="#020617"
              metalness={0.6}
              roughness={0.3}
            />
          </mesh>
        </Suspense>

        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate
          autoRotate
          autoRotateSpeed={0.45}
          maxPolarAngle={Math.PI / 1.9}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
      <div className="hero-grid" />
    </div>
  );
}

