import { projectData } from "../../data/projectData";
import { useDarkModeContext } from "../../hooks/useDarkMode";
import { ProjectItemData } from "../../utils/types";
import ProjectItem from "./ProjectItem";

const ProjectSection = () => {
  const { isDarkMode } = useDarkModeContext();
  return (
    <section className="flex flex-col transition-all duration-500">
      <div className="flex items-center mb-6">
        <h1 className="pr-8 text-2xl font-bold md:text-3xl">Projects</h1>
        <div className={`transition-all duration-500 mt-2 border-b-2 grow ${isDarkMode ? "border-white" : "border-black"}`} />
      </div>
      {projectData.map((item: ProjectItemData, key) => (
        <ProjectItem key={key} data={item} />
      ))}
    </section>
  );
};

export default ProjectSection;
