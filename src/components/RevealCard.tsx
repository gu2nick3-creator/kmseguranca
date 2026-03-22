import { useScrollReveal } from "@/hooks/useScrollReveal";
import { type LucideIcon } from "lucide-react";

interface RevealCardProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function RevealCard({ children, delay = 0, className = "" }: RevealCardProps) {
  const ref = useScrollReveal<HTMLDivElement>("up", delay);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function RevealCardRight({ children, delay = 0, className = "" }: RevealCardProps) {
  const ref = useScrollReveal<HTMLDivElement>("right", delay);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function RevealCardScale({ children, delay = 0, className = "" }: RevealCardProps) {
  const ref = useScrollReveal<HTMLDivElement>("scale", delay);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

export function RevealCardLeft({ children, delay = 0, className = "" }: RevealCardProps) {
  const ref = useScrollReveal<HTMLDivElement>("left", delay);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
