import React from "react";
import "./App.css";
import "./App.css";
import ProjectSection from "./components/Project/ProjectSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import AboutMeSection from "./components/About/AboutMeSection";
import HeaderSection from "./components/Header/HeaderSection";
import { DarkModeProvider, useDarkModeContext } from "./hooks/useDarkMode";

const App: React.FC = () => {
  return (
    <DarkModeProvider>
      <Content />
    </DarkModeProvider>
  );
};

const Content: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkModeContext();

  return (
    <main className={`transition-all duration-500 mx-auto overflow-x-hidden ${isDarkMode ? "bg-neutral-900 text-slate-100" : "bg-white text-black"}`}>
      <div className="flex justify-end px-5 py-5 mb-4 ">
        <button onClick={toggleDarkMode} className={`rounded-full w-10 h-10 absolute right-4 top-4 ${isDarkMode ? "bg-white" : "bg-neutral-900"} text-center leading-10`}>
          {isDarkMode ? "🌙" : "☀️"}
        </button>
      </div>
      <HeaderSection />
      <AboutMeSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
};

export default App;
