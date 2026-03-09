import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub} from "react-icons/fa";

import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

function Skills() {

  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> }
  ];

  return (
    <section className="py-20 bg-[#0f172a]">

      <h2 className="text-4xl font-bold text-center mb-12 text-white">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto px-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md border border-white/10 
            py-8 rounded-xl text-center hover:scale-110 hover:border-cyan-400 
            transition duration-300 shadow-lg cursor-pointer"
          >

            <div className="text-4xl mb-3 text-cyan-400 flex justify-center">
              {skill.icon}
            </div>

            <p className="font-semibold text-white">
              {skill.name}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;