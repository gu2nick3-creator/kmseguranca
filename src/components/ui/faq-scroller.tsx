import { cn } from "@/lib/utils";

export interface FaqCardItem {
  question: string;
  answer: string;
}

interface FaqCardProps extends FaqCardItem {
  className?: string;
}

export function FaqCard({ question, answer, className }: FaqCardProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-start gap-3 p-6 bg-card rounded-xl border border-border shadow-sm",
        "hover:shadow-md hover:border-green-200 transition-all duration-300 w-80 sm:w-96 h-52 shrink-0",
        className,
      )}
    >
      <h3 className="text-base font-semibold text-foreground leading-snug line-clamp-2">{question}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-5">{answer}</p>
    </div>
  );
}

interface FaqRowProps {
  items: FaqCardItem[];
  direction: "left" | "right";
  speedSeconds: number;
}

function FaqRow({ items, direction, speedSeconds }: FaqRowProps) {
  // Doubled so the track can loop seamlessly at -50%/0%.
  const looped = [...items, ...items];

  return (
    <div className="group flex gap-5 overflow-hidden">
      <div
        className={cn(
          "flex gap-5 shrink-0 [animation-play-state:running] group-hover:[animation-play-state:paused]",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
        )}
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {looped.map((item, i) => (
          <div key={i} aria-hidden={i >= items.length}>
            <FaqCard question={item.question} answer={item.answer} />
          </div>
        ))}
      </div>
    </div>
  );
}

interface FaqScrollerProps {
  items: FaqCardItem[];
  className?: string;
}

export function FaqScroller({ items, className }: FaqScrollerProps) {
  // Split into two staggered rows moving in opposite directions, like a
  // marquee grid — each row loops its own items continuously.
  const rowA = items.filter((_, i) => i % 2 === 0);
  const rowB = items.filter((_, i) => i % 2 === 1);

  return (
    <div
      className={cn("relative space-y-5", className)}
      style={{
        maskImage: "linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0, black 48px, black calc(100% - 48px), transparent 100%)",
      }}
    >
      <FaqRow items={rowA} direction="left" speedSeconds={28} />
      <FaqRow items={rowB} direction="right" speedSeconds={32} />
      <p className="text-center text-xs text-muted-foreground/70 pt-1">Passe o mouse para pausar e ler com calma</p>
    </div>
  );
}

export default FaqScroller;
