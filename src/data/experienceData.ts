import { ExperienceItemData } from "../utils/types";
import ScrollshopLogo from "./assets/scrollshop-icon.png";
import MindefLogo from "./assets/mindef-logo.png";

export const experienceData: ExperienceItemData[] = [
  { company: "Scrollshop", company_icon: ScrollshopLogo, role: "Co-Founder, Full-Stack Developer", startDate: "Dec 2022", endDate: "Present", description: "A start-up aimed to help business incorporate technology into their business through creating/improving the User Interface (UI) of their catalogues", tech_stack: ["React", "Typescript", "CSS"] },
  { company: "School of Logistics", company_icon: MindefLogo, role: "Training Instructor", startDate: "Dec 2020", endDate: "May 2022", description: "Instructor to train and develop future Logistics Officers in order to sustain military operations. My responsibilites include planning and executing high-level and high-risk activities, managing the wellbeing and quality of trainees and mentoring trainees by providing them with operational advice and support", tech_stack: [] },
];
