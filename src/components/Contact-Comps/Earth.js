import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

const Earth = () => {
  const groupRef = useRef();
  const earth = useGLTF('./planet/scene.gltf');

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.22;
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.35) * 0.05;
  });

  return (
    <group ref={groupRef}>
      <primitive object={earth.scene} scale={3.45} position-y={-0.15} rotation-y={0} />
    </group>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      className="earth-canvas"
      shadows
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true, alpha: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4.2, 1.9, 6.15],
      }} >
      <Suspense fallback={<CanvasLoader />}>
        <ambientLight intensity={0.28} />
        <directionalLight position={[6, 4, 5]} intensity={1.7} color="#e8fff8" />
        <pointLight position={[-5, -2, 4]} intensity={2.8} color="#64ffda" />
        <pointLight position={[4, 2, -4]} intensity={1.8} color="#5e60ce" />
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.65}
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2} />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
