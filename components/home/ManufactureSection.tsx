import { ArrowRight, Dot } from "lucide-react";
import React from "react";
import Image from "next/image";

interface ModelCardProps {
    name: string,
    category: string,
    img: string,
    parts: string,
    theme: string,
}

const ModelCard : React.FC<ModelCardProps> = ({ name, category, img, parts, theme }) => {
    return (
        <div className="relative bg-gray-100 h-96 w-full p-4 px-6 rounded-md">
            <div className='flex py-2 border-b border-b-gray-300 justify-between'>
                <span className="font-semibold">{name}</span>
                <ArrowRight className="inline-block w-4 h-4" />
            </div>
            <div className="flex flex-col gap-1 py-2 justify-between">
                <span className="text-xs text-gray-500">Category: <span className="text-black ml-1">{category}</span></span>
                <span className="text-xs text-gray-500">Parts: <span className="text-black ml-1">{parts}</span></span>
                <span className="text-xs text-gray-500">Theme: <span className="text-black ml-1">{theme}</span></span>
            </div>
            <div className="flex justify-center items-center w-full max-h-56 overflow-hidden">
                <Image
                    width={260}
                    height={260}
                    src={img}
                    alt=""
                    className="object-contain max-h-56 w-auto h-auto"
                />
            </div>
            

            <div className="absolute top-1 left-1 w-0.75 h-0.75 bg-black/80 rounded-full"></div>
            <div className="absolute top-1 right-1 w-0.75 h-0.75 bg-black/80 rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-0.75 h-0.75 bg-black/80 rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-0.75 h-0.75 bg-black/80 rounded-full"></div>
        </div>
    )
}
export default function ManufactureSection() {
    const models: ModelCardProps[] = [
        {
            name: "Electric Motor",
            category: "Electronics",
            img: "/electric_motor.png",
            parts: "Stator, Rotor, Bearings",
            theme: "Futuristic"
        },
        {
            name: "Heart",
            category: "Biology",
            img: "/anatomy_heart.png",
            parts: "Atria, Ventricles, Valves",
            theme: "Anatomical"
        },
        {
            name:"Drone",
            category: "Aerospace",
            img: "/drone.png",
            parts: "Propellers, Camera, Battery",
            theme: "Futuristic"
        }
        // {
        //     name: "Trigonometry",
        //     category: "Mathematics",
        //     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Trigonometry.svg/512px-Trigonometry.svg.png",
        //     parts: "Sine, Cosine, Tangent",
        //     theme: "Geometric"
        // },
    ]
  return (
    <section id="manufacture" className="pt-16 p-4 flex flex-col space-y-16 items-center bg-white bg-[radial-gradient(rgba(229,231,235,0.36)_1px,transparent_0.2px)] [background-size:8px_8px]">
      <div className="flex flex-col space-y-6 items-center">
        <h3 className="w-fit flex items-center justify-between gap-1 bg-blue-700 text-white rounded-md text-xs p-2">
          <Dot className="inline-block w-4 h-4" /> Manufacturing{" "}
          <Dot className="inline-block w-4 h-4" />{" "}
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-center tracking-tight">
          The Most Popular <br /> <span className="shiny-text pr-1">Models</span> We Produce
        </h1>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-1">
        {models.map((model) => (
          <ModelCard key={model.name} {...model} />
        ))}
      </div>
    </section>
  );
}
