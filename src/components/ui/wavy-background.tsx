"use client";

import { cn } from "@/utils/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

type WavyBackgroundProps = {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: any;
};

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isSafari, setIsSafari] = useState(false);
  const noise = createNoise3D();
  let animationId: number;

  const getSpeed = () => (speed === "slow" ? 0.001 : 0.002);

  const drawWave = (
    ctx: CanvasRenderingContext2D,
    w: number,
    h: number,
    nt: number
  ) => {
    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5);
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    ntRef: { current: number }
  ) => {
    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);

    ctx.filter = `blur(${blur}px)`;
    ctx.fillStyle = backgroundFill;
    ctx.globalAlpha = waveOpacity;

    const animate = () => {
      ctx.fillRect(0, 0, w, h);
      drawWave(ctx, w, h, ntRef.current);
      ntRef.current += getSpeed();
      animationId = requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ntRef = { current: 0 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    render(ctx, canvas, ntRef);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [blur, backgroundFill, waveOpacity, speed, waveWidth, colors]);

  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={isSafari ? { filter: `blur(${blur}px)` } : {}}
      />
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
