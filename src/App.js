import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, useGLTF, OrbitControls } from "@react-three/drei";
import { Mercedes } from "./Mercedes";
import Underlay from "./Underlay";
import { Shoe } from "./Shoe";

useGLTF.preload("/shoe-draco.glb");

export default function App() {
  return (
    <>
      <Underlay />

      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 1.1], fov: 50 }}>
        <ambientLight intensity={2} />
        <spotLight
          position={[1, 6, 1.5]}
          angle={0.2}
          penumbra={1}
          intensity={2.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
        />
        <spotLight
          position={[-5, 5, -1.5]}
          angle={0.03}
          penumbra={1}
          intensity={4}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />
        <spotLight
          position={[5, 5, -5]}
          angle={0.3}
          penumbra={1}
          intensity={4}
          castShadow={true}
          shadow-mapSize={[256, 256]}
          color="#ffffc0"
        />
        <Suspense fallback={null}>
          {/* <Shoe scale={0.225} position={[0, -0.09, 0]} /> */}

          {/* <Mercedes /> */}
          <Shoe scale={0.225} position={[0, -0.09, 0]} />
          <ContactShadows
            frames={1}
            rotation-x={[Math.PI / 2]}
            position={[0, -0.33, 0]}
            far={0.4}
            width={2}
            height={2}
            blur={4}
          />
        </Suspense>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
        />
      </Canvas>
    </>
  );
}
