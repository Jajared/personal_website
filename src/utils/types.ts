export interface ExperienceItemData {
  company: string;
  company_icon: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  techStack: React.FC<{ width?: number; height?: number; isDarkMode?: boolean }>[];
}

export interface ProjectItemData {
  title: string;
  description: string;
  techStack: React.FC<{ width?: number; height?: number; isDarkMode?: boolean }>[];
  year: number;
  projectImage: string;
  projectLink: string;
}

export type SkillType = "Frontend" | "Backend" | "Languages" | "Tools" | "AI/ML";

export const SkillTypes: SkillType[] = ["Frontend", "Backend", "AI/ML", "Languages", "Tools"];

export interface SkillsItemData {
  name: string;
  Icon: React.FC<{ width?: number; height?: number; isDarkMode?: boolean }>;
  type: SkillType;
}
