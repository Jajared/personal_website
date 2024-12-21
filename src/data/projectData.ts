import { ProjectItemData } from "../utils/types";
import MedAlert from "./assets/gifs/MedAlert.gif";
import Connectlab from "./assets/connectlab_website.png";
import paradeStateBot from "./assets/parade_state_bot.svg";
import FinanceTracker from "./assets/gifs/finance-tracker.gif";
import HappyLungs from "./assets/gifs/HappyLungs.gif";
import PeerPrep from "./assets/gifs/PeerPrep.jpg";
import { DockerIcon, FirebaseIcon, FlutterIcon, JavascriptIcon, MongoDbIcon, NestJsIcon, NextJsIcon, PythonIcon, ReactIcon, RedisIcon, TypescriptIcon } from "../components/DevIcons";

export const projectData: ProjectItemData[] = [
  { title: "PeerPrep", year: 2024, description: "PeerPrep is a platform that connects students to practice technical interviews with their peers. It provides a seamless experience for users to schedule, conduct and review mock interviews.", techStack: [NextJsIcon, TypescriptIcon, NestJsIcon, MongoDbIcon, RedisIcon, DockerIcon], projectImage: PeerPrep, projectLink: "" },
  { title: "HappyLungs", year: 2024, description: "Encouraging users to quit smoking by providing a platform to track cigarette consumption.\n\nDeveloped in collaboration with NUS School of Computing Health Informatics Lab and local health organisations", techStack: [ReactIcon, TypescriptIcon, JavascriptIcon, FirebaseIcon], projectImage: HappyLungs, projectLink: "" },
  { title: "MedAlert", year: 2023, description: "Mobile app for individuals to manage their medication schedules efficiently through personalised reminders for their medication needs.", techStack: [ReactIcon, TypescriptIcon, JavascriptIcon, FirebaseIcon], projectImage: MedAlert, projectLink: "https://github.com/Jajared/MedAlert" },
  { title: "Financio", year: 2023, description: "Simple personal finance app to manage and monitor spending and investment activities in one app.", techStack: [FlutterIcon, FirebaseIcon], projectImage: FinanceTracker, projectLink: "https://github.com/Jajared/FinanceTracker" },
  { title: "Business Website for SME", year: 2023, description: "First ventured into web development by designing a business website. Connectlab Pte. Ltd. is a Singapore-based SME that specialises in the distribution of cabling products.", techStack: [], projectImage: Connectlab, projectLink: "https://www.connectlab.com.sg/" },
  { title: "Telegram Bots", year: 2022, description: "Training Management Bot:\nAutomating attendance tracking for efficient training data management.\n\nModFriend:\nFind mutual free time slots within your friends' timetables.", techStack: [PythonIcon], projectImage: paradeStateBot, projectLink: "" },
];
