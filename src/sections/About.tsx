import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import ProfileImage from "@/data/assets/profile-image.jpg";

const facts: { label: string; value: string }[] = [
  { label: "Location", value: "Singapore 🇸🇬" },
  { label: "Focus", value: "Full-stack · AI/ML · Cloud" },
  { label: "Education", value: "Computer Science, NUS" },
  { label: "Currently", value: "AI Engineer, Pints.ai" },
];

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="about" title="A little about me" />
        </Reveal>

        <div className="mt-12 grid gap-12 md:grid-cols-[18rem_1fr] md:gap-16">
          <Reveal delay={80}>
            <div className="flex flex-col gap-6">
              <div className="relative w-40 overflow-hidden rounded-xl border border-line md:w-full">
                <img
                  src={ProfileImage}
                  alt="Jared Wong"
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
              <dl className="flex flex-col divide-y divide-line border-y border-line">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex items-baseline justify-between gap-4 py-3">
                    <dt className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
                      {fact.label}
                    </dt>
                    <dd className="text-right text-sm text-ink">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted">
              <p>
                I'm a Computer Science graduate from the National University of Singapore (NUS) with a 
                specialisation in Software Engineering.
              </p>
              <p>
                Mostly, I just love taking chaotic, real-world problems and turning them into clean software people actually enjoy using.
              </p>
              <p>
                Having worn plenty of hats across fast-moving startups and enterprise teams, I've built and shipped everything from full-stack platforms to cloud backends and production AI tools.
              </p>
              <p>
                Right now, I'm spending my time experimenting with agentic AI workflows and orchestration, scalable cloud infrastructure, and building things that break (and then fixing them).
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
