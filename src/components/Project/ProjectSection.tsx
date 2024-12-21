import { projectData } from "../../data/projectData";
import { useDarkModeContext } from "../../hooks/useDarkMode";
import { ProjectItemData } from "../../utils/types";
import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
  const { isDarkMode } = useDarkModeContext();
  return (
    <section className={`transition-all duration-500 flex flex-col px-10 py-10 ${isDarkMode ? "bg-neutral-800 text-slate-100" : "bg-white text-black"}`}>
      <div className="flex items-center mb-6 md:mb-12">
        <h1 className="pr-8 text-3xl font-bold">Projects</h1>
        <div className={`transition-all duration-500 mt-2 border-b-2 grow ${isDarkMode ? "border-white" : "border-black"}`}></div>
      </div>
      {projectData.map((item: ProjectItemData, key) => (
        <ProjectItem key={key} data={item} />
      ))}
    </section>
  );
};

export default ProjectSection;
