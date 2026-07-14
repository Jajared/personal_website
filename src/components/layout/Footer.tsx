import { ArrowUpIcon } from "@/components/icons/UiIcons";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <p className="font-mono text-xs text-faint">
          © {year} {siteConfig.name} — built with React, Vite &amp; Tailwind
        </p>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-ink"
        >
          Back to top
          <span className="grid h-7 w-7 place-items-center rounded-full border border-line transition-colors group-hover:border-line-strong">
            <ArrowUpIcon size={14} />
          </span>
        </button>
      </Container>
    </footer>
  );
}
