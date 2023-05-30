import React from "react";
import { ExperienceItemData } from "../../utils/types";

function ExperienceItem({ data }: { data: ExperienceItemData }) {
  const { company, role, startDate, endDate, description, tech_stack } = data;
  return (
    <div className="grid grid-cols-1 gap-8 py-10 rounded-3xl md:grid-cols-3 md:gap-16">
      <div className="col-span-1 border border-black">
        <h3>{company}</h3>
        <h2 className="mt-4 font-semibold max-md:text-2xl">{role}</h2>
        <h3 className="mt-1">
          {startDate} - {endDate}
        </h3>
      </div>
      <div className="flex flex-col items-start col-span-2 border border-black">
        <p className="mb-3">Description: {description}</p>
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

export default ExperienceItem;
