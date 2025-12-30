import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import RotatingBox from "./RotatingBox";

const Scene = () => {
    return (
        <Canvas camera={{ position: [0, 2.5, 0] }}>
            <ambientLight intensity={0.6} />
            <directionalLight position={[5, 5, 5]} />
            
            <RotatingBox/>  
        
      <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default Scene;
