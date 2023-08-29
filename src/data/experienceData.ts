import { ExperienceItemData } from "../utils/types";
import ScrollshopLogo from "./assets/scrollshop-icon.png";
import MindefLogo from "./assets/mindef-logo.png";
import GDSCLogo from "./assets/gdsc-logo.jpeg";

export const experienceData: ExperienceItemData[] = [
  { company: "Google Developer Student Club NUS", company_icon: GDSCLogo, role: "Full-Stack Developer", startDate: "Aug 2023", endDate: "Present", description: "Pushing the mission of #TechForGood, GDSC NUS aims to make a difference in society by developing software solutions for Non-Profit Organisations.", tech_stack: ["NextJS", "NestJS", "PostgreSQL"] },
  { company: "Scrollshop", company_icon: ScrollshopLogo, role: "Co-Founder, Full-Stack Developer", startDate: "Dec 2022", endDate: "Present", description: "Scrollshop is a start-up aimed at helping businesses incorporate technology into their operations through providing a user-friendly platform for them to customise and design interactive catalogues.", tech_stack: ["React", "Typescript", "CSS"] },
  { company: "School of Logistics", company_icon: MindefLogo, role: "Training Instructor", startDate: "Dec 2020", endDate: "May 2022", description: "Instructor to train and develop future Logistics Officers in order to sustain military operations. My responsibilites include planning and executing high-level and high-risk activities, managing the wellbeing and quality of trainees and mentoring trainees by providing them with operational advice and support", tech_stack: [] },
];
