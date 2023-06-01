import React from "react";
import { ProjectItemData } from "../../utils/types";

function ProjectItem({ data }: { data: ProjectItemData }) {
  const { title, description, tech_stack } = data;
  return (
    <div className="grid grid-cols-1 gap-4 py-5 rounded-3xl md:grid-cols-3 md:gap-16">
      <div className="col-span-1">
        <h3 className="mt-4 font-semibold max-md:text-2xl">{title}</h3>
      </div>
      <div className="flex flex-col items-start col-span-2">
        <p className="mb-3">{description}</p>
        <div className="flex flex-col items-start mt-3">
          <h3>Tech Stack</h3>
          <div className="flex gap-2">
            {tech_stack.map((tech, index) => (
              <div key={index} className="flex items-center justify-center group">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
