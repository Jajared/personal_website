import { useId, useState } from "react";
import { ChevronDownIcon } from "@/components/icons/UiIcons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechRail } from "@/components/ui/TechRail";
import { experienceData } from "@/data/experienceData";
import { cn } from "@/lib/cn";
import type { ExperienceItemData } from "@/lib/types";

function ExperienceItem({ item, last }: { item: ExperienceItemData; last: boolean }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const highlights = item.highlights ?? [];
  const hasDetails = highlights.length > 0;

  const header = (
    <div className="flex items-center gap-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-md border border-line bg-white">
        <img src={item.company_icon} alt="" className="h-6 w-6 object-contain" loading="lazy" />
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-display text-lg font-semibold text-ink">{item.role}</h3>
        <p className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-muted">
          <span>{item.company}</span>
          <span className="h-1 w-1 shrink-0 rounded-full bg-faint" aria-hidden="true" />
          <span className="text-faint">{item.employmentType}</span>
        </p>
      </div>
      {hasDetails && (
        <ChevronDownIcon
          size={18}
          className={cn(
            "shrink-0 text-faint transition-transform duration-300 group-hover:text-ink motion-reduce:transition-none",
            open && "rotate-180",
          )}
        />
      )}
    </div>
  );

  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-5 sm:grid-cols-[9.5rem_auto_1fr] sm:gap-x-8">
      <div className="hidden pt-0.5 text-right sm:block">
        <span className="font-mono text-xs text-muted">{item.startDate}</span>
        <span className="mt-1 block font-mono text-xs text-faint">{item.endDate}</span>
      </div>

      <div className="relative flex w-6 justify-center">
        <span
          className={cn(
            "absolute left-1/2 top-2 w-px -translate-x-1/2 bg-line",
            last ? "h-0" : "h-full",
          )}
          aria-hidden="true"
        />
        <span
          className="relative z-10 mt-1 h-3 w-3 rounded-full border-2 border-accent bg-bg"
          aria-hidden="true"
        />
      </div>

      <div className={cn("min-w-0", last ? "pb-0" : "pb-12")}>
        <span className="mb-2 block font-mono text-xs text-muted sm:hidden">
          {item.startDate} — {item.endDate}
        </span>

        {hasDetails ? (
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-controls={panelId}
            className="group block w-full text-left"
          >
            {header}
          </button>
        ) : (
          header
        )}

        <p className="mt-3 text-muted">{item.description}</p>
        <TechRail items={item.techStack} className="mt-4" />

        {hasDetails && (
          <div
            id={panelId}
            className={cn(
              "grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none",
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
            )}
            inert={!open ? true : undefined}
          >
            <div className="overflow-hidden">
              <ul className="mt-4 space-y-2.5">
                {highlights.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                      aria-hidden="true"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="experience" title="Where I've worked" />
        </Reveal>

        <ol className="mt-14">
          {experienceData.map((item, index) => {
            const last = index === experienceData.length - 1;
            return (
              <li key={`${item.company}-${item.role}-${item.startDate}`}>
                <Reveal delay={index === 0 ? 0 : 40}>
                  <ExperienceItem item={item} last={last} />
                </Reveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
