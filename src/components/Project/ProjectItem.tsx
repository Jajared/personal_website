import React from "react";
import { ProjectItemData } from "../../utils/types";
import { GithubIcon } from "../DevIcons";
import { useDarkModeContext } from "../../hooks/useDarkMode";

interface IProjectItemProps {
  data: ProjectItemData;
}

function ProjectItem({ data }: IProjectItemProps) {
  const { isDarkMode } = useDarkModeContext();
  const { title, description, techStack, projectImage, projectLink } = data;

  return (
    <div className="p-2 my-8 mb-10 shadow-lg bg-white rounded-2xl slide-in text-black min-h-[600px] md:min-h-[500px] flex relative">
      {projectLink && (
        <div className="absolute top-3 right-3">
          <a href={projectLink} target="_blank" rel="noreferrer">
            <GithubIcon />
          </a>
        </div>
      )}
      <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <div className="flex items-center justify-center">
          <img src={projectImage} alt={title} className="object-contain w-full h-auto max-w-sm sm:max-w-xs md:max-w-sm lg:max-w-md" />
        </div>
        <div className="flex flex-col justify-center p-4">
          <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
          <p className="mb-6">
            {description.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <div className="flex items-center">
            <div className="flex gap-2">
              {techStack.map((Icon, index) => (
                <div key={index} className="group hover:animate-bounce">
                  <Icon isDarkMode={isDarkMode} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
