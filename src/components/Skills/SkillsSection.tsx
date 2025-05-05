import { useState } from "react";
import { skillsData } from "../../data/skillsData";
import { useDarkModeContext } from "../../hooks/useDarkMode";
import { SkillType } from "../../utils/types";
import SkillCard from "./SkillCard";
import SkillsTab from "./SkillsTab";

const SkillsSection = () => {
  const { isDarkMode } = useDarkModeContext();

  const [selectedTab, setSelectedTab] = useState<SkillType>("Frontend");

  const data = skillsData.filter((item) => item.type === selectedTab);
  return (
    <section className={`transition-all duration-500 box-border flex flex-col slide-in-left`}>
      <div className="flex items-center mb-6">
        <h1 className="pr-8 text-2xl font-bold md:text-3xl"> 🧰 Skills</h1>
        <div className={`transition-all duration-500 mt-2 border-b-2 border-black grow ${isDarkMode ? "border-white" : "border-black"}`}></div>
      </div>
      <SkillsTab selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="md:h-[300px]">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {data.map((item, key) => (
            <SkillCard key={key} data={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
