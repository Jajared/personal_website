import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ExperienceItem from "./components/ExperienceItem/ExperienceItem";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import { ExperienceItemData, ProjectItemData } from "./utils/types";
import { experienceData } from "./data/experienceData";
import { projectData } from "./data/projectData";

const App: React.FC = () => {
  return (
    <main>
      <Navbar />
      <section className="flex flex-col mt-4 md:mt-24">
        <div className="flex flex-col text-6xl font-extrabold md:text-7xl">
          <span>Hi! I am</span>
          <span>Jared!</span>
        </div>
      </section>
      <section className="flex flex-col mt-12 md:mt-24">
        <div className="flex items-center mb-6 md:mb-12">
          <h1 className="pr-8 text-3xl font-bold">About me</h1>
          <div className="mt-2 border-b-2 border-black grow"></div>
        </div>
        <p>This is a story about me.</p>
      </section>
      <section className="flex flex-col mt-12 md:mt-24">
        <div className="flex items-center mb-6 md:mb-12">
          <h1 className="pr-8 text-3xl font-bold">Experience</h1>
          <div className="mt-2 border-b-2 border-black grow"></div>
        </div>
        {experienceData.map((item: ExperienceItemData, key) => (
          <ExperienceItem key={key} data={item} />
        ))}
      </section>
      <section className="flex flex-col mt-12 md:mt-24">
        <div className="flex items-center mb-6 md:mb-12">
          <h1 className="pr-8 text-3xl font-bold">Projects</h1>
          <div className="mt-2 border-b-2 border-black grow"></div>
        </div>
        {projectData.map((item: ProjectItemData, key) => (
          <ProjectItem key={key} data={item} />
        ))}
      </section>
      <section className="flex flex-col items-center mt-12 md:mt-24">
        <h1>Connect with me!</h1>
        <div className="flex flex-row items-center mt-8 space-x-10">
          <a href="https://www.instagram.com/jajabonks/">
            <img src={require("./data/assets/instagram-icon.png")} alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://github.com/Jajared">
            <img src={require("./data/assets/github-icon.png")} alt="Github" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/jared-wong-4a7a721a4/">
            <img src={require("./data/assets/linkedin-icon.png")} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="mailto: jajawong09@gmail.com">
            <img src={require("./data/assets/mail-icon.png")} alt="Email" className="w-8 h-8" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default App;
