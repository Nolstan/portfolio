import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { useRef } from "react";

function BackgroundMesh() {
  const groupRef = useRef(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const { x, y } = state.pointer;

    groupRef.current.rotation.x += (y * 0.55 - groupRef.current.rotation.x) * 0.04;
    groupRef.current.rotation.y += (x * 0.75 - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.z += 0.002;
  });

  return (
    <group ref={groupRef} position={[0, 0, -1.4]}>
      <mesh scale={2.8}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          wireframe
          color="#9ddcff"
          emissive="#5dbaf0"
          emissiveIntensity={0.3}
          transparent
          opacity={0.32}
        />
      </mesh>
    </group>
  );
}

function HeroOrb() {
  return (
    <div className="hero-orb">
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />

        <directionalLight position={[3, 4, 5]} intensity={3} />

        <pointLight position={[-4, -2, 3]} intensity={8} distance={10} />

        <Environment preset="studio" />

        <BackgroundMesh />
      </Canvas>
    </div>
  );
}

export default HeroOrb;