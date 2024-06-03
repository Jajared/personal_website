import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "./VerticalTimeline.css";
import "./VerticalTimelineElement.css";
import { ExperienceItemData } from "../../utils/types";
import CSSIcon from "../../data/assets/icons/css-icon.svg";
import HTMLIcon from "../../data/assets/icons/html-icon.svg";
import JavascriptIcon from "../../data/assets/icons/javascript-icon.svg";
import ReactIcon from "../../data/assets/icons/react-icon.svg";
import FirebaseIcon from "../../data/assets/icons/firebase-icon.svg";
import TypescriptIcon from "../../data/assets/icons/typescript-icon.svg";
import PythonIcon from "../../data/assets/icons/python-icon.svg";
import NestJSIcon from "../../data/assets/icons/nestjs-icon.png";
import NextJSIcon from "../../data/assets/icons/nextjs-icon.svg";
import PostgresqlIcon from "../../data/assets/icons/postgresql-icon.png";
import PrismaIcon from "../../data/assets/icons/prisma-icon.png";

function VerticalTimelineComponent({ data, isDarkMode }: { data: ExperienceItemData[]; isDarkMode: boolean }) {
  function getIcon(tech: string) {
    switch (tech) {
      case "React":
        return ReactIcon;
      case "React Native":
        return ReactIcon;
      case "CSS":
        return CSSIcon;
      case "HTML":
        return HTMLIcon;
      case "Javascript":
        return JavascriptIcon;
      case "Firebase":
        return FirebaseIcon;
      case "Typescript":
        return TypescriptIcon;
      case "Python":
        return PythonIcon;
      case "NestJS":
        return NestJSIcon;
      case "NextJS":
        return NextJSIcon;
      case "PostgreSQL":
        return PostgresqlIcon;
      case "Prisma":
        return PrismaIcon;
    }
  }
  return (
    <VerticalTimeline lineColor={`${isDarkMode ? "white" : "black"}`}>
      {data.map((item: ExperienceItemData, key) => (
        <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={isDarkMode ? { background: "#282828", color: "white" } : { background: "white", color: "black" }} contentArrowStyle={isDarkMode ? { borderRight: "7px solid #393939" } : { borderRight: "7px solid  black" }} date={`${item.startDate} - ${item.endDate}`} iconStyle={{ background: "white", color: "white" }} icon={<img src={item.company_icon} alt={item.company}></img>}>
          <div className={`transition-all duration-500 ${isDarkMode ? "text-slate-100" : "text-black"}`}>
            <h3 className="vertical-timeline-element-title">{item.role}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
            <p>{item.description}</p>
            <div className="my-4">
              {item.tech_stack.length > 0 ? <div className={`inline-block px-2 py-1 mb-4 text-sm font-semibold bg-gray-100 rounded-full ${isDarkMode ? "bg-neutral-900" : "bg-gray-100 "}`}>Tech Stack</div> : <div></div>}
              <div className="flex gap-2">
                {item.tech_stack.map((tech, index) => (
                  <div key={index} className="flex items-center justify-center group">
                    <img src={getIcon(tech)} alt={tech} className="w-8 h-8 group-hover:animate-bounce" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default VerticalTimelineComponent;
