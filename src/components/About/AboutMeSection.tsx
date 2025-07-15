import { useDarkModeContext } from "../../hooks/useDarkMode";

const AboutMeSection = () => {
  const { isDarkMode } = useDarkModeContext();
  return (
    <section className={`transition-all duration-500 box-border flex flex-col slide-in-right  ${isDarkMode ? "text-slate-100" : "text-black"}`}>
      <div className="flex items-center mb-6">
        <h1 className="pr-8 text-2xl font-bold md:text-3xl"> 👦 About me</h1>
        <div className={`transition-all duration-500 mt-2 border-b-2 border-black grow ${isDarkMode ? "border-white" : "border-black"}`} />
      </div>
      <div>
        <p>I am a final year Computer Science student at the National University of Singapore (NUS), specializing in Software Engineering and Database Systems.</p>
        <br />
        <p>Passionate about tackling challenges, I enjoy crafting innovative solutions to real-world problems and driving meaningful change.</p>
        <br />
        <p>With hands-on experience in full-stack web development, I possess a versatile skill set and a drive to explore cutting-edge technologies and push boundaries.</p>
      </div>
    </section>
  );
};

export default AboutMeSection;
