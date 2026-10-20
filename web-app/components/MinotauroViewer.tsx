"use client";

import { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import * as THREE from "three";

// ---------------------------------------------------------------------------
// Modelo 3D
// ---------------------------------------------------------------------------

function MinotauroModel() {
  const { scene } = useGLTF("/models/minotauro-base.glb");

  scene.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = true;
    }
  });

  return (
    <primitive
      object={scene}
      scale={1.1}
      position={[0, -1.0, 0]}
      rotation={[0, Math.PI * 0.05, 0]}
    />
  );
}

useGLTF.preload("/models/minotauro-base.glb");

// ---------------------------------------------------------------------------
// Fallback mientras carga
// ---------------------------------------------------------------------------

function LoadingMesh() {
  return (
    <mesh>
      <boxGeometry args={[0.4, 0.8, 0.4]} />
      <meshStandardMaterial color="#8B5A2B" wireframe />
    </mesh>
  );
}

// ---------------------------------------------------------------------------
// Visor principal
// ---------------------------------------------------------------------------

export default function MinotauroViewer() {
  const controlsRef = useRef(null);

  return (
    <div
      className="w-full rounded-3xl overflow-hidden shadow-2xl"
      style={{
        height: "520px",
        background: "linear-gradient(160deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(212,160,23,0.15)",
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 0.8, 4], fov: 42 }}
        gl={{ antialias: true }}
      >
        {/* Iluminación */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[3, 5, 3]}
          intensity={1.6}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        {/* Luz dorada para resaltar los cuernos */}
        <pointLight position={[-2, 3, 1]} intensity={0.8} color="#FFD700" />
        <pointLight position={[2, 1, -2]} intensity={0.4} color="#8B5A2B" />

        {/* Reflexiones HDRI para materiales metálicos */}
        <Environment preset="city" />

        {/* Modelo */}
        <Suspense fallback={<LoadingMesh />}>
          <MinotauroModel />
        </Suspense>

        {/* Sombra suave en el suelo */}
        <ContactShadows
          position={[0, -1.0, 0]}
          opacity={0.4}
          scale={3}
          blur={2.5}
          far={1.5}
        />

        {/* Controles: rota automático, el usuario puede interactuar */}
        <OrbitControls
          ref={controlsRef}
          enablePan={false}
          minDistance={2.5}
          maxDistance={7}
          minPolarAngle={Math.PI * 0.2}
          maxPolarAngle={Math.PI * 0.75}
          autoRotate
          autoRotateSpeed={1.5}
        />
      </Canvas>
    </div>
  );
}
