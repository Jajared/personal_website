import {
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/cn";
import { type CommandContext, findCommand, suggestCommand } from "@/lib/terminalCommands";

interface Line {
  id: number;
  node: ReactNode;
}

const WELCOME: ReactNode[] = [
  <p className="text-muted" key="welcome-title">
    <span className="text-ink">jared.sh</span> — an interactive résumé.{" "}
    <span className="text-faint">v1.0.0</span>
  </p>,
  <p className="text-muted" key="welcome-hint">
    Type <span className="text-accent">help</span> to get started, or try{" "}
    <span className="text-accent">neofetch</span> and <span className="text-accent">gh</span>.
  </p>,
  <p className="text-faint" key="welcome-tip">
    Suggestions appear as you type — press <span className="text-muted">Tab</span> or{" "}
    <span className="text-muted">→</span> to accept.
  </p>,
];

function Prompt() {
  return (
    <span className="select-none whitespace-nowrap" aria-hidden="true">
      <span className="text-accent">jared@portfolio</span>
      <span className="text-faint">:</span>
      <span className="text-muted">~</span>
      <span className="text-faint">$</span>
    </span>
  );
}

function PromptEcho({ value }: { value: string }) {
  return (
    <div className="flex gap-2">
      <Prompt />
      <span className="text-ink">{value}</span>
    </div>
  );
}

interface ConsoleProps {
  /** Tailwind height utilities for the scrollable body. */
  heightClassName?: string;
  /** When provided, exposes an `exit` command that calls this. */
  onExit?: () => void;
}

export function Console({ heightClassName = "h-[22rem] lg:h-[26rem]", onExit }: ConsoleProps) {
  const [lines, setLines] = useState<Line[]>(() =>
    WELCOME.map((node, index) => ({ id: index, node })),
  );
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);

  const idRef = useRef(WELCOME.length);
  const historyRef = useRef<string[]>([]);
  const cursorRef = useRef<number | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const append = (node: ReactNode) => {
    setLines((prev) => [...prev, { id: idRef.current++, node }]);
  };

  // Auto-scroll to the newest output whenever a line is appended.
  useEffect(() => {
    const el = bodyRef.current;
    if (el && lines.length > 0) el.scrollTop = el.scrollHeight;
  }, [lines]);

  // Click anywhere in the body (except on a link/the input) to focus the prompt.
  // Wired via addEventListener so it doesn't fight the a11y linter — the input
  // itself is a real, keyboard-reachable control.
  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;
    const onClick = (event: MouseEvent) => {
      if (window.getSelection()?.toString()) return;
      const target = event.target as HTMLElement | null;
      if (target?.closest("a, button, input")) return;
      inputRef.current?.focus();
    };
    el.addEventListener("click", onClick);
    return () => el.removeEventListener("click", onClick);
  }, []);

  // Focus the prompt as soon as the console opens (it mounts on an explicit
  // user action, so grabbing focus is expected here).
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const runCommand = async (raw: string) => {
    append(<PromptEcho value={raw} />);
    const trimmed = raw.trim();
    if (!trimmed) return;

    historyRef.current = [...historyRef.current, trimmed];
    cursorRef.current = null;

    const [name, ...args] = trimmed.split(/\s+/);
    const command = findCommand(name.toLowerCase());
    if (!command) {
      append(
        <p className="text-muted">
          command not found: <span className="text-ink">{name}</span>. Type{" "}
          <span className="text-accent">help</span> for a list.
        </p>,
      );
      return;
    }

    const ctx: CommandContext = {
      args,
      print: append,
      clear: () => setLines([]),
      exit: onExit,
    };
    const result = command.run(ctx);
    if (result instanceof Promise) {
      setBusy(true);
      try {
        await result;
      } finally {
        setBusy(false);
      }
    }
  };

  // Inline "AI" autosuggestion: the best full-line completion for what's typed
  // so far. `ghost` is only the not-yet-typed remainder, drawn faint after the
  // cursor. Hidden while a command is running.
  const suggestion = busy ? null : suggestCommand(input, historyRef.current);
  const ghost = suggestion ? suggestion.slice(input.length) : "";

  const acceptSuggestion = () => {
    if (!suggestion) return false;
    cursorRef.current = null;
    setInput(suggestion);
    return true;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (busy) return;
    const value = input;
    setInput("");
    void runCommand(value);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const history = historyRef.current;
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (history.length === 0) return;
      const from = cursorRef.current ?? history.length;
      const next = Math.max(0, from - 1);
      cursorRef.current = next;
      setInput(history[next] ?? "");
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      if (cursorRef.current === null) return;
      const next = cursorRef.current + 1;
      if (next >= history.length) {
        cursorRef.current = null;
        setInput("");
      } else {
        cursorRef.current = next;
        setInput(history[next] ?? "");
      }
    } else if (event.key === "Tab") {
      event.preventDefault();
      acceptSuggestion();
    } else if (event.key === "ArrowRight" || event.key === "End") {
      // Accept the ghost only when the caret sits at the very end, so these
      // keys still behave normally while editing mid-line.
      const el = event.currentTarget;
      const atEnd = el.selectionStart === input.length && el.selectionEnd === input.length;
      if (suggestion && atEnd) {
        event.preventDefault();
        acceptSuggestion();
      }
    } else if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      setLines([]);
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-lift">
      <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-4 py-3">
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-accent" />
          <span className="h-3 w-3 rounded-full bg-line-strong" />
          <span className="h-3 w-3 rounded-full bg-line-strong" />
        </span>
        <span className="flex-1 text-center font-mono text-xs text-faint">jared@portfolio: ~</span>
        <span className="w-12" aria-hidden="true" />
      </div>

      <div
        ref={bodyRef}
        className={cn(
          "overflow-y-auto bg-bg px-4 py-4 font-mono text-[13px] leading-relaxed",
          heightClassName,
        )}
      >
        <div className="flex flex-col gap-2" aria-live="polite">
          {lines.map((line) => (
            <div key={line.id} className="break-words whitespace-pre-wrap">
              {line.node}
            </div>
          ))}
        </div>

        {busy ? (
          <div className="mt-2 flex items-center gap-2 text-faint">
            <Prompt />
            <span className="caret">▋</span>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-2 flex items-center gap-2">
            <Prompt />
            <div className="relative min-w-0 flex-1">
              {/* Ghost-text layer. Renders the typed text (so it stays visible)
                  followed by the predicted completion in faint. The real input
                  sits on top with transparent text, so only this layer and the
                  accent caret show — keeping the completion perfectly aligned. */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 flex items-center overflow-hidden whitespace-pre"
              >
                <span className="text-ink">{input}</span>
                <span className="text-faint">{ghost}</span>
              </div>
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onKeyDown}
                spellCheck={false}
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                aria-label="Terminal input"
                aria-autocomplete="inline"
                placeholder="type a command — try 'help'"
                className="relative w-full border-none bg-transparent p-0 text-transparent caret-[var(--accent)] outline-none placeholder:text-faint"
              />
            </div>
            {ghost ? (
              <span
                aria-hidden="true"
                className="hidden shrink-0 rounded border border-line px-1.5 py-0.5 font-mono text-[10px] leading-none text-faint sm:block"
              >
                Tab
              </span>
            ) : null}
          </form>
        )}
      </div>
    </div>
  );
}
