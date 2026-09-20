"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { RoundedBox, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Object3D() {
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });
  const { viewport } = useThree();
  const narrow = viewport.aspect < 0.9;

  useFrame(({ pointer, clock }, dt) => {
    target.current.x = 0.35 + pointer.y * 0.3;
    target.current.y = -0.55 + pointer.x * 0.5;
    if (!group.current) return;
    const k = Math.min(1, dt * 2.5);
    group.current.rotation.x += (target.current.x - group.current.rotation.x) * k;
    group.current.rotation.y += (target.current.y - group.current.rotation.y) * k;
    group.current.rotation.z = Math.sin(clock.elapsedTime * 0.25) * 0.04;
  });

  return (
    <group ref={group} position={narrow ? [0.2, 1.5, -3] : [1.7, 0.75, -2.2]} scale={narrow ? 0.5 : 1} rotation={[0.35, -0.55, 0]}>
      <Float speed={1.1} rotationIntensity={0.06} floatIntensity={0.6}>
        {/* the slab — an abstract anodized keycap / iMac chin */}
        <RoundedBox args={[3.2, 2.0, 0.3]} radius={0.14} smoothness={8}>
          <meshPhysicalMaterial
            color="#2a2a31"
            metalness={0.9}
            roughness={0.28}
            clearcoat={0.8}
            clearcoatRoughness={0.25}
            reflectivity={1}
          />
        </RoundedBox>
        {/* inset face */}
        <mesh position={[0, 0.08, 0.155]}>
          <planeGeometry args={[2.8, 1.45]} />
          <meshStandardMaterial color="#0c0c10" metalness={0.6} roughness={0.5} />
        </mesh>
        {/* RGB light bar: five segments */}
        {["#ff6a1f", "#ff3ecf", "#8b5cff", "#2ee6ff", "#b8ff3b"].map((c, i) => (
          <mesh key={c} position={[-1.25 + i * 0.16, -0.76, 0.16]}>
            <boxGeometry args={[0.13, 0.045, 0.02]} />
            <meshStandardMaterial color={c} emissive={c} emissiveIntensity={3} toneMapped={false} />
          </mesh>
        ))}
        {/* status dot */}
        <mesh position={[1.25, -0.76, 0.16]}>
          <circleGeometry args={[0.035, 24]} />
          <meshStandardMaterial color="#2ee6ff" emissive="#2ee6ff" emissiveIntensity={3} toneMapped={false} />
        </mesh>
      </Float>
    </group>
  );
}

export function Slab() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden>
      <Canvas
        dpr={[1, 1.75]}
        camera={{ position: [0, 0, 7], fov: 34 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        style={{ background: "transparent" }}
      >
        {/* warm key light from upper-right, cool rim from left, warm fill below */}
        <ambientLight intensity={0.25} color="#dfe9ff" />
        <spotLight position={[6, 6, 5]} intensity={120} angle={0.55} penumbra={1} color="#ffb07a" />
        <directionalLight position={[-6, 3, 4]} intensity={2.2} color="#dfe9ff" />
        <pointLight position={[2, -4, 3]} intensity={30} color="#ff6a1f" distance={12} />
        <pointLight position={[-3, -2, 2]} intensity={18} color="#2ee6ff" distance={10} />
        <pointLight position={[4, 3, -1]} intensity={12} color="#8b5cff" distance={10} />
        <Object3D />
      </Canvas>
      {/* fog under the object */}
      <div
        className="absolute right-[8vw] top-[18vh] w-[46vw] h-[46vh] rounded-full blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(255,106,31,.20), transparent)" }}
      />
    </div>
  );
}
