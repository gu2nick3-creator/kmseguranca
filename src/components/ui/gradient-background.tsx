import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Stop {
  hex: string;
  pos: number;
}

interface GradientBackgroundProps {
  className?: string;
  angle?: number;
  wave?: number;
  softness?: number;
  colors?: Stop[];
}

const DEFAULT_COLORS: Stop[] = [
  { hex: "#539255", pos: 11 },
  { hex: "#91C682", pos: 23 },
  { hex: "#DDF0C8", pos: 100 },
];

function hexToRgb(hex: string) {
  const n = parseInt(hex.replace("#", ""), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function sampleColor(colors: Stop[], t: number) {
  const clamped = Math.max(0, Math.min(100, t));
  let lo = colors[0];
  let hi = colors[colors.length - 1];
  for (let i = 0; i < colors.length - 1; i++) {
    if (clamped >= colors[i].pos && clamped <= colors[i + 1].pos) {
      lo = colors[i];
      hi = colors[i + 1];
      break;
    }
  }
  const span = hi.pos - lo.pos || 1;
  const localT = Math.max(0, Math.min(1, (clamped - lo.pos) / span));
  const a = hexToRgb(lo.hex);
  const b = hexToRgb(hi.hex);
  return {
    r: a.r + (b.r - a.r) * localT,
    g: a.g + (b.g - a.g) * localT,
    b: a.b + (b.b - a.b) * localT,
  };
}

const RES = 96;

/**
 * "Ribbon Field" gradient (Katihar-style): diagonal stripe field animated
 * via requestAnimationFrame. Rendered at low internal resolution and
 * upscaled with smoothing, since the stripe/wave math is evaluated per texel.
 */
export default function GradientBackground({
  className,
  angle = 97,
  wave = 12,
  softness = 26,
  colors = DEFAULT_COLORS,
}: GradientBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = RES;
    canvas.height = RES;
    ctx.imageSmoothingEnabled = true;

    const imageData = ctx.createImageData(RES, RES);
    const data = imageData.data;
    const start = performance.now();
    let waveClock = 20.75;

    const draw = (now: number) => {
      const t = (now - start) / 1000;
      const ph = t * 1.0;
      const amt = 0.85;
      const spin = ph * 1;
      const dynamicAngle = angle + (Math.sin(spin * 0.6) - Math.sin(0)) * 28 * amt;
      waveClock = 20.75 + ph * 1.2;
      const rad = (dynamicAngle * Math.PI) / 180;
      const dx = Math.cos(rad);
      const dy = Math.sin(rad);
      const soft = Math.max(1, softness) / 100;

      for (let y = 0; y < RES; y++) {
        for (let x = 0; x < RES; x++) {
          const nx = x / RES - 0.5;
          const ny = y / RES - 0.5;
          const along = nx * dx + ny * dy;
          const cross = -nx * dy + ny * dx;
          const waveOffset = (wave / 100) * 0.35 * Math.sin(cross * 2.4 * 2 * Math.PI + waveClock);
          const pos = (along + waveOffset + 0.5) * 100;
          const feathered = pos + (Math.sin(pos * 0.15) * soft * 6);
          const { r, g, b } = sampleColor(colors, feathered);
          const idx = (y * RES + x) * 4;
          data[idx] = r;
          data[idx + 1] = g;
          data[idx + 2] = b;
          data[idx + 3] = 255;
        }
      }

      ctx.putImageData(imageData, 0, 0);
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [angle, wave, softness, colors]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("absolute inset-0 w-full h-full", className)}
      style={{ imageRendering: "auto" }}
    />
  );
}
