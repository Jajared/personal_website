import {
  DockerIcon,
  FirebaseIcon,
  FlutterIcon,
  JavascriptIcon,
  MongoDbIcon,
  NestJsIcon,
  NextJsIcon,
  PythonIcon,
  ReactIcon,
  RedisIcon,
  TypescriptIcon,
} from "@/components/icons/DevIcons";
import type { ProjectItemData } from "@/lib/types";
import Connectlab from "./assets/connectlab_website.png";
import Finance1 from "./assets/images/Finance_1.png";
import Finance2 from "./assets/images/Finance_2.png";
import Finance3 from "./assets/images/Finance_3.png";
import Finance4 from "./assets/images/Finance_4.png";
import HappyLungs1 from "./assets/images/HappyLungs_1.png";
import HappyLungs2 from "./assets/images/HappyLungs_2.png";
import HappyLungs3 from "./assets/images/HappyLungs_3.png";
import HappyLungs4 from "./assets/images/HappyLungs_4.png";
import HappyLungs5 from "./assets/images/HappyLungs_5.png";
import MedAlert1 from "./assets/images/MedAlert_1.png";
import MedAlert2 from "./assets/images/MedAlert_2.png";
import MedAlert3 from "./assets/images/MedAlert_3.png";
import MedAlert4 from "./assets/images/MedAlert_4.png";
import MedAlert5 from "./assets/images/MedAlert_5.png";
import MedAlert6 from "./assets/images/MedAlert_6.png";
import PeerPrep from "./assets/images/PeerPrep.jpg";
import paradeStateBot from "./assets/images/ParadeStateBot.png";

export const projectData: ProjectItemData[] = [
  {
    title: "PeerPrep",
    year: 2024,
    description:
      "PeerPrep is a platform that connects students to practice technical interviews with their peers. It provides a seamless experience for users to schedule, conduct and review mock interviews.",
    techStack: [NextJsIcon, TypescriptIcon, NestJsIcon, MongoDbIcon, RedisIcon, DockerIcon],
    projectImages: [PeerPrep],
    projectLink: null,
  },
  {
    title: "HappyLungs",
    year: 2024,
    description:
      "Encouraging users to quit smoking by providing a platform to track cigarette consumption.\n\nDeveloped in collaboration with NUS School of Computing Health Informatics Lab and local health organisations",
    techStack: [ReactIcon, TypescriptIcon, JavascriptIcon, FirebaseIcon],
    projectImages: [HappyLungs1, HappyLungs2, HappyLungs3, HappyLungs4, HappyLungs5],
    projectLink: null,
  },
  {
    title: "MedAlert",
    year: 2023,
    description:
      "Mobile app for individuals to manage their medication schedules efficiently through personalised reminders for their medication needs.",
    techStack: [ReactIcon, TypescriptIcon, JavascriptIcon, FirebaseIcon],
    projectImages: [MedAlert1, MedAlert2, MedAlert3, MedAlert4, MedAlert5, MedAlert6],
    projectLink: "https://github.com/Jajared/MedAlert",
  },
  {
    title: "Financio",
    year: 2023,
    description:
      "Simple personal finance app to manage and monitor spending and investment activities in one app.",
    techStack: [FlutterIcon, FirebaseIcon],
    projectImages: [Finance1, Finance2, Finance3, Finance4],
    projectLink: "https://github.com/Jajared/FinanceTracker",
  },
  {
    title: "Business Website for SME",
    year: 2023,
    description:
      "First ventured into web development by designing a business website. Connectlab Pte. Ltd. is a Singapore-based SME that specialises in the distribution of cabling products.",
    techStack: [],
    projectImages: [Connectlab],
    projectLink: "https://www.connectlab.com.sg/",
  },
  {
    title: "Telegram Bots",
    year: 2022,
    description:
      "Training Management Bot:\nAutomating attendance tracking for efficient training data management.\n\nModFriend:\nFind mutual free time slots within your friends' timetables.",
    techStack: [PythonIcon],
    projectImages: [paradeStateBot],
    projectLink: null,
  },
];
