import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "#ffa657" },
    { name: "CSS", icon: <FaCss3Alt />, color: "#79c0ff" },
    { name: "JavaScript", icon: <FaJs />, color: "#e3b341" },
    { name: "React", icon: <FaReact />, color: "#79c0ff" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#79c0ff" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#7ee787" },
    { name: "Express", icon: <SiExpress />, color: "#e6edf3" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#7ee787" },
    { name: "Git", icon: <FaGitAlt />, color: "#ffa657" },
    { name: "GitHub", icon: <FaGithub />, color: "#e6edf3" },
  ];

  return (
    <section className="py-20 bg-[#0d1117]">
      <p className="text-center font-mono text-[#8b949e] text-sm mb-2">
        02. Toolbox
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#e6edf3]">
        My <span className="text-[#79c0ff]">Skills</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-6xl mx-auto px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#161b22] border border-[#30363d] py-8 rounded-xl text-center hover:-translate-y-1 hover:border-[#7ee787]/60 transition-all duration-300 shadow-lg cursor-default"
          >
            <div
              className="text-4xl mb-3 flex justify-center"
              style={{ color: skill.color }}
            >
              {skill.icon}
            </div>
            <p className="font-mono text-sm text-[#c9d1d9]">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
