import { type ReactNode, useState } from "react";
import { Console } from "@/components/ui/Console";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { cn } from "@/lib/cn";
import { siteConfig } from "@/lib/siteConfig";

type Mode = "standard" | "dev";

function ModeButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
        active ? "bg-ink text-bg" : "text-muted hover:text-ink",
      )}
    >
      {children}
    </button>
  );
}

export function Hero() {
  const [selectedMode, setSelectedMode] = useState<Mode>("standard");

  // Dev mode (the interactive terminal) is a desktop experience — typing
  // commands on a phone is awkward — so it's disabled below the same `md`
  // breakpoint the nav switches at. On smaller screens we always show the
  // standard view, and the mode toggle is hidden entirely.
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const mode: Mode = isDesktop ? selectedMode : "standard";

  return (
    <section id="top" className="relative flex min-h-svh flex-col overflow-hidden">
      <div className="grid-texture pointer-events-none absolute inset-0" aria-hidden="true" />

      <Container className="relative flex flex-1 flex-col pt-28 pb-16">
        <div className="animate-rise mb-12 hidden md:block" style={{ animationDelay: "0ms" }}>
          <div className="inline-flex items-center gap-1 rounded-full border border-line bg-surface/60 p-1 backdrop-blur-sm">
            <ModeButton active={mode === "standard"} onClick={() => setSelectedMode("standard")}>
              Standard
            </ModeButton>
            <ModeButton active={mode === "dev"} onClick={() => setSelectedMode("dev")}>
              <span className="font-mono">{">_"}</span> Dev mode
            </ModeButton>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          {mode === "standard" ? (
            <div key="standard">
              <p
                className="animate-rise flex items-center gap-2 font-mono text-sm text-muted"
                style={{ animationDelay: "60ms" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {siteConfig.role} · {siteConfig.location}
              </p>

              <h1
                className="animate-rise mt-6 font-display text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.95] tracking-tight text-ink"
                style={{ animationDelay: "150ms" }}
              >
                Hi, I'm Jared<span className="text-accent">!</span> 👋
              </h1>

              <p
                className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-muted"
                style={{ animationDelay: "240ms" }}
              >
                Full-stack Software Engineer with experience shipping 0 -&gt; 1 web
                platforms, AI integrations, and production-ready APIs at scale.
              </p>

              <div className="animate-rise mt-10" style={{ animationDelay: "330ms" }}>
                <SocialLinks />
                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-contrast transition-transform duration-200 hover:-translate-y-0.5"
                  >
                    View my work
                  </a>
                  <a href="#contact" className="link-underline text-sm font-medium text-ink">
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div key="dev" className="animate-rise">
              <Console
                heightClassName="h-[clamp(24rem,58svh,40rem)]"
                onExit={() => setSelectedMode("standard")}
              />
              <p className="mt-3 font-mono text-xs text-faint">
                Tip: run <span className="text-muted">exit</span> or tap Standard to leave dev mode.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
