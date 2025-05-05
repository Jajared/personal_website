import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "./VerticalTimeline.css";
import "./VerticalTimelineElement.css";
import { ExperienceItemData } from "../../utils/types";
import { useDarkModeContext } from "../../hooks/useDarkMode";

interface IExperienceItemProps {
  data: ExperienceItemData[];
}

function VerticalTimelineComponent({ data }: IExperienceItemProps) {
  const { isDarkMode } = useDarkModeContext();
  return (
    <VerticalTimeline lineColor={`${isDarkMode ? "white" : "black"}`}>
      {data.map((item: ExperienceItemData, key) => (
        <VerticalTimelineElement className="vertical-timeline-element--work" contentStyle={isDarkMode ? { background: "#282828", color: "white" } : { background: "white", color: "black" }} contentArrowStyle={isDarkMode ? { borderRight: "7px solid #393939" } : { borderRight: "7px solid  black" }} date={`${item.startDate} - ${item.endDate}`} iconStyle={{ background: "white", color: "white" }} icon={<img src={item.company_icon} alt={item.company}></img>}>
          <div className={`transition-all duration-500 ${isDarkMode ? "text-slate-100" : "text-black"}`}>
            <h3 className="vertical-timeline-element-title">{item.role}</h3>
            <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
            <p>{item.description}</p>
            <div className="my-4">
              {item.techStack.length > 0 ? <div className={`inline-block px-3 py-1 mb-4 text-xs md:text-sm font-semibold bg-gray-100 rounded-full ${isDarkMode ? "bg-neutral-900" : "bg-gray-100 "}`}>Tech Stack</div> : <div></div>}
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((Icon, index) => (
                  <div key={index} className="group hover:animate-bounce">
                    <Icon isDarkMode={isDarkMode} />
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
