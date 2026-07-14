import { ContactForm } from "@/components/ui/ContactForm";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { siteConfig } from "@/lib/siteConfig";

export function Contact() {
  return (
    <section id="contact" className="border-t border-line py-16 sm:py-24">
      <Container>
        {/*
          Mobile stacks in DOM order: heading → form → socials.
          At lg the explicit grid placement puts heading + socials in the left
          column and the form on the right.
        */}
        <div className="flex flex-col gap-12 lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-x-16 lg:gap-y-10">
          <Reveal className="flex flex-col lg:col-start-1 lg:row-start-1">
            <div className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
                contact
              </span>
            </div>

            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.25rem,5.5vw,3.75rem)] font-semibold leading-[1.03] tracking-tight text-ink">
              Let's build something
              <br />
              worth shipping.
            </h2>

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Have a project, a role, or a half-formed idea? Send it over — I read every message and
              usually reply within a day or two.
            </p>
          </Reveal>

          <Reveal delay={80} className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="lg:col-start-1 lg:row-start-2">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <SocialLinks />
              <span className="font-mono text-xs text-faint">Based in {siteConfig.location}</span>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
