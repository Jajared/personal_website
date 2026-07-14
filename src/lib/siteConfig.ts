import Portfolio from "@/data/assets/portfolio-jared-wong.pdf";

/**
 * Web3Forms access key for the contact form. When set (via VITE_WEB3FORMS_KEY —
 * see .env.example) the form submits in-page; when absent it falls back to the
 * visitor's mail client. Kept out of source so it can be injected per-environment.
 */
const contactFormKey: string | undefined = import.meta.env.VITE_WEB3FORMS_KEY;

export const siteConfig = {
  name: "Jared Wong",
  initials: "JW",
  role: "AI Engineer",
  location: "Singapore 🇸🇬",
  timezone: "Asia/Singapore",
  email: "jajawong09@gmail.com",
  resume: Portfolio,
  contactFormKey,
} as const;

export interface NavItem {
  id: string;
  label: string;
}

/** Sections that appear in the nav and drive the scroll-spy. */
export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export type SocialKey = "github" | "linkedin" | "instagram" | "email" | "resume";

export interface SocialLink {
  key: SocialKey;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  { key: "github", label: "GitHub", href: "https://github.com/Jajared" },
  { key: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/jajabonks/" },
  { key: "instagram", label: "Instagram", href: "https://www.instagram.com/jajabonks/" },
  { key: "email", label: "Email", href: `mailto:${siteConfig.email}` },
  { key: "resume", label: "Résumé", href: siteConfig.resume },
];
