import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ExperienceItem from "./components/ExperienceItem/ExperienceItem";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import { ExperienceItemData, ProjectItemData } from "./utils/types";

const App: React.FC = () => {
  const experienceData: ExperienceItemData[] = [{ company: "Scrollshop", role: "Frontend Developer", startDate: "2021-01-01", endDate: "2021-01-01", description: "Test", tech_stack: ["React", "Next.js", "TypeScript", "TailwindCSS"] }];
  const projectData: ProjectItemData[] = [{ title: "MedAlert", description: "Test", tech_stack: ["React", "Next.js", "TypeScript", "TailwindCSS"] }];
  return (
    <main>
      <Navbar />
      <section className="flex flex-col mt-12 border border-black md:mt-24">
        <div className="flex flex-col text-6xl font-extrabold md:text-7xl">
          <span>Hi! I am</span>
          <span>Jared!</span>
        </div>
      </section>
      <section className="flex flex-col mt-12 md:mt-24">
        <h1>About me</h1>
      </section>
      <section className="flex flex-col mt-12 md:mt-24">
        <h1>Experience</h1>
        {experienceData.map((item: ExperienceItemData, key) => (
          <ExperienceItem key={key} data={item} />
        ))}
      </section>
      <section className="flex flex-col mt-12 md:mt-24">
        <h1>Projects</h1>
        {projectData.map((item: ProjectItemData, key) => (
          <ProjectItem key={key} data={item} />
        ))}
      </section>
      <section className="flex flex-col mt-12 md:mt-24">
        <h1>Connect with me!</h1>
        <div className="flex flex-row items-center mt-8 space-x-10">
          <a href="https://www.instagram.com/jajabonks/">
            <img src={require(".//assets/instagram-icon.png")} alt="Instagram" className="w-8 h-8" />
          </a>
          <a href="https://github.com/Jajared">
            <img src={require(".//assets/github-icon.png")} alt="Github" className="w-8 h-8" />
          </a>
          <a href="https://www.linkedin.com/in/jared-wong-4a7a721a4/">
            <img src={require(".//assets/linkedin-icon.png")} alt="LinkedIn" className="w-8 h-8" />
          </a>
          <a href="mailto: jajawong09@gmail.com">
            <img src={require(".//assets/mail-icon.png")} alt="Email" className="w-8 h-8" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default App;
