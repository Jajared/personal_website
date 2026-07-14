import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons/UiIcons";
import { Container } from "@/components/ui/Container";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/cn";
import { navItems, siteConfig } from "@/lib/siteConfig";

const sectionIds = navItems.map((item) => item.id);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const toTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled ? "border-line bg-bg/80 backdrop-blur-md" : "border-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <button
          type="button"
          onClick={toTop}
          className="group inline-flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink"
        >
          {siteConfig.name}
          <span className="h-1.5 w-1.5 rounded-full bg-accent transition-transform duration-300 group-hover:scale-150" />
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                active === item.id ? "text-ink" : "text-muted hover:text-ink",
              )}
            >
              <span className="relative">
                {item.label}
                {active === item.id && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-accent" />
                )}
              </span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
          >
            <MenuIcon size={18} />
          </button>
        </div>
      </Container>

      {open && (
        <div className="fixed inset-0 z-50 bg-bg md:hidden">
          <Container className="flex h-16 items-center justify-between">
            <span className="font-display text-lg font-semibold text-ink">{siteConfig.name}</span>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink"
            >
              <CloseIcon size={18} />
            </button>
          </Container>
          <nav className="mt-6 flex flex-col px-6 sm:px-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-line py-5 font-display text-2xl font-medium text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
