"use client";
import React, { useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Environment, useAnimations } from "@react-three/drei";

const MotorModel = () => {
  const { scene, animations } = useGLTF(
    "./models/landing_page_motor.glb",
    true
  );
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    // Play the first animation in the file
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]]?.play();
    }
  }, [actions]);

  const model = useMemo(() => {
    return <primitive object={scene} scale={1.75} />;
  }, [scene]);

  return model;
};


export default function ThreeDModal() {
  return (
    <div className="w-full h-48 md:h-56 lg:h-72 ">
      <Canvas>
        <Environment files="./models/forest.exr" background={false} />
          {/* <MotorModel /> */}
      </Canvas>
    </div>
  );
}
