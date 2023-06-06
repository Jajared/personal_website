import { ProjectItemData } from "../utils/types";
import MedAlert from "./assets/MedAlert.gif";
import Connectlab from "./assets/connectlab_website.png";
import paradeStateBot from "./assets/parade_state_bot.svg";

export const projectData: ProjectItemData[] = [
  { title: "MedAlert", description: "MedAlert is a mobile app that offers a simple and intuitive solution for individuals to manage their medication schedules efficiently, allowing users to set up personalised reminders for their medication needs. Our goal is to make consuming medication a less tedious and confusing process, especially for those with chronic illnesses.", tech_stack: ["React Native", "Typescript", "Firebase"], projectImage: MedAlert, projectLink: "https://github.com/Jajared/MedAlert" },
  { title: "Connectlab Business Website", description: "First ventured into web development by designing a business website. Connectlab Pte. Ltd. is a Singapore-based SME that specialises in the distribution of cabling products.", tech_stack: ["Wordpress"], projectImage: Connectlab, projectLink: "https://www.connectlab.com.sg/" },
  { title: "Telegram Bot", description: "First ventured into web development by designing a business website. Connectlab Pte. Ltd. is a Singapore-based SME that specialises in the distribution of cabling products.", tech_stack: ["Google Apps Script"], projectImage: paradeStateBot, projectLink: "" },
];
