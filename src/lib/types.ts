import type { FC } from "react";

/** A brand/tech logo component from `components/icons/DevIcons`. */
export type TechIcon = FC<{ width?: number; height?: number; isDarkMode?: boolean }>;

export type EmploymentType = "Full-time" | "Part-time" | "Internship" | "Contract" | "Freelance";

export interface ExperienceItemData {
  company: string;
  company_icon: string;
  role: string;
  /** Nature of the engagement, shown as a tag beside the company name. */
  employmentType: EmploymentType;
  description: string;
  startDate: string;
  endDate: string;
  techStack: TechIcon[];
  /** In-depth bullet points, revealed by the entry's collapsible panel. */
  highlights?: string[];
}

export interface ProjectItemData {
  title: string;
  description: string;
  techStack: TechIcon[];
  year: number;
  /** One or more screenshots; the card auto-cycles through them when there's more than one. */
  projectImages: string[];
  projectLink: string | null;
}

export type SkillType = "Frontend" | "Backend" | "Languages" | "Tools" | "AI/ML";

export const SkillTypes: SkillType[] = ["Frontend", "Backend", "AI/ML", "Languages", "Tools"];

export interface SkillsItemData {
  name: string;
  Icon: TechIcon;
  type: SkillType;
}
