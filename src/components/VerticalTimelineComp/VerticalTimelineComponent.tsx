import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "./VerticalTimeline.css";
import "./VerticalTimelineElement.css";
import { ExperienceItemData } from "../../utils/types";
import ScrollshopIcon from "../../data/assets/scrollshop-icon.png";
import CSSIcon from "../../data/assets/css-icon.svg";
import HTMLIcon from "../../data/assets/html-icon.svg";
import JavascriptIcon from "../../data/assets/javascript-icon.svg";
import ReactIcon from "../../data/assets/react-icon.svg";
import FirebaseIcon from "../../data/assets/firebase-icon.svg";
import TypescriptIcon from "../../data/assets/typescript-icon.svg";
import PythonIcon from "../../data/assets/python-icon.svg";

function VerticalTimelineComponent({ data }: { data: ExperienceItemData[] }) {
  function getIcon(tech: string) {
    if (tech === "React" || tech === "React Native") {
      return ReactIcon;
    } else if (tech === "CSS") {
      return CSSIcon;
    } else if (tech === "HTML") {
      return HTMLIcon;
    } else if (tech === "Javascript") {
      return JavascriptIcon;
    } else if (tech === "Firebase") {
      return FirebaseIcon;
    } else if (tech === "Typescript") {
      return TypescriptIcon;
    } else if (tech === "Python") {
      return PythonIcon;
    }
  }
  return (
    <VerticalTimeline lineColor="black">
      {data.map((item: ExperienceItemData, key) => (
        <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "black" }} contentArrowStyle={{ borderRight: "7px solid  black" }} date={`${item.startDate} - ${item.endDate}`} iconStyle={{ background: "white", color: "white" }} icon={<img src={ScrollshopIcon} alt={item.company}></img>}>
          <h3 className="vertical-timeline-element-title">{item.role}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
          <p>{item.description}</p>
          <div className="my-4">
            <h3>Tech Stack</h3>
            <div className="flex gap-2">
              {item.tech_stack.map((tech, index) => (
                <div key={index} className="flex items-center justify-center group">
                  <img src={getIcon(tech)} alt={tech} className="w-8 h-8 group-hover:animate-bounce" />
                </div>
              ))}
            </div>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default VerticalTimelineComponent;
