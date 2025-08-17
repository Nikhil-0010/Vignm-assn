"use client";
import React, { useEffect, useRef, useState, useCallback, JSX } from "react";
import Hls from "hls.js";
import { ArrowUpRight, AudioLines, Pause, Play } from "lucide-react";
import Link from "next/link";

interface CustomHlsPlayerProps {
  src: string;
  width?: string;
  height?: string;
}

const formatTime = (seconds: number) => {
  const m = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

const ASPECT_RATIO = 16 / 9;

const CustomHlsPlayer: React.FC<CustomHlsPlayerProps> = ({
  src,
  width = "100%",
  height = "auto",
}) : JSX.Element => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hlsRef = useRef<Hls | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const [duration, setDuration] = useState("00:00");
  const [controlsVisible, setControlsVisible] = useState(false);

  // Initialize HLS
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (Hls.isSupported()) {
      const hls = new Hls({ startLevel: -1 });
      hls.loadSource(src);
      hls.attachMedia(video);
      hlsRef.current = hls;

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => console.log("Autoplay blocked"));
        setPlaying(true);
      });
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      video.addEventListener("loadedmetadata", () => video.play());
    }

    return () => {
      hlsRef.current?.destroy();
    };
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () =>
      setCurrentTime(formatTime(Math.floor(video.currentTime)));
    const handleLoadedMetadata = () =>
      setDuration(formatTime(Math.floor(video.duration)));

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, []);

  const togglePlay = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }, []);

  const toggleVolume = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    if (volume > 0) {
      video.volume = 0;
      setVolume(0);
    } else {
      video.volume = 1;
      setVolume(1);
    }
  }, [volume]);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // (70% visible)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setControlsVisible(true);
          }
        });
      },
      { threshold: 0.7 }
    );

    // 10%
    const observer20 = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.volume = 0;
            video.play().catch(() => {});
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    observer20.observe(container);

    return () => {
      observer.disconnect();
      observer20.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width,
        position: "relative",
        paddingTop: `${100 / ASPECT_RATIO}%`,
      }}
      className="custom-hls-player"
    >
      <video
        ref={videoRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        onClick={togglePlay}
        aria-label="Video player"
      />

      {/* Controls */}
      <div
        className={`controls absolute inset-0 p-4 w-full h-full flex flex-col items-center justify-between ${
          controlsVisible ? "opacity-100" : "translate-y-1 opacity-0"
        } transition-all delay-75 duration-700 ease-in-out pointer-events-none`}
      >
        <div className="flex items-center justify-between  sm:mt-4 lg:mt-8 w-full ">
          {/* Volume */}
          <button
            onClick={toggleVolume}
            className="flex items-center justify-center text-[10px] gap-2 rounded p-2 bg-white pointer-events-auto"
            aria-label={volume > 0 ? "Mute" : "Unmute"}
            type="button"
          >
            <AudioLines className="inline-block w-3 h-3" />{" "}
            <span>SOUND {volume > 0 ? "OFF" : "ON"}</span>
          </button>
          <Link
            href="https://www.youtube.com/watch?v=E1czmX6bjFA&t=10s"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center text-[10px] gap-2 rounded p-2 bg-white pointer-events-auto"
          >
            <span>CHECK ON YOUTUBE</span>
            <ArrowUpRight className="inline-block w-3 h-3" />
          </Link>
        </div>

        <button
          className="pointer-events-auto bg-white rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center"
          onClick={togglePlay}
          aria-label={playing ? "Pause" : "Play"}
          type="button"
        >
          {playing ? (
            <Play className="fill-blue-700 stroke-none" />
          ) : (
            <Pause className="fill-blue-700 stroke-none" />
          )}
        </button>

        <div className="timeline flex w-full items-center justify-between text-white/80 text-[10px]">
          <span>{currentTime}</span>
          <div>
            {[0, 1].map((i) => (
              <svg
              key={i}
                width="12px"
                height="100%"
                viewBox="0 0 24 24"
                fill="none"
                className='inline-block'
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2V22M19.0711 4.92893L4.92893 19.0711M22 12H2M19.0711 19.0711L4.92893 4.92893"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
          <span>{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default function VideoSection(): JSX.Element {
  return (
    <CustomHlsPlayer src="https://pub-e96800ca55df4b1592a33fc671df0721.r2.dev/vignam_video_hls/master.m3u8" />
  );
}
