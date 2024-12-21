import { experienceData } from "../../data/experienceData";
import { useDarkModeContext } from "../../hooks/useDarkMode";
import VerticalTimelineComponent from "./VerticalTimelineComponent";

const ExperienceSection = () => {
  const { isDarkMode } = useDarkModeContext();
  return (
    <section className={`transition-all duration-500 flex flex-col px-10 py-10 ${isDarkMode ? "bg-neutral-900 text-slate-100" : "bg-white text-black"}`}>
      <div className="flex items-center mb-6 md:mb-12">
        <div className="flex items-center mt-6 mb-6">
          <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" alt="cat-typing" width="40"></img>
          <h1 className="pl-2 text-3xl font-extrabold">Experience</h1>
        </div>
        <div className={`transition-all duration-500 mt-2 ml-6 border-b-2 grow ${isDarkMode ? "border-white" : "border-black"}`}></div>
      </div>
      <div>
        <VerticalTimelineComponent data={experienceData} />
      </div>
    </section>
  );
};

export default ExperienceSection;
