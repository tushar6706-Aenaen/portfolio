import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingBox = () => {
  const mesh = useRef();

  useFrame(() => {
    if (!mesh.current) return;

    mesh.current.rotation.x += 0.005;
    mesh.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={mesh}>
      {/* <tetrahedronGeometry args={[1,12,1]} /> */}
                <tetrahedronGeometry args={[1]} /> 

      {/* <coneGeometry args={[1, 2, 3]} /> */}

      <meshStandardMaterial color="#000" />
    </mesh>
  );
};

export default RotatingBox;
