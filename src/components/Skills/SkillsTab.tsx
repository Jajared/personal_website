import { useDarkModeContext } from "../../hooks/useDarkMode";
import { SkillType, SkillTypes } from "../../utils/types";
import "./SkillsTab.css";

interface ISkillsTabProps {
  selectedTab: SkillType;
  setSelectedTab: (tab: SkillType) => void;
}

const SkillsTab = (props: ISkillsTabProps) => {
  const { isDarkMode } = useDarkModeContext();
  const { selectedTab, setSelectedTab } = props;

  return (
    <div className={`inline-flex items-center justify-start gap-4 mb-6 overflow-x-auto scrollbar-hide ${isDarkMode ? "text-slate-100" : "text-black"}`}>
      {SkillTypes.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelectedTab(tab as SkillType)}
          className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold ${selectedTab === tab ? (isDarkMode ? "bg-neutral-800 text-white w-32" : "bg-neutral-400 text-white w-32") : isDarkMode ? "bg-neutral-700 text-gray-300 hover:bg-neutral-600" : "bg-neutral-100 text-black hover:bg-gray-300"}`}
          style={{
            transition: "width 0.3s ease-in-out",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SkillsTab;
