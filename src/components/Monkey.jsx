import { Gltf, useGLTF } from "@react-three/drei";
import { useControls } from "leva";

export const Monkey = () => {
  const { highPolyBaked } = useControls({
    highPolyBaked: false,
  });
  return (
    <Gltf
      position-y={0.7}
      scale={0.5}
      src={
        highPolyBaked ? "models/monkey_gold_lp.glb" : "models/monkey_gold.glb"
      }
      castShadow
    />
  );
};

useGLTF.preload("models/monkey_gold.glb");
useGLTF.preload("models/monkey_gold_lp.glb");
