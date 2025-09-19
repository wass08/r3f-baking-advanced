import { CameraControls, Environment } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { useEffect } from "react";
import { degToRad } from "three/src/math/MathUtils.js";
import { Column } from "./Column";
import { Monkey } from "./Monkey";

export const Experience = () => {
  const { model } = useControls({
    model: {
      options: ["Monkey", "Column"],
    },
  });

  const controls = useThree((state) => state.controls);

  const animate = async () => {
    controls.setLookAt(0, 6, 2, 0, 6, 0);
    await new Promise((resolve) => setTimeout(resolve, 100));
    controls.smoothTime = 0.5;
    await controls.setLookAt(1.2, 2, 4, 0, 0.4, 0, true);
  };

  useEffect(() => {
    if (!controls) {
      return;
    }
    animate();
  }, [controls]);
  return (
    <>
      <CameraControls
        makeDefault
        maxDistance={8}
        minDistance={1}
        minPolarAngle={0}
        maxPolarAngle={degToRad(80)}
      />
      <Environment preset="sunset" background blur={2} />
      {model === "Column" && <Column scale={0.25} />}
      {model === "Monkey" && <Monkey />}
      <mesh
        position-y={-0.001}
        rotation-x={-Math.PI * 0.5}
        scale={50}
        receiveShadow
      >
        <planeGeometry />
        <shadowMaterial color="black" opacity={0.3} />
      </mesh>
      <directionalLight castShadow position={[1, 2, 3]} intensity={1} />
    </>
  );
};
