import { experienceData } from "../../data/experienceData";
import { useDarkModeContext } from "../../hooks/useDarkMode";
import VerticalTimelineComponent from "./VerticalTimelineComponent";

const ExperienceSection = () => {
  const { isDarkMode } = useDarkModeContext();
  return (
    <section className={`transition-all duration-500 flex flex-col slide-in-right`}>
      <div className="flex items-center mb-6 md:mb-12">
        <div className="flex items-center mt-6 mb-6">
          <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" alt="cat-typing" width="40"></img>
          <h1 className="pl-2 text-2xl font-extrabold md:text-3xl">Experience</h1>
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
