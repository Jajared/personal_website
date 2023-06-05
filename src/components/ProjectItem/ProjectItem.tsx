import React from "react";
import { ProjectItemData } from "../../utils/types";

function ProjectItem({ data }: { data: ProjectItemData }) {
  const { title, description, tech_stack } = data;
  return (
    <div className="grid max-w-2xl grid-cols-1 p-6 my-8 mb-20 border shadow-lg bg-slate-50 gap-x-6 gap-y-10 shadow-slate-200 rounded-2xl">
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
