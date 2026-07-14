import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  /** Short monospace label, e.g. "about". */
  eyebrow: string;
  title: string;
  className?: string;
}

/**
 * The structural marker that opens each section: an accent dot + monospace tag,
 * then the display heading. No fake sequence numbers — the tag names the content.
 */
export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">{eyebrow}</span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}
