"use client";
import React, { useState } from "react";
import type { JSX } from "react";
import { ArrowRight, Book, Brackets, Dot, Globe, Waves } from "lucide-react";
import Image from "next/image";

interface ListItem {
  num: string;
  value: string;
  icon: JSX.Element;
  img: string;
}

export default function AboutSection() {
  const [isElHoverIdx, setIsElHoverIdx] = useState<number | null>(null);
  const list: ListItem[] = [
    {
      num: "01.",
      value: "Custom Simulations",
      icon: <Brackets className="inline-block w-4 h-4" />,
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
    },
    {
      num: "02.",
      value: "Visualise World",
      icon: <Globe className="inline-block w-4 h-4" />,
      img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
    },
    {
      num: "03.",
      value: "Explore Imaginations",
      icon: <Waves className="inline-block w-4 h-4" />,
      img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80' // changed image
    },
    {
      num: "04.",
      value: "Understand Concepts",
      icon: <Book className="inline-block w-4 h-4" />,
      img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80'
    },
  ];
  return (
    <section className="w-full px-4 py-6 pt-16 flex flex-col lg:flex-row space-y-16 lg:space-y-0 justify-between">
      {/* left */}
      <div className="flex flex-col space-y-20 w-full lg:w-1/2">
        <div className="flex flex-col space-y-6">
          <h3 className="w-fit flex items-center justify-between gap-1 bg-blue-700 text-white rounded-md text-xs p-2">
            <Dot className="inline-block w-4 h-4" /> About{" "}
            <Dot className="inline-block w-4 h-4" />{" "}
          </h3>
            <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Transforming Ideas <br /> Into Interactive <span className="shiny-text pr-1">Simulations</span>
            </h1>
        </div>
        <div className="space-y-8">
          <div>
            <ul>
              {list.map((el, idx) => (
                <li
                  key={idx}
                  onMouseEnter={() => setIsElHoverIdx(idx)}
                  onMouseLeave={() => setIsElHoverIdx(null)}
                  className="text-sm hover:text-blue-800 p-2 flex justify-between items-center border-t-[1.4px] border-stone-100 cursor-default transition-all duration-300"
                >
                  <div
                    key={idx}
                    className="flex transition-all duration-300 items-center gap-6"
                  >
                    <span className="text-xs w-5">
                      {isElHoverIdx === idx ? (
                        <ArrowRight className="inline-block w-3 h-3" />
                      ) : (
                        el.num
                      )}
                    </span>
                    <span>{el.value}</span>
                  </div>
                  <span>{el.icon}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            {/* 4 white small dots at corner */}
            <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-white rounded-full"></div>
            <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-white rounded-full"></div>
            <img
              src={list[typeof isElHoverIdx === "number" ? isElHoverIdx : 0].img}
              alt="About section illustration"
              className="w-full h-32 object-cover rounded-md transition-all duration-300 will-change-auto"
            />
          </div>
        </div>
      </div>
      {/* right */}
      <div className="w-full lg:w-1/2 pr-12 flex justify-center lg:justify-end">
        <div className="w-full max-w-sm lg:w-1/2 border-l-[1.4px] border-stone-100 h-full px-4 flex flex-col gap-8 lg:gap-0 lg:justify-between">
          <div className="flex flex-col gap-6">
            <div className="flex gap-6 items-center w-full">
              <div className="rounded-md ">
                <Image
                  width={64}
                  height={64}
                  src="/ayrton_senna.jpg"
                  alt="ayrton senna img"
                  className="rounded-md"
                />
              </div>
              <div className="flex flex-col gap-1 justify-center w-full">
                <span className="text-sm">Ayrton Senna</span>
                <span className="text-xs text-gray-500">
                  Senior Partner at Vignam
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 text-xs">
                <p>
                At Vignam, we empower users to transform ideas into immersive simulations. Our platform enables seamless text-to-simulation experiences across diverse topics—be it education, engineering, or creative exploration.
                By harnessing advanced AI and visualization technologies, we make complex concepts interactive and accessible.
                
                </p>
                <p>
                We believe in democratizing simulation technology, making it available for anyone to learn, experiment, and innovate.
                Whether you&apos;re a student, educator, or innovator, our tools help you bring scenarios to life with just a few words.
                Every simulation is crafted for clarity, engagement, and real-world relevance.
                Our commitment to continuous improvement ensures that our simulations stay at the forefront of accuracy and usability.
                
                </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-600">
              EVERY DETAIL MATTERS - WE CRAFT <br />
              EACH PARTS WITH CARE, ACCURACY, AND <br />
              A FINISH THAT FEELS JUST RIGHT 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
