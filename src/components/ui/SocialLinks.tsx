import type { ComponentType } from "react";
import { GithubIcon, LinkedinIcon, MailIcon, ResumeIcon } from "@/components/icons/UiIcons";
import { cn } from "@/lib/cn";
import { type SocialKey, socialLinks } from "@/lib/siteConfig";

const icons: Record<SocialKey, ComponentType<{ size?: number }>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  email: MailIcon,
  resume: ResumeIcon,
};

export function SocialLinks({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <ul className={cn("flex items-center gap-1", className)}>
      {socialLinks.map((social) => {
        const Icon = icons[social.key];
        const external = social.key !== "email";
        return (
          <li key={social.key}>
            <a
              href={social.href}
              aria-label={social.label}
              {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted transition-colors hover:bg-accent-soft hover:text-accent"
            >
              <Icon size={size} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
