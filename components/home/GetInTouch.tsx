import { ArrowRight } from "lucide-react";

export default function GetInTouch() {
  return (
    <section id="getInT" className="bg-blue-700 text-white p-16 flex flex-col items-center justify-center space-y-8">
      <svg
        className="w-10 md:w-[56px]"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex flex-col space-y-2 items-center justify-center">
        <h2 className="text-2xl tracking-tight text-center md:text-3xl font-semibold">
          Ready to Bring Your Ideas to Life ?
        </h2>
        <p className="text-sm text-center max-w-lg">
          Transform your ideas into interactive experiences. Whether it&apos;s for education, research, or creative exploration, our platform turns text into dynamic simulations across any topic. Reach out to see how we can bring your concepts to life with the power of simulation.
        </p>
      </div>
      <button className="text-xs flex items-center gap-1 text-blue-700 bg-white px-6 py-3 rounded">
        <ArrowRight className="inline-block w-3 h-3" />
        GET IN TOUCH
      </button>
    </section>
  );
}
