import { useScrollReveal } from "@/hooks/useScrollReveal";

interface PageBannerProps {
  title: string;
  subtitle: string;
  image?: string;
}

export default function PageBanner({ title, subtitle, image }: PageBannerProps) {
  const titleRef = useScrollReveal("up");
  const subRef = useScrollReveal("up", 150);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-primary to-green-900" />
      {image && (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 to-transparent" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1
          ref={titleRef}
          className="text-3xl md:text-5xl font-extrabold text-green-50 mb-4"
          style={{ lineHeight: "1.1" }}
        >
          {title}
        </h1>
        <p ref={subRef} className="text-green-200 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
