import { useEffect, useState } from "react";

/**
 * Tracks which section is currently in the viewport's focus band so the nav can
 * highlight it. `ids` must be a stable reference across renders.
 */
export function useActiveSection(ids: string[]): string {
  // Start with nothing active — the hero isn't a nav section, so no item should
  // be highlighted until the first real section reaches the viewport's focus band.
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
