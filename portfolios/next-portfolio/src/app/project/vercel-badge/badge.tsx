"use client";

import { Environment, Lightformer } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import Band from "./band";

const VercelBadge = () => (
  <Canvas
    className="touch-none"
    camera={{ position: [0, 0, 13], fov: 25 }}
    fallback={<div>Sorry no WebGL supported!</div>}
  >
    <ambientLight intensity={Math.PI} />
    <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
      <Band />
    </Physics>
    <Environment background blur={0.75}>
      <color attach="background" args={["black"]} />
      <Lightformer
        intensity={2}
        color="white"
        position={[0, -1, 5]}
        rotation={[0, 0, Math.PI / 3]}
        scale={[100, 0.1, 1]}
      />
      <Lightformer
        intensity={3}
        color="white"
        position={[-1, -1, 1]}
        rotation={[0, 0, Math.PI / 3]}
        scale={[100, 0.1, 1]}
      />
      <Lightformer
        intensity={3}
        color="white"
        position={[1, 1, 1]}
        rotation={[0, 0, Math.PI / 3]}
        scale={[100, 0.1, 1]}
      />
      <Lightformer
        intensity={10}
        color="white"
        position={[-10, 0, 14]}
        rotation={[0, Math.PI / 2, Math.PI / 3]}
        scale={[100, 10, 1]}
      />
    </Environment>
  </Canvas>
);

export default VercelBadge;
