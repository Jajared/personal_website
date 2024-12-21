export interface ExperienceItemData {
  company: string;
  company_icon: string;
  role: string;
  description: string;
  startDate: string;
  endDate: string;
  techStack: React.FC[];
}

export interface ProjectItemData {
  title: string;
  description: string;
  techStack: React.FC[];
  year: number;
  projectImage: string;
  projectLink: string;
}

export interface TechStackItemData {
  name: string;
  Icon: React.FC;
}
