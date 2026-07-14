import { cn } from "@/lib/cn";
import type { TechIcon } from "@/lib/types";

interface TechRailProps {
  items: TechIcon[];
  size?: number;
  className?: string;
}

/** A row of brand logo tiles for a project's or role's tech stack. */
export function TechRail({ items, size = 20, className }: TechRailProps) {
  if (items.length === 0) return null;

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {items.map((Icon) => (
        <li
          key={Icon.name}
          className="grid h-9 w-9 place-items-center rounded-md border border-line bg-surface transition-colors hover:border-line-strong"
        >
          <Icon width={size} height={size} isDarkMode />
        </li>
      ))}
    </ul>
  );
}
