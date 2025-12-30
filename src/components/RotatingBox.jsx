import { Edges } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const RotatingBox = () => {
  const mesh = useRef();

  useFrame(() => {
    if (!mesh.current) return;

    mesh.current.rotation.x += 0.002;
    mesh.current.rotation.y += 0.002;
  });

  return (
    <mesh ref={mesh}>
      {/* <tetrahedronGeometry args={[1,12,1]} /> */}
        <tetrahedronGeometry args={[1.5]} />
                
      {/* <coneGeometry args={[1, 2, 3]} /> */}

      <meshStandardMaterial color="#000" wireframe />
      <Edges
          scale={1.01}
          threshold={15}
          color="black"
          lineWidth={3}
        />
    </mesh>
  );
};

export default RotatingBox;
