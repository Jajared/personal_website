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
            <div className="flex flex-col gap-5 text-lg leading-relaxed text-muted">
              <p>
                I'm a Computer Science graduate from the National University of Singapore (NUS),
                where I specialised in Software Engineering and Database Systems.
              </p>
              <p>
                I like tackling messy, real-world problems and turning them into products people
                actually use — the kind of work that spans a database migration in the morning and a
                UI polish pass by evening.
              </p>
              <p>
                Across a handful of internships I've shipped full-stack web apps and AI features,
                and I'm always chasing the next tool or technique worth learning.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
