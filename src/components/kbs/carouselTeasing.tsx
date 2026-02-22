import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselItem {
  id: number;
  image: string;
  alt: string;
}

const defaultItems: CarouselItem[] = [
  { id: 1, image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=500&fit=crop", alt: "Mountain landscape" },
  { id: 2, image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=500&fit=crop", alt: "Tropical beach" },
  { id: 3, image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=500&fit=crop", alt: "Starry mountain" },
  { id: 4, image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop", alt: "Forest trail" },
  { id: 5, image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=500&fit=crop", alt: "Sunlit canopy" },
];

interface Carousel3DProps {
  items?: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel3D = ({ items = defaultItems, autoPlay = true, interval = 4000 }: Carousel3DProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const count = items.length;

  const next = useCallback(() => setActiveIndex((p) => (p + 1) % count), [count]);
  const prev = useCallback(() => setActiveIndex((p) => (p - 1 + count) % count), [count]);

  useEffect(() => {
    if (!autoPlay || isHovered) return;
    const t = setInterval(next, interval);
    return () => clearInterval(t);
  }, [autoPlay, isHovered, interval, next]);

  const getStyle = (index: number) => {
    let offset = index - activeIndex;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;
    const abs = Math.abs(offset);
    const active = offset === 0;

    return {
      transform: `translateX(${offset * 260}px) translateZ(${active ? 80 : -200 * abs}px) rotateY(${offset * -40}deg) scale(${active ? 1.08 : Math.max(0.65, 1 - abs * 0.18)})`,
      opacity: abs > 2 ? 0 : Math.max(0.35, 1 - abs * 0.3),
      zIndex: 10 - abs,
      filter: active ? "brightness(1.05)" : `brightness(${0.7 - abs * 0.05})`,
      transition: "all 0.7s cubic-bezier(0.22, 1, 0.36, 1)",
      pointerEvents: abs > 2 ? ("none" as const) : ("auto" as const),
    };
  };

  return (
    <div
      className="relative w-full select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ perspective: "1400px", height: "480px" }}
      >
        {items.map((item, i) => (
          <div
            key={item.id}
            className="absolute cursor-pointer"
            style={{ ...getStyle(i), transformStyle: "preserve-3d" }}
            onClick={() => setActiveIndex(i)}
          >
            <div
              className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-border/10"
              style={{
                width: "380px",
                height: "260px",
                boxShadow:
                  i === activeIndex
                    ? "0 30px 60px -12px hsl(var(--foreground) / 0.35), 0 0 0 1px hsl(var(--border) / 0.1)"
                    : "0 15px 35px -8px hsl(var(--foreground) / 0.2)",
              }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable={false}
              />
              {/* Reflection / gloss overlay */}
              <div
                className="pointer-events-none absolute inset-0 rounded-3xl"
                style={{
                  background:
                    "linear-gradient(165deg, hsl(0 0% 100% / 0.18) 0%, transparent 45%, hsl(0 0% 0% / 0.06) 100%)",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border/40 bg-card/70 p-3 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-card sm:left-10"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-border/40 bg-card/70 p-3 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-card sm:right-10"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5 text-foreground" />
      </button>

      {/* Dots */}
      <div className="mt-6 flex justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-2 rounded-full transition-all duration-400 ${
              i === activeIndex ? "w-7 bg-primary" : "w-2 bg-muted-foreground/25 hover:bg-muted-foreground/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel3D;
