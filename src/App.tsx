import React from "react";
import "./App.css";
import ProjectItem from "./components/ProjectItem/ProjectItem";
import { ProjectItemData } from "./utils/types";
import { experienceData } from "./data/experienceData";
import { projectData } from "./data/projectData";
import "./App.css";
import { useState } from "react";
import CSSIcon from "./data/assets/icons/css-icon.svg";
import HTMLIcon from "./data/assets/icons/html-icon.svg";
import JavascriptIcon from "./data/assets/icons/javascript-icon.svg";
import FirebaseIcon from "./data/assets/icons/firebase-icon.svg";
import PythonIcon from "./data/assets/icons/python-icon.svg";
import ReactIcon from "./data/assets/icons/react-icon.svg";
import TypescriptIcon from "./data/assets/icons/typescript-icon.svg";
import FlutterIcon from "./data/assets/icons/flutter-icon.svg";
import JavaIcon from "./data/assets/icons/java-icon.svg";
import PostgresqlIcon from "./data/assets/postgresql-icon.png";
import NextJSIcon from "./data/assets/icons/nextjs-icon.svg";
import NestJSIcon from "./data/assets/icons/nestjs-icon.png";
import VerticalTimelineComponent from "./components/VerticalTimelineComp/VerticalTimelineComponent";
import ProfileImage from "./data/assets/profile-image.jpg";

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className={`transition-all duration-500 mx-auto overflow-x-hidden ${darkMode ? "bg-neutral-900 text-slate-100" : "bg-white text-black"}`}>
      <div className="flex justify-end px-5 py-5 mb-4">
        <button onClick={handleToggleMode} className={`rounded-full w-10 h-10 ${darkMode ? "bg-white" : "bg-neutral-900"} text-center leading-10`}>
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
      <section className={`transition-all duration-500 box-border flex flex-col px-10 py-10 slide-in ${darkMode ? "bg-neutral-900 text-slate-100" : "bg-white text-black"}`}>
        <div className="flex flex-col slide-in">
          <div className="w-40 h-40 overflow-hidden rounded-full">
            <img src={ProfileImage} alt="Profile" className="object-cover w-full h-full" />
          </div>
          <h1 className="mt-6 mb-6 text-6xl font-extrabold">Hi! I am Jared! 👋</h1>
          <p className="">I am a Computer Science student and a passionate full-stack developer based in Singapore 📍🇸🇬 </p>
        </div>
        <div className="flex flex-row items-center mt-4 space-x-6">
          <a href="https://www.instagram.com/jajabonks/" className="bounce-effect">
            <img src={require("./data/assets/icons/instagram-icon.png")} alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://github.com/Jajared" className="bounce-effect">
            <img src={require("./data/assets/icons/github-icon.png")} alt="Github" className="w-6 h-6" style={darkMode ? { filter: "invert(1) saturate(100%) brightness(300%)" } : {}} />
          </a>
          <a href="https://www.linkedin.com/in/jared-wong-4a7a721a4/" className="bounce-effect">
            <img src={require("./data/assets/icons/linkedin-icon.png")} alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a href="mailto: jajawong09@gmail.com" className="bounce-effect">
            <img src={require("./data/assets/icons/mail-icon.png")} alt="Email" className="w-6 h-6" style={darkMode ? { filter: "invert(1) saturate(100%) brightness(300%)" } : {}} />
          </a>
          <a href={require("./data/assets/portfolio-jared-wong.pdf")} className="bounce-effect">
            <img src={require("./data/assets/icons/portfolio-icon.png")} alt="Email" className="w-6 h-6" />
          </a>
        </div>
        <div className="flex flex-col mt-10 ">
          <p className="font-bold underline">Tech stack</p>
          <div className="justify-center block mt-2">
            <div className="justify-center block max-w-screen-lg mt-2 overflow-x-auto overflow-y-hidden">
              <ul className="flex flex-row h-16 px-1 mt-2 space-x-4">
                <li className="relative">
                  <div className="flex items-center justify-center w-8 h-8 group">
                    <div>
                      <img src={ReactIcon} title="react-icon" alt="react-icon" className="w-8 h-8"></img>
                    </div>
                    <div className="absolute mt-[72px] opacity-0 text-sm font-medium text-gray-500 transition-opacity duration-150 group-hover:opacity-100">React</div>
                  </div>
                </li>
                <li className="relative">
                  <div className="flex items-center justify-center w-8 h-8 group">
                    <div>
                      <img src={FlutterIcon} title="flutter-icon" alt="flutter-icon" className="w-8 h-8"></img>
                    </div>
                    <div className="absolute mt-[72px] opacity-0 text-sm font-medium text-gray-500 transition-opacity duration-150 group-hover:opacity-100">Flutter</div>
                  </div>
                </li>
                <li className="relative">
                  <div className="flex items-center justify-center w-8 h-8 group">
                    <div>
                      <img src={TypescriptIcon} title="typescript-icon" alt="typescript-icon" className="w-8 h-8"></img>
                    </div>
                    <div className="absolute mt-[72px] opacity-0 text-sm font-medium text-gray-500 transition-opacity duration-150 group-hover:opacity-100">Typescript</div>
                  </div>
                </li>
                <li className="relative">
                  <div className="flex items-center justify-center w-8 h-8 group">
                    <div>
                      <img src={JavascriptIcon} title="js-icon" alt="js-icon" className="w-8 h-8"></img>
                    </div>
                    <div className="absolute mt-[72px] opacity-0 text-sm font-medium text-gray-500 transition-opacity duration-150 group-hover:opacity-100">Javascript</div>
                  </div>
                </li>
                <li className="relative">
                  <div className="flex items-center justify-center w-8 h-8 group">
                    <div>
                      <img src={FirebaseIcon} title="firebase-icon" alt="firebase-icon" className="w-8 h-8"></img>
                    </div>
                    <div className="absolute mt-[72px] opacity-0 text-sm font-medium text-gray-500 transition-opacity duration-150 group-hover:opacity-100">Firebase</div>
                  </div>
                </li>
                <li className="relative">
                  <div className="flex items-center justify-center w-8 h-8 group">
                    <div>
                      <img src={CSSIcon} title="css-icon" alt="css-icon" className="w-8 h-8"></img>
                    </div>
                    <div className="absolute mt-[72px] opacity-0 text-sm font-medium text-gray-500 transition-opacity duration-150 group-hover:opacity-100">CSS</div>
                  </div>
                </li>
                <li className="relative">
                  <div className="flex items-center justify-center w-8 h-8 group">
                    <div>
                      <img src={HTMLIcon} title="html-icon" alt="html-icon" className="w-8 h-8"></img>
                    </div>
                    <div className="absolute mt-[72px] opacity-0 text-sm font-medium text-gray-500 transition-opacity duration-150 group-hover:opacity-100">HTML</div>
                  </div>
                </li>
                <li className="relative">
                  <div className="flex items-center justify-center w-8 h-8 group">
                    <div>
                      <img src={PythonIcon} title="python-icon" alt="python-icon" className="w-8 h-8"></img>
                    </div>
                    <div className="absolute mt-[72px] opacity-0 text-sm font-medium text-gray-500 transition-opacity duration-150 group-hover:opacity-100">Python</div>
                  </div>
                </li>
                <li className="relative">
                  <div className="flex items-center justify-center w-8 h-8 group">
                    <div>
                      <img src={JavaIcon} title="java-icon" alt="java-icon" className="w-8 h-8"></img>
                    </div>
                    <div className="absolute mt-[72px] opacity-0 text-sm font-medium text-gray-500 transition-opacity duration-150 group-hover:opacity-100">Java</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className={`transition-all duration-500 box-border flex flex-col px-10 py-10 ${darkMode ? "bg-neutral-800 text-slate-100" : "bg-white text-black"}`}>
        <div className="flex items-center mb-6">
          <h1 className="pr-8 text-3xl font-bold"> 👦 About me</h1>
          <div className={`transition-all duration-500 mt-2 border-b-2 border-black grow ${darkMode ? "border-white" : "border-black"}`}></div>
        </div>
        <div className="leading-6">
          <p>I am a Year 2 Computer Science Student specialising in Software Engineering and Database Systems at the National University Of Singapore (NUS). I thrive on challenges and enjoy the process of transforming complex problems into solutions that can solve real-world problems and bring about substantial positive change. I have experience working on various projects, from web to mobile applications. My background in developing full-stack applications has equipped me with a versatile skill set, enabling me to contribute effectively to both front-end and back-end development. Constantly expanding my knowledge and skills, I am eager to explore new technologies and embark on greater heights.</p>
        </div>
      </section>
      <section className={`transition-all duration-500 flex flex-col px-10 py-10 ${darkMode ? "bg-neutral-900 text-slate-100" : "bg-white text-black"}`}>
        <div className="flex items-center mb-6 md:mb-12">
          <div className="flex items-center mt-6 mb-6">
            <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" alt="cat-typing" width="40"></img>
            <h1 className="pl-2 text-3xl font-extrabold">Experience</h1>
          </div>
          <div className={`transition-all duration-500 mt-2 ml-6 border-b-2 grow ${darkMode ? "border-white" : "border-black"}`}></div>
        </div>
        <div>
          <VerticalTimelineComponent data={experienceData} isDarkMode={darkMode} />
        </div>
      </section>
      <section className={`transition-all duration-500 flex flex-col px-10 py-10 ${darkMode ? "bg-neutral-800 text-slate-100" : "bg-white text-black"}`}>
        <div className="flex items-center mb-6 md:mb-12">
          <h1 className="pr-8 text-3xl font-bold">Projects</h1>
          <div className={`transition-all duration-500 mt-2 border-b-2 grow ${darkMode ? "border-white" : "border-black"}`}></div>
        </div>
        {projectData.map((item: ProjectItemData, key) => (
          <ProjectItem key={key} data={item} isDarkMode={darkMode} />
        ))}
      </section>
    </main>
  );
};

export default App;
