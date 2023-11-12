import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";


import MainContainer from "./MainContainer";

function PlanetThree() {
  return (
    <div className="w-screen h-screen">
      
      <Canvas
        shadows
        camera={{ fov: 55, near: 0.1, far: 1000, position: [16, 8.5, 19.5] }}
      >
        <color attach="background" args={["black"]} />

        <MainContainer />
      </Canvas>
    </div>
  );
}

export default PlanetThree;
