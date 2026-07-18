import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

interface ImageCarouselProps {
  images: string[];
  /** Base alt text; the slide index is appended when there's more than one image. */
  alt: string;
  /** Autoplay interval in milliseconds. */
  intervalMs?: number;
  className?: string;
}

/**
 * A framed image carousel that auto-cycles through its slides. Pauses on hover/focus,
 * exposes clickable dots for manual control, and holds still under reduced-motion.
 * With a single image it renders as a plain framed screenshot, no controls.
 */
export function ImageCarousel({ images, alt, intervalMs = 3000, className }: ImageCarouselProps) {
  const count = images.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  // Keep the active index in range if the image list changes.
  useEffect(() => {
    setIndex((i) => (i >= count ? 0 : i));
  }, [count]);

  useEffect(() => {
    if (count <= 1 || paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [count, paused, intervalMs]);

  if (count === 0) return null;

  return (
    <section
      aria-roledescription="carousel"
      aria-label={alt}
      className={cn(
        "relative aspect-[4/3] overflow-hidden border-b border-line bg-surface-2",
        className,
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-out-soft"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <div
            key={src}
            className={cn(
              "flex h-full w-full shrink-0 items-center justify-center p-5",
              // Leave room below the image so it clears the dot indicators.
              count > 1 && "pb-10",
            )}
          >
            <img
              src={src}
              alt={count > 1 ? `${alt} — screenshot ${i + 1} of ${count}` : alt}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 p-3">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show screenshot ${i + 1}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300 ease-out-soft",
                i === index ? "w-5 bg-accent" : "w-1.5 bg-line-strong hover:bg-muted",
              )}
            />
          ))}
        </div>
      )}
    </section>
  );
}
