import { useDarkModeContext } from "../../hooks/useDarkMode";
import { SkillsItemData } from "../../utils/types";

interface ISkillCardProps {
  data: SkillsItemData;
}

const SkillCard = ({ data }: ISkillCardProps) => {
  const { isDarkMode } = useDarkModeContext();
  const { Icon } = data;
  return (
    <div className={`py-4 flex flex-row space-x-2 items-center justify-center rounded-xl shadow-md  ${isDarkMode ? "bg-neutral-800 shadow-neutral-800" : "bg-white shadow-neutral-200"}`}>
      <Icon height={28} width={28} isDarkMode={isDarkMode} />
      <span className="font-medium">{data.name}</span>
    </div>
  );
};

export default SkillCard;
