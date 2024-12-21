import { useDarkModeContext } from "../../hooks/useDarkMode";

const AboutMeSection = () => {
  const { isDarkMode } = useDarkModeContext();
  return (
    <section className={`transition-all duration-500 box-border flex flex-col px-10 py-10 ${isDarkMode ? "bg-neutral-800 text-slate-100" : "bg-white text-black"}`}>
      <div className="flex items-center mb-6">
        <h1 className="pr-8 text-3xl font-bold"> 👦 About me</h1>
        <div className={`transition-all duration-500 mt-2 border-b-2 border-black grow ${isDarkMode ? "border-white" : "border-black"}`}></div>
      </div>
      <div className="leading-6">
        <p>I am a Year 3 Computer Science Student specialising in Software Engineering and Database Systems at the National University Of Singapore (NUS). I thrive on challenges and enjoy the process of transforming complex problems into solutions that can solve real-world problems and bring about substantial positive change. I have experience working on various projects, from web to mobile applications. My background in developing full-stack applications has equipped me with a versatile skill set, enabling me to contribute effectively to both front-end and back-end development. Constantly expanding my knowledge and skills, I am eager to explore new technologies and embark on greater heights.</p>
      </div>
    </section>
  );
};

export default AboutMeSection;
