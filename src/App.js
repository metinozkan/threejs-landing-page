import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, useGLTF, OrbitControls } from "@react-three/drei";
import { Mercedes } from "./Mercedes";
import Underlay from "./Underlay";
import { Shoe } from "./Shoe";
import MovingSpot from "./components/MovingSpot";
import { useDepthBuffer } from "@react-three/drei";
import Loading from "./components/Loading";

useGLTF.preload("/shoe-draco.glb");

export default function App() {
  return (
    <>
      <Underlay />

      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 1.1], fov: 50 }}>
        <fog attach="fog" args={["#202020", 5, 20]} />
        <ambientLight intensity={1} />
        {/* <MovingSpot color="#0c8cbf" position={[3, 3, 2]} /> */}
        {/* <MovingSpot color="#ea7a36" position={[1, 3, 0]} /> */}
        <spotLight
          position={[1, 6, 1.5]}
          angle={0.2}
          penumbra={1}
          intensity={2.5}
          castShadow
          shadow-mapSize={[2048, 2048]}
          color="#ffffc0"
        />
        <spotLight
          position={[-5, 5, -1.5]}
          angle={0.03}
          penumbra={1}
          intensity={4}
          castShadow
          shadow-mapSize={[1024, 1024]}
          color="#ffffc0"
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
        <directionalLight position={[5, 0, 0]} intensity={4} color="#ffffc0" />
        <directionalLight position={[2, -3, 3]} intensity={4} color="#ffffc0" />

        <Suspense fallback={<Loading />}>
          {/* <Shoe scale={0.225} position={[0, -0.09, 0]} /> */}

          <Mercedes scale={0.325} position={[0, -0.2, 0]} />
          {/* <Shoe scale={0.225} position={[0, -0.09, 0]} /> */}
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
