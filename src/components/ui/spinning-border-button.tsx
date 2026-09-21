import * as React from "react";
import { cn } from "@/lib/utils";

export type SpinningBorderButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SpinningBorderButton = React.forwardRef<HTMLButtonElement, SpinningBorderButtonProps>(
  function SpinningBorderButton({ children = "Solicitar atendimento", className, ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(
          "group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5",
          "hover:shadow-[0_0_25px_rgba(221,240,200,0.25)] rounded-full p-[1px] relative items-center justify-center",
          className,
        )}
        {...props}
      >
        {/* Spinning border beam (visible on hover) */}
        <span className="absolute inset-[-100%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_75%,#DDF0C8_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Default static border */}
        <span className="absolute inset-0 rounded-full bg-green-800 transition-opacity duration-300 group-hover:opacity-0" />

        {/* Button surface & content */}
        <span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-green-50 text-xs font-semibold text-green-200 tracking-widest bg-gradient-to-b from-green-800 to-green-900 w-full h-full rounded-full py-3 px-7 relative shadow-[inset_0_1px_0_rgba(255,255,255,0.15)]">
          <span className="relative z-10">{children}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </button>
    );
  },
);

export default SpinningBorderButton;
