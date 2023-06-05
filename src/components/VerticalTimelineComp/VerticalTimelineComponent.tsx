import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "./VerticalTimeline.css";
import "./VerticalTimelineElement.css";
import { ExperienceItemData } from "../../utils/types";

function VerticalTimelineComponent({ data }: { data: ExperienceItemData[] }) {
  return (
    <VerticalTimeline lineColor="black">
      {data.map((item: ExperienceItemData, key) => (
        <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={{ background: "white", color: "black" }} contentArrowStyle={{ borderRight: "7px solid  black" }} date={`${item.startDate} - ${item.endDate}`} iconStyle={{ background: "white", color: "white" }} icon={<img src={require("./scrollshop-icon.png")}></img>}>
          <h3 className="vertical-timeline-element-title">{item.role}</h3>
          <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
          <p>{item.description}</p>
          <h3>Tech Stack</h3>
          <div className="flex gap-2">
            {item.tech_stack.map((tech, index) => (
              <div key={index} className="flex items-center justify-center group">
                {tech}
              </div>
            ))}
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}

export default VerticalTimelineComponent;
