import { ExperienceItemData } from "../utils/types";
import ScrollshopLogo from "./assets/logos/scrollshop-logo.png";
import MindefLogo from "./assets/logos/mindef-logo.png";
import GDSCLogo from "./assets/logos/gdsc-logo.jpeg";
import NUSLogo from "./assets/logos/nus-logo.jpeg";
import VisionPalLogo from "./assets/logos/visionpal-logo.png";
import HolicayLogo from "./assets/logos/holicay-logo.svg";

export const experienceData: ExperienceItemData[] = [
  { company: "Holicay", company_icon: HolicayLogo, role: "Software Engineer Intern", startDate: "May 2024", endDate: "Present", description: "We help users to build DIY Trips using templates made by other travelers and AI", tech_stack: ["React", "Typescript", "NextJS"] },
  { company: "VisionPal", company_icon: VisionPalLogo, role: "Software Engineer Intern", startDate: "Dec 2023", endDate: "May 2024", description: "VisionPal aims to transform the eye healthcare scene by making preventative eye care, eye health management and treatments conveniently accessible for users. VisionPal is a one of a kind company within the optometry and eye health industry which provides eye health and prescriptive screenings on the go.", tech_stack: ["React Native", "Javascript"] },
  { company: "Healthcare Informatics, NUS School of Computing", company_icon: NUSLogo, role: "Research Engineer (Full-Stack Development)", startDate: "Aug 2023", endDate: "May 2024", description: "Working alongside the local Healthcare sector, we aim to build applications designed towards more effective management of individual health.", tech_stack: ["React", "Javascript", "Typescript", "Firebase"] },
  { company: "Google Developer Student Club NUS", company_icon: GDSCLogo, role: "Full-Stack Developer", startDate: "Aug 2023", endDate: "Present", description: "Pushing the mission of #TechForGood, GDSC NUS aims to make a difference in society by developing software solutions for Non-Profit Organisations.", tech_stack: ["NextJS", "NestJS", "PostgreSQL", "Prisma"] },
  { company: "Scrollshop", company_icon: ScrollshopLogo, role: "Co-Founder, Full-Stack Developer", startDate: "Dec 2022", endDate: "Present", description: "Scrollshop is a start up with the mission to empower businesses by integrating technology into their operations through an intuitive platform for customising and designing interactive catalogs.", tech_stack: ["React", "Typescript", "CSS"] },
  // { company: "School of Logistics", company_icon: MindefLogo, role: "Training Instructor", startDate: "Dec 2020", endDate: "May 2022", description: "Instructor to train and develop future Logistics Officers in order to sustain military operations. My responsibilites include planning and executing high-level and high-risk activities, managing the wellbeing and quality of trainees and mentoring trainees by providing them with operational advice and support", tech_stack: [] },
];
