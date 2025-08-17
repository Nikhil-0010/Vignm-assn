"use client"
import { ArrowRight, Dot, Shapes } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

type PortfolioItem = {
  name: string;
  category: string;
  img: string;
};

export default function PortfolioSection() {
  const [selectedElIdx, setSelectedElIdx] = useState<number>(0);
  const list: PortfolioItem[] = [
    {
      name: "Electric Bicycle",
      category: "MOTOR MOUNTS",
      img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Prefab Home",
      category: "METAL COMPONENTS",
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mechanical Watch",
      category: "SPACER RINGS",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "3D Printer",
      category: "THREADED ADAPTERS",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Drone",
      category: "CUSTOM BRACKETS",
      img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Petrol Engine",
      category: "ENGINE COMPONENTS",
      img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Heart Model",
      category: "ANATOMY",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Trigonometry",
      category: "MATHEMATICS",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Electric Motor",
      category: "ELECTRICAL COMPONENTS",
      img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Electric Circuit",
      category: "ELECTRICAL COMPONENTS",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
    }
  ]

  return (
    <section id="portfolio" className="w-full bg-black px-4 py-16 pt-16 flex flex-col space-y-16 justify-between">
      <div className="flex flex-col space-y-6">
        <h3 className="w-fit flex items-center justify-between gap-1 bg-blue-700 text-white rounded-md text-xs p-2">
          <Dot className="inline-block w-4 h-4" /> Portfolio{" "}
          <Dot className="inline-block w-4 h-4" />{" "}
        </h3>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
          Check Our <br /> Latest  <span className="shiny-text pr-1">Simulations</span>
        </h1>
      </div>
      <div className="border-t-[1.4px] border-stone-700 pt-4 flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between">
        <div className="w-full lg:w-2/5 flex items-center justify-center lg:justify-baseline lg:items-start aspect-video relative overflow-hidden rounded">
          <Image
            src={list[selectedElIdx || 0]?.img}
            alt=""
            className="object-contain rounded"
            sizes="(min-width: 1024px) 200px, 40vw"
            priority
            unoptimized
            fill={false}
            width={800}
            height={450}
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <ul>
            {list.map((el, idx) => (
              <li
                key={idx}
                onClick={() => setSelectedElIdx(idx)}
                className="flex items-center gap-2 py-2 border-b-[1.4px]"
              >
                <ArrowRight className={`inline-block transition-all duration-300 ${selectedElIdx === idx ? "w-4 h-4 text-white" : "w-0 h-0"}`} />
                <div className={`flex items-center justify-between w-full transition-all duration-300 cursor-default ${selectedElIdx === idx ? "text-white" : "text-neutral-600"}`}>
                  <p className="text-sm ">{el.name}</p>
                  <p className="text-xs">{el.category}</p>
                </div>
              </li>
            ))}
          </ul>
          <span className="text-sm text-white">More in the vault. <br /> Take a look.</span>
          <button className="w-full p-2 rounded bg-white flex items-center justify-between">
            <span className="text-xs text-black">
                <ArrowRight className="inline-block w-3 h-3 mr-2" /> SEE MORE</span>
                <span>
                    <Shapes className="inline-block w-4 h-4" />
                </span>
          </button>
        </div>
      </div>
    </section>
  );
}
