import { useGLTF } from "@react-three/drei";

export function Plane({ type = "background", ...props }) {
  const { nodes, materials } = useGLTF(`models/plane_${type}.glb`);
  console.log(materials);
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane_Baked.geometry}
        material={materials["Plane_Baked.001"]}
      />
    </group>
  );
}
