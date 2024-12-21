import { techStackData } from "../../data/techStackData";
import IconWithTooltip from "../IconWithTooltip";
import ProfileImage from "../../data/assets/profile-image.jpg";
import { useDarkModeContext } from "../../hooks/useDarkMode";

const HeaderSection = () => {
  const { isDarkMode } = useDarkModeContext();
  return (
    <section className={`transition-all duration-500 box-border flex flex-col px-10 py-10 slide-in ${isDarkMode ? "bg-neutral-900 text-slate-100" : "bg-white text-black"}`}>
      <div className="flex flex-col slide-in">
        <div className="w-40 h-40 overflow-hidden rounded-full">
          <img src={ProfileImage} alt="Profile" className="object-cover w-full h-full" />
        </div>
        <h1 className="mt-6 mb-6 text-6xl font-extrabold">Hi! I am Jared! 👋</h1>
        <p className="">I am a Computer Science student and a passionate full-stack developer based in Singapore 📍🇸🇬 </p>
      </div>
      <div className="flex flex-row items-center mt-4 space-x-6">
        <a href="https://www.instagram.com/jajabonks/" className="bounce-effect">
          <img src={require("../../data/assets/icons/instagram-icon.png")} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="https://github.com/Jajared" className="bounce-effect">
          <img src={require("../../data/assets/icons/github-icon.png")} alt="Github" className="w-6 h-6" style={isDarkMode ? { filter: "invert(1) saturate(100%) brightness(300%)" } : {}} />
        </a>
        <a href="https://www.linkedin.com/in/jared-wong-4a7a721a4/" className="bounce-effect">
          <img src={require("../../data/assets/icons/linkedin-icon.png")} alt="LinkedIn" className="w-6 h-6" />
        </a>
        <a href="mailto: jajawong09@gmail.com" className="bounce-effect">
          <img src={require("../../data/assets/icons/mail-icon.png")} alt="Email" className="w-6 h-6" style={isDarkMode ? { filter: "invert(1) saturate(100%) brightness(300%)" } : {}} />
        </a>
        <a href={require("../../data/assets/portfolio-jared-wong.pdf")} className="bounce-effect">
          <img src={require("../../data/assets/icons/portfolio-icon.png")} alt="Email" className="w-6 h-6" />
        </a>
      </div>
      <div className="flex flex-col mt-10 ">
        <p className="font-bold underline">Tech stack</p>
        <div className="justify-center block mt-2">
          <div className="justify-center block max-w-screen-lg mt-2 overflow-x-auto overflow-y-hidden">
            <ul className="flex flex-row h-16 px-1 mt-2 space-x-4">
              {techStackData.map((item, key) => (
                <li key={key} className="relative">
                  <IconWithTooltip Icon={item.Icon} text={item.name} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
