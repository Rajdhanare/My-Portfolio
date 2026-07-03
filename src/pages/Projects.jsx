import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Designed and developed a personal portfolio using React and Tailwind CSS with responsive UI.",
      tags: ["React", "Tailwind"],
      github: "https://github.com/your-username/portfolio",
      live: "https://your-portfolio.vercel.app",
    },
    {
      title: "Swiggy Clone",
      desc: "Built a full-stack MERN Swiggy clone with authentication, cart system, and REST APIs.",
      tags: ["MongoDB", "Express", "React", "Node"],
      github: "https://github.com/your-username/swiggy-clone",
      live: "https://swiggy-clone.vercel.app",
    },
    {
      title: "MERN Stack Project",
      desc: "Developed full-stack application using React, Node.js, Express, and MongoDB.",
      tags: ["MongoDB", "Express", "React", "Node"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center font-mono text-[#8b949e] text-sm mb-2">
          03. Selected Work
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#e6edf3] mb-12">
          My <span className="text-[#ffa657]">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, index) => (
            <div
              key={index}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 flex flex-col hover:border-[#7ee787]/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <FaGithub className="text-2xl text-[#8b949e]" />
                <span className="text-xs font-mono px-2 py-1 rounded-full border border-[#30363d] text-[#8b949e]">
                  public
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#e6edf3] mb-2 font-mono">
                {item.title}
              </h3>

              <p className="text-[#8b949e] text-sm mb-4 flex-1">{item.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono px-2 py-1 rounded-full bg-[#0d1117] border border-[#30363d] text-[#7ee787]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={item.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-center px-4 py-2 bg-[#0d1117] border border-[#30363d] text-[#c9d1d9] text-sm rounded-lg hover:border-[#7ee787] hover:text-[#7ee787] transition"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={item.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 text-center px-4 py-2 bg-[#7ee787] text-[#0d1117] text-sm font-semibold rounded-lg hover:bg-[#a3f7bf] transition"
                >
                  <FaExternalLinkAlt size={12} /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
