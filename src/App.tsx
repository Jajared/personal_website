import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import { ProjectItemData } from "./utils/types";
import { experienceData } from "./data/experienceData";
import { projectData } from "./data/projectData";
import "./App.css";
import CSSIcon from "./data/assets/css-icon.svg";
import HTMLIcon from "./data/assets/html-icon.svg";
import JavascriptIcon from "./data/assets/javascript-icon.svg";
import FirebaseIcon from "./data/assets/firebase-icon.svg";
import PythonIcon from "./data/assets/python-icon.svg";
import ReactIcon from "./data/assets/react-icon.svg";
import TypescriptIcon from "./data/assets/typescript-icon.svg";
import JavaIcon from "./data/assets/java-icon.svg";
import VerticalTimelineComponent from "./components/VerticalTimelineComp/VerticalTimelineComponent";
import ProfileImage from "./data/assets/profile-image.jpg";

const App: React.FC = () => {
  return (
    <main className="max-w-screen-lg mx-auto bg-white ">
      <Navbar />
      <section className="box-border flex flex-col px-10 py-10 bg-white slide-in">
        <div className="flex flex-col slide-in">
          <div className="w-20 h-20 overflow-hidden rounded-full">
            <img src={ProfileImage} alt="Profile" className="object-cover w-full h-full" />
          </div>
          <h1 className="mt-6 mb-6 text-6xl font-extrabold">Hi! I am Jared! 👋</h1>
          <p className="">I am a Computer Science student and a passionate full-stack developer based in Singapore 📍🇸🇬 </p>
        </div>
        <div className="flex flex-row items-center mt-4 space-x-6">
          <a href="https://www.instagram.com/jajabonks/">
            <img src={require("./data/assets/instagram-icon.png")} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://github.com/Jajared">
            <img src={require("./data/assets/github-icon.png")} alt="Github" className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/jared-wong-4a7a721a4/">
            <img src={require("./data/assets/linkedin-icon.png")} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="mailto: jajawong09@gmail.com">
            <img src={require("./data/assets/mail-icon.png")} alt="Email" className="w-6 h-6" />
          </a>
          <a href={require("./data/assets/jared_wong_full_portfolio.pdf")}>
            <img src={require("./data/assets/portfolio-icon.png")} alt="Email" className="w-6 h-6" />
          </a>
        </div>
        <div className="flex flex-col mt-16">
          <p className="font-bold underline">Tech stack</p>
          <div className="justify-center block mt-2 ">
            <ul className="flex flex-row mt-2 space-x-4">
              <li>
                <img src={ReactIcon} title="react-icon" alt="react-icon" className="w-8 h-8"></img>
              </li>
              <li>
                <img src={TypescriptIcon} title="typescript-icon" alt="typescript-icon" className="w-8 h-8"></img>
              </li>

              <li>
                <img src={JavascriptIcon} title="js-icon" alt="js-icon" className="w-8 h-8"></img>
              </li>
              <li>
                <img src={FirebaseIcon} title="firebase-icon" alt="firebase-icon" className="w-8 h-8"></img>
              </li>
              <li>
                <img src={CSSIcon} title="css-icon" alt="css-icon" className="w-8 h-8"></img>
              </li>
              <li>
                <img src={HTMLIcon} title="html-icon" alt="html-icon" className="w-8 h-8"></img>
              </li>
              <li>
                <img src={PythonIcon} title="python-icon" alt="python-icon" className="w-8 h-8"></img>
              </li>
              <li>
                <img src={JavaIcon} title="java-icon" alt="java-icon" className="w-8 h-8"></img>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="box-border flex flex-col px-10 py-10 bg-slate-50">
        <div className="flex items-center mb-6">
          <h1 className="pr-8 text-3xl font-bold"> 👦 About me</h1>
          <div className="mt-2 border-b-2 border-black grow"></div>
        </div>
        <div className="leading-6">
          <p>I enjoy creating applications that solve real world problems. I have experience working on various projects, from web to mobile applications. Constantly expanding my knowledge and skills, I am eager to explore new technologies and embark on greater heights. I thrive in problem solving and I am driven by the desire to create impactful applications that improve people’s lives.</p>
        </div>
      </section>
      <section className="flex flex-col px-10 py-10 ">
        <div className="flex items-center mb-6 md:mb-12">
          <h1 className="pr-8 text-3xl font-bold">Experience</h1>
          <div className="mt-2 border-b-2 border-black grow"></div>
        </div>
        <div>
          <VerticalTimelineComponent data={experienceData} />
        </div>
      </section>
      <section className="flex flex-col px-10 py-10 bg-slate-50">
        <div className="flex items-center mb-6 md:mb-12">
          <h1 className="pr-8 text-3xl font-bold">Projects</h1>
          <div className="mt-2 border-b-2 border-black grow"></div>
        </div>
        {projectData.map((item: ProjectItemData, key) => (
          <ProjectItem key={key} data={item} />
        ))}
      </section>
    </main>
  );
};

export default App;
