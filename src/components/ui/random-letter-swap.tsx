import { useState } from "react";
import { motion, type Transition } from "framer-motion";
import { cn } from "@/lib/utils";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface RandomLetterSwapProps {
  label: string;
  className?: string;
  staggerDuration?: number;
  transition?: Transition;
}

/**
 * On hover, each letter briefly scrambles through random glyphs before
 * settling back to the original — driven purely by CSS-timed keyframes per
 * letter so no interval/timeout bookkeeping is needed.
 */
export function RandomLetterSwap({
  label,
  className,
  staggerDuration = 0.025,
  transition = { duration: 0.5, type: "spring" },
}: RandomLetterSwapProps) {
  const [hovered, setHovered] = useState(false);
  const letters = label.split("");

  return (
    <span
      className={cn("relative inline-flex overflow-hidden", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {letters.map((letter, i) => (
        <span key={i} className="relative inline-block">
          <motion.span
            className="inline-block"
            animate={{ y: hovered ? "-100%" : "0%" }}
            transition={{ ...transition, delay: i * staggerDuration }}
          >
            {letter === " " ? " " : letter}
          </motion.span>
          <motion.span
            aria-hidden="true"
            className="absolute left-0 top-0 inline-block"
            initial={{ y: "100%" }}
            animate={{ y: hovered ? "0%" : "100%" }}
            transition={{ ...transition, delay: i * staggerDuration }}
          >
            {hovered ? GLYPHS[Math.floor(Math.random() * GLYPHS.length)] : letter === " " ? " " : letter}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default RandomLetterSwap;
