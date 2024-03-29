import React from "react";
import { ProjectItemData } from "../../utils/types";
import CSSIcon from "../../data/assets/icons/css-icon.svg";
import HTMLIcon from "../../data/assets/icons/html-icon.svg";
import JavascriptIcon from "../../data/assets/icons/javascript-icon.svg";
import ReactIcon from "../../data/assets/icons/react-icon.svg";
import FirebaseIcon from "../../data/assets/icons/firebase-icon.svg";
import TypescriptIcon from "../../data/assets/icons/typescript-icon.svg";
import PythonIcon from "../../data/assets/icons/python-icon.svg";
import GithubIcon from "../../data/assets/icons/github-icon.png";
import WordpressIcon from "../../data/assets/icons/wordpress-icon.svg";
import GASIcon from "../../data/assets/icons/google-apps-script-icon.png";
import Flutter from "../../data/assets/icons/flutter-icon.svg";

function ProjectItem({ data, isDarkMode }: { data: ProjectItemData; isDarkMode: boolean }) {
  const { title, description, tech_stack, projectImage, projectLink } = data;
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
    } else if (tech === "Wordpress") {
      return WordpressIcon;
    } else if (tech === "Google Apps Script") {
      return GASIcon;
    } else if (tech === "Flutter") {
      return Flutter;
    }
  }
  return (
    <div className={`p-2 my-8 mb-20 shadow-lg bg-white rounded-2xl slide-in text-black xl:mx-32`}>
      <div className="flex justify-end">
        <a href={projectLink} target="_blank" rel="noreferrer">
          <img src={GithubIcon} alt="Github" className="w-6 h-6" />
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
        <div className="flex items-center justify-center">
          <img src={projectImage} alt="MedAlert" className="w-full h-full " />
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
              {tech_stack.map((tech, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img src={getIcon(tech)} alt={tech} className="w-8 h-8 group-hover:animate-bounce" />
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
