import { ArrowUpRightIcon, GithubIcon } from "@/components/icons/UiIcons";
import { Container } from "@/components/ui/Container";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechRail } from "@/components/ui/TechRail";
import { projectData } from "@/data/projectData";
import type { ProjectItemData } from "@/lib/types";

function ProjectLink({ href }: { href: string }) {
  const isGithub = href.includes("github.com");
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="link-underline inline-flex items-center gap-1.5 font-mono text-xs text-muted transition-colors hover:text-ink"
    >
      {isGithub ? <GithubIcon size={15} /> : <ArrowUpRightIcon size={15} />}
      {isGithub ? "Code" : "Visit"}
    </a>
  );
}

function ProjectCard({ project }: { project: ProjectItemData }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift">
      <ImageCarousel images={project.projectImages} alt={project.title} />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl font-semibold text-ink">{project.title}</h3>
          <span className="font-mono text-xs text-faint">{project.year}</span>
        </div>
        <p className="mt-3 flex-1 whitespace-pre-line text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mt-6 flex items-end justify-between gap-4">
          <TechRail items={project.techStack} size={18} />
          {project.projectLink && <ProjectLink href={project.projectLink} />}
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="projects" title="Things I've built" />
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projectData.map((project, index) => (
            <Reveal key={project.title} delay={(index % 2) * 80} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
