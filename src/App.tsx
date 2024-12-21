import React from "react";
import "./App.css";
import "./App.css";
import ProjectSection from "./components/Project/ProjectSection";
import ExperienceSection from "./components/Experience/ExperienceSection";
import AboutMeSection from "./components/About/AboutMeSection";
import HeaderSection from "./components/Header/HeaderSection";
import { DarkModeProvider, useDarkModeContext } from "./hooks/useDarkMode";
import SkillsSection from "./components/Skills/SkillsSection";

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
    <div className={`${isDarkMode ? "bg-neutral-900 text-slate-50" : "bg-white text-black"} min-h-screen`}>
      <main className="max-w-[1200px] px-12 space-y-12 mx-auto overflow-x-hidden">
        <div className="flex justify-end px-5 py-5 mb-4">
          <button onClick={toggleDarkMode} className={`rounded-full w-10 h-10 absolute right-4 top-4 ${isDarkMode ? "bg-white" : "bg-neutral-900"} text-center leading-10`}>
            {isDarkMode ? "🌙" : "☀️"}
          </button>
        </div>
        <HeaderSection />
        <AboutMeSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectSection />
      </main>
    </div>
  );
};

export default App;
