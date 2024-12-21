import { ProjectItemData } from "../utils/types";
import MedAlert from "./assets/gifs/MedAlert.gif";
import Connectlab from "./assets/connectlab_website.png";
import paradeStateBot from "./assets/parade_state_bot.svg";
import FinanceTracker from "./assets/gifs/finance-tracker.gif";
import HappyLungs from "./assets/gifs/HappyLungs.gif";
import { FirebaseIcon, JavascriptIcon, PythonIcon, ReactIcon, TypescriptIcon } from "../components/DevIcons";

export const projectData: ProjectItemData[] = [
  { title: "HappyLungs", year: 2024, description: "Encouraging users to quit smoking by providing a platform to track cigarette consumption.\n\nKey features:\n 1. AI-trained chatbot for smoking-related queries\n2. Nominee system for nominees to track user consumption\n3. Descriptive analysis of cigarettes consumption.\n\nDeveloped in collaboration with NUS School of Computing Health Informatics Lab and local health organisations", techStack: [ReactIcon, TypescriptIcon, JavascriptIcon, FirebaseIcon], projectImage: HappyLungs, projectLink: "" },
  { title: "MedAlert", year: 2023, description: "Mobile app for individuals to manage their medication schedules efficiently through personalised reminders for their medication needs. Our goal is to make consuming medication a less tedious and confusing process, especially for those with chronic illnesses.", techStack: [ReactIcon, TypescriptIcon, JavascriptIcon, FirebaseIcon], projectImage: MedAlert, projectLink: "https://github.com/Jajared/MedAlert" },
  { title: "Financio", year: 2023, description: "Simple personal finance app to manage and monitor spending and investment activities in one app. Easily track your investment activities and daily expenses! Additionally, stay informed about your investments' performance, spending habits and get insights to make informed decisions for a secure financial future.", techStack: [FirebaseIcon], projectImage: FinanceTracker, projectLink: "https://github.com/Jajared/FinanceTracker" },
  { title: "Business Website for SME", year: 2023, description: "First ventured into web development by designing a business website. Connectlab Pte. Ltd. is a Singapore-based SME that specialises in the distribution of cabling products.", techStack: [], projectImage: Connectlab, projectLink: "https://www.connectlab.com.sg/" },
  { title: "Telegram Bots", year: 2022, description: "Training Management Bot:\nDuring my time in the NS, I developed a Telegram bot to automate attendance tracking, addressing the issue of delayed physical data collection. This implementation has greatly improved data collection and eliminated the need for manual data entry, ensuring more efficient training management.\n\nModFriend:\nModfriend is a bot that helps users to find mutual free time slots within their friends' timetables through easy synchronisation with NUSMods.", techStack: [PythonIcon], projectImage: paradeStateBot, projectLink: "" },
];
