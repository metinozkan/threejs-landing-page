import { SpotLight } from "@react-three/drei";
import { useDepthBuffer } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

const MovingSpot = ({ vec = new Vector3(), ...props }) => {
  const depthBuffer = useDepthBuffer({ frames: 1 });

  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        state.mouse.x * viewport.width,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });
  return (
    <SpotLight
      depthBuffer={depthBuffer}
      castShadow
      ref={light}
      penumbra={1}
      distance={60}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      {...props}
    />
  );
};
export default MovingSpot;
