"use client";
import { MoveRight, Shapes } from "lucide-react";
import dynamic from "next/dynamic";
import { useGLTF } from "@react-three/drei";
import React from "react";

const ThreeDModal = dynamic(() => import("./3DModal"), {
  ssr: false,
  loading: () => <ModelLoading />,
});

const ModelLoading: React.FC = () => {
  return (
    <div className="w-full h-72 flex items-center justify-center">
      <span className="text-gray-800 tracking-tight flex gap-2 items-center justify-center">
        Loading 3D Model
        <span
          className="inline-block w-6 h-6 rounded-full bg-gray-400 animate-bounce mx-2 shadow-lg"
          style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
        />
      </span>
    </div>
  );
};

export default function HeroSection() {
  useGLTF.preload("./models/landing_page_motor.glb");

  return (
    <section className="hero-section p-4 h-full bg-white bg-[radial-gradient(rgba(229,231,235,0.36)_1px,transparent_0.2px)] [background-size:8px_8px]">
      <div className="hero-content text-center flex flex-col mt-20 space-y-4 justify-between">
        <h1 className="text-4xl lg:text-6xl tracking-tight">
          Text to Simulations <br />
          Simulate Anything  <br /> Instantly <br />
        </h1>
        <div className="modal my-4">
          <ThreeDModal />
        </div>
        <div className="cta flex flex-col items-center gap-4">
            <span className="text-center text-sm tracking-tight leading-tight">
            Instantly turn your ideas into <br /> interactive simulations — perfect for <br /> learning, research, or exploring any concept.
            </span>
          <div className="w-full flex justify-center md:justify-between items-end">
            <span className="hidden md:inline text-[10px] text-left font-[600] leading-tight text-black/60">
              10+ YEARS OF DELIVERING <br /> HIGH-QUALITY SIMULATIONS
            </span>
            <button className="w-fit py-2 px-3 md:py-3 cursor-pointer rounded-md flex items-center gap-16 bg-blue-700 text-white justify-between">
              <span className=" text-[10px] flex items-center">
                {" "}
                <MoveRight className="mr-1 w-3 h-3 inline-block" /> GET YOUR
                SIMULATION{" "}
              </span>
              <Shapes className="hidden w-4 h-4 md:inline-block" />
            </button>
            <span className="hidden md:inline text-[10px] text-right font-[600] leading-tight text-black/60">
              OVER 10,000 SIMULATIONS <br /> GENERATED ANNUALLY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
