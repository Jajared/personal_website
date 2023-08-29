import { ProjectItemData } from "../utils/types";
import MedAlert from "./assets/MedAlert.gif";
import Connectlab from "./assets/connectlab_website.png";
import paradeStateBot from "./assets/parade_state_bot.svg";
import FinanceTracker from "./assets/finance-tracker.gif";

export const projectData: ProjectItemData[] = [
  { title: "MedAlert", description: "MedAlert is a mobile app that offers a simple and intuitive solution for individuals to manage their medication schedules efficiently, allowing users to set up personalised reminders for their medication needs. Our goal is to make consuming medication a less tedious and confusing process, especially for those with chronic illnesses.", tech_stack: ["React Native", "Typescript", "Javascript", "Firebase"], projectImage: MedAlert, projectLink: "https://github.com/Jajared/MedAlert" },
  { title: "Financio", description: "Financio is a simple personal finance app that helps you manage and monitor your spending and investment activities in one app. Easily track your investment activities and daily expenses! Additionally, stay informed about your investments' performance, spending habits and get insights to make informed decisions for a secure financial future.", tech_stack: ["Flutter", "Firebase"], projectImage: FinanceTracker, projectLink: "https://github.com/Jajared/FinanceTracker" },
  { title: "Business Website for SME", description: "First ventured into web development by designing a business website. Connectlab Pte. Ltd. is a Singapore-based SME that specialises in the distribution of cabling products.", tech_stack: ["Wordpress"], projectImage: Connectlab, projectLink: "https://www.connectlab.com.sg/" },
  { title: "Telegram Bots", description: "Training Management Bot:\nDuring my time in the NS, I developed a Telegram bot to automate attendance tracking, addressing the issue of delayed physical data collection. This implementation has greatly improved data collection and eliminated the need for manual data entry, ensuring more efficient training management.\n\nModFriend:\nModfriend is a bot that helps users to find mutual free time slots within their friends' timetables through easy synchronisation with NUSMods.", tech_stack: ["Google Apps Script", "Python"], projectImage: paradeStateBot, projectLink: "" },
];
