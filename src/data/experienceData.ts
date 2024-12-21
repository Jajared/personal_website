import { ExperienceItemData } from "../utils/types";
import GDSCLogo from "./assets/logos/gdsc-logo.jpeg";
import NUSLogo from "./assets/logos/nus-logo.jpeg";
import VisionPalLogo from "./assets/logos/visionpal-logo.png";
import HolicayLogo from "./assets/logos/holicay-logo.svg";
import PintsaiLogo from "./assets/logos/pintsai-logo.jpeg";
import { DjangoIcon, FirebaseIcon, JavascriptIcon, LangchainIcon, MongoDbIcon, NestJsIcon, NextJsIcon, OpenAIIcon, PostgresqlIcon, PrismaIcon, PythonIcon, ReactIcon, TypescriptIcon } from "../components/DevIcons";

export const experienceData: ExperienceItemData[] = [
  { company: "Pints.ai", company_icon: PintsaiLogo, role: "Software Engineer Intern", startDate: "Oct 2024", endDate: "Present", description: "Building AI solutions with compact LLMs.", techStack: [ReactIcon, TypescriptIcon, DjangoIcon, PythonIcon, LangchainIcon, OpenAIIcon] },
  { company: "Holicay", company_icon: HolicayLogo, role: "Software Engineer Intern", startDate: "May 2024", endDate: "Aug 2024", description: "Creating AI-powered tools for personalized DIY trips.", techStack: [ReactIcon, TypescriptIcon, MongoDbIcon, NextJsIcon, LangchainIcon, OpenAIIcon] },
  { company: "VisionPal", company_icon: VisionPalLogo, role: "Software Engineer Intern", startDate: "Dec 2023", endDate: "May 2024", description: "Revolutionizing eye health with mobile-first solutions.", techStack: [ReactIcon, JavascriptIcon] },
  { company: "Healthcare Informatics, NUS School of Computing", company_icon: NUSLogo, role: "Research Engineer (Full-Stack Development)", startDate: "Aug 2023", endDate: "May 2024", description: "Building apps for better health management.", techStack: [ReactIcon, JavascriptIcon, TypescriptIcon, FirebaseIcon] },
  { company: "Google Developer Student Club NUS", company_icon: GDSCLogo, role: "Full-Stack Developer", startDate: "Aug 2023", endDate: "Present", description: "Developing impactful solutions for social good.", techStack: [NextJsIcon, NestJsIcon, PostgresqlIcon, PrismaIcon] },
];
