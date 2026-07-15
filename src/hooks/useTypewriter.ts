import { useEffect, useMemo, useState } from "react";

interface TypewriterOptions {
  /** Milliseconds between characters. */
  speed?: number;
  /** Milliseconds to wait before the first character appears. */
  startDelay?: number;
}

/**
 * Reveals `text` one character at a time. Returns the substring typed so far and
 * whether it has finished. Honours `prefers-reduced-motion` by showing the full
 * text immediately.
 */
export function useTypewriter(
  text: string,
  { speed = 85, startDelay = 0 }: TypewriterOptions = {},
): { typed: string; done: boolean } {
  const reduceMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Split into code points so multi-unit characters (e.g. emoji surrogate
  // pairs) are revealed atomically rather than briefly showing a broken half.
  const chars = useMemo(() => Array.from(text), [text]);

  const [count, setCount] = useState(reduceMotion ? chars.length : 0);

  useEffect(() => {
    if (reduceMotion) {
      setCount(chars.length);
      return;
    }
    setCount(0);
    let index = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tick = () => {
      index += 1;
      setCount(index);
      if (index < chars.length) timer = setTimeout(tick, speed);
    };
    const start = setTimeout(tick, startDelay);
    return () => {
      clearTimeout(start);
      clearTimeout(timer);
    };
  }, [chars, speed, startDelay, reduceMotion]);

  return { typed: chars.slice(0, count).join(""), done: count >= chars.length };
}
