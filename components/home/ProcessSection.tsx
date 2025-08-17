import { Dot, Upload } from "lucide-react";
import React from "react";

interface ImageOverlay {
  title: string;
  description: React.ReactNode;
}

const ImageTextOverlay: React.FC<{ imageOverlay: ImageOverlay }> = ({
  imageOverlay,
}) => {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex items-center gap-2">
        <Upload className="hidden md:inline-block w-4 h-4 " />
        <h3 className="text-sm font-semibold">{imageOverlay.title}</h3>
      </div>
      <p className="text-xs max-h-20 overflow-hidden text-ellipsis whitespace-normal sm:max-h-full">{imageOverlay.description}</p>
    </div>
  );
};

const ImageContainer: React.FC<{ imageUrl: string, pos:string }> = ({ imageUrl, pos }) => {
  return (
    <div
      className="h-full rounded relative bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${imageUrl}')`,
        backgroundPosition: `${pos} center`,
        backgroundSize: "400% auto",
      }}
    >
      <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-white rounded-full"></div>
      <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-white rounded-full"></div>
      <div className="absolute bottom-1 left-1 w-0.5 h-0.5 bg-white rounded-full"></div>
      <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-white rounded-full"></div>
    </div>
  );
};

export default function ProcessSection() {
  const imageOverlays: ImageOverlay[] = [
    {
      title: "Enter Your Idea",
      description: (
        <>
          Enter your idea as text <br />
          and we will start <br />
          transforming your thoughts into <br />
          interactive simulations.
        </>
      ),
    },
    {
      title: "Instant Generation",
      description: (
        <>
          Our AI models will generate simulations <br /> instantly to match your{" "}
          <br /> idea in best way.
        </>
      ),
    },
    {
      title: "Customize as Needed",
      description: (
        <>
          Create simulations tailored to your needs— <br />
          from academic subjects to creative topics, <br />
          customize every detail as you wish.
        </>
      ),
    },
    {
      title: "Delivery",
      description: (
        <>
          Access your interactive simulations <br /> instantly, tailored to your
          topic— <br /> from study to creative projects.
        </>
      ),
    },
  ];

  return (
    <section className="w-full p-4 pt-16 flex flex-col space-y-20 justify-between">
      <div className="flex flex-col ">
        <div className="flex flex-col space-y-6">
          <h3 className="w-fit flex items-center justify-between gap-1 bg-blue-700 text-white rounded-md text-xs p-2">
            <Dot className="inline-block w-4 h-4" /> Process{" "}
            <Dot className="inline-block w-4 h-4" />{" "}
          </h3>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Visualising Ideas <br /> Made <span className="shiny-text pr-2">Easy</span>
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="w-full grid grid-cols-4 gap-1">
          {imageOverlays.map((overlay, index) => (
            <ImageTextOverlay key={index} imageOverlay={overlay} />
          ))}
        </div>
        <div className="grid grid-cols-4 w-full gap-1 h-44 sm:h-56 md:h-80 relative">
          {['left', '25%', '56%', '88%'].map((position) => (
            <ImageContainer key={position} imageUrl={`https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80`} pos={position} />
          ))}
        </div>
      </div>
    </section>
  );
}
