import type { FC } from "react";

/** A brand/tech logo component from `components/icons/DevIcons`. */
export type TechIcon = FC<{ width?: number; height?: number; isDarkMode?: boolean }>;

export interface ExperienceItemData {
  company: string;
  company_icon: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  techStack: TechIcon[];
}

export interface ProjectItemData {
  title: string;
  description: string;
  techStack: TechIcon[];
  year: number;
  projectImage: string;
  projectLink: string | null;
}

export type SkillType = "Frontend" | "Backend" | "Languages" | "Tools" | "AI/ML";

export const SkillTypes: SkillType[] = ["Frontend", "Backend", "AI/ML", "Languages", "Tools"];

export interface SkillsItemData {
  name: string;
  Icon: TechIcon;
  type: SkillType;
}
