import React from "react";
import { ProjectItemData } from "../../utils/types";
import CSSIcon from "../../data/assets/css-icon.svg";
import HTMLIcon from "../../data/assets/html-icon.svg";
import JavascriptIcon from "../../data/assets/javascript-icon.svg";
import ReactIcon from "../../data/assets/react-icon.svg";
import FirebaseIcon from "../../data/assets/firebase-icon.svg";
import TypescriptIcon from "../../data/assets/typescript-icon.svg";
import PythonIcon from "../../data/assets/python-icon.svg";

function ProjectItem({ data }: { data: ProjectItemData }) {
  const { title, description, tech_stack } = data;
  function getIcon(tech: string) {
    if (tech === "React" || tech === "React Native") {
      return ReactIcon;
    } else if (tech === "CSS") {
      return CSSIcon;
    } else if (tech === "HTML") {
      return HTMLIcon;
    } else if (tech === "Javascript") {
      return JavascriptIcon;
    } else if (tech === "Firebase") {
      return FirebaseIcon;
    } else if (tech === "Typescript") {
      return TypescriptIcon;
    } else if (tech === "Python") {
      return PythonIcon;
    }
  }
  return (
    <div className="grid grid-cols-1 p-6 my-8 mb-20 border shadow-lg bg-slate-50 gap-x-6 gap-y-10 shadow-slate-200 rounded-2xl">
      <div className="col-span-1">
        <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      </div>
      <div className="flex flex-col items-start col-span-2">
        <p className="mb-3">{description}</p>
        <div className="flex flex-col items-start mt-3">
          <h3>Tech Stack</h3>
          <div className="flex gap-2">
            {tech_stack.map((tech, index) => (
              <div key={index} className="flex items-center justify-center group">
                <img src={getIcon(tech)} alt={tech} className="w-8 h-8 group-hover:animate-bounce" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
