import { useState } from "react";
import { ArrowUpRightIcon } from "@/components/icons/UiIcons";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillsData } from "@/data/skillsData";
import { cn } from "@/lib/cn";
import { type SkillType, SkillTypes } from "@/lib/types";

export function Skills() {
  const [selected, setSelected] = useState<SkillType>("Frontend");
  const items = skillsData.filter((skill) => skill.type === selected);

  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="skills" title="Tools I reach for" />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex flex-wrap gap-2">
            {SkillTypes.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setSelected(tab)}
                aria-pressed={selected === tab}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  selected === tab
                    ? "bg-ink text-bg"
                    : "border border-line text-muted hover:border-line-strong hover:text-ink",
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        <div
          key={selected}
          className="animate-rise mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => {
            const { Icon, link } = item;
            const className =
              "flex items-center gap-3 rounded-lg border border-line bg-surface px-4 py-3 transition-colors hover:border-line-strong";
            const content = (
              <>
                <span className="grid h-8 w-8 shrink-0 place-items-center">
                  <Icon width={24} height={24} isDarkMode />
                </span>
                <span className="text-sm font-medium text-ink">{item.name}</span>
                {link ? (
                  <ArrowUpRightIcon
                    size={15}
                    className="ml-auto shrink-0 text-muted transition-colors group-hover:text-ink"
                  />
                ) : null}
              </>
            );

            return link ? (
              <a
                key={item.name}
                href={link}
                target="_blank"
                rel="noreferrer"
                className={cn(className, "group")}
              >
                {content}
              </a>
            ) : (
              <div key={item.name} className={className}>
                {content}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
