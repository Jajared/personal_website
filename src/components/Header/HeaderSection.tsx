import ProfileImage from "../../data/assets/profile-image.jpg";
import { useDarkModeContext } from "../../hooks/useDarkMode";
import { GithubIcon, LinkedinIcon } from "../DevIcons";
import InstagramIcon from "../../data/assets/icons/instagram-icon.png";
import EmailIcon from "../../data/assets/icons/mail-icon.png";
import PortfolioIcon from "../../data/assets/icons/portfolio-icon.png";
import Portfolio from "../../data/assets/portfolio-jared-wong.pdf";

const HeaderSection = () => {
  const { isDarkMode } = useDarkModeContext();
  return (
    <section className="box-border flex flex-col transition-all duration-500 slide-in-left">
      <div className="flex flex-col">
        <div className="w-40 h-40 overflow-hidden rounded-full">
          <img src={ProfileImage} alt="Profile" className="object-cover w-full h-full" />
        </div>
        <h1 className="mt-6 mb-6 text-5xl font-extrabold md:text-6xl">Hi! I am Jared! 👋</h1>
        <p className="">I am a Computer Science student and a passionate full-stack developer based in Singapore 📍🇸🇬 </p>
      </div>
      <div className="flex flex-row items-center mt-4 space-x-6">
        <a href="https://www.instagram.com/jajabonks/" className="bounce-effect">
          <img src={InstagramIcon} alt="Instagram" className="w-6 h-6" />
        </a>

        <a href="https://github.com/Jajared" className="group hover:animate-bounce">
          <GithubIcon inverted={isDarkMode} />
        </a>

        <a href="https://www.linkedin.com/in/jajabonks/" className="group hover:animate-bounce">
          <LinkedinIcon />
        </a>

        <a href="mailto: jajawong09@gmail.com" className="bounce-effect">
          <img src={EmailIcon} alt="Email" className="w-6 h-6" style={isDarkMode ? { filter: "invert(1) saturate(100%) brightness(300%)" } : {}} />
        </a>

        <a href={Portfolio} className="bounce-effect">
          <img src={PortfolioIcon} alt="Email" className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default HeaderSection;
